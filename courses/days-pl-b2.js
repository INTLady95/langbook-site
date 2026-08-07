/* Polish B2 — 30 days. Data only: the shared renderer lives in engine.js.
   en/themeEn/say = POLISH (target language), ru = Russian explanations. */
const DAYS = {
"1": {
 "day":1,"week":"01",
 "themeRu":"Чтение и ожидание",
 "themeEn":"Czytanie, czekanie, spotkanie",
 "intro":"Конверт из экзаменационной комиссии пролежал на столе весь день — Анна не решалась открыть. Вечером всё-таки открыла: <b>zdała</b>. B1 позади. И первое, что делает польский на новом уровне, — перестаёт продавать слова поштучно. Сегодня из любого глагола вырастает существительное: <b>czytać → czytanie</b>, <b>spotkać → spotkanie</b>, <b>wyjść → wyjście</b>. Ровно как русские «чтение», «мытьё», «занятие».",
 "introAudio":"Конверт из экзаменационной комиссии пролежал на столе весь день — Анна не решалась открыть. Вечером всё-таки открыла: zdała. B1 позади. И первое, что делает польский на новом уровне, — перестаёт продавать слова поштучно. Сегодня из любого глагола вырастает существительное: czytać даёт czytanie, spotkać даёт spotkanie, wyjść даёт wyjście. Ровно как русские «чтение», «мытьё», «занятие».",
 "goals":[
   "Делать из глагола существительное: <b>-anie</b>, <b>-enie</b>, <b>-cie</b>",
   "Сохранять вид: <b>czytanie</b> (занятие) и <b>przeczytanie</b> (факт)",
   "Ставить их в обороты: <b>po przeczytaniu</b>, <b>przed wyjściem</b>, <b>podczas czekania</b>",
   "Узнавать старых знакомых: <b>mieszkanie</b>, <b>jedzenie</b>, <b>zdjęcie</b>"
 ],
 "learned":[
   "Сделал(а) из глагола существительное: -anie, -enie, -cie",
   "Сохранил(а) вид: czytanie (занятие) и przeczytanie (факт)",
   "Поставил(а) их в обороты: po przeczytaniu, przed wyjściem, podczas czekania",
   "Узнал(а) старых знакомых: mieszkanie, jedzenie, zdjęcie"
 ],
 "review":{
   "intro":"Начнём с того, чем закончился B1: приставки, żeby, страдательный залог. Всё это остаётся с тобой на весь уровень — проверим, что оно на месте.",
   "introAudio":"Начнём с того, чем закончился уровень B1: приставки, żeby, страдательный залог. Всё это остаётся с тобой на весь уровень — проверим, что оно на месте.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> речь о сообщении, а не о бумаге.",
      "q":"«Он ответил мне через час» —","opts":["Opisał mi po godzinie","Odpisał mi po godzinie","Przepisał mi po godzinie"],"answer":1,
      "explain":"Ответить письменно — <b>odpisać</b>. Opisać значит «описать», przepisać — «переписать»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, что стоит после żeby.",
      "q":"«Я хочу, чтобы ты пришёл» —","opts":["Chcę, żebyś przyszedł","Chcę, żeby przyjdziesz","Chcę, że przyjdziesz"],"answer":0,
      "explain":"После żeby — форма на -ł с личным окончанием: <b>żebyś przyszedł</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> разовое событие с результатом или длительный процесс?",
      "q":"«Дом был построен в прошлом году» —","opts":["Dom był budowany w zeszłym roku","Dom został zbudowany w zeszłym roku","Dom jest budowany w zeszłym roku"],"answer":1,
      "explain":"Разовое событие с результатом — <b>został zbudowany</b>. Był budowany значило бы «строился», о процессе."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Мы приехали вчера и доехали без проблем»</b>","answer":"Przyjechaliśmy wczoraj i dojechaliśmy bez problemów"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Правило 1 · Подарок уровня",
   "title":"<em>czytać → czytanie</em>",
   "paras":[
     "Русский умеет это давно: читать — чтение, мыть — мытьё, занять — занятие, взять — взятие. Польский умеет то же самое, только делает это гораздо чаще и почти без исключений: существительное можно построить практически от любого глагола, и поляки этим пользуются каждый день.",
     "Хвост выбирается по инфинитиву, и хвостов всего три. Глаголы на <b>-ać</b> дают <b>-anie</b>: czytać → <b>czytanie</b>, czekać → <b>czekanie</b>, spotkać → <b>spotkanie</b>, mieszkać → <b>mieszkanie</b>, sprzątać → <b>sprzątanie</b>. Глаголы на <b>-ić</b>, <b>-yć</b>, <b>-eć</b> дают <b>-enie</b>: mówić → <b>mówienie</b>, robić → <b>robienie</b>, uczyć → <b>uczenie</b>, myśleć → <b>myślenie</b>.",
     "У группы на -enie основа берётся не от инфинитива, а от страдательного причастия, которое ты собирал(а) на B1: zaproszony → <b>zaproszenie</b>, tłumaczony → <b>tłumaczenie</b>, noszony → <b>noszenie</b>, proszony → <b>proszenie</b>, zrobiony → <b>zrobienie</b>. Помнишь причастие — существительное собирается само.",
     "Третий хвост, <b>-cie</b>, живёт у глаголов, где перед -ć стоит гласная: myć → <b>mycie</b>, pić → <b>picie</b>, żyć → <b>życie</b>, czuć → <b>czucie</b>. Сюда же идут глаголы на -ąć, и нос у них меняется на ę: wziąć → <b>wzięcie</b>, zająć → <b>zajęcie</b>, przyjąć → <b>przyjęcie</b>, zamknąć → <b>zamknięcie</b>. И вся семья iść: wyjść → <b>wyjście</b>, wejść → <b>wejście</b>, przyjść → <b>przyjście</b>."
   ],
   "audio":"Русский умеет это давно: читать — чтение, мыть — мытьё, занять — занятие, взять — взятие. Польский умеет то же самое, только делает это гораздо чаще и почти без исключений: существительное можно построить практически от любого глагола, и поляки этим пользуются каждый день. Хвост выбирается по инфинитиву, и хвостов всего три. Глаголы на -ać дают -anie: czytać даёт czytanie, czekać даёт czekanie, spotkać даёт spotkanie, mieszkać даёт mieszkanie. Глаголы на -ić, -yć, -eć дают -enie: mówić даёт mówienie, robić даёт robienie, uczyć даёт uczenie, myśleć даёт myślenie. У группы на -enie основа берётся не от инфинитива, а от страдательного причастия с уровня B1: zaproszony даёт zaproszenie, tłumaczony даёт tłumaczenie, noszony даёт noszenie, zrobiony даёт zrobienie. Помнишь причастие — существительное собирается само. Третий хвост, -cie, живёт у глаголов, где перед ć стоит гласная: myć даёт mycie, pić даёт picie, żyć даёт życie. Сюда же идут глаголы на -ąć, и нос у них меняется на ę: wziąć даёт wzięcie, zająć даёт zajęcie, przyjąć даёт przyjęcie, zamknąć даёт zamknięcie. И вся семья iść: wyjść даёт wyjście, wejść даёт wejście, przyjść даёт przyjście.",
   "table":{"rows":[
     ["czytać → <b>czytanie</b> · czekać → <b>czekanie</b> <button class=\"play\" data-say=\"czytanie, czekanie\">🔊</button>","-ać даёт -anie"],
     ["mówić → <b>mówienie</b> · robić → <b>robienie</b> <button class=\"play\" data-say=\"mówienie, robienie\">🔊</button>","-ić, -yć, -eć дают -enie"],
     ["zaprosić → <b>zaproszenie</b> · tłumaczyć → <b>tłumaczenie</b> <button class=\"play\" data-say=\"zaproszenie, tłumaczenie\">🔊</button>","основа как у причастия: zaproszony"],
     ["myć → <b>mycie</b> · pić → <b>picie</b> · żyć → <b>życie</b> <button class=\"play\" data-say=\"mycie, picie, życie\">🔊</button>","гласная плюс -ć даёт -cie"],
     ["wziąć → <b>wzięcie</b> · zająć → <b>zajęcie</b> <button class=\"play\" data-say=\"wzięcie, zajęcie\">🔊</button>","у -ąć нос меняется на ę"],
     ["⚠️ otworzyć → <b>otwarcie</b> <button class=\"play\" data-say=\"otwarcie wystawy\">🔊</button>","открытие — форму надо знать в лицо"]
   ],"star":5},
   "examples":[
     {"ru":"Чтение по вечерам — мой отдых.","en":"<b>Czytanie</b> wieczorami to mój odpoczynek.","say":"Czytanie wieczorami to mój odpoczynek."},
     {"ru":"Ожидание оказалось хуже самого экзамена.","en":"<b>Czekanie</b> okazało się gorsze niż sam egzamin.","say":"Czekanie okazało się gorsze niż sam egzamin."},
     {"ru":"Спасибо за приглашение.","en":"Dziękuję za <b>zaproszenie</b>.","say":"Dziękuję za zaproszenie."},
     {"ru":"Мытьё окон я оставлю на субботу.","en":"<b>Mycie</b> okien zostawię na sobotę.","say":"Mycie okien zostawię na sobotę."},
     {"ru":"Открытие выставки в пятницу.","en":"<b>Otwarcie</b> wystawy w piątek.","say":"Otwarcie wystawy w piątek."}
   ],
   "mistakes":[
     {"wrong":"Nie lubię myjenia okien.","right":"Nie lubię <b>mycia</b> okien.","why":"у myć перед -ć стоит гласная, поэтому хвост -cie: mycie, mycia."},
     {"wrong":"otworzenie wystawy","right":"<b>otwarcie</b> wystawy","why":"от otworzyć существительное неправильное — otwarcie. Формы «otworzenie» в языке нет."}
   ],
   "mnemonic":"🏭 -ać → -anie · -ić, -yć, -eć → -enie · гласная + -ć → -cie. Три хвоста на все глаголы.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри на инфинитив и выбери хвост.",
      "q":"«Ожидание» от <b>czekać</b> —","opts":["czekenie","czekanie","czekacie"],"answer":1,
      "explain":"Инфинитив на -ać, значит хвост -anie: <b>czekanie</b>. Czekacie — это «вы ждёте»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни причастие zaproszony.",
      "q":"«Приглашение» —","opts":["zaprosienie","zaproszenie","zapraszenie"],"answer":1,
      "explain":"Основа как у причастия zaproszony: <b>zaproszenie</b>."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«Спасибо за приглашение»","accept":["dziękuję za zaproszenie","dziekuje za zaproszenie"],"placeholder":"Dziękuję…"}
   ]
  },
  {
   "eyebrow":"Правило 2 · Вид никуда не делся",
   "title":"<em>czytanie</em> и <em>przeczytanie</em>",
   "paras":[
     "Существительное наследует вид глагола, и это работает как обычная пара. От czytać — <b>czytanie</b> (само занятие), от przeczytać — <b>przeczytanie</b> (факт, что дочитано). Так же: robienie / zrobienie, pisanie / napisanie, sprzątanie / posprzątanie, mycie / umycie.",
     "Разница видна по месту в предложении. <b>Lubię czytanie</b> — люблю читать вообще. <b>Po przeczytaniu listu usiadła</b> — после того как дочитала письмо. Несовершенное существительное описывает занятие, совершенное почти всегда стоит в обороте про момент. Русский тут беднее: у нас одно «чтение» на оба случая, и разницу приходится договаривать словами.",
     "Склоняются они как <b>okno</b> — средний род, все окончания знакомые: czytanie, czytania, czytaniu, czytanie, czytaniem, czytaniu. Множественное: spotkania, spotkań, spotkaniom, spotkania, spotkaniami, spotkaniach. Родительный множественного всегда короткий, на -ń: <b>spotkań</b>, <b>mieszkań</b>, <b>szkoleń</b>, <b>ćwiczeń</b>.",
     "И честное предупреждение: далеко не каждому такому существительному есть русский двойник на -ние. Часто по-русски естественнее целое придаточное: <b>Po przyjściu do domu zadzwoniłam</b> — «когда пришла домой, позвонила». Польский любит короткое существительное там, где русский разворачивает предложение. Это не украшение стиля, а обычная норма."
   ],
   "audio":"Существительное наследует вид глагола, и это работает как обычная пара. От czytać получается czytanie, само занятие; от przeczytać получается przeczytanie, факт, что дочитано. Так же: robienie и zrobienie, pisanie и napisanie, sprzątanie и posprzątanie, mycie и umycie. Разница видна по месту в предложении. Lubię czytanie — люблю читать вообще. Po przeczytaniu listu usiadła — после того как дочитала письмо. Несовершенное существительное описывает занятие, совершенное почти всегда стоит в обороте про момент. Русский тут беднее: у нас одно «чтение» на оба случая, и разницу приходится договаривать словами. Склоняются они как okno, средний род: czytanie, czytania, czytaniu, czytaniem. Множественное: spotkania, spotkań, spotkaniom, spotkaniami, spotkaniach. Родительный множественного всегда короткий, на ń: spotkań, mieszkań, szkoleń, ćwiczeń. И честное предупреждение: далеко не каждому такому существительному есть русский двойник на -ние. Часто по-русски естественнее целое придаточное: po przyjściu do domu zadzwoniłam — когда пришла домой, позвонила. Польский любит короткое существительное там, где русский разворачивает предложение. Это не украшение стиля, а обычная норма.",
   "table":{"rows":[
     ["<b>czytanie</b> · <b>przeczytanie</b> <button class=\"play\" data-say=\"czytanie, przeczytanie\">🔊</button>","чтение как занятие · факт, что дочитано"],
     ["<b>robienie</b> · <b>zrobienie</b> <button class=\"play\" data-say=\"robienie, zrobienie\">🔊</button>","делание · то, что сделано"],
     ["czytanie · czytania · czytaniu · czytaniem <button class=\"play\" data-say=\"czytanie, czytania, czytaniu, czytaniem\">🔊</button>","склоняется как okno"],
     ["spotkanie → <b>spotkań</b> · szkolenie → <b>szkoleń</b> <button class=\"play\" data-say=\"pięć spotkań, kilka szkoleń\">🔊</button>","родительный мн. короткий, на -ń"],
     ["Po <b>przyjściu</b> do domu zadzwoniłam. <button class=\"play\" data-say=\"Po przyjściu do domu zadzwoniłam\">🔊</button>","«Когда пришла домой, позвонила»"]
   ],"star":3},
   "examples":[
     {"ru":"Я люблю чтение перед сном.","en":"Lubię <b>czytanie</b> przed snem.","say":"Lubię czytanie przed snem."},
     {"ru":"После прочтения письма она долго молчала.","en":"Po <b>przeczytaniu</b> listu długo milczała.","say":"Po przeczytaniu listu długo milczała."},
     {"ru":"На этой неделе у нас три встречи.","en":"W tym tygodniu mamy trzy <b>spotkania</b>.","say":"W tym tygodniu mamy trzy spotkania."},
     {"ru":"Мы не любим длинных собраний.","en":"Nie lubimy długich <b>zebrań</b>.","say":"Nie lubimy długich zebrań."}
   ],
   "mistakes":[
     {"wrong":"Po przeczytanie listu…","right":"Po <b>przeczytaniu</b> listu…","why":"после po существительное стоит в предложном падеже: przeczytaniu, wyjściu, spotkaniu."},
     {"wrong":"pięć spotkaniów","right":"pięć <b>spotkań</b>","why":"родительный множественного у этих слов короткий, на -ń: spotkań, mieszkań, szkoleń."}
   ],
   "mnemonic":"🔁 czytanie — занятие · przeczytanie — факт. Вид глагола переезжает в существительное целиком.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> речь о занятии вообще.",
      "q":"«Я люблю готовить» одним существительным —","opts":["Lubię gotowanie","Lubię ugotowanie","Lubię gotowania"],"answer":0,
      "explain":"Занятие вообще — несовершенное <b>gotowanie</b>. Ugotowanie значило бы «факт, что блюдо приготовлено»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни короткий родительный множественного.",
      "q":"«Пять встреч» —","opts":["pięć spotkań","pięć spotkaniów","pięć spotkania"],"answer":0,
      "explain":"Родительный множественного на -ń: <b>spotkań</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«После прочтения письма она позвонила Мареку»</b>","answer":"Po przeczytaniu listu zadzwoniła do Marka"}
   ]
  },
  {
   "eyebrow":"Правило 3 · Четыре оборота",
   "title":"<em>po</em>, <em>przed</em>, <em>podczas</em>, <em>do</em>",
   "paras":[
     "Главная работа этих существительных — стоять после предлога и заменять собой целое придаточное предложение. Четыре оборота закрывают почти всё, и каждый требует своего падежа.",
     "<b>po</b> плюс предложный — «после того как»: <b>po przeczytaniu</b>, <b>po spotkaniu</b>, <b>po wyjściu</b>, <b>po zdaniu egzaminu</b>, <b>po szkoleniu</b>. <b>przed</b> плюс творительный — «перед тем как»: <b>przed wyjściem</b>, <b>przed spotkaniem</b>, <b>przed snem</b>, <b>przed zaśnięciem</b>.",
     "<b>podczas</b> плюс родительный — «во время»: <b>podczas czekania</b>, <b>podczas spotkania</b>, <b>podczas rozmowy</b>. Рядом живут <b>w czasie</b> и <b>w trakcie</b> — тоже с родительным и почти с тем же смыслом, только чуть книжнее.",
     "<b>do</b> плюс родительный — «чтобы» и «что нужно сделать»: <b>coś do jedzenia</b> (что-нибудь поесть), <b>coś do picia</b>, <b>mam dużo do zrobienia</b> (у меня много дел), <b>lista rzeczy do zrobienia</b>, <b>nic do stracenia</b> (нечего терять). Пятый оборот, попроще: <b>bez</b> плюс родительный — <b>bez zastanowienia</b> («не задумываясь»)."
   ],
   "audio":"Главная работа этих существительных — стоять после предлога и заменять собой целое придаточное предложение. Четыре оборота закрывают почти всё, и каждый требует своего падежа. Po плюс предложный — после того как: po przeczytaniu, po spotkaniu, po wyjściu, po zdaniu egzaminu, po szkoleniu. Przed плюс творительный — перед тем как: przed wyjściem, przed spotkaniem, przed snem, przed zaśnięciem. Podczas плюс родительный — во время: podczas czekania, podczas spotkania, podczas rozmowy. Рядом живут w czasie и w trakcie, тоже с родительным и почти с тем же смыслом, только чуть книжнее. Do плюс родительный — чтобы и что нужно сделать: coś do jedzenia, что-нибудь поесть; coś do picia; mam dużo do zrobienia, у меня много дел; lista rzeczy do zrobienia; nic do stracenia, нечего терять. Пятый оборот, попроще: bez плюс родительный — bez zastanowienia, не задумываясь.",
   "table":{"rows":[
     ["<b>po</b> + предл. · po przeczytaniu, po spotkaniu <button class=\"play\" data-say=\"po przeczytaniu, po spotkaniu\">🔊</button>","после того как"],
     ["<b>przed</b> + твор. · przed wyjściem, przed snem <button class=\"play\" data-say=\"przed wyjściem, przed snem\">🔊</button>","перед тем как"],
     ["<b>podczas</b> + род. · podczas czekania <button class=\"play\" data-say=\"podczas czekania\">🔊</button>","во время"],
     ["<b>do</b> + род. · coś do jedzenia, do zrobienia <button class=\"play\" data-say=\"coś do jedzenia, dużo do zrobienia\">🔊</button>","поесть · сделать"],
     ["<b>bez</b> + род. · bez zastanowienia <button class=\"play\" data-say=\"bez zastanowienia\">🔊</button>","не задумываясь"],
     ["Mam dziś dużo <b>do zrobienia</b>. <button class=\"play\" data-say=\"Mam dziś dużo do zrobienia\">🔊</button>","У меня сегодня много дел."]
   ],"star":3},
   "examples":[
     {"ru":"Перед выходом выключи свет.","en":"<b>Przed wyjściem</b> zgaś światło.","say":"Przed wyjściem zgaś światło."},
     {"ru":"После сдачи экзамена мы пошли в кафе.","en":"<b>Po zdaniu egzaminu</b> poszliśmy do kawiarni.","say":"Po zdaniu egzaminu poszliśmy do kawiarni."},
     {"ru":"Во время ожидания я не могла есть.","en":"<b>Podczas czekania</b> nie mogłam jeść.","gloss":"мужчина скажет: nie mogłem","say":"Podczas czekania nie mogłam jeść."},
     {"ru":"Есть что-нибудь поесть?","en":"Jest coś <b>do jedzenia</b>?","say":"Jest coś do jedzenia?"},
     {"ru":"Он согласился не задумываясь.","en":"Zgodził się <b>bez zastanowienia</b>.","say":"Zgodził się bez zastanowienia."}
   ],
   "mistakes":[
     {"wrong":"Podczas spotkaniu…","right":"<b>Podczas spotkania</b>…","why":"podczas требует родительного падежа: spotkania, czekania, rozmowy."},
     {"wrong":"Przed wyjścia zgaś światło.","right":"<b>Przed wyjściem</b> zgaś światło.","why":"przed берёт творительный: wyjściem, spotkaniem, snem."}
   ],
   "mnemonic":"🧭 po + предл. · przed + твор. · podczas + род. · do + род. Четыре предлога — четыре падежа.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> какой падеж просит przed?",
      "q":"«Перед выходом» —","opts":["Przed wyjścia","Przed wyjściem","Przed wyjściu"],"answer":1,
      "explain":"przed берёт творительный падеж: <b>przed wyjściem</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> какой падеж просит podczas?",
      "q":"«Во время встречи» —","opts":["Podczas spotkania","Podczas spotkaniu","Podczas spotkaniem"],"answer":0,
      "explain":"podczas берёт родительный: <b>podczas spotkania</b>."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«У меня много дел»","accept":["mam dużo do zrobienia","mam duzo do zrobienia"],"placeholder":"Mam dużo…"}
   ]
  },
  {
   "eyebrow":"Правило 4 · Ты их уже знаешь",
   "title":"<em>mieszkanie</em>, <em>jedzenie</em>, <em>zdjęcie</em>",
   "paras":[
     "Половину этих существительных ты используешь с A1 и просто не знал(а), откуда они взялись. mieszkać → <b>mieszkanie</b> (квартира), jeść → <b>jedzenie</b> (еда), ubrać → <b>ubranie</b> (одежда), zdjąć → <b>zdjęcie</b> (фотография), spotkać → <b>spotkanie</b> (встреча), żyć → <b>życie</b> (жизнь), wejść и wyjść → <b>wejście</b> и <b>wyjście</b> (вход и выход).",
     "У части из них смысл ушёл от процесса к вещи или месту — то же самое случилось и в русском, где «печенье» давно перестало быть процессом печения. Держи их как обычные слова: <b>mieszkanie</b> — не «проживание», а квартира; <b>zdjęcie</b> — не «снятие», а фотография; <b>jedzenie</b> — то, что лежит в холодильнике; <b>siedzenie</b> — сиденье в машине.",
     "Рабочая тройка, которая понадобится уже в понедельник: <b>spotkanie</b> (встреча), <b>zebranie</b> (собрание, планёрка), <b>szkolenie</b> (обучение, тренинг). Рядом с ними живут <b>wynagrodzenie</b> (зарплата по документам), <b>doświadczenie</b> (опыт), <b>ogłoszenie</b> (объявление), <b>opóźnienie</b> (задержка).",
     "И два выражения, которые ты говоришь каждый день, не подозревая, что это тот же механизм: <b>Do widzenia</b> — буквально «до видения», от widzieć, и <b>Do zobaczenia</b> — «до увидения», от zobaczyć. Тот самый оборот do плюс родительный, что и в <b>do zrobienia</b>."
   ],
   "audio":"Половину этих существительных ты используешь с уровня A1 и просто не знаешь, откуда они взялись. Mieszkać даёт mieszkanie, квартира; jeść даёт jedzenie, еда; ubrać даёт ubranie, одежда; zdjąć даёт zdjęcie, фотография; spotkać даёт spotkanie, встреча; żyć даёт życie, жизнь; wejść и wyjść дают wejście и wyjście, вход и выход. У части из них смысл ушёл от процесса к вещи или месту — то же самое случилось и в русском, где «печенье» давно перестало быть процессом. Держи их как обычные слова: mieszkanie — не проживание, а квартира; zdjęcie — не снятие, а фотография; jedzenie — то, что лежит в холодильнике; siedzenie — сиденье в машине. Рабочая тройка, которая понадобится уже в понедельник: spotkanie, встреча; zebranie, собрание, планёрка; szkolenie, обучение, тренинг. Рядом с ними живут wynagrodzenie, зарплата по документам; doświadczenie, опыт; ogłoszenie, объявление; opóźnienie, задержка. И два выражения, которые звучат каждый день, а устроены точно так же: do widzenia, буквально до видения, от widzieć, и do zobaczenia, до увидения, от zobaczyć. Тот самый оборот do плюс родительный, что и в do zrobienia.",
   "table":{"rows":[
     ["<b>mieszkanie</b> · <b>jedzenie</b> · <b>ubranie</b> <button class=\"play\" data-say=\"mieszkanie, jedzenie, ubranie\">🔊</button>","квартира · еда · одежда"],
     ["<b>zdjęcie</b> · <b>życie</b> · <b>siedzenie</b> <button class=\"play\" data-say=\"zdjęcie, życie, siedzenie\">🔊</button>","фотография · жизнь · сиденье"],
     ["<b>spotkanie</b> · <b>zebranie</b> · <b>szkolenie</b> <button class=\"play\" data-say=\"spotkanie, zebranie, szkolenie\">🔊</button>","встреча · собрание · тренинг"],
     ["<b>wynagrodzenie</b> · <b>doświadczenie</b> <button class=\"play\" data-say=\"wynagrodzenie, doświadczenie\">🔊</button>","зарплата · опыт"],
     ["<b>Do widzenia!</b> · <b>Do zobaczenia!</b> <button class=\"play\" data-say=\"Do widzenia! Do zobaczenia!\">🔊</button>","До свидания! · До встречи!"]
   ],"star":4},
   "examples":[
     {"ru":"У них маленькая квартира в центре.","en":"Mają małe <b>mieszkanie</b> w centrum.","say":"Mają małe mieszkanie w centrum."},
     {"ru":"Я сделал тебе фотографию у окна.","en":"Zrobiłem ci <b>zdjęcie</b> przy oknie.","say":"Zrobiłem ci zdjęcie przy oknie."},
     {"ru":"В понедельник у меня тренинг, во вторник собрание.","en":"W poniedziałek mam <b>szkolenie</b>, we wtorek <b>zebranie</b>.","say":"W poniedziałek mam szkolenie, we wtorek zebranie."},
     {"ru":"Опыт важнее диплома.","en":"<b>Doświadczenie</b> jest ważniejsze niż dyplom.","say":"Doświadczenie jest ważniejsze niż dyplom."}
   ],
   "mistakes":[
     {"wrong":"Zrobiłem ci zdejmowanie.","right":"Zrobiłem ci <b>zdjęcie</b>.","why":"фотография — zdjęcie. Zdejmowanie значило бы сам процесс снимания чего-то с чего-то."},
     {"wrong":"Do widzenie!","right":"<b>Do widzenia!</b>","why":"после do идёт родительный падеж: widzenia, zobaczenia, zrobienia."}
   ],
   "mnemonic":"💡 mieszkanie, jedzenie, zdjęcie, życie — старые знакомые с новым паспортом.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, что написано у тебя на двери.",
      "q":"Что значит <b>mieszkanie</b>?","opts":["проживание","квартира","переезд"],"answer":1,
      "explain":"<b>mieszkanie</b> — квартира; смысл давно ушёл от процесса к месту."},
     {"type":"choice","howto":"<b>Что делать:</b> выбери слово про обучение.",
      "q":"«В понедельник у нас тренинг» —","opts":["W poniedziałek mamy zebranie","W poniedziałek mamy szkolenie","W poniedziałek mamy ogłoszenie"],"answer":1,
      "explain":"Обучение, тренинг — <b>szkolenie</b>. Zebranie — собрание, ogłoszenie — объявление."},
     {"type":"speak","howto":"Нажми микрофон и скажи вслух — фраза на каждое утро.",
      "target":"Przed wyjściem sprawdzam listę rzeczy do zrobienia.","sub":"перед выходом проверяю список дел","want":"Przed wyjściem sprawdzam listę rzeczy do zrobienia."}
   ]
  }
 ],
 "dialogue":{
   "intro":"Вторник, вечер, кухня в квартире Марека. На столе лежит конверт, который пролежал там весь день. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Koperta leży na stole od rana. Otworzysz ją w końcu?","ru":"Конверт лежит на столе с утра. Ты откроешь его наконец?",
      "words":[["Koperta","конверт"],["w końcu","наконец"]]},
     {"who":"A","name":"Anna","side":"left","en":"Podczas czekania było mi łatwiej. Teraz się boję.","ru":"Пока ждала, было легче. Теперь боюсь.",
      "words":[["Podczas czekania","во время ожидания"],["się boję","боюсь"]]},
     {"who":"M","name":"Marek","side":"right","en":"Otwieranie kopert to nie egzamin. Dawaj.","ru":"Открывание конвертов — это не экзамен. Давай.",
      "words":[["Otwieranie","открывание"],["Dawaj","давай"]]},
     {"who":"A","name":"Anna","side":"left","en":"Zdałam. Naprawdę zdałam.","ru":"Сдала. Правда сдала.",
      "words":[["Zdałam","я сдала"],["Naprawdę","правда, действительно"]]},
     {"who":"M","name":"Marek","side":"right","en":"Wiedziałem. Po zdaniu egzaminu należy się porządna kolacja.","ru":"Я знал. После сдачи экзамена полагается нормальный ужин.",
      "words":[["Po zdaniu","после сдачи"],["należy się","полагается"]]},
     {"who":"A","name":"Anna","side":"left","en":"Najpierw mam listę rzeczy do zrobienia. Trzy telefony.","ru":"Сначала у меня список дел. Три звонка.",
      "words":[["do zrobienia","дел, которые надо сделать"],["telefony","звонки"]]},
     {"who":"M","name":"Marek","side":"right","en":"Przed wyjściem zadzwoń do Kasi. Pytała o ciebie wczoraj.","ru":"Перед выходом позвони Касе. Она вчера про тебя спрашивала.",
      "words":[["Przed wyjściem","перед выходом"],["Pytała","спрашивала"]]},
     {"who":"A","name":"Anna","side":"left","en":"I do wydawnictwa. Mam tam spotkanie w poniedziałek.","ru":"И в издательство. У меня там встреча в понедельник.",
      "words":[["wydawnictwa","издательства"],["spotkanie","встреча"]]},
     {"who":"M","name":"Marek","side":"right","en":"Spotkanie w wydawnictwie? I mówisz mi o tym dopiero teraz?","ru":"Встреча в издательстве? И ты говоришь мне об этом только сейчас?",
      "words":[["w wydawnictwie","в издательстве"],["dopiero teraz","только сейчас"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — про то, как ожидание становится занятием. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Co robisz?","ru":"Что делаешь?"},
     {"who":"B","en":"Nic. Czekanie to też zajęcie.","ru":"Ничего. Ожидание — тоже занятие."},
     {"who":"A","en":"Masz coś do zrobienia?","ru":"У тебя есть дела?"},
     {"who":"B","en":"Mam. Ale dopiero po kawie.","ru":"Есть. Но только после кофе."},
     {"who":"A","en":"Czyli przed wieczorem nic.","ru":"То есть до вечера ничего."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — новый механизм и то, что вокруг конверта.",
   "items":[
     {"en":"czytanie","ru":"чтение","ex":"Czytanie przed snem to mój odpoczynek."},
     {"en":"czekanie","ru":"ожидание","ex":"Czekanie było gorsze niż egzamin."},
     {"en":"spotkanie","ru":"встреча","ex":"Mam spotkanie w poniedziałek."},
     {"en":"wyjście / wejście","ru":"выход / вход","ex":"Przed wyjściem zgaś światło."},
     {"en":"zaproszenie","ru":"приглашение","ex":"Dziękuję za zaproszenie."},
     {"en":"mycie","ru":"мытьё","ex":"Mycie okien zostawię na sobotę."},
     {"en":"zdjęcie","ru":"фотография","ex":"Zrobiłem ci zdjęcie przy oknie."},
     {"en":"otwarcie","ru":"открытие","ex":"Otwarcie wystawy w piątek."},
     {"en":"do zrobienia","ru":"дела, которые надо сделать","ex":"Mam dziś dużo do zrobienia."},
     {"en":"podczas","ru":"во время (плюс родительный)","ex":"Podczas spotkania nie patrz w telefon."},
     {"en":"wynik","ru":"результат","ex":"Wynik przyszedł w kopercie."},
     {"en":"wydawnictwo","ru":"издательство","ex":"Mam spotkanie w wydawnictwie."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское существительное к русскому. Все четыре сделаны из глагола.",
   "pairs":[["czytanie","чтение"],["czekanie","ожидание"],["wyjście","выход"],["zaproszenie","приглашение"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как прошёл вторник. Отглагольные существительные тут почти в каждом предложении.",
   "title":"Koperta",
   "sentences":["Koperta z wynikiem egzaminu przyszła we wtorek rano.","Leżała na stole do wieczora, bo bałam się ją otworzyć.","Czekanie okazało się gorsze niż sam egzamin.","Po otwarciu koperty przeczytałam jedno słowo: zdała.","Marek powiedział, że wiedział to od początku.","Po zdaniu egzaminu zrobiliśmy sobie wolny wieczór.","Przed wyjściem z domu zadzwoniłam do Kasi.","Podczas rozmowy z nią zapomniałam o całym zmęczeniu.","Na lodówce wisi lista rzeczy do zrobienia na ten tydzień.","Pierwsza pozycja to spotkanie w wydawnictwie w poniedziałek."],
   "translation":"Конверт с результатом экзамена пришёл во вторник утром. Он пролежал на столе до вечера, потому что я боялась его открыть. Ожидание оказалось хуже самого экзамена. Открыв конверт, я прочитала одно слово: сдала. Марек сказал, что знал это с самого начала. После сдачи экзамена мы устроили себе свободный вечер. Перед выходом из дома я позвонила Касе. Во время разговора с ней я забыла про всю усталость. На холодильнике висит список дел на эту неделю. Первый пункт — встреча в издательстве в понедельник."
 },
 "quiz":{
   "intro":"Пять вопросов — и первая система B2 встанет на место.",
   "items":[
     {"q":"1. «Ожидание» от <b>czekać</b> —","opts":["czekenie","czekanie","czekacie"],"answer":1,
      "explain":"Инфинитив на -ać даёт хвост -anie: <b>czekanie</b>."},
     {"q":"2. «Спасибо за приглашение» —","opts":["Dziękuję za zaproszenie","Dziękuję za zapraszanie","Dziękuję za zaprosienie"],"answer":0,
      "explain":"Основа как у причастия zaproszony: <b>zaproszenie</b>."},
     {"q":"3. «После прочтения письма» —","opts":["Po przeczytanie listu","Po przeczytaniu listu","Po przeczytania listu"],"answer":1,
      "explain":"После po — предложный падеж: <b>po przeczytaniu</b>."},
     {"q":"4. «Во время встречи» —","opts":["Podczas spotkaniu","Podczas spotkaniem","Podczas spotkania"],"answer":2,
      "explain":"podczas берёт родительный: <b>podczas spotkania</b>."},
     {"q":"5. Что значит <b>mieszkanie</b>?","opts":["проживание","квартира","переезд"],"answer":1,
      "explain":"<b>mieszkanie</b> — квартира; смысл давно ушёл от процесса к месту."}
   ]
 },
 "essay":{
   "intro":"Первый текст уровня — короткий и очень конкретный: один твой день, разложенный по оборотам.",
   "prompt":"Напиши 5–7 предложений об обычном дне: что делаешь перед выходом из дома, что во время дороги, что после работы и что у тебя сейчас в списке дел.",
   "hint":"Каркас: Przed wyjściem… · Podczas… · Po pracy… · Mam dużo do zrobienia: … · Lubię czytanie / gotowanie… 💛",
   "example":"Przed wyjściem z domu zawsze sprawdzam listę rzeczy do zrobienia. Podczas jazdy tramwajem słucham podcastu po polsku. Po przyjściu do pracy piję kawę i czytam maile. Podczas przerwy na lunch dzwonię do mamy. Po pracy lubię gotowanie, bo mnie uspokaja. Wieczorem zostaje mi jeszcze mycie naczyń i pranie. Przed snem czytam dziesięć stron i to jest najlepsza część dnia."
 }
},
"2": {
 "day":2,"week":"01",
 "themeRu":"Взять и говорить",
 "themeEn":"Brać — wziąć",
 "intro":"Есть пары глаголов, где приставка бессильна — потому что второй глагол просто другой, с другим корнем. Русский живёт с этим спокойно: «брать — взять», «говорить — сказать», «класть — положить», «находить — найти». Польский устроен так же и почти теми же словами: <b>brać — wziąć</b>, <b>mówić — powiedzieć</b>, <b>kłaść — położyć</b>, <b>znajdować — znaleźć</b>. Сегодня восемь таких пар и одно правило про приказ.",
 "introAudio":"Есть пары глаголов, где приставка бессильна — потому что второй глагол просто другой, с другим корнем. Русский живёт с этим спокойно: брать и взять, говорить и сказать, класть и положить, находить и найти. Польский устроен так же и почти теми же словами: brać и wziąć, mówić и powiedzieć, kłaść и położyć, znajdować и znaleźć. Сегодня восемь таких пар и одно правило про приказ.",
 "goals":[
   "Держать восемь пар с разными корнями: <b>brać/wziąć</b>, <b>mówić/powiedzieć</b>, <b>kłaść/położyć</b>",
   "Не ломать капризные формы: <b>wezmę, weź, wziął / wzięła</b>",
   "Отличать <b>znajduję</b> («нахожу») от <b>znajdę</b> («найду»)",
   "Выбирать вид в приказе: <b>Weź!</b>, но <b>Nie bierz!</b>"
 ],
 "learned":[
   "Удержал(а) восемь пар с разными корнями: brać/wziąć, mówić/powiedzieć, kłaść/położyć",
   "Не сломал(а) капризные формы: wezmę, weź, wziął / wzięła",
   "Отличил(а) znajduję («нахожу») от znajdę («найду»)",
   "Выбрал(а) вид в приказе: Weź!, но Nie bierz!"
 ],
 "review":{
   "intro":"Вчерашние существительные из глаголов — и одно правило из B1 про запреты. Дальше идём к парам.",
   "introAudio":"Вчерашние существительные из глаголов — и одно правило из уровня B1 про запреты. Дальше идём к парам.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после po.",
      "q":"«После сдачи экзамена» —","opts":["Po zdaniu egzaminu","Po zdanie egzaminu","Po zdania egzaminu"],"answer":0,
      "explain":"После po — предложный падеж: <b>po zdaniu</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> ищи короткий родительный множественного.",
      "q":"«Пять встреч» —","opts":["pięć spotkania","pięć spotkań","pięć spotkaniów"],"answer":1,
      "explain":"Родительный множественного на -ń: <b>spotkań</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> различай запрет и отсутствие необходимости.",
      "q":"«Здесь нельзя курить» —","opts":["Tu nie trzeba palić","Tu nie wolno palić","Tu nie można palenia"],"answer":1,
      "explain":"Запрет — <b>nie wolno</b>. Nie trzeba значит «не нужно, не обязательно»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Перед выходом я проверяю список»</b>","answer":"Przed wyjściem sprawdzam listę"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Правило 1 · Восемь пар",
   "title":"<em>brać — wziąć</em>, <em>mówić — powiedzieć</em>",
   "paras":[
     "Обычная видовая пара — это один и тот же глагол с приставкой (robić / zrobić) или с другим суффиксом (dawać / dać). Но у самых частых глаголов пара собрана из двух разных слов. Так устроен и русский: брать — взять, говорить — сказать, класть — положить, находить — найти. Такие пары учат в лицо — зато большинство из них уже знакомо.",
     "Восемь пар закрывают почти всю бытовую речь: <b>brać / wziąć</b> (брать / взять), <b>mówić / powiedzieć</b> (говорить / сказать), <b>widzieć / zobaczyć</b> (видеть / увидеть), <b>oglądać / obejrzeć</b> (смотреть / посмотреть), <b>kłaść / położyć</b> (класть / положить), <b>znajdować / znaleźć</b> (находить / найти), <b>wkładać / włożyć</b> (надевать, вкладывать / надеть, вложить), <b>zdejmować / zdjąć</b> (снимать / снять).",
     "Русский двойник стоит напротив почти каждой формы: bierz — бери, weź — возьми, kładź — клади, połóż — положи, zdejmij — сними. Слабее всего подсказывает пара <b>oglądać / obejrzeć</b>: «смотреть фильм» — <b>oglądać film</b>, но «посмотреть» — <b>obejrzeć</b>. И не путай её с <b>widzieć</b>: widzieć — видеть глазами, oglądać — смотреть, разглядывать.",
     "Дальше работают обычные правила вида с A2. Несовершенный — про процесс и повтор: <b>Zawsze biorę kawę na wynos.</b> <b>Mówiłem po polsku cały wieczór.</b> Совершенный — про один раз и результат: <b>Wziąłem kawę i wyszedłem.</b> <b>Powiedziałem jej wszystko.</b>"
   ],
   "audio":"Обычная видовая пара — это один и тот же глагол с приставкой, robić и zrobić, или с другим суффиксом, dawać и dać. Но у самых частых глаголов пара собрана из двух разных слов. Так устроен и русский: брать и взять, говорить и сказать, класть и положить, находить и найти. Такие пары учат в лицо, зато большинство из них уже знакомо. Восемь пар закрывают почти всю бытовую речь: brać и wziąć, брать и взять; mówić и powiedzieć, говорить и сказать; widzieć и zobaczyć, видеть и увидеть; oglądać и obejrzeć, смотреть и посмотреть; kłaść и położyć, класть и положить; znajdować и znaleźć, находить и найти; wkładać и włożyć, надевать и надеть; zdejmować и zdjąć, снимать и снять. Русский двойник стоит напротив почти каждой формы: bierz — бери, weź — возьми, kładź — клади, połóż — положи, zdejmij — сними. Слабее всего подсказывает пара oglądać и obejrzeć: смотреть фильм это oglądać film, но посмотреть это obejrzeć. И не путай её с widzieć: widzieć — видеть глазами, oglądać — смотреть, разглядывать. Дальше работают обычные правила вида с уровня A2. Несовершенный про процесс и повтор: zawsze biorę kawę na wynos. Совершенный про один раз и результат: wziąłem kawę i wyszedłem.",
   "table":{"rows":[
     ["<b>brać</b> / <b>wziąć</b> <button class=\"play\" data-say=\"brać, wziąć\">🔊</button>","брать / взять"],
     ["<b>mówić</b> / <b>powiedzieć</b> <button class=\"play\" data-say=\"mówić, powiedzieć\">🔊</button>","говорить / сказать"],
     ["<b>widzieć</b> / <b>zobaczyć</b> · <b>oglądać</b> / <b>obejrzeć</b> <button class=\"play\" data-say=\"widzieć, zobaczyć, oglądać, obejrzeć\">🔊</button>","видеть / увидеть · смотреть / посмотреть"],
     ["<b>kłaść</b> / <b>położyć</b> <button class=\"play\" data-say=\"kłaść, położyć\">🔊</button>","класть / положить"],
     ["<b>znajdować</b> / <b>znaleźć</b> <button class=\"play\" data-say=\"znajdować, znaleźć\">🔊</button>","находить / найти"],
     ["<b>wkładać</b> / <b>włożyć</b> · <b>zdejmować</b> / <b>zdjąć</b> <button class=\"play\" data-say=\"wkładać, włożyć, zdejmować, zdjąć\">🔊</button>","надевать / надеть · снимать / снять"]
   ],"star":0},
   "examples":[
     {"ru":"Я всегда беру кофе с собой.","en":"Zawsze <b>biorę</b> kawę na wynos.","gloss":"na wynos — с собой, навынос","say":"Zawsze biorę kawę na wynos."},
     {"ru":"Положи ключи на стол.","en":"<b>Połóż</b> klucze na stole.","say":"Połóż klucze na stole."},
     {"ru":"Мы вчера посмотрели этот фильм.","en":"Wczoraj <b>obejrzeliśmy</b> ten film.","say":"Wczoraj obejrzeliśmy ten film."},
     {"ru":"Я тебя не вижу в этой толпе.","en":"Nie <b>widzę</b> cię w tym tłumie.","say":"Nie widzę cię w tym tłumie."},
     {"ru":"Сними куртку, тут тепло.","en":"<b>Zdejmij</b> kurtkę, tu jest ciepło.","say":"Zdejmij kurtkę, tu jest ciepło."}
   ],
   "mistakes":[
     {"wrong":"Chcę pooglądać ten film.","right":"Chcę <b>obejrzeć</b> ten film.","why":"пара к oglądać — obejrzeć. Pooglądać в языке есть, но значит «поглазеть немного», а не «посмотреть до конца»."},
     {"wrong":"Powiedziałem po polsku cały wieczór.","right":"<b>Mówiłem</b> po polsku cały wieczór.","why":"powiedzieć — сказать один раз. Длительное говорение и «говорить на языке» — только mówić."}
   ],
   "mnemonic":"👐 brać/wziąć · mówić/powiedzieć · kłaść/położyć · znajdować/znaleźć — те же пары, что в русском.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> одно действие с результатом.",
      "q":"«Положи ключи на стол» —","opts":["Kładź klucze na stole","Połóż klucze na stole","Włóż klucze na stole"],"answer":1,
      "explain":"Разовая просьба с результатом — <b>połóż</b>. Kładź значит «клади, продолжай класть», włóż — «вложи внутрь»."},
     {"type":"choice","howto":"<b>Что делать:</b> различай «видеть» и «смотреть».",
      "q":"«Я тебя не вижу» —","opts":["Nie oglądam cię","Nie widzę cię","Nie zobaczę cię"],"answer":1,
      "explain":"Видеть глазами — <b>widzieć</b>. Oglądać значит «разглядывать», zobaczę — «увижу»."},
     {"type":"type","howto":"Напиши по-польски. Говорит мужчина. Диакритику можно не ставить.",
      "q":"«Я взял кофе и вышел»","accept":["wziąłem kawę i wyszedłem","wzialem kawe i wyszedlem"],"placeholder":"Wziąłem…"}
   ]
  },
  {
   "eyebrow":"Правило 2 · Формы, которые ломаются",
   "title":"<em>wezmę · weź · wziął / wzięła</em>",
   "paras":[
     "<b>brać</b>: biorę, bierzesz, bierze, bierzemy, bierzecie, biorą; прошедшее brał, brała, brali; приказ <b>bierz</b>. <b>wziąć</b>: wezmę, weźmiesz, weźmie, weźmiemy, weźmiecie, wezmą; прошедшее <b>wziął</b>, <b>wzięła</b>, <b>wzięli</b>, <b>wzięły</b>; приказ <b>weź</b>. Основа меняется целиком — тут помогает только повторение вслух.",
     "<b>znaleźć</b>: znajdę, znajdziesz, znajdzie, znajdą; прошедшее <b>znalazł</b>, <b>znalazła</b>, <b>znaleźli</b>; приказ <b>znajdź</b>. А несовершенный <b>znajdować</b>: znajduję, znajdujesz, znajdują. Отсюда ловушка дня: <b>znajdę</b> — это «найду», будущее, а «нахожу» — <b>znajduję</b>. Разница в одной букве, а времена разные.",
     "<b>kłaść</b>: kładę, kładziesz, kładzie, kładą; прошедшее kładł, kładła; приказ <b>kładź</b>. <b>położyć</b>: położę, położysz; położył, położyła; приказ <b>połóż</b>. <b>zdjąć</b>: zdejmę, zdejmiesz; zdjął, zdjęła; приказ <b>zdejmij</b>. <b>zdejmować</b>: zdejmuję.",
     "<b>powiedzieć</b>: powiem, powiesz, powie, powiemy, powiecie, <b>powiedzą</b>; прошедшее powiedział, powiedziała; приказ <b>powiedz</b>. Обрати внимание на третье лицо множественного — <b>powiedzą</b>, длинное, а не «powią». Так же ведёт себя знакомое <b>wiedzieć</b>: wiem, wiesz, wie, wiemy, wiecie, <b>wiedzą</b>."
   ],
   "audio":"Brać: biorę, bierzesz, bierze, bierzemy, bierzecie, biorą; прошедшее brał, brała, brali; приказ bierz. Wziąć: wezmę, weźmiesz, weźmie, weźmiemy, weźmiecie, wezmą; прошедшее wziął, wzięła, wzięli, wzięły; приказ weź. Основа меняется целиком — тут помогает только повторение вслух. Znaleźć: znajdę, znajdziesz, znajdzie, znajdą; прошедшее znalazł, znalazła, znaleźli; приказ znajdź. А несовершенный znajdować: znajduję, znajdujesz, znajdują. Отсюда ловушка дня: znajdę это найду, будущее, а нахожу это znajduję. Разница в одной букве, а времена разные. Kłaść: kładę, kładziesz, kładzie, kładą; прошедшее kładł, kładła; приказ kładź. Położyć: położę, położysz; położył, położyła; приказ połóż. Zdjąć: zdejmę, zdejmiesz; zdjął, zdjęła; приказ zdejmij. Powiedzieć: powiem, powiesz, powie, powiemy, powiecie, powiedzą; приказ powiedz. Обрати внимание на третье лицо множественного: powiedzą, длинное, а не powią. Так же ведёт себя знакомое wiedzieć: wiem, wiesz, wie, wiemy, wiecie, wiedzą.",
   "table":{"rows":[
     ["<b>biorę, bierzesz, biorą</b> · bierz! <button class=\"play\" data-say=\"biorę, bierzesz, biorą, bierz\">🔊</button>","беру, берёшь, берут · бери!"],
     ["<b>wezmę, weźmiesz, wezmą</b> · weź! <button class=\"play\" data-say=\"wezmę, weźmiesz, wezmą, weź\">🔊</button>","возьму, возьмёшь, возьмут · возьми!"],
     ["on <b>wziął</b> · ona <b>wzięła</b> · oni <b>wzięli</b> <button class=\"play\" data-say=\"wziął, wzięła, wzięli\">🔊</button>","он взял · она взяла · они взяли"],
     ["⚠️ <b>znajduję</b> — нахожу · <b>znajdę</b> — найду <button class=\"play\" data-say=\"znajduję, znajdę\">🔊</button>","одна буква — разные времена"],
     ["<b>kładę</b> · kładź! · <b>położę</b> · połóż! <button class=\"play\" data-say=\"kładę, kładź, położę, połóż\">🔊</button>","кладу · клади · положу · положи"],
     ["<b>powiem, powiesz, powiedzą</b> · powiedz! <button class=\"play\" data-say=\"powiem, powiesz, powiedzą, powiedz\">🔊</button>","скажу, скажешь, скажут · скажи!"]
   ],"star":3},
   "examples":[
     {"ru":"Я возьму зонт, на всякий случай.","en":"<b>Wezmę</b> parasol, na wszelki wypadek.","gloss":"na wszelki wypadek — на всякий случай","say":"Wezmę parasol, na wszelki wypadek."},
     {"ru":"Она взяла ключи и вышла.","en":"<b>Wzięła</b> klucze i wyszła.","say":"Wzięła klucze i wyszła."},
     {"ru":"Обычно я нахожу их в интернете.","en":"Zwykle <b>znajduję</b> je w internecie.","say":"Zwykle znajduję je w internecie."},
     {"ru":"Я найду его до воскресенья.","en":"<b>Znajdę</b> go do niedzieli.","say":"Znajdę go do niedzieli."},
     {"ru":"Они скажут тебе завтра.","en":"Oni ci <b>powiedzą</b> jutro.","say":"Oni ci powiedzą jutro."}
   ],
   "mistakes":[
     {"wrong":"Wezmiem parasol.","right":"<b>Wezmę</b> parasol.","why":"первое лицо от wziąć — wezmę. Формы «wezmiem» не существует."},
     {"wrong":"Oni powią ci jutro.","right":"Oni <b>powiedzą</b> ci jutro.","why":"третье лицо множественного длинное: powiedzą, как wiedzą от wiedzieć."}
   ],
   "mnemonic":"🔧 wezmę — weź — wziął — wzięła · znajduję (нахожу) — znajdę (найду) · powiedzą, а не «powią».",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни первое лицо от wziąć.",
      "q":"«Я возьму зонт» —","opts":["Wezmiem parasol","Wezmę parasol","Wziąłem parasol"],"answer":1,
      "explain":"Первое лицо — <b>wezmę</b>. Wziąłem значит «я взял»."},
     {"type":"choice","howto":"<b>Что делать:</b> слово zwykle решает вид и время.",
      "q":"«Обычно я нахожу их в интернете» —","opts":["Zwykle znajdę je w internecie","Zwykle znajduję je w internecie","Zwykle znalazłem je w internecie"],"answer":1,
      "explain":"Привычка — несовершенный вид, настоящее время: <b>znajduję</b>. Znajdę значит «найду»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Она взяла ключи и вышла»</b>","answer":"Wzięła klucze i wyszła"}
   ]
  },
  {
   "eyebrow":"Правило 3 · Приказ",
   "title":"<em>Weź!</em>, но <em>Nie bierz!</em>",
   "paras":[
     "Одна просьба, один раз, с результатом — совершенный вид: <b>Weź parasol. Powiedz mi prawdę. Połóż to tutaj. Zamknij okno. Otwórz drzwi. Zdejmij kurtkę.</b> Это самый обычный польский приказ и самая обычная просьба.",
     "Отрицание переворачивает вид: «не делай» почти всегда несовершенный. <b>Nie bierz tego. Nie mów nikomu. Nie kładź tam kluczy. Nie zamykaj okna. Nie otwieraj.</b> Правило действует и в русском — «Возьми!» против «Не бери!», «Скажи!» против «Не говори!». Достаточно перевести приказ на русский и посмотреть, какой вид получился сам.",
     "Третий случай — приглашение и разрешение. Тут польский любит несовершенный вид даже без отрицания: <b>Siadaj. Wchodź. Częstuj się. Bierz, ile chcesz.</b> Совершенное <b>Usiądź</b> звучит суше, как распоряжение. Оттенок тот же, что между русским «садись» и «сядь».",
     "И вежливая обёртка, которая снимает резкость совсем: <b>proszę</b> плюс инфинитив. <b>Proszę usiąść. Proszę wejść. Proszę nie palić. Proszę się nie martwić.</b> Так говорят с незнакомыми, в кабинете, в самолёте, в магазине. На «ты» так не говорят — там работают обычные формы из первых двух абзацев."
   ],
   "audio":"Одна просьба, один раз, с результатом — совершенный вид: weź parasol; powiedz mi prawdę; połóż to tutaj; zamknij okno; otwórz drzwi; zdejmij kurtkę. Это самый обычный польский приказ и самая обычная просьба. Отрицание переворачивает вид: не делай — почти всегда несовершенный. Nie bierz tego. Nie mów nikomu. Nie kładź tam kluczy. Nie zamykaj okna. Nie otwieraj. Правило действует и в русском: возьми против не бери, скажи против не говори. Достаточно перевести приказ на русский и посмотреть, какой вид получился сам. Третий случай — приглашение и разрешение. Тут польский любит несовершенный вид даже без отрицания: siadaj, wchodź, częstuj się, bierz, ile chcesz. Совершенное usiądź звучит суше, как распоряжение. Оттенок тот же, что между русским садись и сядь. И вежливая обёртка, которая снимает резкость совсем: proszę плюс инфинитив. Proszę usiąść. Proszę wejść. Proszę nie palić. Proszę się nie martwić. Так говорят с незнакомыми, в кабинете, в самолёте, в магазине. На ты так не говорят.",
   "table":{"rows":[
     ["<b>Weź! · Powiedz! · Połóż!</b> <button class=\"play\" data-say=\"Weź! Powiedz! Połóż!\">🔊</button>","один раз, с результатом — совершенный"],
     ["<b>Nie bierz! · Nie mów! · Nie kładź!</b> <button class=\"play\" data-say=\"Nie bierz! Nie mów! Nie kładź!\">🔊</button>","отрицание — несовершенный"],
     ["<b>Siadaj. Wchodź. Częstuj się.</b> <button class=\"play\" data-say=\"Siadaj. Wchodź. Częstuj się.\">🔊</button>","приглашение — несовершенный"],
     ["<b>Usiądź.</b> · <b>Siadaj.</b> <button class=\"play\" data-say=\"Usiądź. Siadaj.\">🔊</button>","сядь · садись"],
     ["<b>Proszę usiąść. Proszę nie palić.</b> <button class=\"play\" data-say=\"Proszę usiąść. Proszę nie palić.\">🔊</button>","вежливо, на «вы»"]
   ],"star":1},
   "examples":[
     {"ru":"Возьми зонт, будет дождь.","en":"<b>Weź</b> parasol, będzie padać.","say":"Weź parasol, będzie padać."},
     {"ru":"Не бери эту большую сумку.","en":"<b>Nie bierz</b> tej dużej torby.","say":"Nie bierz tej dużej torby."},
     {"ru":"Скажи мне правду.","en":"<b>Powiedz</b> mi prawdę.","say":"Powiedz mi prawdę."},
     {"ru":"Не говори никому, пожалуйста.","en":"<b>Nie mów</b> nikomu, proszę.","say":"Nie mów nikomu, proszę."},
     {"ru":"Садись, пожалуйста, и угощайся.","en":"<b>Siadaj</b>, proszę, i <b>częstuj się</b>.","say":"Siadaj, proszę, i częstuj się."}
   ],
   "mistakes":[
     {"wrong":"Nie weź tego.","right":"<b>Nie bierz</b> tego.","why":"после nie в приказе стоит несовершенный вид: nie bierz, nie mów, nie kładź."},
     {"wrong":"Proszę usiądź.","right":"<b>Proszę usiąść.</b>","why":"после proszę в вежливой форме идёт инфинитив, а не повелительная форма."}
   ],
   "mnemonic":"⛔ Weź! — Nie bierz! Powiedz! — Nie mów! Переведи на русский, и вид найдётся сам.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> смотри на отрицание.",
      "q":"«Не бери это» —","opts":["Nie weź tego","Nie bierz tego","Nie wziąć tego"],"answer":1,
      "explain":"В запрете — несовершенный вид: <b>nie bierz</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> это одна просьба, один раз.",
      "q":"«Скажи мне правду» —","opts":["Mów mi prawdę","Powiedz mi prawdę","Powiadaj mi prawdę"],"answer":1,
      "explain":"Разовая просьба — совершенный вид: <b>powiedz</b>."},
     {"type":"speak","howto":"Нажми микрофон и скажи вслух — тут всё правило в одной фразе.",
      "target":"Weź parasol, ale nie bierz tej dużej torby.","sub":"возьми зонт, но не бери эту большую сумку","want":"Weź parasol, ale nie bierz tej dużej torby."}
   ]
  },
  {
   "eyebrow":"Правило 4 · Узнавание",
   "title":"<em>bywać, jadać, miewać</em>",
   "paras":[
     "Есть небольшая группа глаголов со значением «делать время от времени, по привычке». Они сделаны из обычных: być → <b>bywać</b>, jeść → <b>jadać</b>, mieć → <b>miewać</b>, pisać → <b>pisywać</b>, czytać → <b>czytywać</b>, spać → <b>sypiać</b>, widzieć → <b>widywać</b>, chodzić → <b>chadzać</b>.",
     "По-русски это ровно «бывать», «едать», «читывать», «хаживать» — только у нас почти все такие формы ушли в старину, а в польском часть из них живая и совершенно нейтральная. <b>Bywam tam raz w miesiącu.</b> <b>Jadamy obiady w domu.</b> <b>Miewam bóle głowy.</b> <b>Widujemy się rzadko.</b> Это обычные современные фразы.",
     "Остальные — <b>pisywać</b>, <b>czytywać</b>, <b>chadzać</b> — звучат книжно или чуть иронично. Их достаточно узнавать в тексте: увидев <b>czytywał</b>, читай «почитывал, читал время от времени». Самому употреблять не обязательно, и никто не заметит их отсутствия.",
     "Ловушка тут одна: <b>bywać</b> — не то же самое, что <b>być</b>. <b>Jestem w Warszawie</b> — я сейчас в Варшаве. <b>Bywam w Warszawie</b> — я там бываю, время от времени. И готовая формула вежливого уклонения от ответа: <b>Bywa różnie</b> — «по-разному бывает»."
   ],
   "audio":"Есть небольшая группа глаголов со значением делать время от времени, по привычке. Они сделаны из обычных: być даёт bywać, jeść даёт jadać, mieć даёт miewać, pisać даёт pisywać, czytać даёт czytywać, spać даёт sypiać, widzieć даёт widywać, chodzić даёт chadzać. По-русски это ровно бывать, едать, читывать, хаживать — только у нас почти все такие формы ушли в старину, а в польском часть из них живая и совершенно нейтральная. Bywam tam raz w miesiącu. Jadamy obiady w domu. Miewam bóle głowy. Widujemy się rzadko. Это обычные современные фразы. Остальные — pisywać, czytywać, chadzać — звучат книжно или чуть иронично. Их достаточно узнавать в тексте: увидев czytywał, читай почитывал, читал время от времени. Ловушка тут одна: bywać это не то же самое, что być. Jestem w Warszawie — я сейчас в Варшаве. Bywam w Warszawie — я там бываю, время от времени. И готовая формула вежливого уклонения от ответа: bywa różnie, по-разному бывает.",
   "table":{"rows":[
     ["<b>bywać</b> · Bywam tam raz w miesiącu. <button class=\"play\" data-say=\"Bywam tam raz w miesiącu\">🔊</button>","бывать · живое, нейтральное"],
     ["<b>jadać</b> · Jadamy obiady w domu. <button class=\"play\" data-say=\"Jadamy obiady w domu\">🔊</button>","есть по привычке · живое"],
     ["<b>miewać</b> · Miewam bóle głowy. <button class=\"play\" data-say=\"Miewam bóle głowy\">🔊</button>","иметь время от времени · живое"],
     ["<b>widywać</b> · Widujemy się rzadko. <button class=\"play\" data-say=\"Widujemy się rzadko\">🔊</button>","видеться время от времени"],
     ["<b>pisywać · czytywać · chadzać</b> <button class=\"play\" data-say=\"pisywać, czytywać, chadzać\">🔊</button>","книжные — только узнавание"],
     ["<b>Bywa różnie.</b> <button class=\"play\" data-say=\"Bywa różnie\">🔊</button>","По-разному бывает."]
   ],"star":5},
   "examples":[
     {"ru":"Я бываю там раз в месяц.","en":"<b>Bywam</b> tam raz w miesiącu.","say":"Bywam tam raz w miesiącu."},
     {"ru":"Обеды мы едим дома.","en":"<b>Jadamy</b> obiady w domu.","say":"Jadamy obiady w domu."},
     {"ru":"У меня время от времени болит голова.","en":"<b>Miewam</b> bóle głowy.","say":"Miewam bóle głowy."},
     {"ru":"Мы видимся редко, но пишем часто.","en":"<b>Widujemy się</b> rzadko, ale piszemy często.","say":"Widujemy się rzadko, ale piszemy często."}
   ],
   "mistakes":[
     {"wrong":"Bywam teraz w Warszawie.","right":"<b>Jestem</b> teraz w Warszawie.","why":"bywać — про регулярность, а не про «сейчас». В эту минуту — jestem."}
   ],
   "mnemonic":"🔄 bywać · jadać · miewać · widywać — живые. pisywać · czytywać · chadzać — на узнавание.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> речь о регулярности, а не о моменте.",
      "q":"«Я бываю там раз в месяц» —","opts":["Jestem tam raz w miesiącu","Bywam tam raz w miesiącu","Byłem tam raz w miesiącu"],"answer":1,
      "explain":"Регулярность — <b>bywam</b>. Jestem значит «нахожусь сейчас»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, что добавляет суффикс -ewa-.",
      "q":"Что значит <b>Miewam bóle głowy</b>?","opts":["сейчас у меня болит голова","время от времени у меня болит голова","у меня никогда не болит голова"],"answer":1,
      "explain":"<b>miewać</b> — иметь время от времени: «бывают головные боли»."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«По-разному бывает»","accept":["bywa różnie","bywa roznie"],"placeholder":"Bywa…"}
   ]
  }
 ],
 "dialogue":{
   "intro":"Пятница, вечер, телефонный разговор. Кася звонит поздравить и сразу берётся командовать. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"K","name":"Kasia","side":"right","en":"Mów, jak było. Otworzyłaś tę kopertę czy nie?","ru":"Говори, как было. Ты открыла тот конверт или нет?",
      "words":[["Mów","говори"],["kopertę","конверт"]]},
     {"who":"A","name":"Anna","side":"left","en":"Powiedziałam ci wczoraj esemesem. Zdałam.","ru":"Я сказала тебе вчера смс-кой. Сдала.",
      "words":[["Powiedziałam","я сказала"],["esemesem","эсэмэской"]]},
     {"who":"K","name":"Kasia","side":"right","en":"Chcę usłyszeć to na głos. A teraz weź kalendarz.","ru":"Хочу услышать это вслух. А теперь возьми календарь.",
      "words":[["na głos","вслух"],["weź","возьми"]]},
     {"who":"A","name":"Anna","side":"left","en":"Biorę. Po co?","ru":"Беру. Зачем?",
      "words":[["Biorę","беру"],["Po co","зачем"]]},
     {"who":"K","name":"Kasia","side":"right","en":"Bo w sobotę idziemy świętować. Nie mów, że nie masz czasu.","ru":"Потому что в субботу идём праздновать. Не говори, что у тебя нет времени.",
      "words":[["świętować","праздновать"],["Nie mów","не говори"]]},
     {"who":"A","name":"Anna","side":"left","en":"Nie mówię. Ale w poniedziałek mam spotkanie w wydawnictwie.","ru":"Не говорю. Но в понедельник у меня встреча в издательстве.",
      "words":[["Nie mówię","не говорю"],["spotkanie","встреча"]]},
     {"who":"K","name":"Kasia","side":"right","en":"To jeszcze lepiej. Włóż tę granatową marynarkę.","ru":"Тем лучше. Надень тот тёмно-синий пиджак.",
      "words":[["Włóż","надень"],["marynarkę","пиджак"]]},
     {"who":"A","name":"Anna","side":"left","en":"Znajdę ją do niedzieli. Gdzieś w szafie leży.","ru":"Найду его до воскресенья. Где-то в шкафу лежит.",
      "words":[["Znajdę","найду"],["Gdzieś","где-то"]]},
     {"who":"K","name":"Kasia","side":"right","en":"Znajdź. I nie zdejmuj jej po pięciu minutach, jak zawsze.","ru":"Найди. И не снимай его через пять минут, как всегда.",
      "words":[["Znajdź","найди"],["nie zdejmuj","не снимай"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка у двери — приказ, запрет и упрямство. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Weź parasol.","ru":"Возьми зонт."},
     {"who":"B","en":"Nie biorę. Nie pada.","ru":"Не беру. Дождя нет."},
     {"who":"A","en":"Będzie padać o piątej.","ru":"Пойдёт в пять."},
     {"who":"B","en":"To wtedy wezmę.","ru":"Тогда и возьму."},
     {"who":"A","en":"O piątej parasol będzie tutaj, a ty tam.","ru":"В пять зонт будет здесь, а ты там."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — восемь пар и то, что вокруг них.",
   "items":[
     {"en":"brać (biorę) / wziąć (wezmę)","ru":"брать / взять","ex":"Weź parasol, będzie padać."},
     {"en":"mówić / powiedzieć (powiem)","ru":"говорить / сказать","ex":"Powiedz mi prawdę."},
     {"en":"widzieć / zobaczyć","ru":"видеть / увидеть","ex":"Nie widzę cię w tym tłumie."},
     {"en":"oglądać / obejrzeć","ru":"смотреть / посмотреть","ex":"Wczoraj obejrzeliśmy ten film."},
     {"en":"kłaść (kładę) / położyć","ru":"класть / положить","ex":"Połóż klucze na stole."},
     {"en":"znajdować (znajduję) / znaleźć (znajdę)","ru":"находить / найти","ex":"Znajdę ją do niedzieli."},
     {"en":"wkładać / włożyć","ru":"надевать / надеть","ex":"Włóż tę granatową marynarkę."},
     {"en":"zdejmować / zdjąć (zdejmę)","ru":"снимать / снять","ex":"Zdejmij kurtkę, tu jest ciepło."},
     {"en":"bywać","ru":"бывать","ex":"Bywam tam raz w miesiącu."},
     {"en":"jadać / miewać","ru":"есть по привычке / бывать (о состоянии)","ex":"Jadamy obiady w domu."},
     {"en":"marynarka","ru":"пиджак","ex":"Granatowa marynarka wisi w szafie."},
     {"en":"świętować","ru":"праздновать","ex":"W sobotę idziemy świętować."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу. Обрати внимание, где приказ, а где запрет.",
   "pairs":[["weź","возьми"],["nie bierz","не бери"],["powiedz","скажи"],["nie mów","не говори"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как прошла суббота перед понедельником. Пары дня тут в каждом предложении.",
   "title":"Sobota przed poniedziałkiem",
   "sentences":["W sobotę Kasia kazała mi wziąć kalendarz i zaplanować cały tydzień.","Powiedziałam jej, że w poniedziałek mam spotkanie w wydawnictwie.","Od razu zaczęła szukać dla mnie czegoś porządnego do ubrania.","Znalazła granatową marynarkę na samym dnie szafy.","Włożyłam ją, przejrzałam się w lustrze i zdjęłam po minucie.","Kasia powiedziała tylko: weź ją i nie dyskutuj.","Potem oglądałyśmy stare zdjęcia z Włoch i piłyśmy herbatę.","Bywamy razem rzadziej niż kiedyś, bo obie dużo pracujemy.","Przed wyjściem położyła mi na stole listę rzeczy do zrobienia.","Ostatni punkt brzmiał: nie mów na spotkaniu, że czegoś nie umiesz."],
   "translation":"В субботу Кася велела мне взять календарь и распланировать всю неделю. Я сказала ей, что в понедельник у меня встреча в издательстве. Она сразу начала искать для меня что-нибудь приличное из одежды. Нашла тёмно-синий пиджак на самом дне шкафа. Я надела его, посмотрелась в зеркало и сняла через минуту. Кася сказала только: бери его и не спорь. Потом мы смотрели старые фотографии из Италии и пили чай. Видимся мы реже, чем раньше, потому что обе много работаем. Перед уходом она положила мне на стол список дел. Последний пункт гласил: не говори на встрече, что чего-то не умеешь."
 },
 "quiz":{
   "intro":"Пять вопросов — и восемь пар встанут на место.",
   "items":[
     {"q":"1. «Я возьму зонт» —","opts":["Wezmiem parasol","Wezmę parasol","Biorę parasol"],"answer":1,
      "explain":"Первое лицо от wziąć — <b>wezmę</b>. Biorę значит «беру» прямо сейчас."},
     {"q":"2. «Не бери это» —","opts":["Nie weź tego","Nie bierz tego","Nie wziąłeś tego"],"answer":1,
      "explain":"В запрете — несовершенный вид: <b>nie bierz</b>."},
     {"q":"3. «Скажи мне правду» —","opts":["Mów mi prawdę","Powiedz mi prawdę","Powiadaj mi prawdę"],"answer":1,
      "explain":"Разовая просьба — совершенный вид: <b>powiedz</b>."},
     {"q":"4. «Обычно я нахожу их в интернете» —","opts":["Zwykle znajdę je w internecie","Zwykle znajduję je w internecie","Zwykle znalazłam je w internecie"],"answer":1,
      "explain":"Привычка в настоящем — <b>znajduję</b>; znajdę значит «найду»."},
     {"q":"5. Что значит <b>Bywam tam raz w miesiącu</b>?","opts":["я сейчас там","я бываю там раз в месяц","я был там один раз"],"answer":1,
      "explain":"<b>bywać</b> — про регулярность: бываю время от времени."}
   ]
 },
 "essay":{
   "intro":"Сегодня — про твои собственные привычки и одну просьбу, которую ты часто слышишь.",
   "prompt":"Напиши 5–7 предложений: что ты обычно берёшь с собой из дома, что кладёшь в сумку, что надеваешь на важную встречу, где бываешь регулярно и что тебе чаще всего говорят «не делай».",
   "hint":"Каркас: Zawsze biorę… · Do torby wkładam… · Na ważne spotkanie wkładam… · Bywam… raz w tygodniu · Wszyscy mi mówią: nie… 💛",
   "example":"Zawsze biorę ze sobą telefon, klucze i butelkę wody. Do torby wkładam też książkę, chociaż rzadko ją otwieram. Na ważne spotkanie wkładam granatową marynarkę i wygodne buty. Bywam na basenie raz w tygodniu, zwykle w czwartek. Rzeczy kładę zawsze w tym samym miejscu i tak ich potem nie znajduję. Wszyscy mi mówią: nie bierz tylu rzeczy naraz. Ja odpowiadam, że kiedyś się przydadzą."
 }
},
"3": {
 "day":3,"week":"01",
 "themeRu":"Приставка на любом глаголе",
 "themeEn":"Przerobić, posiedzieć",
 "intro":"Приставка — самое выгодное вложение в польский: выучил(а) одну — получил(а) двадцать глаголов. На B1 они работали в основном на движении: przyjść, wyjechać, przenieść. Сегодня снимаем это ограничение. <b>prze-</b>, <b>po-</b>, <b>roz-</b>, <b>za-</b>, <b>do-</b>, <b>wy-</b>, <b>od-</b>, <b>z-</b> садятся на любой глагол — и почти всегда значат ровно то же, что русские пере-, по-, раз-, за-, до-, вы-, от-, с-.",
 "introAudio":"Приставка — самое выгодное вложение в польский: выучишь одну, получишь двадцать глаголов. На уровне B1 они работали в основном на движении: przyjść, wyjechać, przenieść. Сегодня снимаем это ограничение. Prze-, po-, roz-, za-, do-, wy-, od-, z- садятся на любой глагол и почти всегда значат ровно то же, что русские пере-, по-, раз-, за-, до-, вы-, от-, с-.",
 "goals":[
   "Читать приставку как смысл: <b>prze-</b> заново, <b>po-</b> немного, <b>roz-</b> в стороны",
   "Помнить, что приставка делает глагол совершенным",
   "Собирать нужный глагол самому: <b>przepłacić, posiedzieć, rozdać, dokończyć</b>",
   "Знать четыре места, где русская подсказка обманывает"
 ],
 "learned":[
   "Прочитал(а) приставку как смысл: prze- заново, po- немного, roz- в стороны",
   "Вспомнил(а), что приставка делает глагол совершенным",
   "Собрал(а) нужный глагол сам(а): przepłacić, posiedzieć, rozdać, dokończyć",
   "Запомнил(а) четыре места, где русская подсказка обманывает"
 ],
 "review":{
   "intro":"Вчерашние пары и приказ, плюс один оборот с первого дня. Три минуты — и идём на завод приставок.",
   "introAudio":"Вчерашние пары и приказ, плюс один оборот с первого дня. Три минуты — и идём на завод приставок.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> одна просьба, один раз.",
      "q":"«Возьми зонт» —","opts":["Bierz parasol","Weź parasol","Wziąć parasol"],"answer":1,
      "explain":"Разовая просьба — совершенный вид: <b>weź</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> смотри на отрицание.",
      "q":"«Не говори никому» —","opts":["Nie powiedz nikomu","Nie mów nikomu","Nie powiadaj nikomu"],"answer":1,
      "explain":"В запрете — несовершенный вид: <b>nie mów</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> какой падеж просит przed?",
      "q":"«Перед выходом» —","opts":["Przed wyjścia","Przed wyjściem","Przed wyjściu"],"answer":1,
      "explain":"przed берёт творительный падеж: <b>przed wyjściem</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«У меня сегодня много дел»</b>","answer":"Mam dziś dużo do zrobienia"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Правило 1 · Принцип и <em>prze-</em>",
   "title":"<em>prze-</em> = пере-",
   "paras":[
     "Принцип на весь день: приставка делает две вещи сразу — добавляет смысл и переводит глагол в совершенный вид. <b>robić</b> (несов.) плюс prze- даёт <b>przerobić</b> (сов., «переделать»). А раз глагол совершенный, форма настоящего времени означает будущее: <b>przerobię</b> — «переделаю». Тот же механизм, что был на глаголах движения.",
     "<b>prze-</b> работает в трёх знакомых смыслах. Заново, по-другому: <b>przerobić</b> (переделать), <b>przepisać</b> (переписать), <b>przebrać się</b> (переодеться), <b>przemyśleć</b> (продумать заново). Чрезмерно, слишком: <b>przesolić</b> (пересолить), <b>przepłacić</b> (переплатить), <b>przegrzać</b> (перегреть), <b>przesadzić</b> (перегнуть палку, преувеличить). Через, насквозь: <b>przejść</b>, <b>przejechać</b>.",
     "И сразу честное расхождение, потому что оно тут же, на самом частом слове. <b>przeczytać</b> — это не «перечитать», а просто «прочитать до конца». Перечитать будет <b>przeczytać jeszcze raz</b>. Похожая история с <b>przepisać</b>: оно значит и «переписать», и «выписать лекарство» — <b>lekarz przepisał antybiotyk</b>.",
     "Приставка тянет за собой всю семью слова, и вчерашний с позавчерашним механизмы складываются: <b>przepłacić → przepłacenie</b>, <b>przerobić → przeróbka</b> (переделка), <b>przepisać → przepis</b> (рецепт блюда, знакомый с B1). Один корень плюс приставка — и у тебя готов глагол, существительное и половина фразы."
   ],
   "audio":"Принцип на весь день: приставка делает две вещи сразу — добавляет смысл и переводит глагол в совершенный вид. Robić плюс prze- даёт przerobić, переделать. А раз глагол совершенный, форма настоящего времени означает будущее: przerobię, переделаю. Тот же механизм, что был на глаголах движения. Prze- работает в трёх знакомых смыслах. Заново, по-другому: przerobić, переделать; przepisać, переписать; przebrać się, переодеться; przemyśleć, продумать заново. Чрезмерно, слишком: przesolić, пересолить; przepłacić, переплатить; przegrzać, перегреть; przesadzić, преувеличить. Через, насквозь: przejść, przejechać. И сразу честное расхождение, потому что оно тут же, на самом частом слове. Przeczytać — это не перечитать, а просто прочитать до конца. Перечитать будет przeczytać jeszcze raz. Похожая история с przepisać: оно значит и переписать, и выписать лекарство — lekarz przepisał antybiotyk. Приставка тянет за собой всю семью слова: przepłacić даёт przepłacenie, przerobić даёт przeróbkę, переделку, przepisać даёт przepis, рецепт блюда, знакомый с уровня B1.",
   "table":{"rows":[
     ["<b>przerobić</b> · <b>przepisać</b> · <b>przebrać się</b> <button class=\"play\" data-say=\"przerobić, przepisać, przebrać się\">🔊</button>","переделать · переписать · переодеться"],
     ["<b>przesolić</b> · <b>przepłacić</b> · <b>przegrzać</b> <button class=\"play\" data-say=\"przesolić, przepłacić, przegrzać\">🔊</button>","пересолить · переплатить · перегреть"],
     ["<b>przerobię</b> to jutro. <button class=\"play\" data-say=\"Przerobię to jutro\">🔊</button>","«Переделаю это завтра» — будущее"],
     ["⚠️ <b>przeczytać</b> <button class=\"play\" data-say=\"przeczytać, przeczytać jeszcze raz\">🔊</button>","прочитать до конца, не «перечитать»"],
     ["<b>przeróbka</b> · <b>przepis</b> <button class=\"play\" data-say=\"przeróbka, przepis\">🔊</button>","переделка · рецепт блюда"]
   ],"star":3},
   "examples":[
     {"ru":"Я переплатил за билеты почти вдвое.","en":"<b>Przepłaciłem</b> za bilety prawie dwa razy.","say":"Przepłaciłem za bilety prawie dwa razy."},
     {"ru":"Мне придётся переделать это заново.","en":"Będę musiała to <b>przerobić</b> od nowa.","gloss":"мужчина скажет: będę musiał","say":"Będę musiała to przerobić od nowa."},
     {"ru":"Ты пересолил суп.","en":"<b>Przesoliłeś</b> zupę.","say":"Przesoliłeś zupę."},
     {"ru":"Врач выписал антибиотик.","en":"Lekarz <b>przepisał</b> antybiotyk.","say":"Lekarz przepisał antybiotyk."},
     {"ru":"Я прочитал эту книгу за два вечера.","en":"<b>Przeczytałem</b> tę książkę w dwa wieczory.","say":"Przeczytałem tę książkę w dwa wieczory."}
   ],
   "mistakes":[
     {"wrong":"Przeczytałem tę książkę drugi raz — bardzo mi się podobała za pierwszym.","right":"<b>Przeczytałem ją jeszcze raz.</b>","why":"przeczytać само по себе значит «прочитать до конца». Идею «перечитать» добавляют словами jeszcze raz."},
     {"wrong":"Jutro będę przerobić ten tekst.","right":"Jutro <b>przerobię</b> ten tekst.","why":"глагол с приставкой совершенный, он сам означает будущее — «переделаю»."}
   ],
   "mnemonic":"🔁 prze- = пере-: заново (przerobić), чрезмерно (przepłacić), насквозь (przejść). Но przeczytać — просто «прочитать».",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> заплатил слишком много или добавил недостающее?",
      "q":"«Я переплатил за билеты» —","opts":["Przepłaciłem za bilety","Dopłaciłem za bilety","Zapłaciłem za bilety"],"answer":0,
      "explain":"Слишком много — <b>przepłacić</b>. Dopłacić значит «доплатить недостающее», zapłacić — просто «заплатить»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, что приставка делает с видом.",
      "q":"Форма <b>przerobię</b> означает —","opts":["переделываю","переделаю","переделал"],"answer":1,
      "explain":"Глагол с приставкой совершенный, настоящей формы у него нет: <b>przerobię</b> = «переделаю»."},
     {"type":"choice","howto":"<b>Что делать:</b> это то самое расхождение с русским.",
      "q":"Что значит <b>przeczytać</b>?","opts":["перечитать","прочитать до конца","почитать немного"],"answer":1,
      "explain":"<b>przeczytać</b> — прочитать до конца. «Перечитать» — przeczytać jeszcze raz."}
   ]
  },
  {
   "eyebrow":"Правило 2 · Мера времени",
   "title":"<em>po-</em> немного, <em>do-</em> до конца",
   "paras":[
     "<b>po-</b> на длительных глаголах значит «немного, некоторое время» — точно как русское по-. <b>posiedzieć</b> (посидеть), <b>poczytać</b> (почитать), <b>pospacerować</b> (погулять), <b>porozmawiać</b> (поговорить), <b>popracować</b> (поработать), <b>poleżeć</b> (полежать), <b>pomyśleć</b> (подумать). <b>Posiedźmy jeszcze chwilę.</b>",
     "У po- есть и второе применение, знакомое с A2: оно просто переводит глагол в совершенный вид без всякого «немного» — <b>poprosić</b>, <b>pokazać</b>, <b>podziękować</b>, <b>pomóc</b>. Понять, какое значение перед тобой, помогает сам глагол: у длительных (siedzieć, czytać, spacerować) это «немного», у моментальных — просто вид.",
     "<b>do-</b> — «до конца, до нужной точки»: <b>dokończyć</b> (докончить), <b>doczytać</b> (дочитать), <b>dojeść</b> (доесть), <b>dopisać</b> (дописать), <b>dopłacić</b> (доплатить), <b>dogotować</b> (доварить), <b>dosłyszeć</b> (расслышать). <b>Dopłaciłem dwadzieścia złotych i dostałem większy pokój.</b>",
     "Эти две приставки удобно держать рядом, потому что они делят один день на части: <b>poczytałem godzinę</b> — почитал часок, <b>doczytałem do końca</b> — дочитал до конца, <b>przeczytałem</b> — прочитал целиком. Три приставки, три разные истории про одну и ту же книгу."
   ],
   "audio":"Po- на длительных глаголах значит немного, некоторое время — точно как русское по-. Posiedzieć, посидеть; poczytać, почитать; pospacerować, погулять; porozmawiać, поговорить; popracować, поработать; poleżeć, полежать; pomyśleć, подумать. Posiedźmy jeszcze chwilę. У po- есть и второе применение, знакомое с уровня A2: оно просто переводит глагол в совершенный вид без всякого немного — poprosić, pokazać, podziękować, pomóc. Понять, какое значение перед тобой, помогает сам глагол: у длительных, siedzieć, czytać, spacerować, это немного; у моментальных — просто вид. Do- значит до конца, до нужной точки: dokończyć, докончить; doczytać, дочитать; dojeść, доесть; dopisać, дописать; dopłacić, доплатить; dogotować, доварить; dosłyszeć, расслышать. Dopłaciłem dwadzieścia złotych i dostałem większy pokój. Эти две приставки удобно держать рядом, потому что они делят один день на части: poczytałem godzinę, почитал часок; doczytałem do końca, дочитал до конца; przeczytałem, прочитал целиком. Три приставки, три разные истории про одну и ту же книгу.",
   "table":{"rows":[
     ["<b>posiedzieć · poczytać · pospacerować</b> <button class=\"play\" data-say=\"posiedzieć, poczytać, pospacerować\">🔊</button>","посидеть · почитать · погулять"],
     ["<b>porozmawiać · popracować · poleżeć</b> <button class=\"play\" data-say=\"porozmawiać, popracować, poleżeć\">🔊</button>","поговорить · поработать · полежать"],
     ["<b>dokończyć · doczytać · dojeść</b> <button class=\"play\" data-say=\"dokończyć, doczytać, dojeść\">🔊</button>","докончить · дочитать · доесть"],
     ["<b>dopłacić · dopisać · dogotować</b> <button class=\"play\" data-say=\"dopłacić, dopisać, dogotować\">🔊</button>","доплатить · дописать · доварить"],
     ["poczytać · doczytać · <b>przeczytać</b> <button class=\"play\" data-say=\"poczytać, doczytać, przeczytać\">🔊</button>","почитать · дочитать · прочитать целиком"]
   ],"star":4},
   "examples":[
     {"ru":"Посидим ещё немного.","en":"<b>Posiedźmy</b> jeszcze chwilę.","say":"Posiedźmy jeszcze chwilę."},
     {"ru":"После обеда мы погуляли над Вислой.","en":"Po obiedzie <b>pospacerowaliśmy</b> nad Wisłą.","say":"Po obiedzie pospacerowaliśmy nad Wisłą."},
     {"ru":"Я дочитаю это вечером.","en":"<b>Doczytam</b> to wieczorem.","say":"Doczytam to wieczorem."},
     {"ru":"Я доплатил двадцать злотых.","en":"<b>Dopłaciłem</b> dwadzieścia złotych.","say":"Dopłaciłem dwadzieścia złotych."},
     {"ru":"Нам надо спокойно поговорить.","en":"Musimy spokojnie <b>porozmawiać</b>.","say":"Musimy spokojnie porozmawiać."}
   ],
   "mistakes":[
     {"wrong":"Wczoraj przeczytałem godzinę.","right":"Wczoraj <b>poczytałem</b> godzinę.","why":"«читал некоторое время» — poczytać. Przeczytać значит «прочитать целиком»."},
     {"wrong":"Dopłaciłem za bilety dwa razy więcej.","right":"<b>Przepłaciłem</b> za bilety dwa razy więcej.","why":"заплатил слишком много — prze-. Do- добавляет недостающее."}
   ],
   "mnemonic":"⏳ po- немного (posiedzieć) · do- до конца (doczytać) · prze- целиком и заново (przeczytać, przerobić).",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> «некоторое время» — какая приставка?",
      "q":"«Посидим ещё немного» —","opts":["Posiedzimy jeszcze chwilę","Przesiedzimy jeszcze chwilę","Dosiedzimy jeszcze chwilę"],"answer":0,
      "explain":"Немного, некоторое время — приставка po-: <b>posiedzimy</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> действие доводят до конца.",
      "q":"«Я дочитаю это вечером» —","opts":["Poczytam to wieczorem","Doczytam to wieczorem","Przeczytam to wieczorem"],"answer":1,
      "explain":"До конца, до последней страницы — <b>doczytam</b>."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«Нам надо поговорить»","accept":["musimy porozmawiać","musimy porozmawiac"],"placeholder":"Musimy…"}
   ]
  },
  {
   "eyebrow":"Правило 3 · Три приставки",
   "title":"<em>roz-</em>, <em>za-</em>, <em>od-</em>",
   "paras":[
     "<b>roz-</b> — это раз- и рас-: в стороны, на части, во все концы. <b>rozpakować</b> (распаковать), <b>rozdać</b> (раздать), <b>rozłożyć</b> (разложить), <b>rozebrać się</b> (раздеться), <b>rozejść się</b> (разойтись), <b>rozbić</b> (разбить). Перед некоторыми корнями появляется беглое e — ровно как русское «разо-»: <b>roze</b>jść się, <b>roze</b>brać.",
     "<b>za-</b> держит два смысла. Начало действия: <b>zaśpiewać</b> (запеть), <b>zapłakać</b> (заплакать), <b>zapachnieć</b> (запахнуть), <b>zadzwonić</b> (позвонить). И фиксация, закрепление: <b>zapisać</b> (записать), <b>zapisać się</b> (записаться), <b>zapamiętać</b> (запомнить), <b>zamknąć</b> (закрыть), <b>zamieszkać</b> (поселиться, начать жить где-то).",
     "Здесь же лежит самая известная ловушка польского для русского уха. <b>zapomnieć</b> — это «забыть», а вовсе не «запомнить». Запомнить — <b>zapamiętać</b>. <b>Zapomniałem hasła</b> значит «я забыл пароль». Держи тройку целиком: pamiętać — помнить, zapamiętać — запомнить, zapomnieć — забыть.",
     "<b>od-</b> — от- и ото-: обратно, назад, прочь. <b>oddać</b> (отдать), <b>odzyskać</b> (вернуть себе), <b>odłożyć</b> (отложить), <b>odejść</b> (отойти), <b>odpowiedzieć</b> (ответить), <b>odpisać</b> (ответить письменно — ловушка с B1). <b>Oddaj mi klucze.</b> <b>Odłożyłam to na wtorek.</b>"
   ],
   "audio":"Roz- это раз- и рас-: в стороны, на части, во все концы. Rozpakować, распаковать; rozdać, раздать; rozłożyć, разложить; rozebrać się, раздеться; rozejść się, разойтись; rozbić, разбить. Перед некоторыми корнями появляется беглое e: rozejść się, rozebrać. Za- держит два смысла. Начало действия: zaśpiewać, запеть; zapłakać, заплакать; zapachnieć, запахнуть; zadzwonić, позвонить. И фиксация, закрепление: zapisać, записать; zapisać się, записаться; zapamiętać, запомнить; zamknąć, закрыть; zamieszkać, поселиться. Здесь же лежит самая известная ловушка польского для русского уха. Zapomnieć — это забыть, а вовсе не запомнить. Запомнить — zapamiętać. Zapomniałem hasła значит я забыл пароль. Держи тройку целиком: pamiętać — помнить, zapamiętać — запомнить, zapomnieć — забыть. Od- это от- и ото-: обратно, назад, прочь. Oddać, отдать; odzyskać, вернуть себе; odłożyć, отложить; odejść, отойти; odpowiedzieć, ответить; odpisać, ответить письменно. Oddaj mi klucze. Odłożyłam to na wtorek.",
   "table":{"rows":[
     ["<b>rozpakować · rozdać · rozłożyć</b> <button class=\"play\" data-say=\"rozpakować, rozdać, rozłożyć\">🔊</button>","распаковать · раздать · разложить"],
     ["<b>zaśpiewać · zapłakać</b> <button class=\"play\" data-say=\"zaśpiewać, zapłakać\">🔊</button>","запеть · заплакать — начало"],
     ["<b>zapisać się · zamieszkać · zamknąć</b> <button class=\"play\" data-say=\"zapisać się, zamieszkać, zamknąć\">🔊</button>","записаться · поселиться · закрыть"],
     ["⚠️ <b>zapomnieć</b> — забыть · <b>zapamiętać</b> — запомнить <button class=\"play\" data-say=\"zapomnieć, zapamiętać\">🔊</button>","главная ловушка дня"],
     ["<b>oddać · odzyskać · odłożyć</b> <button class=\"play\" data-say=\"oddać, odzyskać, odłożyć\">🔊</button>","отдать · вернуть себе · отложить"]
   ],"star":3},
   "examples":[
     {"ru":"Я распаковала последнюю коробку.","en":"<b>Rozpakowałam</b> ostatnie pudło.","say":"Rozpakowałam ostatnie pudło."},
     {"ru":"Она записалась на курс в сентябре.","en":"<b>Zapisała się</b> na kurs we wrześniu.","say":"Zapisała się na kurs we wrześniu."},
     {"ru":"Я забыл пароль от почты.","en":"<b>Zapomniałem</b> hasła do poczty.","say":"Zapomniałem hasła do poczty."},
     {"ru":"Запомни эту фамилию, она пригодится.","en":"<b>Zapamiętaj</b> to nazwisko, przyda się.","say":"Zapamiętaj to nazwisko, przyda się."},
     {"ru":"Отдай мне ключи, пожалуйста.","en":"<b>Oddaj</b> mi klucze, proszę.","say":"Oddaj mi klucze, proszę."}
   ],
   "mistakes":[
     {"wrong":"Powtórz, proszę, żebym zapomniał.","right":"Powtórz, proszę, żebym <b>zapamiętał</b>.","why":"запомнить — zapamiętać. Zapomnieć значит ровно противоположное: забыть."},
     {"wrong":"Zamieszkałem się w Krakowie.","right":"<b>Zamieszkałem</b> w Krakowie.","why":"zamieszkać идёт без się: «поселился, начал жить»."}
   ],
   "mnemonic":"⚠️ pamiętać помнить · zapamiętać запомнить · zapomnieć ЗАБЫТЬ. Не перепутай — это стоит дорого.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> смысл ровно противоположен русской подсказке.",
      "q":"«Я забыл пароль» —","opts":["Zapamiętałem hasło","Zapomniałem hasła","Przypomniałem hasło"],"answer":1,
      "explain":"Забыть — <b>zapomnieć</b>; zapamiętać значит «запомнить»."},
     {"type":"choice","howto":"<b>Что делать:</b> вернуть чужое владельцу.",
      "q":"«Отдай мне ключи» —","opts":["Oddaj mi klucze","Odłóż mi klucze","Odzyskaj mi klucze"],"answer":0,
      "explain":"Вернуть владельцу — <b>oddać</b>. Odłożyć значит «отложить», odzyskać — «вернуть себе»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Мы поселились здесь в мае»</b>","answer":"Zamieszkaliśmy tu w maju"}
   ]
  },
  {
   "eyebrow":"Правило 4 · Результат и итог",
   "title":"<em>wy-</em> до результата, <em>z-</em> и <em>s-</em>",
   "paras":[
     "<b>wy-</b> ты знаешь как «наружу»: wyjść, wynieść, wyjechać. Второе его значение — «до результата, полностью»: <b>wyremontować</b> (отремонтировать), <b>wyleczyć</b> (вылечить), <b>wyprać</b> (выстирать), <b>wyczyścić</b> (вычистить), <b>wypić</b> (выпить), <b>wyspać się</b> (выспаться). Последний глагол — самый нужный на этой неделе: <b>Wreszcie się wyspałem.</b>",
     "<b>z-</b> и <b>s-</b> — это одна и та же приставка, русское с-. Пишется <b>s-</b> перед глухими согласными: <b>spakować</b>, <b>sprawdzić</b>, <b>schować</b>, <b>stworzyć</b>. И <b>z-</b> перед звонкими и гласными: <b>zjeść</b>, <b>zrobić</b>, <b>zgubić</b>, <b>zorganizować</b>. Слышишь, что произносишь, — так и пишешь.",
     "Значений у неё два. «Вместе, вниз, прочь»: <b>spakować</b> (собрать вещи), <b>schować</b> (спрятать), <b>zejść</b> (сойти вниз), <b>zgubić</b> (потерять). И просто перевод в совершенный вид: <b>zjeść</b>, <b>zrobić</b>, <b>zorganizować</b>. Русские «съесть», «сделать», «спрятать» устроены абсолютно так же.",
     "Итог дня по расхождениям — их ровно четыре, и держать их лучше списком. <b>zapomnieć</b> = забыть, а запомнить — zapamiętać. <b>przeczytać</b> = прочитать, а не перечитать. <b>zamieszkać</b> = поселиться, начать жить. <b>odpisać</b> = ответить письменно. Двадцать пять новых глаголов за день и четыре ловушки — соотношение по-прежнему в твою пользу."
   ],
   "audio":"Wy- ты знаешь как наружу: wyjść, wynieść, wyjechać. Второе его значение — до результата, полностью: wyremontować, отремонтировать; wyleczyć, вылечить; wyprać, выстирать; wyczyścić, вычистить; wypić, выпить; wyspać się, выспаться. Последний глагол самый нужный на этой неделе: wreszcie się wyspałem. Z- и s- это одна и та же приставка, русское с-. Пишется s- перед глухими согласными: spakować, sprawdzić, schować, stworzyć. И z- перед звонкими и гласными: zjeść, zrobić, zgubić, zorganizować. Слышишь, что произносишь, так и пишешь. Значений у неё два. Вместе, вниз, прочь: spakować, собрать вещи; schować, спрятать; zejść, сойти вниз; zgubić, потерять. И просто перевод в совершенный вид: zjeść, zrobić, zorganizować. Русские съесть, сделать, спрятать устроены абсолютно так же. Итог дня по расхождениям — их ровно четыре. Zapomnieć это забыть, а запомнить это zapamiętać. Przeczytać это прочитать, а не перечитать. Zamieszkać это поселиться, начать жить. Odpisać это ответить письменно. Двадцать пять новых глаголов за день и четыре ловушки — соотношение по-прежнему в твою пользу.",
   "table":{"rows":[
     ["<b>wyremontować · wyleczyć · wyprać</b> <button class=\"play\" data-say=\"wyremontować, wyleczyć, wyprać\">🔊</button>","отремонтировать · вылечить · выстирать"],
     ["<b>wyspać się</b> · Wreszcie się wyspałem. <button class=\"play\" data-say=\"Wreszcie się wyspałem\">🔊</button>","выспаться · Наконец выспался."],
     ["<b>s-</b> перед глухими: spakować, sprawdzić, schować <button class=\"play\" data-say=\"spakować, sprawdzić, schować\">🔊</button>","собрать · проверить · спрятать"],
     ["<b>z-</b> перед звонкими: zjeść, zrobić, zgubić <button class=\"play\" data-say=\"zjeść, zrobić, zgubić\">🔊</button>","съесть · сделать · потерять"],
     ["⚠️ zapomnieć · przeczytać · zamieszkać · odpisać <button class=\"play\" data-say=\"zapomnieć, przeczytać, zamieszkać, odpisać\">🔊</button>","четыре расхождения недели"]
   ],"star":4},
   "examples":[
     {"ru":"Летом мы отремонтировали кухню.","en":"Latem <b>wyremontowaliśmy</b> kuchnię.","say":"Latem wyremontowaliśmy kuchnię."},
     {"ru":"Наконец-то я выспалась.","en":"Wreszcie się <b>wyspałam</b>.","gloss":"мужчина скажет: wyspałem","say":"Wreszcie się wyspałam."},
     {"ru":"Я спрятала ключи в ящик.","en":"<b>Schowałam</b> klucze do szuflady.","say":"Schowałam klucze do szuflady."},
     {"ru":"Он съел половину и сделал вид, что не голоден.","en":"<b>Zjadł</b> połowę i udawał, że nie jest głodny.","say":"Zjadł połowę i udawał, że nie jest głodny."},
     {"ru":"Проверь, всё ли ты собрал.","en":"<b>Sprawdź</b>, czy wszystko <b>spakowałeś</b>.","say":"Sprawdź, czy wszystko spakowałeś."}
   ],
   "mistakes":[
     {"wrong":"Zpakowałem walizkę.","right":"<b>Spakowałem</b> walizkę.","why":"перед глухим p пишется s-: spakować, sprawdzić, schować."},
     {"wrong":"Sjadłem obiad.","right":"<b>Zjadłem</b> obiad.","why":"перед звонким j пишется z-: zjeść, zrobić, zgubić."}
   ],
   "mnemonic":"🧱 wy- до результата (wyspać się) · s- перед глухими (spakować) · z- перед звонкими (zjeść).",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> слушай, глухой согласный идёт следом или звонкий.",
      "q":"«Я собрал чемодан» —","opts":["Zpakowałem walizkę","Spakowałem walizkę","Wypakowałem walizkę"],"answer":1,
      "explain":"Перед глухим p — приставка s-: <b>spakowałem</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> действие доведено до полного результата.",
      "q":"«Наконец я выспался» —","opts":["Wreszcie się wyspałem","Wreszcie zaspałem","Wreszcie pospałem"],"answer":0,
      "explain":"До результата — <b>wyspać się</b>. Zaspać значит «проспать, опоздать»."},
     {"type":"speak","howto":"Нажми микрофон и скажи вслух — четыре приставки в одном предложении.",
      "target":"Rozpakowałem pudło, schowałem książki i wreszcie się wyspałem.","sub":"распаковал коробку, спрятал книги и наконец выспался","want":"Rozpakowałem pudło, schowałem książki i wreszcie się wyspałem."}
   ]
  }
 ],
 "dialogue":{
   "intro":"Воскресный вечер накануне первого рабочего дня. Марек делает вид, что не волнуется. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Wyspałaś się? Jutro pierwsze spotkanie.","ru":"Выспалась? Завтра первая встреча.",
      "words":[["Wyspałaś się","ты выспалась"],["spotkanie","встреча"]]},
     {"who":"A","name":"Anna","side":"left","en":"Prawie. Wstałam o szóstej i poczytałam trochę.","ru":"Почти. Встала в шесть и немного почитала.",
      "words":[["Wstałam","я встала"],["poczytałam","почитала немного"]]},
     {"who":"M","name":"Marek","side":"right","en":"Poczytałaś czy przeczytałaś?","ru":"Почитала или прочитала?",
      "words":[["Poczytałaś","почитала немного"],["przeczytałaś","прочитала до конца"]]},
     {"who":"A","name":"Anna","side":"left","en":"Poczytałam. Do końca doczytam wieczorem.","ru":"Почитала. До конца дочитаю вечером.",
      "words":[["doczytam","дочитаю"],["Do końca","до конца"]]},
     {"who":"M","name":"Marek","side":"right","en":"Rozpakowałaś w końcu to pudło z książkami?","ru":"Ты наконец распаковала ту коробку с книгами?",
      "words":[["Rozpakowałaś","распаковала"],["pudło","коробка"]]},
     {"who":"A","name":"Anna","side":"left","en":"Rozpakowałam i od razu tego pożałowałam.","ru":"Распаковала и сразу об этом пожалела.",
      "words":[["od razu","сразу"],["pożałowałam","пожалела"]]},
     {"who":"M","name":"Marek","side":"right","en":"A umowa? Podpiszesz ją jutro?","ru":"А договор? Подпишешь его завтра?",
      "words":[["umowa","договор"],["Podpiszesz","подпишешь"]]},
     {"who":"A","name":"Anna","side":"left","en":"Jutro tylko rozmowa. Umowę przeczytam spokojnie w domu.","ru":"Завтра только разговор. Договор прочитаю спокойно дома.",
      "words":[["rozmowa","разговор"],["przeczytam","прочитаю до конца"]]},
     {"who":"M","name":"Marek","side":"right","en":"Tylko nie zapomnij dowodu. I zapamiętaj nazwisko przełożonej.","ru":"Только не забудь удостоверение. И запомни фамилию начальницы.",
      "words":[["nie zapomnij","не забудь"],["zapamiętaj","запомни"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка про приставку z- и чужой бутерброд. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Zjadłeś moją kanapkę?","ru":"Ты съел мой бутерброд?"},
     {"who":"B","en":"Zjadłem połowę.","ru":"Съел половину."},
     {"who":"A","en":"Czyli zjadłeś.","ru":"То есть съел."},
     {"who":"B","en":"Drugą połowę odłożyłem.","ru":"Вторую половину я отложил."},
     {"who":"A","en":"Do lodówki czy do siebie?","ru":"В холодильник или в себя?"}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — восемь приставок в работе и четыре ловушки.",
   "items":[
     {"en":"przerobić","ru":"переделать","ex":"Muszę to przerobić od nowa."},
     {"en":"przepłacić","ru":"переплатить","ex":"Przepłaciłem za bilety."},
     {"en":"posiedzieć / poczytać","ru":"посидеть / почитать","ex":"Posiedźmy jeszcze chwilę."},
     {"en":"dokończyć / doczytać","ru":"докончить / дочитать","ex":"Doczytam to wieczorem."},
     {"en":"dopłacić","ru":"доплатить","ex":"Dopłaciłem dwadzieścia złotych."},
     {"en":"rozpakować / rozdać","ru":"распаковать / раздать","ex":"Rozpakowałam pudło z książkami."},
     {"en":"zapisać się","ru":"записаться","ex":"Zapisała się na kurs we wrześniu."},
     {"en":"zapamiętać / zapomnieć","ru":"запомнить / забыть","ex":"Nie zapomnij dowodu."},
     {"en":"zamieszkać","ru":"поселиться","ex":"Zamieszkaliśmy tu w maju."},
     {"en":"oddać / odzyskać","ru":"отдать / вернуть себе","ex":"Oddaj mi klucze."},
     {"en":"wyspać się","ru":"выспаться","ex":"Wreszcie się wyspałam."},
     {"en":"spakować / schować","ru":"собрать вещи / спрятать","ex":"Schowałam klucze do szuflady."}
   ]
 },
 "drag":{
   "intro":"Перетащи польский глагол к его русскому близнецу. Приставка подскажет сама.",
   "pairs":[["przepłacić","переплатить"],["posiedzieć","посидеть"],["rozdać","раздать"],["dopłacić","доплатить"]]
 },
 "reading":{
   "intro":"Прочитай и послушай про воскресенье перед первым рабочим днём. Почти каждый глагол здесь с приставкой.",
   "title":"Niedziela przed pierwszym dniem",
   "sentences":["W niedzielę wstałam wcześnie, chociaż wreszcie mogłam się wyspać.","Poczytałam godzinę, ale książki nie doczytałam.","Potem rozpakowałam ostatnie pudło z Włoch.","Znalazłam w nim trzy przewodniki i zupełnie pusty notes.","Notes schowałam do torby, bo jutro na pewno się przyda.","Marek przerobił półkę w kuchni, żeby zmieściły się słoiki.","Przy okazji przesolił zupę i udawał, że tak miało być.","Po obiedzie pospacerowaliśmy nad Wisłą prawie godzinę.","Wieczorem zapisałam sobie nazwisko przełożonej, żeby go nie zapomnieć.","Resztę spraw odłożyłam na wtorek i poszłam spać przed dziesiątą."],
   "translation":"В воскресенье я встала рано, хотя наконец могла выспаться. Почитала час, но книгу не дочитала. Потом распаковала последнюю коробку из Италии. Нашла в ней три путеводителя и совершенно пустой блокнот. Блокнот спрятала в сумку, потому что завтра он точно пригодится. Марек переделал полку на кухне, чтобы поместились банки. Заодно пересолил суп и делал вид, что так и было задумано. После обеда мы почти час гуляли над Вислой. Вечером я записала себе фамилию начальницы, чтобы её не забыть. Остальные дела отложила на вторник и легла спать до десяти."
 },
 "quiz":{
   "intro":"Пять вопросов — и завод приставок заработает без тебя.",
   "items":[
     {"q":"1. «Я переплатил за билеты» —","opts":["Przepłaciłem za bilety","Dopłaciłem za bilety","Zapłaciłem za bilety"],"answer":0,
      "explain":"Заплатил слишком много — <b>przepłacić</b>."},
     {"q":"2. «Посидим ещё немного» —","opts":["Posiedzimy jeszcze chwilę","Przesiedzimy jeszcze chwilę","Dosiedzimy jeszcze chwilę"],"answer":0,
      "explain":"Немного, некоторое время — приставка po-: <b>posiedzimy</b>."},
     {"q":"3. «Я забыл пароль» —","opts":["Zapamiętałem hasło","Zapomniałem hasła","Przypomniałem hasło"],"answer":1,
      "explain":"Забыть — <b>zapomnieć</b>; запомнить — zapamiętać."},
     {"q":"4. «Отдай мне ключи» —","opts":["Oddaj mi klucze","Odłóż mi klucze","Odzyskaj mi klucze"],"answer":0,
      "explain":"Вернуть владельцу — <b>oddać</b>."},
     {"q":"5. Что значит <b>przeczytać</b>?","opts":["перечитать","прочитать до конца","почитать немного"],"answer":1,
      "explain":"<b>przeczytać</b> — прочитать целиком; «перечитать» — przeczytać jeszcze raz."}
   ]
 },
 "essay":{
   "intro":"Сегодня текст соберётся сам: возьми свои вчерашние дела и подбери к каждому приставку.",
   "prompt":"Напиши 5–7 предложений о вчерашнем дне: что ты немного поделал(а), что довёл(довела) до конца, что распаковал(а) или собрал(а), что отложил(а) и что забыл(а).",
   "hint":"Каркас: Wczoraj poczytałem / poczytałam… · Doczytałem / Doczytałam… · Rozpakowałem / Rozpakowałam… · Odłożyłem / Odłożyłam… na… · Zapomniałem / Zapomniałam… 💛",
   "example":"Wczoraj rano poczytałem godzinę przy kawie. Potem posprzątałem kuchnię i wreszcie doczytałem tę książkę do końca. Po południu rozpakowałem pudło, które stało w korytarzu od maja. Połowę rzeczy schowałem do szafy, a resztę oddałem sąsiadce. Wieczorem chciałem przerobić stary regał, ale odłożyłem to na sobotę. Zapomniałem zadzwonić do brata i przypomniałem sobie o tym dopiero w nocy. Za to wreszcie się wyspałem."
 }
},
"4": {
 "day":4,"week":"01",
 "themeRu":"Кто и где: фабрика слов",
 "themeEn":"Nauczyciel, kawiarnia",
 "intro":"Сегодня игра: я покажу слово, которого ты никогда не учил(а), а ты его поймёшь. Работает это потому, что польские существительные и прилагательные собираются из деталей. <b>uczyć</b> плюс <b>-ciel</b> даёт <b>nauczyciel</b>. <b>kawa</b> плюс <b>-arnia</b> даёт <b>kawiarnia</b>. <b>wolny</b> плюс <b>-ość</b> даёт <b>wolność</b>. Русский собирает точно так же — учи-тель, коф-ейня, воль-ность.",
 "introAudio":"Сегодня игра: я покажу слово, которого ты никогда не учил, а ты его поймёшь. Работает это потому, что польские существительные и прилагательные собираются из деталей. Uczyć плюс -ciel даёт nauczyciel. Kawa плюс -arnia даёт kawiarnia. Wolny плюс -ość даёт wolność. Русский собирает точно так же: учи-тель, коф-ейня, воль-ность.",
 "goals":[
   "Узнавать деятеля по хвосту: <b>-arz</b>, <b>-acz</b>, <b>-nik</b>, <b>-ciel</b>, <b>-ca</b>",
   "Делать женскую пару: <b>-ka</b> и <b>-ni</b> (nauczycielka, sprzedawczyni)",
   "Читать названия мест: <b>kawiarnia</b>, <b>księgarnia</b>, <b>pralnia</b>",
   "Строить признак и качество: <b>-owy</b>, <b>-ny</b>, <b>-ski</b>, <b>-liwy</b>, <b>-ość</b>"
 ],
 "learned":[
   "Узнал(а) деятеля по хвосту: -arz, -acz, -nik, -ciel, -ca",
   "Сделал(а) женскую пару: -ka и -ni (nauczycielka, sprzedawczyni)",
   "Прочитал(а) названия мест: kawiarnia, księgarnia, pralnia",
   "Построил(а) признак и качество: -owy, -ny, -ski, -liwy, -ość"
 ],
 "review":{
   "intro":"Приставки вчерашнего дня и одна пара из позавчерашнего. Потом открываем фабрику.",
   "introAudio":"Приставки вчерашнего дня и одна пара из позавчерашнего. Потом открываем фабрику.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> смысл противоположен русской подсказке.",
      "q":"«Я забыл пароль» —","opts":["Zapamiętałem hasło","Zapomniałem hasła","Przypomniałem hasło"],"answer":1,
      "explain":"Забыть — <b>zapomnieć</b>; запомнить — zapamiętać."},
     {"type":"choice","howto":"<b>Что делать:</b> выспался или проспал?",
      "q":"«Я выспался» —","opts":["Wyspałem się","Zaspałem","Pospałem się"],"answer":0,
      "explain":"До полного результата — <b>wyspać się</b>. Zaspać значит «проспать, опоздать»."},
     {"type":"choice","howto":"<b>Что делать:</b> слово zwykle решает время.",
      "q":"«Обычно я нахожу их в интернете» —","opts":["Zwykle znajdę je w internecie","Zwykle znajduję je w internecie","Zwykle znalazłam je w internecie"],"answer":1,
      "explain":"Привычка в настоящем — <b>znajduję</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Отдай мне ключи»</b>","answer":"Oddaj mi klucze"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Правило 1 · Кто это делает",
   "title":"<em>lekarz, słuchacz, pracownik, nauczyciel</em>",
   "paras":[
     "«Тот, кто это делает» собирается из корня и суффикса, и суффиксов всего пять с половиной. <b>-arz</b> — самый старый и самый узнаваемый: <b>lekarz</b> (врач), <b>piekarz</b> (пекарь), <b>pisarz</b> (писатель), <b>malarz</b> (художник, маляр), <b>kucharz</b> (повар), <b>dziennikarz</b> (журналист), <b>bramkarz</b> (вратарь). Русское -арь — тот же самый суффикс: пекарь, лекарь, писарь.",
     "<b>-acz</b> идёт от глагола: <b>słuchacz</b> (слушатель), <b>biegacz</b> (бегун), <b>badacz</b> (исследователь), <b>tłumacz</b> (переводчик), <b>gracz</b> (игрок). Тем же хвостом называют приборы, которые «делают» работу за человека: <b>odkurzacz</b> (пылесос), <b>opiekacz</b> (тостер). Логика ровно как в русских «пылесос» и «нагреватель».",
     "<b>-nik</b> — самый широкий: <b>pracownik</b> (сотрудник), <b>kierownik</b> (руководитель), <b>urzędnik</b> (чиновник), <b>ogrodnik</b> (садовник), <b>rolnik</b> (фермер), <b>prawnik</b> (юрист), <b>uczestnik</b> (участник). Он же делает предметы: <b>czajnik</b> (чайник), <b>słownik</b> (словарь), <b>ręcznik</b> (полотенце).",
     "Остаются два. <b>-ciel</b> от глагола: <b>nauczyciel</b> (учитель), <b>właściciel</b> (владелец), <b>przyjaciel</b> (друг). И <b>-ca</b>: <b>kierowca</b> (водитель), <b>sprzedawca</b> (продавец), <b>wykładowca</b> (преподаватель в вузе), <b>doradca</b> (советник). Слова на -ca мужского рода, но склоняются как женские: <b>kierowca, kierowcy, kierowcę, kierowcą</b>. Плюс маленькая группа на <b>-owiec</b>: <b>naukowiec</b> (учёный), <b>sportowiec</b> (спортсмен), <b>handlowiec</b> (менеджер по продажам)."
   ],
   "audio":"Тот, кто это делает, собирается из корня и суффикса, и суффиксов всего пять с половиной. Хвост -arz самый старый и самый узнаваемый: lekarz, врач; piekarz, пекарь; pisarz, писатель; malarz, художник; kucharz, повар; dziennikarz, журналист; bramkarz, вратарь. Русское -арь это тот же самый суффикс: пекарь, лекарь, писарь. Хвост -acz идёт от глагола: słuchacz, слушатель; biegacz, бегун; badacz, исследователь; tłumacz, переводчик; gracz, игрок. Тем же хвостом называют приборы: odkurzacz, пылесос; opiekacz, тостер. Хвост -nik самый широкий: pracownik, сотрудник; kierownik, руководитель; urzędnik, чиновник; ogrodnik, садовник; rolnik, фермер; prawnik, юрист; uczestnik, участник. Он же делает предметы: czajnik, чайник; słownik, словарь; ręcznik, полотенце. Остаются два. Хвост -ciel от глагола: nauczyciel, учитель; właściciel, владелец; przyjaciel, друг. И хвост -ca: kierowca, водитель; sprzedawca, продавец; wykładowca, преподаватель в вузе; doradca, советник. Слова на -ca мужского рода, но склоняются как женские: kierowca, kierowcy, kierowcę, kierowcą. Плюс маленькая группа на -owiec: naukowiec, учёный; sportowiec, спортсмен; handlowiec, менеджер по продажам.",
   "table":{"rows":[
     ["<b>-arz</b> · lekarz, piekarz, pisarz <button class=\"play\" data-say=\"lekarz, piekarz, pisarz\">🔊</button>","врач · пекарь · писатель"],
     ["<b>-acz</b> · słuchacz, tłumacz, odkurzacz <button class=\"play\" data-say=\"słuchacz, tłumacz, odkurzacz\">🔊</button>","слушатель · переводчик · пылесос"],
     ["<b>-nik</b> · pracownik, kierownik, prawnik <button class=\"play\" data-say=\"pracownik, kierownik, prawnik\">🔊</button>","сотрудник · руководитель · юрист"],
     ["<b>-ciel</b> · nauczyciel, właściciel <button class=\"play\" data-say=\"nauczyciel, właściciel\">🔊</button>","учитель · владелец"],
     ["<b>-ca</b> · kierowca, sprzedawca, doradca <button class=\"play\" data-say=\"kierowca, sprzedawca, doradca\">🔊</button>","водитель · продавец · советник"],
     ["<b>-owiec</b> · naukowiec, sportowiec <button class=\"play\" data-say=\"naukowiec, sportowiec\">🔊</button>","учёный · спортсмен"]
   ],"star":4},
   "examples":[
     {"ru":"Мой сосед — переводчик с испанского.","en":"Mój sąsiad jest <b>tłumaczem</b> z hiszpańskiego.","say":"Mój sąsiad jest tłumaczem z hiszpańskiego."},
     {"ru":"Кто руководитель этого отдела?","en":"Kto jest <b>kierownikiem</b> tego działu?","say":"Kto jest kierownikiem tego działu?"},
     {"ru":"Водитель ждёт перед домом.","en":"<b>Kierowca</b> czeka przed domem.","say":"Kierowca czeka przed domem."},
     {"ru":"Владелец квартиры живёт в Гданьске.","en":"<b>Właściciel</b> mieszkania mieszka w Gdańsku.","say":"Właściciel mieszkania mieszka w Gdańsku."},
     {"ru":"Я разговаривала с водителем полчаса.","en":"Rozmawiałam z <b>kierowcą</b> pół godziny.","say":"Rozmawiałam z kierowcą pół godziny."}
   ],
   "mistakes":[
     {"wrong":"Rozmawiałam z kierowcem.","right":"Rozmawiałam z <b>kierowcą</b>.","why":"слова на -ca склоняются как женские: kierowcy, kierowcę, kierowcą."},
     {"wrong":"On jest tłumaczyk.","right":"On jest <b>tłumaczem</b>.","why":"переводчик — tłumacz; в роли «кто он такой» слово стоит в творительном падеже."}
   ],
   "mnemonic":"🏭 -arz врач и пекарь · -acz слушатель и пылесос · -nik сотрудник · -ciel учитель · -ca водитель.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> разбери слово на корень и хвост.",
      "q":"Кто такой <b>tłumacz</b>?","opts":["толкователь снов","переводчик","бегун"],"answer":1,
      "explain":"Корень tłumaczyć — «переводить», хвост -acz — «тот, кто делает»: <b>переводчик</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, как склоняются слова на -ca.",
      "q":"«Я разговаривала с водителем» —","opts":["Rozmawiałam z kierowcem","Rozmawiałam z kierowcą","Rozmawiałam z kierownikiem"],"answer":1,
      "explain":"Слова на -ca берут женские окончания: <b>z kierowcą</b>. Kierownik — это руководитель."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«Кто руководитель этого отдела?»","accept":["kto jest kierownikiem tego działu","kto jest kierownikiem tego dzialu"],"placeholder":"Kto jest…"}
   ]
  },
  {
   "eyebrow":"Правило 2 · Женская пара",
   "title":"<em>nauczycielka</em>, <em>sprzedawczyni</em>",
   "paras":[
     "Чаще всего женская пара делается суффиксом <b>-ka</b>: nauczyciel → <b>nauczycielka</b>, lekarz → <b>lekarka</b>, pisarz → <b>pisarka</b>, dziennikarz → <b>dziennikarka</b>, student → <b>studentka</b>, Polak → <b>Polka</b>. У слов на -nik женская форма обычно <b>-niczka</b>: urzędnik → <b>urzędniczka</b>, kierownik → <b>kierowniczka</b>, ogrodnik → <b>ogrodniczka</b>. Исключение, которое надо знать: pracownik → <b>pracownica</b>.",
     "Вторая модель — <b>-ni</b> и <b>-yni</b>. Она обслуживает слова на -ca и несколько старых: sprzedawca → <b>sprzedawczyni</b>, wykładowca → <b>wykładowczyni</b>, mistrz → <b>mistrzyni</b>, gospodarz → <b>gospodyni</b>, bóg → <b>bogini</b>. Русское «мастерица» и «богиня» — тот же ход мысли.",
     "И честная оговорка про живой язык, без неё картина будет неправдой. Не все женские формы звучат одинаково привычно. <b>Nauczycielka, lekarka, dziennikarka, studentka, kierowniczka</b> абсолютно нейтральны, их слышишь каждый день. А, скажем, <b>psycholożka</b> или <b>gościni</b> для части поляков ещё звучат ново, и в документах часто пишут <b>pani psycholog</b>, <b>pani doktor</b> — мужская форма плюс слово pani.",
     "Отсюда важная мелочь, которая пригодится уже в понедельник: после <b>pani</b> название должности не склоняется. <b>Rozmawiałam z panią doktor</b>, <b>z panią dyrektor</b>, <b>z panią redaktor</b> — меняется только само слово pani, а doktor, dyrektor, redaktor стоят в исходной форме."
   ],
   "audio":"Чаще всего женская пара делается суффиксом -ka: nauczyciel даёт nauczycielkę, lekarz даёт lekarkę, pisarz даёт pisarkę, dziennikarz даёт dziennikarkę, student даёт studentkę, Polak даёт Polkę. У слов на -nik женская форма обычно -niczka: urzędnik даёт urzędniczkę, kierownik даёт kierowniczkę, ogrodnik даёт ogrodniczkę. Исключение, которое надо знать: pracownik даёт pracownicę. Вторая модель — -ni и -yni. Она обслуживает слова на -ca и несколько старых: sprzedawca даёт sprzedawczynię, wykładowca даёт wykładowczynię, mistrz даёт mistrzynię, gospodarz даёт gospodynię, bóg даёт boginię. Русское мастерица и богиня — тот же ход мысли. И честная оговорка про живой язык. Не все женские формы звучат одинаково привычно. Nauczycielka, lekarka, dziennikarka, studentka, kierowniczka абсолютно нейтральны. А, скажем, psycholożka или gościni для части поляков ещё звучат ново, и в документах часто пишут pani psycholog, pani doktor — мужская форма плюс слово pani. Отсюда важная мелочь: после pani название должности не склоняется. Rozmawiałam z panią doktor, z panią dyrektor, z panią redaktor — меняется только само слово pani.",
   "table":{"rows":[
     ["nauczyciel → <b>nauczycielka</b> · lekarz → <b>lekarka</b> <button class=\"play\" data-say=\"nauczycielka, lekarka\">🔊</button>","учительница · врач-женщина"],
     ["urzędnik → <b>urzędniczka</b> · kierownik → <b>kierowniczka</b> <button class=\"play\" data-say=\"urzędniczka, kierowniczka\">🔊</button>","у слов на -nik хвост -niczka"],
     ["⚠️ pracownik → <b>pracownica</b> <button class=\"play\" data-say=\"pracownica\">🔊</button>","исключение из предыдущей строки"],
     ["sprzedawca → <b>sprzedawczyni</b> · gospodarz → <b>gospodyni</b> <button class=\"play\" data-say=\"sprzedawczyni, gospodyni\">🔊</button>","модель -ni, -yni"],
     ["z <b>panią doktor</b> · z <b>panią dyrektor</b> <button class=\"play\" data-say=\"z panią doktor, z panią dyrektor\">🔊</button>","должность после pani не склоняется"]
   ],"star":2},
   "examples":[
     {"ru":"Моя мама — учительница английского.","en":"Moja mama jest <b>nauczycielką</b> angielskiego.","say":"Moja mama jest nauczycielką angielskiego."},
     {"ru":"Продавщица уже знает моё имя.","en":"<b>Sprzedawczyni</b> zna już moje imię.","say":"Sprzedawczyni zna już moje imię."},
     {"ru":"Я разговаривала с директором — с пани директор.","en":"Rozmawiałam z <b>panią dyrektor</b>.","say":"Rozmawiałam z panią dyrektor."},
     {"ru":"Новая сотрудница начинает в понедельник.","en":"Nowa <b>pracownica</b> zaczyna w poniedziałek.","say":"Nowa pracownica zaczyna w poniedziałek."}
   ],
   "mistakes":[
     {"wrong":"Rozmawiałam z panią dyrektorką.","right":"Rozmawiałam z <b>panią dyrektor</b>.","why":"после pani должность остаётся в исходной форме и не склоняется."},
     {"wrong":"Nowa pracowniczka zaczyna w poniedziałek.","right":"Nowa <b>pracownica</b> zaczyna w poniedziałek.","why":"у pracownik женская пара нестандартная: pracownica."}
   ],
   "mnemonic":"👩‍🏫 -ka на большинстве · -niczka у слов на -nik · -ni, -yni у слов на -ca. После pani должность не гнётся.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни модель для слов на -ca.",
      "q":"Женская пара к <b>sprzedawca</b> —","opts":["sprzedawka","sprzedawczyni","sprzedawcowa"],"answer":1,
      "explain":"У слов на -ca женская форма на -yni: <b>sprzedawczyni</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> смотри, склоняется ли должность после pani.",
      "q":"«Я разговаривала с пани директор» —","opts":["Rozmawiałam z panią dyrektorką","Rozmawiałam z panią dyrektor","Rozmawiałam z pani dyrektor"],"answer":1,
      "explain":"Склоняется только pani: <b>z panią dyrektor</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Моя мама — учительница английского»</b>","answer":"Moja mama jest nauczycielką angielskiego"}
   ]
  },
  {
   "eyebrow":"Правило 3 · Где это делают",
   "title":"<em>kawiarnia, księgarnia, pralnia</em>",
   "paras":[
     "Место, где что-то делают или продают, кончается на <b>-nia</b>, <b>-arnia</b> или <b>-ernia</b>. Возьми предмет и добавь хвост: kawa → <b>kawiarnia</b> (кафе), książka → <b>księgarnia</b> (книжный магазин), piec → <b>piekarnia</b> (пекарня), kwiat → <b>kwiaciarnia</b> (цветочный), lody → <b>lodziarnia</b> (кафе-мороженое), cukier → <b>cukiernia</b> (кондитерская), herbata → <b>herbaciarnia</b> (чайная).",
     "Тот же хвост садится и на глаголы: prać → <b>pralnia</b> (прачечная), drukować → <b>drukarnia</b> (типография), palić → <b>palarnia</b> (курилка), jadać → <b>jadalnia</b> (столовая), sypiać → <b>sypialnia</b> (спальня), pływać → <b>pływalnia</b> (бассейн). Последние три сделаны от многократных глаголов, которые были в позавчерашнем дне.",
     "Все эти слова женского рода и склоняются одинаково: <b>kawiarnia, kawiarni, kawiarni, kawiarnię, kawiarnią, kawiarni</b>. Родительный множественного короткий, без окончания: <b>kawiarni, księgarni, piekarni, cukierni</b>. Из-за этого <b>Idę do kawiarni</b> и <b>Wracam z kawiarni</b> звучат одинаково — разницу держит предлог, и это нормально.",
     "Отдельно стоит запомнить <b>siłownia</b> — спортзал, буквально «силовня», от siła. И одно слово, которое ломает всю логику: магазин по-польски <b>sklep</b>, а русский «склеп» — это польское <b>krypta</b> или <b>grobowiec</b>. Классическая ловушка, о которой стоит помнить на всякий случай."
   ],
   "audio":"Место, где что-то делают или продают, кончается на -nia, -arnia или -ernia. Возьми предмет и добавь хвост: kawa даёт kawiarnię, кафе; książka даёт księgarnię, книжный магазин; piec даёт piekarnię, пекарню; kwiat даёт kwiaciarnię, цветочный; lody дают lodziarnię; cukier даёт cukiernię, кондитерскую; herbata даёт herbaciarnię, чайную. Тот же хвост садится и на глаголы: prać даёт pralnię, прачечную; drukować даёт drukarnię, типографию; palić даёт palarnię, курилку; jadać даёт jadalnię, столовую; sypiać даёт sypialnię, спальню; pływać даёт pływalnię, бассейн. Все эти слова женского рода и склоняются одинаково: kawiarnia, kawiarni, kawiarnię, kawiarnią. Родительный множественного короткий, без окончания: kawiarni, księgarni, piekarni, cukierni. Из-за этого idę do kawiarni и wracam z kawiarni звучат одинаково — разницу держит предлог, и это нормально. Отдельно стоит запомнить siłownię, спортзал, буквально силовня, от siła. И одно слово, которое ломает всю логику: магазин по-польски sklep, а русский склеп это польское krypta или grobowiec.",
   "table":{"rows":[
     ["kawa → <b>kawiarnia</b> · książka → <b>księgarnia</b> <button class=\"play\" data-say=\"kawiarnia, księgarnia\">🔊</button>","кафе · книжный магазин"],
     ["<b>piekarnia · cukiernia · kwiaciarnia</b> <button class=\"play\" data-say=\"piekarnia, cukiernia, kwiaciarnia\">🔊</button>","пекарня · кондитерская · цветочный"],
     ["prać → <b>pralnia</b> · drukować → <b>drukarnia</b> <button class=\"play\" data-say=\"pralnia, drukarnia\">🔊</button>","прачечная · типография"],
     ["<b>jadalnia · sypialnia · siłownia</b> <button class=\"play\" data-say=\"jadalnia, sypialnia, siłownia\">🔊</button>","столовая · спальня · спортзал"],
     ["do <b>kawiarni</b> · z <b>kawiarni</b> <button class=\"play\" data-say=\"do kawiarni, z kawiarni\">🔊</button>","формы совпадают, предлог решает"],
     ["⚠️ <b>sklep</b> · <b>krypta</b> <button class=\"play\" data-say=\"sklep, krypta\">🔊</button>","магазин · склеп"]
   ],"star":5},
   "examples":[
     {"ru":"Пекарня открывается в шесть.","en":"<b>Piekarnia</b> otwiera się o szóstej.","say":"Piekarnia otwiera się o szóstej."},
     {"ru":"Я иду в книжный за словарём.","en":"Idę do <b>księgarni</b> po słownik.","say":"Idę do księgarni po słownik."},
     {"ru":"Прачечная работает напротив.","en":"<b>Pralnia</b> działa naprzeciwko.","say":"Pralnia działa naprzeciwko."},
     {"ru":"В субботу я хожу в спортзал.","en":"W soboty chodzę na <b>siłownię</b>.","say":"W soboty chodzę na siłownię."},
     {"ru":"Мы сидели в кондитерской два часа.","en":"Siedzieliśmy w <b>cukierni</b> dwie godziny.","say":"Siedzieliśmy w cukierni dwie godziny."}
   ],
   "mistakes":[
     {"wrong":"Idę do księgarnii.","right":"Idę do <b>księgarni</b>.","why":"родительный у этих слов короткий, с одним i: księgarni, kawiarni, piekarni."},
     {"wrong":"Kupiłem chleb w sklepie… to znaczy w krypcie.","right":"Kupiłem chleb w <b>sklepie</b>.","why":"sklep — это магазин. Русский «склеп» по-польски krypta или grobowiec."}
   ],
   "mnemonic":"🏪 Предмет плюс -arnia даёт место: kawa → kawiarnia, książka → księgarnia, cukier → cukiernia.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> собери слово из корня и хвоста.",
      "q":"«Пекарня» —","opts":["piekarz","piekarnia","pieczywo"],"answer":1,
      "explain":"Место — хвост -arnia: <b>piekarnia</b>. Piekarz — это пекарь, pieczywo — выпечка."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни короткий родительный.",
      "q":"«Я иду в книжный» —","opts":["Idę do księgarnii","Idę do księgarni","Idę do księgarnia"],"answer":1,
      "explain":"Родительный короткий, с одним i: <b>do księgarni</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> разложи слово на части: siła плюс место.",
      "q":"Что такое <b>siłownia</b>?","opts":["электростанция","спортзал","мастерская"],"answer":1,
      "explain":"Siła — «сила», хвост -ownia — место: <b>спортзал</b>."}
   ]
  },
  {
   "eyebrow":"Правило 4 · Признак и качество",
   "title":"<em>-owy, -ny, -ski, -liwy</em> и <em>-ość</em>",
   "paras":[
     "Прилагательное «относящийся к чему-то» делается суффиксом <b>-owy</b>: komputer → <b>komputerowy</b>, samochód → <b>samochodowy</b>, bank → <b>bankowy</b>, owoc → <b>owocowy</b>, papier → <b>papierowy</b>, służba → <b>służbowy</b> (служебный). Русские -овый и -ный работают ровно так же.",
     "<b>-ny</b> даёт обычное качество: smak → <b>smaczny</b> (вкусный), głód → <b>głodny</b> (голодный), spokój → <b>spokojny</b> (спокойный), plus знакомые ważny, trudny, ładny. <b>-ski</b> — принадлежность к месту или группе: Kraków → <b>krakowski</b>, Warszawa → <b>warszawski</b>, Polska → <b>polski</b>, wieś → <b>wiejski</b> (деревенский), miasto → <b>miejski</b> (городской).",
     "<b>-liwy</b> — склонность к чему-то, и это прямой двойник русского -ливый: cierpieć → <b>cierpliwy</b> (терпеливый), szczęście → <b>szczęśliwy</b> (счастливый), kłopot → <b>kłopotliwy</b> (хлопотный), wątpić → <b>wątpliwy</b> (сомнительный), gadać → <b>gadatliwy</b> (болтливый).",
     "И обратный ход: из прилагательного делается абстрактное существительное на <b>-ość</b>, женского рода — точно как русское -ость. wolny → <b>wolność</b> (свобода), możliwy → <b>możliwość</b> (возможность), trudny → <b>trudność</b>, ciekawy → <b>ciekawość</b> (любопытство), samotny → <b>samotność</b> (одиночество), przyszły → <b>przyszłość</b> (будущее), cierpliwy → <b>cierpliwość</b> (терпение). Ловушка одна, зато громкая: <b>miłość</b> — это любовь, а не «милость»."
   ],
   "audio":"Прилагательное относящийся к чему-то делается суффиксом -owy: komputer даёт komputerowy, samochód даёт samochodowy, bank даёт bankowy, owoc даёт owocowy, papier даёт papierowy, służba даёт służbowy, служебный. Русские -овый и -ный работают ровно так же. Хвост -ny даёт обычное качество: smak даёт smaczny, вкусный; głód даёт głodny, голодный; spokój даёт spokojny, спокойный. Хвост -ski это принадлежность к месту или группе: Kraków даёт krakowski, Warszawa даёт warszawski, Polska даёт polski, wieś даёт wiejski, деревенский; miasto даёт miejski, городской. Хвост -liwy это склонность к чему-то, прямой двойник русского -ливый: cierpieć даёт cierpliwy, терпеливый; szczęście даёт szczęśliwy, счастливый; kłopot даёт kłopotliwy, хлопотный; wątpić даёт wątpliwy, сомнительный; gadać даёт gadatliwy, болтливый. И обратный ход: из прилагательного делается абстрактное существительное на -ość, женского рода, точно как русское -ость. Wolny даёт wolność, свобода; możliwy даёт możliwość, возможность; ciekawy даёт ciekawość, любопытство; samotny даёт samotność, одиночество; przyszły даёт przyszłość, будущее; cierpliwy даёт cierpliwość, терпение. Ловушка одна, зато громкая: miłość это любовь, а не милость.",
   "table":{"rows":[
     ["<b>-owy</b> · komputerowy, bankowy, służbowy <button class=\"play\" data-say=\"komputerowy, bankowy, służbowy\">🔊</button>","компьютерный · банковский · служебный"],
     ["<b>-ny</b> · smaczny, głodny, spokojny <button class=\"play\" data-say=\"smaczny, głodny, spokojny\">🔊</button>","вкусный · голодный · спокойный"],
     ["<b>-ski</b> · krakowski, wiejski, miejski <button class=\"play\" data-say=\"krakowski, wiejski, miejski\">🔊</button>","краковский · деревенский · городской"],
     ["<b>-liwy</b> · cierpliwy, szczęśliwy, wątpliwy <button class=\"play\" data-say=\"cierpliwy, szczęśliwy, wątpliwy\">🔊</button>","терпеливый · счастливый · сомнительный"],
     ["<b>-ość</b> · wolność, możliwość, cierpliwość <button class=\"play\" data-say=\"wolność, możliwość, cierpliwość\">🔊</button>","свобода · возможность · терпение"],
     ["⚠️ <b>miłość</b> <button class=\"play\" data-say=\"miłość\">🔊</button>","любовь, а не «милость»"]
   ],"star":5},
   "examples":[
     {"ru":"У меня служебный компьютер и служебный телефон.","en":"Mam <b>służbowy</b> komputer i <b>służbowy</b> telefon.","say":"Mam służbowy komputer i służbowy telefon."},
     {"ru":"Это был очень вкусный ужин.","en":"To była bardzo <b>smaczna</b> kolacja.","say":"To była bardzo smaczna kolacja."},
     {"ru":"Работа в издательстве требует терпения.","en":"Praca w wydawnictwie wymaga <b>cierpliwości</b>.","say":"Praca w wydawnictwie wymaga cierpliwości."},
     {"ru":"У нас есть такая возможность.","en":"Mamy taką <b>możliwość</b>.","say":"Mamy taką możliwość."},
     {"ru":"Он терпеливый человек, но не сегодня.","en":"To <b>cierpliwy</b> człowiek, ale nie dzisiaj.","say":"To cierpliwy człowiek, ale nie dzisiaj."}
   ],
   "mistakes":[
     {"wrong":"Dziękuję za pana miłość i pomoc.","right":"Dziękuję za pana <b>życzliwość</b> i pomoc.","why":"miłość — это любовь. «Милость, доброжелательность» ближе к życzliwość или dobroć."}
   ],
   "mnemonic":"🧩 -owy к чему относится · -ny какой · -ski откуда · -liwy склонный · -ość качество целиком.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> нужно существительное, а не прилагательное.",
      "q":"«Возможность» —","opts":["możliwy","możliwość","możliwie"],"answer":1,
      "explain":"Абстрактное существительное — хвост -ość: <b>możliwość</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> не доверяй похожему русскому слову.",
      "q":"Что значит <b>miłość</b>?","opts":["милость","любовь","молодость"],"answer":1,
      "explain":"<b>miłość</b> — любовь. Милость и доброжелательность — życzliwość, dobroć."},
     {"type":"speak","howto":"Нажми микрофон и скажи вслух — три суффикса в одной фразе.",
      "target":"Praca w wydawnictwie wymaga cierpliwości i dobrej pamięci.","sub":"работа в издательстве требует терпения и хорошей памяти","want":"Praca w wydawnictwie wymaga cierpliwości i dobrej pamięci."}
   ]
  }
 ],
 "dialogue":{
   "intro":"Суббота, прогулка по району. Марек устроил Анне экзамен по словам, которых она не учила. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Powiedz, co to jest kwiaciarnia. Bez słownika.","ru":"Скажи, что такое kwiaciarnia. Без словаря.",
      "words":[["Powiedz","скажи"],["bez słownika","без словаря"]]},
     {"who":"A","name":"Anna","side":"left","en":"Kwiat plus arnia. Czyli sklep z kwiatami.","ru":"Kwiat плюс arnia. То есть магазин с цветами.",
      "words":[["Kwiat","цветок"],["sklep","магазин"]]},
     {"who":"M","name":"Marek","side":"right","en":"A lodziarnia?","ru":"А lodziarnia?",
      "words":[["lodziarnia","кафе-мороженое"]]},
     {"who":"A","name":"Anna","side":"left","en":"Lody. Miejsce z lodami. To za łatwe, daj coś trudniejszego.","ru":"Мороженое. Место с мороженым. Это слишком легко, дай что-нибудь потруднее.",
      "words":[["Lody","мороженое"],["za łatwe","слишком легко"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dobrze. Czym zajmuje się tłumacz?","ru":"Хорошо. Чем занимается tłumacz?",
      "words":[["zajmuje się","занимается"],["tłumacz","переводчик"]]},
     {"who":"A","name":"Anna","side":"left","en":"Tłumaczy. Przekłada z jednego języka na drugi.","ru":"Переводит. Перекладывает с одного языка на другой.",
      "words":[["Tłumaczy","переводит"],["Przekłada","перекладывает"]]},
     {"who":"M","name":"Marek","side":"right","en":"Ostatnie: kim jest twoja nowa przełożona?","ru":"Последнее: кто твоя новая начальница?",
      "words":[["przełożona","начальница"]]},
     {"who":"A","name":"Anna","side":"left","en":"Redaktorką. W poniedziałek poznam całą redakcję.","ru":"Редактором. В понедельник познакомлюсь со всей редакцией.",
      "words":[["Redaktorką","редактором"],["redakcję","редакцию"]]},
     {"who":"M","name":"Marek","side":"right","en":"Cierpliwości ci życzę. Wydawnictwo to nie kawiarnia.","ru":"Терпения тебе желаю. Издательство — это не кафе.",
      "words":[["Cierpliwości","терпения"],["Wydawnictwo","издательство"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка про район, в котором всё называется по правилам. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Gdzie tu jest najbliższa pralnia?","ru":"Где здесь ближайшая прачечная?"},
     {"who":"B","en":"Za księgarnią, obok cukierni.","ru":"За книжным, рядом с кондитерской."},
     {"who":"A","en":"A siłownia?","ru":"А спортзал?"},
     {"who":"B","en":"Nad piekarnią. Zapach jest okrutny.","ru":"Над пекарней. Запах жестокий."},
     {"who":"A","en":"Czyli biegam i pachnę chlebem.","ru":"То есть бегаю и пахну хлебом."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — детали, из которых собирается половина словаря.",
   "items":[
     {"en":"nauczyciel / nauczycielka","ru":"учитель / учительница","ex":"Moja mama jest nauczycielką angielskiego."},
     {"en":"lekarz / lekarka","ru":"врач","ex":"Lekarka przyjmuje do piętnastej."},
     {"en":"tłumacz","ru":"переводчик","ex":"Mój sąsiad jest tłumaczem."},
     {"en":"pracownik / pracownica","ru":"сотрудник / сотрудница","ex":"Nowa pracownica zaczyna w poniedziałek."},
     {"en":"kierownik / kierowniczka","ru":"руководитель","ex":"Kto jest kierownikiem tego działu?"},
     {"en":"sprzedawca / sprzedawczyni","ru":"продавец","ex":"Sprzedawczyni zna już moje imię."},
     {"en":"kawiarnia / księgarnia","ru":"кафе / книжный магазин","ex":"Idę do księgarni po słownik."},
     {"en":"piekarnia / cukiernia","ru":"пекарня / кондитерская","ex":"Piekarnia otwiera się o szóstej."},
     {"en":"pralnia / siłownia","ru":"прачечная / спортзал","ex":"W soboty chodzę na siłownię."},
     {"en":"cierpliwy / cierpliwość","ru":"терпеливый / терпение","ex":"Ta praca wymaga cierpliwości."},
     {"en":"możliwość","ru":"возможность","ex":"Mamy taką możliwość."},
     {"en":"miłość","ru":"любовь (не «милость»)","ex":"To była miłość od pierwszego wejrzenia."}
   ]
 },
 "drag":{
   "intro":"Перетащи название места к его переводу. Все четыре собраны по одному правилу.",
   "pairs":[["piekarnia","пекарня"],["księgarnia","книжный магазин"],["pralnia","прачечная"],["siłownia","спортзал"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как одна улица работает вместо словаря.",
   "title":"Ulica jako słownik",
   "sentences":["Na mojej ulicy stoją obok siebie cztery małe sklepy.","Piekarnia otwiera się o szóstej i pachnie na całą ulicę.","W cukierni obok kupuję sernik w każdą sobotę.","Księgarnia jest maleńka, ale właścicielka zamawia dla mnie wszystko.","Naprzeciwko działa pralnia, a nad nią siłownia.","Kwiaciarnię otworzyli dopiero w zeszłym miesiącu.","Sprzedawczyni zna już moje imię i moje ulubione kwiaty.","Kawiarnię na rogu prowadzi dziennikarka, która odeszła z gazety.","Mówi, że praca w wydawnictwie wymaga wielkiej cierpliwości.","Zaczynam podejrzewać, że ma rację."],
   "translation":"На моей улице стоят рядом четыре маленьких магазинчика. Пекарня открывается в шесть и пахнет на всю улицу. В кондитерской рядом я покупаю чизкейк каждую субботу. Книжный крошечный, но хозяйка заказывает для меня что угодно. Напротив работает прачечная, а над ней спортзал. Цветочный открыли только в прошлом месяце. Продавщица уже знает моё имя и мои любимые цветы. Кафе на углу держит журналистка, которая ушла из газеты. Она говорит, что работа в издательстве требует огромного терпения. Я начинаю подозревать, что она права."
 },
 "quiz":{
   "intro":"Пять вопросов — и фабрика слов заработает без инструкции.",
   "items":[
     {"q":"1. Кто такой <b>tłumacz</b>?","opts":["толкователь снов","переводчик","бегун"],"answer":1,
      "explain":"Корень tłumaczyć плюс хвост -acz: <b>переводчик</b>."},
     {"q":"2. «Пекарня» —","opts":["piekarz","piekarnia","pieczywo"],"answer":1,
      "explain":"Место — хвост -arnia: <b>piekarnia</b>."},
     {"q":"3. Женская пара к <b>sprzedawca</b> —","opts":["sprzedawka","sprzedawczyni","sprzedawcowa"],"answer":1,
      "explain":"У слов на -ca женская форма на -yni: <b>sprzedawczyni</b>."},
     {"q":"4. «Возможность» —","opts":["możliwy","możliwość","możliwie"],"answer":1,
      "explain":"Абстрактное существительное — хвост -ość: <b>możliwość</b>."},
     {"q":"5. Что значит <b>miłość</b>?","opts":["милость","любовь","молодость"],"answer":1,
      "explain":"<b>miłość</b> — любовь; похожесть на «милость» обманывает."}
   ]
 },
 "essay":{
   "intro":"Сегодня пиши про свою улицу — и пусть половина слов соберётся сама.",
   "prompt":"Напиши 5–7 предложений о районе, где ты живёшь: какие магазины и места рядом, кто там работает, куда ты ходишь чаще всего и какое качество нужно, чтобы там жить.",
   "hint":"Каркас: Na mojej ulicy jest… · Obok działa… · Najczęściej chodzę do… · Sprzedawczyni / właściciel… · Życie tutaj wymaga… 💛",
   "example":"Na mojej ulicy jest piekarnia, mała księgarnia i pralnia. Obok, na rogu, działa kawiarnia, w której pracuje bardzo cierpliwa sprzedawczyni. Najczęściej chodzę do piekarni, bo otwierają ją o szóstej rano. Właściciel księgarni zna wszystkich sąsiadów po imieniu. Siłownia jest dwie ulice dalej i chodzę tam rzadziej, niż obiecuję sobie w styczniu. Wieczorem robi się cicho i to jest największa zaleta tego miejsca. Życie w centrum wymaga cierpliwości, ale ma swoje możliwości."
 }
},
"5": {
 "day":5,"week":"01",
 "themeRu":"Непослушные слова",
 "themeEn":"Muzeum, imię, drzwi",
 "intro":"Каждый язык держит небольшой список слов, которые склоняются не как все, — и почти всегда это самые старые и самые нужные слова. По-русски мы не задумываясь говорим «имя — имени», «год — лет», «ухо — уши». Польский хранит ровно тот же набор странностей, часто в тех же словах: <b>imię — imienia</b>, <b>rok — lata</b>, <b>ucho — uszy</b>. Сегодня разберём их списком, чтобы они больше никогда не удивляли.",
 "introAudio":"Каждый язык держит небольшой список слов, которые склоняются не как все, и почти всегда это самые старые и самые нужные слова. По-русски мы не задумываясь говорим имя и имени, год и лет, ухо и уши. Польский хранит ровно тот же набор странностей, часто в тех же словах: imię и imienia, rok и lata, ucho и uszy. Сегодня разберём их списком, чтобы они больше никогда не удивляли.",
 "goals":[
   "Склонять <b>muzeum</b>, <b>centrum</b>, <b>liceum</b>: ед. ч. не меняется, мн. ч. <b>muzea, muzeów</b>",
   "Знать наращение: <b>imię — imienia — imiona</b>, <b>zwierzę — zwierzęcia — zwierzęta</b>",
   "Помнить старые пары: <b>ręce, rąk</b> · <b>oczy, oczu</b> · <b>uszy, uszu</b> · <b>przyjaciele, przyjaciół</b>",
   "Пользоваться словами без единственного числа: <b>drzwi, spodnie, okulary, urodziny</b>"
 ],
 "learned":[
   "Просклонял(а) muzeum, centrum, liceum: ед. ч. не меняется, мн. ч. muzea, muzeów",
   "Запомнил(а) наращение: imię — imienia — imiona, zwierzę — zwierzęcia — zwierzęta",
   "Удержал(а) старые пары: ręce, rąk · oczy, oczu · uszy, uszu · przyjaciele, przyjaciół",
   "Воспользовался(лась) словами без единственного числа: drzwi, spodnie, okulary, urodziny"
 ],
 "review":{
   "intro":"Вчерашняя фабрика слов и одна приставка позавчерашнего дня. Потом идём к словам, которые ведут себя как хотят.",
   "introAudio":"Вчерашняя фабрика слов и одна приставка позавчерашнего дня. Потом идём к словам, которые ведут себя как хотят.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> собери слово из корня и хвоста места.",
      "q":"«Кондитерская» —","opts":["cukier","cukiernia","cukierek"],"answer":1,
      "explain":"Место — хвост -ernia: <b>cukiernia</b>. Cukier — сахар, cukierek — конфета."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни самую частую женскую модель.",
      "q":"Женская пара к <b>nauczyciel</b> —","opts":["nauczycielni","nauczycielka","nauczyciela"],"answer":1,
      "explain":"Обычная женская пара делается суффиксом -ka: <b>nauczycielka</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> коробку раскрывают, а не закрывают.",
      "q":"«Распакуй коробку» —","opts":["Rozpakuj pudło","Spakuj pudło","Zapakuj pudło"],"answer":0,
      "explain":"В стороны, наружу — приставка roz-: <b>rozpakuj</b>. Spakować и zapakować значат «собрать, упаковать»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Мы поселились здесь в мае»</b>","answer":"Zamieszkaliśmy tu w maju"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Правило 1 · Слова на -um",
   "title":"<em>muzeum, centrum, liceum</em>",
   "paras":[
     "Слова латинского происхождения на <b>-um</b> ведут себя в единственном числе удивительно просто: они вообще не меняются. <b>muzeum</b>, <b>do muzeum</b>, <b>w muzeum</b>, <b>przed muzeum</b>, <b>z muzeum</b> — одна форма на все шесть падежей. Так же устроены <b>centrum</b>, <b>liceum</b>, <b>gimnazjum</b>, <b>akwarium</b>, <b>technikum</b>, <b>laboratorium</b>, <b>seminarium</b>.",
     "Зато во множественном числе они оживают и берут обычные окончания среднего рода: <b>muzea, muzeów, muzeom, muzea, muzeami, muzeach</b>. <b>W Krakowie jest kilkanaście muzeów.</b> <b>Byliśmy w dwóch muzeach.</b> Заметь родительный множественного — <b>muzeów</b>, с окончанием -ów, как у мужских слов.",
     "Русский обходится с чужими словами похоже, только провёл границу в другом месте: у нас «музей» склоняется целиком, а «пальто», «кино» и «метро» не склоняются вовсе. Механизм один и тот же — язык не пускает чужое слово в свою систему до конца.",
     "Самые нужные из них на каждый день: <b>centrum</b> — центр города: <b>Mieszkam w centrum</b>, <b>Jadę do centrum</b>. <b>muzeum</b>: <b>Idziemy do muzeum</b>, <b>Spotkajmy się przed muzeum</b>. <b>liceum</b> — старшая школа: <b>Skończyła liceum w Gdańsku</b>. И не пугайся, что <b>w centrum</b> и <b>do centrum</b> выглядят одинаково: это не ошибка, а правило."
   ],
   "audio":"Слова латинского происхождения на -um ведут себя в единственном числе удивительно просто: они вообще не меняются. Muzeum, do muzeum, w muzeum, przed muzeum, z muzeum — одна форма на все шесть падежей. Так же устроены centrum, liceum, gimnazjum, akwarium, technikum, laboratorium, seminarium. Зато во множественном числе они оживают и берут обычные окончания среднего рода: muzea, muzeów, muzeom, muzeami, muzeach. W Krakowie jest kilkanaście muzeów. Byliśmy w dwóch muzeach. Заметь родительный множественного: muzeów, с окончанием -ów, как у мужских слов. Русский обходится с чужими словами похоже, только провёл границу в другом месте: у нас музей склоняется целиком, а пальто, кино и метро не склоняются вовсе. Механизм один и тот же: язык не пускает чужое слово в свою систему до конца. Самые нужные на каждый день: centrum, центр города — mieszkam w centrum, jadę do centrum. Muzeum — idziemy do muzeum, spotkajmy się przed muzeum. Liceum, старшая школа — skończyła liceum w Gdańsku. И не пугайся, что w centrum и do centrum выглядят одинаково: это не ошибка, а правило.",
   "table":{"rows":[
     ["<b>muzeum</b> · do muzeum · w muzeum · z muzeum <button class=\"play\" data-say=\"muzeum, do muzeum, w muzeum, z muzeum\">🔊</button>","ед. ч. — одна форма на все падежи"],
     ["мн. ч.: <b>muzea, muzeów, muzeom</b> <button class=\"play\" data-say=\"muzea, muzeów, muzeom\">🔊</button>","музеи, музеев, музеям"],
     ["<b>muzeami · muzeach</b> <button class=\"play\" data-say=\"z muzeami, w muzeach\">🔊</button>","музеями · музеях"],
     ["<b>centrum · liceum · akwarium</b> <button class=\"play\" data-say=\"centrum, liceum, akwarium\">🔊</button>","центр · лицей · аквариум"],
     ["Mieszkam <b>w centrum</b>. Jadę <b>do centrum</b>. <button class=\"play\" data-say=\"Mieszkam w centrum. Jadę do centrum.\">🔊</button>","формы совпадают — это норма"]
   ],"star":1},
   "examples":[
     {"ru":"Мы идём в музей у Рынка.","en":"Idziemy do <b>muzeum</b> przy Rynku.","say":"Idziemy do muzeum przy Rynku."},
     {"ru":"В Кракове больше десяти музеев.","en":"W Krakowie jest kilkanaście <b>muzeów</b>.","gloss":"kilkanaście — от одиннадцати до девятнадцати","say":"W Krakowie jest kilkanaście muzeów."},
     {"ru":"Мы были в двух музеях за один день.","en":"Byliśmy w dwóch <b>muzeach</b> w jeden dzień.","say":"Byliśmy w dwóch muzeach w jeden dzień."},
     {"ru":"Я живу в центре и работаю в центре.","en":"Mieszkam <b>w centrum</b> i pracuję <b>w centrum</b>.","say":"Mieszkam w centrum i pracuję w centrum."},
     {"ru":"Она окончила лицей в Гданьске.","en":"Skończyła <b>liceum</b> w Gdańsku.","say":"Skończyła liceum w Gdańsku."}
   ],
   "mistakes":[
     {"wrong":"Idziemy do muzeuma.","right":"Idziemy do <b>muzeum</b>.","why":"в единственном числе слово вообще не меняется: do muzeum, w muzeum, z muzeum."},
     {"wrong":"Byliśmy w dwóch muzeum.","right":"Byliśmy w dwóch <b>muzeach</b>.","why":"во множественном числе слово склоняется нормально: muzea, muzeów, muzeach."}
   ],
   "mnemonic":"🏛 Единственное число застыло: do muzeum. Множественное ожило: muzea, muzeów, muzeach.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> множественное число склоняется нормально.",
      "q":"«Мы были в двух музеях» —","opts":["Byliśmy w dwóch muzeum","Byliśmy w dwóch muzeach","Byliśmy w dwóch muzeami"],"answer":1,
      "explain":"Предложный множественного — <b>muzeach</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> в единственном числе слово не меняется.",
      "q":"«Я еду в центр» —","opts":["Jadę do centrum","Jadę do centra","Jadę do centrumu"],"answer":0,
      "explain":"Единственное число застыло: <b>do centrum</b>, w centrum, z centrum."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«В Кракове больше десяти музеев»","accept":["w krakowie jest kilkanaście muzeów","w krakowie jest kilkanascie muzeow"],"placeholder":"W Krakowie…"}
   ]
  },
  {
   "eyebrow":"Правило 2 · Слова с наращением",
   "title":"<em>imię — imienia</em>, <em>zwierzę — zwierzęcia</em>",
   "paras":[
     "Небольшая группа слов среднего рода на <b>-ę</b> при склонении отращивает лишний кусочек. Первый тип, с <b>-eni-</b>: <b>imię</b> (имя) — imienia, imieniu, imię, imieniem, imieniu; множественное <b>imiona, imion, imionom, imiona, imionami, imionach</b>. Так же <b>ramię</b> (плечо) — ramienia, ramiona; <b>plemię</b> (племя) — plemienia, plemiona.",
     "Русский делает ровно то же самое, и это очень старое родство: имя — имени — именем — имена. Знамя — знамени. Племя — племени. Если помнишь русское «имени», польское <b>imienia</b> собирается само, без всякого заучивания.",
     "Второй тип, с <b>-ęci-</b>, — это детёныши и звери: <b>zwierzę</b> (животное) — zwierzęcia, zwierzęciu, zwierzę, zwierzęciem, zwierzęciu; множественное <b>zwierzęta, zwierząt, zwierzętom, zwierzęta, zwierzętami, zwierzętach</b>. Так же <b>cielę</b> (телёнок), <b>kurczę</b> (цыплёнок), <b>niemowlę</b> (младенец). Русский двойник — «телёнок — телята», «цыплёнок — цыплята».",
     "И три фразы, ради которых всё это и нужно: <b>Jak masz na imię?</b> («как тебя зовут»), <b>Mam na imię Anna</b>, <b>imię i nazwisko</b> (имя и фамилия). Плюс <b>obchodzić imieniny</b> — праздновать именины; в Польше их отмечают всерьёз, иногда охотнее дня рождения."
   ],
   "audio":"Небольшая группа слов среднего рода на -ę при склонении отращивает лишний кусочек. Первый тип, с -eni-: imię, имя — imienia, imieniu, imieniem; множественное imiona, imion, imionom, imionami, imionach. Так же ramię, плечо — ramienia, ramiona; plemię, племя — plemienia, plemiona. Русский делает ровно то же самое, и это очень старое родство: имя, имени, именем, имена. Знамя, знамени. Племя, племени. Если помнишь русское имени, польское imienia собирается само. Второй тип, с -ęci-, это детёныши и звери: zwierzę, животное — zwierzęcia, zwierzęciu, zwierzęciem; множественное zwierzęta, zwierząt, zwierzętom, zwierzętami, zwierzętach. Так же cielę, телёнок; kurczę, цыплёнок; niemowlę, младенец. Русский двойник: телёнок и телята, цыплёнок и цыплята. И три фразы, ради которых всё это и нужно: jak masz na imię, как тебя зовут; mam na imię Anna; imię i nazwisko, имя и фамилия. Плюс obchodzić imieniny, праздновать именины; в Польше их отмечают всерьёз, иногда охотнее дня рождения.",
   "table":{"rows":[
     ["<b>imię · imienia · imieniu · imieniem</b> <button class=\"play\" data-say=\"imię, imienia, imieniu, imieniem\">🔊</button>","имя · имени · имени · именем"],
     ["мн. ч.: <b>imiona · imion · imionach</b> <button class=\"play\" data-say=\"imiona, imion, imionach\">🔊</button>","имена · имён · именах"],
     ["<b>ramię → ramienia, ramiona</b> <button class=\"play\" data-say=\"ramię, ramienia, ramiona\">🔊</button>","плечо · плеча · плечи"],
     ["<b>zwierzę · zwierzęcia · zwierzęciem</b> <button class=\"play\" data-say=\"zwierzę, zwierzęcia, zwierzęciem\">🔊</button>","животное · животного · животным"],
     ["мн. ч.: <b>zwierzęta · zwierząt · zwierzętach</b> <button class=\"play\" data-say=\"zwierzęta, zwierząt, zwierzętach\">🔊</button>","животные · животных · животных"],
     ["<b>Jak masz na imię?</b> <button class=\"play\" data-say=\"Jak masz na imię?\">🔊</button>","Как тебя зовут?"]
   ],"star":5},
   "examples":[
     {"ru":"Как тебя зовут? — Меня зовут Анна.","en":"<b>Jak masz na imię?</b> — <b>Mam na imię</b> Anna.","say":"Jak masz na imię? Mam na imię Anna."},
     {"ru":"Впиши имя и фамилию печатными буквами.","en":"Wpisz <b>imię i nazwisko</b> drukowanymi literami.","say":"Wpisz imię i nazwisko drukowanymi literami."},
     {"ru":"Я запомнила три имени из восьми.","en":"Zapamiętałam trzy <b>imiona</b> z ośmiu.","say":"Zapamiętałam trzy imiona z ośmiu."},
     {"ru":"В этом зале рассказывают о животных.","en":"W tej sali opowiadają o <b>zwierzętach</b>.","say":"W tej sali opowiadają o zwierzętach."},
     {"ru":"У неё болит плечо после спортзала.","en":"Boli ją <b>ramię</b> po siłowni.","say":"Boli ją ramię po siłowni."}
   ],
   "mistakes":[
     {"wrong":"Jak masz imię?","right":"<b>Jak masz na imię?</b>","why":"вопрос об имени идёт с предлогом na: jak masz na imię, mam na imię Anna."},
     {"wrong":"Opowiadają o zwierzach.","right":"Opowiadają o <b>zwierzętach</b>.","why":"множественное от zwierzę с наращением: zwierzęta, zwierząt, zwierzętach."}
   ],
   "mnemonic":"🐣 imię → imieni- (как русское «имени») · zwierzę → zwierzęci- и zwierzęta (как «телёнок — телята»).",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> не забудь маленький предлог.",
      "q":"«Как тебя зовут?» —","opts":["Jak masz imię?","Jak masz na imię?","Jak jesteś imieniem?"],"answer":1,
      "explain":"Устойчивый оборот с предлогом na: <b>Jak masz na imię?</b>"},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни наращение -ęt- во множественном.",
      "q":"«Я люблю животных» —","opts":["Lubię zwierzęta","Lubię zwierzy","Lubię zwierzęcia"],"answer":0,
      "explain":"Множественное число — <b>zwierzęta</b>; zwierzęcia это родительный единственного."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Впиши имя и фамилию»</b>","answer":"Wpisz imię i nazwisko"}
   ]
  },
  {
   "eyebrow":"Правило 3 · Старые пары",
   "title":"<em>ręce, oczy, uszy, przyjaciele</em>",
   "paras":[
     "Части тела, которых у человека по две, сохранили в польском старые формы. <b>ręka</b> → <b>ręce, rąk, rękom, ręce, rękami, rękach</b>. <b>oko</b> → <b>oczy, oczu, oczom, oczy, oczami, oczach</b>. <b>ucho</b> → <b>uszy, uszu, uszom, uszy, uszami, uszach</b>. Русские «руки — рук», «очи — очей», «уши — ушей» — это буквально те же самые слова.",
     "У руки есть отдельная форма после предлога: <b>w ręku</b> — «в руке». <b>Trzymam w ręku telefon.</b> Рядом живёт и <b>w ręce</b>; обе формы правильные, <b>w ręku</b> звучит чаще. У глаз и ушей похожие остатки старины: наряду с <b>oczami</b> и <b>uszami</b> встречаются <b>oczyma</b> и <b>uszyma</b> — это книжно, достаточно узнавать.",
     "<b>przyjaciel</b> (друг) во множественном ломается сильнее всех: <b>przyjaciele, przyjaciół, przyjaciołom, przyjaciół, przyjaciółmi, przyjaciołach</b>. Обрати внимание на скачущие o и ó: <b>przyjaciół</b> и <b>przyjaciółmi</b> идут с ó, а <b>przyjaciołom</b> и <b>przyjaciołach</b> — с обычным o.",
     "И два слова времени, которые меняют корень целиком. <b>tydzień</b> (неделя) → <b>tygodnia, tygodniowi, tydzień, tygodniem, tygodniu</b>; множественное <b>tygodnie, tygodni</b>. <b>rok</b> (год) → в единственном <b>roku, rokowi, rokiem</b>, а во множественном берёт другой корень: <b>lata, lat, latom, latami, latach</b>. Ровно как русское «год — годы — лет»."
   ],
   "audio":"Части тела, которых у человека по две, сохранили в польском старые формы. Ręka даёт ręce, rąk, rękom, rękami, rękach. Oko даёт oczy, oczu, oczom, oczami, oczach. Ucho даёт uszy, uszu, uszom, uszami, uszach. Русские руки и рук, очи и очей, уши и ушей — это буквально те же самые слова. У руки есть отдельная форма после предлога: w ręku, в руке. Trzymam w ręku telefon. Рядом живёт и w ręce; обе формы правильные, w ręku звучит чаще. У глаз и ушей похожие остатки старины: наряду с oczami и uszami встречаются oczyma и uszyma — это книжно, достаточно узнавать. Przyjaciel, друг, во множественном ломается сильнее всех: przyjaciele, przyjaciół, przyjaciołom, przyjaciółmi, przyjaciołach. Обрати внимание на скачущие o и ó: przyjaciół и przyjaciółmi идут с ó, а przyjaciołom и przyjaciołach с обычным o. И два слова времени, которые меняют корень целиком. Tydzień, неделя, даёт tygodnia, tygodniowi, tygodniem, tygodniu; множественное tygodnie, tygodni. Rok, год, даёт в единственном roku, rokowi, rokiem, а во множественном берёт другой корень: lata, lat, latom, latami, latach. Ровно как русское год, годы, лет.",
   "table":{"rows":[
     ["<b>ręka → ręce, rąk, rękami</b> <button class=\"play\" data-say=\"ręka, ręce, rąk, rękami\">🔊</button>","рука · руки · рук · руками"],
     ["<b>oko → oczy, oczu</b> · <b>ucho → uszy, uszu</b> <button class=\"play\" data-say=\"oko, oczy, oczu, ucho, uszy, uszu\">🔊</button>","глаз · глаза · ухо · уши"],
     ["<b>w ręku</b> · Trzymam w ręku telefon. <button class=\"play\" data-say=\"Trzymam w ręku telefon\">🔊</button>","в руке — особая форма"],
     ["<b>przyjaciel → przyjaciele, przyjaciół</b> <button class=\"play\" data-say=\"przyjaciel, przyjaciele, przyjaciół\">🔊</button>","друг · друзья · друзей"],
     ["<b>tydzień → tygodnia, tygodnie</b> <button class=\"play\" data-say=\"tydzień, tygodnia, tygodnie\">🔊</button>","неделя · недели · недели"],
     ["<b>rok → roku</b>, но мн. <b>lata, lat</b> <button class=\"play\" data-say=\"rok, roku, lata, lat\">🔊</button>","год · года · годы · лет"]
   ],"star":5},
   "examples":[
     {"ru":"У меня руки заняты.","en":"Mam zajęte <b>ręce</b>.","say":"Mam zajęte ręce."},
     {"ru":"Я держу в руке телефон.","en":"Trzymam <b>w ręku</b> telefon.","say":"Trzymam w ręku telefon."},
     {"ru":"У неё зелёные глаза.","en":"Ma zielone <b>oczy</b>.","say":"Ma zielone oczy."},
     {"ru":"В воскресенье я познакомилась с его друзьями.","en":"W niedzielę poznałam jego <b>przyjaciół</b>.","say":"W niedzielę poznałam jego przyjaciół."},
     {"ru":"Мы живём здесь три года.","en":"Mieszkamy tu od trzech <b>lat</b>.","say":"Mieszkamy tu od trzech lat."}
   ],
   "mistakes":[
     {"wrong":"Poznałam jego przyjacieli.","right":"Poznałam jego <b>przyjaciół</b>.","why":"родительный и винительный множественного — przyjaciół, с ó."},
     {"wrong":"Mieszkamy tu od trzech roków.","right":"Mieszkamy tu od trzech <b>lat</b>.","why":"во множественном числе rok меняет корень: lata, lat, latach."}
   ],
   "mnemonic":"✌️ Парные части тела остались старыми: ręce, rąk · oczy, oczu · uszy, uszu. И rok → lata, как «год → лет».",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> ищи форму с ó.",
      "q":"Родительный множественного от <b>przyjaciel</b> —","opts":["przyjacieli","przyjaciół","przyjacielów"],"answer":1,
      "explain":"Правильная форма — <b>przyjaciół</b>; отсюда и «poznałam jego przyjaciół»."},
     {"type":"choice","howto":"<b>Что делать:</b> во множественном у этого слова другой корень.",
      "q":"«Мы живём здесь три года» —","opts":["Mieszkamy tu od trzech roków","Mieszkamy tu od trzech lat","Mieszkamy tu od trzech roku"],"answer":1,
      "explain":"Множественное от rok — lata: <b>od trzech lat</b>."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«У меня руки заняты»","accept":["mam zajęte ręce","mam zajete rece"],"placeholder":"Mam zajęte…"}
   ]
  },
  {
   "eyebrow":"Правило 4 · Только множественное",
   "title":"<em>drzwi, spodnie, okulary, urodziny</em>",
   "paras":[
     "Некоторые слова существуют только во множественном числе. Часть из них совпадает с русскими и не требует усилий: <b>nożyczki</b> (ножницы), <b>okulary</b> (очки), <b>spodnie</b> (брюки), <b>wakacje</b> (каникулы), <b>imieniny</b> (именины), <b>sanki</b> (санки), <b>drzwi</b> (дверь).",
     "А три слова расходятся с русским, и их стоит запомнить отдельно. <b>drzwi</b> — это «дверь», и единственного числа у него нет вообще: <b>Drzwi są otwarte.</b> <b>skrzypce</b> — скрипка, тоже всегда множественное: <b>Gram na skrzypcach.</b> <b>urodziny</b> — день рождения: <b>Moje urodziny są w maju.</b> <b>Wszystkiego najlepszego z okazji urodzin!</b>",
     "Глагол при них всегда во множественном числе, а слово «один» превращается в <b>jedne</b>: <b>jedne drzwi</b>, <b>jedne spodnie</b>, <b>jedne okulary</b>. Считают их собирательными числительными из B1 — <b>dwoje drzwi</b>, <b>troje drzwi</b> — или через слово <b>para</b>, что в живой речи даже привычнее: <b>dwie pary spodni</b>, <b>dwie pary okularów</b>.",
     "Родительный падеж у них короткий, и его надо знать в лицо: <b>drzwi</b> (не меняется), <b>spodni</b>, <b>okularów</b>, <b>nożyczek</b>, <b>urodzin</b>, <b>imienin</b>, <b>wakacji</b>. <b>Nie mam nożyczek.</b> <b>Wracamy z wakacji we wrześniu.</b> <b>Z okazji urodzin!</b>"
   ],
   "audio":"Некоторые слова существуют только во множественном числе. Часть из них совпадает с русскими и не требует усилий: nożyczki, ножницы; okulary, очки; spodnie, брюки; wakacje, каникулы; imieniny, именины; sanki, санки; drzwi, дверь. А три слова расходятся с русским. Drzwi это дверь, и единственного числа у него нет вообще: drzwi są otwarte. Skrzypce это скрипка, тоже всегда множественное: gram na skrzypcach. Urodziny это день рождения: moje urodziny są w maju; wszystkiego najlepszego z okazji urodzin. Глагол при них всегда во множественном числе, а слово один превращается в jedne: jedne drzwi, jedne spodnie, jedne okulary. Считают их собирательными числительными с уровня B1 — dwoje drzwi, troje drzwi — или через слово para, что в живой речи даже привычнее: dwie pary spodni, dwie pary okularów. Родительный падеж у них короткий, и его надо знать в лицо: drzwi не меняется, spodni, okularów, nożyczek, urodzin, imienin, wakacji. Nie mam nożyczek. Wracamy z wakacji we wrześniu.",
   "table":{"rows":[
     ["<b>drzwi</b> · Drzwi są otwarte. <button class=\"play\" data-say=\"Drzwi są otwarte\">🔊</button>","дверь — всегда множественное"],
     ["<b>spodnie · okulary · nożyczki</b> <button class=\"play\" data-say=\"spodnie, okulary, nożyczki\">🔊</button>","брюки · очки · ножницы"],
     ["<b>urodziny · imieniny · wakacje</b> <button class=\"play\" data-say=\"urodziny, imieniny, wakacje\">🔊</button>","день рождения · именины · каникулы"],
     ["⚠️ <b>skrzypce</b> · Gram na skrzypcach. <button class=\"play\" data-say=\"Gram na skrzypcach\">🔊</button>","скрипка — тоже множественное"],
     ["<b>jedne drzwi</b> · <b>dwoje drzwi</b> · <b>dwie pary spodni</b> <button class=\"play\" data-say=\"jedne drzwi, dwoje drzwi, dwie pary spodni\">🔊</button>","одна дверь · две двери · двое брюк"],
     ["род.: <b>spodni · okularów · nożyczek · urodzin</b> <button class=\"play\" data-say=\"spodni, okularów, nożyczek, urodzin\">🔊</button>","короткий родительный падеж"]
   ],"star":4},
   "examples":[
     {"ru":"Дверь открыта, заходи.","en":"<b>Drzwi są</b> otwarte, wchodź.","say":"Drzwi są otwarte, wchodź."},
     {"ru":"У меня нет ножниц.","en":"Nie mam <b>nożyczek</b>.","say":"Nie mam nożyczek."},
     {"ru":"Мой день рождения в мае.","en":"Moje <b>urodziny</b> są w maju.","say":"Moje urodziny są w maju."},
     {"ru":"С днём рождения!","en":"Wszystkiego najlepszego z okazji <b>urodzin</b>!","say":"Wszystkiego najlepszego z okazji urodzin!"},
     {"ru":"Мы возвращаемся из отпуска в сентябре.","en":"Wracamy z <b>wakacji</b> we wrześniu.","say":"Wracamy z wakacji we wrześniu."}
   ],
   "mistakes":[
     {"wrong":"Drzwi jest otwarte.","right":"<b>Drzwi są</b> otwarte.","why":"слово только множественное, поэтому и глагол во множественном числе."},
     {"wrong":"Nie mam nożyczków.","right":"Nie mam <b>nożyczek</b>.","why":"родительный короткий, без окончания: nożyczek, spodni, urodzin."}
   ],
   "mnemonic":"🚪 drzwi, spodnie, okulary, nożyczki, urodziny — глагол во множественном, «один» это jedne.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни короткий родительный.",
      "q":"«У меня нет ножниц» —","opts":["Nie mam nożyczków","Nie mam nożyczek","Nie mam nożyczki"],"answer":1,
      "explain":"Родительный без окончания: <b>nożyczek</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри на число глагола.",
      "q":"«Дверь открыта» —","opts":["Drzwi jest otwarte","Drzwi są otwarte","Drzwia są otwarte"],"answer":1,
      "explain":"Слово только множественное: <b>drzwi są otwarte</b>."},
     {"type":"speak","howto":"Нажми микрофон и скажи вслух — поздравление, которое пригодится в любой момент.",
      "target":"Wszystkiego najlepszego z okazji urodzin!","sub":"всего наилучшего по случаю дня рождения","want":"Wszystkiego najlepszego z okazji urodzin!"}
   ]
  }
 ],
 "dialogue":{
   "intro":"Утро субботы. Планы на выходные и поиск очков, которые никуда не девались. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Gdzie są moje okulary? Nigdzie ich nie ma.","ru":"Где мои очки? Нигде их нет.",
      "words":[["okulary","очки"],["Nigdzie","нигде"]]},
     {"who":"M","name":"Marek","side":"right","en":"Trzymasz je w ręku od pięciu minut.","ru":"Ты держишь их в руке уже пять минут.",
      "words":[["w ręku","в руке"],["od pięciu minut","пять минут"]]},
     {"who":"A","name":"Anna","side":"left","en":"Świetnie. Zaczynamy weekend od gubienia rzeczy.","ru":"Отлично. Начинаем выходные с потери вещей.",
      "words":[["gubienia","потери, теряния"],["weekend","выходные"]]},
     {"who":"M","name":"Marek","side":"right","en":"Po śniadaniu idziemy do muzeum. Kasia ma bilety.","ru":"После завтрака идём в музей. У Каси билеты.",
      "words":[["do muzeum","в музей"],["bilety","билеты"]]},
     {"who":"A","name":"Anna","side":"left","en":"Do którego? W Krakowie jest kilkanaście muzeów.","ru":"В какой? В Кракове больше десяти музеев.",
      "words":[["kilkanaście","больше десяти"],["muzeów","музеев"]]},
     {"who":"M","name":"Marek","side":"right","en":"Do tego przy Rynku. A w niedzielę imieniny mojej mamy.","ru":"В тот, что у Рынка. А в воскресенье именины моей мамы.",
      "words":[["imieniny","именины"],["mamy","мамы"]]},
     {"who":"A","name":"Anna","side":"left","en":"Czyli dwa wyjścia w jeden weekend. Muszę znaleźć spodnie bez plamy.","ru":"То есть два выхода в свет за одни выходные. Надо найти брюки без пятна.",
      "words":[["wyjścia","выхода в свет"],["plamy","пятна"]]},
     {"who":"M","name":"Marek","side":"right","en":"Masz jedne czyste. Wiszą za drzwiami w sypialni.","ru":"Есть одни чистые. Висят за дверью в спальне.",
      "words":[["jedne","одни"],["za drzwiami","за дверью"]]},
     {"who":"A","name":"Anna","side":"left","en":"Wiem. Widzę je oczami wyobraźni od tygodnia.","ru":"Знаю. Вижу их мысленным взором уже неделю.",
      "words":[["oczami wyobraźni","мысленным взором"],["od tygodnia","уже неделю"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка про дверь, которых оказалось две. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Zamknij drzwi, proszę.","ru":"Закрой дверь, пожалуйста."},
     {"who":"B","en":"Które? Tu są dwoje drzwi.","ru":"Какую? Тут две двери."},
     {"who":"A","en":"Te za tobą.","ru":"Ту, что за тобой."},
     {"who":"B","en":"Mam zajęte ręce.","ru":"У меня руки заняты."},
     {"who":"A","en":"To zamknij je nogą. Widziałam, że umiesz.","ru":"Тогда закрой её ногой. Я видела, что ты умеешь."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — весь список непослушных, который стоит держать под рукой.",
   "items":[
     {"en":"muzeum (do muzeum, muzea, muzeów)","ru":"музей","ex":"W Krakowie jest kilkanaście muzeów."},
     {"en":"centrum","ru":"центр","ex":"Mieszkam w centrum."},
     {"en":"liceum","ru":"лицей, старшая школа","ex":"Skończyła liceum w Gdańsku."},
     {"en":"imię (imienia, imiona)","ru":"имя","ex":"Jak masz na imię?"},
     {"en":"zwierzę (zwierzęcia, zwierzęta)","ru":"животное","ex":"W tej sali opowiadają o zwierzętach."},
     {"en":"ręka (ręce, rąk, w ręku)","ru":"рука","ex":"Mam zajęte ręce."},
     {"en":"oko (oczy, oczu) / ucho (uszy, uszu)","ru":"глаз / ухо","ex":"Ma zielone oczy."},
     {"en":"przyjaciel (przyjaciele, przyjaciół)","ru":"друг","ex":"Poznałam jego przyjaciół."},
     {"en":"tydzień (tygodnia, tygodnie)","ru":"неделя","ex":"Widzę je od tygodnia."},
     {"en":"rok (roku, lata, lat)","ru":"год","ex":"Mieszkamy tu od trzech lat."},
     {"en":"drzwi / spodnie / okulary","ru":"дверь / брюки / очки","ex":"Drzwi są otwarte."},
     {"en":"urodziny / imieniny","ru":"день рождения / именины","ex":"Moje urodziny są w maju."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу. Все четыре — множественное число со старой историей.",
   "pairs":[["oczy","глаза"],["uszy","уши"],["ręce","руки"],["przyjaciele","друзья"]]
 },
 "reading":{
   "intro":"Прочитай и послушай про субботу в музее и воскресные именины. Непослушные слова тут работают в полную силу.",
   "title":"Sobota w muzeum",
   "sentences":["W sobotę poszliśmy do muzeum przy Rynku.","W Krakowie jest kilkanaście muzeów, ale w tym jeszcze nie byłam.","Przy wejściu trzeba było zostawić plecak i okulary przeciwsłoneczne.","Sala ze zwierzętami zrobiła na mnie największe wrażenie.","Marek czytał na głos wszystkie podpisy, aż ochrypł.","Ja patrzyłam głównie na stare zdjęcia miasta sprzed stu lat.","Na jednym z nich drzwi naszej kamienicy wyglądały dokładnie tak samo.","Po wyjściu usiedliśmy w cukierni obok i piliśmy herbatę.","W niedzielę były imieniny mamy Marka i poznałam jego przyjaciół.","Zapamiętałam trzy imiona z ośmiu i uważam to za sukces."],
   "translation":"В субботу мы пошли в музей у Рынка. В Кракове больше десяти музеев, но в этом я ещё не была. У входа нужно было оставить рюкзак и солнечные очки. Зал с животными произвёл на меня самое сильное впечатление. Марек читал вслух все подписи, пока не охрип. Я смотрела в основном на старые фотографии города столетней давности. На одной из них дверь нашего дома выглядела точно так же. После выхода мы сели в кондитерской рядом и пили чай. В воскресенье были именины мамы Марека, и я познакомилась с его друзьями. Я запомнила три имени из восьми и считаю это успехом."
 },
 "quiz":{
   "intro":"Пять вопросов — и непослушные слова перестанут быть непослушными.",
   "items":[
     {"q":"1. «Мы были в двух музеях» —","opts":["Byliśmy w dwóch muzeum","Byliśmy w dwóch muzeach","Byliśmy w dwóch muzeami"],"answer":1,
      "explain":"Во множественном числе слово склоняется нормально: <b>muzeach</b>."},
     {"q":"2. «Как тебя зовут?» —","opts":["Jak masz imię?","Jak masz na imię?","Jak jesteś imieniem?"],"answer":1,
      "explain":"Устойчивый оборот с предлогом na: <b>Jak masz na imię?</b>"},
     {"q":"3. Родительный множественного от <b>przyjaciel</b> —","opts":["przyjacieli","przyjaciół","przyjacielów"],"answer":1,
      "explain":"Правильная форма — <b>przyjaciół</b>, с ó."},
     {"q":"4. «У меня нет ножниц» —","opts":["Nie mam nożyczków","Nie mam nożyczek","Nie mam nożyczki"],"answer":1,
      "explain":"Родительный короткий, без окончания: <b>nożyczek</b>."},
     {"q":"5. «Дверь открыта» —","opts":["Drzwi jest otwarte","Drzwi są otwarte","Drzwia są otwarte"],"answer":1,
      "explain":"Слово только множественное, глагол тоже: <b>drzwi są otwarte</b>."}
   ]
 },
 "essay":{
   "intro":"Сегодня пиши про людей и вещи — тут непослушные слова вылезут сами.",
   "prompt":"Напиши 5–7 предложений: как тебя зовут, сколько лет ты живёшь там, где живёшь, когда у тебя день рождения, кто твои друзья и что ты обычно теряешь дома.",
   "hint":"Каркас: Mam na imię… · Mieszkam tu od… lat · Moje urodziny są w… · Moi przyjaciele… · Zawsze gubię okulary / klucze… 💛",
   "example":"Mam na imię Marta i mieszkam w Krakowie od pięciu lat. Moje urodziny są w listopadzie, a imieniny w lipcu, więc świętuję dwa razy w roku. Moi najbliżsi przyjaciele mieszkają w innym mieście i widujemy się rzadko. W domu zawsze gubię okulary i nożyczki, chociaż leżą w tym samym miejscu. Raz w tygodniu chodzę do muzeum albo do kina, bo lubię wychodzić z domu. Drzwi do mojego mieszkania są ciężkie i zamykają się same. Ostatnio zostawiłam klucze w ręku i szukałam ich pół godziny."
 }
},
"6": {
 "day":6,"week":"01",
 "themeRu":"Первый день на работе",
 "themeEn":"Pierwszy dzień w pracy",
 "intro":"Понедельник, восемь сорок пять, стеклянная дверь с надписью <b>Wydawnictwo</b> — и Анна стоит перед ней ровно на десять минут раньше, чем нужно. Сегодня грамматики будет немного, зато вся она рабочая: как обратиться к коллеге, оставаясь на «вы», как написать письмо, которое не звучит ни как повестка из ведомства, ни как сообщение подруге, и какими словами описать то, чем ты занимаешься.",
 "introAudio":"Понедельник, восемь сорок пять, стеклянная дверь с надписью Wydawnictwo — и Анна стоит перед ней ровно на десять минут раньше, чем нужно. Сегодня грамматики будет немного, зато вся она рабочая: как обратиться к коллеге, оставаясь на вы, как написать письмо, которое не звучит ни как повестка из ведомства, ни как сообщение подруге, и какими словами описать то, чем ты занимаешься.",
 "goals":[
   "Обращаться в офисе: <b>panie Marku</b>, <b>pani Anno</b>, <b>pani dyrektor</b>",
   "Писать рабочее письмо: <b>Dzień dobry</b> … <b>Pozdrawiam serdecznie</b>",
   "Владеть словами офиса: <b>umowa, etat, dział, zebranie, termin</b>",
   "Говорить о своей работе: <b>zajmować się czymś</b>, <b>odpowiadać za coś</b>"
 ],
 "learned":[
   "Обратился(лась) в офисе: panie Marku, pani Anno, pani dyrektor",
   "Написал(а) рабочее письмо: Dzień dobry … Pozdrawiam serdecznie",
   "Освоил(а) слова офиса: umowa, etat, dział, zebranie, termin",
   "Рассказал(а) о своей работе: zajmować się czymś, odpowiadać za coś"
 ],
 "review":{
   "intro":"Вчерашние непослушные слова и одна фабрика позавчерашнего дня. Потом заходим в офис.",
   "introAudio":"Вчерашние непослушные слова и одна фабрика позавчерашнего дня. Потом заходим в офис.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> в единственном числе это слово не меняется.",
      "q":"«В центре» —","opts":["w centrze","w centrum","w centrach"],"answer":1,
      "explain":"Единственное число застыло: <b>w centrum</b>, do centrum, z centrum."},
     {"type":"choice","howto":"<b>Что делать:</b> слово только множественное — каким будет «один»?",
      "q":"«Одни брюки» —","opts":["jeden spodnie","jedne spodnie","jedna spodnia"],"answer":1,
      "explain":"При словах только множественного числа «один» — это <b>jedne</b>: jedne spodnie, jedne drzwi."},
     {"type":"choice","howto":"<b>Что делать:</b> различай два похожих хвоста.",
      "q":"Кто такой <b>kierownik</b>?","opts":["водитель","руководитель","сотрудник"],"answer":1,
      "explain":"<b>kierownik</b> — руководитель. Водитель — kierowca, сотрудник — pracownik."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«На этой неделе у нас три встречи»</b>","answer":"W tym tygodniu mamy trzy spotkania"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Правило 1 · Как звать коллегу",
   "title":"<em>panie Marku</em>, <em>pani Anno</em>",
   "paras":[
     "В польском офисе «вы» — это <b>pan</b> и <b>pani</b> плюс глагол в третьем лице: <b>Czy pan ma chwilę?</b> <b>Pani wie, gdzie jest dział promocji?</b> Это ты знаешь с A1. Новое сегодня — как назвать человека по имени, не переходя при этом на «ты».",
     "Обычная форма между коллегами: <b>pan</b> или <b>pani</b> плюс имя в звательном падеже. <b>Panie Marku</b>, <b>panie Tomaszu</b>, <b>panie Piotrze</b>, <b>pani Anno</b>, <b>pani Kasiu</b>, <b>pani Ewo</b>. Звательный падеж ты собирал(а) на A2: у мужских имён окончание -u или -e, у женских -o или -u. Звучит это тепло и совершенно нейтрально.",
     "А вот <b>pan</b> плюс фамилия в обращении — <b>panie Kowalski</b> — звучит холодно и на грани невежливости; так говорят разве что в полиции или в очень формальной сцене. Зато в третьем лице фамилия абсолютно уместна: <b>Pan Kowalski dzwonił.</b> <b>Rozmawiałam z panem Kowalskim.</b> Разница именно в том, обращаешься ты к человеку или говоришь о нём.",
     "С начальством работает должность: <b>panie dyrektorze</b>, <b>panie redaktorze</b>, <b>pani dyrektor</b>, <b>pani redaktor</b>. Мужская должность склоняется, женская после pani остаётся в исходной форме. И запасной вариант на случай сомнений — обойтись вообще без имени: <b>Przepraszam, czy mogę o coś zapytać?</b>"
   ],
   "audio":"В польском офисе вы — это pan и pani плюс глагол в третьем лице: czy pan ma chwilę; pani wie, gdzie jest dział promocji. Это знакомо с уровня A1. Новое сегодня — как назвать человека по имени, не переходя при этом на ты. Обычная форма между коллегами: pan или pani плюс имя в звательном падеже. Panie Marku, panie Tomaszu, panie Piotrze, pani Anno, pani Kasiu, pani Ewo. Звательный падеж был на уровне A2: у мужских имён окончание -u или -e, у женских -o или -u. Звучит это тепло и совершенно нейтрально. А вот pan плюс фамилия в обращении, panie Kowalski, звучит холодно и на грани невежливости; так говорят разве что в полиции или в очень формальной сцене. Зато в третьем лице фамилия абсолютно уместна: pan Kowalski dzwonił; rozmawiałam z panem Kowalskim. Разница именно в том, обращаешься ты к человеку или говоришь о нём. С начальством работает должность: panie dyrektorze, panie redaktorze, pani dyrektor, pani redaktor. Мужская должность склоняется, женская после pani остаётся в исходной форме. И запасной вариант на случай сомнений: обойтись вообще без имени. Przepraszam, czy mogę o coś zapytać?",
   "table":{"rows":[
     ["<b>panie Marku</b> · <b>panie Tomaszu</b> · <b>panie Piotrze</b> <button class=\"play\" data-say=\"panie Marku, panie Tomaszu, panie Piotrze\">🔊</button>","обращение к коллеге-мужчине"],
     ["<b>pani Anno</b> · <b>pani Kasiu</b> · <b>pani Ewo</b> <button class=\"play\" data-say=\"pani Anno, pani Kasiu, pani Ewo\">🔊</button>","обращение к коллеге-женщине"],
     ["⚠️ <b>panie Kowalski</b> <button class=\"play\" data-say=\"panie Kowalski\">🔊</button>","холодно, почти невежливо"],
     ["<b>Pan Kowalski dzwonił.</b> <button class=\"play\" data-say=\"Pan Kowalski dzwonił\">🔊</button>","о человеке в третьем лице — нормально"],
     ["<b>panie dyrektorze</b> · <b>pani dyrektor</b> <button class=\"play\" data-say=\"panie dyrektorze, pani dyrektor\">🔊</button>","должность: мужская гнётся, женская нет"],
     ["<b>Przepraszam, czy mogę o coś zapytać?</b> <button class=\"play\" data-say=\"Przepraszam, czy mogę o coś zapytać?\">🔊</button>","безопасный вариант без имени"]
   ],"star":2},
   "examples":[
     {"ru":"Пан Марек, у вас есть минутка?","en":"<b>Panie Marku</b>, ma pan chwilę?","say":"Panie Marku, ma pan chwilę?"},
     {"ru":"Пани Анна, это ваш стол.","en":"<b>Pani Anno</b>, to pani biurko.","say":"Pani Anno, to pani biurko."},
     {"ru":"Пан Ковальский звонил утром.","en":"<b>Pan Kowalski</b> dzwonił rano.","say":"Pan Kowalski dzwonił rano."},
     {"ru":"Я разговаривала с паном Ковальским вчера.","en":"Rozmawiałam z <b>panem Kowalskim</b> wczoraj.","say":"Rozmawiałam z panem Kowalskim wczoraj."},
     {"ru":"Пан директор, можно вас на минуту?","en":"<b>Panie dyrektorze</b>, mogę na chwilę?","say":"Panie dyrektorze, mogę na chwilę?"}
   ],
   "mistakes":[
     {"wrong":"Panie Marek, ma pan chwilę?","right":"<b>Panie Marku</b>, ma pan chwilę?","why":"в обращении имя стоит в звательном падеже: Marku, Tomaszu, Anno, Kasiu."},
     {"wrong":"Panie Kowalski, mam pytanie.","right":"<b>Panie Marku</b>, mam pytanie.","why":"обращаться по фамилии в офисе невежливо. Фамилия годится, когда говоришь о человеке: pan Kowalski dzwonił."}
   ],
   "mnemonic":"🤝 К человеку — pan/pani плюс имя в звательном: panie Marku, pani Anno. О человеке — pan Kowalski.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни звательный падеж с A2.",
      "q":"Обращение к коллеге по имени Marek —","opts":["panie Marek","panie Marku","pan Marku"],"answer":1,
      "explain":"В обращении имя идёт в звательном падеже: <b>panie Marku</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> склоняется ли должность после pani?",
      "q":"«Я разговаривала с пани директор» —","opts":["Rozmawiałam z panią dyrektorką","Rozmawiałam z panią dyrektor","Rozmawiałam z pani dyrektor"],"answer":1,
      "explain":"Склоняется только pani, должность остаётся: <b>z panią dyrektor</b>."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«Пани Анна, у вас есть минутка?»","accept":["pani anno, ma pani chwilę","pani anno ma pani chwile","pani anno, ma pani chwile"],"placeholder":"Pani Anno…"}
   ]
  },
  {
   "eyebrow":"Правило 2 · Рабочее письмо",
   "title":"<em>Dzień dobry</em> … <em>Pozdrawiam serdecznie</em>",
   "paras":[
     "На B1 ты писал(а) официальное письмо в urząd: <b>Szanowni Państwo</b> в начале, <b>Z poważaniem</b> в конце. Рабочая переписка с коллегами устроена мягче — это отдельный, полуофициальный регистр, и путать их не стоит: официальное письмо коллеге звучит так, будто ты на него жалуешься.",
     "Начало. <b>Dzień dobry,</b> — самая частая, нейтральная и безопасная форма. Можно <b>Dzień dobry Pani Anno,</b> если хочешь теплее, или <b>Szanowna Pani,</b> когда человек старше, выше по должности или вы пишете друг другу впервые. <b>Cześć</b> — только если вы уже на «ты».",
     "Конец. <b>Pozdrawiam serdecznie</b> — тепло и совершенно обычно. <b>Pozdrawiam</b> — коротко, по-деловому. <b>Z poważaniem</b> — официально, для внешних адресатов и первого письма незнакомому человеку. Ниже подписи ставят имя, фамилию и должность.",
     "Середина собирается из готовых кирпичей, которые повторяются каждый день: <b>W załączeniu przesyłam…</b> (во вложении посылаю), <b>Proszę o informację, czy…</b>, <b>Czy mogłaby Pani…</b>, <b>Przepraszam za zwłokę</b> (извините за задержку), <b>Dam znać do piątku</b> (дам знать до пятницы), <b>W razie pytań proszę pisać.</b>"
   ],
   "audio":"На уровне B1 было официальное письмо в urząd: Szanowni Państwo в начале, Z poważaniem в конце. Рабочая переписка с коллегами устроена мягче, это отдельный, полуофициальный регистр, и путать их не стоит: официальное письмо коллеге звучит так, будто ты на него жалуешься. Начало. Dzień dobry — самая частая, нейтральная и безопасная форма. Можно Dzień dobry Pani Anno, если хочешь теплее, или Szanowna Pani, когда человек старше, выше по должности или вы пишете друг другу впервые. Cześć — только если вы уже на ты. Конец. Pozdrawiam serdecznie — тепло и совершенно обычно. Pozdrawiam — коротко, по-деловому. Z poważaniem — официально, для внешних адресатов и первого письма незнакомому человеку. Ниже подписи ставят имя, фамилию и должность. Середина собирается из готовых кирпичей: w załączeniu przesyłam, во вложении посылаю; proszę o informację, czy; czy mogłaby Pani; przepraszam za zwłokę, извините за задержку; dam znać do piątku; w razie pytań proszę pisać.",
   "table":{"rows":[
     ["<b>Dzień dobry,</b> <button class=\"play\" data-say=\"Dzień dobry\">🔊</button>","начало — нейтрально и безопасно"],
     ["<b>Szanowna Pani,</b> · <b>Szanowni Państwo,</b> <button class=\"play\" data-say=\"Szanowna Pani, Szanowni Państwo\">🔊</button>","официально — вовне и в первый раз"],
     ["<b>W załączeniu przesyłam…</b> <button class=\"play\" data-say=\"W załączeniu przesyłam raport\">🔊</button>","Во вложении посылаю…"],
     ["<b>Przepraszam za zwłokę.</b> <button class=\"play\" data-say=\"Przepraszam za zwłokę\">🔊</button>","Извините за задержку."],
     ["<b>Pozdrawiam serdecznie</b> <button class=\"play\" data-say=\"Pozdrawiam serdecznie\">🔊</button>","конец письма коллеге"],
     ["<b>Z poważaniem</b> <button class=\"play\" data-say=\"Z poważaniem\">🔊</button>","конец официального письма"]
   ],"star":4},
   "examples":[
     {"ru":"Добрый день, во вложении посылаю отчёт.","en":"<b>Dzień dobry</b>, <b>w załączeniu przesyłam</b> raport.","say":"Dzień dobry, w załączeniu przesyłam raport."},
     {"ru":"Прошу сообщить, подходит ли вам пятница.","en":"<b>Proszę o informację</b>, czy piątek Pani odpowiada.","say":"Proszę o informację, czy piątek Pani odpowiada."},
     {"ru":"Извините за задержку, дам знать до пятницы.","en":"<b>Przepraszam za zwłokę</b>, <b>dam znać</b> do piątku.","say":"Przepraszam za zwłokę, dam znać do piątku."},
     {"ru":"Если будут вопросы, пишите.","en":"<b>W razie pytań proszę pisać.</b>","say":"W razie pytań proszę pisać."},
     {"ru":"С наилучшими пожеланиями, Анна.","en":"<b>Pozdrawiam serdecznie</b>, Anna.","say":"Pozdrawiam serdecznie, Anna."}
   ],
   "mistakes":[
     {"wrong":"Szanowni Państwo! Przesyłam raport. Z poważaniem. (коллеге за соседним столом)","right":"<b>Dzień dobry</b>, w załączeniu przesyłam raport. <b>Pozdrawiam serdecznie</b>.","why":"официальная рамка внутри команды звучит холодно и настораживает. Коллегам пишут полуофициально."},
     {"wrong":"Cześć Pani Anno!","right":"<b>Dzień dobry Pani Anno,</b>","why":"cześć и pani в одной строке не сочетаются: либо «ты» и cześć, либо «вы» и dzień dobry."}
   ],
   "mnemonic":"✉️ Коллеге: Dzień dobry … Pozdrawiam serdecznie. В ведомство: Szanowni Państwo … Z poważaniem.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> письмо внутри команды, не в ведомство.",
      "q":"Чем закончить письмо коллеге?","opts":["Z poważaniem","Pozdrawiam serdecznie","Cześć"],"answer":1,
      "explain":"Полуофициально и тепло — <b>Pozdrawiam serdecznie</b>. Z poważaniem оставляют для внешних адресатов."},
     {"type":"choice","howto":"<b>Что делать:</b> ищи стандартную формулу про вложение.",
      "q":"«Во вложении посылаю отчёт» —","opts":["W załączeniu przesyłam raport","W załączniku wysyłam raportu","Załączam się raport"],"answer":0,
      "explain":"Готовая формула: <b>W załączeniu przesyłam…</b>"},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Извините за задержку»</b>","answer":"Przepraszam za zwłokę"}
   ]
  },
  {
   "eyebrow":"Правило 3 · Слова офиса",
   "title":"<em>umowa, etat, dział, zebranie, termin</em>",
   "paras":[
     "Договор и условия: <b>umowa o pracę</b> (трудовой договор), <b>umowa zlecenie</b> (договор поручения — частая альтернатива), <b>etat</b> (штатная ставка): <b>cały etat</b>, <b>pół etatu</b>; <b>okres próbny</b> (испытательный срок), <b>wynagrodzenie</b> или <b>pensja</b> (зарплата), <b>urlop</b> (отпуск).",
     "Люди и структура: <b>przełożony</b> и <b>przełożona</b> (начальник, начальница), <b>szef</b> и <b>szefowa</b> (шеф — разговорнее), <b>współpracownik</b> и <b>współpracowniczka</b> (коллега), <b>dział</b> (отдел): <b>dział promocji</b>, <b>dział handlowy</b>; <b>kadry</b> (отдел кадров), <b>redakcja</b> (редакция).",
     "Рабочий день держат отглагольные существительные первого дня недели: <b>spotkanie</b> (встреча), <b>zebranie</b> (собрание, планёрка), <b>szkolenie</b> (обучение, тренинг), <b>zamówienie</b> (заказ), <b>ogłoszenie</b> (объявление), <b>opóźnienie</b> (задержка). И обороты работают ровно те же: <b>po szkoleniu</b>, <b>przed zebraniem</b>, <b>podczas spotkania</b>, <b>coś do sprawdzenia</b>.",
     "Время и сроки. <b>termin</b> — это прежде всего срок или назначенное время: <b>Termin mija w piątek</b> (срок истекает в пятницу), <b>Mam termin u lekarza</b> (у меня запись к врачу). Значение «специальное слово» у него тоже есть, но в офисе почти не встречается. Рядом: <b>na czas</b> (вовремя), <b>zdążyć</b> (успеть), <b>przerwa na lunch</b>, <b>nadgodziny</b> (переработки)."
   ],
   "audio":"Договор и условия: umowa o pracę, трудовой договор; umowa zlecenie, договор поручения; etat, штатная ставка — cały etat, pół etatu; okres próbny, испытательный срок; wynagrodzenie или pensja, зарплата; urlop, отпуск. Люди и структура: przełożony и przełożona, начальник и начальница; szef и szefowa, шеф, разговорнее; współpracownik и współpracowniczka, коллега; dział, отдел — dział promocji, dział handlowy; kadry, отдел кадров; redakcja, редакция. Рабочий день держат отглагольные существительные первого дня недели: spotkanie, встреча; zebranie, собрание, планёрка; szkolenie, обучение; zamówienie, заказ; ogłoszenie, объявление; opóźnienie, задержка. И обороты работают ровно те же: po szkoleniu, przed zebraniem, podczas spotkania, coś do sprawdzenia. Время и сроки. Termin это прежде всего срок или назначенное время: termin mija w piątek, срок истекает в пятницу; mam termin u lekarza, у меня запись к врачу. Рядом: na czas, вовремя; zdążyć, успеть; przerwa na lunch; nadgodziny, переработки.",
   "table":{"rows":[
     ["<b>umowa o pracę</b> · <b>okres próbny</b> · <b>etat</b> <button class=\"play\" data-say=\"umowa o pracę, okres próbny, cały etat\">🔊</button>","трудовой договор · испытательный срок · ставка"],
     ["<b>przełożona</b> · <b>współpracownik</b> · <b>kadry</b> <button class=\"play\" data-say=\"przełożona, współpracownik, kadry\">🔊</button>","начальница · коллега · отдел кадров"],
     ["<b>dział</b> · dział promocji · <b>redakcja</b> <button class=\"play\" data-say=\"dział promocji, redakcja\">🔊</button>","отдел · отдел продвижения · редакция"],
     ["<b>zebranie</b> · <b>szkolenie</b> · <b>opóźnienie</b> <button class=\"play\" data-say=\"zebranie, szkolenie, opóźnienie\">🔊</button>","собрание · тренинг · задержка"],
     ["<b>Termin mija w piątek.</b> <button class=\"play\" data-say=\"Termin mija w piątek\">🔊</button>","Срок истекает в пятницу."],
     ["<b>na czas</b> · <b>zdążyć</b> · <b>przerwa na lunch</b> <button class=\"play\" data-say=\"na czas, zdążyć, przerwa na lunch\">🔊</button>","вовремя · успеть · перерыв на обед"]
   ],"star":4},
   "examples":[
     {"ru":"Я подписала договор на испытательный срок.","en":"Podpisałam <b>umowę</b> na <b>okres próbny</b>.","say":"Podpisałam umowę na okres próbny."},
     {"ru":"Собрание отдела в одиннадцать.","en":"<b>Zebranie działu</b> o jedenastej.","say":"Zebranie działu o jedenastej."},
     {"ru":"После тренинга я пошла в отдел кадров.","en":"<b>Po szkoleniu</b> poszłam do <b>kadr</b>.","say":"Po szkoleniu poszłam do kadr."},
     {"ru":"Срок по первой книге истекает в пятницу.","en":"<b>Termin</b> przy pierwszej książce <b>mija w piątek</b>.","say":"Termin przy pierwszej książce mija w piątek."},
     {"ru":"Успею ли я вовремя?","en":"Czy <b>zdążę na czas</b>?","say":"Czy zdążę na czas?"}
   ],
   "mistakes":[
     {"wrong":"Mam nowy termin w słowniku.","right":"Mam nowy <b>termin</b> u lekarza.","why":"в живой речи termin — это срок или назначенное время; «специальное слово» чаще называют pojęcie."},
     {"wrong":"Pracuję na cały etacie.","right":"Pracuję na <b>cały etat</b>.","why":"устойчивое сочетание: na cały etat, na pół etatu."}
   ],
   "mnemonic":"🏢 umowa i etat · przełożona i dział · zebranie i szkolenie · termin mija w piątek.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни главное значение слова termin.",
      "q":"Что значит <b>termin mija w piątek</b>?","opts":["термин появится в пятницу","срок истекает в пятницу","встреча состоится в пятницу"],"answer":1,
      "explain":"<b>termin</b> — срок; <b>mijać</b> — проходить, истекать."},
     {"type":"choice","howto":"<b>Что делать:</b> куда идут за договором?",
      "q":"«Мне обратиться в отдел кадров?» —","opts":["Mam się zgłosić do kadr?","Mam się zgłosić do działu?","Mam się zgłosić do redakcji?"],"answer":0,
      "explain":"Отдел кадров — <b>kadry</b>; обратиться туда — zgłosić się do kadr."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«Собрание отдела в одиннадцать»","accept":["zebranie działu o jedenastej","zebranie dzialu o jedenastej"],"placeholder":"Zebranie…"}
   ]
  },
  {
   "eyebrow":"Правило 4 · Чем ты занимаешься",
   "title":"<em>zajmować się czymś</em>, <em>odpowiadać za coś</em>",
   "paras":[
     "Первый вопрос новому человеку в офисе: <b>Czym się pani zajmuje?</b> — «чем вы занимаетесь». Рамка <b>zajmować się</b> плюс творительный падеж полностью совпадает с русской: <b>Zajmuję się korektą.</b> <b>Zajmujemy się książkami dla dzieci.</b> Ничего запоминать не надо — достаточно перевести.",
     "Вторая рамка — <b>odpowiadać za</b> плюс винительный: <b>Odpowiadam za promocję.</b> <b>Kto odpowiada za ten dział?</b> Русское «отвечать за» устроено так же. Но не путай её с <b>odpowiadać na</b> плюс винительный — это «отвечать на»: <b>odpowiadać na pytania</b>, <b>na maile</b>. Один глагол, два предлога, два разных смысла.",
     "Ещё три рамки, которые понадобятся в первый же день: <b>zgłosić się do kogoś</b> — обратиться к кому-то (<b>Proszę zgłosić się do kadr</b>); <b>przekazać coś komuś</b> — передать что-то кому-то (<b>Przekażę to pani Ewie</b>); <b>umówić się na coś</b> — договориться о чём-то (<b>Umówmy się na środę</b>).",
     "И готовые фразы первого дня, которые снимают половину неловкости: <b>Jestem tu nowa.</b> <b>Miło mi.</b> <b>Czy mogę o coś zapytać?</b> <b>Gdzie mogę zostawić rzeczy?</b> <b>Do kogo mam się zgłosić?</b> <b>Dziękuję, poradzę sobie.</b>"
   ],
   "audio":"Первый вопрос новому человеку в офисе: czym się pani zajmuje, чем вы занимаетесь. Рамка zajmować się плюс творительный падеж полностью совпадает с русской: zajmuję się korektą; zajmujemy się książkami dla dzieci. Ничего запоминать не надо, достаточно перевести. Вторая рамка — odpowiadać za плюс винительный: odpowiadam za promocję; kto odpowiada za ten dział. Русское отвечать за устроено так же. Но не путай её с odpowiadać na плюс винительный, это отвечать на: odpowiadać na pytania, na maile. Один глагол, два предлога, два разных смысла. Ещё три рамки, которые понадобятся в первый же день: zgłosić się do kogoś, обратиться к кому-то — proszę zgłosić się do kadr; przekazać coś komuś, передать что-то кому-то — przekażę to pani Ewie; umówić się na coś, договориться о чём-то — umówmy się na środę. И готовые фразы первого дня: jestem tu nowa; miło mi; czy mogę o coś zapytać; gdzie mogę zostawić rzeczy; do kogo mam się zgłosić; dziękuję, poradzę sobie.",
   "table":{"rows":[
     ["<b>zajmować się</b> + твор. <button class=\"play\" data-say=\"Zajmuję się korektą\">🔊</button>","заниматься чем — падеж совпадает"],
     ["<b>odpowiadać za</b> + вин. <button class=\"play\" data-say=\"Odpowiadam za promocję\">🔊</button>","отвечать за что"],
     ["⚠️ <b>odpowiadać na</b> + вин. <button class=\"play\" data-say=\"Odpowiadam na maile\">🔊</button>","отвечать на что — другой предлог"],
     ["<b>zgłosić się do</b> + род. <button class=\"play\" data-say=\"Proszę zgłosić się do kadr\">🔊</button>","обратиться к кому"],
     ["<b>umówić się na</b> + вин. <button class=\"play\" data-say=\"Umówmy się na środę\">🔊</button>","договориться о чём"],
     ["<b>Jestem tu nowa. Miło mi.</b> <button class=\"play\" data-say=\"Jestem tu nowa. Miło mi.\">🔊</button>","Я тут новенькая. Приятно познакомиться."]
   ],"star":2},
   "examples":[
     {"ru":"Я занимаюсь корректурой детских книг.","en":"<b>Zajmuję się korektą</b> książek dla dzieci.","say":"Zajmuję się korektą książek dla dzieci."},
     {"ru":"Чем вы занимаетесь?","en":"<b>Czym się pani zajmuje?</b>","say":"Czym się pani zajmuje?"},
     {"ru":"Я отвечаю за один тираж.","en":"<b>Odpowiadam za</b> jeden tytuł.","gloss":"tytuł — книга в работе, «название»","say":"Odpowiadam za jeden tytuł."},
     {"ru":"Я отвечаю на письма до обеда.","en":"<b>Odpowiadam na</b> maile do południa.","say":"Odpowiadam na maile do południa."},
     {"ru":"Давайте договоримся на среду.","en":"<b>Umówmy się na</b> środę.","say":"Umówmy się na środę."}
   ],
   "mistakes":[
     {"wrong":"Zajmuję się korekty.","right":"<b>Zajmuję się korektą.</b>","why":"zajmować się требует творительного падежа — ровно как русское «заниматься чем»."},
     {"wrong":"Odpowiadam na promocję w naszym dziale.","right":"<b>Odpowiadam za</b> promocję w naszym dziale.","why":"«отвечать за» — предлог za. Odpowiadać na значит «отвечать на письмо, на вопрос»."}
   ],
   "mnemonic":"🧷 zajmować się CZYM (твор.) · odpowiadać ZA co (вин.) · odpowiadać NA co (вин., но «отвечать на»).",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> падеж тот же, что в русском.",
      "q":"«Я занимаюсь корректурой» —","opts":["Zajmuję się korektą","Zajmuję się korekty","Zajmuję za korektę"],"answer":0,
      "explain":"Творительный падеж: <b>zajmuję się korektą</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> выбери правильный предлог.",
      "q":"«Я отвечаю за продвижение» —","opts":["Odpowiadam na promocję","Odpowiadam za promocję","Odpowiadam z promocją"],"answer":1,
      "explain":"Отвечать за — предлог <b>za</b> плюс винительный."},
     {"type":"speak","howto":"Нажми микрофон и скажи вслух — две фразы первого рабочего дня.",
      "target":"Jestem tu nowa. Zajmuję się korektą i odpowiadam za jeden tytuł.","sub":"я тут новенькая; занимаюсь корректурой и отвечаю за одну книгу","want":"Jestem tu nowa. Zajmuję się korektą i odpowiadam za jeden tytuł."}
   ]
  }
 ],
 "dialogue":{
   "intro":"Понедельник, девять утра, второй этаж издательства. Анна знакомится со своей начальницей. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"E","name":"Ewa","side":"right","en":"Dzień dobry, pani Anno. Jestem Ewa Zielińska, pani przełożona.","ru":"Добрый день, пани Анна. Я Эва Зелинская, ваша начальница.",
      "words":[["pani Anno","пани Анна — обращение"],["przełożona","начальница"]]},
     {"who":"A","name":"Anna","side":"left","en":"Dzień dobry. Bardzo mi miło. Jestem tu od dziś.","ru":"Добрый день. Очень приятно. Я здесь с сегодняшнего дня.",
      "words":[["Bardzo mi miło","очень приятно"],["od dziś","с сегодняшнего дня"]]},
     {"who":"E","name":"Ewa","side":"right","en":"Wiem. Najpierw szkolenie, potem zebranie działu o jedenastej.","ru":"Знаю. Сначала тренинг, потом собрание отдела в одиннадцать.",
      "words":[["szkolenie","тренинг"],["zebranie","собрание"]]},
     {"who":"A","name":"Anna","side":"left","en":"Czy mam się gdzieś zgłosić po umowę?","ru":"Мне куда-то обратиться за договором?",
      "words":[["zgłosić się","обратиться"],["umowę","договор"]]},
     {"who":"E","name":"Ewa","side":"right","en":"Do kadr, pierwsze piętro. Umowa na okres próbny, cały etat.","ru":"В отдел кадров, второй этаж. Договор на испытательный срок, полная ставка.",
      "words":[["kadr","отдела кадров"],["okres próbny","испытательный срок"]]},
     {"who":"A","name":"Anna","side":"left","en":"A czym zajmuje się nasz dział?","ru":"А чем занимается наш отдел?",
      "words":[["zajmuje się","занимается"],["dział","отдел"]]},
     {"who":"E","name":"Ewa","side":"right","en":"Książkami dla dzieci. Pani będzie odpowiadać za korektę.","ru":"Детскими книгами. Вы будете отвечать за корректуру.",
      "words":[["odpowiadać za","отвечать за"],["korektę","корректуру"]]},
     {"who":"A","name":"Anna","side":"left","en":"Rozumiem. Jaki jest termin przy pierwszym tytule?","ru":"Понимаю. Какой срок по первой книге?",
      "words":[["termin","срок"],["tytule","книге, названии"]]},
     {"who":"E","name":"Ewa","side":"right","en":"Piątek. I proszę mówić mi Ewa, u nas wszyscy są na ty.","ru":"Пятница. И зовите меня Эва, у нас все на «ты».",
      "words":[["proszę mówić mi Ewa","зовите меня Эва"],["na ty","на «ты»"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка в коридоре: новый человек ищет отдел. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Przepraszam, gdzie jest dział promocji?","ru":"Извините, где отдел продвижения?"},
     {"who":"B","en":"Drugie piętro, za szklanymi drzwiami.","ru":"Третий этаж, за стеклянной дверью."},
     {"who":"A","en":"A kadry?","ru":"А отдел кадров?"},
     {"who":"B","en":"Pierwsze. Pani u nas nowa?","ru":"Второй. Вы у нас новенькая?"},
     {"who":"A","en":"Od godziny.","ru":"Уже целый час."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — всё, что нужно, чтобы пережить первый рабочий день по-польски.",
   "items":[
     {"en":"wydawnictwo","ru":"издательство","ex":"Pracuję w wydawnictwie od poniedziałku."},
     {"en":"umowa o pracę / etat","ru":"трудовой договор / ставка","ex":"Umowa na okres próbny, cały etat."},
     {"en":"okres próbny","ru":"испытательный срок","ex":"Okres próbny trwa trzy miesiące."},
     {"en":"przełożony / przełożona","ru":"начальник / начальница","ex":"Moja przełożona nazywa się Ewa."},
     {"en":"współpracownik / współpracowniczka","ru":"коллега","ex":"Poznałam wszystkich współpracowników."},
     {"en":"dział / redakcja","ru":"отдел / редакция","ex":"Nasz dział zajmuje się książkami dla dzieci."},
     {"en":"kadry","ru":"отдел кадров","ex":"Proszę zgłosić się do kadr."},
     {"en":"zebranie / szkolenie","ru":"собрание / тренинг","ex":"Zebranie działu o jedenastej."},
     {"en":"termin","ru":"срок, дедлайн","ex":"Termin mija w piątek."},
     {"en":"zajmować się czymś","ru":"заниматься чем","ex":"Zajmuję się korektą."},
     {"en":"odpowiadać za coś","ru":"отвечать за что","ex":"Odpowiadam za jeden tytuł."},
     {"en":"Pozdrawiam serdecznie","ru":"с наилучшими пожеланиями (конец письма)","ex":"Pozdrawiam serdecznie, Anna."}
   ]
 },
 "drag":{
   "intro":"Перетащи офисное слово к его переводу. Все четыре прозвучали сегодня утром.",
   "pairs":[["przełożona","начальница"],["kadry","отдел кадров"],["zebranie","собрание"],["termin","срок"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как прошёл первый рабочий день. Это самый «взрослый» текст недели.",
   "title":"Pierwszy dzień",
   "sentences":["W poniedziałek stałam przed szklanymi drzwiami dziesięć minut za wcześnie.","Moja przełożona ma na imię Ewa i od razu poprosiła, żebym mówiła jej po imieniu.","Najpierw było szkolenie z systemu, potem zebranie całego działu.","Podczas zebrania notowałam wszystko, czego nie rozumiałam.","Po szkoleniu poszłam do kadr podpisać umowę na okres próbny.","Zajmuję się korektą książek dla dzieci i odpowiadam za jeden tytuł.","Termin przy pierwszej książce mija już w piątek.","Przerwa na lunch trwa pół godziny i wszyscy jedzą razem w kuchni.","Wieczorem napisałam pierwszego służbowego maila i trzy razy sprawdziłam zakończenie.","Pozdrawiam serdecznie brzmi lepiej, niż się bałam."],
   "translation":"В понедельник я стояла перед стеклянной дверью на десять минут раньше нужного. Мою начальницу зовут Эва, и она сразу попросила обращаться к ней по имени. Сначала был тренинг по системе, потом собрание всего отдела. Во время собрания я записывала всё, чего не понимала. После тренинга я пошла в отдел кадров подписывать договор на испытательный срок. Я занимаюсь корректурой детских книг и отвечаю за одну из них. Срок по первой книге истекает уже в пятницу. Перерыв на обед длится полчаса, и все едят вместе на кухне. Вечером я написала первое рабочее письмо и три раза проверила концовку. «Pozdrawiam serdecznie» звучит лучше, чем я боялась."
 },
 "quiz":{
   "intro":"Пять вопросов — и сюжетный день закрыт. 💛",
   "items":[
     {"q":"1. Обращение к коллеге по имени Marek —","opts":["panie Marek","panie Marku","pan Marku"],"answer":1,
      "explain":"В обращении имя стоит в звательном падеже: <b>panie Marku</b>."},
     {"q":"2. «Я занимаюсь корректурой» —","opts":["Zajmuję się korektą","Zajmuję się korekty","Zajmuję za korektę"],"answer":0,
      "explain":"zajmować się требует творительного падежа: <b>korektą</b>."},
     {"q":"3. «Я отвечаю за продвижение» —","opts":["Odpowiadam na promocję","Odpowiadam za promocję","Odpowiadam z promocją"],"answer":1,
      "explain":"Отвечать за — предлог <b>za</b> плюс винительный."},
     {"q":"4. Чем закончить письмо коллеге?","opts":["Z poważaniem","Pozdrawiam serdecznie","Cześć"],"answer":1,
      "explain":"Внутри команды — <b>Pozdrawiam serdecznie</b>; Z poważaniem пишут внешним адресатам."},
     {"q":"5. Что значит <b>termin mija w piątek</b>?","opts":["термин появится в пятницу","срок истекает в пятницу","встреча состоится в пятницу"],"answer":1,
      "explain":"<b>termin</b> — срок, <b>mijać</b> — истекать."}
   ]
 },
 "essay":{
   "intro":"Сегодня напиши то, что пригодится по-настоящему: короткое рабочее письмо.",
   "prompt":"Напиши письмо коллеге на 5–7 предложений: поздоровайся, скажи, что посылаешь во вложении, попроси подтвердить срок, извинись за задержку, предложи встречу и попрощайся по-рабочему.",
   "hint":"Каркас: Dzień dobry, … · W załączeniu przesyłam… · Proszę o informację, czy… · Przepraszam za zwłokę… · Umówmy się na… · Pozdrawiam serdecznie ✉️",
   "example":"Dzień dobry, w załączeniu przesyłam poprawioną wersję tekstu. Sprawdziłam całość i zaznaczyłam wszystkie miejsca do sprawdzenia. Proszę o informację, czy termin w piątek nadal jest aktualny. Przepraszam za zwłokę, w zeszłym tygodniu miałam dwa szkolenia i zebranie działu. Jeśli coś będzie niejasne, proszę pisać albo dzwonić. Może umówmy się na krótkie spotkanie w środę po południu. Pozdrawiam serdecznie, Anna."
 }
},
"7": {
 "day":7,"week":"01",
 "themeRu":"Повторение недели 1",
 "themeEn":"Powtórka 1",
 "intro":"Неделя закрывается — и посмотри, что в ней произошло: ты больше не учишь слова по одному. Ты их делаешь. Из глагола — существительное, из существительного — название места, из приставки — новый глагол, из прилагательного — качество. Сегодня ничего нового не будет: соберём картину целиком, проверим себя и прочитаем незнакомое слово, ни разу не заглянув в словарь.",
 "introAudio":"Неделя закрывается — и посмотри, что в ней произошло: ты больше не учишь слова по одному. Ты их делаешь. Из глагола существительное, из существительного название места, из приставки новый глагол, из прилагательного качество. Сегодня ничего нового не будет: соберём картину целиком, проверим себя и прочитаем незнакомое слово, ни разу не заглянув в словарь.",
 "goals":[
   "Собрать словообразование недели в одну систему",
   "Читать незнакомое слово по частям: приставка, корень, суффикс",
   "Не спутать ловушки: <b>zapomnieć / zapamiętać</b>, <b>przeczytać</b>, <b>miłość</b>",
   "Уверенно держать непослушные слова: <b>muzeum, imię, ręce, drzwi</b>"
 ],
 "learned":[
   "Собрал(а) словообразование недели в одну систему",
   "Прочитал(а) незнакомое слово по частям: приставка, корень, суффикс",
   "Не спутал(а) ловушки: zapomnieć / zapamiętać, przeczytać, miłość",
   "Уверенно удержал(а) непослушные слова: muzeum, imię, ręce, drzwi"
 ],
 "review":{
   "intro":"Разминка по всей неделе. Не подглядывай — просто вспоминай. Промах не страшен: нужное правило рядом.",
   "introAudio":"Разминка по всей неделе. Не подглядывай — просто вспоминай. Промах не страшен: нужное правило рядом.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни первый день недели.",
      "q":"«После прочтения письма» —","opts":["Po przeczytanie listu","Po przeczytaniu listu","Po przeczytania listu"],"answer":1,
      "explain":"После po — предложный падеж: <b>po przeczytaniu</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> смотри на отрицание.",
      "q":"«Не бери это» —","opts":["Nie weź tego","Nie bierz tego","Nie wziąć tego"],"answer":1,
      "explain":"В запрете — несовершенный вид: <b>nie bierz</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> это ловушка третьего дня.",
      "q":"«Я забыл пароль» —","opts":["Zapamiętałem hasło","Zapomniałem hasła","Przypomniałem hasło"],"answer":1,
      "explain":"Забыть — <b>zapomnieć</b>; запомнить — zapamiętać."},
     {"type":"choice","howto":"<b>Что делать:</b> разбери слово на корень и хвост.",
      "q":"«Прачечная» —","opts":["pralka","pralnia","pranie"],"answer":1,
      "explain":"Место — хвост -nia: <b>pralnia</b>. Pralka — стиральная машина, pranie — стирка."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни пятый день.",
      "q":"«Дверь открыта» —","opts":["Drzwi jest otwarte","Drzwi są otwarte","Drzwia są otwarte"],"answer":1,
      "explain":"Слово только множественное, глагол тоже: <b>drzwi są otwarte</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Я занимаюсь корректурой»</b>","answer":"Zajmuję się korektą"}
   ]
 },
 "rules":[
  {
   "eyebrow":"Повторение 1 · Слово из слова",
   "title":"<em>-anie</em>, <em>-enie</em>, <em>-cie</em> и четыре оборота",
   "paras":[
     "Главная мысль недели одной строкой: из любого польского глагола делается существительное. Глаголы на <b>-ać</b> дают <b>-anie</b> (czytanie, czekanie, spotkanie), на <b>-ić</b>, <b>-yć</b>, <b>-eć</b> дают <b>-enie</b> (mówienie, zaproszenie, tłumaczenie), а глаголы с гласной перед -ć и на -ąć дают <b>-cie</b> (mycie, picie, wzięcie, zajęcie, wyjście).",
     "Вид переезжает в существительное целиком: <b>czytanie</b> — само занятие, <b>przeczytanie</b> — факт, что дочитано. Склоняются они как okno, а родительный множественного всегда короткий, на -ń: <b>spotkań</b>, <b>mieszkań</b>, <b>szkoleń</b>.",
     "Главная их работа — стоять после предлога вместо целого придаточного, и тут важен падеж. <b>po</b> плюс предложный: po przeczytaniu, po zdaniu egzaminu. <b>przed</b> плюс творительный: przed wyjściem, przed spotkaniem. <b>podczas</b> плюс родительный: podczas czekania. <b>do</b> плюс родительный: coś do jedzenia, dużo do zrobienia.",
     "И половина этих слов давно живёт у тебя в активном запасе: <b>mieszkanie</b>, <b>jedzenie</b>, <b>ubranie</b>, <b>zdjęcie</b>, <b>życie</b>, <b>wejście</b>, <b>wyjście</b>. А рабочая тройка вчерашнего дня — <b>spotkanie</b>, <b>zebranie</b>, <b>szkolenie</b> — сделана ровно тем же способом."
   ],
   "audio":"Главная мысль недели одной строкой: из любого польского глагола делается существительное. Глаголы на -ać дают -anie: czytanie, czekanie, spotkanie. На -ić, -yć, -eć дают -enie: mówienie, zaproszenie, tłumaczenie. А глаголы с гласной перед ć и на -ąć дают -cie: mycie, picie, wzięcie, zajęcie, wyjście. Вид переезжает в существительное целиком: czytanie это само занятие, przeczytanie это факт, что дочитано. Склоняются они как okno, а родительный множественного всегда короткий, на ń: spotkań, mieszkań, szkoleń. Главная их работа — стоять после предлога вместо целого придаточного, и тут важен падеж. Po плюс предложный: po przeczytaniu, po zdaniu egzaminu. Przed плюс творительный: przed wyjściem, przed spotkaniem. Podczas плюс родительный: podczas czekania. Do плюс родительный: coś do jedzenia, dużo do zrobienia. И половина этих слов давно живёт в активном запасе: mieszkanie, jedzenie, ubranie, zdjęcie, życie, wejście, wyjście. А рабочая тройка вчерашнего дня, spotkanie, zebranie, szkolenie, сделана ровно тем же способом.",
   "table":{"rows":[
     ["-ać → <b>-anie</b> · czytanie, spotkanie <button class=\"play\" data-say=\"czytanie, spotkanie\">🔊</button>","чтение · встреча"],
     ["-ić, -yć, -eć → <b>-enie</b> · zaproszenie, tłumaczenie <button class=\"play\" data-say=\"zaproszenie, tłumaczenie\">🔊</button>","приглашение · перевод"],
     ["гласная + -ć, -ąć → <b>-cie</b> · mycie, wzięcie, wyjście <button class=\"play\" data-say=\"mycie, wzięcie, wyjście\">🔊</button>","мытьё · взятие · выход"],
     ["<b>po</b> przeczytaniu · <b>przed</b> wyjściem <button class=\"play\" data-say=\"po przeczytaniu, przed wyjściem\">🔊</button>","предложный · творительный"],
     ["<b>podczas</b> czekania · <b>do</b> zrobienia <button class=\"play\" data-say=\"podczas czekania, dużo do zrobienia\">🔊</button>","родительный · родительный"],
     ["род. мн.: <b>spotkań · mieszkań · szkoleń</b> <button class=\"play\" data-say=\"spotkań, mieszkań, szkoleń\">🔊</button>","короткий, на -ń"]
   ],"star":3},
   "examples":[
     {"ru":"После сдачи экзамена мы пошли в кафе.","en":"<b>Po zdaniu egzaminu</b> poszliśmy do kawiarni.","say":"Po zdaniu egzaminu poszliśmy do kawiarni."},
     {"ru":"Перед выходом я проверяю список дел.","en":"<b>Przed wyjściem</b> sprawdzam listę rzeczy <b>do zrobienia</b>.","say":"Przed wyjściem sprawdzam listę rzeczy do zrobienia."},
     {"ru":"Во время собрания я записывала всё подряд.","en":"<b>Podczas zebrania</b> notowałam wszystko.","say":"Podczas zebrania notowałam wszystko."},
     {"ru":"На этой неделе у нас пять встреч.","en":"W tym tygodniu mamy pięć <b>spotkań</b>.","say":"W tym tygodniu mamy pięć spotkań."}
   ],
   "mistakes":[
     {"wrong":"Podczas spotkaniu notowałam.","right":"<b>Podczas spotkania</b> notowałam.","why":"podczas берёт родительный падеж, а не предложный."},
     {"wrong":"pięć spotkaniów","right":"pięć <b>spotkań</b>","why":"родительный множественного короткий, на -ń."}
   ],
   "mnemonic":"🏭 -anie · -enie · -cie. И четыре предлога: po + предл., przed + твор., podczas + род., do + род.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> какой падеж просит podczas?",
      "q":"«Во время встречи» —","opts":["Podczas spotkania","Podczas spotkaniu","Podczas spotkaniem"],"answer":0,
      "explain":"podczas берёт родительный: <b>podczas spotkania</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> занятие вообще или законченный факт?",
      "q":"«Я люблю готовить» одним существительным —","opts":["Lubię gotowanie","Lubię ugotowanie","Lubię gotowania"],"answer":0,
      "explain":"Занятие вообще — несовершенное <b>gotowanie</b>."},
     {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
      "q":"«У меня сегодня много дел»","accept":["mam dziś dużo do zrobienia","mam dzis duzo do zrobienia"],"placeholder":"Mam dziś…"}
   ]
  },
  {
   "eyebrow":"Повторение 2 · Пары и приказ",
   "title":"<em>brać — wziąć</em> и <em>Weź! — Nie bierz!</em>",
   "paras":[
     "Восемь пар с разными корнями, которые ты держишь со второго дня: <b>brać / wziąć</b>, <b>mówić / powiedzieć</b>, <b>widzieć / zobaczyć</b>, <b>oglądać / obejrzeć</b>, <b>kłaść / położyć</b>, <b>znajdować / znaleźć</b>, <b>wkładać / włożyć</b>, <b>zdejmować / zdjąć</b>. Русские двойники стоят напротив каждой.",
     "Формы, которые стоит помнить наизусть: <b>wezmę, weźmiesz, wezmą</b>, приказ <b>weź</b>, прошедшее <b>wziął / wzięła</b>. <b>powiem, powiesz, powiedzą</b>, приказ <b>powiedz</b>. <b>kładę</b> и <b>położę</b>, приказы <b>kładź</b> и <b>połóż</b>. И пара, которую легче всего спутать: <b>znajduję</b> — «нахожу», <b>znajdę</b> — «найду».",
     "Вид в приказе — правило на всю жизнь и оно совпадает с русским. Одна просьба, один раз: <b>Weź. Powiedz. Połóż. Zdejmij.</b> Отрицание переворачивает вид: <b>Nie bierz. Nie mów. Nie kładź.</b> Приглашение любит несовершенный даже без отрицания: <b>Siadaj. Wchodź. Częstuj się.</b> А вежливая форма на «вы» — <b>proszę</b> плюс инфинитив: <b>Proszę usiąść.</b>",
     "И маленькая группа на узнавание: <b>bywać, jadać, miewać, widywać</b> — «делать время от времени». Первые четыре живые и нейтральные, а <b>pisywać, czytywać, chadzać</b> звучат книжно, их достаточно понимать в тексте. <b>Bywa różnie</b> — готовая фраза на любой неудобный вопрос."
   ],
   "audio":"Восемь пар с разными корнями, которые ты держишь со второго дня: brać и wziąć, mówić и powiedzieć, widzieć и zobaczyć, oglądać и obejrzeć, kłaść и położyć, znajdować и znaleźć, wkładać и włożyć, zdejmować и zdjąć. Русские двойники стоят напротив каждой. Формы, которые стоит помнить наизусть: wezmę, weźmiesz, wezmą, приказ weź, прошедшее wziął и wzięła. Powiem, powiesz, powiedzą, приказ powiedz. Kładę и położę, приказы kładź и połóż. И пара, которую легче всего спутать: znajduję это нахожу, znajdę это найду. Вид в приказе совпадает с русским. Одна просьба, один раз: weź, powiedz, połóż, zdejmij. Отрицание переворачивает вид: nie bierz, nie mów, nie kładź. Приглашение любит несовершенный даже без отрицания: siadaj, wchodź, częstuj się. А вежливая форма на вы это proszę плюс инфинитив: proszę usiąść. И маленькая группа на узнавание: bywać, jadać, miewać, widywać, делать время от времени. Первые четыре живые и нейтральные, а pisywać, czytywać, chadzać звучат книжно. Bywa różnie — готовая фраза на любой неудобный вопрос.",
   "table":{"rows":[
     ["<b>brać / wziąć</b> · <b>mówić / powiedzieć</b> <button class=\"play\" data-say=\"brać, wziąć, mówić, powiedzieć\">🔊</button>","брать / взять · говорить / сказать"],
     ["<b>kłaść / położyć</b> · <b>znajdować / znaleźć</b> <button class=\"play\" data-say=\"kłaść, położyć, znajdować, znaleźć\">🔊</button>","класть / положить · находить / найти"],
     ["<b>wezmę · weź · wziął / wzięła</b> <button class=\"play\" data-say=\"wezmę, weź, wziął, wzięła\">🔊</button>","возьму · возьми · взял / взяла"],
     ["⚠️ <b>znajduję</b> нахожу · <b>znajdę</b> найду <button class=\"play\" data-say=\"znajduję, znajdę\">🔊</button>","одна буква — разные времена"],
     ["<b>Weź!</b> — <b>Nie bierz!</b> · <b>Powiedz!</b> — <b>Nie mów!</b> <button class=\"play\" data-say=\"Weź! Nie bierz! Powiedz! Nie mów!\">🔊</button>","отрицание переворачивает вид"],
     ["<b>bywać · jadać · miewać · widywać</b> <button class=\"play\" data-say=\"bywać, jadać, miewać, widywać\">🔊</button>","делать время от времени"]
   ],"star":4},
   "examples":[
     {"ru":"Возьми зонт, но не бери большую сумку.","en":"<b>Weź</b> parasol, ale <b>nie bierz</b> dużej torby.","say":"Weź parasol, ale nie bierz dużej torby."},
     {"ru":"Скажи мне правду и не говори это никому другому.","en":"<b>Powiedz</b> mi prawdę i <b>nie mów</b> tego nikomu innemu.","say":"Powiedz mi prawdę i nie mów tego nikomu innemu."},
     {"ru":"Обычно я нахожу их в интернете, но эту найду в книжном.","en":"Zwykle <b>znajduję</b> je w internecie, ale tę <b>znajdę</b> w księgarni.","say":"Zwykle znajduję je w internecie, ale tę znajdę w księgarni."},
     {"ru":"Мы видимся редко, но бываем в одном и том же кафе.","en":"<b>Widujemy się</b> rzadko, ale <b>bywamy</b> w tej samej kawiarni.","say":"Widujemy się rzadko, ale bywamy w tej samej kawiarni."}
   ],
   "mistakes":[
     {"wrong":"Nie weź tego.","right":"<b>Nie bierz</b> tego.","why":"после nie в приказе стоит несовершенный вид."},
     {"wrong":"Zwykle znajdę je w internecie.","right":"Zwykle <b>znajduję</b> je w internecie.","why":"привычка — настоящее время несовершенного вида: znajduję."}
   ],
   "mnemonic":"👐 Weź! — Nie bierz! Переведи приказ на русский, и вид найдётся сам.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> одна просьба, один раз.",
      "q":"«Положи ключи на стол» —","opts":["Kładź klucze na stole","Połóż klucze na stole","Włóż klucze na stole"],"answer":1,
      "explain":"Разовая просьба с результатом — <b>połóż</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни первое лицо от wziąć.",
      "q":"«Я возьму зонт» —","opts":["Wezmiem parasol","Wezmę parasol","Wziąłem parasol"],"answer":1,
      "explain":"Первое лицо — <b>wezmę</b>; wziąłem значит «я взял»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Она взяла ключи и вышла»</b>","answer":"Wzięła klucze i wyszła"}
   ]
  },
  {
   "eyebrow":"Повторение 3 · Завод приставок",
   "title":"<em>prze-, po-, roz-, za-, do-, wy-, od-, z-</em>",
   "paras":[
     "Восемь приставок и восемь русских двойников: <b>prze-</b> пере-, <b>po-</b> по-, <b>roz-</b> раз-, <b>za-</b> за-, <b>do-</b> до-, <b>wy-</b> вы-, <b>od-</b> от-, <b>z-</b> и <b>s-</b> с-. Ты не учишь их значения — ты их узнаёшь. И каждая переводит глагол в совершенный вид, значит его настоящая форма означает будущее: <b>przerobię</b> — «переделаю».",
     "Мера и полнота действия делят день на части: <b>poczytać</b> — почитать немного, <b>doczytać</b> — дочитать до конца, <b>przeczytać</b> — прочитать целиком. Так же с деньгами: <b>dopłacić</b> — доплатить недостающее, <b>przepłacić</b> — заплатить слишком много.",
     "Остальные работают буквально: <b>rozpakować</b> (распаковать), <b>rozdać</b> (раздать), <b>zapisać się</b> (записаться), <b>zamieszkać</b> (поселиться), <b>oddać</b> (отдать), <b>odzyskać</b> (вернуть себе), <b>wyspać się</b> (выспаться), <b>wyremontować</b> (отремонтировать), <b>spakować</b> (собрать вещи), <b>zjeść</b> (съесть). Написание простое: <b>s-</b> перед глухими, <b>z-</b> перед звонкими.",
     "И список расхождений за всю неделю, который стоит держать перед глазами: <b>zapomnieć</b> — забыть, а запомнить — <b>zapamiętać</b>. <b>przeczytać</b> — прочитать, а не перечитать. <b>zamieszkać</b> — поселиться. <b>odpisać</b> — ответить письменно. Плюс два слова из фабрики: <b>miłość</b> — любовь, а не милость, и <b>sklep</b> — магазин, а не склеп. Шесть ловушек на несколько сотен новых слов."
   ],
   "audio":"Восемь приставок и восемь русских двойников: prze- пере-, po- по-, roz- раз-, za- за-, do- до-, wy- вы-, od- от-, z- и s- с-. Ты не учишь их значения, ты их узнаёшь. И каждая переводит глагол в совершенный вид, значит его настоящая форма означает будущее: przerobię, переделаю. Мера и полнота действия делят день на части: poczytać, почитать немного; doczytać, дочитать до конца; przeczytać, прочитать целиком. Так же с деньгами: dopłacić, доплатить недостающее; przepłacić, заплатить слишком много. Остальные работают буквально: rozpakować, распаковать; rozdać, раздать; zapisać się, записаться; zamieszkać, поселиться; oddać, отдать; odzyskać, вернуть себе; wyspać się, выспаться; wyremontować, отремонтировать; spakować, собрать вещи; zjeść, съесть. Написание простое: s- перед глухими, z- перед звонкими. И список расхождений за всю неделю: zapomnieć это забыть, а запомнить это zapamiętać. Przeczytać это прочитать, а не перечитать. Zamieszkać это поселиться. Odpisać это ответить письменно. Плюс два слова из фабрики: miłość это любовь, а не милость, и sklep это магазин, а не склеп. Шесть ловушек на несколько сотен новых слов.",
   "table":{"rows":[
     ["<b>prze-</b> пере- · <b>po-</b> по- · <b>roz-</b> раз- <button class=\"play\" data-say=\"przerobić, posiedzieć, rozdać\">🔊</button>","przerobić · posiedzieć · rozdać"],
     ["<b>za-</b> за- · <b>do-</b> до- · <b>od-</b> от- <button class=\"play\" data-say=\"zapisać się, doczytać, oddać\">🔊</button>","zapisać się · doczytać · oddać"],
     ["<b>wy-</b> вы- · <b>z-</b> и <b>s-</b> с- <button class=\"play\" data-say=\"wyspać się, zjeść, spakować\">🔊</button>","wyspać się · zjeść · spakować"],
     ["poczytać · doczytać · <b>przeczytać</b> <button class=\"play\" data-say=\"poczytać, doczytać, przeczytać\">🔊</button>","почитать · дочитать · прочитать целиком"],
     ["⚠️ <b>zapomnieć</b> забыть · <b>zapamiętać</b> запомнить <button class=\"play\" data-say=\"zapomnieć, zapamiętać\">🔊</button>","главная ловушка недели"],
     ["⚠️ <b>miłość</b> любовь · <b>sklep</b> магазин <button class=\"play\" data-say=\"miłość, sklep\">🔊</button>","два ложных друга недели"]
   ],"star":4},
   "examples":[
     {"ru":"Я почитал час, но до конца не дочитал.","en":"<b>Poczytałem</b> godzinę, ale nie <b>doczytałem</b> do końca.","say":"Poczytałem godzinę, ale nie doczytałem do końca."},
     {"ru":"Я переплатил за билеты и доплатил за багаж.","en":"<b>Przepłaciłem</b> za bilety i <b>dopłaciłem</b> za bagaż.","say":"Przepłaciłem za bilety i dopłaciłem za bagaż."},
     {"ru":"Запомни фамилию, чтобы её не забыть.","en":"<b>Zapamiętaj</b> nazwisko, żeby go nie <b>zapomnieć</b>.","say":"Zapamiętaj nazwisko, żeby go nie zapomnieć."},
     {"ru":"Я собрал чемодан, спрятал ключи и наконец выспался.","en":"<b>Spakowałem</b> walizkę, <b>schowałem</b> klucze i wreszcie się <b>wyspałem</b>.","say":"Spakowałem walizkę, schowałem klucze i wreszcie się wyspałem."}
   ],
   "mistakes":[
     {"wrong":"Powtórz, proszę, żebym zapomniał.","right":"Powtórz, proszę, żebym <b>zapamiętał</b>.","why":"запомнить — zapamiętać; zapomnieć значит ровно противоположное."},
     {"wrong":"Zpakowałem walizkę.","right":"<b>Spakowałem</b> walizkę.","why":"перед глухим p пишется s-: spakować, sprawdzić, schować."}
   ],
   "mnemonic":"🧱 Отдели приставку, посмотри на корень, проверь по-русски. Ошибётся эта стратегия шесть раз за неделю.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> заплатил лишнее или добавил недостающее?",
      "q":"«Я переплатил за билеты» —","opts":["Przepłaciłem za bilety","Dopłaciłem za bilety","Zapłaciłem za bilety"],"answer":0,
      "explain":"Слишком много — <b>przepłacić</b>; dopłacić значит «доплатить недостающее»."},
     {"type":"choice","howto":"<b>Что делать:</b> действие доведено до полного результата.",
      "q":"«Наконец я выспался» —","opts":["Wreszcie się wyspałem","Wreszcie zaspałem","Wreszcie pospałem"],"answer":0,
      "explain":"До результата — <b>wyspać się</b>; zaspać значит «проспать, опоздать»."},
     {"type":"speak","howto":"Нажми микрофон и скажи вслух — пять приставок в одном предложении.",
      "target":"Rozpakowałem pudło, oddałem książki i wreszcie się wyspałem.","sub":"распаковал коробку, отдал книги и наконец выспался","want":"Rozpakowałem pudło, oddałem książki i wreszcie się wyspałem."}
   ]
  },
  {
   "eyebrow":"Повторение 4 · Фабрика и исключения",
   "title":"Суффиксы, <em>muzeum</em>, <em>imię</em>, <em>drzwi</em>",
   "paras":[
     "Фабрика слов четвёртого дня: деятель — <b>-arz</b> (lekarz), <b>-acz</b> (tłumacz), <b>-nik</b> (pracownik), <b>-ciel</b> (nauczyciel), <b>-ca</b> (kierowca); женская пара — <b>-ka</b> (nauczycielka), <b>-niczka</b> (urzędniczka), <b>-ni</b> и <b>-yni</b> (sprzedawczyni); место — <b>-nia</b> и <b>-arnia</b> (kawiarnia, księgarnia, pralnia, siłownia).",
     "Признак и качество: <b>-owy</b> (służbowy), <b>-ny</b> (smaczny), <b>-ski</b> (krakowski), <b>-liwy</b> (cierpliwy), и обратный ход через <b>-ość</b> (cierpliwość, możliwość, wolność). Стратегия та же, что с приставками: раздели слово на части и переведи каждую.",
     "Непослушные слова пятого дня: <b>muzeum</b> и <b>centrum</b> не меняются в единственном числе, но склоняются во множественном (<b>muzea, muzeów, muzeach</b>). <b>imię</b> отращивает -eni- (<b>imienia, imiona</b>), <b>zwierzę</b> отращивает -ęci- (<b>zwierzęcia, zwierzęta</b>). Старые пары: <b>ręce, rąk</b> · <b>oczy, oczu</b> · <b>uszy, uszu</b> · <b>przyjaciele, przyjaciół</b>. И <b>rok</b> во множественном становится <b>lata, lat</b>.",
     "Только множественное число: <b>drzwi, spodnie, okulary, nożyczki, urodziny, imieniny, wakacje, skrzypce</b> — глагол при них тоже во множественном, «один» это <b>jedne</b>, а родительный короткий: <b>spodni, okularów, nożyczek, urodzin</b>. Плюс офисный набор вчерашнего дня: <b>umowa, etat, dział, zebranie, termin</b>, <b>zajmować się czymś</b>, <b>odpowiadać za coś</b>, <b>Pozdrawiam serdecznie</b>."
   ],
   "audio":"Фабрика слов четвёртого дня: деятель — -arz, lekarz; -acz, tłumacz; -nik, pracownik; -ciel, nauczyciel; -ca, kierowca. Женская пара — -ka, nauczycielka; -niczka, urzędniczka; -ni и -yni, sprzedawczyni. Место — -nia и -arnia: kawiarnia, księgarnia, pralnia, siłownia. Признак и качество: -owy, służbowy; -ny, smaczny; -ski, krakowski; -liwy, cierpliwy. И обратный ход через -ość: cierpliwość, możliwość, wolność. Стратегия та же, что с приставками: раздели слово на части и переведи каждую. Непослушные слова пятого дня: muzeum и centrum не меняются в единственном числе, но склоняются во множественном — muzea, muzeów, muzeach. Imię отращивает -eni-, imienia, imiona; zwierzę отращивает -ęci-, zwierzęcia, zwierzęta. Старые пары: ręce и rąk, oczy и oczu, uszy и uszu, przyjaciele и przyjaciół. И rok во множественном становится lata, lat. Только множественное число: drzwi, spodnie, okulary, nożyczki, urodziny, imieniny, wakacje, skrzypce. Глагол при них тоже во множественном, один это jedne, а родительный короткий: spodni, okularów, nożyczek, urodzin. Плюс офисный набор вчерашнего дня: umowa, etat, dział, zebranie, termin, zajmować się czymś, odpowiadać za coś, Pozdrawiam serdecznie.",
   "table":{"rows":[
     ["<b>-arz · -acz · -nik · -ciel · -ca</b> <button class=\"play\" data-say=\"lekarz, tłumacz, pracownik, nauczyciel, kierowca\">🔊</button>","кто это делает"],
     ["<b>-nia · -arnia</b> · kawiarnia, pralnia, siłownia <button class=\"play\" data-say=\"kawiarnia, pralnia, siłownia\">🔊</button>","где это делают"],
     ["<b>-owy · -ny · -ski · -liwy · -ość</b> <button class=\"play\" data-say=\"służbowy, smaczny, krakowski, cierpliwy, cierpliwość\">🔊</button>","какой и какое качество"],
     ["<b>do muzeum</b>, но <b>w muzeach</b> · <b>imię → imiona</b> <button class=\"play\" data-say=\"do muzeum, w muzeach, imię, imiona\">🔊</button>","застывшее ед. ч. · наращение"],
     ["<b>ręce, rąk · oczy, oczu · przyjaciele, przyjaciół</b> <button class=\"play\" data-say=\"ręce, rąk, oczy, oczu, przyjaciele, przyjaciół\">🔊</button>","старые пары"],
     ["<b>drzwi są · jedne spodnie · nożyczek</b> <button class=\"play\" data-say=\"drzwi są otwarte, jedne spodnie, nie mam nożyczek\">🔊</button>","только множественное число"]
   ],"star":5},
   "examples":[
     {"ru":"Я иду в книжный, а потом в прачечную.","en":"Idę do <b>księgarni</b>, a potem do <b>pralni</b>.","say":"Idę do księgarni, a potem do pralni."},
     {"ru":"Эта работа требует терпения и возможности отдохнуть.","en":"Ta praca wymaga <b>cierpliwości</b> i <b>możliwości</b> odpoczynku.","say":"Ta praca wymaga cierpliwości i możliwości odpoczynku."},
     {"ru":"В воскресенье я познакомилась с его друзьями и запомнила три имени.","en":"W niedzielę poznałam jego <b>przyjaciół</b> i zapamiętałam trzy <b>imiona</b>.","say":"W niedzielę poznałam jego przyjaciół i zapamiętałam trzy imiona."},
     {"ru":"Я занимаюсь корректурой и отвечаю за одну книгу.","en":"<b>Zajmuję się korektą</b> i <b>odpowiadam za</b> jeden tytuł.","say":"Zajmuję się korektą i odpowiadam za jeden tytuł."}
   ],
   "mistakes":[
     {"wrong":"Poznałam jego przyjacieli.","right":"Poznałam jego <b>przyjaciół</b>.","why":"родительный и винительный множественного — przyjaciół, с ó."},
     {"wrong":"Zajmuję się korekty.","right":"<b>Zajmuję się korektą.</b>","why":"zajmować się требует творительного падежа, как русское «заниматься чем»."}
   ],
   "mnemonic":"🧩 Суффикс говорит, что это за слово. Исключения короткие: muzeum, imię, ręce, drzwi, rok → lata.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> множественное число склоняется нормально.",
      "q":"«Мы были в двух музеях» —","opts":["Byliśmy w dwóch muzeum","Byliśmy w dwóch muzeach","Byliśmy w dwóch muzeami"],"answer":1,
      "explain":"Предложный множественного — <b>muzeach</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> нужно существительное со значением качества.",
      "q":"«Терпение» —","opts":["cierpliwy","cierpliwość","cierpliwie"],"answer":1,
      "explain":"Абстрактное существительное — хвост -ość: <b>cierpliwość</b>."},
     {"type":"speak","howto":"Нажми микрофон и скажи вслух — вся неделя в одном предложении.",
      "target":"Po zebraniu poszłam do księgarni i zapamiętałam nazwisko przełożonej.","sub":"после собрания пошла в книжный и запомнила фамилию начальницы — мужской вариант: poszedłem","want":"Po zebraniu poszłam do księgarni i zapamiętałam nazwisko przełożonej."}
   ]
  }
 ],
 "dialogue":{
   "intro":"Пятница, вечер первой рабочей недели. Кася выясняет, как всё прошло, и не даёт увильнуть. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"K","name":"Kasia","side":"right","en":"No mów. Jak było w wydawnictwie przez cały tydzień?","ru":"Ну говори. Как было в издательстве всю неделю?",
      "words":[["mów","говори"],["przez cały tydzień","всю неделю"]]},
     {"who":"A","name":"Anna","side":"left","en":"Bywa różnie. Ale po pierwszym zebraniu przestałam się bać.","ru":"По-разному бывает. Но после первого собрания я перестала бояться.",
      "words":[["Bywa różnie","по-разному бывает"],["po pierwszym zebraniu","после первого собрания"]]},
     {"who":"K","name":"Kasia","side":"right","en":"Znalazłaś w końcu tę granatową marynarkę?","ru":"Ты в итоге нашла тот тёмно-синий пиджак?",
      "words":[["Znalazłaś","ты нашла"],["marynarkę","пиджак"]]},
     {"who":"A","name":"Anna","side":"left","en":"Znalazłam. Wisiała za drzwiami przez pół roku.","ru":"Нашла. Он полгода висел за дверью.",
      "words":[["za drzwiami","за дверью"],["pół roku","полгода"]]},
     {"who":"K","name":"Kasia","side":"right","en":"A czym się dokładnie zajmujesz? Nie zapamiętałam.","ru":"А чем именно ты занимаешься? Я не запомнила.",
      "words":[["zajmujesz się","занимаешься"],["Nie zapamiętałam","не запомнила"]]},
     {"who":"A","name":"Anna","side":"left","en":"Korektą. Odpowiadam za jeden tytuł, termin mija w piątek.","ru":"Корректурой. Отвечаю за одну книгу, срок истекает в пятницу.",
      "words":[["Odpowiadam za","отвечаю за"],["termin","срок"]]},
     {"who":"K","name":"Kasia","side":"right","en":"Czyli w sobotę nic nie robisz i idziemy do muzeum.","ru":"То есть в субботу ты ничего не делаешь и мы идём в музей.",
      "words":[["do muzeum","в музей"],["nic nie robisz","ничего не делаешь"]]},
     {"who":"A","name":"Anna","side":"left","en":"Mam jeszcze listę rzeczy do zrobienia. Osiem punktów.","ru":"У меня ещё список дел. Восемь пунктов.",
      "words":[["do zrobienia","дел"],["punktów","пунктов"]]},
     {"who":"K","name":"Kasia","side":"right","en":"To weź ją ze sobą. Poczytamy przy kawie i skreślimy połowę.","ru":"Тогда возьми его с собой. Почитаем за кофе и половину вычеркнем.",
      "words":[["weź","возьми"],["skreślimy","вычеркнем"]]}
   ]
 },
 "scene":{
   "intro":"И совсем короткая сценка — та же пятница, пять минут спустя. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Co masz na tej liście?","ru":"Что у тебя в этом списке?"},
     {"who":"B","en":"Mycie okien, pranie i jedno zaproszenie.","ru":"Мытьё окон, стирка и одно приглашение."},
     {"who":"A","en":"Zaproszenie na co?","ru":"Приглашение на что?"},
     {"who":"B","en":"Na imieniny. Od tygodnia nie odpisałam.","ru":"На именины. Уже неделю не ответила."},
     {"who":"A","en":"To odpisz teraz. Reszta poczeka.","ru":"Тогда ответь сейчас. Остальное подождёт."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать опор недели — те, что понадобятся уже на следующем уроке.",
   "items":[
     {"en":"czytanie / przeczytanie","ru":"чтение / прочтение","ex":"Po przeczytaniu listu usiadła."},
     {"en":"spotkanie / zebranie / szkolenie","ru":"встреча / собрание / тренинг","ex":"W tym tygodniu mamy pięć spotkań."},
     {"en":"po spotkaniu · przed wyjściem · podczas czekania","ru":"после (+ предл.) · перед (+ твор.) · во время (+ род.)","ex":"Przed wyjściem sprawdzam listę."},
     {"en":"do zrobienia","ru":"дела, которые надо сделать","ex":"Mam dziś dużo do zrobienia."},
     {"en":"brać / wziąć (wezmę, weź)","ru":"брать / взять","ex":"Weź parasol, ale nie bierz torby."},
     {"en":"mówić / powiedzieć (powiem)","ru":"говорить / сказать","ex":"Powiedz mi prawdę."},
     {"en":"znajduję / znajdę","ru":"нахожу / найду","ex":"Zwykle znajduję je w internecie."},
     {"en":"zapamiętać / zapomnieć","ru":"запомнить / забыть","ex":"Zapamiętaj nazwisko, żeby go nie zapomnieć."},
     {"en":"przepłacić / dopłacić / doczytać","ru":"переплатить / доплатить / дочитать","ex":"Przepłaciłem za bilety."},
     {"en":"kawiarnia / księgarnia / pralnia","ru":"кафе / книжный / прачечная","ex":"Idę do księgarni, a potem do pralni."},
     {"en":"cierpliwość / możliwość","ru":"терпение / возможность","ex":"Ta praca wymaga cierpliwości."},
     {"en":"drzwi / okulary / urodziny","ru":"дверь / очки / день рождения","ex":"Drzwi są otwarte."}
   ]
 },
 "drag":{
   "intro":"Финальная игра недели: перетащи слово к его значению. Все четыре — ловушки, которые ты уже знаешь.",
   "pairs":[["zapomnieć","забыть"],["zapamiętać","запомнить"],["przeczytać","прочитать до конца"],["miłość","любовь"]]
 },
 "reading":{
   "intro":"Итоговый текст недели: Анна рассказывает всё — от конверта до первой пятницы в офисе.",
   "title":"Tydzień",
   "sentences":["We wtorek przyszła koperta z wynikiem i okazało się, że zdałam.","Po zdaniu egzaminu miałam dwa dni na przygotowanie się do nowej pracy.","W piątek Kasia kazała mi wziąć kalendarz i zaplanować cały tydzień.","W sobotę znalazłam granatową marynarkę na dnie szafy.","W niedzielę poczytałam godzinę, ale książki nie doczytałam do końca.","Rozpakowałam ostatnie pudło i zapisałam sobie nazwisko przełożonej.","W poniedziałek stałam przed drzwiami wydawnictwa dziesięć minut za wcześnie.","Po szkoleniu poszłam do kadr i podpisałam umowę na okres próbny.","Zajmuję się korektą książek dla dzieci i odpowiadam za jeden tytuł.","W piątek wysłałam pierwszego maila i podpisałam go: pozdrawiam serdecznie."],
   "translation":"Во вторник пришёл конверт с результатом, и оказалось, что я сдала. После сдачи экзамена у меня было два дня, чтобы подготовиться к новой работе. В пятницу Кася велела мне взять календарь и распланировать всю неделю. В субботу я нашла тёмно-синий пиджак на дне шкафа. В воскресенье почитала час, но книгу до конца не дочитала. Распаковала последнюю коробку и записала себе фамилию начальницы. В понедельник стояла перед дверью издательства на десять минут раньше нужного. После тренинга пошла в отдел кадров и подписала договор на испытательный срок. Я занимаюсь корректурой детских книг и отвечаю за одну из них. В пятницу отправила первое письмо и подписала его: с наилучшими пожеланиями."
 },
 "quiz":{
   "intro":"Маленький экзамен недели — пять вопросов. Порог мягкий, а правило всегда рядом. 💛",
   "items":[
     {"q":"1. «После прочтения письма» —","opts":["Po przeczytanie listu","Po przeczytaniu listu","Po przeczytania listu"],"answer":1,
      "explain":"После po — предложный падеж: <b>po przeczytaniu</b>."},
     {"q":"2. «Не бери это» —","opts":["Nie weź tego","Nie bierz tego","Nie wziąć tego"],"answer":1,
      "explain":"В запрете — несовершенный вид: <b>nie bierz</b>."},
     {"q":"3. «Я забыл пароль» —","opts":["Zapamiętałem hasło","Zapomniałem hasła","Przypomniałem hasło"],"answer":1,
      "explain":"Забыть — <b>zapomnieć</b>; запомнить — zapamiętać."},
     {"q":"4. Родительный множественного от <b>przyjaciel</b> —","opts":["przyjacieli","przyjaciół","przyjacielów"],"answer":1,
      "explain":"Правильная форма — <b>przyjaciół</b>, с ó."},
     {"q":"5. «Я отвечаю за один тираж» —","opts":["Odpowiadam na jeden tytuł","Odpowiadam za jeden tytuł","Odpowiadam z jednym tytułem"],"answer":1,
      "explain":"Отвечать за — предлог <b>za</b> плюс винительный."}
   ]
 },
 "essay":{
   "intro":"Финал недели: собери всё вместе — конверт, пары, приставки, фабрика слов и первый рабочий день.",
   "prompt":"Напиши 6–8 предложений о своей неделе: что было перед важным событием и после него, что ты немного поделал(а) и что довёл(довела) до конца, куда ходил(а), с кем познакомился(лась) и чем занимаешься на работе или учёбе.",
   "hint":"Каркас: Przed… · Po… · Poczytałem / Poczytałam…, ale nie doczytałem / doczytałam · Poszedłem / Poszłam do… · Poznałem / Poznałam… · Zajmuję się… · Odpowiadam za… 💛",
   "example":"Przed poniedziałkiem miałam dwa dni na spokojne przygotowanie się. Po przeczytaniu wszystkich materiałów i tak byłam zdenerwowana. W niedzielę poczytałam godzinę, ale książki nie doczytałam do końca. Rozpakowałam ostatnie pudło i schowałam połowę rzeczy do szafy. W poniedziałek poszłam do wydawnictwa i poznałam całą redakcję. Zapamiętałam cztery imiona z ośmiu, resztę zapisałam w notesie. Teraz zajmuję się korektą i odpowiadam za jeden tytuł. Podczas przerwy na lunch wszyscy jedzą razem i to jest najlepsza część dnia."
 }
},
"8": {
 "day":8,"week":"02",
 "themeRu":"Пять по всем падежам",
 "themeEn":"Odmiana liczebników",
 "intro":"Тираж — <b>dwa tysiące egzemplarzy</b>, срок — <b>do piątku</b>, в отделе — <b>pięć osób</b>. У Анны первая полная неделя в издательстве, и весь её день собран из чисел. По-русски ты спокойно говоришь «с двумя коллегами», «пяти лет», «о трёх книгах»: числительные склоняются, и это давно привычно. Польские склоняются тоже — только форм у них меньше, чем кажется, и сегодня мы их пересчитаем.",
 "introAudio":"Тираж — dwa tysiące egzemplarzy, срок — do piątku, в отделе — pięć osób. У Анны первая полная неделя в издательстве, и весь её день собран из чисел. По-русски ты спокойно говоришь «с двумя коллегами», «пяти лет», «о трёх книгах»: числительные склоняются, и это давно привычно. Польские склоняются тоже — только форм у них меньше, чем кажется, и сегодня мы их пересчитаем.",
 "goals":[
   "Склонять двойку, тройку и четвёрку: <b>dwóch, dwóm, dwoma, trzema, czterema</b>",
   "Держать от пяти всего две формы: <b>pięciu</b> и <b>pięcioma</b>",
   "Различать <b>z dwoma kolegami</b> и <b>z dwiema koleżankami</b>",
   "Называть год: <b>w dwa tysiące dwudziestym szóstym roku</b>"
 ],
 "learned":[
   "Просклонял(а) двойку, тройку и четвёрку: dwóch, dwóm, dwoma, trzema, czterema",
   "Удержал(а) от пяти всего две формы: pięciu и pięcioma",
   "Различил(а) z dwoma kolegami и z dwiema koleżankami",
   "Назвал(а) год: w dwa tysiące dwudziestym szóstym roku"
 ],
 "review":{
   "intro":"Первая неделя никуда не делась: отглагольные существительные, супплетивные пары и пара непослушных слов. Разомнёмся ими — и пойдём считать.",
   "introAudio":"Первая неделя никуда не делась: отглагольные существительные, супплетивные пары и пара непослушных слов. Разомнёмся ими — и пойдём считать.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> «после» просит отглагольное существительное.",
      "q":"«после прочтения» —","opts":["po przeczytaniu","po przeczytać","po przeczytania"],"answer":0,
      "explain":"Po + предложный от отглагольного существительного: <b>po przeczytaniu</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> разовая просьба.",
      "q":"«Возьми ключи» —","opts":["Bierz klucze","Weź klucze","Wziąć klucze"],"answer":1,
      "explain":"Разовая просьба идёт совершенным видом: <b>Weź klucze</b>. Несовершенный возвращается в отрицании: nie bierz."},
     {"type":"choice","howto":"<b>Что делать:</b> непослушное слово из дня 5.",
      "q":"«два музея» —","opts":["dwa muzeumy","dwa muzea","dwa muzeum"],"answer":1,
      "explain":"В единственном числе muzeum не меняется, во множественном — <b>muzea</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Совещание начинается в девять»</b>","answer":"Zebranie zaczyna się o dziewiątej"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Двойка, тройка, четвёрка",
    "title":"<em>dwóch, dwóm, dwoma</em> — один набор на все роды",
    "paras":[
      "Именительный ты знаешь с A1: <b>dwa</b> koty, <b>dwie</b> lampy, <b>trzy</b> książki, <b>cztery</b> okna. Но как только предложение уходит в косвенный падеж, разница между родами почти исчезает — остаётся один короткий набор форм.",
      "Двойка: родительный и предложный <b>dwóch</b>, дательный <b>dwóm</b>, творительный <b>dwoma</b>. Тройка: <b>trzech, trzem, trzema</b>. Четвёрка: <b>czterech, czterem, czterema</b>. Три строчки — и все падежи закрыты.",
      "Русский держит тот же скелет: «двух, двум, двумя», «трёх, трём, тремя». Даже длина слов совпадает, так что заучивать заново почти нечего — надо поменять хвостики и довериться привычке.",
      "Одна честная оговорка про дательный. Норма — <b>dwóm</b>; формы <b>dwom</b> и <b>dwu</b> тоже живут в языке, вторая ощущается книжной. Говори dwóm, а остальные просто узнавай в тексте."
    ],
    "audio":"Именительный ты знаешь с A1: dwa koty, dwie lampy, trzy książki, cztery okna. Но как только предложение уходит в косвенный падеж, разница между родами почти исчезает — остаётся один короткий набор форм. Двойка: родительный и предложный dwóch, дательный dwóm, творительный dwoma. Тройка: trzech, trzem, trzema. Четвёрка: czterech, czterem, czterema. Три строчки — и все падежи закрыты. Русский держит тот же скелет: двух, двум, двумя; трёх, трём, тремя. Даже длина слов совпадает, так что заучивать заново почти нечего — надо поменять хвостики и довериться привычке. Одна честная оговорка про дательный. Норма — dwóm; формы dwom и dwu тоже живут в языке, вторая ощущается книжной. Говори dwóm, а остальные просто узнавай в тексте.",
    "table":{"rows":[
      ["dwa · dwie · trzy · cztery <button class=\"play\" data-say=\"dwa, dwie, trzy, cztery\">🔊</button>","именительный — с A1"],
      ["dwóch · trzech · czterech <button class=\"play\" data-say=\"dwóch, trzech, czterech\">🔊</button>","родительный и предложный"],
      ["dwóm · trzem · czterem","дательный"],
      ["dwoma · trzema · czterema <button class=\"play\" data-say=\"dwoma, trzema, czterema\">🔊</button>","творительный"],
      ["Znam dwóch redaktorów.","о мужчинах — тоже dwóch"],
      ["dwom · dwu","варианты дательного — узнавать"]
    ],"star":3},
    "examples":[
      {"ru":"Я знаю двух редакторов из этого издательства.","en":"Znam <b>dwóch redaktorów</b> z tego wydawnictwa.","gloss":"о мужчинах — форма dwóch","say":"Znam dwóch redaktorów z tego wydawnictwa."},
      {"ru":"Анна работает с тремя авторами.","en":"Anna pracuje <b>z trzema autorami</b>.","say":"Anna pracuje z trzema autorami."},
      {"ru":"Мы отдали текст двум коллегам.","en":"Oddaliśmy tekst <b>dwóm koleżankom</b>.","gloss":"дательный — dwóm, род тут не важен","say":"Oddaliśmy tekst dwóm koleżankom."},
      {"ru":"В четырёх кабинетах уже темно.","en":"W <b>czterech</b> pokojach jest już ciemno.","say":"W czterech pokojach jest już ciemno."},
      {"ru":"Это книга о трёх сёстрах.","en":"To książka <b>o trzech siostrach</b>.","say":"To książka o trzech siostrach."}
    ],
    "mistakes":[
      {"wrong":"z dwa kolegami","right":"<b>z dwoma</b> kolegami","why":"Творительный требует своей формы: dwoma, а не именительного dwa."},
      {"wrong":"o trzy książkach","right":"<b>o trzech</b> książkach","why":"Числительное меняется вместе с существительным: предложный — trzech."}
    ],
    "mnemonic":"🔢 Три строчки на все роды: dwóch / trzech / czterech · dwóm / trzem / czterem · dwoma / trzema / czterema.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> с кем? — творительный.",
       "q":"«с тремя авторами» —","opts":["z trzy autorami","z trzech autorami","z trzema autorami"],"answer":2,
       "explain":"Творительный тройки — <b>trzema</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> кому?",
       "q":"«двум коллегам» —","opts":["dwóm kolegom","dwóch kolegom","dwoma kolegom"],"answer":0,
       "explain":"Дательный двойки — <b>dwóm</b>."},
      {"type":"type","howto":"Напиши «Я знаю двух редакторов». Диакритику можно не ставить.",
       "q":"Я знаю двух редакторов.","accept":["znam dwóch redaktorów","znam dwoch redaktorow","znam dwóch redaktorow","znam dwoch redaktorów"],"placeholder":"Znam…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · От пяти и выше",
    "title":"<em>pięciu</em> и <em>pięcioma</em> — и всё",
    "paras":[
      "Начиная с пятёрки система становится подарочной. У числа остаётся всего две косвенные формы: на <b>-u</b> — родительный, дательный и предложный; на <b>-oma</b> — творительный. Больше учить нечего.",
      "pięć → <b>pięciu / pięcioma</b>; sześć → <b>sześciu / sześcioma</b>; dziesięć → <b>dziesięciu / dziesięcioma</b>; dwadzieścia → <b>dwudziestu / dwudziestoma</b>. Один и тот же поворот у всех чисел без исключения.",
      "Так же ведут себя неопределённые слова: <b>kilku / kilkoma</b>, <b>wielu / wieloma</b>, <b>ilu / iloma</b>. «Скольким людям?» — <b>Ilu ludziom?</b>, «со сколькими людьми?» — <b>Z iloma osobami?</b>",
      "Форму на -u проще всего запомнить как «косвенный падеж вообще»: <b>od pięciu lat</b>, <b>w pięciu miastach</b>, <b>pięciu pracownikom</b>. И только вопрос «с кем, с чем» зовёт -oma: <b>z pięcioma osobami</b>. Вариант <b>z pięciu osobami</b> тоже нормативен, но -oma звучит увереннее."
    ],
    "audio":"Начиная с пятёрки система становится подарочной. У числа остаётся всего две косвенные формы: на -u это родительный, дательный и предложный; на -oma это творительный. Больше учить нечего. Pięć — pięciu, pięcioma; sześć — sześciu, sześcioma; dziesięć — dziesięciu, dziesięcioma; dwadzieścia — dwudziestu, dwudziestoma. Один и тот же поворот у всех чисел без исключения. Так же ведут себя неопределённые слова: kilku и kilkoma, wielu и wieloma, ilu и iloma. Скольким людям — ilu ludziom; со сколькими людьми — z iloma osobami. Форму на -u проще всего запомнить как косвенный падеж вообще: od pięciu lat, w pięciu miastach, pięciu pracownikom. И только вопрос «с кем, с чем» зовёт -oma: z pięcioma osobami. Вариант z pięciu osobami тоже нормативен, но -oma звучит увереннее.",
    "table":{"rows":[
      ["pięć → pięciu / pięcioma <button class=\"play\" data-say=\"pięć, pięciu, pięcioma\">🔊</button>","две формы на все падежи"],
      ["sześciu · dziesięciu · dwudziestu","родительный, дательный, предложный"],
      ["sześcioma · dziesięcioma · dwudziestoma","творительный"],
      ["kilku / kilkoma · wielu / wieloma","несколько · многие"],
      ["od pięciu lat <button class=\"play\" data-say=\"od pięciu lat\">🔊</button>","уже пять лет"],
      ["z pięcioma osobami <button class=\"play\" data-say=\"z pięcioma osobami\">🔊</button>","с пятью людьми"]
    ],"star":0},
    "examples":[
      {"ru":"Марек работает в этой фирме уже пять лет.","en":"Marek pracuje w tej firmie <b>od pięciu lat</b>.","gloss":"od + родительный: pięciu","say":"Marek pracuje w tej firmie od pięciu lat."},
      {"ru":"Мы говорили с пятью авторами.","en":"Rozmawialiśmy <b>z pięcioma autorami</b>.","say":"Rozmawialiśmy z pięcioma autorami."},
      {"ru":"Анна отправила письмо шести сотрудникам.","en":"Anna wysłała mail <b>sześciu współpracownikom</b>.","gloss":"дательный — форма на -u","say":"Anna wysłała mail sześciu współpracownikom."},
      {"ru":"В десяти книгах не хватает страниц.","en":"W <b>dziesięciu</b> książkach brakuje stron.","say":"W dziesięciu książkach brakuje stron."},
      {"ru":"Со сколькими людьми ты работаешь?","en":"<b>Z iloma</b> osobami pracujesz?","say":"Z iloma osobami pracujesz?"}
    ],
    "mistakes":[
      {"wrong":"od pięć lat","right":"<b>od pięciu</b> lat","why":"Предлог od просит родительный и у числительного тоже: pięciu."},
      {"wrong":"z pięć osobami","right":"<b>z pięcioma</b> osobami","why":"Творительный от пяти — форма на -oma."}
    ],
    "mnemonic":"🖐 От пяти всё просто: -u на три падежа, -oma на творительный. pięciu · pięcioma.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> od просит родительный.",
       "q":"«уже пять лет» —","opts":["od pięć lat","od pięciu lat","od pięcioma lat"],"answer":1,
       "explain":"Od + родительный: <b>od pięciu lat</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> с кем? — творительный.",
       "q":"«с шестью коллегами» —","opts":["z sześć kolegami","z sześciu kolegów","z sześcioma kolegami"],"answer":2,
       "explain":"Творительный — <b>z sześcioma kolegami</b>: и число, и существительное в своей форме."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Марек работает тут уже пять лет»</b>","answer":"Marek pracuje tu od pięciu lat"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Женская двойка",
    "title":"<em>z dwiema koleżankami</em>",
    "paras":[
      "Одно исключение из «одного набора на все роды» всё-таки есть, и оно маленькое: в творительном у женского рода живёт своя форма <b>dwiema</b>. <b>Z dwoma kolegami</b> — с двумя коллегами-мужчинами, <b>z dwiema koleżankami</b> — с двумя коллегами-женщинами.",
      "Только творительный и только двойка. Во всех прочих падежах женский род идёт вместе со всеми: <b>dwóch koleżanek, dwóm koleżankom, o dwóch koleżankach</b>. Живая речь давно допускает и <b>z dwoma koleżankami</b>, но dwiema надёжнее и звучит грамотнее.",
      "Рядом стоит её родственница <b>obiema</b>: <b>obiema rękami</b> — «обеими руками», <b>z obiema siostrami</b>. О мужчинах и вещах — <b>oboma</b>, а универсальная форма для остальных падежей одна: <b>obu</b>. Отсюда <b>w obu książkach</b>, <b>obu kolegom</b>.",
      "И книжный оборот, который стоит просто узнавать: <b>przed dwoma laty</b> — «два года назад». В обычном разговоре ты скажешь <b>dwa lata temu</b>, а przed dwoma laty встретишь в статье, отчёте или предисловии."
    ],
    "audio":"Одно исключение из одного набора на все роды всё-таки есть, и оно маленькое: в творительном у женского рода живёт своя форма dwiema. Z dwoma kolegami — с двумя коллегами-мужчинами; z dwiema koleżankami — с двумя коллегами-женщинами. Только творительный и только двойка. Во всех прочих падежах женский род идёт вместе со всеми: dwóch koleżanek, dwóm koleżankom, o dwóch koleżankach. Живая речь давно допускает и z dwoma koleżankami, но dwiema надёжнее и звучит грамотнее. Рядом стоит её родственница obiema: obiema rękami, обеими руками; z obiema siostrami. О мужчинах и вещах — oboma, а универсальная форма для остальных падежей одна: obu. Отсюда w obu książkach, obu kolegom. И книжный оборот, который стоит просто узнавать: przed dwoma laty, два года назад. В обычном разговоре звучит dwa lata temu, а przed dwoma laty встречается в статье, отчёте или предисловии.",
    "table":{"rows":[
      ["z dwoma kolegami <button class=\"play\" data-say=\"z dwoma kolegami\">🔊</button>","с двумя коллегами-мужчинами"],
      ["z dwiema koleżankami <button class=\"play\" data-say=\"z dwiema koleżankami\">🔊</button>","с двумя коллегами-женщинами"],
      ["dwóch koleżanek · o dwóch koleżankach","остальные падежи — общие"],
      ["obiema rękami <button class=\"play\" data-say=\"obiema rękami\">🔊</button>","обеими руками"],
      ["w obu książkach · z oboma kolegami","обе · оба"],
      ["przed dwoma laty ≈ dwa lata temu","книжное «два года назад»"]
    ],"star":1},
    "examples":[
      {"ru":"Анна обедала с двумя коллегами-женщинами.","en":"Anna jadła obiad <b>z dwiema koleżankami</b>.","say":"Anna jadła obiad z dwiema koleżankami."},
      {"ru":"Марек приехал с двумя братьями.","en":"Marek przyjechał <b>z dwoma braćmi</b>.","gloss":"brat → braćmi, творительный из B1","say":"Marek przyjechał z dwoma braćmi."},
      {"ru":"Она держала коробку обеими руками.","en":"Trzymała pudełko <b>obiema rękami</b>.","say":"Trzymała pudełko obiema rękami."},
      {"ru":"В обеих книгах одна и та же ошибка.","en":"<b>W obu książkach</b> jest ten sam błąd.","say":"W obu książkach jest ten sam błąd."},
      {"ru":"Два года назад этого отдела ещё не было.","en":"<b>Przed dwoma laty</b> tego działu jeszcze nie było.","gloss":"книжный оборот","say":"Przed dwoma laty tego działu jeszcze nie było."}
    ],
    "mistakes":[
      {"wrong":"z dwiema kolegami","right":"<b>z dwoma</b> kolegami","why":"Dwiema — только о женском роде, о мужчинах dwoma."},
      {"wrong":"o dwiema koleżankach","right":"<b>o dwóch</b> koleżankach","why":"Dwiema живёт только в творительном; предложный общий — dwóch."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> две женщины, творительный.",
       "q":"«с двумя коллегами-женщинами» —","opts":["z dwie koleżankami","z dwiema koleżankami","z dwóch koleżankami"],"answer":1,
       "explain":"Женская форма творительного — <b>dwiema</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> предложный, общая форма.",
       "q":"«в обеих книгах» —","opts":["w obie książkach","w obu książkach","w obydwa książkach"],"answer":1,
       "explain":"В косвенных падежах работает универсальное <b>obu</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Rozmawiam z dwiema koleżankami.","sub":"я говорю с двумя коллегами-женщинами","want":"Rozmawiam z dwiema koleżankami."}
    ]
   },
   {
    "eyebrow":"Правило 4 · Годы и даты",
    "title":"<em>w dwa tysiące dwudziestym szóstym roku</em>",
    "paras":[
      "Год по-польски — порядковое числительное, но порядковым становится не всё число, а только его хвост: десятки и единицы. Тысячи и сотни стоят неподвижно и не меняются вовсе.",
      "2026 — <b>dwa tysiące dwudziesty szósty</b>. «В каком году?» — <b>w dwa tysiące dwudziestym szóstym roku</b> или <b>w roku dwa tysiące dwudziestym szóstym</b>: работают только два последних слова. «С какого года?» — <b>od dwa tysiące dwudziestego roku</b>.",
      "Если число кончается круглым десятком, хвост всего один: 1990 — <b>tysiąc dziewięćset dziewięćdziesiąty</b>, отсюда <b>w tysiąc dziewięćset dziewięćdziesiątym roku</b>. И тут русский совпадает полностью: мы тоже говорим «в тысяча девятьсот девяностом», не трогая ни тысячу, ни девятьсот.",
      "Дата целиком идёт в родительном: <b>dwudziestego szóstego maja dwa tysiące dwudziestego szóstego roku</b>. А вопрос про число звучит так: <b>Którego dzisiaj mamy?</b> — <b>Dwudziestego szóstego.</b>"
    ],
    "audio":"Год по-польски — порядковое числительное, но порядковым становится не всё число, а только его хвост: десятки и единицы. Тысячи и сотни стоят неподвижно и не меняются вовсе. Две тысячи двадцать шесть — dwa tysiące dwudziesty szósty. В каком году — w dwa tysiące dwudziestym szóstym roku или w roku dwa tysiące dwudziestym szóstym: работают только два последних слова. С какого года — od dwa tysiące dwudziestego roku. Если число кончается круглым десятком, хвост всего один: тысяча девятьсот девяностый — tysiąc dziewięćset dziewięćdziesiąty, отсюда w tysiąc dziewięćset dziewięćdziesiątym roku. И тут русский совпадает полностью: мы тоже говорим «в тысяча девятьсот девяностом», не трогая ни тысячу, ни девятьсот. Дата целиком идёт в родительном: dwudziestego szóstego maja dwa tysiące dwudziestego szóstego roku. А вопрос про число звучит так: którego dzisiaj mamy — dwudziestego szóstego.",
    "table":{"rows":[
      ["2026 → dwa tysiące dwudziesty szósty","порядковый только хвост"],
      ["w dwa tysiące dwudziestym szóstym roku <button class=\"play\" data-say=\"w dwa tysiące dwudziestym szóstym roku\">🔊</button>","в 2026 году"],
      ["od dwa tysiące dwudziestego roku","с 2020 года"],
      ["w tysiąc dziewięćset dziewięćdziesiątym roku","в 1990 году"],
      ["dwudziestego szóstego maja <button class=\"play\" data-say=\"dwudziestego szóstego maja\">🔊</button>","двадцать шестого мая"],
      ["Którego dzisiaj mamy?","какое сегодня число?"]
    ],"star":1},
    "examples":[
      {"ru":"Издательство появилось в 1998 году.","en":"Wydawnictwo powstało <b>w tysiąc dziewięćset dziewięćdziesiątym ósmym roku</b>.","say":"Wydawnictwo powstało w tysiąc dziewięćset dziewięćdziesiątym ósmym roku."},
      {"ru":"Анна живёт в Кракове с 2021 года.","en":"Anna mieszka w Krakowie <b>od dwa tysiące dwudziestego pierwszego roku</b>.","say":"Anna mieszka w Krakowie od dwa tysiące dwudziestego pierwszego roku."},
      {"ru":"Книга выйдет в мае 2026 года.","en":"Książka ukaże się <b>w maju dwa tysiące dwudziestego szóstego roku</b>.","gloss":"месяц + год в родительном","say":"Książka ukaże się w maju dwa tysiące dwudziestego szóstego roku."},
      {"ru":"Совещание двадцать шестого мая.","en":"Zebranie jest <b>dwudziestego szóstego maja</b>.","say":"Zebranie jest dwudziestego szóstego maja."}
    ],
    "mistakes":[
      {"wrong":"w dwóch tysiącach dwudziestym szóstym roku","right":"<b>w dwa tysiące</b> dwudziestym szóstym roku","why":"Тысячи в дате не склоняются — меняется только хвост числа."},
      {"wrong":"w dwa tysiące dwadzieścia sześć roku","right":"w dwa tysiące <b>dwudziestym szóstym</b> roku","why":"Хвост обязан стать порядковым: dwudziesty szósty, а не dwadzieścia sześć."}
    ],
    "mnemonic":"📅 Год держит хвост: тысячи и сотни спят, работают только десятки и единицы — dwa tysiące dwudziestym szóstym.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> смотри, что склоняется.",
       "q":"«в 2026 году» —","opts":["w dwa tysiące dwudziestym szóstym roku","w dwóch tysiącach dwudziestym szóstym roku","w dwa tysiące dwadzieścia sześć roku"],"answer":0,
       "explain":"Меняются только два последних слова: <b>dwudziestym szóstym</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> od просит родительный.",
       "q":"«с 2020 года» —","opts":["od dwa tysiące dwadzieścia","od dwa tysiące dwudziestego roku","od dwóch tysięcy dwudziestego roku"],"answer":1,
       "explain":"Родительный ложится на хвост: <b>od dwa tysiące dwudziestego roku</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Zebranie jest dwudziestego szóstego maja.","sub":"совещание двадцать шестого мая","want":"Zebranie jest dwudziestego szóstego maja."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна и её коллега Эва в издательстве, утро понедельника. Тапни по строке, чтобы увидеть перевод, и нажми на подсвеченное слово.",
   "lines":[
     {"who":"E","name":"Ewa","side":"left","en":"Anno, ilu autorów mamy w tym numerze?","ru":"Анна, сколько авторов у нас в этом номере?",
      "words":[["ilu autorów","сколько авторов"]]},
     {"who":"A","name":"Anna","side":"right","en":"Sześciu. Z czterema już rozmawiałam.","ru":"Шестеро. С четырьмя я уже поговорила.",
      "words":[["Sześciu","шестеро"],["z czterema","с четырьмя"]]},
     {"who":"E","name":"Ewa","side":"left","en":"A termin? Redakcja czeka od dwóch tygodni.","ru":"А срок? Редакция ждёт уже две недели.",
      "words":[["od dwóch tygodni","уже две недели"]]},
     {"who":"A","name":"Anna","side":"right","en":"Do piątku. Muszę oddać tekst dwóm redaktorom.","ru":"До пятницы. Мне нужно отдать текст двум редакторам.",
      "words":[["dwóm redaktorom","двум редакторам"]]},
     {"who":"E","name":"Ewa","side":"left","en":"Spotykasz się z nimi razem czy osobno?","ru":"Ты встречаешься с ними вместе или отдельно?",
      "words":[["osobno","отдельно"]]},
     {"who":"A","name":"Anna","side":"right","en":"Osobno. Najpierw z dwoma kolegami, potem z dwiema koleżankami z korekty.","ru":"Отдельно. Сначала с двумя коллегами-мужчинами, потом с двумя из корректуры.",
      "words":[["z dwoma kolegami","с двумя коллегами-мужчинами"],["z dwiema koleżankami","с двумя коллегами-женщинами"]]},
     {"who":"E","name":"Ewa","side":"left","en":"Pamiętasz, że w maju mamy jubileusz? Wydawnictwo powstało w tysiąc dziewięćset dziewięćdziesiątym ósmym roku.","ru":"Помнишь, что в мае у нас юбилей? Издательство появилось в 1998 году.",
      "words":[["jubileusz","юбилей"],["powstało","появилось, возникло"]]},
     {"who":"A","name":"Anna","side":"right","en":"To już prawie trzydzieści lat. Zapiszę sobie: dwudziestego szóstego maja.","ru":"Это уже почти тридцать лет. Запишу себе: двадцать шестого мая.",
      "words":[["dwudziestego szóstego maja","двадцать шестого мая"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — разговор в коридоре офиса.",
   "lines":[
     {"who":"A","en":"Od kiedy tu pracujesz?","ru":"Ты здесь давно работаешь?"},
     {"who":"B","en":"Od pięciu lat.","ru":"Уже пять лет."},
     {"who":"A","en":"A z iloma osobami pracujesz w dziale?","ru":"А со сколькими людьми ты работаешь в отделе?"},
     {"who":"B","en":"Z czterema. Dwóch redaktorów i dwie korektorki.","ru":"С четырьмя. Двое редакторов и две корректорши."},
     {"who":"A","en":"Czyli razem jest was pięcioro.","ru":"Значит, вместе вас пятеро."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — числа в падежах и рабочий календарь.",
   "items":[
     {"en":"dwóch · dwóm · dwoma","ru":"двух · двум · двумя","ex":"Znam dwóch redaktorów."},
     {"en":"trzech · trzem · trzema","ru":"трёх · трём · тремя","ex":"Pracuję z trzema autorami."},
     {"en":"czterech · czterem · czterema","ru":"четырёх · четырём · четырьмя","ex":"W czterech pokojach jest ciemno."},
     {"en":"pięciu · pięcioma","ru":"пяти · пятью","ex":"Rozmawiamy z pięcioma autorami."},
     {"en":"kilku · kilkoma","ru":"нескольких · несколькими","ex":"Mówiłam o tym z kilkoma osobami."},
     {"en":"wielu · wieloma","ru":"многих · многими","ex":"Znam tu wielu ludzi."},
     {"en":"dwiema","ru":"двумя (о женщинах)","ex":"Idę na obiad z dwiema koleżankami."},
     {"en":"obu · obiema · oboma","ru":"обоих · обеими · обоими","ex":"W obu książkach jest ten sam błąd."},
     {"en":"od pięciu lat","ru":"уже пять лет","ex":"Mieszkamy tu od pięciu lat."},
     {"en":"przed dwoma laty","ru":"два года назад (книжное)","ex":"Przed dwoma laty tego działu nie było."},
     {"en":"w dwa tysiące dwudziestym szóstym roku","ru":"в 2026 году","ex":"Książka ukaże się w dwa tysiące dwudziestym szóstym roku."},
     {"en":"jubileusz · termin · egzemplarz","ru":"юбилей · срок · экземпляр","ex":"Termin mija w piątek."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу.",
   "pairs":[["z dwiema koleżankami","с двумя коллегами-женщинами"],["od pięciu lat","уже пять лет"],["dwóm redaktorom","двум редакторам"],["w dwa tysiące dwudziestym szóstym roku","в 2026 году"]]
 },
 "reading":{
   "intro":"Прочитай вслух — числа тут в каждой строке, и почти все в падежах.",
   "title":"Liczby w wydawnictwie",
   "sentences":["Anna pracuje w krakowskim wydawnictwie od stycznia.","W jej dziale jest pięć osób.","Dwóch redaktorów zajmuje się prozą, a dwie korektorki poezją.","W tym numerze jest sześciu autorów.","Z czterema Anna już się spotkała, dwóch jeszcze nie zna.","Tekst trzeba oddać do piątku, czyli za trzy dni.","Wydawnictwo powstało w tysiąc dziewięćset dziewięćdziesiątym ósmym roku.","W maju będzie jubileusz — dwudziestego szóstego maja.","Marek pracuje w swojej firmie od pięciu lat.","Anna mówi, że przed dwoma laty nie umiała podać nawet daty."],
   "translation":"Анна работает в краковском издательстве с января. В её отделе пять человек. Двое редакторов занимаются прозой, а две корректорши — поэзией. В этом номере шесть авторов. С четырьмя Анна уже встретилась, двоих ещё не знает. Текст нужно сдать до пятницы, то есть через три дня. Издательство появилось в 1998 году. В мае будет юбилей — двадцать шестого мая. Марек работает в своей фирме уже пять лет. Анна говорит, что два года назад не умела назвать даже дату."
 },
 "quiz":{
   "intro":"Пять вопросов — и числительные перестают быть неподвижными.",
   "items":[
     {"q":"1. «с тремя авторами» —","opts":["z trzy autorami","z trzema autorami","z trzech autorami"],"answer":1,
      "explain":"Творительный тройки — <b>trzema</b>."},
     {"q":"2. «двум коллегам» —","opts":["dwóm kolegom","dwoma kolegom","dwóch kolegom"],"answer":0,
      "explain":"Дательный двойки — <b>dwóm</b>."},
     {"q":"3. «уже пять лет» —","opts":["od pięć lat","od pięcioma lat","od pięciu lat"],"answer":2,
      "explain":"Od + родительный: <b>od pięciu lat</b>."},
     {"q":"4. «с двумя коллегами-женщинами» —","opts":["z dwie koleżankami","z dwiema koleżankami","z dwóch koleżankami"],"answer":1,
      "explain":"Женская форма творительного — <b>dwiema</b>."},
     {"q":"5. «в 2026 году» —","opts":["w dwóch tysiącach dwudziestym szóstym roku","w dwa tysiące dwadzieścia sześć roku","w dwa tysiące dwudziestym szóstym roku"],"answer":2,
      "explain":"Склоняется только хвост числа: <b>dwudziestym szóstym</b>."}
   ]
 },
 "essay":{
   "intro":"Расскажи о своей работе или учёбе числами — так, чтобы каждое число стояло в падеже.",
   "prompt":"Напиши 4–5 фраз: сколько людей рядом с тобой, с кем ты работаешь, с какого года, и назови одну важную дату.",
   "hint":"Опора: W moim dziale jest… · Pracuję z dwoma / dwiema… · od pięciu lat · w dwa tysiące… roku · dwudziestego… maja 💛",
   "example":"W moim biurze pracuje pięć osób. Ja pracuję z dwoma kolegami i z dwiema koleżankami. Jestem tu od trzech lat, a w tej firmie od dwa tysiące dwudziestego pierwszego roku. Najważniejszy termin mam dwudziestego szóstego maja. Przed dwoma laty wszystko było mniejsze i spokojniejsze."
 }
},
"9": {
 "day":9,"week":"02",
 "themeRu":"Двое мужчин пришло",
 "themeEn":"Liczebniki i rodzaj męskoosobowy",
 "intro":"Пятеро студентов пришло. По-русски это звучит нормально, а по-польски ещё и обязательно — и ровно здесь спотыкаются почти все, кто дошёл до B2. Сегодняшний день — про одну ловушку и про три способа сказать «два студента». Когда разберёшься, польские фразы о группах людей перестанут собираться наугад.",
 "introAudio":"Пятеро студентов пришло. По-русски это звучит нормально, а по-польски ещё и обязательно — и ровно здесь спотыкаются почти все, кто дошёл до B2. Сегодняшний день — про одну ловушку и про три способа сказать «два студента». Когда разберёшься, польские фразы о группах людей перестанут собираться наугад.",
 "goals":[
   "Выбирать между <b>dwaj studenci</b> и <b>dwóch studentów</b>",
   "Ставить глагол в средний род: <b>Pięciu studentów przyszło</b>",
   "Считать женщин и вещи: <b>dwie koleżanki przyszły</b>, но <b>pięć koleżanek przyszło</b>",
   "Пользоваться <b>wielu, kilku, ilu</b>: <b>Przyszło wielu gości</b>"
 ],
 "learned":[
   "Выбрал(а) между dwaj studenci и dwóch studentów",
   "Поставил(а) глагол в средний род: Pięciu studentów przyszło",
   "Посчитал(а) женщин и вещи: dwie koleżanki przyszły, но pięć koleżanek przyszło",
   "Воспользовался(лась) словами wielu, kilku, ilu: Przyszło wielu gości"
 ],
 "review":{
   "intro":"Вчерашние формы ещё тёплые — начнём с них. Потом одна приставка из первой недели, она сегодня пригодится.",
   "introAudio":"Вчерашние формы ещё тёплые — начнём с них. Потом одна приставка из первой недели, она сегодня пригодится.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> две женщины, творительный.",
      "q":"«с двумя коллегами-женщинами» —","opts":["z dwoma koleżankami","z dwiema koleżankami","z dwie koleżankami"],"answer":1,
      "explain":"Женская форма творительного — <b>dwiema</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> склоняется только хвост числа.",
      "q":"«в 2026 году» —","opts":["w dwa tysiące dwudziestym szóstym roku","w dwóch tysiącach dwudziestym szóstym roku","w dwa tysiące dwadzieścia sześć roku"],"answer":0,
      "explain":"Тысячи стоят неподвижно: <b>w dwa tysiące dwudziestym szóstym roku</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> приставка po- значит «немного».",
      "q":"«Мы немного посидели в кафе» —","opts":["Siedzieliśmy w kawiarni","Posiedzieliśmy w kawiarni","Przesiedzieliśmy w kawiarni"],"answer":1,
      "explain":"Po- = «немного», ровно как русское по-: <b>posiedzieliśmy</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Марек взял ключи и вышел»</b>","answer":"Marek wziął klucze i wyszedł"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Два способа",
    "title":"<em>dwaj studenci</em> и <em>dwóch studentów</em>",
    "paras":[
      "Когда речь о группе, в которой есть хотя бы один мужчина, польский даёт два равноправных способа сказать одно и то же. Первый: <b>dwaj studenci</b> — и число, и существительное в именительном, как русское «два студента». Второй: <b>dwóch studentów</b> — оба слова уходят в родительный.",
      "Первый способ работает только у двойки, тройки и четвёрки и только в именительном падеже: <b>dwaj, trzej, czterej</b>. Дальше его просто нет: «пятеро парней» будет только <b>pięciu chłopaków</b>.",
      "Второй способ универсален и в живой речи встречается чаще: <b>dwóch studentów, trzech kolegów, czterech autorów, pięciu redaktorów</b>. Если сомневаешься — бери его, он никогда не подведёт.",
      "Как только предложение уходит в косвенный падеж, выбор исчезает вовсе: <b>Znam dwóch studentów</b>, <b>Dałam książkę dwóm studentom</b>, <b>Rozmawiam z dwoma studentami</b>. Разница живёт ровно в одном месте — в именительном."
    ],
    "audio":"Когда речь о группе, в которой есть хотя бы один мужчина, польский даёт два равноправных способа сказать одно и то же. Первый: dwaj studenci — и число, и существительное в именительном, как русское «два студента». Второй: dwóch studentów — оба слова уходят в родительный. Первый способ работает только у двойки, тройки и четвёрки и только в именительном падеже: dwaj, trzej, czterej. Дальше его просто нет: пятеро парней будет только pięciu chłopaków. Второй способ универсален и в живой речи встречается чаще: dwóch studentów, trzech kolegów, czterech autorów, pięciu redaktorów. Если сомневаешься, бери его, он никогда не подведёт. Как только предложение уходит в косвенный падеж, выбор исчезает вовсе: znam dwóch studentów, dałam książkę dwóm studentom, rozmawiam z dwoma studentami. Разница живёт ровно в одном месте — в именительном.",
    "table":{"rows":[
      ["dwaj studenci <button class=\"play\" data-say=\"dwaj studenci\">🔊</button>","способ 1 — именительный"],
      ["dwóch studentów <button class=\"play\" data-say=\"dwóch studentów\">🔊</button>","способ 2 — родительный"],
      ["trzej koledzy · czterej autorzy","способ 1 живёт только у 2, 3, 4"],
      ["pięciu redaktorów","от пяти — только способ 2"],
      ["Znam dwóch studentów.","в косвенных падежах выбора нет"],
      ["dwóm studentom · z dwoma studentami","дательный · творительный"]
    ],"star":1},
    "examples":[
      {"ru":"Два студента ждут внизу.","en":"<b>Dwaj studenci</b> czekają na dole.","gloss":"способ 1","say":"Dwaj studenci czekają na dole."},
      {"ru":"Два студента ждут внизу.","en":"<b>Dwóch studentów</b> czeka na dole.","gloss":"способ 2 — тот же смысл, но глагол в единственном","say":"Dwóch studentów czeka na dole."},
      {"ru":"Я знаю двух авторов из этого номера.","en":"Znam <b>dwóch autorów</b> z tego numeru.","say":"Znam dwóch autorów z tego numeru."},
      {"ru":"Пятеро редакторов работают над одной книгой.","en":"<b>Pięciu redaktorów</b> pracuje nad jedną książką.","gloss":"от пяти — только форма на -u","say":"Pięciu redaktorów pracuje nad jedną książką."},
      {"ru":"Мы поговорили с тремя коллегами.","en":"Porozmawialiśmy <b>z trzema kolegami</b>.","say":"Porozmawialiśmy z trzema kolegami."}
    ],
    "mistakes":[
      {"wrong":"dwa studenci","right":"<b>dwaj studenci</b> / <b>dwóch studentów</b>","why":"О мужчинах форма dwa не годится ни в одном из двух способов."},
      {"wrong":"pięciu studenci","right":"<b>pięciu studentów</b>","why":"От пяти существительное обязательно уходит в родительный множественного."}
    ],
    "mnemonic":"👥 Два пути к одной мысли: dwaj studenci (только 2–4, только именительный) и dwóch studentów (всегда и везде).",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> о мужчинах, именительный.",
       "q":"«Три коллеги ждут» —","opts":["Trzy koledzy czekają","Trzej koledzy czekają","Troje koledzy czekają"],"answer":1,
       "explain":"Мужско-личная форма именительного — <b>trzej koledzy</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> от пяти способ один.",
       "q":"«пятеро редакторов» —","opts":["pięć redaktorzy","pięciu redaktorzy","pięciu redaktorów"],"answer":2,
       "explain":"Число на -u плюс родительный множественного: <b>pięciu redaktorów</b>."},
      {"type":"type","howto":"Напиши «Я знаю двух авторов». Диакритику можно не ставить.",
       "q":"Я знаю двух авторов.","accept":["znam dwóch autorów","znam dwoch autorow","znam dwóch autorow","znam dwoch autorów"],"placeholder":"Znam…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Ловушка недели",
    "title":"<em>Pięciu studentów przyszło</em> — глагол в среднем роде",
    "paras":[
      "Вот она, главная ловушка недели. Если выбран второй способ — <b>dwóch, trzech, pięciu studentów</b>, — глагол встаёт в единственное число, а в прошедшем времени ещё и в средний род: <b>Pięciu studentów przyszło.</b> Не przyszli.",
      "Сравни две правильные фразы. <b>Dwaj studenci przyszli</b> — подлежащее в именительном, глагол во множественном мужско-личном. <b>Dwóch studentów przyszło</b> — подлежащее в родительном, глагол в среднем роде единственного числа. Обе верны, смешивать их нельзя.",
      "Русский умеет ровно то же самое: «двое студентов пришло», «пятеро гостей осталось». Правда, у нас это лишь один из вариантов, можно и «двое пришли». В польском при форме dwóch выбора нет — только средний род.",
      "В настоящем времени средний род не виден, зато единственное число видно отлично: <b>Pięciu studentów czeka</b> (не czekają), <b>Dwóch kolegów mieszka w Gdańsku</b>. И в будущем так же: <b>Przyjdzie pięciu gości.</b>"
    ],
    "audio":"Вот она, главная ловушка недели. Если выбран второй способ — dwóch, trzech, pięciu studentów — глагол встаёт в единственное число, а в прошедшем времени ещё и в средний род: pięciu studentów przyszło. Не przyszli. Сравни две правильные фразы. Dwaj studenci przyszli — подлежащее в именительном, глагол во множественном мужско-личном. Dwóch studentów przyszło — подлежащее в родительном, глагол в среднем роде единственного числа. Обе верны, смешивать их нельзя. Русский умеет ровно то же самое: двое студентов пришло, пятеро гостей осталось. Правда, у нас это лишь один из вариантов, можно и «двое пришли». В польском при форме dwóch выбора нет, только средний род. В настоящем времени средний род не виден, зато единственное число видно отлично: pięciu studentów czeka, не czekają; dwóch kolegów mieszka w Gdańsku. И в будущем так же: przyjdzie pięciu gości.",
    "table":{"rows":[
      ["Dwaj studenci przyszli. <button class=\"play\" data-say=\"Dwaj studenci przyszli.\">🔊</button>","способ 1 — множественное число"],
      ["Dwóch studentów przyszło. <button class=\"play\" data-say=\"Dwóch studentów przyszło.\">🔊</button>","способ 2 — средний род"],
      ["Pięciu studentów przyszło. <button class=\"play\" data-say=\"Pięciu studentów przyszło.\">🔊</button>","от пяти — только так"],
      ["Pięciu studentów czeka.","настоящее: единственное число"],
      ["Przyjdzie pięciu gości.","будущее — тоже единственное"],
      ["Dwóch kolegów mieszka w Gdańsku.","живёт, а не живут"]
    ],"star":2},
    "examples":[
      {"ru":"Пятеро студентов пришло на встречу.","en":"<b>Pięciu studentów przyszło</b> na spotkanie.","gloss":"средний род единственного числа","say":"Pięciu studentów przyszło na spotkanie."},
      {"ru":"Двое коллег ждали внизу.","en":"<b>Dwóch kolegów czekało</b> na dole.","say":"Dwóch kolegów czekało na dole."},
      {"ru":"Два автора уже прислали текст.","en":"<b>Dwaj autorzy</b> już <b>przysłali</b> tekst.","gloss":"способ 1 — глагол во множественном","say":"Dwaj autorzy już przysłali tekst."},
      {"ru":"Придёт пятеро гостей.","en":"<b>Przyjdzie pięciu gości.</b>","say":"Przyjdzie pięciu gości."},
      {"ru":"Трое сотрудников работает из дома.","en":"<b>Trzech pracowników pracuje</b> z domu.","say":"Trzech pracowników pracuje z domu."}
    ],
    "mistakes":[
      {"wrong":"Pięciu studentów przyszli.","right":"Pięciu studentów <b>przyszło</b>.","why":"При форме на -u глагол идёт в среднем роде единственного числа — как русское «пятеро пришло»."},
      {"wrong":"Dwóch kolegów mieszkają w Gdańsku.","right":"Dwóch kolegów <b>mieszka</b> w Gdańsku.","why":"И в настоящем времени глагол остаётся в единственном числе."}
    ],
    "mnemonic":"⚠️ Dwóch, trzech, pięciu — и глагол сразу один и в среднем роде: przyszło, czekało, było.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни «пятеро пришло».",
       "q":"«Пятеро студентов пришло» —","opts":["Pięciu studentów przyszli","Pięciu studentów przyszło","Pięciu studenci przyszli"],"answer":1,
       "explain":"Средний род единственного числа: <b>przyszło</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> подлежащее в именительном.",
       "q":"«Два автора прислали текст» —","opts":["Dwaj autorzy przysłali tekst","Dwaj autorzy przysłało tekst","Dwóch autorów przysłali tekst"],"answer":0,
       "explain":"При способе 1 глагол идёт во множественном: <b>przysłali</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Двое коллег ждали внизу»</b>","answer":"Dwóch kolegów czekało na dole"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Женщины и вещи",
    "title":"<em>Dwie koleżanki przyszły</em>, но <em>pięć koleżanek przyszło</em>",
    "paras":[
      "У групп без мужчин — женщины, вещи, животные — жизнь проще. До четырёх всё обычно: <b>dwie koleżanki przyszły, trzy książki leżą, cztery okna są otwarte</b>. Число и существительное в именительном, глагол во множественном.",
      "А с пятёрки включается тот же механизм, что и у мужчин: существительное уходит в родительный множественного, глагол — в средний род единственного числа. <b>Pięć koleżanek przyszło. Dziesięć książek leżało na stole.</b>",
      "Значит, правило одно на всех, разная только точка включения: у мужско-личных групп средний род приходит уже с двойки, если выбран второй способ; у всех остальных — ровно с пятёрки.",
      "И знакомая компания из B1 ведёт себя так же, как «пять»: <b>dużo, mało, kilka, wiele</b>. <b>Dużo ludzi przyszło. Kilka osób czekało. Wiele książek zginęło w czasie przeprowadzki.</b>"
    ],
    "audio":"У групп без мужчин — женщины, вещи, животные — жизнь проще. До четырёх всё обычно: dwie koleżanki przyszły, trzy książki leżą, cztery okna są otwarte. Число и существительное в именительном, глагол во множественном. А с пятёрки включается тот же механизм, что и у мужчин: существительное уходит в родительный множественного, глагол в средний род единственного числа. Pięć koleżanek przyszło. Dziesięć książek leżało na stole. Значит, правило одно на всех, разная только точка включения: у мужско-личных групп средний род приходит уже с двойки, если выбран второй способ; у всех остальных ровно с пятёрки. И знакомая компания из B1 ведёт себя так же, как «пять»: dużo, mało, kilka, wiele. Dużo ludzi przyszło. Kilka osób czekało. Wiele książek zginęło w czasie przeprowadzki.",
    "table":{"rows":[
      ["Dwie koleżanki przyszły. <button class=\"play\" data-say=\"Dwie koleżanki przyszły.\">🔊</button>","до четырёх — множественное"],
      ["Trzy książki leżą na stole.","то же самое"],
      ["Pięć koleżanek przyszło. <button class=\"play\" data-say=\"Pięć koleżanek przyszło.\">🔊</button>","от пяти — средний род"],
      ["Dziesięć książek leżało na stole.","лежало, а не лежали"],
      ["Dużo ludzi przyszło.","количества ведут себя как «пять»"],
      ["Kilka osób czekało.","несколько человек ждало"]
    ],"star":2},
    "examples":[
      {"ru":"Две коллеги пришли раньше.","en":"<b>Dwie koleżanki przyszły</b> wcześniej.","say":"Dwie koleżanki przyszły wcześniej."},
      {"ru":"Пять коллег пришло на юбилей.","en":"<b>Pięć koleżanek przyszło</b> na jubileusz.","gloss":"от пяти — средний род","say":"Pięć koleżanek przyszło na jubileusz."},
      {"ru":"На столе лежало десять книг.","en":"Na stole <b>leżało dziesięć książek</b>.","say":"Na stole leżało dziesięć książek."},
      {"ru":"Несколько человек ждало у входа.","en":"<b>Kilka osób czekało</b> przy wejściu.","say":"Kilka osób czekało przy wejściu."},
      {"ru":"Пришло много людей.","en":"<b>Przyszło dużo ludzi.</b>","say":"Przyszło dużo ludzi."}
    ],
    "mistakes":[
      {"wrong":"Pięć koleżanek przyszły.","right":"Pięć koleżanek <b>przyszło</b>.","why":"От пяти глагол уходит в средний род единственного числа."},
      {"wrong":"Dwie koleżanki przyszło.","right":"Dwie koleżanki <b>przyszły</b>.","why":"До четырёх подлежащее в именительном, значит глагол во множественном."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> считаем до четырёх.",
       "q":"«Две коллеги пришли» —","opts":["Dwie koleżanki przyszło","Dwie koleżanki przyszły","Dwóch koleżanek przyszło"],"answer":1,
       "explain":"До четырёх — обычное множественное: <b>przyszły</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> пятёрка меняет всё.",
       "q":"«Пять коллег пришло» —","opts":["Pięć koleżanek przyszły","Pięć koleżanki przyszło","Pięć koleżanek przyszło"],"answer":2,
       "explain":"Родительный множественного плюс средний род: <b>pięć koleżanek przyszło</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> количество ведёт себя как «пять».",
       "q":"«Несколько человек ждало» —","opts":["Kilka osób czekały","Kilka osób czekało","Kilku osób czekało"],"answer":1,
       "explain":"Kilka + родительный, глагол в среднем роде: <b>czekało</b>."}
    ]
   },
   {
    "eyebrow":"Правило 4 · Многие и сколько",
    "title":"<em>Przyszło wielu gości</em>",
    "paras":[
      "У неопределённых слов для мужско-личных групп свои формы: <b>wielu, kilku, ilu, tylu</b>. <b>Przyszło wielu gości. Czekało kilku kolegów. Ilu was jest?</b> Глагол при них — тот же средний род единственного числа.",
      "Сравни пары и увидишь систему: <b>wiele książek</b> — <b>wielu autorów</b>; <b>kilka osób</b> — <b>kilku panów</b>; <b>ile lamp</b> — <b>ilu ludzi</b>. Одно слово, две формы: на -e для всех, на -u — о мужчинах.",
      "Ходовые обороты про компанию: <b>Było nas pięcioro</b> (смешанная компания, собирательное из B1), <b>Było nas pięciu</b> (только мужчины), <b>Było nas pięć</b> (только женщины). Русское «нас было пятеро» покрывает все три сразу.",
      "И слово из объявлений и отчётов: <b>większość</b> — «большинство». Оно женского рода и единственного числа, тянет за собой родительный: <b>Większość gości już wyszła.</b> Русское «большинство гостей уже ушло» устроено так же."
    ],
    "audio":"У неопределённых слов для мужско-личных групп свои формы: wielu, kilku, ilu, tylu. Przyszło wielu gości. Czekało kilku kolegów. Ilu was jest? Глагол при них — тот же средний род единственного числа. Сравни пары и увидишь систему: wiele książek и wielu autorów; kilka osób и kilku panów; ile lamp и ilu ludzi. Одно слово, две формы: на -e для всех, на -u о мужчинах. Ходовые обороты про компанию: było nas pięcioro — смешанная компания, собирательное из B1; było nas pięciu — только мужчины; było nas pięć — только женщины. Русское «нас было пятеро» покрывает все три сразу. И слово из объявлений и отчётов: większość, большинство. Оно женского рода и единственного числа, тянет за собой родительный: większość gości już wyszła. Русское «большинство гостей уже ушло» устроено так же.",
    "table":{"rows":[
      ["wiele książek · wielu autorów <button class=\"play\" data-say=\"wiele książek, wielu autorów\">🔊</button>","вещи · мужчины"],
      ["kilka osób · kilku panów","несколько"],
      ["ile lamp · ilu ludzi","сколько"],
      ["Przyszło wielu gości. <button class=\"play\" data-say=\"Przyszło wielu gości.\">🔊</button>","пришло много гостей"],
      ["Było nas pięcioro · pięciu · pięć","смешанно · мужчины · женщины"],
      ["Większość gości już wyszła.","большинство гостей уже ушло"]
    ],"star":3},
    "examples":[
      {"ru":"На юбилей пришло много гостей.","en":"Na jubileusz <b>przyszło wielu gości</b>.","say":"Na jubileusz przyszło wielu gości."},
      {"ru":"Несколько коллег ещё ждут ответа.","en":"<b>Kilku kolegów</b> jeszcze <b>czeka</b> na odpowiedź.","gloss":"мужско-личная форма kilku, глагол в единственном","say":"Kilku kolegów jeszcze czeka na odpowiedź."},
      {"ru":"Сколько вас?","en":"<b>Ilu was jest?</b>","gloss":"о компании, где есть мужчины","say":"Ilu was jest?"},
      {"ru":"Нас было пятеро.","en":"<b>Było nas pięcioro.</b>","say":"Było nas pięcioro."},
      {"ru":"Большинство авторов прислали текст вовремя.","en":"<b>Większość autorów przysłała</b> tekst na czas.","gloss":"większość — единственное число, женский род","say":"Większość autorów przysłała tekst na czas."}
    ],
    "mistakes":[
      {"wrong":"Przyszło wiele gości.","right":"Przyszło <b>wielu</b> gości.","why":"Goście — мужско-личная группа, значит форма на -u."},
      {"wrong":"Większość gości wyszli.","right":"Większość gości <b>wyszła</b>.","why":"Подлежащее — słowo większość, женский род единственного числа."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> гости — мужско-личная группа.",
       "q":"«Пришло много гостей» —","opts":["Przyszło wiele gości","Przyszło wielu gości","Przyszli wielu gości"],"answer":1,
       "explain":"Мужско-личная форма — <b>wielu</b>, глагол в среднем роде."},
      {"type":"choice","howto":"<b>Что делать:</b> смотри на подлежащее.",
       "q":"«Большинство гостей уже ушло» —","opts":["Większość gości już wyszli","Większość gości już wyszła","Większość gości już wyszło"],"answer":1,
       "explain":"Większość — женский род единственного числа: <b>wyszła</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Przyszło pięciu gości.","sub":"пришло пятеро гостей","want":"Przyszło pięciu gości."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Вечер, Анна и Марек считают будущих гостей. Ремонта ещё нет — есть список. Тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"M","name":"Marek","side":"left","en":"Ilu gości zaprosimy na parapetówkę?","ru":"Сколько гостей позовём на новоселье?",
      "words":[["Ilu gości","сколько гостей"]]},
     {"who":"A","name":"Anna","side":"right","en":"Remontu jeszcze nie ma, a ty już liczysz.","ru":"Ремонта ещё нет, а ты уже считаешь.",
      "words":[["Remontu jeszcze nie ma","ремонта ещё нет"]]},
     {"who":"M","name":"Marek","side":"left","en":"Lubię listy. Z pracy przyjdzie czterech kolegów.","ru":"Люблю списки. С работы придут четверо коллег.",
      "words":[["czterech kolegów","четверо коллег"],["przyjdzie","придёт — глагол в единственном числе"]]},
     {"who":"A","name":"Anna","side":"right","en":"Dobrze, że mówisz przyjdzie, a nie przyjdą.","ru":"Хорошо, что ты говоришь przyjdzie, а не przyjdą.",
      "words":[["przyjdą","придут — тут не годится"]]},
     {"who":"M","name":"Marek","side":"left","en":"Uczę się od ciebie. Dwaj z nich przyjdą z żonami.","ru":"Учусь у тебя. Двое из них придут с жёнами.",
      "words":[["Dwaj z nich","двое из них"]]},
     {"who":"A","name":"Anna","side":"right","en":"Ode mnie będą dwie koleżanki z korekty. One przyjdą same.","ru":"От меня будут две коллеги из корректуры. Они придут одни.",
      "words":[["dwie koleżanki","две коллеги"],["same","сами, без спутников"]]},
     {"who":"M","name":"Marek","side":"left","en":"A sąsiedzi? Państwo Kowalscy mają dwoje dzieci.","ru":"А соседи? У Ковальских двое детей.",
      "words":[["dwoje dzieci","двое детей"]]},
     {"who":"A","name":"Anna","side":"right","en":"Czyli będzie nas piętnaścioro. A wiosną przyjadą jeszcze moi rodzice.","ru":"Значит, нас будет пятнадцать. А весной приедут ещё мои родители.",
      "words":[["piętnaścioro","пятнадцать — о смешанной компании"],["wiosną","весной"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — после встречи в издательстве.",
   "lines":[
     {"who":"A","en":"Ilu autorów przyszło na spotkanie?","ru":"Сколько авторов пришло на встречу?"},
     {"who":"B","en":"Pięciu. Dwóch spóźniło się godzinę.","ru":"Пятеро. Двое опоздали на час."},
     {"who":"A","en":"A koleżanki z korekty?","ru":"А коллеги из корректуры?"},
     {"who":"B","en":"Dwie przyszły na czas, reszta pracuje z domu.","ru":"Две пришли вовремя, остальные работают из дома."},
     {"who":"A","en":"Czyli większość jednak była.","ru":"Значит, большинство всё-таки было."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — счёт людей и глагол, который за ними следит.",
   "items":[
     {"en":"dwaj / trzej / czterej","ru":"двое / трое / четверо (о мужчинах, именительный)","ex":"Trzej koledzy czekają na dole."},
     {"en":"dwóch / trzech / pięciu","ru":"двое / трое / пятеро (универсальная форма)","ex":"Pięciu studentów przyszło."},
     {"en":"Przyszło pięciu gości.","ru":"пришло пятеро гостей","ex":"Na jubileusz przyszło pięciu gości."},
     {"en":"Dwie koleżanki przyszły.","ru":"две коллеги пришли","ex":"Dwie koleżanki przyszły wcześniej."},
     {"en":"Pięć koleżanek przyszło.","ru":"пять коллег пришло","ex":"Pięć koleżanek przyszło na spotkanie."},
     {"en":"wielu · wiele","ru":"многие (о мужчинах) · многие (остальные)","ex":"Przyszło wielu gości."},
     {"en":"kilku · kilka","ru":"несколько (о мужчинах) · несколько","ex":"Kilku kolegów jeszcze czeka."},
     {"en":"ilu · ile","ru":"сколько (о мужчинах) · сколько","ex":"Ilu was jest?"},
     {"en":"Było nas pięcioro.","ru":"нас было пятеро","ex":"Było nas pięcioro przy stole."},
     {"en":"większość","ru":"большинство","ex":"Większość gości już wyszła."},
     {"en":"spóźnić się","ru":"опоздать","ex":"Dwóch autorów spóźniło się godzinę."},
     {"en":"parapetówka","ru":"новоселье","ex":"Parapetówka będzie po remoncie."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу.",
   "pairs":[["Pięciu studentów przyszło.","пятеро студентов пришло"],["Dwie koleżanki przyszły.","две коллеги пришли"],["Przyszło wielu gości.","пришло много гостей"],["Ilu was jest?","сколько вас?"]]
 },
 "reading":{
   "intro":"Прочитай вслух и следи за глаголом — он тут главный свидетель.",
   "title":"Kto przyjdzie",
   "sentences":["Marek robi listę gości na parapetówkę.","Remontu jeszcze nie ma, ale lista już jest.","Z jego pracy przyjdzie czterech kolegów.","Dwaj z nich przyjdą z żonami.","Od Anny będą dwie koleżanki z korekty.","One przyjdą same, bo mieszkają blisko.","Sąsiedzi mają dwoje dzieci i też obiecali przyjść.","Razem będzie ich piętnaścioro.","W zeszłym roku na urodziny Marka przyszło tylko sześciu gości.","Anna mówi, że tym razem większość na pewno przyjdzie."],
   "translation":"Марек составляет список гостей на новоселье. Ремонта ещё нет, но список уже есть. С его работы придут четверо коллег. Двое из них придут с жёнами. От Анны будут две коллеги из корректуры. Они придут одни, потому что живут близко. У соседей двое детей, и они тоже обещали прийти. Вместе их будет пятнадцать. В прошлом году на день рождения Марека пришло только шестеро гостей. Анна говорит, что на этот раз большинство точно придёт."
 },
 "quiz":{
   "intro":"Пять вопросов — и главная ловушка недели больше не ловит.",
   "items":[
     {"q":"1. «Пятеро студентов пришло» —","opts":["Pięciu studentów przyszli","Pięciu studentów przyszło","Pięciu studenci przyszli"],"answer":1,
      "explain":"При форме на -u глагол в среднем роде единственного числа: <b>przyszło</b>."},
     {"q":"2. «Три коллеги ждут» (мужчины) —","opts":["Trzy koledzy czekają","Trzej koledzy czekają","Troje koledzy czekają"],"answer":1,
      "explain":"Мужско-личный именительный — <b>trzej koledzy</b>."},
     {"q":"3. «Две коллеги пришли» —","opts":["Dwie koleżanki przyszły","Dwie koleżanki przyszło","Dwóch koleżanek przyszły"],"answer":0,
      "explain":"До четырёх — обычное множественное: <b>przyszły</b>."},
     {"q":"4. «Пять коллег пришло» —","opts":["Pięć koleżanek przyszły","Pięć koleżanek przyszło","Pięciu koleżanek przyszły"],"answer":1,
      "explain":"От пяти — родительный и средний род: <b>pięć koleżanek przyszło</b>."},
     {"q":"5. «Пришло много гостей» —","opts":["Przyszło wiele gości","Przyszli wielu gości","Przyszło wielu gości"],"answer":2,
      "explain":"Мужско-личная форма <b>wielu</b> плюс глагол в среднем роде."}
   ]
 },
 "essay":{
   "intro":"Напиши свой маленький список гостей — и проследи за каждым глаголом.",
   "prompt":"Напиши 4–5 фраз: кого ты позвал(а) бы на праздник, сколько их, кто придёт с кем и кто опоздает.",
   "hint":"Опора: Zaproszę… · Przyjdzie czterech… · Dwie koleżanki przyjdą… · Razem będzie nas… · Większość… Проверь глагол после dwóch и pięciu. 💛",
   "example":"Na moje urodziny zaproszę dziesięć osób. Z pracy przyjdzie czterech kolegów, dwaj z nich z żonami. Dwie koleżanki przyjdą prosto z biura. Kilku sąsiadów pewnie się spóźni, bo zawsze się spóźniają. Razem będzie nas piętnaścioro i będzie głośno."
 }
},
"10": {
 "day":10,"week":"02",
 "themeRu":"Пан Новак и Закопане",
 "themeEn":"Odmiana nazwisk i nazw",
 "intro":"Фамилия в польском — обычное слово, и её склоняют так же спокойно, как стол или книгу. Анне на работе приносят конверт <b>do pana Kowalskiego</b>, под Мареком живут <b>państwo Nowakowie</b>, а на длинные выходные они собираются <b>do Zakopanego</b>. Сегодня три вещи разом: фамилии, имена и география — то есть все слова, которые ученики упорно оставляют в словарной форме.",
 "introAudio":"Фамилия в польском — обычное слово, и её склоняют так же спокойно, как стол или книгу. Анне на работе приносят конверт do pana Kowalskiego, под Мареком живут państwo Nowakowie, а на длинные выходные они собираются do Zakopanego. Сегодня три вещи разом: фамилии, имена и география — то есть все слова, которые ученики упорно оставляют в словарной форме.",
 "goals":[
   "Склонять <b>-ski / -cki</b> как прилагательное: <b>pana Kowalskiego, pani Kowalskiej</b>",
   "Помнить асимметрию: <b>z panem Nowakiem</b>, но <b>z panią Nowak</b>",
   "Говорить о семье: <b>państwo Nowakowie</b> → <b>u państwa Nowaków</b>",
   "Ставить город в падеж: <b>w Krakowie, w Białymstoku, w Zakopanem</b>"
 ],
 "learned":[
   "Просклонял(а) -ski / -cki как прилагательное: pana Kowalskiego, pani Kowalskiej",
   "Запомнил(а) асимметрию: z panem Nowakiem, но z panią Nowak",
   "Сказал(а) о семье: państwo Nowakowie → u państwa Nowaków",
   "Поставил(а) город в падеж: w Krakowie, w Białymstoku, w Zakopanem"
 ],
 "review":{
   "intro":"Два вчерашних вопроса и один из первой недели — и переходим к именам собственным.",
   "introAudio":"Два вчерашних вопроса и один из первой недели — и переходим к именам собственным.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> следи за глаголом.",
      "q":"«Пришло пятеро гостей» —","opts":["Przyszli pięciu gości","Przyszło pięciu gości","Przyszło pięć gości"],"answer":1,
      "explain":"Мужско-личная форма <b>pięciu</b> плюс глагол в среднем роде: przyszło."},
     {"type":"choice","howto":"<b>Что делать:</b> в годе склоняется только хвост.",
      "q":"«в 1990 году» —","opts":["w tysiąc dziewięćset dziewięćdziesiątym roku","w tysiącu dziewięćsetnym dziewięćdziesiątym roku","w tysiąc dziewięćset dziewięćdziesiąt roku"],"answer":0,
      "explain":"Tysiąc и dziewięćset стоят неподвижно: <b>w tysiąc dziewięćset dziewięćdziesiątym roku</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> фабрика слов из дня 4 — место.",
      "q":"«кондитерская» —","opts":["cukiernia","cukiernik","cukierek"],"answer":0,
      "explain":"Суффикс места -ernia: <b>cukiernia</b>. Cukiernik — кондитер, cukierek — конфета."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Мы говорили с тремя авторами»</b>","answer":"Rozmawialiśmy z trzema autorami"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Фамилии на -ski",
    "title":"<em>pana Kowalskiego, pani Kowalskiej</em>",
    "paras":[
      "Фамилии на <b>-ski, -cki, -dzki</b> — это по строению прилагательные, и склоняются они как прилагательные. Kowalski → <b>Kowalskiego, Kowalskiemu, Kowalskim</b>; Nowacki → <b>Nowackiego</b>; Zawadzki → <b>Zawadzkiego</b>.",
      "Женский вариант тоже прилагательное: Kowalska → <b>Kowalskiej, Kowalską</b>. Русский делает ровно то же самое — «Ковальская, Ковальской, Ковальскую», — так что тут ничего нового, только польские окончания.",
      "Слово <b>pan / pani</b> склоняется вместе с фамилией: <b>pana Kowalskiego, panu Kowalskiemu, z panem Kowalskim, o panu Kowalskim</b>; <b>pani Kowalskiej, z panią Kowalską</b>. Два слова идут в одном падеже, как «господина Ковальского».",
      "Вся семья — множественное: <b>państwo Kowalscy</b> (именительный), <b>państwa Kowalskich</b> (родительный и винительный), <b>państwu Kowalskim</b> (дательный), <b>z państwem Kowalskimi</b> (творительный). «Byliśmy u państwa Kowalskich» — «Мы были у Ковальских»."
    ],
    "audio":"Фамилии на -ski, -cki, -dzki — это по строению прилагательные, и склоняются они как прилагательные. Kowalski — Kowalskiego, Kowalskiemu, Kowalskim; Nowacki — Nowackiego; Zawadzki — Zawadzkiego. Женский вариант тоже прилагательное: Kowalska — Kowalskiej, Kowalską. Русский делает ровно то же самое: Ковальская, Ковальской, Ковальскую. Так что тут ничего нового, только польские окончания. Слово pan или pani склоняется вместе с фамилией: pana Kowalskiego, panu Kowalskiemu, z panem Kowalskim, o panu Kowalskim; pani Kowalskiej, z panią Kowalską. Два слова идут в одном падеже, как «господина Ковальского». Вся семья — множественное: państwo Kowalscy в именительном, państwa Kowalskich в родительном и винительном, państwu Kowalskim в дательном, z państwem Kowalskimi в творительном. Byliśmy u państwa Kowalskich — мы были у Ковальских.",
    "table":{"rows":[
      ["pan Kowalski → pana Kowalskiego <button class=\"play\" data-say=\"pan Kowalski, pana Kowalskiego\">🔊</button>","родительный и винительный"],
      ["panu Kowalskiemu · z panem Kowalskim","дательный · творительный"],
      ["pani Kowalska → pani Kowalskiej <button class=\"play\" data-say=\"pani Kowalska, pani Kowalskiej\">🔊</button>","женская фамилия — прилагательное"],
      ["z panią Kowalską · o pani Kowalskiej","творительный · предложный"],
      ["państwo Kowalscy → państwa Kowalskich","супруги · у супругов"],
      ["Piszę do pana Nowackiego.","пишу пану Новацкому"]
    ],"star":0},
    "examples":[
      {"ru":"Письмо для пана Ковальского.","en":"List <b>do pana Kowalskiego</b>.","gloss":"do + родительный","say":"List do pana Kowalskiego."},
      {"ru":"Я говорила с паном Ковальским вчера.","en":"Rozmawiałam <b>z panem Kowalskim</b> wczoraj.","say":"Rozmawiałam z panem Kowalskim wczoraj."},
      {"ru":"Мы отдали текст пани Ковальской.","en":"Oddaliśmy tekst <b>pani Kowalskiej</b>.","gloss":"дательный — тоже Kowalskiej","say":"Oddaliśmy tekst pani Kowalskiej."},
      {"ru":"Мы были у Ковальских в субботу.","en":"Byliśmy <b>u państwa Kowalskich</b> w sobotę.","say":"Byliśmy u państwa Kowalskich w sobotę."},
      {"ru":"Это книга пана Новацкого.","en":"To książka <b>pana Nowackiego</b>.","say":"To książka pana Nowackiego."}
    ],
    "mistakes":[
      {"wrong":"List do pan Kowalski","right":"List <b>do pana Kowalskiego</b>","why":"В польском склоняются оба слова: и pan, и сама фамилия."},
      {"wrong":"z panią Kowalski","right":"<b>z panią Kowalską</b>","why":"Женская фамилия на -ska ведёт себя как прилагательное женского рода."}
    ],
    "mnemonic":"🏷 -ski, -cki, -dzki — это прилагательные: Kowalskiego, Kowalskiej, Kowalskim. Pan идёт с ними в ногу.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> do просит родительный.",
       "q":"«письмо пану Ковальскому» —","opts":["list do pan Kowalski","list do pana Kowalskiego","list do pana Kowalski"],"answer":1,
       "explain":"Оба слова в родительном: <b>do pana Kowalskiego</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> с кем? — творительный.",
       "q":"«с пани Ковальской» —","opts":["z panią Kowalską","z pani Kowalskiej","z panią Kowalski"],"answer":0,
       "explain":"Творительный женского прилагательного: <b>z panią Kowalską</b>."},
      {"type":"type","howto":"Напиши «Мы были у Ковальских». Диакритику можно не ставить.",
       "q":"Мы были у Ковальских.","accept":["byliśmy u państwa kowalskich","bylismy u panstwa kowalskich","byliśmy u panstwa kowalskich"],"placeholder":"Byliśmy u…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · На согласный и на -o",
    "title":"<em>z panem Nowakiem</em>, но <em>z panią Nowak</em>",
    "paras":[
      "Мужская фамилия на согласный склоняется как обычное существительное мужского рода: Nowak → <b>Nowaka, Nowakowi, Nowakiem, Nowaku</b>. С титулом: <b>pana Nowaka, panu Nowakowi, z panem Nowakiem, o panu Nowaku</b>. Так же Kowal → Kowala, Wróbel → Wróbla.",
      "А женская фамилия на согласный не склоняется вовсе: <b>pani Nowak, do pani Nowak, z panią Nowak, o pani Nowak</b>. Падеж виден только по слову pani — сама фамилия стоит камнем. И тут русский подсказывает верно: мы тоже говорим «с Анной Новак», а не «с Новакой».",
      "Фамилии на <b>-o</b> склоняются по женскому образцу, даже если носит их мужчина: Kościuszko → <b>Kościuszki, Kościuszce, Kościuszkę, z Kościuszką</b>. Отсюда <b>ulica Kościuszki</b> и <b>pomnik Kościuszki</b> — родительный, хотя герой был мужчиной. Так же Moniuszko → Moniuszki, Fredro → Fredry.",
      "Фамилии на <b>-a</b> идут туда же: Zaręba → <b>Zaręby, Zarębie, Zarębą</b>; Wajda → <b>Wajdy</b>. Форма мужская, склонение женское — это не ошибка, а норма."
    ],
    "audio":"Мужская фамилия на согласный склоняется как обычное существительное мужского рода: Nowak — Nowaka, Nowakowi, Nowakiem, Nowaku. С титулом: pana Nowaka, panu Nowakowi, z panem Nowakiem, o panu Nowaku. Так же Kowal — Kowala, Wróbel — Wróbla. А женская фамилия на согласный не склоняется вовсе: pani Nowak, do pani Nowak, z panią Nowak, o pani Nowak. Падеж виден только по слову pani, сама фамилия стоит камнем. И тут русский подсказывает верно: мы тоже говорим «с Анной Новак», а не «с Новакой». Фамилии на -o склоняются по женскому образцу, даже если носит их мужчина: Kościuszko — Kościuszki, Kościuszce, Kościuszkę, z Kościuszką. Отсюда ulica Kościuszki и pomnik Kościuszki, родительный, хотя герой был мужчиной. Так же Moniuszko — Moniuszki, Fredro — Fredry. Фамилии на -a идут туда же: Zaręba — Zaręby, Zarębie, Zarębą; Wajda — Wajdy. Форма мужская, склонение женское, и это не ошибка, а норма.",
    "table":{"rows":[
      ["pan Nowak → pana Nowaka <button class=\"play\" data-say=\"pan Nowak, pana Nowaka\">🔊</button>","мужская — склоняется"],
      ["z panem Nowakiem · o panu Nowaku","творительный · предложный"],
      ["pani Nowak → z panią Nowak <button class=\"play\" data-say=\"pani Nowak, z panią Nowak\">🔊</button>","женская — не склоняется"],
      ["Kościuszko → Kościuszki","на -o — по женскому образцу"],
      ["ulica Kościuszki · pomnik Kościuszki","улица · памятник Костюшко"],
      ["Wajda → Wajdy · Zaręba → Zaręby","на -a — тоже по женскому"]
    ],"star":2},
    "examples":[
      {"ru":"Я разговаривала с паном Новаком о ремонте.","en":"Rozmawiałam <b>z panem Nowakiem</b> o remoncie.","say":"Rozmawiałam z panem Nowakiem o remoncie."},
      {"ru":"Я разговаривала с пани Новак о ремонте.","en":"Rozmawiałam <b>z panią Nowak</b> o remoncie.","gloss":"женская фамилия не меняется","say":"Rozmawiałam z panią Nowak o remoncie."},
      {"ru":"Письмо для пана Новака.","en":"List <b>do pana Nowaka</b>.","say":"List do pana Nowaka."},
      {"ru":"Мы живём на улице Костюшко.","en":"Mieszkamy <b>na ulicy Kościuszki</b>.","gloss":"родительный от Kościuszko","say":"Mieszkamy na ulicy Kościuszki."},
      {"ru":"Это фильм Вайды.","en":"To film <b>Wajdy</b>.","say":"To film Wajdy."}
    ],
    "mistakes":[
      {"wrong":"z panią Nowakową","right":"<b>z panią Nowak</b>","why":"Форма Nowakowa — старая «фамилия жены»; сегодня женская фамилия на согласный просто не склоняется."},
      {"wrong":"ulica Kościuszko","right":"ulica <b>Kościuszki</b>","why":"Фамилия на -o идёт по женскому образцу: родительный Kościuszki."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> фамилия женская, на согласный.",
       "q":"«с пани Новак» —","opts":["z panią Nowak","z panią Nowaką","z panią Nowakiem"],"answer":0,
       "explain":"Женская фамилия на согласный не склоняется: <b>z panią Nowak</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> с кем? — мужчина.",
       "q":"«с паном Новаком» —","opts":["z panem Nowak","z panem Nowakiem","z pana Nowaka"],"answer":1,
       "explain":"Мужская фамилия склоняется как существительное: <b>Nowakiem</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> фамилия на -o.",
       "q":"«улица Костюшко» —","opts":["ulica Kościuszko","ulica Kościuszki","ulica Kościuszką"],"answer":1,
       "explain":"Родительный по женскому образцу: <b>Kościuszki</b>."}
    ]
   },
   {
    "eyebrow":"Правило 3 · Имена и семьи",
    "title":"<em>dwóch Marków</em> и <em>państwo Nowakowie</em>",
    "paras":[
      "Имена склоняются всегда и без оговорок: Marek → <b>Marka, Markowi, z Markiem, o Marku</b>; Anna → <b>Anny, Annie, Annę, z Anną</b>; Piotr → <b>Piotra, Piotrowi, z Piotrem</b>.",
      "Множественное от имени бывает нужно чаще, чем кажется: <b>W dziale mamy dwóch Marków i trzy Anny.</b> Мужские имена во множественном берут мужско-личные формы — Markowie, Marków; женские идут обычным путём — Anny, Ann.",
      "Семья целиком: <b>państwo Nowakowie</b> — супруги Новак; в косвенных падежах <b>państwa Nowaków</b>: «Byliśmy u <b>państwa Nowaków</b>», «Zaprosiliśmy <b>państwa Nowaków</b>». Если фамилия на -ski, работает вчерашнее прилагательное: <b>państwo Kowalscy → państwa Kowalskich</b>.",
      "И обращение — звательный из A2. Меняется <b>pan → panie</b>, а фамилия остаётся в исходной форме: <b>Panie Nowak!</b>, <b>Panie Kowalski!</b> По имени между коллегами: <b>panie Marku</b>, <b>pani Anno</b>. К женщине с фамилией — просто <b>pani Kowalska</b>."
    ],
    "audio":"Имена склоняются всегда и без оговорок: Marek — Marka, Markowi, z Markiem, o Marku; Anna — Anny, Annie, Annę, z Anną; Piotr — Piotra, Piotrowi, z Piotrem. Множественное от имени бывает нужно чаще, чем кажется: w dziale mamy dwóch Marków i trzy Anny. Мужские имена во множественном берут мужско-личные формы: Markowie, Marków; женские идут обычным путём: Anny, Ann. Семья целиком: państwo Nowakowie — супруги Новак; в косвенных падежах państwa Nowaków. Byliśmy u państwa Nowaków. Zaprosiliśmy państwa Nowaków. Если фамилия на -ski, работает вчерашнее прилагательное: państwo Kowalscy, państwa Kowalskich. И обращение — звательный из A2. Меняется pan на panie, а фамилия остаётся в исходной форме: panie Nowak, panie Kowalski. По имени между коллегами: panie Marku, pani Anno. К женщине с фамилией — просто pani Kowalska.",
    "table":{"rows":[
      ["Marek → Marka · z Markiem <button class=\"play\" data-say=\"Marek, Marka, z Markiem\">🔊</button>","имя склоняется всегда"],
      ["Anna → Anny · z Anną","женское имя"],
      ["dwóch Marków · trzy Anny","множественное от имён"],
      ["państwo Nowakowie → państwa Nowaków <button class=\"play\" data-say=\"państwo Nowakowie, państwa Nowaków\">🔊</button>","супруги · у супругов"],
      ["państwo Kowalscy → państwa Kowalskich","фамилия-прилагательное"],
      ["Panie Marku! · Pani Anno! <button class=\"play\" data-say=\"Panie Marku, pani Anno\">🔊</button>","обращение по имени"]
    ],"star":3},
    "examples":[
      {"ru":"Мы пригласили Новаков на новоселье.","en":"Zaprosiliśmy <b>państwa Nowaków</b> na parapetówkę.","say":"Zaprosiliśmy państwa Nowaków na parapetówkę."},
      {"ru":"В отделе у нас два Марека.","en":"W dziale mamy <b>dwóch Marków</b>.","gloss":"мужское имя во множественном","say":"W dziale mamy dwóch Marków."},
      {"ru":"Я отдала текст Мареку.","en":"Oddałam tekst <b>Markowi</b>.","say":"Oddałam tekst Markowi."},
      {"ru":"Пан Марек, у вас есть минутка?","en":"<b>Panie Marku</b>, ma pan chwilę?","gloss":"обращение по имени — фамильярнее, но нормально между коллегами","say":"Panie Marku, ma pan chwilę?"},
      {"ru":"Пан Новак, это ваш конверт.","en":"<b>Panie Nowak</b>, to pana koperta.","say":"Panie Nowak, to pana koperta."}
    ],
    "mistakes":[
      {"wrong":"Zaprosiliśmy państwo Nowak.","right":"Zaprosiliśmy <b>państwa Nowaków</b>.","why":"В винительном меняются оба слова: państwa Nowaków."},
      {"wrong":"Panie Nowaku!","right":"<b>Panie Nowak!</b>","why":"В обращении фамилия остаётся в исходной форме, звательный берёт только слово pan."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> кого пригласили?",
       "q":"«Мы пригласили Новаков» —","opts":["Zaprosiliśmy państwo Nowak","Zaprosiliśmy państwa Nowaków","Zaprosiliśmy państwa Nowakowie"],"answer":1,
       "explain":"Винительный от państwo Nowakowie — <b>państwa Nowaków</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> обращение к мужчине по фамилии.",
       "q":"«Пан Новак!» —","opts":["Panie Nowaku!","Panie Nowak!","Pan Nowaku!"],"answer":1,
       "explain":"Звательный берёт только pan: <b>panie Nowak</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Я отдала текст Мареку»</b>","answer":"Oddałam tekst Markowi"}
    ]
   },
   {
    "eyebrow":"Правило 4 · География",
    "title":"<em>w Krakowie, w Białymstoku, w Zakopanem</em>",
    "paras":[
      "Большинство городов — обычные существительные мужского рода: Kraków → <b>do Krakowa, w Krakowie</b>; Gdańsk → <b>w Gdańsku</b>; Wrocław → <b>we Wrocławiu</b>; Poznań → <b>w Poznaniu</b>; Lublin → <b>w Lublinie</b>.",
      "Białystok — это склеенные «белый» и «склон», и склоняются обе половины: <b>do Białegostoku, w Białymstoku, z Białegostoku</b>. Так же ведут себя двусловные названия: Biała Podlaska → <b>w Białej Podlaskiej</b>, Nowy Sącz → <b>w Nowym Sączu</b>.",
      "Zakopane — прилагательное среднего рода, и у него особая форма предложного: <b>do Zakopanego</b>, но <b>w Zakopanem</b>. Не w Zakopanym: у географических названий сохранилось старое окончание <b>-em</b>, и по этой букве поляк сразу слышит, свой ты или нет.",
      "Названия во множественном берут -ach: Katowice → <b>w Katowicach</b>, Kielce → <b>w Kielcach</b>, Gliwice → <b>w Gliwicach</b>. И направления: <b>nad morze / nad morzem</b>, <b>w góry / w górach</b>, <b>na Mazury / na Mazurach</b> — куда с винительным, где с творительным или предложным."
    ],
    "audio":"Большинство городов — обычные существительные мужского рода: Kraków — do Krakowa, w Krakowie; Gdańsk — w Gdańsku; Wrocław — we Wrocławiu; Poznań — w Poznaniu; Lublin — w Lublinie. Białystok — это склеенные «белый» и «склон», и склоняются обе половины: do Białegostoku, w Białymstoku, z Białegostoku. Так же ведут себя двусловные названия: Biała Podlaska — w Białej Podlaskiej, Nowy Sącz — w Nowym Sączu. Zakopane — прилагательное среднего рода, и у него особая форма предложного: do Zakopanego, но w Zakopanem. Не w Zakopanym: у географических названий сохранилось старое окончание -em, и по этой букве поляк сразу слышит, свой ты или нет. Названия во множественном берут -ach: Katowice — w Katowicach, Kielce — w Kielcach, Gliwice — w Gliwicach. И направления: nad morze и nad morzem, w góry и w górach, na Mazury и na Mazurach — куда с винительным, где с творительным или предложным.",
    "table":{"rows":[
      ["Kraków → w Krakowie <button class=\"play\" data-say=\"Kraków, w Krakowie\">🔊</button>","обычный мужской род"],
      ["Wrocław → we Wrocławiu · Poznań → w Poznaniu","то же самое"],
      ["Białystok → w Białymstoku <button class=\"play\" data-say=\"Białystok, w Białymstoku\">🔊</button>","склоняются обе части"],
      ["Zakopane → w Zakopanem <button class=\"play\" data-say=\"Zakopane, w Zakopanem\">🔊</button>","особая форма на -em"],
      ["Katowice → w Katowicach","множественное — -ach"],
      ["nad morze / nad morzem · w góry / w górach","куда · где"]
    ],"star":3},
    "examples":[
      {"ru":"Мы едем в Закопане на выходные.","en":"Jedziemy <b>do Zakopanego</b> na weekend.","gloss":"куда — родительный","say":"Jedziemy do Zakopanego na weekend."},
      {"ru":"В Закопане уже лежит снег.","en":"<b>W Zakopanem</b> leży już śnieg.","gloss":"где — особая форма -em","say":"W Zakopanem leży już śnieg."},
      {"ru":"Её родители живут в Белостоке.","en":"Jej rodzice mieszkają <b>w Białymstoku</b>.","say":"Jej rodzice mieszkają w Białymstoku."},
      {"ru":"Летом мы поедем на море.","en":"Latem pojedziemy <b>nad morze</b>.","say":"Latem pojedziemy nad morze."},
      {"ru":"Совещание будет в Катовице.","en":"Zebranie będzie <b>w Katowicach</b>.","say":"Zebranie będzie w Katowicach."}
    ],
    "mistakes":[
      {"wrong":"w Zakopanym","right":"<b>w Zakopanem</b>","why":"У названия сохранилась старая форма предложного на -em."},
      {"wrong":"w Białystoku","right":"<b>w Białymstoku</b>","why":"Первая часть — прилагательное «белый», она склоняется тоже."}
    ],
    "mnemonic":"🗺 w Krakowie · w Białymstoku · w Zakopanem. Одна буква -em — и ты звучишь как местный.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> где? — особая форма.",
       "q":"«в Закопане» —","opts":["w Zakopanym","w Zakopanem","w Zakopane"],"answer":1,
       "explain":"Географическая форма предложного: <b>w Zakopanem</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> склоняются обе части.",
       "q":"«в Белостоке» —","opts":["w Białystoku","w Białymstoku","w Białegostoku"],"answer":1,
       "explain":"Предложный обеих частей: <b>w Białymstoku</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Jedziemy do Zakopanego.","sub":"мы едем в Закопане","want":"Jedziemy do Zakopanego."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Утро в издательстве: конверты, автор и планы на выходные. Тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"E","name":"Ewa","side":"left","en":"Anno, ta koperta jest do pana Kowalskiego czy do pani Nowak?","ru":"Анна, этот конверт пану Ковальскому или пани Новак?",
      "words":[["do pana Kowalskiego","пану Ковальскому"],["do pani Nowak","пани Новак"]]},
     {"who":"A","name":"Anna","side":"right","en":"Do pani Nowak. Z panem Kowalskim rozmawiałam wczoraj.","ru":"Пани Новак. С паном Ковальским я говорила вчера.",
      "words":[["z panem Kowalskim","с паном Ковальским"]]},
     {"who":"E","name":"Ewa","side":"left","en":"A tekst od pana Nowaka już jest?","ru":"А текст от пана Новака уже есть?",
      "words":[["od pana Nowaka","от пана Новака"]]},
     {"who":"A","name":"Anna","side":"right","en":"Jeszcze nie. To ten autor z Białegostoku.","ru":"Ещё нет. Это тот автор из Белостока.",
      "words":[["z Białegostoku","из Белостока"]]},
     {"who":"E","name":"Ewa","side":"left","en":"Zadzwoń do niego. Panie Nowak, prosimy o tekst — i po sprawie.","ru":"Позвони ему. «Пан Новак, просим текст» — и дело сделано.",
      "words":[["Panie Nowak","пан Новак — обращение"]]},
     {"who":"A","name":"Anna","side":"right","en":"Dobrze. A w piątek nas nie będzie — jedziemy do Zakopanego.","ru":"Хорошо. А в пятницу нас не будет — едем в Закопане.",
      "words":[["do Zakopanego","в Закопане"]]},
     {"who":"E","name":"Ewa","side":"left","en":"W Zakopanem w marcu jest jeszcze śnieg.","ru":"В Закопане в марте ещё лежит снег.",
      "words":[["W Zakopanem","в Закопане"]]},
     {"who":"A","name":"Anna","side":"right","en":"Wiem. Marek już mówi o górach od tygodnia.","ru":"Знаю. Марек уже неделю говорит о горах.",
      "words":[["o górach","о горах"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — у подъезда.",
   "lines":[
     {"who":"A","en":"Kto mieszka nad państwem Nowakami?","ru":"Кто живёт над Новаками?"},
     {"who":"B","en":"Państwo Kowalscy. Byliśmy u nich w sobotę.","ru":"Ковальские. Мы были у них в субботу."},
     {"who":"A","en":"Rozmawiałeś z panią Kowalską o remoncie?","ru":"Ты говорил с пани Ковальской о ремонте?"},
     {"who":"B","en":"Z panem Kowalskim. Pani Nowak też pytała.","ru":"С паном Ковальским. Пани Новак тоже спрашивала."},
     {"who":"A","en":"Czyli cała ulica Kościuszki już wie.","ru":"Значит, вся улица Костюшко уже в курсе."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — фамилии, обращения и карта Польши.",
   "items":[
     {"en":"pan Kowalski → pana Kowalskiego","ru":"пан Ковальский → пана Ковальского","ex":"List do pana Kowalskiego."},
     {"en":"pani Kowalska → z panią Kowalską","ru":"пани Ковальская → с пани Ковальской","ex":"Rozmawiam z panią Kowalską."},
     {"en":"pan Nowak → z panem Nowakiem","ru":"пан Новак → с паном Новаком","ex":"Byłem u pana Nowaka."},
     {"en":"pani Nowak (nieodmienne)","ru":"пани Новак (не склоняется)","ex":"Piszę do pani Nowak."},
     {"en":"państwo Nowakowie → państwa Nowaków","ru":"супруги Новак → Новаков","ex":"Zaprosiliśmy państwa Nowaków."},
     {"en":"państwo Kowalscy → państwa Kowalskich","ru":"Ковальские → Ковальских","ex":"Byliśmy u państwa Kowalskich."},
     {"en":"Kościuszko → ulica Kościuszki","ru":"Костюшко → улица Костюшко","ex":"Mieszkamy na ulicy Kościuszki."},
     {"en":"Panie Marku! · Pani Anno!","ru":"пан Марек! · пани Анна!","ex":"Panie Marku, ma pan chwilę?"},
     {"en":"Kraków → w Krakowie","ru":"Краков → в Кракове","ex":"Anna pracuje w Krakowie."},
     {"en":"Białystok → w Białymstoku","ru":"Белосток → в Белостоке","ex":"Jej rodzice mieszkają w Białymstoku."},
     {"en":"Zakopane → w Zakopanem","ru":"Закопане → в Закопане","ex":"W Zakopanem leży śnieg."},
     {"en":"nad morze / nad morzem","ru":"на море (куда) / на море (где)","ex":"Latem jedziemy nad morze."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу.",
   "pairs":[["do pana Kowalskiego","пану Ковальскому"],["z panią Nowak","с пани Новак"],["u państwa Nowaków","у Новаков"],["w Zakopanem","в Закопане"]]
 },
 "reading":{
   "intro":"Прочитай вслух — тут одни имена собственные, и все в падежах.",
   "title":"Koperty i góry",
   "sentences":["W poniedziałek Anna dostała trzy koperty.","Pierwsza była do pana Kowalskiego, druga do pani Nowak.","Z panem Kowalskim Anna rozmawiała już w piątek.","Pani Nowak jeszcze nie odpowiedziała na mail.","Trzecia koperta była od autora z Białegostoku.","Ten autor nazywa się Nowak i mieszka niedaleko ulicy Kościuszki.","W czwartek Anna i Marek jadą do Zakopanego.","W Zakopanem w marcu leży jeszcze śnieg.","Państwo Kowalscy prosili o pamiątkę z gór.","Wiosną do Krakowa przyjadą rodzice Anny."],
   "translation":"В понедельник Анне принесли три конверта. Первый был пану Ковальскому, второй — пани Новак. С паном Ковальским Анна говорила ещё в пятницу. Пани Новак пока не ответила на письмо. Третий конверт был от автора из Белостока. Этого автора зовут Новак, и живёт он недалеко от улицы Костюшко. В четверг Анна и Марек едут в Закопане. В Закопане в марте ещё лежит снег. Ковальские попросили сувенир из гор. Весной в Краков приедут родители Анны."
 },
 "quiz":{
   "intro":"Пять вопросов — и имена собственные перестают быть неприкосновенными.",
   "items":[
     {"q":"1. «письмо пану Ковальскому» —","opts":["list do pana Kowalski","list do pana Kowalskiego","list do pan Kowalski"],"answer":1,
      "explain":"Оба слова в родительном: <b>do pana Kowalskiego</b>."},
     {"q":"2. «с пани Новак» —","opts":["z panią Nowak","z panią Nowaką","z pani Nowak"],"answer":0,
      "explain":"Женская фамилия на согласный не склоняется."},
     {"q":"3. «Мы были у Новаков» —","opts":["Byliśmy u państwo Nowak","Byliśmy u państwa Nowaków","Byliśmy u państwa Nowakowie"],"answer":1,
      "explain":"Родительный — <b>u państwa Nowaków</b>."},
     {"q":"4. «в Закопане» —","opts":["w Zakopanym","w Zakopane","w Zakopanem"],"answer":2,
      "explain":"Особая географическая форма: <b>w Zakopanem</b>."},
     {"q":"5. «в Белостоке» —","opts":["w Białymstoku","w Białystoku","w Białostoku"],"answer":0,
      "explain":"Склоняются обе части названия: <b>w Białymstoku</b>."}
   ]
 },
 "essay":{
   "intro":"Немного собственных имён вокруг тебя — соседи, коллеги и город на карте.",
   "prompt":"Напиши 4–5 фраз: как зовут твоих соседей или коллег, к кому ты обращаешься по имени, а к кому по фамилии, и куда ты поедешь на выходные.",
   "hint":"Опора: Moi sąsiedzi to państwo… · Rozmawiam z panem… / z panią… · Piszę do pani… · Jadę do… · W… jest… 💛",
   "example":"Nade mną mieszkają państwo Nowakowie, a pod nami pani Kowalska. Z panem Nowakiem rozmawiam o samochodach, a z panią Kowalską o pogodzie. W pracy mówię do szefowej pani Anno, bo tak jest prościej. W piątek jadę do Zakopanego, a w Zakopanem podobno leży jeszcze śnieg. Latem pojedziemy nad morze, jeśli będzie czas."
 }
},
"11": {
 "day":11,"week":"02",
 "themeRu":"Зависит от, влияет на",
 "themeEn":"Trudna rekcja",
 "intro":"Глагол тянет за собой падеж, и чаще всего тот же самый, что в русском: <b>dziękuję za pomoc</b>, <b>unikam hałasu</b>, <b>wszystko zależy od ciebie</b>. Но есть десяток глаголов, на которых родной язык подводит именно потому, что он родной: <b>polegać na</b> просит предложный, <b>przyzwyczaić się do</b> — родительный. Разложим их сегодня на две честные кучки: подарки и ловушки.",
 "introAudio":"Глагол тянет за собой падеж, и чаще всего тот же самый, что в русском: dziękuję za pomoc, unikam hałasu, wszystko zależy od ciebie. Но есть десяток глаголов, на которых родной язык подводит именно потому, что он родной: polegać na просит предложный, przyzwyczaić się do — родительный. Разложим их сегодня на две честные кучки: подарки и ловушки.",
 "goals":[
   "Пользоваться подарками: <b>zależeć od, wpływać na, dziękować za, unikać</b>",
   "Не спотыкаться на <b>polegać na kimś</b> и <b>przyzwyczaić się do czegoś</b>",
   "Ставить винительный там, где русский просит предложный: <b>pytać o, dbać o</b>",
   "Держать родительный при <b>szukać, potrzebować, używać, słuchać</b>"
 ],
 "learned":[
   "Воспользовался(лась) подарками: zależeć od, wpływać na, dziękować za, unikać",
   "Не споткнулся(лась) на polegać na kimś и przyzwyczaić się do czegoś",
   "Поставил(а) винительный там, где русский просит предложный: pytać o, dbać o",
   "Удержал(а) родительный при szukać, potrzebować, używać, słuchać"
 ],
 "review":{
   "intro":"Вчерашние фамилии и позавчерашний глагол — короткая разминка, и идём к управлению.",
   "introAudio":"Вчерашние фамилии и позавчерашний глагол — короткая разминка, и идём к управлению.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> женская фамилия на согласный.",
      "q":"«письмо пани Новак» —","opts":["list do pani Nowakowej","list do pani Nowak","list do pani Nowaki"],"answer":1,
      "explain":"Женская фамилия на согласный не склоняется: <b>do pani Nowak</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> где? — особая форма.",
      "q":"«в Закопане» —","opts":["w Zakopanem","w Zakopanym","w Zakopanego"],"answer":0,
      "explain":"Географический предложный на -em: <b>w Zakopanem</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> следи за глаголом.",
      "q":"«Несколько коллег ждало» —","opts":["Kilku kolegów czekali","Kilku kolegów czekało","Kilka kolegów czekało"],"answer":1,
      "explain":"Мужско-личное kilku плюс глагол в среднем роде: <b>czekało</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Мы были у Ковальских»</b>","answer":"Byliśmy u państwa Kowalskich"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Подарки",
    "title":"<em>zależeć od, wpływać na, dziękować za</em>",
    "paras":[
      "Начнём с хорошего: у большинства глаголов управление совпадает с русским до буквы, и запоминать нужно только польский предлог. <b>zależeć od</b> + родительный — «зависеть от»: <b>To zależy od ciebie.</b> <b>wpływać na</b> + винительный — «влиять на»: <b>To wpływa na moją pracę.</b>",
      "Дальше по списку: <b>uczestniczyć w</b> + предложный — «участвовать в» (<b>uczestniczyć w zebraniu</b>); <b>unikać</b> + родительный — «избегать» (<b>unikam hałasu</b>); <b>dziękować za</b> + винительный — «благодарить за» (<b>dziękuję za pomoc</b>); <b>wierzyć w</b> + винительный — «верить в» (<b>wierzę w ciebie</b>).",
      "Сюда же <b>interesować się</b> + творительный — «интересоваться» (<b>interesuję się historią</b>) и <b>zajmować się</b> + творительный — «заниматься» (<b>zajmuję się prozą</b>). Оба совпадают с русским полностью, вплоть до падежа.",
      "Такие глаголы нужно просто отметить галочкой и не тратить на них внимание. Всё внимание — следующим трём правилам: там русский язык будет тянуть тебя не туда."
    ],
    "audio":"Начнём с хорошего: у большинства глаголов управление совпадает с русским до буквы, и запоминать нужно только польский предлог. Zależeć od плюс родительный — зависеть от: to zależy od ciebie. Wpływać na плюс винительный — влиять на: to wpływa na moją pracę. Дальше по списку: uczestniczyć w плюс предложный — участвовать в, uczestniczyć w zebraniu; unikać плюс родительный — избегать, unikam hałasu; dziękować za плюс винительный — благодарить за, dziękuję za pomoc; wierzyć w плюс винительный — верить в, wierzę w ciebie. Сюда же interesować się плюс творительный — интересоваться, interesuję się historią; и zajmować się плюс творительный — заниматься, zajmuję się prozą. Оба совпадают с русским полностью, вплоть до падежа. Такие глаголы нужно просто отметить галочкой и не тратить на них внимание. Всё внимание следующим трём правилам: там русский язык будет тянуть тебя не туда.",
    "table":{"rows":[
      ["zależeć od + род. <button class=\"play\" data-say=\"To zależy od ciebie.\">🔊</button>","зависеть от — совпадает"],
      ["wpływać na + вин. <button class=\"play\" data-say=\"To wpływa na moją pracę.\">🔊</button>","влиять на — совпадает"],
      ["uczestniczyć w + предл.","участвовать в — совпадает"],
      ["unikać + род. · dziękować za + вин.","избегать · благодарить за"],
      ["wierzyć w + вин.","верить в"],
      ["interesować się · zajmować się + твор.","интересоваться · заниматься"]
    ],"star":0},
    "examples":[
      {"ru":"Всё зависит от редактора.","en":"Wszystko <b>zależy od</b> redaktora.","gloss":"od + родительный","say":"Wszystko zależy od redaktora."},
      {"ru":"Это влияет на мою работу.","en":"To <b>wpływa na</b> moją pracę.","gloss":"na + винительный","say":"To wpływa na moją pracę."},
      {"ru":"Анна участвует в совещании.","en":"Anna <b>uczestniczy w</b> zebraniu.","say":"Anna uczestniczy w zebraniu."},
      {"ru":"Я избегаю шума после работы.","en":"<b>Unikam hałasu</b> po pracy.","say":"Unikam hałasu po pracy."},
      {"ru":"Спасибо за помощь.","en":"<b>Dziękuję za</b> pomoc.","say":"Dziękuję za pomoc."}
    ],
    "mistakes":[
      {"wrong":"To zależy z ciebie.","right":"To <b>zależy od ciebie</b>.","why":"Zależeć сочетается только с od; предлог z тут не работает."},
      {"wrong":"To wpływa w moją pracę.","right":"To <b>wpływa na</b> moją pracę.","why":"Как и в русском «влиять на» — предлог na с винительным."}
    ],
    "mnemonic":"✅ Подарки: zależeć od · wpływać na · uczestniczyć w · unikać · dziękować za. Как по-русски, только по-польски.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> «зависит от».",
       "q":"«Всё зависит от тебя» —","opts":["Wszystko zależy od ciebie","Wszystko zależy na tobie","Wszystko zależy z ciebie"],"answer":0,
       "explain":"Zależeć od + родительный: <b>od ciebie</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> «влияет на».",
       "q":"«Это влияет на мою работу» —","opts":["To wpływa w mojej pracy","To wpływa na moją pracę","To wpływa mojej pracy"],"answer":1,
       "explain":"Wpływać na + винительный: <b>na moją pracę</b>."},
      {"type":"type","howto":"Напиши «Спасибо за помощь». Диакритику можно не ставить.",
       "q":"Спасибо за помощь.","accept":["dziękuję za pomoc","dziekuje za pomoc"],"placeholder":"Dziękuję…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Ловушки первого ряда",
    "title":"<em>polegać na</em>, <em>przyzwyczaić się do</em>",
    "paras":[
      "Теперь глаголы, где русский падеж уводит в сторону. <b>polegać na</b> + предложный — «полагаться на»: по-русски «на кого?», по-польски «на ком?» — <b>Możesz na mnie polegać. Polegam na Ewie.</b> У этого глагола есть и второе значение — «заключаться в»: <b>Problem polega na tym, że…</b>",
      "<b>przyzwyczaić się do</b> + родительный — «привыкнуть к»: русский дательный, польский родительный. <b>Przyzwyczaiłam się do nowej pracy. Trudno przyzwyczaić się do hałasu.</b> Рядом стоит <b>przygotować się do</b> + родительный — «готовиться к»: <b>przygotować się do egzaminu</b>.",
      "<b>dążyć do</b> + родительный — «стремиться к»: <b>dążyć do celu</b>. И <b>korzystać z</b> + родительный — «пользоваться», где русский требует творительного: <b>korzystam ze słownika</b>, <b>korzystać z okazji</b> («воспользоваться случаем»).",
      "Запоминать такие пары лучше не списком, а фразой целиком: <b>Możesz na mnie polegać</b>, <b>Przyzwyczaiłem się do tego</b>, <b>Korzystam ze słownika</b>. Готовая фраза встаёт в голове прочнее, чем правило."
    ],
    "audio":"Теперь глаголы, где русский падеж уводит в сторону. Polegać na плюс предложный — полагаться на: по-русски на кого, по-польски на ком. Możesz na mnie polegać. Polegam na Ewie. У этого глагола есть и второе значение, заключаться в: problem polega na tym, że. Przyzwyczaić się do плюс родительный — привыкнуть к: русский дательный, польский родительный. Przyzwyczaiłam się do nowej pracy. Trudno przyzwyczaić się do hałasu. Рядом стоит przygotować się do плюс родительный — готовиться к: przygotować się do egzaminu. Dążyć do плюс родительный — стремиться к: dążyć do celu. И korzystać z плюс родительный — пользоваться, где русский требует творительного: korzystam ze słownika, korzystać z okazji, воспользоваться случаем. Запоминать такие пары лучше не списком, а фразой целиком: możesz na mnie polegać, przyzwyczaiłem się do tego, korzystam ze słownika. Готовая фраза встаёт в голове прочнее, чем правило.",
    "table":{"rows":[
      ["polegać na + предл. <button class=\"play\" data-say=\"Możesz na mnie polegać.\">🔊</button>","полагаться на кого — «на ком»"],
      ["Problem polega na tym, że…","проблема в том, что…"],
      ["przyzwyczaić się do + род. <button class=\"play\" data-say=\"Przyzwyczaiłem się do tego.\">🔊</button>","привыкнуть к — «к чего»"],
      ["przygotować się do + род.","готовиться к"],
      ["dążyć do + род.","стремиться к"],
      ["korzystać z + род. <button class=\"play\" data-say=\"Korzystam ze słownika.\">🔊</button>","пользоваться — «из чего»"]
    ],"star":2},
    "examples":[
      {"ru":"На Эву всегда можно положиться.","en":"Na Ewie zawsze można <b>polegać</b>.","gloss":"polegać na + предложный","say":"Na Ewie zawsze można polegać."},
      {"ru":"Проблема в том, что не хватает времени.","en":"Problem <b>polega na tym, że</b> brakuje czasu.","say":"Problem polega na tym, że brakuje czasu."},
      {"ru":"Я привыкла к новой работе.","en":"<b>Przyzwyczaiłam się do</b> nowej pracy.","gloss":"do + родительный","say":"Przyzwyczaiłam się do nowej pracy."},
      {"ru":"Я пользуюсь словарём каждый день.","en":"<b>Korzystam ze</b> słownika codziennie.","say":"Korzystam ze słownika codziennie."},
      {"ru":"Мы готовимся к юбилею.","en":"<b>Przygotowujemy się do</b> jubileuszu.","say":"Przygotowujemy się do jubileuszu."}
    ],
    "mistakes":[
      {"wrong":"Możesz polegać mnie.","right":"Możesz <b>polegać na mnie</b>.","why":"Предлог na обязателен, и после него предложный, а не винительный."},
      {"wrong":"Przyzwyczaiłem się nowej pracy.","right":"Przyzwyczaiłem się <b>do</b> nowej pracy.","why":"Русский дательный «к работе» превращается в польское do + родительный."}
    ],
    "mnemonic":"⚠️ polegać NA kimś · przyzwyczaić się DO czegoś · korzystać Z czegoś. Три предлога, которых русский не подскажет.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> «положиться на».",
       "q":"«На меня можно положиться» —","opts":["Można na mnie polegać","Można mnie polegać","Można na mnie liczyć się"],"answer":0,
       "explain":"Polegać na + предложный: <b>na mnie polegać</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> «привыкнуть к».",
       "q":"«Я привык к этому» —","opts":["Przyzwyczaiłem się temu","Przyzwyczaiłem się do tego","Przyzwyczaiłem się z tym"],"answer":1,
       "explain":"Do + родительный: <b>do tego</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> «пользуюсь словарём».",
       "q":"«Я пользуюсь словарём» —","opts":["Korzystam słownikiem","Korzystam ze słownika","Korzystam na słowniku"],"answer":1,
       "explain":"Korzystać z + родительный: <b>ze słownika</b>."}
    ]
   },
   {
    "eyebrow":"Правило 3 · Винительный вместо предложного",
    "title":"<em>pytać o, dbać o, martwić się o</em>",
    "paras":[
      "Целая группа глаголов там, где русский говорит «о ком, о чём», требует польского <b>o</b> с винительным. Русское «о» плюс предложный превращается в польское o плюс винительный — и это самая частая ошибка в живой речи.",
      "<b>pytać o</b> + винительный — «спрашивать о»: <b>Pytała o termin.</b> <b>prosić o</b> + винительный — «просить о»: <b>Proszę o cierpliwość.</b> <b>dbać o</b> + винительный — «заботиться о»: <b>Dbam o zdrowie.</b> <b>martwić się o</b> + винительный — «беспокоиться о»: <b>Martwię się o rodziców.</b>",
      "Сюда же безличный оборот, который слышишь в каждом разговоре: <b>chodzi o</b> + винительный — «речь идёт о»: <b>Chodzi o pieniądze. O co chodzi?</b> Русское «в чём дело?» и польское «o co chodzi?» — почти одно и то же движение мысли.",
      "И знакомое с A2 <b>czekać na</b> + винительный — «ждать»: <b>czekam na autobus, czekam na ciebie</b>. Тут русский вообще обходится без предлога, поэтому na легко теряется."
    ],
    "audio":"Целая группа глаголов там, где русский говорит о ком, о чём, требует польского o с винительным. Русское «о» плюс предложный превращается в польское o плюс винительный, и это самая частая ошибка в живой речи. Pytać o плюс винительный — спрашивать о: pytała o termin. Prosić o плюс винительный — просить о: proszę o cierpliwość. Dbać o плюс винительный — заботиться о: dbam o zdrowie. Martwić się o плюс винительный — беспокоиться о: martwię się o rodziców. Сюда же безличный оборот, который слышишь в каждом разговоре: chodzi o плюс винительный — речь идёт о: chodzi o pieniądze; o co chodzi. Русское «в чём дело» и польское o co chodzi — почти одно и то же движение мысли. И знакомое с A2 czekać na плюс винительный — ждать: czekam na autobus, czekam na ciebie. Тут русский вообще обходится без предлога, поэтому na легко теряется.",
    "table":{"rows":[
      ["pytać o + вин. <button class=\"play\" data-say=\"Pytała o termin.\">🔊</button>","спрашивать о"],
      ["prosić o + вин.","просить о"],
      ["dbać o + вин. <button class=\"play\" data-say=\"Dbam o zdrowie.\">🔊</button>","заботиться о"],
      ["martwić się o + вин.","беспокоиться о"],
      ["chodzi o + вин. · O co chodzi? <button class=\"play\" data-say=\"O co chodzi?\">🔊</button>","речь идёт о · в чём дело?"],
      ["czekać na + вин.","ждать кого-что"]
    ],"star":4},
    "examples":[
      {"ru":"Эва спрашивала о сроке.","en":"Ewa <b>pytała o</b> termin.","gloss":"o + винительный","say":"Ewa pytała o termin."},
      {"ru":"Прошу немного терпения.","en":"<b>Proszę o</b> odrobinę cierpliwości.","say":"Proszę o odrobinę cierpliwości."},
      {"ru":"Она заботится о родителях.","en":"<b>Dba o</b> rodziców.","say":"Dba o rodziców."},
      {"ru":"Я беспокоюсь о сроке, а не о деньгах.","en":"<b>Martwię się o</b> termin, a nie o pieniądze.","say":"Martwię się o termin, a nie o pieniądze."},
      {"ru":"В чём дело? — Речь о новой книге.","en":"<b>O co chodzi?</b> — <b>Chodzi o</b> nową książkę.","say":"O co chodzi? Chodzi o nową książkę."}
    ],
    "mistakes":[
      {"wrong":"Pytała o terminie.","right":"Pytała <b>o termin</b>.","why":"После o тут винительный, хотя русское «о сроке» стоит в предложном."},
      {"wrong":"Martwię się o rodzicach.","right":"Martwię się <b>o rodziców</b>.","why":"Та же ловушка: беспокоюсь о ком — o kogo, винительный."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> o просит винительный.",
       "q":"«Она спрашивала о сроке» —","opts":["Pytała o terminie","Pytała o termin","Pytała na termin"],"answer":1,
       "explain":"Pytać o + винительный: <b>o termin</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> та же ловушка.",
       "q":"«Я беспокоюсь о родителях» —","opts":["Martwię się o rodzicach","Martwię się rodzicami","Martwię się o rodziców"],"answer":2,
       "explain":"Martwić się o + винительный: <b>o rodziców</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Dbam o zdrowie.","sub":"я забочусь о здоровье","want":"Dbam o zdrowie."}
    ]
   },
   {
    "eyebrow":"Правило 4 · Родительный-магнит",
    "title":"<em>szukać, potrzebować, używać, słuchać</em>",
    "paras":[
      "Есть глаголы, которые притягивают родительный без всякого предлога. <b>szukać</b> — «искать» (<b>szukam kluczy</b>), <b>potrzebować</b> — «нуждаться, мне нужно» (<b>potrzebuję pomocy</b>), <b>używać</b> — «использовать» (<b>używam słownika</b>), <b>słuchać</b> — «слушать» (<b>słucham muzyki</b>), <b>uczyć się</b> — «учить» (<b>uczę się polskiego</b>).",
      "Половина из них совпадает с русским: «искать ключей», «слушать музыки» звучит по-старинному, но узнаваемо. А <b>potrzebować</b> и <b>używać</b> подводят: мы говорим «нуждаться в помощи» и «использовать словарь», то есть предложный и винительный.",
      "И большое правило из A2, которое здесь снова в силе: <b>отрицание переводит винительный в родительный</b>. <b>Znam tę książkę</b> → <b>Nie znam tej książki</b>. <b>Mam czas</b> → <b>Nie mam czasu</b>. <b>Widzę Marka</b> → <b>Nie widzę Marka</b>.",
      "Отдельная пара на десерт: <b>zapomnieć o</b> + предложный — «забыть о чём-то» (<b>zapomniałam o zebraniu</b>), но <b>zapomnieć</b> + родительный — «забыть взять» (<b>zapomniałam kluczy</b>). Один глагол, два падежа, два смысла."
    ],
    "audio":"Есть глаголы, которые притягивают родительный без всякого предлога. Szukać — искать, szukam kluczy; potrzebować — нуждаться, мне нужно, potrzebuję pomocy; używać — использовать, używam słownika; słuchać — слушать, słucham muzyki; uczyć się — учить, uczę się polskiego. Половина из них совпадает с русским: искать ключей, слушать музыки звучит по-старинному, но узнаваемо. А potrzebować и używać подводят: мы говорим «нуждаться в помощи» и «использовать словарь», то есть предложный и винительный. И большое правило из A2, которое здесь снова в силе: отрицание переводит винительный в родительный. Znam tę książkę — nie znam tej książki. Mam czas — nie mam czasu. Widzę Marka — nie widzę Marka. Отдельная пара на десерт: zapomnieć o плюс предложный — забыть о чём-то, zapomniałam o zebraniu; но zapomnieć плюс родительный — забыть взять, zapomniałam kluczy. Один глагол, два падежа, два смысла.",
    "table":{"rows":[
      ["szukać + род. <button class=\"play\" data-say=\"Szukam kluczy.\">🔊</button>","искать"],
      ["potrzebować + род.","мне нужно"],
      ["używać + род. · słuchać + род.","использовать · слушать"],
      ["uczyć się + род.","учить что-то"],
      ["Nie mam czasu. · Nie znam tej książki. <button class=\"play\" data-say=\"Nie znam tej książki.\">🔊</button>","отрицание тянет родительный"],
      ["zapomnieć o zebraniu ≠ zapomnieć kluczy","забыть о чём ≠ забыть взять"]
    ],"star":4},
    "examples":[
      {"ru":"Мне нужна твоя помощь.","en":"<b>Potrzebuję</b> twojej pomocy.","gloss":"potrzebować + родительный","say":"Potrzebuję twojej pomocy."},
      {"ru":"Я пользуюсь этим словарём каждый день.","en":"<b>Używam</b> tego słownika codziennie.","say":"Używam tego słownika codziennie."},
      {"ru":"По вечерам я слушаю музыку.","en":"Wieczorami <b>słucham muzyki</b>.","say":"Wieczorami słucham muzyki."},
      {"ru":"Я не знаю этой книги.","en":"<b>Nie znam tej książki.</b>","gloss":"отрицание — родительный","say":"Nie znam tej książki."},
      {"ru":"Я забыла о совещании и забыла ключи.","en":"<b>Zapomniałam o zebraniu</b> i <b>zapomniałam kluczy</b>.","say":"Zapomniałam o zebraniu i zapomniałam kluczy."}
    ],
    "mistakes":[
      {"wrong":"Potrzebuję pomoc.","right":"<b>Potrzebuję pomocy.</b>","why":"Глагол притягивает родительный, хотя русское «нужна помощь» стоит в именительном."},
      {"wrong":"Nie mam czas.","right":"<b>Nie mam czasu.</b>","why":"Отрицание переводит винительный в родительный — правило из A2."}
    ],
    "mnemonic":"🧲 szukać · potrzebować · używać · słuchać · uczyć się — все тянут родительный. И отрицание тянет туда же.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> глагол тянет родительный.",
       "q":"«Мне нужна помощь» —","opts":["Potrzebuję pomoc","Potrzebuję pomocy","Potrzebuję o pomoc"],"answer":1,
       "explain":"Potrzebować + родительный: <b>pomocy</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> есть отрицание.",
       "q":"«Я не знаю этой книги» —","opts":["Nie znam tę książkę","Nie znam tej książki","Nie znam ta książka"],"answer":1,
       "explain":"Отрицание переводит винительный в родительный: <b>tej książki</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Я пользуюсь словарём каждый день»</b>","answer":"Używam słownika codziennie"}
    ]
   }
 ],
 "dialogue":{
   "intro":"Рабочий разговор: срок горит, а текста нет. Тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"E","name":"Ewa","side":"left","en":"Pani Nowak pytała o termin. Co mam odpowiedzieć?","ru":"Пани Новак спрашивала о сроке. Что мне ответить?",
      "words":[["pytała o termin","спрашивала о сроке"]]},
     {"who":"A","name":"Anna","side":"right","en":"Że wszystko zależy od autora z Białegostoku.","ru":"Что всё зависит от автора из Белостока.",
      "words":[["zależy od","зависит от"]]},
     {"who":"E","name":"Ewa","side":"left","en":"To wpływa na cały numer, wiesz?","ru":"Это влияет на весь номер, понимаешь?",
      "words":[["wpływa na","влияет на"]]},
     {"who":"A","name":"Anna","side":"right","en":"Wiem. Ale możesz na mnie polegać — zadzwonię jeszcze dziś.","ru":"Знаю. Но на меня можно положиться — позвоню ещё сегодня.",
      "words":[["polegać na mnie","положиться на меня"]]},
     {"who":"E","name":"Ewa","side":"left","en":"Problem polega na tym, że on nie odbiera telefonu.","ru":"Проблема в том, что он не берёт трубку.",
      "words":[["polega na tym, że","заключается в том, что"]]},
     {"who":"A","name":"Anna","side":"right","en":"Wtedy napiszę mail. Proszę o dwa dni cierpliwości.","ru":"Тогда напишу письмо. Прошу два дня терпения.",
      "words":[["Proszę o","прошу о"]]},
     {"who":"E","name":"Ewa","side":"left","en":"Nie martwię się o ciebie, martwię się o kalendarz.","ru":"Я беспокоюсь не о тебе, я беспокоюсь о календаре.",
      "words":[["martwię się o","беспокоюсь о"]]},
     {"who":"A","name":"Anna","side":"right","en":"Powoli przyzwyczaiłam się do tego tempa. Potrzebuję tylko kawy.","ru":"Я потихоньку привыкла к этому темпу. Мне нужен только кофе.",
      "words":[["przyzwyczaiłam się do","привыкла к"],["Potrzebuję","мне нужно"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — вечером дома.",
   "lines":[
     {"who":"A","en":"O co chodzi? Wyglądasz na zmęczoną.","ru":"В чём дело? Ты выглядишь усталой."},
     {"who":"B","en":"Chodzi o termin. Wszystko zależy od jednego autora.","ru":"Дело в сроке. Всё зависит от одного автора."},
     {"who":"A","en":"Możesz na mnie polegać, jeśli trzeba pomóc.","ru":"На меня можно положиться, если нужна помощь."},
     {"who":"B","en":"Dziękuję za to. Na razie potrzebuję tylko snu.","ru":"Спасибо за это. Пока мне нужен только сон."},
     {"who":"A","en":"To dbaj o siebie, a nie tylko o numer.","ru":"Тогда заботься о себе, а не только о номере."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — глаголы вместе с их падежами. Учи их парами, а не поодиночке.",
   "items":[
     {"en":"zależeć od kogoś","ru":"зависеть от кого-то (+ родительный)","ex":"Wszystko zależy od ciebie."},
     {"en":"wpływać na coś","ru":"влиять на что-то (+ винительный)","ex":"To wpływa na moją pracę."},
     {"en":"polegać na kimś","ru":"полагаться на кого-то (+ предложный)","ex":"Możesz na mnie polegać."},
     {"en":"polegać na tym, że…","ru":"заключаться в том, что…","ex":"Problem polega na tym, że nie ma czasu."},
     {"en":"przyzwyczaić się do czegoś","ru":"привыкнуть к чему-то (+ родительный)","ex":"Przyzwyczaiłam się do nowej pracy."},
     {"en":"korzystać z czegoś","ru":"пользоваться чем-то (+ родительный)","ex":"Korzystam ze słownika."},
     {"en":"dążyć do celu","ru":"стремиться к цели (+ родительный)","ex":"Dążymy do jednego celu."},
     {"en":"pytać o coś · prosić o coś","ru":"спрашивать о · просить о (+ винительный)","ex":"Pytała o termin."},
     {"en":"dbać o coś · martwić się o kogoś","ru":"заботиться о · беспокоиться о (+ винительный)","ex":"Dbam o zdrowie."},
     {"en":"chodzi o coś · O co chodzi?","ru":"речь идёт о (+ винительный) · в чём дело?","ex":"Chodzi o pieniądze."},
     {"en":"potrzebować czegoś · używać czegoś","ru":"нуждаться · использовать (+ родительный)","ex":"Potrzebuję pomocy."},
     {"en":"unikać czegoś · uczestniczyć w czymś","ru":"избегать (+ родительный) · участвовать в (+ предложный)","ex":"Unikam hałasu."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую связку к её переводу.",
   "pairs":[["polegać na kimś","полагаться на кого-то"],["przyzwyczaić się do czegoś","привыкнуть к чему-то"],["martwić się o kogoś","беспокоиться о ком-то"],["korzystać ze słownika","пользоваться словарём"]]
 },
 "reading":{
   "intro":"Прочитай вслух и следи за предлогами — сегодня они главные.",
   "title":"Wszystko zależy od autora",
   "sentences":["W środę pani Nowak pytała o termin nowego numeru.","Anna odpowiedziała, że wszystko zależy od jednego autora.","Ten autor nie odbiera telefonu i nie odpisuje na maile.","Problem polega na tym, że tekst ma dziesięć stron.","Ewa martwi się o kalendarz, a nie o samą Annę.","Anna prosi o dwa dni cierpliwości.","Powoli przyzwyczaiła się do tempa w wydawnictwie.","W pracy korzysta ze słownika i unika długich zebrań.","Wieczorem Marek mówi, że może na nią polegać w każdej sprawie.","Anna dziękuje mu za to i idzie spać."],
   "translation":"В среду пани Новак спрашивала о сроке нового номера. Анна ответила, что всё зависит от одного автора. Этот автор не берёт трубку и не отвечает на письма. Проблема в том, что текст на десять страниц. Эва беспокоится о календаре, а не о самой Анне. Анна просит два дня терпения. Она потихоньку привыкла к темпу в издательстве. На работе она пользуется словарём и избегает долгих совещаний. Вечером Марек говорит, что на неё можно положиться в любом деле. Анна благодарит его за это и идёт спать."
 },
 "quiz":{
   "intro":"Пять вопросов — и управление перестаёт быть лотереей.",
   "items":[
     {"q":"1. «Всё зависит от тебя» —","opts":["Wszystko zależy na tobie","Wszystko zależy od ciebie","Wszystko zależy z ciebie"],"answer":1,
      "explain":"Zależeć od + родительный."},
     {"q":"2. «На меня можно положиться» —","opts":["Można na mnie polegać","Można mnie polegać","Można na mnie polegać się"],"answer":0,
      "explain":"Polegać na + предложный: <b>na mnie</b>."},
     {"q":"3. «Я привык к этому» —","opts":["Przyzwyczaiłem się temu","Przyzwyczaiłem się do tego","Przyzwyczaiłem się z tym"],"answer":1,
      "explain":"Przyzwyczaić się do + родительный."},
     {"q":"4. «Она спрашивала о сроке» —","opts":["Pytała o terminie","Pytała o termin","Pytała na termin"],"answer":1,
      "explain":"Pytać o + винительный."},
     {"q":"5. «Мне нужна помощь» —","opts":["Potrzebuję pomoc","Potrzebuję o pomoc","Potrzebuję pomocy"],"answer":2,
      "explain":"Potrzebować + родительный: <b>pomocy</b>."}
   ]
 },
 "essay":{
   "intro":"Расскажи о своём рабочем или учебном дне так, чтобы в каждой фразе стоял глагол с предлогом.",
   "prompt":"Напиши 4–5 фраз: от чего зависит твой день, на кого ты можешь положиться, к чему ты привык(ла), о чём беспокоишься и что тебе нужно.",
   "hint":"Опора: Wszystko zależy od… · Mogę polegać na… · Przyzwyczaiłem się do… · Martwię się o… · Potrzebuję… 💛",
   "example":"Mój dzień zależy od tego, o której zaczynam pracę. Mogę polegać na dwóch osobach z zespołu i to mi wystarczy. Przyzwyczaiłem się do hałasu w biurze, choć na początku było ciężko. Najbardziej martwię się o terminy, a nie o same zadania. Wieczorem potrzebuję tylko ciszy i nie korzystam z telefonu."
 }
},
"12": {
 "day":12,"week":"02",
 "themeRu":"Предлоги с оттенками",
 "themeEn":"Przyimki w niuansach",
 "intro":"Крем <b>dla dzieci</b> и крем <b>do rąk</b> — по-русски оба «для», а по-польски это два разных предлога, и путать их обидно. Предлог — последний слой, который отличает «понятно» от «точно»: смысл не ломается, но фраза сразу выдаёт иностранца. Сегодня возьмём четыре гнезда: время, назначение, причину и направление.",
 "introAudio":"Крем dla dzieci и крем do rąk — по-русски оба «для», а по-польски это два разных предлога, и путать их обидно. Предлог — последний слой, который отличает «понятно» от «точно»: смысл не ломается, но фраза сразу выдаёт иностранца. Сегодня возьмём четыре гнезда: время, назначение, причину и направление.",
 "goals":[
   "Различать время: <b>przez tydzień</b>, <b>w ciągu tygodnia</b>, <b>podczas zebrania</b>",
   "Не путать <b>krem dla dzieci</b> и <b>krem do rąk</b>",
   "Выбирать причину: <b>dzięki</b>, <b>z powodu</b>, <b>przez</b>",
   "Ставить направление и место: <b>na Mazury / na Mazurach</b>, <b>z domu do pracy</b>"
 ],
 "learned":[
   "Различил(а) время: przez tydzień, w ciągu tygodnia, podczas zebrania",
   "Не спутал(а) krem dla dzieci и krem do rąk",
   "Выбрал(а) причину: dzięki, z powodu, przez",
   "Поставил(а) направление и место: na Mazury / na Mazurach, z domu do pracy"
 ],
 "review":{
   "intro":"Вчерашние глаголы с предлогами — самая полезная разминка перед сегодняшним днём. И одно слово из первой недели.",
   "introAudio":"Вчерашние глаголы с предлогами — самая полезная разминка перед сегодняшним днём. И одно слово из первой недели.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> «полагаться на».",
      "q":"«На неё можно положиться» —","opts":["Można na niej polegać","Można na nią polegać","Można ją polegać"],"answer":0,
      "explain":"Polegać na + предложный: <b>na niej</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> o просит винительный.",
      "q":"«Я забочусь о здоровье» —","opts":["Dbam o zdrowiu","Dbam o zdrowie","Dbam zdrowia"],"answer":1,
      "explain":"Dbać o + винительный: <b>o zdrowie</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> отглагольное существительное из дня 1.",
      "q":"«перед выходом» —","opts":["przed wyjściem","przed wyjść","przed wyjścia"],"answer":0,
      "explain":"Przed + творительный от wyjście: <b>przed wyjściem</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Всё зависит от автора»</b>","answer":"Wszystko zależy od autora"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Время",
    "title":"<em>przez tydzień</em> и <em>w ciągu tygodnia</em>",
    "paras":[
      "<b>przez</b> + винительный — «в течение», причём о всём отрезке целиком: <b>Pracowałam nad tym przez tydzień.</b> <b>Padało przez cały dzień.</b> По-русски это чаще всего «всю неделю», «весь день» — действие занимает отрезок полностью.",
      "<b>w ciągu</b> + родительный — «в течение, за» о том, что успевает уложиться внутри отрезка: <b>Odpowiem w ciągu dwóch dni.</b> Сравни: <b>przez dwa dni</b> — я работала над этим два дня подряд; <b>w ciągu dwóch dni</b> — я сделаю это когда-то за эти два дня.",
      "<b>podczas</b> + родительный и <b>w czasie</b> + родительный — «во время»: <b>podczas zebrania</b>, <b>w czasie wakacji</b>. Оба нейтральны, podczas чуть официальнее. И <b>przed</b> + творительный — «перед»: <b>przed zebraniem</b>, <b>przed wyjściem</b> — отглагольные существительные первой недели тут как дома.",
      "Тот же <b>przed</b> + творительный умеет значить «тому назад», но это книжный тон: <b>przed rokiem</b>, <b>przed dwoma laty</b>. В обычном разговоре — <b>rok temu</b>, <b>dwa lata temu</b>. А про будущее говорит <b>za</b> + винительный: <b>za dwa dni</b> — «через два дня»."
    ],
    "audio":"Przez плюс винительный — в течение, причём о всём отрезке целиком: pracowałam nad tym przez tydzień; padało przez cały dzień. По-русски это чаще всего «всю неделю», «весь день»: действие занимает отрезок полностью. W ciągu плюс родительный — в течение, за — о том, что успевает уложиться внутри отрезка: odpowiem w ciągu dwóch dni. Сравни: przez dwa dni — я работала над этим два дня подряд; w ciągu dwóch dni — я сделаю это когда-то за эти два дня. Podczas плюс родительный и w czasie плюс родительный — во время: podczas zebrania, w czasie wakacji. Оба нейтральны, podczas чуть официальнее. И przed плюс творительный — перед: przed zebraniem, przed wyjściem; отглагольные существительные первой недели тут как дома. Тот же przed плюс творительный умеет значить «тому назад», но это книжный тон: przed rokiem, przed dwoma laty. В обычном разговоре — rok temu, dwa lata temu. А про будущее говорит za плюс винительный: za dwa dni, через два дня.",
    "table":{"rows":[
      ["przez tydzień <button class=\"play\" data-say=\"Pracowałam nad tym przez tydzień.\">🔊</button>","всю неделю целиком"],
      ["w ciągu tygodnia <button class=\"play\" data-say=\"Odpowiem w ciągu tygodnia.\">🔊</button>","когда-то за неделю"],
      ["podczas zebrania · w czasie wakacji","во время"],
      ["przed zebraniem · przed wyjściem","перед"],
      ["przed rokiem ≈ rok temu","книжное «год назад»"],
      ["za dwa dni","через два дня"]
    ],"star":1},
    "examples":[
      {"ru":"Я работала над этим текстом всю неделю.","en":"Pracowałam nad tym tekstem <b>przez tydzień</b>.","say":"Pracowałam nad tym tekstem przez tydzień."},
      {"ru":"Отвечу в течение двух дней.","en":"Odpowiem <b>w ciągu dwóch dni</b>.","gloss":"успею когда-то внутри отрезка","say":"Odpowiem w ciągu dwóch dni."},
      {"ru":"Во время совещания все молчали.","en":"<b>Podczas zebrania</b> wszyscy milczeli.","say":"Podczas zebrania wszyscy milczeli."},
      {"ru":"Перед выходом выключи свет.","en":"<b>Przed wyjściem</b> zgaś światło.","gloss":"przed + творительный","say":"Przed wyjściem zgaś światło."},
      {"ru":"Ремонт начнём через два месяца.","en":"Remont zaczniemy <b>za dwa miesiące</b>.","say":"Remont zaczniemy za dwa miesiące."}
    ],
    "mistakes":[
      {"wrong":"Pracowałam nad tym w ciągu tygodnia. (о работе без перерыва)","right":"Pracowałam nad tym <b>przez tydzień</b>.","why":"Przez — весь отрезок целиком, w ciągu — где-то внутри него."},
      {"wrong":"podczas zebraniu","right":"<b>podczas zebrania</b>","why":"Podczas берёт родительный, а не предложный."}
    ],
    "mnemonic":"⏳ przez — весь отрезок · w ciągu — где-то внутри · podczas — во время · za — через.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> действие заняло весь отрезок.",
       "q":"«Дождь шёл весь день» —","opts":["Padało w ciągu dnia","Padało przez cały dzień","Padało podczas dnia"],"answer":1,
       "explain":"Весь отрезок целиком — <b>przez cały dzień</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> уложусь внутри срока.",
       "q":"«Отвечу в течение двух дней» —","opts":["Odpowiem przez dwa dni","Odpowiem w ciągu dwóch dni","Odpowiem podczas dwóch dni"],"answer":1,
       "explain":"Внутри отрезка — <b>w ciągu dwóch dni</b>."},
      {"type":"type","howto":"Напиши «во время совещания». Диакритику можно не ставить.",
       "q":"во время совещания","accept":["podczas zebrania"],"placeholder":"podczas…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Для кого и для чего",
    "title":"<em>krem dla dzieci</em> ≠ <em>krem do rąk</em>",
    "paras":[
      "<b>dla</b> + родительный — «для кого»: получатель, адресат, живой человек. <b>prezent dla mamy</b>, <b>to jest dla ciebie</b>, <b>krem dla dzieci</b> (детский крем — тот, который предназначен детям), <b>książka dla dorosłych</b>.",
      "<b>do</b> + родительный — «для чего»: назначение вещи, то, с чем её используют. <b>krem do rąk</b> (крем для рук), <b>szampon do włosów</b>, <b>płyn do naczyń</b>, <b>woda do picia</b>, <b>filiżanka do kawy</b>, <b>pasta do zębów</b>.",
      "Проверка простая: если после «для» стоит человек — <b>dla</b>; если предмет, часть тела или действие — <b>do</b>. Русское «для» покрывает оба случая, поэтому подсказки от родного языка тут не будет, зато логика прозрачная и запоминается за один день.",
      "Заодно повторим пару из B1, которая живёт по соседству: <b>po</b> + винительный — «за чем-то»: <b>idę po chleb</b>, <b>wracam po klucze</b>; против <b>po</b> + предложный — «после»: <b>po pracy</b>, <b>po obiedzie</b>, <b>po remoncie</b>."
    ],
    "audio":"Dla плюс родительный — для кого: получатель, адресат, живой человек. Prezent dla mamy, to jest dla ciebie, krem dla dzieci — детский крем, тот, который предназначен детям; książka dla dorosłych. Do плюс родительный — для чего: назначение вещи, то, с чем её используют. Krem do rąk, szampon do włosów, płyn do naczyń, woda do picia, filiżanka do kawy, pasta do zębów. Проверка простая: если после «для» стоит человек — dla; если предмет, часть тела или действие — do. Русское «для» покрывает оба случая, поэтому подсказки от родного языка тут не будет, зато логика прозрачная и запоминается за один день. Заодно повторим пару из B1, которая живёт по соседству: po плюс винительный — за чем-то: idę po chleb, wracam po klucze; против po плюс предложный — после: po pracy, po obiedzie, po remoncie.",
    "table":{"rows":[
      ["krem dla dzieci <button class=\"play\" data-say=\"krem dla dzieci\">🔊</button>","детский крем — для кого"],
      ["krem do rąk <button class=\"play\" data-say=\"krem do rąk\">🔊</button>","крем для рук — для чего"],
      ["prezent dla mamy · książka dla dorosłych","адресат"],
      ["szampon do włosów · płyn do naczyń","назначение"],
      ["woda do picia · filiżanka do kawy","для питья · для кофе"],
      ["idę po chleb ≠ po pracy","за хлебом ≠ после работы"]
    ],"star":1},
    "examples":[
      {"ru":"Это подарок для мамы.","en":"To prezent <b>dla mamy</b>.","say":"To prezent dla mamy."},
      {"ru":"Мне нужен крем для рук.","en":"Potrzebuję <b>kremu do rąk</b>.","gloss":"potrzebować + родительный, из вчерашнего дня","say":"Potrzebuję kremu do rąk."},
      {"ru":"Купи ещё средство для посуды.","en":"Kup jeszcze <b>płyn do naczyń</b>.","say":"Kup jeszcze płyn do naczyń."},
      {"ru":"Эта книга для взрослых, а не для детей.","en":"Ta książka jest <b>dla dorosłych</b>, a nie <b>dla dzieci</b>.","say":"Ta książka jest dla dorosłych, a nie dla dzieci."},
      {"ru":"Я иду за хлебом и вернусь после шести.","en":"Idę <b>po chleb</b> i wrócę <b>po szóstej</b>.","say":"Idę po chleb i wrócę po szóstej."}
    ],
    "mistakes":[
      {"wrong":"krem dla rąk","right":"krem <b>do rąk</b>","why":"Руки — не адресат, а назначение: do."},
      {"wrong":"prezent do mamy","right":"prezent <b>dla mamy</b>","why":"Мама — человек-получатель, значит dla."}
    ],
    "mnemonic":"🎁 Человек — dla (prezent dla mamy). Назначение — do (krem do rąk).",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> назначение вещи.",
       "q":"«крем для рук» —","opts":["krem dla rąk","krem do rąk","krem na ręce"],"answer":1,
       "explain":"Назначение — предлог <b>do</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> получатель — человек.",
       "q":"«подарок для мамы» —","opts":["prezent do mamy","prezent dla mamy","prezent na mamę"],"answer":1,
       "explain":"Живой получатель — предлог <b>dla</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> смотри, за чем идёшь.",
       "q":"«Я иду за хлебом» —","opts":["Idę po chlebie","Idę po chleb","Idę za chlebem"],"answer":1,
       "explain":"Po + винительный значит «за чем-то»: <b>po chleb</b>."}
    ]
   },
   {
    "eyebrow":"Правило 3 · Причина",
    "title":"<em>dzięki</em>, <em>z powodu</em>, <em>przez</em>",
    "paras":[
      "<b>dzięki</b> + дательный — «благодаря», всегда о хорошем: <b>dzięki tobie</b>, <b>dzięki pomocy Ewy</b>, <b>dzięki nowej pracy</b>. Обрати внимание на падеж: именно дательный, хотя русское «благодаря» тоже дательный — тут нам повезло.",
      "<b>z powodu</b> + родительный — «из-за», нейтрально или о неприятном: <b>z powodu deszczu</b>, <b>z powodu choroby</b>, <b>z powodu remontu</b>. Это самый безопасный вариант в любом тексте, от разговора до письма.",
      "<b>przez</b> + винительный — разговорное «из-за» с оттенком упрёка: <b>przez ciebie</b>, <b>przez ten deszcz</b>, <b>przez korki</b>. Тот же самый przez, что был во времени — какой смысл, решает контекст: <b>przez tydzień</b> (в течение) и <b>przez ciebie</b> (из-за).",
      "Проверь себя на паре: <b>Dzięki tobie zdążyłam</b> — «благодаря тебе я успела», хорошо. <b>Przez ciebie się spóźniłam</b> — «из-за тебя я опоздала», упрёк. Одна и та же связь двух людей, а тон противоположный."
    ],
    "audio":"Dzięki плюс дательный — благодаря, всегда о хорошем: dzięki tobie, dzięki pomocy Ewy, dzięki nowej pracy. Обрати внимание на падеж: именно дательный, хотя русское «благодаря» тоже дательный — тут нам повезло. Z powodu плюс родительный — из-за, нейтрально или о неприятном: z powodu deszczu, z powodu choroby, z powodu remontu. Это самый безопасный вариант в любом тексте, от разговора до письма. Przez плюс винительный — разговорное «из-за» с оттенком упрёка: przez ciebie, przez ten deszcz, przez korki. Тот же самый przez, что был во времени; какой смысл, решает контекст: przez tydzień в течение и przez ciebie из-за. Проверь себя на паре: dzięki tobie zdążyłam — благодаря тебе я успела, хорошо. Przez ciebie się spóźniłam — из-за тебя я опоздала, упрёк. Одна и та же связь двух людей, а тон противоположный.",
    "table":{"rows":[
      ["dzięki tobie <button class=\"play\" data-say=\"Dzięki tobie zdążyłam.\">🔊</button>","благодаря — только о хорошем"],
      ["dzięki pomocy Ewy · dzięki rodzicom","дательный падеж"],
      ["z powodu deszczu <button class=\"play\" data-say=\"Nie przyszedł z powodu deszczu.\">🔊</button>","из-за — нейтрально"],
      ["z powodu choroby · z powodu remontu","официальный тон"],
      ["przez ciebie <button class=\"play\" data-say=\"Przez ciebie się spóźniłam.\">🔊</button>","из-за — разговорный упрёк"],
      ["przez korki · przez ten deszcz","из-за пробок · из-за дождя"]
    ],"star":0},
    "examples":[
      {"ru":"Благодаря тебе я успела.","en":"<b>Dzięki tobie</b> zdążyłam.","gloss":"dzięki + дательный","say":"Dzięki tobie zdążyłam."},
      {"ru":"Он не пришёл из-за дождя.","en":"Nie przyszedł <b>z powodu deszczu</b>.","say":"Nie przyszedł z powodu deszczu."},
      {"ru":"Совещание перенесли из-за ремонта.","en":"Zebranie przełożono <b>z powodu remontu</b>.","say":"Zebranie przełożono z powodu remontu."},
      {"ru":"Из-за пробок я опоздала на полчаса.","en":"<b>Przez korki</b> spóźniłam się pół godziny.","say":"Przez korki spóźniłam się pół godziny."},
      {"ru":"Благодаря новой работе у неё больше времени.","en":"<b>Dzięki nowej pracy</b> ma więcej czasu.","say":"Dzięki nowej pracy ma więcej czasu."}
    ],
    "mistakes":[
      {"wrong":"dzięki deszczu nie przyszedł","right":"<b>z powodu deszczu</b> nie przyszedł","why":"Dzięki — только о хорошем; дождь тут помешал."},
      {"wrong":"dzięki ciebie","right":"<b>dzięki tobie</b>","why":"Dzięki берёт дательный: tobie, mnie, rodzicom."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> дождь помешал.",
       "q":"«Он не пришёл из-за дождя» —","opts":["Nie przyszedł dzięki deszczowi","Nie przyszedł z powodu deszczu","Nie przyszedł dla deszczu"],"answer":1,
       "explain":"О помехе — <b>z powodu</b> + родительный."},
      {"type":"choice","howto":"<b>Что делать:</b> благодарность и дательный.",
       "q":"«Благодаря тебе» —","opts":["dzięki ciebie","dzięki tobie","dzięki ty"],"answer":1,
       "explain":"Dzięki + дательный: <b>tobie</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Dzięki tobie zdążyłam.","sub":"благодаря тебе я успела","want":"Dzięki tobie zdążyłam."}
    ]
   },
   {
    "eyebrow":"Правило 4 · Куда и где",
    "title":"<em>na Mazury</em> — <em>na Mazurach</em>",
    "paras":[
      "Пара «куда — где» повторяется у каждого предлога. С <b>na</b>: <b>jadę na Mazury</b> (винительный) — <b>jestem na Mazurach</b> (предложный); <b>idę na zebranie</b> — <b>jestem na zebraniu</b>; <b>na pocztę</b> — <b>na poczcie</b>. Na любит регионы, острова, мероприятия и открытые места.",
      "С <b>do</b> и <b>w</b>: <b>do Krakowa</b> (родительный) — <b>w Krakowie</b> (предложный); <b>do biura</b> — <b>w biurze</b>; <b>do Polski</b> — <b>w Polsce</b>. Do и w любят города, страны и закрытые помещения.",
      "Два похожих каркаса, которые легко смешать: <b>od… do…</b> — про время и людей: <b>od poniedziałku do piątku</b>, <b>od dziewiątej do siedemnastej</b>, <b>list od Ewy do Anny</b>. И <b>z… do…</b> — про пространство «откуда — куда»: <b>z domu do pracy</b>, <b>z Krakowa do Warszawy</b>.",
      "И четыре предлога для точности, которые пригодятся в описаниях: <b>między</b> + творительный — «между» (<b>między nami</b>, <b>między oknem a drzwiami</b>); <b>wśród</b> + родительный — «среди» (<b>wśród gości</b>); <b>wzdłuż</b> + родительный — «вдоль» (<b>wzdłuż rzeki</b>); <b>obok</b> + родительный — «рядом с» (<b>obok domu</b>)."
    ],
    "audio":"Пара «куда — где» повторяется у каждого предлога. С na: jadę na Mazury, винительный, и jestem na Mazurach, предложный; idę na zebranie и jestem na zebraniu; na pocztę и na poczcie. Na любит регионы, острова, мероприятия и открытые места. С do и w: do Krakowa, родительный, и w Krakowie, предложный; do biura и w biurze; do Polski и w Polsce. Do и w любят города, страны и закрытые помещения. Два похожих каркаса, которые легко смешать: od и do — про время и людей: od poniedziałku do piątku, od dziewiątej do siedemnastej, list od Ewy do Anny. И z и do — про пространство, откуда и куда: z domu do pracy, z Krakowa do Warszawy. И четыре предлога для точности, которые пригодятся в описаниях: między плюс творительный — между: między nami, między oknem a drzwiami; wśród плюс родительный — среди: wśród gości; wzdłuż плюс родительный — вдоль: wzdłuż rzeki; obok плюс родительный — рядом с: obok domu.",
    "table":{"rows":[
      ["jadę na Mazury → jestem na Mazurach <button class=\"play\" data-say=\"Jadę na Mazury. Jestem na Mazurach.\">🔊</button>","куда · где"],
      ["idę na zebranie → jestem na zebraniu","мероприятие"],
      ["do Krakowa → w Krakowie","город"],
      ["od poniedziałku do piątku","время: от и до"],
      ["z domu do pracy <button class=\"play\" data-say=\"z domu do pracy\">🔊</button>","пространство: откуда и куда"],
      ["między · wśród · wzdłuż · obok","между · среди · вдоль · рядом"]
    ],"star":4},
    "examples":[
      {"ru":"Летом мы поедем на Мазуры.","en":"Latem pojedziemy <b>na Mazury</b>.","say":"Latem pojedziemy na Mazury."},
      {"ru":"На Мазурах всегда ветрено.","en":"<b>Na Mazurach</b> zawsze wieje.","say":"Na Mazurach zawsze wieje."},
      {"ru":"Я работаю с понедельника по пятницу.","en":"Pracuję <b>od poniedziałku do piątku</b>.","say":"Pracuję od poniedziałku do piątku."},
      {"ru":"Из дома на работу я иду двадцать минут.","en":"<b>Z domu do pracy</b> idę dwadzieścia minut.","say":"Z domu do pracy idę dwadzieścia minut."},
      {"ru":"Среди гостей были и соседи.","en":"<b>Wśród gości</b> byli też sąsiedzi.","say":"Wśród gości byli też sąsiedzi."}
    ],
    "mistakes":[
      {"wrong":"jadę na Mazurach","right":"jadę <b>na Mazury</b>","why":"Куда — винительный; предложный отвечает только на «где»."},
      {"wrong":"od domu do pracy","right":"<b>z domu</b> do pracy","why":"Про пространство «откуда» — предлог z, а od остаётся времени и людям."}
    ],
    "mnemonic":"🧭 Куда — винительный (na Mazury, do Krakowa). Где — предложный (na Mazurach, w Krakowie). Откуда — z.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вопрос «куда».",
       "q":"«Мы едем на Мазуры» —","opts":["Jedziemy na Mazurach","Jedziemy na Mazury","Jedziemy do Mazur"],"answer":1,
       "explain":"Куда — винительный: <b>na Mazury</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> из пространства в пространство.",
       "q":"«из дома на работу» —","opts":["od domu do pracy","z domu do pracy","z domu na pracę"],"answer":1,
       "explain":"Откуда — z, куда — do: <b>z domu do pracy</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Я работаю с понедельника по пятницу»</b>","answer":"Pracuję od poniedziałku do piątku"}
    ]
   }
 ],
 "dialogue":{
   "intro":"Суббота, список покупок и планы на будущий ремонт. Тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"M","name":"Marek","side":"left","en":"Idę po chleb. Potrzebujesz czegoś ze sklepu?","ru":"Иду за хлебом. Тебе что-нибудь нужно из магазина?",
      "words":[["po chleb","за хлебом"]]},
     {"who":"A","name":"Anna","side":"right","en":"Płyn do naczyń i krem do rąk.","ru":"Средство для посуды и крем для рук.",
      "words":[["płyn do naczyń","средство для посуды"],["krem do rąk","крем для рук"]]},
     {"who":"M","name":"Marek","side":"left","en":"A prezent dla twojej mamy? Rodzice przyjeżdżają wiosną.","ru":"А подарок для твоей мамы? Родители приезжают весной.",
      "words":[["dla twojej mamy","для твоей мамы"]]},
     {"who":"A","name":"Anna","side":"right","en":"Kupimy w ciągu tygodnia. Nie musimy dziś.","ru":"Купим в течение недели. Не обязательно сегодня.",
      "words":[["w ciągu tygodnia","в течение недели"]]},
     {"who":"M","name":"Marek","side":"left","en":"Dobrze. Remont zaczniemy za dwa miesiące, przed ich przyjazdem.","ru":"Хорошо. Ремонт начнём через два месяца, перед их приездом.",
      "words":[["za dwa miesiące","через два месяца"],["przed ich przyjazdem","перед их приездом"]]},
     {"who":"A","name":"Anna","side":"right","en":"Podczas remontu i tak nikogo nie zaprosimy.","ru":"Во время ремонта мы всё равно никого не позовём.",
      "words":[["Podczas remontu","во время ремонта"]]},
     {"who":"M","name":"Marek","side":"left","en":"Dzięki tobie mam w końcu plan, a nie chaos.","ru":"Благодаря тебе у меня наконец план, а не хаос.",
      "words":[["Dzięki tobie","благодаря тебе"]]},
     {"who":"A","name":"Anna","side":"right","en":"A przez ciebie mam listę na trzy strony.","ru":"А из-за тебя у меня список на три страницы.",
      "words":[["przez ciebie","из-за тебя"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — в магазине у полки.",
   "lines":[
     {"who":"A","en":"Szukam kremu do rąk.","ru":"Я ищу крем для рук."},
     {"who":"B","en":"Ten jest dla dzieci, a ten do rąk.","ru":"Этот для детей, а этот для рук."},
     {"who":"A","en":"Biorę oba. I szampon do włosów.","ru":"Беру оба. И шампунь для волос."},
     {"who":"B","en":"Kasa jest obok wyjścia, między pieczywem a kawą.","ru":"Касса рядом с выходом, между хлебом и кофе."},
     {"who":"A","en":"Dziękuję. Wrócę tu w ciągu tygodnia.","ru":"Спасибо. Я вернусь сюда в течение недели."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — предлоги в готовых связках, а не по одному.",
   "items":[
     {"en":"przez tydzień · przez cały dzień","ru":"всю неделю · весь день","ex":"Padało przez cały dzień."},
     {"en":"w ciągu dwóch dni","ru":"в течение двух дней","ex":"Odpowiem w ciągu dwóch dni."},
     {"en":"podczas zebrania · w czasie wakacji","ru":"во время совещания · во время каникул","ex":"Podczas zebrania wszyscy milczeli."},
     {"en":"przed wyjściem · przed rokiem","ru":"перед выходом · год назад (книжное)","ex":"Przed wyjściem zgaś światło."},
     {"en":"za dwa dni","ru":"через два дня","ex":"Remont zaczniemy za dwa miesiące."},
     {"en":"krem dla dzieci","ru":"крем для детей","ex":"To krem dla dzieci."},
     {"en":"krem do rąk · szampon do włosów","ru":"крем для рук · шампунь для волос","ex":"Potrzebuję kremu do rąk."},
     {"en":"płyn do naczyń · woda do picia","ru":"средство для посуды · питьевая вода","ex":"Kup płyn do naczyń."},
     {"en":"dzięki tobie","ru":"благодаря тебе","ex":"Dzięki tobie zdążyłam."},
     {"en":"z powodu deszczu · przez korki","ru":"из-за дождя · из-за пробок","ex":"Nie przyszedł z powodu deszczu."},
     {"en":"na Mazury / na Mazurach","ru":"на Мазуры / на Мазурах","ex":"Latem pojedziemy na Mazury."},
     {"en":"z domu do pracy · od poniedziałku do piątku","ru":"из дома на работу · с понедельника по пятницу","ex":"Pracuję od poniedziałku do piątku."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую связку к её переводу.",
   "pairs":[["krem do rąk","крем для рук"],["prezent dla mamy","подарок для мамы"],["w ciągu tygodnia","в течение недели"],["z powodu deszczu","из-за дождя"]]
 },
 "reading":{
   "intro":"Прочитай вслух — предлоги тут в каждой строке, и каждый со своим оттенком.",
   "title":"Lista na sobotę",
   "sentences":["W sobotę rano Marek idzie po chleb.","Anna prosi go o płyn do naczyń i krem do rąk.","Prezent dla mamy Anny kupią w ciągu tygodnia.","Jej rodzice przyjeżdżają wiosną, więc czasu jest dużo.","Remont zaczną za dwa miesiące, przed ich przyjazdem.","Podczas remontu nie zaproszą nikogo.","W zeszłym roku przez cały maj padało i nic się nie udało.","Tym razem, dzięki liście Marka, wszystko jest po kolei.","Latem pojadą na Mazury, a we wrześniu nad morze.","Z domu do sklepu idą dziesięć minut, wzdłuż rzeki."],
   "translation":"В субботу утром Марек идёт за хлебом. Анна просит его о средстве для посуды и креме для рук. Подарок для мамы Анны они купят в течение недели. Её родители приезжают весной, так что времени много. Ремонт они начнут через два месяца, перед их приездом. Во время ремонта они никого не позовут. В прошлом году весь май шёл дождь, и ничего не вышло. На этот раз, благодаря списку Марека, всё по порядку. Летом они поедут на Мазуры, а в сентябре на море. Из дома до магазина они идут десять минут, вдоль реки."
 },
 "quiz":{
   "intro":"Пять вопросов — и предлоги встают на свои места.",
   "items":[
     {"q":"1. «крем для рук» —","opts":["krem dla rąk","krem do rąk","krem na ręce"],"answer":1,
      "explain":"Назначение вещи — предлог <b>do</b>."},
     {"q":"2. «подарок для мамы» —","opts":["prezent dla mamy","prezent do mamy","prezent na mamę"],"answer":0,
      "explain":"Живой получатель — предлог <b>dla</b>."},
     {"q":"3. «Отвечу в течение двух дней» —","opts":["Odpowiem przez dwa dni","Odpowiem podczas dwóch dni","Odpowiem w ciągu dwóch dni"],"answer":2,
      "explain":"Уложусь внутри отрезка — <b>w ciągu</b>."},
     {"q":"4. «Он не пришёл из-за дождя» —","opts":["Nie przyszedł dzięki deszczowi","Nie przyszedł z powodu deszczu","Nie przyszedł dla deszczu"],"answer":1,
      "explain":"Помеха — <b>z powodu</b> + родительный."},
     {"q":"5. «Мы едем на Мазуры» —","opts":["Jedziemy na Mazurach","Jedziemy do Mazur","Jedziemy na Mazury"],"answer":2,
      "explain":"Куда — винительный: <b>na Mazury</b>."}
   ]
 },
 "essay":{
   "intro":"Напиши свою субботу — с покупками, планами и одной честной причиной.",
   "prompt":"Напиши 4–5 фраз: что ты покупаешь и для кого, что нужно для чего, когда ты что-то сделаешь и из-за чего что-то не вышло.",
   "hint":"Опора: Idę po… · Kupuję prezent dla… · Potrzebuję… do… · W ciągu… · Z powodu… / Dzięki… 💛",
   "example":"W sobotę idę po chleb i po kawę. Kupuję też prezent dla siostry, bo ma urodziny za dwa tygodnie. Potrzebuję jeszcze płynu do naczyń i kremu do rąk. Z powodu deszczu nie poszedłem wczoraj do parku, więc dziś idę na spacer wzdłuż rzeki. Dzięki liście wszystko udało się załatwić w ciągu godziny."
 }
},
"13": {
 "day":13,"week":"02",
 "themeRu":"Мне нравится, мне удалось",
 "themeEn":"Podoba mi się, udało się",
 "intro":"Маленькое слово «мне» работает в польском как мотор: <b>podoba mi się</b>, <b>udało mi się</b>, <b>chce mi się spać</b>, <b>szkoda mi czasu</b>. Русский устроен точно так же — «мне нравится», «мне удалось», «мне жаль», — поэтому сегодня почти всё будет узнаваемым. Разберёмся, где нужно <b>się</b>, где не нужно, и в каком порядке эти коротышки стоят в предложении.",
 "introAudio":"Маленькое слово «мне» работает в польском как мотор: podoba mi się, udało mi się, chce mi się spać, szkoda mi czasu. Русский устроен точно так же — мне нравится, мне удалось, мне жаль — поэтому сегодня почти всё будет узнаваемым. Разберёмся, где нужно się, где не нужно, и в каком порядке эти коротышки стоят в предложении.",
 "goals":[
   "Говорить о впечатлении: <b>podoba mi się</b>, <b>podobają mi się</b>, <b>spodobało mi się</b>",
   "Строить <b>udało mi się</b> + инфинитив и <b>chce mi się</b>",
   "Различать <b>zależy mi na</b> и <b>zależeć od</b>",
   "Ставить <b>mi</b> и <b>się</b> на правильное место в предложении"
 ],
 "learned":[
   "Сказал(а) о впечатлении: podoba mi się, podobają mi się, spodobało mi się",
   "Построил(а) udało mi się + инфинитив и chce mi się",
   "Различил(а) zależy mi na и zależeć od",
   "Поставил(а) mi и się на правильное место в предложении"
 ],
 "review":{
   "intro":"Два вчерашних предлога и один позавчерашний глагол — и переходим к самым частым польским оборотам.",
   "introAudio":"Два вчерашних предлога и один позавчерашний глагол — и переходим к самым частым польским оборотам.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> назначение вещи.",
      "q":"«шампунь для волос» —","opts":["szampon dla włosów","szampon do włosów","szampon na włosy"],"answer":1,
      "explain":"Назначение — предлог <b>do</b>: szampon do włosów."},
     {"type":"choice","howto":"<b>Что делать:</b> благодарим, значит дательный.",
      "q":"«благодаря помощи Эвы» —","opts":["dzięki pomocy Ewy","dzięki pomoc Ewy","z powodu pomocy Ewy"],"answer":0,
      "explain":"Dzięki + дательный, и только о хорошем: <b>dzięki pomocy</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, чего требует глагол.",
      "q":"«Я пользуюсь словарём» —","opts":["Korzystam słownikiem","Korzystam ze słownika","Korzystam na słowniku"],"answer":1,
      "explain":"Korzystać z + родительный: <b>ze słownika</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Отвечу в течение двух дней»</b>","answer":"Odpowiem w ciągu dwóch dni"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Впечатление",
    "title":"<em>podoba mi się</em> — и вся семья",
    "paras":[
      "<b>Podoba mi się</b> — «мне нравится». Устройство точно как в русском: то, что нравится, стоит подлежащим, а человек — в дательном. Значит, глагол согласуется с вещью: <b>Podoba mi się ta książka</b>, но <b>Podobają mi się te zdjęcia</b>. Множественное число легко забыть.",
      "Прошедшее: <b>Spodobała mi się ta praca.</b> Совершенный вид <b>spodobać się</b> говорит о моменте — «понравилось сразу»; несовершенный <b>podobać się</b> — о состоянии: <b>Podobało mi się to miasto przez cały tydzień.</b>",
      "Тонкость, которая отличает B2 от B1: <b>podoba mi się</b> — про впечатление, часто первое, а <b>lubię</b> — про постоянное отношение. <b>Podoba mi się ta książka</b> — я её открыла и мне понравилось. <b>Lubię tę książkę</b> — я знаю её давно и люблю. По-русски мы делаем ровно то же различие между «нравится» и «люблю».",
      "Рядом живут родственники того же устройства: <b>wydaje mi się, że…</b> — «мне кажется» (из B1), <b>śni mi się</b> — «мне снится», <b>nudzi mi się</b> — «мне скучно», <b>spieszy mi się</b> — «я тороплюсь». Во всех — дательный человека и глагол в третьем лице."
    ],
    "audio":"Podoba mi się — мне нравится. Устройство точно как в русском: то, что нравится, стоит подлежащим, а человек в дательном. Значит, глагол согласуется с вещью: podoba mi się ta książka, но podobają mi się te zdjęcia. Множественное число легко забыть. Прошедшее: spodobała mi się ta praca. Совершенный вид spodobać się говорит о моменте, понравилось сразу; несовершенный podobać się — о состоянии: podobało mi się to miasto przez cały tydzień. Тонкость, которая отличает B2 от B1: podoba mi się про впечатление, часто первое, а lubię про постоянное отношение. Podoba mi się ta książka — я её открыла и мне понравилось. Lubię tę książkę — я знаю её давно и люблю. По-русски мы делаем ровно то же различие между «нравится» и «люблю». Рядом живут родственники того же устройства: wydaje mi się, że — мне кажется, из B1; śni mi się — мне снится; nudzi mi się — мне скучно; spieszy mi się — я тороплюсь. Во всех дательный человека и глагол в третьем лице.",
    "table":{"rows":[
      ["Podoba mi się ta książka. <button class=\"play\" data-say=\"Podoba mi się ta książka.\">🔊</button>","единственное число"],
      ["Podobają mi się te zdjęcia. <button class=\"play\" data-say=\"Podobają mi się te zdjęcia.\">🔊</button>","множественное — podobają"],
      ["Spodobała mi się ta praca.","понравилось сразу"],
      ["podoba mi się ≠ lubię","впечатление ≠ постоянная любовь"],
      ["wydaje mi się, że… · śni mi się","мне кажется · мне снится"],
      ["nudzi mi się · spieszy mi się","мне скучно · я тороплюсь"]
    ],"star":1},
    "examples":[
      {"ru":"Мне нравится новая работа.","en":"<b>Podoba mi się</b> nowa praca.","say":"Podoba mi się nowa praca."},
      {"ru":"Мне нравятся эти фотографии.","en":"<b>Podobają mi się</b> te zdjęcia.","gloss":"множественное — podobają","say":"Podobają mi się te zdjęcia."},
      {"ru":"Ей сразу понравился Краков.","en":"Kraków <b>spodobał jej się</b> od razu.","say":"Kraków spodobał jej się od razu."},
      {"ru":"Мне кажется, что этого мало.","en":"<b>Wydaje mi się</b>, że to za mało.","say":"Wydaje mi się, że to za mało."},
      {"ru":"Мне скучно по вечерам.","en":"Wieczorami <b>nudzi mi się</b>.","say":"Wieczorami nudzi mi się."}
    ],
    "mistakes":[
      {"wrong":"Podoba mi się te zdjęcia.","right":"<b>Podobają</b> mi się te zdjęcia.","why":"Глагол согласуется с тем, что нравится: фотографий много."},
      {"wrong":"Podobam tę książkę.","right":"<b>Podoba mi się</b> ta książka.","why":"Человек тут не подлежащее, а дательный: mi."}
    ],
    "mnemonic":"💛 Нравится не тебе — нравится оно тебе: Podoba mi się książka · Podobają mi się zdjęcia.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> смотри, сколько всего нравится.",
       "q":"«Мне нравятся эти фотографии» —","opts":["Podoba mi się te zdjęcia","Podobają mi się te zdjęcia","Podobam te zdjęcia"],"answer":1,
       "explain":"Множественное число: <b>podobają mi się</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> постоянное отношение.",
       "q":"«Я люблю эту книгу» (давно и хорошо знаю) —","opts":["Podoba mi się ta książka","Lubię tę książkę","Podobam tę książkę"],"answer":1,
       "explain":"Постоянное отношение — <b>lubię</b>; podoba mi się про впечатление."},
      {"type":"type","howto":"Напиши «Мне нравится новая работа». Диакритику можно не ставить.",
       "q":"Мне нравится новая работа.","accept":["podoba mi się nowa praca","podoba mi sie nowa praca"],"placeholder":"Podoba mi się…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Удалось и хочется",
    "title":"<em>udało mi się</em>, <em>chce mi się</em>",
    "paras":[
      "<b>Udało mi się</b> + инфинитив — «мне удалось»: <b>Udało mi się skończyć tekst na czas.</b> Отрицание — <b>Nie udało mi się dodzwonić.</b> Форма всегда среднего рода, потому что подлежащего у неё нет: udało, не udał и не udała.",
      "<b>Chce mi się</b> + инфинитив — «мне хочется»: <b>Chce mi się spać. Chce mi się pić.</b> Отрицание <b>nie chce mi się</b> — это уже целое настроение: «мне лень». <b>Nie chce mi się nigdzie iść.</b> Можно и с родительным: <b>Chce mi się herbaty.</b>",
      "<b>Opłaca się</b> — «выгодно, стоит»: <b>Nie opłaca się kupować nowego.</b> <b>Przyda mi się</b> — «мне пригодится»: <b>Ta książka mi się przyda.</b> Оба оборота ходовые и звучат очень по-польски.",
      "Заметь одну вещь: во всех этих оборотах глагол стоит в третьем лице единственного числа и не меняется по лицам. Меняется только маленькое слово: <b>udało mi się / udało ci się / udało nam się</b>. Русский делает то же самое — «мне удалось, тебе удалось, нам удалось»."
    ],
    "audio":"Udało mi się плюс инфинитив — мне удалось: udało mi się skończyć tekst na czas. Отрицание: nie udało mi się dodzwonić. Форма всегда среднего рода, потому что подлежащего у неё нет: udało, не udał и не udała. Chce mi się плюс инфинитив — мне хочется: chce mi się spać, chce mi się pić. Отрицание nie chce mi się — это уже целое настроение, мне лень: nie chce mi się nigdzie iść. Можно и с родительным: chce mi się herbaty. Opłaca się — выгодно, стоит: nie opłaca się kupować nowego. Przyda mi się — мне пригодится: ta książka mi się przyda. Оба оборота ходовые и звучат очень по-польски. Заметь одну вещь: во всех этих оборотах глагол стоит в третьем лице единственного числа и не меняется по лицам. Меняется только маленькое слово: udało mi się, udało ci się, udało nam się. Русский делает то же самое: мне удалось, тебе удалось, нам удалось.",
    "table":{"rows":[
      ["Udało mi się skończyć. <button class=\"play\" data-say=\"Udało mi się skończyć.\">🔊</button>","мне удалось закончить"],
      ["Nie udało mi się dodzwonić.","не удалось дозвониться"],
      ["Chce mi się spać. <button class=\"play\" data-say=\"Chce mi się spać.\">🔊</button>","мне хочется спать"],
      ["Nie chce mi się nigdzie iść.","мне лень куда-то идти"],
      ["Nie opłaca się kupować nowego.","невыгодно покупать новое"],
      ["Ta książka mi się przyda. <button class=\"play\" data-say=\"Ta książka mi się przyda.\">🔊</button>","эта книга мне пригодится"]
    ],"star":0},
    "examples":[
      {"ru":"Мне удалось сдать текст вовремя.","en":"<b>Udało mi się</b> oddać tekst na czas.","gloss":"udało + дательный + инфинитив","say":"Udało mi się oddać tekst na czas."},
      {"ru":"Нам не удалось дозвониться до автора.","en":"<b>Nie udało nam się</b> dodzwonić do autora.","say":"Nie udało nam się dodzwonić do autora."},
      {"ru":"Мне хочется спать, а не считать гостей.","en":"<b>Chce mi się spać</b>, a nie liczyć gości.","say":"Chce mi się spać, a nie liczyć gości."},
      {"ru":"Мне лень идти в магазин.","en":"<b>Nie chce mi się</b> iść do sklepu.","say":"Nie chce mi się iść do sklepu."},
      {"ru":"Этот словарь мне ещё пригодится.","en":"Ten słownik jeszcze <b>mi się przyda</b>.","say":"Ten słownik jeszcze mi się przyda."}
    ],
    "mistakes":[
      {"wrong":"Udałam się skończyć.","right":"<b>Udało mi się</b> skończyć.","why":"Оборот безличный: глагол в среднем роде, человек в дательном."},
      {"wrong":"Chcę mi się spać.","right":"<b>Chce mi się</b> spać.","why":"Глагол в третьем лице: chce, а не chcę."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> оборот безличный.",
       "q":"«Мне удалось закончить» —","opts":["Udałem się skończyć","Udało mi się skończyć","Udałam skończyć"],"answer":1,
       "explain":"Средний род плюс дательный: <b>udało mi się</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> следи за лицом глагола.",
       "q":"«Мне хочется спать» —","opts":["Chcę mi się spać","Chce mi się spać","Chce mnie spać"],"answer":1,
       "explain":"Третье лицо единственного числа: <b>chce mi się</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Мне не удалось дозвониться»</b>","answer":"Nie udało mi się dodzwonić"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Без się",
    "title":"<em>zależy mi na</em>, <em>szkoda mi</em>, <em>wstyd mi</em>",
    "paras":[
      "Часть оборотов обходится вовсе без się, зато дательный в них остаётся. <b>Brakuje mi</b> + родительный — «мне не хватает» (из B1): <b>Brakuje mi czasu.</b> <b>Szkoda mi</b> + родительный — «мне жаль»: <b>Szkoda mi czasu. Szkoda mi jej.</b> <b>Żal mi</b> + родительный — то же самое, но теплее и печальнее: <b>Żal mi go.</b>",
      "Настроения и состояния строятся одинаково: <b>wstyd mi</b> — мне стыдно, <b>smutno mi</b> — мне грустно, <b>przykro mi</b> — мне неприятно (и заодно вежливое «мне жаль» в извинении), <b>zimno mi</b>, <b>gorąco mi</b>, <b>głupio mi</b> — мне неловко.",
      "А теперь важная пара. <b>Zależy mi na</b> + предложный — «мне важно, мне дорого»: <b>Zależy mi na tej pracy. Zależy mi na tobie.</b> Это НЕ то же самое, что вчерашнее <b>zależeć od</b> + родительный — «зависеть от»: <b>To zależy od ciebie</b> («это решаешь ты»).",
      "Сравни две фразы и почувствуй разницу: <b>To zależy od ciebie</b> — «это зависит от тебя, решение твоё». <b>Zależy mi na tobie</b> — «ты мне дорог». Один глагол, два предлога, два совершенно разных разговора."
    ],
    "audio":"Часть оборотов обходится вовсе без się, зато дательный в них остаётся. Brakuje mi плюс родительный — мне не хватает, из B1: brakuje mi czasu. Szkoda mi плюс родительный — мне жаль: szkoda mi czasu, szkoda mi jej. Żal mi плюс родительный — то же самое, но теплее и печальнее: żal mi go. Настроения и состояния строятся одинаково: wstyd mi — мне стыдно; smutno mi — мне грустно; przykro mi — мне неприятно, и заодно вежливое «мне жаль» в извинении; zimno mi, gorąco mi, głupio mi — мне неловко. А теперь важная пара. Zależy mi na плюс предложный — мне важно, мне дорого: zależy mi na tej pracy, zależy mi na tobie. Это не то же самое, что вчерашнее zależeć od плюс родительный — зависеть от: to zależy od ciebie, это решаешь ты. Сравни две фразы и почувствуй разницу: to zależy od ciebie — это зависит от тебя, решение твоё. Zależy mi na tobie — ты мне дорог. Один глагол, два предлога, два совершенно разных разговора.",
    "table":{"rows":[
      ["Brakuje mi czasu. <button class=\"play\" data-say=\"Brakuje mi czasu.\">🔊</button>","мне не хватает времени"],
      ["Szkoda mi czasu. · Żal mi go.","мне жаль времени · мне жаль его"],
      ["wstyd mi · smutno mi · głupio mi","стыдно · грустно · неловко"],
      ["Przykro mi. <button class=\"play\" data-say=\"Przykro mi.\">🔊</button>","мне жаль — вежливая формула"],
      ["Zależy mi na tej pracy. <button class=\"play\" data-say=\"Zależy mi na tej pracy.\">🔊</button>","мне важна эта работа"],
      ["To zależy od ciebie.","это зависит от тебя"]
    ],"star":4},
    "examples":[
      {"ru":"Мне не хватает времени на всё.","en":"<b>Brakuje mi czasu</b> na wszystko.","say":"Brakuje mi czasu na wszystko."},
      {"ru":"Мне жаль тратить на это время.","en":"<b>Szkoda mi</b> na to czasu.","say":"Szkoda mi na to czasu."},
      {"ru":"Мне очень важна эта работа.","en":"Bardzo <b>zależy mi na</b> tej pracy.","gloss":"zależy mi na + предложный","say":"Bardzo zależy mi na tej pracy."},
      {"ru":"Это зависит от тебя, не от меня.","en":"To <b>zależy od ciebie</b>, nie ode mnie.","gloss":"другой оборот — zależeć od","say":"To zależy od ciebie, nie ode mnie."},
      {"ru":"Мне жаль, я не успею.","en":"<b>Przykro mi</b>, nie zdążę.","say":"Przykro mi, nie zdążę."}
    ],
    "mistakes":[
      {"wrong":"Zależy mi od tej pracy.","right":"<b>Zależy mi na</b> tej pracy.","why":"«Мне важно» — только na с предложным; od значит «зависеть от»."},
      {"wrong":"Jestem szkoda czasu.","right":"<b>Szkoda mi czasu.</b>","why":"Оборот безличный: никакого jestem, только дательный."}
    ],
    "mnemonic":"🔀 Zależy mi NA tobie — ты мне дорог. To zależy OD ciebie — решаешь ты.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> «мне важно».",
       "q":"«Мне важна эта работа» —","opts":["Zależy mi od tej pracy","Zależy mi na tej pracy","Zależy mnie ta praca"],"answer":1,
       "explain":"Zależy mi na + предложный: <b>na tej pracy</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> «это решаешь ты».",
       "q":"«Это зависит от тебя» —","opts":["To zależy na tobie","To zależy od ciebie","Zależy mi na tobie"],"answer":1,
       "explain":"Zależeć od + родительный: <b>od ciebie</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> безличный оборот.",
       "q":"«Мне жаль времени» —","opts":["Szkoda mi czasu","Jestem szkoda czasu","Szkodzę czas"],"answer":0,
       "explain":"Дательный плюс родительный: <b>szkoda mi czasu</b>."}
    ]
   },
   {
    "eyebrow":"Правило 4 · Где стоят коротышки",
    "title":"<em>Bardzo mi się podoba</em>",
    "paras":[
      "Маленькие слова <b>się, mi, ci, mu, go</b> не любят краёв предложения. Правило первое: с них не начинают фразу. Не «Się nazywam Anna», а <b>Nazywam się Anna</b>. Не «Mi się podoba», а <b>Podoba mi się</b> — или, если хочется поставить «мне» вперёд, берут ударную форму: <b>Mnie się to nie podoba.</b>",
      "Правило второе: в связке <b>mi</b> стоит перед <b>się</b> — <b>podoba mi się</b>, <b>udało mi się</b>, <b>przyda mi się</b>. Порядок «podoba się mi» звучит неуклюже, хотя и понятно.",
      "Правило третье: коротышки притягиваются к началу предложения — сразу после первого слова или после союза. <b>Bardzo mi się podoba. Wczoraj mi się to śniło. Wiem, że ci się spodoba. Czy ci się podoba?</b> Услышав это несколько раз, ты начнёшь ставить их автоматически.",
      "И правило четвёртое, спасательное: если глагол оказался в конце фразы, <b>się</b> встаёт перед ним, а не после. <b>To mi się nie udało.</b> <b>Nigdy mi się nie nudzi.</b> Русское «мне это не удалось» держит слова в том же порядке — можно просто довериться уху."
    ],
    "audio":"Маленькие слова się, mi, ci, mu, go не любят краёв предложения. Правило первое: с них не начинают фразу. Не «się nazywam Anna», а nazywam się Anna. Не «mi się podoba», а podoba mi się; или, если хочется поставить «мне» вперёд, берут ударную форму: mnie się to nie podoba. Правило второе: в связке mi стоит перед się — podoba mi się, udało mi się, przyda mi się. Порядок «podoba się mi» звучит неуклюже, хотя и понятно. Правило третье: коротышки притягиваются к началу предложения, сразу после первого слова или после союза. Bardzo mi się podoba. Wczoraj mi się to śniło. Wiem, że ci się spodoba. Czy ci się podoba? Услышав это несколько раз, ты начнёшь ставить их автоматически. И правило четвёртое, спасательное: если глагол оказался в конце фразы, się встаёт перед ним, а не после. To mi się nie udało. Nigdy mi się nie nudzi. Русское «мне это не удалось» держит слова в том же порядке, можно просто довериться уху.",
    "table":{"rows":[
      ["Nazywam się Anna. <button class=\"play\" data-say=\"Nazywam się Anna.\">🔊</button>","się не начинает фразу"],
      ["Podoba mi się. · Mnie się to nie podoba.","обычно · с ударением на «мне»"],
      ["podoba mi się, а не podoba się mi","mi перед się"],
      ["Bardzo mi się podoba. <button class=\"play\" data-say=\"Bardzo mi się podoba.\">🔊</button>","после первого слова"],
      ["Wiem, że ci się spodoba.","после союза"],
      ["To mi się nie udało.","się перед глаголом в конце"]
    ],"star":3},
    "examples":[
      {"ru":"Мне очень нравится.","en":"<b>Bardzo mi się podoba.</b>","say":"Bardzo mi się podoba."},
      {"ru":"Тебе нравится?","en":"<b>Czy ci się podoba?</b>","say":"Czy ci się podoba?"},
      {"ru":"Я знаю, что тебе понравится.","en":"Wiem, że <b>ci się spodoba</b>.","gloss":"после союза że","say":"Wiem, że ci się spodoba."},
      {"ru":"А мне это не нравится.","en":"<b>Mnie się to nie podoba.</b>","gloss":"ударная форма mnie в начале","say":"Mnie się to nie podoba."},
      {"ru":"В этот раз мне не удалось.","en":"Tym razem <b>mi się nie udało</b>.","say":"Tym razem mi się nie udało."}
    ],
    "mistakes":[
      {"wrong":"Mi się podoba ta praca.","right":"<b>Podoba mi się</b> ta praca.","why":"Коротышка mi не может открывать фразу; для начала есть ударная форма mnie."},
      {"wrong":"Podoba się mi.","right":"<b>Podoba mi się.</b>","why":"В связке mi всегда идёт перед się."}
    ],
    "mnemonic":"🪶 Коротышки живут в середине: Bardzo mi się podoba · Wiem, że ci się spodoba · To mi się nie udało.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на порядок слов.",
       "q":"«Мне очень нравится» —","opts":["Mi się bardzo podoba","Bardzo mi się podoba","Bardzo podoba się mi"],"answer":1,
       "explain":"Коротышки идут после первого слова: <b>bardzo mi się podoba</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> mi или mnie?",
       "q":"«А мне это не нравится» (с нажимом на «мне») —","opts":["Mi się to nie podoba","Mnie się to nie podoba","Się mi to nie podoba"],"answer":1,
       "explain":"В начале фразы работает ударная форма <b>mnie</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Bardzo mi się podoba.","sub":"мне очень нравится","want":"Bardzo mi się podoba."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Вечер пятницы: текст сдан, впереди выходные. Тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"M","name":"Marek","side":"left","en":"I jak? Udało ci się oddać tekst?","ru":"Ну как? Тебе удалось сдать текст?",
      "words":[["Udało ci się","тебе удалось"]]},
     {"who":"A","name":"Anna","side":"right","en":"Udało mi się. O piętnastej, dwie godziny przed terminem.","ru":"Удалось. В три, за два часа до срока.",
      "words":[["Udało mi się","мне удалось"]]},
     {"who":"M","name":"Marek","side":"left","en":"I jak ci się podoba ta praca po miesiącu?","ru":"И как тебе нравится эта работа через месяц?",
      "words":[["ci się podoba","тебе нравится"]]},
     {"who":"A","name":"Anna","side":"right","en":"Bardzo mi się podoba. Najbardziej podobają mi się ludzie w dziale.","ru":"Очень нравится. Больше всего мне нравятся люди в отделе.",
      "words":[["Bardzo mi się podoba","мне очень нравится"],["podobają mi się","мне нравятся"]]},
     {"who":"M","name":"Marek","side":"left","en":"Widać, że zależy ci na tym miejscu.","ru":"Видно, что тебе важно это место.",
      "words":[["zależy ci na","тебе важно"]]},
     {"who":"A","name":"Anna","side":"right","en":"Zależy. Chociaż brakuje mi czasu na wszystko inne.","ru":"Важно. Хотя мне не хватает времени на всё остальное.",
      "words":[["brakuje mi","мне не хватает"]]},
     {"who":"M","name":"Marek","side":"left","en":"To odpocznij. Nie chce ci się iść do kina?","ru":"Тогда отдохни. Тебе не хочется сходить в кино?",
      "words":[["Nie chce ci się","тебе не хочется"]]},
     {"who":"A","name":"Anna","side":"right","en":"Szczerze? Chce mi się spać. Ale kino mi się przyda.","ru":"Честно? Мне хочется спать. Но кино мне пригодится.",
      "words":[["Chce mi się spać","мне хочется спать"],["mi się przyda","мне пригодится"]]},
     {"who":"M","name":"Marek","side":"left","en":"Wiem, że ci się spodoba. Wiosną i tak nie będzie czasu.","ru":"Знаю, что тебе понравится. Весной всё равно не будет времени.",
      "words":[["ci się spodoba","тебе понравится"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — утро субботы.",
   "lines":[
     {"who":"A","en":"Chce ci się jeszcze spać?","ru":"Тебе ещё хочется спать?"},
     {"who":"B","en":"Trochę. Ale nie chce mi się leżeć.","ru":"Немного. Но лежать мне лень."},
     {"who":"A","en":"To chodź na spacer. Podoba ci się ten park?","ru":"Тогда пойдём гулять. Тебе нравится этот парк?"},
     {"who":"B","en":"Bardzo mi się podoba. Szkoda mi tylko, że jest tak daleko.","ru":"Очень нравится. Жаль только, что он так далеко."},
     {"who":"A","en":"Zależy mi na tym, żebyś odpoczęła.","ru":"Мне важно, чтобы ты отдохнула."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — готовые обороты. Учи их целыми фразами, они так и живут.",
   "items":[
     {"en":"podoba mi się · podobają mi się","ru":"мне нравится · мне нравятся","ex":"Podobają mi się te zdjęcia."},
     {"en":"spodobał / spodobała mi się","ru":"мне понравился / понравилась","ex":"Kraków spodobał mi się od razu."},
     {"en":"wydaje mi się, że…","ru":"мне кажется, что…","ex":"Wydaje mi się, że to za mało."},
     {"en":"udało mi się coś zrobić","ru":"мне удалось (+ инфинитив)","ex":"Udało mi się oddać tekst na czas."},
     {"en":"nie udało mi się","ru":"мне не удалось","ex":"Nie udało mi się dodzwonić."},
     {"en":"chce mi się · nie chce mi się","ru":"мне хочется · мне лень","ex":"Chce mi się spać."},
     {"en":"przyda mi się","ru":"мне пригодится","ex":"Ta książka mi się przyda."},
     {"en":"opłaca się","ru":"выгодно, стоит","ex":"Nie opłaca się kupować nowego."},
     {"en":"nudzi mi się · spieszy mi się","ru":"мне скучно · я тороплюсь","ex":"Wieczorami nudzi mi się."},
     {"en":"brakuje mi · szkoda mi · żal mi","ru":"мне не хватает · мне жаль · мне жаль","ex":"Brakuje mi czasu."},
     {"en":"zależy mi na czymś","ru":"мне важно, мне дорого (+ предложный)","ex":"Zależy mi na tej pracy."},
     {"en":"przykro mi · wstyd mi · smutno mi","ru":"мне жаль · мне стыдно · мне грустно","ex":"Przykro mi, nie zdążę."}
   ]
 },
 "drag":{
   "intro":"Перетащи польский оборот к его переводу.",
   "pairs":[["udało mi się","мне удалось"],["chce mi się spać","мне хочется спать"],["zależy mi na tej pracy","мне важна эта работа"],["przykro mi","мне жаль"]]
 },
 "reading":{
   "intro":"Прочитай вслух — сегодня почти каждая фраза про «мне».",
   "title":"Piątek wieczorem",
   "sentences":["W piątek o piętnastej Annie udało się oddać tekst.","Nie udało jej się dodzwonić do autora, więc napisała mail.","Nowa praca bardzo jej się podoba.","Najbardziej podobają jej się ludzie z jej działu.","Zależy jej na tym miejscu i widać to od pierwszego dnia.","Brakuje jej tylko czasu na wszystko inne.","Wieczorem Marek pyta, czy nie chce jej się iść do kina.","Annie chce się spać, ale mówi, że kino jej się przyda.","Marek jest pewny, że film jej się spodoba.","Wiosną przyjadą rodzice Anny i wtedy czasu nie będzie wcale."],
   "translation":"В пятницу в три Анне удалось сдать текст. Дозвониться до автора ей не удалось, поэтому она написала письмо. Новая работа ей очень нравится. Больше всего ей нравятся люди из её отдела. Ей важно это место, и это видно с первого дня. Не хватает ей только времени на всё остальное. Вечером Марек спрашивает, не хочется ли ей сходить в кино. Анне хочется спать, но она говорит, что кино ей пригодится. Марек уверен, что фильм ей понравится. Весной приедут родители Анны, и тогда времени не будет совсем."
 },
 "quiz":{
   "intro":"Пять вопросов — и дательные обороты у тебя в руках.",
   "items":[
     {"q":"1. «Мне нравятся эти фотографии» —","opts":["Podoba mi się te zdjęcia","Podobają mi się te zdjęcia","Podobam te zdjęcia"],"answer":1,
      "explain":"Глагол согласуется с тем, что нравится: <b>podobają</b>."},
     {"q":"2. «Мне удалось закончить» —","opts":["Udało mi się skończyć","Udałem się skończyć","Udałam skończyć"],"answer":0,
      "explain":"Безличный оборот: <b>udało mi się</b>."},
     {"q":"3. «Мне хочется спать» —","opts":["Chcę mi się spać","Chce mnie spać","Chce mi się spać"],"answer":2,
      "explain":"Третье лицо единственного числа: <b>chce mi się</b>."},
     {"q":"4. «Мне важна эта работа» —","opts":["Zależy mi od tej pracy","Zależy mi na tej pracy","Zależy mnie ta praca"],"answer":1,
      "explain":"Zależy mi na + предложный."},
     {"q":"5. «Мне очень нравится» —","opts":["Mi się bardzo podoba","Bardzo podoba się mi","Bardzo mi się podoba"],"answer":2,
      "explain":"Коротышки идут после первого слова, mi перед się."}
   ]
 },
 "essay":{
   "intro":"Расскажи о своей неделе через «мне» — что понравилось, что удалось и чего не хватило.",
   "prompt":"Напиши 4–5 фраз: что тебе нравится, что удалось на этой неделе, чего тебе не хватает и что для тебя важно.",
   "hint":"Опора: Podoba mi się… · Udało mi się… · Nie udało mi się… · Brakuje mi… · Zależy mi na… 💛",
   "example":"W tym tygodniu bardzo podobała mi się jedna książka o Krakowie. Udało mi się przeczytać ją w trzy wieczory. Nie udało mi się za to zadzwonić do rodziców, i trochę mi wstyd. Brakuje mi czasu na spokojne poranki. Najbardziej zależy mi na tym, żeby nie spieszyć się przez cały dzień."
 }
},
"14": {
 "day":14,"week":"02",
 "themeRu":"Повторение недели 2",
 "themeEn":"Powtórka 2",
 "intro":"Точная вышла неделя: числительные по падежам, фамилии, города, управление глаголов и обороты с «мне». Ничего нового сегодня не будет — соберём всё в один список гостей на будущее новоселье и посмотрим, сколько держится само. Ремонта у Марека ещё нет, а список уже длиннее, чем квартира. 💛",
 "introAudio":"Точная вышла неделя: числительные по падежам, фамилии, города, управление глаголов и обороты с «мне». Ничего нового сегодня не будет — соберём всё в один список гостей на будущее новоселье и посмотрим, сколько держится само. Ремонта у Марека ещё нет, а список уже длиннее, чем квартира.",
 "goals":[
   "Считать людей и годы: <b>pięciu gości przyszło</b>, <b>w dwa tysiące dwudziestym szóstym roku</b>",
   "Склонять имена собственные: <b>u państwa Nowaków</b>, <b>w Zakopanem</b>",
   "Держать управление: <b>polegać na</b>, <b>przyzwyczaić się do</b>, <b>dbać o</b>",
   "Пользоваться оборотами с «мне»: <b>udało mi się</b>, <b>zależy mi na</b>"
 ],
 "learned":[
   "Посчитал(а) людей и годы: pięciu gości przyszło, w dwa tysiące dwudziestym szóstym roku",
   "Просклонял(а) имена собственные: u państwa Nowaków, w Zakopanem",
   "Удержал(а) управление: polegać na, przyzwyczaić się do, dbać o",
   "Воспользовался(лась) оборотами с «мне»: udało mi się, zależy mi na"
 ],
 "review":{
   "intro":"Большая разминка по всей неделе. Не спеши: если где-то запнёшься — это рабочий момент, правило всегда рядом, ниже на странице.",
   "introAudio":"Большая разминка по всей неделе. Не спеши: если где-то запнёшься — это рабочий момент, правило всегда рядом, ниже на странице.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> с кем? — творительный.",
      "q":"«с тремя авторами» —","opts":["z trzema autorami","z trzech autorami","z trzy autorami"],"answer":0,
      "explain":"Творительный тройки — <b>trzema</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> следи за глаголом.",
      "q":"«Пятеро студентов пришло» —","opts":["Pięciu studentów przyszli","Pięciu studentów przyszło","Pięciu studenci przyszli"],"answer":1,
      "explain":"При форме на -u глагол в среднем роде единственного числа: <b>przyszło</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> женская фамилия на согласный.",
      "q":"«с пани Новак» —","opts":["z panią Nowaką","z panią Nowak","z pani Nowak"],"answer":1,
      "explain":"Женская фамилия на согласный не склоняется: <b>z panią Nowak</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> географическая форма.",
      "q":"«в Закопане» —","opts":["w Zakopanym","w Zakopanem","w Zakopane"],"answer":1,
      "explain":"Особый предложный на -em: <b>w Zakopanem</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после глагола.",
      "q":"«На меня можно положиться» —","opts":["Można mnie polegać","Można na mnie polegać","Można na mnie liczyć się"],"answer":1,
      "explain":"Polegać na + предложный: <b>na mnie polegać</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> человек или назначение?",
      "q":"«крем для рук» —","opts":["krem dla rąk","krem do rąk","krem na ręce"],"answer":1,
      "explain":"Назначение вещи — предлог <b>do</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Мне удалось сдать текст вовремя»</b>","answer":"Udało mi się oddać tekst na czas"},
     {"type":"type","howto":"Напиши «Мне очень нравится». Диакритику можно не ставить.",
      "q":"Мне очень нравится.","accept":["bardzo mi się podoba","bardzo mi sie podoba"],"placeholder":"Bardzo…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Повторение · Дни 8–9",
    "title":"Числительные и глагол при них",
    "paras":[
      "<b>Двойка, тройка, четвёрка.</b> Родительный и предложный — <b>dwóch, trzech, czterech</b>; дательный — <b>dwóm, trzem, czterem</b>; творительный — <b>dwoma, trzema, czterema</b>. Отдельно живёт только женское <b>dwiema</b>: <b>z dwoma kolegami</b>, но <b>z dwiema koleżankami</b>. Обе, оба — <b>obiema, oboma</b>, в остальных падежах <b>obu</b>.",
      "<b>От пяти и выше — две формы.</b> На -u идут родительный, дательный и предложный: <b>od pięciu lat, pięciu pracownikom, w pięciu miastach</b>. На -oma — творительный: <b>z pięcioma osobami</b>. Так же <b>kilku / kilkoma</b>, <b>wielu / wieloma</b>, <b>ilu / iloma</b>.",
      "<b>Мужско-личные группы.</b> Два способа: <b>dwaj studenci przyszli</b> (только 2, 3, 4 и только в именительном) и <b>dwóch studentów przyszło</b> (везде и всегда). Второй способ ставит глагол в единственное число, а в прошедшем — в средний род. Это главная ловушка недели.",
      "<b>Остальные группы и годы.</b> До четырёх — обычное множественное (<b>dwie koleżanki przyszły</b>), от пяти — родительный и средний род (<b>pięć koleżanek przyszło</b>). В годе склоняется только хвост числа: <b>w dwa tysiące dwudziestym szóstym roku</b>, <b>od dwa tysiące dwudziestego roku</b>, <b>w tysiąc dziewięćset dziewięćdziesiątym roku</b>."
    ],
    "audio":"Двойка, тройка, четвёрка. Родительный и предложный — dwóch, trzech, czterech; дательный — dwóm, trzem, czterem; творительный — dwoma, trzema, czterema. Отдельно живёт только женское dwiema: z dwoma kolegami, но z dwiema koleżankami. Обе, оба — obiema, oboma, в остальных падежах obu. От пяти и выше две формы. На -u идут родительный, дательный и предложный: od pięciu lat, pięciu pracownikom, w pięciu miastach. На -oma идёт творительный: z pięcioma osobami. Так же kilku и kilkoma, wielu и wieloma, ilu и iloma. Мужско-личные группы. Два способа: dwaj studenci przyszli, только два, три, четыре и только в именительном, и dwóch studentów przyszło, везде и всегда. Второй способ ставит глагол в единственное число, а в прошедшем в средний род. Это главная ловушка недели. Остальные группы и годы. До четырёх обычное множественное: dwie koleżanki przyszły; от пяти родительный и средний род: pięć koleżanek przyszło. В годе склоняется только хвост числа: w dwa tysiące dwudziestym szóstym roku, od dwa tysiące dwudziestego roku, w tysiąc dziewięćset dziewięćdziesiątym roku.",
    "table":{"rows":[
      ["dwóch · dwóm · dwoma · dwiema","двойка по падежам"],
      ["pięciu · pięcioma · kilku · wielu","от пяти — две формы"],
      ["Dwaj studenci przyszli.","способ 1 — множественное"],
      ["Dwóch studentów przyszło. <button class=\"play\" data-say=\"Dwóch studentów przyszło.\">🔊</button>","способ 2 — средний род"],
      ["Dwie koleżanki przyszły. · Pięć koleżanek przyszło.","до четырёх · от пяти"],
      ["w dwa tysiące dwudziestym szóstym roku","склоняется только хвост"]
    ],"star":3},
    "examples":[
      {"ru":"На новоселье придёт пятеро коллег.","en":"Na parapetówkę <b>przyjdzie pięciu kolegów</b>.","say":"Na parapetówkę przyjdzie pięciu kolegów."},
      {"ru":"Две коллеги придут прямо с работы.","en":"<b>Dwie koleżanki przyjdą</b> prosto z pracy.","say":"Dwie koleżanki przyjdą prosto z pracy."},
      {"ru":"Марек живёт в этой квартире с 2020 года.","en":"Marek mieszka w tym mieszkaniu <b>od dwa tysiące dwudziestego roku</b>.","say":"Marek mieszka w tym mieszkaniu od dwa tysiące dwudziestego roku."},
      {"ru":"Анна говорила с двумя коллегами-женщинами и с тремя авторами.","en":"Anna rozmawiała <b>z dwiema koleżankami</b> i <b>z trzema autorami</b>.","say":"Anna rozmawiała z dwiema koleżankami i z trzema autorami."}
    ],
    "mistakes":[
      {"wrong":"Pięciu gości przyszli.","right":"Pięciu gości <b>przyszło</b>.","why":"Форма на -u тянет глагол в средний род единственного числа."},
      {"wrong":"z dwiema kolegami","right":"<b>z dwoma</b> kolegami","why":"Dwiema — только о женщинах."}
    ],
    "mnemonic":"🔢 dwóch / dwóm / dwoma (dwiema) · pięciu / pięcioma. И глагол: przyszło, а не przyszli.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> глагол при форме на -u.",
       "q":"«Придёт пятеро гостей» —","opts":["Przyjdą pięciu gości","Przyjdzie pięciu gości","Przyjdzie pięć gości"],"answer":1,
       "explain":"Единственное число: <b>przyjdzie pięciu gości</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> od просит родительный.",
       "q":"«с 2020 года» —","opts":["od dwa tysiące dwudziestego roku","od dwóch tysięcy dwudziestego roku","od dwa tysiące dwadzieścia"],"answer":0,
       "explain":"Родительный ложится на хвост числа: <b>dwudziestego roku</b>."},
      {"type":"type","howto":"Напиши «с пятью людьми». Диакритику можно не ставить.",
       "q":"с пятью людьми","accept":["z pięcioma osobami","z piecioma osobami"],"placeholder":"z pięcioma…"}
    ]
   },
   {
    "eyebrow":"Повторение · День 10",
    "title":"Фамилии, имена и города",
    "paras":[
      "<b>Фамилии на -ski, -cki, -dzki</b> склоняются как прилагательные: <b>pana Kowalskiego, panu Kowalskiemu, z panem Kowalskim</b>; <b>pani Kowalskiej, z panią Kowalską</b>. Семья: <b>państwo Kowalscy → państwa Kowalskich</b>.",
      "<b>Фамилии на согласный.</b> Мужская склоняется: <b>pana Nowaka, z panem Nowakiem, o panu Nowaku</b>. Женская не склоняется вовсе: <b>pani Nowak, z panią Nowak</b> — падеж виден только по слову pani. Семья: <b>państwo Nowakowie → państwa Nowaków</b>.",
      "<b>Фамилии на -o и -a</b> идут по женскому образцу, даже у мужчин: Kościuszko → <b>Kościuszki</b> (<b>ulica Kościuszki</b>), Wajda → <b>Wajdy</b>. Имена склоняются всегда: <b>Markowi, z Markiem, o Marku</b>. Обращение: <b>panie Marku</b>, <b>panie Nowak</b>, <b>pani Anno</b>.",
      "<b>Города.</b> Kraków → <b>w Krakowie</b>, Wrocław → <b>we Wrocławiu</b>, Katowice → <b>w Katowicach</b>. Białystok склоняется целиком: <b>w Białymstoku</b>. Zakopane — прилагательное с особой формой: <b>do Zakopanego</b>, но <b>w Zakopanem</b>. И направления: <b>nad morze / nad morzem</b>, <b>w góry / w górach</b>."
    ],
    "audio":"Фамилии на -ski, -cki, -dzki склоняются как прилагательные: pana Kowalskiego, panu Kowalskiemu, z panem Kowalskim; pani Kowalskiej, z panią Kowalską. Семья: państwo Kowalscy, państwa Kowalskich. Фамилии на согласный. Мужская склоняется: pana Nowaka, z panem Nowakiem, o panu Nowaku. Женская не склоняется вовсе: pani Nowak, z panią Nowak; падеж виден только по слову pani. Семья: państwo Nowakowie, państwa Nowaków. Фамилии на -o и -a идут по женскому образцу, даже у мужчин: Kościuszko — Kościuszki, ulica Kościuszki; Wajda — Wajdy. Имена склоняются всегда: Markowi, z Markiem, o Marku. Обращение: panie Marku, panie Nowak, pani Anno. Города. Kraków — w Krakowie, Wrocław — we Wrocławiu, Katowice — w Katowicach. Białystok склоняется целиком: w Białymstoku. Zakopane — прилагательное с особой формой: do Zakopanego, но w Zakopanem. И направления: nad morze и nad morzem, w góry и w górach.",
    "table":{"rows":[
      ["pana Kowalskiego · z panią Kowalską","фамилия-прилагательное"],
      ["z panem Nowakiem ≠ z panią Nowak <button class=\"play\" data-say=\"z panem Nowakiem, z panią Nowak\">🔊</button>","мужская склоняется, женская нет"],
      ["państwa Nowaków · państwa Kowalskich","семьи в родительном"],
      ["ulica Kościuszki · film Wajdy","на -o и -a — по женскому образцу"],
      ["Panie Marku! · Pani Anno!","обращение"],
      ["w Krakowie · w Białymstoku · w Zakopanem <button class=\"play\" data-say=\"w Krakowie, w Białymstoku, w Zakopanem\">🔊</button>","города"]
    ],"star":1},
    "examples":[
      {"ru":"Мы позвали Новаков и Ковальских.","en":"Zaprosiliśmy <b>państwa Nowaków</b> i <b>państwa Kowalskich</b>.","say":"Zaprosiliśmy państwa Nowaków i państwa Kowalskich."},
      {"ru":"С паном Новаком Марек говорил о ремонте.","en":"<b>Z panem Nowakiem</b> Marek rozmawiał o remoncie.","say":"Z panem Nowakiem Marek rozmawiał o remoncie."},
      {"ru":"Пани Новак придёт после шести.","en":"<b>Pani Nowak</b> przyjdzie po szóstej.","say":"Pani Nowak przyjdzie po szóstej."},
      {"ru":"В марте они были в Закопане.","en":"W marcu byli <b>w Zakopanem</b>.","say":"W marcu byli w Zakopanem."},
      {"ru":"Родители Анны приедут из Белостока.","en":"Rodzice Anny przyjadą <b>z Białegostoku</b>.","say":"Rodzice Anny przyjadą z Białegostoku."}
    ],
    "mistakes":[
      {"wrong":"z panią Nowaką","right":"<b>z panią Nowak</b>","why":"Женская фамилия на согласный не склоняется."},
      {"wrong":"w Zakopanym","right":"<b>w Zakopanem</b>","why":"У названия сохранилась старая форма предложного на -em."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> кого пригласили?",
       "q":"«Мы пригласили Новаков» —","opts":["Zaprosiliśmy państwo Nowak","Zaprosiliśmy państwa Nowaków","Zaprosiliśmy państwa Nowakowie"],"answer":1,
       "explain":"Винительный — <b>państwa Nowaków</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> do просит родительный.",
       "q":"«письмо пани Ковальской» —","opts":["list do pani Kowalskiej","list do pani Kowalska","list do panią Kowalską"],"answer":0,
       "explain":"Родительный женского прилагательного: <b>do pani Kowalskiej</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Мы были у Ковальских»</b>","answer":"Byliśmy u państwa Kowalskich"}
    ]
   },
   {
    "eyebrow":"Повторение · День 11",
    "title":"Управление: подарки и ловушки",
    "paras":[
      "<b>Совпадает с русским.</b> <b>zależeć od</b> + родительный, <b>wpływać na</b> + винительный, <b>uczestniczyć w</b> + предложный, <b>unikać</b> + родительный, <b>dziękować za</b> + винительный, <b>wierzyć w</b> + винительный, <b>interesować się</b> и <b>zajmować się</b> + творительный.",
      "<b>Не совпадает.</b> <b>polegać na</b> + предложный («полагаться на кого» — na kim), <b>przyzwyczaić się do</b> + родительный («привыкнуть к»), <b>przygotować się do</b> + родительный («готовиться к»), <b>dążyć do</b> + родительный («стремиться к»), <b>korzystać z</b> + родительный («пользоваться чем»).",
      "<b>Винительный после o.</b> Там, где русский говорит «о ком, о чём», польский требует <b>o</b> + винительный: <b>pytać o termin, prosić o pomoc, dbać o zdrowie, martwić się o rodziców, chodzi o pieniądze</b>. И знакомое <b>czekać na</b> + винительный.",
      "<b>Родительный-магнит.</b> <b>szukać, potrzebować, używać, słuchać, uczyć się</b> — все тянут родительный без предлога. Туда же тянет отрицание: <b>Nie mam czasu. Nie znam tej książki.</b>"
    ],
    "audio":"Совпадает с русским: zależeć od плюс родительный, wpływać na плюс винительный, uczestniczyć w плюс предложный, unikać плюс родительный, dziękować za плюс винительный, wierzyć w плюс винительный, interesować się и zajmować się плюс творительный. Не совпадает: polegać na плюс предложный, полагаться на кого — na kim; przyzwyczaić się do плюс родительный, привыкнуть к; przygotować się do плюс родительный, готовиться к; dążyć do плюс родительный, стремиться к; korzystać z плюс родительный, пользоваться чем. Винительный после o. Там, где русский говорит о ком, о чём, польский требует o плюс винительный: pytać o termin, prosić o pomoc, dbać o zdrowie, martwić się o rodziców, chodzi o pieniądze. И знакомое czekać na плюс винительный. Родительный-магнит: szukać, potrzebować, używać, słuchać, uczyć się — все тянут родительный без предлога. Туда же тянет отрицание: nie mam czasu, nie znam tej książki.",
    "table":{"rows":[
      ["zależeć od · wpływać na · unikać","совпадает с русским"],
      ["polegać na + предл. <button class=\"play\" data-say=\"Można na nim polegać.\">🔊</button>","полагаться на кого"],
      ["przyzwyczaić się do · dążyć do","привыкнуть к · стремиться к"],
      ["korzystać z + род.","пользоваться чем"],
      ["pytać o · dbać o · martwić się o <button class=\"play\" data-say=\"Dbam o zdrowie.\">🔊</button>","о ком — винительный"],
      ["szukać · potrzebować · używać + род.","родительный без предлога"]
    ],"star":4},
    "examples":[
      {"ru":"Всё зависит от ремонта.","en":"Wszystko <b>zależy od</b> remontu.","say":"Wszystko zależy od remontu."},
      {"ru":"На Марека в списках можно положиться.","en":"W listach można <b>na Marku polegać</b>.","say":"W listach można na Marku polegać."},
      {"ru":"Анна привыкла к новому темпу.","en":"Anna <b>przyzwyczaiła się do</b> nowego tempa.","say":"Anna przyzwyczaiła się do nowego tempa."},
      {"ru":"Соседи спрашивали о дате.","en":"Sąsiedzi <b>pytali o</b> datę.","say":"Sąsiedzi pytali o datę."},
      {"ru":"Нам нужен ещё один стол.","en":"<b>Potrzebujemy</b> jeszcze jednego stołu.","say":"Potrzebujemy jeszcze jednego stołu."}
    ],
    "mistakes":[
      {"wrong":"Pytali o dacie.","right":"Pytali <b>o datę</b>.","why":"После o тут винительный, хотя русское «о дате» стоит в предложном."},
      {"wrong":"Korzystam słownikiem.","right":"<b>Korzystam ze słownika.</b>","why":"Korzystać z + родительный; русский творительный тут не работает."}
    ],
    "mnemonic":"🧭 polegać NA · przyzwyczaić się DO · korzystać Z · pytać O + винительный.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> «привыкнуть к».",
       "q":"«Я привыкла к этому темпу» —","opts":["Przyzwyczaiłam się temu tempu","Przyzwyczaiłam się do tego tempa","Przyzwyczaiłam się z tym tempem"],"answer":1,
       "explain":"Do + родительный: <b>do tego tempa</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> o просит винительный.",
       "q":"«Они спрашивали о дате» —","opts":["Pytali o dacie","Pytali o datę","Pytali na datę"],"answer":1,
       "explain":"Pytać o + винительный: <b>o datę</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> есть отрицание.",
       "q":"«У нас нет времени» —","opts":["Nie mamy czas","Nie mamy czasu","Nie mamy czasem"],"answer":1,
       "explain":"Отрицание переводит винительный в родительный: <b>czasu</b>."}
    ]
   },
   {
    "eyebrow":"Повторение · Дни 12–13",
    "title":"Предлоги и обороты с «мне»",
    "paras":[
      "<b>Время.</b> <b>przez</b> + винительный — весь отрезок (<b>przez tydzień</b>); <b>w ciągu</b> + родительный — где-то внутри (<b>w ciągu tygodnia</b>); <b>podczas</b> и <b>w czasie</b> + родительный — во время; <b>przed</b> + творительный — перед и книжное «тому назад»; <b>za</b> + винительный — через.",
      "<b>Назначение и причина.</b> <b>dla</b> + родительный — для человека (<b>prezent dla mamy</b>); <b>do</b> + родительный — назначение вещи (<b>krem do rąk</b>). <b>dzięki</b> + дательный — благодаря, только о хорошем; <b>z powodu</b> + родительный — из-за, нейтрально; <b>przez</b> + винительный — разговорное «из-за» с упрёком.",
      "<b>Куда и где.</b> <b>na Mazury / na Mazurach</b>, <b>do Krakowa / w Krakowie</b>, <b>do biura / w biurze</b>. Каркасы: <b>od… do…</b> про время и людей, <b>z… do…</b> про пространство. Плюс <b>między, wśród, wzdłuż, obok</b>.",
      "<b>Обороты с дательным.</b> <b>podoba mi się</b> (и <b>podobają mi się</b> во множественном), <b>udało mi się</b> + инфинитив, <b>chce mi się</b>, <b>przyda mi się</b>, <b>opłaca się</b>, <b>brakuje mi</b>, <b>szkoda mi</b>, <b>przykro mi</b>. И пара, которую нельзя путать: <b>zależy mi na</b> («мне важно») против <b>zależeć od</b> («зависеть от»). Порядок слов: коротышки в середине — <b>Bardzo mi się podoba</b>, <b>To mi się nie udało</b>."
    ],
    "audio":"Время. Przez плюс винительный — весь отрезок, przez tydzień; w ciągu плюс родительный — где-то внутри, w ciągu tygodnia; podczas и w czasie плюс родительный — во время; przed плюс творительный — перед и книжное «тому назад»; za плюс винительный — через. Назначение и причина. Dla плюс родительный — для человека, prezent dla mamy; do плюс родительный — назначение вещи, krem do rąk. Dzięki плюс дательный — благодаря, только о хорошем; z powodu плюс родительный — из-за, нейтрально; przez плюс винительный — разговорное «из-за» с упрёком. Куда и где: na Mazury и na Mazurach, do Krakowa и w Krakowie, do biura и w biurze. Каркасы: od и do про время и людей, z и do про пространство. Плюс między, wśród, wzdłuż, obok. Обороты с дательным: podoba mi się и podobają mi się во множественном, udało mi się плюс инфинитив, chce mi się, przyda mi się, opłaca się, brakuje mi, szkoda mi, przykro mi. И пара, которую нельзя путать: zależy mi na, мне важно, против zależeć od, зависеть от. Порядок слов: коротышки в середине — bardzo mi się podoba, to mi się nie udało.",
    "table":{"rows":[
      ["przez tydzień · w ciągu tygodnia","весь отрезок · внутри него"],
      ["krem dla dzieci · krem do rąk <button class=\"play\" data-say=\"krem dla dzieci, krem do rąk\">🔊</button>","для кого · для чего"],
      ["dzięki tobie · z powodu deszczu · przez korki","благодаря · из-за · из-за (разг.)"],
      ["na Mazury / na Mazurach · z domu do pracy","куда, где, откуда"],
      ["Podoba mi się. · Podobają mi się. <button class=\"play\" data-say=\"Podoba mi się. Podobają mi się.\">🔊</button>","ед. ч. · мн. ч."],
      ["Zależy mi na tym. ≠ To zależy od ciebie. <button class=\"play\" data-say=\"Zależy mi na tym. To zależy od ciebie.\">🔊</button>","мне важно ≠ зависит от"]
    ],"star":5},
    "examples":[
      {"ru":"Благодаря списку Марека всё готово за неделю.","en":"<b>Dzięki liście Marka</b> wszystko jest gotowe <b>w ciągu tygodnia</b>.","say":"Dzięki liście Marka wszystko jest gotowe w ciągu tygodnia."},
      {"ru":"Подарок для мамы Анны они купили в Закопане.","en":"<b>Prezent dla mamy</b> Anny kupili w Zakopanem.","say":"Prezent dla mamy Anny kupili w Zakopanem."},
      {"ru":"Мне очень нравится этот список.","en":"<b>Bardzo mi się podoba</b> ta lista.","say":"Bardzo mi się podoba ta lista."},
      {"ru":"Им удалось позвать всех соседей.","en":"<b>Udało im się</b> zaprosić wszystkich sąsiadów.","say":"Udało im się zaprosić wszystkich sąsiadów."},
      {"ru":"Марку важно, чтобы пришли все.","en":"Markowi <b>zależy na tym</b>, żeby przyszli wszyscy.","say":"Markowi zależy na tym, żeby przyszli wszyscy."}
    ],
    "mistakes":[
      {"wrong":"Zależy mi od tej pracy.","right":"<b>Zależy mi na</b> tej pracy.","why":"«Мне важно» — только na с предложным."},
      {"wrong":"Mi się podoba ta lista.","right":"<b>Podoba mi się</b> ta lista.","why":"Коротышка mi не открывает фразу; для начала есть ударная форма mnie."}
    ],
    "mnemonic":"💛 dla человека · do вещи · dzięki хорошему · z powodu помехе. И podoba mi się — mi перед się.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> внутри отрезка.",
       "q":"«Ответим в течение недели» —","opts":["Odpowiemy przez tydzień","Odpowiemy w ciągu tygodnia","Odpowiemy podczas tygodnia"],"answer":1,
       "explain":"Где-то внутри отрезка — <b>w ciągu tygodnia</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> смотри, сколько всего нравится.",
       "q":"«Мне нравятся эти соседи» —","opts":["Podoba mi się ci sąsiedzi","Podobają mi się ci sąsiedzi","Podobam tych sąsiadów"],"answer":1,
       "explain":"Множественное число: <b>podobają mi się</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Udało mi się zaprosić wszystkich.","sub":"мне удалось позвать всех","want":"Udało mi się zaprosić wszystkich."}
    ]
   }
 ],
 "scene":{
   "intro":"Сценка на всю неделю сразу — Анна и Марек над списком гостей.",
   "lines":[
     {"who":"A","en":"Ilu gości mamy na liście?","ru":"Сколько гостей у нас в списке?"},
     {"who":"B","en":"Piętnaścioro. Pięciu kolegów z pracy i dwie koleżanki z korekty.","ru":"Пятнадцать. Пятеро коллег с работы и две коллеги из корректуры."},
     {"who":"A","en":"A sąsiedzi? Państwo Nowakowie i pani Kowalska?","ru":"А соседи? Новаки и пани Ковальская?"},
     {"who":"B","en":"Państwa Nowaków zaprosiłem wczoraj. Do pani Kowalskiej napiszę dziś.","ru":"Новаков я пригласил вчера. Пани Ковальской напишу сегодня."},
     {"who":"A","en":"Zależy mi na tym, żeby przyszli wszyscy.","ru":"Мне важно, чтобы пришли все."},
     {"who":"B","en":"Wiem. Ale wszystko zależy od remontu.","ru":"Знаю. Но всё зависит от ремонта."},
     {"who":"A","en":"Dzięki twojej liście przynajmniej wiemy, na kogo czekamy.","ru":"Благодаря твоему списку мы хотя бы знаем, кого ждём."}
   ]
 },
 "vocab":{
   "intro":"Не отдельные слова, а связки недели — то, что стоит говорить не задумываясь.",
   "items":[
     {"en":"z dwoma kolegami · z dwiema koleżankami","ru":"с двумя коллегами-мужчинами · с двумя коллегами-женщинами","ex":"Rozmawiam z dwiema koleżankami."},
     {"en":"od pięciu lat · z pięcioma osobami","ru":"уже пять лет · с пятью людьми","ex":"Marek pracuje tu od pięciu lat."},
     {"en":"Pięciu gości przyszło.","ru":"пришло пятеро гостей","ex":"Na jubileusz przyszło pięciu gości."},
     {"en":"w dwa tysiące dwudziestym szóstym roku","ru":"в 2026 году","ex":"Jubileusz jest w dwa tysiące dwudziestym szóstym roku."},
     {"en":"z panem Nowakiem · z panią Nowak","ru":"с паном Новаком · с пани Новак","ex":"Rozmawiałem z panem Nowakiem."},
     {"en":"u państwa Kowalskich · państwa Nowaków","ru":"у Ковальских · Новаков","ex":"Byliśmy u państwa Kowalskich."},
     {"en":"w Krakowie · w Białymstoku · w Zakopanem","ru":"в Кракове · в Белостоке · в Закопане","ex":"W Zakopanem leży jeszcze śnieg."},
     {"en":"polegać na kimś · przyzwyczaić się do czegoś","ru":"полагаться на кого-то · привыкнуть к чему-то","ex":"Możesz na mnie polegać."},
     {"en":"pytać o coś · dbać o coś","ru":"спрашивать о · заботиться о (+ винительный)","ex":"Sąsiedzi pytali o datę."},
     {"en":"krem dla dzieci · krem do rąk","ru":"крем для детей · крем для рук","ex":"Potrzebuję kremu do rąk."},
     {"en":"dzięki tobie · z powodu deszczu","ru":"благодаря тебе · из-за дождя","ex":"Dzięki tobie zdążyłam."},
     {"en":"podoba mi się · udało mi się · zależy mi na","ru":"мне нравится · мне удалось · мне важно","ex":"Udało mi się oddać tekst na czas."}
   ]
 },
 "drag":{
   "intro":"Последняя игра недели. Перетащи польскую связку к её переводу.",
   "pairs":[["Pięciu gości przyszło.","пришло пятеро гостей"],["u państwa Nowaków","у Новаков"],["przyzwyczaić się do","привыкнуть к"],["zależy mi na tym","мне это важно"]]
 },
 "reading":{
   "intro":"Текст на всю неделю: числительные, фамилии, управление, предлоги и «мне». Прочитай вслух.",
   "title":"Lista gości",
   "sentences":["Marek robi listę gości na parapetówkę, chociaż remontu jeszcze nie ma.","Na liście jest już piętnaścioro osób.","Z jego pracy przyjdzie pięciu kolegów, a od Anny dwie koleżanki z korekty.","Państwa Nowaków Marek zaprosił wczoraj, a do pani Kowalskiej napisze dziś.","Pani Nowak pytała o datę, ale wszystko zależy od remontu.","Anna mówi, że można na Marku polegać w takich sprawach.","Ona sama przyzwyczaiła się już do tempa w wydawnictwie.","W marcu byli w Zakopanem i kupili tam prezent dla mamy Anny.","Rodzice Anny przyjadą wiosną z Białegostoku.","Marek mówi, że zależy mu na jednym: żeby wszyscy się zmieścili."],
   "translation":"Марек составляет список гостей на новоселье, хотя ремонта ещё нет. В списке уже пятнадцать человек. С его работы придут пятеро коллег, а от Анны — две коллеги из корректуры. Новаков Марек пригласил вчера, а пани Ковальской напишет сегодня. Пани Новак спрашивала о дате, но всё зависит от ремонта. Анна говорит, что на Марека в таких делах можно положиться. Сама она уже привыкла к темпу в издательстве. В марте они были в Закопане и купили там подарок для мамы Анны. Родители Анны приедут весной из Белостока. Марек говорит, что ему важно одно: чтобы все поместились."
 },
 "quiz":{
   "intro":"Проверка недели — тринадцать вопросов по всем шести дням. Спокойно, ты это уже умеешь.",
   "items":[
     {"q":"1. «с тремя авторами» —","opts":["z trzy autorami","z trzema autorami","z trzech autorami"],"answer":1,
      "explain":"Творительный тройки — <b>trzema</b>."},
     {"q":"2. «уже пять лет» —","opts":["od pięć lat","od pięciu lat","od pięcioma lat"],"answer":1,
      "explain":"Od + родительный: <b>od pięciu lat</b>."},
     {"q":"3. «Пятеро гостей пришло» —","opts":["Pięciu gości przyszli","Pięciu gości przyszło","Pięć gości przyszli"],"answer":1,
      "explain":"Средний род единственного числа: <b>przyszło</b>."},
     {"q":"4. «Две коллеги пришли» —","opts":["Dwie koleżanki przyszły","Dwie koleżanki przyszło","Dwóch koleżanek przyszły"],"answer":0,
      "explain":"До четырёх — обычное множественное: <b>przyszły</b>."},
     {"q":"5. «в 2026 году» —","opts":["w dwóch tysiącach dwudziestym szóstym roku","w dwa tysiące dwudziestym szóstym roku","w dwa tysiące dwadzieścia sześć roku"],"answer":1,
      "explain":"Склоняется только хвост числа."},
     {"q":"6. «с пани Новак» —","opts":["z panią Nowaką","z panią Nowak","z pani Nowak"],"answer":1,
      "explain":"Женская фамилия на согласный не склоняется."},
     {"q":"7. «Мы были у Ковальских» —","opts":["Byliśmy u państwa Kowalskich","Byliśmy u państwo Kowalscy","Byliśmy u państwa Kowalskim"],"answer":0,
      "explain":"Родительный — <b>u państwa Kowalskich</b>."},
     {"q":"8. «в Закопане» —","opts":["w Zakopanym","w Zakopanem","w Zakopane"],"answer":1,
      "explain":"Особая географическая форма на -em."},
     {"q":"9. «На меня можно положиться» —","opts":["Można mnie polegać","Można na mnie polegać","Można na mnie polegać się"],"answer":1,
      "explain":"Polegać na + предложный."},
     {"q":"10. «Я привыкла к этому» —","opts":["Przyzwyczaiłam się temu","Przyzwyczaiłam się do tego","Przyzwyczaiłam się z tym"],"answer":1,
      "explain":"Do + родительный: <b>do tego</b>."},
     {"q":"11. «крем для рук» —","opts":["krem dla rąk","krem do rąk","krem na ręce"],"answer":1,
      "explain":"Назначение вещи — предлог <b>do</b>."},
     {"q":"12. «Он не пришёл из-за дождя» —","opts":["Nie przyszedł dzięki deszczowi","Nie przyszedł z powodu deszczu","Nie przyszedł dla deszczu"],"answer":1,
      "explain":"Помеха — <b>z powodu</b> + родительный."},
     {"q":"13. «Мне важна эта работа» —","opts":["Zależy mi od tej pracy","Zależy mi na tej pracy","Zależy mnie ta praca"],"answer":1,
      "explain":"Zależy mi na + предложный."}
   ]
 },
 "essay":{
   "intro":"Финал недели — свой список гостей и своя пара честных фраз про «мне». Вся неделя уже у тебя в руках.",
   "prompt":"Напиши 6–7 фраз: кого ты позвал(а) бы, сколько их, кто откуда приедет, на кого ты можешь положиться, что тебе важно и что тебе нравится в этой затее.",
   "hint":"Опора: Na liście jest… · Przyjdzie pięciu… · Państwa … zaprosiłem… · Mogę polegać na… · Zależy mi na… · Podoba mi się… Проверь глагол после pięciu. 💛",
   "example":"Na mojej liście jest już dwanaście osób. Z pracy przyjdzie czterech kolegów i dwie koleżanki. Państwa Nowaków zaprosiłem osobno, bo mieszkają obok. Moi rodzice przyjadą z Białegostoku i zostaną przez tydzień. Mogę polegać na siostrze, bo ona zawsze wszystko pamięta. Zależy mi na tym, żeby nikt się nie spóźnił. Najbardziej podoba mi się to, że wszyscy się w końcu poznają."
 }
},
"15": {
 "day":15,"week":"03",
 "themeRu":"Прежде чем, пока не",
 "themeEn":"Zanim, dopóki, aż",
 "intro":"Ремонт в квартире Марека начался с фразы, которую бригадир повторил три раза: <b>Zanim położymy panele, musimy wyrównać podłogę</b>. «Прежде чем» — это <b>zanim</b>, и с ним связана главная ловушка недели: русское «пока не» тянет за собой лишнее <b>nie</b>, а после zanim его не бывает никогда. Разберём весь набор союзов времени — их в польском ровно столько же, сколько в русском, и почти все совпадают.",
 "introAudio":"Ремонт в квартире Марека начался с фразы, которую бригадир повторил три раза: zanim położymy panele, musimy wyrównać podłogę. «Прежде чем» — это zanim, и с ним связана главная ловушка недели: русское «пока не» тянет за собой лишнее nie, а после zanim его не бывает никогда. Разберём весь набор союзов времени — их в польском ровно столько же, сколько в русском, и почти все совпадают.",
 "goals":[
   "Ставить <b>zanim</b> без лишнего nie: <b>Zanim wyjdziesz, zgaś światło</b>",
   "Различать <b>dopóki</b> («пока») и <b>dopóki nie</b> («пока не»)",
   "Ждать до события: <b>Poczekam, aż skończą</b>",
   "Связывать моменты: <b>jak tylko</b>, <b>w chwili, gdy</b>, <b>podczas gdy</b>"
 ],
 "learned":[
   "Поставил(а) zanim без лишнего nie: Zanim wyjdziesz, zgaś światło",
   "Различил(а) dopóki и dopóki nie",
   "Подождал(а) до события: Poczekam, aż skończą",
   "Связал(а) моменты: jak tylko, w chwili, gdy, podczas gdy"
 ],
 "review":{
   "intro":"Сначала короткий круг по первым двум неделям: отглагольные существительные, супплетивная пара, числительное с мужско-личной формой и фамилия в падеже.",
   "introAudio":"Сначала короткий круг по первым двум неделям: отглагольные существительные, супплетивная пара, числительное с мужско-личной формой и фамилия в падеже.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри на предлог перед пропуском.",
      "q":"Przed ___ zawsze piję kawę. (wyjście)","opts":["wyjściem","wyjście","wyjścia"],"answer":0,
      "explain":"<b>przed</b> требует творительного: przed <b>wyjściem</b>. Отглагольное существительное склоняется как okno."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни вид в разовой просьбе.",
      "q":"«Положи это на стол» —","opts":["Kładź to na stół","Połóż to na stół","Kłaść to na stół"],"answer":1,
      "explain":"Разовая просьба идёт совершенным видом: <b>połóż</b>. Kładź — «клади», о повторяющемся действии."},
     {"type":"choice","howto":"<b>Что делать:</b> проверь форму глагола после числительного.",
      "q":"«Пятеро рабочих пришло» —","opts":["Pięciu robotników przyszli","Pięciu robotników przyszło","Pięć robotników przyszli"],"answer":1,
      "explain":"После формы на -u глагол стоит в единственном числе среднего рода: <b>przyszło</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Пани Ковальской нет дома»</b>","answer":"Pani Kowalskiej nie ma w domu"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Прежде чем",
    "title":"<em>Zanim</em> — и никакого <em>nie</em>",
    "paras":[
      "<b>Zanim</b> — это «прежде чем» и «до того как». Действие в придаточном чаще всего совершенного вида: <b>Zanim wyjdziesz, zgaś światło.</b> <b>Zanim położymy panele, wyrównamy podłogę.</b> Порядок частей свободный, запятая обязательна: <b>Zgaś światło, zanim wyjdziesz.</b>",
      "Теперь ловушка, ради которой стоит запомнить весь день. Русский часто говорит «подожди, пока я не выйду» — и рука сама тянется поставить <b>nie</b> после zanim. Нельзя: <b>Zanim wyjdę</b> — и всё. Если смысл именно «пока не», для него есть другие союзы, они в правиле 2.",
      "После zanim стоит обычная личная форма — настоящего или будущего времени, никакого сослагательного: <b>Zanim zapłacisz, przeczytaj umowę.</b> В рассказе о прошлом там будет прошедшее: <b>Zanim zdążyłam odpowiedzieć, on już wyszedł.</b>",
      "И ещё: инфинитива после zanim не бывает. Русское «прежде чем выйти» разворачивается либо в придаточное (<b>zanim wyjdziesz</b>), либо в предлог с отглагольным существительным (<b>przed wyjściem</b>) — про эту замену будет правило 4."
    ],
    "audio":"Zanim — это «прежде чем» и «до того как». Действие в придаточном чаще всего совершенного вида: zanim wyjdziesz, zgaś światło. Zanim położymy panele, wyrównamy podłogę. Порядок частей свободный, запятая обязательна. Теперь ловушка, ради которой стоит запомнить весь день. Русский часто говорит «подожди, пока я не выйду», и рука сама тянется поставить nie после zanim. Нельзя: zanim wyjdę, и всё. Если смысл именно «пока не», для него есть другие союзы. После zanim стоит обычная личная форма настоящего или будущего времени, никакого сослагательного. В рассказе о прошлом там будет прошедшее: zanim zdążyłam odpowiedzieć, on już wyszedł. И ещё: инфинитива после zanim не бывает. Русское «прежде чем выйти» разворачивается либо в придаточное zanim wyjdziesz, либо в предлог с отглагольным существительным przed wyjściem.",
    "table":{"rows":[
      ["<b>Zanim wyjdziesz</b>, zgaś światło. <button class=\"play\" data-say=\"Zanim wyjdziesz, zgaś światło\">🔊</button>","Прежде чем выйдешь, погаси свет."],
      ["<b>Zanim położymy</b> panele, wyrównamy podłogę. <button class=\"play\" data-say=\"Zanim położymy panele, wyrównamy podłogę\">🔊</button>","Прежде чем положим ламинат, выровняем пол."],
      ["Zgaś światło, <b>zanim wyjdziesz</b>. <button class=\"play\" data-say=\"Zgaś światło, zanim wyjdziesz\">🔊</button>","Тот же смысл — части можно поменять местами."],
      ["<b>Zanim zdążyłam</b> odpowiedzieć, on już wyszedł. <button class=\"play\" data-say=\"Zanim zdążyłam odpowiedzieć, on już wyszedł\">🔊</button>","Прежде чем я успела ответить, он уже вышел."],
      ["✗ zanim <b>nie</b> wyjdziesz → ✓ <b>zanim wyjdziesz</b> <button class=\"play\" data-say=\"zanim wyjdziesz\">🔊</button>","после zanim частицы nie не бывает"]
    ],"star":4},
    "examples":[
      {"ru":"Прежде чем подписать договор, спроси о сроках.","en":"<b>Zanim podpiszesz</b> umowę, zapytaj o terminy.","gloss":"umowa — договор, termin — срок","say":"Zanim podpiszesz umowę, zapytaj o terminy."},
      {"ru":"Прежде чем красить стены, надо снять старые обои.","en":"<b>Zanim pomalujemy</b> ściany, trzeba zdjąć starą tapetę.","gloss":"zdjąć — из супплетивной пары zdejmować / zdjąć","say":"Zanim pomalujemy ściany, trzeba zdjąć starą tapetę."},
      {"ru":"Позвони мне, прежде чем приедешь.","en":"Zadzwoń do mnie, <b>zanim przyjedziesz</b>.","say":"Zadzwoń do mnie, zanim przyjedziesz."},
      {"ru":"Прежде чем я нашла ключи, прошло полчаса.","en":"<b>Zanim znalazłam</b> klucze, minęło pół godziny.","gloss":"znajdować / znaleźć — пара из недели 1","say":"Zanim znalazłam klucze, minęło pół godziny."}
    ],
    "mistakes":[
      {"wrong":"Zanim nie wyjdziesz, zgaś światło.","right":"<b>Zanim wyjdziesz</b>, zgaś światło.","why":"частица nie сюда переезжает из русского «пока не». В польском после zanim её нет никогда."},
      {"wrong":"Zanim wyjść, zgaś światło.","right":"<b>Zanim wyjdziesz</b>, zgaś światło. / <b>Przed wyjściem</b> zgaś światło.","why":"после zanim нужна личная форма глагола; инфинитив там невозможен."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь, не приехало ли лишнее nie.",
       "q":"«Прежде чем выйдешь, погаси свет» —","opts":["Zanim nie wyjdziesz, zgaś światło","Zanim wyjdziesz, zgaś światło","Zanim wyjść, zgaś światło"],"answer":1,
       "explain":"После zanim nie не ставится, а глагол стоит в личной форме: <b>Zanim wyjdziesz</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, о каком времени идёт речь.",
       "q":"«Прежде чем я успела ответить, он вышел» —","opts":["Zanim zdążę odpowiedzieć, wyszedł","Zanim zdążyłam odpowiedzieć, wyszedł","Zanim bym zdążyła odpowiedzieć, wyszedł"],"answer":1,
       "explain":"Рассказ о прошлом — прошедшее время и после zanim: <b>zanim zdążyłam</b>. Сослагательное там не нужно."},
      {"type":"type","howto":"<b>Что делать:</b> напиши фразу с запятой. Диакритику можно не ставить.",
       "q":"«Прежде чем положим ламинат, выровняем пол»","accept":["zanim położymy panele, wyrównamy podłogę","zanim polozymy panele, wyrownamy podloge","zanim położymy panele wyrównamy podłogę","zanim polozymy panele wyrownamy podloge"],"placeholder":"Zanim położymy…"}
    ],
    "mnemonic":"🚪 Zanim = прежде чем. Никакого nie за ним — ни разу, никогда."
   },
   {
    "eyebrow":"Правило 2 · Пока и пока не",
    "title":"<em>dopóki</em> · <em>dopóki nie</em> · <em>aż</em>",
    "paras":[
      "<b>Dopóki</b> с несовершенным видом — это чистое «пока», две линии идут рядом: <b>Dopóki trwa remont, mieszkamy u Kasi.</b> <b>Dopóki pracuję, mam z czego żyć.</b>",
      "<b>Dopóki nie</b> с совершенным видом — это «пока не», то есть граница: <b>Nie zaczniemy malować, dopóki tynk nie wyschnie.</b> Здесь nie стоит ровно там же, где в русском, — и это единственное место недели, где оно вообще уместно.",
      "<b>Aż</b> — тот же смысл «пока не», но короче и живее, и ставится только после главной части: <b>Poczekam, aż skończą.</b> <b>Mieszaj, aż zgęstnieje.</b> После aż частица nie не нужна: смысл границы уже внутри самого союза.",
      "Полезная мелочь: <b>aż do</b> + родительный работает с существительным — <b>Pracowali aż do wieczora.</b> А книжная пара <b>dopóty… dopóki</b> («до тех пор, пока») встретится тебе в текстах — её достаточно узнавать."
    ],
    "audio":"Dopóki с несовершенным видом — это чистое «пока», две линии идут рядом: dopóki trwa remont, mieszkamy u Kasi. Dopóki pracuję, mam z czego żyć. Dopóki nie с совершенным видом — это «пока не», то есть граница: nie zaczniemy malować, dopóki tynk nie wyschnie. Здесь nie стоит ровно там же, где в русском. Aż — тот же смысл «пока не», но короче и живее, и ставится только после главной части: poczekam, aż skończą. Mieszaj, aż zgęstnieje. После aż частица nie не нужна. Полезная мелочь: aż do плюс родительный работает с существительным: pracowali aż do wieczora. А книжная пара dopóty, dopóki встретится тебе в текстах, её достаточно узнавать.",
    "table":{"rows":[
      ["<b>Dopóki</b> trwa remont, mieszkamy u Kasi. <button class=\"play\" data-say=\"Dopóki trwa remont, mieszkamy u Kasi\">🔊</button>","Пока идёт ремонт, живём у Каси."],
      ["Nie zaczniemy malować, <b>dopóki</b> tynk <b>nie wyschnie</b>. <button class=\"play\" data-say=\"Nie zaczniemy malować, dopóki tynk nie wyschnie\">🔊</button>","Не начнём красить, пока штукатурка не высохнет."],
      ["Poczekam, <b>aż skończą</b>. <button class=\"play\" data-say=\"Poczekam, aż skończą\">🔊</button>","Подожду, пока они не закончат."],
      ["Mieszaj, <b>aż zgęstnieje</b>. <button class=\"play\" data-say=\"Mieszaj, aż zgęstnieje\">🔊</button>","Мешай, пока не загустеет."],
      ["Pracowali <b>aż do</b> wieczora. <button class=\"play\" data-say=\"Pracowali aż do wieczora\">🔊</button>","Работали до самого вечера. (aż do + род.)"]
    ],"star":1},
    "examples":[
      {"ru":"Пока у нас есть время, сделаем это спокойно.","en":"<b>Dopóki mamy</b> czas, zróbmy to spokojnie.","say":"Dopóki mamy czas, zróbmy to spokojnie."},
      {"ru":"Не заплатим, пока не увидим счёт.","en":"Nie zapłacimy, <b>dopóki nie zobaczymy</b> faktury.","gloss":"faktura — счёт-фактура","say":"Nie zapłacimy, dopóki nie zobaczymy faktury."},
      {"ru":"Подожди, пока я не вернусь.","en":"Poczekaj, <b>aż wrócę</b>.","gloss":"после aż никакого nie","say":"Poczekaj, aż wrócę."},
      {"ru":"Пока Анна работала, бригада укладывала ламинат.","en":"<b>Dopóki</b> Anna <b>pracowała</b>, ekipa kładła panele.","say":"Dopóki Anna pracowała, ekipa kładła panele."}
    ],
    "mistakes":[
      {"wrong":"Poczekam, aż nie skończą.","right":"Poczekam, <b>aż skończą</b>.","why":"aż уже значит «пока не», второе отрицание лишнее. С nie работает только dopóki."},
      {"wrong":"Dopóki nie mieszkamy u Kasi, remont trwa.","right":"<b>Dopóki</b> trwa remont, <b>mieszkamy</b> u Kasi.","why":"здесь нет никакой границы, две линии просто идут рядом: значит dopóki без nie и с несовершенным видом."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, это «пока» или «пока не».",
       "q":"«Не начнём красить, пока штукатурка не высохнет» —","opts":["dopóki tynk wyschnie","dopóki tynk nie wyschnie","zanim tynk nie wyschnie"],"answer":1,
       "explain":"Граница действия — <b>dopóki nie</b> плюс совершенный вид. Zanim в этом смысле идёт без nie."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, нужно ли aż отрицание.",
       "q":"«Подожду, пока они не закончат» —","opts":["Poczekam, aż nie skończą","Poczekam, aż skończą","Poczekam, zanim nie skończą"],"answer":1,
       "explain":"<b>Aż</b> само значит «пока не», поэтому nie не ставим."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Poczekam, aż skończą.","sub":"подожду, пока они не закончат","want":"aż skończą"}
    ],
    "mnemonic":"⏳ dopóki = пока · dopóki nie = пока не · aż = пока не, но короче."
   },
   {
    "eyebrow":"Правило 3 · Момент и одновременность",
    "title":"<em>jak tylko</em> · <em>w chwili, gdy</em> · <em>podczas gdy</em>",
    "paras":[
      "«Как только» — это <b>jak tylko</b> (разговорнее) и <b>gdy tylko</b> (чуть нейтральнее). Оба ведут себя одинаково: <b>Jak tylko skończą, zadzwonię.</b> <b>Gdy tylko wrócisz, napisz.</b>",
      "«В тот момент, когда» — <b>w chwili, gdy</b> или <b>w momencie, gdy</b>. Обрати внимание на запятую внутри самого оборота: она стоит перед gdy. <b>W chwili, gdy weszliśmy, zaczęło padać.</b>",
      "<b>Podczas gdy</b> — «в то время как»: два действия идут одновременно, и между ними обычно есть контраст. <b>Anna pracowała w wydawnictwie, podczas gdy ekipa kładła panele.</b> Не путай с предлогом <b>podczas</b> + родительный (<b>podczas remontu</b>): союз ведёт целое предложение, предлог — одно существительное.",
      "И самое частое: <b>kiedy</b> и <b>gdy</b> — нейтральное «когда». Если речь о будущем, после них стоит будущее время, как и в русском: <b>Kiedy skończą, zapłacimy.</b> Для повторяющегося — <b>zawsze gdy</b>, <b>za każdym razem, gdy</b>."
    ],
    "audio":"«Как только» — это jak tylko, разговорнее, и gdy tylko, чуть нейтральнее. Оба ведут себя одинаково: jak tylko skończą, zadzwonię. Gdy tylko wrócisz, napisz. «В тот момент, когда» — w chwili, gdy или w momencie, gdy. Обрати внимание на запятую внутри самого оборота: она стоит перед gdy. Podczas gdy — «в то время как»: два действия идут одновременно, и между ними обычно есть контраст. Anna pracowała w wydawnictwie, podczas gdy ekipa kładła panele. Не путай с предлогом podczas плюс родительный, podczas remontu: союз ведёт целое предложение, предлог — одно существительное. И самое частое: kiedy и gdy — нейтральное «когда». Если речь о будущем, после них стоит будущее время, как и в русском: kiedy skończą, zapłacimy.",
    "table":{"rows":[
      ["<b>Jak tylko</b> skończą, zadzwonię. <button class=\"play\" data-say=\"Jak tylko skończą, zadzwonię\">🔊</button>","Как только закончат, позвоню."],
      ["<b>Gdy tylko</b> wrócisz, napisz. <button class=\"play\" data-say=\"Gdy tylko wrócisz, napisz\">🔊</button>","Как только вернёшься, напиши."],
      ["<b>W chwili, gdy</b> weszliśmy, zaczęło padać. <button class=\"play\" data-say=\"W chwili, gdy weszliśmy, zaczęło padać\">🔊</button>","В тот момент, когда мы вошли, пошёл дождь."],
      ["Anna pracowała, <b>podczas gdy</b> ekipa kładła panele. <button class=\"play\" data-say=\"Anna pracowała, podczas gdy ekipa kładła panele\">🔊</button>","Анна работала, в то время как бригада клала ламинат."],
      ["<b>podczas gdy</b> + предложение · <b>podczas</b> + род. <button class=\"play\" data-say=\"podczas gdy pracowali, podczas remontu\">🔊</button>","союз и предлог — разные вещи"]
    ],"star":3},
    "examples":[
      {"ru":"Как только высохнет краска, повесим полки.","en":"<b>Jak tylko</b> wyschnie farba, powiesimy półki.","gloss":"farba — краска, półka — полка","say":"Jak tylko wyschnie farba, powiesimy półki."},
      {"ru":"В тот момент, когда позвонил бригадир, я была на совещании.","en":"<b>W chwili, gdy</b> zadzwonił kierownik ekipy, byłam na zebraniu.","gloss":"zebranie — совещание, слово из недели 1","say":"W chwili, gdy zadzwonił kierownik ekipy, byłam na zebraniu."},
      {"ru":"Марек красил кухню, в то время как я работала из дома.","en":"Marek malował kuchnię, <b>podczas gdy</b> ja pracowałam z domu.","say":"Marek malował kuchnię, podczas gdy ja pracowałam z domu."}
    ],
    "mistakes":[
      {"wrong":"Podczas gdy remontu mieszkamy u Kasi.","right":"<b>Podczas remontu</b> mieszkamy u Kasi.","why":"перед существительным нужен предлог podczas с родительным; podczas gdy ведёт целое предложение с глаголом."},
      {"wrong":"W chwili gdy weszliśmy…","right":"<b>W chwili, gdy</b> weszliśmy…","why":"внутри этого оборота запятая ставится перед gdy — так его пишут всегда."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, союз тут нужен или предлог.",
       "q":"«Во время ремонта живём у Каси» —","opts":["Podczas gdy remontu mieszkamy u Kasi","Podczas remontu mieszkamy u Kasi","Podczas gdy remont mieszkamy u Kasi"],"answer":1,
       "explain":"Перед существительным — предлог: <b>podczas remontu</b> с родительным падежом."},
      {"type":"choice","howto":"<b>Что делать:</b> найди «как только».",
       "q":"«Как только закончат, позвоню» —","opts":["Jak tylko skończą, zadzwonię","Aż skończą, zadzwonię","Podczas gdy skończą, zadzwonię"],"answer":0,
       "explain":"«Как только» — <b>jak tylko</b> или gdy tylko. Aż значит «пока не», podczas gdy — «в то время как»."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Запятую поставь мысленно.",
       "q":"Собери: <b>«Как только вернёшься, напиши»</b>","answer":"Gdy tylko wrócisz napisz"}
    ],
    "mnemonic":"⏱️ jak tylko — точка · podczas gdy — две линии рядом · w chwili, gdy — вспышка."
   },
   {
    "eyebrow":"Правило 4 · Союз или существительное",
    "title":"<em>zanim wyjdziesz</em> = <em>przed wyjściem</em>",
    "paras":[
      "Каждый союз времени можно свернуть в предлог с отглагольным существительным из недели 1 — и наоборот. <b>Zanim wyjdziesz</b> = <b>przed wyjściem</b>. <b>Kiedy skończymy remont</b> = <b>po skończeniu remontu</b>. <b>Dopóki trwa remont</b> = <b>podczas remontu</b> или <b>w trakcie remontu</b>.",
      "Три предлога делают почти всю работу: <b>przed</b> + творительный (przed malowaniem), <b>po</b> + предложный (po malowaniu), <b>podczas</b> и <b>w trakcie</b> + родительный (podczas malowania).",
      "Разница не в смысле, а в тоне. Существительное короче и суше — так пишут объявления и инструкции: <b>Przed rozpoczęciem prac prosimy o kontakt.</b> Союз живее и естественнее в речи: <b>Zanim zaczniemy, zadzwońcie.</b>",
      "Свернуть в существительное можно только тогда, когда действующее лицо у обеих частей одно и то же — здесь работает та же логика, что с żeby из B1. «Прежде чем они начнут, я уеду» уже требует союза: <b>Zanim zaczną, wyjadę.</b>"
    ],
    "audio":"Каждый союз времени можно свернуть в предлог с отглагольным существительным из недели один — и наоборот. Zanim wyjdziesz равно przed wyjściem. Kiedy skończymy remont равно po skończeniu remontu. Dopóki trwa remont равно podczas remontu или w trakcie remontu. Три предлога делают почти всю работу: przed плюс творительный, po плюс предложный, podczas и w trakcie плюс родительный. Разница не в смысле, а в тоне. Существительное короче и суше, так пишут объявления и инструкции: przed rozpoczęciem prac prosimy o kontakt. Союз живее и естественнее в речи. Свернуть в существительное можно только тогда, когда действующее лицо у обеих частей одно и то же. «Прежде чем они начнут, я уеду» уже требует союза: zanim zaczną, wyjadę.",
    "table":{"rows":[
      ["<b>Zanim wyjdziesz</b> → <b>przed wyjściem</b> <button class=\"play\" data-say=\"Zanim wyjdziesz, przed wyjściem\">🔊</button>","прежде чем выйдешь → перед выходом"],
      ["<b>Kiedy skończymy</b> → <b>po skończeniu</b> <button class=\"play\" data-say=\"Kiedy skończymy, po skończeniu\">🔊</button>","когда закончим → после окончания"],
      ["<b>Dopóki trwa remont</b> → <b>podczas remontu</b> <button class=\"play\" data-say=\"Dopóki trwa remont, podczas remontu\">🔊</button>","пока идёт ремонт → во время ремонта"],
      ["<b>Przed rozpoczęciem prac</b> prosimy o kontakt. <button class=\"play\" data-say=\"Przed rozpoczęciem prac prosimy o kontakt\">🔊</button>","язык объявления: сухо и коротко"],
      ["<b>Zanim zaczną</b>, wyjadę. <button class=\"play\" data-say=\"Zanim zaczną, wyjadę\">🔊</button>","лица разные — только союз"]
    ],"star":4},
    "examples":[
      {"ru":"После окончания ремонта устроим новоселье.","en":"<b>Po skończeniu</b> remontu zrobimy parapetówkę.","gloss":"parapetówka — новоселье","say":"Po skończeniu remontu zrobimy parapetówkę."},
      {"ru":"Перед покраской надо накрыть пол.","en":"<b>Przed malowaniem</b> trzeba przykryć podłogę.","say":"Przed malowaniem trzeba przykryć podłogę."},
      {"ru":"Во время ожидания я прочитала весь договор.","en":"<b>Podczas czekania</b> przeczytałam całą umowę.","say":"Podczas czekania przeczytałam całą umowę."}
    ],
    "mistakes":[
      {"wrong":"Przed wyjście zgaś światło.","right":"<b>Przed wyjściem</b> zgaś światło.","why":"przed требует творительного падежа, а отглагольное существительное склоняется как обычное слово среднего рода."},
      {"wrong":"Po skończeniem remontu zrobimy parapetówkę.","right":"<b>Po skończeniu</b> remontu zrobimy parapetówkę.","why":"po в значении «после» идёт с предложным падежом: po skończeniu, po przyjściu, po powrocie."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> сверни союз в существительное и проверь падеж.",
       "q":"«Прежде чем выйдешь, погаси свет» одним словом —","opts":["Przed wyjście zgaś światło","Przed wyjściem zgaś światło","Po wyjściu zgaś światło"],"answer":1,
       "explain":"przed плюс творительный: <b>przed wyjściem</b>. Po wyjściu значило бы «после выхода»."},
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на падеж после po.",
       "q":"«После окончания ремонта» —","opts":["po skończeniu remontu","po skończeniem remontu","po skończenie remontu"],"answer":0,
       "explain":"po в значении «после» — предложный падеж: <b>po skończeniu</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши строчку из объявления. Диакритику можно не ставить.",
       "q":"«Перед началом работ просим о контакте»","accept":["przed rozpoczęciem prac prosimy o kontakt","przed rozpoczeciem prac prosimy o kontakt"],"placeholder":"Przed rozpoczęciem…"}
    ],
    "mnemonic":"🔁 Союз ↔ существительное: zanim ↔ przed, kiedy ↔ po, dopóki ↔ podczas."
   }
 ],
 "dialogue":{
   "intro":"Первый разговор с бригадой в квартире Марека. Тапни по строке — услышишь фразу; посчитай по дороге союзы времени.",
   "lines":[
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Zanim położymy panele, musimy wyrównać podłogę.","ru":"Прежде чем положим ламинат, нужно выровнять пол.",
      "words":[["Zanim","прежде чем"],["wyrównać","выровнять"]]},
     {"who":"M","name":"Marek","side":"left","en":"A ile to potrwa?","ru":"А сколько это займёт?",
      "words":[["potrwa","продлится"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Dwa dni. Potem czekamy, aż wyschnie.","ru":"Два дня. Потом ждём, пока не высохнет.",
      "words":[["aż","пока не"],["wyschnie","высохнет"]]},
     {"who":"A","name":"Anna","side":"left","en":"Czyli dopóki trwa remont, nie da się tu mieszkać?","ru":"То есть пока идёт ремонт, здесь жить не получится?",
      "words":[["dopóki","пока"],["nie da się","не получится"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"W kuchni tak. Ale pokój będzie gotowy, jak tylko skończymy malowanie.","ru":"На кухне — да. Но комната будет готова, как только закончим покраску.",
      "words":[["jak tylko","как только"],["malowanie","покраска"]]},
     {"who":"M","name":"Marek","side":"left","en":"Zanim zaczniecie, chciałbym zobaczyć próbkę koloru.","ru":"Прежде чем начнёте, я хотел бы увидеть образец цвета.",
      "words":[["próbka","образец"],["kolor","цвет"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Jasne. Nie zaczniemy, dopóki państwo nie wybiorą.","ru":"Конечно. Не начнём, пока вы не выберете.",
      "words":[["dopóki nie","пока не"],["wybiorą","выберут"]]},
     {"who":"A","name":"Anna","side":"left","en":"Dobrze. Zadzwonię do pana, gdy tylko zdecydujemy.","ru":"Хорошо. Позвоню вам, как только решим.",
      "words":[["gdy tylko","как только"],["zdecydujemy","решим"]]},
     {"who":"M","name":"Marek","side":"left","en":"A ja przed wyjściem zamknę wodę.","ru":"А я перед уходом перекрою воду.",
      "words":[["przed wyjściem","перед выходом"],["zamknę wodę","перекрою воду"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка: звонок в магазин стройматериалов. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Dzień dobry, chciałabym zapytać o panele.","ru":"Здравствуйте, я хотела бы спросить о ламинате."},
     {"who":"B","en":"Słucham panią. Mamy je na miejscu.","ru":"Слушаю вас. Они у нас в наличии."},
     {"who":"A","en":"Czy mogę zarezerwować, zanim podejmiemy decyzję?","ru":"Могу зарезервировать, прежде чем мы примем решение?"},
     {"who":"B","en":"Oczywiście. Trzymamy towar, aż pani zadzwoni.","ru":"Конечно. Держим товар, пока вы не позвоните."},
     {"who":"A","en":"Świetnie. Odezwę się, jak tylko obejrzymy próbki.","ru":"Отлично. Дам знать, как только посмотрим образцы."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — весь набор союзов времени плюс ремонт, который только начался.",
   "items":[
     {"en":"zanim","ru":"прежде чем (без nie!)","ex":"Zanim wyjdziesz, zgaś światło."},
     {"en":"dopóki","ru":"пока","ex":"Dopóki trwa remont, mieszkamy u Kasi."},
     {"en":"dopóki nie","ru":"пока не","ex":"Nie zaczniemy, dopóki tynk nie wyschnie."},
     {"en":"aż","ru":"пока не (после главной части)","ex":"Poczekam, aż skończą."},
     {"en":"jak tylko / gdy tylko","ru":"как только","ex":"Jak tylko skończą, zadzwonię."},
     {"en":"podczas gdy","ru":"в то время как","ex":"Anna pracowała, podczas gdy ekipa kładła panele."},
     {"en":"w chwili, gdy","ru":"в тот момент, когда","ex":"W chwili, gdy weszliśmy, zaczęło padać."},
     {"en":"przed wyjściem / po skończeniu","ru":"перед выходом / после окончания","ex":"Po skończeniu remontu zrobimy parapetówkę."},
     {"en":"wyrównać podłogę","ru":"выровнять пол","ex":"Zanim położymy panele, wyrównamy podłogę."},
     {"en":"kłaść / położyć panele","ru":"класть / положить ламинат","ex":"Ekipa kładła panele cały dzień."},
     {"en":"tynk wyschnie","ru":"штукатурка высохнет","ex":"Malujemy, gdy tynk wyschnie."},
     {"en":"ekipa remontowa","ru":"ремонтная бригада","ex":"Ekipa remontowa przyszła o siódmej."}
   ]
 },
 "drag":{
   "intro":"Перетащи польский союз к его переводу.",
   "pairs":[["zanim","прежде чем"],["dopóki nie","пока не"],["jak tylko","как только"],["podczas gdy","в то время как"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как в квартире Марека начался ремонт. Отмечай про себя каждый союз времени.",
   "title":"Zanim zaczął się remont",
   "sentences":["W poniedziałek do mieszkania Marka przyszła ekipa remontowa.","Zanim panowie zaczęli pracę, obejrzeli każdy pokój.","Pan Zbyszek powiedział, że najpierw trzeba wyrównać podłogę.","Dopóki trwa remont, mieszkamy u Kasi.","Nie zaczniemy malować, dopóki tynk nie wyschnie.","Poczekamy, aż podłoga będzie gotowa.","Jak tylko wybierzemy kolor, ekipa kupi farbę.","Podczas remontu chodzę do pracy jak zwykle.","Anna pracuje w wydawnictwie, podczas gdy Marek pilnuje robót.","Po skończeniu wszystkiego zrobimy małą parapetówkę."],
   "translation":"В понедельник в квартиру Марека пришла ремонтная бригада. Прежде чем мужчины начали работу, они осмотрели каждую комнату. Пан Збышек сказал, что сначала нужно выровнять пол. Пока идёт ремонт, живём у Каси. Не начнём красить, пока штукатурка не высохнет. Подождём, пока пол не будет готов. Как только выберем цвет, бригада купит краску. Во время ремонта я хожу на работу как обычно. Анна работает в издательстве, в то время как Марек следит за работами. После окончания всего устроим маленькое новоселье."
 },
 "quiz":{
   "intro":"Пять вопросов — и союзы времени встанут на место.",
   "items":[
     {"q":"1. «Прежде чем выйдешь, погаси свет» —","opts":["Zanim nie wyjdziesz, zgaś światło","Zanim wyjdziesz, zgaś światło","Dopóki wyjdziesz, zgaś światło"],"answer":1,
      "explain":"После zanim частицы nie не бывает: <b>Zanim wyjdziesz</b>."},
     {"q":"2. «Не начнём, пока штукатурка не высохнет» —","opts":["dopóki tynk nie wyschnie","zanim tynk nie wyschnie","aż tynk nie wyschnie"],"answer":0,
      "explain":"«Пока не» с отрицанием — только <b>dopóki nie</b>. У zanim и aż отрицания не бывает."},
     {"q":"3. «Подожду, пока они не закончат» —","opts":["Poczekam, aż nie skończą","Poczekam, aż skończą","Poczekam, zanim skończą"],"answer":1,
      "explain":"<b>Aż</b> уже содержит смысл «пока не», поэтому идёт без nie."},
     {"q":"4. «Анна работала, в то время как бригада клала ламинат» —","opts":["podczas ekipa kładła panele","podczas gdy ekipa kładła panele","aż ekipa kładła panele"],"answer":1,
      "explain":"Перед целым предложением нужен союз <b>podczas gdy</b>; podczas — предлог и требует существительного."},
     {"q":"5. Как свернуть <b>zanim wyjdziesz</b> в существительное?","opts":["przed wyjściem","po wyjściu","podczas wyjścia"],"answer":0,
      "explain":"«Прежде чем» = <b>przed</b> плюс творительный: przed wyjściem."}
   ]
 },
 "essay":{
   "intro":"Сегодня попробуй рассказать о порядке дел — сначала одно, потом другое.",
   "prompt":"Напиши 5–6 предложений о деле, которое ты сейчас делаешь по шагам (ремонт, переезд, проект): что нужно сделать прежде всего, чего ты ждёшь, что происходит одновременно и что будет после окончания.",
   "hint":"Опора: Zanim… · Dopóki (nie)… · Poczekam, aż… · Jak tylko… · Podczas gdy… · Po skończeniu… 📝",
   "example":"Zanim zaczęliśmy remont, zrobiliśmy listę wszystkiego do zrobienia. Dopóki trwają prace, mieszkamy u koleżanki. Nie kupimy mebli, dopóki nie skończą podłogi. Poczekam, aż wyschnie farba, i dopiero wtedy powieszę półki. Jak tylko dostanę wolny dzień, pojadę po lampy. Po skończeniu remontu zaprosimy wszystkich na kolację."
 }
},
"16": {
 "day":16,"week":"03",
 "themeRu":"Разве что, хотя бы",
 "themeEn":"Chyba że, o ile",
 "intro":"Договорённость с бригадой держится на маленьких словах: «сделаем в пятницу — разве что привезут не тот ламинат», «заплатим при условии, что закончат в срок». Сегодня — тонкие условия и уступки: <b>chyba że</b>, <b>o ile</b>, <b>pod warunkiem że</b>, <b>w razie</b>, и рядом с ними уступительные <b>mimo że</b>, <b>choć</b>, <b>a mimo to</b>. Русские двойники у всех есть, дело только в оттенке.",
 "introAudio":"Договорённость с бригадой держится на маленьких словах: «сделаем в пятницу, разве что привезут не тот ламинат», «заплатим при условии, что закончат в срок». Сегодня тонкие условия и уступки: chyba że, o ile, pod warunkiem że, w razie, и рядом с ними уступительные mimo że, choć, a mimo to. Русские двойники у всех есть, дело только в оттенке.",
 "goals":[
   "Ставить оговорку: <b>Pójdziemy, chyba że będzie padać</b>",
   "Уточнять условие: <b>o ile</b>, <b>pod warunkiem że</b>, <b>jeśli tylko</b>, <b>w razie</b> + род.",
   "Различать <b>nawet jeśli</b> (реально) и <b>nawet gdyby</b> (нереально)",
   "Уступать: <b>mimo że</b>, <b>choć</b>, <b>a mimo to</b>, <b>przecież</b>"
 ],
 "learned":[
   "Поставил(а) оговорку: Pójdziemy, chyba że będzie padać",
   "Уточнил(а) условие: o ile, pod warunkiem że, jeśli tylko, w razie + род.",
   "Различил(а) nawet jeśli и nawet gdyby",
   "Уступил(а): mimo że, choć, a mimo to, przecież"
 ],
 "review":{
   "intro":"Разминка: вчерашние союзы времени и два слова из недели 2 — управление и предлог с оттенком.",
   "introAudio":"Разминка: вчерашние союзы времени и два слова из недели два — управление и предлог с оттенком.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 15.",
      "q":"«Прежде чем заплатишь, прочитай договор» —","opts":["Zanim nie zapłacisz, przeczytaj umowę","Zanim zapłacisz, przeczytaj umowę","Dopóki zapłacisz, przeczytaj umowę"],"answer":1,
      "explain":"После zanim nie не ставится: <b>Zanim zapłacisz</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 15.",
      "q":"«Подожду, пока он не придёт» —","opts":["Poczekam, aż przyjdzie","Poczekam, aż nie przyjdzie","Poczekam, zanim nie przyjdzie"],"answer":0,
      "explain":"<b>Aż</b> значит «пока не» и идёт без отрицания."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни трудное управление из недели 2.",
      "q":"Wszystko zależy ___ pogody.","opts":["od","na","o"],"answer":0,
      "explain":"<b>zależeć od</b> + родительный — здесь польский и русский совпадают: «зависит от погоды»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни пару предлогов из недели 2.",
      "q":"«Крем для рук» —","opts":["krem dla rąk","krem do rąk","krem na ręce"],"answer":1,
      "explain":"Назначение вещи — <b>do</b> + родительный: krem do rąk. Dla ставят перед человеком: krem dla dzieci."}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Оговорка",
    "title":"<em>chyba że</em> — «разве что»",
    "paras":[
      "<b>Chyba że</b> — это «разве что» или «если только не». Ты обещаешь одно и тут же оставляешь себе выход: <b>Pójdziemy na spacer, chyba że będzie padać.</b> <b>Skończymy w piątek, chyba że coś się popsuje.</b>",
      "Устроено просто: главная часть впереди, оговорка сзади, запятая перед chyba. После него — обычная личная форма глагола, никакого сослагательного: <b>chyba że będzie padać</b>, а не «chyba że padałoby».",
      "Не путай с наречием <b>chyba</b> («наверное»), которое живёт само по себе: <b>Chyba pada.</b> — «Кажется, идёт дождь». Разница видна по że: с ним — оговорка, без него — предположение.",
      "Тот же смысл можно сказать через <b>o ile nie</b> (правило 2) или через <b>jeśli nie</b>, но chyba że звучит естественнее всего в живой договорённости: именно так поляки закрывают разговор о сроках."
    ],
    "audio":"Chyba że — это «разве что» или «если только не». Ты обещаешь одно и тут же оставляешь себе выход: pójdziemy na spacer, chyba że będzie padać. Skończymy w piątek, chyba że coś się popsuje. Устроено просто: главная часть впереди, оговорка сзади, запятая перед chyba. После него обычная личная форма глагола, никакого сослагательного. Не путай с наречием chyba, «наверное», которое живёт само по себе: chyba pada, кажется, идёт дождь. Разница видна по że: с ним оговорка, без него предположение. Тот же смысл можно сказать через o ile nie или jeśli nie, но chyba że звучит естественнее всего в живой договорённости.",
    "table":{"rows":[
      ["Pójdziemy na spacer, <b>chyba że</b> będzie padać. <button class=\"play\" data-say=\"Pójdziemy na spacer, chyba że będzie padać\">🔊</button>","Пойдём гулять, разве что будет дождь."],
      ["Skończymy w piątek, <b>chyba że</b> coś się popsuje. <button class=\"play\" data-say=\"Skończymy w piątek, chyba że coś się popsuje\">🔊</button>","Закончим в пятницу, разве что что-нибудь сломается."],
      ["Nie zdążą, <b>chyba że</b> przyjdą wcześniej. <button class=\"play\" data-say=\"Nie zdążą, chyba że przyjdą wcześniej\">🔊</button>","Не успеют, разве что придут раньше."],
      ["<b>Chyba</b> pada. <button class=\"play\" data-say=\"Chyba pada\">🔊</button>","Кажется, идёт дождь. (наречие, без że)"],
      ["<b>chyba że</b> = <b>jeśli nie</b> = <b>o ile nie</b> <button class=\"play\" data-say=\"chyba że, jeśli nie, o ile nie\">🔊</button>","три способа сказать одно и то же"]
    ],"star":0},
    "examples":[
      {"ru":"Заедем к вам вечером, разве что задержимся на работе.","en":"Wpadniemy do was wieczorem, <b>chyba że</b> zostaniemy dłużej w pracy.","gloss":"wpaść do kogoś — заскочить к кому-то","say":"Wpadniemy do was wieczorem, chyba że zostaniemy dłużej w pracy."},
      {"ru":"Ламинат положат завтра, разве что привезут не тот цвет.","en":"Panele położą jutro, <b>chyba że</b> przywiozą zły kolor.","say":"Panele położą jutro, chyba że przywiozą zły kolor."},
      {"ru":"Мне ничего не нужно, разве что кофе.","en":"Niczego nie potrzebuję, <b>chyba że</b> kawy.","gloss":"potrzebować + родительный — рекция из недели 2","say":"Niczego nie potrzebuję, chyba że kawy."}
    ],
    "mistakes":[
      {"wrong":"Pójdziemy na spacer, chyba padałoby.","right":"Pójdziemy na spacer, <b>chyba że będzie padać</b>.","why":"оговорку вводит целое сочетание chyba że, и после него стоит обычное будущее время."},
      {"wrong":"Chyba że pada. (в смысле «кажется, идёт дождь»)","right":"<b>Chyba pada.</b>","why":"без że это наречие «наверное, кажется». С że получается оговорка «разве что»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, это оговорка или предположение.",
       "q":"«Закончим в пятницу, разве что что-нибудь сломается» —","opts":["chyba coś się popsuje","chyba że coś się popsuje","chyba żeby coś się popsuło"],"answer":1,
       "explain":"Оговорку вводит <b>chyba że</b> плюс обычная форма глагола."},
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, есть ли że.",
       "q":"<b>Chyba pada.</b> значит —","opts":["Кажется, идёт дождь","Разве что пойдёт дождь","Хотя идёт дождь"],"answer":0,
       "explain":"Без że слово chyba — это наречие «наверное, кажется»."},
      {"type":"type","howto":"<b>Что делать:</b> напиши фразу с запятой. Диакритику можно не ставить.",
       "q":"«Пойдём гулять, разве что будет дождь»","accept":["pójdziemy na spacer, chyba że będzie padać","pojdziemy na spacer, chyba ze bedzie padac","pójdziemy na spacer chyba że będzie padać","pojdziemy na spacer chyba ze bedzie padac"],"placeholder":"Pójdziemy na spacer, …"}
    ],
    "mnemonic":"🌂 chyba że = разве что. С że — оговорка, без że — «наверное»."
   },
   {
    "eyebrow":"Правило 2 · Условие с уточнением",
    "title":"<em>o ile</em> · <em>pod warunkiem że</em> · <em>w razie</em>",
    "paras":[
      "<b>O ile</b> живёт в двух смыслах. Первый — «насколько», в готовых оборотах: <b>O ile wiem, ekipa przyjdzie w poniedziałek.</b> <b>O ile pamiętam, płaciliśmy z góry.</b> Второй — осторожное «если»: <b>O ile zdążą, skończą w piątek.</b> Отрицательный вариант <b>o ile nie</b> равен chyba że.",
      "<b>Pod warunkiem że</b> — «при условии что», сухо и по-деловому: <b>Zapłacimy, pod warunkiem że skończą w terminie.</b> Пишут и <b>pod warunkiem, że</b> — обе постановки запятой встречаются, ошибкой это не считается.",
      "<b>Jeśli tylko</b> — «если только», с оттенком «была бы возможность»: <b>Jeśli tylko będę mogła, przyjdę.</b> А <b>w razie</b> + родительный ставится перед существительным: <b>w razie potrzeby</b>, <b>w razie awarii</b>, <b>w razie deszczu</b> — это язык объявлений и инструкций.",
      "Проверка одна: если дальше идёт целое предложение с глаголом — берём союз (o ile, pod warunkiem że, jeśli tylko). Если одно существительное — берём предлог <b>w razie</b> с родительным."
    ],
    "audio":"O ile живёт в двух смыслах. Первый — «насколько», в готовых оборотах: o ile wiem, ekipa przyjdzie w poniedziałek. O ile pamiętam, płaciliśmy z góry. Второй — осторожное «если»: o ile zdążą, skończą w piątek. Отрицательный вариант o ile nie равен chyba że. Pod warunkiem że — «при условии что», сухо и по-деловому: zapłacimy, pod warunkiem że skończą w terminie. Пишут и pod warunkiem, że — обе постановки запятой встречаются. Jeśli tylko — «если только», с оттенком «была бы возможность». А w razie плюс родительный ставится перед существительным: w razie potrzeby, w razie awarii, w razie deszczu — это язык объявлений и инструкций. Проверка одна: если дальше идёт целое предложение с глаголом, берём союз. Если одно существительное, берём предлог w razie с родительным.",
    "table":{"rows":[
      ["<b>O ile wiem</b>, ekipa przyjdzie w poniedziałek. <button class=\"play\" data-say=\"O ile wiem, ekipa przyjdzie w poniedziałek\">🔊</button>","Насколько я знаю, бригада придёт в понедельник."],
      ["<b>O ile</b> zdążą, skończą w piątek. <button class=\"play\" data-say=\"O ile zdążą, skończą w piątek\">🔊</button>","Если успеют, закончат в пятницу."],
      ["Zapłacimy, <b>pod warunkiem że</b> skończą w terminie. <button class=\"play\" data-say=\"Zapłacimy, pod warunkiem że skończą w terminie\">🔊</button>","Заплатим при условии, что закончат в срок."],
      ["<b>Jeśli tylko</b> będę mogła, przyjdę. <button class=\"play\" data-say=\"Jeśli tylko będę mogła, przyjdę\">🔊</button>","Если только смогу, приду."],
      ["<b>W razie</b> awarii proszę dzwonić. <button class=\"play\" data-say=\"W razie awarii proszę dzwonić\">🔊</button>","В случае аварии просьба звонить. (+ род.)"]
    ],"star":2},
    "examples":[
      {"ru":"Насколько я помню, мы платили вперёд.","en":"<b>O ile pamiętam</b>, płaciliśmy z góry.","gloss":"z góry — заранее, вперёд","say":"O ile pamiętam, płaciliśmy z góry."},
      {"ru":"Возьмём эту бригаду при условии, что дадут гарантию.","en":"Weźmiemy tę ekipę, <b>pod warunkiem że</b> dadzą gwarancję.","gloss":"brać / wziąć — супплетивная пара из недели 1","say":"Weźmiemy tę ekipę, pod warunkiem że dadzą gwarancję."},
      {"ru":"В случае необходимости позвоните электрику.","en":"<b>W razie potrzeby</b> proszę zadzwonić do elektryka.","say":"W razie potrzeby proszę zadzwonić do elektryka."}
    ],
    "mistakes":[
      {"wrong":"W razie skończą wcześniej, zapłacimy.","right":"<b>Pod warunkiem że</b> skończą wcześniej, zapłacimy.","why":"w razie идёт только с существительным в родительном; перед глаголом нужен союз."},
      {"wrong":"W razie awaria proszę dzwonić.","right":"<b>W razie awarii</b> proszę dzwonić.","why":"после w razie всегда родительный падеж: awarii, potrzeby, deszczu."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, что идёт дальше — глагол или существительное.",
       "q":"«В случае аварии просьба звонить» —","opts":["W razie awaria proszę dzwonić","W razie awarii proszę dzwonić","O ile awarii proszę dzwonić"],"answer":1,
       "explain":"<b>w razie</b> плюс родительный падеж: w razie <b>awarii</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> найди деловое «при условии что».",
       "q":"«Заплатим при условии, что закончат в срок» —","opts":["chyba że skończą w terminie","pod warunkiem że skończą w terminie","o ile wiem, skończą w terminie"],"answer":1,
       "explain":"Условие сделки — <b>pod warunkiem że</b>. Chyba że была бы оговорка, o ile wiem — «насколько я знаю»."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"O ile wiem, ekipa przyjdzie w poniedziałek.","sub":"насколько я знаю, бригада придёт в понедельник","want":"O ile wiem"}
    ],
    "mnemonic":"📋 o ile — насколько / если · pod warunkiem że — при условии · w razie + род. — в случае."
   },
   {
    "eyebrow":"Правило 3 · Даже если",
    "title":"<em>nawet jeśli</em> против <em>nawet gdyby</em>",
    "paras":[
      "Табличка «реальное — нереальное» из B1 получает ещё одну строку. <b>Nawet jeśli</b> — про то, что вполне может случиться: <b>Nawet jeśli będzie padać, pojedziemy.</b> Обе части в обычном будущем.",
      "<b>Nawet gdyby</b> — про воображаемое, и здесь работает вся механика gdyby: союз забирает окончание (<b>nawet gdybym, nawet gdybyś</b>), глагол стоит в л-форме, а во второй части появляется by: <b>Nawet gdyby padało, pojechalibyśmy.</b>",
      "Смешивать миры нельзя, как и раньше: ни «nawet gdyby będzie padać», ни «nawet jeśli padałoby». Проверка простая — если ты и правда допускаешь такое развитие событий, это jeśli; если фантазируешь, это gdyby.",
      "Рядом живёт короткое <b>choćby</b> — «хоть бы, хотя бы»: <b>Przyjdź choćby na chwilę.</b> Оно же значит «пусть даже»: <b>Zrobię to, choćby miało mi to zająć cały dzień.</b> Ближайший нейтральный синоним первого смысла — <b>przynajmniej</b> («по крайней мере»)."
    ],
    "audio":"Табличка «реальное — нереальное» из B1 получает ещё одну строку. Nawet jeśli — про то, что вполне может случиться: nawet jeśli będzie padać, pojedziemy. Обе части в обычном будущем. Nawet gdyby — про воображаемое, и здесь работает вся механика gdyby: союз забирает окончание, глагол стоит в л-форме, а во второй части появляется by: nawet gdyby padało, pojechalibyśmy. Смешивать миры нельзя, как и раньше. Проверка простая: если ты и правда допускаешь такое развитие событий, это jeśli; если фантазируешь, это gdyby. Рядом живёт короткое choćby — «хоть бы, хотя бы»: przyjdź choćby na chwilę. Оно же значит «пусть даже». Ближайший нейтральный синоним первого смысла — przynajmniej, по крайней мере.",
    "table":{"rows":[
      ["<b>Nawet jeśli</b> będzie padać, pojedziemy. <button class=\"play\" data-say=\"Nawet jeśli będzie padać, pojedziemy\">🔊</button>","Даже если будет дождь, поедем. (реально)"],
      ["<b>Nawet gdyby</b> padało, pojechalibyśmy. <button class=\"play\" data-say=\"Nawet gdyby padało, pojechalibyśmy\">🔊</button>","Даже если бы шёл дождь, мы бы поехали."],
      ["<b>Nawet gdybym</b> miała czas, nie poszłabym. <button class=\"play\" data-say=\"Nawet gdybym miała czas, nie poszłabym\">🔊</button>","Даже если бы у меня было время, я бы не пошла."],
      ["Przyjdź <b>choćby</b> na chwilę. <button class=\"play\" data-say=\"Przyjdź choćby na chwilę\">🔊</button>","Приди хотя бы на минутку."],
      ["Daj mi <b>przynajmniej</b> dzień. <button class=\"play\" data-say=\"Daj mi przynajmniej dzień\">🔊</button>","Дай мне по крайней мере день."]
    ],"star":1},
    "examples":[
      {"ru":"Даже если задержатся, работу закончат.","en":"<b>Nawet jeśli</b> się spóźnią, dokończą robotę.","gloss":"dokończyć — приставка do- «до конца»","say":"Nawet jeśli się spóźnią, dokończą robotę."},
      {"ru":"Даже если бы у нас было больше денег, мы бы не меняли окна сейчас.","en":"<b>Nawet gdybyśmy mieli</b> więcej pieniędzy, nie <b>wymienialibyśmy</b> teraz okien.","say":"Nawet gdybyśmy mieli więcej pieniędzy, nie wymienialibyśmy teraz okien."},
      {"ru":"Напиши хотя бы пару слов.","en":"Napisz <b>choćby</b> parę słów.","say":"Napisz choćby parę słów."}
    ],
    "mistakes":[
      {"wrong":"Nawet gdyby będzie padać, pojedziemy.","right":"<b>Nawet gdyby padało</b>, pojechalibyśmy.","why":"после gdyby стоит л-форма, а не будущее время; и вторая часть тогда тоже идёт с by."},
      {"wrong":"Nawet jeśli padałoby, pojechalibyśmy.","right":"<b>Nawet jeśli</b> będzie padać, <b>pojedziemy</b>.","why":"jeśli — реальный мир: в обеих частях обычное будущее."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, реальность это или фантазия.",
       "q":"«Даже если будет дождь, поедем» —","opts":["Nawet gdyby padało, pojedziemy","Nawet jeśli będzie padać, pojedziemy","Nawet jeśli padałoby, pojechalibyśmy"],"answer":1,
       "explain":"Дождь вполне возможен — реальный мир: <b>nawet jeśli</b> плюс будущее в обеих частях."},
      {"type":"choice","howto":"<b>Что делать:</b> проверь, где сидит личное окончание.",
       "q":"«Даже если бы у меня было время, я бы не пошла» —","opts":["Nawet gdyby miałam czas, nie poszłabym","Nawet gdybym miała czas, nie poszłabym","Nawet gdybym miałabym czas, nie poszłabym"],"answer":1,
       "explain":"Окончание -m уже на союзе: <b>gdybym miała</b>, глагол остаётся голым."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Запятую поставь мысленно.",
       "q":"Собери: <b>«Приди хотя бы на минутку»</b>","answer":"Przyjdź choćby na chwilę"}
    ],
    "mnemonic":"🌧️ nawet jeśli + будущее (может быть) · nawet gdyby + л-форма + by (фантазия)."
   },
   {
    "eyebrow":"Правило 4 · Уступка",
    "title":"<em>mimo że</em> · <em>choć</em> · <em>a mimo to</em>",
    "paras":[
      "Уступка — это «сделали, хотя мешало». Три равных союза: <b>mimo że</b>, <b>chociaż</b> и его короткий брат <b>choć</b>. <b>Poszliśmy na spacer, mimo że padało.</b> <b>Choć byłam zmęczona, dokończyłam tekst.</b> Разница только в длине слова, не в смысле.",
      "Перед существительным союз меняется на предлог: <b>mimo</b> (или <b>pomimo</b>) + родительный. <b>Mimo deszczu poszliśmy na spacer.</b> Та же логика, что вчера с podczas.",
      "<b>Mimo to</b> — это уже не союз, а «несмотря на это», и стоит оно во второй части: <b>Padało, a mimo to poszliśmy.</b> Пара mimo że / mimo to была ещё в B1 — сегодня она просто встаёт в общий ряд.",
      "И два слова-приправы. <b>Przecież</b> — «ведь», напоминание о том, что собеседник и сам знает: <b>Przecież mówiłam ci o tym.</b> <b>Zresztą</b> — «впрочем», поворот к добавочной мысли: <b>Nie zdążyli. Zresztą i tak było za zimno na malowanie.</b>"
    ],
    "audio":"Уступка — это «сделали, хотя мешало». Три равных союза: mimo że, chociaż и его короткий брат choć. Poszliśmy na spacer, mimo że padało. Choć byłam zmęczona, dokończyłam tekst. Разница только в длине слова, не в смысле. Перед существительным союз меняется на предлог: mimo или pomimo плюс родительный. Mimo deszczu poszliśmy na spacer. Та же логика, что вчера с podczas. Mimo to — это уже не союз, а «несмотря на это», и стоит оно во второй части: padało, a mimo to poszliśmy. И два слова-приправы. Przecież — «ведь», напоминание о том, что собеседник и сам знает. Zresztą — «впрочем», поворот к добавочной мысли.",
    "table":{"rows":[
      ["Poszliśmy na spacer, <b>mimo że</b> padało. <button class=\"play\" data-say=\"Poszliśmy na spacer, mimo że padało\">🔊</button>","Пошли гулять, хотя шёл дождь."],
      ["<b>Choć</b> byłam zmęczona, dokończyłam tekst. <button class=\"play\" data-say=\"Choć byłam zmęczona, dokończyłam tekst\">🔊</button>","Хотя я устала, я дописала текст."],
      ["<b>Mimo deszczu</b> poszliśmy na spacer. <button class=\"play\" data-say=\"Mimo deszczu poszliśmy na spacer\">🔊</button>","Несмотря на дождь, пошли гулять. (+ род.)"],
      ["Padało, <b>a mimo to</b> poszliśmy. <button class=\"play\" data-say=\"Padało, a mimo to poszliśmy\">🔊</button>","Шёл дождь, и несмотря на это мы пошли."],
      ["<b>Przecież</b> mówiłam ci o tym. · <b>Zresztą</b> i tak było za zimno. <button class=\"play\" data-say=\"Przecież mówiłam ci o tym. Zresztą i tak było za zimno.\">🔊</button>","ведь… · впрочем…"]
    ],"star":3},
    "examples":[
      {"ru":"Бригада работала, хотя было очень холодно.","en":"Ekipa pracowała, <b>mimo że</b> było bardzo zimno.","say":"Ekipa pracowała, mimo że było bardzo zimno."},
      {"ru":"Несмотря на задержку, мы довольны результатом.","en":"<b>Mimo opóźnienia</b> jesteśmy zadowoleni z efektu.","gloss":"opóźnienie — задержка; zadowolony z + род.","say":"Mimo opóźnienia jesteśmy zadowoleni z efektu."},
      {"ru":"Обещали пятницу, и всё же закончили только во вторник.","en":"Obiecali piątek, <b>a mimo to</b> skończyli dopiero we wtorek.","say":"Obiecali piątek, a mimo to skończyli dopiero we wtorek."}
    ],
    "mistakes":[
      {"wrong":"Mimo że deszczu poszliśmy na spacer.","right":"<b>Mimo deszczu</b> poszliśmy na spacer.","why":"перед существительным нужен предлог mimo с родительным; mimo że ведёт целое предложение."},
      {"wrong":"Mimo to padało, poszliśmy.","right":"Padało, <b>a mimo to</b> poszliśmy.","why":"mimo to значит «несмотря на это» и стоит во второй части, там, где результат."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, нужен союз или предлог.",
       "q":"«Несмотря на дождь, пошли гулять» —","opts":["Mimo że deszczu poszliśmy na spacer","Mimo deszczu poszliśmy na spacer","Mimo to deszczu poszliśmy na spacer"],"answer":1,
       "explain":"Перед существительным — <b>mimo</b> плюс родительный: mimo deszczu."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что значит przecież.",
       "q":"<b>Przecież mówiłam ci o tym.</b> —","opts":["Ведь я тебе об этом говорила","Впрочем, я тебе об этом говорила","Хотя я тебе об этом говорила"],"answer":0,
       "explain":"<b>Przecież</b> — «ведь». «Впрочем» — zresztą, «хотя» — choć."},
      {"type":"type","howto":"<b>Что делать:</b> напиши уступку. Диакритику можно не ставить.",
       "q":"«Пошли гулять, хотя шёл дождь»","accept":["poszliśmy na spacer, mimo że padało","poszlismy na spacer, mimo ze padalo","poszliśmy na spacer mimo że padało","poszlismy na spacer mimo ze padalo","poszliśmy na spacer, choć padało","poszlismy na spacer, choc padalo"],"placeholder":"Poszliśmy na spacer, …"}
    ],
    "mnemonic":"🌦️ mimo że / choć + предложение · mimo + род. · a mimo to — во второй части."
   }
 ],
 "dialogue":{
   "intro":"Марек и пан Збышек договариваются об условиях и сроках. Тапни по строке — услышишь фразу.",
   "lines":[
     {"who":"M","name":"Marek","side":"left","en":"Panie Zbyszku, kiedy realnie skończycie?","ru":"Пан Збышек, когда реально закончите?",
      "words":[["realnie","реально"],["skończycie","закончите"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"W piątek, chyba że hurtownia znowu się spóźni.","ru":"В пятницу, разве что склад снова задержится.",
      "words":[["chyba że","разве что"],["hurtownia","оптовый склад"]]},
     {"who":"M","name":"Marek","side":"left","en":"Zapłacę całość, pod warunkiem że skończycie w terminie.","ru":"Заплачу всё, при условии что закончите в срок.",
      "words":[["pod warunkiem że","при условии что"],["w terminie","в срок"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Zgoda. O ile pamiętam, zaliczkę już państwo dali.","ru":"Согласен. Насколько помню, аванс вы уже дали.",
      "words":[["O ile pamiętam","насколько помню"],["zaliczka","аванс"]]},
     {"who":"A","name":"Anna","side":"left","en":"A w razie awarii dzwonimy do pana czy do hydraulika?","ru":"А в случае аварии звоним вам или сантехнику?",
      "words":[["w razie awarii","в случае аварии"],["hydraulik","сантехник"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Do mnie. Przecież to my kładliśmy rury.","ru":"Мне. Ведь это мы клали трубы.",
      "words":[["Przecież","ведь"],["rury","трубы"]]},
     {"who":"M","name":"Marek","side":"left","en":"Nawet jeśli coś pęknie w nocy?","ru":"Даже если что-нибудь лопнет ночью?",
      "words":[["Nawet jeśli","даже если"],["pęknie","лопнет"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Nawet wtedy. Choć szczerze mówiąc, nic nie powinno pęknąć.","ru":"Даже тогда. Хотя, честно говоря, ничего не должно лопнуть.",
      "words":[["Choć","хотя"],["szczerze mówiąc","честно говоря"]]},
     {"who":"A","name":"Anna","side":"left","en":"Dobrze. Zresztą i tak będziemy tu codziennie.","ru":"Хорошо. Впрочем, мы и так будем здесь каждый день.",
      "words":[["Zresztą","впрочем"],["i tak","и так, всё равно"]]}
   ]
 },
 "scene":{
   "intro":"Сценка в издательстве: Анна и её начальница о сроках. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Oddam tekst w środę, chyba że pojawią się nowe poprawki.","ru":"Сдам текст в среду, разве что появятся новые правки."},
     {"who":"B","en":"Poprawki będą, o ile autor odpisze na czas.","ru":"Правки будут, если автор ответит вовремя."},
     {"who":"A","en":"Mogę zostać dłużej, pod warunkiem że dostanę wolne w piątek.","ru":"Могу остаться подольше при условии, что получу отгул в пятницу."},
     {"who":"B","en":"Umowa stoi. Nawet jeśli autor się spóźni, damy radę.","ru":"Договорились. Даже если автор опоздает, справимся."},
     {"who":"A","en":"Świetnie. Mimo remontu w domu pracuje mi się spokojnie.","ru":"Отлично. Несмотря на ремонт дома, работается мне спокойно."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — оговорки, условия и уступки: вся дипломатия в двенадцати выражениях.",
   "items":[
     {"en":"chyba że","ru":"разве что, если только не","ex":"Skończymy w piątek, chyba że coś się popsuje."},
     {"en":"o ile wiem / o ile pamiętam","ru":"насколько я знаю / насколько помню","ex":"O ile wiem, ekipa przyjdzie w poniedziałek."},
     {"en":"pod warunkiem że","ru":"при условии что","ex":"Zapłacimy, pod warunkiem że skończą w terminie."},
     {"en":"jeśli tylko","ru":"если только","ex":"Jeśli tylko będę mogła, przyjdę."},
     {"en":"w razie czegoś","ru":"в случае чего-то (+ род.)","ex":"W razie awarii proszę dzwonić."},
     {"en":"nawet jeśli","ru":"даже если (реально)","ex":"Nawet jeśli będzie padać, pojedziemy."},
     {"en":"nawet gdyby","ru":"даже если бы","ex":"Nawet gdyby padało, pojechalibyśmy."},
     {"en":"mimo że / chociaż / choć","ru":"хотя, несмотря на то что","ex":"Poszliśmy na spacer, mimo że padało."},
     {"en":"mimo czegoś","ru":"несмотря на (+ род.)","ex":"Mimo deszczu poszliśmy na spacer."},
     {"en":"a mimo to","ru":"и несмотря на это","ex":"Padało, a mimo to poszliśmy."},
     {"en":"przecież","ru":"ведь","ex":"Przecież mówiłam ci o tym."},
     {"en":"zresztą","ru":"впрочем","ex":"Zresztą i tak było za zimno."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское выражение к его переводу.",
   "pairs":[["chyba że","разве что"],["pod warunkiem że","при условии что"],["nawet gdyby","даже если бы"],["a mimo to","и несмотря на это"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как Анна записала договорённости с бригадой. Отмечай оговорки и уступки.",
   "title":"Umówione warunki",
   "sentences":["Ekipa obiecała skończyć w piątek, chyba że hurtownia się spóźni.","O ile pamiętam, zaliczkę zapłaciliśmy już w zeszłym tygodniu.","Resztę oddamy, pod warunkiem że wszystko będzie zrobione porządnie.","W razie awarii mamy dzwonić bezpośrednio do pana Zbyszka.","Jeśli tylko dostanę wolny dzień, pojadę wybrać lampy.","Nawet jeśli panele przyjdą później, malowanie ruszy zgodnie z planem.","Nawet gdybyśmy mieli więcej czasu, nie zmienialibyśmy okien w tym roku.","Mimo hałasu pracuje mi się w domu całkiem dobrze.","Sąsiadka narzeka, a mimo to codziennie przynosi panom herbatę.","Przecież to tylko trzy tygodnie — zresztą już połowa za nami."],
   "translation":"Бригада обещала закончить в пятницу, разве что склад задержится. Насколько я помню, аванс мы заплатили ещё на прошлой неделе. Остальное отдадим при условии, что всё будет сделано аккуратно. В случае аварии нам нужно звонить прямо пану Збышеку. Если только получу свободный день, поеду выбирать лампы. Даже если ламинат придёт позже, покраска начнётся по плану. Даже если бы у нас было больше времени, мы бы не меняли окна в этом году. Несмотря на шум, работается мне дома вполне неплохо. Соседка ворчит, и несмотря на это каждый день приносит мужчинам чай. Ведь это всего три недели — впрочем, половина уже позади."
 },
 "quiz":{
   "intro":"Пять вопросов на оттенки условия и уступки.",
   "items":[
     {"q":"1. «Закончим в пятницу, разве что что-нибудь сломается» —","opts":["chyba coś się popsuje","chyba że coś się popsuje","mimo że coś się popsuje"],"answer":1,
      "explain":"Оговорку вводит <b>chyba że</b>; без że это наречие «наверное»."},
     {"q":"2. «В случае необходимости» —","opts":["w razie potrzeba","w razie potrzeby","w razie potrzebie"],"answer":1,
      "explain":"После <b>w razie</b> всегда родительный падеж: potrzeby."},
     {"q":"3. «Даже если бы шёл дождь, мы бы поехали» —","opts":["Nawet gdyby będzie padać, pojedziemy","Nawet gdyby padało, pojechalibyśmy","Nawet jeśli padałoby, pojedziemy"],"answer":1,
      "explain":"Воображаемый мир: после gdyby — л-форма, во второй части глагол с by."},
     {"q":"4. «Несмотря на дождь» —","opts":["mimo deszczu","mimo że deszczu","mimo to deszczu"],"answer":0,
      "explain":"Перед существительным — предлог <b>mimo</b> с родительным."},
     {"q":"5. <b>Zresztą</b> значит —","opts":["ведь","впрочем","хотя"],"answer":1,
      "explain":"<b>Zresztą</b> — «впрочем». «Ведь» — przecież, «хотя» — choć."}
   ]
 },
 "essay":{
   "intro":"Сегодняшний текст — про договорённость: обещание с оговоркой всегда звучит взрослее, чем обещание без неё.",
   "prompt":"Напиши 5–6 предложений о плане на ближайшую неделю: что ты сделаешь и при каком условии, что может помешать, чего ты сделаешь даже вопреки помехе.",
   "hint":"Опора: …, chyba że… · pod warunkiem że… · o ile… · w razie… · nawet jeśli… · mimo że… 📝",
   "example":"W sobotę pojadę do rodziców, chyba że w pracy pojawi się coś pilnego. Wezmę wolne w piątek, pod warunkiem że skończę tekst wcześniej. O ile pamiętam, pociąg jest o siódmej, więc muszę wstać bardzo wcześnie. W razie opóźnienia zadzwonię i uprzedzę. Nawet jeśli będzie padać, pójdziemy z mamą na spacer. Mimo zmęczenia cieszę się na ten weekend."
 }
},
"17": {
 "day":17,"week":"03",
 "themeRu":"Потому что по-взрослому",
 "themeEn":"Ponieważ, skoro, zatem",
 "intro":"Одно и то же «потому что» звучит в польском по-разному в зависимости от того, кому ты это говоришь. Мареку — <b>bo</b>. В письме на работу — <b>ponieważ</b>. В документе из управы ты прочитаешь <b>gdyż</b> или даже <b>bowiem</b>. Сегодня разложим причину и следствие по регистрам — и заодно разберёмся, почему <b>bo</b> не может стоять в начале сложного предложения.",
 "introAudio":"Одно и то же «потому что» звучит в польском по-разному в зависимости от того, кому ты это говоришь. Мареку — bo. В письме на работу — ponieważ. В документе из управы ты прочитаешь gdyż или даже bowiem. Сегодня разложим причину и следствие по регистрам и заодно разберёмся, почему bo не может стоять в начале сложного предложения.",
 "goals":[
   "Выбирать регистр причины: <b>bo</b> · <b>ponieważ</b> · <b>gdyż</b>, <b>bowiem</b>",
   "Начинать с причины: <b>Ponieważ…, nie…</b> — и не начинать с bo",
   "Говорить «раз уж»: <b>Skoro już jesteś, pomóż mi</b>",
   "Строить следствие и цель: <b>więc</b>, <b>dlatego</b>, <b>zatem</b>, <b>po to, żeby</b>"
 ],
 "learned":[
   "Выбрал(а) регистр причины: bo · ponieważ · gdyż, bowiem",
   "Начал(а) предложение с ponieważ, а не с bo",
   "Сказал(а) «раз уж»: Skoro już jesteś, pomóż mi",
   "Построил(а) следствие и цель: więc, dlatego, zatem, po to, żeby"
 ],
 "review":{
   "intro":"Круг по вчерашнему и позавчерашнему дню плюс одно слово из фабрики недели 1.",
   "introAudio":"Круг по вчерашнему и позавчерашнему дню плюс одно слово из фабрики недели один.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 16.",
      "q":"«Заплатим при условии, что закончат в срок» —","opts":["chyba że skończą w terminie","pod warunkiem że skończą w terminie","w razie skończą w terminie"],"answer":1,
      "explain":"Условие сделки — <b>pod warunkiem że</b>; w razie идёт только с существительным."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 15.",
      "q":"«Пока идёт ремонт, живём у Каси» —","opts":["Zanim trwa remont, mieszkamy u Kasi","Dopóki trwa remont, mieszkamy u Kasi","Aż trwa remont, mieszkamy u Kasi"],"answer":1,
      "explain":"Две линии идут рядом — это <b>dopóki</b> с несовершенным видом."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни суффиксы места из недели 1.",
      "q":"«Пекарня» —","opts":["piekarnia","piekarz","piekarstwo"],"answer":0,
      "explain":"Место работы делает суффикс -arnia: <b>piekarnia</b>. Piekarz — сам пекарь."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни дативную конструкцию из недели 2.",
      "q":"«Мне удалось найти электрика» —","opts":["Udało mi się znaleźć elektryka","Udałem się znaleźć elektryka","Udaje mnie się znaleźć elektryka"],"answer":0,
      "explain":"Конструкция безличная и с дательным: <b>udało mi się</b> плюс инфинитив."}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Три этажа причины",
    "title":"<em>bo</em> · <em>ponieważ</em> · <em>gdyż, bowiem</em>",
    "paras":[
      "Смысл у всех один — «потому что», разница в регистре. <b>Bo</b> — разговорное, самое частое в живой речи: <b>Nie przyszedłem, bo byłem chory.</b> <b>Ponieważ</b> — нейтральное, годится и в разговоре, и в письме: <b>Nie przyszedłem, ponieważ byłem chory.</b>",
      "<b>Gdyż</b> и <b>bowiem</b> — книжные. Их достаточно узнавать в текстах и документах; самому писать их не обязательно. У <b>bowiem</b> есть особенность: оно не стоит первым в своей части, а вставляется после первого слова — <b>Nie przyszedł, był bowiem chory.</b>",
      "Главное практическое правило дня: с <b>bo</b> нельзя начинать сложное предложение. «Bo byłem chory, nie przyszedłem» — так не говорят; впереди ставят <b>ponieważ</b>: <b>Ponieważ byłem chory, nie przyszedłem.</b> Честная оговорка: коротким ответом на вопрос «Dlaczego?» фраза «Bo byłem chory» абсолютно нормальна — запрет касается только позиции перед главной частью.",
      "Запятая перед причиной обязательна во всех вариантах, как и в русском: <b>…, bo…</b> · <b>…, ponieważ…</b> · <b>…, gdyż…</b>"
    ],
    "audio":"Смысл у всех один — «потому что», разница в регистре. Bo — разговорное, самое частое в живой речи: nie przyszedłem, bo byłem chory. Ponieważ — нейтральное, годится и в разговоре, и в письме. Gdyż и bowiem — книжные. Их достаточно узнавать в текстах и документах. У bowiem есть особенность: оно не стоит первым в своей части, а вставляется после первого слова: nie przyszedł, był bowiem chory. Главное практическое правило дня: с bo нельзя начинать сложное предложение. Впереди ставят ponieważ: ponieważ byłem chory, nie przyszedłem. Честная оговорка: коротким ответом на вопрос dlaczego фраза bo byłem chory абсолютно нормальна, запрет касается только позиции перед главной частью. Запятая перед причиной обязательна во всех вариантах.",
    "table":{"rows":[
      ["Nie przyszedłem, <b>bo</b> byłem chory. <button class=\"play\" data-say=\"Nie przyszedłem, bo byłem chory\">🔊</button>","разговорное «потому что»"],
      ["Nie przyszedłem, <b>ponieważ</b> byłem chory. <button class=\"play\" data-say=\"Nie przyszedłem, ponieważ byłem chory\">🔊</button>","нейтральное — и в речи, и в письме"],
      ["Nie przyszedł, <b>gdyż</b> był chory. <button class=\"play\" data-say=\"Nie przyszedł, gdyż był chory\">🔊</button>","книжное (узнавание)"],
      ["Nie przyszedł, był <b>bowiem</b> chory. <button class=\"play\" data-say=\"Nie przyszedł, był bowiem chory\">🔊</button>","bowiem стоит после первого слова"],
      ["<b>Ponieważ</b> byłem chory, nie przyszedłem. <button class=\"play\" data-say=\"Ponieważ byłem chory, nie przyszedłem\">🔊</button>","в начале — только ponieważ, не bo"]
    ],"star":4},
    "examples":[
      {"ru":"Мы не начали красить, потому что штукатурка ещё сырая.","en":"Nie zaczęliśmy malować, <b>bo</b> tynk jest jeszcze mokry.","say":"Nie zaczęliśmy malować, bo tynk jest jeszcze mokry."},
      {"ru":"Пишу вам, поскольку договор истекает в марте.","en":"Piszę do Państwa, <b>ponieważ</b> umowa wygasa w marcu.","gloss":"так пишут в рабочем письме","say":"Piszę do Państwa, ponieważ umowa wygasa w marcu."},
      {"ru":"Поскольку работы задержались, срок сдвинулся на неделю.","en":"<b>Ponieważ</b> prace się opóźniły, termin przesunął się o tydzień.","say":"Ponieważ prace się opóźniły, termin przesunął się o tydzień."},
      {"ru":"Заявление отклонили, так как не хватало одного документа.","en":"Wniosek odrzucono, <b>gdyż</b> brakowało jednego dokumentu.","gloss":"книжный регистр — язык учреждений","say":"Wniosek odrzucono, gdyż brakowało jednego dokumentu."}
    ],
    "mistakes":[
      {"wrong":"Bo byłem chory, nie przyszedłem.","right":"<b>Ponieważ</b> byłem chory, nie przyszedłem.","why":"bo не открывает сложное предложение — на этой позиции работает ponieważ."},
      {"wrong":"Nie przyszedł, bowiem był chory.","right":"Nie przyszedł, był <b>bowiem</b> chory.","why":"bowiem не стоит первым в своей части: его вставляют после первого слова."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, с чего начинается предложение.",
       "q":"«Поскольку я был болен, я не пришёл» —","opts":["Bo byłem chory, nie przyszedłem","Ponieważ byłem chory, nie przyszedłem","Gdyż byłem chory, nie przyszedłem"],"answer":1,
       "explain":"Причина впереди — значит <b>ponieważ</b>. Ни bo, ни gdyż сложное предложение не открывают: они всегда идут после главной части."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери регистр под ситуацию.",
       "q":"Какой союз уместнее в письме в издательство?","opts":["bo","ponieważ","bo przecież"],"answer":1,
       "explain":"<b>Ponieważ</b> — нейтрально-деловое. Bo звучало бы слишком разговорно."},
      {"type":"type","howto":"<b>Что делать:</b> напиши разговорный вариант. Диакритику можно не ставить.",
       "q":"«Я не пришёл, потому что был болен»","accept":["nie przyszedłem, bo byłem chory","nie przyszedlem, bo bylem chory","nie przyszedłem bo byłem chory","nie przyszedlem bo bylem chory"],"placeholder":"Nie przyszedłem, bo…"}
    ],
    "mnemonic":"🎚️ bo — своим · ponieważ — всем · gdyż, bowiem — из документа."
   },
   {
    "eyebrow":"Правило 2 · Раз уж",
    "title":"<em>Skoro już jesteś, pomóż mi</em>",
    "paras":[
      "<b>Skoro</b> — это «раз уж», «коль скоро». Причина здесь не новость: собеседник её и сам знает, ты просто отталкиваешься от неё. <b>Skoro już jesteś, pomóż mi.</b> <b>Skoro tak mówisz, wierzę ci.</b>",
      "Разница с ponieważ практическая. <b>Ponieważ</b> сообщает причину («не пришёл, потому что был болен» — ты этого не знал). <b>Skoro</b> опирается на очевидное («раз уж ты болен, останься дома»).",
      "Отсюда и позиция: skoro почти всегда идёт первым, а во второй части часто стоит просьба, совет или вывод — <b>Skoro pada, weźmy taksówkę.</b> <b>Skoro ekipa i tak tu jest, poprośmy o półkę.</b>",
      "Ложный друг наоборот: польское <b>skoro</b> не значит «скоро». «Скоро» — это <b>niedługo</b> или <b>wkrótce</b>. А <b>skoro tylko</b> в книжном тексте значит «как только» — там это уже время, а не причина."
    ],
    "audio":"Skoro — это «раз уж», «коль скоро». Причина здесь не новость: собеседник её и сам знает, ты просто отталкиваешься от неё. Skoro już jesteś, pomóż mi. Skoro tak mówisz, wierzę ci. Разница с ponieważ практическая. Ponieważ сообщает причину, которую ты не знал. Skoro опирается на очевидное. Отсюда и позиция: skoro почти всегда идёт первым, а во второй части часто стоит просьба, совет или вывод. Skoro pada, weźmy taksówkę. Ложный друг наоборот: польское skoro не значит «скоро». «Скоро» — это niedługo или wkrótce. А skoro tylko в книжном тексте значит «как только», там это уже время, а не причина.",
    "table":{"rows":[
      ["<b>Skoro</b> już jesteś, pomóż mi. <button class=\"play\" data-say=\"Skoro już jesteś, pomóż mi\">🔊</button>","Раз уж ты здесь, помоги мне."],
      ["<b>Skoro</b> tak mówisz, wierzę ci. <button class=\"play\" data-say=\"Skoro tak mówisz, wierzę ci\">🔊</button>","Раз ты так говоришь, я тебе верю."],
      ["<b>Skoro</b> pada, weźmy taksówkę. <button class=\"play\" data-say=\"Skoro pada, weźmy taksówkę\">🔊</button>","Раз идёт дождь, возьмём такси."],
      ["<b>skoro</b> ≠ «скоро» <button class=\"play\" data-say=\"niedługo, wkrótce\">🔊</button>","«скоро» — niedługo, wkrótce"],
      ["<b>Ponieważ</b> byłem chory… / <b>Skoro</b> jesteś chory… <button class=\"play\" data-say=\"Ponieważ byłem chory. Skoro jesteś chory.\">🔊</button>","новая причина / известная причина"]
    ],"star":3},
    "examples":[
      {"ru":"Раз уж бригада всё равно здесь, попросим повесить полку.","en":"<b>Skoro</b> ekipa i tak tu jest, poprośmy o powieszenie półki.","say":"Skoro ekipa i tak tu jest, poprośmy o powieszenie półki."},
      {"ru":"Раз ты устала, оставим это на завтра.","en":"<b>Skoro</b> jesteś zmęczona, zostawmy to na jutro.","say":"Skoro jesteś zmęczona, zostawmy to na jutro."},
      {"ru":"Раз уж мы здесь, зайдём на кофе.","en":"<b>Skoro</b> już tu jesteśmy, wpadnijmy na kawę.","gloss":"już усиливает «раз уж»","say":"Skoro już tu jesteśmy, wpadnijmy na kawę."}
    ],
    "mistakes":[
      {"wrong":"Skoro wrócę, zadzwonię. (в смысле «скоро вернусь»)","right":"<b>Niedługo</b> wrócę i zadzwonię.","why":"skoro значит «раз уж», а не «скоро». «Скоро» — niedługo или wkrótce."},
      {"wrong":"Nie przyszedłem, skoro byłem chory.","right":"Nie przyszedłem, <b>bo</b> byłem chory.","why":"новую причину вводят bo или ponieważ; skoro отталкивается от уже известного."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, причина известна собеседнику или нет.",
       "q":"«Раз уж ты здесь, помоги мне» —","opts":["Ponieważ już jesteś, pomóż mi","Skoro już jesteś, pomóż mi","Niedługo jesteś, pomóż mi"],"answer":1,
       "explain":"Причина очевидна обоим — это <b>skoro</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> проверь ложного друга.",
       "q":"<b>Skoro</b> значит —","opts":["скоро","раз уж","хотя"],"answer":1,
       "explain":"<b>Skoro</b> — «раз уж». «Скоро» — niedługo, wkrótce."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Запятую поставь мысленно.",
       "q":"Собери: <b>«Раз идёт дождь, возьмём такси»</b>","answer":"Skoro pada weźmy taksówkę"}
    ],
    "mnemonic":"🤝 Skoro = раз уж. Причина уже на столе — остаётся вывод."
   },
   {
    "eyebrow":"Правило 3 · Следствие",
    "title":"<em>więc</em> · <em>dlatego</em> · <em>zatem</em> · <em>w związku z tym</em>",
    "paras":[
      "Причина и следствие — это одна мысль, повёрнутая двумя сторонами. <b>Byłem chory, więc nie przyszedłem.</b> <b>Więc</b> — самое частое и разговорное «поэтому, значит». Нейтральное — <b>dlatego</b>: <b>Byłem chory, dlatego nie przyszedłem.</b>",
      "Книжные и официальные ступени: <b>zatem</b> («итак, следовательно»), <b>toteż</b> (узнавание, «поэтому и»), <b>w związku z tym</b> («в связи с этим» — так пишут учреждения и деловые письма).",
      "Главная ловушка дня: <b>dlatego</b> ≠ <b>dlatego że</b>. Без że это следствие («поэтому»): <b>Dlatego nie przyszedłem.</b> С że это причина («потому что»): <b>Nie przyszedłem, dlatego że byłem chory.</b> Одно словечко переворачивает предложение.",
      "И удобная конструкция для акцента: <b>dlatego właśnie</b> — «именно поэтому». <b>Dlatego właśnie wybraliśmy tę ekipę.</b>"
    ],
    "audio":"Причина и следствие — это одна мысль, повёрнутая двумя сторонами. Byłem chory, więc nie przyszedłem. Więc — самое частое и разговорное «поэтому, значит». Нейтральное — dlatego. Книжные и официальные ступени: zatem, итак, следовательно; toteż, узнавание; w związku z tym, в связи с этим — так пишут учреждения и деловые письма. Главная ловушка дня: dlatego не равно dlatego że. Без że это следствие, поэтому. С że это причина, потому что: nie przyszedłem, dlatego że byłem chory. Одно словечко переворачивает предложение. И удобная конструкция для акцента: dlatego właśnie, именно поэтому.",
    "table":{"rows":[
      ["Byłem chory, <b>więc</b> nie przyszedłem. <button class=\"play\" data-say=\"Byłem chory, więc nie przyszedłem\">🔊</button>","разговорное «поэтому, значит»"],
      ["Byłem chory, <b>dlatego</b> nie przyszedłem. <button class=\"play\" data-say=\"Byłem chory, dlatego nie przyszedłem\">🔊</button>","нейтральное «поэтому»"],
      ["Nie przyszedłem, <b>dlatego że</b> byłem chory. <button class=\"play\" data-say=\"Nie przyszedłem, dlatego że byłem chory\">🔊</button>","с że — уже «потому что»!"],
      ["Termin minął, <b>zatem</b> trzeba zapłacić. <button class=\"play\" data-say=\"Termin minął, zatem trzeba zapłacić\">🔊</button>","книжное «следовательно»"],
      ["<b>W związku z tym</b> prosimy o kontakt. <button class=\"play\" data-say=\"W związku z tym prosimy o kontakt\">🔊</button>","официальное «в связи с этим»"]
    ],"star":2},
    "examples":[
      {"ru":"Ламинат привезли позже, поэтому покраска сдвинулась.","en":"Panele przywieziono później, <b>dlatego</b> malowanie się przesunęło.","say":"Panele przywieziono później, dlatego malowanie się przesunęło."},
      {"ru":"Я не заплатил, потому что не получил счёт.","en":"Nie zapłaciłem, <b>dlatego że</b> nie dostałem faktury.","gloss":"с że — причина, без że было бы «поэтому»","say":"Nie zapłaciłem, dlatego że nie dostałem faktury."},
      {"ru":"Срок истёк, следовательно нужно продлить договор.","en":"Termin minął, <b>zatem</b> trzeba przedłużyć umowę.","say":"Termin minął, zatem trzeba przedłużyć umowę."},
      {"ru":"В связи с этим просим о контакте до пятницы.","en":"<b>W związku z tym</b> prosimy o kontakt do piątku.","gloss":"язык официального письма из B1","say":"W związku z tym prosimy o kontakt do piątku."}
    ],
    "mistakes":[
      {"wrong":"Nie przyszedłem, dlatego byłem chory.","right":"Nie przyszedłem, <b>dlatego że</b> byłem chory.","why":"без że получается «я не пришёл, поэтому я был болен» — причина и следствие меняются местами."},
      {"wrong":"Byłem chory, dlatego że nie przyszedłem.","right":"Byłem chory, <b>dlatego</b> nie przyszedłem.","why":"здесь нужна именно вторая половина мысли — следствие, а его вводит dlatego без że."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, что стоит после союза — причина или следствие.",
       "q":"«Я не пришёл, потому что был болен» —","opts":["Nie przyszedłem, dlatego byłem chory","Nie przyszedłem, dlatego że byłem chory","Nie przyszedłem, zatem byłem chory"],"answer":1,
       "explain":"Причину вводит <b>dlatego że</b>. Без że это было бы следствие."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери самый официальный вариант.",
       "q":"Что уместнее в письме из учреждения?","opts":["więc prosimy o kontakt","w związku z tym prosimy o kontakt","no to prosimy o kontakt"],"answer":1,
       "explain":"<b>W związku z tym</b> — официальная ступень; więc разговорное."},
      {"type":"type","howto":"<b>Что делать:</b> напиши следствие. Диакритику можно не ставить.",
       "q":"«Я был болен, поэтому не пришёл»","accept":["byłem chory, dlatego nie przyszedłem","bylem chory, dlatego nie przyszedlem","byłem chory, więc nie przyszedłem","bylem chory, wiec nie przyszedlem"],"placeholder":"Byłem chory, dlatego…"}
    ],
    "mnemonic":"↔️ dlatego — поэтому · dlatego że — потому что. Одна буква — разворот мысли."
   },
   {
    "eyebrow":"Правило 4 · Зачем",
    "title":"<em>po to, żeby</em> · <em>w celu</em> · <em>z powodu</em>",
    "paras":[
      "Цель делает знакомый союз <b>żeby</b> из B1, а для акцента впереди ставят <b>po to</b>: <b>Dzwonię po to, żeby ustalić termin.</b> Если действующее лицо одно, дальше идёт инфинитив: <b>po to, żeby ustalić</b>; если разные — л-форма: <b>po to, żebyś wiedział</b>.",
      "Официальный близнец — <b>w celu</b> + родительный, и после него стоит отглагольное существительное недели 1: <b>w celu ustalenia terminu</b>, <b>w celu wyjaśnienia sprawy</b>. Это язык объявлений и учреждений, в разговоре так не говорят.",
      "У причины есть такая же пара «союз — предлог»: <b>z powodu</b> + родительный («из-за», нейтрально): <b>Nie przyszedłem z powodu choroby.</b> Разговорно то же самое скажут через <b>przez</b> + винительный: <b>przez chorobę</b>. А хорошая причина идёт с <b>dzięki</b> + дательный: <b>Dzięki tobie zdążyliśmy.</b>",
      "Собери в голове две шкалы, и весь день ляжет на место: причина <b>bo → ponieważ → gdyż</b>, следствие <b>więc → dlatego → w związku z tym</b>, цель <b>żeby → po to, żeby → w celu</b>."
    ],
    "audio":"Цель делает знакомый союз żeby из B1, а для акцента впереди ставят po to: dzwonię po to, żeby ustalić termin. Если действующее лицо одно, дальше идёт инфинитив; если разные — л-форма. Официальный близнец — w celu плюс родительный, и после него стоит отглагольное существительное недели один: w celu ustalenia terminu, w celu wyjaśnienia sprawy. Это язык объявлений и учреждений. У причины есть такая же пара союз и предлог: z powodu плюс родительный, из-за, нейтрально. Разговорно то же самое скажут через przez плюс винительный. А хорошая причина идёт с dzięki плюс дательный: dzięki tobie zdążyliśmy. Собери в голове две шкалы, и весь день ляжет на место: причина bo, ponieważ, gdyż; следствие więc, dlatego, w związku z tym; цель żeby, po to żeby, w celu.",
    "table":{"rows":[
      ["Dzwonię <b>po to, żeby</b> ustalić termin. <button class=\"play\" data-say=\"Dzwonię po to, żeby ustalić termin\">🔊</button>","Звоню затем, чтобы согласовать срок."],
      ["Piszę <b>po to, żebyś wiedział</b>. <button class=\"play\" data-say=\"Piszę po to, żebyś wiedział\">🔊</button>","Пишу затем, чтобы ты знал. (двое)"],
      ["<b>W celu</b> ustalenia terminu prosimy o kontakt. <button class=\"play\" data-say=\"W celu ustalenia terminu prosimy o kontakt\">🔊</button>","официально: w celu + род."],
      ["Nie przyszedłem <b>z powodu</b> choroby. <button class=\"play\" data-say=\"Nie przyszedłem z powodu choroby\">🔊</button>","из-за болезни (+ род.)"],
      ["<b>Dzięki</b> tobie zdążyliśmy. <button class=\"play\" data-say=\"Dzięki tobie zdążyliśmy\">🔊</button>","благодаря тебе (+ дат.)"]
    ],"star":2},
    "examples":[
      {"ru":"Мы позвонили электрику затем, чтобы он проверил проводку.","en":"Zadzwoniliśmy do elektryka <b>po to, żeby</b> sprawdził instalację.","gloss":"instalacja — здесь проводка","say":"Zadzwoniliśmy do elektryka po to, żeby sprawdził instalację."},
      {"ru":"Работы приостановлены по причине аварии.","en":"Prace wstrzymano <b>z powodu</b> awarii.","say":"Prace wstrzymano z powodu awarii."},
      {"ru":"Благодаря соседке мы нашли хорошую бригаду.","en":"<b>Dzięki</b> sąsiadce znaleźliśmy dobrą ekipę.","gloss":"dzięki + дательный: sąsiadce","say":"Dzięki sąsiadce znaleźliśmy dobrą ekipę."}
    ],
    "mistakes":[
      {"wrong":"W celu ustalić termin prosimy o kontakt.","right":"<b>W celu ustalenia</b> terminu prosimy o kontakt.","why":"после w celu идёт родительный падеж существительного, а не инфинитив."},
      {"wrong":"Nie przyszedłem dzięki chorobie.","right":"Nie przyszedłem <b>z powodu</b> choroby.","why":"dzięki — только о хорошей причине; плохая идёт с z powodu."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> выбери форму после официального предлога.",
       "q":"«В целях согласования срока» —","opts":["w celu ustalić termin","w celu ustalenia terminu","w celu ustalenie terminu"],"answer":1,
       "explain":"<b>w celu</b> плюс родительный отглагольного существительного: ustalenia terminu."},
      {"type":"choice","howto":"<b>Что делать:</b> реши, причина хорошая или плохая.",
       "q":"«Из-за болезни я не пришёл» —","opts":["dzięki chorobie","z powodu choroby","w celu choroby"],"answer":1,
       "explain":"Плохая причина — <b>z powodu</b> плюс родительный. Dzięki оставляют для хорошего."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Dzwonię po to, żeby ustalić termin.","sub":"звоню затем, чтобы согласовать срок","want":"po to żeby ustalić termin"}
    ],
    "mnemonic":"🧭 Причина bo → ponieważ → gdyż · следствие więc → dlatego → w związku z tym · цель żeby → w celu."
   }
 ],
 "dialogue":{
   "intro":"Анна пишет письмо в издательство и одновременно объясняет Мареку, почему сроки поехали. Тапни по строке — услышишь фразу.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Dlaczego ekipa nie maluje dzisiaj?","ru":"Почему бригада сегодня не красит?",
      "words":[["Dlaczego","почему"],["maluje","красит"]]},
     {"who":"A","name":"Anna","side":"left","en":"Bo tynk jest jeszcze mokry. Trzeba poczekać dzień.","ru":"Потому что штукатурка ещё сырая. Надо подождать день.",
      "words":[["bo","потому что"],["mokry","сырой"]]},
     {"who":"M","name":"Marek","side":"right","en":"Czyli termin się przesunie?","ru":"То есть срок сдвинется?",
      "words":[["Czyli","то есть"],["przesunie się","сдвинется"]]},
     {"who":"A","name":"Anna","side":"left","en":"Tak, więc napiszę do wydawnictwa, że wezmę wolne w innym tygodniu.","ru":"Да, поэтому напишу в издательство, что возьму отгул на другой неделе.",
      "words":[["więc","поэтому"],["wolne","отгул"]]},
     {"who":"M","name":"Marek","side":"right","en":"Jak to sformułujesz?","ru":"Как ты это сформулируешь?",
      "words":[["sformułujesz","сформулируешь"]]},
     {"who":"A","name":"Anna","side":"left","en":"Ponieważ prace w mieszkaniu się opóźniły, proszę o przesunięcie urlopu.","ru":"Поскольку работы в квартире задержались, прошу о переносе отпуска.",
      "words":[["Ponieważ","поскольку"],["przesunięcie","перенос"]]},
     {"who":"M","name":"Marek","side":"right","en":"Brzmi poważnie. A do pana Zbyszka napiszesz tak samo?","ru":"Звучит серьёзно. А пану Збышеку напишешь так же?",
      "words":[["Brzmi","звучит"],["poważnie","серьёзно"]]},
     {"who":"A","name":"Anna","side":"left","en":"Nie, jemu napiszę krótko: skoro tynk schnie, przyjdźcie w czwartek.","ru":"Нет, ему напишу коротко: раз штукатурка сохнет, приходите в четверг.",
      "words":[["skoro","раз уж"],["schnie","сохнет"]]},
     {"who":"M","name":"Marek","side":"right","en":"Trzy zdania, trzy style. Robisz się redaktorką.","ru":"Три предложения, три стиля. Ты становишься редактором.",
      "words":[["style","стили"],["redaktorka","редактор, женщина"]]}
   ]
 },
 "scene":{
   "intro":"Сценка: короткий звонок в управляющую компанию. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Dzień dobry, dzwonię w sprawie hałasu w klatce.","ru":"Здравствуйте, звоню по поводу шума в подъезде."},
     {"who":"B","en":"Prace trwają, ponieważ wymieniamy instalację.","ru":"Работы идут, поскольку мы меняем проводку."},
     {"who":"A","en":"Rozumiem. Skoro to potrwa, kiedy będzie cicho?","ru":"Понимаю. Раз уж это продлится, когда будет тихо?"},
     {"who":"B","en":"Od piątku. W związku z tym prosimy o cierpliwość.","ru":"С пятницы. В связи с этим просим о терпении."},
     {"who":"A","en":"Dziękuję. Dzięki panu wiem, na czym stoję.","ru":"Спасибо. Благодаря вам я знаю, на чём стою."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — причина, следствие и цель на трёх этажах вежливости.",
   "items":[
     {"en":"bo","ru":"потому что (разговорное)","ex":"Nie przyszedłem, bo byłem chory."},
     {"en":"ponieważ","ru":"поскольку, потому что (нейтральное)","ex":"Ponieważ byłem chory, nie przyszedłem."},
     {"en":"gdyż / bowiem","ru":"ибо, так как (книжное)","ex":"Wniosek odrzucono, gdyż brakowało dokumentu."},
     {"en":"skoro","ru":"раз уж","ex":"Skoro już jesteś, pomóż mi."},
     {"en":"więc","ru":"поэтому, значит","ex":"Byłem chory, więc nie przyszedłem."},
     {"en":"dlatego","ru":"поэтому","ex":"Byłem chory, dlatego nie przyszedłem."},
     {"en":"dlatego że","ru":"потому что","ex":"Nie przyszedłem, dlatego że byłem chory."},
     {"en":"zatem / toteż","ru":"следовательно (книжное)","ex":"Termin minął, zatem trzeba zapłacić."},
     {"en":"w związku z tym","ru":"в связи с этим (официальное)","ex":"W związku z tym prosimy o kontakt."},
     {"en":"po to, żeby","ru":"затем, чтобы","ex":"Dzwonię po to, żeby ustalić termin."},
     {"en":"w celu czegoś","ru":"в целях чего-то (+ род., официальное)","ex":"W celu ustalenia terminu prosimy o kontakt."},
     {"en":"z powodu czegoś","ru":"из-за (+ род.)","ex":"Prace wstrzymano z powodu awarii."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к его роли в предложении.",
   "pairs":[["ponieważ","поскольку (нейтрально)"],["skoro","раз уж"],["dlatego że","потому что"],["w związku z tym","в связи с этим"]]
 },
 "reading":{
   "intro":"Прочитай и послушай письмо Анны и её же записку бригаде — один смысл в двух регистрах.",
   "title":"Dwa teksty, jedna sprawa",
   "sentences":["Szanowni Państwo, piszę w sprawie mojego urlopu.","Ponieważ prace w mieszkaniu się opóźniły, chciałabym przesunąć wolne na kolejny tydzień.","Termin oddania tekstu pozostaje bez zmian, zatem projekt nie ucierpi.","W związku z tym proszę o potwierdzenie nowej daty.","Z poważaniem, Anna.","Panie Zbyszku, krótko i po ludzku.","Nie malujemy dzisiaj, bo tynk jest jeszcze mokry.","Skoro schnie wolniej, przyjdźcie proszę w czwartek rano.","Dzwonię po to, żeby ustalić godzinę.","Dzięki panu mamy w końcu prostą podłogę."],
   "translation":"Уважаемые господа, пишу по поводу моего отпуска. Поскольку работы в квартире задержались, я хотела бы перенести отгул на следующую неделю. Срок сдачи текста остаётся без изменений, следовательно проект не пострадает. В связи с этим прошу подтвердить новую дату. С уважением, Анна. Пан Збышек, коротко и по-человечески. Сегодня не красим, потому что штукатурка ещё сырая. Раз она сохнет медленнее, приходите, пожалуйста, в четверг утром. Звоню затем, чтобы согласовать время. Благодаря вам у нас наконец ровный пол."
 },
 "quiz":{
   "intro":"Пять вопросов на причину, следствие и регистр.",
   "items":[
     {"q":"1. «Поскольку я был болен, я не пришёл» —","opts":["Bo byłem chory, nie przyszedłem","Ponieważ byłem chory, nie przyszedłem","Więc byłem chory, nie przyszedłem"],"answer":1,
      "explain":"В начале сложного предложения работает <b>ponieważ</b>, а не bo."},
     {"q":"2. «Раз уж ты здесь, помоги мне» —","opts":["Skoro już jesteś, pomóż mi","Ponieważ już jesteś, pomóż mi","Zatem już jesteś, pomóż mi"],"answer":0,
      "explain":"Известная обоим причина — <b>skoro</b>."},
     {"q":"3. «Я не пришёл, потому что был болен» —","opts":["Nie przyszedłem, dlatego byłem chory","Nie przyszedłem, dlatego że byłem chory","Nie przyszedłem, zatem byłem chory"],"answer":1,
      "explain":"Причину вводит <b>dlatego że</b>; без że получилось бы следствие."},
     {"q":"4. Самый официальный способ сказать «в связи с этим» —","opts":["więc","w związku z tym","no to"],"answer":1,
      "explain":"<b>W związku z tym</b> — язык учреждений и деловых писем."},
     {"q":"5. «В целях согласования срока» —","opts":["w celu ustalenia terminu","w celu ustalić termin","po to ustalenia terminu"],"answer":0,
      "explain":"<b>w celu</b> плюс родительный отглагольного существительного."}
   ]
 },
 "essay":{
   "intro":"Сегодня интересно не что ты скажешь, а каким тоном: одна и та же причина звучит по-разному в записке и в письме.",
   "prompt":"Напиши 5–6 предложений: объясни один и тот же перенос или отказ дважды — сначала близкому человеку, потом официально, — и добавь, зачем ты это делаешь.",
   "hint":"Опора: bo… · Ponieważ…, … · Skoro…, … · …, więc… · …, dlatego… · W związku z tym… · po to, żeby… 📝",
   "example":"Nie przyjdę jutro, bo mam w domu ekipę remontową. Skoro i tak muszę być na miejscu, popracuję zdalnie. Ponieważ prace się opóźniły, proszę o przesunięcie spotkania na środę. Termin oddania tekstu się nie zmienia, zatem projekt nie ucierpi. W związku z tym proszę o krótkie potwierdzenie. Piszę po to, żeby nikt nie czekał na mnie niepotrzebnie."
 }
},
"18": {
 "day":18,"week":"03",
 "themeRu":"Я бы попросил",
 "themeEn":"Tryb przypuszczający II",
 "intro":"Вежливость по-польски держится на двух буквах: <b>by</b>. «Chcę fakturę» звучит как требование, «Chciałbym prosić o fakturę» — как разговор двух взрослых людей. Сегодня соберём всю сослагательную машину: полную парадигму, подвижное <b>by</b>, готовые формулы просьбы и безличные <b>warto by</b>, <b>można by</b>, <b>trzeba by</b>.",
 "introAudio":"Вежливость по-польски держится на двух буквах: by. Chcę fakturę звучит как требование, chciałbym prosić o fakturę — как разговор двух взрослых людей. Сегодня соберём всю сослагательную машину: полную парадигму, подвижное by, готовые формулы просьбы и безличные warto by, można by, trzeba by.",
 "goals":[
   "Знать всю парадигму: <b>zrobiłbym, zrobiłbyś, zrobilibyśmy</b>",
   "Двигать by: <b>Chętnie bym poszedł</b> · <b>Ja bym tego nie robił</b>",
   "Просить формулами: <b>Czy mógłbym prosić o…</b> · <b>Wolałbym…</b>",
   "Смягчать безлично: <b>Warto by…</b> · <b>Można by…</b> · <b>Trzeba by…</b>"
 ],
 "learned":[
   "Освоил(а) всю парадигму: zrobiłbym, zrobiłbyś, zrobilibyśmy",
   "Подвигал(а) by: Chętnie bym poszedł · Ja bym tego nie robił",
   "Попросил(а) формулами: Czy mógłbym prosić o… · Wolałbym…",
   "Смягчил(а) безлично: Warto by… · Można by… · Trzeba by…"
 ],
 "review":{
   "intro":"Разминка по трём дням недели и одному числительному из недели 2.",
   "introAudio":"Разминка по трём дням недели и одному числительному из недели два.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 17.",
      "q":"«Я не пришёл, потому что был болен» —","opts":["Nie przyszedłem, dlatego byłem chory","Nie przyszedłem, dlatego że byłem chory","Nie przyszedłem, skoro byłem chory"],"answer":1,
      "explain":"Причину вводит <b>dlatego że</b>; без że это «поэтому»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 16.",
      "q":"«Даже если будет дождь, поедем» —","opts":["Nawet gdyby padało, pojedziemy","Nawet jeśli będzie padać, pojedziemy","Nawet jeśli padałoby, pojedziemy"],"answer":1,
      "explain":"Реальное допущение — <b>nawet jeśli</b> плюс будущее время."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 15.",
      "q":"«Подожду, пока они не закончат» —","opts":["Poczekam, aż skończą","Poczekam, aż nie skończą","Poczekam, zanim nie skończą"],"answer":0,
      "explain":"<b>Aż</b> само значит «пока не» и отрицания не требует."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни склонение числительных из недели 2.",
      "q":"«С двумя коллегами (женщинами)» —","opts":["z dwoma koleżankami","z dwiema koleżankami","z dwóch koleżankami"],"answer":1,
      "explain":"Для женского рода в творительном есть отдельная форма: <b>z dwiema koleżankami</b>."}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Парадигма и подвижное by",
    "title":"<em>zrobiłbym</em> · <em>Ja bym tego nie robił</em>",
    "paras":[
      "Полная парадигма выглядит так: <b>zrobiłbym / zrobiłabym</b> (я), <b>zrobiłbyś / zrobiłabyś</b> (ты), <b>zrobiłby / zrobiłaby</b> (он, она), <b>zrobilibyśmy / zrobiłybyśmy</b> (мы), <b>zrobilibyście / zrobiłybyście</b> (вы), <b>zrobiliby / zrobiłyby</b> (они). Это л-форма плюс by плюс личное окончание.",
      "Главная новость дня: кусочек <b>by</b> подвижен. Он может уйти вперёд и прицепиться к первому важному слову — тогда сам глагол остаётся голой л-формой. <b>Chętnie bym poszedł.</b> <b>Ja bym tego nie robił.</b> <b>Kto by pomyślał!</b>",
      "Два окончания в одной фразе невозможны: если <b>bym</b> уже уехало вперёд, глагол его не повторяет. «Ja bym tego nie robiłbym» — ошибка; правильно <b>Ja bym tego nie robił</b>.",
      "И маленькая фонетика: кусочек -by- слогов не прибавляет и ударение не двигает — <b>zrobiłbym</b> звучит [зро́билбым], ударение осталось там же, где в zrobił. Так же вели себя chciałbym из A2 и gdybyśmy из B1."
    ],
    "audio":"Полная парадигма выглядит так: zrobiłbym или zrobiłabym для «я», zrobiłbyś или zrobiłabyś для «ты», zrobiłby или zrobiłaby для «он, она», zrobilibyśmy или zrobiłybyśmy для «мы», zrobilibyście или zrobiłybyście для «вы», zrobiliby или zrobiłyby для «они». Это л-форма плюс by плюс личное окончание. Главная новость дня: кусочек by подвижен. Он может уйти вперёд и прицепиться к первому важному слову, тогда сам глагол остаётся голой л-формой. Chętnie bym poszedł. Ja bym tego nie robił. Kto by pomyślał. Два окончания в одной фразе невозможны: если bym уже уехало вперёд, глагол его не повторяет. И маленькая фонетика: кусочек by слогов не прибавляет и ударение не двигает.",
    "table":{"rows":[
      ["<b>zrobiłbym / zrobiłabym</b> <button class=\"play\" data-say=\"zrobiłbym, zrobiłabym\">🔊</button>","я бы сделал / сделала"],
      ["<b>zrobiłbyś</b> · <b>zrobiłby</b> · <b>zrobiłaby</b> <button class=\"play\" data-say=\"zrobiłbyś, zrobiłby, zrobiłaby\">🔊</button>","ты бы · он бы · она бы"],
      ["<b>zrobilibyśmy</b> · <b>zrobiliby</b> <button class=\"play\" data-say=\"zrobilibyśmy, zrobiliby\">🔊</button>","мы бы · они бы"],
      ["<b>Chętnie bym poszedł.</b> <button class=\"play\" data-say=\"Chętnie bym poszedł\">🔊</button>","Я бы охотно пошёл. (by уехало вперёд)"],
      ["<b>Ja bym tego nie robił.</b> <button class=\"play\" data-say=\"Ja bym tego nie robił\">🔊</button>","Я бы этого не делал."]
    ],"star":3},
    "examples":[
      {"ru":"Я бы выбрала более светлый цвет.","en":"<b>Wybrałabym</b> jaśniejszy kolor.","say":"Wybrałabym jaśniejszy kolor."},
      {"ru":"Мы бы охотно посмотрели образцы.","en":"<b>Chętnie byśmy obejrzeli</b> próbki.","gloss":"byśmy уехало вперёд — глагол без окончания","say":"Chętnie byśmy obejrzeli próbki."},
      {"ru":"Я бы этого сейчас не менял.","en":"<b>Ja bym</b> tego teraz <b>nie zmieniał</b>.","gloss":"мягкое несогласие: очень частая рамка","say":"Ja bym tego teraz nie zmieniał."},
      {"ru":"Кто бы подумал, что ремонт займёт месяц.","en":"<b>Kto by pomyślał</b>, że remont zajmie miesiąc.","say":"Kto by pomyślał, że remont zajmie miesiąc."}
    ],
    "mistakes":[
      {"wrong":"Ja bym tego nie robiłbym.","right":"<b>Ja bym</b> tego <b>nie robił</b>.","why":"кусочек by в предложении ровно один: если он уехал вперёд, глагол остаётся голой л-формой."},
      {"wrong":"Chętnie poszedłbym bym.","right":"<b>Chętnie bym poszedł.</b> / <b>Chętnie poszedłbym.</b>","why":"оба порядка правильны по отдельности, но by ставится один раз."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посчитай, сколько раз в предложении стоит by.",
       "q":"«Я бы этого не делал» —","opts":["Ja bym tego nie robiłbym","Ja bym tego nie robił","Ja by tego nie robiłem"],"answer":1,
       "explain":"By с окончанием уехало вперёд, поэтому глагол остаётся голым: <b>Ja bym tego nie robił</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни форму «мы» женского и смешанного рода.",
       "q":"«Мы бы охотно посмотрели» (Анна и Марек) —","opts":["Chętnie byśmy obejrzeli","Chętnie byśmy obejrzały","Chętnie byśmy obejrzeć"],"answer":0,
       "explain":"В смешанной компании идёт мужско-личная форма: <b>obejrzeli</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши мягкое несогласие. Диакритику можно не ставить.",
       "q":"«Я бы этого сейчас не менял(а)»","accept":["ja bym tego teraz nie zmieniał","ja bym tego teraz nie zmienial","ja bym tego teraz nie zmieniała","ja bym tego teraz nie zmieniala","nie zmieniałbym tego teraz","nie zmienialbym tego teraz"],"placeholder":"Ja bym tego…"}
    ],
    "mnemonic":"🧩 By в предложении одно. Уехало вперёд — глагол остаётся голым."
   },
   {
    "eyebrow":"Правило 2 · Формулы вежливости",
    "title":"<em>Czy mógłbym prosić o…</em>",
    "paras":[
      "Готовые рамки, которые стоит выучить целиком. <b>Czy mógłbym prosić o…</b> / <b>Czy mogłabym prosić o…</b> — «можно попросить…». После prosić о идёт винительный: <b>prosić o fakturę</b>, <b>prosić o rachunek</b>, <b>prosić o chwilę cierpliwości</b>.",
      "<b>Chciałbym / Chciałabym zapytać o…</b> — «я хотел бы спросить о…». <b>Wolałbym / Wolałabym…</b> — «я бы предпочёл»: <b>Wolałabym zapłacić kartą.</b> Обе рамки звучат мягче, чем прямое chcę.",
      "Самая вежливая ступень — <b>Czy byłby pan tak miły i…</b> / <b>Czy byłaby pani tak miła i…</b> («не будете ли вы так любезны»). Так обращаются к незнакомому человеку, у которого просят одолжения.",
      "И мягкое возражение вместо «нет»: <b>Wolałbym nie…</b>, <b>Nie chciałbym sprawiać kłopotu</b>, <b>Ja bym raczej…</b>. Польский почти никогда не отказывает голым «nie» — он оборачивает отказ в сослагательное."
    ],
    "audio":"Готовые рамки, которые стоит выучить целиком. Czy mógłbym prosić o, или czy mogłabym prosić o, — можно попросить. После prosić o идёт винительный: prosić o fakturę, prosić o rachunek, prosić o chwilę cierpliwości. Chciałbym zapytać o — я хотел бы спросить о. Wolałbym — я бы предпочёл. Обе рамки звучат мягче, чем прямое chcę. Самая вежливая ступень — czy byłby pan tak miły i, czy byłaby pani tak miła i. Так обращаются к незнакомому человеку, у которого просят одолжения. И мягкое возражение вместо «нет»: wolałbym nie, nie chciałbym sprawiać kłopotu, ja bym raczej. Польский почти никогда не отказывает голым nie, он оборачивает отказ в сослагательное.",
    "table":{"rows":[
      ["<b>Czy mógłbym prosić o</b> fakturę? <button class=\"play\" data-say=\"Czy mógłbym prosić o fakturę?\">🔊</button>","Можно попросить счёт?"],
      ["<b>Chciałabym zapytać o</b> termin. <button class=\"play\" data-say=\"Chciałabym zapytać o termin\">🔊</button>","Я хотела бы спросить о сроке."],
      ["<b>Wolałabym</b> zapłacić kartą. <button class=\"play\" data-say=\"Wolałabym zapłacić kartą\">🔊</button>","Я бы предпочла заплатить картой."],
      ["<b>Czy byłby pan tak miły i</b> pokazał próbki? <button class=\"play\" data-say=\"Czy byłby pan tak miły i pokazał próbki?\">🔊</button>","Не будете ли вы так любезны показать образцы?"],
      ["<b>Wolałbym nie</b> zmieniać terminu. <button class=\"play\" data-say=\"Wolałbym nie zmieniać terminu\">🔊</button>","Я бы предпочёл не менять срок. (мягкое «нет»)"]
    ],"star":0},
    "examples":[
      {"ru":"Можно попросить у вас счёт за материалы?","en":"<b>Czy mógłbym prosić o</b> rachunek za materiały?","gloss":"prosić o + винительный","say":"Czy mógłbym prosić o rachunek za materiały?"},
      {"ru":"Я хотела бы спросить о гарантии.","en":"<b>Chciałabym zapytać o</b> gwarancję.","say":"Chciałabym zapytać o gwarancję."},
      {"ru":"Я бы предпочёл сначала увидеть образец.","en":"<b>Wolałbym</b> najpierw zobaczyć próbkę.","say":"Wolałbym najpierw zobaczyć próbkę."},
      {"ru":"Не хотела бы вас затруднять, но это срочно.","en":"<b>Nie chciałabym sprawiać kłopotu</b>, ale to pilne.","gloss":"sprawiać kłopot — причинять неудобство","say":"Nie chciałabym sprawiać kłopotu, ale to pilne."}
    ],
    "mistakes":[
      {"wrong":"Czy mógłbym prosić fakturę?","right":"Czy mógłbym <b>prosić o</b> fakturę?","why":"глагол prosić требует предлога o с винительным: prosić o coś."},
      {"wrong":"Chcę fakturę.","right":"<b>Chciałbym prosić o</b> fakturę.","why":"грамматически всё верно, но звучит как требование. В разговоре с чужим человеком берут форму на by."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь предлог после prosić.",
       "q":"«Можно попросить счёт?» —","opts":["Czy mógłbym prosić fakturę?","Czy mógłbym prosić o fakturę?","Czy mógłbym poprosić fakturę?"],"answer":1,
       "explain":"<b>prosić o</b> плюс винительный — управление, которое надо помнить целиком."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери самую мягкую форму отказа.",
       "q":"Как мягче всего сказать «я не хочу менять срок»?","opts":["Nie chcę zmieniać terminu","Wolałbym nie zmieniać terminu","Nie zmienię terminu"],"answer":1,
       "explain":"<b>Wolałbym nie…</b> — вежливое «я бы предпочёл не…», обычный польский способ отказать."},
      {"type":"speak","howto":"Нажми микрофон и попроси вслух.",
       "target":"Czy mógłbym prosić o fakturę?","sub":"можно попросить счёт?","want":"Czy mógłbym prosić o fakturę"}
    ],
    "mnemonic":"🙏 Chciałbym · Wolałbym · Czy mógłbym prosić o… — три двери в вежливость."
   },
   {
    "eyebrow":"Правило 3 · Безличное by",
    "title":"<em>Warto by</em> · <em>Można by</em> · <em>Trzeba by</em>",
    "paras":[
      "Безличные слова из B1 тоже умеют смягчаться. К ним просто добавляется <b>by</b>: <b>warto by</b> («стоило бы»), <b>można by</b> («можно было бы»), <b>trzeba by</b> («надо бы»). Дальше, как и раньше, идёт инфинитив.",
      "<b>Warto by pomalować kuchnię na jasno.</b> <b>Można by zapytać hydraulika.</b> <b>Trzeba by wymienić stare okna.</b> Разница с обычными warto, można, trzeba — в осторожности: ты не утверждаешь, а предлагаешь.",
      "В книжном тексте ту же роль играет <b>należałoby</b> («следовало бы») — его достаточно узнавать. А в живой речи рядом стоит уже знакомое <b>Na twoim miejscu bym…</b>: <b>Na twoim miejscu bym nie czekał.</b>",
      "Обрати внимание на порядок: сначала безличное слово, потом by, потом инфинитив. Личного окончания у by здесь нет и быть не может — подлежащего-то нет."
    ],
    "audio":"Безличные слова из B1 тоже умеют смягчаться. К ним просто добавляется by: warto by, стоило бы; można by, можно было бы; trzeba by, надо бы. Дальше, как и раньше, идёт инфинитив. Warto by pomalować kuchnię na jasno. Można by zapytać hydraulika. Trzeba by wymienić stare okna. Разница с обычными warto, można, trzeba в осторожности: ты не утверждаешь, а предлагаешь. В книжном тексте ту же роль играет należałoby, следовало бы, его достаточно узнавать. А в живой речи рядом стоит уже знакомое na twoim miejscu bym: na twoim miejscu bym nie czekał. Обрати внимание на порядок: сначала безличное слово, потом by, потом инфинитив. Личного окончания у by здесь нет и быть не может, подлежащего-то нет.",
    "table":{"rows":[
      ["<b>Warto by</b> pomalować kuchnię na jasno. <button class=\"play\" data-say=\"Warto by pomalować kuchnię na jasno\">🔊</button>","Стоило бы покрасить кухню в светлый."],
      ["<b>Można by</b> zapytać hydraulika. <button class=\"play\" data-say=\"Można by zapytać hydraulika\">🔊</button>","Можно было бы спросить сантехника."],
      ["<b>Trzeba by</b> wymienić stare okna. <button class=\"play\" data-say=\"Trzeba by wymienić stare okna\">🔊</button>","Надо бы поменять старые окна."],
      ["<b>Należałoby</b> to zgłosić. <button class=\"play\" data-say=\"Należałoby to zgłosić\">🔊</button>","Следовало бы об этом заявить. (книжное)"],
      ["<b>Na twoim miejscu bym</b> nie czekał. <button class=\"play\" data-say=\"Na twoim miejscu bym nie czekał\">🔊</button>","На твоём месте я бы не ждал."]
    ],"star":0},
    "examples":[
      {"ru":"Стоило бы спросить о гарантии, прежде чем платить.","en":"<b>Warto by</b> zapytać o gwarancję, zanim zapłacimy.","gloss":"и вчерашний zanim — без nie","say":"Warto by zapytać o gwarancję, zanim zapłacimy."},
      {"ru":"Можно было бы перенести покраску на четверг.","en":"<b>Można by</b> przesunąć malowanie na czwartek.","say":"Można by przesunąć malowanie na czwartek."},
      {"ru":"Надо бы позвонить электрику ещё сегодня.","en":"<b>Trzeba by</b> zadzwonić do elektryka jeszcze dziś.","say":"Trzeba by zadzwonić do elektryka jeszcze dziś."}
    ],
    "mistakes":[
      {"wrong":"Trzeba bym wymienić okna.","right":"<b>Trzeba by</b> wymienić okna.","why":"у безличной конструкции нет подлежащего, поэтому личного окончания у by тоже нет."},
      {"wrong":"Warto by wymieniłbym okna.","right":"<b>Warto by wymienić</b> okna.","why":"после warto, można, trzeba всегда стоит инфинитив — и с by, и без него."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь, есть ли у by окончание.",
       "q":"«Надо бы поменять окна» —","opts":["Trzeba bym wymienić okna","Trzeba by wymienić okna","Trzeba by wymieniłbym okna"],"answer":1,
       "explain":"Безличное <b>trzeba by</b> плюс инфинитив, без всяких личных окончаний."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери осторожное предложение, а не приказ.",
       "q":"Как мягче предложить покрасить кухню светлым?","opts":["Trzeba pomalować kuchnię na jasno","Warto by pomalować kuchnię na jasno","Pomaluj kuchnię na jasno"],"answer":1,
       "explain":"<b>Warto by</b> — предложение, а не требование."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Можно было бы спросить сантехника»</b>","answer":"Można by zapytać hydraulika"}
    ],
    "mnemonic":"💡 warto by · można by · trzeba by + инфинитив. Никаких окончаний."
   },
   {
    "eyebrow":"Правило 4 · Где by не нужно",
    "title":"<em>żeby</em> уже содержит <em>by</em>",
    "paras":[
      "Союзы <b>żeby</b> и <b>gdyby</b> — это буквально «że + by» и «gdy + by». Кусочек by уже внутри, поэтому второй раз его не ставят: <b>Chciałbym, żebyś przyszedł</b> — by в главной части и by внутри союза, а вот глагол przyszedł стоит голым.",
      "Типичная ошибка звучит так: «Chciałbym, żebyś przyszedłbyś». Правильно — <b>żebyś przyszedł</b>. То же с gdyby: <b>gdybym miał</b>, а не «gdybym miałbym».",
      "Отдельная строка для узнавания: книжная форма <b>byłbym zrobił</b> («сделал бы тогда», о нереальном в прошлом). <b>Gdybym wiedział, byłbym przyszedł.</b> В современной речи так почти не говорят — обычное <b>byłbym przyszedł</b> заменяется на <b>przyszedłbym</b>. Тебе достаточно узнать эту форму в книге.",
      "И практический итог недели: если предложение уже начинается с <b>gdyby</b> или <b>żeby</b>, никакого дополнительного by в нём больше не появится — ни на глаголе, ни где-либо ещё."
    ],
    "audio":"Союзы żeby и gdyby — это буквально że плюс by и gdy плюс by. Кусочек by уже внутри, поэтому второй раз его не ставят: chciałbym, żebyś przyszedł. By в главной части и by внутри союза, а глагол przyszedł стоит голым. Типичная ошибка звучит так: chciałbym, żebyś przyszedłbyś. Правильно — żebyś przyszedł. То же с gdyby: gdybym miał, а не gdybym miałbym. Отдельная строка для узнавания: книжная форма byłbym zrobił, сделал бы тогда, о нереальном в прошлом. Gdybym wiedział, byłbym przyszedł. В современной речи так почти не говорят. Тебе достаточно узнать эту форму в книге. И практический итог недели: если предложение уже начинается с gdyby или żeby, никакого дополнительного by в нём больше не появится.",
    "table":{"rows":[
      ["<b>Chciałbym, żebyś przyszedł.</b> <button class=\"play\" data-say=\"Chciałbym, żebyś przyszedł\">🔊</button>","by в главной части, żebyś в придаточной"],
      ["✗ żebyś przyszedł<b>byś</b> → ✓ <b>żebyś przyszedł</b> <button class=\"play\" data-say=\"żebyś przyszedł\">🔊</button>","by не дублируется"],
      ["<b>gdybym miał</b> — не «gdybym miałbym» <button class=\"play\" data-say=\"gdybym miał\">🔊</button>","та же логика с gdyby"],
      ["<b>Gdybym wiedział, byłbym przyszedł.</b> <button class=\"play\" data-say=\"Gdybym wiedział, byłbym przyszedł\">🔊</button>","книжное; сегодня скажут przyszedłbym"],
      ["<b>Poprosiłbym, żeby zaczęli w środę.</b> <button class=\"play\" data-say=\"Poprosiłbym, żeby zaczęli w środę\">🔊</button>","Я бы попросил, чтобы начали в среду."]
    ],"star":1},
    "examples":[
      {"ru":"Я хотела бы, чтобы бригада начала в среду.","en":"<b>Chciałabym, żeby</b> ekipa <b>zaczęła</b> w środę.","say":"Chciałabym, żeby ekipa zaczęła w środę."},
      {"ru":"Я бы попросил, чтобы вы позвонили заранее.","en":"<b>Poprosiłbym, żebyście zadzwonili</b> wcześniej.","say":"Poprosiłbym, żebyście zadzwonili wcześniej."},
      {"ru":"Если бы я знал, я бы пришёл раньше.","en":"<b>Gdybym wiedział, przyszedłbym</b> wcześniej.","gloss":"книжный вариант: byłbym przyszedł","say":"Gdybym wiedział, przyszedłbym wcześniej."}
    ],
    "mistakes":[
      {"wrong":"Chciałbym, żebyś przyszedłbyś.","right":"Chciałbym, <b>żebyś przyszedł</b>.","why":"личное окончание и by уже сидят на союзе; глагол остаётся голой л-формой."},
      {"wrong":"Gdybym miałbym czas, pojechałbym.","right":"<b>Gdybym miał</b> czas, pojechałbym.","why":"в первой части by уже внутри союза gdyby, второй раз он не появляется."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посчитай, сколько раз в предложении встречается by.",
       "q":"«Я бы попросил, чтобы вы позвонили раньше» —","opts":["Poprosiłbym, żebyście zadzwonilibyście wcześniej","Poprosiłbym, żebyście zadzwonili wcześniej","Poprosiłbym, że zadzwonicie wcześniej"],"answer":1,
       "explain":"By стоит в главной части, а в придаточной он уже внутри <b>żebyście</b>: глагол голый."},
      {"type":"choice","howto":"<b>Что делать:</b> узнай книжную форму.",
       "q":"<b>Byłbym przyszedł</b> — это —","opts":["книжное «я бы тогда пришёл»","«я приду»","«я бы пришёл» в современной речи"],"answer":0,
       "explain":"Это книжная форма о нереальном в прошлом. Сегодня говорят просто <b>przyszedłbym</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши вежливую просьбу. Диакритику можно не ставить.",
       "q":"«Я хотел(а) бы, чтобы бригада начала в среду»","accept":["chciałbym, żeby ekipa zaczęła w środę","chcialbym, zeby ekipa zaczela w srode","chciałabym, żeby ekipa zaczęła w środę","chcialabym, zeby ekipa zaczela w srode","chciałabym żeby ekipa zaczęła w środę","chcialabym zeby ekipa zaczela w srode"],"placeholder":"Chciałabym, żeby…"}
    ],
    "mnemonic":"🔒 żeby и gdyby уже содержат by. Второго by в предложении не будет."
   }
 ],
 "dialogue":{
   "intro":"Анна выбирает цвет и просит бригаду о нескольких вещах — вся вежливость дня в одном разговоре. Тапни по строке.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Panie Zbyszku, czy mogłabym prosić o chwilę?","ru":"Пан Збышек, можно попросить у вас минутку?",
      "words":[["czy mogłabym prosić o","можно попросить"],["chwila","минутка"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Oczywiście. Słucham panią.","ru":"Конечно. Слушаю вас.",
      "words":[["Oczywiście","конечно"]]},
     {"who":"A","name":"Anna","side":"left","en":"Wolałabym jaśniejszy kolor w kuchni.","ru":"Я бы предпочла более светлый цвет на кухне.",
      "words":[["Wolałabym","я бы предпочла"],["jaśniejszy","более светлый"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Da się zrobić. Warto by wtedy dołożyć jedną warstwę.","ru":"Можно сделать. Стоило бы тогда добавить один слой.",
      "words":[["Warto by","стоило бы"],["warstwa","слой"]]},
     {"who":"A","name":"Anna","side":"left","en":"Ja bym tego nie zmieniała w łazience — tam jest dobrze.","ru":"Я бы не меняла этого в ванной — там хорошо.",
      "words":[["Ja bym nie zmieniała","я бы не меняла"],["łazienka","ванная"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Zgoda. Można by za to wymienić kontakt przy drzwiach.","ru":"Согласен. Зато можно было бы заменить розетку у двери.",
      "words":[["Można by","можно было бы"],["kontakt","розетка"]]},
     {"who":"A","name":"Anna","side":"left","en":"Chciałabym, żeby to zrobił elektryk, nie my.","ru":"Я хотела бы, чтобы это сделал электрик, а не мы.",
      "words":[["Chciałabym, żeby","я хотела бы, чтобы"],["elektryk","электрик"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Jasne. Czy mógłbym prosić o numer do niego?","ru":"Ясно. Можно попросить его номер?",
      "words":[["Czy mógłbym prosić o","можно попросить"],["numer","номер"]]},
     {"who":"A","name":"Anna","side":"left","en":"Wyślę esemesem. Trzeba by ustalić to jeszcze dziś.","ru":"Пришлю эсэмэской. Надо бы согласовать это ещё сегодня.",
      "words":[["Trzeba by","надо бы"],["ustalić","согласовать"]]}
   ]
 },
 "scene":{
   "intro":"Сценка в магазине красок: одна просьба, три степени вежливости. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Dzień dobry, chciałabym zapytać o farbę do kuchni.","ru":"Здравствуйте, я хотела бы спросить о краске для кухни."},
     {"who":"B","en":"Oczywiście. Jaki kolor pani szuka?","ru":"Конечно. Какой цвет вы ищете?"},
     {"who":"A","en":"Coś jaśniejszego. Czy mogłabym prosić o próbki?","ru":"Что-то посветлее. Можно попросить образцы?"},
     {"who":"B","en":"Proszę bardzo. Na pani miejscu wzięłabym matową.","ru":"Пожалуйста. На вашем месте я бы взяла матовую."},
     {"who":"A","en":"Wolałabym półmat. Dziękuję. Czy byłaby pani tak miła i zapakowała?","ru":"Я бы предпочла полуматовую. Спасибо, не будете ли вы так любезны упаковать?"}
   ]
 },
 "vocab":{
   "intro":"Слова дня — вся вежливая машина на by плюс несколько ремонтных слов.",
   "items":[
     {"en":"zrobiłbym / zrobiłabym","ru":"я бы сделал / сделала","ex":"Zrobiłabym to inaczej."},
     {"en":"Chętnie bym…","ru":"я бы охотно…","ex":"Chętnie bym poszedł."},
     {"en":"Ja bym tego nie…","ru":"я бы этого не…","ex":"Ja bym tego nie robił."},
     {"en":"Czy mógłbym prosić o…","ru":"можно попросить…","ex":"Czy mógłbym prosić o fakturę?"},
     {"en":"Chciałbym zapytać o…","ru":"я хотел бы спросить о…","ex":"Chciałabym zapytać o gwarancję."},
     {"en":"Wolałbym / Wolałabym","ru":"я бы предпочёл / предпочла","ex":"Wolałabym zapłacić kartą."},
     {"en":"Czy byłaby pani tak miła…","ru":"не будете ли вы так любезны…","ex":"Czy byłaby pani tak miła i pokazała próbki?"},
     {"en":"warto by / można by / trzeba by","ru":"стоило бы / можно было бы / надо бы","ex":"Trzeba by wymienić okna."},
     {"en":"należałoby","ru":"следовало бы (книжное)","ex":"Należałoby to zgłosić."},
     {"en":"na twoim miejscu bym…","ru":"на твоём месте я бы…","ex":"Na twoim miejscu bym nie czekał."},
     {"en":"próbka koloru","ru":"образец цвета","ex":"Czy mogłabym prosić o próbki koloru?"},
     {"en":"warstwa farby","ru":"слой краски","ex":"Warto by dołożyć jedną warstwę."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую формулу к её переводу.",
   "pairs":[["Czy mógłbym prosić o…","можно попросить…"],["Wolałbym…","я бы предпочёл…"],["Warto by…","стоило бы…"],["Ja bym tego nie robił","я бы этого не делал"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как Анна ведёт день на сплошных формах с by. Отметь, где by уехало вперёд.",
   "title":"Dzień grzeczny do przesady",
   "sentences":["Rano napisałam do wydawnictwa, że chciałabym przesunąć jedno spotkanie.","Wolałabym pracować z domu, dopóki trwa malowanie.","Czy mogłabym prosić o potwierdzenie do południa?","W mieszkaniu powiedziałam panu Zbyszkowi, że wolałabym jaśniejszy kolor.","Ja bym nie zmieniała niczego w łazience.","Warto by za to wymienić kontakt przy drzwiach.","Można by zapytać elektryka, czy ma czas w czwartek.","Trzeba by też kupić drugą warstwę farby.","Marek powiedział, że na moim miejscu zamówiłby wszystko przez internet.","Chciałabym, żeby ten tydzień skończył się spokojnie."],
   "translation":"Утром я написала в издательство, что хотела бы перенести одну встречу. Я бы предпочла работать из дома, пока идёт покраска. Можно попросить подтверждение до полудня? В квартире я сказала пану Збышеку, что предпочла бы более светлый цвет. Я бы ничего не меняла в ванной. Стоило бы зато поменять розетку у двери. Можно было бы спросить электрика, есть ли у него время в четверг. Надо бы ещё купить второй слой краски. Марек сказал, что на моём месте заказал бы всё через интернет. Я хотела бы, чтобы эта неделя закончилась спокойно."
 },
 "quiz":{
   "intro":"Пять вопросов — и вежливость станет автоматической.",
   "items":[
     {"q":"1. «Я бы этого не делал» —","opts":["Ja bym tego nie robiłbym","Ja bym tego nie robił","Ja by tego nie robiłem"],"answer":1,
      "explain":"By в предложении одно: уехало вперёд — глагол остаётся голым."},
     {"q":"2. «Можно попросить счёт?» —","opts":["Czy mógłbym prosić fakturę?","Czy mógłbym prosić o fakturę?","Czy chcę fakturę?"],"answer":1,
      "explain":"<b>prosić o</b> плюс винительный падеж."},
     {"q":"3. «Надо бы поменять окна» —","opts":["Trzeba bym wymienić okna","Trzeba by wymienić okna","Trzeba by wymieniłbym okna"],"answer":1,
      "explain":"У безличного <b>trzeba by</b> нет личного окончания, дальше идёт инфинитив."},
     {"q":"4. «Я хотел бы, чтобы ты пришёл» —","opts":["Chciałbym, żebyś przyszedłbyś","Chciałbym, żebyś przyszedł","Chciałbym, że przyjdziesz"],"answer":1,
      "explain":"By уже внутри <b>żebyś</b>, глагол стоит голой л-формой."},
     {"q":"5. <b>Byłbym przyszedł</b> — это —","opts":["книжное «я бы тогда пришёл»","«я пришёл»","«я приду»"],"answer":0,
      "explain":"Книжная форма о нереальном в прошлом; в живой речи говорят przyszedłbym."}
   ]
 },
 "essay":{
   "intro":"Сегодня задача не сказать, чего ты хочешь, а сказать это так, чтобы человеку было приятно согласиться.",
   "prompt":"Напиши 5–6 предложений: попроси о чём-то незнакомого человека, вежливо откажись от чужого предложения, посоветуй что-то безлично и скажи, чего бы ты хотел(а) от другого человека.",
   "hint":"Опора: Czy mógłbym prosić o… · Chciałbym zapytać o… · Wolałbym… · Warto by… · Można by… · Chciałbym, żebyś… 📝",
   "example":"Dzień dobry, chciałabym zapytać o termin dostawy. Czy mogłabym prosić o potwierdzenie mailem? Wolałabym odebrać towar w sobotę, jeśli to możliwe. Warto by przy okazji sprawdzić, czy kolor się zgadza. Można by też dołożyć jedną próbkę. Chciałabym, żeby wszystko dojechało przed weekendem."
 }
},
"19": {
 "day":19,"week":"03",
 "themeRu":"Утверждает, будто",
 "themeEn":"Twierdzi, podobno, rzekomo",
 "intro":"Соседка с третьего этажа знает о ремонте больше, чем сама бригада: <b>Podobno kładą panele od tygodnia</b>, <b>rzekomo już raz musieli poprawiać</b>. Сегодня — чужое слово: глаголы, которые пересказывают с оттенком (<b>twierdzić</b>, <b>zaprzeczać</b>, <b>zapewniać</b>), и маленькие маркеры, которые сразу показывают, веришь ты услышанному или нет.",
 "introAudio":"Соседка с третьего этажа знает о ремонте больше, чем сама бригада: podobno kładą panele od tygodnia, rzekomo już raz musieli poprawiać. Сегодня чужое слово: глаголы, которые пересказывают с оттенком — twierdzić, zaprzeczać, zapewniać — и маленькие маркеры, которые сразу показывают, веришь ты услышанному или нет.",
 "goals":[
   "Пересказывать с оттенком: <b>twierdzi, że</b> · <b>przyznał, że</b> · <b>zaprzeczył, że</b>",
   "Обещать и предупреждать: <b>obiecał, że</b> · <b>ostrzegł przed</b> + твор.",
   "Ставить маркер слуха: <b>podobno</b> — «говорят»",
   "Ставить маркер недоверия: <b>rzekomo</b>, <b>niby</b> — «якобы»"
 ],
 "learned":[
   "Пересказал(а) с оттенком: twierdzi, że · przyznał, że · zaprzeczył, że",
   "Пообещал(а) и предупредил(а): obiecał, że · ostrzegł przed + твор.",
   "Поставил(а) маркер слуха: podobno",
   "Поставил(а) маркер недоверия: rzekomo, niby"
 ],
 "review":{
   "intro":"Разминка по вчерашнему by, по союзам недели и по одной паре предлогов из недели 2.",
   "introAudio":"Разминка по вчерашнему by, по союзам недели и по одной паре предлогов из недели два.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 18.",
      "q":"«Можно попросить счёт?» —","opts":["Czy mógłbym prosić fakturę?","Czy mógłbym prosić o fakturę?","Czy chciałbym fakturę?"],"answer":1,
      "explain":"<b>prosić o</b> плюс винительный падеж."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 18.",
      "q":"«Надо бы позвонить электрику» —","opts":["Trzeba bym zadzwonić do elektryka","Trzeba by zadzwonić do elektryka","Trzeba by zadzwoniłbym do elektryka"],"answer":1,
      "explain":"Безличное <b>trzeba by</b> плюс инфинитив, без личных окончаний."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 17.",
      "q":"«Раз уж ты здесь, помоги мне» —","opts":["Skoro już jesteś, pomóż mi","Ponieważ już jesteś, pomóż mi","Zanim już jesteś, pomóż mi"],"answer":0,
      "explain":"Известная обоим причина — <b>skoro</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни предлоги причины из недели 2.",
      "q":"«Благодаря соседке мы нашли бригаду» —","opts":["Dzięki sąsiadce znaleźliśmy ekipę","Z powodu sąsiadki znaleźliśmy ekipę","Przez sąsiadkę znaleźliśmy ekipę"],"answer":0,
      "explain":"Хорошая причина — <b>dzięki</b> плюс дательный: dzięki sąsiadce."}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Глаголы с позицией",
    "title":"<em>twierdzić</em> · <em>przyznać</em> · <em>zaprzeczyć</em>",
    "paras":[
      "Обычное <b>powiedzieć, że</b> нейтрально. Но польский умеет сразу показать, как говорящий относится к своим словам. <b>Twierdzić, że</b> — «утверждать»: человек настаивает, а ты этого не подтверждаешь. <b>Wykonawca twierdzi, że wszystko jest zgodne z umową.</b>",
      "<b>Przyznać, że</b> — «признать»: сказать то, что говорить не хотелось. <b>Przyznał, że się pomylił.</b> Рядом живёт оборот <b>przyznać się do</b> + родительный: <b>przyznał się do błędu</b> («признался в ошибке»).",
      "<b>Zaprzeczyć / zaprzeczać</b> — «отрицать». В обычной речи с że: <b>Zaprzeczył, że obiecywał zniżkę.</b> Есть и вариант с дательным падежом — <b>zaprzeczać faktom</b> («отрицать факты»), — но чаще ты встретишь конструкцию с że.",
      "Все три глагола ведут себя как powiedzieć из B1: времена в пересказе не сдвигаются. Что человек сказал, то и остаётся: его «zrobię to» превращается в <b>twierdzi, że to zrobi</b> — меняются только лицо и притяжательные."
    ],
    "audio":"Обычное powiedzieć, że нейтрально. Но польский умеет сразу показать, как говорящий относится к своим словам. Twierdzić, że — утверждать: человек настаивает, а ты этого не подтверждаешь. Wykonawca twierdzi, że wszystko jest zgodne z umową. Przyznać, że — признать: сказать то, что говорить не хотелось. Przyznał, że się pomylił. Рядом живёт оборот przyznać się do плюс родительный: przyznał się do błędu. Zaprzeczyć — отрицать. В обычной речи с że: zaprzeczył, że obiecywał zniżkę. Есть и вариант с дательным падежом, zaprzeczać faktom, но чаще ты встретишь конструкцию с że. Все три глагола ведут себя как powiedzieć из B1: времена в пересказе не сдвигаются.",
    "table":{"rows":[
      ["Wykonawca <b>twierdzi, że</b> wszystko jest zgodne z umową. <button class=\"play\" data-say=\"Wykonawca twierdzi, że wszystko jest zgodne z umową\">🔊</button>","Подрядчик утверждает, что всё по договору."],
      ["<b>Przyznał, że</b> się pomylił. <button class=\"play\" data-say=\"Przyznał, że się pomylił\">🔊</button>","Он признал, что ошибся."],
      ["<b>Przyznał się do</b> błędu. <button class=\"play\" data-say=\"Przyznał się do błędu\">🔊</button>","Он признался в ошибке. (+ род.)"],
      ["<b>Zaprzeczył, że</b> obiecywał zniżkę. <button class=\"play\" data-say=\"Zaprzeczył, że obiecywał zniżkę\">🔊</button>","Он отрицал, что обещал скидку."],
      ["Powiedział: „Zrobię to” → <b>twierdzi, że to zrobi</b> <button class=\"play\" data-say=\"twierdzi, że to zrobi\">🔊</button>","время в пересказе не сдвигается"]
    ],"star":0},
    "examples":[
      {"ru":"Бригадир утверждает, что штукатурка сохнет три дня.","en":"Kierownik ekipy <b>twierdzi, że</b> tynk schnie trzy dni.","say":"Kierownik ekipy twierdzi, że tynk schnie trzy dni."},
      {"ru":"Магазин признал, что привёз не тот цвет.","en":"Sklep <b>przyznał, że</b> przywiózł zły kolor.","say":"Sklep przyznał, że przywiózł zły kolor."},
      {"ru":"Он признался в ошибке и всё поправил.","en":"<b>Przyznał się do</b> błędu i wszystko poprawił.","gloss":"przyznać się do + родительный","say":"Przyznał się do błędu i wszystko poprawił."},
      {"ru":"Соседка отрицает, что жаловалась на шум.","en":"Sąsiadka <b>zaprzecza, że</b> skarżyła się na hałas.","gloss":"skarżyć się na + винительный","say":"Sąsiadka zaprzecza, że skarżyła się na hałas."}
    ],
    "mistakes":[
      {"wrong":"Przyznał do błędu.","right":"<b>Przyznał się do</b> błędu.","why":"в значении «признаться в чём-то» глагол идёт с się и предлогом do плюс родительный."},
      {"wrong":"Twierdzi, że zrobił to jutro.","right":"<b>Twierdzi, że zrobi</b> to jutro.","why":"время в пересказе не сдвигается: «сделаю завтра» остаётся будущим."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> выбери глагол под ситуацию.",
       "q":"«Подрядчик утверждает, что всё по договору» —","opts":["Wykonawca przyznaje, że…","Wykonawca twierdzi, że…","Wykonawca zaprzecza, że…"],"answer":1,
       "explain":"«Утверждать» — <b>twierdzić</b>: человек настаивает на своём."},
      {"type":"choice","howto":"<b>Что делать:</b> проверь управление.",
       "q":"«Он признался в ошибке» —","opts":["Przyznał do błędu","Przyznał się do błędu","Przyznał się błąd"],"answer":1,
       "explain":"<b>przyznać się do</b> плюс родительный падеж."},
      {"type":"type","howto":"<b>Что делать:</b> напиши пересказ. Диакритику можно не ставить.",
       "q":"«Он утверждает, что всё готово»","accept":["twierdzi, że wszystko jest gotowe","twierdzi, ze wszystko jest gotowe","twierdzi że wszystko jest gotowe","twierdzi ze wszystko jest gotowe"],"placeholder":"Twierdzi, że…"}
    ],
    "mnemonic":"🗣️ twierdzi — настаивает · przyznaje — сдаётся · zaprzecza — отрицает."
   },
   {
    "eyebrow":"Правило 2 · Обещания и предупреждения",
    "title":"<em>obiecać</em> · <em>zapewniać</em> · <em>ostrzegać przed</em>",
    "paras":[
      "<b>Obiecać / obiecywać, że</b> — «обещать»: <b>Obiecali, że skończą do piątku.</b> Кому — дательный падеж: <b>obiecali nam</b>, <b>obiecał mi</b>.",
      "<b>Zapewniać, że</b> — «уверять, заверять»: сильнее обещания, но без гарантии. <b>Zapewnia, że materiał jest najlepszy.</b> Форма с человеком: <b>zapewnić kogoś o czymś</b> — <b>zapewnił nas o jakości</b> (книжнее).",
      "<b>Ostrzegać</b> — «предупреждать», и вот у него две дороги. С придаточным: <b>Ostrzegli, że będzie głośno.</b> С существительным — предлог <b>przed</b> плюс творительный: <b>Ostrzegli nas przed tą ekipą.</b> Русское «предупредить о» здесь не работает — только przed.",
      "И два знакомых из B1, которые встают в этот же ряд: <b>radzić, żeby</b> («советовать, чтобы») и <b>proponować, żeby</b> («предлагать, чтобы»). Воля по-прежнему идёт через żeby с л-формой."
    ],
    "audio":"Obiecać, że — обещать: obiecali, że skończą do piątku. Кому — дательный падеж: obiecali nam, obiecał mi. Zapewniać, że — уверять, заверять: сильнее обещания, но без гарантии. Zapewnia, że materiał jest najlepszy. Ostrzegać — предупреждать, и у него две дороги. С придаточным: ostrzegli, że będzie głośno. С существительным — предлог przed плюс творительный: ostrzegli nas przed tą ekipą. Русское «предупредить о» здесь не работает, только przed. И два знакомых из B1, которые встают в этот же ряд: radzić, żeby и proponować, żeby. Воля по-прежнему идёт через żeby с л-формой.",
    "table":{"rows":[
      ["<b>Obiecali, że</b> skończą do piątku. <button class=\"play\" data-say=\"Obiecali, że skończą do piątku\">🔊</button>","Обещали, что закончат к пятнице."],
      ["<b>Zapewnia, że</b> materiał jest najlepszy. <button class=\"play\" data-say=\"Zapewnia, że materiał jest najlepszy\">🔊</button>","Уверяет, что материал лучший."],
      ["<b>Ostrzegli, że</b> będzie głośno. <button class=\"play\" data-say=\"Ostrzegli, że będzie głośno\">🔊</button>","Предупредили, что будет шумно."],
      ["<b>Ostrzegli nas przed</b> tą ekipą. <button class=\"play\" data-say=\"Ostrzegli nas przed tą ekipą\">🔊</button>","Предупредили нас об этой бригаде. (przed + твор.)"],
      ["<b>Radzę, żebyś</b> zapytał o gwarancję. <button class=\"play\" data-say=\"Radzę, żebyś zapytał o gwarancję\">🔊</button>","Советую тебе спросить о гарантии."]
    ],"star":3},
    "examples":[
      {"ru":"Они обещали нам, что не будут шуметь до восьми.","en":"<b>Obiecali nam, że</b> nie będą hałasować do ósmej.","say":"Obiecali nam, że nie będą hałasować do ósmej."},
      {"ru":"Продавец уверяет, что краска не пахнет.","en":"Sprzedawca <b>zapewnia, że</b> farba nie pachnie.","say":"Sprzedawca zapewnia, że farba nie pachnie."},
      {"ru":"Соседка предупредила нас о протечке.","en":"Sąsiadka <b>ostrzegła nas przed</b> zalaniem.","gloss":"ostrzegać przed + творительный","say":"Sąsiadka ostrzegła nas przed zalaniem."},
      {"ru":"Марек предложил, чтобы мы подписали новый график.","en":"Marek <b>zaproponował, żebyśmy podpisali</b> nowy harmonogram.","gloss":"harmonogram — график работ","say":"Marek zaproponował, żebyśmy podpisali nowy harmonogram."}
    ],
    "mistakes":[
      {"wrong":"Ostrzegli nas o tej ekipie.","right":"<b>Ostrzegli nas przed</b> tą ekipą.","why":"польское ostrzegać идёт с przed и творительным падежом, а не с «о»."},
      {"wrong":"Obiecali, żeby skończą do piątku.","right":"<b>Obiecali, że</b> skończą do piątku.","why":"обещание — это информация, а не воля: значит że, а не żeby."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь предлог после ostrzegać.",
       "q":"«Предупредили нас об этой бригаде» —","opts":["Ostrzegli nas o tej ekipie","Ostrzegli nas przed tą ekipą","Ostrzegli nas na tę ekipę"],"answer":1,
       "explain":"<b>ostrzegać przed</b> плюс творительный — управление, где русский подводит."},
      {"type":"choice","howto":"<b>Что делать:</b> реши, это информация или воля.",
       "q":"«Обещали, что закончат в пятницу» —","opts":["Obiecali, że skończą w piątek","Obiecali, żeby skończyli w piątek","Obiecali, czy skończą w piątek"],"answer":0,
       "explain":"Информацию вводит <b>że</b>; żeby было бы волей, czy — вопросом."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Ostrzegli nas przed tą ekipą.","sub":"нас предупредили об этой бригаде","want":"przed tą ekipą"}
    ],
    "mnemonic":"⚠️ obiecać że · zapewniać że · ostrzegać przed + твор. — предлог не «о»."
   },
   {
    "eyebrow":"Правило 3 · Говорят и якобы",
    "title":"<em>podobno</em> · <em>rzekomo</em> · <em>niby</em>",
    "paras":[
      "Иногда источник называть незачем — достаточно поставить маркер. <b>Podobno</b> — «говорят, вроде бы»: ты передаёшь слух нейтрально, без оценки. <b>Podobno ta ekipa jest bardzo dobra.</b> Оно свободно стоит в начале фразы или перед сказуемым.",
      "<b>Rzekomo</b> — «якобы»: ты передаёшь чужое утверждение и явно ему не веришь. <b>Rzekomo skończyli już w środę.</b> В газете rzekomo сигналит, что редакция за эти слова не отвечает.",
      "<b>Niby</b> — разговорное «вроде как, будто бы», с лёгкой иронией: <b>Niby wszystko gotowe, a kran nadal cieknie.</b> Часто идёт в паре с «а» и продолжением, которое всё опровергает.",
      "Для узнавания: <b>ponoć</b> — почти то же, что podobno, чуть более книжное; <b>jakoby</b> — книжное «будто бы» после глагола пересказа: <b>Twierdzi, jakoby nic nie wiedział.</b> Сам ты этого писать не обязан, но в тексте узнаешь."
    ],
    "audio":"Иногда источник называть незачем, достаточно поставить маркер. Podobno — говорят, вроде бы: ты передаёшь слух нейтрально, без оценки. Podobno ta ekipa jest bardzo dobra. Rzekomo — якобы: ты передаёшь чужое утверждение и явно ему не веришь. Rzekomo skończyli już w środę. В газете rzekomo сигналит, что редакция за эти слова не отвечает. Niby — разговорное «вроде как, будто бы», с лёгкой иронией: niby wszystko gotowe, a kran nadal cieknie. Для узнавания: ponoć почти то же, что podobno, чуть более книжное; jakoby — книжное «будто бы» после глагола пересказа: twierdzi, jakoby nic nie wiedział.",
    "table":{"rows":[
      ["<b>Podobno</b> ta ekipa jest bardzo dobra. <button class=\"play\" data-say=\"Podobno ta ekipa jest bardzo dobra\">🔊</button>","Говорят, эта бригада очень хорошая."],
      ["<b>Rzekomo</b> skończyli już w środę. <button class=\"play\" data-say=\"Rzekomo skończyli już w środę\">🔊</button>","Якобы они закончили ещё в среду."],
      ["<b>Niby</b> wszystko gotowe, a kran cieknie. <button class=\"play\" data-say=\"Niby wszystko gotowe, a kran cieknie\">🔊</button>","Вроде всё готово, а кран течёт."],
      ["<b>Ponoć</b> będzie drożej. <button class=\"play\" data-say=\"Ponoć będzie drożej\">🔊</button>","Говорят, будет дороже. (узнавание)"],
      ["Twierdzi, <b>jakoby</b> nic nie wiedział. <button class=\"play\" data-say=\"Twierdzi, jakoby nic nie wiedział\">🔊</button>","Утверждает, будто ничего не знал. (книжное)"]
    ],"star":1},
    "examples":[
      {"ru":"Говорят, летом во дворе будет новая парковка.","en":"<b>Podobno</b> latem na podwórku będzie nowy parking.","say":"Podobno latem na podwórku będzie nowy parking."},
      {"ru":"Якобы материал подорожал на двадцать процентов.","en":"<b>Rzekomo</b> materiał podrożał o dwadzieścia procent.","gloss":"podrożeć o + винительный — подорожать на","say":"Rzekomo materiał podrożał o dwadzieścia procent."},
      {"ru":"Вроде как он звонил, а телефон молчал весь день.","en":"<b>Niby</b> dzwonił, a telefon milczał cały dzień.","say":"Niby dzwonił, a telefon milczał cały dzień."}
    ],
    "mistakes":[
      {"wrong":"Rzekomo ta ekipa jest bardzo dobra. (нейтральный слух)","right":"<b>Podobno</b> ta ekipa jest bardzo dobra.","why":"rzekomo добавляет недоверие. Если ты просто передаёшь слух, нужен podobno."},
      {"wrong":"Podobno on kłamie, ale to nieprawda.","right":"<b>Rzekomo</b> on kłamie, ale to nieprawda.","why":"когда ты сразу опровергаешь чужие слова, маркером недоверия служит rzekomo."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, веришь ты слуху или нет.",
       "q":"«Якобы они закончили ещё в среду» (ты не веришь) —","opts":["Podobno skończyli już w środę","Rzekomo skończyli już w środę","Pewnie skończyli już w środę"],"answer":1,
       "explain":"Недоверие показывает <b>rzekomo</b>; podobno было бы нейтральным слухом."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что значит podobno.",
       "q":"<b>Podobno będzie drożej.</b> —","opts":["Говорят, будет дороже","Наверняка будет дороже","Похоже на дороже"],"answer":0,
       "explain":"<b>Podobno</b> — «говорят, по слухам», нейтральная передача чужих слов."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Говорят, эта бригада очень хорошая»</b>","answer":"Podobno ta ekipa jest bardzo dobra"}
    ],
    "mnemonic":"📻 podobno — говорят · rzekomo — якобы, не верю · niby — вроде как."
   },
   {
    "eyebrow":"Правило 4 · Откуда сведения",
    "title":"<em>według</em> · <em>jak podaje</em> · заголовки",
    "paras":[
      "Когда источник всё-таки называют, берут <b>według</b> + родительный: <b>według wykonawcy</b>, <b>według sąsiadki</b>, <b>według umowy</b> («по договору»). Это ровно русское «по словам, согласно».",
      "Газетные рамки: <b>jak podaje</b> («как сообщает») и <b>jak informuje</b> — дальше идёт название источника в именительном: <b>Jak podaje gazeta, remont potrwa do jesieni.</b>",
      "В заголовках маркеры недоверия работают в полную силу: <b>Firma rzekomo nie zapłaciła pracownikom</b> — редакция сообщает об обвинении, но не утверждает, что оно верно. Сравни с нейтральным <b>Podobno powstanie nowy park</b>.",
      "И полезная мелочь для устного пересказа: чтобы отделить чужое мнение от своего, поляки говорят <b>ponoć tak, ale ja bym…</b> или <b>tak mówią, choć ja mam wątpliwości</b>. Сегодняшние маркеры прекрасно уживаются со вчерашним by."
    ],
    "audio":"Когда источник всё-таки называют, берут według плюс родительный: według wykonawcy, według sąsiadki, według umowy — по договору. Это ровно русское «по словам, согласно». Газетные рамки: jak podaje, как сообщает, и jak informuje; дальше идёт название источника в именительном: jak podaje gazeta, remont potrwa do jesieni. В заголовках маркеры недоверия работают в полную силу: firma rzekomo nie zapłaciła pracownikom. Редакция сообщает об обвинении, но не утверждает, что оно верно. Сравни с нейтральным: podobno powstanie nowy park. И полезная мелочь для устного пересказа: чтобы отделить чужое мнение от своего, поляки говорят tak mówią, choć ja mam wątpliwości.",
    "table":{"rows":[
      ["<b>Według</b> wykonawcy wszystko jest gotowe. <button class=\"play\" data-say=\"Według wykonawcy wszystko jest gotowe\">🔊</button>","По словам подрядчика, всё готово. (+ род.)"],
      ["<b>Według umowy</b> mamy czternaście dni. <button class=\"play\" data-say=\"Według umowy mamy czternaście dni\">🔊</button>","По договору у нас четырнадцать дней."],
      ["<b>Jak podaje</b> gazeta, remont potrwa do jesieni. <button class=\"play\" data-say=\"Jak podaje gazeta, remont potrwa do jesieni\">🔊</button>","Как сообщает газета, ремонт продлится до осени."],
      ["Firma <b>rzekomo</b> nie zapłaciła pracownikom. <button class=\"play\" data-say=\"Firma rzekomo nie zapłaciła pracownikom\">🔊</button>","заголовок: обвинение, не факт"],
      ["<b>Podobno</b> powstanie nowy park. <button class=\"play\" data-say=\"Podobno powstanie nowy park\">🔊</button>","заголовок: нейтральный слух"]
    ],"star":0},
    "examples":[
      {"ru":"По словам соседки, работы должны были закончиться в июне.","en":"<b>Według</b> sąsiadki prace miały się skończyć w czerwcu.","gloss":"mieć + инфинитив — «должен был», разговорная рамка","say":"Według sąsiadki prace miały się skończyć w czerwcu."},
      {"ru":"Согласно договору мы платим после приёмки работ.","en":"<b>Według umowy</b> płacimy po odbiorze prac.","gloss":"odbiór prac — приёмка работ","say":"Według umowy płacimy po odbiorze prac."},
      {"ru":"Как сообщает управляющая компания, воду отключат в среду.","en":"<b>Jak informuje</b> administracja, wodę wyłączą w środę.","say":"Jak informuje administracja, wodę wyłączą w środę."}
    ],
    "mistakes":[
      {"wrong":"Według wykonawca wszystko jest gotowe.","right":"<b>Według wykonawcy</b> wszystko jest gotowe.","why":"według всегда идёт с родительным падежом."},
      {"wrong":"Według mnie tak twierdzi gazeta.","right":"<b>Jak podaje</b> gazeta, …","why":"według mnie значит «по-моему»: это уже твоё мнение, а не источник."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь падеж после według.",
       "q":"«По словам подрядчика» —","opts":["według wykonawca","według wykonawcy","według wykonawcę"],"answer":1,
       "explain":"<b>według</b> плюс родительный: wykonawcy."},
      {"type":"choice","howto":"<b>Что делать:</b> прочитай заголовок как редактор.",
       "q":"<b>Firma rzekomo nie zapłaciła pracownikom.</b> Газета —","opts":["утверждает, что фирма не заплатила","передаёт обвинение, не ручаясь за него","опровергает обвинение"],"answer":1,
       "explain":"<b>Rzekomo</b> ставят именно для того, чтобы передать чужое утверждение без своей ответственности."},
      {"type":"type","howto":"<b>Что делать:</b> напиши ссылку на источник. Диакритику можно не ставить.",
       "q":"«По договору у нас четырнадцать дней»","accept":["według umowy mamy czternaście dni","wedlug umowy mamy czternascie dni"],"placeholder":"Według umowy…"}
    ],
    "mnemonic":"📰 według + род. — источник · jak podaje — газета · rzekomo — «мы только передаём»."
   }
 ],
 "dialogue":{
   "intro":"Соседка встретила Анну на лестнице — и у неё есть версия всего. Тапни по строке.",
   "lines":[
     {"who":"S","name":"Sąsiadka","side":"right","en":"Pani Anno, podobno u państwa remont trwa już trzeci tydzień?","ru":"Пани Анна, говорят, у вас ремонт идёт уже третью неделю?",
      "words":[["podobno","говорят"],["trzeci tydzień","третья неделя"]]},
     {"who":"A","name":"Anna","side":"left","en":"Drugi. Ekipa twierdzi, że skończy w piątek.","ru":"Вторую. Бригада утверждает, что закончит в пятницу.",
      "words":[["twierdzi, że","утверждает, что"],["skończy","закончит"]]},
     {"who":"S","name":"Sąsiadka","side":"right","en":"Rzekomo u Kowalskich robili miesiąc.","ru":"Якобы у Ковальских они работали месяц.",
      "words":[["Rzekomo","якобы"],["u Kowalskich","у Ковальских"]]},
     {"who":"A","name":"Anna","side":"left","en":"Ktoś panią ostrzegał przed tą firmą?","ru":"Вас кто-то предупреждал об этой фирме?",
      "words":[["ostrzegał przed","предупреждал о"],["firma","фирма"]]},
     {"who":"S","name":"Sąsiadka","side":"right","en":"Nie, ale niby raz musieli poprawiać podłogę.","ru":"Нет, но вроде как один раз им пришлось переделывать пол.",
      "words":[["niby","вроде как"],["poprawiać","переделывать"]]},
     {"who":"A","name":"Anna","side":"left","en":"Pan Zbyszek przyznał się do tego od razu.","ru":"Пан Збышек сразу в этом признался.",
      "words":[["przyznał się do","признался в"],["od razu","сразу"]]},
     {"who":"S","name":"Sąsiadka","side":"right","en":"A według administracji wodę wyłączą w środę.","ru":"А по данным управляющей компании воду отключат в среду.",
      "words":[["według","по словам, согласно"],["wyłączą","отключат"]]},
     {"who":"A","name":"Anna","side":"left","en":"Tego akurat nikt nam nie mówił. Dziękuję!","ru":"Вот об этом нам как раз никто не говорил. Спасибо!",
      "words":[["akurat","как раз"],["nikt","никто"]]},
     {"who":"S","name":"Sąsiadka","side":"right","en":"Ponoć będzie tylko na pół dnia. Ale kto to wie.","ru":"Говорят, только на полдня. Но кто его знает.",
      "words":[["Ponoć","говорят"],["kto to wie","кто его знает"]]}
   ]
 },
 "scene":{
   "intro":"Сценка: Анна и Марек проверяют слухи. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Sąsiadka mówi, że rzekomo poprawiali podłogę u Kowalskich.","ru":"Соседка говорит, что якобы они переделывали пол у Ковальских."},
     {"who":"B","en":"Podobno tak. Ale sami się do tego przyznali.","ru":"Говорят, да. Но они сами в этом признались."},
     {"who":"A","en":"Zapewniali nas, że u nas wszystko jest równo.","ru":"Нас уверяли, что у нас всё ровно."},
     {"who":"B","en":"I jest. Zaprzeczyli tylko, że obiecywali zniżkę.","ru":"Так и есть. Они только отрицали, что обещали скидку."},
     {"who":"A","en":"Według umowy zniżki i tak nie ma. Więc spokojnie.","ru":"По договору скидки и так нет. Так что спокойно."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — весь набор для пересказа чужих слов с оттенком.",
   "items":[
     {"en":"twierdzić, że","ru":"утверждать, что","ex":"Twierdzi, że wszystko jest gotowe."},
     {"en":"przyznać, że","ru":"признать, что","ex":"Przyznał, że się pomylił."},
     {"en":"przyznać się do czegoś","ru":"признаться в чём-то (do + род.)","ex":"Przyznał się do błędu."},
     {"en":"zaprzeczać, że","ru":"отрицать, что","ex":"Zaprzeczył, że obiecywał zniżkę."},
     {"en":"obiecać, że","ru":"пообещать, что","ex":"Obiecali, że skończą do piątku."},
     {"en":"zapewniać, że","ru":"уверять, что","ex":"Zapewnia, że materiał jest najlepszy."},
     {"en":"ostrzegać przed czymś","ru":"предупреждать о чём-то (przed + твор.)","ex":"Ostrzegli nas przed tą ekipą."},
     {"en":"podobno","ru":"говорят, по слухам","ex":"Podobno ta ekipa jest bardzo dobra."},
     {"en":"rzekomo","ru":"якобы (с недоверием)","ex":"Rzekomo skończyli już w środę."},
     {"en":"niby","ru":"вроде как, будто бы","ex":"Niby wszystko gotowe, a kran cieknie."},
     {"en":"ponoć / jakoby","ru":"говорят / будто бы (узнавание)","ex":"Twierdzi, jakoby nic nie wiedział."},
     {"en":"według kogoś","ru":"по словам, согласно (+ род.)","ex":"Według umowy mamy czternaście dni."}
   ]
 },
 "drag":{
   "intro":"Перетащи польский маркер к его смыслу.",
   "pairs":[["podobno","говорят"],["rzekomo","якобы, не верю"],["niby","вроде как"],["według","по словам, согласно"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как одна история звучит в трёх пересказах. Отмечай, где говорящий верит, а где нет.",
   "title":"Kto co mówi",
   "sentences":["Pan Zbyszek twierdzi, że tynk schnie trzy dni.","Sąsiadka mówi, że podobno u Kowalskich remont trwał miesiąc.","Rzekomo ekipa musiała tam raz poprawiać podłogę.","Sam pan Zbyszek przyznał się do tego od razu.","Zaprzeczył tylko, że obiecywał nam zniżkę.","Sprzedawca zapewnia, że farba nie pachnie.","Sąsiadka ostrzegła nas przed zalaniem z góry.","Według administracji wodę wyłączą w środę na pół dnia.","Niby wszystko idzie zgodnie z planem, a ja i tak liczę dni.","Marek mówi, że nie warto wierzyć w plotki na klatce."],
   "translation":"Пан Збышек утверждает, что штукатурка сохнет три дня. Соседка говорит, что якобы у Ковальских ремонт длился месяц. Якобы бригаде пришлось там один раз переделывать пол. Сам пан Збышек сразу в этом признался. Он отрицал только, что обещал нам скидку. Продавец уверяет, что краска не пахнет. Соседка предупредила нас о протечке сверху. По данным управляющей компании, воду отключат в среду на полдня. Вроде всё идёт по плану, а я всё равно считаю дни. Марек говорит, что не стоит верить сплетням в подъезде."
 },
 "quiz":{
   "intro":"Пять вопросов о чужих словах и о том, верить ли им.",
   "items":[
     {"q":"1. «Он признался в ошибке» —","opts":["Przyznał do błędu","Przyznał się do błędu","Przyznał się błąd"],"answer":1,
      "explain":"<b>przyznać się do</b> плюс родительный падеж."},
     {"q":"2. «Предупредили нас об этой бригаде» —","opts":["Ostrzegli nas o tej ekipie","Ostrzegli nas przed tą ekipą","Ostrzegli nas na tę ekipę"],"answer":1,
      "explain":"<b>ostrzegać przed</b> плюс творительный падеж."},
     {"q":"3. Нейтральный слух «говорят, что…» —","opts":["podobno","rzekomo","niby"],"answer":0,
      "explain":"<b>Podobno</b> передаёт слух без оценки; rzekomo и niby добавляют недоверие."},
     {"q":"4. «По договору у нас четырнадцать дней» —","opts":["według umowa","według umowy","według umowę"],"answer":1,
      "explain":"<b>według</b> идёт с родительным падежом."},
     {"q":"5. «Обещали, что закончат в пятницу» —","opts":["Obiecali, że skończą w piątek","Obiecali, żeby skończyli w piątek","Obiecali, czy skończą w piątek"],"answer":0,
      "explain":"Обещание — это информация, её вводит <b>że</b>."}
   ]
 },
 "essay":{
   "intro":"Сегодня попробуй пересказать чужие слова так, чтобы было слышно, веришь ты им или нет.",
   "prompt":"Напиши 5–6 предложений: перескажи слух, который до тебя дошёл, чужое утверждение, в которое ты не веришь, чьё-то обещание, чьё-то предупреждение и сошлись на источник.",
   "hint":"Опора: Podobno… · Rzekomo… · Twierdzi, że… · Obiecali, że… · Ostrzegli nas przed… · Według… 📝",
   "example":"Podobno w naszym budynku będzie nowa winda. Rzekomo prace mają ruszyć jeszcze tej wiosny. Administracja twierdzi, że wszystko jest już podpisane. Obiecali nam, że hałas potrwa najwyżej dwa tygodnie. Sąsiadka ostrzegła nas przed kurzem na klatce. Według ogłoszenia szczegóły poznamy w przyszłym miesiącu."
 }
},
"20": {
 "day":20,"week":"03",
 "themeRu":"Говорилось и будет говориться",
 "themeEn":"Bezosobowość w czasach",
 "intro":"Иногда важно не кто сделал, а что сделано: <b>Pomalowano ściany</b>, <b>podłogę wyrównano</b>, <b>okna zostaną wymienione wiosną</b>. В B1 ты уже видел(а) все три способа говорить без исполнителя по отдельности — сегодня соберём их в одну систему по временам и разложим по шкале: от разговорного <b>mówi się</b> до официального <b>zostanie zbudowany</b>.",
 "introAudio":"Иногда важно не кто сделал, а что сделано: pomalowano ściany, podłogę wyrównano, okna zostaną wymienione wiosną. В B1 ты уже видел или видела все три способа говорить без исполнителя по отдельности. Сегодня соберём их в одну систему по временам и разложим по шкале: от разговорного mówi się до официального zostanie zbudowany.",
 "goals":[
   "Двигать się по временам: <b>mówi się → mówiło się → będzie się mówić</b>",
   "Давать время безличным: <b>można było</b>, <b>trzeba będzie</b>, <b>widać było</b>",
   "Помнить, что <b>-no/-to</b> живёт только в прошедшем",
   "Выбирать между <b>się</b>, <b>-no/-to</b> и <b>strona bierna</b> по стилю"
 ],
 "learned":[
   "Подвигал(а) się по временам: mówi się → mówiło się → będzie się mówić",
   "Дал(а) время безличным: można było, trzeba będzie, widać było",
   "Запомнил(а), что -no/-to живёт только в прошедшем",
   "Выбрал(а) между się, -no/-to и strona bierna по стилю"
 ],
 "review":{
   "intro":"Круг по чужим словам вчерашнего дня и по двум вещам из недель 1 и 2.",
   "introAudio":"Круг по чужим словам вчерашнего дня и по двум вещам из недель один и два.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 19.",
      "q":"«Якобы они закончили в среду» (ты не веришь) —","opts":["Podobno skończyli w środę","Rzekomo skończyli w środę","Według skończyli w środę"],"answer":1,
      "explain":"Недоверие показывает <b>rzekomo</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 19.",
      "q":"«Предупредили нас об этой фирме» —","opts":["Ostrzegli nas przed tą firmą","Ostrzegli nas o tej firmie","Ostrzegli nas na tę firmę"],"answer":0,
      "explain":"<b>ostrzegać przed</b> плюс творительный падеж."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни непослушные слова недели 1.",
      "q":"«В музеях Кракова» —","opts":["w muzeumach Krakowa","w muzeach Krakowa","w muzeumach Krakowie"],"answer":1,
      "explain":"Единственное число muzeum не склоняется, а множественное — обычное: muzea, <b>w muzeach</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни фамилии из недели 2.",
      "q":"«С паном Новаком» —","opts":["z panem Nowak","z panem Nowakiem","z pan Nowakiem"],"answer":1,
      "explain":"Мужская фамилия на согласный склоняется: <b>z panem Nowakiem</b>."}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Się по временам",
    "title":"<em>mówi się → mówiło się → będzie się mówić</em>",
    "paras":[
      "Конструкция с <b>się</b> — самый живой способ сказать «люди вообще». В настоящем это третье лицо единственного числа: <b>Mówi się, że dobra ekipa jest zajęta na pół roku.</b> <b>Tu się nie pali.</b>",
      "В прошедшем она берёт средний род: <b>mówiło się</b>, <b>robiło się</b>, <b>jadło się</b>. <b>Kiedyś mówiło się, że remont trwa wiecznie.</b> Никакого рода и числа тут искать не надо — форма всегда одна.",
      "Будущее строится через <b>będzie</b> плюс инфинитив: <b>będzie się mówić</b>, <b>będzie się robić</b>. Форму <b>będzie się mówiło</b> ты тоже услышишь — она равноправна, просто чуть менее частая.",
      "Про порядок слов: <b>się</b> не любит стоять в самом конце предложения и не стоит перед «не своим» глаголом. <b>Tu się nie pali</b> — да; «Tu nie pali się» звучит натянуто. Проще всего держать się сразу рядом со своим глаголом."
    ],
    "audio":"Конструкция с się — самый живой способ сказать «люди вообще». В настоящем это третье лицо единственного числа: mówi się, że dobra ekipa jest zajęta na pół roku. Tu się nie pali. В прошедшем она берёт средний род: mówiło się, robiło się, jadło się. Kiedyś mówiło się, że remont trwa wiecznie. Форма всегда одна. Будущее строится через będzie плюс инфинитив: będzie się mówić, będzie się robić. Форму będzie się mówiło ты тоже услышишь, она равноправна. Про порядок слов: się не любит стоять в самом конце предложения. Tu się nie pali — да. Проще всего держать się сразу рядом со своим глаголом.",
    "table":{"rows":[
      ["<b>Mówi się, że</b> dobra ekipa jest zajęta. <button class=\"play\" data-say=\"Mówi się, że dobra ekipa jest zajęta\">🔊</button>","Говорят, что хорошая бригада занята."],
      ["Kiedyś <b>mówiło się</b>, że remont trwa wiecznie. <button class=\"play\" data-say=\"Kiedyś mówiło się, że remont trwa wiecznie\">🔊</button>","Раньше говорили, что ремонт длится вечно."],
      ["O tym <b>będzie się mówić</b> jeszcze długo. <button class=\"play\" data-say=\"O tym będzie się mówić jeszcze długo\">🔊</button>","Об этом будут говорить ещё долго."],
      ["<b>Tu się nie pali.</b> <button class=\"play\" data-say=\"Tu się nie pali\">🔊</button>","Здесь не курят."],
      ["<b>Jak to się pisze?</b> <button class=\"play\" data-say=\"Jak to się pisze?\">🔊</button>","Как это пишется?"]
    ],"star":1},
    "examples":[
      {"ru":"У нас в подъезде говорят, что ремонт закончится летом.","en":"U nas na klatce <b>mówi się</b>, że remont skończy się latem.","say":"U nas na klatce mówi się, że remont skończy się latem."},
      {"ru":"Раньше так не делали.","en":"Kiedyś tak <b>się nie robiło</b>.","say":"Kiedyś tak się nie robiło."},
      {"ru":"Об этой квартире ещё долго будут говорить.","en":"O tym mieszkaniu <b>będzie się mówić</b> jeszcze długo.","say":"O tym mieszkaniu będzie się mówić jeszcze długo."},
      {"ru":"В таких домах живётся спокойно.","en":"W takich domach <b>mieszka się</b> spokojnie.","gloss":"частая рамка: «живётся, работается»","say":"W takich domach mieszka się spokojnie."}
    ],
    "mistakes":[
      {"wrong":"Kiedyś mówił się, że…","right":"Kiedyś <b>mówiło się</b>, że…","why":"в прошедшем безличная форма с się всегда среднего рода: mówiło, robiło, jadło."},
      {"wrong":"Będzie mówić się o tym długo.","right":"<b>Będzie się mówić</b> o tym długo.","why":"się держится рядом со своим глаголом и не отрывается от него в конец."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь род в прошедшем.",
       "q":"«Раньше говорили, что…» —","opts":["Kiedyś mówił się, że…","Kiedyś mówiło się, że…","Kiedyś mówili się, że…"],"answer":1,
       "explain":"Безличное прошедшее с się — всегда средний род: <b>mówiło się</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> собери будущее.",
       "q":"«Об этом будут говорить долго» —","opts":["O tym będzie się mówić długo","O tym będzie się mówił długo","O tym mówiło się długo"],"answer":0,
       "explain":"Будущее безличного się — <b>będzie się</b> плюс инфинитив."},
      {"type":"type","howto":"<b>Что делать:</b> напиши строчку с вывески. Диакритику можно не ставить.",
       "q":"«Здесь не курят»","accept":["tu się nie pali","tu sie nie pali"],"placeholder":"Tu się…"}
    ],
    "mnemonic":"🔄 mówi się · mówiło się · będzie się mówić — три времени одной формы."
   },
   {
    "eyebrow":"Правило 2 · Время для безличных слов",
    "title":"<em>można było</em> · <em>trzeba będzie</em> · <em>widać było</em>",
    "paras":[
      "Слова <b>można</b>, <b>trzeba</b>, <b>warto</b>, <b>wolno</b> не спрягаются — время им дают два помощника: <b>było</b> для прошедшего и <b>będzie</b> для будущего. <b>Można było zapytać wcześniej.</b> <b>Trzeba będzie zapłacić w piątek.</b> <b>Warto było poczekać.</b>",
      "Тот же приём работает у группы <b>widać</b> («видно»), <b>słychać</b> («слышно»), <b>czuć</b> («чувствуется, пахнет»). <b>Stąd widać Wawel.</b> <b>Widać było góry.</b> <b>Słychać było muzykę.</b> <b>Będzie widać cały dziedziniec.</b>",
      "Управление у них своё: дополнение стоит в винительном — <b>widać góry</b>, <b>słychać muzykę</b>. А <b>czuć</b> в значении «пахнет» идёт с творительным: <b>Czuć farbą.</b> («Пахнет краской».)",
      "Порядок слов чуть иной, чем в русском: помощник стоит после безличного слова, а не перед ним — <b>trzeba było</b>, <b>można będzie</b>, <b>widać było</b>. Это одна из тех мелочей, которые сразу выдают уровень."
    ],
    "audio":"Слова można, trzeba, warto, wolno не спрягаются: время им дают два помощника, było для прошедшего и będzie для будущего. Można było zapytać wcześniej. Trzeba będzie zapłacić w piątek. Warto było poczekać. Тот же приём работает у группы widać, видно; słychać, слышно; czuć, чувствуется или пахнет. Stąd widać Wawel. Widać było góry. Słychać było muzykę. Управление у них своё: дополнение стоит в винительном, widać góry, słychać muzykę. А czuć в значении «пахнет» идёт с творительным: czuć farbą, пахнет краской. Порядок слов чуть иной, чем в русском: помощник стоит после безличного слова, а не перед ним. Trzeba było, można będzie, widać było.",
    "table":{"rows":[
      ["<b>Można było</b> zapytać wcześniej. <button class=\"play\" data-say=\"Można było zapytać wcześniej\">🔊</button>","Можно было спросить раньше."],
      ["<b>Trzeba będzie</b> zapłacić w piątek. <button class=\"play\" data-say=\"Trzeba będzie zapłacić w piątek\">🔊</button>","Надо будет заплатить в пятницу."],
      ["Stąd <b>widać</b> Wawel. · <b>Widać było</b> góry. <button class=\"play\" data-say=\"Stąd widać Wawel. Widać było góry.\">🔊</button>","Отсюда видно Вавель. · Было видно горы."],
      ["<b>Słychać było</b> muzykę u sąsiadów. <button class=\"play\" data-say=\"Słychać było muzykę u sąsiadów\">🔊</button>","Было слышно музыку у соседей."],
      ["<b>Czuć farbą.</b> <button class=\"play\" data-say=\"Czuć farbą\">🔊</button>","Пахнет краской. (+ твор.)"]
    ],"star":4},
    "examples":[
      {"ru":"Стоило подождать день — штукатурка высохла как надо.","en":"<b>Warto było</b> poczekać dzień — tynk wysechł, jak trzeba.","say":"Warto było poczekać dzień, tynk wysechł, jak trzeba."},
      {"ru":"Из окна будет видно весь двор.","en":"Z okna <b>będzie widać</b> całe podwórko.","say":"Z okna będzie widać całe podwórko."},
      {"ru":"Здесь нельзя было парковаться ещё в прошлом году.","en":"Tu <b>nie wolno było</b> parkować już w zeszłym roku.","gloss":"nie wolno — запрет; nie trzeba — «не обязательно»","say":"Tu nie wolno było parkować już w zeszłym roku."},
      {"ru":"Во всей квартире пахло краской.","en":"W całym mieszkaniu <b>czuć było</b> farbą.","say":"W całym mieszkaniu czuć było farbą."}
    ],
    "mistakes":[
      {"wrong":"Było można zapytać wcześniej.","right":"<b>Można było</b> zapytać wcześniej.","why":"помощник идёт после безличного слова: można było, trzeba było, warto było."},
      {"wrong":"Stąd widać Wawelu.","right":"Stąd <b>widać Wawel</b>.","why":"widać и słychać берут винительный падеж, а не родительный."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь порядок слов.",
       "q":"«Можно было спросить раньше» —","opts":["Było można zapytać wcześniej","Można było zapytać wcześniej","Można był zapytać wcześniej"],"answer":1,
       "explain":"Сначала безличное слово, потом помощник: <b>można było</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после widać.",
       "q":"«Отсюда видно Вавель» —","opts":["Stąd widać Wawel","Stąd widać Wawelu","Stąd widzi się Wawelu"],"answer":0,
       "explain":"<b>widać</b> плюс винительный: widać Wawel."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Надо будет заплатить в пятницу»</b>","answer":"Trzeba będzie zapłacić w piątek"}
    ],
    "mnemonic":"🕰️ можно/нужно/стоит + było · + będzie. Помощник всегда вторым."
   },
   {
    "eyebrow":"Правило 3 · Только прошедшее",
    "title":"<em>pomalowano</em> · <em>wymieniono</em> · <em>zaczęto</em>",
    "paras":[
      "Форма на <b>-no/-to</b> — самая нерусская за курс: <b>pomalowano</b>, <b>wymieniono</b>, <b>zaczęto</b>, <b>zdjęto</b>, <b>znaleziono</b>. Она неизменяема, подлежащего у неё нет, и переводится обычным «покрасили, поменяли, начали».",
      "Главное ограничение: она бывает <b>только в прошедшем времени</b>. Никаких «pomalowano будет» не существует; для настоящего берут się (<b>maluje się</b>), для будущего — się или страдательный залог (<b>będzie malowane</b>, <b>zostanie pomalowane</b>).",
      "Управление: дополнение в винительном — <b>pomalowano ściany</b>; при отрицании оно уходит в родительный — <b>nie pomalowano ścian</b>. Ровно та же логика, что у обычного глагола с nie.",
      "Где ты это встретишь: таблички, хроники, ремонтные отчёты, исторические тексты. <b>Uniwersytet założono w 1364 roku.</b> <b>Podłogę wyrównano w poniedziałek.</b> В живом разговоре чаще скажут просто «zrobili»."
    ],
    "audio":"Форма на no и to — самая нерусская за курс: pomalowano, wymieniono, zaczęto, zdjęto, znaleziono. Она неизменяема, подлежащего у неё нет, и переводится обычным «покрасили, поменяли, начали». Главное ограничение: она бывает только в прошедшем времени. Для настоящего берут się, для будущего — się или страдательный залог. Управление: дополнение в винительном, pomalowano ściany; при отрицании оно уходит в родительный, nie pomalowano ścian. Где ты это встретишь: таблички, хроники, ремонтные отчёты, исторические тексты. Uniwersytet założono w tysiąc trzysta sześćdziesiątym czwartym roku. В живом разговоре чаще скажут просто zrobili.",
    "table":{"rows":[
      ["<b>Pomalowano</b> ściany. <button class=\"play\" data-say=\"Pomalowano ściany\">🔊</button>","Стены покрасили. (винительный)"],
      ["<b>Nie pomalowano</b> ścian. <button class=\"play\" data-say=\"Nie pomalowano ścian\">🔊</button>","Стены не покрасили. (родительный)"],
      ["<b>Wymieniono</b> okna w zeszłym roku. <button class=\"play\" data-say=\"Wymieniono okna w zeszłym roku\">🔊</button>","Окна поменяли в прошлом году."],
      ["<b>Zaczęto</b> remont w marcu. <button class=\"play\" data-say=\"Zaczęto remont w marcu\">🔊</button>","Ремонт начали в марте."],
      ["настоящее → <b>maluje się</b> · будущее → <b>będzie malowane</b> <button class=\"play\" data-say=\"maluje się, będzie malowane\">🔊</button>","-no/-to только о прошлом"]
    ],"star":4},
    "examples":[
      {"ru":"Пол выровняли в понедельник, а ламинат положили в среду.","en":"Podłogę <b>wyrównano</b> w poniedziałek, a panele <b>położono</b> w środę.","say":"Podłogę wyrównano w poniedziałek, a panele położono w środę."},
      {"ru":"Старую плитку сняли за один день.","en":"Starą glazurę <b>zdjęto</b> w jeden dzień.","gloss":"glazura — настенная плитка","say":"Starą glazurę zdjęto w jeden dzień."},
      {"ru":"Счёт нашли только через неделю.","en":"Fakturę <b>znaleziono</b> dopiero po tygodniu.","say":"Fakturę znaleziono dopiero po tygodniu."},
      {"ru":"Университет основали в 1364 году.","en":"Uniwersytet <b>założono</b> w 1364 roku.","say":"Uniwersytet założono w tysiąc trzysta sześćdziesiątym czwartym roku."}
    ],
    "mistakes":[
      {"wrong":"Jutro pomalowano ściany.","right":"Jutro <b>ściany będą malowane</b>. / Jutro <b>maluje się</b> ściany.","why":"форма на -no/-to существует только в прошедшем времени."},
      {"wrong":"Nie pomalowano ściany. (в смысле «стены не покрасили»)","right":"<b>Nie pomalowano ścian.</b>","why":"при отрицании дополнение уходит в родительный падеж множественного числа: ścian."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь падеж после отрицания.",
       "q":"«Стены не покрасили» —","opts":["Nie pomalowano ściany","Nie pomalowano ścian","Nie pomalowane ściany"],"answer":1,
       "explain":"При отрицании винительный меняется на родительный: <b>ścian</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни ограничение по времени.",
       "q":"«Завтра будут красить стены» —","opts":["Jutro pomalowano ściany","Jutro ściany będą malowane","Jutro malowano ściany"],"answer":1,
       "explain":"Форма на -no бывает только о прошлом; о будущем говорит <b>będą malowane</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши строчку из отчёта. Диакритику можно не ставить.",
       "q":"«Окна поменяли в прошлом году»","accept":["wymieniono okna w zeszłym roku","wymieniono okna w zeszlym roku","okna wymieniono w zeszłym roku","okna wymieniono w zeszlym roku"],"placeholder":"Wymieniono okna…"}
    ],
    "mnemonic":"🏚️ -no/-to = «сделали», без лица и только о прошлом."
   },
   {
    "eyebrow":"Правило 4 · Шкала стилей",
    "title":"<em>się</em> → <em>-no/-to</em> → <em>strona bierna</em>",
    "paras":[
      "Три способа сказать одно и то же различаются не смыслом, а регистром. Разговорно и живо — <b>się</b>: <b>Maluje się teraz na biało.</b> Нейтрально-письменно о прошлом — <b>-no/-to</b>: <b>Pomalowano na biało.</b> Официально — страдательный залог: <b>Ściany zostały pomalowane na biało.</b>",
      "Страдательный залог тоже умеет все времена, и у него две линии. Процесс (несовершенный вид) — <b>jest / był / będzie budowany</b>: <b>Dom jest budowany od roku.</b> Событие (совершенный вид) — <b>został / zostanie zbudowany</b>: <b>Dom zostanie zbudowany do jesieni.</b>",
      "Различие «состояние — событие» из B1 остаётся в силе: <b>Sklep jest zamknięty</b> («закрыт, состояние») ≠ <b>Sklep został zamknięty w maju</b> («закрыли, событие»). Исполнитель, если он нужен, идёт с <b>przez</b> плюс винительный: <b>przez ekipę</b>.",
      "Практический совет: в разговоре бери się, в письме о прошлом — <b>-no/-to</b>, в договоре и объявлении — страдательный залог. Одна мысль, три костюма; смысл при переодевании не меняется."
    ],
    "audio":"Три способа сказать одно и то же различаются не смыслом, а регистром. Разговорно и живо — się: maluje się teraz na biało. Нейтрально-письменно о прошлом — no и to: pomalowano na biało. Официально — страдательный залог: ściany zostały pomalowane na biało. Страдательный залог тоже умеет все времена, и у него две линии. Процесс — jest, był, będzie budowany. Событие — został, zostanie zbudowany. Различие «состояние — событие» из B1 остаётся в силе: sklep jest zamknięty не равно sklep został zamknięty w maju. Исполнитель, если он нужен, идёт с przez плюс винительный. Практический совет: в разговоре бери się, в письме о прошлом no и to, в договоре и объявлении страдательный залог.",
    "table":{"rows":[
      ["<b>Maluje się</b> teraz na biało. <button class=\"play\" data-say=\"Maluje się teraz na biało\">🔊</button>","разговорное"],
      ["<b>Pomalowano</b> na biało. <button class=\"play\" data-say=\"Pomalowano na biało\">🔊</button>","письменное, только о прошлом"],
      ["Ściany <b>zostały pomalowane</b> na biało. <button class=\"play\" data-say=\"Ściany zostały pomalowane na biało\">🔊</button>","официальное"],
      ["Dom <b>jest budowany</b> · Dom <b>zostanie zbudowany</b> <button class=\"play\" data-say=\"Dom jest budowany. Dom zostanie zbudowany.\">🔊</button>","процесс · событие"],
      ["Podłoga <b>została położona przez</b> ekipę. <button class=\"play\" data-say=\"Podłoga została położona przez ekipę\">🔊</button>","исполнитель: przez + вин."]
    ],"star":3},
    "examples":[
      {"ru":"Окна поменяют весной.","en":"Okna <b>zostaną wymienione</b> wiosną.","gloss":"событие в будущем: zostaną + причастие","say":"Okna zostaną wymienione wiosną."},
      {"ru":"Дом строится уже год.","en":"Dom <b>jest budowany</b> już od roku.","say":"Dom jest budowany już od roku."},
      {"ru":"Договор был подписан в марте.","en":"Umowa <b>została podpisana</b> w marcu.","say":"Umowa została podpisana w marcu."},
      {"ru":"Пол положила бригада пана Збышека.","en":"Podłoga <b>została położona przez</b> ekipę pana Zbyszka.","say":"Podłoga została położona przez ekipę pana Zbyszka."}
    ],
    "mistakes":[
      {"wrong":"Okna będą wymienione przez ekipę w maju. (о событии)","right":"Okna <b>zostaną wymienione</b> przez ekipę w maju.","why":"о будущем событии говорит zostaną; będą wymieniane описывало бы процесс."},
      {"wrong":"Umowa została podpisana od Anny.","right":"Umowa została podpisana <b>przez Annę</b>.","why":"исполнителя вводит przez с винительным падежом, а не od."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, это процесс или событие.",
       "q":"«Окна поменяют весной» —","opts":["Okna są wymieniane wiosną","Okna zostaną wymienione wiosną","Okna wymieniono wiosną"],"answer":1,
       "explain":"Будущее событие — <b>zostaną</b> плюс причастие."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери разговорный вариант.",
       "q":"Как скажут дома, а не в договоре?","opts":["Ściany zostały pomalowane na biało","Maluje się teraz na biało","Dokonano malowania ścian"],"answer":1,
       "explain":"Форма с <b>się</b> — самая живая; страдательный залог звучит официально."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Okna zostaną wymienione wiosną.","sub":"окна поменяют весной","want":"zostaną wymienione"}
    ],
    "mnemonic":"🎚️ się — дома · -no/-to — в отчёте · został — в договоре."
   }
 ],
 "dialogue":{
   "intro":"Марек показывает Анне, что уже сделано, и читает объявление в подъезде. Тапни по строке.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Podłogę wyrównano w poniedziałek, panele położono wczoraj.","ru":"Пол выровняли в понедельник, ламинат положили вчера.",
      "words":[["wyrównano","выровняли"],["położono","положили"]]},
     {"who":"A","name":"Anna","side":"left","en":"A ściany? Czuć farbą w całym mieszkaniu.","ru":"А стены? Во всей квартире пахнет краской.",
      "words":[["Czuć farbą","пахнет краской"],["ściany","стены"]]},
     {"who":"M","name":"Marek","side":"right","en":"Pomalowano dwie. Trzecia będzie malowana jutro.","ru":"Две покрасили. Третью будут красить завтра.",
      "words":[["Pomalowano","покрасили"],["będzie malowana","будет краситься"]]},
     {"who":"A","name":"Anna","side":"left","en":"Można było otworzyć okno, zanim zaczęli.","ru":"Можно было открыть окно, прежде чем они начали.",
      "words":[["Można było","можно было"],["zanim","прежде чем"]]},
     {"who":"M","name":"Marek","side":"right","en":"Otwarto wszystkie. Ale i tak trzeba będzie wietrzyć dwa dni.","ru":"Открыли все. Но всё равно надо будет проветривать два дня.",
      "words":[["Otwarto","открыли"],["trzeba będzie","надо будет"]]},
     {"who":"A","name":"Anna","side":"left","en":"Widziałeś kartkę na klatce?","ru":"Ты видел записку в подъезде?",
      "words":[["kartka","записка"],["klatka","подъезд"]]},
     {"who":"M","name":"Marek","side":"right","en":"Tak: woda zostanie wyłączona w środę od ósmej do dwunastej.","ru":"Да: воду отключат в среду с восьми до двенадцати.",
      "words":[["zostanie wyłączona","будет отключена"],["od ósmej","с восьми"]]},
     {"who":"A","name":"Anna","side":"left","en":"Mówi się, że to tylko pół dnia. Zobaczymy.","ru":"Говорят, это только полдня. Посмотрим.",
      "words":[["Mówi się","говорят"],["Zobaczymy","посмотрим"]]},
     {"who":"M","name":"Marek","side":"right","en":"Kiedyś mówiło się to samo o windzie. Naprawiono ją po roku.","ru":"Раньше то же самое говорили о лифте. Его починили через год.",
      "words":[["mówiło się","говорили"],["Naprawiono","починили"]]}
   ]
 },
 "scene":{
   "intro":"Сценка: объявление и короткий разговор во дворе. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Przepraszam, tu wolno parkować?","ru":"Извините, здесь можно парковаться?"},
     {"who":"B","en":"Teraz nie. Miejsca zostały zajęte przez ekipę.","ru":"Сейчас нет. Места заняла бригада."},
     {"who":"A","en":"A wcześniej można było?","ru":"А раньше можно было?"},
     {"who":"B","en":"Można. Znak postawiono dopiero w zeszłym tygodniu.","ru":"Можно. Знак поставили только на прошлой неделе."},
     {"who":"A","en":"Rozumiem. Mówi się, że to na miesiąc?","ru":"Понятно. Говорят, это на месяц?"}
   ]
 },
 "vocab":{
   "intro":"Слова дня — безличность во всех временах и трёх регистрах.",
   "items":[
     {"en":"mówi się, że","ru":"говорят, что","ex":"Mówi się, że remont skończy się latem."},
     {"en":"mówiło się","ru":"говорили (раньше)","ex":"Kiedyś mówiło się inaczej."},
     {"en":"będzie się mówić","ru":"будут говорить","ex":"O tym będzie się mówić długo."},
     {"en":"można było / można będzie","ru":"можно было / можно будет","ex":"Można było zapytać wcześniej."},
     {"en":"trzeba będzie","ru":"надо будет","ex":"Trzeba będzie zapłacić w piątek."},
     {"en":"widać / widać było","ru":"видно / было видно","ex":"Stąd widać Wawel."},
     {"en":"słychać","ru":"слышно","ex":"Słychać było muzykę u sąsiadów."},
     {"en":"czuć czymś","ru":"пахнет чем-то (+ твор.)","ex":"Czuć farbą w całym mieszkaniu."},
     {"en":"pomalowano / wymieniono","ru":"покрасили / поменяли","ex":"Pomalowano ściany, wymieniono okna."},
     {"en":"jest budowany","ru":"строится (процесс)","ex":"Dom jest budowany od roku."},
     {"en":"został / zostanie wymieniony","ru":"был / будет заменён (событие)","ex":"Okna zostaną wymienione wiosną."},
     {"en":"przez kogoś","ru":"кем-то (исполнитель; przez + вин.)","ex":"Podłoga została położona przez ekipę."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её регистру или времени.",
   "pairs":[["mówiło się","говорили раньше"],["będzie się mówić","будут говорить"],["pomalowano","покрасили (в отчёте)"],["zostanie wymienione","будет заменено (официально)"]]
 },
 "reading":{
   "intro":"Прочитай и послушай отчёт о ремонте и объявление в подъезде — здесь вся безличность сразу.",
   "title":"Co zrobiono, co się robi, co będzie zrobione",
   "sentences":["Remont zaczęto w pierwszym tygodniu marca.","Najpierw zdjęto starą glazurę i wyrównano podłogę.","Panele położono w środę, a dwie ściany pomalowano w czwartek.","Trzeciej ściany jeszcze nie pomalowano.","Teraz maluje się tylko rano, bo po południu jest za ciepło.","Czuć farbą, więc trzeba będzie wietrzyć jeszcze dwa dni.","Mówi się, że najgorsze już za nami.","Okna zostaną wymienione dopiero wiosną.","Na klatce wisi kartka: woda zostanie wyłączona w środę.","Kiedyś mówiło się, że taki remont trwa pół roku — u nas potrwa trzy tygodnie."],
   "translation":"Ремонт начали в первую неделю марта. Сначала сняли старую плитку и выровняли пол. Ламинат положили в среду, а две стены покрасили в четверг. Третью стену ещё не покрасили. Сейчас красят только утром, потому что после обеда слишком тепло. Пахнет краской, так что надо будет проветривать ещё два дня. Говорят, худшее уже позади. Окна поменяют только весной. В подъезде висит записка: воду отключат в среду. Раньше говорили, что такой ремонт длится полгода — у нас он продлится три недели."
 },
 "quiz":{
   "intro":"Пять вопросов на безличность по временам и регистрам.",
   "items":[
     {"q":"1. «Раньше говорили, что…» —","opts":["Kiedyś mówił się, że…","Kiedyś mówiło się, że…","Kiedyś mówiono się, że…"],"answer":1,
      "explain":"Прошедшее безличное с się всегда среднего рода: <b>mówiło się</b>."},
     {"q":"2. «Надо будет заплатить в пятницу» —","opts":["Będzie trzeba zapłacić w piątek","Trzeba będzie zapłacić w piątek","Trzeba był zapłacić w piątek"],"answer":1,
      "explain":"Помощник стоит после безличного слова: <b>trzeba będzie</b>."},
     {"q":"3. «Стены не покрасили» —","opts":["Nie pomalowano ściany","Nie pomalowano ścian","Nie pomalowane ściany"],"answer":1,
      "explain":"При отрицании дополнение уходит в родительный: <b>ścian</b>."},
     {"q":"4. «Завтра будут красить третью стену» —","opts":["Jutro pomalowano trzecią ścianę","Jutro trzecia ściana będzie malowana","Jutro malowano trzecią ścianę"],"answer":1,
      "explain":"Форма на -no бывает только о прошлом; будущее — <b>będzie malowana</b>."},
     {"q":"5. «Пол положила бригада» (официально) —","opts":["Podłoga została położona przez ekipę","Podłoga została położona od ekipy","Podłoga jest położona ekipą"],"answer":0,
      "explain":"Исполнителя вводит <b>przez</b> плюс винительный."}
   ]
 },
 "essay":{
   "intro":"Сегодня попробуй написать так, как пишут отчёты и объявления: без «я» и без «они».",
   "prompt":"Напиши 5–6 предложений о месте, где что-то ремонтировали или меняли: что сделали, что делают сейчас, что будет сделано, что было можно или нужно и что об этом говорят.",
   "hint":"Опора: Zaczęto… · Pomalowano… · Teraz maluje się… · Zostanie wymienione… · Trzeba będzie… · Mówi się, że… 📝",
   "example":"Remont w naszym budynku zaczęto w marcu. Najpierw wymieniono rury, potem pomalowano klatkę. Teraz sprząta się codziennie, bo kurz jest wszędzie. Windę naprawiono dopiero w zeszłym tygodniu. Nowe okna zostaną wstawione wiosną. Mówi się, że wszystko skończy się przed wakacjami, ale trzeba będzie jeszcze poczekać."
 }
},
"21": {
 "day":21,"week":"03",
 "themeRu":"Повторение недели 3",
 "themeEn":"Powtórka 3",
 "intro":"Третья неделя дала тебе то, ради чего вообще учат B2: длинное предложение, которое держится само. Ты умеешь ставить время (<b>zanim</b>, <b>dopóki nie</b>, <b>aż</b>), оговорку (<b>chyba że</b>, <b>pod warunkiem że</b>), причину и следствие в нужном регистре, вежливое <b>by</b>, чужое слово с оттенком и три способа обойтись без исполнителя. Сегодня ничего нового — только сборка и переодевание одной мысли в разные костюмы.",
 "introAudio":"Третья неделя дала тебе то, ради чего вообще учат B2: длинное предложение, которое держится само. Ты умеешь ставить время — zanim, dopóki nie, aż; оговорку — chyba że, pod warunkiem że; причину и следствие в нужном регистре, вежливое by, чужое слово с оттенком и три способа обойтись без исполнителя. Сегодня ничего нового, только сборка и переодевание одной мысли в разные костюмы.",
 "goals":[
   "Уверенно ставить союзы времени: <b>zanim</b>, <b>dopóki (nie)</b>, <b>aż</b>, <b>podczas gdy</b>",
   "Оговариваться и уступать: <b>chyba że</b>, <b>o ile</b>, <b>nawet gdyby</b>, <b>mimo że</b>",
   "Переключать регистр причины: <b>bo → ponieważ → gdyż</b>",
   "Переодевать предложение: <b>zrobili → zrobiono → robi się → zostało zrobione</b>"
 ],
 "learned":[
   "Уверенно поставил(а) союзы времени: zanim, dopóki (nie), aż, podczas gdy",
   "Оговорился(лась) и уступил(а): chyba że, o ile, nawet gdyby, mimo że",
   "Переключил(а) регистр причины: bo → ponieważ → gdyż",
   "Переодел(а) предложение: zrobili → zrobiono → robi się → zostało zrobione"
 ],
 "review":{
   "intro":"Разминка по всей неделе — по одному вопросу от каждого дня. Промах не страшен: любое правило можно освежить выше по курсу.",
   "introAudio":"Разминка по всей неделе — по одному вопросу от каждого дня. Промах не страшен: любое правило можно освежить выше по курсу.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 15.",
      "q":"«Прежде чем выйдешь, погаси свет» —","opts":["Zanim nie wyjdziesz, zgaś światło","Zanim wyjdziesz, zgaś światło","Dopóki wyjdziesz, zgaś światło"],"answer":1,
      "explain":"После zanim частицы nie не бывает."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 17.",
      "q":"«Поскольку я был болен, я не пришёл» —","opts":["Bo byłem chory, nie przyszedłem","Ponieważ byłem chory, nie przyszedłem","Więc byłem chory, nie przyszedłem"],"answer":1,
      "explain":"Сложное предложение открывает <b>ponieważ</b>, а не bo."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 19.",
      "q":"«Предупредили нас об этой бригаде» —","opts":["Ostrzegli nas o tej ekipie","Ostrzegli nas przed tą ekipą","Ostrzegli nas na tę ekipę"],"answer":1,
      "explain":"<b>ostrzegać przed</b> плюс творительный падеж."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Надо будет заплатить в пятницу»</b>","answer":"Trzeba będzie zapłacić w piątek"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Повторение 1 · Время",
    "title":"<em>zanim</em> · <em>dopóki (nie)</em> · <em>aż</em> · <em>podczas gdy</em>",
    "paras":[
      "<b>Zanim</b> — «прежде чем», и после него никогда не бывает nie: <b>Zanim wyjdziesz, zgaś światło.</b> Если нужен смысл «пока не», для него есть <b>dopóki nie</b> (<b>Nie zaczniemy, dopóki tynk nie wyschnie</b>) и <b>aż</b> без отрицания (<b>Poczekam, aż skończą</b>).",
      "<b>Dopóki</b> без nie и с несовершенным видом — просто «пока»: две линии идут рядом. <b>Dopóki trwa remont, mieszkamy u Kasi.</b>",
      "Момент и одновременность: <b>jak tylko</b> / <b>gdy tylko</b> («как только»), <b>w chwili, gdy</b> («в тот момент, когда»), <b>podczas gdy</b> («в то время как», с контрастом). Перед существительным союз меняется на предлог: <b>podczas remontu</b>.",
      "И свёртка в отглагольное существительное недели 1: <b>zanim wyjdziesz</b> = <b>przed wyjściem</b>, <b>kiedy skończymy</b> = <b>po skończeniu</b>, <b>dopóki trwa remont</b> = <b>podczas remontu</b>. Существительное — язык объявлений, союз — язык разговора."
    ],
    "audio":"Zanim — «прежде чем», и после него никогда не бывает nie: zanim wyjdziesz, zgaś światło. Если нужен смысл «пока не», для него есть dopóki nie и aż без отрицания. Dopóki без nie и с несовершенным видом — просто «пока»: две линии идут рядом. Момент и одновременность: jak tylko или gdy tylko — как только; w chwili, gdy — в тот момент, когда; podczas gdy — в то время как, с контрастом. Перед существительным союз меняется на предлог: podczas remontu. И свёртка в отглагольное существительное недели один: zanim wyjdziesz равно przed wyjściem, kiedy skończymy равно po skończeniu, dopóki trwa remont равно podczas remontu.",
    "table":{"rows":[
      ["<b>Zanim wyjdziesz</b>, zgaś światło. <button class=\"play\" data-say=\"Zanim wyjdziesz, zgaś światło\">🔊</button>","прежде чем — без nie"],
      ["Nie zaczniemy, <b>dopóki</b> tynk <b>nie wyschnie</b>. <button class=\"play\" data-say=\"Nie zaczniemy, dopóki tynk nie wyschnie\">🔊</button>","пока не — только с dopóki"],
      ["Poczekam, <b>aż skończą</b>. <button class=\"play\" data-say=\"Poczekam, aż skończą\">🔊</button>","aż — тоже «пока не», но без nie"],
      ["Anna pracowała, <b>podczas gdy</b> ekipa malowała. <button class=\"play\" data-say=\"Anna pracowała, podczas gdy ekipa malowała\">🔊</button>","в то время как"],
      ["<b>zanim wyjdziesz</b> = <b>przed wyjściem</b> <button class=\"play\" data-say=\"zanim wyjdziesz, przed wyjściem\">🔊</button>","союз ↔ существительное"]
    ],"star":0},
    "examples":[
      {"ru":"Прежде чем заплатим, прочитаем договор ещё раз.","en":"<b>Zanim zapłacimy</b>, przeczytamy umowę jeszcze raz.","say":"Zanim zapłacimy, przeczytamy umowę jeszcze raz."},
      {"ru":"Подождём, пока высохнет краска.","en":"Poczekamy, <b>aż wyschnie</b> farba.","say":"Poczekamy, aż wyschnie farba."}
    ],
    "mistakes":[
      {"wrong":"Poczekam, zanim nie skończą.","right":"Poczekam, <b>aż skończą</b>.","why":"nie после zanim не ставится, а для смысла «пока не» после главной части берут aż."}
    ],
    "mnemonic":"⏳ zanim — без nie · dopóki nie — с nie · aż — без nie, но «пока не».",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь, нужно ли отрицание.",
       "q":"«Не начнём, пока штукатурка не высохнет» —","opts":["zanim tynk nie wyschnie","dopóki tynk nie wyschnie","aż tynk nie wyschnie"],"answer":1,
       "explain":"Единственный союз, который берёт nie, — <b>dopóki</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> реши, союз это или предлог.",
       "q":"«Во время ремонта живём у Каси» —","opts":["Podczas gdy remontu mieszkamy u Kasi","Podczas remontu mieszkamy u Kasi","Dopóki remontu mieszkamy u Kasi"],"answer":1,
       "explain":"Перед существительным — предлог <b>podczas</b> с родительным."},
      {"type":"type","howto":"<b>Что делать:</b> сверни союз в существительное. Диакритику можно не ставить.",
       "q":"«Zanim wyjdziesz» другими словами — «перед выходом»","accept":["przed wyjściem","przed wyjsciem"],"placeholder":"przed…"}
    ]
   },
   {
    "eyebrow":"Повторение 2 · Условие и уступка",
    "title":"<em>chyba że</em> · <em>o ile</em> · <em>nawet gdyby</em> · <em>mimo że</em>",
    "paras":[
      "Оговорка — <b>chyba że</b>: <b>Skończymy w piątek, chyba że coś się popsuje.</b> Условие с уточнением — <b>o ile</b> («если, насколько»), <b>pod warunkiem że</b> («при условии что»), <b>jeśli tylko</b>. Перед существительным — <b>w razie</b> + родительный: <b>w razie awarii</b>.",
      "Реальное и нереальное по-прежнему не смешиваются: <b>nawet jeśli</b> плюс будущее (<b>Nawet jeśli będzie padać, pojedziemy</b>) и <b>nawet gdyby</b> плюс л-форма, а во второй части by (<b>Nawet gdyby padało, pojechalibyśmy</b>).",
      "Уступка — <b>mimo że</b>, <b>chociaż</b>, <b>choć</b>; перед существительным <b>mimo</b> + родительный (<b>mimo deszczu</b>); во второй части <b>a mimo to</b>.",
      "Две приправы, без которых польская речь суховата: <b>przecież</b> («ведь») и <b>zresztą</b> («впрочем»). Плюс <b>choćby</b> — «хотя бы»: <b>Przyjdź choćby na chwilę.</b>"
    ],
    "audio":"Оговорка — chyba że: skończymy w piątek, chyba że coś się popsuje. Условие с уточнением — o ile, если и насколько; pod warunkiem że, при условии что; jeśli tylko. Перед существительным w razie плюс родительный. Реальное и нереальное по-прежнему не смешиваются: nawet jeśli плюс будущее и nawet gdyby плюс л-форма, а во второй части by. Уступка — mimo że, chociaż, choć; перед существительным mimo плюс родительный; во второй части a mimo to. Две приправы, без которых польская речь суховата: przecież, ведь, и zresztą, впрочем. Плюс choćby — хотя бы.",
    "table":{"rows":[
      ["Skończymy w piątek, <b>chyba że</b> coś się popsuje. <button class=\"play\" data-say=\"Skończymy w piątek, chyba że coś się popsuje\">🔊</button>","разве что"],
      ["Zapłacimy, <b>pod warunkiem że</b> skończą w terminie. <button class=\"play\" data-say=\"Zapłacimy, pod warunkiem że skończą w terminie\">🔊</button>","при условии что"],
      ["<b>W razie awarii</b> proszę dzwonić. <button class=\"play\" data-say=\"W razie awarii proszę dzwonić\">🔊</button>","в случае + род."],
      ["<b>Nawet gdyby</b> padało, pojechalibyśmy. <button class=\"play\" data-say=\"Nawet gdyby padało, pojechalibyśmy\">🔊</button>","нереальное: л-форма + by"],
      ["Padało, <b>a mimo to</b> poszliśmy. <button class=\"play\" data-say=\"Padało, a mimo to poszliśmy\">🔊</button>","и несмотря на это"]
    ],"star":3},
    "examples":[
      {"ru":"Насколько я помню, аванс мы уже заплатили.","en":"<b>O ile pamiętam</b>, zaliczkę już zapłaciliśmy.","say":"O ile pamiętam, zaliczkę już zapłaciliśmy."},
      {"ru":"Бригада работала, хотя было очень холодно.","en":"Ekipa pracowała, <b>mimo że</b> było bardzo zimno.","say":"Ekipa pracowała, mimo że było bardzo zimno."}
    ],
    "mistakes":[
      {"wrong":"Nawet gdyby będzie padać, pojedziemy.","right":"<b>Nawet gdyby padało, pojechalibyśmy.</b>","why":"после gdyby идёт л-форма, и вторая часть тогда тоже с by."}
    ],
    "mnemonic":"🌦️ chyba że — выход · pod warunkiem że — сделка · mimo że — вопреки.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, что идёт после пропуска.",
       "q":"«В случае необходимости позвоните» —","opts":["W razie potrzeba proszę dzwonić","W razie potrzeby proszę dzwonić","O ile potrzeby proszę dzwonić"],"answer":1,
       "explain":"<b>w razie</b> плюс родительный: potrzeby."},
      {"type":"choice","howto":"<b>Что делать:</b> реши, реальность или фантазия.",
       "q":"«Даже если будет дождь, поедем» —","opts":["Nawet gdyby padało, pojedziemy","Nawet jeśli będzie padać, pojedziemy","Nawet jeśli padałoby, pojechalibyśmy"],"answer":1,
       "explain":"Реальный мир — <b>nawet jeśli</b> плюс будущее в обеих частях."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Запятую поставь мысленно.",
       "q":"Собери: <b>«Пошли гулять, хотя шёл дождь»</b>","answer":"Poszliśmy na spacer mimo że padało"}
    ]
   },
   {
    "eyebrow":"Повторение 3 · Регистры причины",
    "title":"<em>bo → ponieważ → gdyż</em>",
    "paras":[
      "Одна причина, три этажа: разговорное <b>bo</b>, нейтральное <b>ponieważ</b>, книжное <b>gdyż</b> (и <b>bowiem</b>, которое стоит после первого слова). Попробуй сегодня переодеть одно предложение три раза — это и есть упражнение недели.",
      "Позиция решает: с <b>bo</b> сложное предложение не начинают, впереди ставят <b>ponieważ</b>. А <b>skoro</b> («раз уж») отталкивается от того, что собеседник и так знает: <b>Skoro już jesteś, pomóż mi.</b>",
      "Следствие такой же лесенкой: <b>więc</b> (разговорное) → <b>dlatego</b> (нейтральное) → <b>zatem</b>, <b>toteż</b> (книжные) → <b>w związku z tym</b> (официальное). И не путай <b>dlatego</b> («поэтому») с <b>dlatego że</b> («потому что»).",
      "Цель — той же лесенкой: <b>żeby</b> → <b>po to, żeby</b> → официальное <b>w celu</b> + родительный (<b>w celu ustalenia terminu</b>). А причина существительным: <b>z powodu</b> + родительный для плохого, <b>dzięki</b> + дательный для хорошего."
    ],
    "audio":"Одна причина, три этажа: разговорное bo, нейтральное ponieważ, книжное gdyż и bowiem, которое стоит после первого слова. Попробуй сегодня переодеть одно предложение три раза. Позиция решает: с bo сложное предложение не начинают, впереди ставят ponieważ. А skoro, раз уж, отталкивается от того, что собеседник и так знает. Следствие такой же лесенкой: więc, dlatego, zatem и toteż, w związku z tym. И не путай dlatego, поэтому, с dlatego że, потому что. Цель той же лесенкой: żeby, po to żeby, официальное w celu плюс родительный. А причина существительным: z powodu плюс родительный для плохого, dzięki плюс дательный для хорошего.",
    "table":{"rows":[
      ["Nie przyszedłem, <b>bo</b> byłem chory. <button class=\"play\" data-say=\"Nie przyszedłem, bo byłem chory\">🔊</button>","разговорное"],
      ["Nie przyszedłem, <b>ponieważ</b> byłem chory. <button class=\"play\" data-say=\"Nie przyszedłem, ponieważ byłem chory\">🔊</button>","нейтральное"],
      ["Nie przyszedł, <b>gdyż</b> był chory. <button class=\"play\" data-say=\"Nie przyszedł, gdyż był chory\">🔊</button>","книжное"],
      ["<b>Dlatego</b> nie przyszedłem. · <b>dlatego że</b> byłem chory <button class=\"play\" data-say=\"Dlatego nie przyszedłem. Dlatego że byłem chory.\">🔊</button>","поэтому ≠ потому что"],
      ["<b>W celu</b> ustalenia terminu prosimy o kontakt. <button class=\"play\" data-say=\"W celu ustalenia terminu prosimy o kontakt\">🔊</button>","официальная цель"]
    ],"star":3},
    "examples":[
      {"ru":"Поскольку работы задержались, срок сдвинулся на неделю.","en":"<b>Ponieważ</b> prace się opóźniły, termin przesunął się o tydzień.","say":"Ponieważ prace się opóźniły, termin przesunął się o tydzień."},
      {"ru":"Работы приостановили из-за аварии, поэтому мы платим позже.","en":"Prace wstrzymano <b>z powodu</b> awarii, <b>dlatego</b> płacimy później.","say":"Prace wstrzymano z powodu awarii, dlatego płacimy później."}
    ],
    "mistakes":[
      {"wrong":"Nie przyszedłem, dlatego byłem chory.","right":"Nie przyszedłem, <b>dlatego że</b> byłem chory.","why":"без że причина и следствие меняются местами."}
    ],
    "mnemonic":"🎚️ bo → ponieważ → gdyż · więc → dlatego → w związku z tym.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> переодень фразу в книжный костюм.",
       "q":"«Nie przyszedłem, bo byłem chory» книжно —","opts":["Nie przyszedłem, gdyż byłem chory","Nie przyszedłem, skoro byłem chory","Bo byłem chory, nie przyszedłem"],"answer":0,
       "explain":"Книжная ступень — <b>gdyż</b>; skoro значило бы «раз уж»."},
      {"type":"choice","howto":"<b>Что делать:</b> проверь, есть ли że.",
       "q":"«Я не пришёл, потому что был болен» —","opts":["Nie przyszedłem, dlatego byłem chory","Nie przyszedłem, dlatego że byłem chory","Nie przyszedłem, zatem byłem chory"],"answer":1,
       "explain":"Причину вводит <b>dlatego że</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши официальную цель. Диакритику можно не ставить.",
       "q":"«В целях согласования срока»","accept":["w celu ustalenia terminu","w celu ustalenia terminu."],"placeholder":"W celu…"}
    ]
   },
   {
    "eyebrow":"Повторение 4 · Мягко и без лица",
    "title":"<em>by</em> · <em>podobno</em> · <em>zrobiono</em>",
    "paras":[
      "Вежливость: <b>by</b> в предложении ровно одно. Уехало вперёд — глагол голый (<b>Ja bym tego nie robił</b>). Формулы: <b>Czy mógłbym prosić o…</b>, <b>Chciałbym zapytać o…</b>, <b>Wolałbym…</b>. Безлично: <b>warto by</b>, <b>można by</b>, <b>trzeba by</b> плюс инфинитив. После <b>żeby</b> и <b>gdyby</b> второе by не появляется.",
      "Чужое слово: <b>twierdzi, że</b> (настаивает), <b>przyznał, że</b> (сдался), <b>zaprzeczył, że</b> (отрицает), <b>obiecali, że</b>, <b>zapewnia, że</b>, <b>ostrzegli przed</b> + творительный. Маркеры: <b>podobno</b> («говорят»), <b>rzekomo</b> и <b>niby</b> («якобы»), источник — <b>według</b> + родительный.",
      "Без исполнителя — по временам: <b>mówi się → mówiło się → będzie się mówić</b>; <b>można było / można będzie</b>; <b>widać było</b>, <b>słychać było</b>, <b>czuć</b> + творительный. Форма на <b>-no/-to</b> — только о прошлом.",
      "И главное упражнение дня — переодевание. Одно событие, четыре костюма: <b>Ekipa pomalowała ściany</b> (кто) → <b>Pomalowano ściany</b> (отчёт) → <b>Ściany maluje się na biało</b> (разговор о процессе) → <b>Ściany zostały pomalowane przez ekipę</b> (договор)."
    ],
    "audio":"Вежливость: by в предложении ровно одно. Уехало вперёд — глагол голый. Формулы: czy mógłbym prosić o, chciałbym zapytać o, wolałbym. Безлично: warto by, można by, trzeba by плюс инфинитив. После żeby и gdyby второе by не появляется. Чужое слово: twierdzi że, przyznał że, zaprzeczył że, obiecali że, zapewnia że, ostrzegli przed плюс творительный. Маркеры: podobno, говорят; rzekomo и niby, якобы; источник — według плюс родительный. Без исполнителя по временам: mówi się, mówiło się, będzie się mówić; można było, można będzie; widać było, słychać było, czuć плюс творительный. Форма на no и to только о прошлом. И главное упражнение дня — переодевание. Одно событие, четыре костюма: ekipa pomalowała ściany, pomalowano ściany, ściany maluje się na biało, ściany zostały pomalowane przez ekipę.",
    "table":{"rows":[
      ["<b>Czy mógłbym prosić o</b> fakturę? <button class=\"play\" data-say=\"Czy mógłbym prosić o fakturę?\">🔊</button>","вежливая просьба"],
      ["<b>Trzeba by</b> wymienić okna. <button class=\"play\" data-say=\"Trzeba by wymienić okna\">🔊</button>","безличное предложение с by"],
      ["<b>Podobno</b> skończą w piątek. · <b>Rzekomo</b> już skończyli. <button class=\"play\" data-say=\"Podobno skończą w piątek. Rzekomo już skończyli.\">🔊</button>","говорят · якобы"],
      ["<b>Pomalowano</b> ściany. · <b>Maluje się</b> na biało. <button class=\"play\" data-say=\"Pomalowano ściany. Maluje się na biało.\">🔊</button>","отчёт · разговор"],
      ["Ściany <b>zostały pomalowane przez</b> ekipę. <button class=\"play\" data-say=\"Ściany zostały pomalowane przez ekipę\">🔊</button>","договор: исполнитель через przez"]
    ],"star":4},
    "examples":[
      {"ru":"Стоило бы спросить о гарантии, прежде чем заплатим.","en":"<b>Warto by</b> zapytać o gwarancję, <b>zanim zapłacimy</b>.","say":"Warto by zapytać o gwarancję, zanim zapłacimy."},
      {"ru":"Говорят, окна поменяют весной.","en":"<b>Podobno</b> okna <b>zostaną wymienione</b> wiosną.","say":"Podobno okna zostaną wymienione wiosną."}
    ],
    "mistakes":[
      {"wrong":"Chciałbym, żebyś przyszedłbyś.","right":"Chciałbym, <b>żebyś przyszedł</b>.","why":"by уже внутри żebyś, второй раз он не появляется."}
    ],
    "mnemonic":"🎭 Одно событие — четыре костюма: kto zrobił · zrobiono · robi się · zostało zrobione.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> переодень фразу в язык отчёта.",
       "q":"«Ekipa pomalowała ściany» без исполнителя —","opts":["Pomalowano ściany","Pomalowana ściany","Ściany pomalowali"],"answer":0,
       "explain":"Форма на -no неизменяема и подлежащего не имеет: <b>pomalowano ściany</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> посчитай, сколько раз стоит by.",
       "q":"«Я бы этого не менял» —","opts":["Ja bym tego nie zmieniałbym","Ja bym tego nie zmieniał","Ja by tego nie zmieniałem"],"answer":1,
       "explain":"By уехало вперёд, поэтому глагол остаётся голой л-формой."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Podobno okna zostaną wymienione wiosną.","sub":"говорят, окна поменяют весной","want":"zostaną wymienione"}
    ]
   }
 ],
 "dialogue":{
   "intro":"Финальные переговоры о ремонте: Марек, Анна и пан Збышек считают дни и деньги. Здесь есть всё, что было на неделе. Тапни по строке.",
   "lines":[
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Zanim policzymy wszystko, chciałbym pokazać państwu podłogę.","ru":"Прежде чем всё посчитаем, я хотел бы показать вам пол.",
      "words":[["Zanim","прежде чем"],["chciałbym","я хотел бы"]]},
     {"who":"M","name":"Marek","side":"left","en":"Widać, że równa. Podobno to najtrudniejsza część.","ru":"Видно, что ровный. Говорят, это самая трудная часть.",
      "words":[["Widać","видно"],["Podobno","говорят"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Bo jest. Skończymy w piątek, chyba że hurtownia znowu zawiedzie.","ru":"Потому что так и есть. Закончим в пятницу, разве что склад снова подведёт.",
      "words":[["chyba że","разве что"],["zawiedzie","подведёт"]]},
     {"who":"A","name":"Anna","side":"left","en":"Zapłacimy resztę, pod warunkiem że wszystko zostanie odebrane bez uwag.","ru":"Заплатим остаток при условии, что всё примут без замечаний.",
      "words":[["pod warunkiem że","при условии что"],["odebrane","принято"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Oczywiście. Ponieważ prace się opóźniły, nie doliczam za dodatkowy dzień.","ru":"Разумеется. Поскольку работы задержались, я не начисляю за лишний день.",
      "words":[["Ponieważ","поскольку"],["doliczam","начисляю"]]},
     {"who":"M","name":"Marek","side":"left","en":"Czy mógłbym prosić o fakturę na firmę?","ru":"Можно попросить счёт на фирму?",
      "words":[["Czy mógłbym prosić o","можно попросить"],["faktura","счёт"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Jasne. Warto by też ustalić termin przeglądu za rok.","ru":"Конечно. Стоило бы ещё согласовать дату осмотра через год.",
      "words":[["Warto by","стоило бы"],["przegląd","осмотр"]]},
     {"who":"A","name":"Anna","side":"left","en":"Zadzwonię, jak tylko wrócimy z Wielkanocy.","ru":"Позвоню, как только вернёмся с Пасхи.",
      "words":[["jak tylko","как только"],["wrócimy","вернёмся"]]},
     {"who":"Z","name":"Pan Zbyszek","side":"right","en":"Mimo wszystko dobrze się z państwem pracowało. Do zobaczenia!","ru":"Несмотря ни на что, с вами хорошо работалось. До встречи!",
      "words":[["Mimo wszystko","несмотря ни на что"],["pracowało się","работалось"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка: Анна пересказывает Касе итог недели. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Skończyli wszystko, chyba że coś wyjdzie w praniu.","ru":"Закончили всё, разве что что-нибудь всплывёт потом."},
     {"who":"B","en":"Podobno mieli poprawiać podłogę u sąsiadów?","ru":"Говорят, им пришлось переделывать пол у соседей?"},
     {"who":"A","en":"Rzekomo. Sami przyznali się do tego od razu.","ru":"Якобы. Они сами сразу в этом признались."},
     {"who":"B","en":"Skoro tak, to chyba porządna ekipa.","ru":"Раз так, то, наверное, приличная бригада."},
     {"who":"A","en":"Ściany zostały pomalowane w czwartek. Trzeba będzie tylko wietrzyć.","ru":"Стены покрасили в четверг. Надо будет только проветривать."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать выражений недели — по два от каждого дня.",
   "items":[
     {"en":"zanim","ru":"прежде чем (без nie)","ex":"Zanim wyjdziesz, zgaś światło."},
     {"en":"dopóki nie / aż","ru":"пока не","ex":"Poczekam, aż skończą."},
     {"en":"chyba że","ru":"разве что","ex":"Skończymy w piątek, chyba że coś się popsuje."},
     {"en":"pod warunkiem że","ru":"при условии что","ex":"Zapłacimy, pod warunkiem że skończą w terminie."},
     {"en":"ponieważ","ru":"поскольку (нейтрально)","ex":"Ponieważ prace się opóźniły, termin się przesunął."},
     {"en":"skoro","ru":"раз уж","ex":"Skoro już jesteś, pomóż mi."},
     {"en":"dlatego / dlatego że","ru":"поэтому / потому что","ex":"Byłem chory, dlatego nie przyszedłem."},
     {"en":"Czy mógłbym prosić o…","ru":"можно попросить…","ex":"Czy mógłbym prosić o fakturę?"},
     {"en":"warto by / trzeba by","ru":"стоило бы / надо бы","ex":"Trzeba by wymienić okna."},
     {"en":"podobno / rzekomo","ru":"говорят / якобы","ex":"Podobno skończą w piątek."},
     {"en":"ostrzegać przed czymś","ru":"предупреждать о чём-то (przed + твор.)","ex":"Ostrzegli nas przed tą ekipą."},
     {"en":"zrobiono / zostało zrobione","ru":"сделали / было сделано","ex":"Pomalowano ściany w czwartek."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское выражение к переводу — по одному от каждого дня недели.",
   "pairs":[["zanim","прежде чем"],["chyba że","разве что"],["skoro","раз уж"],["rzekomo","якобы"]]
 },
 "reading":{
   "intro":"Длинный текст недели: Анна записывает, чем закончились переговоры о ремонте. Здесь работают все союзы третьей недели — попробуй найти каждый.",
   "title":"Negocjacje o remoncie",
   "sentences":["Zanim usiedliśmy do rozliczenia, pan Zbyszek pokazał nam całe mieszkanie.","Podłogę wyrównano w poniedziałek, panele położono w środę, a dwie ściany pomalowano w czwartek.","Dopóki schnie farba, nie wnosimy mebli.","Poczekamy, aż zapach zniknie zupełnie.","Ekipa skończy w piątek, chyba że hurtownia znowu się spóźni.","Resztę pieniędzy oddamy, pod warunkiem że wszystko zostanie odebrane bez uwag.","Ponieważ prace się opóźniły, wykonawca nie doliczył nam dodatkowego dnia.","Skoro i tak jesteśmy zadowoleni, poprosiliśmy o wycenę drugiego pokoju.","Podobno na jesieni materiały będą droższe, więc warto by zdecydować się wcześniej.","Mimo hałasu, kurzu i trzech tygodni bałaganu — a mimo to zrobiłabym to jeszcze raz."],
   "translation":"Прежде чем мы сели за расчёт, пан Збышек показал нам всю квартиру. Пол выровняли в понедельник, ламинат положили в среду, а две стены покрасили в четверг. Пока сохнет краска, мы не вносим мебель. Подождём, пока запах не исчезнет совсем. Бригада закончит в пятницу, разве что склад снова задержится. Остаток денег отдадим при условии, что всё примут без замечаний. Поскольку работы задержались, подрядчик не начислил нам лишний день. Раз уж мы всё равно довольны, мы попросили смету на вторую комнату. Говорят, осенью материалы будут дороже, так что стоило бы решиться раньше. Несмотря на шум, пыль и три недели беспорядка — и всё же я сделала бы это ещё раз."
 },
 "quiz":{
   "intro":"Проверка недели — пять вопросов по всем шести дням. Пройдёшь, и третья неделя официально за плечами. 💛",
   "items":[
     {"q":"1. «Подожду, пока они не закончат» —","opts":["Poczekam, zanim nie skończą","Poczekam, aż skończą","Poczekam, aż nie skończą"],"answer":1,
      "explain":"<b>Aż</b> значит «пока не» и идёт без отрицания; после zanim nie не бывает вообще."},
     {"q":"2. «Даже если бы шёл дождь, мы бы поехали» —","opts":["Nawet gdyby padało, pojechalibyśmy","Nawet gdyby będzie padać, pojedziemy","Nawet jeśli padałoby, pojedziemy"],"answer":0,
      "explain":"После gdyby — л-форма, во второй части глагол с by."},
     {"q":"3. Книжный вариант «потому что» —","opts":["bo","gdyż","skoro"],"answer":1,
      "explain":"<b>Gdyż</b> — книжная ступень; bo разговорное, skoro значит «раз уж»."},
     {"q":"4. «Надо бы поменять окна» —","opts":["Trzeba bym wymienić okna","Trzeba by wymienić okna","Trzeba by wymieniłbym okna"],"answer":1,
      "explain":"У безличного <b>trzeba by</b> личного окончания нет, дальше идёт инфинитив."},
     {"q":"5. «Стены покрасили» в языке отчёта —","opts":["Pomalowano ściany","Pomalowana ściany","Ściany pomalowane zostaną"],"answer":0,
      "explain":"Форма на -no неизменяема и говорит только о прошлом: <b>pomalowano ściany</b>."}
   ]
 },
 "essay":{
   "intro":"Последний шаг недели — собрать её в одном тексте. Попробуй, чтобы в нём было хотя бы одно длинное предложение, которое ты месяц назад не построил(а) бы.",
   "prompt":"Напиши 6–7 предложений о деле, которое ты недавно довёл(а) до конца: что было прежде всего, при каком условии всё получилось, почему сдвинулись сроки, о чём ты вежливо попросил(а), что говорили вокруг и что в итоге было сделано.",
   "hint":"Опора: Zanim… · Poczekam, aż… · …, chyba że… · pod warunkiem że… · Ponieważ…, dlatego… · Czy mógłbym prosić o… · Podobno… · Zrobiono… 📝",
   "example":"Zanim zaczęliśmy remont, obejrzeliśmy trzy ekipy i wybraliśmy tę z polecenia. Dopóki trwały prace, mieszkaliśmy u koleżanki. Ponieważ hurtownia się spóźniła, termin przesunął się o cztery dni, dlatego wszystko skończyło się dopiero w piątek. Poprosiłam wykonawcę, żeby przysłał fakturę mailem. Podobno na jesieni materiały będą droższe, więc warto by planować wcześniej. Podłogę wyrównano, panele położono, ściany pomalowano na biało. Mimo kurzu i hałasu zrobiłabym to jeszcze raz."
 }
},
"22": {
 "day":22,"week":"04",
 "themeRu":"Резюме и мотивация",
 "themeEn":"CV i list motywacyjny",
 "intro":"Кася прислала Анне файл с названием <b>CV_ostateczne_ostateczne2</b> и одну строчку: «Посмотри, пожалуйста, я третий вечер это переписываю». Так начинается неделя жанров. Сегодня разбираем два текста, которые в Польше пишут все: <b>CV</b> с жёстким набором разделов и <b>list motywacyjny</b> — по тому же каркасу официального письма, что мы собрали на B1.",
 "introAudio":"Кася прислала Анне файл с названием CV ostateczne ostateczne dwa и одну строчку: посмотри, пожалуйста, я третий вечер это переписываю. Так начинается неделя жанров. Сегодня разбираем два текста, которые в Польше пишут все: CV с жёстким набором разделов и list motywacyjny — по тому же каркасу официального письма, что мы собрали на B1.",
 "goals":[
   "Собрать польское CV: <b>dane osobowe, doświadczenie zawodowe, wykształcenie, umiejętności</b>",
   "Оценить язык честно: <b>biegle, dobrze, komunikatywnie</b>",
   "Написать <b>list motywacyjny</b>: <b>W odpowiedzi na ogłoszenie… Z poważaniem</b>",
   "Говорить о карьере: <b>stanowisko, awans, podwyżka, umowa na czas nieokreślony</b>"
 ],
 "learned":[
   "Собрал(а) польское CV: dane osobowe, doświadczenie zawodowe, wykształcenie, umiejętności",
   "Оценил(а) язык честно: biegle, dobrze, komunikatywnie",
   "Написал(а) list motywacyjny: W odpowiedzi na ogłoszenie и Z poważaniem",
   "Заговорил(а) о карьере: stanowisko, awans, podwyżka, umowa na czas nieokreślony"
 ],
 "review":{
   "intro":"Третья неделя закончилась вчера — и почти всё из неё сегодня понадобится. Вежливое «я бы хотел», чужие слова, безличная форма и один <b>skoro</b>.",
   "introAudio":"Третья неделя закончилась вчера — и почти всё из неё сегодня понадобится. Вежливое «я бы хотел», чужие слова, безличная форма и один skoro.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни вежливую формулу с by.",
      "q":"«Я хотел бы спросить о вакансии» —","opts":["Chcę zapytać o ofertę pracy","Chciałbym zapytać o ofertę pracy","Chciałbym zapytać na ofertę pracy"],"answer":1,
      "explain":"Вежливое «хотел бы» — <b>chciałbym</b>, а после zapytać идёт <b>o</b> плюс винительный."},
     {"type":"choice","howto":"<b>Что делать:</b> выбери маркер чужих слов без недоверия.",
      "q":"«Говорят, они ищут редактора» —","opts":["Rzekomo szukają redaktora","Podobno szukają redaktora","Niby szukają redaktora"],"answer":1,
      "explain":"<b>Podobno</b> — нейтральное «говорят». <b>Rzekomo</b> и <b>niby</b> добавляют недоверие."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни безличное прошедшее на -no.",
      "q":"«В объявлении написали, что нужен опыт» —","opts":["W ogłoszeniu napisano, że potrzebne jest doświadczenie","W ogłoszeniu było napisano doświadczenie","W ogłoszeniu napisany doświadczenie"],"answer":0,
      "explain":"Безличное прошедшее <b>napisano</b> — форма неизменяемая и подлежащего при ней нет."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Раз уж ты здесь, помоги мне»</b>","answer":"Skoro już jesteś pomóż mi"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Разделы CV",
    "title":"<em>Dane osobowe, doświadczenie, wykształcenie</em>",
    "paras":[
      "Польское CV — вещь предсказуемая, и это подарок: набор разделов почти всегда один и тот же. <b>Dane osobowe</b> (личные данные), <b>doświadczenie zawodowe</b> (опыт работы), <b>wykształcenie</b> (образование), <b>umiejętności</b> (навыки), иногда <b>zainteresowania</b> (интересы). Всё это на одну-две страницы, не больше.",
      "Порядок внутри разделов обратный: <b>od najnowszego</b> — от последнего места к первому. Строка выглядит так: годы, потом <b>stanowisko</b> (должность), потом название фирмы. <b>2023–2026, redaktorka, Wydawnictwo Znak.</b>",
      "А обязанности пишут отглагольными существительными первой недели — теми самыми на -anie и -enie: <b>redagowanie tekstów</b>, <b>tłumaczenie umów</b>, <b>prowadzenie strony internetowej</b>, <b>przygotowywanie materiałów</b>. Русское резюме устроено так же: «редактирование», «ведение», «подготовка».",
      "И последняя строчка, которая есть почти в каждом польском CV: согласие на обработку данных — <b>Wyrażam zgodę na przetwarzanie moich danych osobowych.</b> Это узнавание: писать её наизусть не нужно, но увидев — не пугайся."
    ],
    "audio":"Польское CV — вещь предсказуемая, и это подарок: набор разделов почти всегда один и тот же. Dane osobowe — личные данные, doświadczenie zawodowe — опыт работы, wykształcenie — образование, umiejętności — навыки, иногда zainteresowania. Всё это на одну-две страницы, не больше. Порядок внутри разделов обратный: od najnowszego, от последнего места к первому. Строка выглядит так: годы, потом stanowisko — должность, потом название фирмы. Обязанности пишут отглагольными существительными первой недели: redagowanie tekstów, tłumaczenie umów, prowadzenie strony internetowej, przygotowywanie materiałów. Русское резюме устроено так же. И последняя строчка, которая есть почти в каждом польском CV: wyrażam zgodę na przetwarzanie moich danych osobowych.",
    "table":{"rows":[
      ["<b>dane osobowe</b> <button class=\"play\" data-say=\"dane osobowe\">🔊</button>","личные данные"],
      ["<b>doświadczenie zawodowe</b> <button class=\"play\" data-say=\"doświadczenie zawodowe\">🔊</button>","опыт работы"],
      ["<b>wykształcenie</b> <button class=\"play\" data-say=\"wykształcenie\">🔊</button>","образование"],
      ["<b>umiejętności</b> <button class=\"play\" data-say=\"umiejętności\">🔊</button>","навыки, умения"],
      ["<b>stanowisko</b> <button class=\"play\" data-say=\"stanowisko\">🔊</button>","должность"],
      ["<b>redagowanie tekstów</b> <button class=\"play\" data-say=\"redagowanie tekstów\">🔊</button>","редактирование текстов"]
    ],"star":4},
    "examples":[
      {"ru":"В разделе «опыт работы» напиши три последних места.","en":"W <b>doświadczeniu zawodowym</b> napisz trzy ostatnie miejsca pracy.","say":"W doświadczeniu zawodowym napisz trzy ostatnie miejsca pracy."},
      {"ru":"Образование — от последнего к первому.","en":"<b>Wykształcenie</b> — od najnowszego do najstarszego.","say":"Wykształcenie od najnowszego do najstarszego."},
      {"ru":"Мои обязанности: редактирование текстов и ведение сайта.","en":"Moje obowiązki to <b>redagowanie tekstów</b> i <b>prowadzenie strony</b>.","gloss":"отглагольные существительные из дня 1","say":"Moje obowiązki to redagowanie tekstów i prowadzenie strony."},
      {"ru":"Должность: редактор в издательстве.","en":"<b>Stanowisko</b>: redaktorka w wydawnictwie.","say":"Stanowisko: redaktorka w wydawnictwie."}
    ],
    "mistakes":[
      {"wrong":"Moje edukacja: uniwersytet.","right":"<b>Wykształcenie</b>: wyższe, Uniwersytet Jagielloński.","why":"раздел называется wykształcenie. Слово edukacja в польском есть, но в CV в этом месте оно не стоит."},
      {"wrong":"Doświadczenie zawodowe: redagowałam teksty.","right":"Doświadczenie zawodowe: <b>redagowanie tekstów</b>.","why":"в CV обязанности идут существительными, а не личными формами глагола — как и в русском резюме."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни название раздела.",
       "q":"Раздел CV об образовании называется —","opts":["wykształcenie","doświadczenie","umiejętności"],"answer":0,
       "explain":"<b>Wykształcenie</b> — образование. Doświadczenie — опыт, umiejętności — навыки."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери форму для строки обязанностей.",
       "q":"«редактирование текстов» в CV —","opts":["redagowałam teksty","redagowanie tekstów","redaguję teksty"],"answer":1,
       "explain":"Отглагольное существительное: <b>redagowanie</b> плюс родительный падеж."},
      {"type":"type","howto":"<b>Что делать:</b> напиши два слова.",
       "q":"«опыт работы» по-польски","accept":["doświadczenie zawodowe","doswiadczenie zawodowe"],"placeholder":"doświadczenie …"}
    ],
    "mnemonic":"📄 dane osobowe → doświadczenie → wykształcenie → umiejętności. Четыре ящика, и всё лежит по местам."
   },
   {
    "eyebrow":"Правило 2 · Как описать опыт",
    "title":"<em>Odpowiadałam za</em>, <em>zajmowałam się</em>",
    "paras":[
      "Когда об опыте рассказывают вслух — на собеседовании или в письме, — работают четыре глагола, и у каждого своё управление из второй недели. <b>Odpowiadać za</b> плюс винительный: <b>Odpowiadałam za kontakt z autorami.</b> <b>Zajmować się</b> плюс творительный: <b>Zajmowałam się korektą.</b>",
      "Дальше: <b>prowadzić</b> плюс винительный (вести проект, страницу, переговоры) и <b>współpracować z</b> плюс творительный — сотрудничать с кем-то. <b>Współpracowałam z tłumaczami z całej Polski.</b>",
      "Отдельно стоит ловушка на одну букву: <b>odpowiadać za</b> — отвечать за что-то, а <b>odpowiadać na</b> — отвечать на письмо или вопрос. <b>Odpowiadałam za dział</b> и <b>odpowiadałam na maile</b> — разные вещи, и предлог здесь единственная разница.",
      "И глаголы движения по карьере: <b>pracować jako</b> плюс название должности в именительном (<b>pracuję jako redaktorka</b>), <b>awansować na</b> плюс винительный (<b>awansowałam na stanowisko kierownika działu</b>), <b>ukończyć studia na kierunku filologia polska</b>."
    ],
    "audio":"Когда об опыте рассказывают вслух — на собеседовании или в письме, — работают четыре глагола, и у каждого своё управление из второй недели. Odpowiadać za плюс винительный: odpowiadałam za kontakt z autorami. Zajmować się плюс творительный: zajmowałam się korektą. Дальше prowadzić плюс винительный и współpracować z плюс творительный: współpracowałam z tłumaczami z całej Polski. Отдельно стоит ловушка на одну букву: odpowiadać za — отвечать за что-то, а odpowiadać na — отвечать на письмо или вопрос. И глаголы движения по карьере: pracuję jako redaktorka; awansowałam na stanowisko kierownika działu; ukończyłam studia na kierunku filologia polska.",
    "table":{"rows":[
      ["<b>odpowiadać za</b> + вин. <button class=\"play\" data-say=\"odpowiadałam za kontakt z autorami\">🔊</button>","отвечать за что-то"],
      ["<b>odpowiadać na</b> + вин. <button class=\"play\" data-say=\"odpowiadałam na maile\">🔊</button>","отвечать на что-то"],
      ["<b>zajmować się</b> + твор. <button class=\"play\" data-say=\"zajmowałam się korektą\">🔊</button>","заниматься чем-то"],
      ["<b>współpracować z</b> + твор. <button class=\"play\" data-say=\"współpracowałam z tłumaczami\">🔊</button>","сотрудничать с кем-то"],
      ["<b>pracować jako</b> + им. <button class=\"play\" data-say=\"pracuję jako redaktorka\">🔊</button>","работать кем-то"],
      ["<b>awansować na</b> + вин. <button class=\"play\" data-say=\"awansowałam na stanowisko kierownika działu\">🔊</button>","получить повышение до…"]
    ],"star":1},
    "examples":[
      {"ru":"Я отвечала за контакты с авторами.","en":"<b>Odpowiadałam za</b> kontakt z autorami.","say":"Odpowiadałam za kontakt z autorami."},
      {"ru":"Я занималась корректурой и вёрсткой.","en":"<b>Zajmowałam się</b> korektą i składem.","gloss":"zajmować się — творительный","say":"Zajmowałam się korektą i składem."},
      {"ru":"Три года я работала переводчицей.","en":"Przez trzy lata <b>pracowałam jako</b> tłumaczka.","say":"Przez trzy lata pracowałam jako tłumaczka."},
      {"ru":"Я окончила университет по специальности «полонистика».","en":"<b>Ukończyłam studia na kierunku</b> filologia polska.","say":"Ukończyłam studia na kierunku filologia polska."}
    ],
    "mistakes":[
      {"wrong":"Zajmowałam się korektę.","right":"Zajmowałam się <b>korektą</b>.","why":"zajmować się требует творительного падежа — как русское «заниматься чем»."},
      {"wrong":"Odpowiadałam na dział sprzedaży.","right":"Odpowiadałam <b>za</b> dział sprzedaży.","why":"отвечать за участок работы — za. Na остаётся для писем и вопросов."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> выбери падеж после zajmować się.",
       "q":"«Я занималась корректурой» —","opts":["Zajmowałam się korektę","Zajmowałam się korektą","Zajmowałam się korekty"],"answer":1,
       "explain":"После zajmować się — творительный: <b>korektą</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> смотри на предлог.",
       "q":"«Я отвечала за целый отдел» —","opts":["Odpowiadałam na cały dział","Odpowiadałam za cały dział","Odpowiadałam o cały dział"],"answer":1,
       "explain":"Отвечать за участок работы — <b>za</b> плюс винительный."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Три года я работала редактором»</b>","answer":"Przez trzy lata pracowałam jako redaktorka"}
    ],
    "mnemonic":"💼 za dział · na maile · się korektą · z tłumaczami. Четыре предлога — вся карьера."
   },
   {
    "eyebrow":"Правило 3 · List motywacyjny",
    "title":"<em>W odpowiedzi na ogłoszenie…</em>",
    "paras":[
      "Хорошая новость: каркас мотивационного письма — это каркас официального письма с B1, только начинка другая. Начало то же: <b>Szanowni Państwo,</b>. Финал тот же: <b>Z poważaniem</b> и имя. Между ними — четыре абзаца, и каждый решает свою задачу.",
      "Первый абзац отвечает на вопрос «откуда ты вообще взялся»: <b>W odpowiedzi na ogłoszenie zamieszczone na Państwa stronie zgłaszam swoją kandydaturę na stanowisko redaktora.</b> Одно предложение — и адресат понимает, о какой вакансии речь.",
      "Второй и третий — про опыт и про мотив. <b>Od trzech lat pracuję jako korektorka i odpowiadam za kontakt z autorami.</b> <b>Jestem przekonana, że moje doświadczenie będzie przydatne w Państwa zespole.</b> Мужчина напишет <b>przekonany</b>, женщина — <b>przekonana</b>: форма меняется вместе с автором.",
      "Четвёртый — вежливый выход: <b>W załączeniu przesyłam CV.</b> <b>Będę wdzięczna za możliwość spotkania.</b> И ни одного восклицательного знака: в этом жанре они звучат так же неуместно, как <b>cześć</b> в письме в учреждение."
    ],
    "audio":"Хорошая новость: каркас мотивационного письма — это каркас официального письма с B1, только начинка другая. Начало то же: Szanowni Państwo. Финал тот же: z poważaniem и имя. Между ними четыре абзаца. Первый отвечает на вопрос, откуда ты взялся: w odpowiedzi na ogłoszenie zamieszczone na Państwa stronie zgłaszam swoją kandydaturę na stanowisko redaktora. Второй и третий — про опыт и про мотив: od trzech lat pracuję jako korektorka i odpowiadam za kontakt z autorami; jestem przekonana, że moje doświadczenie będzie przydatne w Państwa zespole. Мужчина напишет przekonany, женщина przekonana. Четвёртый — вежливый выход: w załączeniu przesyłam CV; będę wdzięczna za możliwość spotkania. И ни одного восклицательного знака.",
    "table":{"rows":[
      ["<b>Szanowni Państwo,</b> <button class=\"play\" data-say=\"Szanowni Państwo\">🔊</button>","Уважаемые господа,"],
      ["<b>W odpowiedzi na ogłoszenie…</b> <button class=\"play\" data-say=\"W odpowiedzi na ogłoszenie\">🔊</button>","В ответ на объявление…"],
      ["<b>zgłaszam swoją kandydaturę na stanowisko…</b> <button class=\"play\" data-say=\"zgłaszam swoją kandydaturę na stanowisko redaktora\">🔊</button>","подаю свою кандидатуру на должность…"],
      ["<b>Jestem przekonana, że…</b> <button class=\"play\" data-say=\"Jestem przekonana, że\">🔊</button>","Я убеждена, что…"],
      ["<b>W załączeniu przesyłam CV.</b> <button class=\"play\" data-say=\"W załączeniu przesyłam CV\">🔊</button>","В приложении высылаю резюме."],
      ["<b>Z poważaniem</b> <button class=\"play\" data-say=\"Z poważaniem\">🔊</button>","С уважением"]
    ],"star":1},
    "examples":[
      {"ru":"В ответ на объявление подаю свою кандидатуру на должность редактора.","en":"<b>W odpowiedzi na ogłoszenie zgłaszam swoją kandydaturę</b> na stanowisko redaktora.","say":"W odpowiedzi na ogłoszenie zgłaszam swoją kandydaturę na stanowisko redaktora."},
      {"ru":"Три года я работаю корректором.","en":"<b>Od trzech lat pracuję</b> jako korektorka.","gloss":"od plus родительный числительного — день 8","say":"Od trzech lat pracuję jako korektorka."},
      {"ru":"Я убеждена, что мой опыт пригодится в вашей команде.","en":"<b>Jestem przekonana, że</b> moje doświadczenie będzie przydatne w Państwa zespole.","say":"Jestem przekonana, że moje doświadczenie będzie przydatne w Państwa zespole."},
      {"ru":"Буду благодарна за возможность встречи.","en":"<b>Będę wdzięczna za</b> możliwość spotkania.","say":"Będę wdzięczna za możliwość spotkania."}
    ],
    "mistakes":[
      {"wrong":"Cześć! Chcę u was pracować!","right":"<b>Szanowni Państwo,</b> w odpowiedzi na ogłoszenie zgłaszam swoją kandydaturę.","why":"мотивационное письмо — официальный жанр: обращение по формуле и никаких восклицательных знаков."},
      {"wrong":"Zgłaszam swoją kandydaturę na stanowisku redaktora.","right":"…na <b>stanowisko</b> redaktora.","why":"na плюс винительный, потому что это направление, а не место: kandydatura na stanowisko."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни первую фразу письма.",
       "q":"Мотивационное письмо начинается —","opts":["Cześć, piszę w sprawie pracy","Szanowni Państwo, w odpowiedzi na ogłoszenie…","Witam, chcę u was pracować"],"answer":1,
       "explain":"Официальный жанр: <b>Szanowni Państwo,</b> и сразу отсылка к объявлению."},
      {"type":"choice","howto":"<b>Что делать:</b> проверь падеж после na.",
       "q":"«кандидатура на должность редактора» —","opts":["kandydatura na stanowisko redaktora","kandydatura na stanowisku redaktora","kandydatura o stanowisko redaktora"],"answer":0,
       "explain":"Направление — na плюс винительный: <b>na stanowisko</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши подпись официального письма.",
       "q":"«С уважением» в конце письма","accept":["z poważaniem","z powazaniem"],"placeholder":"Z pow…"}
    ],
    "mnemonic":"✉️ Szanowni Państwo → w odpowiedzi na ogłoszenie → jestem przekonany, że → w załączeniu → Z poważaniem."
   },
   {
    "eyebrow":"Правило 4 · Слова карьеры",
    "title":"<em>Awans, podwyżka, umowa na czas nieokreślony</em>",
    "paras":[
      "Вокруг работы крутится десяток слов, и без них не понять ни объявления, ни разговора в курилке. <b>Stanowisko</b> — должность. <b>Awans</b> — повышение. <b>Podwyżka</b> — прибавка к зарплате. <b>Zatrudnić</b> — нанять, <b>zwolnić</b> — уволить, <b>zwolnić się</b> — уволиться самому.",
      "Договоры делятся по сроку: <b>umowa na czas określony</b> — срочный, до конкретной даты; <b>umowa na czas nieokreślony</b> — бессрочный, тот самый, ради которого люди терпят полгода испытательного. Рядом стоит <b>umowa zlecenie</b> — договор подряда, узнавание.",
      "Ещё три слова про деньги и время: <b>wynagrodzenie</b> (вознаграждение, официальное слово в договоре), <b>pensja</b> (зарплата — и да, это ложный друг: русская «пенсия» по-польски <b>emerytura</b>, к этому вернёмся в день 26), <b>etat</b> (ставка): <b>pół etatu</b> — полставки.",
      "И глагол, с которого всё начинается: <b>aplikować na stanowisko</b> — подавать заявку. А встреча, к которой всё это ведёт, называется <b>rozmowa kwalifikacyjna</b> — собеседование."
    ],
    "audio":"Вокруг работы крутится десяток слов, и без них не понять ни объявления, ни разговора в курилке. Stanowisko — должность. Awans — повышение. Podwyżka — прибавка к зарплате. Zatrudnić — нанять, zwolnić — уволить, zwolnić się — уволиться самому. Договоры делятся по сроку: umowa na czas określony — срочный, до конкретной даты; umowa na czas nieokreślony — бессрочный. Рядом стоит umowa zlecenie — договор подряда, узнавание. Ещё три слова про деньги и время: wynagrodzenie — официальное слово в договоре, pensja — зарплата, и это ложный друг, потому что русская пенсия по-польски emerytura, etat — ставка, pół etatu — полставки. И глагол, с которого всё начинается: aplikować na stanowisko. А встреча, к которой всё это ведёт, называется rozmowa kwalifikacyjna.",
    "table":{"rows":[
      ["<b>stanowisko</b> · <b>awans</b> · <b>podwyżka</b> <button class=\"play\" data-say=\"stanowisko, awans, podwyżka\">🔊</button>","должность · повышение · прибавка"],
      ["<b>zatrudnić</b> — <b>zwolnić</b> <button class=\"play\" data-say=\"zatrudnić, zwolnić\">🔊</button>","нанять — уволить"],
      ["<b>umowa na czas określony</b> <button class=\"play\" data-say=\"umowa na czas określony\">🔊</button>","срочный договор"],
      ["<b>umowa na czas nieokreślony</b> <button class=\"play\" data-say=\"umowa na czas nieokreślony\">🔊</button>","бессрочный договор"],
      ["<b>pensja</b> ≠ пенсия <button class=\"play\" data-say=\"pensja, emerytura\">🔊</button>","зарплата · пенсия — emerytura"],
      ["<b>rozmowa kwalifikacyjna</b> <button class=\"play\" data-say=\"rozmowa kwalifikacyjna\">🔊</button>","собеседование"]
    ],"star":4},
    "examples":[
      {"ru":"Через год она получила повышение и прибавку.","en":"Po roku dostała <b>awans i podwyżkę</b>.","say":"Po roku dostała awans i podwyżkę."},
      {"ru":"У меня наконец бессрочный договор.","en":"Mam wreszcie <b>umowę na czas nieokreślony</b>.","say":"Mam wreszcie umowę na czas nieokreślony."},
      {"ru":"Меня взяли на полставки.","en":"<b>Zatrudniono</b> mnie na <b>pół etatu</b>.","gloss":"безличное -no из дня 20","say":"Zatrudniono mnie na pół etatu."},
      {"ru":"Собеседование во вторник в десять.","en":"<b>Rozmowa kwalifikacyjna</b> we wtorek o dziesiątej.","say":"Rozmowa kwalifikacyjna we wtorek o dziesiątej."}
    ],
    "mistakes":[
      {"wrong":"Dostałam pensję po sześćdziesiątce.","right":"Dostałam <b>emeryturę</b> po sześćdziesiątce.","why":"pensja — это зарплата. Пенсия по-польски emerytura, и это один из самых частых ложных друзей."},
      {"wrong":"umowa na czas nie określony","right":"umowa na czas <b>nieokreślony</b>","why":"здесь одно слово: nieokreślony пишется слитно, как и określony с приставкой nie-."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни ложного друга.",
       "q":"<b>Pensja</b> по-русски —","opts":["пенсия","зарплата","премия"],"answer":1,
       "explain":"<b>Pensja</b> — зарплата. Пенсия — <b>emerytura</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери бессрочный договор.",
       "q":"«бессрочный трудовой договор» —","opts":["umowa na czas określony","umowa na czas nieokreślony","umowa zlecenie"],"answer":1,
       "explain":"<b>Nieokreślony</b> — неопределённый, то есть бессрочный."},
      {"type":"speak","howto":"Нажми микрофон и скажи это так, как говорят на собеседовании.",
       "target":"Od trzech lat pracuję jako redaktorka i odpowiadam za kontakt z autorami.","sub":"три года я работаю редактором и отвечаю за контакты с авторами","want":"Od trzech lat pracuję jako redaktorka i odpowiadam za kontakt z autorami."}
    ],
    "mnemonic":"📈 aplikować → rozmowa kwalifikacyjna → umowa → awans → podwyżka. Лестница из пяти слов."
   }
 ],
 "dialogue":{
   "intro":"Анна и Кася над одним файлом. Кася пишет CV третий вечер, Анна читает его первый раз — и сразу видит, что переписывать нужно не всё.",
   "lines":[
     {"who":"K","name":"Kasia","side":"right","en":"Przeczytaj, proszę. Trzeci wieczór nad tym siedzę i już nic nie widzę.","ru":"Прочитай, пожалуйста. Третий вечер над этим сижу и уже ничего не вижу.",
      "words":[["Trzeci wieczór","третий вечер"],["nic nie widzę","ничего не вижу"]]},
     {"who":"A","name":"Anna","side":"left","en":"Dane osobowe są dobrze. Ale doświadczenie zawodowe masz od najstarszego.","ru":"Личные данные в порядке. Но опыт работы у тебя от самого старого.",
      "words":[["Dane osobowe","личные данные"],["od najstarszego","от самого старого"]]},
     {"who":"K","name":"Kasia","side":"right","en":"A ma być odwrotnie? Od ostatniej pracy?","ru":"А должно быть наоборот? С последней работы?",
      "words":[["odwrotnie","наоборот"],["od ostatniej pracy","с последней работы"]]},
     {"who":"A","name":"Anna","side":"left","en":"Odwrotnie. I obowiązki napisz rzeczownikami: prowadzenie, redagowanie, tłumaczenie.","ru":"Наоборот. И обязанности напиши существительными: ведение, редактирование, перевод.",
      "words":[["obowiązki","обязанности"],["rzeczownikami","существительными"]]},
     {"who":"K","name":"Kasia","side":"right","en":"A tu napisałam, że znam angielski. Biegle czy dobrze?","ru":"А тут я написала, что знаю английский. Свободно или хорошо?",
      "words":[["biegle","свободно"],["dobrze","хорошо"]]},
     {"who":"A","name":"Anna","side":"left","en":"Piszesz maile bez słownika, ale boisz się telefonów. To jest dobrze, nie biegle.","ru":"Ты пишешь письма без словаря, но боишься звонков. Это «хорошо», а не «свободно».",
      "words":[["bez słownika","без словаря"],["boisz się","ты боишься"]]},
     {"who":"K","name":"Kasia","side":"right","en":"Okej. A list motywacyjny? Napisałam, że bardzo, bardzo chcę tę pracę.","ru":"Ладно. А мотивационное письмо? Я написала, что очень-очень хочу эту работу.",
      "words":[["list motywacyjny","мотивационное письмо"],["bardzo chcę","очень хочу"]]},
     {"who":"A","name":"Anna","side":"left","en":"Zamień to na jedno zdanie: jestem przekonana, że moje doświadczenie będzie przydatne.","ru":"Замени это на одно предложение: я убеждена, что мой опыт пригодится.",
      "words":[["Zamień","замени"],["przydatne","полезно, пригодится"]]},
     {"who":"K","name":"Kasia","side":"right","en":"Brzmi spokojniej. Trzymaj za mnie kciuki w czwartek.","ru":"Звучит спокойнее. Держи за меня кулачки в четверг.",
      "words":[["spokojniej","спокойнее"],["Trzymaj kciuki","держи кулачки"]]},
     {"who":"A","name":"Anna","side":"left","en":"Trzymam. A na rozmowie mów krótkimi zdaniami — to zawsze działa.","ru":"Держу. А на собеседовании говори короткими предложениями — это всегда работает.",
      "words":[["na rozmowie","на собеседовании"],["krótkimi zdaniami","короткими предложениями"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — первая минута собеседования. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Dzień dobry. Proszę usiąść. Widzę, że aplikuje pani na stanowisko redaktorki.","ru":"Здравствуйте. Садитесь, пожалуйста. Вижу, вы претендуете на должность редактора."},
     {"who":"B","en":"Tak. Od trzech lat pracuję jako korektorka w małym wydawnictwie.","ru":"Да. Три года я работаю корректором в маленьком издательстве."},
     {"who":"A","en":"Za co pani tam odpowiadała?","ru":"За что вы там отвечали?"},
     {"who":"B","en":"Za korektę i za kontakt z autorami. Zajmowałam się też stroną internetową.","ru":"За корректуру и за контакты с авторами. Я занималась ещё и сайтом."},
     {"who":"A","en":"Dobrze. Proponujemy najpierw umowę na czas określony, na rok.","ru":"Хорошо. Мы предлагаем сначала срочный договор, на год."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — от объявления до подписи в договоре.",
   "items":[
     {"en":"CV","ru":"резюме","ex":"Prześlij CV do piątku."},
     {"en":"list motywacyjny","ru":"мотивационное письмо","ex":"Do CV dołącz list motywacyjny."},
     {"en":"dane osobowe","ru":"личные данные","ex":"Dane osobowe są na górze strony."},
     {"en":"doświadczenie zawodowe","ru":"опыт работы","ex":"Mam pięć lat doświadczenia zawodowego."},
     {"en":"wykształcenie","ru":"образование","ex":"Wykształcenie wyższe, filologia polska."},
     {"en":"umiejętności","ru":"навыки, умения","ex":"W umiejętnościach napisz programy."},
     {"en":"biegle / komunikatywnie","ru":"свободно / могу объясниться","ex":"Angielski biegle, niemiecki komunikatywnie."},
     {"en":"stanowisko","ru":"должность","ex":"Aplikuję na stanowisko redaktora."},
     {"en":"awans","ru":"повышение","ex":"Dostała awans po roku."},
     {"en":"podwyżka","ru":"прибавка к зарплате","ex":"Poprosiłam o podwyżkę."},
     {"en":"umowa na czas nieokreślony","ru":"бессрочный договор","ex":"Wreszcie mam umowę na czas nieokreślony."},
     {"en":"rozmowa kwalifikacyjna","ru":"собеседование","ex":"Rozmowa kwalifikacyjna jest we wtorek."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к его переводу.",
   "pairs":[["wykształcenie","образование"],["stanowisko","должность"],["podwyżka","прибавка"],["pensja","зарплата"]]
 },
 "reading":{
   "intro":"Прочитай и послушай мотивационное письмо Каси — то, что получилось после разговора с Анной. Это готовый образец жанра.",
   "title":"List motywacyjny",
   "sentences":["Szanowni Państwo,","w odpowiedzi na ogłoszenie zamieszczone na Państwa stronie zgłaszam swoją kandydaturę na stanowisko redaktorki.","Od trzech lat pracuję jako korektorka w niewielkim wydawnictwie w Krakowie.","Odpowiadam tam za korektę tekstów oraz za kontakt z autorami i tłumaczami.","Zajmuję się również prowadzeniem strony internetowej i przygotowywaniem materiałów promocyjnych.","Ukończyłam studia na kierunku filologia polska na Uniwersytecie Jagiellońskim.","Znam angielski biegle, a niemiecki komunikatywnie.","Jestem przekonana, że moje doświadczenie będzie przydatne w Państwa zespole.","Szczególnie interesuje mnie praca nad literaturą współczesną, której poświęciłam pracę magisterską.","W załączeniu przesyłam CV oraz dwie opinie z poprzednich miejsc pracy.","Będę wdzięczna za możliwość spotkania i rozmowy o szczegółach.","Z poważaniem","Katarzyna Wójcik"],
   "translation":"Уважаемые господа, в ответ на объявление, размещённое на вашем сайте, подаю свою кандидатуру на должность редактора. Три года я работаю корректором в небольшом издательстве в Кракове. Я отвечаю там за корректуру текстов, а также за контакты с авторами и переводчиками. Занимаюсь также ведением сайта и подготовкой рекламных материалов. Я окончила университет по специальности «полонистика» в Ягеллонском университете. Английский знаю свободно, немецкий — на уровне разговорного общения. Я убеждена, что мой опыт пригодится в вашей команде. Особенно меня интересует работа с современной литературой, которой я посвятила магистерскую работу. В приложении высылаю резюме и два отзыва с прежних мест работы. Буду благодарна за возможность встречи и разговора о деталях. С уважением, Катажина Вуйчик"
 },
 "quiz":{
   "intro":"Пять вопросов — и два взрослых жанра у тебя в руках.",
   "items":[
     {"q":"1. Раздел CV об образовании —","opts":["doświadczenie","wykształcenie","umiejętności"],"answer":1,
      "explain":"<b>Wykształcenie</b> — образование."},
     {"q":"2. «Я занималась корректурой» —","opts":["Zajmowałam się korektę","Zajmowałam się korektą","Zajmowałam się korekty"],"answer":1,
      "explain":"После zajmować się — творительный падеж."},
     {"q":"3. «кандидатура на должность» —","opts":["kandydatura na stanowisko","kandydatura na stanowisku","kandydatura do stanowiska"],"answer":0,
      "explain":"Na плюс винительный: <b>na stanowisko</b>."},
     {"q":"4. <b>Pensja</b> — это —","opts":["пенсия","зарплата","пособие"],"answer":1,
      "explain":"<b>Pensja</b> — зарплата. Пенсия — emerytura."},
     {"q":"5. «В ответ на объявление подаю свою кандидатуру» —","opts":["W odpowiedzi na ogłoszenie zgłaszam swoją kandydaturę","W odpowiedzi o ogłoszeniu zgłaszam swoją kandydaturę","Na odpowiedź ogłoszenia zgłaszam kandydaturę"],"answer":0,
      "explain":"Устойчивая формула жанра: <b>w odpowiedzi na ogłoszenie</b>."}
   ]
 },
 "essay":{
   "intro":"Теперь твоё мотивационное письмо. Вакансию придумай любую — важен каркас, а не место работы.",
   "prompt":"Напиши list motywacyjny в 7–8 предложений: обращение, отсылка к объявлению, два предложения об опыте с odpowiadać za и zajmować się, одно с Jestem przekonany/przekonana, że…, упоминание приложения и подпись.",
   "hint":"Каркас: Szanowni Państwo, · W odpowiedzi na ogłoszenie… · Od … lat pracuję jako… · Odpowiadam za… · Jestem przekonany/przekonana, że… · W załączeniu przesyłam CV. · Z poważaniem ✉️",
   "example":"Szanowni Państwo, w odpowiedzi na ogłoszenie zamieszczone na Państwa stronie zgłaszam swoją kandydaturę na stanowisko koordynatora projektów. Od czterech lat pracuję jako asystent w firmie logistycznej. Odpowiadam tam za kontakt z klientami zagranicznymi i za przygotowywanie raportów. Zajmuję się również szkoleniem nowych pracowników. Ukończyłem studia na kierunku zarządzanie i znam angielski biegle, a polski komunikatywnie. Jestem przekonany, że moje doświadczenie będzie przydatne w Państwa zespole. W załączeniu przesyłam CV oraz certyfikat językowy. Będę wdzięczny za możliwość spotkania. Z poważaniem, Michał Nowak"
 }
},
"23": {
 "day":23,"week":"04",
 "themeRu":"Здоровье всерьёз",
 "themeEn":"Zdrowie i badania",
 "intro":"Бывают разговоры, которые нельзя вести жестами. На A1 хватало <b>boli mnie głowa</b>, но взрослая поликлиника говорит иначе: <b>skierowanie</b>, <b>wyniki badań</b>, <b>na czczo</b>. Сегодня — язык врача и пациента: как записаться, что ответить на <b>Co pani dolega?</b> и почему перед анализом крови нельзя даже кофе.",
 "introAudio":"Бывают разговоры, которые нельзя вести жестами. На A1 хватало boli mnie głowa, но взрослая поликлиника говорит иначе: skierowanie, wyniki badań, na czczo. Сегодня — язык врача и пациента: как записаться, что ответить на вопрос co pani dolega и почему перед анализом крови нельзя даже кофе.",
 "goals":[
   "Записаться и получить направление: <b>umówić się na wizytę, skierowanie</b>",
   "Ответить врачу: <b>Skarżę się na… Boli mnie… Mam gorączkę</b>",
   "Сдать анализы: <b>badania krwi, na czczo, odebrać wyniki</b>",
   "Рассказать о самочувствии: <b>kręci mi się w głowie, czuję się lepiej</b>"
 ],
 "learned":[
   "Записался(ась) и получил(а) направление: umówić się na wizytę, skierowanie",
   "Ответил(а) врачу: Skarżę się na… Boli mnie… Mam gorączkę",
   "Сдал(а) анализы: badania krwi, na czczo, odebrać wyniki",
   "Рассказал(а) о самочувствии: kręci mi się w głowie, czuję się lepiej"
 ],
 "review":{
   "intro":"Вчерашние жанры — на разминку. Два вопроса о CV, один о рекции опыта и один ложный друг, который ещё встретится.",
   "introAudio":"Вчерашние жанры — на разминку. Два вопроса о CV, один о рекции опыта и один ложный друг, который ещё встретится.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни название раздела CV.",
      "q":"«образование» в польском резюме —","opts":["doświadczenie","wykształcenie","umiejętności"],"answer":1,
      "explain":"<b>Wykształcenie</b> — образование. Doświadczenie — опыт."},
     {"type":"choice","howto":"<b>Что делать:</b> проверь падеж после глагола.",
      "q":"«Я отвечала за контакты с авторами» —","opts":["Odpowiadałam na kontakt z autorami","Odpowiadałam za kontakt z autorami","Odpowiadałam o kontakt z autorami"],"answer":1,
      "explain":"Отвечать за участок работы — <b>za</b> плюс винительный."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни ложного друга из карьеры.",
      "q":"<b>Pensja</b> — это —","opts":["пенсия","зарплата","премия"],"answer":1,
      "explain":"<b>Pensja</b> — зарплата, а пенсия — <b>emerytura</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«В приложении высылаю резюме»</b>","answer":"W załączeniu przesyłam CV"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Куда идти",
    "title":"<em>Przychodnia, skierowanie, NFZ</em>",
    "paras":[
      "Дорога к врачу в Польше начинается с <b>lekarz rodzinny</b> — семейного врача, это местный терапевт. Сидит он в <b>przychodnia</b> (поликлиника), запись идёт через <b>rejestracja</b>: <b>Chciałabym umówić się na wizytę.</b>",
      "К специалисту напрямую попасть обычно нельзя: сначала <b>skierowanie</b> — направление, которое выписывает семейный врач. <b>Dostałam skierowanie do kardiologa.</b> Приставочная логика первой недели видна и здесь: <b>s-kierowanie</b> от <b>kierować</b>, «направлять».",
      "<b>NFZ</b> — это <b>Narodowy Fundusz Zdrowia</b>, государственный фонд здравоохранения: он оплачивает лечение застрахованным. Говорят <b>na NFZ</b> (по государственной страховке) и <b>prywatnie</b> (платно). <b>Do ortopedy na NFZ czeka się pół roku, prywatnie tydzień.</b>",
      "Слово <b>ubezpieczenie</b> (страховка) и вопрос <b>Czy jest pani ubezpieczona?</b> — то, что спрашивают в регистратуре первым. А очередь к специалисту называется просто <b>kolejka</b>, как и в учреждении на B1."
    ],
    "audio":"Дорога к врачу в Польше начинается с lekarz rodzinny — семейного врача, это местный терапевт. Сидит он в przychodni, поликлинике, запись идёт через rejestrację: chciałabym umówić się na wizytę. К специалисту напрямую попасть обычно нельзя: сначала skierowanie, направление, которое выписывает семейный врач. Dostałam skierowanie do kardiologa. Приставочная логика первой недели видна и здесь: skierowanie от kierować, направлять. NFZ — это Narodowy Fundusz Zdrowia, государственный фонд здравоохранения. Говорят na NFZ, по государственной страховке, и prywatnie, платно. Слово ubezpieczenie — страховка, и вопрос czy jest pani ubezpieczona — то, что спрашивают в регистратуре первым.",
    "table":{"rows":[
      ["<b>przychodnia</b> · <b>rejestracja</b> <button class=\"play\" data-say=\"przychodnia, rejestracja\">🔊</button>","поликлиника · регистратура"],
      ["<b>lekarz rodzinny</b> <button class=\"play\" data-say=\"lekarz rodzinny\">🔊</button>","семейный врач, терапевт"],
      ["<b>umówić się na wizytę</b> <button class=\"play\" data-say=\"umówić się na wizytę\">🔊</button>","записаться на приём"],
      ["<b>skierowanie do specjalisty</b> <button class=\"play\" data-say=\"skierowanie do specjalisty\">🔊</button>","направление к специалисту"],
      ["<b>na NFZ</b> / <b>prywatnie</b> <button class=\"play\" data-say=\"na NFZ, prywatnie\">🔊</button>","по страховке / платно"],
      ["<b>ubezpieczenie</b> <button class=\"play\" data-say=\"ubezpieczenie\">🔊</button>","страховка"]
    ],"star":3},
    "examples":[
      {"ru":"Я хотела бы записаться к семейному врачу.","en":"Chciałabym <b>umówić się na wizytę</b> do lekarza rodzinnego.","gloss":"вежливое chciałabym — день 18","say":"Chciałabym umówić się na wizytę do lekarza rodzinnego."},
      {"ru":"Мне нужно направление к кардиологу.","en":"Potrzebuję <b>skierowania</b> do kardiologa.","gloss":"potrzebować плюс родительный — день 11","say":"Potrzebuję skierowania do kardiologa."},
      {"ru":"По страховке ждать полгода, платно — неделю.","en":"<b>Na NFZ</b> czeka się pół roku, <b>prywatnie</b> tydzień.","gloss":"безличное się — день 20","say":"Na NFZ czeka się pół roku, prywatnie tydzień."},
      {"ru":"У вас есть страховка?","en":"Czy jest pani <b>ubezpieczona</b>?","say":"Czy jest pani ubezpieczona?"}
    ],
    "mistakes":[
      {"wrong":"Potrzebuję skierowanie do kardiologa.","right":"Potrzebuję <b>skierowania</b> do kardiologa.","why":"potrzebować идёт с родительным падежом — это из дня 11: potrzebuję czasu, pomocy, skierowania."},
      {"wrong":"Umówić się na doktora.","right":"Umówić się <b>na wizytę</b> do lekarza.","why":"записываются на приём, а к врачу идут: na wizytę do lekarza."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после potrzebować.",
       "q":"«Мне нужно направление» —","opts":["Potrzebuję skierowanie","Potrzebuję skierowania","Potrzebuję o skierowanie"],"answer":1,
       "explain":"Potrzebować требует родительного: <b>skierowania</b>."},
      {"type":"choice","q":"<b>Skierowanie</b> — это —",
       "opts":["направление к врачу","рецепт","страховка"],"answer":0,
       "explain":"<b>Skierowanie</b> — направление. Рецепт — recepta, страховка — ubezpieczenie."},
      {"type":"type","howto":"<b>Что делать:</b> напиши три слова.",
       "q":"«записаться на приём»","accept":["umówić się na wizytę","umowic sie na wizyte"],"placeholder":"umówić się …"}
    ],
    "mnemonic":"🏥 rejestracja → lekarz rodzinny → skierowanie → specjalista. Четыре шага, и ни одного лишнего."
   },
   {
    "eyebrow":"Правило 2 · В кабинете",
    "title":"<em>Co pani dolega?</em>",
    "paras":[
      "Первый вопрос врача звучит почти всегда одинаково: <b>Co panu dolega?</b> или <b>Co pani dolega?</b> — «на что жалуетесь». Глагол <b>dolegać</b> сам по себе редкий, но эту фразу услышишь при каждом визите.",
      "Ответ строится двумя способами. Первый знаком с A1: <b>Boli mnie</b> плюс то, что болит, в именительном — <b>Boli mnie gardło. Bolą mnie plecy.</b> Второй взрослее: <b>skarżyć się na</b> плюс винительный — <b>Skarżę się na bóle głowy od tygodnia.</b> Русское «жаловаться на» подсказывает падеж точно.",
      "Симптомы — <b>objawy</b>: <b>gorączka</b> (высокая температура), <b>kaszel</b>, <b>katar</b>, <b>dreszcze</b> (озноб), <b>duszność</b>. Различай <b>przeziębienie</b> (простуда, лёгкая) и <b>grypa</b> (грипп, с температурой). И <b>ciśnienie</b> — давление: <b>wysokie</b> или <b>niskie</b>.",
      "Что говорит врач дальше: <b>Proszę się rozebrać do pasa.</b> (разденьтесь до пояса) <b>Proszę głęboko oddychać.</b> <b>Przepiszę pani antybiotyk.</b> И финал приёма — <b>recepta</b>: <b>Proszę brać dwa razy dziennie po posiłku.</b>"
    ],
    "audio":"Первый вопрос врача звучит почти всегда одинаково: co panu dolega или co pani dolega, на что жалуетесь. Глагол dolegać сам по себе редкий, но эту фразу услышишь при каждом визите. Ответ строится двумя способами. Первый знаком с A1: boli mnie плюс то, что болит, в именительном — boli mnie gardło, bolą mnie plecy. Второй взрослее: skarżyć się na плюс винительный — skarżę się na bóle głowy od tygodnia. Симптомы называются objawy: gorączka, kaszel, katar, dreszcze, duszność. Различай przeziębienie, простуду, и grypę, грипп. И ciśnienie — давление, wysokie или niskie. Что говорит врач дальше: proszę się rozebrać do pasa; proszę głęboko oddychać; przepiszę pani antybiotyk. И финал приёма — recepta: proszę brać dwa razy dziennie po posiłku.",
    "table":{"rows":[
      ["<b>Co pani dolega?</b> <button class=\"play\" data-say=\"Co pani dolega?\">🔊</button>","На что жалуетесь?"],
      ["<b>Skarżę się na</b> bóle głowy. <button class=\"play\" data-say=\"Skarżę się na bóle głowy\">🔊</button>","Жалуюсь на головные боли."],
      ["<b>Boli mnie gardło.</b> <button class=\"play\" data-say=\"Boli mnie gardło\">🔊</button>","У меня болит горло."],
      ["<b>Mam gorączkę i kaszel.</b> <button class=\"play\" data-say=\"Mam gorączkę i kaszel\">🔊</button>","У меня температура и кашель."],
      ["<b>Proszę się rozebrać do pasa.</b> <button class=\"play\" data-say=\"Proszę się rozebrać do pasa\">🔊</button>","Разденьтесь до пояса."],
      ["<b>Proszę brać dwa razy dziennie po posiłku.</b> <button class=\"play\" data-say=\"Proszę brać dwa razy dziennie po posiłku\">🔊</button>","Принимайте два раза в день после еды."]
    ],"star":1},
    "examples":[
      {"ru":"Жалуюсь на головные боли уже неделю.","en":"<b>Skarżę się na</b> bóle głowy od tygodnia.","say":"Skarżę się na bóle głowy od tygodnia."},
      {"ru":"У меня температура, кашель и озноб.","en":"Mam <b>gorączkę</b>, <b>kaszel</b> i <b>dreszcze</b>.","say":"Mam gorączkę, kaszel i dreszcze."},
      {"ru":"Это не грипп, а обычная простуда.","en":"To nie <b>grypa</b>, tylko zwykłe <b>przeziębienie</b>.","say":"To nie grypa, tylko zwykłe przeziębienie."},
      {"ru":"Я выпишу вам антибиотик на семь дней.","en":"<b>Przepiszę</b> pani antybiotyk na siedem dni.","say":"Przepiszę pani antybiotyk na siedem dni."}
    ],
    "mistakes":[
      {"wrong":"Skarżę się o bóle głowy.","right":"Skarżę się <b>na</b> bóle głowy.","why":"skarżyć się идёт с na плюс винительный — ровно как русское «жаловаться на»."},
      {"wrong":"Mnie boli gardło.","right":"<b>Boli mnie</b> gardło.","why":"болит именно горло, поэтому оно подлежащее в именительном, а «меня» — mnie в винительном."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни предлог при skarżyć się.",
       "q":"«Жалуюсь на боли в спине» —","opts":["Skarżę się o bóle pleców","Skarżę się na bóle pleców","Skarżę się z bólami pleców"],"answer":1,
       "explain":"<b>Skarżyć się na</b> плюс винительный — как в русском."},
      {"type":"choice","q":"<b>Co pani dolega?</b> значит —",
       "opts":["На что жалуетесь?","Как вас зовут?","Вы застрахованы?"],"answer":0,
       "explain":"Стандартный первый вопрос врача: <b>Co pani dolega?</b>"},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«У меня температура и кашель»</b>","answer":"Mam gorączkę i kaszel"}
    ],
    "mnemonic":"🩺 Co pani dolega? → Skarżę się na… → objawy → recepta. Приём укладывается в четыре хода."
   },
   {
    "eyebrow":"Правило 3 · Анализы",
    "title":"<em>Badania krwi, na czczo, wyniki</em>",
    "paras":[
      "<b>Badanie</b> — это и обследование, и анализ. Самые частые: <b>badania krwi</b> (анализ крови), <b>badanie moczu</b> (анализ мочи), <b>USG</b>, <b>prześwietlenie</b> (рентген). На них тоже дают <b>skierowanie na badania</b> — обрати внимание: <b>do</b> специалиста, но <b>na</b> анализы.",
      "Ключевая фраза дня: <b>na czczo</b> — натощак. <b>Krew pobiera się na czczo.</b> Значит: ни еды, ни кофе, ни сока — только вода. Слово родственно старому <b>czczy</b> (пустой) и звучит непривычно, но услышишь его в регистратуре обязательно.",
      "Дальше — <b>pobranie krwi</b> (забор крови) в <b>punkcie pobrań</b>, и через пару дней <b>wyniki badań</b>: <b>Wyniki będą w piątek.</b> <b>Proszę odebrać wyniki w rejestracji.</b> Глагол <b>odebrać</b> — тот же, что для справки в учреждении на B1.",
      "И одно коварное слово: <b>zwolnienie</b>. Вчера оно значило «увольнение», а сегодня <b>zwolnienie lekarskie</b> — это больничный. Одна форма, два мира; понимает их только контекст. <b>Lekarz wystawił mi zwolnienie na pięć dni.</b>"
    ],
    "audio":"Badanie — это и обследование, и анализ. Самые частые: badania krwi, badanie moczu, USG, prześwietlenie. На них тоже дают skierowanie na badania — обрати внимание: do специалиста, но na анализы. Ключевая фраза дня: na czczo — натощак. Krew pobiera się na czczo. Значит: ни еды, ни кофе, ни сока, только вода. Дальше pobranie krwi в punkcie pobrań, и через пару дней wyniki badań: wyniki będą w piątek; proszę odebrać wyniki w rejestracji. Глагол odebrać — тот же, что для справки в учреждении на B1. И одно коварное слово: zwolnienie. Вчера оно значило увольнение, а сегодня zwolnienie lekarskie — это больничный. Lekarz wystawił mi zwolnienie na pięć dni.",
    "table":{"rows":[
      ["<b>badania krwi</b> <button class=\"play\" data-say=\"badania krwi\">🔊</button>","анализ крови"],
      ["<b>skierowanie na badania</b> <button class=\"play\" data-say=\"skierowanie na badania\">🔊</button>","направление на анализы"],
      ["<b>na czczo</b> <button class=\"play\" data-say=\"na czczo\">🔊</button>","натощак"],
      ["<b>pobranie krwi</b> <button class=\"play\" data-say=\"pobranie krwi\">🔊</button>","забор крови"],
      ["<b>odebrać wyniki</b> <button class=\"play\" data-say=\"odebrać wyniki\">🔊</button>","забрать результаты"],
      ["<b>zwolnienie lekarskie</b> <button class=\"play\" data-say=\"zwolnienie lekarskie\">🔊</button>","больничный лист"]
    ],"star":2},
    "examples":[
      {"ru":"Кровь сдают натощак.","en":"Krew pobiera się <b>na czczo</b>.","gloss":"безличное się — день 20","say":"Krew pobiera się na czczo."},
      {"ru":"Врач дал мне направление на анализы.","en":"Lekarz dał mi <b>skierowanie na badania</b>.","say":"Lekarz dał mi skierowanie na badania."},
      {"ru":"Результаты можно забрать в пятницу.","en":"<b>Wyniki</b> można <b>odebrać</b> w piątek.","say":"Wyniki można odebrać w piątek."},
      {"ru":"Врач выписал мне больничный на пять дней.","en":"Lekarz wystawił mi <b>zwolnienie</b> na pięć dni.","say":"Lekarz wystawił mi zwolnienie na pięć dni."}
    ],
    "mistakes":[
      {"wrong":"skierowanie do badań","right":"<b>skierowanie na badania</b>","why":"к человеку — do specjalisty, на процедуру — na badania. Предлог здесь несёт всю разницу."},
      {"wrong":"Wypiłam kawę i poszłam na czczo.","right":"<b>Na czczo</b> znaczy: nic — nawet kawy.","why":"na czczo — это без еды и без напитков, кроме воды. Кофе анализ портит."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что можно натощак.",
       "q":"<b>Na czczo</b> значит —","opts":["после лёгкого завтрака","совсем ничего не есть и не пить, кроме воды","только без сладкого"],"answer":1,
       "explain":"<b>Na czczo</b> — натощак: ни еды, ни кофе, только вода."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери предлог.",
       "q":"«направление на анализы» —","opts":["skierowanie do badań","skierowanie na badania","skierowanie o badania"],"answer":1,
       "explain":"На процедуру — <b>na badania</b>; к человеку — do specjalisty."},
      {"type":"type","howto":"<b>Что делать:</b> напиши два слова.",
       "q":"«анализ крови»","accept":["badania krwi","badanie krwi"],"placeholder":"badania …"}
    ],
    "mnemonic":"🩸 skierowanie na badania → na czczo → pobranie → wyniki. Четыре шага одной пробирки."
   },
   {
    "eyebrow":"Правило 4 · Как ты себя чувствуешь",
    "title":"<em>Kręci mi się w głowie</em> и первые идиомы тела",
    "paras":[
      "О самочувствии поляк говорит дативными оборотами — теми самыми, что мы собирали в день 13. <b>Kręci mi się w głowie</b> (кружится голова), <b>słabo mi</b> (мне плохо), <b>niedobrze mi</b> (меня подташнивает), <b>zimno mi</b>. Форма <b>mi</b> одна и та же, меняется только то, что вокруг.",
      "Рядом — обычное <b>czuć się</b>: <b>Czuję się źle. Czuję się lepiej. Jak się pan czuje?</b> И глагол <b>dokuczać</b> с дательным: <b>Dokucza mi kolano.</b> — «беспокоит колено». Русское «мне докучает» помнит тот же корень.",
      "Тело даёт польскому языку идиомы, и две из них ты уже почти встретил(а). <b>Mieć coś w małym palcu</b> — знать что-то как свои пять пальцев; буквально «иметь в мизинце». <b>Łamać sobie głowę nad czymś</b> — ломать голову над чем-то, точный двойник русского.",
      "Ещё две про здоровье и сон: <b>zdrowy jak ryba</b> — здоров как бык, только рыба вместо быка; <b>stanąć na nogi</b> — поправиться, встать на ноги. Завтра про рекламацию, а послезавтра идиомам будет посвящён целый день."
    ],
    "audio":"О самочувствии поляк говорит дативными оборотами — теми самыми, что мы собирали в день тринадцать. Kręci mi się w głowie — кружится голова, słabo mi — мне плохо, niedobrze mi — меня подташнивает, zimno mi. Форма mi одна и та же. Рядом обычное czuć się: czuję się źle, czuję się lepiej, jak się pan czuje. И глагол dokuczać с дательным: dokucza mi kolano, беспокоит колено. Тело даёт польскому языку идиомы. Mieć coś w małym palcu — знать что-то как свои пять пальцев. Łamać sobie głowę nad czymś — ломать голову над чем-то, точный двойник русского. Ещё две: zdrowy jak ryba — здоров как бык, только рыба вместо быка; stanąć na nogi — поправиться. Послезавтра идиомам будет посвящён целый день.",
    "table":{"rows":[
      ["<b>Kręci mi się w głowie.</b> <button class=\"play\" data-say=\"Kręci mi się w głowie\">🔊</button>","У меня кружится голова."],
      ["<b>Słabo mi.</b> / <b>Niedobrze mi.</b> <button class=\"play\" data-say=\"Słabo mi. Niedobrze mi.\">🔊</button>","Мне плохо. / Меня подташнивает."],
      ["<b>Czuję się lepiej.</b> <button class=\"play\" data-say=\"Czuję się lepiej\">🔊</button>","Я чувствую себя лучше."],
      ["<b>Dokucza mi kolano.</b> <button class=\"play\" data-say=\"Dokucza mi kolano\">🔊</button>","Меня беспокоит колено."],
      ["<b>mieć coś w małym palcu</b> <button class=\"play\" data-say=\"mieć coś w małym palcu\">🔊</button>","знать как свои пять пальцев"],
      ["<b>zdrowy jak ryba</b> <button class=\"play\" data-say=\"zdrowy jak ryba\">🔊</button>","совершенно здоров"]
    ],"star":0},
    "examples":[
      {"ru":"Со вчерашнего дня у меня кружится голова.","en":"Od wczoraj <b>kręci mi się w głowie</b>.","say":"Od wczoraj kręci mi się w głowie."},
      {"ru":"Сегодня я чувствую себя гораздо лучше.","en":"Dziś <b>czuję się</b> dużo <b>lepiej</b>.","say":"Dziś czuję się dużo lepiej."},
      {"ru":"Она знает эту процедуру как свои пять пальцев.","en":"Ona <b>ma tę procedurę w małym palcu</b>.","gloss":"глосса по смыслу, не дословно","say":"Ona ma tę procedurę w małym palcu."},
      {"ru":"Через неделю он снова был на ногах.","en":"Po tygodniu znowu <b>stanął na nogi</b>.","say":"Po tygodniu znowu stanął na nogi."}
    ],
    "mistakes":[
      {"wrong":"Kręci mnie w głowie.","right":"<b>Kręci mi się</b> w głowie.","why":"конструкция дативная и с się: mi się. Это тот же тип, что podoba mi się и udało mi się из дня 13."},
      {"wrong":"Ja czuję się siebie źle.","right":"<b>Czuję się źle.</b>","why":"в czuć się уже есть się — второе местоимение лишнее."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни дативную конструкцию.",
       "q":"«У меня кружится голова» —","opts":["Kręci mnie w głowie","Kręci mi się w głowie","Kręcę się w głowie"],"answer":1,
       "explain":"Дативная конструкция с się: <b>kręci mi się w głowie</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> помни: глосса идиомы — это смысл.",
       "q":"<b>Mieć coś w małym palcu</b> значит —","opts":["знать что-то в совершенстве","держать что-то в руке","чуть-чуть разбираться"],"answer":0,
       "explain":"Идиома значит «знать как свои пять пальцев» — про полное владение."},
      {"type":"speak","howto":"Нажми микрофон и скажи это так, как говорят врачу.",
       "target":"Skarżę się na bóle głowy i od wczoraj kręci mi się w głowie.","sub":"жалуюсь на головные боли, и со вчерашнего дня кружится голова","want":"Skarżę się na bóle głowy i od wczoraj kręci mi się w głowie."}
    ],
    "mnemonic":"💛 mi się — про самочувствие, na — про жалобу, w małym palcu — про мастерство."
   }
 ],
 "dialogue":{
   "intro":"Анна у семейного врача. Обычный приём — и почти вся лексика дня в одном разговоре.",
   "lines":[
     {"who":"L","name":"Lekarka","side":"left","en":"Dzień dobry. Proszę usiąść. Co pani dolega?","ru":"Здравствуйте. Садитесь, пожалуйста. На что жалуетесь?",
      "words":[["Proszę usiąść","садитесь"],["Co pani dolega?","на что жалуетесь?"]]},
     {"who":"A","name":"Anna","side":"right","en":"Skarżę się na bóle głowy. Od tygodnia, prawie codziennie.","ru":"Жалуюсь на головные боли. Уже неделю, почти каждый день.",
      "words":[["Skarżę się na","жалуюсь на"],["od tygodnia","уже неделю"]]},
     {"who":"L","name":"Lekarka","side":"left","en":"Gorączka? Kaszel? A ciśnienie pani mierzyła?","ru":"Температура? Кашель? А давление вы мерили?",
      "words":[["Gorączka","температура"],["ciśnienie","давление"]]},
     {"who":"A","name":"Anna","side":"right","en":"Gorączki nie mam. Ale rano często kręci mi się w głowie.","ru":"Температуры нет. Но по утрам часто кружится голова.",
      "words":[["Gorączki nie mam","температуры нет"],["kręci mi się w głowie","кружится голова"]]},
     {"who":"L","name":"Lekarka","side":"left","en":"Proszę się rozebrać do pasa. Zmierzę ciśnienie i posłucham.","ru":"Разденьтесь до пояса. Измерю давление и послушаю.",
      "words":[["rozebrać się do pasa","раздеться до пояса"],["Zmierzę","измерю"]]},
     {"who":"A","name":"Anna","side":"right","en":"To coś poważnego? Bo w pracy mam teraz bardzo dużo.","ru":"Это что-то серьёзное? А то у меня сейчас на работе очень много всего.",
      "words":[["coś poważnego","что-то серьёзное"],["bardzo dużo","очень много"]]},
     {"who":"L","name":"Lekarka","side":"left","en":"Ciśnienie niskie. Dam pani skierowanie na badania krwi.","ru":"Давление низкое. Дам вам направление на анализ крови.",
      "words":[["niskie","низкое"],["skierowanie na badania","направление на анализы"]]},
     {"who":"A","name":"Anna","side":"right","en":"Kiedy mam iść? I czy koniecznie na czczo?","ru":"Когда мне идти? И обязательно ли натощак?",
      "words":[["Kiedy mam iść?","когда мне идти?"],["na czczo","натощак"]]},
     {"who":"L","name":"Lekarka","side":"left","en":"Koniecznie. Nic od wieczora, nawet kawy. Wyniki będą w piątek.","ru":"Обязательно. Ничего с вечера, даже кофе. Результаты будут в пятницу.",
      "words":[["Koniecznie","обязательно"],["Wyniki","результаты"]]},
     {"who":"A","name":"Anna","side":"right","en":"Dobrze. A gdyby bóle się nasiliły, mam przyjść wcześniej?","ru":"Хорошо. А если бы боли усилились, мне прийти раньше?",
      "words":[["gdyby się nasiliły","если бы усилились"],["wcześniej","раньше"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — утро в пункте забора крови. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Dzień dobry, mam skierowanie na badania krwi.","ru":"Здравствуйте, у меня направление на анализ крови."},
     {"who":"B","en":"Jest pani na czczo? Od której godziny nic pani nie jadła?","ru":"Вы натощак? С какого времени вы ничего не ели?"},
     {"who":"A","en":"Od wczoraj od dwudziestej. Wypiłam tylko wodę.","ru":"Со вчерашнего дня с восьми вечера. Пила только воду."},
     {"who":"B","en":"Świetnie. Proszę usiąść i wyprostować rękę.","ru":"Отлично. Садитесь и выпрямите руку."},
     {"who":"A","en":"Wolę nie patrzeć. Wyniki odbieram w rejestracji?","ru":"Я лучше не буду смотреть. Результаты забирать в регистратуре?"}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — от регистратуры до результатов анализов.",
   "items":[
     {"en":"przychodnia","ru":"поликлиника","ex":"Przychodnia jest czynna od siódmej."},
     {"en":"umówić się na wizytę","ru":"записаться на приём","ex":"Umówiłam się na wizytę na środę."},
     {"en":"skierowanie","ru":"направление","ex":"Dostałam skierowanie do kardiologa."},
     {"en":"ubezpieczenie","ru":"страховка","ex":"Czy ma pani ubezpieczenie?"},
     {"en":"NFZ","ru":"государственный фонд здравоохранения","ex":"Wizyta na NFZ jest bezpłatna."},
     {"en":"objawy","ru":"симптомы","ex":"Objawy trwają od trzech dni."},
     {"en":"gorączka","ru":"высокая температура","ex":"Mam gorączkę od rana."},
     {"en":"ciśnienie","ru":"давление","ex":"Ciśnienie mam niskie."},
     {"en":"badania krwi","ru":"анализ крови","ex":"Badania krwi robi się na czczo."},
     {"en":"na czczo","ru":"натощак","ex":"Proszę przyjść na czczo."},
     {"en":"wyniki badań","ru":"результаты анализов","ex":"Wyniki badań będą w piątek."},
     {"en":"recepta","ru":"рецепт","ex":"Lekarka wypisała mi receptę."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к его переводу.",
   "pairs":[["skierowanie","направление"],["na czczo","натощак"],["wyniki","результаты"],["recepta","рецепт"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как прошла у Анны неделя с анализами. Здесь вся лексика дня плюс безличные формы третьей недели.",
   "title":"Tydzień z wynikami",
   "sentences":["W poniedziałek umówiłam się na wizytę do lekarza rodzinnego.","W rejestracji zapytano mnie najpierw o ubezpieczenie, a dopiero potem o objawy.","Lekarka spytała, co mi dolega, i wysłuchała wszystkiego bez pośpiechu.","Powiedziałam, że skarżę się na bóle głowy i że rano kręci mi się w głowie.","Okazało się, że mam bardzo niskie ciśnienie.","Dostałam skierowanie na badania krwi i jedno zdanie na pożegnanie: koniecznie na czczo.","W środę rano nie zjadłam nawet kanapki, chociaż strasznie chciało mi się kawy.","Krew pobiera się szybko, ale czekanie w kolejce trwało dłużej niż samo pobranie.","W piątek odebrałam wyniki i zaniosłam je do przychodni.","Nie było w nich nic groźnego: trochę niska hemoglobina i nic poza tym.","Lekarka przepisała mi żelazo i poprosiła, żebym powtórzyła badania za trzy miesiące.","Zwolnienia nie potrzebowałam, więc w poniedziałek wróciłam do pracy.","Zanim wyszłam z gabinetu, usłyszałam zdanie, które zapamiętałam: proszę mniej łamać sobie głowę.","Podsumowując: tydzień strachu, dwie fiolki krwi i jedna butelka tabletek."],
   "translation":"В понедельник я записалась на приём к семейному врачу. В регистратуре меня сначала спросили о страховке и только потом о симптомах. Врач спросила, на что я жалуюсь, и выслушала всё без спешки. Я сказала, что жалуюсь на головные боли и что по утрам у меня кружится голова. Оказалось, что у меня очень низкое давление. Я получила направление на анализ крови и одну фразу на прощание: обязательно натощак. В среду утром я не съела даже бутерброда, хотя ужасно хотелось кофе. Кровь берут быстро, но ожидание в очереди длилось дольше, чем сам забор. В пятницу я забрала результаты и отнесла их в поликлинику. Ничего страшного в них не было: немного низкий гемоглобин и больше ничего. Врач выписала мне железо и попросила, чтобы я повторила анализы через три месяца. Больничный мне не понадобился, так что в понедельник я вернулась на работу. Прежде чем я вышла из кабинета, я услышала фразу, которую запомнила: поменьше ломайте себе голову. Подводя итог: неделя страха, две пробирки крови и одна баночка таблеток."
 },
 "quiz":{
   "intro":"Пять вопросов — и поликлиника перестаёт быть чужой территорией.",
   "items":[
     {"q":"1. «Жалуюсь на боли в спине» —","opts":["Skarżę się o bóle pleców","Skarżę się na bóle pleców","Skarżę się bólami pleców"],"answer":1,
      "explain":"<b>Skarżyć się na</b> плюс винительный."},
     {"q":"2. «Мне нужно направление» —","opts":["Potrzebuję skierowanie","Potrzebuję skierowania","Potrzebuję o skierowanie"],"answer":1,
      "explain":"Potrzebować идёт с родительным падежом."},
     {"q":"3. <b>Na czczo</b> — это —","opts":["натощак","после еды","перед сном"],"answer":0,
      "explain":"<b>Na czczo</b> — натощак: ни еды, ни кофе."},
     {"q":"4. «У меня кружится голова» —","opts":["Kręci mnie w głowie","Kręci mi się w głowie","Kręcę mi w głowie"],"answer":1,
      "explain":"Дативная конструкция с się: <b>kręci mi się</b>."},
     {"q":"5. <b>Zwolnienie lekarskie</b> — это —","opts":["больничный лист","увольнение с работы","направление к специалисту"],"answer":0,
      "explain":"С прилагательным lekarskie это больничный. Само zwolnienie может значить и увольнение — решает контекст."}
   ]
 },
 "essay":{
   "intro":"Напиши маленький рассказ о визите к врачу. Можно про себя, можно про кого угодно — жанр важнее правды.",
   "prompt":"Напиши текст в 7–9 предложений: как ты записался(ась), на что жаловался(ась), что сказал врач, какое направление получил(а) и чем всё кончилось. Обязательно вставь skarżyć się na, одну дативную конструкцию с mi и слова na czczo или wyniki.",
   "hint":"Каркас: Umówiłem/umówiłam się na wizytę… · Skarżyłem/skarżyłam się na… · Lekarz powiedział, że… · Dostałem/dostałam skierowanie na… · Wyniki… 🩺",
   "example":"W zeszłym tygodniu umówiłem się na wizytę do lekarza rodzinnego. Skarżyłem się na kaszel i na bóle gardła, które trwały już dziesięć dni. Lekarz zapytał, co mi dolega, i poprosił, żebym się rozebrał do pasa. Okazało się, że to zwykłe przeziębienie, a nie grypa. Mimo to dostałem skierowanie na badania krwi, bo od tygodnia było mi słabo rano. Poszedłem na czczo w środę i odebrałem wyniki w piątek. Wszystko było w normie, więc lekarz przepisał mi tylko syrop. Zwolnienia nie brałem, chociaż szef sam mi je proponował. Teraz czuję się dużo lepiej i znowu jestem zdrów jak ryba."
 }
},
"24": {
 "day":24,"week":"04",
 "themeRu":"Ремонт и рекламация",
 "themeEn":"Remont i reklamacja",
 "intro":"Шкаф привезли в среду, в двух коробках и с одной царапиной во всю дверцу. У Марека полквартиры в плёнке, на кухне стоит <b>ekipa remontowa</b>, а теперь ещё и <b>wada</b> товара. День про то, как жить среди ремонта и как написать <b>reklamację</b> так, чтобы её приняли.",
 "introAudio":"Шкаф привезли в среду, в двух коробках и с одной царапиной во всю дверцу. У Марека полквартиры в плёнке, на кухне стоит ekipa remontowa, а теперь ещё и wada товара. День про то, как жить среди ремонта и как написать reklamację так, чтобы её приняли.",
 "goals":[
   "Говорить о ремонте: <b>malować ściany, kłaść panele, ekipa remontowa</b>",
   "Различать поломки: <b>usterka, wada, awaria</b>",
   "Знать свои права: <b>paragon, gwarancja, zwrot pieniędzy, w terminie 14 dni</b>",
   "Написать письмо-рекламацию: <b>składam reklamację i żądam wymiany</b>"
 ],
 "learned":[
   "Заговорил(а) о ремонте: malować ściany, kłaść panele, ekipa remontowa",
   "Различил(а) поломки: usterka, wada, awaria",
   "Узнал(а) свои права: paragon, gwarancja, zwrot pieniędzy, w terminie 14 dni",
   "Написал(а) письмо-рекламацию: składam reklamację i żądam wymiany"
 ],
 "review":{
   "intro":"Вчерашняя поликлиника — на разминку. Жалоба, дативный оборот, направление и одно слово-натощак.",
   "introAudio":"Вчерашняя поликлиника — на разминку. Жалоба, дативный оборот, направление и одно слово-натощак.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни предлог при skarżyć się.",
      "q":"«Жалуюсь на боли в спине» —","opts":["Skarżę się o bóle pleców","Skarżę się na bóle pleców","Skarżę się za bóle pleców"],"answer":1,
      "explain":"<b>Skarżyć się na</b> плюс винительный — как русское «жаловаться на»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни дативную конструкцию.",
      "q":"«Мне плохо, кружится голова» —","opts":["Słabo mi, kręci mi się w głowie","Słabo mnie, kręci mnie w głowie","Jestem słaby, kręcę się w głowie"],"answer":0,
      "explain":"Оба оборота дативные: <b>słabo mi</b> и <b>kręci mi się</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> выбери предлог.",
      "q":"«направление на анализы» —","opts":["skierowanie do badań","skierowanie na badania","skierowanie za badania"],"answer":1,
      "explain":"К человеку — do specjalisty, на процедуру — <b>na badania</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Кровь сдают натощак»</b>","answer":"Krew pobiera się na czczo"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Ремонт",
    "title":"<em>Malować ściany, kłaść panele</em>",
    "paras":[
      "<b>Remont</b> — слово, которое в польском языке значит ровно то же, что в русском, и требует тех же глаголов. <b>Malować ściany</b> (красить стены), <b>kłaść panele</b> (класть ламинат), <b>układać kafelki</b> (укладывать плитку), <b>wymienić okna</b> (поменять окна), <b>skuwać stare płytki</b> (сбивать старую плитку).",
      "Глагол <b>kłaść</b> — из супплетивной пары второго дня: <b>kłaść — położyć</b>. Несовершенный про процесс (<b>kładą panele od rana</b>), совершенный про результат (<b>położyli panele w dwa dni</b>). Ремонт — идеальное место, чтобы эту пару почувствовать.",
      "Люди ремонта: <b>ekipa remontowa</b> (бригада), <b>hydraulik</b> (сантехник), <b>elektryk</b>, <b>stolarz</b> (столяр), <b>fachowiec</b> (мастер, знающий дело). Суффиксы деятеля из четвёртого дня работают и тут: <b>-ik</b>, <b>-yk</b>, <b>-arz</b>, <b>-owiec</b>.",
      "И приставки первой недели, которые меняют смысл ремонта целиком: <b>pomalować</b> — покрасить, <b>przemalować</b> — перекрасить, <b>domalować</b> — докрасить остаток, <b>wyremontować</b> — отремонтировать до конца. Одна приставка — и понятно, на каком этапе стройка."
    ],
    "audio":"Remont — слово, которое в польском языке значит ровно то же, что в русском, и требует тех же глаголов. Malować ściany — красить стены, kłaść panele — класть ламинат, układać kafelki — укладывать плитку, wymienić okna — поменять окна. Глагол kłaść из супплетивной пары второго дня: kłaść — położyć. Несовершенный про процесс, kładą panele od rana; совершенный про результат, położyli panele w dwa dni. Люди ремонта: ekipa remontowa, hydraulik, elektryk, stolarz, fachowiec. Суффиксы деятеля из четвёртого дня работают и тут. И приставки первой недели: pomalować — покрасить, przemalować — перекрасить, domalować — докрасить остаток, wyremontować — отремонтировать до конца.",
    "table":{"rows":[
      ["<b>malować ściany</b> <button class=\"play\" data-say=\"malować ściany\">🔊</button>","красить стены"],
      ["<b>kłaść panele</b> — <b>położyć panele</b> <button class=\"play\" data-say=\"kłaść panele, położyć panele\">🔊</button>","класть — положить ламинат"],
      ["<b>układać kafelki</b> <button class=\"play\" data-say=\"układać kafelki\">🔊</button>","укладывать плитку"],
      ["<b>wymienić okna</b> <button class=\"play\" data-say=\"wymienić okna\">🔊</button>","поменять окна"],
      ["<b>ekipa remontowa</b> <button class=\"play\" data-say=\"ekipa remontowa\">🔊</button>","ремонтная бригада"],
      ["<b>hydraulik</b> · <b>elektryk</b> · <b>stolarz</b> <button class=\"play\" data-say=\"hydraulik, elektryk, stolarz\">🔊</button>","сантехник · электрик · столяр"]
    ],"star":1},
    "examples":[
      {"ru":"Мы красим стены уже третий день.","en":"<b>Malujemy ściany</b> już trzeci dzień.","gloss":"несовершенный — процесс","say":"Malujemy ściany już trzeci dzień."},
      {"ru":"Ламинат положили за два дня.","en":"<b>Panele położyli</b> w dwa dni.","gloss":"совершенный — результат","say":"Panele położyli w dwa dni."},
      {"ru":"В понедельник придёт сантехник поменять трубы.","en":"W poniedziałek przyjdzie <b>hydraulik</b> wymienić rury.","say":"W poniedziałek przyjdzie hydraulik wymienić rury."},
      {"ru":"Кухню отремонтировали полностью, ванную только покрасили.","en":"Kuchnię <b>wyremontowano</b> całkowicie, łazienkę tylko <b>pomalowano</b>.","gloss":"безличное -no из дня 20","say":"Kuchnię wyremontowano całkowicie, łazienkę tylko pomalowano."}
    ],
    "mistakes":[
      {"wrong":"Kładliśmy panele w dwa dni i skończyliśmy.","right":"<b>Położyliśmy</b> panele w dwa dni.","why":"результат за срок — совершенный вид. Kładliśmy говорит только о процессе, без конца."},
      {"wrong":"Zrobiliśmy ściany na biało.","right":"<b>Pomalowaliśmy</b> ściany na biało.","why":"стены красят — malować. Robić здесь звучит так же странно, как «сделали стены белыми»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> результат или процесс?",
       "q":"«Ламинат положили за два дня» —","opts":["Panele kładli w dwa dni","Panele położyli w dwa dni","Panele kładą w dwa dni"],"answer":1,
       "explain":"Срок и результат — совершенный вид: <b>położyli</b>."},
      {"type":"choice","q":"<b>Hydraulik</b> — это —",
       "opts":["электрик","сантехник","столяр"],"answer":1,
       "explain":"<b>Hydraulik</b> — сантехник. Электрик — elektryk, столяр — stolarz."},
      {"type":"type","howto":"<b>Что делать:</b> напиши два слова.",
       "q":"«красить стены»","accept":["malować ściany","malowac sciany"],"placeholder":"malować …"}
    ],
    "mnemonic":"🛠️ ekipa → ściany → panele → kafelki → okna. Ремонт идёт сверху вниз и слева направо."
   },
   {
    "eyebrow":"Правило 2 · Что сломалось",
    "title":"<em>Usterka, wada, awaria</em>",
    "paras":[
      "Три слова о поломках, и путать их не стоит. <b>Usterka</b> — неисправность, мелкий дефект: что-то работает не так. <b>Wada</b> — изъян, брак: вещь такой приехала с завода. <b>Awaria</b> — авария, крупный сбой: прорвало трубу, выключился лифт, встал весь дом.",
      "Глаголы вокруг: <b>zepsuć się</b> и <b>popsuć się</b> — сломаться (обе формы живые), <b>zepsuty</b> — сломанный, <b>przeciekać</b> — течь, <b>nie działa</b> — не работает. Самая частая фраза мастеру: <b>Pralka się zepsuła i nie działa od wczoraj.</b>",
      "И два глагола-ответа: <b>naprawić</b> (починить) и <b>wymienić</b> (заменить). Разница важна для рекламации: починку ты можешь принять, а можешь потребовать замены — это разные требования.",
      "Обрати внимание: у слова <b>wada</b> есть прилагательное <b>wadliwy</b> — бракованный, и стандартное юридическое выражение <b>towar wolny od wad</b> — товар без изъянов. Это язык бумаги, но именно им написаны все польские рекламации."
    ],
    "audio":"Три слова о поломках, и путать их не стоит. Usterka — неисправность, мелкий дефект. Wada — изъян, брак: вещь такой приехала с завода. Awaria — авария, крупный сбой. Глаголы вокруг: zepsuć się и popsuć się — сломаться, zepsuty — сломанный, przeciekać — течь, nie działa — не работает. Самая частая фраза мастеру: pralka się zepsuła i nie działa od wczoraj. И два глагола-ответа: naprawić — починить и wymienić — заменить. Разница важна для рекламации: починку ты можешь принять, а можешь потребовать замены. У слова wada есть прилагательное wadliwy — бракованный, и стандартное выражение towar wolny od wad, товар без изъянов.",
    "table":{"rows":[
      ["<b>usterka</b> <button class=\"play\" data-say=\"usterka\">🔊</button>","неисправность, мелкий дефект"],
      ["<b>wada</b> · <b>wadliwy</b> <button class=\"play\" data-say=\"wada, wadliwy\">🔊</button>","изъян, брак · бракованный"],
      ["<b>awaria</b> <button class=\"play\" data-say=\"awaria\">🔊</button>","авария, крупный сбой"],
      ["<b>zepsuć się</b> · <b>zepsuty</b> <button class=\"play\" data-say=\"zepsuć się, zepsuty\">🔊</button>","сломаться · сломанный"],
      ["<b>naprawić</b> — <b>wymienić</b> <button class=\"play\" data-say=\"naprawić, wymienić\">🔊</button>","починить — заменить"],
      ["<b>towar wolny od wad</b> <button class=\"play\" data-say=\"towar wolny od wad\">🔊</button>","товар без изъянов"]
    ],"star":1},
    "examples":[
      {"ru":"Стиральная машина сломалась и со вчера не работает.","en":"Pralka <b>się zepsuła</b> i <b>nie działa</b> od wczoraj.","say":"Pralka się zepsuła i nie działa od wczoraj."},
      {"ru":"В доме авария, воды нет со среды.","en":"W bloku jest <b>awaria</b>, wody nie ma od środy.","say":"W bloku jest awaria, wody nie ma od środy."},
      {"ru":"У шкафа заводской брак: дверца не закрывается.","en":"Szafa ma <b>wadę fabryczną</b>: drzwi się nie domykają.","say":"Szafa ma wadę fabryczną, drzwi się nie domykają."},
      {"ru":"Я не хочу починки, я требую замены.","en":"Nie chcę <b>naprawy</b>, żądam <b>wymiany</b>.","gloss":"żądać плюс родительный","say":"Nie chcę naprawy, żądam wymiany."}
    ],
    "mistakes":[
      {"wrong":"W lodówce jest awaria, nie pali się lampka.","right":"W lodówce jest <b>usterka</b>, nie pali się lampka.","why":"перегоревшая лампочка — мелочь: usterka. Awaria — это когда встал весь дом или весь прибор."},
      {"wrong":"Żądam wymianę towaru.","right":"<b>Żądam wymiany</b> towaru.","why":"żądać идёт с родительным падежом — как и потребовать чего-то в русском."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> оцени масштаб поломки.",
       "q":"Прорвало трубу, в доме нет воды. Это —","opts":["usterka","awaria","wada"],"answer":1,
       "explain":"Крупный сбой — <b>awaria</b>. Usterka мелкая, wada заводская."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после żądać.",
       "q":"«Требую замены товара» —","opts":["Żądam wymianę towaru","Żądam wymiany towaru","Żądam o wymianę towaru"],"answer":1,
       "explain":"Żądać идёт с родительным: <b>wymiany</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Стиральная машина сломалась и не работает»</b>","answer":"Pralka się zepsuła i nie działa"}
    ],
    "mnemonic":"⚙️ usterka — мелочь, wada — брак с завода, awaria — беда на весь дом."
   },
   {
    "eyebrow":"Правило 3 · Права покупателя",
    "title":"<em>Paragon, gwarancja, w terminie 14 dni</em>",
    "paras":[
      "Всё начинается с бумажки: <b>paragon</b> (чек) или <b>faktura</b> (счёт-фактура). Без них разговор в магазине короткий. Дальше идёт <b>gwarancja</b> — гарантия: <b>Szafa jest na gwarancji.</b>",
      "Само действие называется <b>składać reklamację</b> — подавать рекламацию. Глагол тот же <b>składać</b>, что и с <b>wniosek</b> в учреждении: заявление и рекламацию не «делают», а подают. <b>Złożyłam reklamację w poniedziałek.</b>",
      "Что можно потребовать — три варианта, и выбирает покупатель: <b>naprawa</b> (починка), <b>wymiana towaru</b> (замена товара), <b>zwrot pieniędzy</b> (возврат денег). Формула бумаги: <b>żądam wymiany towaru na wolny od wad</b>.",
      "И два срока. <b>W terminie 14 dni</b> — четырнадцатидневный срок, в который магазин должен ответить на рекламацию. А <b>odstąpić od umowy</b> — «отказаться от договора», право вернуть покупку из интернет-магазина; это узнавание, но формулу увидишь в каждом польском правилах-документе."
    ],
    "audio":"Всё начинается с бумажки: paragon — чек или faktura — счёт-фактура. Без них разговор в магазине короткий. Дальше идёт gwarancja — гарантия: szafa jest na gwarancji. Само действие называется składać reklamację. Глагол тот же składać, что и с wnioskiem в учреждении: заявление и рекламацию не делают, а подают. Что можно потребовать — три варианта, и выбирает покупатель: naprawa — починка, wymiana towaru — замена товара, zwrot pieniędzy — возврат денег. Формула бумаги: żądam wymiany towaru na wolny od wad. И два срока. W terminie czternastu dni — срок, в который магазин должен ответить на рекламацию. А odstąpić od umowy — отказаться от договора, право вернуть покупку из интернет-магазина; это узнавание.",
    "table":{"rows":[
      ["<b>paragon</b> · <b>faktura</b> <button class=\"play\" data-say=\"paragon, faktura\">🔊</button>","чек · счёт-фактура"],
      ["<b>gwarancja</b> <button class=\"play\" data-say=\"gwarancja\">🔊</button>","гарантия"],
      ["<b>składać reklamację</b> <button class=\"play\" data-say=\"składać reklamację\">🔊</button>","подавать рекламацию"],
      ["<b>wymiana towaru</b> <button class=\"play\" data-say=\"wymiana towaru\">🔊</button>","замена товара"],
      ["<b>zwrot pieniędzy</b> <button class=\"play\" data-say=\"zwrot pieniędzy\">🔊</button>","возврат денег"],
      ["<b>w terminie 14 dni</b> <button class=\"play\" data-say=\"w terminie czternastu dni\">🔊</button>","в четырнадцатидневный срок"]
    ],"star":2},
    "examples":[
      {"ru":"У меня есть чек и гарантия.","en":"Mam <b>paragon</b> i <b>gwarancję</b>.","say":"Mam paragon i gwarancję."},
      {"ru":"Я подала рекламацию в понедельник.","en":"<b>Złożyłam reklamację</b> w poniedziałek.","gloss":"składać — тот же глагол, что с wnioskiem","say":"Złożyłam reklamację w poniedziałek."},
      {"ru":"Требую замены товара на товар без изъянов.","en":"<b>Żądam wymiany towaru na wolny od wad.</b>","say":"Żądam wymiany towaru na wolny od wad."},
      {"ru":"Магазин обязан ответить в течение четырнадцати дней.","en":"Sklep ma odpowiedzieć <b>w terminie 14 dni</b>.","say":"Sklep ma odpowiedzieć w terminie czternastu dni."}
    ],
    "mistakes":[
      {"wrong":"Zrobiłam reklamację.","right":"<b>Złożyłam reklamację.</b>","why":"рекламацию подают, как и заявление: składać reklamację. Это устойчивое сочетание."},
      {"wrong":"Chcę zwrot pieniędzmi.","right":"Chcę <b>zwrotu pieniędzy</b>.","why":"сочетание застывшее: zwrot pieniędzy, деньги в родительном. И сам zwrot после chcieć здесь тоже идёт в родительном."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни устойчивое сочетание.",
       "q":"«Я подала рекламацию» —","opts":["Zrobiłam reklamację","Złożyłam reklamację","Dałam reklamację"],"answer":1,
       "explain":"Рекламацию, как и заявление, подают: <b>złożyć reklamację</b>."},
      {"type":"choice","q":"<b>Paragon</b> — это —",
       "opts":["чек из магазина","гарантийный талон","договор"],"answer":0,
       "explain":"<b>Paragon</b> — кассовый чек. Гарантия — gwarancja, договор — umowa."},
      {"type":"type","howto":"<b>Что делать:</b> напиши два слова.",
       "q":"«возврат денег»","accept":["zwrot pieniędzy","zwrot pieniedzy"],"placeholder":"zwrot …"}
    ],
    "mnemonic":"🧾 paragon → reklamacja → naprawa / wymiana / zwrot → 14 dni. Путь одного бракованного шкафа."
   },
   {
    "eyebrow":"Правило 4 · Письмо-рекламация",
    "title":"Официальный каркас в новом деле",
    "paras":[
      "Каркас у письма-рекламации тот же, что у любого официального письма на B1: <b>Szanowni Państwo,</b> сверху, <b>Z poważaniem</b> снизу. Но внутри — жёсткая последовательность из четырёх шагов, и переставлять их не принято.",
      "Шаг первый — факт покупки: <b>W dniu 12 marca zakupiłam w Państwa sklepie szafę Nordis.</b> Дата, место, товар. Шаг второй — что не так: <b>Niestety towar okazał się wadliwy: drzwi są porysowane i nie domykają się.</b>",
      "Шаг третий — требование, и это ядро письма: <b>W związku z powyższym składam reklamację i żądam wymiany towaru na wolny od wad.</b> Связка <b>w związku z powyższym</b> — из третьей недели, канцелярское «в связи с вышеизложенным».",
      "Шаг четвёртый — срок и приложения: <b>Proszę o rozpatrzenie reklamacji w terminie 14 dni.</b> <b>W załączeniu przesyłam kopię paragonu oraz zdjęcia.</b> Ни одного восклицательного знака и ни одного слова о том, как ты зол(а): в этом жанре побеждает сухость."
    ],
    "audio":"Каркас у письма-рекламации тот же, что у любого официального письма на B1: Szanowni Państwo сверху, z poważaniem снизу. Но внутри жёсткая последовательность из четырёх шагов. Шаг первый — факт покупки: w dniu dwunastego marca zakupiłam w Państwa sklepie szafę. Дата, место, товар. Шаг второй — что не так: niestety towar okazał się wadliwy, drzwi są porysowane i nie domykają się. Шаг третий — требование: w związku z powyższym składam reklamację i żądam wymiany towaru na wolny od wad. Связка w związku z powyższym — из третьей недели. Шаг четвёртый — срок и приложения: proszę o rozpatrzenie reklamacji w terminie czternastu dni; w załączeniu przesyłam kopię paragonu oraz zdjęcia. Ни одного восклицательного знака: в этом жанре побеждает сухость.",
    "table":{"rows":[
      ["1. <b>W dniu 12 marca zakupiłam…</b> <button class=\"play\" data-say=\"W dniu dwunastego marca zakupiłam w Państwa sklepie szafę\">🔊</button>","факт покупки: дата, место, товар"],
      ["2. <b>Towar okazał się wadliwy.</b> <button class=\"play\" data-say=\"Towar okazał się wadliwy\">🔊</button>","что именно не так"],
      ["3. <b>W związku z powyższym składam reklamację.</b> <button class=\"play\" data-say=\"W związku z powyższym składam reklamację\">🔊</button>","само требование"],
      ["3а. <b>żądam wymiany towaru na wolny od wad</b> <button class=\"play\" data-say=\"żądam wymiany towaru na wolny od wad\">🔊</button>","формула требования"],
      ["4. <b>w terminie 14 dni</b> <button class=\"play\" data-say=\"w terminie czternastu dni\">🔊</button>","срок ответа"],
      ["4а. <b>W załączeniu przesyłam kopię paragonu.</b> <button class=\"play\" data-say=\"W załączeniu przesyłam kopię paragonu\">🔊</button>","приложения"]
    ],"star":3},
    "examples":[
      {"ru":"Двенадцатого марта я купила у вас шкаф.","en":"<b>W dniu 12 marca zakupiłam</b> w Państwa sklepie szafę.","say":"W dniu dwunastego marca zakupiłam w Państwa sklepie szafę."},
      {"ru":"К сожалению, товар оказался бракованным.","en":"Niestety <b>towar okazał się wadliwy</b>.","say":"Niestety towar okazał się wadliwy."},
      {"ru":"В связи с этим подаю рекламацию.","en":"<b>W związku z powyższym składam reklamację.</b>","gloss":"канцелярская связка из дня 17","say":"W związku z powyższym składam reklamację."},
      {"ru":"Прошу рассмотреть рекламацию в четырнадцатидневный срок.","en":"Proszę o <b>rozpatrzenie reklamacji w terminie 14 dni</b>.","say":"Proszę o rozpatrzenie reklamacji w terminie czternastu dni."}
    ],
    "mistakes":[
      {"wrong":"To skandal! Żądam pieniędzy natychmiast!","right":"<b>W związku z powyższym składam reklamację i żądam zwrotu pieniędzy.</b>","why":"эмоции в рекламации не работают. Формула сухая и от этого сильная."},
      {"wrong":"Proszę o rozpatrzenie reklamacji w termin 14 dni.","right":"…<b>w terminie</b> 14 dni","why":"устойчивое сочетание идёт в предложном падеже: w terminie."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> выбери формулу требования.",
       "q":"Ядро рекламации звучит —","opts":["Bardzo proszę o pomoc, bo jestem zdenerwowana","W związku z powyższym składam reklamację i żądam wymiany towaru","Napiszcie mi, co mam robić"],"answer":1,
       "explain":"Жанр требует формулы: <b>składam reklamację i żądam…</b>"},
      {"type":"choice","howto":"<b>Что делать:</b> проверь падеж в устойчивом сочетании.",
       "q":"«в четырнадцатидневный срок» —","opts":["w termin 14 dni","w terminie 14 dni","na termin 14 dni"],"answer":1,
       "explain":"Устойчивое сочетание: <b>w terminie</b> плюс срок."},
      {"type":"speak","howto":"Нажми микрофон и прочитай это как строку из официального письма.",
       "target":"W związku z powyższym składam reklamację i żądam wymiany towaru na wolny od wad.","sub":"в связи с этим подаю рекламацию и требую замены товара на товар без изъянов","want":"W związku z powyższym składam reklamację i żądam wymiany towaru na wolny od wad."}
    ],
    "mnemonic":"✉️ купил → сломано → требую → в 14 дней. Четыре шага, и письмо готово."
   }
 ],
 "dialogue":{
   "intro":"Анна звонит в магазин мебели. Марек стоит рядом со шкафом и подсказывает детали.",
   "lines":[
     {"who":"S","name":"Sklep","side":"left","en":"Meble Nordis, dzień dobry. W czym mogę pomóc?","ru":"«Мебель Нордис», здравствуйте. Чем могу помочь?",
      "words":[["W czym mogę pomóc?","чем могу помочь?"]]},
     {"who":"A","name":"Anna","side":"right","en":"Dzień dobry. W środę dostaliśmy szafę i niestety ma wadę.","ru":"Здравствуйте. В среду мы получили шкаф, и, к сожалению, у него брак.",
      "words":[["dostaliśmy","мы получили"],["ma wadę","у него брак"]]},
     {"who":"S","name":"Sklep","side":"left","en":"Co dokładnie jest nie tak? Usterka czy uszkodzenie w transporcie?","ru":"Что именно не так? Неисправность или повреждение при перевозке?",
      "words":[["dokładnie","точно, именно"],["uszkodzenie","повреждение"]]},
     {"who":"A","name":"Anna","side":"right","en":"Drzwi są porysowane i nie domykają się. Wyglądają na wadliwe.","ru":"Дверцы поцарапаны и не закрываются до конца. Похоже на брак.",
      "words":[["porysowane","поцарапанные"],["nie domykają się","не закрываются до конца"]]},
     {"who":"S","name":"Sklep","side":"left","en":"Ma pani paragon? Bez paragonu albo faktury nic nie zrobimy.","ru":"У вас есть чек? Без чека или счёта мы ничего не сможем сделать.",
      "words":[["paragon","чек"],["faktura","счёт-фактура"]]},
     {"who":"A","name":"Anna","side":"right","en":"Mamy paragon i gwarancję. Wszystko z dnia dostawy.","ru":"У нас есть чек и гарантия. Всё от дня доставки.",
      "words":[["gwarancja","гарантия"],["z dnia dostawy","от дня доставки"]]},
     {"who":"S","name":"Sklep","side":"left","en":"Mogę zaproponować naprawę u państwa w domu, w przyszłym tygodniu.","ru":"Могу предложить починку у вас дома, на следующей неделе.",
      "words":[["zaproponować","предложить"],["naprawę","починку"]]},
     {"who":"A","name":"Anna","side":"right","en":"Wolimy wymianę. Szafa przyjechała wadliwa, nie zepsuła się u nas.","ru":"Мы предпочитаем замену. Шкаф приехал бракованным, он не сломался у нас.",
      "words":[["Wolimy","мы предпочитаем"],["wymianę","замену"]]},
     {"who":"S","name":"Sklep","side":"left","en":"W takim razie proszę złożyć reklamację na piśmie i dołączyć zdjęcia.","ru":"В таком случае подайте рекламацию письменно и приложите фотографии.",
      "words":[["na piśmie","письменно"],["dołączyć","приложить"]]},
     {"who":"A","name":"Anna","side":"right","en":"Wyślę dziś. Rozumiem, że odpowiedź dostanę w terminie czternastu dni?","ru":"Отправлю сегодня. Правильно понимаю, что ответ получу в четырнадцатидневный срок?",
      "words":[["Wyślę","отправлю"],["w terminie","в срок"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — сантехник в квартире Марека. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Pod zlewem od tygodnia przecieka. Wiadro zmieniam dwa razy dziennie.","ru":"Под мойкой уже неделю течёт. Ведро меняю два раза в день."},
     {"who":"B","en":"To nie awaria, to zwykła usterka. Uszczelka poszła.","ru":"Это не авария, это обычная неисправность. Прокладка сдала."},
     {"who":"A","en":"Da się to naprawić dzisiaj czy trzeba wymieniać rurę?","ru":"Это можно починить сегодня или нужно менять трубу?"},
     {"who":"B","en":"Naprawię w dziesięć minut. Rura jest w porządku.","ru":"Починю за десять минут. Труба в порядке."},
     {"who":"A","en":"Dziesięć minut po tygodniu z wiadrem. Nie do wiary.","ru":"Десять минут после недели с ведром. Невероятно."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — половина про ремонт, половина про права покупателя.",
   "items":[
     {"en":"remont","ru":"ремонт","ex":"Remont trwa już trzy tygodnie."},
     {"en":"ekipa remontowa","ru":"ремонтная бригада","ex":"Ekipa remontowa przychodzi o siódmej."},
     {"en":"kłaść panele","ru":"класть ламинат","ex":"Panele położyli w dwa dni."},
     {"en":"hydraulik","ru":"сантехник","ex":"Hydraulik przyjdzie w poniedziałek."},
     {"en":"usterka","ru":"неисправность","ex":"To drobna usterka, nie awaria."},
     {"en":"wada","ru":"изъян, брак","ex":"Szafa ma wadę fabryczną."},
     {"en":"zepsuć się","ru":"сломаться","ex":"Pralka się zepsuła w sobotę."},
     {"en":"reklamacja","ru":"рекламация, претензия","ex":"Złożyłam reklamację na piśmie."},
     {"en":"paragon","ru":"чек","ex":"Bez paragonu nic nie zrobią."},
     {"en":"gwarancja","ru":"гарантия","ex":"Szafa jest jeszcze na gwarancji."},
     {"en":"wymiana towaru","ru":"замена товара","ex":"Żądam wymiany towaru."},
     {"en":"zwrot pieniędzy","ru":"возврат денег","ex":"Wolę zwrot pieniędzy niż naprawę."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к его переводу.",
   "pairs":[["usterka","неисправность"],["paragon","чек"],["wymiana","замена"],["hydraulik","сантехник"]]
 },
 "reading":{
   "intro":"Прочитай и послушай рекламацию, которую Анна отправила в мебельный магазин. Это готовый образец жанра — можно списывать каркас.",
   "title":"Reklamacja szafy",
   "sentences":["Szanowni Państwo,","w dniu dwunastego marca zakupiłam w Państwa sklepie internetowym szafę trzydrzwiową model Nordis.","Towar został dostarczony w środę, piętnastego marca, przez firmę kurierską.","Niestety już przy odbiorze okazało się, że towar jest wadliwy.","Prawe drzwi są porysowane na całej długości, a lewe nie domykają się do końca.","Uszkodzenia nie powstały w transporcie, ponieważ opakowanie było nienaruszone.","W związku z powyższym składam reklamację i żądam wymiany towaru na wolny od wad.","Nie jestem zainteresowana naprawą, ponieważ wada dotyczy dwóch elementów jednocześnie.","Proszę o rozpatrzenie reklamacji w terminie czternastu dni od otrzymania niniejszego pisma.","W załączeniu przesyłam kopię paragonu, kartę gwarancyjną oraz sześć zdjęć uszkodzeń.","Proszę również o informację, kiedy mogę spodziewać się odbioru wadliwego mebla.","Z poważaniem","Anna Kowalska"],
   "translation":"Уважаемые господа, двенадцатого марта я приобрела в вашем интернет-магазине трёхдверный шкаф модели «Нордис». Товар был доставлен в среду, пятнадцатого марта, курьерской службой. К сожалению, уже при получении оказалось, что товар бракованный. Правая дверца поцарапана по всей длине, а левая не закрывается до конца. Повреждения возникли не при перевозке, поскольку упаковка была цела. В связи с этим подаю рекламацию и требую замены товара на товар без изъянов. Починка меня не интересует, поскольку дефект касается сразу двух элементов. Прошу рассмотреть рекламацию в четырнадцатидневный срок с момента получения настоящего письма. В приложении высылаю копию чека, гарантийный талон и шесть фотографий повреждений. Прошу также сообщить, когда я могу ожидать вывоза бракованной мебели. С уважением, Анна Ковальская"
 },
 "quiz":{
   "intro":"Пять вопросов — и бракованный шкаф больше не проблема.",
   "items":[
     {"q":"1. «Я подала рекламацию» —","opts":["Zrobiłam reklamację","Złożyłam reklamację","Dałam reklamację"],"answer":1,
      "explain":"Рекламацию подают: <b>złożyć reklamację</b>."},
     {"q":"2. Прорвало трубу, весь дом без воды. Это —","opts":["usterka","awaria","wada"],"answer":1,
      "explain":"Крупный сбой — <b>awaria</b>."},
     {"q":"3. «Требую замены товара» —","opts":["Żądam wymianę towaru","Żądam wymiany towaru","Żądam o wymianę towaru"],"answer":1,
      "explain":"Żądać идёт с родительным падежом."},
     {"q":"4. «Ламинат положили за два дня» —","opts":["Panele kładli w dwa dni","Panele położyli w dwa dni","Panele kładą w dwa dni"],"answer":1,
      "explain":"Результат за срок — совершенный вид: <b>położyli</b>."},
     {"q":"5. «в четырнадцатидневный срок» —","opts":["w terminie 14 dni","w termin 14 dni","za termin 14 dni"],"answer":0,
      "explain":"Устойчивое сочетание: <b>w terminie</b>."}
   ]
 },
 "essay":{
   "intro":"Напиши свою рекламацию. Товар выбери сам(а): телефон, стол, куртка, велосипед — каркас один и тот же.",
   "prompt":"Напиши письмо-рекламацию в 7–8 предложений: обращение, факт покупки с датой, описание дефекта, требование с żądam плюс родительный, срок ответа, приложения и подпись.",
   "hint":"Каркас: Szanowni Państwo, · W dniu … zakupiłem/zakupiłam… · Niestety towar okazał się wadliwy… · W związku z powyższym składam reklamację i żądam… · w terminie 14 dni · W załączeniu przesyłam… · Z poważaniem 🧾",
   "example":"Szanowni Państwo, w dniu piątego kwietnia zakupiłem w Państwa sklepie rower miejski model Vento. Towar odebrałem osobiście w salonie przy ulicy Długiej. Niestety po tygodniu okazało się, że tylne koło jest krzywe, a hamulec nie działa. Usterka nie powstała z mojej winy, ponieważ jeździłem wyłącznie po mieście. W związku z powyższym składam reklamację i żądam naprawy lub wymiany towaru na wolny od wad. Proszę o rozpatrzenie reklamacji w terminie czternastu dni. W załączeniu przesyłam kopię paragonu oraz zdjęcia koła i hamulca. Z poważaniem, Piotr Zieliński"
 }
},
"25": {
 "day":25,"week":"04",
 "themeRu":"Экология и рассуждение",
 "themeEn":"Ekologia i rozprawka",
 "intro":"Мусор у Марека во дворе разложен по пяти бакам, и первые две недели Анна путала жёлтый с зелёным. Сегодня разбираемся с этими баками — и заодно с жанром, который на сертификатном экзамене пугает больше всего: <b>rozprawka</b>, сочинение-рассуждение. У него есть чертёж, и по чертежу его собирать легко.",
 "introAudio":"Мусор у Марека во дворе разложен по пяти бакам, и первые две недели Анна путала жёлтый с зелёным. Сегодня разбираемся с этими баками — и заодно с жанром, который на сертификатном экзамене пугает больше всего: rozprawka, сочинение-рассуждение. У него есть чертёж, и по чертежу его собирать легко.",
 "goals":[
   "Говорить об экологии: <b>środowisko, zanieczyszczenie, zmiany klimatu</b>",
   "Сортировать мусор по-польски: <b>segregacja śmieci</b> и пять баков",
   "Собрать <b>rozprawkę</b>: <b>teza → argumenty za → przeciw → wnioski</b>",
   "Скреплять текст: <b>warto zauważyć, że… nie da się ukryć, że…</b>"
 ],
 "learned":[
   "Заговорил(а) об экологии: środowisko, zanieczyszczenie, zmiany klimatu",
   "Разобрал(ась) в segregacji śmieci и пяти баках",
   "Собрал(а) rozprawkę: teza, argumenty za, argumenty przeciw, wnioski",
   "Скрепил(а) текст: warto zauważyć, że и nie da się ukryć, że"
 ],
 "review":{
   "intro":"Вчерашняя рекламация — на разминку. Подача, требование, срок и одна поломка правильного размера.",
   "introAudio":"Вчерашняя рекламация — на разминку. Подача, требование, срок и одна поломка правильного размера.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни устойчивое сочетание.",
      "q":"«Я подала рекламацию» —","opts":["Zrobiłam reklamację","Złożyłam reklamację","Wzięłam reklamację"],"answer":1,
      "explain":"Рекламацию, как и заявление, подают: <b>złożyć reklamację</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после żądać.",
      "q":"«Требую возврата денег» —","opts":["Żądam zwrot pieniędzy","Żądam zwrotu pieniędzy","Żądam o zwrot pieniędzy"],"answer":1,
      "explain":"Żądać идёт с родительным: <b>zwrotu</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> оцени масштаб поломки.",
      "q":"Перегорела лампочка в холодильнике. Это —","opts":["awaria","usterka","wada fabryczna"],"answer":1,
      "explain":"Мелочь — <b>usterka</b>. Awaria про крупный сбой."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«В приложении высылаю копию чека»</b>","answer":"W załączeniu przesyłam kopię paragonu"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Слова о среде",
    "title":"<em>Środowisko, zanieczyszczenie, zmiany klimatu</em>",
    "paras":[
      "Ядро темы — три слова, и все три с русскими подсказками. <b>Środowisko</b> (naturalne) — окружающая среда. <b>Zanieczyszczenie</b> — загрязнение: <b>zanieczyszczenie powietrza</b>, <b>zanieczyszczenie wody</b>. <b>Zmiany klimatu</b> — изменения климата.",
      "Заметь словообразование первой недели прямо в теме дня: <b>czysty</b> (чистый) → <b>zanieczyścić</b> (загрязнить) → <b>zanieczyszczenie</b> (загрязнение). Приставка, глагол, отглагольное существительное на -enie — цепочка ровно та, что мы строили в день 1 и день 3.",
      "Слова, которые слышишь зимой в каждом краковском прогнозе: <b>smog</b>, <b>jakość powietrza</b> (качество воздуха), <b>pył</b> (пыль, взвесь), <b>ogrzewanie węglem</b> (отопление углём). Краков воюет со смогом всерьёз, и разговор о нём тут бытовой, а не научный.",
      "И два выражения для узнавания — их встретишь в тексте, но писать самому не обязательно: <b>ślad węglowy</b> (углеродный след) и <b>odnawialne źródła energii</b> (возобновляемые источники энергии)."
    ],
    "audio":"Ядро темы — три слова, и все три с русскими подсказками. Środowisko naturalne — окружающая среда. Zanieczyszczenie — загрязнение: zanieczyszczenie powietrza, zanieczyszczenie wody. Zmiany klimatu — изменения климата. Заметь словообразование первой недели прямо в теме дня: czysty — чистый, zanieczyścić — загрязнить, zanieczyszczenie — загрязнение. Приставка, глагол, отглагольное существительное на -enie. Слова, которые слышишь зимой в каждом краковском прогнозе: smog, jakość powietrza, pył, ogrzewanie węglem. И два выражения для узнавания: ślad węglowy — углеродный след и odnawialne źródła energii — возобновляемые источники энергии.",
    "table":{"rows":[
      ["<b>środowisko naturalne</b> <button class=\"play\" data-say=\"środowisko naturalne\">🔊</button>","окружающая среда"],
      ["<b>zanieczyszczenie powietrza</b> <button class=\"play\" data-say=\"zanieczyszczenie powietrza\">🔊</button>","загрязнение воздуха"],
      ["<b>zmiany klimatu</b> <button class=\"play\" data-say=\"zmiany klimatu\">🔊</button>","изменения климата"],
      ["<b>smog</b> · <b>jakość powietrza</b> <button class=\"play\" data-say=\"smog, jakość powietrza\">🔊</button>","смог · качество воздуха"],
      ["czysty → zanieczyścić → <b>zanieczyszczenie</b> <button class=\"play\" data-say=\"czysty, zanieczyścić, zanieczyszczenie\">🔊</button>","цепочка словообразования"],
      ["<b>odnawialne źródła energii</b> <button class=\"play\" data-say=\"odnawialne źródła energii\">🔊</button>","возобновляемые источники энергии"]
    ],"star":4},
    "examples":[
      {"ru":"Зимой качество воздуха в городе резко падает.","en":"Zimą <b>jakość powietrza</b> w mieście gwałtownie spada.","say":"Zimą jakość powietrza w mieście gwałtownie spada."},
      {"ru":"Загрязнение воздуха — проблема всей агломерации.","en":"<b>Zanieczyszczenie powietrza</b> to problem całej aglomeracji.","say":"Zanieczyszczenie powietrza to problem całej aglomeracji."},
      {"ru":"Об изменениях климата говорят уже и в прогнозе погоды.","en":"O <b>zmianach klimatu</b> mówi się już nawet w prognozie pogody.","gloss":"безличное się — день 20","say":"O zmianach klimatu mówi się już nawet w prognozie pogody."},
      {"ru":"Многие дома до сих пор отапливаются углём.","en":"Wiele domów wciąż ogrzewa się <b>węglem</b>.","say":"Wiele domów wciąż ogrzewa się węglem."}
    ],
    "mistakes":[
      {"wrong":"zmiany klimata","right":"<b>zmiany klimatu</b>","why":"родительный падеж от klimat — klimatu. Окончание -a у этого слова не работает."},
      {"wrong":"środowisko naturalna","right":"<b>środowisko naturalne</b>","why":"środowisko среднего рода, как okno, поэтому прилагательное с -e."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь родительный падеж.",
       "q":"«изменения климата» —","opts":["zmiany klimata","zmiany klimatu","zmiany klimacie"],"answer":1,
       "explain":"Родительный от klimat — <b>klimatu</b>."},
      {"type":"choice","q":"<b>Zanieczyszczenie</b> — это —",
       "opts":["загрязнение","очистка","переработка"],"answer":0,
       "explain":"От czysty через zanieczyścić: <b>zanieczyszczenie</b> — загрязнение."},
      {"type":"type","howto":"<b>Что делать:</b> напиши одно слово.",
       "q":"«окружающая среда» — одно слово","accept":["środowisko","srodowisko"],"placeholder":"środ…"}
    ],
    "mnemonic":"🌍 czysty → zanieczyścić → zanieczyszczenie. Фабрика слов работает и на экологии."
   },
   {
    "eyebrow":"Правило 2 · Пять баков",
    "title":"<em>Segregacja śmieci</em> и как экономить",
    "paras":[
      "<b>Segregacja śmieci</b> — раздельный сбор мусора, в Польше он обязательный и цветной. <b>Żółty</b> — <b>metale i tworzywa sztuczne</b> (металл и пластик), <b>zielony</b> — <b>szkło</b>, <b>niebieski</b> — <b>papier</b>, <b>brązowy</b> — <b>bio</b> (пищевые и растительные отходы), а всё остальное идёт в <b>odpady zmieszane</b>.",
      "Обрати внимание на слово <b>tworzywa sztuczne</b> — буквально «искусственные материалы», то, что мы зовём пластиком. В быту говорят и просто <b>plastik</b>, но на баке будет написано официально.",
      "Глаголы обычной экономии: <b>oszczędzać wodę i prąd</b> (экономить воду и электричество), <b>zakręcać kran</b> (закрывать кран), <b>gasić światło</b> (гасить свет), <b>segregować śmieci</b>. Все с винительным падежом, без ловушек.",
      "И вещи, о которых спорят: <b>torba wielorazowa</b> (многоразовая сумка) против <b>jednorazowych</b> пакетов, <b>transport publiczny</b> и <b>komunikacja miejska</b> против машины, <b>rower miejski</b> (городской велопрокат). Заметь пару <b>jednorazowy</b> — <b>wielorazowy</b>: она построена ровно как русская «одноразовый — многоразовый»."
    ],
    "audio":"Segregacja śmieci — раздельный сбор мусора, в Польше он обязательный и цветной. Żółty — metale i tworzywa sztuczne, зелёный — szkło, синий — papier, коричневый — bio, а всё остальное идёт в odpady zmieszane. Обрати внимание на слово tworzywa sztuczne — буквально искусственные материалы, то, что мы зовём пластиком. Глаголы обычной экономии: oszczędzać wodę i prąd, zakręcać kran, gasić światło, segregować śmieci. Все с винительным падежом. И вещи, о которых спорят: torba wielorazowa против jednorazowych пакетов, transport publiczny и komunikacja miejska против машины, rower miejski. Заметь пару jednorazowy — wielorazowy: она построена ровно как русская одноразовый — многоразовый.",
    "table":{"rows":[
      ["<b>żółty</b>: metale i tworzywa sztuczne <button class=\"play\" data-say=\"żółty, metale i tworzywa sztuczne\">🔊</button>","жёлтый: металл и пластик"],
      ["<b>zielony</b>: szkło <button class=\"play\" data-say=\"zielony, szkło\">🔊</button>","зелёный: стекло"],
      ["<b>niebieski</b>: papier <button class=\"play\" data-say=\"niebieski, papier\">🔊</button>","синий: бумага"],
      ["<b>brązowy</b>: bio <button class=\"play\" data-say=\"brązowy, bio\">🔊</button>","коричневый: органика"],
      ["<b>odpady zmieszane</b> <button class=\"play\" data-say=\"odpady zmieszane\">🔊</button>","смешанные отходы"],
      ["<b>oszczędzać wodę i prąd</b> <button class=\"play\" data-say=\"oszczędzać wodę i prąd\">🔊</button>","экономить воду и электричество"]
    ],"star":0},
    "examples":[
      {"ru":"Стекло идёт в зелёный бак, бумага — в синий.","en":"<b>Szkło</b> idzie do zielonego pojemnika, <b>papier</b> do niebieskiego.","say":"Szkło idzie do zielonego pojemnika, papier do niebieskiego."},
      {"ru":"Мы экономим воду и всегда закрываем кран.","en":"<b>Oszczędzamy wodę</b> i zawsze <b>zakręcamy kran</b>.","say":"Oszczędzamy wodę i zawsze zakręcamy kran."},
      {"ru":"В городе я езжу на общественном транспорте.","en":"W mieście jeżdżę <b>transportem publicznym</b>.","gloss":"средство передвижения — творительный","say":"W mieście jeżdżę transportem publicznym."},
      {"ru":"Одноразовые пакеты я заменила на многоразовую сумку.","en":"<b>Jednorazowe</b> torebki zamieniłam na <b>torbę wielorazową</b>.","say":"Jednorazowe torebki zamieniłam na torbę wielorazową."}
    ],
    "mistakes":[
      {"wrong":"Segreguję śmieciami.","right":"<b>Segreguję śmieci.</b>","why":"segregować идёт с винительным падежом — сортируют что, а не чем."},
      {"wrong":"Butelki wyrzucam do niebieskiego pojemnika.","right":"Butelki szklane wyrzucam do <b>zielonego</b> pojemnika.","why":"синий бак для бумаги, стекло идёт в зелёный."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни цвет бака.",
       "q":"Стеклянные бутылки идут в бак —","opts":["żółty","zielony","niebieski"],"answer":1,
       "explain":"Стекло — <b>zielony</b> pojemnik. Жёлтый для пластика и металла, синий для бумаги."},
      {"type":"choice","howto":"<b>Что делать:</b> проверь падеж.",
       "q":"«Я сортирую мусор» —","opts":["Segreguję śmieciami","Segreguję śmieci","Segreguję o śmieciach"],"answer":1,
       "explain":"Segregować идёт с винительным: <b>śmieci</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Мы экономим воду и электричество»</b>","answer":"Oszczędzamy wodę i prąd"}
    ],
    "mnemonic":"♻️ żółty — plastik · zielony — szkło · niebieski — papier · brązowy — bio. Четыре цвета, и двор в порядке."
   },
   {
    "eyebrow":"Правило 3 · Rozprawka",
    "title":"<em>Teza → argumenty → wnioski</em>",
    "paras":[
      "<b>Rozprawka</b> — сочинение-рассуждение, один из жанров письменной части сертификатного экзамена. Его сила в том, что он собирается по чертежу из четырёх блоков: <b>teza</b> (тезис), <b>argumenty za</b>, <b>argumenty przeciw</b>, <b>wnioski</b> (выводы).",
      "<b>Teza</b> — одно предложение в начале, где ты называешь вопрос и свою позицию: <b>Moim zdaniem samochód w mieście nie jest dziś konieczny.</b> Не «я расскажу о», а сразу утверждение: рассуждение должно с чего-то отталкиваться.",
      "Аргументы идут блоками, каждый со своей скрепой. <b>Przede wszystkim…</b> (прежде всего), <b>Po pierwsze… po drugie…</b> (с B1), <b>Warto zauważyć, że…</b> (стоит отметить, что), <b>Nie da się ukryć, że…</b> (нельзя не признать, что). Каждый аргумент — с примером, иначе он не считается.",
      "Контраргументы вводит <b>Z drugiej strony…</b> или <b>Przeciwnicy tego poglądu twierdzą, że…</b> — заметь глагол <b>twierdzić</b> из дня 19. А заканчивается всё выводом: <b>Podsumowując…</b> или книжное <b>Reasumując…</b> — узнавание."
    ],
    "audio":"Rozprawka — сочинение-рассуждение, один из жанров письменной части сертификатного экзамена. Его сила в том, что он собирается по чертежу из четырёх блоков: teza, argumenty za, argumenty przeciw, wnioski. Teza — одно предложение в начале, где ты называешь вопрос и свою позицию: moim zdaniem samochód w mieście nie jest dziś konieczny. Не «я расскажу о», а сразу утверждение. Аргументы идут блоками, каждый со своей скрепой: przede wszystkim, po pierwsze, po drugie, warto zauważyć, że, nie da się ukryć, że. Каждый аргумент с примером, иначе он не считается. Контраргументы вводит z drugiej strony или przeciwnicy tego poglądu twierdzą, że — заметь глагол twierdzić из дня девятнадцать. А заканчивается всё выводом: podsumowując или книжное reasumując.",
    "table":{"rows":[
      ["1. <b>teza</b>: Moim zdaniem… <button class=\"play\" data-say=\"Moim zdaniem samochód w mieście nie jest konieczny\">🔊</button>","тезис — одно предложение"],
      ["2. <b>Przede wszystkim…</b> <button class=\"play\" data-say=\"Przede wszystkim\">🔊</button>","прежде всего — первый аргумент"],
      ["2а. <b>Warto zauważyć, że…</b> <button class=\"play\" data-say=\"Warto zauważyć, że\">🔊</button>","стоит отметить, что…"],
      ["2б. <b>Nie da się ukryć, że…</b> <button class=\"play\" data-say=\"Nie da się ukryć, że\">🔊</button>","нельзя не признать, что…"],
      ["3. <b>Przeciwnicy tego poglądu twierdzą, że…</b> <button class=\"play\" data-say=\"Przeciwnicy tego poglądu twierdzą, że\">🔊</button>","противники этого мнения утверждают…"],
      ["4. <b>Podsumowując…</b> <button class=\"play\" data-say=\"Podsumowując\">🔊</button>","подводя итог…"]
    ],"star":3},
    "examples":[
      {"ru":"По-моему, машина в городе сегодня не необходима.","en":"<b>Moim zdaniem</b> samochód w mieście nie jest dziś konieczny.","say":"Moim zdaniem samochód w mieście nie jest dziś konieczny."},
      {"ru":"Прежде всего, общественный транспорт в Кракове работает хорошо.","en":"<b>Przede wszystkim</b> komunikacja miejska w Krakowie działa dobrze.","say":"Przede wszystkim komunikacja miejska w Krakowie działa dobrze."},
      {"ru":"Стоит отметить, что содержание машины стоит дорого.","en":"<b>Warto zauważyć, że</b> utrzymanie samochodu jest drogie.","say":"Warto zauważyć, że utrzymanie samochodu jest drogie."},
      {"ru":"Противники этого мнения утверждают, что без машины трудно с детьми.","en":"<b>Przeciwnicy tego poglądu twierdzą, że</b> bez samochodu trudno jest z dziećmi.","gloss":"twierdzić — день 19","say":"Przeciwnicy tego poglądu twierdzą, że bez samochodu trudno jest z dziećmi."}
    ],
    "mistakes":[
      {"wrong":"W tej rozprawce napiszę o samochodach w mieście.","right":"<b>Moim zdaniem samochód w mieście nie jest dziś konieczny.</b>","why":"тезис — это позиция, а не анонс. Объявление темы не считается тезисом."},
      {"wrong":"Warto zauważyć o tym, że…","right":"<b>Warto zauważyć, że…</b>","why":"эта скрепа идёт прямо с że, без о tym."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> выбери настоящий тезис.",
       "q":"Какое предложение годится в тезис rozprawki?","opts":["W tej pracy napiszę o samochodach","Moim zdaniem samochód w mieście nie jest dziś konieczny","Samochody są bardzo różne"],"answer":1,
       "explain":"Тезис — это позиция, которую дальше защищают."},
      {"type":"choice","q":"<b>Nie da się ukryć, że…</b> значит —",
       "opts":["нельзя не признать, что…","невозможно спрятать, что…","непонятно, что…"],"answer":0,
       "explain":"Устойчивая скрепа рассуждения: «нельзя не признать, что»."},
      {"type":"type","howto":"<b>Что делать:</b> напиши скрепу вывода одним словом.",
       "q":"«подводя итог» по-польски","accept":["podsumowując","podsumowujac"],"placeholder":"podsum…"}
    ],
    "mnemonic":"📐 teza → za → przeciw → wnioski. Четыре блока, и рассуждение стоит ровно."
   },
   {
    "eyebrow":"Правило 4 · Голос рассуждения",
    "title":"<em>Da się, nie da się, można stwierdzić</em>",
    "paras":[
      "У rozprawki особый голос: она говорит не «я так чувствую», а «так обстоит дело». Поэтому в ней много безличных форм из дня 20: <b>można stwierdzić, że…</b> (можно утверждать), <b>należy zauważyć, że…</b> (следует отметить), <b>trudno się nie zgodzić, że…</b> (трудно не согласиться).",
      "Отдельно стоит оборот <b>da się</b> — «получается, возможно». <b>Da się żyć bez samochodu.</b> <b>Nie da się ukryć, że…</b> Форма безличная и неизменяемая: <b>da się</b>, <b>dało się</b>, <b>będzie się dało</b>. Русское «можно» покрывает почти все случаи.",
      "Аргумент без примера не работает. Схема одна: утверждение — пример — микровывод. <b>Komunikacja miejska działa dobrze. W Krakowie tramwaj przyjeżdża co pięć minut. Dlatego samochód nie jest konieczny.</b> Три предложения — и абзац готов.",
      "И честная оговорка: <b>rozprawka</b> не требует, чтобы ты был(а) прав(а). Она требует, чтобы позиция была одна и чтобы её держали до конца. Меняешь мнение в середине — теряешь баллы, даже если предложения красивые."
    ],
    "audio":"У rozprawki особый голос: она говорит не «я так чувствую», а «так обстоит дело». Поэтому в ней много безличных форм из дня двадцать: można stwierdzić, że; należy zauważyć, że; trudno się nie zgodzić, że. Отдельно стоит оборот da się — получается, возможно. Da się żyć bez samochodu. Nie da się ukryć, że. Форма безличная и неизменяемая: da się, dało się, będzie się dało. Аргумент без примера не работает. Схема одна: утверждение, пример, микровывод. Komunikacja miejska działa dobrze; w Krakowie tramwaj przyjeżdża co pięć minut; dlatego samochód nie jest konieczny. И честная оговорка: rozprawka не требует, чтобы ты был прав. Она требует, чтобы позиция была одна и чтобы её держали до конца.",
    "table":{"rows":[
      ["<b>Da się żyć bez samochodu.</b> <button class=\"play\" data-say=\"Da się żyć bez samochodu\">🔊</button>","Без машины жить можно."],
      ["<b>Nie da się ukryć, że…</b> <button class=\"play\" data-say=\"Nie da się ukryć, że\">🔊</button>","Нельзя не признать, что…"],
      ["<b>Można stwierdzić, że…</b> <button class=\"play\" data-say=\"Można stwierdzić, że\">🔊</button>","Можно утверждать, что…"],
      ["<b>Należy zauważyć, że…</b> <button class=\"play\" data-say=\"Należy zauważyć, że\">🔊</button>","Следует отметить, что…"],
      ["<b>Trudno się nie zgodzić, że…</b> <button class=\"play\" data-say=\"Trudno się nie zgodzić, że\">🔊</button>","Трудно не согласиться, что…"],
      ["утверждение → пример → микровывод <button class=\"play\" data-say=\"Komunikacja miejska działa dobrze. Tramwaj przyjeżdża co pięć minut. Dlatego samochód nie jest konieczny.\">🔊</button>","схема одного абзаца"]
    ],"star":1},
    "examples":[
      {"ru":"Без машины в центре вполне можно жить.","en":"W centrum spokojnie <b>da się żyć</b> bez samochodu.","say":"W centrum spokojnie da się żyć bez samochodu."},
      {"ru":"Нельзя не признать, что зимой воздух в городе плохой.","en":"<b>Nie da się ukryć, że</b> zimą powietrze w mieście jest złe.","say":"Nie da się ukryć, że zimą powietrze w mieście jest złe."},
      {"ru":"Можно утверждать, что раздельный сбор мусора вошёл в привычку.","en":"<b>Można stwierdzić, że</b> segregacja śmieci weszła w nawyk.","say":"Można stwierdzić, że segregacja śmieci weszła w nawyk."},
      {"ru":"Раньше без машины было трудно, теперь получается.","en":"Kiedyś bez samochodu było trudno, teraz <b>się da</b>.","say":"Kiedyś bez samochodu było trudno, teraz się da."}
    ],
    "mistakes":[
      {"wrong":"Nie daję się ukryć, że…","right":"<b>Nie da się ukryć, że…</b>","why":"это безличная форма, лица у неё нет: da się и точка."},
      {"wrong":"Moim zdaniem tak, ale właściwie nie wiem.","right":"<b>Moim zdaniem</b> samochód w mieście nie jest konieczny.","why":"в rozprawce позиция одна и держится до конца. Колебание в середине снижает оценку."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни безличную форму.",
       "q":"«Без машины жить можно» —","opts":["Nie daję się żyć bez samochodu","Da się żyć bez samochodu","Daje się żyć bez samochodu"],"answer":1,
       "explain":"Безличное <b>da się</b> — форма неизменяемая."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери правильно построенный абзац.",
       "q":"Какой абзац сделан по схеме?","opts":["Komunikacja miejska jest dobra. Tramwaj przyjeżdża co pięć minut. Dlatego samochód nie jest konieczny","Samochody są drogie. Ale ja lubię samochody. Nie wiem","Komunikacja miejska. Samochód. Miasto"],"answer":0,
       "explain":"Утверждение, пример, микровывод — три предложения, и абзац готов."},
      {"type":"speak","howto":"Нажми микрофон и произнеси это как строку из сочинения.",
       "target":"Nie da się ukryć, że zimą jakość powietrza w mieście jest bardzo zła.","sub":"нельзя не признать, что зимой качество воздуха в городе очень плохое","want":"Nie da się ukryć, że zimą jakość powietrza w mieście jest bardzo zła."}
    ],
    "mnemonic":"🗿 Одна позиция, три аргумента с примерами, один вывод. Rozprawka не спорит с собой."
   }
 ],
 "dialogue":{
   "intro":"Анна пишет пробную rozprawkę к экзамену, Марек читает через плечо — и немедленно становится оппонентом.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Czyli teza brzmi: samochód w mieście nie jest potrzebny. Odważnie.","ru":"То есть тезис звучит так: машина в городе не нужна. Смело.",
      "words":[["teza","тезис"],["Odważnie","смело"]]},
     {"who":"A","name":"Anna","side":"left","en":"Przede wszystkim komunikacja miejska działa tu naprawdę dobrze.","ru":"Прежде всего, общественный транспорт здесь работает по-настоящему хорошо.",
      "words":[["Przede wszystkim","прежде всего"],["komunikacja miejska","общественный транспорт"]]},
     {"who":"M","name":"Marek","side":"right","en":"A jak jedziesz do rodziców na wieś? Tam autobus jest dwa razy dziennie.","ru":"А как ты едешь к родителям в деревню? Там автобус два раза в день.",
      "words":[["na wieś","в деревню"],["dwa razy dziennie","два раза в день"]]},
     {"who":"A","name":"Anna","side":"left","en":"To jest argument przeciw, i on musi być w tekście. Zapisuję.","ru":"Это контраргумент, и он должен быть в тексте. Записываю.",
      "words":[["argument przeciw","контраргумент"],["Zapisuję","записываю"]]},
     {"who":"M","name":"Marek","side":"right","en":"Nie da się ukryć, że zimą wolę siedzieć w aucie niż stać na przystanku.","ru":"Нельзя не признать, что зимой я предпочитаю сидеть в машине, а не стоять на остановке.",
      "words":[["Nie da się ukryć","нельзя не признать"],["na przystanku","на остановке"]]},
     {"who":"A","name":"Anna","side":"left","en":"Warto zauważyć, że przez te auta zimą nie da się oddychać.","ru":"Стоит отметить, что из-за этих машин зимой невозможно дышать.",
      "words":[["Warto zauważyć","стоит отметить"],["oddychać","дышать"]]},
     {"who":"M","name":"Marek","side":"right","en":"Smog jest głównie z ogrzewania węglem, nie tylko z aut.","ru":"Смог в основном от отопления углём, а не только от машин.",
      "words":[["Smog","смог"],["ogrzewania węglem","отопления углём"]]},
     {"who":"A","name":"Anna","side":"left","en":"Dobry kontrargument. Wpiszę go i od razu na niego odpowiem.","ru":"Хороший контраргумент. Впишу его и сразу на него отвечу.",
      "words":[["kontrargument","контраргумент"],["odpowiem","отвечу"]]},
     {"who":"M","name":"Marek","side":"right","en":"I co, sprzedajemy auto? Bo brzmi to jak plan, a nie jak wypracowanie.","ru":"И что, продаём машину? Потому что это звучит как план, а не как сочинение.",
      "words":[["sprzedajemy","продаём"],["wypracowanie","сочинение"]]},
     {"who":"A","name":"Anna","side":"left","en":"Podsumowując: auto zostaje, ale w mieście jeździmy tramwajem.","ru":"Подводя итог: машина остаётся, но по городу ездим на трамвае.",
      "words":[["Podsumowując","подводя итог"],["tramwajem","на трамвае"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — у мусорных баков во дворе. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Przepraszam, a kartony to niebieski czy zmieszane?","ru":"Извините, а картон — это синий или смешанные?"},
     {"who":"B","en":"Niebieski. Ale proszę je najpierw złożyć, bo zajmują cały pojemnik.","ru":"Синий. Но сложите их сначала, а то они занимают весь бак."},
     {"who":"A","en":"A słoiki z resztkami jedzenia?","ru":"А банки с остатками еды?"},
     {"who":"B","en":"Resztki do brązowego, słoik do zielonego. Wystarczy opłukać.","ru":"Остатки в коричневый, банку в зелёный. Достаточно ополоснуть."},
     {"who":"A","en":"Trzeci tydzień się uczę i chyba wreszcie mam to w małym palcu.","ru":"Третью неделю учусь и, кажется, наконец знаю это назубок."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — экология и скрепы рассуждения в одном списке.",
   "items":[
     {"en":"środowisko","ru":"окружающая среда","ex":"Dbamy o środowisko naturalne."},
     {"en":"zanieczyszczenie","ru":"загрязнение","ex":"Zanieczyszczenie powietrza rośnie zimą."},
     {"en":"zmiany klimatu","ru":"изменения климата","ex":"O zmianach klimatu mówi się codziennie."},
     {"en":"segregacja śmieci","ru":"раздельный сбор мусора","ex":"Segregacja śmieci jest obowiązkowa."},
     {"en":"tworzywa sztuczne","ru":"пластик","ex":"Tworzywa sztuczne idą do żółtego pojemnika."},
     {"en":"oszczędzać prąd","ru":"экономить электричество","ex":"Oszczędzamy prąd i wodę."},
     {"en":"transport publiczny","ru":"общественный транспорт","ex":"Jeżdżę transportem publicznym."},
     {"en":"rozprawka","ru":"сочинение-рассуждение","ex":"Na egzaminie napisałam rozprawkę."},
     {"en":"teza","ru":"тезис","ex":"Teza musi być w pierwszym zdaniu."},
     {"en":"warto zauważyć, że","ru":"стоит отметить, что","ex":"Warto zauważyć, że ceny rosną."},
     {"en":"nie da się ukryć, że","ru":"нельзя не признать, что","ex":"Nie da się ukryć, że to działa."},
     {"en":"wnioski","ru":"выводы","ex":"Na końcu piszemy wnioski."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к его переводу.",
   "pairs":[["środowisko","среда"],["teza","тезис"],["wnioski","выводы"],["szkło","стекло"]]
 },
 "reading":{
   "intro":"Прочитай и послушай готовую мини-rozprawkę. Все четыре блока на месте — тезис, аргументы за, контраргументы, вывод.",
   "title":"Czy samochód w mieście jest potrzebny?",
   "sentences":["Moim zdaniem samochód w dużym mieście nie jest dziś konieczny.","Przede wszystkim komunikacja miejska w Krakowie działa sprawnie.","Tramwaj do centrum przyjeżdża co pięć minut, a bilet miesięczny kosztuje mniej niż tydzień parkowania.","Warto zauważyć, że utrzymanie auta to nie tylko paliwo, ale też ubezpieczenie, przeglądy i naprawy.","Po drugie, mniej samochodów oznacza czystsze powietrze.","Nie da się ukryć, że zimą jakość powietrza w mieście bywa fatalna.","Z drugiej strony przeciwnicy tego poglądu twierdzą, że bez auta trudno jest rodzinom z małymi dziećmi.","Rzeczywiście, do lekarza z chorym dzieckiem nikt nie pojedzie tramwajem o szóstej rano.","Podobno w mniejszych miastach autobus jeździ dwa razy dziennie i wtedy samochód jest po prostu konieczny.","Da się jednak połączyć oba rozwiązania: auto na weekend za miasto, tramwaj na co dzień.","Można też korzystać z wypożyczalni samochodów wtedy, kiedy naprawdę trzeba.","Podsumowując: w centrum dużego miasta samochód jest wygodą, a nie koniecznością.","Skoro istnieje wybór, warto wybierać to, co tańsze dla nas i lepsze dla środowiska."],
   "translation":"По-моему, машина в большом городе сегодня не необходима. Прежде всего, общественный транспорт в Кракове работает исправно. Трамвай в центр приходит каждые пять минут, а месячный проездной стоит меньше, чем неделя парковки. Стоит отметить, что содержание машины — это не только бензин, но и страховка, техосмотры и ремонты. Во-вторых, меньше машин означает более чистый воздух. Нельзя не признать, что зимой качество воздуха в городе бывает ужасным. С другой стороны, противники этого мнения утверждают, что без машины трудно семьям с маленькими детьми. И правда, к врачу с больным ребёнком никто не поедет на трамвае в шесть утра. Говорят, в небольших городах автобус ходит два раза в день, и тогда машина просто необходима. Однако можно совместить оба решения: машина на выходные за город, трамвай на каждый день. Можно также пользоваться прокатом автомобилей тогда, когда это действительно нужно. Подводя итог: в центре большого города машина — это удобство, а не необходимость. Раз уж выбор существует, стоит выбирать то, что дешевле для нас и лучше для окружающей среды."
 },
 "quiz":{
   "intro":"Пять вопросов — и жанр рассуждения перестаёт быть страшным.",
   "items":[
     {"q":"1. «изменения климата» —","opts":["zmiany klimata","zmiany klimatu","zmiany klimacie"],"answer":1,
      "explain":"Родительный от klimat — <b>klimatu</b>."},
     {"q":"2. Стекло идёт в бак —","opts":["żółty","zielony","niebieski"],"answer":1,
      "explain":"Стекло — зелёный бак; жёлтый для пластика и металла, синий для бумаги."},
     {"q":"3. Какое предложение годится в тезис?","opts":["W tej pracy napiszę o samochodach","Moim zdaniem samochód w mieście nie jest konieczny","Samochody bywają różne"],"answer":1,
      "explain":"Тезис — это позиция, которую потом защищают."},
     {"q":"4. «Без машины жить можно» —","opts":["Nie daję się żyć bez samochodu","Da się żyć bez samochodu","Daje się żyć bez samochodu"],"answer":1,
      "explain":"Безличная неизменяемая форма <b>da się</b>."},
     {"q":"5. Порядок блоков rozprawki —","opts":["teza → argumenty za → argumenty przeciw → wnioski","wnioski → teza → argumenty","argumenty → teza → przykłady"],"answer":0,
      "explain":"Сначала позиция, потом «за», потом «против», в конце выводы."}
   ]
 },
 "essay":{
   "intro":"Твоя первая rozprawka. Тему бери любую спорную — важно, чтобы у неё были две стороны.",
   "prompt":"Напиши rozprawkę в 9–11 предложений на тему «Czy warto segregować śmieci?» или на свою: тезис, два аргумента «за» с примерами, один контраргумент, вывод. Обязательно вставь warto zauważyć, że, nie da się ukryć, że и podsumowując.",
   "hint":"Каркас: Moim zdaniem… · Przede wszystkim… · Warto zauważyć, że… · Nie da się ukryć, że… · Z drugiej strony przeciwnicy twierdzą, że… · Podsumowując… 📐",
   "example":"Moim zdaniem segregowanie śmieci ma sens, nawet jeśli jedna rodzina niewiele zmienia. Przede wszystkim szkło i papier da się przetworzyć wiele razy, a to oznacza mniej surowców z natury. Warto zauważyć, że w moim bloku po roku segregacji pojemnik na odpady zmieszane jest dwa razy mniejszy. Po drugie, segregacja uczy patrzeć na to, co kupujemy. Odkąd wyrzucam plastik osobno, widzę, ile go przynoszę do domu. Nie da się ukryć, że system bywa niejasny, bo nikt nie wie, do którego pojemnika wrzucić karton po mleku. Z drugiej strony przeciwnicy twierdzą, że i tak wszystko trafia do jednego samochodu. Rzeczywiście, kiedyś tak bywało, ale dziś odbiór jest osobny i można to sprawdzić. Podsumowując: segregacja kosztuje pięć minut dziennie i jest najtańszą rzeczą, jaką da się zrobić dla środowiska."
 }
},
"26": {
 "day":26,"week":"04",
 "themeRu":"Идиомы и ложные друзья",
 "themeEn":"Frazeologia i fałszywi przyjaciele",
 "intro":"Двенадцать выражений, которые нельзя перевести по словам, и девять слов, которые словарь в голове переводит сам — и почти всегда неправильно. Сегодня день, после которого польская речь перестаёт быть «правильной, но плоской». Одно предупреждение: глосса идиомы — это её <b>смысл</b>, а не подстрочник. Буквальную картинку я тоже покажу, но запоминать надо смысл.",
 "introAudio":"Двенадцать выражений, которые нельзя перевести по словам, и девять слов, которые словарь в голове переводит сам — и почти всегда неправильно. Сегодня день, после которого польская речь перестаёт быть правильной, но плоской. Одно предупреждение: глосса идиомы — это её смысл, а не подстрочник. Буквальную картинку я тоже покажу, но запоминать надо смысл.",
 "goals":[
   "Понимать двенадцать частотных идиом: <b>bułka z masłem, robić z igły widły</b>",
   "Вставлять их к месту: <b>mieć coś w małym palcu, spać jak suseł</b>",
   "Не попадаться на ложных друзей: <b>zawód, pensja, uroda, zakaz</b>",
   "Чувствовать регистр идиомы: где можно, а где не стоит"
 ],
 "learned":[
   "Понял(а) двенадцать частотных идиом: bułka z masłem, robić z igły widły",
   "Вставил(а) их к месту: mieć coś w małym palcu, spać jak suseł",
   "Перестал(а) попадаться на ложных друзей: zawód, pensja, uroda, zakaz",
   "Почувствовал(а) регистр идиомы: где можно, а где не стоит"
 ],
 "review":{
   "intro":"Вчерашняя rozprawka — на разминку. Тезис, безличная форма, скрепа и один цвет бака.",
   "introAudio":"Вчерашняя rozprawka — на разминку. Тезис, безличная форма, скрепа и один цвет бака.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, что такое тезис.",
      "q":"Какое предложение годится в тезис rozprawki?","opts":["Napiszę o segregacji śmieci","Moim zdaniem segregacja śmieci ma sens","Segregacja bywa różna"],"answer":1,
      "explain":"Тезис — это позиция, а не анонс темы."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни безличный оборот.",
      "q":"«Нельзя не признать, что это работает» —","opts":["Nie daję się ukryć, że to działa","Nie da się ukryć, że to działa","Nie dawało ukryć, że to działa"],"answer":1,
      "explain":"Безличная неизменяемая форма: <b>nie da się</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни цвета баков.",
      "q":"Бумага идёт в бак —","opts":["zielony","niebieski","brązowy"],"answer":1,
      "explain":"Бумага — <b>niebieski</b>. Зелёный для стекла, коричневый для органики."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Стоит отметить, что цены растут»</b>","answer":"Warto zauważyć że ceny rosną"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Шесть идиом о трудном и лёгком",
    "title":"<em>Bułka z masłem</em>, <em>robić z igły widły</em>",
    "paras":[
      "<b>Bułka z masłem</b> — «проще простого». Картинка внутри — булка с маслом, самая простая еда, какую можно вообразить. <b>Ten egzamin to była bułka z masłem.</b> Ставится как существительное: что-то <b>jest bułką z masłem</b> или <b>to bułka z masłem</b>.",
      "<b>Mieć coś w małym palcu</b> — знать что-то в совершенстве, как свои пять пальцев. Русский считает все пять, поляк обходится мизинцем. <b>Marek ma tę dzielnicę w małym palcu.</b> Мы уже встречали её в день 23 — теперь она на своём месте.",
      "<b>Łamać sobie głowę nad czymś</b> — ломать голову, мучиться над задачей: двойник русского, слово в слово. <b>Trzeci dzień łamię sobie głowę nad tym zdaniem.</b> А <b>rzucać grochem o ścianę</b> — говорить впустую, без всякого толку; наш эквивалент «как об стенку горох» держит тот же горох.",
      "И две про преувеличение. <b>Robić z igły widły</b> — раздувать из мелочи катастрофу; у нас из мухи делают слона, у поляков из иголки — вилы. <b>Burza w szklance wody</b> — много шума из ничего; тут совпадение полное."
    ],
    "audio":"Bułka z masłem — проще простого. Картинка внутри: булка с маслом, самая простая еда, какую можно вообразить. Ten egzamin to była bułka z masłem. Mieć coś w małym palcu — знать что-то в совершенстве. Русский считает все пять пальцев, поляк обходится мизинцем. Marek ma tę dzielnicę w małym palcu. Łamać sobie głowę nad czymś — ломать голову, двойник русского слово в слово. A rzucać grochem o ścianę — говорить впустую, без толку; наш эквивалент как об стенку горох держит тот же горох. И две про преувеличение. Robić z igły widły — раздувать из мелочи катастрофу; у нас из мухи делают слона, у поляков из иголки вилы. Burza w szklance wody — много шума из ничего.",
    "table":{"rows":[
      ["<b>bułka z masłem</b> <button class=\"play\" data-say=\"bułka z masłem\">🔊</button>","проще простого"],
      ["<b>mieć coś w małym palcu</b> <button class=\"play\" data-say=\"mieć coś w małym palcu\">🔊</button>","знать в совершенстве"],
      ["<b>łamać sobie głowę</b> <button class=\"play\" data-say=\"łamać sobie głowę\">🔊</button>","мучиться над задачей"],
      ["<b>rzucać grochem o ścianę</b> <button class=\"play\" data-say=\"rzucać grochem o ścianę\">🔊</button>","говорить впустую"],
      ["<b>robić z igły widły</b> <button class=\"play\" data-say=\"robić z igły widły\">🔊</button>","раздувать из мелочи катастрофу"],
      ["<b>burza w szklance wody</b> <button class=\"play\" data-say=\"burza w szklance wody\">🔊</button>","много шума из ничего"]
    ],"star":0},
    "examples":[
      {"ru":"Этот экзамен оказался проще простого.","en":"Ten egzamin to była <b>bułka z masłem</b>.","say":"Ten egzamin to była bułka z masłem."},
      {"ru":"Он знает этот район в совершенстве.","en":"On <b>ma</b> tę dzielnicę <b>w małym palcu</b>.","say":"On ma tę dzielnicę w małym palcu."},
      {"ru":"Третий день мучаюсь над этой фразой.","en":"Trzeci dzień <b>łamię sobie głowę</b> nad tym zdaniem.","say":"Trzeci dzień łamię sobie głowę nad tym zdaniem."},
      {"ru":"Не раздувай из мелочи катастрофу, там одна царапина.","en":"Nie <b>rób z igły wideł</b>, tam jest jedna rysa.","gloss":"в отрицании — родительный: wideł","say":"Nie rób z igły wideł, tam jest jedna rysa."}
    ],
    "mistakes":[
      {"wrong":"To był bardzo bułka z masłem.","right":"To była <b>bułka z masłem</b>.","why":"это существительное, а не прилагательное: усилить его словом bardzo нельзя."},
      {"wrong":"Mam to w dużym palcu.","right":"Mam to <b>w małym palcu</b>.","why":"идиома закреплена целиком: только małym. Заменишь слово — смысл исчезнет."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> помни: глосса — это смысл.",
       "q":"<b>Robić z igły widły</b> значит —","opts":["раздувать из мелочи катастрофу","делать вилы из иголки","чинить что-то на скорую руку"],"answer":0,
       "explain":"Смысл — преувеличивать. Русский двойник: делать из мухи слона."},
      {"type":"choice","q":"«Экзамен был проще простого» —",
       "opts":["Egzamin to była bułka z masłem","Egzamin to był chleb z masłem","Egzamin to była burza w szklance wody"],"answer":0,
       "explain":"«Проще простого» — <b>bułka z masłem</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши три слова.",
       "q":"«проще простого» по-польски","accept":["bułka z masłem","bulka z maslem"],"placeholder":"bułka …"}
    ],
    "mnemonic":"🥐 bułka — легко · mały palec — мастерски · igła i widły — преувеличение · groch o ścianę — впустую."
   },
   {
    "eyebrow":"Правило 2 · Шесть идиом о людях и делах",
    "title":"<em>Dwie lewe ręce</em>, <em>nie mój cyrk</em>",
    "paras":[
      "<b>Mieć dwie lewe ręce</b> — быть неумехой, руки не из того места. Про человека, у которого ничего не получается руками: <b>Nie proś go o remont, ma dwie lewe ręce.</b> <b>Piąte koło u wozu</b> — лишний, ненужный в компании; у нас пятое колесо в телеге, у них ровно оно же.",
      "<b>Spać jak suseł</b> — спать беспробудно, крепко. <b>Suseł</b> — суслик, и он в этой идиоме делает то же, что русский сурок. <b>Po tym remoncie spałam jak suseł.</b>",
      "<b>Nie mój cyrk, nie moje małpy</b> — «не моя забота, разбирайтесь сами». Выражение живое, очень частое и <b>разговорное</b>: в письме в учреждение ему не место. <b>Co ma piernik do wiatraka?</b> — «при чём тут это вообще?», когда собеседник соединил несоединимое.",
      "И одна, которую ты уже знаешь с B1: <b>trzymać kciuki</b> — желать удачи, болеть за кого-то. <b>Trzymam za ciebie kciuki.</b> Русские в этом месте держат кулачки, поляки — большие пальцы, и жест действительно другой."
    ],
    "audio":"Mieć dwie lewe ręce — быть неумехой, руки не из того места. Nie proś go o remont, ma dwie lewe ręce. Piąte koło u wozu — лишний, ненужный в компании. Spać jak suseł — спать беспробудно. Suseł это суслик, и он в этой идиоме делает то же, что русский сурок. Nie mój cyrk, nie moje małpy — не моя забота, разбирайтесь сами. Выражение живое, очень частое и разговорное: в письме в учреждение ему не место. Co ma piernik do wiatraka — при чём тут это вообще, когда собеседник соединил несоединимое. И одна, которую ты уже знаешь с B1: trzymać kciuki — желать удачи. Русские держат кулачки, поляки большие пальцы, и жест действительно другой.",
    "table":{"rows":[
      ["<b>mieć dwie lewe ręce</b> <button class=\"play\" data-say=\"mieć dwie lewe ręce\">🔊</button>","быть неумехой"],
      ["<b>piąte koło u wozu</b> <button class=\"play\" data-say=\"piąte koło u wozu\">🔊</button>","лишний, ненужный"],
      ["<b>spać jak suseł</b> <button class=\"play\" data-say=\"spać jak suseł\">🔊</button>","спать беспробудно"],
      ["<b>nie mój cyrk, nie moje małpy</b> <button class=\"play\" data-say=\"nie mój cyrk, nie moje małpy\">🔊</button>","не моя забота · разговорное"],
      ["<b>Co ma piernik do wiatraka?</b> <button class=\"play\" data-say=\"Co ma piernik do wiatraka?\">🔊</button>","При чём тут это вообще?"],
      ["<b>trzymać kciuki</b> <button class=\"play\" data-say=\"trzymać kciuki\">🔊</button>","желать удачи"]
    ],"star":3},
    "examples":[
      {"ru":"Не проси его помогать с ремонтом — он совсем не умеет.","en":"Nie proś go o pomoc przy remoncie, <b>ma dwie lewe ręce</b>.","say":"Nie proś go o pomoc przy remoncie, ma dwie lewe ręce."},
      {"ru":"На этой встрече я чувствовала себя лишней.","en":"Na tym spotkaniu czułam się jak <b>piąte koło u wozu</b>.","say":"Na tym spotkaniu czułam się jak piąte koło u wozu."},
      {"ru":"После переезда я спала беспробудно двенадцать часов.","en":"Po przeprowadzce <b>spałam jak suseł</b> dwanaście godzin.","say":"Po przeprowadzce spałam jak suseł dwanaście godzin."},
      {"ru":"При чём тут вообще моя машина?","en":"Co <b>ma piernik do wiatraka</b>? Co ma do tego moje auto?","say":"Co ma piernik do wiatraka? Co ma do tego moje auto?"}
    ],
    "mistakes":[
      {"wrong":"Szanowni Państwo, nie mój cyrk, nie moje małpy.","right":"Szanowni Państwo, <b>sprawa nie leży w mojej kompetencji</b>.","why":"идиома разговорная. В официальном письме она звучит как хлопок дверью."},
      {"wrong":"Trzymam ci kciuki.","right":"<b>Trzymam za ciebie kciuki.</b>","why":"конструкция с za плюс винительный: держат пальцы за кого-то."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> помни: глосса — это смысл.",
       "q":"<b>Mieć dwie lewe ręce</b> значит —","opts":["быть левшой","быть неумехой","много работать руками"],"answer":1,
       "explain":"Смысл — «руки не из того места», человек не умеет делать руками."},
      {"type":"choice","howto":"<b>Что делать:</b> подумай о регистре.",
       "q":"Где НЕ стоит писать <b>nie mój cyrk, nie moje małpy</b>?","opts":["в сообщении другу","в письме в учреждение","в разговоре с коллегой за обедом"],"answer":1,
       "explain":"Это разговорное выражение — в официальном письме оно неуместно."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Держу за тебя кулачки»</b>","answer":"Trzymam za ciebie kciuki"}
    ],
    "mnemonic":"🐿️ dwie lewe ręce · piąte koło · suseł · cyrk i małpy · piernik i wiatrak · kciuki."
   },
   {
    "eyebrow":"Правило 3 · Ложные друзья, раунд первый",
    "title":"<em>Zawód, pensja, emerytura</em>",
    "paras":[
      "<b>Zawód</b> — это профессия, а не завод. <b>Jaki ma pan zawód?</b> — «кто вы по профессии». У слова есть и второе значение — разочарование (<b>sprawić komuś zawód</b>), но «завод» по-польски <b>fabryka</b> или <b>zakład</b>.",
      "Пара, на которой спотыкаются все: <b>pensja</b> — зарплата, а <b>emerytura</b> — пенсия. Мы её задели в день 22, но повторить стоит: <b>Dostałam pensję piętnastego</b> — это про зарплату, а <b>Przeszedł na emeryturę</b> — про выход на пенсию.",
      "<b>Nagły</b> — внезапный, резкий, а вовсе не «наглый». <b>Nagły wypadek</b> — экстренный случай, <b>nagła zmiana pogody</b> — резкая перемена погоды. Наглого человека поляк назовёт <b>bezczelny</b>.",
      "<b>Grzeczny</b> — вежливый и послушный, а не «грешный». <b>Grzeczne dziecko</b> — воспитанный ребёнок, <b>Bądź grzeczny.</b> — «веди себя хорошо». Грешный — <b>grzeszny</b>, и разница всего в одной букве, зато смысловая пропасть."
    ],
    "audio":"Zawód — это профессия, а не завод. Jaki ma pan zawód — кто вы по профессии. У слова есть и второе значение, разочарование, но завод по-польски fabryka или zakład. Пара, на которой спотыкаются все: pensja — зарплата, а emerytura — пенсия. Dostałam pensję piętnastego — это про зарплату, a przeszedł na emeryturę — про выход на пенсию. Nagły — внезапный, резкий, а вовсе не наглый. Nagły wypadek — экстренный случай, nagła zmiana pogody — резкая перемена погоды. Наглого человека поляк назовёт bezczelny. Grzeczny — вежливый и послушный, а не грешный. Grzeczne dziecko — воспитанный ребёнок. Грешный будет grzeszny, и разница всего в одной букве.",
    "table":{"rows":[
      ["<b>zawód</b> <button class=\"play\" data-say=\"zawód\">🔊</button>","профессия · завод — fabryka"],
      ["<b>pensja</b> <button class=\"play\" data-say=\"pensja\">🔊</button>","зарплата"],
      ["<b>emerytura</b> <button class=\"play\" data-say=\"emerytura\">🔊</button>","пенсия"],
      ["<b>nagły</b> <button class=\"play\" data-say=\"nagły\">🔊</button>","внезапный · наглый — bezczelny"],
      ["<b>grzeczny</b> <button class=\"play\" data-say=\"grzeczny\">🔊</button>","вежливый · грешный — grzeszny"],
      ["<b>Jaki ma pan zawód?</b> <button class=\"play\" data-say=\"Jaki ma pan zawód?\">🔊</button>","Кто вы по профессии?"]
    ],"star":1},
    "examples":[
      {"ru":"Кто вы по профессии? — Я переводчица.","en":"Jaki ma pani <b>zawód</b>? — Jestem tłumaczką.","say":"Jaki ma pani zawód? Jestem tłumaczką."},
      {"ru":"Зарплату у нас платят пятнадцатого.","en":"<b>Pensję</b> dostajemy piętnastego.","say":"Pensję dostajemy piętnastego."},
      {"ru":"Отец вышел на пенсию в прошлом году.","en":"Ojciec przeszedł na <b>emeryturę</b> w zeszłym roku.","say":"Ojciec przeszedł na emeryturę w zeszłym roku."},
      {"ru":"Это был экстренный случай, скорая приехала за десять минут.","en":"To był <b>nagły wypadek</b>, karetka przyjechała w dziesięć minut.","say":"To był nagły wypadek, karetka przyjechała w dziesięć minut."}
    ],
    "mistakes":[
      {"wrong":"Mój dziadek dostaje pensję, bo ma osiemdziesiąt lat.","right":"Mój dziadek dostaje <b>emeryturę</b>.","why":"pensja — зарплата за работу. Пенсия по возрасту — emerytura."},
      {"wrong":"Pracuję w zawodzie samochodowym.","right":"Pracuję w <b>fabryce</b> samochodów.","why":"zawód — профессия. Завод как предприятие — fabryka или zakład."}
    ],
    "tasks":[
      {"type":"choice","q":"<b>Zawód</b> — это —",
       "opts":["завод","профессия","заказ"],"answer":1,
       "explain":"<b>Zawód</b> — профессия. Завод — fabryka."},
      {"type":"choice","q":"<b>Nagły wypadek</b> — это —",
       "opts":["наглый поступок","экстренный случай","несчастный случай на дороге"],"answer":1,
       "explain":"<b>Nagły</b> — внезапный, поэтому nagły wypadek — экстренный случай."},
      {"type":"type","howto":"<b>Что делать:</b> напиши одно слово.",
       "q":"«пенсия» по-польски","accept":["emerytura","emeryturę","emeryture"],"placeholder":"emer…"}
    ],
    "mnemonic":"🎭 zawód — профессия · pensja — зарплата · emerytura — пенсия · nagły — внезапный · grzeczny — вежливый."
   },
   {
    "eyebrow":"Правило 4 · Ложные друзья, раунд второй",
    "title":"<em>Uroda, dywan, zakaz, korzystny</em>",
    "paras":[
      "<b>Uroda</b> — красота, внешность. <b>Kobieta o niezwykłej urodzie</b> — женщина необыкновенной красоты. Никакого уродства: уродливый по-польски <b>brzydki</b>. <b>Dywan</b> — ковёр, а не диван; диван будет <b>kanapa</b> или <b>sofa</b>.",
      "<b>Zakaz</b> — запрет: <b>zakaz palenia</b> (курить запрещено), <b>zakaz wjazdu</b>. Заказ — это <b>zamówienie</b>, а глагол — <b>zamówić</b>: <b>Zamówiłam stolik na ósmą.</b> Одна из тех пар, где ошибка меняет смысл вывески на противоположный.",
      "<b>Korzystny</b> — выгодный, благоприятный: <b>korzystna oferta</b>, <b>korzystny kurs walut</b>. Корыстный человек по-польски <b>interesowny</b> — и это, наоборот, слово с минусом. А <b>korzystać z</b> плюс родительный, из дня 11, значит «пользоваться».",
      "И три старых знакомых, которые всё ещё ловят: <b>sklep</b> — магазин (склеп — <b>krypta</b>), <b>dworzec</b> — вокзал (дворец — <b>pałac</b>), <b>owoce</b> — фрукты (овощи — <b>warzywa</b>). Правило выживания одно: если польское слово кажется подозрительно родным, а смысл «почти подходит», — проверь. Именно «почти» и есть ловушка."
    ],
    "audio":"Uroda — красота, внешность. Kobieta o niezwykłej urodzie — женщина необыкновенной красоты. Никакого уродства: уродливый по-польски brzydki. Dywan — ковёр, а не диван; диван будет kanapa или sofa. Zakaz — запрет: zakaz palenia, zakaz wjazdu. Заказ — это zamówienie, а глагол zamówić: zamówiłam stolik na ósmą. Korzystny — выгодный, благоприятный: korzystna oferta, korzystny kurs walut. Корыстный человек по-польски interesowny. И три старых знакомых, которые всё ещё ловят: sklep — магазин, dworzec — вокзал, owoce — фрукты. Правило выживания одно: если польское слово кажется подозрительно родным, а смысл почти подходит, проверь. Именно почти и есть ловушка.",
    "table":{"rows":[
      ["<b>uroda</b> <button class=\"play\" data-say=\"uroda\">🔊</button>","красота · уродливый — brzydki"],
      ["<b>dywan</b> <button class=\"play\" data-say=\"dywan\">🔊</button>","ковёр · диван — kanapa"],
      ["<b>zakaz</b> <button class=\"play\" data-say=\"zakaz palenia\">🔊</button>","запрет · заказ — zamówienie"],
      ["<b>korzystny</b> <button class=\"play\" data-say=\"korzystna oferta\">🔊</button>","выгодный · корыстный — interesowny"],
      ["<b>dworzec</b> <button class=\"play\" data-say=\"dworzec\">🔊</button>","вокзал · дворец — pałac"],
      ["<b>owoce</b> <button class=\"play\" data-say=\"owoce, warzywa\">🔊</button>","фрукты · овощи — warzywa"]
    ],"star":2},
    "examples":[
      {"ru":"Я заказала столик на восемь.","en":"<b>Zamówiłam</b> stolik na ósmą.","say":"Zamówiłam stolik na ósmą."},
      {"ru":"Здесь курить запрещено.","en":"Tu obowiązuje <b>zakaz palenia</b>.","say":"Tu obowiązuje zakaz palenia."},
      {"ru":"Это очень выгодное предложение.","en":"To bardzo <b>korzystna oferta</b>.","say":"To bardzo korzystna oferta."},
      {"ru":"Ковёр мы отдали в чистку, а диван оставили.","en":"<b>Dywan</b> oddaliśmy do pralni, a <b>kanapę</b> zostawiliśmy.","say":"Dywan oddaliśmy do pralni, a kanapę zostawiliśmy."}
    ],
    "mistakes":[
      {"wrong":"Zrobiłam zakaz na stolik.","right":"<b>Zamówiłam</b> stolik.","why":"zakaz — это запрет. Заказ — zamówienie, заказать — zamówić."},
      {"wrong":"Usiądź na dywanie, tam wygodniej.","right":"Usiądź na <b>kanapie</b>.","why":"dywan лежит на полу — это ковёр. Диван — kanapa или sofa."}
    ],
    "tasks":[
      {"type":"choice","q":"<b>Zakaz palenia</b> значит —",
       "opts":["заказ на курение","запрет курения","место для курения"],"answer":1,
       "explain":"<b>Zakaz</b> — запрет. Заказ — zamówienie."},
      {"type":"choice","q":"<b>Dywan</b> — это —",
       "opts":["диван","ковёр","занавеска"],"answer":1,
       "explain":"<b>Dywan</b> — ковёр. Диван — kanapa или sofa."},
      {"type":"speak","howto":"Нажми микрофон и скажи это вслух — с идиомой внутри.",
       "target":"Nie rób z igły wideł, ten formularz to bułka z masłem.","sub":"не раздувай из мелочи катастрофу, этот бланк проще простого","want":"Nie rób z igły wideł, ten formularz to bułka z masłem."}
    ],
    "mnemonic":"🚫 uroda — красота · dywan — ковёр · zakaz — запрет · korzystny — выгодный. «Почти как в русском» — уже подозрительно."
   }
 ],
 "dialogue":{
   "intro":"Кася после собеседования звонит Анне. Разговор обычный, но идиом в нём столько, что хватит на весь день.",
   "lines":[
     {"who":"K","name":"Kasia","side":"right","en":"No i po wszystkim. Rozmowa była bułką z masłem.","ru":"Ну вот и всё. Собеседование оказалось проще простого.",
      "words":[["po wszystkim","всё позади"],["bułką z masłem","проще простого"]]},
     {"who":"A","name":"Anna","side":"left","en":"A mówiłaś, że przez tydzień łamałaś sobie głowę nad pytaniami.","ru":"А говорила, что неделю ломала голову над вопросами.",
      "words":[["łamałaś sobie głowę","ломала голову"],["nad pytaniami","над вопросами"]]},
     {"who":"K","name":"Kasia","side":"right","en":"Bo robiłam z igły widły. Pytali o rzeczy, które mam w małym palcu.","ru":"Потому что раздувала из мелочи катастрофу. Спрашивали то, что я знаю назубок.",
      "words":[["robiłam z igły widły","раздувала из мелочи"],["w małym palcu","назубок"]]},
     {"who":"A","name":"Anna","side":"left","en":"A jaki mają zespół? Nie czułaś się jak piąte koło u wozu?","ru":"А какая у них команда? Ты не чувствовала себя лишней?",
      "words":[["zespół","команда"],["piąte koło u wozu","лишняя"]]},
     {"who":"K","name":"Kasia","side":"right","en":"Wręcz przeciwnie. Pytali nawet o mój poprzedni zawód.","ru":"Наоборот. Спрашивали даже о моей прежней профессии.",
      "words":[["Wręcz przeciwnie","наоборот"],["zawód","профессия"]]},
     {"who":"A","name":"Anna","side":"left","en":"A o pensję? Bo o pieniądzach trzeba pytać wprost.","ru":"А о зарплате? О деньгах надо спрашивать прямо.",
      "words":[["pensję","зарплату"],["wprost","прямо"]]},
     {"who":"K","name":"Kasia","side":"right","en":"Sami powiedzieli. Oferta jest naprawdę korzystna, umowa na rok.","ru":"Сами сказали. Предложение действительно выгодное, договор на год.",
      "words":[["korzystna","выгодное"],["umowa na rok","договор на год"]]},
     {"who":"A","name":"Anna","side":"left","en":"To co teraz? Czekasz na telefon czy piszesz do nich sama?","ru":"И что теперь? Ждёшь звонка или пишешь им сама?",
      "words":[["Czekasz na telefon","ждёшь звонка"],["sama","сама"]]},
     {"who":"K","name":"Kasia","side":"right","en":"Czekam. Wczoraj spałam jak suseł pierwszy raz od miesiąca.","ru":"Жду. Вчера впервые за месяц спала беспробудно.",
      "words":[["spałam jak suseł","спала беспробудно"],["od miesiąca","за месяц"]]},
     {"who":"A","name":"Anna","side":"left","en":"Trzymam za ciebie kciuki. A resztą się nie przejmuj — nie twój cyrk.","ru":"Держу за тебя кулачки. А об остальном не переживай — не твоя забота.",
      "words":[["Trzymam kciuki","держу кулачки"],["nie przejmuj się","не переживай"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — двое в офисной кухне. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Szef mówi, że raport musi być na jutro. Trzeci raz to samo.","ru":"Шеф говорит, что отчёт должен быть на завтра. Третий раз одно и то же."},
     {"who":"B","en":"Tłumaczyłem mu, że to niemożliwe. Rzucanie grochem o ścianę.","ru":"Я объяснял ему, что это невозможно. Как об стенку горох."},
     {"who":"A","en":"A co ma piernik do wiatraka? Przecież raport robi dział finansów.","ru":"А при чём тут вообще это? Отчёт же делает финансовый отдел."},
     {"who":"B","en":"No właśnie. Nie mój cyrk, nie moje małpy.","ru":"Вот именно. Не мой цирк, не мои обезьяны."},
     {"who":"A","en":"Burza w szklance wody. Jutro nikt o tym nie będzie pamiętał.","ru":"Буря в стакане воды. Завтра об этом никто не вспомнит."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать единиц дня: шесть идиом и шесть слов, которые притворяются знакомыми.",
   "items":[
     {"en":"bułka z masłem","ru":"проще простого","ex":"Ten test to była bułka z masłem."},
     {"en":"robić z igły widły","ru":"раздувать из мелочи катастрофу","ex":"Nie rób z igły wideł."},
     {"en":"rzucać grochem o ścianę","ru":"говорить впустую","ex":"Tłumaczę mu to jak grochem o ścianę."},
     {"en":"mieć dwie lewe ręce","ru":"быть неумехой","ex":"Do remontu mam dwie lewe ręce."},
     {"en":"piąte koło u wozu","ru":"лишний, ненужный","ex":"Czułam się jak piąte koło u wozu."},
     {"en":"spać jak suseł","ru":"спать беспробудно","ex":"Spałem jak suseł do południa."},
     {"en":"nie mój cyrk, nie moje małpy","ru":"не моя забота — разговорное","ex":"Nie mój cyrk, nie moje małpy."},
     {"en":"zawód","ru":"профессия","ex":"Jaki ma pani zawód?"},
     {"en":"emerytura","ru":"пенсия","ex":"Przeszedł na emeryturę."},
     {"en":"uroda","ru":"красота, внешность","ex":"Kobieta o niezwykłej urodzie."},
     {"en":"zakaz","ru":"запрет","ex":"Tu obowiązuje zakaz palenia."},
     {"en":"korzystny","ru":"выгодный","ex":"To bardzo korzystna oferta."}
   ]
 },
 "drag":{
   "intro":"Перетащи выражение к его смыслу. Не к дословному переводу — к смыслу.",
   "pairs":[["bułka z masłem","проще простого"],["spać jak suseł","спать беспробудно"],["zawód","профессия"],["dywan","ковёр"]]
 },
 "reading":{
   "intro":"Прочитай и послушай рассказ Каси о неделе перед собеседованием. Идиом в нём столько, сколько бывает в живой речи, — то есть довольно много.",
   "title":"Tydzień przed rozmową",
   "sentences":["Tydzień przed rozmową kwalifikacyjną łamałam sobie głowę nad każdym zdaniem w CV.","Anna czytała to trzy razy i za każdym razem mówiła, że robię z igły widły.","Miała rację: pytania, których się bałam, okazały się bułką z masłem.","Najgorsze było czekanie, bo w czekaniu człowiek zawsze wymyśli sobie katastrofę.","Mój brat, który ma dwie lewe ręce do wszystkiego oprócz komputerów, poprawiał mi formatowanie.","Mama powtarzała, żebym się nie denerwowała, ale to było jak rzucanie grochem o ścianę.","W nocy przed rozmową spałam jak suseł, i to mnie samą zaskoczyło.","W firmie zapytali o mój poprzedni zawód i o to, dlaczego chcę go zmienić.","Powiedziałam prawdę: pensja była dobra, ale czułam się tam jak piąte koło u wozu.","Ktoś z komisji zapytał nagle o moje zainteresowania, a ja pomyślałam: co ma piernik do wiatraka?","Okazało się, że to zwykłe pytanie o to, czy umiem opowiadać o sobie.","Oferta jest korzystna: umowa na rok, potem na czas nieokreślony.","Cała ta panika była burzą w szklance wody, ale wiem, że przed następną rozmową będzie tak samo.","Anna trzymała za mnie kciuki przez cały czwartek i twierdzi, że to właśnie zadziałało."],
   "translation":"За неделю до собеседования я ломала голову над каждым предложением в резюме. Анна читала его три раза и каждый раз говорила, что я раздуваю из мелочи катастрофу. Она была права: вопросы, которых я боялась, оказались проще простого. Хуже всего было ожидание, потому что в ожидании человек всегда придумает себе катастрофу. Мой брат, у которого руки не из того места во всём, кроме компьютеров, поправил мне форматирование. Мама повторяла, чтобы я не нервничала, но это было как об стенку горох. В ночь перед собеседованием я спала беспробудно, и это меня саму удивило. В фирме спросили о моей прежней профессии и о том, почему я хочу её сменить. Я сказала правду: зарплата была хорошая, но я чувствовала себя там лишней. Кто-то из комиссии вдруг спросил о моих увлечениях, а я подумала: при чём тут это вообще? Оказалось, что это обычный вопрос о том, умею ли я рассказывать о себе. Предложение выгодное: договор на год, потом бессрочный. Вся эта паника была бурей в стакане воды, но я знаю, что перед следующим собеседованием будет так же. Анна держала за меня кулачки весь четверг и утверждает, что именно это и сработало."
 },
 "quiz":{
   "intro":"Пять вопросов — и двенадцать идиом становятся твоими.",
   "items":[
     {"q":"1. <b>Bułka z masłem</b> значит —","opts":["вкусный завтрак","проще простого","мелочь, о которой не жалко"],"answer":1,
      "explain":"Идиома значит «проще простого»."},
     {"q":"2. <b>Rzucać grochem o ścianę</b> значит —","opts":["говорить впустую","ссориться из-за пустяка","делать что-то быстро"],"answer":0,
      "explain":"Русский двойник — «как об стенку горох»: слова не доходят."},
     {"q":"3. <b>Zawód</b> — это —","opts":["завод","профессия","заказ"],"answer":1,
      "explain":"<b>Zawód</b> — профессия. Завод — fabryka."},
     {"q":"4. <b>Zakaz</b> — это —","opts":["заказ","запрет","закат"],"answer":1,
      "explain":"<b>Zakaz</b> — запрет. Заказ — zamówienie."},
     {"q":"5. Где НЕ стоит писать <b>nie mój cyrk, nie moje małpy</b>?","opts":["в сообщении подруге","в письме в urząd","в разговоре с коллегой"],"answer":1,
      "explain":"Выражение разговорное — в официальном письме оно неуместно."}
   ]
 },
 "essay":{
   "intro":"Теперь идиомы в деле. Не старайся вставить все двенадцать — трёх на текст более чем достаточно.",
   "prompt":"Напиши текст в 7–9 предложений о неделе, когда ты чего-то ждал(а) или к чему-то готовился(ась). Вставь минимум три идиомы дня и одно слово из списка ложных друзей — так, чтобы оно стояло в правильном значении.",
   "hint":"Каркас: Tydzień przed… · Łamałem/łamałam sobie głowę nad… · Okazało się, że to bułka z masłem · Spałem/spałam jak suseł · Podsumowując… 🥐",
   "example":"Tydzień przed egzaminem łamałem sobie głowę nad każdym ćwiczeniem z gramatyki. Żona powtarzała, żebym się nie denerwował, ale to było rzucanie grochem o ścianę. Robiłem z igły widły: bałem się części ustnej, a przecież rozmawiam po polsku codziennie w pracy. W nocy przed egzaminem, ku mojemu zdziwieniu, spałem jak suseł. Rano okazało się, że pierwsze zadanie to była bułka z masłem. Trudniejsze było pisanie, bo miałem napisać list oficjalny w czterdzieści minut. Koledzy z pracy trzymali za mnie kciuki i pytali potem o wynik. Powiedziałem, że wynik będzie za miesiąc, a mój zawód i tak się nie zmieni. Podsumowując: cała panika była burzą w szklance wody."
 }
},
"27": {
 "day":27,"week":"04",
 "themeRu":"Рецензия",
 "themeEn":"Recenzja",
 "intro":"Из зала Анна и Марек вышли молча — и молчали ровно до эскалатора, потому что дальше выяснилось, что они смотрели два разных фильма. Сегодня четвёртый и последний жанр недели: <b>recenzja</b>. У неё, как и у <b>rozprawki</b>, есть каркас, и внутри него можно спорить сколько угодно.",
 "introAudio":"Из зала Анна и Марек вышли молча — и молчали ровно до эскалатора, потому что дальше выяснилось, что они смотрели два разных фильма. Сегодня четвёртый и последний жанр недели: recenzja. У неё, как и у rozprawki, есть каркас, и внутри него можно спорить сколько угодно.",
 "goals":[
   "Называть части фильма: <b>fabuła, bohater, wątek, obsada, zwrot akcji</b>",
   "Оценивать: <b>wciągający, poruszający, przewidywalny, przereklamowany</b>",
   "Собрать рецензию: <b>Film opowiada o… Największą zaletą… Polecam, ponieważ…</b>",
   "Спорить о вкусах: <b>Wręcz przeciwnie… To kwestia gustu</b>"
 ],
 "learned":[
   "Назвал(а) части фильма: fabuła, bohater, wątek, obsada, zwrot akcji",
   "Оценил(а): wciągający, poruszający, przewidywalny, przereklamowany",
   "Собрал(а) рецензию: Film opowiada o… Największą zaletą… Polecam, ponieważ…",
   "Поспорил(а) о вкусах: Wręcz przeciwnie… To kwestia gustu"
 ],
 "review":{
   "intro":"Вчерашние идиомы — на разминку. Три смысла и один ложный друг, который всё ещё пытается притвориться своим.",
   "introAudio":"Вчерашние идиомы — на разминку. Три смысла и один ложный друг, который всё ещё пытается притвориться своим.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> помни: глосса — это смысл.",
      "q":"<b>Robić z igły widły</b> значит —","opts":["раздувать из мелочи катастрофу","чинить на скорую руку","работать без отдыха"],"answer":0,
      "explain":"Смысл — преувеличивать. Русский двойник: делать из мухи слона."},
     {"type":"choice","q":"<b>Mieć coś w małym palcu</b> значит —",
      "opts":["чуть-чуть разбираться","знать в совершенстве","держать при себе"],"answer":1,
      "explain":"Идиома про полное владение: знать как свои пять пальцев."},
     {"type":"choice","q":"<b>Uroda</b> — это —",
      "opts":["уродство","красота, внешность","урожай"],"answer":1,
      "explain":"<b>Uroda</b> — красота. Уродливый — brzydki."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Это очень выгодное предложение»</b>","answer":"To bardzo korzystna oferta"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Из чего сделан фильм",
    "title":"<em>Fabuła, bohater, wątek, obsada</em>",
    "paras":[
      "<b>Fabuła</b> — сюжет, то, что происходит. <b>Akcja</b> — действие: <b>Akcja rozgrywa się w Krakowie w latach dziewięćdziesiątych.</b> <b>Wątek</b> — сюжетная линия, их в фильме обычно несколько: <b>wątek miłosny</b>, <b>wątek kryminalny</b>.",
      "Люди: <b>bohater</b> и <b>bohaterka</b> — герой и героиня (а ещё и «главное действующее лицо», без всякого героизма), <b>reżyser</b> — режиссёр, <b>obsada</b> — актёрский состав, <b>gra aktorska</b> — актёрская игра. Заметь: <b>obsada</b> — это все актёры вместе, одним словом.",
      "Что ещё оценивают: <b>scenariusz</b> (сценарий), <b>zdjęcia</b> (работа оператора — буквально «съёмки»), <b>ścieżka dźwiękowa</b> (саундтрек), <b>zwrot akcji</b> (поворот сюжета), <b>zakończenie</b> (концовка). И отдельно <b>ekranizacja</b> — экранизация книги.",
      "Польская особенность, о которой стоит знать: в кинотеатре фильмы идут <b>z napisami</b> (с субтитрами), а по телевизору часто <b>z lektorem</b> — одним голосом поверх оригинала. <b>Dubbing</b> в Польше делают в основном для детских фильмов."
    ],
    "audio":"Fabuła — сюжет, то, что происходит. Akcja — действие: akcja rozgrywa się w Krakowie w latach dziewięćdziesiątych. Wątek — сюжетная линия, их в фильме обычно несколько: wątek miłosny, wątek kryminalny. Люди: bohater и bohaterka — герой и героиня, reżyser — режиссёр, obsada — актёрский состав, gra aktorska — актёрская игра. Что ещё оценивают: scenariusz, zdjęcia — работа оператора, ścieżka dźwiękowa, zwrot akcji — поворот сюжета, zakończenie — концовка. И отдельно ekranizacja — экранизация книги. Польская особенность: в кинотеатре фильмы идут z napisami, с субтитрами, а по телевизору часто z lektorem — одним голосом поверх оригинала. Dubbing в Польше делают в основном для детских фильмов.",
    "table":{"rows":[
      ["<b>fabuła</b> · <b>akcja</b> <button class=\"play\" data-say=\"fabuła, akcja\">🔊</button>","сюжет · действие"],
      ["<b>bohater</b> · <b>bohaterka</b> <button class=\"play\" data-say=\"bohater, bohaterka\">🔊</button>","герой · героиня"],
      ["<b>wątek</b> <button class=\"play\" data-say=\"wątek miłosny\">🔊</button>","сюжетная линия"],
      ["<b>obsada</b> · <b>gra aktorska</b> <button class=\"play\" data-say=\"obsada, gra aktorska\">🔊</button>","актёрский состав · актёрская игра"],
      ["<b>zwrot akcji</b> · <b>zakończenie</b> <button class=\"play\" data-say=\"zwrot akcji, zakończenie\">🔊</button>","поворот сюжета · концовка"],
      ["<b>z napisami</b> / <b>z lektorem</b> <button class=\"play\" data-say=\"z napisami, z lektorem\">🔊</button>","с субтитрами / с закадровым голосом"]
    ],"star":2},
    "examples":[
      {"ru":"Действие происходит в Кракове в девяностые.","en":"<b>Akcja rozgrywa się</b> w Krakowie w latach dziewięćdziesiątych.","gloss":"годы — из дня 8","say":"Akcja rozgrywa się w Krakowie w latach dziewięćdziesiątych."},
      {"ru":"Главная героиня — переводчица из маленького города.","en":"Główna <b>bohaterka</b> to tłumaczka z małego miasta.","say":"Główna bohaterka to tłumaczka z małego miasta."},
      {"ru":"Актёрский состав отличный, а сценарий слабый.","en":"<b>Obsada</b> jest świetna, a <b>scenariusz</b> słaby.","say":"Obsada jest świetna, a scenariusz słaby."},
      {"ru":"Мы смотрели с субтитрами, потому что закадровый голос мешает.","en":"Oglądaliśmy <b>z napisami</b>, bo <b>lektor</b> przeszkadza.","say":"Oglądaliśmy z napisami, bo lektor przeszkadza."}
    ],
    "mistakes":[
      {"wrong":"Fabuła gra dobrze.","right":"<b>Obsada</b> gra dobrze.","why":"играют актёры, а fabuła — это сюжет, он не играет."},
      {"wrong":"Akcja odbywa się w Krakowie.","right":"Akcja <b>rozgrywa się</b> w Krakowie.","why":"устойчивое сочетание в рецензии — akcja rozgrywa się. Odbywać się берегут для событий: koncert się odbywa, spotkanie się odbywa."}
    ],
    "tasks":[
      {"type":"choice","q":"<b>Obsada</b> — это —",
       "opts":["сюжет","актёрский состав","концовка"],"answer":1,
       "explain":"<b>Obsada</b> — все актёры фильма вместе."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни устойчивое сочетание.",
       "q":"«Действие происходит в Кракове» —","opts":["Akcja rozgrywa się w Krakowie","Akcja robi się w Krakowie","Fabuła rozgrywa się Kraków"],"answer":0,
       "explain":"Устойчивое сочетание — <b>akcja rozgrywa się</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши одно слово.",
       "q":"«сюжет» по-польски","accept":["fabuła","fabula"],"placeholder":"fab…"}
    ],
    "mnemonic":"🎬 fabuła → wątki → bohaterowie → obsada → zwrot akcji → zakończenie. Из этого собран любой фильм."
   },
   {
    "eyebrow":"Правило 2 · Слова оценки",
    "title":"<em>Wciągający, przewidywalny, przereklamowany</em>",
    "paras":[
      "Хвалим: <b>wciągający</b> (затягивающий, от которого не оторваться), <b>poruszający</b> (трогающий, берущий за живое), <b>dopracowany</b> (сделанный тщательно), <b>trzymający w napięciu</b> (держащий в напряжении). Заметь суффикс: это причастия на <b>-ący</b> из B1, которые давно живут как обычные прилагательные.",
      "Ругаем: <b>przewidywalny</b> (предсказуемый), <b>płytki</b> (поверхностный, неглубокий), <b>sztuczny</b> (искусственный — про диалоги), <b>przereklamowany</b> (перехваленный). В последнем слове видна приставка <b>prze-</b> из дня 3 в значении «чрезмерно»: рекламы было больше, чем фильма.",
      "И идиома-бонус к вчерашнему дню: <b>nudny jak flaki z olejem</b> — смертельно скучный. Буквальная картинка там кулинарная и не очень аппетитная, но запоминать надо смысл: скучнее не бывает.",
      "Осторожно с одним словом: <b>ciekawy</b> значит и «интересный», и «любопытный» — <b>Jestem ciekawa, jak się to skończy.</b> В рецензии оно слабое: <b>ciekawy film</b> звучит как вежливое «ну, нормально». Хочешь похвалить — бери <b>wciągający</b> или <b>poruszający</b>."
    ],
    "audio":"Хвалим: wciągający — затягивающий, poruszający — трогающий, dopracowany — сделанный тщательно, trzymający w napięciu. Заметь суффикс: это причастия на -ący из B1, которые давно живут как обычные прилагательные. Ругаем: przewidywalny — предсказуемый, płytki — поверхностный, sztuczny — искусственный про диалоги, przereklamowany — перехваленный. В последнем слове видна приставка prze- из дня три в значении чрезмерно. И идиома-бонус к вчерашнему дню: nudny jak flaki z olejem — смертельно скучный. Осторожно с одним словом: ciekawy значит и интересный, и любопытный. В рецензии оно слабое: ciekawy film звучит как вежливое «ну, нормально». Хочешь похвалить — бери wciągający или poruszający.",
    "table":{"rows":[
      ["<b>wciągający</b> <button class=\"play\" data-say=\"wciągający\">🔊</button>","затягивающий, не оторваться"],
      ["<b>poruszający</b> <button class=\"play\" data-say=\"poruszający\">🔊</button>","трогающий за живое"],
      ["<b>trzymający w napięciu</b> <button class=\"play\" data-say=\"trzymający w napięciu\">🔊</button>","держащий в напряжении"],
      ["<b>przewidywalny</b> <button class=\"play\" data-say=\"przewidywalny\">🔊</button>","предсказуемый"],
      ["<b>przereklamowany</b> <button class=\"play\" data-say=\"przereklamowany\">🔊</button>","перехваленный"],
      ["<b>nudny jak flaki z olejem</b> <button class=\"play\" data-say=\"nudny jak flaki z olejem\">🔊</button>","смертельно скучный"]
    ],"star":4},
    "examples":[
      {"ru":"Первый час затягивает, а потом всё предсказуемо.","en":"Pierwsza godzina jest <b>wciągająca</b>, potem wszystko jest <b>przewidywalne</b>.","say":"Pierwsza godzina jest wciągająca, potem wszystko jest przewidywalne."},
      {"ru":"Это самый трогательный фильм, который я видела в этом году.","en":"To najbardziej <b>poruszający</b> film, jaki widziałam w tym roku.","say":"To najbardziej poruszający film, jaki widziałam w tym roku."},
      {"ru":"По-моему, фильм перехвален.","en":"Moim zdaniem film jest <b>przereklamowany</b>.","gloss":"приставка prze- — чрезмерность, день 3","say":"Moim zdaniem film jest przereklamowany."},
      {"ru":"Вторая половина скучна до невозможности.","en":"Druga połowa jest <b>nudna jak flaki z olejem</b>.","say":"Druga połowa jest nudna jak flaki z olejem."}
    ],
    "mistakes":[
      {"wrong":"Film był bardzo ciekawy, polecam gorąco.","right":"Film był <b>wciągający</b>, polecam gorąco.","why":"ciekawy — слабая похвала, почти «ну, ничего». Для рекомендации нужно слово сильнее."},
      {"wrong":"Ten film jest przereklamowy.","right":"Ten film jest <b>przereklamowany</b>.","why":"слово образовано от reklamować с приставкой prze-, поэтому оканчивается на -owany."}
    ],
    "tasks":[
      {"type":"choice","q":"<b>Przereklamowany</b> — это —",
       "opts":["хорошо разрекламированный","перехваленный","повторно показанный"],"answer":1,
       "explain":"Приставка prze- значит «чрезмерно»: шума больше, чем содержания."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери настоящую похвалу.",
       "q":"Какое слово хвалит фильм сильнее всего?","opts":["ciekawy","wciągający","przewidywalny"],"answer":1,
       "explain":"<b>Wciągający</b> — «не оторваться». Ciekawy слабее, przewidywalny — вообще минус."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«По-моему, фильм перехвален»</b>","answer":"Moim zdaniem film jest przereklamowany"}
    ],
    "mnemonic":"⭐ wciągający · poruszający — плюс. przewidywalny · przereklamowany — минус. prze- всегда «слишком»."
   },
   {
    "eyebrow":"Правило 3 · Каркас рецензии",
    "title":"<em>Film opowiada o… Polecam, ponieważ…</em>",
    "paras":[
      "Рецензия собирается из четырёх ходов. Первый — о чём вообще: <b>Film opowiada o młodej tłumaczce, która wraca do rodzinnego miasta.</b> Глагол <b>opowiadać o</b> идёт с предложным падежом — как русское «рассказывать о».",
      "Второй ход — достоинства: <b>Największą zaletą filmu jest gra aktorska.</b> <b>Mocną stroną są zdjęcia.</b> Третий — недостатки: <b>Słabą stroną jest scenariusz.</b> <b>Rozczarowuje zakończenie.</b> Оба хода строятся творительным падежом: <b>zaletą jest</b>, <b>stroną jest</b>.",
      "Четвёртый — вердикт, и он обязателен: <b>Polecam, ponieważ…</b> или <b>Nie polecam, ponieważ…</b> Заметь <b>ponieważ</b> — нейтральный союз причины из дня 17; разговорное <b>bo</b> в рецензии выглядит слишком по-домашнему.",
      "И одно правило приличия: <b>nie zdradzam zakończenia</b> — концовку не выдают. Рецензия рассказывает, стоит ли смотреть, а не что произойдёт. Пересказ сюжета до последней сцены — самая частая ошибка в этом жанре."
    ],
    "audio":"Рецензия собирается из четырёх ходов. Первый — о чём вообще: film opowiada o młodej tłumaczce, która wraca do rodzinnego miasta. Глагол opowiadać o идёт с предложным падежом, как русское рассказывать о. Второй ход — достоинства: największą zaletą filmu jest gra aktorska; mocną stroną są zdjęcia. Третий — недостатки: słabą stroną jest scenariusz; rozczarowuje zakończenie. Оба хода строятся творительным падежом. Четвёртый — вердикт, и он обязателен: polecam, ponieważ, или nie polecam, ponieważ. Заметь ponieważ — нейтральный союз причины из дня семнадцать; разговорное bo в рецензии выглядит слишком по-домашнему. И одно правило приличия: концовку не выдают. Рецензия рассказывает, стоит ли смотреть, а не что произойдёт.",
    "table":{"rows":[
      ["1. <b>Film opowiada o…</b> <button class=\"play\" data-say=\"Film opowiada o młodej tłumaczce\">🔊</button>","Фильм рассказывает о… — предл. падеж"],
      ["1а. <b>Akcja rozgrywa się w…</b> <button class=\"play\" data-say=\"Akcja rozgrywa się w Krakowie\">🔊</button>","Действие происходит в…"],
      ["2. <b>Największą zaletą jest…</b> <button class=\"play\" data-say=\"Największą zaletą filmu jest gra aktorska\">🔊</button>","Главное достоинство — …"],
      ["3. <b>Słabą stroną jest…</b> <button class=\"play\" data-say=\"Słabą stroną jest scenariusz\">🔊</button>","Слабая сторона — …"],
      ["4. <b>Polecam, ponieważ…</b> <button class=\"play\" data-say=\"Polecam, ponieważ warto\">🔊</button>","Рекомендую, потому что…"],
      ["<b>Nie zdradzam zakończenia.</b> <button class=\"play\" data-say=\"Nie zdradzam zakończenia\">🔊</button>","Концовку не выдаю."]
    ],"star":2},
    "examples":[
      {"ru":"Фильм рассказывает о молодой переводчице.","en":"Film <b>opowiada o</b> młodej tłumaczce.","say":"Film opowiada o młodej tłumaczce."},
      {"ru":"Главное достоинство фильма — актёрская игра.","en":"<b>Największą zaletą</b> filmu <b>jest</b> gra aktorska.","gloss":"творительный при jest","say":"Największą zaletą filmu jest gra aktorska."},
      {"ru":"Слабая сторона — концовка, слишком предсказуемая.","en":"<b>Słabą stroną jest</b> zakończenie, zbyt przewidywalne.","say":"Słabą stroną jest zakończenie, zbyt przewidywalne."},
      {"ru":"Рекомендую, потому что таких фильмов о переводе мало.","en":"<b>Polecam, ponieważ</b> takich filmów o tłumaczeniu jest niewiele.","say":"Polecam, ponieważ takich filmów o tłumaczeniu jest niewiele."}
    ],
    "mistakes":[
      {"wrong":"Film opowiada o młodą tłumaczkę.","right":"Film opowiada <b>o młodej tłumaczce</b>.","why":"opowiadać o идёт с предложным падежом, как и русское «рассказывать о ком»."},
      {"wrong":"Największa zaleta jest gra aktorska.","right":"<b>Największą zaletą jest</b> gra aktorska.","why":"после jest в таком определении идёт творительный падеж: zaletą, stroną."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь падеж после opowiadać o.",
       "q":"«Фильм рассказывает о молодой переводчице» —","opts":["Film opowiada o młodą tłumaczkę","Film opowiada o młodej tłumaczce","Film opowiada młodej tłumaczki"],"answer":1,
       "explain":"Opowiadać o плюс предложный: <b>o młodej tłumaczce</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж при jest.",
       "q":"«Главное достоинство — актёрская игра» —","opts":["Największa zaleta jest gra aktorska","Największą zaletą jest gra aktorska","Największej zalety jest gra aktorska"],"answer":1,
       "explain":"Творительный падеж: <b>największą zaletą jest</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши два слова.",
       "q":"«Рекомендую, потому что…» — начало вердикта","accept":["polecam ponieważ","polecam poniewaz","polecam, ponieważ"],"placeholder":"polecam …"}
    ],
    "mnemonic":"📝 o czym → zalety → wady → werdykt. И ни слова о концовке."
   },
   {
    "eyebrow":"Правило 4 · Спор о вкусах",
    "title":"Как не соглашаться и остаться друзьями",
    "paras":[
      "Самое частое несогласие короткое: <b>Nie zgadzam się.</b> Мягче — <b>Nie do końca się zgadzam.</b> Резче — <b>Wręcz przeciwnie.</b> (как раз наоборот). Все три живут в разговоре о фильмах постоянно.",
      "Половинчатое согласие вежливее полного отказа: <b>Coś w tym jest, ale…</b> (что-то в этом есть, но…), <b>Może i tak, ale…</b> (может, и так, но…), <b>Zgoda, tylko że…</b> (согласен, только вот…). Так спорят, не ссорясь.",
      "Смягчить мнение помогает сослагательное наклонение из дня 18: <b>Powiedziałbym raczej, że scenariusz jest słaby.</b> <b>Nie nazwałabym tego arcydziełem.</b> Одна форма с <b>by</b> — и категоричность падает вдвое.",
      "И два выражения-финала, которыми польский спор о вкусах обычно заканчивается: <b>To kwestia gustu.</b> (это дело вкуса) и поговорка <b>O gustach się nie dyskutuje.</b> — о вкусах не спорят. После неё разговор либо кончается, либо переходит на кофе."
    ],
    "audio":"Самое частое несогласие короткое: nie zgadzam się. Мягче — nie do końca się zgadzam. Резче — wręcz przeciwnie, как раз наоборот. Половинчатое согласие вежливее полного отказа: coś w tym jest, ale; może i tak, ale; zgoda, tylko że. Так спорят, не ссорясь. Смягчить мнение помогает сослагательное наклонение из дня восемнадцать: powiedziałbym raczej, że scenariusz jest słaby; nie nazwałabym tego arcydziełem. Одна форма с by — и категоричность падает вдвое. И два выражения-финала: to kwestia gustu, это дело вкуса, и поговорка o gustach się nie dyskutuje, о вкусах не спорят.",
    "table":{"rows":[
      ["<b>Nie zgadzam się.</b> <button class=\"play\" data-say=\"Nie zgadzam się\">🔊</button>","Я не согласен."],
      ["<b>Wręcz przeciwnie.</b> <button class=\"play\" data-say=\"Wręcz przeciwnie\">🔊</button>","Как раз наоборот."],
      ["<b>Coś w tym jest, ale…</b> <button class=\"play\" data-say=\"Coś w tym jest, ale\">🔊</button>","Что-то в этом есть, но…"],
      ["<b>Może i tak, ale…</b> <button class=\"play\" data-say=\"Może i tak, ale\">🔊</button>","Может, и так, но…"],
      ["<b>Powiedziałbym raczej, że…</b> <button class=\"play\" data-say=\"Powiedziałbym raczej, że\">🔊</button>","Я бы скорее сказал, что…"],
      ["<b>O gustach się nie dyskutuje.</b> <button class=\"play\" data-say=\"O gustach się nie dyskutuje\">🔊</button>","О вкусах не спорят."]
    ],"star":4},
    "examples":[
      {"ru":"Не совсем согласна: актёры как раз хороши.","en":"<b>Nie do końca się zgadzam</b>: aktorzy akurat są dobrzy.","say":"Nie do końca się zgadzam, aktorzy akurat są dobrzy."},
      {"ru":"Что-то в этом есть, но концовка всё портит.","en":"<b>Coś w tym jest, ale</b> zakończenie wszystko psuje.","say":"Coś w tym jest, ale zakończenie wszystko psuje."},
      {"ru":"Я бы скорее сказал, что фильм слишком длинный.","en":"<b>Powiedziałbym raczej, że</b> film jest za długi.","gloss":"смягчение через by — день 18","say":"Powiedziałbym raczej, że film jest za długi."},
      {"ru":"Ладно, это дело вкуса.","en":"Dobra, <b>to kwestia gustu</b>.","say":"Dobra, to kwestia gustu."}
    ],
    "mistakes":[
      {"wrong":"Nie zgadzam z tobą.","right":"<b>Nie zgadzam się z tobą.</b>","why":"глагол всегда с się: zgadzać się z kimś."},
      {"wrong":"Wręcz naprzeciwko.","right":"<b>Wręcz przeciwnie.</b>","why":"naprzeciwko — это «напротив» о месте. «Наоборот» по смыслу — przeciwnie."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что глагол с się.",
       "q":"«Я с тобой не согласен» —","opts":["Nie zgadzam z tobą","Nie zgadzam się z tobą","Nie zgodzę ciebie"],"answer":1,
       "explain":"Zgadzać się z kimś — глагол живёт только с się."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери самое мягкое возражение.",
       "q":"Какая фраза возражает мягче всего?","opts":["Wręcz przeciwnie","Coś w tym jest, ale…","Nie zgadzam się"],"answer":1,
       "explain":"Половинчатое согласие смягчает спор сильнее всего."},
      {"type":"speak","howto":"Нажми микрофон и произнеси это так, как говорят у выхода из кино.",
       "target":"Coś w tym jest, ale powiedziałbym raczej, że film jest przereklamowany.","sub":"что-то в этом есть, но я бы скорее сказал, что фильм перехвален","want":"Coś w tym jest, ale powiedziałbym raczej, że film jest przereklamowany."}
    ],
    "mnemonic":"🗯️ Nie zgadzam się → Coś w tym jest, ale… → Powiedziałbym raczej… → To kwestia gustu."
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек выходят из кинотеатра. Фильм был один, впечатления — два.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"No i co? Bo ja mam wrażenie, że oglądaliśmy dwa różne filmy.","ru":"Ну и как? У меня ощущение, что мы смотрели два разных фильма.",
      "words":[["mam wrażenie","у меня ощущение"],["dwa różne filmy","два разных фильма"]]},
     {"who":"A","name":"Anna","side":"left","en":"Dla mnie to najbardziej poruszający film tego roku. Naprawdę.","ru":"Для меня это самый трогательный фильм года. Правда.",
      "words":[["poruszający","трогательный"],["Naprawdę","правда"]]},
     {"who":"M","name":"Marek","side":"right","en":"Wręcz przeciwnie. Fabuła przewidywalna, zwrot akcji widać po pół godziny.","ru":"Как раз наоборот. Сюжет предсказуемый, поворот виден через полчаса.",
      "words":[["Wręcz przeciwnie","как раз наоборот"],["zwrot akcji","поворот сюжета"]]},
     {"who":"A","name":"Anna","side":"left","en":"Coś w tym jest, ale gra aktorska ratuje wszystko.","ru":"Что-то в этом есть, но актёрская игра спасает всё.",
      "words":[["Coś w tym jest","что-то в этом есть"],["ratuje","спасает"]]},
     {"who":"M","name":"Marek","side":"right","en":"Obsada dobra, zgoda. Tylko że scenariusz jest po prostu płytki.","ru":"Состав хороший, согласен. Только сценарий просто поверхностный.",
      "words":[["Obsada","актёрский состав"],["płytki","поверхностный"]]},
     {"who":"A","name":"Anna","side":"left","en":"Powiedziałabym raczej, że jest oszczędny. To nie to samo.","ru":"Я бы скорее сказала, что он сдержанный. Это не одно и то же.",
      "words":[["Powiedziałabym raczej","я бы скорее сказала"],["oszczędny","сдержанный"]]},
     {"who":"M","name":"Marek","side":"right","en":"Może i tak. Ale ta muzyka? Ścieżka dźwiękowa gra nam, co czuć.","ru":"Может, и так. Но эта музыка? Саундтрек подсказывает нам, что чувствовать.",
      "words":[["Może i tak","может, и так"],["ścieżka dźwiękowa","саундтрек"]]},
     {"who":"A","name":"Anna","side":"left","en":"Zgoda. Muzyki było za dużo. Ale zakończenia nie zdradzę nikomu.","ru":"Согласна. Музыки было слишком много. Но концовку я никому не выдам.",
      "words":[["za dużo","слишком много"],["nie zdradzę","не выдам"]]},
     {"who":"M","name":"Marek","side":"right","en":"Napiszesz recenzję? Bo mnie wystarczy jedno zdanie: przereklamowany.","ru":"Ты напишешь рецензию? Мне хватит одного слова: перехвален.",
      "words":[["recenzję","рецензию"],["przereklamowany","перехвален"]]},
     {"who":"A","name":"Anna","side":"left","en":"Napiszę. A ty i tak zostaniesz przy swoim. O gustach się nie dyskutuje.","ru":"Напишу. А ты всё равно останешься при своём. О вкусах не спорят.",
      "words":[["zostaniesz przy swoim","останешься при своём"],["O gustach","о вкусах"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — двое выбирают, что смотреть вечером. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Ta ekranizacja ma świetne recenzje. Podobno obsada jest rewelacyjna.","ru":"У этой экранизации отличные рецензии. Говорят, актёрский состав великолепный."},
     {"who":"B","en":"Czytałem książkę. Boję się, że film będzie przereklamowany.","ru":"Я читал книгу. Боюсь, что фильм окажется перехваленным."},
     {"who":"A","en":"Trzy godziny. Z napisami czy z lektorem?","ru":"Три часа. С субтитрами или с закадровым голосом?"},
     {"who":"B","en":"Z napisami. Przy lektorze i tak zasnę jak suseł.","ru":"С субтитрами. При закадровом голосе я всё равно усну беспробудно."},
     {"who":"A","en":"Włączamy. A jutro napiszesz mi recenzję w dwóch zdaniach.","ru":"Включаем. А завтра напишешь мне рецензию в двух предложениях."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов дня — из чего сделан фильм и как о нём говорить.",
   "items":[
     {"en":"fabuła","ru":"сюжет","ex":"Fabuła jest prosta, ale dobra."},
     {"en":"bohater / bohaterka","ru":"герой / героиня","ex":"Główna bohaterka to tłumaczka."},
     {"en":"wątek","ru":"сюжетная линия","ex":"Wątek miłosny jest tu zbędny."},
     {"en":"reżyser","ru":"режиссёр","ex":"Reżyser dostał nagrodę w Gdyni."},
     {"en":"obsada","ru":"актёрский состав","ex":"Obsada jest naprawdę świetna."},
     {"en":"gra aktorska","ru":"актёрская игра","ex":"Gra aktorska ratuje ten film."},
     {"en":"zwrot akcji","ru":"поворот сюжета","ex":"Zwrot akcji widać po pół godziny."},
     {"en":"zakończenie","ru":"концовка","ex":"Zakończenia nie zdradzę."},
     {"en":"wciągający","ru":"затягивающий","ex":"Pierwsza godzina jest wciągająca."},
     {"en":"przewidywalny","ru":"предсказуемый","ex":"Fabuła jest przewidywalna."},
     {"en":"przereklamowany","ru":"перехваленный","ex":"Moim zdaniem film jest przereklamowany."},
     {"en":"polecam / nie polecam","ru":"рекомендую / не рекомендую","ex":"Polecam, ponieważ warto."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к его переводу.",
   "pairs":[["fabuła","сюжет"],["obsada","актёрский состав"],["zakończenie","концовка"],["wciągający","затягивающий"]]
 },
 "reading":{
   "intro":"Прочитай и послушай рецензию, которую Анна написала вечером. Каркас соблюдён полностью — можно брать за образец.",
   "title":"Recenzja: film, o który się pokłóciliśmy",
   "sentences":["Film opowiada o młodej tłumaczce, która po dziesięciu latach wraca do rodzinnego miasta.","Akcja rozgrywa się na Podkarpaciu, w małej miejscowości, gdzie wszyscy się znają.","Główna bohaterka ma przetłumaczyć dokumenty po zmarłym ojcu i przy okazji odkrywa, kim on właściwie był.","Wątek rodzinny jest tu najmocniejszy, a wątek miłosny wydaje mi się zbędny.","Największą zaletą filmu jest gra aktorska, zwłaszcza w scenach bez słów.","Mocną stroną są też zdjęcia: mgła, puste drogi i światło późnej jesieni.","Słabą stroną jest ścieżka dźwiękowa, która podpowiada widzowi, co ma czuć.","Nie da się ukryć, że drugi zwrot akcji jest przewidywalny.","Mój mąż twierdzi, że cały film jest przereklamowany, i nie jest w tym odosobniony.","Powiedziałabym raczej, że jest oszczędny, a to zupełnie coś innego niż płytki.","Zakończenia oczywiście nie zdradzę, ale ostatnie trzy minuty warte są całej reszty.","Polecam, ponieważ o tłumaczeniu i o wracaniu do domu rzadko robi się filmy tak spokojne.","Jeśli szukacie akcji, będzie to dla was film nudny jak flaki z olejem.","O gustach się nie dyskutuje — ale ja obejrzałabym go jeszcze raz."],
   "translation":"Фильм рассказывает о молодой переводчице, которая через десять лет возвращается в родной город. Действие происходит в Подкарпатье, в маленьком городке, где все друг друга знают. Главная героиня должна перевести документы, оставшиеся после умершего отца, и заодно открывает, кем он на самом деле был. Семейная линия здесь самая сильная, а любовная кажется мне лишней. Главное достоинство фильма — актёрская игра, особенно в сценах без слов. Сильная сторона — и операторская работа: туман, пустые дороги и свет поздней осени. Слабая сторона — саундтрек, который подсказывает зрителю, что он должен чувствовать. Нельзя не признать, что второй поворот сюжета предсказуем. Мой муж утверждает, что весь фильм перехвален, и он в этом не одинок. Я бы скорее сказала, что он сдержанный, а это совсем не то же самое, что поверхностный. Концовку я, конечно, не выдам, но последние три минуты стоят всего остального. Рекомендую, потому что о переводе и о возвращении домой редко снимают такие спокойные фильмы. Если вы ищете экшена, для вас это будет фильм смертельно скучный. О вкусах не спорят — но я посмотрела бы его ещё раз."
 },
 "quiz":{
   "intro":"Пять вопросов — и четвёртый жанр недели закрыт.",
   "items":[
     {"q":"1. <b>Obsada</b> — это —","opts":["сюжет","актёрский состав","концовка"],"answer":1,
      "explain":"<b>Obsada</b> — все актёры фильма вместе."},
     {"q":"2. «Фильм рассказывает о молодой переводчице» —","opts":["Film opowiada o młodą tłumaczkę","Film opowiada o młodej tłumaczce","Film opowiada młodą tłumaczkę"],"answer":1,
      "explain":"Opowiadać o плюс предложный падеж."},
     {"q":"3. «Главное достоинство — актёрская игра» —","opts":["Największa zaleta jest gra aktorska","Największą zaletą jest gra aktorska","Największej zalecie jest gra aktorska"],"answer":1,
      "explain":"После jest в таком определении идёт творительный: <b>zaletą</b>."},
     {"q":"4. <b>Przereklamowany</b> значит —","opts":["перехваленный","хорошо разрекламированный","показанный повторно"],"answer":0,
      "explain":"Приставка prze- — «чрезмерно»: шума больше, чем содержания."},
     {"q":"5. «Я с тобой не согласна» —","opts":["Nie zgadzam z tobą","Nie zgadzam się z tobą","Nie zgodzę cię"],"answer":1,
      "explain":"Zgadzać się z kimś — только с się."}
   ]
 },
 "essay":{
   "intro":"Напиши рецензию на то, что смотрел(а) или читал(а) последним. Не пересказывай сюжет — оценивай.",
   "prompt":"Напиши рецензию в 8–10 предложений: о чём произведение, где происходит действие, одно достоинство, один недостаток и вердикт с ponieważ. Обязательно вставь opowiada o плюс предложный, оборот Największą zaletą jest… и одно слово оценки из сегодняшних.",
   "hint":"Каркас: Film opowiada o… · Akcja rozgrywa się w… · Największą zaletą jest… · Słabą stroną jest… · Polecam / Nie polecam, ponieważ… 🎬",
   "example":"Film opowiada o kierowcy autobusu, który przez trzydzieści lat jeździ tą samą trasą. Akcja rozgrywa się w małym mieście na północy Polski, zimą. Główny bohater prawie się nie odzywa, a mimo to wiemy o nim wszystko. Największą zaletą jest gra aktorska: cała historia mieści się w twarzy jednego człowieka. Mocną stroną są też zdjęcia, bo miasto wygląda jak drugi bohater. Słabą stroną jest tempo, ponieważ pierwsza godzina jest naprawdę powolna. Nie da się ukryć, że dla widza szukającego akcji będzie to film nudny jak flaki z olejem. Zakończenia nie zdradzę, ale nie jest przewidywalne. Polecam, ponieważ takich spokojnych filmów robi się dziś niewiele. To oczywiście kwestia gustu."
 }
},
"28": {
 "day":28,"week":"04",
 "themeRu":"Официально и по-свойски",
 "themeEn":"Style i rejestry",
 "intro":"Одинаковое сообщение можно написать тремя способами, и выбор между ними — не вопрос вежливости, а вопрос точности. <b>Uprzejmie informuję, że spotkanie zostało przełożone</b> — и <b>Słuchaj, piątek odpada</b>. Обе фразы правильные. Ошибкой становится только та, что попала не в тот адрес.",
 "introAudio":"Одинаковое сообщение можно написать тремя способами, и выбор между ними — не вопрос вежливости, а вопрос точности. Uprzejmie informuję, że spotkanie zostało przełożone — и słuchaj, piątek odpada. Обе фразы правильные. Ошибкой становится только та, что попала не в тот адрес.",
 "goals":[
   "Различать три регистра: <b>oficjalny, neutralny, potoczny</b>",
   "Узнавать разговорные маркеры: <b>no, słuchaj, wiesz co, spoko, mega</b>",
   "Держать официальный тон: <b>zwracam się z prośbą, uprzejmie informuję</b>",
   "Перейти на «ты» по-польски: <b>Może przejdziemy na ty?</b>"
 ],
 "learned":[
   "Различил(а) три регистра: oficjalny, neutralny, potoczny",
   "Узнал(а) разговорные маркеры: no, słuchaj, wiesz co, spoko, mega",
   "Удержал(а) официальный тон: zwracam się z prośbą, uprzejmie informuję",
   "Перешёл(шла) на «ты» по-польски: Może przejdziemy na ty?"
 ],
 "review":{
   "intro":"Вчерашняя рецензия — на разминку. Падеж после <b>opowiadać o</b>, творительный при <b>jest</b>, одно слово оценки и один спор.",
   "introAudio":"Вчерашняя рецензия — на разминку. Падеж после opowiadać o, творительный при jest, одно слово оценки и один спор.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> проверь падеж после opowiadać o.",
      "q":"«Книга рассказывает о старом городе» —","opts":["Książka opowiada o stare miasto","Książka opowiada o starym mieście","Książka opowiada starego miasta"],"answer":1,
      "explain":"Opowiadać o плюс предложный: <b>o starym mieście</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж при jest.",
      "q":"«Слабая сторона — сценарий» —","opts":["Słaba strona jest scenariusz","Słabą stroną jest scenariusz","Słabej stronie jest scenariusz"],"answer":1,
      "explain":"Творительный падеж: <b>słabą stroną jest</b>."},
     {"type":"choice","q":"<b>Przereklamowany</b> значит —",
      "opts":["перехваленный","хорошо разрекламированный","повторно показанный"],"answer":0,
      "explain":"Приставка prze- — «чрезмерно»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Я с тобой не согласен»</b>","answer":"Nie zgadzam się z tobą"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Три этажа",
    "title":"<em>Uprzejmie informuję → daję znać → słuchaj</em>",
    "paras":[
      "Возьмём одну новость: встреча переносится с пятницы на понедельник. Верхний этаж, официальный: <b>Uprzejmie informuję, że spotkanie zostało przełożone na poniedziałek.</b> Средний, нейтральный: <b>Chciałam dać znać, że przesuwamy spotkanie na poniedziałek.</b> Нижний, разговорный: <b>Słuchaj, piątek odpada, robimy to w poniedziałek.</b>",
      "Официальный этаж узнаётся по трём приметам, и все они у нас уже были: страдательный залог и безличность из дня 20 (<b>zostało przełożone</b>), отглагольные существительные из дня 1 (<b>przełożenie spotkania</b>), книжные союзы из дня 17 (<b>w związku z tym</b>, <b>ponieważ</b>).",
      "Разговорный этаж узнаётся по обратному: короткие глаголы вместо существительных (<b>odpada</b> вместо <b>zostało odwołane</b>), обращение прямо в тексте (<b>słuchaj</b>), частицы и оценки (<b>spoko</b>, <b>fajnie</b>).",
      "Нейтральный этаж — самый широкий и самый полезный. На нём написаны почти все рабочие письма: <b>Dzień dobry, piszę w sprawie piątkowego spotkania… Pozdrawiam serdecznie.</b> Если сомневаешься, куда попадёшь, — выбирай его."
    ],
    "audio":"Возьмём одну новость: встреча переносится с пятницы на понедельник. Верхний этаж, официальный: uprzejmie informuję, że spotkanie zostało przełożone na poniedziałek. Средний, нейтральный: chciałam dać znać, że przesuwamy spotkanie na poniedziałek. Нижний, разговорный: słuchaj, piątek odpada, robimy to w poniedziałek. Официальный этаж узнаётся по трём приметам: страдательный залог и безличность из дня двадцать, отглагольные существительные из дня один, книжные союзы из дня семнадцать. Разговорный узнаётся по обратному: короткие глаголы вместо существительных, обращение прямо в тексте, частицы и оценки. Нейтральный этаж самый широкий и самый полезный. На нём написаны почти все рабочие письма. Если сомневаешься, куда попадёшь, выбирай его.",
    "table":{"rows":[
      ["<b>Uprzejmie informuję, że…</b> <button class=\"play\" data-say=\"Uprzejmie informuję, że spotkanie zostało przełożone\">🔊</button>","официальный этаж"],
      ["<b>Chciałam dać znać, że…</b> <button class=\"play\" data-say=\"Chciałam dać znać, że przesuwamy spotkanie\">🔊</button>","нейтральный этаж"],
      ["<b>Słuchaj, piątek odpada.</b> <button class=\"play\" data-say=\"Słuchaj, piątek odpada\">🔊</button>","разговорный этаж"],
      ["<b>zostało przełożone</b> <button class=\"play\" data-say=\"zostało przełożone\">🔊</button>","страдательный залог — примета верхнего"],
      ["<b>przełożenie spotkania</b> <button class=\"play\" data-say=\"przełożenie spotkania\">🔊</button>","отглагольное существительное — тоже верхний"],
      ["<b>Pozdrawiam serdecznie</b> <button class=\"play\" data-say=\"Pozdrawiam serdecznie\">🔊</button>","подпись нейтрального письма"]
    ],"star":1},
    "examples":[
      {"ru":"Настоящим сообщаю, что встреча перенесена.","en":"<b>Uprzejmie informuję, że</b> spotkanie <b>zostało przełożone</b>.","gloss":"страдательный залог — день 20","say":"Uprzejmie informuję, że spotkanie zostało przełożone."},
      {"ru":"Хотела дать знать, что мы переносим встречу.","en":"<b>Chciałam dać znać, że</b> przesuwamy spotkanie.","say":"Chciałam dać znać, że przesuwamy spotkanie."},
      {"ru":"Слушай, пятница отпадает.","en":"<b>Słuchaj</b>, piątek <b>odpada</b>.","gloss":"разговорное","say":"Słuchaj, piątek odpada."},
      {"ru":"Здравствуйте, пишу по поводу пятничной встречи.","en":"<b>Dzień dobry, piszę w sprawie</b> piątkowego spotkania.","say":"Dzień dobry, piszę w sprawie piątkowego spotkania."}
    ],
    "mistakes":[
      {"wrong":"Szanowni Państwo, spoko, przesuwamy to na poniedziałek.","right":"Szanowni Państwo, <b>uprzejmie informuję, że spotkanie zostało przełożone</b>.","why":"смешение этажей заметнее любой грамматической ошибки: spoko в официальном письме звучит как крик в библиотеке."},
      {"wrong":"Cześć Aniu, uprzejmie informuję, że przesuwam nasze piwo.","right":"Cześć Aniu, <b>słuchaj, przesuwam nasze piwo</b>.","why":"канцелярит в сообщении другу читается как ирония, даже если ты этого не хотел(а)."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> определи этаж.",
       "q":"Какая фраза официальная?","opts":["Słuchaj, piątek odpada","Uprzejmie informuję, że spotkanie zostało przełożone","Chciałam dać znać, że przesuwamy spotkanie"],"answer":1,
       "explain":"Приметы верхнего этажа: uprzejmie и страдательный залог."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери письмо коллеге.",
       "q":"Рабочее письмо коллеге лучше начать —","opts":["Szanowni Państwo,","Dzień dobry, piszę w sprawie…","No cześć, słuchaj…"],"answer":1,
       "explain":"Нейтральный этаж — рабочий по умолчанию."},
      {"type":"type","howto":"<b>Что делать:</b> напиши подпись нейтрального письма.",
       "q":"«С уважением» в рабочем письме коллеге — два слова","accept":["pozdrawiam serdecznie","pozdrawiam"],"placeholder":"Pozdrawiam …"}
    ],
    "mnemonic":"🏢 Верх: uprzejmie, zostało, -enie. Низ: słuchaj, odpada, spoko. Середина: dzień dobry, piszę w sprawie."
   },
   {
    "eyebrow":"Правило 2 · Разговорные маркеры",
    "title":"<em>No, słuchaj, wiesz co, spoko</em>",
    "paras":[
      "Первое слово, которое сбивает всех: <b>no</b>. Это не «нет». Польское <b>no</b> — это «ну» или «ага»: <b>No i co?</b> (ну и что?), <b>No dobra.</b> (ну ладно), <b>No właśnie!</b> (вот именно!). Отрицание — <b>nie</b>, и эту пару стоит развести раз и навсегда.",
      "Слова-обращения внутри реплики: <b>słuchaj</b> (слушай), <b>wiesz co</b> (знаешь что), <b>powiem ci</b> (скажу тебе). Они не несут смысла, а держат внимание собеседника — и делают речь живой ровно так же, как русские «слушай» и «знаешь».",
      "Оценки: <b>spoko</b> (нормально, окей), <b>fajnie</b> (классно), <b>super</b>, <b>mega</b> (жутко, очень — <b>mega zmęczony</b>), <b>masa ludzi</b> (куча народу), <b>w porządku</b> (в порядке). Все они помечены одним ярлыком: <b>разговорное</b>. В письме в учреждение — ни одного.",
      "И честная оговорка: разговорный регистр не «неправильный польский». Это полноценный этаж, на котором говорят все, включая профессоров. Просто у него есть адрес — друзья, коллеги за обедом, сообщения, — и за пределами этого адреса он не работает."
    ],
    "audio":"Первое слово, которое сбивает всех: no. Это не нет. Польское no — это ну или ага: no i co, no dobra, no właśnie. Отрицание — nie, и эту пару стоит развести раз и навсегда. Слова-обращения внутри реплики: słuchaj, wiesz co, powiem ci. Они не несут смысла, а держат внимание собеседника. Оценки: spoko — нормально, fajnie — классно, super, mega — очень, masa ludzi — куча народу, w porządku. Все они помечены одним ярлыком: разговорное. В письме в учреждение ни одного. И честная оговорка: разговорный регистр не неправильный польский. Это полноценный этаж, на котором говорят все. Просто у него есть адрес — друзья, коллеги за обедом, сообщения.",
    "table":{"rows":[
      ["<b>no</b> ≠ «нет» <button class=\"play\" data-say=\"No i co? No dobra. No właśnie.\">🔊</button>","ну, ага · отрицание — nie"],
      ["<b>słuchaj</b> · <b>wiesz co</b> <button class=\"play\" data-say=\"słuchaj, wiesz co\">🔊</button>","слушай · знаешь что · разговорное"],
      ["<b>spoko</b> · <b>w porządku</b> <button class=\"play\" data-say=\"spoko, w porządku\">🔊</button>","нормально, окей · разговорное"],
      ["<b>fajnie</b> · <b>super</b> <button class=\"play\" data-say=\"fajnie, super\">🔊</button>","классно · разговорное"],
      ["<b>mega zmęczony</b> <button class=\"play\" data-say=\"mega zmęczony\">🔊</button>","жутко уставший · разговорное"],
      ["<b>masa ludzi</b> <button class=\"play\" data-say=\"masa ludzi\">🔊</button>","куча народу · разговорное"]
    ],"star":0},
    "examples":[
      {"ru":"Ну и что? Ну ладно, пойдём.","en":"<b>No i co? No dobra</b>, idziemy.","say":"No i co? No dobra, idziemy."},
      {"ru":"Слушай, знаешь что, давай перенесём на завтра.","en":"<b>Słuchaj, wiesz co</b>, przełóżmy to na jutro.","say":"Słuchaj, wiesz co, przełóżmy to na jutro."},
      {"ru":"Всё нормально, я не обиделась.","en":"<b>Spoko</b>, nie obraziłam się.","gloss":"разговорное","say":"Spoko, nie obraziłam się."},
      {"ru":"Вчера на концерте была куча народу.","en":"Wczoraj na koncercie była <b>masa ludzi</b>.","say":"Wczoraj na koncercie była masa ludzi."}
    ],
    "mistakes":[
      {"wrong":"Czy przyjdziesz? — No. — и собеседник не приходит.","right":"Czy przyjdziesz? — <b>No.</b> — и собеседник приходит.","why":"польское no значит «ага, да». Если хочешь отказать, нужно nie."},
      {"wrong":"Szanowni Państwo, było mega dużo osób.","right":"Szanowni Państwo, <b>obecnych było wiele osób</b>.","why":"mega — разговорный усилитель. В официальном тексте вместо него идёт wiele или znaczna liczba."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> не путай с русским «но».",
       "q":"Польское <b>no</b> значит —","opts":["нет","ну, ага","но"],"answer":1,
       "explain":"<b>No</b> — «ну» или «ага». Отрицание — nie."},
      {"type":"choice","howto":"<b>Что делать:</b> подумай о регистре.",
       "q":"Какое слово НЕ годится для письма в urząd?","opts":["uprzejmie","spoko","niniejszym"],"answer":1,
       "explain":"<b>Spoko</b> — разговорное. Остальные два принадлежат официальному этажу."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Слушай, знаешь что, перенесём это на завтра»</b>","answer":"Słuchaj wiesz co przełóżmy to na jutro"}
    ],
    "mnemonic":"💬 no = ну · słuchaj = слушай · spoko = нормально. Три слова, и речь звучит живой."
   },
   {
    "eyebrow":"Правило 3 · Официальные формулы",
    "title":"<em>Zwracam się z prośbą, uprzejmie informuję</em>",
    "paras":[
      "Официальный этаж держится на десятке готовых формул, и учить их надо целиком, как идиомы. <b>Zwracam się z prośbą o</b> плюс винительный — «обращаюсь с просьбой о»: <b>Zwracam się z prośbą o wydanie zaświadczenia.</b> Заметь: <b>z prośbą</b> в творительном, а то, о чём просишь, — в винительном.",
      "<b>Uprzejmie informuję, że…</b> — сообщаю; <b>uprzejmie proszę o…</b> — прошу (это уже было на B1); <b>w załączeniu przesyłam…</b> — в приложении высылаю; <b>w związku z powyższym</b> — в связи с вышеизложенным; <b>zgodnie z</b> плюс творительный — согласно чему-то: <b>zgodnie z umową</b>.",
      "Подписи выстраиваются по холодности: <b>Z poważaniem</b> — стандарт, <b>Z wyrazami szacunku</b> — теплее и уважительнее, <b>Łączę wyrazy szacunku</b> — совсем церемонно, узнавание. А <b>Pozdrawiam</b> и <b>Pozdrawiam serdecznie</b> живут этажом ниже, в рабочей переписке.",
      "Чего в официальном тексте не бывает никогда: восклицательных знаков, смайликов, сокращений вроде <b>pzdr</b>, разговорных усилителей и вопросов в лоб. Вопрос превращается в просьбу: не «Kiedy dostanę odpowiedź?», а <b>Uprzejmie proszę o informację o terminie odpowiedzi.</b>"
    ],
    "audio":"Официальный этаж держится на десятке готовых формул, и учить их надо целиком, как идиомы. Zwracam się z prośbą o плюс винительный — обращаюсь с просьбой о: zwracam się z prośbą o wydanie zaświadczenia. Заметь: z prośbą в творительном, а то, о чём просишь, в винительном. Uprzejmie informuję, że — сообщаю; uprzejmie proszę o — прошу; w załączeniu przesyłam; w związku z powyższym; zgodnie z плюс творительный — zgodnie z umową. Подписи выстраиваются по холодности: z poważaniem — стандарт, z wyrazami szacunku — теплее, łączę wyrazy szacunku — совсем церемонно. A pozdrawiam и pozdrawiam serdecznie живут этажом ниже. Чего в официальном тексте не бывает никогда: восклицательных знаков, смайликов, сокращений, разговорных усилителей и вопросов в лоб.",
    "table":{"rows":[
      ["<b>Zwracam się z prośbą o…</b> <button class=\"play\" data-say=\"Zwracam się z prośbą o wydanie zaświadczenia\">🔊</button>","Обращаюсь с просьбой о…"],
      ["<b>Uprzejmie informuję, że…</b> <button class=\"play\" data-say=\"Uprzejmie informuję, że\">🔊</button>","Настоящим сообщаю, что…"],
      ["<b>W załączeniu przesyłam…</b> <button class=\"play\" data-say=\"W załączeniu przesyłam\">🔊</button>","В приложении высылаю…"],
      ["<b>W związku z powyższym…</b> <button class=\"play\" data-say=\"W związku z powyższym\">🔊</button>","В связи с вышеизложенным…"],
      ["<b>zgodnie z umową</b> <button class=\"play\" data-say=\"zgodnie z umową\">🔊</button>","согласно договору"],
      ["<b>Z poważaniem</b> / <b>Z wyrazami szacunku</b> <button class=\"play\" data-say=\"Z poważaniem, z wyrazami szacunku\">🔊</button>","С уважением / с выражением почтения"]
    ],"star":0},
    "examples":[
      {"ru":"Обращаюсь с просьбой выдать справку.","en":"<b>Zwracam się z prośbą o</b> wydanie zaświadczenia.","say":"Zwracam się z prośbą o wydanie zaświadczenia."},
      {"ru":"Настоящим сообщаю, что встреча перенесена.","en":"<b>Uprzejmie informuję, że</b> spotkanie zostało przełożone.","say":"Uprzejmie informuję, że spotkanie zostało przełożone."},
      {"ru":"Согласно договору срок составляет четырнадцать дней.","en":"<b>Zgodnie z umową</b> termin wynosi czternaście dni.","say":"Zgodnie z umową termin wynosi czternaście dni."},
      {"ru":"Прошу сообщить о сроке ответа.","en":"<b>Uprzejmie proszę o informację</b> o terminie odpowiedzi.","gloss":"вопрос превращён в просьбу","say":"Uprzejmie proszę o informację o terminie odpowiedzi."}
    ],
    "mistakes":[
      {"wrong":"Zwracam się z prośbą o wydaniu zaświadczenia.","right":"Zwracam się z prośbą o <b>wydanie</b> zaświadczenia.","why":"после prośbą o идёт винительный падеж, как и после proszę o."},
      {"wrong":"Kiedy dostanę odpowiedź?!","right":"<b>Uprzejmie proszę o informację o terminie odpowiedzi.</b>","why":"в официальном письме прямой вопрос с восклицательным знаком читается как претензия."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь падеж после prośbą o.",
       "q":"«Обращаюсь с просьбой выдать справку» —","opts":["Zwracam się z prośbą o wydaniu zaświadczenia","Zwracam się z prośbą o wydanie zaświadczenia","Zwracam się prośbą o wydanie zaświadczenia"],"answer":1,
       "explain":"После o — винительный: <b>o wydanie</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери формулу верхнего этажа.",
       "q":"Какая подпись официальнее?","opts":["Pozdrawiam","Z poważaniem","Trzymaj się"],"answer":1,
       "explain":"<b>Z poważaniem</b> — стандарт официального письма."},
      {"type":"type","howto":"<b>Что делать:</b> напиши три слова.",
       "q":"«согласно договору»","accept":["zgodnie z umową","zgodnie z umowa"],"placeholder":"zgodnie …"}
    ],
    "mnemonic":"📜 zwracam się z prośbą o · uprzejmie informuję · w załączeniu · w związku z powyższym · Z poważaniem."
   },
   {
    "eyebrow":"Правило 4 · Переход на «ты»",
    "title":"<em>Może przejdziemy na ty?</em>",
    "paras":[
      "В Польше <b>pan</b> и <b>pani</b> держатся дольше, чем кажется: в офисе можно проработать месяц и всё ещё быть на «вы». Переход обозначается отдельным ритуалом и отдельной фразой: <b>Może przejdziemy na ty?</b> — «может, перейдём на ты?».",
      "Ответ обычно короткий и тёплый: <b>Bardzo chętnie. Mów mi Anna.</b> или <b>Proszę mi mówić po imieniu.</b> После этого говорят <b>jesteśmy na ty</b> — «мы на ты». Обратной дороги, в общем, нет: возвращение к <b>pan</b> читается как обида.",
      "Предлагает переход тот, кто старше или выше по должности, — и в этом польская логика совпадает с нашей. Младшему предлагать не запрещено, но безопаснее подождать. В сомнении держись <b>pan</b> и <b>pani</b>: это никогда не грубость.",
      "Есть и промежуточная ступенька, которую слышишь в офисе постоянно: <b>panie Marku</b>, <b>pani Aniu</b> — «пан» плюс имя в звательном. Это уже теплее, чем <b>panie Kowalski</b>, но ещё не «ты». Из дня 6 ты помнишь, что <b>panie</b> плюс фамилия звучит холодно и даже невежливо."
    ],
    "audio":"В Польше pan и pani держатся дольше, чем кажется: в офисе можно проработать месяц и всё ещё быть на вы. Переход обозначается отдельной фразой: może przejdziemy na ty. Ответ обычно короткий и тёплый: bardzo chętnie, mów mi Anna, или proszę mi mówić po imieniu. После этого говорят jesteśmy na ty. Обратной дороги, в общем, нет. Предлагает переход тот, кто старше или выше по должности. В сомнении держись pan и pani: это никогда не грубость. Есть и промежуточная ступенька: panie Marku, pani Aniu — пан плюс имя в звательном. Это уже теплее, чем panie Kowalski, но ещё не ты.",
    "table":{"rows":[
      ["<b>Może przejdziemy na ty?</b> <button class=\"play\" data-say=\"Może przejdziemy na ty?\">🔊</button>","Может, перейдём на «ты»?"],
      ["<b>Bardzo chętnie. Mów mi Anna.</b> <button class=\"play\" data-say=\"Bardzo chętnie. Mów mi Anna.\">🔊</button>","С удовольствием. Зови меня Анна."],
      ["<b>Proszę mi mówić po imieniu.</b> <button class=\"play\" data-say=\"Proszę mi mówić po imieniu\">🔊</button>","Обращайтесь ко мне по имени."],
      ["<b>Jesteśmy na ty.</b> <button class=\"play\" data-say=\"Jesteśmy na ty\">🔊</button>","Мы на «ты»."],
      ["<b>panie Marku</b> / <b>pani Aniu</b> <button class=\"play\" data-say=\"panie Marku, pani Aniu\">🔊</button>","пан Марек / пани Аня — теплее, но ещё «вы»"],
      ["<b>Cześć</b> / <b>Dzień dobry</b> <button class=\"play\" data-say=\"Cześć, Dzień dobry\">🔊</button>","привет / здравствуйте — два этажа приветствия"]
    ],"star":0},
    "examples":[
      {"ru":"Может, перейдём на «ты»? Зови меня Анна.","en":"<b>Może przejdziemy na ty?</b> <b>Mów mi Anna.</b>","say":"Może przejdziemy na ty? Mów mi Anna."},
      {"ru":"С удовольствием. Я Марек.","en":"<b>Bardzo chętnie.</b> Jestem Marek.","say":"Bardzo chętnie. Jestem Marek."},
      {"ru":"Мы с ней на «ты» уже полгода.","en":"<b>Jesteśmy z nią na ty</b> od pół roku.","say":"Jesteśmy z nią na ty od pół roku."},
      {"ru":"Пан Марек, у вас найдётся минутка?","en":"<b>Panie Marku</b>, ma pan chwilę?","gloss":"звательный падеж — из A2","say":"Panie Marku, ma pan chwilę?"}
    ],
    "mistakes":[
      {"wrong":"Panie Kowalski, ma pan chwilę?","right":"<b>Panie Marku</b>, ma pan chwilę?","why":"обращение panie плюс фамилия звучит холодно и в разговоре считается невежливым. Между коллегами берут имя."},
      {"wrong":"Przejdziemy na tobie?","right":"<b>Przejdziemy na ty?</b>","why":"выражение застывшее: на «ты» именно ty, форма не склоняется."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни застывшее выражение.",
       "q":"«Может, перейдём на ты?» —","opts":["Może przejdziemy na tobie?","Może przejdziemy na ty?","Może pójdziemy na ty?"],"answer":1,
       "explain":"Форма застывшая: <b>przejść na ty</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> выбери вежливое обращение к коллеге.",
       "q":"Как обратиться к коллеге по имени Марек, оставаясь на «вы»?","opts":["Panie Kowalski","Panie Marku","Marek, słuchaj"],"answer":1,
       "explain":"<b>Panie Marku</b> — тепло и вежливо. Panie плюс фамилия звучит холодно."},
      {"type":"speak","howto":"Нажми микрофон и предложи перейти на «ты» так, как это делают в офисе.",
       "target":"Pracujemy razem od pół roku. Może przejdziemy na ty?","sub":"мы работаем вместе полгода, может, перейдём на «ты»?","want":"Pracujemy razem od pół roku. Może przejdziemy na ty?"}
    ],
    "mnemonic":"🤝 pan i pani → panie Marku → Może przejdziemy na ty? → Mów mi Anna. Четыре ступеньки вверх по теплу."
   }
 ],
 "dialogue":{
   "intro":"Анна и её начальница после совещания. Один разговор, а этажей в нём три — и переход между ними виден невооружённым глазом.",
   "lines":[
     {"who":"E","name":"Ewa","side":"left","en":"Pani Anno, zostanie pani chwilę? Mam jedną sprawę.","ru":"Пани Анна, задержитесь на минутку? У меня одно дело.",
      "words":[["Pani Anno","пани Анна"],["jedną sprawę","одно дело"]]},
     {"who":"A","name":"Anna","side":"right","en":"Oczywiście. Czy chodzi o przełożenie piątkowego spotkania?","ru":"Конечно. Речь о переносе пятничной встречи?",
      "words":[["Czy chodzi o","речь о"],["przełożenie","перенос"]]},
     {"who":"E","name":"Ewa","side":"left","en":"Właśnie. Musi pani wysłać dwie wiadomości, w dwóch różnych stylach.","ru":"Именно. Вам нужно отправить два сообщения, в двух разных стилях.",
      "words":[["Właśnie","именно"],["w dwóch stylach","в двух стилях"]]},
     {"who":"A","name":"Anna","side":"right","en":"Do urzędu miasta oficjalnie, a do autorów zwyczajnie?","ru":"В городскую администрацию официально, а авторам по-простому?",
      "words":[["oficjalnie","официально"],["zwyczajnie","обычно, по-простому"]]},
     {"who":"E","name":"Ewa","side":"left","en":"Dokładnie. Do urzędu: uprzejmie informuję, że spotkanie zostało przełożone.","ru":"Именно. В администрацию: настоящим сообщаю, что встреча перенесена.",
      "words":[["Dokładnie","именно"],["zostało przełożone","было перенесено"]]},
     {"who":"A","name":"Anna","side":"right","en":"A do autorów: dzień dobry, piszę w sprawie piątku, przesuwamy na poniedziałek.","ru":"А авторам: здравствуйте, пишу по поводу пятницы, переносим на понедельник.",
      "words":[["piszę w sprawie","пишу по поводу"],["przesuwamy","переносим"]]},
     {"who":"E","name":"Ewa","side":"left","en":"Świetnie. Tylko proszę nie mieszać: spoko w piśmie do urzędu to katastrofa.","ru":"Отлично. Только не смешивайте: «spoko» в письме в администрацию — катастрофа.",
      "words":[["nie mieszać","не смешивать"],["katastrofa","катастрофа"]]},
     {"who":"A","name":"Anna","side":"right","en":"Rozumiem. A do Kasi napiszę po prostu: słuchaj, piątek odpada.","ru":"Понимаю. А Касе напишу просто: слушай, пятница отпадает.",
      "words":[["po prostu","просто"],["odpada","отпадает"]]},
     {"who":"E","name":"Ewa","side":"left","en":"Pracujemy razem pół roku. Może przejdziemy na ty? Mów mi Ewa.","ru":"Мы работаем вместе полгода. Может, перейдём на «ты»? Зови меня Эва.",
      "words":[["Może przejdziemy na ty?","может, перейдём на ты?"],["Mów mi","зови меня"]]},
     {"who":"A","name":"Anna","side":"right","en":"Bardzo chętnie. To ja lecę pisać te trzy teksty.","ru":"С удовольствием. Тогда я побежала писать эти три текста.",
      "words":[["Bardzo chętnie","с удовольствием"],["lecę","побежала"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — как выглядит перепутанный этаж. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Wysłałem do urzędu maila. Napisałem: cześć, spoko, wszystko gra.","ru":"Я отправил письмо в администрацию. Написал: привет, всё ок, всё в порядке."},
     {"who":"B","en":"Do urzędu? Napisałeś do urzędu „spoko”?","ru":"В администрацию? Ты написал в администрацию «spoko»?"},
     {"who":"A","en":"A co? Przecież treść była poprawna.","ru":"А что? Содержание же было правильное."},
     {"who":"B","en":"Treść tak. Tylko styl krzyczy. Napisz jeszcze raz: uprzejmie informuję.","ru":"Содержание — да. Только стиль кричит. Напиши ещё раз: настоящим сообщаю."},
     {"who":"A","en":"No dobra. Ale do ciebie dalej piszę „spoko”.","ru":"Ну ладно. Но тебе я по-прежнему пишу «spoko»."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать единиц дня — по четыре с каждого этажа.",
   "items":[
     {"en":"uprzejmie informuję","ru":"настоящим сообщаю","ex":"Uprzejmie informuję, że termin się zmienił."},
     {"en":"zwracam się z prośbą o","ru":"обращаюсь с просьбой о","ex":"Zwracam się z prośbą o wydanie zaświadczenia."},
     {"en":"w związku z powyższym","ru":"в связи с вышеизложенным","ex":"W związku z powyższym proszę o odpowiedź."},
     {"en":"zgodnie z","ru":"согласно чему-то","ex":"Zgodnie z umową termin to 14 dni."},
     {"en":"piszę w sprawie","ru":"пишу по поводу","ex":"Dzień dobry, piszę w sprawie spotkania."},
     {"en":"dać znać","ru":"дать знать","ex":"Daj znać, czy pasuje ci poniedziałek."},
     {"en":"pozdrawiam serdecznie","ru":"с уважением — в рабочем письме","ex":"Pozdrawiam serdecznie, Anna."},
     {"en":"no","ru":"ну, ага — разговорное","ex":"No dobra, idziemy."},
     {"en":"słuchaj / wiesz co","ru":"слушай / знаешь что — разговорное","ex":"Słuchaj, wiesz co, przełóżmy to."},
     {"en":"spoko","ru":"нормально, окей — разговорное","ex":"Spoko, nie ma sprawy."},
     {"en":"mega","ru":"жутко, очень — разговорное","ex":"Jestem mega zmęczona."},
     {"en":"przejść na ty","ru":"перейти на «ты»","ex":"Może przejdziemy na ty?"}
   ]
 },
 "drag":{
   "intro":"Перетащи польское выражение к его переводу.",
   "pairs":[["uprzejmie informuję","настоящим сообщаю"],["dać znać","дать знать"],["spoko","нормально"],["przejść na ty","перейти на ты"]]
 },
 "reading":{
   "intro":"Прочитай и послушай одну и ту же новость в трёх текстах: письмо коллеге, письмо в учреждение и сообщение подруге. Содержание одинаковое, этажи разные.",
   "title":"Jedna sprawa, trzy teksty",
   "sentences":["Pierwszy tekst — mail do koleżanki z pracy.","Dzień dobry, Aniu, piszę w sprawie piątkowego spotkania.","Musimy je przesunąć, bo w sali trwa remont i nie ma prądu.","Proponuję poniedziałek o dziesiątej — daj znać, czy ci pasuje.","Pozdrawiam serdecznie, Kasia.","Drugi tekst — pismo do urzędu miasta.","Szanowni Państwo, uprzejmie informuję, że spotkanie zaplanowane na piątek zostało przełożone.","Nowy termin to poniedziałek, godzina dziesiąta, sala numer cztery.","Zwracam się z prośbą o potwierdzenie obecności do czwartku.","W załączeniu przesyłam zaktualizowany program spotkania.","Z poważaniem, Katarzyna Wójcik.","Trzeci tekst — wiadomość do przyjaciółki.","Słuchaj, piątek odpada, bo w biurze nie ma prądu.","Robimy to w poniedziałek o dziesiątej, spoko?"],
   "translation":"Первый текст — письмо коллеге по работе. Здравствуй, Аня, пишу по поводу пятничной встречи. Нам нужно её перенести, потому что в зале идёт ремонт и нет электричества. Предлагаю понедельник в десять — дай знать, подходит ли тебе. С уважением, Кася. Второй текст — письмо в городскую администрацию. Уважаемые господа, настоящим сообщаю, что встреча, запланированная на пятницу, перенесена. Новая дата — понедельник, десять часов, зал номер четыре. Обращаюсь с просьбой подтвердить присутствие до четверга. В приложении высылаю обновлённую программу встречи. С уважением, Катажина Вуйчик. Третий текст — сообщение подруге. Слушай, пятница отпадает, потому что в офисе нет света. Делаем это в понедельник в десять, нормально?"
 },
 "quiz":{
   "intro":"Пять вопросов — и три этажа перестают путаться.",
   "items":[
     {"q":"1. Какая фраза официальная?","opts":["Słuchaj, piątek odpada","Uprzejmie informuję, że spotkanie zostało przełożone","Daj znać, czy pasuje"],"answer":1,
      "explain":"Приметы верхнего этажа: uprzejmie и страдательный залог."},
     {"q":"2. Польское <b>no</b> значит —","opts":["нет","ну, ага","но"],"answer":1,
      "explain":"<b>No</b> — это «ну» или «ага». Отрицание — nie."},
     {"q":"3. «Обращаюсь с просьбой выдать справку» —","opts":["Zwracam się z prośbą o wydaniu zaświadczenia","Zwracam się z prośbą o wydanie zaświadczenia","Zwracam prośbę o wydanie zaświadczenia"],"answer":1,
      "explain":"После o — винительный падеж."},
     {"q":"4. «Может, перейдём на ты?» —","opts":["Może przejdziemy na tobie?","Może przejdziemy na ty?","Może przejdziemy do ty?"],"answer":1,
      "explain":"Выражение застывшее: <b>przejść na ty</b>."},
     {"q":"5. Какое слово НЕ годится для письма в учреждение?","opts":["niniejszym","mega","uprzejmie"],"answer":1,
      "explain":"<b>Mega</b> — разговорный усилитель."}
   ]
 },
 "essay":{
   "intro":"Сегодня три коротких текста вместо одного длинного. Новость выбери любую — важно, чтобы она была одна и та же.",
   "prompt":"Возьми одну новость и напиши её трижды, по 2–3 предложения: письмо коллеге, письмо в учреждение и сообщение другу. В официальном тексте обязательно uprzejmie informuję или zwracam się z prośbą, в разговорном — минимум два разговорных маркера.",
   "hint":"Каркас: 1) Dzień dobry, piszę w sprawie… Pozdrawiam serdecznie. 2) Szanowni Państwo, uprzejmie informuję, że… Z poważaniem. 3) Słuchaj, … spoko? 🏢",
   "example":"Dzień dobry, piszę w sprawie kursu, który miał zacząć się w poniedziałek. Termin przesuwamy o tydzień, ponieważ czekamy na salę. Daj znać, czy ten nowy termin ci pasuje. Pozdrawiam serdecznie, Michał. Szanowni Państwo, uprzejmie informuję, że rozpoczęcie kursu zostało przełożone o tydzień. Zwracam się z prośbą o potwierdzenie udziału w nowym terminie do piątku. W załączeniu przesyłam zaktualizowany harmonogram zajęć. Z poważaniem, Michał Nowak. Słuchaj, kurs się przesuwa o tydzień, bo nie ma sali. Zaczynamy w następny poniedziałek, spoko? Wiesz co, i tak lepiej, bo mam mega dużo pracy."
 }
},
"29": {
 "day":29,"week":"04",
 "themeRu":"Большая история",
 "themeEn":"Wielka opowieść",
 "intro":"Апрель, суббота перед Пасхой, и на краковском вокзале стоят двое немолодых людей с сумкой, в которой лежит домашний пирог. Родители Анны приехали на <b>Wielkanoc</b> — и заодно знакомиться с Мареком. Сегодня одна длинная история и весь уровень внутри: ретроспекция, числительные, идиомы, косвенная речь и одна рекламация в ресторане.",
 "introAudio":"Апрель, суббота перед Пасхой, и на краковском вокзале стоят двое немолодых людей с сумкой, в которой лежит домашний пирог. Родители Анны приехали на Wielkanoc и заодно знакомиться с Мареком. Сегодня одна длинная история и весь уровень внутри: ретроспекция, числительные, идиомы, косвенная речь и одна рекламация в ресторане.",
 "goals":[
   "Строить ретроспекцию: <b>wtedy jeszcze nie wiedziałam, że… jak się później okazało</b>",
   "Говорить о Пасхе: <b>święconka, śniadanie wielkanocne, śmigus-dyngus</b>",
   "Переводить между двумя языками: <b>tłumaczyć, przekazać, powiedzieć inaczej</b>",
   "Держать плотность рассказа: существительные, деепричастия, идиома, оценка"
 ],
 "learned":[
   "Построил(а) ретроспекцию: wtedy jeszcze nie wiedziałam, że и jak się później okazało",
   "Заговорил(а) о Пасхе: święconka, śniadanie wielkanocne, śmigus-dyngus",
   "Побыл(а) переводчиком: tłumaczyć, przekazać, powiedzieć inaczej",
   "Удержал(а) плотность рассказа: существительные, деепричастия, идиома, оценка"
 ],
 "review":{
   "intro":"Вчерашние этажи — на разминку. Официальная формула, разговорное слово, переход на «ты» и одно <b>no</b>, которое не «нет».",
   "introAudio":"Вчерашние этажи — на разминку. Официальная формула, разговорное слово, переход на «ты» и одно no, которое не «нет».",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> проверь падеж после prośbą o.",
      "q":"«Обращаюсь с просьбой о переносе срока» —","opts":["Zwracam się z prośbą o przełożeniu terminu","Zwracam się z prośbą o przełożenie terminu","Zwracam się prośbą o przełożenie terminu"],"answer":1,
      "explain":"После prośbą o идёт винительный: <b>o przełożenie</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> не путай с русским «но».",
      "q":"Польское <b>no</b> значит —","opts":["нет","ну, ага","но"],"answer":1,
      "explain":"<b>No</b> — «ну» или «ага». Отрицание — nie."},
     {"type":"choice","howto":"<b>Что делать:</b> определи этаж.",
      "q":"Какое слово НЕ пишут в письме в учреждение?","opts":["uprzejmie","spoko","niniejszym"],"answer":1,
      "explain":"<b>Spoko</b> — разговорное."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Может, перейдём на ты?»</b>","answer":"Może przejdziemy na ty"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Взгляд назад",
    "title":"<em>Wtedy jeszcze nie wiedziałam, że…</em>",
    "paras":[
      "Рассказчик знает конец истории, а герой — нет, и вся сила хорошего рассказа в этом зазоре. Открывает его одна формула: <b>Wtedy jeszcze nie wiedziałam, że…</b> — «тогда я ещё не знала, что…». Ставится она в середину, перед поворотом: читатель напрягается, герой продолжает ничего не подозревать.",
      "Рядом работают ещё три. <b>Jak się później okazało…</b> (как выяснилось позже), <b>kilka dni wcześniej…</b> (несколькими днями раньше — шаг назад во времени), <b>od tego się zaczęło</b> (с этого всё началось). Все три двигают рассказ не вперёд, а вбок и назад.",
      "Книжный оборот для узнавания: <b>miało się okazać, że…</b> — «как выяснится потом». Литературная форма, в разговоре её не услышишь, но в романе и в газетном очерке она встречается постоянно.",
      "И знакомый каркас первого уровня остаётся на месте: <b>najpierw</b>, <b>potem</b>, <b>nagle</b>, <b>okazało się, że</b>, <b>w końcu</b>. Ретроспекция не заменяет его, а надстраивается сверху — как второй этаж над готовым фундаментом."
    ],
    "audio":"Рассказчик знает конец истории, а герой нет, и вся сила хорошего рассказа в этом зазоре. Открывает его одна формула: wtedy jeszcze nie wiedziałam, że. Ставится она в середину, перед поворотом. Рядом работают ещё три: jak się później okazało; kilka dni wcześniej — шаг назад во времени; od tego się zaczęło. Все три двигают рассказ не вперёд, а вбок и назад. Книжный оборот для узнавания: miało się okazać, że. Литературная форма, в разговоре её не услышишь. И знакомый каркас первого уровня остаётся на месте: najpierw, potem, nagle, okazało się, że, w końcu. Ретроспекция не заменяет его, а надстраивается сверху.",
    "table":{"rows":[
      ["<b>Wtedy jeszcze nie wiedziałam, że…</b> <button class=\"play\" data-say=\"Wtedy jeszcze nie wiedziałam, że\">🔊</button>","Тогда я ещё не знала, что…"],
      ["<b>Jak się później okazało…</b> <button class=\"play\" data-say=\"Jak się później okazało\">🔊</button>","Как выяснилось позже…"],
      ["<b>Kilka dni wcześniej…</b> <button class=\"play\" data-say=\"Kilka dni wcześniej\">🔊</button>","Несколькими днями раньше…"],
      ["<b>Od tego się zaczęło.</b> <button class=\"play\" data-say=\"Od tego się zaczęło\">🔊</button>","С этого всё началось."],
      ["<b>miało się okazać, że…</b> <button class=\"play\" data-say=\"miało się okazać, że\">🔊</button>","как выяснится потом — книжное"],
      ["<b>najpierw · nagle · w końcu</b> <button class=\"play\" data-say=\"najpierw, nagle, w końcu\">🔊</button>","каркас рассказа с B1"]
    ],"star":0},
    "examples":[
      {"ru":"Тогда я ещё не знала, что это будет самый длинный день недели.","en":"<b>Wtedy jeszcze nie wiedziałam, że</b> to będzie najdłuższy dzień tygodnia.","say":"Wtedy jeszcze nie wiedziałam, że to będzie najdłuższy dzień tygodnia."},
      {"ru":"Как выяснилось позже, мама выучила три польские фразы.","en":"<b>Jak się później okazało</b>, mama nauczyła się trzech polskich zdań.","gloss":"nauczyć się плюс родительный","say":"Jak się później okazało, mama nauczyła się trzech polskich zdań."},
      {"ru":"Несколькими днями раньше Марек убрал всю квартиру.","en":"<b>Kilka dni wcześniej</b> Marek posprzątał całe mieszkanie.","say":"Kilka dni wcześniej Marek posprzątał całe mieszkanie."},
      {"ru":"С этого и началась вся история с корзинкой.","en":"<b>Od tego się zaczęła</b> cała historia z koszyczkiem.","say":"Od tego się zaczęła cała historia z koszyczkiem."}
    ],
    "mistakes":[
      {"wrong":"Wtedy jeszcze nie wiedziałam, że to będzie najdłuższy dzień, i potem nagle nic się nie stało.","right":"<b>Wtedy jeszcze nie wiedziałam, że…</b> — и дальше обязательно поворот.","why":"эта формула обещает читателю событие. Если после неё ничего не происходит, текст обманывает."},
      {"wrong":"Jak później okazało się, mama mówiła po polsku.","right":"<b>Jak się później okazało</b>, mama mówiła po polsku.","why":"się стоит раньше: устойчивый порядок в этом обороте — jak się później okazało."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> выбери формулу ретроспекции.",
       "q":"«Как выяснилось позже, она всё поняла» —","opts":["Jak później okazało się, wszystko zrozumiała","Jak się później okazało, wszystko zrozumiała","Jak się okazało później, że wszystko zrozumiała"],"answer":1,
       "explain":"Устойчивый порядок: <b>jak się później okazało</b>."},
      {"type":"choice","q":"Что делает фраза <b>Wtedy jeszcze nie wiedziałam, że…</b>?",
       "opts":["готовит поворот в истории","заканчивает рассказ","вводит чужие слова"],"answer":0,
       "explain":"Она создаёт зазор между знанием рассказчика и героя — и обещает событие."},
      {"type":"type","howto":"<b>Что делать:</b> напиши три слова.",
       "q":"«несколькими днями раньше»","accept":["kilka dni wcześniej","kilka dni wczesniej"],"placeholder":"kilka …"}
    ],
    "mnemonic":"⏪ najpierw → wtedy jeszcze nie wiedziałam → nagle → jak się później okazało → w końcu."
   },
   {
    "eyebrow":"Правило 2 · Wielkanoc",
    "title":"<em>Święconka, śniadanie, śmigus-dyngus</em>",
    "paras":[
      "Польская Пасха начинается в субботу. <b>Wielka Sobota</b> — день, когда несут <b>święconkę</b>: корзинку с едой на освящение. Внутри почти всегда одно и то же — <b>jajko</b>, <b>chleb</b>, <b>sól</b>, <b>kiełbasa</b>, <b>chrzan</b> (хрен) и <b>baranek</b> — барашек из сахара или теста.",
      "<b>Niedziela Wielkanocna</b> начинается со <b>śniadania wielkanocnego</b>. За столом сначала делятся освящённым яйцом и говорят пожелания — и вот тут возвращается родительный падеж из B1: <b>Wesołych Świąt!</b>, <b>Wszystkiego najlepszego!</b>, <b>Zdrowia i spokoju!</b> Ещё говорят <b>Wesołego Alleluja!</b>",
      "На столе: <b>żurek</b> (кислый суп на закваске), <b>biała kiełbasa</b>, <b>jajka</b> и <b>pisanki</b> — крашеные и расписанные яйца, <b>mazurek</b> и <b>babka</b> — два пасхальных пирога.",
      "А в понедельник вода. <b>Śmigus-dyngus</b>, он же <b>lany poniedziałek</b>, — день, когда обливают водой всех, до кого дотянешься, и чем моложе, тем мокрее. Дети выходят с бутылками во двор, взрослые делают вид, что их это не касается, и всё равно попадают."
    ],
    "audio":"Польская Пасха начинается в субботу. Wielka Sobota — день, когда несут święconkę: корзинку с едой на освящение. Внутри почти всегда одно и то же: jajko, chleb, sól, kiełbasa, chrzan и baranek, барашек из сахара или теста. Niedziela Wielkanocna начинается со śniadania wielkanocnego. За столом сначала делятся освящённым яйцом и говорят пожелания, и вот тут возвращается родительный падеж из B1: Wesołych Świąt, Wszystkiego najlepszego, Zdrowia i spokoju. Ещё говорят Wesołego Alleluja. На столе żurek, кислый суп на закваске, biała kiełbasa, jajka и pisanki, mazurek и babka. А в понедельник вода. Śmigus-dyngus, он же lany poniedziałek, — день, когда обливают водой всех, до кого дотянешься.",
    "table":{"rows":[
      ["<b>święconka</b> <button class=\"play\" data-say=\"święconka\">🔊</button>","корзинка с едой на освящение"],
      ["<b>jajko, chleb, sól, chrzan, baranek</b> <button class=\"play\" data-say=\"jajko, chleb, sól, chrzan, baranek\">🔊</button>","что кладут в корзинку"],
      ["<b>śniadanie wielkanocne</b> <button class=\"play\" data-say=\"śniadanie wielkanocne\">🔊</button>","пасхальный завтрак"],
      ["<b>Wesołych Świąt!</b> <button class=\"play\" data-say=\"Wesołych Świąt\">🔊</button>","С праздником! — родительный"],
      ["<b>żurek</b> · <b>mazurek</b> · <b>babka</b> <button class=\"play\" data-say=\"żurek, mazurek, babka\">🔊</button>","суп и два пасхальных пирога"],
      ["<b>śmigus-dyngus</b> · <b>lany poniedziałek</b> <button class=\"play\" data-say=\"śmigus-dyngus, lany poniedziałek\">🔊</button>","обливальный понедельник"]
    ],"star":3},
    "examples":[
      {"ru":"В субботу мы понесли корзинку на освящение.","en":"W sobotę zanieśliśmy <b>święconkę</b> do kościoła.","say":"W sobotę zanieśliśmy święconkę do kościoła."},
      {"ru":"Завтрак начинается с того, что делятся яйцом.","en":"Śniadanie zaczyna się od <b>dzielenia się jajkiem</b>.","gloss":"отглагольное существительное — день 1","say":"Śniadanie zaczyna się od dzielenia się jajkiem."},
      {"ru":"С праздником и здоровья вам!","en":"<b>Wesołych Świąt</b> i <b>zdrowia</b>!","gloss":"пожелания — родительный падеж","say":"Wesołych Świąt i zdrowia!"},
      {"ru":"В понедельник соседские дети облили нас у самой двери.","en":"W poniedziałek sąsiedzkie dzieci oblały nas tuż przy drzwiach.","say":"W poniedziałek sąsiedzkie dzieci oblały nas tuż przy drzwiach."}
    ],
    "mistakes":[
      {"wrong":"Wesołe Święta!","right":"<b>Wesołych Świąt!</b>","why":"пожелания идут в родительном падеже: за ними стоит невысказанное życzę."},
      {"wrong":"W niedzielę wszyscy się oblewają wodą.","right":"<b>W poniedziałek</b> wszyscy się oblewają wodą.","why":"śmigus-dyngus — это понедельник, второй день праздника. Воскресенье тихое и застольное."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж пожеланий.",
       "q":"«Весёлых праздников!» —","opts":["Wesołe Święta!","Wesołych Świąt!","Wesołym Świętom!"],"answer":1,
       "explain":"Пожелания — родительный падеж: <b>Wesołych Świąt</b>."},
      {"type":"choice","q":"<b>Śmigus-dyngus</b> — это —",
       "opts":["пасхальный завтрак","обливание водой в понедельник","освящение корзинки"],"answer":1,
       "explain":"Второй день Пасхи, он же lany poniedziałek."},
      {"type":"type","howto":"<b>Что делать:</b> напиши одно слово.",
       "q":"«корзинка с едой на освящение»","accept":["święconka","swieconka","święconkę","swieconke"],"placeholder":"świę…"}
    ],
    "mnemonic":"🧺 sobota — święconka · niedziela — śniadanie i życzenia · poniedziałek — woda."
   },
   {
    "eyebrow":"Правило 3 · Ты переводчик",
    "title":"<em>Tłumaczyć, przekazać, powiedzieć inaczej</em>",
    "paras":[
      "За столом, где половина не понимает другую половину, появляется отдельная роль, и слова для неё нужны свои. <b>Tłumaczyć komuś coś</b> — переводить кому-то что-то: <b>Tłumaczyłam mamie każde zdanie.</b> <b>Przekazać</b> — передать смысл: <b>Przekaż mu, że bardzo dziękujemy.</b>",
      "Живой перевод почти целиком состоит из косвенной речи, а она в польском, как и в русском, времён не сдвигает. <b>Mama pyta, czy dom jest stary.</b> <b>Tata mówi, że u nas robi się to inaczej.</b> <b>Marek prosi, żebyście spróbowali żurku.</b> — и снова л-форма после <b>żeby</b>.",
      "Тут же в дело идут числительные по падежам из второй недели. <b>Dom babci Marka ma sto dwadzieścia lat.</b> <b>Stoi tu od stu dwudziestu lat.</b> После <b>od</b> — родительный, и склоняются оба слова. Именно на таких фразах перевод обычно и спотыкается.",
      "И три честные фразы переводчика, без которых не обойтись: <b>Nie wiem, jak to powiedzieć po polsku.</b> <b>Powiem to inaczej.</b> <b>Chwileczkę, przetłumaczę.</b> Признать, что фразы не хватает, — не провал, а нормальная часть работы."
    ],
    "audio":"За столом, где половина не понимает другую половину, появляется отдельная роль, и слова для неё нужны свои. Tłumaczyć komuś coś — переводить кому-то что-то: tłumaczyłam mamie każde zdanie. Przekazać — передать смысл: przekaż mu, że bardzo dziękujemy. Живой перевод почти целиком состоит из косвенной речи, а она в польском, как и в русском, времён не сдвигает. Mama pyta, czy dom jest stary. Tata mówi, że u nas robi się to inaczej. Marek prosi, żebyście spróbowali żurku. Тут же в дело идут числительные по падежам из второй недели: dom babci Marka ma sto dwadzieścia lat; stoi tu od stu dwudziestu lat. После od родительный, и склоняются оба слова. И три честные фразы переводчика: nie wiem, jak to powiedzieć po polsku; powiem to inaczej; chwileczkę, przetłumaczę.",
    "table":{"rows":[
      ["<b>tłumaczyć komuś coś</b> <button class=\"play\" data-say=\"Tłumaczyłam mamie każde zdanie\">🔊</button>","переводить кому-то что-то"],
      ["<b>Przekaż mu, że…</b> <button class=\"play\" data-say=\"Przekaż mu, że bardzo dziękujemy\">🔊</button>","Передай ему, что…"],
      ["<b>Mama pyta, czy…</b> <button class=\"play\" data-say=\"Mama pyta, czy dom jest stary\">🔊</button>","Мама спрашивает, …ли…"],
      ["<b>Marek prosi, żebyście…</b> <button class=\"play\" data-say=\"Marek prosi, żebyście spróbowali żurku\">🔊</button>","Марек просит, чтобы вы…"],
      ["<b>od stu dwudziestu lat</b> <button class=\"play\" data-say=\"od stu dwudziestu lat\">🔊</button>","сто двадцать лет — родительный"],
      ["<b>Chwileczkę, przetłumaczę.</b> <button class=\"play\" data-say=\"Chwileczkę, przetłumaczę\">🔊</button>","Секунду, я переведу."]
    ],"star":4},
    "examples":[
      {"ru":"Я переводила маме каждое предложение.","en":"<b>Tłumaczyłam mamie</b> każde zdanie.","say":"Tłumaczyłam mamie każde zdanie."},
      {"ru":"Мама спрашивает, старый ли этот дом.","en":"<b>Mama pyta, czy</b> ten dom jest stary.","gloss":"косвенный вопрос — czy","say":"Mama pyta, czy ten dom jest stary."},
      {"ru":"Дом стоит здесь сто двадцать лет.","en":"Dom stoi tu <b>od stu dwudziestu lat</b>.","gloss":"после od — родительный, день 8","say":"Dom stoi tu od stu dwudziestu lat."},
      {"ru":"Марек просит, чтобы вы попробовали журек.","en":"<b>Marek prosi, żebyście</b> spróbowali żurku.","gloss":"после żeby — л-форма","say":"Marek prosi, żebyście spróbowali żurku."}
    ],
    "mistakes":[
      {"wrong":"Dom stoi tu od sto dwadzieścia lat.","right":"Dom stoi tu <b>od stu dwudziestu lat</b>.","why":"после od числительное склоняется целиком: stu dwudziestu."},
      {"wrong":"Marek prosi, żebyście spróbujecie żurku.","right":"Marek prosi, <b>żebyście spróbowali</b> żurku.","why":"после żeby всегда л-форма — как в русском «чтобы вы попробовали»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни склонение числительного.",
       "q":"«Дом стоит здесь сто двадцать лет» —","opts":["Dom stoi tu od sto dwadzieścia lat","Dom stoi tu od stu dwudziestu lat","Dom stoi tu od stem dwudziestoma lat"],"answer":1,
       "explain":"После od — родительный: <b>stu dwudziestu lat</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> следи за формой после żeby.",
       "q":"«Марек просит, чтобы вы попробовали» —","opts":["Marek prosi, żebyście spróbujecie","Marek prosi, żebyście spróbowali","Marek prosi, że spróbujecie"],"answer":1,
       "explain":"После żeby — л-форма: <b>żebyście spróbowali</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Мама спрашивает, старый ли этот дом»</b>","answer":"Mama pyta czy ten dom jest stary"}
    ],
    "mnemonic":"🗣️ tłumaczyć → przekazać → mama pyta, czy… → chwileczkę, przetłumaczę."
   },
   {
    "eyebrow":"Правило 4 · Плотность B2",
    "title":"Что отличает взрослый рассказ",
    "paras":[
      "На B1 плотность давали причастия и деепричастия. На B2 к ним добавляются отглагольные существительные первой недели, и текст сжимается ещё раз: не «после того как приехали родители», а <b>po przyjeździe rodziców</b>; не «прежде чем мы вышли», а <b>przed wyjściem</b>; не «во время того как ждали», а <b>podczas czekania</b>.",
      "Деепричастие по-прежнему сшивает два действия одного человека: <b>Wchodząc do kuchni, usłyszałam śmiech.</b> Причастие уплотняет описание: <b>ludzie stojący w kolejce do święconki</b>. Оба приёма никуда не делись — просто теперь они идут рядом с существительными.",
      "Одна идиома на абзац — ровно одна. Вчерашний день дал двенадцать, но текст, где они стоят подряд, читается как учебник фразеологии. <b>Robiłam z igły widły</b> в нужном месте стоит дороже, чем пять идиом в одном предложении.",
      "И голос рассказчика — оценки, без которых текст остаётся протоколом: <b>szczerze mówiąc</b> (честно говоря), <b>prawdę mówiąc</b> (по правде говоря), <b>co ciekawe</b> (что интересно), <b>na szczęście</b>, <b>niestety</b>. Заканчивается всё выводом, а не последним событием — это правило с B1 работает и здесь."
    ],
    "audio":"На B1 плотность давали причастия и деепричастия. На B2 к ним добавляются отглагольные существительные первой недели, и текст сжимается ещё раз: не после того как приехали родители, а po przyjeździe rodziców; не прежде чем мы вышли, а przed wyjściem; не во время того как ждали, а podczas czekania. Деепричастие по-прежнему сшивает два действия одного человека: wchodząc do kuchni, usłyszałam śmiech. Причастие уплотняет описание: ludzie stojący w kolejce do święconki. Одна идиома на абзац, ровно одна. И голос рассказчика — оценки, без которых текст остаётся протоколом: szczerze mówiąc, prawdę mówiąc, co ciekawe, na szczęście, niestety. Заканчивается всё выводом, а не последним событием.",
    "table":{"rows":[
      ["<b>po przyjeździe rodziców</b> <button class=\"play\" data-say=\"po przyjeździe rodziców\">🔊</button>","после приезда родителей"],
      ["<b>przed wyjściem</b> · <b>podczas czekania</b> <button class=\"play\" data-say=\"przed wyjściem, podczas czekania\">🔊</button>","перед выходом · во время ожидания"],
      ["<b>Wchodząc do kuchni, usłyszałam śmiech.</b> <button class=\"play\" data-say=\"Wchodząc do kuchni, usłyszałam śmiech\">🔊</button>","Входя в кухню, я услышала смех."],
      ["<b>ludzie stojący w kolejce</b> <button class=\"play\" data-say=\"ludzie stojący w kolejce\">🔊</button>","люди, стоящие в очереди"],
      ["<b>szczerze mówiąc</b> · <b>co ciekawe</b> <button class=\"play\" data-say=\"szczerze mówiąc, co ciekawe\">🔊</button>","честно говоря · что интересно"],
      ["<b>Podsumowując…</b> <button class=\"play\" data-say=\"Podsumowując\">🔊</button>","Подводя итог…"]
    ],"star":0},
    "examples":[
      {"ru":"После приезда родителей квартира стала вдвое меньше.","en":"<b>Po przyjeździe rodziców</b> mieszkanie zrobiło się dwa razy mniejsze.","say":"Po przyjeździe rodziców mieszkanie zrobiło się dwa razy mniejsze."},
      {"ru":"Входя в кухню, я услышала смех сразу на двух языках.","en":"<b>Wchodząc do kuchni</b>, usłyszałam śmiech w dwóch językach naraz.","say":"Wchodząc do kuchni, usłyszałam śmiech w dwóch językach naraz."},
      {"ru":"Честно говоря, я боялась этого завтрака целый месяц.","en":"<b>Szczerze mówiąc</b>, bałam się tego śniadania cały miesiąc.","say":"Szczerze mówiąc, bałam się tego śniadania cały miesiąc."},
      {"ru":"Что интересно, переводить пришлось меньше, чем я думала.","en":"<b>Co ciekawe</b>, tłumaczyć trzeba było mniej, niż myślałam.","say":"Co ciekawe, tłumaczyć trzeba było mniej, niż myślałam."}
    ],
    "mistakes":[
      {"wrong":"Po przyjeździe rodziców, mieszkanie zrobiło się mniejsze i było bułką z masłem i piątym kołem u wozu.","right":"<b>Po przyjeździe rodziców mieszkanie zrobiło się dwa razy mniejsze.</b>","why":"идиомы не ставят гроздью. Одна на абзац — и она работает; три подряд — и текст звучит как упражнение."},
      {"wrong":"Czekając na pociąg, przyjechali rodzice.","right":"<b>Kiedy czekałam</b> na pociąg, przyjechali rodzice.","why":"ждала я, а приехали родители: подлежащие разные, деепричастие не годится."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> сожми придаточное в существительное.",
       "q":"«После того как приехали родители» короче звучит как —","opts":["Po przyjeździe rodziców","Po przyjechali rodzice","Po przyjechaniu rodzicami"],"answer":0,
       "explain":"Отглагольное существительное плюс родительный: <b>po przyjeździe rodziców</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> проверь подлежащее.",
       "q":"Какая фраза правильная?","opts":["Czekając na pociąg, przyjechali rodzice","Wchodząc do kuchni, usłyszałam śmiech","Tłumacząc mamie, zrobiło się późno"],"answer":1,
       "explain":"Деепричастие требует одного подлежащего для обоих действий."},
      {"type":"speak","howto":"Нажми микрофон и скажи это как рассказчик, не как диктор.",
       "target":"Szczerze mówiąc, po przyjeździe rodziców bałam się każdego zdania przy stole.","sub":"честно говоря, после приезда родителей я боялась каждой фразы за столом","want":"Szczerze mówiąc, po przyjeździe rodziców bałam się każdego zdania przy stole."}
    ],
    "mnemonic":"🧵 существительное сжимает · деепричастие сшивает · идиома оживляет · оценка даёт голос."
   }
 ],
 "dialogue":{
   "intro":"Пасхальный завтрак. Мама Анны, Марек и посередине сама Анна в роли переводчика — на два языка сразу.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Proszę, to jest żurek. Nasza mama robiła go co roku w tym samym garnku.","ru":"Пожалуйста, это журек. Наша мама варила его каждый год в одной и той же кастрюле.",
      "words":[["żurek","журек"],["w tym samym garnku","в той же кастрюле"]]},
     {"who":"A","name":"Anna","side":"left","en":"Mama pyta, czy to zupa na śniadanie. U nas rano zupy się nie jada.","ru":"Мама спрашивает, суп ли это на завтрак. У нас по утрам супов не едят.",
      "words":[["Mama pyta, czy","мама спрашивает, ли"],["nie jada","не едят обычно"]]},
     {"who":"M","name":"Marek","side":"right","en":"Na Wielkanoc tak. Chwileczkę, przyniosę jeszcze białą kiełbasę.","ru":"На Пасху — да. Секунду, принесу ещё белую колбасу.",
      "words":[["Na Wielkanoc","на Пасху"],["Chwileczkę","секунду"]]},
     {"who":"A","name":"Anna","side":"left","en":"Tata mówi, że dom jest piękny. Pyta, ile ma lat.","ru":"Папа говорит, что дом красивый. Спрашивает, сколько ему лет.",
      "words":[["Tata mówi, że","папа говорит, что"],["ile ma lat","сколько ему лет"]]},
     {"who":"M","name":"Marek","side":"right","en":"Sto dwadzieścia. Stoi tu od stu dwudziestu lat, babcia się w nim urodziła.","ru":"Сто двадцать. Он стоит здесь сто двадцать лет, бабушка в нём родилась.",
      "words":[["od stu dwudziestu lat","сто двадцать лет"],["się urodziła","родилась"]]},
     {"who":"A","name":"Anna","side":"left","en":"Nie wiem, jak to powiedzieć po polsku. Powiem to inaczej: ozdoby przy oknach.","ru":"Не знаю, как это сказать по-польски. Скажу иначе: украшения у окон.",
      "words":[["Nie wiem, jak powiedzieć","не знаю, как сказать"],["Powiem to inaczej","скажу иначе"]]},
     {"who":"M","name":"Marek","side":"right","en":"Przekaż im, proszę, że bardzo się cieszę, że przyjechali.","ru":"Передай им, пожалуйста, что я очень рад, что они приехали.",
      "words":[["Przekaż im","передай им"],["się cieszę","я рад"]]},
     {"who":"A","name":"Anna","side":"left","en":"Przekazałam. Mama mówi, że ty i tak wszystko rozumiesz bez tłumaczenia.","ru":"Передала. Мама говорит, что ты и так всё понимаешь без перевода.",
      "words":[["Przekazałam","передала"],["bez tłumaczenia","без перевода"]]},
     {"who":"M","name":"Marek","side":"right","en":"Bo rozumiem. Marek prosi, żebyście spróbowali mazurka — to mówię o sobie.","ru":"Потому что понимаю. Марек просит, чтобы вы попробовали мазурек — это я о себе.",
      "words":[["żebyście spróbowali","чтобы вы попробовали"],["o sobie","о себе"]]},
     {"who":"A","name":"Anna","side":"left","en":"Wtedy jeszcze nie wiedziałam, że do wieczora przestaniemy potrzebować tłumacza.","ru":"Тогда я ещё не знала, что к вечеру переводчик нам будет не нужен.",
      "words":[["Wtedy jeszcze nie wiedziałam","тогда я ещё не знала"],["tłumacza","переводчика"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — вечер того же дня, ресторан на Казимеже и одна маленькая рекламация. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Przepraszam pana, to nie jest to, co zamawialiśmy.","ru":"Извините, это не то, что мы заказывали."},
     {"who":"B","en":"Zamówienie na cztery osoby, prawda? Pierogi ruskie i żurek.","ru":"Заказ на четверых, верно? Пироги с картошкой и творогом и журек."},
     {"who":"A","en":"Żurek jest zimny, a pierogów są trzy zamiast ośmiu.","ru":"Журек холодный, а пирогов три вместо восьми."},
     {"who":"B","en":"Bardzo przepraszam. Wymienię danie i dziś nie płacą państwo za zupę.","ru":"Прошу прощения. Заменю блюдо, и за суп вы сегодня не платите."},
     {"who":"A","en":"Dziękujemy. Mąż mówi, żeby nie robić z igły wideł, ale zupa naprawdę była zimna.","ru":"Спасибо. Муж говорит, чтобы не раздувать из мелочи, но суп правда был холодный."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать единиц дня — Пасха, ретроспекция и работа переводчика.",
   "items":[
     {"en":"Wielkanoc","ru":"Пасха","ex":"Na Wielkanoc przyjechali rodzice."},
     {"en":"święconka","ru":"корзинка на освящение","ex":"Zanieśliśmy święconkę w sobotę."},
     {"en":"śniadanie wielkanocne","ru":"пасхальный завтрак","ex":"Śniadanie wielkanocne trwało trzy godziny."},
     {"en":"pisanki","ru":"расписные яйца","ex":"Mama zrobiła pisanki z dziećmi sąsiadów."},
     {"en":"śmigus-dyngus","ru":"обливальный понедельник","ex":"W śmigus-dyngus wszyscy są mokrzy."},
     {"en":"Wesołych Świąt!","ru":"С праздником!","ex":"Wesołych Świąt i zdrowia!"},
     {"en":"wtedy jeszcze nie wiedziałam, że","ru":"тогда я ещё не знала, что","ex":"Wtedy jeszcze nie wiedziałam, że to dopiero początek."},
     {"en":"jak się później okazało","ru":"как выяснилось позже","ex":"Jak się później okazało, mieli rację."},
     {"en":"tłumaczyć komuś","ru":"переводить кому-то","ex":"Tłumaczyłam mamie każde zdanie."},
     {"en":"przekazać","ru":"передать","ex":"Przekaż mu, że dziękujemy."},
     {"en":"szczerze mówiąc","ru":"честно говоря","ex":"Szczerze mówiąc, bałam się tego dnia."},
     {"en":"co ciekawe","ru":"что интересно","ex":"Co ciekawe, nikt się nie pokłócił."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское выражение к его переводу.",
   "pairs":[["święconka","корзинка на освящение"],["śmigus-dyngus","обливальный понедельник"],["przekazać","передать"],["co ciekawe","что интересно"]]
 },
 "reading":{
   "intro":"Прочитай и послушай большую историю целиком. Здесь работает весь уровень: словообразование, числительные, союзы, безличность, идиома и ретроспекция.",
   "title":"Wielkanoc, na której nikt nikogo nie zrozumiał — a jednak",
   "sentences":["Rodzice przyjechali w Wielką Sobotę o ósmej rano, z torbą, w której leżało domowe ciasto.","Kilka dni wcześniej Marek wyremontował łazienkę i dwa razy dziennie pytał, czy na pewno wszystko gotowe.","Wtedy jeszcze nie wiedziałam, że najtrudniejsze będzie nie mieszkanie, tylko pierwsze piętnaście minut rozmowy.","Po przyjeździe rodziców poszliśmy wszyscy do kościoła ze święconką, bo tak się tutaj po prostu robi.","Ludzie stojący w kolejce z koszyczkami wyglądali dokładnie tak jak my: trochę zmęczeni i trochę uroczyści.","Mama zapytała szeptem, po co w koszyku chrzan, a ja pierwszy raz w życiu nie umiałam odpowiedzieć.","W niedzielę przy śniadaniu tłumaczyłam każde zdanie w obie strony i po godzinie bolała mnie głowa.","Marek prosił, żeby spróbowali żurku, tata twierdził, że zupa rano to pomysł odważny, a mama zjadła dwa talerze.","Kiedy tata zapytał, ile lat ma dom babci, usłyszał, że stoi tu od stu dwudziestu lat, i tylko pokiwał głową.","Szczerze mówiąc, przez pół dnia robiłam z igły widły, bo bałam się każdej ciszy przy stole.","Wieczorem poszliśmy do restauracji na Kazimierzu, gdzie przynieśli nam zimny żurek i trzy pierogi zamiast ośmiu.","Złożyliśmy najkrótszą reklamację w historii: kelner wymienił danie, a zupy nie policzył.","Jak się później okazało, tata i Marek dogadali się bez tłumaczenia, bo obaj znali się na hydraulice.","W poniedziałek dzieci sąsiadów oblały nas wodą przy samych drzwiach i tego akurat nikomu nie musiałam tłumaczyć."],
   "translation":"Родители приехали в Великую субботу в восемь утра, с сумкой, в которой лежал домашний пирог. Несколькими днями раньше Марек отремонтировал ванную и два раза в день спрашивал, точно ли всё готово. Тогда я ещё не знала, что самым трудным будет не квартира, а первые пятнадцать минут разговора. После приезда родителей мы все пошли в костёл с корзинкой, потому что здесь так просто принято. Люди, стоявшие в очереди с корзинками, выглядели ровно как мы: немного усталые и немного торжественные. Мама шёпотом спросила, зачем в корзинке хрен, а я впервые в жизни не смогла ответить. В воскресенье за завтраком я переводила каждое предложение в обе стороны, и через час у меня разболелась голова. Марек просил, чтобы они попробовали журек, папа утверждал, что суп с утра — смелая идея, а мама съела две тарелки. Когда папа спросил, сколько лет дому бабушки, он услышал, что дом стоит здесь сто двадцать лет, и только покивал. Честно говоря, полдня я раздувала из мелочи катастрофу, потому что боялась каждой паузы за столом. Вечером мы пошли в ресторан на Казимеже, где нам принесли холодный журек и три пирога вместо восьми. Мы подали самую короткую рекламацию в истории: официант заменил блюдо, а суп не посчитал. Как выяснилось позже, папа и Марек договорились без перевода, потому что оба разбирались в сантехнике. В понедельник соседские дети облили нас водой у самой двери, и вот это переводить никому не пришлось."
 },
 "quiz":{
   "intro":"Пять вопросов — и большая история держится сама.",
   "items":[
     {"q":"1. «Как выяснилось позже, она всё поняла» —","opts":["Jak później okazało się, wszystko zrozumiała","Jak się później okazało, wszystko zrozumiała","Jak okazało później się, wszystko zrozumiała"],"answer":1,
      "explain":"Устойчивый порядок: <b>jak się później okazało</b>."},
     {"q":"2. «Весёлых праздников!» —","opts":["Wesołe Święta!","Wesołych Świąt!","Wesołym Świętom!"],"answer":1,
      "explain":"Пожелания идут в родительном падеже."},
     {"q":"3. «Дом стоит здесь сто двадцать лет» —","opts":["od sto dwadzieścia lat","od stu dwudziestu lat","od stem dwadzieścia lat"],"answer":1,
      "explain":"После od — родительный, склоняются оба слова."},
     {"q":"4. «После приезда родителей» —","opts":["Po przyjeździe rodziców","Po przyjechali rodzice","Po przyjechaniu rodzicami"],"answer":0,
      "explain":"Отглагольное существительное плюс родительный падеж."},
     {"q":"5. <b>Śmigus-dyngus</b> — это —","opts":["пасхальный завтрак","обливание водой в понедельник","освящение корзинки в субботу"],"answer":1,
      "explain":"Второй день Пасхи, он же lany poniedziałek."}
   ]
 },
 "essay":{
   "intro":"Твоя большая история. Возьми день, когда встретились люди, говорящие на разных языках, — или просто день, который оказался длиннее, чем ты думал(а).",
   "prompt":"Напиши рассказ в 10–12 предложений: как всё начиналось, что было трудно, что кто-то сказал, что выяснилось позже и чем всё кончилось. Обязательно вставь ретроспекцию (wtedy jeszcze nie wiedziałem/wiedziałam, że… или jak się później okazało), одно отглагольное существительное с po или przed, одну косвенную речь и ровно одну идиому.",
   "hint":"Каркас: Kilka dni wcześniej… · Po przyjeździe… · Wtedy jeszcze nie wiedziałem/wiedziałam, że… · Mama pyta, czy… · Jak się później okazało… · Podsumowując… 🧺",
   "example":"Kilka dni wcześniej sprzątałem mieszkanie tak, jak nie sprzątałem go od roku. Rodzice mojej żony przyjechali w sobotę rano, z torbą pełną jedzenia, którego nikt nie prosił. Wtedy jeszcze nie wiedziałem, że najtrudniejsze będą nie potrawy, tylko pierwsze pół godziny rozmowy. Po przyjeździe teściów mieszkanie zrobiło się dwa razy mniejsze, a kuchnia dwa razy głośniejsza. Żona tłumaczyła każde zdanie w obie strony i po godzinie miała dosyć. Teść zapytał, ile lat ma nasz dom, i usłyszał, że stoi tu od osiemdziesięciu lat. Szczerze mówiąc, przez pół dnia robiłem z igły widły i bałem się każdej ciszy przy stole. Wieczorem okazało się, że obaj oglądamy ten sam sport i że to zupełnie wystarczy. Jak się później okazało, teściowa zapamiętała moje imię lepiej niż ja jej. W poniedziałek odwiozłem ich na dworzec i po raz pierwszy było mi żal, że wyjeżdżają. Podsumowując: dwa języki, jedna kuchnia i żadnej katastrofy."
 }
},
"30": {
 "day":30,"week":"04",
 "themeRu":"Уверенно о сложном",
 "themeEn":"Pewnie o trudnym",
 "intro":"Тридцатый день. Месяц назад этот уровень начинался с одного суффикса — <b>-anie</b>, <b>-enie</b>, <b>-cie</b>, — а сегодня у тебя в руках словообразование, склонение числительных и фамилий, трудная рекция, союзы на все оттенки, безличность во всех временах и четыре взрослых жанра. Сегодня мы смотрим, как устроен сертификатный B2, пишем финальный текст — и прощаемся.",
 "introAudio":"Тридцатый день. Месяц назад этот уровень начинался с одного суффикса: -anie, -enie, -cie. А сегодня в руках есть словообразование, склонение числительных и фамилий, трудная рекция, союзы на все оттенки, безличность во всех временах и четыре взрослых жанра. Сегодня мы смотрим, как устроен сертификатный B2, пишем финальный текст и прощаемся.",
 "goals":[
   "Понимать устройство экзамена: <b>pięć części, wyższa poprzeczka</b>",
   "Собрать финальный текст <b>Mój rok</b> из пяти обязательных деталей",
   "Подвести итог уровня: что теперь у тебя есть",
   "Увидеть мост к <b>C1</b> — и закрыть <b>B2</b>"
 ],
 "learned":[
   "Понял(а) устройство экзамена: pięć części, wyższa poprzeczka",
   "Собрал(а) финальный текст Mój rok из пяти обязательных деталей",
   "Подвёл(а) итог уровня: что теперь есть в руках",
   "Увидел(а) мост к C1 — и закрыл(а) B2"
 ],
 "review":{
   "intro":"Последняя разминка уровня — по всему сразу: словообразование, числительные, союз третьей недели и один жанр.",
   "introAudio":"Последняя разминка уровня — по всему сразу: словообразование, числительные, союз третьей недели и один жанр.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни отглагольное существительное.",
      "q":"«после прочтения книги» —","opts":["po przeczytać książkę","po przeczytaniu książki","po przeczytanie książki"],"answer":1,
      "explain":"Po плюс предложный: <b>po przeczytaniu</b>, дальше родительный — książki."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни главную ловушку второй недели.",
      "q":"«Пришло пятеро студентов» —","opts":["Pięciu studentów przyszli","Pięciu studentów przyszło","Pięć studentów przyszli"],"answer":1,
      "explain":"При форме на -u глагол идёт в единственном числе среднего рода: <b>przyszło</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> помни: после zanim не ставят nie.",
      "q":"«Прежде чем выйдешь, погаси свет» —","opts":["Zanim nie wyjdziesz, zgaś światło","Zanim wyjdziesz, zgaś światło","Dopóki wyjdziesz, zgaś światło"],"answer":1,
      "explain":"После <b>zanim</b> отрицания нет — в отличие от русского «пока не»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Требую замены товара»</b>","answer":"Żądam wymiany towaru"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · День экзамена",
    "title":"<em>Egzamin certyfikatowy</em> на уровне B2",
    "paras":[
      "Экзамен называется так же, как на B1: <b>egzamin certyfikatowy z języka polskiego jako obcego</b>, и частей у него столько же — пять. <b>Rozumienie ze słuchu</b>, <b>poprawność gramatyczna</b>, <b>rozumienie tekstów pisanych</b>, <b>pisanie</b> и устная <b>mówienie</b>. Меняется не список, а высота планки.",
      "В чтении и аудировании тексты длиннее и приходят из разных источников: интервью, объявление, статья, разговор. В <b>pisaniu</b> дают выбор жанра — и это ровно те жанры, которые мы прошли за эту неделю: <b>list oficjalny</b>, <b>rozprawka</b>, <b>recenzja</b>, <b>opowiadanie</b>.",
      "В устной части мало рассказать — нужно ещё обосновать и ответить на возражение. Пригодятся связки из дня 25 (<b>warto zauważyć, że</b>, <b>nie da się ukryć, że</b>) и мягкое несогласие из дня 27 (<b>coś w tym jest, ale…</b>, <b>powiedziałbym raczej, że…</b>).",
      "И одно практическое правило: части считаются отдельно, и блестящая устная не закроет провал в грамматике. Поэтому готовятся ко всем пяти. Слова вокруг те же, что год назад: <b>arkusz</b>, <b>komisja</b>, <b>wynik</b>, <b>świadectwo</b>, <b>zdawać</b> и <b>zdać</b>."
    ],
    "audio":"Экзамен называется так же, как на B1: egzamin certyfikatowy z języka polskiego jako obcego, и частей у него столько же, пять. Rozumienie ze słuchu, poprawność gramatyczna, rozumienie tekstów pisanych, pisanie и устная mówienie. Меняется не список, а высота планки. В чтении и аудировании тексты длиннее и приходят из разных источников: интервью, объявление, статья, разговор. В pisaniu дают выбор жанра, и это ровно те жанры, которые мы прошли за эту неделю: list oficjalny, rozprawka, recenzja, opowiadanie. В устной части мало рассказать, нужно ещё обосновать и ответить на возражение. И одно практическое правило: части считаются отдельно, и блестящая устная не закроет провал в грамматике. Слова вокруг те же: arkusz, komisja, wynik, świadectwo, zdawać и zdać.",
    "table":{"rows":[
      ["<b>rozumienie ze słuchu</b> <button class=\"play\" data-say=\"rozumienie ze słuchu\">🔊</button>","аудирование"],
      ["<b>poprawność gramatyczna</b> <button class=\"play\" data-say=\"poprawność gramatyczna\">🔊</button>","грамматика"],
      ["<b>rozumienie tekstów pisanych</b> <button class=\"play\" data-say=\"rozumienie tekstów pisanych\">🔊</button>","чтение"],
      ["<b>pisanie</b>: list · rozprawka · recenzja <button class=\"play\" data-say=\"pisanie, list oficjalny, rozprawka, recenzja\">🔊</button>","письмо — выбор жанра"],
      ["<b>mówienie</b> <button class=\"play\" data-say=\"mówienie\">🔊</button>","говорение — рассказать и обосновать"],
      ["<b>zdawać</b> — <b>zdać</b> <button class=\"play\" data-say=\"zdawać egzamin, zdać egzamin\">🔊</button>","сдавать — сдать"]
    ],"star":3},
    "examples":[
      {"ru":"В письменной части я выбрала рассуждение.","en":"W części pisemnej wybrałam <b>rozprawkę</b>.","say":"W części pisemnej wybrałam rozprawkę."},
      {"ru":"Аудирование было длиннее, чем на B1.","en":"<b>Rozumienie ze słuchu</b> było dłuższe niż na B1.","say":"Rozumienie ze słuchu było dłuższe niż na B1."},
      {"ru":"На устной части нужно было обосновать своё мнение.","en":"W części ustnej trzeba było <b>uzasadnić swoje zdanie</b>.","say":"W części ustnej trzeba było uzasadnić swoje zdanie."},
      {"ru":"Я сдала. Результат будет через месяц.","en":"<b>Zdałam.</b> <b>Wynik</b> będzie za miesiąc.","gloss":"zdałam — результат, совершенный вид","say":"Zdałam. Wynik będzie za miesiąc."}
    ],
    "mistakes":[
      {"wrong":"Wczoraj zdawałam egzamin i mam już certyfikat.","right":"Wczoraj <b>zdałam</b> egzamin.","why":"результат — совершенный вид zdać. Zdawałam говорит только о процессе, без итога."},
      {"wrong":"W części pisemnej pisałam recenzję i rozprawkę i list.","right":"W części pisemnej <b>wybiera się jeden</b> gatunek.","why":"жанр на письменной части выбирают, а не пишут все подряд: времени хватает ровно на один текст."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> итог известен или нет?",
       "q":"«Я сдала экзамен!» (успешно) —","opts":["Zdawałam egzamin!","Zdałam egzamin!","Będę zdawać egzamin!"],"answer":1,
       "explain":"Результат — совершенный вид: <b>zdałam</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что дают на письменной части.",
       "q":"В части <b>pisanie</b> на B2 обычно —","opts":["дают выбор жанра","дают только диктант","письма не бывает"],"answer":0,
       "explain":"Выбирают жанр: list oficjalny, rozprawka, recenzja или opowiadanie."},
      {"type":"type","howto":"<b>Что делать:</b> напиши пожелание перед экзаменом.",
       "q":"«Удачи!» по-польски","accept":["powodzenia","powodzenia!"],"placeholder":"Powo…"}
    ],
    "mnemonic":"📝 słuchanie · gramatyka · czytanie · pisanie · mówienie. Пять дверей, и каждая считается отдельно."
   },
   {
    "eyebrow":"Правило 2 · Твой финальный текст",
    "title":"<em>Mój rok</em> — пять обязательных деталей",
    "paras":[
      "Финальный проект уровня называется <b>Mój rok</b>, и в нём должно быть пять вещей — по одной от каждой недели плюс одна от тебя. Первая: <b>отглагольное существительное</b> с предлогом. <b>Po przeprowadzce do Krakowa wszystko wyglądało inaczej.</b> <b>Przed egzaminem prawie nie spałam.</b>",
      "Вторая: <b>склонённое числительное</b> — то, чего на B1 ещё не было. <b>Od dwóch lat mieszkam w Polsce.</b> <b>Pracuję z dwiema koleżankami z wydawnictwa.</b> <b>Urodziłam się w tysiąc dziewięćset dziewięćdziesiątym drugim roku.</b>",
      "Третья: <b>два союза третьей недели</b>. <b>Zanim zaczęłam kurs, bałam się telefonów.</b> <b>Skoro zdałam B1, mogę zdać i B2.</b> <b>Nie zdążę, chyba że wyjdę teraz.</b> Четвёртая: <b>одна идиома</b> — ровно одна, на своём месте.",
      "И пятая, самая интересная: <b>по одному предложению в каждом регистре</b>. Официальное: <b>Uprzejmie informuję, że ukończyłam kurs.</b> Нейтральное: <b>Chciałam dać znać, że skończyłam kurs.</b> Разговорное: <b>Słuchaj, skończyłam ten kurs!</b> Три этажа в одном тексте — и виден весь уровень."
    ],
    "audio":"Финальный проект уровня называется Mój rok, и в нём должно быть пять вещей. Первая: отглагольное существительное с предлогом. Po przeprowadzce do Krakowa wszystko wyglądało inaczej. Przed egzaminem prawie nie spałam. Вторая: склонённое числительное, то, чего на B1 ещё не было. Od dwóch lat mieszkam w Polsce. Pracuję z dwiema koleżankami z wydawnictwa. Третья: два союза третьей недели. Zanim zaczęłam kurs, bałam się telefonów. Skoro zdałam B1, mogę zdać i B2. Четвёртая: одна идиома, ровно одна, на своём месте. И пятая: по одному предложению в каждом регистре. Официальное: uprzejmie informuję, że ukończyłam kurs. Нейтральное: chciałam dać znać, że skończyłam kurs. Разговорное: słuchaj, skończyłam ten kurs. Три этажа в одном тексте, и виден весь уровень.",
    "table":{"rows":[
      ["1. <b>Po przeprowadzce do Krakowa…</b> <button class=\"play\" data-say=\"Po przeprowadzce do Krakowa wszystko wyglądało inaczej\">🔊</button>","отглагольное существительное — неделя 1"],
      ["2. <b>Od dwóch lat mieszkam w Polsce.</b> <button class=\"play\" data-say=\"Od dwóch lat mieszkam w Polsce\">🔊</button>","склонённое числительное — неделя 2"],
      ["3. <b>Zanim zaczęłam kurs…</b> <button class=\"play\" data-say=\"Zanim zaczęłam kurs, bałam się telefonów\">🔊</button>","союз недели 3 — без nie"],
      ["3а. <b>Skoro zdałam B1…</b> <button class=\"play\" data-say=\"Skoro zdałam B1, mogę zdać i B2\">🔊</button>","второй союз недели 3"],
      ["4. <b>To była bułka z masłem.</b> <button class=\"play\" data-say=\"To była bułka z masłem\">🔊</button>","одна идиома — неделя 4"],
      ["5. <b>Uprzejmie informuję → dać znać → słuchaj</b> <button class=\"play\" data-say=\"Uprzejmie informuję, chciałam dać znać, słuchaj\">🔊</button>","три регистра в одном тексте"]
    ],"star":-1},
    "examples":[
      {"ru":"После переезда в Краков всё выглядело иначе.","en":"<b>Po przeprowadzce</b> do Krakowa wszystko wyglądało inaczej.","say":"Po przeprowadzce do Krakowa wszystko wyglądało inaczej."},
      {"ru":"Два года я живу в Польше и работаю с двумя коллегами.","en":"<b>Od dwóch lat</b> mieszkam w Polsce i pracuję <b>z dwiema koleżankami</b>.","gloss":"два падежа числительного в одном предложении","say":"Od dwóch lat mieszkam w Polsce i pracuję z dwiema koleżankami."},
      {"ru":"Прежде чем я начала курс, я боялась телефонных разговоров.","en":"<b>Zanim zaczęłam</b> kurs, bałam się rozmów telefonicznych.","gloss":"после zanim без nie","say":"Zanim zaczęłam kurs, bałam się rozmów telefonicznych."},
      {"ru":"Раз уж я сдала B1, сдам и B2.","en":"<b>Skoro zdałam</b> B1, zdam i B2.","say":"Skoro zdałam B1, zdam i B2."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь форму числительного.",
       "q":"«Я работаю с двумя коллегами-женщинами» —","opts":["Pracuję z dwoma koleżankami","Pracuję z dwiema koleżankami","Pracuję z dwie koleżanki"],"answer":1,
       "explain":"Для женского рода есть особая форма творительного: <b>dwiema</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> помни правило про zanim.",
       "q":"«Прежде чем я начала курс, я боялась звонить» —","opts":["Zanim nie zaczęłam kursu, bałam się dzwonić","Zanim zaczęłam kurs, bałam się dzwonić","Dopóki zaczęłam kurs, bałam się dzwonić"],"answer":1,
       "explain":"После <b>zanim</b> отрицания не бывает."},
      {"type":"type","howto":"<b>Что делать:</b> напиши первую строчку своего текста.",
       "q":"«Год назад я приехал(а) в Польшу» — начни как хочешь","accept":["rok temu przyjechałem do polski","rok temu przyjechałam do polski","rok temu przyjechalem do polski","rok temu przyjechalam do polski"],"placeholder":"Rok temu …"}
    ],
    "mnemonic":"🧱 существительное · числительное · два союза · идиома · три регистра. Пять деталей — весь B2."
   },
   {
    "eyebrow":"Правило 3 · Итог",
    "title":"Что теперь у тебя есть",
    "paras":[
      "<b>Словообразование.</b> Отглагольные существительные на -anie, -enie, -cie; приставки на любом глаголе — prze-, po-, roz-, za-, do-, wy-, od-; суффиксы деятеля и места; супплетивные пары brać и wziąć, kłaść и położyć. Ты больше не учишь слова поштучно — ты их производишь.",
      "<b>Точность.</b> Числительные по падежам и главная ловушка <b>pięciu studentów przyszło</b>; фамилии и города — <b>z panią Nowak</b>, <b>w Zakopanem</b>, <b>w Białymstoku</b>; трудная рекция — <b>polegać na</b>, <b>przyzwyczaić się do</b>, <b>zależy mi na</b>; предлоги с оттенками и дативные обороты с się.",
      "<b>Сложное предложение.</b> <b>Zanim</b> без nie, <b>dopóki nie</b>, <b>aż</b>; <b>chyba że</b>, <b>o ile</b>, <b>pod warunkiem że</b>; регистры причины от <b>bo</b> до <b>gdyż</b>; полное <b>by</b> со всеми лицами; <b>podobno</b> и <b>rzekomo</b>; безличность во всех временах.",
      "<b>И жанры.</b> CV и мотивационное письмо, рекламация, rozprawka, рецензия — плюс двенадцать идиом, девять ложных друзей и три регистра. Посмотри на этот список ещё раз. Это уже не «понимаю и объясняюсь». Это «пишу нужным стилем в нужный адрес»."
    ],
    "audio":"Словообразование. Отглагольные существительные на -anie, -enie, -cie; приставки на любом глаголе; суффиксы деятеля и места; супплетивные пары brać и wziąć, kłaść и położyć. Ты больше не учишь слова поштучно, ты их производишь. Точность. Числительные по падежам и главная ловушка pięciu studentów przyszło; фамилии и города — z panią Nowak, w Zakopanem, w Białymstoku; трудная рекция; предлоги с оттенками и дативные обороты с się. Сложное предложение. Zanim без nie, dopóki nie, aż; chyba że, o ile, pod warunkiem że; регистры причины от bo до gdyż; полное by со всеми лицами; podobno и rzekomo; безличность во всех временах. И жанры: CV и мотивационное письмо, рекламация, rozprawka, рецензия, плюс двенадцать идиом, девять ложных друзей и три регистра. Это уже не понимаю и объясняюсь. Это пишу нужным стилем в нужный адрес.",
    "table":{"rows":[
      ["<b>Słowotwórstwo</b>: czytanie, przemalować, kawiarnia <button class=\"play\" data-say=\"czytanie, przemalować, kawiarnia\">🔊</button>","слово растёт из слова — неделя 1"],
      ["<b>Liczebniki</b>: pięciu studentów przyszło <button class=\"play\" data-say=\"Pięciu studentów przyszło\">🔊</button>","главная ловушка недели 2"],
      ["<b>Nazwy własne</b>: w Zakopanem, z panią Nowak <button class=\"play\" data-say=\"w Zakopanem, z panią Nowak\">🔊</button>","фамилии и города"],
      ["<b>Spójniki</b>: zanim, dopóki nie, chyba że, skoro <button class=\"play\" data-say=\"zanim, dopóki nie, chyba że, skoro\">🔊</button>","сложное предложение — неделя 3"],
      ["<b>Bezosobowość</b>: mówi się, mówiło się, zbudowano <button class=\"play\" data-say=\"mówi się, mówiło się, zbudowano\">🔊</button>","безличность во всех временах"],
      ["<b>Gatunki</b>: CV, reklamacja, rozprawka, recenzja <button class=\"play\" data-say=\"CV, reklamacja, rozprawka, recenzja\">🔊</button>","четыре взрослых жанра — неделя 4"]
    ],"star":1},
    "examples":[
      {"ru":"Я пишу по-польски тем стилем, который нужен адресату.","en":"<b>Piszę po polsku</b> takim stylem, jakiego potrzebuje odbiorca.","say":"Piszę po polsku takim stylem, jakiego potrzebuje odbiorca."},
      {"ru":"Это был хороший месяц.","en":"To <b>był</b> dobry miesiąc.","say":"To był dobry miesiąc."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни главную ловушку второй недели.",
       "q":"Какая фраза правильная?","opts":["Pięciu studentów przyszli","Pięciu studentów przyszło","Pięć studentów przyszli"],"answer":1,
       "explain":"При форме на -u глагол в единственном числе среднего рода: <b>przyszło</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни особую форму города.",
       "q":"«Мы были в Закопане» —","opts":["Byliśmy w Zakopane","Byliśmy w Zakopanem","Byliśmy w Zakopanie"],"answer":1,
       "explain":"Zakopane склоняется как прилагательное: <b>w Zakopanem</b>."}
    ],
    "mnemonic":"🏁 Słowotwórstwo · precyzja · zdanie złożone · gatunki. Четыре недели — четыре опоры."
   },
   {
    "eyebrow":"Правило 4 · Дальше",
    "title":"Мост к C1 — и одна тихая минута",
    "paras":[
      "Что ждёт на C1? Не новая грамматика — её ты, по большому счёту, уже собрал(а). C1 — это стиль и оттенки: выбор между двумя близкими словами, где оба «правильные», но одно точное. Ирония и подтекст. Длинный аргументированный текст, который держится сам.",
      "И ещё одно: на C1 исчезает выбор темы. Ты читаешь всё подряд — договор, интервью, роман, комментарий под статьёй, — и понимаешь не только смысл, но и отношение автора к тому, о чём он пишет. Это и есть настоящая разница между «знаю язык» и «живу в языке».",
      "А теперь посмотри назад. Тридцать дней назад <b>czytanie</b> и <b>przeczytanie</b> были двумя странными словами, а <b>pięciu studentów przyszło</b> выглядело опечаткой. Сегодня ты пишешь рекламацию, споришь о фильме и отличаешь <b>uprzejmie informuję</b> от <b>słuchaj</b>.",
      "У Анны сегодня тоже свой финал: вечером на Плантах Марек три круга носил в кармане куртки коробочку, а потом всё-таки спросил. Она ответила коротко — <b>Tak. Oczywiście, że tak.</b> Ты сегодня закрываешь уровень. Спасибо тебе за этот месяц — и до встречи на C1. 💛"
    ],
    "audio":"Что ждёт на C1? Не новая грамматика — её ты, по большому счёту, уже собрал. C1 это стиль и оттенки: выбор между двумя близкими словами, где оба правильные, но одно точное. Ирония и подтекст. Длинный аргументированный текст, который держится сам. И ещё одно: на C1 исчезает выбор темы. Ты читаешь всё подряд — договор, интервью, роман, комментарий под статьёй — и понимаешь не только смысл, но и отношение автора. А теперь посмотри назад. Тридцать дней назад czytanie и przeczytanie были двумя странными словами, а pięciu studentów przyszło выглядело опечаткой. Сегодня пишется рекламация, ведётся спор о фильме и слышна разница между uprzejmie informuję и słuchaj. У Анны сегодня тоже свой финал: вечером на Плантах Марек три круга носил в кармане куртки коробочку, а потом всё-таки спросил. Она ответила коротко: tak, oczywiście, że tak. Спасибо тебе за этот месяц — и до встречи на C1.",
    "table":{"rows":[
      ["<b>Tak. Oczywiście, że tak.</b> <button class=\"play\" data-say=\"Tak. Oczywiście, że tak.\">🔊</button>","Да. Конечно, да."],
      ["<b>Poziom B2 za mną.</b> <button class=\"play\" data-say=\"Poziom B2 za mną\">🔊</button>","Уровень B2 за плечами."],
      ["<b>Piszę tak, jak trzeba do kogo trzeba.</b> <button class=\"play\" data-say=\"Piszę tak, jak trzeba, do kogo trzeba\">🔊</button>","Пишу нужным стилем нужному адресату."],
      ["<b>Do zobaczenia na C1.</b> <button class=\"play\" data-say=\"Do zobaczenia na C1\">🔊</button>","До встречи на C1."]
    ],"star":0},
    "examples":[
      {"ru":"Уровень B2 за плечами — и я иду дальше.","en":"<b>Poziom B2 za mną</b> — i idę dalej.","say":"Poziom B2 za mną i idę dalej."},
      {"ru":"Год назад я бы в это не поверила.","en":"Rok temu <b>bym w to nie uwierzyła</b>.","say":"Rok temu bym w to nie uwierzyła."}
    ],
    "tasks":[
      {"type":"speak","howto":"Нажми микрофон и скажи это вслух. Ты имеешь полное право.",
       "target":"Mówię i piszę po polsku tak, jak trzeba i do kogo trzeba.","sub":"я говорю и пишу по-польски так, как нужно, и тому, кому нужно","want":"Mówię i piszę po polsku tak, jak trzeba i do kogo trzeba."}
    ],
    "mnemonic":"💛 B1 научил строить сложное. B2 научил выбирать. C1 научит слышать оттенок. Дальше — только тоньше."
   }
 ],
 "dialogue":{
   "intro":"Последний диалог уровня. Вечер, Планты, третий круг вокруг Старого города — и коробочка, которая ездила в кармане куртки с января.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Chodźmy jeszcze raz dookoła. Mamy czas, nikt na nas nie czeka.","ru":"Пойдём ещё раз вокруг. У нас есть время, нас никто не ждёт.",
      "words":[["jeszcze raz dookoła","ещё раз вокруг"],["nikt nie czeka","никто не ждёт"]]},
     {"who":"A","name":"Anna","side":"left","en":"Trzeci raz. Zimno mi w ręce, ale jest dobrze.","ru":"Третий раз. У меня мёрзнут руки, но хорошо.",
      "words":[["Trzeci raz","третий раз"],["Zimno mi","мне холодно"]]},
     {"who":"M","name":"Marek","side":"right","en":"Pamiętasz, jak rok temu wracaliśmy tędy z tego urzędu?","ru":"Помнишь, как год назад мы шли тут обратно из того учреждения?",
      "words":[["Pamiętasz","помнишь"],["tędy","этой дорогой"]]},
     {"who":"A","name":"Anna","side":"left","en":"Pamiętam. Wtedy jeszcze nie wiedziałam, że zostanę tu na dłużej.","ru":"Помню. Тогда я ещё не знала, что останусь тут надолго.",
      "words":[["Wtedy jeszcze nie wiedziałam","тогда я ещё не знала"],["na dłużej","надолго"]]},
     {"who":"M","name":"Marek","side":"right","en":"Zanim coś powiem, chcę, żebyś wiedziała, że nie musisz odpowiadać dzisiaj.","ru":"Прежде чем я что-то скажу, хочу, чтобы ты знала: отвечать сегодня не обязательно.",
      "words":[["Zanim coś powiem","прежде чем я скажу"],["żebyś wiedziała","чтобы ты знала"]]},
     {"who":"A","name":"Anna","side":"left","en":"Marek.","ru":"Марек.",
      "words":[["Marek","Марек"]]},
     {"who":"M","name":"Marek","side":"right","en":"Noszę to w kieszeni od stycznia. Wyjdziesz za mnie?","ru":"Я ношу это в кармане с января. Выйдешь за меня?",
      "words":[["w kieszeni","в кармане"],["Wyjdziesz za mnie?","выйдешь за меня?"]]},
     {"who":"A","name":"Anna","side":"left","en":"Tak. Oczywiście, że tak.","ru":"Да. Конечно, да.",
      "words":[["Tak","да"],["Oczywiście, że tak","конечно, да"]]},
     {"who":"M","name":"Marek","side":"right","en":"To wszystko? Ćwiczyłem dłuższą wersję przez trzy miesiące.","ru":"И всё? Я три месяца репетировал длинную версию.",
      "words":[["To wszystko?","и всё?"],["dłuższą wersję","длинную версию"]]},
     {"who":"A","name":"Anna","side":"left","en":"Zostaw dłuższą na ślub. Chodźmy jeszcze raz dookoła.","ru":"Оставь длинную на свадьбу. Пойдём ещё раз вокруг.",
      "words":[["Zostaw","оставь"],["na ślub","на свадьбу"]]}
   ]
 },
 "scene":{
   "intro":"И последняя сценка уровня — короткое поздравление. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Skończyłaś poziom B2. Gratulacje!","ru":"Ты закончила уровень B2. Поздравляю!"},
     {"who":"B","en":"Miesiąc temu bałam się napisać jedno oficjalne pismo.","ru":"Месяц назад я боялась написать одно официальное письмо."},
     {"who":"A","en":"A teraz piszesz reklamację i recenzję tego samego wieczoru.","ru":"А теперь пишешь рекламацию и рецензию в один вечер."},
     {"who":"B","en":"I wiem, kiedy powiedzieć „uprzejmie informuję”, a kiedy „słuchaj”.","ru":"И знаю, когда сказать «uprzejmie informuję», а когда «słuchaj»."},
     {"who":"A","en":"Wszystkiego najlepszego. Do zobaczenia na C1!","ru":"Всего наилучшего. До встречи на C1!"}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов финального дня — те, на которых держится итог.",
   "items":[
     {"en":"egzamin certyfikatowy","ru":"сертификатный экзамен","ex":"W czerwcu mam egzamin certyfikatowy."},
     {"en":"część pisemna / ustna","ru":"письменная / устная часть","ex":"Część ustna była najkrótsza."},
     {"en":"poprawność gramatyczna","ru":"грамматика — часть экзамена","ex":"Poprawność gramatyczna była najtrudniejsza."},
     {"en":"uzasadnić swoje zdanie","ru":"обосновать своё мнение","ex":"Trzeba było uzasadnić swoje zdanie."},
     {"en":"zdawać / zdać","ru":"сдавать / сдать","ex":"Zdałam egzamin za pierwszym razem."},
     {"en":"wynik","ru":"результат","ex":"Wynik będzie za miesiąc."},
     {"en":"świadectwo","ru":"свидетельство","ex":"Świadectwo przyjdzie pocztą."},
     {"en":"Powodzenia!","ru":"Удачи!","ex":"Powodzenia na egzaminie!"},
     {"en":"dasz radę","ru":"у тебя получится","ex":"Nie bój się, dasz radę."},
     {"en":"zaręczyny","ru":"помолвка","ex":"Zaręczyny były na Plantach."},
     {"en":"poziom","ru":"уровень","ex":"Poziom B2 za mną."},
     {"en":"do zobaczenia","ru":"до встречи","ex":"Do zobaczenia na C1!"}
   ]
 },
 "drag":{
   "intro":"Последняя игра уровня. Перетащи польскую фразу к её переводу.",
   "pairs":[["zdałam","я сдала"],["część pisemna","письменная часть"],["zaręczyny","помолвка"],["Powodzenia!","Удачи!"]]
 },
 "reading":{
   "intro":"Прочитай и послушай финальный текст Анны — тот, который она написала вечером после экзамена. Это образец твоего проекта: все пять деталей внутри.",
   "title":"Mój rok",
   "sentences":["Od dwóch lat mieszkam w Krakowie i dopiero w tym roku przestałam tłumaczyć zdania w głowie.","Po przeprowadzce z Włoch wszystko wydawało mi się głośniejsze i szybsze, niż było naprawdę.","Zanim zaczęłam nową pracę, bałam się jednej rzeczy: telefonów od nieznajomych.","We wrześniu zatrudniono mnie w wydawnictwie, a skoro poradziłam sobie z pierwszym zebraniem, uznałam, że reszta będzie już tylko łatwiejsza.","Pracuję teraz z dwiema koleżankami, które poprawiają mi końcówki i śmieją się z moich przecinków.","Najtrudniejsze w tym roku były liczebniki, bo do dziś muszę pomyśleć, zanim powiem od stu dwudziestu lat.","Nie da się ukryć, że najwięcej nauczyły mnie sytuacje, w których musiałam coś załatwić: przychodnia, reklamacja, urząd.","Kiedy przywieźli nam wadliwą szafę, napisałam pismo, którego rok temu nie umiałabym przeczytać.","Uprzejmie informuję, że kurs został ukończony — tak napisałabym do instytucji.","Chciałam dać znać, że skończyłam kurs — tak napisałabym do koleżanki z pracy.","Słuchaj, skończyłam ten kurs — tak napisałam do Kasi, o dziesiątej wieczorem, bez żadnego wstępu.","Egzamin, którego bałam się od stycznia, okazał się w połowie bułką z masłem, a w połowie zupełnie nie.","Wieczorem poszliśmy na Planty i wróciliśmy stamtąd z pierścionkiem i z jednym bardzo krótkim słowem.","Podsumowując: to był rok, w którym polski przestał być przedmiotem, a stał się sposobem, w jaki żyję."],
   "translation":"Два года я живу в Кракове и только в этом году перестала переводить фразы в голове. После переезда из Италии всё казалось мне громче и быстрее, чем было на самом деле. Прежде чем я начала новую работу, я боялась одного: звонков от незнакомых людей. В сентябре меня взяли в издательство, и раз уж я справилась с первым совещанием, я решила, что дальше будет только легче. Теперь я работаю с двумя коллегами, которые правят мне окончания и смеются над моими запятыми. Самым трудным в этом году были числительные, потому что до сих пор мне надо подумать, прежде чем сказать «сто двадцать лет». Нельзя не признать, что больше всего меня научили ситуации, в которых надо было что-то уладить: поликлиника, рекламация, учреждение. Когда нам привезли бракованный шкаф, я написала письмо, которое год назад не сумела бы даже прочитать. «Настоящим сообщаю, что курс завершён» — так я написала бы в организацию. «Хотела дать знать, что закончила курс» — так я написала бы коллеге по работе. «Слушай, я закончила этот курс» — так я написала Касе, в десять вечера, без всякого вступления. Экзамен, которого я боялась с января, оказался наполовину проще простого, а наполовину совсем нет. Вечером мы пошли на Планты и вернулись оттуда с кольцом и одним коротким «да». Подводя итог: это был год, в котором польский перестал быть предметом и стал способом, которым я живу."
 },
 "quiz":{
   "intro":"Последние вопросы уровня — по всем четырём неделям сразу. Ответишь — и B2 за плечами. Я тобой горжусь. 💛",
   "items":[
     {"q":"1. «после прочтения книги» —","opts":["po przeczytać książkę","po przeczytaniu książki","po przeczytanie książki"],"answer":1,
      "explain":"Отглагольное существительное после po стоит в предложном: <b>po przeczytaniu</b>."},
     {"q":"2. «Пришло пятеро студентов» —","opts":["Pięciu studentów przyszli","Pięciu studentów przyszło","Pięć studentów przyszli"],"answer":1,
      "explain":"При форме на -u глагол в единственном числе среднего рода."},
     {"q":"3. «Мы были в Закопане» —","opts":["Byliśmy w Zakopane","Byliśmy w Zakopanem","Byliśmy w Zakopanie"],"answer":1,
      "explain":"Zakopane склоняется как прилагательное: <b>w Zakopanem</b>."},
     {"q":"4. «Прежде чем выйдешь, погаси свет» —","opts":["Zanim nie wyjdziesz, zgaś światło","Zanim wyjdziesz, zgaś światło","Dopóki wyjdziesz, zgaś światło"],"answer":1,
      "explain":"После <b>zanim</b> отрицания не бывает — в отличие от русского «пока не»."},
     {"q":"5. «Требую замены товара» —","opts":["Żądam wymianę towaru","Żądam wymiany towaru","Żądam o wymianę towaru"],"answer":1,
      "explain":"Żądać идёт с родительным падежом — язык рекламации."},
     {"q":"6. <b>Robić z igły widły</b> значит —","opts":["раздувать из мелочи катастрофу","чинить на скорую руку","делать что-то очень тщательно"],"answer":0,
      "explain":"Смысл — преувеличивать. Русский двойник: делать из мухи слона."}
   ]
 },
 "essay":{
   "intro":"Вот он — финальный проект уровня. Не спеши: это последняя страница B2, и она твоя. Пиши своими словами, пусть и с ошибками, — важнее, чтобы это было про тебя.",
   "prompt":"Напиши текст «Mój rok» в 12–15 предложений: откуда ты пришёл(шла), что изменилось, что было трудно, что ты теперь умеешь и чего хочешь дальше. Обязательно вставь: одно отглагольное существительное с po или przed, одно склонённое числительное, два союза третьей недели (zanim, skoro, dopóki, chyba że, mimo że), одну идиому и по одному предложению в официальном, нейтральном и разговорном регистре.",
   "hint":"Каркас: Od … lat… · Po przeprowadzce / przed egzaminem… · Zanim…, … · Skoro…, … · To była bułka z masłem · Uprzejmie informuję, że… / Chciałem dać znać, że… / Słuchaj, … · Podsumowując… 💛",
   "example":"Od trzech lat mieszkam w Polsce, ale dopiero w tym roku przestałem bać się telefonu. Po przeprowadzce do Wrocławia wszystko było nowe: praca, sąsiedzi i formularze, których nie rozumiałem. Zanim zacząłem ten kurs, każde pismo z urzędu odkładałem na wieczór, a wieczorem na jutro. Skoro poradziłem sobie z pierwszą rozmową kwalifikacyjną, uznałem, że dam radę i z resztą. Pracuję teraz z dwoma kolegami z Ukrainy i po polsku rozmawiamy nawet na przerwie. Najtrudniejsze były dla mnie liczebniki i te wszystkie końcówki po przyimkach. Mimo to nauczyłem się pisać reklamację i w marcu odzyskałem pieniądze za zepsutą lodówkę. Egzamin próbny okazał się w połowie bułką z masłem, a w połowie zupełnie nie. Uprzejmie informuję, że kurs został ukończony — tak napisałbym do instytucji. Chciałem dać znać, że skończyłem kurs — tak napisałbym do kolegi z pracy. Słuchaj, skończyłem ten kurs — tak napisałem do brata, o jedenastej w nocy. Chciałbym w przyszłym roku przeczytać pierwszą polską powieść bez słownika. Nie da się ukryć, że przede mną jeszcze dużo pracy. Podsumowując: to był rok, w którym polski przestał być przedmiotem i stał się moim drugim językiem."
 }
}
};
