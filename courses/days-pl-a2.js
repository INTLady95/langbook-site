/* Polish A2 — 30 days of content. Data only: the shared renderer lives in engine.js.
   en/themeEn/say = POLISH (target language), ru = Russian explanations.
   Курс для всех, кто читает по-русски. */
const DAYS = {
"1": {
 "day":1,"week":"01",
 "themeRu":"Снова вместе: что было летом",
 "themeEn":"Co robiłeś latem?",
 "intro":"Лето кончилось — и это лучший момент, чтобы взяться за прошедшее время всерьёз. В конце A1 ты уже сказал(а) <b>byłem</b> и <b>byłam</b>, но тогда это было знакомство на два глагола. Сегодня собираем всё единственное число целиком — и учимся спрашивать вежливо: <b>Co pan robił latem?</b> Анна и Марек как раз встретились после каникул, послушаем их.",
 "introAudio":"Лето кончилось — и это лучший момент, чтобы взяться за прошедшее время всерьёз. В конце A1 формы byłem и byłam уже появлялись, но тогда это было знакомство на два глагола. Сегодня собираем всё единственное число целиком — и учимся спрашивать вежливо: Co pan robił latem? Анна и Марек как раз встретились после каникул, послушаем их.",
 "goals":[
   "Поставить в прошедшее время любой знакомый глагол: <b>robić → robiłem / robiłam</b>",
   "Различать все шесть форм единственного числа: <b>byłem, byłeś, był, byłam, byłaś, była</b>",
   "Спросить о прошлом вежливо: <b>Co pan robił? Gdzie pani była?</b>",
   "Рассказать, где ты был(а) летом и что делал(а)"
 ],
 "learned":[
   "Поставил(а) в прошедшее время любой знакомый глагол",
   "Различил(а) все шесть форм единственного числа: byłem, byłeś, był, byłam, byłaś, była",
   "Спросил(а) о прошлом вежливо: Co pan robił? Gdzie pani była?",
   "Рассказал(а), где был(а) летом и что делал(а)"
 ],
 "review":{
   "intro":"Начнём с того, чем закончился A1: лёгкое прошедшее и будущее с <b>będę</b>. Пара вопросов — и идём дальше.",
   "introAudio":"Начнём с того, чем закончился уровень A1: лёгкое прошедшее и будущее с będę. Пара вопросов — и идём дальше.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> прочитай и нажми на правильный вариант. Промах не страшен — объяснение появится сразу.",
      "q":"Анна говорит о себе: «Вчера я была дома» —","opts":["Wczoraj byłem w domu","Wczoraj byłam w domu","Wczoraj była w domu"],"answer":1,
      "explain":"Женщина о себе — <b>byłam</b>. Byłem сказал бы мужчина, była — это «она была»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни формулу будущего из дня 28.",
      "q":"«Завтра я буду отдыхать» —","opts":["Jutro będę odpoczywać","Jutro jestem odpoczywać","Jutro będę odpoczywam"],"answer":0,
      "explain":"<b>będę + инфинитив</b>: Jutro będę odpoczywać. После będę глагол остаётся в словарной форме."},
     {"type":"choice","q":"«У меня не было времени» —",
      "opts":["Nie miałem czas","Nie miałem czasu","Nie mam czasu"],"answer":1,
      "explain":"Прошедшее <b>miałem</b> плюс родительный после отрицания: nie miałem czasu."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Спрашиваем женщину.",
      "q":"Собери: <b>«Что ты делала вчера?»</b>","answer":"Co robiłaś wczoraj?"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Шесть форм вместо двух",
    "title":"Прошедшее время: всё единственное число",
    "paras":[
      "В A1 у тебя было четыре формы: byłem / byłam и robiłem / robiłam. Добавим остальные — и парадигма закроется целиком. Для «ты»: <b>byłeś</b> (мужчине) и <b>byłaś</b> (женщине). Для третьего лица: <b>był</b>, <b>była</b>, <b>było</b>.",
      "Присмотрись к устройству: у формы есть корень с <b>-ł-</b> (był-, robił-) и хвостик лица. <b>-em</b> и <b>-am</b> — это «я», <b>-eś</b> и <b>-aś</b> — это «ты», а у «он/она/оно» хвостика нет вовсе: był, była, było.",
      "Гласная перед хвостиком показывает род: <b>e</b> — мужской, <b>a</b> — женский. był<b>e</b>m — мужчина, był<b>a</b>m — женщина. Один звук держит на себе весь род, поэтому его не проглатывают.",
      "Средний род (było, robiło) встречается редко и почти всегда с вещами: <b>Lato było krótkie</b> — «лето было коротким», <b>Radio grało</b> — «радио играло»."
    ],
    "audio":"В A1 форм было четыре: byłem, byłam и robiłem, robiłam. Добавим остальные — и парадигма закроется целиком. Для «ты»: byłeś к мужчине и byłaś к женщине. Для третьего лица: był, była, było. Присмотрись к устройству: у формы есть корень с ł — był, robił — и хвостик лица. Окончания -em и -am это «я», -eś и -aś это «ты», а у «он, она, оно» хвостика нет вовсе. Гласная перед хвостиком показывает род: э — мужской, а — женский. Byłem — мужчина, byłam — женщина. Один звук держит на себе весь род, поэтому его не проглатывают. Средний род — było, robiło — встречается редко и почти всегда с вещами: lato było krótkie, radio grało.",
    "table":{"rows":[
      ["ja → <b>byłem</b> / <b>byłam</b> <button class=\"play\" data-say=\"byłem, byłam\">🔊</button>","я был / я была"],
      ["ty → <b>byłeś</b> / <b>byłaś</b> <button class=\"play\" data-say=\"byłeś, byłaś\">🔊</button>","ты был / ты была"],
      ["on → <b>był</b> · ona → <b>była</b> · ono → <b>było</b> <button class=\"play\" data-say=\"był, była, było\">🔊</button>","он был / она была / оно было"],
      ["ja → <b>robiłem</b> / <b>robiłam</b> <button class=\"play\" data-say=\"robiłem, robiłam\">🔊</button>","я делал / я делала"],
      ["ty → <b>robiłeś</b> / <b>robiłaś</b> <button class=\"play\" data-say=\"robiłeś, robiłaś\">🔊</button>","ты делал / ты делала"],
      ["on → <b>robił</b> · ona → <b>robiła</b> · ono → <b>robiło</b>","он делал / она делала / оно делало"]
    ],"star":1},
    "examples":[
      {"ru":"Где ты был летом?","en":"Gdzie <b>byłeś</b> latem?","gloss":"к мужчине","say":"Gdzie byłeś latem?"},
      {"ru":"Где ты была летом?","en":"Gdzie <b>byłaś</b> latem?","gloss":"к женщине","say":"Gdzie byłaś latem?"},
      {"ru":"Я была на море.","en":"<b>Byłam</b> nad morzem.","say":"Byłam nad morzem."},
      {"ru":"Марек был в горах.","en":"Marek <b>był</b> w górach.","say":"Marek był w górach."},
      {"ru":"Лето было короткое.","en":"Lato <b>było</b> krótkie.","say":"Lato było krótkie."}
    ],
    "mistakes":[
      {"wrong":"Gdzie ty był?","right":"Gdzie <b>byłeś</b>?","why":"был — это «он был». Для «ты» нужен хвостик: byłeś или byłaś."},
      {"wrong":"Anna: Byłem nad morzem.","right":"Anna: <b>Byłam</b> nad morzem.","why":"форма зависит от говорящего, а не от собеседника. Анна о себе — byłam."}
    ],
    "mnemonic":"🧱 Корень на -ł- плюс хвостик лица: był-em, był-eś, był (без хвостика). А гласная перед хвостиком — это род.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, к кому обращаются.",
       "q":"Спрашиваем Марека, где он был —","opts":["Gdzie byłeś?","Gdzie była?","Gdzie byłaś?"],"answer":0,
       "explain":"К мужчине на «ты» — <b>byłeś</b>. Byłaś — к женщине, była — «она была»."},
      {"type":"choice","q":"«Она делала это летом» —",
       "opts":["Ona robił to latem","Ona robiłam to latem","Ona robiła to latem"],"answer":2,
       "explain":"О ней — <b>robiła</b>, без хвостика лица. Robiłam говорят только о себе."},
      {"type":"type","howto":"Напиши так, как сказал(а) бы ты о себе. Обе формы принимаются, хвостики можно не ставить.",
       "q":"«Летом я был(а) дома»","accept":["latem byłem w domu","latem byłam w domu","latem bylem w domu","latem bylam w domu"],"placeholder":"Latem był… w domu"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Рецепт",
    "title":"Минус <em>-ć</em>, плюс <em>-ł</em> — и хвостик лица",
    "paras":[
      "Рецепт ты уже знаешь, теперь он работает на все шесть форм. Берёшь словарную форму, убираешь <b>-ć</b>, добавляешь <b>-ł</b> — получается корень прошедшего. Дальше к нему клеится хвостик: zwiedza<s>ć</s> → zwiedzał → <b>zwiedzałem / zwiedzałaś / zwiedzała</b>.",
      "Вот где польский помогает: хвостик уже сказал, кто действовал, поэтому местоимение <b>ja</b> или <b>ty</b> не нужно. «Я отдыхал» — это одно слово: <b>odpoczywałem</b>. Русский так не умеет: «отдыхал» без «я» повиснет в воздухе.",
      "Проверим рецепт на знакомых глаголах: <b>pracować</b> → pracowałem / pracowałam, <b>mieszkać</b> → mieszkałem / mieszkałam, <b>pływać</b> → pływałem / pływałam, <b>zwiedzać</b> → zwiedzałem / zwiedzałam, <b>uczyć się</b> → uczyłem się / uczyłam się.",
      "Ударение обычное, на предпоследнем слоге: pra-co-<b>WA</b>-łem, zwie-<b>DZA</b>-łaś. А буква <b>ł</b> звучит как короткое «у̯»: był [бы́у̯], robiła [ро-<b>би</b>-у̯а]."
    ],
    "audio":"Рецепт ты уже знаешь, теперь он работает на все шесть форм. Берёшь словарную форму, убираешь -ć, добавляешь -ł — получается корень прошедшего. Дальше к нему клеится хвостик: zwiedzać, zwiedzał, zwiedzałem, zwiedzałaś, zwiedzała. Вот где польский помогает: хвостик уже сказал, кто действовал, поэтому местоимение ja или ty не нужно. «Я отдыхал» — это одно слово: odpoczywałem. Русский так не умеет: «отдыхал» без «я» повиснет в воздухе. Проверим рецепт на знакомых глаголах: pracować — pracowałem, pracowałam; mieszkać — mieszkałem, mieszkałam; pływać — pływałem, pływałam; zwiedzać — zwiedzałem, zwiedzałam; uczyć się — uczyłem się, uczyłam się. Ударение обычное, на предпоследнем слоге. А буква ł звучит как короткое у: był, robiła.",
    "table":{"rows":[
      ["pracować → <b>pracowałem / pracowałam</b> <button class=\"play\" data-say=\"pracowałem, pracowałam\">🔊</button>","я работал / я работала"],
      ["odpoczywać → <b>odpoczywałem / odpoczywałam</b> <button class=\"play\" data-say=\"odpoczywałem, odpoczywałam\">🔊</button>","я отдыхал / я отдыхала"],
      ["zwiedzać → <b>zwiedzałem / zwiedzałam</b> <button class=\"play\" data-say=\"zwiedzałem, zwiedzałam\">🔊</button>","я осматривал / осматривала (достопримечательности)"],
      ["pływać → <b>pływałem / pływałam</b> <button class=\"play\" data-say=\"pływałem, pływałam\">🔊</button>","я плавал / я плавала"],
      ["uczyć się → <b>uczyłem się / uczyłam się</b> <button class=\"play\" data-say=\"uczyłem się, uczyłam się\">🔊</button>","я учился / я училась"]
    ],"star":-1},
    "examples":[
      {"ru":"Летом я работал в Кракове.","en":"Latem <b>pracowałem</b> w Krakowie.","say":"Latem pracowałem w Krakowie."},
      {"ru":"Две недели я отдыхала.","en":"Dwa tygodnie <b>odpoczywałam</b>.","say":"Dwa tygodnie odpoczywałam."},
      {"ru":"Ты много плавал?","en":"Dużo <b>pływałeś</b>?","say":"Dużo pływałeś?"},
      {"ru":"Она осматривала Гданьск.","en":"<b>Zwiedzała</b> Gdańsk.","gloss":"местоимение ona не нужно","say":"Zwiedzała Gdańsk."},
      {"ru":"Я учил польский каждый день.","en":"<b>Uczyłem się</b> polskiego codziennie.","say":"Uczyłem się polskiego codziennie."}
    ],
    "mistakes":[
      {"wrong":"Latem ja pracować.","right":"Latem <b>pracowałem</b>.","why":"в рассказе о прошлом глагол не остаётся в словарной форме — он получает -ł и хвостик лица."},
      {"wrong":"Ja robił zakupy.","right":"<b>Robiłem</b> zakupy.","why":"с «я» идёт robiłem или robiłam. Форма robił — про него."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> примени рецепт: минус -ć, плюс -ł, потом хвостик.",
       "q":"Прошедшее от <b>odpoczywać</b> для «я» (говорит женщина) —","opts":["odpoczywałem","odpoczywam","odpoczywałam"],"answer":2,
       "explain":"odpoczywać → odpoczywał → <b>odpoczywałam</b>. Odpoczywam — это настоящее время, «я отдыхаю»."},
      {"type":"choice","q":"Какая фраза сказана правильно?",
       "opts":["Wczoraj ja pływać w morzu","Wczoraj pływałem w morzu","Wczoraj pływam w morzu"],"answer":1,
       "explain":"Прошедшее — <b>pływałem</b>; pływam значит «я плаваю» прямо сейчас."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорит женщина.",
       "q":"Собери: <b>«Летом я работала в Гданьске»</b>","answer":"Latem pracowałam w Gdańsku"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Вежливо о прошлом",
    "title":"<em>Co pan robił? Gdzie pani była?</em>",
    "paras":[
      "Вежливое обращение ты уже строишь через pan и pani с глаголом в третьем лице: Skąd pan jest? В прошедшем времени логика не меняется — берётся та же форма, что для «он» или «она»: <b>Co pan robił?</b>, <b>Gdzie pani była?</b>",
      "Обрати внимание на ловушку: сказать «Gdzie pani byłaś?» нельзя. Хвостик -aś — это «ты», а pani требует формы третьего лица, без хвостика: <b>była</b>. Смешать два уровня вежливости в одной фразе — заметная ошибка.",
      "Для мужчины — мужская форма, для женщины — женская: <b>Czy pan był w Polsce?</b> / <b>Czy pani była w Polsce?</b> Род тут зависит от собеседника, потому что речь именно о нём.",
      "Полезная мелочь: к мужчине по имени обращаются <b>panie Marku</b>, к женщине — <b>pani Anno</b>. Пока просто узнавай эти формы в речи; отдельный разговор о них будет позже."
    ],
    "audio":"Вежливое обращение ты уже строишь через pan и pani с глаголом в третьем лице: Skąd pan jest? В прошедшем времени логика не меняется — берётся та же форма, что для «он» или «она»: Co pan robił? Gdzie pani była? Обрати внимание на ловушку: сказать «Gdzie pani byłaś?» нельзя. Хвостик -aś это «ты», а pani требует формы третьего лица, без хвостика: była. Смешать два уровня вежливости в одной фразе — заметная ошибка. Для мужчины мужская форма, для женщины женская: Czy pan był w Polsce? Czy pani była w Polsce? Полезная мелочь: к мужчине по имени обращаются panie Marku, к женщине pani Anno. Пока просто узнавай эти формы в речи, отдельный разговор о них будет позже.",
    "table":{"rows":[
      ["Co pan robił latem? <button class=\"play\" data-say=\"Co pan robił latem?\">🔊</button>","Что Вы делали летом? — к мужчине"],
      ["Co pani robiła latem? <button class=\"play\" data-say=\"Co pani robiła latem?\">🔊</button>","Что Вы делали летом? — к женщине"],
      ["Gdzie pan był? <button class=\"play\" data-say=\"Gdzie pan był?\">🔊</button>","Где Вы были? — к мужчине"],
      ["Czy pani odpoczywała? <button class=\"play\" data-say=\"Czy pani odpoczywała?\">🔊</button>","Вы отдыхали? — к женщине"],
      ["Gdzie byłeś? / Gdzie byłaś?","Где ты был? / Где ты была? — на «ты»"]
    ],"star":0},
    "examples":[
      {"ru":"Пан Ковальский, где Вы были летом?","en":"Panie Kowalski, gdzie <b>pan był</b> latem?","say":"Panie Kowalski, gdzie pan był latem?"},
      {"ru":"Вы работали в августе? (к женщине)","en":"Czy <b>pani pracowała</b> w sierpniu?","say":"Czy pani pracowała w sierpniu?"},
      {"ru":"Вы уже были в Закопане? (к мужчине)","en":"Czy <b>pan był</b> już w Zakopanem?","say":"Czy pan był już w Zakopanem?"},
      {"ru":"Что Вы делали вчера? (к женщине)","en":"Co <b>pani robiła</b> wczoraj?","say":"Co pani robiła wczoraj?"}
    ],
    "mistakes":[
      {"wrong":"Gdzie pani byłaś?","right":"Gdzie <b>pani była</b>?","why":"pan и pani берут форму третьего лица — ту же, что для on и ona. Хвостик -aś принадлежит «ты»."},
      {"wrong":"Co pan robiła?","right":"Co <b>pan robił</b>?","why":"pan — мужчина, значит и форма мужская: robił."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> обращаемся вежливо — значит, третье лицо.",
       "q":"Вежливо к пану Ковальскому: «Где Вы были?» —","opts":["Gdzie pan był?","Gdzie pan byłem?","Gdzie pan byłeś?"],"answer":0,
       "explain":"pan + форма третьего лица: <b>Gdzie pan był?</b> Byłeś — это «ты был»."},
      {"type":"choice","q":"Вежливо к женщине: «Вы отдыхали летом?» —",
       "opts":["Czy pani odpoczywała latem?","Czy pani odpoczywałaś latem?","Czy pani odpoczywał latem?"],"answer":0,
       "explain":"pani + женская форма третьего лица: <b>odpoczywała</b>."},
      {"type":"speak","target":"Co pan robił latem?","sub":"что Вы делали летом? — вежливо, к мужчине","want":"Co pan robił latem?"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Летние слова",
    "title":"<em>latem</em>, <em>na wakacjach</em>, <em>nad morzem</em>",
    "paras":[
      "«Летом» — одно слово: <b>latem</b>. Так же устроены <b>zimą</b>, <b>wiosną</b>, <b>jesienią</b> — как русские «зимой, весной, осенью», тот же творительный падеж без предлога.",
      "Каникулы по-польски — только множественное число: <b>wakacje</b>. «На каникулах» — <b>na wakacjach</b>, «поехал на каникулы» — <b>na wakacje</b>. Отпуск у взрослых — <b>urlop</b>: <b>byłem na urlopie</b>.",
      "Куда ездят: <b>nad morze</b> (на море) и там <b>nad morzem</b>; <b>w góry</b> (в горы) и там <b>w górach</b>; <b>nad jezioro</b> / <b>nad jeziorem</b>; <b>za granicę</b> (за границу) / <b>za granicą</b> (за границей). Пара «куда — где» работает как в русском, разница только в окончаниях.",
      "И готовый вопрос после долгой разлуки: <b>Co robiłeś latem?</b> — «Что ты делал летом?» Ответ обычно начинают с места: <b>Byłam nad morzem, w Gdańsku.</b>"
    ],
    "audio":"«Летом» — одно слово: latem. Так же устроены zimą, wiosną, jesienią — как русские зимой, весной, осенью, тот же творительный падеж без предлога. Каникулы по-польски только множественное число: wakacje. «На каникулах» — na wakacjach, «поехал на каникулы» — na wakacje. Отпуск у взрослых — urlop: byłem na urlopie. Куда ездят: nad morze, на море, и там nad morzem; w góry, в горы, и там w górach; nad jezioro и nad jeziorem; za granicę, за границу, и za granicą, за границей. Пара «куда — где» работает как в русском, разница только в окончаниях. И готовый вопрос после долгой разлуки: Co robiłeś latem? Ответ обычно начинают с места: Byłam nad morzem, w Gdańsku.",
    "table":{"rows":[
      ["latem · zimą · wiosną · jesienią <button class=\"play\" data-say=\"latem, zimą, wiosną, jesienią\">🔊</button>","летом · зимой · весной · осенью"],
      ["wakacje → na wakacjach <button class=\"play\" data-say=\"wakacje, na wakacjach\">🔊</button>","каникулы → на каникулах"],
      ["nad morze → nad morzem <button class=\"play\" data-say=\"nad morze, nad morzem\">🔊</button>","на море (куда) → на море (где)"],
      ["w góry → w górach <button class=\"play\" data-say=\"w góry, w górach\">🔊</button>","в горы (куда) → в горах (где)"],
      ["za granicę → za granicą <button class=\"play\" data-say=\"za granicę, za granicą\">🔊</button>","за границу (куда) → за границей (где)"]
    ],"star":1},
    "examples":[
      {"ru":"Летом я была на каникулах.","en":"<b>Latem</b> byłam <b>na wakacjach</b>.","say":"Latem byłam na wakacjach."},
      {"ru":"Марек был в горах, в Закопане.","en":"Marek był <b>w górach</b>, w Zakopanem.","say":"Marek był w górach, w Zakopanem."},
      {"ru":"Я загорала на пляже.","en":"<b>Opalałam się</b> na plaży.","say":"Opalałam się na plaży."},
      {"ru":"Я не был за границей.","en":"Nie byłem <b>za granicą</b>.","say":"Nie byłem za granicą."},
      {"ru":"Что ты делал летом? — Я работал.","en":"Co <b>robiłeś latem</b>? — Pracowałem.","say":"Co robiłeś latem? Pracowałem."}
    ],
    "mistakes":[
      {"wrong":"Byłam na wakacje.","right":"Byłam <b>na wakacjach</b>.","why":"«был где» — na wakacjach. Форма na wakacje отвечает на вопрос «куда»."},
      {"wrong":"W latem byłem w górach.","right":"<b>Latem</b> byłem w górach.","why":"«летом» — одно слово без предлога, как русское «летом»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, вопрос про «где» или про «куда».",
       "q":"«Летом я была на море» —","opts":["Latem byłam nad morze","Latem byłam nad morzem","Latem byłam na morze"],"answer":1,
       "explain":"Речь о месте, где ты была → <b>nad morzem</b>. Nad morze — это направление, «на море» в смысле «куда»."},
      {"type":"choice","q":"«зимой» —","opts":["zima","w zimie","zimą"],"answer":2,
       "explain":"<b>Zimą</b> — одно слово без предлога, как latem, wiosną, jesienią."},
      {"type":"type","howto":"Напиши по-польски. Хвостики можно не ставить. Обе формы рода принимаются.",
       "q":"«Летом я был(а) в горах»","accept":["latem byłem w górach","latem byłam w górach","latem bylem w gorach","latem bylam w gorach"],"placeholder":"Latem był… w górach"}
    ],
    "mnemonic":"🏖️ latem · na wakacjach · nad morzem · w górach — четыре слова, и лето рассказано."
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек не виделись всё лето. Тапни по строке — увидишь перевод, нажми на подсвеченное слово — узнаешь, что оно значит.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Cześć, Anno! Dawno cię nie widziałem. Gdzie byłaś latem?","ru":"Привет, Анна! Давно тебя не видел. Где ты была летом?",
      "words":[["Dawno cię nie widziałem","давно тебя не видел"],["byłaś","ты была"]]},
     {"who":"A","name":"Anna","side":"left","en":"Byłam nad morzem, w Gdańsku. Miałam trzy tygodnie wakacji.","ru":"Я была на море, в Гданьске. У меня было три недели каникул.",
      "words":[["nad morzem","на море"],["Miałam","у меня было"]]},
     {"who":"M","name":"Marek","side":"right","en":"Trzy tygodnie! I co robiłaś?","ru":"Три недели! И что ты делала?",
      "words":[["co robiłaś?","что ты делала?"]]},
     {"who":"A","name":"Anna","side":"left","en":"Rano pływałam, po południu zwiedzałam miasto. Wieczorem czytałam.","ru":"Утром плавала, после обеда осматривала город. Вечером читала.",
      "words":[["pływałam","я плавала"],["zwiedzałam","я осматривала"]]},
     {"who":"M","name":"Marek","side":"right","en":"Zazdroszczę. Ja pracowałem przez całe lato.","ru":"Завидую. Я работал всё лето.",
      "words":[["Zazdroszczę","завидую"],["przez całe lato","всё лето"]]},
     {"who":"A","name":"Anna","side":"left","en":"Nie miałeś urlopu?","ru":"У тебя не было отпуска?",
      "words":[["Nie miałeś","у тебя не было"],["urlopu","отпуска"]]},
     {"who":"M","name":"Marek","side":"right","en":"Miałem tydzień. Byłem w górach, w Zakopanem.","ru":"Была неделя. Я был в горах, в Закопане.",
      "words":[["Miałem tydzień","у меня была неделя"],["w górach","в горах"]]},
     {"who":"A","name":"Anna","side":"left","en":"To dobrze. Tydzień w górach to też wakacje.","ru":"Это хорошо. Неделя в горах — тоже каникулы.",
      "words":[["To dobrze","это хорошо"],["też","тоже"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка: пан Ковальский тоже вернулся из отпуска. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Dzień dobry! Gdzie pan był latem?","ru":"Добрый день! Где Вы были летом?"},
     {"who":"B","en":"Byłem za granicą, w Czechach.","ru":"Я был за границей, в Чехии."},
     {"who":"A","en":"I co pan robił?","ru":"И что Вы делали?"},
     {"who":"B","en":"Odpoczywałem. Nic nie robiłem!","ru":"Отдыхал. Ничего не делал!"}
   ]
 },
 "vocab":{
   "intro":"Слова дня — лето, отдых и формы прошедшего. Переверни карточку, увидишь перевод и пример.",
   "items":[
     {"en":"latem","ru":"летом","ex":"Latem byłam nad morzem."},
     {"en":"wakacje","ru":"каникулы (только мн. ч.)","ex":"Miałam trzy tygodnie wakacji."},
     {"en":"urlop","ru":"отпуск","ex":"Nie miałem urlopu."},
     {"en":"morze / nad morzem","ru":"море / на море","ex":"Byłam nad morzem."},
     {"en":"góry / w górach","ru":"горы / в горах","ex":"Marek był w górach."},
     {"en":"plaża","ru":"пляж","ex":"Opalałam się na plaży."},
     {"en":"za granicą","ru":"за границей","ex":"Nie byłem za granicą."},
     {"en":"zwiedzać","ru":"осматривать (город, музей)","ex":"Zwiedzałam Gdańsk."},
     {"en":"opalać się","ru":"загорать","ex":"Opalałem się cały dzień."},
     {"en":"odpoczywać","ru":"отдыхать","ex":"Odpoczywałam dwa tygodnie."},
     {"en":"pływać","ru":"плавать","ex":"Rano pływałam w morzu."},
     {"en":"Co pan robił? / Co pani robiła?","ru":"Что Вы делали? (вежливо)","ex":"Co pani robiła latem?"}
   ]
 },
 "drag":{
   "intro":"Маленькая игра на память. Перетащи каждую польскую форму к её переводу.",
   "pairs":[["byłeś","ты был"],["była","она была"],["Co pan robił?","Что Вы делали? (к мужчине)"],["na wakacjach","на каникулах"]]
 },
 "reading":{
   "intro":"Прочитай и послушай рассказ Марека о его лете. Заметь: он говорит о себе в мужском роде.",
   "title":"Moje lato",
   "sentences":["Latem pracowałem w Krakowie.","Nie miałem długiego urlopu.","Miałem tylko jeden tydzień.","Byłem w górach, w Zakopanem.","Rano chodziłem po górach.","Po południu odpoczywałem.","Wieczorem czytałem albo oglądałem film.","Pogoda była dobra, ale krótko.","Anna była nad morzem trzy tygodnie.","Ona zwiedzała Gdańsk i opalała się na plaży.","Trochę zazdrościłem.","A gdzie ty byłeś latem?"],
   "translation":"Летом я работал в Кракове. Долгого отпуска у меня не было. Была только одна неделя. Я был в горах, в Закопане. Утром ходил по горам. После обеда отдыхал. Вечером читал или смотрел фильм. Погода была хорошая, но недолго. Анна была на море три недели. Она осматривала Гданьск и загорала на пляже. Я немного завидовал. А где ты был летом?"
 },
 "quiz":{
   "intro":"Пять вопросов — и первый день A2 за плечами. Правило всегда рядом, если понадобится. 💛",
   "items":[
     {"q":"1. Спрашиваем Анну: «Где ты была?» —","opts":["Gdzie byłaś?","Gdzie była?","Gdzie byłeś?"],"answer":0,
      "explain":"К женщине на «ты» — <b>byłaś</b>. Byłeś — к мужчине, była — «она была»."},
     {"q":"2. Прошедшее от <b>zwiedzać</b> для «я» (говорит мужчина) —","opts":["zwiedzam","zwiedzałam","zwiedzałem"],"answer":2,
      "explain":"Убираем -ć, добавляем -ł и хвостик: <b>zwiedzałem</b>. Zwiedzam — настоящее время."},
     {"q":"3. Вежливо к женщине: «Что Вы делали летом?» —","opts":["Co pani robiłaś latem?","Co pani robiła latem?","Co pani robił latem?"],"answer":1,
      "explain":"pani + форма третьего лица женского рода: <b>Co pani robiła latem?</b>"},
     {"q":"4. «Летом я была на море» —","opts":["Latem byłam nad morzem","W latem byłam nad morze","Lato byłam nad morzem"],"answer":0,
      "explain":"<b>Latem</b> — без предлога, и место отвечает на «где»: nad morzem."},
     {"q":"5. В форме <b>robiłaś</b> хвостик -aś говорит, что —","opts":["речь о «ты» — о женщине","речь о ней","говорит женщина о себе"],"answer":0,
      "explain":"Хвостик <b>-aś</b> — это «ты», гласная a — женский род. О себе женщина сказала бы robiłam, о ней — robiła."}
   ]
 },
 "essay":{
   "intro":"Расскажи о своём лете — так же коротко, как Марек. Выбирай ту форму, которая про тебя: на -em или на -am.",
   "prompt":"Напиши 4–5 предложений: где ты был(а) летом, что делал(а), как была погода.",
   "hint":"Схема: Latem był(a)m… Miał(a)m… tygodnie wakacji. Rano… Wieczorem… Pogoda była…",
   "example":"Latem byłam nad morzem. Miałam dwa tygodnie wakacji. Rano pływałam, po południu zwiedzałam miasto. Wieczorem czytałam na plaży. Pogoda była piękna."
 }
},
"2": {
 "day":2,"week":"01",
 "themeRu":"Мы были, они были",
 "themeEn":"Byliśmy, byłyśmy",
 "intro":"Один человек — это только начало. Сегодня в прошедшее время входит компания: мы, вы, они. И тут польский делает то, чего русский не делает никогда: он смотрит, есть ли в группе хоть один мужчина. <b>Byliśmy</b> или <b>byłyśmy</b> — от этого зависит форма. Родная интуиция здесь молчит, поэтому пойдём медленно.",
 "introAudio":"Один человек — это только начало. Сегодня в прошедшее время входит компания: мы, вы, они. И тут польский делает то, чего русский не делает никогда: он смотрит, есть ли в группе хоть один мужчина. Byliśmy или byłyśmy — от этого зависит форма. Родная интуиция здесь молчит, поэтому пойдём медленно.",
 "goals":[
   "Сказать «мы были» двумя способами: <b>byliśmy</b> и <b>byłyśmy</b> — и знать, когда какой",
   "Различать <b>oni byli</b> и <b>one były</b> — мужско-личный род в первом приближении",
   "Построить множественное число прошедшего от любого знакомого глагола",
   "Рассказать о поездке компанией: с кем вы были и что делали"
 ],
 "learned":[
   "Сказал(а) «мы были» двумя способами: byliśmy и byłyśmy",
   "Различил(а) oni byli и one były",
   "Построил(а) множественное число прошедшего от знакомых глаголов",
   "Рассказал(а) о поездке компанией"
 ],
 "review":{
   "intro":"Сначала — вчерашнее единственное число: шесть форм и вежливый вопрос через pan / pani.",
   "introAudio":"Сначала — вчерашнее единственное число: шесть форм и вежливый вопрос через pan или pani.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто говорит и о ком.",
      "q":"Анна о себе: «Летом я работала» —","opts":["Latem pracowała","Latem pracowałam","Latem pracowałem"],"answer":1,
      "explain":"Женщина о себе — <b>pracowałam</b>. Pracowała — «она работала», pracowałem — мужчина о себе."},
     {"type":"choice","howto":"<b>Что делать:</b> вежливое обращение — какое лицо?",
      "q":"Вежливо к мужчине: «Где Вы были?» —","opts":["Gdzie pan byłeś?","Gdzie pan byłem?","Gdzie pan był?"],"answer":2,
      "explain":"pan берёт форму третьего лица: <b>Gdzie pan był?</b>"},
     {"type":"choice","q":"«Летом я была на море» —",
      "opts":["W latem byłam nad morzem","Latem byłam nad morze","Latem byłam nad morzem"],"answer":2,
      "explain":"Место, где ты была → <b>nad morzem</b>; «летом» — без предлога, одним словом."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорит мужчина.",
      "q":"Собери: <b>«Я отдыхал в горах»</b>","answer":"Odpoczywałem w górach"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Два «мы»",
    "title":"<em>byliśmy</em> или <em>byłyśmy</em>?",
    "paras":[
      "По-русски «мы были» — одна форма на всех: и на трёх подруг, и на семью, и на целый класс. Польский делит это надвое, и делит по одному признаку: <b>есть ли в группе хотя бы один мужчина</b>.",
      "Есть мужчина — пусть даже один среди десяти женщин — <b>byliśmy</b>. Только женщины — <b>byłyśmy</b>. Сравни: Anna i Ewa — <b>byłyśmy</b> w Gdańsku. Anna i Marek — <b>byliśmy</b> w Gdańsku.",
      "Вся разница — в одном слоге: <b>-li-</b> против <b>-ły-</b>. Слог с <b>li</b> значит «где-то в группе есть мужчина», слог с <b>ły</b> — «одни женщины». Эта пара слогов будет сопровождать нас весь уровень, поэтому знакомимся сразу.",
      "И честно: русская интуиция здесь не подскажет ничего — в русском такого различия нет вообще. Это не «похоже, но иначе», это просто новое. Зато признак один и очень простой."
    ],
    "audio":"По-русски «мы были» — одна форма на всех: и на трёх подруг, и на семью, и на целый класс. Польский делит это надвое, и делит по одному признаку: есть ли в группе хотя бы один мужчина. Есть мужчина, пусть даже один среди десяти женщин — byliśmy. Только женщины — byłyśmy. Сравни: Anna i Ewa — byłyśmy w Gdańsku. Anna i Marek — byliśmy w Gdańsku. Вся разница в одном слоге: -li- против -ły-. Слог с li значит «где-то в группе есть мужчина», слог с ły — «одни женщины». Эта пара слогов будет сопровождать нас весь уровень, поэтому знакомимся сразу. И честно: русская интуиция здесь не подскажет ничего, в русском такого различия нет вообще. Это не «похоже, но иначе», это просто новое. Зато признак один и очень простой.",
    "table":{"rows":[
      ["my → <b>byliśmy</b> <button class=\"play\" data-say=\"byliśmy\">🔊</button>","мы были — в группе есть мужчина"],
      ["my → <b>byłyśmy</b> <button class=\"play\" data-say=\"byłyśmy\">🔊</button>","мы были — только женщины"],
      ["wy → <b>byliście</b> / <b>byłyście</b> <button class=\"play\" data-say=\"byliście, byłyście\">🔊</button>","вы были (о группе)"],
      ["oni → <b>byli</b> · one → <b>były</b> <button class=\"play\" data-say=\"byli, były\">🔊</button>","они были"]
    ],"star":0},
    "examples":[
      {"ru":"Мы с сестрой были на море.","en":"<b>Byłyśmy</b> z siostrą nad morzem.","gloss":"две женщины","say":"Byłyśmy z siostrą nad morzem."},
      {"ru":"Мы с братом были в горах.","en":"<b>Byliśmy</b> z bratem w górach.","gloss":"в группе есть мужчина","say":"Byliśmy z bratem w górach."},
      {"ru":"Где вы были летом?","en":"Gdzie <b>byliście</b> latem?","gloss":"к смешанной компании","say":"Gdzie byliście latem?"},
      {"ru":"Девушки были на пляже.","en":"Dziewczyny <b>były</b> na plaży.","say":"Dziewczyny były na plaży."}
    ],
    "mistakes":[
      {"wrong":"Anna i Marek: Byłyśmy w Gdańsku.","right":"Anna i Marek: <b>Byliśmy</b> w Gdańsku.","why":"в группе есть мужчина — значит, форма со слогом -li-. Byłyśmy сказали бы только женщины."},
      {"wrong":"Anna i Ewa: Byliśmy razem.","right":"Anna i Ewa: <b>Byłyśmy</b> razem.","why":"две женщины — форма со слогом -ły-."}
    ],
    "mnemonic":"👥 -li- = «есть мужчина». -ły- = «одни женщины». Один слог решает всё.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на состав группы, потом выбирай слог.",
       "q":"Анна рассказывает о поездке с подругой Евой. Она скажет —","opts":["Byłyśmy w Gdańsku","Byłyście w Gdańsku","Byliśmy w Gdańsku"],"answer":0,
       "explain":"Две женщины → <b>byłyśmy</b>. Byłyście значит «вы были», а речь о себе."},
      {"type":"choice","q":"Марек о поездке с Анной: «Мы были в горах» —",
       "opts":["Byliśmy w górach","Byłyśmy w górach","Byli w górach"],"answer":0,
       "explain":"В группе есть мужчина → <b>byliśmy</b>. Byli — это «они были»."},
      {"type":"type","howto":"Напиши по-польски то, что говорят две подруги. Хвостики можно не ставить.",
       "q":"«Мы были на пляже» — говорят две подруги","accept":["byłyśmy na plaży","bylysmy na plazy","byłyśmy na plazy","bylysmy na plaży"],"placeholder":"Był… na plaży"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Мужско-личный род",
    "title":"<em>oni</em> и <em>one</em> — кто есть кто",
    "paras":[
      "У польского «они» тоже две формы, и делятся они по тому же признаку. <b>Oni</b> — про группу, где есть хотя бы один мужчина. <b>One</b> — про всё остальное: женщины, дети, животные, вещи.",
      "Отсюда <b>Studenci byli w parku</b> (студенты, среди них мужчины), но <b>Studentki były w parku</b> (студентки). И <b>Koty były w domu</b>, <b>Książki były na stole</b> — коты и книги попадают в one, как бы непривычно это ни звучало.",
      "Слово <b>dzieci</b> тоже берёт <b>one</b>: <b>Dzieci były w szkole</b>. Даже если во дворе одни мальчики: грамматика смотрит на слово, а не на компанию.",
      "У этой системы есть имя — <b>rodzaj męskoosobowy</b>, мужско-личный род. Сегодня мы взяли от неё только прошедшее время; вся система, с «двое мужчин / две женщины», ждёт нас на третьей неделе."
    ],
    "audio":"У польского «они» тоже две формы, и делятся они по тому же признаку. Oni — про группу, где есть хотя бы один мужчина. One — про всё остальное: женщины, дети, животные, вещи. Отсюда studenci byli w parku, среди них мужчины, но studentki były w parku. И koty były w domu, książki były na stole — коты и книги попадают в one, как бы непривычно это ни звучало. Слово dzieci тоже берёт one: dzieci były w szkole. Даже если во дворе одни мальчики: грамматика смотрит на слово, а не на компанию. У этой системы есть имя — rodzaj męskoosobowy, мужско-личный род. Сегодня мы взяли от неё только прошедшее время, вся система ждёт нас на третьей неделе.",
    "table":{"rows":[
      ["Marek i Piotr → <b>oni byli</b> <button class=\"play\" data-say=\"oni byli\">🔊</button>","мужчины"],
      ["Anna i Marek → <b>oni byli</b>","смешанная группа"],
      ["Anna i Ewa → <b>one były</b> <button class=\"play\" data-say=\"one były\">🔊</button>","только женщины"],
      ["dzieci → <b>one były</b> <button class=\"play\" data-say=\"dzieci były\">🔊</button>","дети"],
      ["koty, książki → <b>one były</b>","животные и вещи"]
    ],"star":1},
    "examples":[
      {"ru":"Студенты были на лекции.","en":"Studenci <b>byli</b> na wykładzie.","say":"Studenci byli na wykładzie."},
      {"ru":"Студентки были на лекции.","en":"Studentki <b>były</b> na wykładzie.","say":"Studentki były na wykładzie."},
      {"ru":"Дети были дома.","en":"Dzieci <b>były</b> w domu.","gloss":"dzieci — всегда one","say":"Dzieci były w domu."},
      {"ru":"Родители были на работе.","en":"Rodzice <b>byli</b> w pracy.","gloss":"среди родителей есть отец — значит oni","say":"Rodzice byli w pracy."},
      {"ru":"Книги были на столе.","en":"Książki <b>były</b> na stole.","say":"Książki były na stole."}
    ],
    "mistakes":[
      {"wrong":"Dzieci byli w domu.","right":"Dzieci <b>były</b> w domu.","why":"слово dzieci идёт с формой one — независимо от того, мальчики это или девочки."},
      {"wrong":"Koty byli w ogrodzie.","right":"Koty <b>były</b> w ogrodzie.","why":"мужско-личный род — только про людей-мужчин. Животные и вещи всегда one."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, есть ли в группе мужчина.",
       "q":"«Марек и Пётр были в кино» —","opts":["Marek i Piotr były w kinie","Marek i Piotr byli w kinie","Marek i Piotr byliśmy w kinie"],"answer":1,
       "explain":"Двое мужчин → <b>byli</b>. Były — про женщин, детей, животных и вещи."},
      {"type":"choice","q":"«Дети были в школе» —",
       "opts":["Dzieci byli w szkole","Dzieci były w szkole","Dzieci byliście w szkole"],"answer":1,
       "explain":"Слово <b>dzieci</b> всегда идёт с формой one: były."},
      {"type":"choice","q":"«Анна и Ева были на пляже» —",
       "opts":["Anna i Ewa byli na plaży","Anna i Ewa byłyśmy na plaży","Anna i Ewa były na plaży"],"answer":2,
       "explain":"Только женщины → <b>były</b>. Byłyśmy значит «мы были», а тут речь о них."}
    ]
   },
   {
    "eyebrow":"Правило 3 · Рецепт для множественного",
    "title":"От <em>robił</em> к <em>robili</em> и <em>robiły</em>",
    "paras":[
      "Рецепт короткий: возьми форму «он делал» — <b>robił</b> — и замени <b>-ł</b> на <b>-li</b> (там, где есть мужчина) или на <b>-ły</b> (во всех остальных случаях). Получится <b>robili</b> / <b>robiły</b>. Дальше добавляется хвостик лица.",
      "Хвостики одинаковы для обеих веток: «мы» — <b>-śmy</b>, «вы» — <b>-ście</b>, «они» — ничего. Отсюда шесть форм: robili<b>śmy</b> / robiły<b>śmy</b>, robili<b>ście</b> / robiły<b>ście</b>, robili / robiły.",
      "Проверь на знакомых глаголах: pracował → <b>pracowali / pracowały</b>, czytał → <b>czytali / czytały</b>, mieszkał → <b>mieszkali / mieszkały</b>, mówił → <b>mówili / mówiły</b>, zwiedzał → <b>zwiedzali / zwiedzały</b>.",
      "Деталь для уха: в формах на <b>-śmy</b> и <b>-ście</b> литературная норма ставит ударение на третий слог от конца — <b>BY</b>-liś-my, ro-<b>BI</b>-liś-my. В повседневной речи многие говорят по общему правилу, на предпоследнем слоге. Ты услышишь оба варианта, и оба тебя поймут."
    ],
    "audio":"Рецепт короткий: возьми форму «он делал», robił, и замени -ł на -li, там, где есть мужчина, или на -ły во всех остальных случаях. Получится robili или robiły. Дальше добавляется хвостик лица. Хвостики одинаковы для обеих веток: «мы» -śmy, «вы» -ście, «они» ничего. Отсюда шесть форм: robiliśmy, robiłyśmy, robiliście, robiłyście, robili, robiły. Проверь на знакомых глаголах: pracował — pracowali, pracowały; czytał — czytali, czytały; mieszkał — mieszkali, mieszkały; mówił — mówili, mówiły; zwiedzał — zwiedzali, zwiedzały. Деталь для уха: в формах на -śmy и -ście литературная норма ставит ударение на третий слог от конца: byliśmy, robiliśmy. В повседневной речи многие говорят по общему правилу, на предпоследнем слоге. Ты услышишь оба варианта, и оба тебя поймут.",
    "table":{"rows":[
      ["robił → <b>robili</b> / <b>robiły</b> <button class=\"play\" data-say=\"robili, robiły\">🔊</button>","они делали"],
      ["my → <b>robiliśmy</b> / <b>robiłyśmy</b> <button class=\"play\" data-say=\"robiliśmy, robiłyśmy\">🔊</button>","мы делали"],
      ["wy → <b>robiliście</b> / <b>robiłyście</b> <button class=\"play\" data-say=\"robiliście, robiłyście\">🔊</button>","вы делали"],
      ["pracował → <b>pracowali</b> / <b>pracowały</b> <button class=\"play\" data-say=\"pracowali, pracowały\">🔊</button>","они работали"],
      ["czytał → <b>czytali</b> / <b>czytały</b> <button class=\"play\" data-say=\"czytali, czytały\">🔊</button>","они читали"]
    ],"star":0},
    "examples":[
      {"ru":"Мы много плавали.","en":"Dużo <b>pływaliśmy</b>.","gloss":"в компании есть мужчина","say":"Dużo pływaliśmy."},
      {"ru":"Мы осматривали Краков.","en":"<b>Zwiedzałyśmy</b> Kraków.","gloss":"говорят женщины","say":"Zwiedzałyśmy Kraków."},
      {"ru":"Что вы делали летом?","en":"Co <b>robiliście</b> latem?","say":"Co robiliście latem?"},
      {"ru":"Они жили в Варшаве.","en":"<b>Mieszkali</b> w Warszawie.","say":"Mieszkali w Warszawie."},
      {"ru":"Они (девушки) говорили по-польски.","en":"<b>Mówiły</b> po polsku.","say":"Mówiły po polsku."}
    ],
    "mistakes":[
      {"wrong":"Anna i Ewa: Byliśmy razem.","right":"Anna i Ewa: <b>Byłyśmy</b> razem.","why":"ветку выбирает состав группы, а не то, кто из компании говорит вслух."},
      {"wrong":"Co robiliśmy wy latem?","right":"Co <b>robiliście</b> latem?","why":"«вы» — хвостик -ście. Хвостик -śmy принадлежит «мы»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> сначала выбери ветку (-li- или -ły-), потом хвостик лица.",
       "q":"Две подруги: «Мы осматривали Краков» —","opts":["Zwiedzałyśmy Kraków","Zwiedzałyście Kraków","Zwiedzaliśmy Kraków"],"answer":0,
       "explain":"Только женщины → ветка -ły-, «мы» → хвостик -śmy: <b>zwiedzałyśmy</b>."},
      {"type":"choice","q":"«Что вы делали?» — к компании друзей, среди них есть мужчины —",
       "opts":["Co robiliśmy?","Co robiłyście?","Co robiliście?"],"answer":2,
       "explain":"Есть мужчины → ветка -li-, «вы» → хвостик -ście: <b>robiliście</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорит Марек о себе и брате.",
       "q":"Собери: <b>«Мы работали всё лето»</b>","answer":"Pracowaliśmy całe lato"}
    ],
    "mnemonic":"🔁 robił → robi-li / robi-ły → плюс -śmy (мы), -ście (вы) или ничего (они)."
   },
   {
    "eyebrow":"Правило 4 · С кем и вместе",
    "title":"<em>z bratem</em>, <em>z siostrą</em>, <em>razem</em>",
    "paras":[
      "Чтобы рассказать о компании, нужен предлог <b>z</b> и творительный падеж — тот самый, что в A1 держал профессии (jestem nauczycielem). «С братом» — <b>z bratem</b>, «с сестрой» — <b>z siostrą</b>, «с друзьями» — <b>z przyjaciółmi</b>.",
      "Русская подсказка работает целиком: «с кем» — творительный и там, и там. Меняются только окончания: brat → z <b>bratem</b>, siostra → z <b>siostrą</b>, mama → z <b>mamą</b>, tata → z <b>tatą</b>, żona → z <b>żoną</b>, mąż → z <b>mężem</b>.",
      "Полезные слова компании: <b>razem</b> (вместе), <b>sam / sama</b> (один / одна), <b>sami / same</b> (одни — снова две ветки, как byli / były).",
      "И вопрос, с которого начинается любой рассказ о поездке: <b>Z kim byliście?</b> — «С кем вы были?»"
    ],
    "audio":"Чтобы рассказать о компании, нужен предлог z и творительный падеж — тот самый, что в A1 держал профессии, jestem nauczycielem. «С братом» — z bratem, «с сестрой» — z siostrą, «с друзьями» — z przyjaciółmi. Русская подсказка работает целиком: «с кем» — творительный и там, и там. Меняются только окончания: brat — z bratem, siostra — z siostrą, mama — z mamą, tata — z tatą, żona — z żoną, mąż — z mężem. Полезные слова компании: razem — вместе, sam или sama — один и одна, sami или same — одни, снова две ветки, как byli и były. И вопрос, с которого начинается любой рассказ о поездке: z kim byliście?",
    "table":{"rows":[
      ["z bratem / z siostrą <button class=\"play\" data-say=\"z bratem, z siostrą\">🔊</button>","с братом / с сестрой"],
      ["z mamą / z tatą <button class=\"play\" data-say=\"z mamą, z tatą\">🔊</button>","с мамой / с папой"],
      ["z przyjacielem / z przyjaciółmi <button class=\"play\" data-say=\"z przyjacielem, z przyjaciółmi\">🔊</button>","с другом / с друзьями"],
      ["razem <button class=\"play\" data-say=\"razem\">🔊</button>","вместе"],
      ["Z kim byliście? <button class=\"play\" data-say=\"Z kim byliście?\">🔊</button>","С кем вы были?"]
    ],"star":-1},
    "examples":[
      {"ru":"Я была там с сестрой.","en":"Byłam tam <b>z siostrą</b>.","say":"Byłam tam z siostrą."},
      {"ru":"Мы были в горах с друзьями.","en":"<b>Byliśmy</b> w górach <b>z przyjaciółmi</b>.","say":"Byliśmy w górach z przyjaciółmi."},
      {"ru":"С кем вы были на море?","en":"<b>Z kim</b> byliście nad morzem?","say":"Z kim byliście nad morzem?"},
      {"ru":"Мы отдыхали вместе.","en":"Odpoczywaliśmy <b>razem</b>.","say":"Odpoczywaliśmy razem."}
    ],
    "mistakes":[
      {"wrong":"Byłam tam z siostra.","right":"Byłam tam <b>z siostrą</b>.","why":"после z идёт творительный падеж: siostra → siostrą. Хвостик ą и несёт весь смысл «с кем»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после z.",
       "q":"«Я был там с братом» —","opts":["Byłem tam z bratem","Byłem tam z brata","Byłem tam z brat"],"answer":0,
       "explain":"После <b>z</b> — творительный падеж: z bratem. Форма z brata значила бы «от брата»."},
      {"type":"type","howto":"Напиши вопрос по-польски — спрашиваем женщину. Хвостики можно не ставить.",
       "q":"«С кем ты была?»","accept":["z kim byłaś","z kim bylas","z kim byłas","z kim bylaś"],"placeholder":"Z kim…"}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек продолжают разговор о лете — теперь про компанию. Следи за слогами -li- и -ły-.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Byłaś nad morzem sama?","ru":"Ты была на море одна?",
      "words":[["sama","одна"]]},
     {"who":"A","name":"Anna","side":"left","en":"Nie, byłyśmy z siostrą. Tylko my dwie.","ru":"Нет, мы были с сестрой. Только мы вдвоём.",
      "words":[["byłyśmy","мы были (только женщины)"],["my dwie","мы вдвоём (о женщинах)"]]},
     {"who":"M","name":"Marek","side":"right","en":"I co robiłyście przez trzy tygodnie?","ru":"И что вы делали три недели?",
      "words":[["robiłyście","вы делали (о женщинах)"]]},
     {"who":"A","name":"Anna","side":"left","en":"Pływałyśmy, zwiedzałyśmy stare miasto, dużo rozmawiałyśmy.","ru":"Плавали, осматривали старый город, много разговаривали.",
      "words":[["Pływałyśmy","мы плавали"],["rozmawiałyśmy","мы разговаривали"]]},
     {"who":"M","name":"Marek","side":"right","en":"A rodzice? Oni też byli w Gdańsku?","ru":"А родители? Они тоже были в Гданьске?",
      "words":[["rodzice","родители"],["oni byli","они были"]]},
     {"who":"A","name":"Anna","side":"left","en":"Nie, oni byli w domu. A wy? Z kim byliście w górach?","ru":"Нет, они были дома. А вы? С кем вы были в горах?",
      "words":[["Z kim","с кем"],["byliście","вы были"]]},
     {"who":"M","name":"Marek","side":"right","en":"Byliśmy z bratem. Chodziliśmy po górach cały tydzień.","ru":"Мы были с братом. Ходили по горам всю неделю.",
      "words":[["Byliśmy","мы были (в группе есть мужчина)"],["Chodziliśmy","мы ходили"]]},
     {"who":"A","name":"Anna","side":"left","en":"Widzisz? Wszyscy odpoczywaliśmy, tylko inaczej.","ru":"Видишь? Все мы отдыхали, только по-разному.",
      "words":[["Wszyscy","все"],["inaczej","по-другому"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка во дворе: кто где был. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Gdzie były dzieci?","ru":"Где были дети?"},
     {"who":"B","en":"Dzieci były w parku.","ru":"Дети были в парке."},
     {"who":"A","en":"A rodzice?","ru":"А родители?"},
     {"who":"B","en":"Rodzice byli w pracy. Wieczorem wszyscy byli w domu.","ru":"Родители были на работе. Вечером все были дома."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — компания, множественное число и два разных «мы».",
   "items":[
     {"en":"byliśmy / byłyśmy","ru":"мы были (есть мужчина / только женщины)","ex":"Byłyśmy z siostrą nad morzem."},
     {"en":"byliście / byłyście","ru":"вы были","ex":"Gdzie byliście latem?"},
     {"en":"oni byli / one były","ru":"они были","ex":"Dzieci były w domu."},
     {"en":"razem","ru":"вместе","ex":"Odpoczywaliśmy razem."},
     {"en":"sam / sama","ru":"один / одна","ex":"Byłaś tam sama?"},
     {"en":"z kim?","ru":"с кем?","ex":"Z kim byliście w górach?"},
     {"en":"z bratem / z siostrą","ru":"с братом / с сестрой","ex":"Byliśmy z bratem."},
     {"en":"z przyjaciółmi","ru":"с друзьями","ex":"Byli tam z przyjaciółmi."},
     {"en":"rodzice","ru":"родители","ex":"Rodzice byli w pracy."},
     {"en":"dzieci","ru":"дети","ex":"Dzieci były w szkole."},
     {"en":"rozmawiać","ru":"разговаривать","ex":"Dużo rozmawiałyśmy."},
     {"en":"wszyscy","ru":"все (о людях, есть мужчины)","ex":"Wszyscy byli w domu."}
   ]
 },
 "drag":{
   "intro":"Перетащи каждую форму к её описанию. Смотри на слог -li- или -ły-.",
   "pairs":[["byliśmy","мы были — в группе есть мужчина"],["byłyśmy","мы были — только женщины"],["one były","они были — женщины или вещи"],["byliście","вы были"]]
 },
 "reading":{
   "intro":"Прочитай и послушай рассказ Анны о поездке с сестрой. Заметь: речь всё время о двух женщинах.",
   "title":"Byłyśmy nad morzem",
   "sentences":["Latem byłyśmy nad morzem z siostrą.","Mieszkałyśmy w małym hotelu niedaleko plaży.","Rano pływałyśmy, potem opalałyśmy się.","Po południu zwiedzałyśmy stare miasto.","Wieczorem dużo rozmawiałyśmy.","Rodzice byli w domu — oni nie mieli urlopu.","Marek i jego brat byli w górach.","Oni chodzili po górach cały tydzień.","Dzieci sąsiadów były u babci na wsi.","Wszyscy odpoczywali, każdy inaczej."],
   "translation":"Летом мы с сестрой были на море. Мы жили в маленькой гостинице недалеко от пляжа. Утром плавали, потом загорали. После обеда осматривали старый город. Вечером много разговаривали. Родители были дома — у них не было отпуска. Марек и его брат были в горах. Они ходили по горам всю неделю. Дети соседей были у бабушки в деревне. Все отдыхали, каждый по-своему."
 },
 "quiz":{
   "intro":"Пять вопросов — и мужско-личный род перестанет быть сюрпризом. 💛",
   "items":[
     {"q":"1. Анна и Ева о себе: «Мы были в Гданьске» —","opts":["Byliśmy w Gdańsku","Byłyśmy w Gdańsku","Byłyście w Gdańsku"],"answer":1,
      "explain":"Только женщины → <b>byłyśmy</b>. Byłyście значит «вы были»."},
     {"q":"2. «Дети были в парке» —","opts":["Dzieci byli w parku","Dzieci były w parku","Dzieci byliśmy w parku"],"answer":1,
      "explain":"Слово <b>dzieci</b> всегда идёт с формой one: były."},
     {"q":"3. «Что вы делали?» — к компании, где есть мужчины —","opts":["Co robiłyśmy?","Co robiłyście?","Co robiliście?"],"answer":2,
      "explain":"Есть мужчины → ветка -li-, «вы» → хвостик -ście: <b>robiliście</b>."},
     {"q":"4. Множественное прошедшее от <b>pracować</b> для «они» — о мужчинах —","opts":["pracowaliśmy","pracowali","pracowały"],"answer":1,
      "explain":"pracował → <b>pracowali</b> (мужско-личное) или pracowały (все остальные). Pracowaliśmy — это «мы»."},
     {"q":"5. Хвостик <b>-ście</b> в форме byliście принадлежит —","opts":["«они»","«мы»","«вы»"],"answer":2,
      "explain":"<b>-ście</b> — это «вы». У «мы» хвостик -śmy, у «они» хвостика нет."}
   ]
 },
 "essay":{
   "intro":"Расскажи о поездке или прогулке, где ты был(а) не один. Главное — правильно выбрать ветку: -li- или -ły-.",
   "prompt":"Напиши 4–5 предложений: с кем вы были, где, что делали, как всё прошло.",
   "hint":"Схема: Byliśmy / Byłyśmy z… Mieszkaliśmy… Rano… Wieczorem… Проверь состав компании 💛",
   "example":"Latem byliśmy w górach z bratem i jego żoną. Mieszkaliśmy w małym domu niedaleko lasu. Rano chodziliśmy po górach, po południu odpoczywaliśmy. Wieczorem dużo rozmawialiśmy. Tydzień był krótki, ale dobry."
 }
},
"3": {
 "day":3,"week":"01",
 "themeRu":"Неправильное прошлое",
 "themeEn":"Szedłem, mogłem, jadłem",
 "intro":"Пять глаголов сегодня откажутся слушаться рецепта. <b>Iść</b> в прошедшем даёт <b>szedł</b>, <b>móc</b> даёт <b>mógł</b> — корень меняется на глазах. И это, пожалуй, самое приятное место недели: русский ведёт себя точно так же. «Идти» → «шёл», «мочь» → «мог», «есть» → «ел». Те же глаголы, те же капризы.",
 "introAudio":"Пять глаголов сегодня откажутся слушаться рецепта. Iść в прошедшем даёт szedł, móc даёт mógł — корень меняется на глазах. И это, пожалуй, самое приятное место недели: русский ведёт себя точно так же. «Идти» — «шёл», «мочь» — «мог», «есть» — «ел». Те же глаголы, те же капризы.",
 "goals":[
   "Сказать «я шёл / я шла»: <b>szedłem</b> / <b>szłam</b>",
   "Пользоваться формами <b>mogłem</b>, <b>musiałem</b>, <b>chciałem</b> — и их женскими двойниками",
   "Не спотыкаться на <b>mógł</b> и <b>jadł</b>: где меняется гласная, а где нет",
   "Собрать рассказ о неудавшемся дне: не смог, пришлось, хотел"
 ],
 "learned":[
   "Сказал(а) «я шёл / я шла»: szedłem / szłam",
   "Воспользовался(лась) формами mogłem, musiałem, chciałem",
   "Разобрал(а) формы mógł и jadł: где меняется гласная, а где нет",
   "Собрал(а) рассказ о неудавшемся дне"
 ],
 "review":{
   "intro":"Сначала вчерашнее: два «мы», две ветки множественного числа и слово <b>dzieci</b>, которое всегда выбирает <b>one</b>.",
   "introAudio":"Сначала вчерашнее: два «мы», две ветки множественного числа и слово dzieci, которое всегда выбирает one.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри на состав группы.",
      "q":"Анна и её сестра о себе: «Мы были в Кракове» —","opts":["Byliśmy w Krakowie","Byłyśmy w Krakowie","Byłyście w Krakowie"],"answer":1,
      "explain":"Только женщины → <b>byłyśmy</b>. Byłyście — это «вы были»."},
     {"type":"choice","q":"«Дети были дома» —",
      "opts":["Dzieci byli w domu","Dzieci były w domu","Dzieci byliśmy w domu"],"answer":1,
      "explain":"Слово <b>dzieci</b> идёт с формой one: были — <b>były</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни вежливую форму прошедшего.",
      "q":"Вежливо к женщине: «Что Вы делали летом?» —","opts":["Co pani robiła latem?","Co pani robiły latem?","Co pani robiłaś latem?"],"answer":0,
      "explain":"pani + форма третьего лица женского рода: <b>Co pani robiła latem?</b>"},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорят Марек и его брат.",
      "q":"Собери: <b>«Мы были в горах»</b>","answer":"Byliśmy w górach"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Идти → шёл",
    "title":"<em>szedłem</em> и <em>szłam</em>",
    "paras":[
      "Глагол <b>iść</b> в прошедшем не имеет ничего общего со своей словарной формой: получается <b>szedł</b>. Ровно как в русском — «идти» в прошедшем даёт «шёл», без единой общей буквы. Это не польская странность, это общая славянская.",
      "Мужские формы держат кусочек <b>szed-</b>: <b>szedłem</b>, <b>szedłeś</b>, <b>szedł</b>. Женские теряют <b>e</b> и становятся короче: <b>szłam</b>, <b>szłaś</b>, <b>szła</b>. Средний род — <b>szło</b>.",
      "Во множественном — обычные две ветки: <b>szliśmy</b> / <b>szłyśmy</b>, <b>szliście</b> / <b>szłyście</b>, <b>szli</b> / <b>szły</b>.",
      "Для уха: конечное <b>ł</b> в <b>szedł</b> почти не слышно, слово звучит коротко — [шэт]. Зато в <b>szedłem</b> оно на месте: [шэ́-ду̯эм]."
    ],
    "audio":"Глагол iść в прошедшем не имеет ничего общего со своей словарной формой: получается szedł. Ровно как в русском — «идти» в прошедшем даёт «шёл», без единой общей буквы. Это не польская странность, это общая славянская. Мужские формы держат кусочек szed-: szedłem, szedłeś, szedł. Женские теряют e и становятся короче: szłam, szłaś, szła. Средний род — szło. Во множественном обычные две ветки: szliśmy или szłyśmy, szliście или szłyście, szli или szły. Для уха: конечное ł в szedł почти не слышно, слово звучит коротко. Зато в szedłem оно на месте.",
    "table":{"rows":[
      ["ja → <b>szedłem</b> / <b>szłam</b> <button class=\"play\" data-say=\"szedłem, szłam\">🔊</button>","я шёл / я шла"],
      ["ty → <b>szedłeś</b> / <b>szłaś</b> <button class=\"play\" data-say=\"szedłeś, szłaś\">🔊</button>","ты шёл / ты шла"],
      ["on → <b>szedł</b> · ona → <b>szła</b> <button class=\"play\" data-say=\"szedł, szła\">🔊</button>","он шёл / она шла"],
      ["my → <b>szliśmy</b> / <b>szłyśmy</b> <button class=\"play\" data-say=\"szliśmy, szłyśmy\">🔊</button>","мы шли"],
      ["oni → <b>szli</b> · one → <b>szły</b> <button class=\"play\" data-say=\"szli, szły\">🔊</button>","они шли"]
    ],"star":0},
    "examples":[
      {"ru":"Я шёл пешком.","en":"<b>Szedłem</b> pieszo.","say":"Szedłem pieszo."},
      {"ru":"Я шла в магазин.","en":"<b>Szłam</b> do sklepu.","say":"Szłam do sklepu."},
      {"ru":"Мы шли три часа.","en":"<b>Szliśmy</b> trzy godziny.","say":"Szliśmy trzy godziny."},
      {"ru":"Она шла медленно.","en":"<b>Szła</b> powoli.","say":"Szła powoli."}
    ],
    "mistakes":[
      {"wrong":"Iściłem do sklepu.","right":"<b>Szedłem</b> do sklepu.","why":"у iść нет формы по рецепту: прошедшее берётся от другого корня — szedł, szła."},
      {"wrong":"Anna: Szedłam do domu.","right":"Anna: <b>Szłam</b> do domu.","why":"женская форма короче: szłam, без -ed-."}
    ],
    "mnemonic":"🚶 iść → szedł / szła. Как русское «идти → шёл / шла»: корень другой, а логика родная.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто говорит.",
       "q":"Анна о себе: «Я шла пешком» —","opts":["Szłam pieszo","Szła pieszo","Szedłam pieszo"],"answer":0,
       "explain":"Женская форма — <b>szłam</b>, короткая, без -ed-. Szła значит «она шла»."},
      {"type":"choice","q":"«Мы шли два часа» — говорят Марек и его брат —",
       "opts":["Szli dwie godziny","Szłyśmy dwie godziny","Szliśmy dwie godziny"],"answer":2,
       "explain":"Есть мужчины → ветка -li-, «мы» → хвостик -śmy: <b>szliśmy</b>."},
      {"type":"type","howto":"Напиши так, как сказал(а) бы ты о себе. Обе формы принимаются.",
       "q":"«Я шёл / шла в магазин»","accept":["szedłem do sklepu","szłam do sklepu","szedlem do sklepu","szlam do sklepu"],"placeholder":"Sz… do sklepu"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Мог и ел",
    "title":"<em>mógł</em>, <em>mogła</em> · <em>jadł</em>, <em>jedli</em>",
    "paras":[
      "Глагол <b>móc</b> в прошедшем даёт <b>mogłem</b> / <b>mogłam</b>, и всё было бы просто, если бы не одна форма: «он мог» — <b>mógł</b>, с буквой <b>ó</b>. Только здесь и нигде больше: mogłem, mogła, mogli, mogły — везде обычное o.",
      "Русская пара «мог / могла» устроена так же: ударение и звук гуляют внутри одного глагола. Так что удивляться нечему — просто запомни, что <b>ó</b> живёт только в форме mógł.",
      "Глагол <b>jeść</b> даёт <b>jadłem</b> / <b>jadłam</b>, <b>jadł</b>, <b>jadła</b>. А вот во множественном числе мужско-личная ветка меняет гласную: не «jadli», а <b>jedli</b>. Женская ветка остаётся с a: <b>jadły</b>.",
      "Полезное отрицание: <b>nie mogłem</b> — «я не мог», одна из самых частых фраз в рассказе о прошлом. <b>Nie mogłam przyjechać</b> — «я не смогла приехать»."
    ],
    "audio":"Глагол móc в прошедшем даёт mogłem или mogłam, и всё было бы просто, если бы не одна форма: «он мог» — mógł, с буквой ó. Только здесь и нигде больше: mogłem, mogła, mogli, mogły — везде обычное o. Русская пара «мог, могла» устроена так же: звук гуляет внутри одного глагола. Так что удивляться нечему, просто запомни, что ó живёт только в форме mógł. Глагол jeść даёт jadłem, jadłam, jadł, jadła. А вот во множественном числе мужско-личная ветка меняет гласную: не jadli, а jedli. Женская ветка остаётся с a: jadły. Полезное отрицание: nie mogłem — «я не мог», одна из самых частых фраз в рассказе о прошлом.",
    "table":{"rows":[
      ["ja → <b>mogłem</b> / <b>mogłam</b> <button class=\"play\" data-say=\"mogłem, mogłam\">🔊</button>","я мог / я могла"],
      ["on → <b>mógł</b> · ona → <b>mogła</b> <button class=\"play\" data-say=\"mógł, mogła\">🔊</button>","он мог / она могла — ó только здесь"],
      ["oni → <b>mogli</b> · one → <b>mogły</b> <button class=\"play\" data-say=\"mogli, mogły\">🔊</button>","они могли"],
      ["ja → <b>jadłem</b> / <b>jadłam</b> <button class=\"play\" data-say=\"jadłem, jadłam\">🔊</button>","я ел / я ела"],
      ["oni → <b>jedli</b> · one → <b>jadły</b> <button class=\"play\" data-say=\"jedli, jadły\">🔊</button>","они ели — тут a меняется на e"]
    ],"star":1},
    "examples":[
      {"ru":"Я не мог прийти.","en":"<b>Nie mogłem</b> przyjść.","say":"Nie mogłem przyjść."},
      {"ru":"Она не могла работать.","en":"<b>Nie mogła</b> pracować.","say":"Nie mogła pracować."},
      {"ru":"Марек не мог спать.","en":"Marek <b>nie mógł</b> spać.","gloss":"единственная форма с ó","say":"Marek nie mógł spać."},
      {"ru":"Мы ели вареники.","en":"<b>Jedliśmy</b> pierogi.","gloss":"в компании есть мужчина","say":"Jedliśmy pierogi."},
      {"ru":"Они (девушки) ели мороженое.","en":"<b>Jadły</b> lody.","say":"Jadły lody."}
    ],
    "mistakes":[
      {"wrong":"Nie mógłem spać.","right":"<b>Nie mogłem</b> spać.","why":"буква ó появляется только в форме mógł («он мог»). Во всех остальных — обычное o."},
      {"wrong":"Jadliśmy pierogi.","right":"<b>Jedliśmy</b> pierogi.","why":"в мужско-личной ветке множественного jeść меняет a на e: jedli, jedliśmy."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, где живёт буква ó.",
       "q":"«Я не мог прийти» —","opts":["Nie mogłem przyjść","Nie mogła przyjść","Nie mógłem przyjść"],"answer":0,
       "explain":"Форма для «я» — <b>mogłem</b>, с обычным o. Mógł — только «он мог»."},
      {"type":"choice","q":"«Они ели вареники» — говорим о мужчинах —",
       "opts":["Jadły pierogi","Jedli pierogi","Jadli pierogi"],"answer":1,
       "explain":"Мужско-личная ветка меняет гласную: <b>jedli</b>. Jadły — про женщин или вещи; формы «jadli» в польском нет."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорит женщина.",
       "q":"Собери: <b>«Я не могла работать»</b>","answer":"Nie mogłam pracować"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Семейка на -eć",
    "title":"<em>miał</em>, <em>chciał</em>, <em>musiał</em> — и <em>mieli</em>",
    "paras":[
      "Глаголы на <b>-eć</b> ведут себя одинаково, и их стоит выучить одной пачкой: <b>mieć</b> → miał, <b>chcieć</b> → chciał, <b>musieć</b> → musiał, <b>widzieć</b> → widział, <b>wiedzieć</b> → wiedział.",
      "В единственном числе всюду <b>-a-</b>: <b>miałem / miałam</b>, <b>chciałeś / chciałaś</b>, <b>musiał / musiała</b>. То же в женской ветке множественного: <b>miały</b>, <b>chciały</b>, <b>musiały</b>.",
      "А вот мужско-личная ветка снова меняет гласную на <b>-e-</b>: <b>mieli</b>, <b>chcieli</b>, <b>musieli</b>, <b>widzieli</b>, <b>wiedzieli</b>. Тот же фокус, что у jadł → jedli. Заметь закономерность: перед <b>-li</b> буква a превращается в e.",
      "Смысл у этих пяти глаголов рабочий, без них не расскажешь и дня: «у меня было», «я хотел», «я должен был», «я видел», «я знал»."
    ],
    "audio":"Глаголы на -eć ведут себя одинаково, и их стоит выучить одной пачкой: mieć — miał, chcieć — chciał, musieć — musiał, widzieć — widział, wiedzieć — wiedział. В единственном числе всюду -a-: miałem, miałam, chciałeś, chciałaś, musiał, musiała. То же в женской ветке множественного: miały, chciały, musiały. А вот мужско-личная ветка снова меняет гласную на -e-: mieli, chcieli, musieli, widzieli, wiedzieli. Тот же фокус, что у jadł и jedli. Заметь закономерность: перед -li буква a превращается в e. Смысл у этих пяти глаголов рабочий, без них не расскажешь и дня: у меня было, я хотел, я должен был, я видел, я знал.",
    "table":{"rows":[
      ["mieć → <b>miałem / miałam</b> · <b>mieli / miały</b> <button class=\"play\" data-say=\"miałem, mieli\">🔊</button>","у меня был(а) · у них было"],
      ["chcieć → <b>chciałem / chciałam</b> · <b>chcieli / chciały</b> <button class=\"play\" data-say=\"chciałem, chcieli\">🔊</button>","я хотел(а) · они хотели"],
      ["musieć → <b>musiałem / musiałam</b> · <b>musieli / musiały</b> <button class=\"play\" data-say=\"musiałem, musieli\">🔊</button>","мне пришлось · им пришлось"],
      ["widzieć → <b>widziałem / widziałam</b> · <b>widzieli / widziały</b> <button class=\"play\" data-say=\"widziałem, widzieli\">🔊</button>","я видел(а) · они видели"],
      ["wiedzieć → <b>wiedziałem / wiedziałam</b> · <b>wiedzieli / wiedziały</b> <button class=\"play\" data-say=\"wiedziałem, wiedzieli\">🔊</button>","я знал(а) · они знали"]
    ],"star":2},
    "examples":[
      {"ru":"Я хотела отдохнуть.","en":"<b>Chciałam</b> odpoczywać.","say":"Chciałam odpoczywać."},
      {"ru":"Мне пришлось работать.","en":"<b>Musiałem</b> pracować.","gloss":"дословно «я должен был»","say":"Musiałem pracować."},
      {"ru":"Я не знал, что ты в Кракове.","en":"<b>Nie wiedziałem</b>, że jesteś w Krakowie.","say":"Nie wiedziałem, że jesteś w Krakowie."},
      {"ru":"Мы видели этот фильм.","en":"<b>Widzieliśmy</b> ten film.","say":"Widzieliśmy ten film."},
      {"ru":"Они хотели поехать в горы.","en":"<b>Chcieli</b> jechać w góry.","say":"Chcieli jechać w góry."}
    ],
    "mistakes":[
      {"wrong":"Oni chciali odpoczywać.","right":"Oni <b>chcieli</b> odpoczywać.","why":"перед -li гласная a переходит в e: chcieli, mieli, musieli."},
      {"wrong":"Anna: Musiałem pracować.","right":"Anna: <b>Musiałam</b> pracować.","why":"о себе женщина говорит с хвостиком -am: musiałam."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> перед -li гласная меняется.",
       "q":"«Они хотели отдохнуть» — о мужчинах —","opts":["Chciali odpoczywać","Chcieli odpoczywać","Chciały odpoczywać"],"answer":1,
       "explain":"Мужско-личная ветка — <b>chcieli</b>. Chciały — про женщин; формы «chciali» не существует."},
      {"type":"choice","q":"«Мне пришлось работать» — говорит женщина —",
       "opts":["Musiałem pracować","Musiała pracować","Musiałam pracować"],"answer":2,
       "explain":"Женщина о себе — <b>musiałam</b>. Musiała — «она должна была»."},
      {"type":"type","howto":"Напиши по-польски. Хвостики можно не ставить, обе формы рода принимаются.",
       "q":"«Я не знал(а), что ты здесь»","accept":["nie wiedziałem że jesteś tutaj","nie wiedziałam że jesteś tutaj","nie wiedzialem ze jestes tutaj","nie wiedzialam ze jestes tutaj","nie wiedziałem że jesteś tu","nie wiedziałam że jesteś tu","nie wiedzialem ze jestes tu","nie wiedzialam ze jestes tu"],"placeholder":"Nie wiedział…, że…"}
    ],
    "mnemonic":"🔤 Перед -li буква a становится e: miał → mieli, chciał → chcieli, jadł → jedli."
   },
   {
    "eyebrow":"Правило 4 · В живой речи",
    "title":"Пять готовых фраз о том, что пошло не так",
    "paras":[
      "Из сегодняшних глаголов складываются самые нужные объяснения. <b>Nie mogłem przyjść</b> — «я не смог прийти». <b>Musiałam pracować</b> — «мне пришлось работать». <b>Chciałem, ale nie miałem czasu</b> — «я хотел, но не было времени».",
      "Обрати внимание на связку <b>ale</b> («но») и на <b>dlatego</b> («поэтому»): именно они превращают набор форм в объяснение. <b>Byłem chory, dlatego nie mogłem przyjść.</b>",
      "И ещё одна частая пара: <b>Nie wiedziałam</b>, że… — «я не знала, что…»; <b>Nie widziałem</b> cię — «я тебя не видел». Обе фразы звучат в разговоре десятки раз в неделю.",
      "Заметь: после <b>nie</b> глагол не меняется — как в русском. Отрицание в прошедшем строится ровно так же просто, как в настоящем."
    ],
    "audio":"Из сегодняшних глаголов складываются самые нужные объяснения. Nie mogłem przyjść — я не смог прийти. Musiałam pracować — мне пришлось работать. Chciałem, ale nie miałem czasu — я хотел, но не было времени. Обрати внимание на связку ale, «но», и на dlatego, «поэтому»: именно они превращают набор форм в объяснение. Byłem chory, dlatego nie mogłem przyjść. И ещё одна частая пара: nie wiedziałam, że… — я не знала, что; nie widziałem cię — я тебя не видел. Обе фразы звучат в разговоре десятки раз в неделю. Заметь: после nie глагол не меняется, как в русском. Отрицание в прошедшем строится ровно так же просто, как в настоящем.",
    "table":{"rows":[
      ["Nie mogłem / nie mogłam przyjść. <button class=\"play\" data-say=\"Nie mogłem przyjść\">🔊</button>","Я не смог / не смогла прийти."],
      ["Musiałem / musiałam pracować. <button class=\"play\" data-say=\"Musiałam pracować\">🔊</button>","Мне пришлось работать."],
      ["Chciałem, ale nie miałem czasu. <button class=\"play\" data-say=\"Chciałem, ale nie miałem czasu\">🔊</button>","Я хотел, но не было времени."],
      ["Byłam chora, dlatego… <button class=\"play\" data-say=\"Byłam chora, dlatego\">🔊</button>","Я была больна, поэтому…"],
      ["Nie wiedziałem, że… <button class=\"play\" data-say=\"Nie wiedziałem, że\">🔊</button>","Я не знал, что…"]
    ],"star":-1},
    "examples":[
      {"ru":"Я хотел прийти, но не мог.","en":"<b>Chciałem</b> przyjść, ale <b>nie mogłem</b>.","say":"Chciałem przyjść, ale nie mogłem."},
      {"ru":"Я была больна, поэтому не работала.","en":"<b>Byłam chora, dlatego</b> nie pracowałam.","say":"Byłam chora, dlatego nie pracowałam."},
      {"ru":"Мы шли пешком, потому что не было автобуса.","en":"<b>Szliśmy</b> pieszo, bo nie było autobusu.","say":"Szliśmy pieszo, bo nie było autobusu."},
      {"ru":"Я тебя не видела.","en":"<b>Nie widziałam</b> cię.","say":"Nie widziałam cię."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> выбери связку по смыслу.",
       "q":"«Я был болен, ___ не работал» —","opts":["bo","ale","dlatego"],"answer":2,
       "explain":"Причина сначала, следствие потом → <b>dlatego</b> («поэтому»). Bo вводит причину после следствия: nie pracowałem, bo byłem chory."},
      {"type":"speak","target":"Nie mogłem przyjść, musiałem pracować.","sub":"я не смог прийти, мне пришлось работать — женский вариант: nie mogłam, musiałam","want":"Nie mogłem przyjść, musiałem pracować."}
    ],
    "mnemonic":"🧰 Chciałem · nie mogłem · musiałem — три формы, и любое опоздание объяснено."
   }
 ],
 "dialogue":{
   "intro":"Марек не пришёл в кино, и теперь объясняется. Тапни по строке — увидишь перевод.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Gdzie byłeś wczoraj? Czekałam pół godziny.","ru":"Где ты был вчера? Я ждала полчаса.",
      "words":[["Czekałam","я ждала"],["pół godziny","полчаса"]]},
     {"who":"M","name":"Marek","side":"right","en":"Przepraszam. Nie mogłem przyjść — musiałem pracować.","ru":"Извини. Я не мог прийти — пришлось работать.",
      "words":[["Nie mogłem","я не мог"],["musiałem","я должен был"]]},
     {"who":"A","name":"Anna","side":"left","en":"Nie wiedziałam. Dlaczego nie dzwoniłeś?","ru":"Я не знала. Почему ты не звонил?",
      "words":[["Nie wiedziałam","я не знала"],["dzwoniłeś","ты звонил"]]},
     {"who":"M","name":"Marek","side":"right","en":"Nie miałem telefonu. Zostawiłem go w domu.","ru":"У меня не было телефона. Я оставил его дома.",
      "words":[["Nie miałem","у меня не было"],["Zostawiłem","я оставил"]]},
     {"who":"A","name":"Anna","side":"left","en":"A jak wracałeś? Autobusy już nie jeździły.","ru":"А как ты возвращался? Автобусы уже не ходили.",
      "words":[["wracałeś","ты возвращался"],["nie jeździły","не ходили"]]},
     {"who":"M","name":"Marek","side":"right","en":"Szedłem pieszo. Godzinę i dziesięć minut.","ru":"Шёл пешком. Час и десять минут.",
      "words":[["Szedłem","я шёл"],["pieszo","пешком"]]},
     {"who":"A","name":"Anna","side":"left","en":"Biedny. Jadłeś coś w ogóle?","ru":"Бедный. Ты вообще что-нибудь ел?",
      "words":[["Jadłeś","ты ел"],["w ogóle","вообще"]]},
     {"who":"M","name":"Marek","side":"right","en":"Nie. Chciałem, ale nie miałem czasu.","ru":"Нет. Хотел, но времени не было.",
      "words":[["Chciałem","я хотел"],["nie miałem czasu","не было времени"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка на кухне: кто что ел. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Co jedliście na obiad?","ru":"Что вы ели на обед?"},
     {"who":"B","en":"Jedliśmy pierogi i zupę.","ru":"Мы ели вареники и суп."},
     {"who":"A","en":"A dzieci?","ru":"А дети?"},
     {"who":"B","en":"Dzieci jadły tylko lody.","ru":"Дети ели только мороженое."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — пять непослушных глаголов и то, что их окружает.",
   "items":[
     {"en":"szedłem / szłam","ru":"я шёл / я шла","ex":"Szłam do sklepu."},
     {"en":"szli / szły","ru":"они шли","ex":"Szliśmy trzy godziny."},
     {"en":"mogłem / mogłam","ru":"я мог / я могла","ex":"Nie mogłam przyjść."},
     {"en":"mógł / mogła","ru":"он мог / она могла","ex":"Marek nie mógł spać."},
     {"en":"jadłem / jadłam","ru":"я ел / я ела","ex":"Jadłam pierogi."},
     {"en":"jedli / jadły","ru":"они ели","ex":"Jedliśmy razem."},
     {"en":"miałem / miałam","ru":"у меня был(а) / было","ex":"Nie miałem telefonu."},
     {"en":"chciałem / chciałam","ru":"я хотел / я хотела","ex":"Chciałam odpoczywać."},
     {"en":"musiałem / musiałam","ru":"мне пришлось","ex":"Musiałem pracować."},
     {"en":"wiedziałem / wiedziałam","ru":"я знал / я знала","ex":"Nie wiedziałam, że jesteś tu."},
     {"en":"pieszo","ru":"пешком","ex":"Szedłem pieszo."},
     {"en":"dlatego","ru":"поэтому","ex":"Byłam chora, dlatego nie pracowałam."}
   ]
 },
 "drag":{
   "intro":"Перетащи каждую польскую форму к её русскому двойнику. Обе стороны — старые знакомые.",
   "pairs":[["szedłem","я шёл"],["szłam","я шла"],["nie mógł","он не мог"],["jedli","они ели"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как Марек с братом ходили в горы. Пять неправильных глаголов работают тут почти в каждой строке.",
   "title":"Szliśmy w góry",
   "sentences":["W lipcu byliśmy z bratem w Zakopanem.","Chcieliśmy iść na Giewont.","Rano nie mogliśmy wstać — było za wcześnie.","W końcu szliśmy od dziewiątej.","Szliśmy cztery godziny, wolno i ciężko.","Brat miał ciężki plecak, ja miałem wodę.","Na górze jedliśmy kanapki i piliśmy herbatę.","Widzieliśmy całe Tatry.","Potem szliśmy w dół dwie godziny.","Wieczorem nie mieliśmy siły na kolację.","Ale nie żałowaliśmy ani minuty."],
   "translation":"В июле мы с братом были в Закопане. Мы хотели пойти на Гевонт. Утром не могли встать — было слишком рано. В итоге шли с девяти. Шли четыре часа, медленно и тяжело. У брата был тяжёлый рюкзак, у меня — вода. Наверху ели бутерброды и пили чай. Мы видели все Татры. Потом шли вниз два часа. Вечером не было сил на ужин. Но мы ни минуты не жалели."
 },
 "quiz":{
   "intro":"Пять вопросов — и капризные глаголы под контролем. 💛",
   "items":[
     {"q":"1. Анна о себе: «Я шла пешком» —","opts":["Szłam pieszo","Szła pieszo","Szedłam pieszo"],"answer":0,
      "explain":"Женская форма короткая: <b>szłam</b>. Форма szedłam в польском невозможна."},
     {"q":"2. Буква <b>ó</b> у глагола <b>móc</b> в прошедшем есть только в форме —","opts":["mogli","mogłem","mógł"],"answer":2,
      "explain":"Только <b>mógł</b> — «он мог». Везде дальше обычное o: mogłem, mogła, mogli, mogły."},
     {"q":"3. «Они ели вареники» — о мужчинах —","opts":["Jedli pierogi","Jadły pierogi","Jadli pierogi"],"answer":0,
      "explain":"Мужско-личная ветка меняет a на e: <b>jedli</b>. Jadły — про женщин или вещи."},
     {"q":"4. «Они хотели отдохнуть» — о мужчинах —","opts":["Chcieli odpoczywać","Chciały odpoczywać","Chciali odpoczywać"],"answer":0,
      "explain":"Перед -li гласная меняется: <b>chcieli</b>. Chciały — про женщин."},
     {"q":"5. «Мне пришлось работать» — говорит мужчина —","opts":["Musiałam pracować","Musiałem pracować","Musiał pracować"],"answer":1,
      "explain":"Мужчина о себе — <b>musiałem</b>. Musiał — «он должен был»."}
   ]
 },
 "essay":{
   "intro":"Расскажи о дне, который пошёл не по плану. Сегодняшние глаголы для этого и созданы.",
   "prompt":"Напиши 4–5 предложений: что ты хотел(а) сделать, почему не смог(ла), что пришлось делать вместо этого.",
   "hint":"Схема: Chciał(a)m… ale nie mogł(a)m… Musiał(a)m… Szedłem / Szłam… W końcu…",
   "example":"W sobotę chciałam być nad jeziorem. Nie mogłam pojechać, bo nie miałam samochodu. Musiałam zostać w mieście. Szłam pieszo do parku i tam czytałam. Nie było źle, ale jezioro było lepszym planem."
 }
},
"4": {
 "day":4,"week":"01",
 "themeRu":"Делать или сделать",
 "themeEn":"Aspekt: robić — zrobić",
 "intro":"Сегодня — главный подарок уровня, и я скажу это прямо. Польский вид глагола (<b>aspekt</b>) устроен так же, как русский: <b>robić — zrobić</b> это буквально «делать — сделать», <b>pisać — napisać</b> это «писать — написать». Те же приставки, та же логика процесса и результата. Тем, кто учит польский с английского, эта тема стоит года; у тебя она уже в голове — осталось узнать её в лицо.",
 "introAudio":"Сегодня главный подарок уровня, и я скажу это прямо. Польский вид глагола, по-польски aspekt, устроен так же, как русский: robić и zrobić это буквально «делать и сделать», pisać и napisać это «писать и написать». Те же приставки, та же логика процесса и результата. Тем, кто учит польский с английского, эта тема стоит года; у тебя она уже в голове — осталось узнать её в лицо.",
 "goals":[
   "Понять польский вид как продолжение родной пары «делать — сделать»",
   "Узнавать три способа образования пары: приставка, суффикс, разные корни",
   "Выбирать нужный глагол из пары по смыслу: процесс или результат",
   "Знать главное следствие: у совершенного вида нет настоящего времени"
 ],
 "learned":[
   "Понял(а) польский вид как продолжение родной пары «делать — сделать»",
   "Узнал(а) три способа образования пары: приставка, суффикс, разные корни",
   "Выбрал(а) нужный глагол из пары по смыслу: процесс или результат",
   "Запомнил(а): у совершенного вида нет настоящего времени"
 ],
 "review":{
   "intro":"Разомнёмся на вчерашних капризных глаголах: <b>szedł</b>, <b>mógł</b>, <b>jedli</b>. Потом возьмёмся за главное.",
   "introAudio":"Разомнёмся на вчерашних капризных глаголах: szedł, mógł, jedli. Потом возьмёмся за главное.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто говорит.",
      "q":"Анна о себе: «Я шла домой» —","opts":["Szedłam do domu","Szłam do domu","Szła do domu"],"answer":1,
      "explain":"Женская форма — короткая: <b>szłam</b>. Формы szedłam не существует."},
     {"type":"choice","q":"«Марек не мог спать» —",
      "opts":["Marek nie mogła spać","Marek nie mogłem spać","Marek nie mógł spać"],"answer":2,
      "explain":"О нём — <b>nie mógł</b>. Это единственная форма с ó."},
     {"type":"choice","q":"«Они хотели отдохнуть» — о мужчинах —",
      "opts":["Chcieli odpoczywać","Chciali odpoczywać","Chciały odpoczywać"],"answer":0,
      "explain":"Перед -li гласная a переходит в e: <b>chcieli</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорит женщина.",
      "q":"Собери: <b>«Мне пришлось работать»</b>","answer":"Musiałam pracować"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Подарок уровня",
    "title":"Два глагола на одно действие",
    "paras":[
      "По-русски у тебя на каждое действие обычно два глагола: «делать» и «сделать», «писать» и «написать». Один — про процесс, другой — про результат. Ты выбираешь между ними десятки раз в день и никогда об этом не думаешь.",
      "Польский устроен ровно так же. <b>Robić</b> — процесс, <b>zrobić</b> — результат. <b>Pisać</b> — процесс, <b>napisać</b> — результат. Это называется <b>aspekt</b>, вид глагола: <b>niedokonany</b> (несовершенный) и <b>dokonany</b> (совершенный).",
      "И приставки те же самые. <b>na</b>pisać — «<b>на</b>писать». <b>prze</b>czytać — «<b>про</b>читать». <b>z</b>robić — «<b>с</b>делать». <b>z</b>jeść — «<b>с</b>ъесть». <b>wy</b>pić — «<b>вы</b>пить». Не похожие приставки, а исторически те же.",
      "Тому, кто учит польский с английского, эту систему объясняют месяцами: в английском её просто нет. Ты уже носишь её в голове с детства — сегодня мы только подписываем польские ярлыки к знакомым коробкам."
    ],
    "audio":"По-русски у тебя на каждое действие обычно два глагола: «делать» и «сделать», «писать» и «написать». Один про процесс, другой про результат. Ты выбираешь между ними десятки раз в день и никогда об этом не думаешь. Польский устроен ровно так же. Robić — процесс, zrobić — результат. Pisać — процесс, napisać — результат. Это называется aspekt, вид глагола: niedokonany, несовершенный, и dokonany, совершенный. И приставки те же самые. Napisać — написать. Przeczytać — прочитать. Zrobić — сделать. Zjeść — съесть. Wypić — выпить. Не похожие приставки, а исторически те же. Тому, кто учит польский с английского, эту систему объясняют месяцами: в английском её просто нет. Ты уже носишь её в голове с детства — сегодня мы только подписываем польские ярлыки к знакомым коробкам.",
    "table":{"rows":[
      ["robić → <b>zrobić</b> <button class=\"play\" data-say=\"robić, zrobić\">🔊</button>","делать → сделать"],
      ["pisać → <b>napisać</b> <button class=\"play\" data-say=\"pisać, napisać\">🔊</button>","писать → написать"],
      ["czytać → <b>przeczytać</b> <button class=\"play\" data-say=\"czytać, przeczytać\">🔊</button>","читать → прочитать"],
      ["jeść → <b>zjeść</b> <button class=\"play\" data-say=\"jeść, zjeść\">🔊</button>","есть → съесть"],
      ["pić → <b>wypić</b> <button class=\"play\" data-say=\"pić, wypić\">🔊</button>","пить → выпить"]
    ],"star":0},
    "examples":[
      {"ru":"Я люблю готовить.","en":"Lubię <b>gotować</b>.","gloss":"процесс — несовершенный вид","say":"Lubię gotować."},
      {"ru":"Сегодня я должен приготовить ужин.","en":"Dziś muszę <b>ugotować</b> kolację.","gloss":"результат — совершенный вид","say":"Dziś muszę ugotować kolację."},
      {"ru":"Он много пишет.","en":"On dużo <b>pisze</b>.","say":"On dużo pisze."},
      {"ru":"Мне надо написать письмо.","en":"Muszę <b>napisać</b> list.","say":"Muszę napisać list."}
    ],
    "mistakes":[
      {"wrong":"Lubię zrobić zakupy.","right":"Lubię <b>robić</b> zakupy.","why":"«люблю делать» — это про процесс и привычку, значит несовершенный вид. Совершенный сюда не встаёт, как и русское «люблю сделать»."}
    ],
    "mnemonic":"🎁 robić / zrobić = делать / сделать. Приставка — та же, что в русском: na-, z-, prze-, wy-.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> найди пару к глаголу, как в русском.",
       "q":"Какой глагол значит «прочитать до конца»?","opts":["czytywać","czytam","przeczytać"],"answer":2,
       "explain":"«Прочитать» — <b>przeczytać</b>: приставка prze- здесь работает как русское про-. Czytam — «читаю», czytywać — «почитывать», оба про процесс."},
      {"type":"choice","q":"«Съесть» по-польски —",
       "opts":["najeść","przejeść","zjeść"],"answer":2,
       "explain":"<b>Zjeść</b> — та же приставка z-, что русское с- в «съесть»."},
      {"type":"choice","q":"Какой из двух глаголов говорит о результате?",
       "opts":["pisać","napisać","оба одинаково"],"answer":1,
       "explain":"<b>Napisać</b> — результат, письмо готово. Pisać — процесс, как русское «писать»."}
    ]
   },
   {
    "eyebrow":"Правило 2 · Три способа",
    "title":"Как пара может выглядеть",
    "paras":[
      "Пары образуются тремя способами — и в русском тоже тремя, теми же самыми. <b>Первый: приставка.</b> robić → zrobić, pisać → napisać, sprzątać → posprzątać, dzwonić → zadzwonić.",
      "<b>Второй: длинный несовершенный — короткий совершенный.</b> kupować → kupić («покупать — купить»), dawać → dać («давать — дать»), wracać → wrócić («возвращаться — вернуться»). Обрати внимание: здесь длиннее именно несовершенный, как и в русском.",
      "<b>Третий: разные корни.</b> mówić → powiedzieć («говорить — сказать»), brać → wziąć («брать — взять»), widzieć → zobaczyć («видеть — увидеть»), oglądać → obejrzeć («смотреть — посмотреть»). Русский делает то же самое и в тех же местах.",
      "И честное предупреждение: приставка не всегда совпадает с русской. <b>Dzwonić → zadzwonić</b> («звонить — позвонить»), <b>gotować → ugotować</b> («готовить — приготовить»). Логика родная, буква может быть чужой — пары учим целиком, как в детстве учили «класть — положить»."
    ],
    "audio":"Пары образуются тремя способами — и в русском тоже тремя, теми же самыми. Первый: приставка. Robić — zrobić, pisać — napisać, sprzątać — posprzątać, dzwonić — zadzwonić. Второй: длинный несовершенный, короткий совершенный. Kupować — kupić, покупать и купить; dawać — dać, давать и дать; wracać — wrócić, возвращаться и вернуться. Обрати внимание: здесь длиннее именно несовершенный, как и в русском. Третий: разные корни. Mówić — powiedzieć, говорить и сказать; brać — wziąć, брать и взять; widzieć — zobaczyć, видеть и увидеть; oglądać — obejrzeć, смотреть и посмотреть. Русский делает то же самое и в тех же местах. И честное предупреждение: приставка не всегда совпадает с русской. Dzwonić — zadzwonić, звонить и позвонить; gotować — ugotować, готовить и приготовить. Логика родная, буква может быть чужой — пары учим целиком.",
    "table":{"rows":[
      ["kupować → <b>kupić</b> <button class=\"play\" data-say=\"kupować, kupić\">🔊</button>","покупать → купить"],
      ["dawać → <b>dać</b> <button class=\"play\" data-say=\"dawać, dać\">🔊</button>","давать → дать"],
      ["mówić → <b>powiedzieć</b> <button class=\"play\" data-say=\"mówić, powiedzieć\">🔊</button>","говорить → сказать"],
      ["brać → <b>wziąć</b> <button class=\"play\" data-say=\"brać, wziąć\">🔊</button>","брать → взять"],
      ["oglądać → <b>obejrzeć</b> <button class=\"play\" data-say=\"oglądać, obejrzeć\">🔊</button>","смотреть → посмотреть"],
      ["dzwonić → <b>zadzwonić</b> <button class=\"play\" data-say=\"dzwonić, zadzwonić\">🔊</button>","звонить → позвонить"]
    ],"star":2},
    "examples":[
      {"ru":"Я покупаю хлеб каждый день.","en":"<b>Kupuję</b> chleb codziennie.","say":"Kupuję chleb codziennie."},
      {"ru":"Мне надо купить хлеб.","en":"Muszę <b>kupić</b> chleb.","say":"Muszę kupić chleb."},
      {"ru":"Он всегда говорит правду.","en":"On zawsze <b>mówi</b> prawdę.","say":"On zawsze mówi prawdę."},
      {"ru":"Я хочу тебе кое-что сказать.","en":"Chcę ci coś <b>powiedzieć</b>.","say":"Chcę ci coś powiedzieć."},
      {"ru":"Мне надо позвонить маме.","en":"Muszę <b>zadzwonić</b> do mamy.","say":"Muszę zadzwonić do mamy."}
    ],
    "mistakes":[
      {"wrong":"Muszę mówić ci coś ważnego.","right":"Muszę ci <b>powiedzieć</b> coś ważnego.","why":"нужен результат — одно конкретное сообщение. Русский выбирает так же: не «говорить», а «сказать»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, какая русская пара тут прячется.",
       "q":"Пара к глаголу <b>kupować</b> —","opts":["zakupować","pokupować","kupić"],"answer":2,
       "explain":"<b>Kupować — kupić</b> = «покупать — купить». Несовершенный тут длиннее, как и в русском."},
      {"type":"choice","q":"«Сказать» по-польски —",
       "opts":["mówić","powiedzieć","rozmawiać"],"answer":1,
       "explain":"<b>Powiedzieć</b> — совершенный вид к mówić, как «сказать» к «говорить». Rozmawiać — «разговаривать»."},
      {"type":"choice","q":"В какой паре совершенный вид образован приставкой?",
       "opts":["dawać — dać","brać — wziąć","sprzątać — posprzątać"],"answer":2,
       "explain":"<b>Posprzątać</b> = po- + sprzątać. В паре dawać — dać меняется длина, в brać — wziąć разные корни."}
    ]
   },
   {
    "eyebrow":"Правило 3 · Большое следствие",
    "title":"У совершенного вида нет настоящего времени",
    "paras":[
      "Скажи по-русски: «я делаю» — это сейчас. А «я сделаю»? Форма выглядит как настоящее время, но означает будущее. Русский язык устроил так, что у совершенного вида настоящего просто нет.",
      "Польский повторяет это один в один. <b>Robię</b> — «делаю», сейчас. <b>Zrobię</b> — «сделаю», то есть будущее. Окончания одинаковые, а времени два разных, и решает это вид глагола.",
      "Отсюда простое следствие для будущего: с <b>będę</b> может стоять только несовершенный глагол. <b>Będę robić</b> — «буду делать», хорошо. А сочетание будущего <b>będę</b> с совершенным глаголом невозможно — ровно как русское «буду сделать».",
      "Подробно оба будущих мы разберём на следующей неделе. Сегодня достаточно узнать эту связь в лицо: <b>napiszę</b> = «напишу», <b>kupię</b> = «куплю», <b>zadzwonię</b> = «позвоню»."
    ],
    "audio":"Скажи по-русски: «я делаю» — это сейчас. А «я сделаю»? Форма выглядит как настоящее время, но означает будущее. Русский язык устроил так, что у совершенного вида настоящего просто нет. Польский повторяет это один в один. Robię — делаю, сейчас. Zrobię — сделаю, то есть будущее. Окончания одинаковые, а времени два разных, и решает это вид глагола. Отсюда простое следствие для будущего: с będę может стоять только несовершенный глагол. Będę robić — буду делать, хорошо. А сочетание будущего będę с совершенным глаголом невозможно, ровно как русское «буду сделать». Подробно оба будущих мы разберём на следующей неделе. Сегодня достаточно узнать эту связь в лицо: napiszę — напишу, kupię — куплю, zadzwonię — позвоню.",
    "table":{"rows":[
      ["robię <button class=\"play\" data-say=\"robię\">🔊</button>","делаю — сейчас"],
      ["zrobię <button class=\"play\" data-say=\"zrobię\">🔊</button>","сделаю — будущее"],
      ["piszę → <b>napiszę</b> <button class=\"play\" data-say=\"piszę, napiszę\">🔊</button>","пишу → напишу"],
      ["kupuję → <b>kupię</b> <button class=\"play\" data-say=\"kupuję, kupię\">🔊</button>","покупаю → куплю"],
      ["będę robić ✔ · «będę zrobić» ✘","буду делать ✔ · «буду сделать» ✘"]
    ],"star":1},
    "examples":[
      {"ru":"Сейчас я делаю уроки.","en":"Teraz <b>robię</b> zadanie domowe.","say":"Teraz robię zadanie domowe."},
      {"ru":"Завтра я это сделаю.","en":"Jutro to <b>zrobię</b>.","say":"Jutro to zrobię."},
      {"ru":"Вечером я тебе позвоню.","en":"Wieczorem <b>zadzwonię</b> do ciebie.","say":"Wieczorem zadzwonię do ciebie."},
      {"ru":"Завтра я буду работать весь день.","en":"Jutro <b>będę pracować</b> cały dzień.","say":"Jutro będę pracować cały dzień."}
    ],
    "mistakes":[
      {"wrong":"Jutro będę zrobić zadanie.","right":"Jutro <b>zrobię</b> zadanie.","why":"с będę идёт только несовершенный вид. Совершенный сам по себе уже означает будущее — как русское «сделаю»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на вид глагола и переведи.",
       "q":"Форма <b>napiszę</b> означает —","opts":["напишу","писал","пишу"],"answer":0,
       "explain":"Совершенный вид в такой форме всегда о будущем: <b>napiszę</b> — «напишу»."},
      {"type":"choice","q":"Какая фраза построена правильно?",
       "opts":["Jutro zrobię zakupy","Jutro będę zrobię zakupy","Jutro będę zrobić zakupy"],"answer":0,
       "explain":"<b>Zrobię</b> само по себе — будущее. Сочетание będę с совершенным видом невозможно."},
      {"type":"type","howto":"Переведи одним словом. Диакритику можно не ставить.",
       "q":"«Позвоню» (я)","accept":["zadzwonię","zadzwonie"],"placeholder":"za…"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Как выбирать",
    "title":"Процесс или результат",
    "paras":[
      "Выбор между видами делается не по правилу, а по смыслу — и смысл этот тебе знаком. Спроси себя: я говорю о занятии и повторе или о готовом результате?",
      "Занятие, привычка, «вообще» → несовершенный: <b>Lubię gotować</b> («люблю готовить»), <b>Codziennie czytam</b> («каждый день читаю»), <b>Zawsze robię zakupy w sobotę</b>.",
      "Один раз, до конца, с результатом → совершенный: <b>Muszę ugotować obiad</b> («надо приготовить обед»), <b>Chcę przeczytać tę książkę</b> («хочу прочитать эту книгу»), <b>Muszę zrobić zakupy</b>.",
      "После <b>lubić</b> («любить») почти всегда несовершенный — любят процесс, а не результат. После <b>chcieć</b> и <b>musieć</b> возможны оба, и они значат разное: <b>chcę pisać</b> — «хочу писать (вообще)», <b>chcę napisać</b> — «хочу написать (одно письмо)»."
    ],
    "audio":"Выбор между видами делается не по правилу, а по смыслу — и смысл этот тебе знаком. Спроси себя: я говорю о занятии и повторе или о готовом результате? Занятие, привычка, вообще — несовершенный: lubię gotować, люблю готовить; codziennie czytam, каждый день читаю; zawsze robię zakupy w sobotę. Один раз, до конца, с результатом — совершенный: muszę ugotować obiad, надо приготовить обед; chcę przeczytać tę książkę, хочу прочитать эту книгу; muszę zrobić zakupy. После lubić почти всегда несовершенный — любят процесс, а не результат. После chcieć и musieć возможны оба, и они значат разное: chcę pisać — хочу писать вообще, chcę napisać — хочу написать одно письмо.",
    "table":{"rows":[
      ["Lubię <b>gotować</b>. <button class=\"play\" data-say=\"Lubię gotować\">🔊</button>","Люблю готовить. — занятие"],
      ["Muszę <b>ugotować</b> obiad. <button class=\"play\" data-say=\"Muszę ugotować obiad\">🔊</button>","Надо приготовить обед. — результат"],
      ["Codziennie <b>czytam</b>. <button class=\"play\" data-say=\"Codziennie czytam\">🔊</button>","Каждый день читаю. — повтор"],
      ["Chcę <b>przeczytać</b> tę książkę. <button class=\"play\" data-say=\"Chcę przeczytać tę książkę\">🔊</button>","Хочу прочитать эту книгу. — до конца"],
      ["Muszę <b>zrobić</b> zakupy. <button class=\"play\" data-say=\"Muszę zrobić zakupy\">🔊</button>","Надо сделать покупки. — один раз"]
    ],"star":-1},
    "examples":[
      {"ru":"Я люблю читать по вечерам.","en":"Lubię <b>czytać</b> wieczorami.","say":"Lubię czytać wieczorami."},
      {"ru":"Хочу прочитать эту книгу до воскресенья.","en":"Chcę <b>przeczytać</b> tę książkę do niedzieli.","say":"Chcę przeczytać tę książkę do niedzieli."},
      {"ru":"По субботам я убираю квартиру.","en":"W soboty <b>sprzątam</b> mieszkanie.","say":"W soboty sprzątam mieszkanie."},
      {"ru":"Сегодня надо убрать квартиру.","en":"Dziś muszę <b>posprzątać</b> mieszkanie.","say":"Dziś muszę posprzątać mieszkanie."}
    ],
    "mistakes":[
      {"wrong":"Lubię ugotować obiad.","right":"Lubię <b>gotować</b> obiad.","why":"lubić говорит о занятии вообще — только несовершенный вид, как и русское «люблю готовить»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на слово <b>codziennie</b> — это повтор.",
       "q":"«Каждый день я покупаю хлеб» —","opts":["Codziennie kupować chleb","Codziennie kupuję chleb","Codziennie kupię chleb"],"answer":1,
       "explain":"Повтор каждый день → несовершенный вид: <b>kupuję</b>. Kupię значит «куплю», один раз в будущем."},
      {"type":"choice","q":"«Сегодня мне надо убрать квартиру» —",
       "opts":["Dziś muszę sprzątać mieszkanie","Dziś muszę posprzątać mieszkanie","Dziś sprzątam mieszkanie codziennie"],"answer":1,
       "explain":"Один раз и до результата → <b>posprzątać</b>, как русское «убрать»."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Нужен результат — одно письмо.",
       "q":"Собери: <b>«Мне надо написать письмо»</b>","answer":"Muszę napisać list"}
    ],
    "mnemonic":"⚖️ Занятие и повтор — robić. Результат и один раз — zrobić. Спроси себя по-русски: «делать» или «сделать»?"
   }
 ],
 "dialogue":{
   "intro":"У брата Марека день рождения, и дел много. Считай, сколько раз в разговоре встретятся пары видов.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"W sobotę mam urodziny brata. Muszę wszystko zrobić sam.","ru":"В субботу у брата день рождения. Мне надо всё сделать самому.",
      "words":[["urodziny","день рождения"],["zrobić","сделать"]]},
     {"who":"A","name":"Anna","side":"left","en":"Co dokładnie? Mów po kolei.","ru":"Что именно? Говори по порядку.",
      "words":[["dokładnie","точно, именно"],["po kolei","по порядку"]]},
     {"who":"M","name":"Marek","side":"right","en":"Muszę kupić prezent, ugotować obiad i posprzątać mieszkanie.","ru":"Надо купить подарок, приготовить обед и убрать квартиру.",
      "words":[["kupić","купить"],["ugotować","приготовить"],["posprzątać","убрать"]]},
     {"who":"A","name":"Anna","side":"left","en":"Lubisz gotować, więc obiad to nie problem.","ru":"Ты любишь готовить, так что обед — не проблема.",
      "words":[["Lubisz gotować","ты любишь готовить"],["więc","так что"]]},
     {"who":"M","name":"Marek","side":"right","en":"Lubię gotować, ale nie lubię sprzątać.","ru":"Готовить люблю, а убирать не люблю.",
      "words":[["nie lubię sprzątać","не люблю убирать"]]},
     {"who":"A","name":"Anna","side":"left","en":"To zwykła sprawa. A prezent? Wiesz już, co kupisz?","ru":"Обычное дело. А подарок? Уже знаешь, что купишь?",
      "words":[["Wiesz","знаешь"],["co kupisz","что купишь"]]},
     {"who":"M","name":"Marek","side":"right","en":"Chcę kupić mu książkę. On dużo czyta.","ru":"Хочу купить ему книгу. Он много читает.",
      "words":[["mu","ему"],["dużo czyta","много читает"]]},
     {"who":"A","name":"Anna","side":"left","en":"Dobry pomysł. Zadzwonię do ciebie w piątek i pomogę.","ru":"Хорошая мысль. Позвоню тебе в пятницу и помогу.",
      "words":[["Zadzwonię","позвоню"],["pomogę","помогу"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка в кухне — про процесс и результат. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Co robisz?","ru":"Что ты делаешь?"},
     {"who":"B","en":"Gotuję zupę.","ru":"Варю суп."},
     {"who":"A","en":"A kiedy będzie gotowa?","ru":"А когда будет готов?"},
     {"who":"B","en":"Ugotuję ją za godzinę.","ru":"Сварю его через час."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — восемь пар и четыре опоры. Читай их парами, как русские «делать — сделать».",
   "items":[
     {"en":"robić / zrobić","ru":"делать / сделать","ex":"Muszę zrobić zakupy."},
     {"en":"pisać / napisać","ru":"писать / написать","ex":"Chcę napisać list."},
     {"en":"czytać / przeczytać","ru":"читать / прочитать","ex":"Lubię czytać wieczorami."},
     {"en":"kupować / kupić","ru":"покупать / купить","ex":"Muszę kupić prezent."},
     {"en":"gotować / ugotować","ru":"готовить / приготовить","ex":"Ugotuję obiad."},
     {"en":"sprzątać / posprzątać","ru":"убирать / убрать","ex":"Dziś muszę posprzątać."},
     {"en":"dzwonić / zadzwonić","ru":"звонить / позвонить","ex":"Zadzwonię wieczorem."},
     {"en":"mówić / powiedzieć","ru":"говорить / сказать","ex":"Chcę ci coś powiedzieć."},
     {"en":"brać / wziąć","ru":"брать / взять","ex":"Muszę wziąć parasol."},
     {"en":"oglądać / obejrzeć","ru":"смотреть / посмотреть","ex":"Chcę obejrzeć ten film."},
     {"en":"prezent","ru":"подарок","ex":"Chcę kupić prezent dla brata."},
     {"en":"urodziny","ru":"день рождения (только мн. ч.)","ex":"W sobotę mam urodziny."}
   ]
 },
 "drag":{
   "intro":"Перетащи польский глагол к его русскому двойнику. Обрати внимание на приставки — они знакомые.",
   "pairs":[["napisać","написать"],["przeczytać","прочитать"],["zjeść","съесть"],["wypić","выпить"]]
 },
 "reading":{
   "intro":"Прочитай и послушай короткий текст о субботе Марека. Пары видов стоят тут почти в каждой фразе.",
   "title":"Sobota Marka",
   "sentences":["W soboty Marek zwykle sprząta mieszkanie.","Lubi gotować, ale nie lubi sprzątać.","W tę sobotę musi zrobić więcej.","Musi kupić prezent dla brata.","Chce kupić mu dobrą książkę.","Potem chce ugotować obiad dla całej rodziny.","Wieczorem rodzina będzie oglądać film.","Marek chce obejrzeć komedię, brat woli dramat.","Anna zadzwoni w piątek i pomoże.","Ona zawsze dzwoni, kiedy trzeba."],
   "translation":"По субботам Марек обычно убирает квартиру. Он любит готовить, но не любит убирать. В эту субботу ему надо сделать больше. Надо купить подарок для брата. Он хочет купить ему хорошую книгу. Потом хочет приготовить обед для всей семьи. Вечером семья будет смотреть фильм. Марек хочет посмотреть комедию, брат предпочитает драму. Анна позвонит в пятницу и поможет. Она всегда звонит, когда нужно."
 },
 "quiz":{
   "intro":"Пять вопросов — и главная тема уровня встанет на место. 💛",
   "items":[
     {"q":"1. «Хочу прочитать эту книгу до конца» —","opts":["Chcę czytam tę książkę","Chcę czytać tę książkę","Chcę przeczytać tę książkę"],"answer":2,
      "explain":"Результат, книга дочитана → <b>przeczytać</b>. Czytać — про процесс, «хочу читать»."},
     {"q":"2. «Люблю готовить» —","opts":["Lubię ugotować","Lubię gotuję","Lubię gotować"],"answer":2,
      "explain":"После lubić — занятие вообще, значит несовершенный вид: <b>gotować</b>."},
     {"q":"3. Форма <b>zrobię</b> означает —","opts":["сделаю","делал","делаю"],"answer":0,
      "explain":"У совершенного вида нет настоящего: <b>zrobię</b> — «сделаю», будущее."},
     {"q":"4. Какая фраза правильная?","opts":["Jutro będę ugotować obiad","Jutro będę zrobić obiad","Jutro ugotuję obiad"],"answer":2,
      "explain":"С będę идёт только несовершенный вид. Совершенный сам означает будущее: <b>ugotuję</b>."},
     {"q":"5. «Сказать» (один раз, конкретное) —","opts":["powiedzieć","rozmawiać","mówić"],"answer":0,
      "explain":"<b>Powiedzieć</b> — совершенный вид к mówić, как «сказать» к «говорить»."}
   ]
 },
 "essay":{
   "intro":"Попробуй сам(а) поставить пары рядом: что ты делаешь обычно и что нужно сделать сегодня.",
   "prompt":"Напиши 4–5 предложений: два про привычку (несовершенный вид) и два-три про сегодняшние дела (совершенный вид).",
   "hint":"Схема: Zwykle… codziennie… Ale dziś muszę… i chcę… Пары бери из карточек дня 💛",
   "example":"Zwykle czytam wieczorem i gotuję w soboty. Codziennie kupuję chleb w małym sklepie. Ale dziś muszę posprzątać mieszkanie i ugotować obiad. Chcę też przeczytać jeden rozdział. Wieczorem zadzwonię do mamy."
 }
},
"5": {
 "day":5,"week":"01",
 "themeRu":"Делал или сделал",
 "themeEn":"Aspekt w czasie przeszłym",
 "intro":"«Вчера я писал письмо» и «вчера я написал письмо» — по-русски это два разных вечера. В первом ты сидел над письмом, во втором письмо ушло. Сегодня соединим вчерашний вид с прошедшим временем — и окажется, что переносить ничего не надо: <b>wczoraj pisałem</b> / <b>wczoraj napisałem</b> работают точно так же.",
 "introAudio":"«Вчера я писал письмо» и «вчера я написал письмо» — по-русски это два разных вечера. В первом ты сидел над письмом, во втором письмо ушло. Сегодня соединим вчерашний вид с прошедшим временем — и окажется, что переносить ничего не надо: wczoraj pisałem и wczoraj napisałem работают точно так же.",
 "goals":[
   "Различать <b>robiłem</b> (процесс, фон) и <b>zrobiłem</b> (результат, событие)",
   "Опираться на маркеры: <b>cały dzień</b> тянет несовершенный, <b>już</b> и <b>w końcu</b> — совершенный",
   "Строить прошедшее от совершенных глаголов: <b>kupiłem</b>, <b>napisałam</b>, <b>poszedłem</b>",
   "Сказать «начал, но не закончил»: <b>czytałem, ale nie przeczytałem</b>"
 ],
 "learned":[
   "Различил(а) robiłem (процесс) и zrobiłem (результат)",
   "Опирался(лась) на маркеры cały dzień, już, w końcu",
   "Построил(а) прошедшее от совершенных глаголов",
   "Сказал(а) «начал, но не закончил»: czytałem, ale nie przeczytałem"
 ],
 "review":{
   "intro":"Вчерашние пары — на месте? Проверим и сразу двинемся в прошедшее время.",
   "introAudio":"Вчерашние пары — на месте? Проверим и сразу двинемся в прошедшее время.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, что любят — процесс или результат.",
      "q":"«Люблю готовить» —","opts":["Lubię gotuję","Lubię ugotować","Lubię gotować"],"answer":2,
      "explain":"После lubić — занятие вообще, несовершенный вид: <b>gotować</b>."},
     {"type":"choice","q":"Форма <b>kupię</b> означает —",
      "opts":["покупал","покупаю","куплю"],"answer":2,
      "explain":"У совершенного вида нет настоящего: <b>kupię</b> — «куплю», будущее."},
     {"type":"choice","q":"Пара к глаголу <b>mówić</b> —",
      "opts":["mawiać","powiedzieć","rozmawiać"],"answer":1,
      "explain":"<b>Powiedzieć</b> — «сказать», совершенный вид к mówić."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Нужен результат — один обед.",
      "q":"Собери: <b>«Мне надо приготовить обед»</b>","answer":"Muszę ugotować obiad"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Два вчера",
    "title":"<em>pisałem</em> против <em>napisałem</em>",
    "paras":[
      "Сравни две польские фразы: <b>Wczoraj pisałem list.</b> и <b>Wczoraj napisałem list.</b> Первая говорит, чем ты занимался: сидел и писал, а дописал или нет — неизвестно. Вторая говорит, что письмо готово.",
      "Перевод получается сам собой: «вчера я писал письмо» и «вчера я написал письмо». Разница между польскими фразами ровно та же, что между русскими. Ничего нового учить не нужно — нужно узнать знакомое.",
      "Несовершенный вид (<b>robiłem</b>, <b>czytałam</b>, <b>gotowałem</b>) рассказывает о занятии, длительности, повторе и о фоне: что происходило вокруг. Совершенный (<b>zrobiłem</b>, <b>przeczytałam</b>, <b>ugotowałem</b>) — о событии с результатом: что случилось и закончилось.",
      "Поэтому в рассказе они обычно ходят вместе: фон несовершенным, событие совершенным. <b>Czytałam książkę, kiedy zadzwonił telefon.</b> — «Я читала книгу, когда зазвонил телефон». Точно как по-русски."
    ],
    "audio":"Сравни две польские фразы: wczoraj pisałem list и wczoraj napisałem list. Первая говорит, чем ты занимался: сидел и писал, а дописал или нет — неизвестно. Вторая говорит, что письмо готово. Перевод получается сам собой: «вчера я писал письмо» и «вчера я написал письмо». Разница между польскими фразами ровно та же, что между русскими. Ничего нового учить не нужно — нужно узнать знакомое. Несовершенный вид — robiłem, czytałam, gotowałem — рассказывает о занятии, длительности, повторе и о фоне. Совершенный — zrobiłem, przeczytałam, ugotowałem — о событии с результатом: что случилось и закончилось. Поэтому в рассказе они обычно ходят вместе: фон несовершенным, событие совершенным. Czytałam książkę, kiedy zadzwonił telefon — я читала книгу, когда зазвонил телефон. Точно как по-русски.",
    "table":{"rows":[
      ["Wczoraj <b>pisałem</b> list. <button class=\"play\" data-say=\"Wczoraj pisałem list\">🔊</button>","Вчера я писал письмо. — занятие"],
      ["Wczoraj <b>napisałem</b> list. <button class=\"play\" data-say=\"Wczoraj napisałem list\">🔊</button>","Вчера я написал письмо. — результат"],
      ["<b>Gotowałam</b> obiad. <button class=\"play\" data-say=\"Gotowałam obiad\">🔊</button>","Я готовила обед. — процесс"],
      ["<b>Ugotowałam</b> obiad. <button class=\"play\" data-say=\"Ugotowałam obiad\">🔊</button>","Я приготовила обед. — готово"],
      ["Czytałam, kiedy <b>zadzwonił</b> telefon.","Я читала, когда зазвонил телефон. — фон и событие"]
    ],"star":0},
    "examples":[
      {"ru":"Вчера я читал эту книгу.","en":"Wczoraj <b>czytałem</b> tę książkę.","gloss":"занимался чтением","say":"Wczoraj czytałem tę książkę."},
      {"ru":"Вчера я прочитал эту книгу.","en":"Wczoraj <b>przeczytałem</b> tę książkę.","gloss":"дочитал до конца","say":"Wczoraj przeczytałem tę książkę."},
      {"ru":"Она убирала квартиру.","en":"<b>Sprzątała</b> mieszkanie.","say":"Sprzątała mieszkanie."},
      {"ru":"Она убрала квартиру.","en":"<b>Posprzątała</b> mieszkanie.","say":"Posprzątała mieszkanie."},
      {"ru":"Мы смотрели фильм, когда пришёл Марек.","en":"<b>Oglądaliśmy</b> film, kiedy <b>przyszedł</b> Marek.","say":"Oglądaliśmy film, kiedy przyszedł Marek."}
    ],
    "mistakes":[
      {"wrong":"Wczoraj napisałem list dwie godziny.","right":"Wczoraj <b>pisałem</b> list dwie godziny.","why":"«два часа» — это длительность, значит занятие: pisałem. Совершенный вид смотрит на итог, а не на процесс."}
    ],
    "mnemonic":"🎬 Несовершенный — камера снимает процесс. Совершенный — фотография результата.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, речь о занятии или о готовом результате.",
       "q":"«Вчера я написал письмо» (письмо готово) —","opts":["Wczoraj napisałem list","Wczoraj piszę list","Wczoraj pisałem list"],"answer":0,
       "explain":"Результат → <b>napisałem</b>. Pisałem значило бы «писал», без итога."},
      {"type":"choice","q":"«Я читала книгу, когда он позвонил» —",
       "opts":["Czytałam książkę, kiedy zadzwonił","Czytałam książkę, kiedy dzwonił","Przeczytałam książkę, kiedy zadzwonił"],"answer":0,
       "explain":"Фон — несовершенный (<b>czytałam</b>), событие внутри фона — совершенный (<b>zadzwonił</b>). Русская фраза устроена так же."},
      {"type":"type","howto":"Напиши по-польски. Обе формы рода принимаются, диакритику можно не ставить.",
       "q":"«Вчера я приготовил(а) обед» — обед готов","accept":["wczoraj ugotowałem obiad","wczoraj ugotowałam obiad","wczoraj ugotowalem obiad","wczoraj ugotowalam obiad"],"placeholder":"Wczoraj ugotował… obiad"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Слова-подсказки",
    "title":"<em>cały dzień</em> против <em>już</em> и <em>w końcu</em>",
    "paras":[
      "В предложении почти всегда есть слово, которое само тянет к одному виду. Длительность и повтор — к несовершенному: <b>cały dzień</b> (весь день), <b>długo</b> (долго), <b>godzinę</b> (час), <b>często</b> (часто), <b>zwykle</b> (обычно), <b>codziennie</b> (каждый день).",
      "Итог и однократность — к совершенному: <b>już</b> (уже), <b>w końcu</b> (в конце концов), <b>wreszcie</b> (наконец), <b>nagle</b> (вдруг), <b>od razu</b> (сразу).",
      "Сравни: <b>Cały dzień sprzątałam mieszkanie</b> («весь день убирала») и <b>W końcu posprzątałam mieszkanie</b> («в конце концов убрала»). Русские подсказки работают один в один: «весь день» тянет «убирала», «в конце концов» тянет «убрала».",
      "Маленькая деталь про время: <b>Pisałem list godzinę</b> — «писал письмо час» (длилось час). <b>Napisałem list w godzinę</b> — «написал письмо за час» (уложился в час). Предлог <b>w</b> здесь означает то же, что русское «за»."
    ],
    "audio":"В предложении почти всегда есть слово, которое само тянет к одному виду. Длительность и повтор — к несовершенному: cały dzień, весь день; długo, долго; godzinę, час; często, часто; zwykle, обычно; codziennie, каждый день. Итог и однократность — к совершенному: już, уже; w końcu, в конце концов; wreszcie, наконец; nagle, вдруг; od razu, сразу. Сравни: cały dzień sprzątałam mieszkanie — весь день убирала; и w końcu posprzątałam mieszkanie — в конце концов убрала. Русские подсказки работают один в один. Маленькая деталь про время: pisałem list godzinę — писал письмо час; napisałem list w godzinę — написал письмо за час. Предлог w здесь означает то же, что русское «за».",
    "table":{"rows":[
      ["cały dzień · długo · często <button class=\"play\" data-say=\"cały dzień, długo, często\">🔊</button>","→ несовершенный: robiłem, czytałam"],
      ["już · w końcu · wreszcie <button class=\"play\" data-say=\"już, w końcu, wreszcie\">🔊</button>","→ совершенный: zrobiłem, przeczytałam"],
      ["Cały dzień <b>sprzątałam</b>. <button class=\"play\" data-say=\"Cały dzień sprzątałam\">🔊</button>","Весь день убирала."],
      ["W końcu <b>posprzątałam</b>. <button class=\"play\" data-say=\"W końcu posprzątałam\">🔊</button>","В конце концов убрала."],
      ["godzinę / <b>w</b> godzinę","час (длилось) / за час (уложился)"]
    ],"star":1},
    "examples":[
      {"ru":"Я весь день работал.","en":"<b>Cały dzień pracowałem</b>.","say":"Cały dzień pracowałem."},
      {"ru":"Я уже сделала покупки.","en":"<b>Już zrobiłam</b> zakupy.","say":"Już zrobiłam zakupy."},
      {"ru":"Он долго думал и в конце концов позвонил.","en":"Długo <b>myślał</b> i w końcu <b>zadzwonił</b>.","say":"Długo myślał i w końcu zadzwonił."},
      {"ru":"Мы часто ходили на пляж.","en":"Często <b>chodziliśmy</b> na plażę.","say":"Często chodziliśmy na plażę."},
      {"ru":"Я написала письмо за полчаса.","en":"<b>Napisałam</b> list <b>w</b> pół godziny.","say":"Napisałam list w pół godziny."}
    ],
    "mistakes":[
      {"wrong":"Cały dzień posprzątałam mieszkanie.","right":"Cały dzień <b>sprzątałam</b> mieszkanie.","why":"«весь день» описывает длительность, а совершенный вид о ней ничего не говорит. По-русски тоже не скажешь «весь день убрала»."},
      {"wrong":"Już sprzątałam mieszkanie i mogę odpocząć.","right":"<b>Już posprzątałam</b> mieszkanie i mogę odpocząć.","why":"«уже» здесь про готовый результат — значит совершенный вид, как русское «уже убрала»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> найди слово-подсказку и выбери вид.",
       "q":"«Весь день я убирал квартиру» —","opts":["Cały dzień sprzątam mieszkanie","Cały dzień posprzątałem mieszkanie","Cały dzień sprzątałem mieszkanie"],"answer":2,
       "explain":"<b>Cały dzień</b> — про длительность, значит несовершенный вид: sprzątałem."},
      {"type":"choice","q":"«Я уже сделал покупки» —",
       "opts":["Już robiłem zakupy","Już zrobiłem zakupy","Już robię zakupy"],"answer":1,
       "explain":"<b>Już</b> здесь о готовом результате → zrobiłem, как русское «уже сделал»."},
      {"type":"choice","q":"«Он долго писал письмо» —",
       "opts":["Długo pisze list","Długo napisał list","Długo pisał list"],"answer":2,
       "explain":"<b>Długo</b> — длительность, значит <b>pisał</b>. По-русски тоже «долго писал», а не «долго написал»."}
    ]
   },
   {
    "eyebrow":"Правило 3 · Формы",
    "title":"Совершенные глаголы в прошедшем",
    "paras":[
      "Хорошая новость: рецепт тот же самый. Минус <b>-ć</b>, плюс <b>-ł</b> и хвостик лица — работает и для совершенных глаголов. <b>zrobić</b> → zrobiłem / zrobiłam, <b>kupić</b> → kupiłem / kupiłam, <b>napisać</b> → napisałem / napisałam, <b>ugotować</b> → ugotowałem / ugotowałam.",
      "Приставка просто едет впереди: она не мешает ни рецепту, ни хвостикам. То же во множественном: <b>zrobiliśmy / zrobiłyśmy</b>, <b>kupili / kupiły</b>.",
      "Знакомая пара из третьего дня получает продолжение: <b>iść → pójść</b> это «идти → пойти». В прошедшем — <b>szedłem</b> («шёл») и <b>poszedłem</b> («пошёл»), женские <b>szłam</b> и <b>poszłam</b>.",
      "И два глагола с носовыми, которые стоит просто запомнить: <b>wziąć</b> («взять») → <b>wziąłem</b> / <b>wzięłam</b>, <b>zacząć</b> («начать») → <b>zacząłem</b> / <b>zaczęłam</b>. У мужчины <b>ą</b>, у женщины <b>ę</b> — редкий случай, где род видно по носовой букве."
    ],
    "audio":"Хорошая новость: рецепт тот же самый. Минус -ć, плюс -ł и хвостик лица — работает и для совершенных глаголов. Zrobić — zrobiłem, zrobiłam; kupić — kupiłem, kupiłam; napisać — napisałem, napisałam; ugotować — ugotowałem, ugotowałam. Приставка просто едет впереди: она не мешает ни рецепту, ни хвостикам. То же во множественном: zrobiliśmy, zrobiłyśmy, kupili, kupiły. Знакомая пара из третьего дня получает продолжение: iść и pójść это «идти и пойти». В прошедшем szedłem, шёл, и poszedłem, пошёл; женские szłam и poszłam. И два глагола с носовыми, которые стоит просто запомнить: wziąć, взять — wziąłem, wzięłam; zacząć, начать — zacząłem, zaczęłam. У мужчины буква ą, у женщины ę.",
    "table":{"rows":[
      ["zrobić → <b>zrobiłem / zrobiłam</b> <button class=\"play\" data-say=\"zrobiłem, zrobiłam\">🔊</button>","я сделал / я сделала"],
      ["kupić → <b>kupiłem / kupiłam</b> <button class=\"play\" data-say=\"kupiłem, kupiłam\">🔊</button>","я купил / я купила"],
      ["napisać → <b>napisałem / napisałam</b> <button class=\"play\" data-say=\"napisałem, napisałam\">🔊</button>","я написал / я написала"],
      ["pójść → <b>poszedłem / poszłam</b> <button class=\"play\" data-say=\"poszedłem, poszłam\">🔊</button>","я пошёл / я пошла"],
      ["wziąć → <b>wziąłem / wzięłam</b> <button class=\"play\" data-say=\"wziąłem, wzięłam\">🔊</button>","я взял / я взяла"]
    ],"star":3},
    "examples":[
      {"ru":"Я купила хлеб и фрукты.","en":"<b>Kupiłam</b> chleb i owoce.","say":"Kupiłam chleb i owoce."},
      {"ru":"Мы сделали всё за два часа.","en":"<b>Zrobiliśmy</b> wszystko w dwie godziny.","say":"Zrobiliśmy wszystko w dwie godziny."},
      {"ru":"Утром я пошёл на работу пешком.","en":"Rano <b>poszedłem</b> do pracy pieszo.","say":"Rano poszedłem do pracy pieszo."},
      {"ru":"Я взяла зонт, потому что шёл дождь.","en":"<b>Wzięłam</b> parasol, bo padał deszcz.","say":"Wzięłam parasol, bo padał deszcz."},
      {"ru":"Она начала читать вечером.","en":"<b>Zaczęła</b> czytać wieczorem.","say":"Zaczęła czytać wieczorem."}
    ],
    "mistakes":[
      {"wrong":"Rano poszłem do pracy.","right":"Rano <b>poszedłem</b> do pracy.","why":"мужская форма держит кусочек -szed-: poszedłem. Короткое «poszłem» слышно в разговоре, но нормой не считается."},
      {"wrong":"Anna: Wziąłem parasol.","right":"Anna: <b>Wzięłam</b> parasol.","why":"у женщины в этом глаголе носовая ę: wzięłam."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> примени рецепт к совершенному глаголу.",
       "q":"Прошедшее от <b>kupić</b> для «я» (говорит женщина) —","opts":["kupowałam","kupiłam","kupię"],"answer":1,
       "explain":"<b>Kupiłam</b> — «я купила». Kupię — «куплю», kupowałam — «покупала»."},
      {"type":"choice","q":"«Утром я пошла на работу» —",
       "opts":["Rano pójdę do pracy","Rano szłam do pracy","Rano poszłam do pracy"],"answer":2,
       "explain":"«Пошла» — совершенный вид: <b>poszłam</b>. Szłam значит «шла», про дорогу."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорит мужчина.",
       "q":"Собери: <b>«Я купил подарок»</b>","answer":"Kupiłem prezent"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Начал, но не закончил",
    "title":"<em>czytałem, ale nie przeczytałem</em>",
    "paras":[
      "Самое честное предложение недели: <b>Czytałam tę książkę, ale jej nie przeczytałam.</b> — «Я читала эту книгу, но не прочитала её». Один и тот же корень, два вида — и всё сказано.",
      "Обрати внимание на <b>jej</b>: после отрицания дополнение уходит в родительный падеж, как в A1 (nie mam czasu). <b>Nie przeczytałam książki</b>, <b>nie zrobiłem zadania</b>, <b>nie kupiliśmy chleba</b>.",
      "А когда события идут одно за другим, совершенный вид выстраивает их в цепочку: <b>Kupiłem chleb, ugotowałem obiad i posprzątałem kuchnię.</b> Три галочки подряд — три совершенных глагола.",
      "Если же ты описываешь, каким был день вообще, берётся несовершенный: <b>Cały weekend odpoczywaliśmy</b> — «весь выходной мы отдыхали». Событий нет, есть фон."
    ],
    "audio":"Самое честное предложение недели: czytałam tę książkę, ale jej nie przeczytałam — я читала эту книгу, но не прочитала её. Один и тот же корень, два вида — и всё сказано. Обрати внимание на слово jej: после отрицания дополнение уходит в родительный падеж, как в A1. Nie przeczytałam książki, nie zrobiłem zadania, nie kupiliśmy chleba. А когда события идут одно за другим, совершенный вид выстраивает их в цепочку: kupiłem chleb, ugotowałem obiad i posprzątałem kuchnię. Три галочки подряд — три совершенных глагола. Если же ты описываешь, каким был день вообще, берётся несовершенный: cały weekend odpoczywaliśmy — весь выходной мы отдыхали. Событий нет, есть фон.",
    "table":{"rows":[
      ["Czytałem, ale nie <b>przeczytałem</b>. <button class=\"play\" data-say=\"Czytałem, ale nie przeczytałem\">🔊</button>","Читал, но не прочитал."],
      ["Nie zrobiłem <b>zadania</b>. <button class=\"play\" data-say=\"Nie zrobiłem zadania\">🔊</button>","Я не сделал задание. — родительный после nie"],
      ["Kupiłem, ugotowałem i posprzątałem. <button class=\"play\" data-say=\"Kupiłem, ugotowałem i posprzątałem\">🔊</button>","Купил, приготовил и убрал. — цепочка событий"],
      ["Cały weekend <b>odpoczywaliśmy</b>. <button class=\"play\" data-say=\"Cały weekend odpoczywaliśmy\">🔊</button>","Все выходные мы отдыхали. — фон"]
    ],"star":-1},
    "examples":[
      {"ru":"Я писал письмо, но не написал.","en":"<b>Pisałem</b> list, ale go nie <b>napisałem</b>.","say":"Pisałem list, ale go nie napisałem."},
      {"ru":"Мы не купили хлеб.","en":"Nie <b>kupiliśmy</b> chleba.","gloss":"после отрицания — родительный","say":"Nie kupiliśmy chleba."},
      {"ru":"Я купила подарок и приготовила ужин.","en":"<b>Kupiłam</b> prezent i <b>ugotowałam</b> kolację.","say":"Kupiłam prezent i ugotowałam kolację."},
      {"ru":"Все выходные мы отдыхали.","en":"Cały weekend <b>odpoczywaliśmy</b>.","say":"Cały weekend odpoczywaliśmy."}
    ],
    "mistakes":[
      {"wrong":"Nie zrobiłem zadanie.","right":"Nie zrobiłem <b>zadania</b>.","why":"после отрицания дополнение уходит в родительный — то же правило, что nie mam czasu."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> подумай, что важнее сказать — процесс или итог.",
       "q":"«Я читал эту книгу, но не прочитал» —","opts":["Czytałem tę książkę, ale jej nie przeczytałem","Czytałem tę książkę, ale jej nie czytałem","Przeczytałem tę książkę, ale jej nie czytałem"],"answer":0,
       "explain":"Занятие было (<b>czytałem</b>), результата нет (<b>nie przeczytałem</b>). Русская фраза устроена точно так же."},
      {"type":"choice","q":"«Мы не купили хлеб» —",
       "opts":["Nie kupiliśmy chleb","Nie kupiliśmy chleba","Nie kupowaliśmy chleb"],"answer":1,
       "explain":"После отрицания — родительный падеж: <b>chleba</b>."},
      {"type":"speak","target":"Kupiłem chleb i ugotowałem obiad.","sub":"я купил хлеб и приготовил обед — женский вариант: kupiłam, ugotowałam","want":"Kupiłem chleb i ugotowałem obiad."}
    ],
    "mnemonic":"✅ Цепочка галочек — совершенный вид. Ровный фон дня — несовершенный."
   }
 ],
 "dialogue":{
   "intro":"День рождения брата прошёл. Анна выясняет, что Марек успел, а что нет.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"No i jak? Zrobiłeś wszystko?","ru":"Ну и как? Всё сделал?",
      "words":[["Zrobiłeś","ты сделал"],["wszystko","всё"]]},
     {"who":"M","name":"Marek","side":"right","en":"Prawie. Kupiłem prezent i ugotowałem obiad.","ru":"Почти. Подарок купил и обед приготовил.",
      "words":[["Kupiłem","я купил"],["ugotowałem","я приготовил"]]},
     {"who":"A","name":"Anna","side":"left","en":"A mieszkanie? Sprzątałeś w piątek, prawda?","ru":"А квартира? Ты убирал в пятницу, правда?",
      "words":[["Sprzątałeś","ты убирал"],["prawda?","правда?"]]},
     {"who":"M","name":"Marek","side":"right","en":"Sprzątałem cały wieczór, ale nie posprzątałem wszystkiego.","ru":"Убирал весь вечер, но всё не убрал.",
      "words":[["cały wieczór","весь вечер"],["nie posprzątałem","не убрал"]]},
     {"who":"A","name":"Anna","side":"left","en":"Typowe. A co powiedział brat?","ru":"Типично. А что сказал брат?",
      "words":[["powiedział","сказал"]]},
     {"who":"M","name":"Marek","side":"right","en":"Nic nie powiedział. Od razu zaczął czytać książkę.","ru":"Ничего не сказал. Сразу начал читать книгу.",
      "words":[["Od razu","сразу"],["zaczął","начал"]]},
     {"who":"A","name":"Anna","side":"left","en":"To znaczy, że prezent był dobry.","ru":"Значит, подарок был хороший.",
      "words":[["To znaczy","это значит"]]},
     {"who":"M","name":"Marek","side":"right","en":"Chyba tak. W końcu wybrałem coś dobrze.","ru":"Похоже, да. Хоть что-то я в итоге выбрал правильно.",
      "words":[["Chyba tak","похоже, да"],["wybrałem","я выбрал"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка о вечернем фильме. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Oglądałaś ten film?","ru":"Ты смотрела этот фильм?"},
     {"who":"B","en":"Oglądałam, ale nie obejrzałam do końca.","ru":"Смотрела, но не досмотрела до конца."},
     {"who":"A","en":"Dlaczego?","ru":"Почему?"},
     {"who":"B","en":"Zasnęłam po godzinie.","ru":"Уснула через час."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — прошедшее время в двух видах и маркеры, которые подсказывают выбор.",
   "items":[
     {"en":"pisałem / napisałem","ru":"я писал / я написал","ex":"Pisałem list, ale go nie napisałem."},
     {"en":"czytałam / przeczytałam","ru":"я читала / я прочитала","ex":"Przeczytałam całą książkę."},
     {"en":"sprzątałem / posprzątałem","ru":"я убирал / я убрал","ex":"W końcu posprzątałem."},
     {"en":"kupiłem / kupiłam","ru":"я купил / я купила","ex":"Kupiłam chleb i owoce."},
     {"en":"poszedłem / poszłam","ru":"я пошёл / я пошла","ex":"Rano poszłam do pracy."},
     {"en":"wziąłem / wzięłam","ru":"я взял / я взяла","ex":"Wzięłam parasol."},
     {"en":"zacząłem / zaczęłam","ru":"я начал / я начала","ex":"Zaczęłam czytać wieczorem."},
     {"en":"cały dzień","ru":"весь день","ex":"Cały dzień pracowałem."},
     {"en":"już","ru":"уже","ex":"Już zrobiłam zakupy."},
     {"en":"w końcu","ru":"в конце концов","ex":"W końcu posprzątałem kuchnię."},
     {"en":"od razu","ru":"сразу","ex":"Od razu zaczął czytać."},
     {"en":"nagle","ru":"вдруг","ex":"Nagle zadzwonił telefon."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её русскому двойнику. Смотри на вид глагола.",
   "pairs":[["pisałem list","я писал письмо"],["napisałem list","я написал письмо"],["cały dzień sprzątałam","весь день убирала"],["już posprzątałam","уже убрала"]]
 },
 "reading":{
   "intro":"Прочитай и послушай рассказ Анны о субботе. Заметь, где стоит процесс, а где результат.",
   "title":"Moja sobota",
   "sentences":["W sobotę rano długo spałam.","Potem czytałam gazetę i piłam kawę.","O jedenastej poszłam do sklepu.","Kupiłam chleb, ser i owoce.","W domu ugotowałam obiad — trwało to godzinę.","Po obiedzie cały czas sprzątałam mieszkanie.","W końcu posprzątałam kuchnię i łazienkę.","Wieczorem oglądałam film, ale nie obejrzałam go do końca.","Byłam zbyt zmęczona.","Zasnęłam na kanapie o dziesiątej."],
   "translation":"В субботу утром я долго спала. Потом читала газету и пила кофе. В одиннадцать пошла в магазин. Купила хлеб, сыр и фрукты. Дома приготовила обед — это заняло час. После обеда всё время убирала квартиру. В конце концов убрала кухню и ванную. Вечером смотрела фильм, но не досмотрела его до конца. Я была слишком уставшая. Уснула на диване в десять."
 },
 "quiz":{
   "intro":"Пять вопросов — и вид в прошедшем перестанет быть выбором наугад. 💛",
   "items":[
     {"q":"1. «Весь день я писал письма» —","opts":["Cały dzień pisałem listy","Cały dzień piszę listy","Cały dzień napisałem listy"],"answer":0,
      "explain":"<b>Cały dzień</b> — длительность, значит несовершенный вид: pisałem."},
     {"q":"2. «Я уже приготовила обед» —","opts":["Już gotowałam obiad","Już ugotowałam obiad","Już gotuję obiad"],"answer":1,
      "explain":"«Уже» здесь про готовый результат → <b>ugotowałam</b>."},
     {"q":"3. Прошедшее от <b>pójść</b> для женщины —","opts":["poszłam","poszedłem","szłam"],"answer":0,
      "explain":"<b>Poszłam</b> — «пошла». Szłam — «шла», poszedłem — мужская форма."},
     {"q":"4. «Я читал книгу, но не прочитал её» —","opts":["Czytam książkę, ale jej nie czytałem","Czytałem książkę, ale jej nie przeczytałem","Przeczytałem książkę, ale jej nie czytałem"],"answer":1,
      "explain":"Занятие было, результата нет: <b>czytałem… nie przeczytałem</b>."},
     {"q":"5. «Мы не купили хлеб» —","opts":["Nie kupili chleba","Nie kupiliśmy chleb","Nie kupiliśmy chleba"],"answer":2,
      "explain":"После отрицания — родительный: <b>chleba</b>. Форма kupili — «они купили», а речь о нас."}
   ]
 },
 "essay":{
   "intro":"Расскажи про свою прошлую субботу — и следи за видом: где занятие, а где готовое дело.",
   "prompt":"Напиши 5–6 предложений о прошлой субботе: что делал(а) долго, что успел(а) сделать до конца, что не успел(а).",
   "hint":"Схема: Rano długo… Potem… O… poszed(łem)/poszłam… Kupiłem/Kupiłam… W końcu… ale nie…",
   "example":"W sobotę rano długo spałem i czytałem gazetę. Potem poszedłem do sklepu i kupiłem chleb oraz owoce. Cały dzień sprzątałem mieszkanie. W końcu posprzątałem kuchnię, ale nie posprzątałem balkonu. Wieczorem oglądałem film. Nie obejrzałem go do końca, bo zasnąłem."
 }
},
"6": {
 "day":6,"week":"01",
 "themeRu":"Мой вчерашний день",
 "themeEn":"Opowiadam o wczoraj",
 "intro":"Формы у тебя уже есть — сегодня из них получится рассказ. Пять слов держат целый день на ногах: <b>najpierw</b>, <b>potem</b>, <b>później</b>, <b>w końcu</b> и время суток. Без них фразы рассыпаются, с ними даже поход в магазин звучит как история.",
 "introAudio":"Формы у тебя уже есть — сегодня из них получится рассказ. Пять слов держат целый день на ногах: najpierw, potem, później, w końcu и время суток. Без них фразы рассыпаются, с ними даже поход в магазин звучит как история.",
 "goals":[
   "Расставить события по времени суток: <b>rano, po południu, wieczorem, w nocy</b>",
   "Связать их коннекторами <b>najpierw — potem — później — w końcu</b>",
   "Объяснить причину и следствие: <b>bo</b>, <b>dlatego</b>, <b>więc</b>",
   "Рассказать о вчерашнем дне восемью связными предложениями"
 ],
 "learned":[
   "Расставил(а) события по времени суток: rano, po południu, wieczorem, w nocy",
   "Связал(а) их коннекторами najpierw — potem — później — w końcu",
   "Объяснил(а) причину и следствие: bo, dlatego, więc",
   "Рассказал(а) о вчерашнем дне связно"
 ],
 "review":{
   "intro":"Проверим вчерашнее: маркеры вида и формы совершенных глаголов. Потом соберём из них целый день.",
   "introAudio":"Проверим вчерашнее: маркеры вида и формы совершенных глаголов. Потом соберём из них целый день.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> найди слово-подсказку.",
      "q":"«Весь вечер я убирала квартиру» —","opts":["Cały wieczór posprzątałam mieszkanie","Cały wieczór sprzątałam mieszkanie","Cały wieczór sprzątam mieszkanie"],"answer":1,
      "explain":"<b>Cały wieczór</b> — про длительность, значит несовершенный вид: sprzątałam."},
     {"type":"choice","q":"«Я уже купил хлеб» —",
      "opts":["Już kupuję chleb","Już kupowałem chleb","Już kupiłem chleb"],"answer":2,
      "explain":"«Уже» здесь про результат → <b>kupiłem</b>."},
     {"type":"choice","q":"Прошедшее от <b>pójść</b> для мужчины —",
      "opts":["poszłam","szedłem","poszedłem"],"answer":2,
      "explain":"<b>Poszedłem</b> — «пошёл». Szedłem — «шёл», poszłam — женская форма."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорит женщина.",
      "q":"Собери: <b>«В конце концов я убрала кухню»</b>","answer":"W końcu posprzątałam kuchnię"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Каркас дня",
    "title":"<em>rano</em>, <em>po południu</em>, <em>wieczorem</em>, <em>w nocy</em>",
    "paras":[
      "Сначала расставим опоры. День делится так: <b>rano</b> (утром), <b>przed południem</b> (до полудня), <b>w południe</b> (в полдень), <b>po południu</b> (после полудня, днём), <b>wieczorem</b> (вечером), <b>w nocy</b> (ночью).",
      "Заметь: <b>rano</b> и <b>wieczorem</b> — просто слова, без предлога, как русские «утром, вечером». А ночь берёт предлог: <b>w nocy</b>. Полдень тоже с предлогом: <b>w południe</b>, <b>po południu</b>.",
      "Со словом «вчера» порядок как в русском: <b>wczoraj rano</b> (вчера утром), <b>wczoraj wieczorem</b> (вчера вечером), <b>wczoraj w nocy</b> (вчера ночью). Для сегодняшнего утра — <b>dziś rano</b>.",
      "Точное время из A1 сюда встраивается легко: <b>o siódmej rano</b>, <b>o drugiej po południu</b>. И два наречия, без которых не обойтись: <b>wcześnie</b> (рано) и <b>późno</b> (поздно)."
    ],
    "audio":"Сначала расставим опоры. День делится так: rano — утром, przed południem — до полудня, w południe — в полдень, po południu — после полудня, днём, wieczorem — вечером, w nocy — ночью. Заметь: rano и wieczorem — просто слова, без предлога, как русские «утром, вечером». А ночь берёт предлог: w nocy. Полдень тоже с предлогом: w południe, po południu. Со словом «вчера» порядок как в русском: wczoraj rano, wczoraj wieczorem, wczoraj w nocy. Для сегодняшнего утра — dziś rano. Точное время из A1 сюда встраивается легко: o siódmej rano, o drugiej po południu. И два наречия, без которых не обойтись: wcześnie — рано, и późno — поздно.",
    "table":{"rows":[
      ["rano <button class=\"play\" data-say=\"rano\">🔊</button>","утром"],
      ["przed południem / w południe <button class=\"play\" data-say=\"przed południem, w południe\">🔊</button>","до полудня / в полдень"],
      ["po południu <button class=\"play\" data-say=\"po południu\">🔊</button>","днём, после полудня"],
      ["wieczorem <button class=\"play\" data-say=\"wieczorem\">🔊</button>","вечером"],
      ["w nocy <button class=\"play\" data-say=\"w nocy\">🔊</button>","ночью"],
      ["wczoraj wieczorem · dziś rano <button class=\"play\" data-say=\"wczoraj wieczorem, dziś rano\">🔊</button>","вчера вечером · сегодня утром"]
    ],"star":-1},
    "examples":[
      {"ru":"Вчера утром я встал рано.","en":"Wczoraj rano <b>wstałem</b> wcześnie.","say":"Wczoraj rano wstałem wcześnie."},
      {"ru":"Днём я была на работе.","en":"<b>Po południu</b> byłam w pracy.","say":"Po południu byłam w pracy."},
      {"ru":"Вчера вечером мы смотрели фильм.","en":"<b>Wczoraj wieczorem</b> oglądaliśmy film.","say":"Wczoraj wieczorem oglądaliśmy film."},
      {"ru":"Ночью я плохо спал.","en":"<b>W nocy</b> źle spałem.","say":"W nocy źle spałem."},
      {"ru":"Я вышла из дома в семь утра.","en":"<b>Wyszłam</b> z domu o siódmej rano.","say":"Wyszłam z domu o siódmej rano."}
    ],
    "mistakes":[
      {"wrong":"W rano byłem w domu.","right":"<b>Rano</b> byłem w domu.","why":"rano и wieczorem идут без предлога, как русские «утром» и «вечером». Предлог нужен ночи: w nocy."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, где нужен предлог, а где нет.",
       "q":"«Ночью я не спала» —","opts":["Nocy nie spałam","W nocy nie spałam","W nocą nie spałam"],"answer":1,
       "explain":"Ночь берёт предлог: <b>w nocy</b>."},
      {"type":"choice","q":"«Вчера вечером» —",
       "opts":["wczoraj wieczorem","wczoraj wieczór","w wieczór wczoraj"],"answer":0,
       "explain":"<b>Wczoraj wieczorem</b> — порядок и форма как в русском «вчера вечером»."},
      {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить.",
       "q":"«днём» (после полудня)","accept":["po południu","po poludniu"],"placeholder":"po…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Порядок событий",
    "title":"<em>najpierw — potem — później — w końcu</em>",
    "paras":[
      "Четыре слова превращают список в рассказ. <b>Najpierw</b> — сначала. <b>Potem</b> — потом. <b>Później</b> — позже. <b>W końcu</b> — в конце концов, наконец.",
      "<b>Potem</b> и <b>później</b> близки, но не одинаковы: potem просто ставит следующее событие в очередь, a później подчёркивает, что прошло время. Русская пара «потом» и «позже» ведёт себя так же.",
      "Ловушка с <b>w końcu</b>: это «наконец, в итоге» — про завершение цепочки событий. Если нужно сказать «в конце дня», берётся другая конструкция: <b>pod koniec dnia</b>. А <b>na koniec</b> значит «напоследок».",
      "Ещё два полезных слова: <b>zaraz</b> (сейчас же, тут же) и <b>od razu</b> (сразу). <b>Wróciłam do domu i od razu zasnęłam</b> — «вернулась домой и сразу уснула»."
    ],
    "audio":"Четыре слова превращают список в рассказ. Najpierw — сначала. Potem — потом. Później — позже. W końcu — в конце концов, наконец. Potem и później близки, но не одинаковы: potem просто ставит следующее событие в очередь, а później подчёркивает, что прошло время. Русская пара «потом» и «позже» ведёт себя так же. Ловушка с w końcu: это «наконец, в итоге», про завершение цепочки событий. Если нужно сказать «в конце дня», берётся другая конструкция: pod koniec dnia. А na koniec значит «напоследок». Ещё два полезных слова: zaraz — сейчас же, тут же, и od razu — сразу. Wróciłam do domu i od razu zasnęłam — вернулась домой и сразу уснула.",
    "table":{"rows":[
      ["najpierw <button class=\"play\" data-say=\"najpierw\">🔊</button>","сначала"],
      ["potem <button class=\"play\" data-say=\"potem\">🔊</button>","потом"],
      ["później <button class=\"play\" data-say=\"później\">🔊</button>","позже"],
      ["w końcu <button class=\"play\" data-say=\"w końcu\">🔊</button>","в конце концов, наконец"],
      ["pod koniec dnia <button class=\"play\" data-say=\"pod koniec dnia\">🔊</button>","в конце дня"],
      ["od razu <button class=\"play\" data-say=\"od razu\">🔊</button>","сразу"]
    ],"star":3},
    "examples":[
      {"ru":"Сначала я позавтракал, потом пошёл на работу.","en":"<b>Najpierw</b> zjadłem śniadanie, <b>potem</b> poszedłem do pracy.","say":"Najpierw zjadłem śniadanie, potem poszedłem do pracy."},
      {"ru":"Позже мы встретились в кафе.","en":"<b>Później</b> spotkaliśmy się w kawiarni.","say":"Później spotkaliśmy się w kawiarni."},
      {"ru":"В конце концов я всё сделала.","en":"<b>W końcu</b> wszystko zrobiłam.","say":"W końcu wszystko zrobiłam."},
      {"ru":"В конце дня я очень устал.","en":"<b>Pod koniec dnia</b> byłem bardzo zmęczony.","say":"Pod koniec dnia byłem bardzo zmęczony."},
      {"ru":"Я вернулась домой и сразу уснула.","en":"Wróciłam do domu i <b>od razu</b> zasnęłam.","say":"Wróciłam do domu i od razu zasnęłam."}
    ],
    "mistakes":[
      {"wrong":"W końcu dnia byłem zmęczony.","right":"<b>Pod koniec dnia</b> byłem zmęczony.","why":"w końcu значит «наконец, в итоге», а не «в конце чего-то». Для «в конце дня» есть pod koniec dnia."}
    ],
    "mnemonic":"➡️ najpierw → potem → później → w końcu. Четыре стрелки, и день выстроен.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> выбери коннектор по смыслу.",
       "q":"«___ я позавтракал, потом пошёл на работу» —","opts":["W końcu","Później","Najpierw"],"answer":2,
       "explain":"Первое событие в цепочке — <b>najpierw</b> («сначала»)."},
      {"type":"choice","q":"«В конце дня я был уставший» —",
       "opts":["Pod koniec dnia byłem zmęczony","Na koniec dnia byłem zmęczony","W końcu dnia byłem zmęczony"],"answer":0,
       "explain":"«В конце дня» — <b>pod koniec dnia</b>. W końcu значит «наконец», na koniec — «напоследок»."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорит женщина.",
       "q":"Собери: <b>«Сначала я убрала, потом приготовила обед»</b>","answer":"Najpierw posprzątałam potem ugotowałam obiad"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Почему и поэтому",
    "title":"<em>bo</em>, <em>dlatego</em>, <em>więc</em>, <em>ale</em>",
    "paras":[
      "Рассказ живой, когда в нём есть не только «потом», но и «почему». Причина вводится словом <b>bo</b> («потому что») или более книжным <b>ponieważ</b>: <b>Nie poszedłem na spacer, bo padał deszcz.</b>",
      "Обратный порядок — сначала причина, потом следствие — держат <b>dlatego</b> («поэтому») и <b>więc</b> («так что, значит»): <b>Padał deszcz, dlatego zostałem w domu.</b>",
      "Противопоставление — <b>ale</b> («но»): <b>Chciałam iść do kina, ale nie miałam czasu.</b> Это самое частое слово в любом честном рассказе о дне.",
      "Обрати внимание: <b>bo</b> никогда не начинает предложение в письменной речи — оно стоит внутри, после запятой. А <b>dlatego</b> и <b>więc</b> как раз открывают вторую половину фразы."
    ],
    "audio":"Рассказ живой, когда в нём есть не только «потом», но и «почему». Причина вводится словом bo, потому что, или более книжным ponieważ: nie poszedłem na spacer, bo padał deszcz. Обратный порядок — сначала причина, потом следствие — держат dlatego, поэтому, и więc, так что: padał deszcz, dlatego zostałem w domu. Противопоставление — ale, но: chciałam iść do kina, ale nie miałam czasu. Это самое частое слово в любом честном рассказе о дне. Обрати внимание: bo не начинает предложение в письменной речи, оно стоит внутри, после запятой. А dlatego и więc как раз открывают вторую половину фразы.",
    "table":{"rows":[
      ["…, bo… <button class=\"play\" data-say=\"bo\">🔊</button>","…, потому что…"],
      ["…, dlatego… <button class=\"play\" data-say=\"dlatego\">🔊</button>","…, поэтому…"],
      ["…, więc… <button class=\"play\" data-say=\"więc\">🔊</button>","…, так что…"],
      ["…, ale… <button class=\"play\" data-say=\"ale\">🔊</button>","…, но…"],
      ["Padał deszcz. <button class=\"play\" data-say=\"Padał deszcz\">🔊</button>","Шёл дождь."]
    ],"star":-1},
    "examples":[
      {"ru":"Я не пошёл гулять, потому что шёл дождь.","en":"Nie poszedłem na spacer, <b>bo</b> padał deszcz.","say":"Nie poszedłem na spacer, bo padał deszcz."},
      {"ru":"Шёл дождь, поэтому я остался дома.","en":"Padał deszcz, <b>dlatego</b> zostałem w domu.","say":"Padał deszcz, dlatego zostałem w domu."},
      {"ru":"Автобуса не было, так что я шла пешком.","en":"Nie było autobusu, <b>więc</b> szłam pieszo.","say":"Nie było autobusu, więc szłam pieszo."},
      {"ru":"Я хотела в кино, но не было времени.","en":"Chciałam iść do kina, <b>ale</b> nie miałam czasu.","say":"Chciałam iść do kina, ale nie miałam czasu."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, где стоит причина, а где следствие.",
       "q":"«Шёл дождь, ___ я остался дома» —","opts":["bo","dlatego","ale"],"answer":1,
       "explain":"Сначала причина, потом следствие → <b>dlatego</b> («поэтому»). Со словом bo порядок был бы обратный: zostałem w domu, bo padał deszcz."},
      {"type":"choice","q":"«Я хотел прийти, ___ не смог» —",
       "opts":["ale","bo","więc"],"answer":0,
       "explain":"Противопоставление → <b>ale</b> («но»)."},
      {"type":"type","howto":"Напиши по-польски. Диакритику можно не ставить. Говорит женщина.",
       "q":"«Я не работала, потому что была больна»","accept":["nie pracowałam bo byłam chora","nie pracowalam bo bylam chora","nie pracowałam, bo byłam chora","nie pracowalam, bo bylam chora"],"placeholder":"Nie pracowałam, bo…"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Сборка",
    "title":"Как звучит целый день",
    "paras":[
      "Теперь всё вместе. Каркас времени плюс коннекторы плюс вид глагола — и получается рассказ, который держится на ногах: фон несовершенным, события совершенным.",
      "<b>Wczoraj rano wstałam o siódmej. Najpierw zjadłam śniadanie i wypiłam kawę, potem poszłam do pracy. Cały dzień pracowałam, więc byłam zmęczona. Po pracy zrobiłam zakupy i ugotowałam kolację. Wieczorem czytałam książkę, ale nie przeczytałam całego rozdziału. W końcu zasnęłam o jedenastej.</b>",
      "Разбери этот текст глазами: <b>wstałam, zjadłam, wypiłam, poszłam, zrobiłam, ugotowałam, zasnęłam</b> — события, галочки. <b>Pracowałam, czytałam</b> — фон, занятия. Ровно то, что делает русский рассказчик.",
      "Начать рассказ помогает вопрос собеседника: <b>Jak minął ci dzień?</b> («как прошёл твой день?») или <b>Co robiłeś wczoraj?</b> А закончить — короткая оценка: <b>Dzień był udany</b> («день удался») или <b>Byłem bardzo zmęczony</b>."
    ],
    "audio":"Теперь всё вместе. Каркас времени плюс коннекторы плюс вид глагола — и получается рассказ, который держится на ногах: фон несовершенным, события совершенным. Wczoraj rano wstałam o siódmej. Najpierw zjadłam śniadanie i wypiłam kawę, potem poszłam do pracy. Cały dzień pracowałam, więc byłam zmęczona. Po pracy zrobiłam zakupy i ugotowałam kolację. Wieczorem czytałam książkę, ale nie przeczytałam całego rozdziału. W końcu zasnęłam o jedenastej. Разбери этот текст: wstałam, zjadłam, wypiłam, poszłam, zrobiłam, ugotowałam, zasnęłam — события, галочки. Pracowałam, czytałam — фон, занятия. Ровно то, что делает русский рассказчик. Начать рассказ помогает вопрос собеседника: jak minął ci dzień? или co robiłeś wczoraj? А закончить — короткая оценка: dzień był udany или byłem bardzo zmęczony.",
    "table":{"rows":[
      ["Jak minął ci dzień? <button class=\"play\" data-say=\"Jak minął ci dzień?\">🔊</button>","Как прошёл твой день?"],
      ["Wstałem o siódmej. <button class=\"play\" data-say=\"Wstałem o siódmej\">🔊</button>","Я встал в семь."],
      ["Zjadłam śniadanie. <button class=\"play\" data-say=\"Zjadłam śniadanie\">🔊</button>","Я позавтракала."],
      ["Zrobiłem zakupy. <button class=\"play\" data-say=\"Zrobiłem zakupy\">🔊</button>","Я сделал покупки."],
      ["Dzień był udany. <button class=\"play\" data-say=\"Dzień był udany\">🔊</button>","День удался."]
    ],"star":0},
    "examples":[
      {"ru":"Вчера я встала в семь.","en":"Wczoraj <b>wstałam</b> o siódmej.","say":"Wczoraj wstałam o siódmej."},
      {"ru":"Сначала я позавтракал, потом пошёл на работу.","en":"Najpierw <b>zjadłem</b> śniadanie, potem <b>poszedłem</b> do pracy.","say":"Najpierw zjadłem śniadanie, potem poszedłem do pracy."},
      {"ru":"После работы я сделала покупки.","en":"Po pracy <b>zrobiłam</b> zakupy.","say":"Po pracy zrobiłam zakupy."},
      {"ru":"Вечером я читал, но не дочитал главу.","en":"Wieczorem <b>czytałem</b>, ale nie <b>przeczytałem</b> rozdziału.","say":"Wieczorem czytałem, ale nie przeczytałem rozdziału."},
      {"ru":"День был удачный, хотя длинный.","en":"Dzień <b>był udany</b>, choć długi.","say":"Dzień był udany, choć długi."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на цепочку событий.",
       "q":"Какая фраза открывает рассказ о вчерашнем дне?","opts":["Wczoraj rano wstałem o siódmej","W końcu zasnąłem","Cały dzień pracowałem"],"answer":0,
       "explain":"Рассказ начинается с первого события дня: <b>Wczoraj rano wstałem o siódmej</b>. W końcu — это уже финал."},
      {"type":"choice","q":"«После работы я сделала покупки и приготовила ужин» —",
       "opts":["Po pracy robiłam zakupy i gotowałam kolację","Po pracy zrobiłam zakupy i ugotowałam kolację","Po pracy robię zakupy i gotuję kolację"],"answer":1,
       "explain":"Два законченных дела подряд — цепочка событий, значит совершенный вид: <b>zrobiłam, ugotowałam</b>."},
      {"type":"speak","target":"Najpierw zjadłem śniadanie, potem poszedłem do pracy.","sub":"сначала я позавтракал, потом пошёл на работу — женский вариант: zjadłam, poszłam","want":"Najpierw zjadłem śniadanie, potem poszedłem do pracy."}
    ],
    "mnemonic":"🧵 Время суток держит нить, коннекторы вяжут узлы, вид глагола решает — фон это или событие."
   }
 ],
 "dialogue":{
   "intro":"Анна расспрашивает Марека о его вчерашнем дне. Следи за коннекторами — они несут весь рассказ.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Jak minął ci wczorajszy dzień?","ru":"Как прошёл твой вчерашний день?",
      "words":[["Jak minął","как прошёл"],["wczorajszy","вчерашний"]]},
     {"who":"M","name":"Marek","side":"right","en":"Długo. Wstałem o szóstej, bo miałem spotkanie o ósmej.","ru":"Долго. Встал в шесть, потому что в восемь была встреча.",
      "words":[["Wstałem","я встал"],["spotkanie","встреча"]]},
     {"who":"A","name":"Anna","side":"left","en":"O szóstej? I co najpierw?","ru":"В шесть? И что сначала?",
      "words":[["najpierw","сначала"]]},
     {"who":"M","name":"Marek","side":"right","en":"Najpierw wypiłem kawę, potem poszedłem na przystanek.","ru":"Сначала выпил кофе, потом пошёл на остановку.",
      "words":[["wypiłem","я выпил"],["przystanek","остановка"]]},
     {"who":"A","name":"Anna","side":"left","en":"Autobus był punktualnie?","ru":"Автобус был вовремя?",
      "words":[["punktualnie","вовремя"]]},
     {"who":"M","name":"Marek","side":"right","en":"Nie było autobusu, więc szedłem pieszo dwadzieścia minut.","ru":"Автобуса не было, так что я шёл пешком двадцать минут.",
      "words":[["więc","так что"],["pieszo","пешком"]]},
     {"who":"A","name":"Anna","side":"left","en":"A po południu?","ru":"А днём?",
      "words":[["po południu","днём"]]},
     {"who":"M","name":"Marek","side":"right","en":"Po południu pracowałem, później zrobiłem zakupy.","ru":"Днём работал, позже сделал покупки.",
      "words":[["później","позже"],["zrobiłem zakupy","сделал покупки"]]},
     {"who":"A","name":"Anna","side":"left","en":"I w końcu odpoczynek?","ru":"И наконец отдых?",
      "words":[["w końcu","наконец"],["odpoczynek","отдых"]]},
     {"who":"M","name":"Marek","side":"right","en":"W końcu tak. Wieczorem oglądałem film i od razu zasnąłem.","ru":"Наконец да. Вечером смотрел фильм и сразу уснул.",
      "words":[["od razu","сразу"],["zasnąłem","я уснул"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка утром на кухне. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Wstałaś wcześnie?","ru":"Ты рано встала?"},
     {"who":"B","en":"O szóstej. Najpierw kawa, potem praca.","ru":"В шесть. Сначала кофе, потом работа."},
     {"who":"A","en":"A wczoraj w nocy?","ru":"А вчера ночью?"},
     {"who":"B","en":"W nocy źle spałam. Dlatego jestem zmęczona.","ru":"Ночью плохо спала. Поэтому я уставшая."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — каркас времени и коннекторы, на которых держится рассказ.",
   "items":[
     {"en":"rano / wieczorem","ru":"утром / вечером","ex":"Wczoraj rano wstałem o siódmej."},
     {"en":"po południu","ru":"днём, после полудня","ex":"Po południu pracowałam."},
     {"en":"w nocy","ru":"ночью","ex":"W nocy źle spałem."},
     {"en":"najpierw","ru":"сначала","ex":"Najpierw zjadłam śniadanie."},
     {"en":"potem","ru":"потом","ex":"Potem poszedłem do pracy."},
     {"en":"później","ru":"позже","ex":"Później zrobiłem zakupy."},
     {"en":"w końcu","ru":"в конце концов, наконец","ex":"W końcu wszystko zrobiłam."},
     {"en":"pod koniec dnia","ru":"в конце дня","ex":"Pod koniec dnia byłem zmęczony."},
     {"en":"bo / dlatego / więc","ru":"потому что / поэтому / так что","ex":"Padał deszcz, dlatego zostałam w domu."},
     {"en":"wstać → wstałem","ru":"встать → я встал","ex":"Wstałam o szóstej."},
     {"en":"zjeść śniadanie","ru":"позавтракать","ex":"Zjadłem śniadanie o siódmej."},
     {"en":"zmęczony / zmęczona","ru":"уставший / уставшая","ex":"Byłam bardzo zmęczona."}
   ]
 },
 "drag":{
   "intro":"Перетащи польский коннектор к его переводу. Три из четырёх похожи, но работают по-разному.",
   "pairs":[["najpierw","сначала"],["potem","потом"],["później","позже"],["w końcu","в конце концов"]]
 },
 "reading":{
   "intro":"Прочитай и послушай целый день Анны — от будильника до дивана. Это образец для твоего рассказа.",
   "title":"Mój wczorajszy dzień",
   "sentences":["Wczoraj rano wstałam o siódmej.","Najpierw zjadłam śniadanie i wypiłam kawę.","Potem poszłam do pracy pieszo, bo była ładna pogoda.","Przed południem miałam dwa spotkania.","W południe zjadłam obiad z koleżanką.","Po południu długo pisałam raport.","Nie napisałam go do końca, więc zostałam pół godziny dłużej.","Później zrobiłam zakupy i wróciłam do domu.","Wieczorem ugotowałam kolację i oglądałam film.","W końcu zasnęłam o jedenastej.","Dzień był długi, ale udany."],
   "translation":"Вчера утром я встала в семь. Сначала позавтракала и выпила кофе. Потом пошла на работу пешком, потому что была хорошая погода. До полудня у меня было две встречи. В полдень пообедала с коллегой. После обеда долго писала отчёт. Не дописала его до конца, так что осталась на полчаса дольше. Позже сделала покупки и вернулась домой. Вечером приготовила ужин и смотрела фильм. В конце концов уснула в одиннадцать. День был длинный, но удачный."
 },
 "quiz":{
   "intro":"Пять вопросов — и вчерашний день можно рассказать без пауз. 💛",
   "items":[
     {"q":"1. «Ночью я плохо спал» —","opts":["Wieczór źle spałem","Nocy źle spałem","W nocy źle spałem"],"answer":2,
      "explain":"Ночь берёт предлог: <b>w nocy</b>. Rano и wieczorem идут без предлога."},
     {"q":"2. «Сначала» по-польски —","opts":["najpierw","w końcu","potem"],"answer":0,
      "explain":"<b>Najpierw</b> — «сначала». Potem — «потом», w końcu — «в конце концов»."},
     {"q":"3. «В конце дня я была уставшая» —","opts":["Pod koniec dnia byłam zmęczona","Na koniec byłam zmęczona","W końcu dnia byłam zmęczona"],"answer":0,
      "explain":"«В конце дня» — <b>pod koniec dnia</b>. W końcu значит «наконец»."},
     {"q":"4. «Шёл дождь, поэтому я остался дома» —","opts":["Padał deszcz, bo zostałem w domu","Padał deszcz, dlatego zostałem w domu","Padał deszcz, ale zostałem w domu"],"answer":1,
      "explain":"Причина впереди, следствие после → <b>dlatego</b>."},
     {"q":"5. «После работы я сделал покупки и приготовил ужин» —","opts":["Po pracy robiłem zakupy i gotowałem kolację","Po pracy zrobiłem zakupy i ugotowałem kolację","Po pracy robię zakupy i gotuję kolację"],"answer":1,
      "explain":"Два законченных дела подряд — совершенный вид: <b>zrobiłem, ugotowałem</b>."}
   ]
 },
 "essay":{
   "intro":"Твой вчерашний день — целиком. Используй каркас времени и все четыре коннектора.",
   "prompt":"Напиши 7–8 предложений о вчерашнем дне: во сколько встал(а), что делал(а) утром, днём и вечером, что успел(а), а что нет.",
   "hint":"Схема: Wczoraj rano wstał(e/a)m o… Najpierw… potem… Po południu… Później… Wieczorem… W końcu… Dzień był…",
   "example":"Wczoraj rano wstałem o wpół do siódmej. Najpierw wypiłem kawę, potem poszedłem do pracy. Przed południem miałem spotkanie, po południu długo pisałem raport. Nie napisałem go do końca. Później zrobiłem zakupy i wróciłem do domu. Wieczorem ugotowałem kolację i oglądałem film. W końcu zasnąłem o jedenastej. Dzień był długi, ale dobry."
 }
},
"7": {
 "day":7,"week":"01",
 "themeRu":"Повторение недели 1",
 "themeEn":"Powtórzenie",
 "intro":"Неделя за плечами — и какая. Прошедшее время целиком, мужско-личный род, пять непослушных глаголов и главная тема уровня: вид. Сегодня ничего нового: сложим детали в одну картину, проверим себя на мини-тесте и послушаем разговор, в котором есть всё сразу.",
 "introAudio":"Неделя за плечами — и какая. Прошедшее время целиком, мужско-личный род, пять непослушных глаголов и главная тема уровня: вид. Сегодня ничего нового: сложим детали в одну картину, проверим себя на мини-тесте и послушаем разговор, в котором есть всё сразу.",
 "goals":[
   "Собрать прошедшее время целиком: род, число и вежливое <b>pan / pani</b>",
   "Уверенно выбирать между <b>byli</b> и <b>były</b>, <b>byliśmy</b> и <b>byłyśmy</b>",
   "Выбирать вид глагола по смыслу и по слову-подсказке",
   "Рассказать связную историю о прошлом с коннекторами"
 ],
 "learned":[
   "Собрал(а) прошедшее время целиком: род, число и вежливое pan / pani",
   "Уверенно выбрал(а) между byli и były, byliśmy и byłyśmy",
   "Выбрал(а) вид глагола по смыслу и по слову-подсказке",
   "Рассказал(а) связную историю о прошлом с коннекторами"
 ],
 "review":{
   "intro":"Начнём с быстрой разминки по всей неделе. Не подглядывай — просто вспоминай. Промах не страшен: нужное правило рядом.",
   "introAudio":"Начнём с быстрой разминки по всей неделе. Не подглядывай — просто вспоминай. Промах не страшен: нужное правило рядом.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни первый день недели.",
      "q":"Вежливо к женщине: «Где Вы были летом?» —","opts":["Gdzie pani była latem?","Gdzie pani byli latem?","Gdzie pani byłaś latem?"],"answer":0,
      "explain":"pani + форма третьего лица женского рода: <b>Gdzie pani była latem?</b>"},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри на состав группы.",
      "q":"Анна и её сестра: «Мы были на море» —","opts":["Byliśmy nad morzem","Byłyśmy nad morzem","Byłyście nad morzem"],"answer":1,
      "explain":"Только женщины → <b>byłyśmy</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни капризный глагол.",
      "q":"«Она шла пешком» —","opts":["Szedła pieszo","Szła pieszo","Szłam pieszo"],"answer":1,
      "explain":"Женская форма короткая: <b>szła</b>. Szłam — «я шла»."},
     {"type":"choice","howto":"<b>Что делать:</b> найди слово-подсказку.",
      "q":"«Весь день я готовила» —","opts":["Cały dzień gotuję","Cały dzień ugotowałam","Cały dzień gotowałam"],"answer":2,
      "explain":"<b>Cały dzień</b> — длительность, значит несовершенный вид: gotowałam."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни коннекторы.",
      "q":"«В конце концов я всё сделал» —","opts":["Pod koniec wszystko zrobiłem","Najpierw wszystko zrobiłem","W końcu wszystko zrobiłem"],"answer":2,
      "explain":"«В конце концов» — <b>w końcu</b>. Pod koniec dnia значит «в конце дня»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорит мужчина.",
      "q":"Собери: <b>«Я купил хлеб и приготовил обед»</b>","answer":"Kupiłem chleb i ugotowałem obiad"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Повторение 1 · Прошедшее целиком",
    "title":"Род, число и вежливость",
    "paras":[
      "Единственное число: корень с <b>-ł-</b> плюс хвостик лица. <b>byłem / byłam</b>, <b>byłeś / byłaś</b>, <b>był / była / było</b>. Гласная перед хвостиком показывает род: e — мужской, a — женский. Местоимение не нужно: хвостик уже всё сказал.",
      "Множественное: от формы «он делал» отрезаем <b>-ł</b> и ставим <b>-li</b> (в группе есть мужчина) или <b>-ły</b> (все остальные). Дальше хвостики: <b>-śmy</b> для «мы», <b>-ście</b> для «вы», ничего для «они». Отсюда byliśmy / byłyśmy, byliście / byłyście, byli / były.",
      "Мужско-личный род решает только один вопрос: есть ли в группе хотя бы один мужчина. Anna i Marek — <b>byli</b>. Anna i Ewa — <b>były</b>. Dzieci, koty, książki — всегда <b>były</b>.",
      "Вежливое обращение работает как в настоящем: <b>pan</b> и <b>pani</b> берут форму третьего лица. <b>Co pan robił?</b>, <b>Gdzie pani była?</b> — и никаких хвостиков -eś / -aś."
    ],
    "audio":"Единственное число: корень с ł плюс хвостик лица. Byłem, byłam, byłeś, byłaś, był, była, było. Гласная перед хвостиком показывает род: э мужской, а женский. Местоимение не нужно: хвостик уже всё сказал. Множественное: от формы «он делал» отрезаем -ł и ставим -li, если в группе есть мужчина, или -ły во всех остальных случаях. Дальше хвостики: -śmy для «мы», -ście для «вы», ничего для «они». Отсюда byliśmy, byłyśmy, byliście, byłyście, byli, były. Мужско-личный род решает только один вопрос: есть ли в группе хотя бы один мужчина. Anna i Marek — byli. Anna i Ewa — były. Dzieci, koty, książki — всегда były. Вежливое обращение работает как в настоящем: pan и pani берут форму третьего лица. Co pan robił? Gdzie pani była? И никаких хвостиков -eś или -aś.",
    "table":{"rows":[
      ["ja → <b>byłem / byłam</b> <button class=\"play\" data-say=\"byłem, byłam\">🔊</button>","я был / я была"],
      ["ty → <b>byłeś / byłaś</b> · on → <b>był</b> · ona → <b>była</b>","ты был(а) · он был · она была"],
      ["my → <b>byliśmy / byłyśmy</b> <button class=\"play\" data-say=\"byliśmy, byłyśmy\">🔊</button>","мы были"],
      ["wy → <b>byliście / byłyście</b> · oni → <b>byli</b> · one → <b>były</b>","вы были · они были"],
      ["Co pan robił? / Co pani robiła? <button class=\"play\" data-say=\"Co pan robił? Co pani robiła?\">🔊</button>","Что Вы делали? — вежливо"]
    ],"star":2},
    "examples":[
      {"ru":"Летом я была на море.","en":"Latem <b>byłam</b> nad morzem.","say":"Latem byłam nad morzem."},
      {"ru":"Мы были в горах с братом.","en":"<b>Byliśmy</b> w górach z bratem.","say":"Byliśmy w górach z bratem."},
      {"ru":"Девушки были на пляже.","en":"Dziewczyny <b>były</b> na plaży.","say":"Dziewczyny były na plaży."},
      {"ru":"Что Вы делали летом? (к мужчине)","en":"Co <b>pan robił</b> latem?","say":"Co pan robił latem?"},
      {"ru":"Дети были дома.","en":"Dzieci <b>były</b> w domu.","say":"Dzieci były w domu."}
    ],
    "mistakes":[
      {"wrong":"Gdzie pani byłaś?","right":"Gdzie <b>pani była</b>?","why":"pan и pani всегда берут третье лицо — как on и ona."},
      {"wrong":"Dzieci byli w parku.","right":"Dzieci <b>były</b> w parku.","why":"мужско-личная ветка — только про людей-мужчин; dzieci идёт с one."}
    ],
    "tasks":[
      {"type":"choice","q":"«Марек и Пётр были в кино» —","opts":["Marek i Piotr były w kinie","Marek i Piotr byli w kinie","Marek i Piotr byliśmy w kinie"],"answer":1,
       "explain":"Двое мужчин → <b>byli</b>."},
      {"type":"choice","q":"«Что вы делали?» — к двум подругам —","opts":["Co robiliście?","Co robiłyśmy?","Co robiłyście?"],"answer":2,
       "explain":"Только женщины → ветка -ły-, «вы» → хвостик -ście: <b>robiłyście</b>."},
      {"type":"type","howto":"Напиши по-польски. Обе формы рода принимаются, диакритику можно не ставить.",
       "q":"«Вчера я работал(а) весь день»","accept":["wczoraj pracowałem cały dzień","wczoraj pracowałam cały dzień","wczoraj pracowalem caly dzien","wczoraj pracowalam caly dzien"],"placeholder":"Wczoraj pracował… cały dzień"}
    ]
   },
   {
    "eyebrow":"Повторение 2 · Непослушные пятеро",
    "title":"<em>szedł, mógł, jadł, miał, chciał</em>",
    "paras":[
      "Пять глаголов ломают рецепт — и ровно те же пять ломают его в русском. <b>Iść → szedł / szła</b> («идти → шёл / шла»), <b>móc → mógł / mogła</b> («мочь → мог / могла»), <b>jeść → jadł / jadła</b> («есть → ел / ела»).",
      "Мужские формы iść держат кусочек <b>szed-</b>: szedłem, szedłeś, szedł. Женские короче: szłam, szłaś, szła. Буква <b>ó</b> у móc живёт ровно в одной форме — <b>mógł</b>; везде дальше обычное o.",
      "Глаголы на <b>-eć</b> идут пачкой: <b>miał, chciał, musiał, widział, wiedział</b>. В единственном числе у них -a-, а перед <b>-li</b> гласная становится -e-: <b>mieli, chcieli, musieli, widzieli, wiedzieli</b>. Тот же фокус у jeść: jadł, но <b>jedli</b>.",
      "Из этих пяти складываются самые нужные объяснения: <b>nie mogłem przyjść</b>, <b>musiałam pracować</b>, <b>chciałem, ale nie miałem czasu</b>."
    ],
    "audio":"Пять глаголов ломают рецепт — и ровно те же пять ломают его в русском. Iść — szedł, szła, как «идти, шёл, шла». Móc — mógł, mogła, как «мочь, мог, могла». Jeść — jadł, jadła, как «есть, ел, ела». Мужские формы iść держат кусочек szed-: szedłem, szedłeś, szedł. Женские короче: szłam, szłaś, szła. Буква ó у móc живёт ровно в одной форме, mógł; везде дальше обычное o. Глаголы на -eć идут пачкой: miał, chciał, musiał, widział, wiedział. В единственном числе у них -a-, а перед -li гласная становится -e-: mieli, chcieli, musieli, widzieli, wiedzieli. Тот же фокус у jeść: jadł, но jedli. Из этих пяти складываются самые нужные объяснения: nie mogłem przyjść, musiałam pracować, chciałem, ale nie miałem czasu.",
    "table":{"rows":[
      ["iść → <b>szedłem / szłam</b> · <b>szli / szły</b> <button class=\"play\" data-say=\"szedłem, szłam, szli, szły\">🔊</button>","идти → шёл / шла"],
      ["móc → <b>mogłem</b> · on <b>mógł</b> <button class=\"play\" data-say=\"mogłem, mógł\">🔊</button>","мочь → мог (ó только тут)"],
      ["jeść → <b>jadłem</b> · oni <b>jedli</b> <button class=\"play\" data-say=\"jadłem, jedli\">🔊</button>","есть → ел / они ели"],
      ["mieć → <b>miałem</b> · oni <b>mieli</b> <button class=\"play\" data-say=\"miałem, mieli\">🔊</button>","у меня было / у них было"],
      ["chcieć → <b>chciałam</b> · oni <b>chcieli</b> <button class=\"play\" data-say=\"chciałam, chcieli\">🔊</button>","я хотела / они хотели"]
    ],"star":0},
    "examples":[
      {"ru":"Я шёл пешком двадцать минут.","en":"<b>Szedłem</b> pieszo dwadzieścia minut.","say":"Szedłem pieszo dwadzieścia minut."},
      {"ru":"Она не могла прийти.","en":"<b>Nie mogła</b> przyjść.","say":"Nie mogła przyjść."},
      {"ru":"Мы ели вареники.","en":"<b>Jedliśmy</b> pierogi.","say":"Jedliśmy pierogi."},
      {"ru":"Мне пришлось работать в субботу.","en":"<b>Musiałem</b> pracować w sobotę.","say":"Musiałem pracować w sobotę."},
      {"ru":"Я не знала, что ты был в Кракове.","en":"<b>Nie wiedziałam</b>, że byłeś w Krakowie.","say":"Nie wiedziałam, że byłeś w Krakowie."}
    ],
    "mistakes":[
      {"wrong":"Nie mógłem spać.","right":"<b>Nie mogłem</b> spać.","why":"ó появляется только в форме mógł («он мог»)."},
      {"wrong":"Oni chciali odpoczywać.","right":"Oni <b>chcieli</b> odpoczywać.","why":"перед -li гласная a переходит в e: chcieli, mieli, jedli."}
    ],
    "tasks":[
      {"type":"choice","q":"«Они ели вместе» — о мужчинах —","opts":["Jadli razem","Jadły razem","Jedli razem"],"answer":2,
       "explain":"Мужско-личная ветка меняет a на e: <b>jedli</b>."},
      {"type":"choice","q":"«Я не мог прийти» —","opts":["Nie mogłem przyjść","Nie mogła przyjść","Nie mógłem przyjść"],"answer":0,
       "explain":"Для «я» — <b>mogłem</b>, с обычным o."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорит женщина.",
       "q":"Собери: <b>«Я хотела, но не имела времени»</b>","answer":"Chciałam ale nie miałam czasu"}
    ]
   },
   {
    "eyebrow":"Повторение 3 · Вид глагола",
    "title":"Процесс или результат — главный выбор уровня",
    "paras":[
      "Пары устроены как русские: <b>robić / zrobić</b>, <b>pisać / napisać</b>, <b>czytać / przeczytać</b>, <b>kupować / kupić</b>, <b>mówić / powiedzieć</b>. Три способа образования — приставка, длина слова, разные корни — те же, что в русском.",
      "В прошедшем времени вид работает ровно так, как подсказывает родной язык: <b>pisałem list</b> — занимался письмом; <b>napisałem list</b> — письмо готово. Фон — несовершенный, событие — совершенный: <b>Czytałam, kiedy zadzwonił telefon.</b>",
      "Слова-подсказки: <b>cały dzień, długo, często, zwykle</b> тянут несовершенный; <b>już, w końcu, wreszcie, nagle, od razu</b> — совершенный.",
      "И большое следствие: у совершенного вида нет настоящего времени. <b>Zrobię</b> — это «сделаю», будущее. С <b>będę</b> может стоять только несовершенный: <b>będę robić</b> — «буду делать». Сочетание с совершенным невозможно, как русское «буду сделать»."
    ],
    "audio":"Пары устроены как русские: robić и zrobić, pisać и napisać, czytać и przeczytać, kupować и kupić, mówić и powiedzieć. Три способа образования — приставка, длина слова, разные корни — те же, что в русском. В прошедшем времени вид работает ровно так, как подсказывает родной язык: pisałem list — занимался письмом; napisałem list — письмо готово. Фон несовершенный, событие совершенный: czytałam, kiedy zadzwonił telefon. Слова-подсказки: cały dzień, długo, często, zwykle тянут несовершенный; już, w końcu, wreszcie, nagle, od razu — совершенный. И большое следствие: у совершенного вида нет настоящего времени. Zrobię — это «сделаю», будущее. С będę может стоять только несовершенный вид, как в русском «буду делать», а не «буду сделать».",
    "table":{"rows":[
      ["robić / <b>zrobić</b> <button class=\"play\" data-say=\"robić, zrobić\">🔊</button>","делать / сделать"],
      ["pisałem list / <b>napisałem</b> list <button class=\"play\" data-say=\"pisałem list, napisałem list\">🔊</button>","писал письмо / написал письмо"],
      ["cały dzień → несовершенный","весь день сидел и делал"],
      ["już, w końcu → совершенный","уже сделал, наконец сделал"],
      ["zrobię <button class=\"play\" data-say=\"zrobię\">🔊</button>","сделаю — будущее, не настоящее"]
    ],"star":1},
    "examples":[
      {"ru":"Весь день я убирала квартиру.","en":"Cały dzień <b>sprzątałam</b> mieszkanie.","say":"Cały dzień sprzątałam mieszkanie."},
      {"ru":"В конце концов я убрала кухню.","en":"W końcu <b>posprzątałam</b> kuchnię.","say":"W końcu posprzątałam kuchnię."},
      {"ru":"Я читал эту книгу, но не прочитал.","en":"<b>Czytałem</b> tę książkę, ale jej nie <b>przeczytałem</b>.","say":"Czytałem tę książkę, ale jej nie przeczytałem."},
      {"ru":"Завтра я это сделаю.","en":"Jutro to <b>zrobię</b>.","say":"Jutro to zrobię."},
      {"ru":"Мы не купили хлеб.","en":"Nie <b>kupiliśmy</b> chleba.","say":"Nie kupiliśmy chleba."}
    ],
    "mistakes":[
      {"wrong":"Cały dzień posprzątałam mieszkanie.","right":"Cały dzień <b>sprzątałam</b> mieszkanie.","why":"«весь день» — про длительность; совершенный вид о ней ничего не говорит."},
      {"wrong":"Jutro będę zrobić zakupy.","right":"Jutro <b>zrobię</b> zakupy.","why":"с będę идёт только несовершенный вид; совершенный сам означает будущее."}
    ],
    "mnemonic":"⚖️ Спроси себя по-русски: «делал» или «сделал»? Ответ и будет польским видом.",
    "tasks":[
      {"type":"choice","q":"«Я уже написала письмо» —","opts":["Już napisałam list","Już piszę list","Już pisałam list"],"answer":0,
       "explain":"«Уже» здесь про готовый результат → <b>napisałam</b>."},
      {"type":"choice","q":"«Он долго думал» —","opts":["Długo pomyślał","Długo myślał","Długo myśli"],"answer":1,
       "explain":"<b>Długo</b> — длительность, значит несовершенный вид: myślał."},
      {"type":"choice","q":"Форма <b>kupię</b> означает —","opts":["покупаю","куплю","покупал"],"answer":1,
       "explain":"У совершенного вида нет настоящего: <b>kupię</b> — «куплю»."}
    ]
   },
   {
    "eyebrow":"Повторение 4 · Рассказ",
    "title":"Каркас дня и четыре коннектора",
    "paras":[
      "Время суток: <b>rano</b>, <b>przed południem</b>, <b>po południu</b>, <b>wieczorem</b>, <b>w nocy</b>. Rano и wieczorem — без предлога, ночь — с предлогом.",
      "Порядок событий держат <b>najpierw</b> (сначала), <b>potem</b> (потом), <b>później</b> (позже), <b>w końcu</b> (в конце концов). «В конце дня» — отдельная конструкция: <b>pod koniec dnia</b>.",
      "Причина и следствие: <b>bo</b> («потому что», внутри фразы), <b>dlatego</b> и <b>więc</b> («поэтому», «так что» — открывают вторую половину), <b>ale</b> («но»).",
      "И готовая рамка разговора: <b>Jak minął ci dzień?</b> — <b>Wczoraj rano wstałem o siódmej… W końcu zasnąłem o jedenastej. Dzień był udany.</b>"
    ],
    "audio":"Время суток: rano, przed południem, po południu, wieczorem, w nocy. Rano и wieczorem без предлога, ночь с предлогом. Порядок событий держат najpierw — сначала, potem — потом, później — позже, w końcu — в конце концов. «В конце дня» — отдельная конструкция: pod koniec dnia. Причина и следствие: bo, потому что, внутри фразы; dlatego и więc, поэтому и так что, открывают вторую половину; ale — но. И готовая рамка разговора: jak minął ci dzień? Wczoraj rano wstałem o siódmej… W końcu zasnąłem o jedenastej. Dzień był udany.",
    "table":{"rows":[
      ["rano · po południu · wieczorem · w nocy <button class=\"play\" data-say=\"rano, po południu, wieczorem, w nocy\">🔊</button>","утром · днём · вечером · ночью"],
      ["najpierw · potem · później · w końcu <button class=\"play\" data-say=\"najpierw, potem, później, w końcu\">🔊</button>","сначала · потом · позже · наконец"],
      ["bo · dlatego · więc · ale <button class=\"play\" data-say=\"bo, dlatego, więc, ale\">🔊</button>","потому что · поэтому · так что · но"],
      ["Jak minął ci dzień? <button class=\"play\" data-say=\"Jak minął ci dzień?\">🔊</button>","Как прошёл твой день?"],
      ["Dzień był udany. <button class=\"play\" data-say=\"Dzień był udany\">🔊</button>","День удался."]
    ],"star":1},
    "examples":[
      {"ru":"Вчера утром я встала в семь.","en":"Wczoraj rano <b>wstałam</b> o siódmej.","say":"Wczoraj rano wstałam o siódmej."},
      {"ru":"Сначала я позавтракал, потом пошёл на работу.","en":"<b>Najpierw</b> zjadłem śniadanie, <b>potem</b> poszedłem do pracy.","say":"Najpierw zjadłem śniadanie, potem poszedłem do pracy."},
      {"ru":"Автобуса не было, так что я шла пешком.","en":"Nie było autobusu, <b>więc</b> szłam pieszo.","say":"Nie było autobusu, więc szłam pieszo."},
      {"ru":"Вечером я смотрел фильм и сразу уснул.","en":"Wieczorem <b>oglądałem</b> film i od razu <b>zasnąłem</b>.","say":"Wieczorem oglądałem film i od razu zasnąłem."}
    ],
    "tasks":[
      {"type":"choice","q":"«Ночью я плохо спала» —","opts":["W nocy źle spałam","Wieczorem źle spałam","Nocy źle spałam"],"answer":0,
       "explain":"Ночь берёт предлог: <b>w nocy</b>. Форма wieczorem говорит о вечере, а не о ночи."},
      {"type":"speak","target":"Wczoraj rano wstałem o siódmej i poszedłem do pracy.","sub":"вчера утром я встал в семь и пошёл на работу — женский вариант: wstałam, poszłam","want":"Wczoraj rano wstałem o siódmej i poszedłem do pracy."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Вся неделя в одном разговоре: лето, компания, неудавшийся вечер и вчерашний день. Тапни по строке — увидишь перевод.",
   "lines":[
     {"who":"K","name":"pan Kowalski","side":"right","en":"Dzień dobry, pani Anno. Gdzie pani była latem?","ru":"Добрый день, пани Анна. Где Вы были летом?",
      "words":[["Gdzie pani była","где Вы были"],["latem","летом"]]},
     {"who":"A","name":"Anna","side":"left","en":"Byłam nad morzem. Byłyśmy tam z siostrą trzy tygodnie.","ru":"Я была на море. Мы были там с сестрой три недели.",
      "words":[["Byłyśmy","мы были (только женщины)"],["z siostrą","с сестрой"]]},
     {"who":"K","name":"pan Kowalski","side":"right","en":"I co panie robiły?","ru":"И что вы делали?",
      "words":[["panie robiły","Вы делали (к двум женщинам)"]]},
     {"who":"A","name":"Anna","side":"left","en":"Rano pływałyśmy, po południu zwiedzałyśmy miasto.","ru":"Утром плавали, днём осматривали город.",
      "words":[["pływałyśmy","мы плавали"],["zwiedzałyśmy","мы осматривали"]]},
     {"who":"K","name":"pan Kowalski","side":"right","en":"A Marek? Podobno nie mógł nigdzie pojechać.","ru":"А Марек? Говорят, он никуда не смог поехать.",
      "words":[["nie mógł","не мог"],["Podobno","говорят, вроде бы"]]},
     {"who":"A","name":"Anna","side":"left","en":"Musiał pracować całe lato. Miał tylko tydzień w górach.","ru":"Ему пришлось работать всё лето. Была только неделя в горах.",
      "words":[["Musiał","он должен был"],["Miał tylko tydzień","у него была только неделя"]]},
     {"who":"K","name":"pan Kowalski","side":"right","en":"A jak minął pani wczorajszy dzień?","ru":"А как прошёл Ваш вчерашний день?",
      "words":[["Jak minął","как прошёл"]]},
     {"who":"A","name":"Anna","side":"left","en":"Najpierw pracowałam, potem zrobiłam zakupy.","ru":"Сначала работала, потом сделала покупки.",
      "words":[["Najpierw","сначала"],["zrobiłam zakupy","сделала покупки"]]},
     {"who":"A","name":"Anna","side":"left","en":"Wieczorem czytałam książkę, ale jej nie przeczytałam.","ru":"Вечером читала книгу, но не дочитала её.",
      "words":[["czytałam","я читала"],["nie przeczytałam","не прочитала"]]},
     {"who":"K","name":"pan Kowalski","side":"right","en":"Znam to. W końcu zawsze zasypiam na trzeciej stronie.","ru":"Знакомо. В итоге я всегда засыпаю на третьей странице.",
      "words":[["W końcu","в итоге"],["zasypiam","засыпаю"]]}
   ]
 },
 "scene":{
   "intro":"И совсем короткая сценка на «ты» — та же неделя между ровесниками. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Co robiłeś wczoraj wieczorem?","ru":"Что ты делал вчера вечером?"},
     {"who":"B","en":"Gotowałem kolację, potem oglądałem film.","ru":"Готовил ужин, потом смотрел фильм."},
     {"who":"A","en":"Obejrzałeś do końca?","ru":"Досмотрел до конца?"},
     {"who":"B","en":"Nie. Zasnąłem po godzinie.","ru":"Нет. Уснул через час."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать опор недели — те, что понадобятся уже завтра.",
   "items":[
     {"en":"byłem / byłam","ru":"я был / я была","ex":"Latem byłam nad morzem."},
     {"en":"byliśmy / byłyśmy","ru":"мы были (есть мужчина / только женщины)","ex":"Byliśmy w górach z bratem."},
     {"en":"oni byli / one były","ru":"они были","ex":"Dzieci były w domu."},
     {"en":"Co pan robił? / Co pani robiła?","ru":"Что Вы делали? (вежливо)","ex":"Co pani robiła latem?"},
     {"en":"szedłem / szłam","ru":"я шёл / я шла","ex":"Szłam pieszo dwadzieścia minut."},
     {"en":"nie mogłem / nie mogłam","ru":"я не мог / не могла","ex":"Nie mogłem przyjść."},
     {"en":"musiałem / musiałam","ru":"мне пришлось","ex":"Musiałam pracować w sobotę."},
     {"en":"robić / zrobić","ru":"делать / сделать","ex":"W końcu zrobiłem wszystko."},
     {"en":"czytać / przeczytać","ru":"читать / прочитать","ex":"Czytałam, ale nie przeczytałam."},
     {"en":"cały dzień","ru":"весь день","ex":"Cały dzień sprzątałem."},
     {"en":"najpierw / potem / w końcu","ru":"сначала / потом / в конце концов","ex":"Najpierw kawa, potem praca."},
     {"en":"Jak minął ci dzień?","ru":"Как прошёл твой день?","ex":"Jak minął ci dzień? — Dobrze."}
   ]
 },
 "drag":{
   "intro":"Финальная игра недели: перетащи польскую форму к её значению.",
   "pairs":[["byłyśmy","мы были — только женщины"],["pani była","Вы были — вежливо, к женщине"],["napisałem list","я написал письмо"],["cały dzień pisałem","весь день я писал"]]
 },
 "reading":{
   "intro":"Прочитай и послушай итоговый текст недели — в нём собрано почти всё, что ты теперь умеешь.",
   "title":"Tydzień Anny i Marka",
   "sentences":["Latem Anna była nad morzem.","Byłyśmy tam z siostrą trzy tygodnie — mówi Anna.","Rano pływały, po południu zwiedzały stare miasto.","Marek nie mógł nigdzie pojechać.","Musiał pracować całe lato.","Miał tylko jeden tydzień w górach.","Chodzili tam z bratem po szlakach i jedli kanapki na szczycie.","Wczoraj Anna wstała o siódmej.","Najpierw zjadła śniadanie, potem poszła do pracy.","Cały dzień pisała raport, ale go nie napisała.","Wieczorem czytała książkę i w końcu zasnęła.","Dzień był długi, ale udany."],
   "translation":"Летом Анна была на море. «Мы были там с сестрой три недели», — говорит Анна. Утром они плавали, днём осматривали старый город. Марек никуда не смог поехать. Ему пришлось работать всё лето. У него была только одна неделя в горах. Они ходили там с братом по тропам и ели бутерброды на вершине. Вчера Анна встала в семь. Сначала позавтракала, потом пошла на работу. Весь день писала отчёт, но не написала его. Вечером читала книгу и в конце концов уснула. День был длинный, но удачный."
 },
 "quiz":{
   "intro":"Маленький экзамен недели — восемь вопросов. Порог мягкий, а правило всегда рядом. 💛",
   "items":[
     {"q":"1. Анна о себе: «Летом я работала» —","opts":["Latem pracowałem","Latem pracowałam","Latem pracowała"],"answer":1,
      "explain":"Женщина о себе — <b>pracowałam</b>. Pracowała — «она работала»."},
     {"q":"2. Вежливо к мужчине: «Где Вы были?» —","opts":["Gdzie pan byli?","Gdzie pan byłeś?","Gdzie pan był?"],"answer":2,
      "explain":"pan берёт форму третьего лица: <b>Gdzie pan był?</b>"},
     {"q":"3. Анна и Ева о себе: «Мы были в горах» —","opts":["Byłyśmy w górach","Byłyście w górach","Byliśmy w górach"],"answer":0,
      "explain":"Только женщины → <b>byłyśmy</b>. Byłyście — «вы были»."},
     {"q":"4. «Дети были в парке» —","opts":["Dzieci były w parku","Dzieci byliśmy w parku","Dzieci byli w parku"],"answer":0,
      "explain":"Слово <b>dzieci</b> идёт с формой one: <b>były</b>."},
     {"q":"5. «Я не мог прийти» —","opts":["Nie mógłem przyjść","Nie mogłem przyjść","Nie mogli przyjść"],"answer":1,
      "explain":"Для «я» — <b>mogłem</b>; ó живёт только в форме mógł."},
     {"q":"6. «Весь вечер я убирала» —","opts":["Cały wieczór sprzątam","Cały wieczór posprzątałam","Cały wieczór sprzątałam"],"answer":2,
      "explain":"<b>Cały wieczór</b> — длительность → несовершенный вид: sprzątałam."},
     {"q":"7. «Я уже купил хлеб» —","opts":["Już kupię chleb","Już kupowałem chleb","Już kupiłem chleb"],"answer":2,
      "explain":"«Уже» здесь про результат → <b>kupiłem</b>. Kupię значит «куплю»."},
     {"q":"8. «Сначала я позавтракал, потом пошёл на работу» —","opts":["Najpierw zjadłem śniadanie, potem poszedłem do pracy","Później zjadłem śniadanie, potem poszedłem do pracy","W końcu zjadłem śniadanie, potem poszedłem do pracy"],"answer":0,
      "explain":"Первое событие цепочки — <b>najpierw</b>."}
   ]
 },
 "essay":{
   "intro":"Финал недели: собери всё вместе — лето, компанию и один конкретный день.",
   "prompt":"Напиши 6–8 предложений: где ты был(а) летом и с кем, что делал(а) там, а потом расскажи про один вчерашний или недавний день с коннекторами.",
   "hint":"Схема: Latem był(e/a)m… Byliśmy / Byłyśmy z… Rano… po południu… Wczoraj najpierw… potem… w końcu… 💛",
   "example":"Latem byłam nad morzem. Byłyśmy tam z siostrą dwa tygodnie. Rano pływałyśmy, po południu zwiedzałyśmy miasto, wieczorem dużo rozmawiałyśmy. Wczoraj wstałam o siódmej. Najpierw zjadłam śniadanie, potem poszłam do pracy. Cały dzień pisałam raport, ale go nie napisałam. W końcu zasnęłam o jedenastej. Dzień był długi, ale udany."
 }
},

"8": {
 "day":8,"week":"02",
 "themeRu":"Буду делать",
 "themeEn":"Czas przyszły złożony",
 "intro":"Осень на пороге, и у Анны с Мареком уже полно планов. Чтобы рассказать о них, польскому нужны два разных будущих времени — сегодня берём первое, длинное: <b>będę robić</b>. У него есть двойник, <b>będę robił</b>, которого русский язык повторить не умеет: «буду делала» не скажешь. А поляк скажет — и даже чаще.",
 "introAudio":"Осень на пороге, и у Анны с Мареком уже полно планов. Чтобы рассказать о них, польскому нужны два разных будущих времени. Сегодня берём первое, длинное: będę robić. У него есть двойник, będę robił, которого русский язык повторить не умеет: «буду делала» не скажешь. А поляк скажет — и даже чаще.",
 "goals":[
   "Спрягать <b>być</b> в будущем: będę, będziesz, będzie, będziemy, będziecie, będą",
   "Строить будущее двумя способами: <b>będę robić</b> и <b>będę robił / robiła</b>",
   "Помнить, что после będę живёт только несовершенный вид",
   "Рассказать о планах: jutro, w przyszłym tygodniu, jesienią"
 ],
 "learned":[
   "Проспрягал(а) być в будущем: będę, będziesz, będzie, będziemy, będziecie, będą",
   "Построил(а) будущее двумя способами: będę robić и będę robił / robiła",
   "Запомнил(а), что после będę живёт только несовершенный вид",
   "Рассказал(а) о планах: jutro, w przyszłym tygodniu, jesienią"
 ],
 "review":{
   "intro":"Утренний круг: вчера мы собрали всю первую неделю — прошедшее время по родам и числам и вид глагола. Вид я буду спрашивать каждый день до конца уровня, он того стоит.",
   "introAudio":"Утренний круг: вчера мы собрали всю первую неделю — прошедшее время по родам и числам и вид глагола. Вид я буду спрашивать каждый день до конца уровня, он того стоит.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто говорит.",
      "q":"Марек о себе: «Вчера я был дома» —","opts":["Wczoraj byłam w domu","Wczoraj byłem w domu","Wczoraj byłeś w domu"],"answer":1,
      "explain":"Мужчина о себе — <b>byłem</b>. Byłam сказала бы женщина, byłeś — это «ты был»."},
     {"type":"choice","howto":"<b>Что делать:</b> смотри на слова «весь вечер».",
      "q":"«Весь вечер я читал книгу» — какая форма?","opts":["Cały wieczór czytałem książkę","Cały wieczór przeczytałem książkę","Cały wieczór będę czytać książkę"],"answer":0,
      "explain":"<b>Cały wieczór</b> — это про процесс, значит несовершенный вид: czytałem. Przeczytałem сказало бы, что книга дочитана."},
     {"type":"choice","howto":"<b>Что делать:</b> в компании есть мужчина.",
      "q":"Анна и Марек вместе: «Мы были в Кракове» —","opts":["Byłyśmy w Krakowie","Byliśmy w Krakowie","Byliście w Krakowie"],"answer":1,
      "explain":"Есть мужчина — значит мужско-личная форма <b>byliśmy</b>. Byłyśmy сказали бы только женщины, byliście — это «вы были»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Письмо дописано — значит совершенный вид.",
      "q":"Собери (мужчина о себе): <b>«Вчера я написал письмо»</b>","answer":"Wczoraj napisałem list"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Będę",
    "title":"<em>Być</em> в будущем времени",
    "paras":[
      "Всё длинное будущее держится на одном глаголе — <b>być</b> в будущем. Шесть форм, и первая уже встречалась в A1: <b>będę, będziesz, będzie, będziemy, będziecie, będą</b>.",
      "Сам по себе он уже значит «буду»: <b>Jutro będę w domu</b> — «завтра я буду дома». <b>Jesienią będziemy w Krakowie</b> — «осенью мы будем в Кракове». Никакого второго глагола не нужно.",
      "Проверь произношение: <b>będę</b> [бэ́ндэ] — первое ę перед d даёт носовое «эн», а конечное читается просто «э». <b>Będzie</b> [бэ́ньдзе], а <b>będą</b> [бэ́ндом] — конечное ą всегда звучит как «ом»."
    ],
    "audio":"Всё длинное будущее держится на одном глаголе — być в будущем. Шесть форм, и первая уже встречалась в A1: będę, będziesz, będzie, będziemy, będziecie, będą. Сам по себе он уже значит «буду»: jutro będę w domu — завтра я буду дома. Jesienią będziemy w Krakowie — осенью мы будем в Кракове. Никакого второго глагола не нужно. Проверь произношение: będę звучит как бэндэ — первое носовое ę перед d даёт эн, а конечное читается просто э. Będzie — бэньдзе, a będą — бэндом: конечное ą всегда звучит как ом.",
    "table":{"rows":[
      ["ja → <b>będę</b> <button class=\"play\" data-say=\"będę\">🔊</button>","я буду [бэ́ндэ]"],
      ["ty → <b>będziesz</b> <button class=\"play\" data-say=\"będziesz\">🔊</button>","ты будешь"],
      ["on / ona → <b>będzie</b> <button class=\"play\" data-say=\"będzie\">🔊</button>","он / она будет [бэ́ньдзе]"],
      ["my → <b>będziemy</b>","мы будем"],
      ["wy → <b>będziecie</b>","вы будете"],
      ["oni / one → <b>będą</b> <button class=\"play\" data-say=\"będą\">🔊</button>","они будут [бэ́ндом]"]
    ],"star":0},
    "examples":[
      {"ru":"Завтра я буду дома.","en":"Jutro <b>będę</b> w domu.","say":"Jutro będę w domu."},
      {"ru":"Ты будешь в Варшаве?","en":"Czy <b>będziesz</b> w Warszawie?","say":"Czy będziesz w Warszawie?"},
      {"ru":"Осенью мы будем в Кракове.","en":"Jesienią <b>będziemy</b> w Krakowie.","gloss":"jesienią — осенью","say":"Jesienią będziemy w Krakowie."},
      {"ru":"Они будут здесь в семь.","en":"<b>Będą</b> tu o siódmej.","say":"Będą tu o siódmej."}
    ],
    "mistakes":[
      {"wrong":"Jutro będę w dom.","right":"Jutro będę <b>w domu</b>.","why":"После w слово встаёт в miejscownik — это правило A1 никуда не делось, будущее время его не отменяет."},
      {"wrong":"Ona będę w domu.","right":"Ona <b>będzie</b> w domu.","why":"Форма выбирается по лицу: о ней — będzie."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> определи лицо.",
       "q":"«Мы будем в Кракове» —","opts":["Będziemy w Krakowie","Będziecie w Krakowie","Będą w Krakowie"],"answer":0,
       "explain":"«Мы» — <b>będziemy</b>. Będziecie значит «вы будете», będą — «они будут»."},
      {"type":"choice","q":"Какая форма значит «они будут»?","opts":["będzie","będą","będziecie"],"answer":1,
       "explain":"<b>Będą</b> — «они будут», читается [бэ́ндом]."},
      {"type":"type","howto":"Напиши «Завтра я буду дома». Диакритику можно не ставить.",
       "q":"Завтра я буду дома.","accept":["jutro będę w domu","jutro bede w domu","będę jutro w domu","bede jutro w domu"],"placeholder":"Jutro…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Первый способ",
    "title":"<em>Będę</em> + словарная форма глагола",
    "paras":[
      "Чтобы сказать «буду что-то делать», после <b>będę</b> ставят глагол в словарной форме: <b>Będę pracować</b> — «буду работать», <b>Będziesz czytać</b> — «будешь читать». Слово в слово как по-русски, порядок тот же.",
      "Обрати внимание: спрягается только <b>będę</b>, второй глагол остаётся неподвижным. Лицо и число живут в первом слове — во втором их отмечать нечем.",
      "Порядок слов свободный: <b>Jutro będę pracować</b> и <b>Będę jutro pracować</b> одинаково хороши. Возвратное się тоже гуляет: <b>Będę się uczyć</b> и <b>Będę uczyć się</b> — обе фразы живые, первая привычнее."
    ],
    "audio":"Чтобы сказать «буду что-то делать», после będę ставят глагол в словарной форме: będę pracować — буду работать, będziesz czytać — будешь читать. Слово в слово как по-русски, порядок тот же. Обрати внимание: спрягается только będę, второй глагол остаётся неподвижным. Лицо и число живут в первом слове. Порядок слов свободный: jutro będę pracować и będę jutro pracować одинаково хороши. Возвратное się тоже гуляет: będę się uczyć и będę uczyć się — обе фразы живые, первая привычнее.",
    "table":{"rows":[
      ["Będę pracować. <button class=\"play\" data-say=\"Będę pracować.\">🔊</button>","буду работать"],
      ["Będziesz czytać?","будешь читать?"],
      ["On będzie się uczyć.","он будет учиться"],
      ["Będziemy odpoczywać. <button class=\"play\" data-say=\"Będziemy odpoczywać.\">🔊</button>","будем отдыхать"],
      ["Oni będą mieszkać w Krakowie.","они будут жить в Кракове"]
    ],"star":0},
    "examples":[
      {"ru":"Завтра я буду работать.","en":"Jutro <b>będę pracować</b>.","say":"Jutro będę pracować."},
      {"ru":"Что ты будешь делать осенью?","en":"Co <b>będziesz robić</b> jesienią?","say":"Co będziesz robić jesienią?"},
      {"ru":"Мы будем отдыхать.","en":"<b>Będziemy odpoczywać.</b>","say":"Będziemy odpoczywać."},
      {"ru":"Он будет учить итальянский.","en":"On <b>będzie się uczyć</b> włoskiego.","gloss":"uczyć się требует родительного — об этом на дне 10","say":"On będzie się uczyć włoskiego."}
    ],
    "mistakes":[
      {"wrong":"Będę pracuję.","right":"<b>Będę pracować.</b>","why":"Второй глагол не спрягается — он стоит в словарной форме. Лицо уже отмечено в będę."},
      {"wrong":"Ja będę praca.","right":"Ja <b>będę pracować</b>.","why":"Praca — это существительное «работа». Нужен глагол: pracować."}
    ],
    "mnemonic":"🕰️ Спрягается только będę. Второй глагол остаётся в словарной форме — как в русском «буду читать».",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь второй глагол.",
       "q":"«Я буду читать» —","opts":["Będę czytam","Będę czytać","Będę czytania"],"answer":1,
       "explain":"После będę — словарная форма: <b>będę czytać</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Завтра я буду работать»</b>","answer":"Jutro będę pracować"},
      {"type":"type","howto":"Спроси «Что ты будешь делать завтра?». Диакритику можно не ставить.",
       "q":"Что ты будешь делать завтра?","accept":["co będziesz robić jutro","co bedziesz robic jutro","co jutro będziesz robić","co jutro bedziesz robic"],"placeholder":"Co będziesz…"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Второй способ",
    "title":"<em>Będę robił, będę robiła</em> — то, чего русский не умеет",
    "paras":[
      "А теперь главное открытие дня. Рядом с <b>będę pracować</b> живёт <b>będę pracował</b> (говорит мужчина) и <b>będę pracowała</b> (говорит женщина). Значение то же самое: «буду работать». Обе формы нормативны, и в живой речи л-форма звучит даже чаще инфинитива.",
      "Вторая часть — та самая л-форма из прошедшего времени первой недели, но <b>без личных окончаний</b>: pracował, pracowała, pracowali, pracowały. Лицо уже сидит в będę — второй раз его не отмечают. Поэтому «będę pracowałam» невозможно.",
      "Русское ухо здесь спотыкается, и это честно: «буду работала» — не фраза. В польском же это норма. Выбирай любой из двух способов, только не смешивай их в одном сказуемом."
    ],
    "audio":"А теперь главное открытие дня. Рядом с będę pracować живёт będę pracował, если говорит мужчина, и będę pracowała, если говорит женщина. Значение то же самое: буду работать. Обе формы нормативны, и в живой речи л-форма звучит даже чаще инфинитива. Вторая часть — та самая л-форма из прошедшего времени первой недели, но без личных окончаний: pracował, pracowała, pracowali, pracowały. Лицо уже сидит в będę, второй раз его не отмечают. Поэтому будэ працовалам — невозможная форма. Русское ухо здесь спотыкается, и это честно: «буду работала» не фраза. В польском же это норма. Выбирай любой из двух способов, только не смешивай их в одном сказуемом.",
    "table":{"rows":[
      ["(м) Będę pracował. / (ж) Będę pracowała. <button class=\"play\" data-say=\"Będę pracowała.\">🔊</button>","я буду работать"],
      ["(м) Będziesz pisał. / (ж) Będziesz pisała.","ты будешь писать"],
      ["On będzie czytał. / Ona będzie czytała.","он / она будет читать"],
      ["Będziemy czytali. / Będziemy czytały.","мы будем читать — с мужчиной / только женщины"],
      ["Oni będą czytali. / One będą czytały.","они будут читать"],
      ["❌ Będę pracowałam.","личное окончание тут лишнее"]
    ],"star":5},
    "examples":[
      {"ru":"Я буду работать (говорит Анна).","en":"<b>Będę pracowała.</b>","gloss":"= Będę pracować","say":"Będę pracowała."},
      {"ru":"Я буду работать (говорит Марек).","en":"<b>Będę pracował.</b>","say":"Będę pracował."},
      {"ru":"Она будет читать весь вечер.","en":"Ona <b>będzie czytała</b> cały wieczór.","say":"Ona będzie czytała cały wieczór."},
      {"ru":"Мы будем жить в Кракове.","en":"<b>Będziemy mieszkali</b> w Krakowie.","gloss":"в компании есть мужчина","say":"Będziemy mieszkali w Krakowie."}
    ],
    "mistakes":[
      {"wrong":"Będę pracowałam.","right":"Będę <b>pracowała</b>.","why":"Окончание -m уже живёт в będę. Л-форма после него идёт голой: pracowała."},
      {"wrong":"Ona będzie pracował.","right":"Ona będzie <b>pracowała</b>.","why":"Л-форма согласуется по роду с тем, о ком речь: об Анне — pracowała."}
    ],
    "mnemonic":"✌️ Два равных способа: będę robić = będę robił / robiła. Личное окончание к л-форме не клеится.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> говорит женщина, и нужен второй способ.",
       "q":"Анна о себе: «Завтра я буду работать» —","opts":["Jutro będę pracowała","Jutro będę pracowałam","Jutro będę pracował"],"answer":0,
       "explain":"Л-форма после będę идёт без личного окончания и согласуется по роду говорящей: <b>będę pracowała</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> ищи лишнее окончание.",
       "q":"Какая фраза невозможна?","opts":["Będę czytać","Będę czytał","Będę czytałem"],"answer":2,
       "explain":"<b>Będę czytałem</b> — лицо отмечено дважды. Правильно: będę czytał или będę czytać."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Говорит мужчина.",
       "q":"Собери: <b>«Вечером я буду читать»</b>","answer":"Wieczorem będę czytał"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Ограничение и маркеры",
    "title":"Только несовершенный вид — и когда это «потом»",
    "paras":[
      "Одно жёсткое ограничение: <b>będę</b> дружит только с несовершенным видом. <b>Będę robić</b>, <b>będę robił</b> — да. «Będę zrobić», «będę zrobił» — таких фраз не бывает вовсе.",
      "Проверь на родном языке: «буду сделать» тоже невозможно. Ограничение то же самое — просто по-польски его легче забыть, потому что robić и zrobić стоят в словаре рядом. Что делать с совершенным видом, разберём завтра: у него будущее устроено совсем иначе.",
      "И слова, при которых будущее звучит естественно: <b>jutro</b> (завтра), <b>pojutrze</b> (послезавтра), <b>w przyszłym tygodniu</b> (на следующей неделе), <b>w przyszłym roku</b> (в следующем году), <b>za tydzień</b> (через неделю), <b>jesienią</b> (осенью), <b>zimą</b> (зимой)."
    ],
    "audio":"Одно жёсткое ограничение: będę дружит только с несовершенным видом. Będę robić, będę robił — да. Będę zrobić, będę zrobił — таких фраз не бывает вовсе. Проверь на родном языке: «буду сделать» тоже невозможно. Ограничение то же самое, просто по-польски его легче забыть, потому что robić и zrobić стоят в словаре рядом. Что делать с совершенным видом, разберём завтра: у него будущее устроено совсем иначе. И слова, при которых будущее звучит естественно: jutro — завтра, pojutrze — послезавтра, w przyszłym tygodniu — на следующей неделе, w przyszłym roku — в следующем году, za tydzień — через неделю, jesienią — осенью, zimą — зимой.",
    "table":{"rows":[
      ["jutro / pojutrze <button class=\"play\" data-say=\"jutro, pojutrze\">🔊</button>","завтра / послезавтра"],
      ["w przyszłym tygodniu","на следующей неделе"],
      ["w przyszłym roku","в следующем году"],
      ["za tydzień / za miesiąc","через неделю / через месяц"],
      ["jesienią / zimą / wiosną / latem","осенью / зимой / весной / летом"],
      ["❌ będę zrobić","после będę — только несовершенный вид"]
    ],"star":5},
    "examples":[
      {"ru":"На следующей неделе я буду учиться.","en":"W przyszłym tygodniu <b>będę się uczyć</b>.","say":"W przyszłym tygodniu będę się uczyć."},
      {"ru":"Через неделю мы будем в Гданьске.","en":"<b>Za tydzień</b> będziemy w Gdańsku.","say":"Za tydzień będziemy w Gdańsku."},
      {"ru":"Осенью я буду ходить в бассейн.","en":"<b>Jesienią</b> będę chodzić na basen.","say":"Jesienią będę chodzić na basen."},
      {"ru":"Завтра я буду делать покупки.","en":"Jutro <b>będę robić zakupy</b>.","gloss":"процесс, несовершенный вид","say":"Jutro będę robić zakupy."}
    ],
    "mistakes":[
      {"wrong":"Jutro będę zrobić zakupy.","right":"Jutro <b>będę robić</b> zakupy.","why":"Совершенный вид с będę не сочетается. Как и русское «буду сделать»."},
      {"wrong":"W przyszły tydzień będę pracować.","right":"<b>W przyszłym tygodniu</b> będę pracować.","why":"После w в значении «когда» — miejscownik: w przyszłym tygodniu."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь вид второго глагола.",
       "q":"Какая фраза невозможна?","opts":["Będę czytać","Będę przeczytać","Będę czytała"],"answer":1,
       "explain":"Przeczytać — совершенный вид, а с będę идёт только несовершенный. Правильно: będę czytać."},
      {"type":"choice","howto":"<b>Что делать:</b> проверь форму после w.",
       "q":"«На следующей неделе я буду учиться» —","opts":["W przyszłym tygodniu będę się uczyć","W przyszły tydzień będę się uczyć","W przyszłym tygodniu będę się nauczyć"],"answer":0,
       "explain":"После w — miejscownik (w przyszłym tygodniu), а после będę — несовершенный вид (uczyć się)."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Jutro będę pracować.","sub":"завтра я буду работать","want":"Jutro będę pracować."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек строят планы на осень. Тапни по строке, чтобы увидеть перевод, и нажми на подсвеченное слово.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Co będziesz robić jesienią?","ru":"Что ты будешь делать осенью?",
      "words":[["będziesz robić","будешь делать"],["jesienią","осенью"]]},
     {"who":"M","name":"Marek","side":"right","en":"Będę się uczył włoskiego. A ty?","ru":"Буду учить итальянский. А ты?",
      "words":[["Będę się uczył","буду учиться (л-форма)"],["włoskiego","итальянскому"]]},
     {"who":"A","name":"Anna","side":"left","en":"Ja będę chodzić na basen. Dwa razy w tygodniu.","ru":"А я буду ходить в бассейн. Два раза в неделю.",
      "words":[["będę chodzić","буду ходить"],["dwa razy w tygodniu","два раза в неделю"]]},
     {"who":"M","name":"Marek","side":"right","en":"A w listopadzie? Będziesz w Warszawie?","ru":"А в ноябре? Будешь в Варшаве?",
      "words":[["w listopadzie","в ноябре"]]},
     {"who":"A","name":"Anna","side":"left","en":"Będę. Będziemy tam pracować cały tydzień.","ru":"Буду. Мы будем там работать всю неделю.",
      "words":[["Będziemy","мы будем"],["cały tydzień","всю неделю"]]},
     {"who":"M","name":"Marek","side":"right","en":"To świetnie. Będę do ciebie pisał.","ru":"Отлично. Буду тебе писать.",
      "words":[["Będę pisał","буду писать (л-форма)"],["do ciebie","тебе"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — послушай, как оба способа стоят рядом.",
   "lines":[
     {"who":"A","en":"Co będziesz robić jutro?","ru":"Что будешь делать завтра?"},
     {"who":"B","en":"Będę pracować. A wieczorem będę czytał.","ru":"Буду работать. А вечером буду читать."},
     {"who":"A","en":"Cały wieczór?","ru":"Весь вечер?"},
     {"who":"B","en":"Cały wieczór. Będzie spokojnie.","ru":"Весь вечер. Будет спокойно."},
     {"who":"A","en":"To ja będę odpoczywać.","ru":"Тогда я буду отдыхать."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — будущее и его спутники.",
   "items":[
     {"en":"będę / będziesz","ru":"я буду / ты будешь","ex":"Jutro będę w domu."},
     {"en":"będzie / będziemy","ru":"он будет / мы будем","ex":"Będziemy w Krakowie."},
     {"en":"będą","ru":"они будут","ex":"Będą tu o siódmej."},
     {"en":"będę robić = będę robił / robiła","ru":"буду делать (два способа)","ex":"Będę robiła zakupy."},
     {"en":"jutro / pojutrze","ru":"завтра / послезавтра","ex":"Pojutrze będę pracować."},
     {"en":"w przyszłym tygodniu","ru":"на следующей неделе","ex":"W przyszłym tygodniu będę się uczyć."},
     {"en":"w przyszłym roku","ru":"в следующем году","ex":"W przyszłym roku będziemy mieszkać w Gdańsku."},
     {"en":"za tydzień","ru":"через неделю","ex":"Za tydzień będę w Warszawie."},
     {"en":"jesienią / zimą","ru":"осенью / зимой","ex":"Jesienią będę chodzić na basen."},
     {"en":"odpoczywać","ru":"отдыхать","ex":"W weekend będziemy odpoczywać."},
     {"en":"basen","ru":"бассейн","ex":"Chodzę na basen."},
     {"en":"cały tydzień","ru":"всю неделю","ex":"Będziemy tam pracować cały tydzień."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу.",
   "pairs":[["Będę pracować","буду работать"],["Będziesz czytał","ты будешь читать"],["Będziemy odpoczywać","мы будем отдыхать"],["Za tydzień","через неделю"]]
 },
 "reading":{
   "intro":"Прочитай вслух план Анны на осень. Заметь, где инфинитив, а где л-форма — значение одно и то же.",
   "title":"Moja jesień",
   "sentences":["Jesienią będę dużo pracować.","W przyszłym tygodniu będę w Warszawie.","Będę tam pracowała cały tydzień.","Potem będę odpoczywać.","Marek będzie się uczył włoskiego.","On będzie chodził na kurs w każdą środę.","Ja będę chodzić na basen.","W przyszłym roku będziemy mieszkać w Krakowie.","Za miesiąc będzie zimno.","Ale będzie pięknie.","A ty? Co będziesz robić jesienią?"],
   "translation":"Осенью я буду много работать. На следующей неделе я буду в Варшаве. Я буду там работать всю неделю. Потом буду отдыхать. Марек будет учить итальянский. Он будет ходить на курс каждую среду. А я буду ходить в бассейн. В следующем году мы будем жить в Кракове. Через месяц будет холодно. Но будет красиво. А ты? Что ты будешь делать осенью?"
 },
 "quiz":{
   "intro":"Пять вопросов — и день закрыт.",
   "items":[
     {"q":"1. «Мы будем в Кракове» —","opts":["Będziemy w Krakowie","Będziecie w Krakowie","Będą w Krakowie"],"answer":0,
      "explain":"«Мы» — <b>będziemy</b>."},
     {"q":"2. «Я буду читать» —","opts":["Będę czytam","Będę czytać","Będę czytania"],"answer":1,
      "explain":"После będę глагол стоит в словарной форме: <b>będę czytać</b>."},
     {"q":"3. Анна о себе: «Завтра я буду работать» (л-формой) —","opts":["Jutro będę pracowałam","Jutro będę pracowała","Jutro będę pracował"],"answer":1,
      "explain":"Л-форма идёт без личного окончания и по роду говорящей: <b>będę pracowała</b>."},
     {"q":"4. Какая фраза невозможна?","opts":["Będę czytać","Będę przeczytać","Będę czytała"],"answer":1,
      "explain":"С będę сочетается только несовершенный вид. Przeczytać — совершенный."},
     {"q":"5. «На следующей неделе» —","opts":["w przyszły tydzień","w przyszłym tygodniu","za przyszły tydzień"],"answer":1,
      "explain":"После w — miejscownik: <b>w przyszłym tygodniu</b>."}
   ]
 },
 "essay":{
   "intro":"Теперь твоя очередь — три-четыре фразы о будущем.",
   "prompt":"Напиши, что ты будешь делать на следующей неделе и осенью.",
   "hint":"Опора: W przyszłym tygodniu będę… Jesienią będę… Попробуй один раз инфинитив, один раз л-форму. 💛",
   "example":"W przyszłym tygodniu będę dużo pracować. Wieczorem będę czytał. Jesienią będę się uczyć polskiego. W przyszłym roku będziemy mieszkać w Krakowie."
 }
},
"9": {
 "day":9,"week":"02",
 "themeRu":"Сделаю",
 "themeEn":"Czas przyszły prosty",
 "intro":"Есть будущее длинное, а есть короткое. Вчерашнее <b>będę robić</b> занимает два слова, сегодняшнее — одно: <b>zrobię</b>, «сделаю». И тут польский ничего не изобретает: он делает ровно то же, что твой родной язык, — берёт совершенный глагол, ставит его в настоящее время, и получается будущее.",
 "introAudio":"Есть будущее длинное, а есть короткое. Вчерашнее będę robić занимает два слова, сегодняшнее — одно: zrobię, «сделаю». И тут польский ничего не изобретает: он делает ровно то же, что твой родной язык — берёт совершенный глагол, ставит его в настоящее время, и получается будущее.",
 "goals":[
   "Строить простое будущее от совершенного вида: zrobię, napiszę, kupię, przeczytam",
   "Понимать, почему у совершенного вида нет настоящего времени",
   "Выбирать между <b>będę robić</b> и <b>zrobię</b> по смыслу",
   "Договариваться о делах: Zadzwonię wieczorem, Przyjdę o siódmej"
 ],
 "learned":[
   "Построил(а) простое будущее от совершенного вида: zrobię, napiszę, kupię, przeczytam",
   "Понял(а), почему у совершенного вида нет настоящего времени",
   "Выбрал(а) между będę robić и zrobię по смыслу",
   "Договорился(лась) о делах: Zadzwonię wieczorem, Przyjdę o siódmej"
 ],
 "review":{
   "intro":"Сначала вчерашнее длинное будущее — и, как всегда, вид глагола.",
   "introAudio":"Сначала вчерашнее длинное будущее — и, как всегда, вид глагола.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> лицо уже отмечено в первом слове.",
      "q":"Анна о себе: «Завтра я буду работать» —","opts":["Jutro będę pracowała","Jutro będę pracowałam","Jutro jestem pracować"],"answer":0,
      "explain":"Л-форма после będę идёт без личного окончания: <b>będę pracowała</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> проверь вид второго глагола.",
      "q":"Какая фраза невозможна?","opts":["Będę czytać","Będę czytał","Będę przeczytać"],"answer":2,
      "explain":"С będę сочетается только несовершенный вид — как и русское «буду сделать» не говорят."},
     {"type":"choice","q":"«Они будут» —","opts":["będzie","będą","będziemy"],"answer":1,
      "explain":"<b>Będą</b> — «они будут». Będzie — «он будет», będziemy — «мы будем»."},
     {"type":"type","howto":"Напиши «Осенью мы будем в Кракове». Диакритику можно не ставить.",
      "q":"Осенью мы будем в Кракове.","accept":["jesienią będziemy w krakowie","jesienia bedziemy w krakowie","jesienią bedziemy w krakowie"],"placeholder":"Jesienią…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Главная механика",
    "title":"У совершенного вида нет настоящего времени",
    "paras":[
      "Возьми русский глагол «сделаю». По форме это настоящее время — те же окончания, что у «делаю». А по смыслу — будущее, и никто не путается. Причина простая: у совершенного вида настоящего времени не бывает вовсе, поэтому форма свободна и занята будущим.",
      "Польский устроен точно так же. <b>Robię</b> — «делаю», <b>zrobię</b> — «сделаю». <b>Piszę</b> — «пишу», <b>napiszę</b> — «напишу». Никаких вспомогательных слов, одно слово на всё будущее.",
      "Это значит, что вся первая неделя работает на тебя: если ты знаешь видовую пару, ты уже знаешь два будущих. Несовершенный даёт <b>będę robić</b>, совершенный — <b>zrobię</b>."
    ],
    "audio":"Возьми русский глагол «сделаю». По форме это настоящее время — те же окончания, что у «делаю». А по смыслу будущее, и никто не путается. Причина простая: у совершенного вида настоящего времени не бывает вовсе, поэтому форма свободна и занята будущим. Польский устроен точно так же. Robię — делаю, zrobię — сделаю. Piszę — пишу, napiszę — напишу. Никаких вспомогательных слов, одно слово на всё будущее. Это значит, что вся первая неделя работает на тебя: если знаешь видовую пару, ты уже знаешь два будущих.",
    "table":{"rows":[
      ["robię → <b>zrobię</b> <button class=\"play\" data-say=\"robię, zrobię\">🔊</button>","делаю → сделаю"],
      ["piszę → <b>napiszę</b> <button class=\"play\" data-say=\"piszę, napiszę\">🔊</button>","пишу → напишу"],
      ["czytam → <b>przeczytam</b>","читаю → прочитаю"],
      ["kupuję → <b>kupię</b>","покупаю → куплю"],
      ["jem → <b>zjem</b>","ем → съем"],
      ["idę → <b>pójdę</b>","иду → пойду"]
    ],"star":0},
    "examples":[
      {"ru":"Я сделаю это завтра.","en":"<b>Zrobię</b> to jutro.","say":"Zrobię to jutro."},
      {"ru":"Я напишу письмо.","en":"<b>Napiszę</b> list.","say":"Napiszę list."},
      {"ru":"Куплю хлеб.","en":"<b>Kupię</b> chleb.","say":"Kupię chleb."},
      {"ru":"Вечером я прочитаю эту книгу.","en":"Wieczorem <b>przeczytam</b> tę książkę.","say":"Wieczorem przeczytam tę książkę."}
    ],
    "mistakes":[
      {"wrong":"Będę zrobię to jutro.","right":"<b>Zrobię</b> to jutro.","why":"Совершенному виду вспомогательное będę не нужно: форма уже сама по себе будущее."},
      {"wrong":"Cały dzień zrobię zakupy.","right":"Cały dzień <b>będę robić</b> zakupy.","why":"«Целый день» — это процесс, а zrobię говорит о готовом результате."}
    ],
    "mnemonic":"⚡ Zrobię = «сделаю». Форма настоящего, смысл будущего — ровно как в родном языке.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни видовую пару.",
       "q":"«Сделаю» —","opts":["będę robić","zrobię","będę zrobić"],"answer":1,
       "explain":"Совершенный вид даёт короткое будущее: <b>zrobię</b>."},
      {"type":"choice","q":"«Напишу» —","opts":["będę pisać","napiszę","będę napisać"],"answer":1,
       "explain":"<b>Napiszę</b> — одно слово, готовый результат. Będę pisać значит «буду писать»."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Сделаю это завтра»</b>","answer":"Zrobię to jutro"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Спряжение",
    "title":"Приставка не меняет ничего",
    "paras":[
      "Хорошая новость: совершенный глагол спрягается ровно как его несовершенный близнец. Знаешь <b>robię, robisz, robi</b> — знаешь и <b>zrobię, zrobisz, zrobi, zrobimy, zrobicie, zrobią</b>. Приставка приклеилась спереди и на окончания не влияет.",
      "То же с остальными: pisać → piszę даёт napisać → <b>napiszę, napiszesz, napisze, napiszemy, napiszecie, napiszą</b>. Czytać → czytam даёт przeczytać → <b>przeczytam, przeczytasz, przeczyta, przeczytamy, przeczytacie, przeczytają</b>.",
      "Пара kupować / kupić устроена без приставки — она различается суффиксом, как русское «покупаю / куплю». Настоящее время у неё <b>kupuję</b>, а будущее — <b>kupię, kupisz, kupi, kupimy, kupicie, kupią</b>. Формы похожи, но живут в разных временах: смотри на -uj-."
    ],
    "audio":"Хорошая новость: совершенный глагол спрягается ровно как его несовершенный близнец. Знаешь robię, robisz, robi — знаешь и zrobię, zrobisz, zrobi, zrobimy, zrobicie, zrobią. Приставка приклеилась спереди и на окончания не влияет. То же с остальными: pisać даёт piszę, значит napisać даёт napiszę, napiszesz, napisze, napiszemy, napiszecie, napiszą. Czytać даёт czytam, значит przeczytać даёт przeczytam, przeczytasz, przeczyta. Пара kupować и kupić устроена без приставки, она различается суффиксом, как русское «покупаю и куплю». Настоящее время у неё kupuję, а будущее kupię, kupisz, kupi. Формы похожи, но живут в разных временах: смотри на суффикс -uj-.",
    "table":{"rows":[
      ["zrobić → zrobię, zrobisz, zrobi <button class=\"play\" data-say=\"zrobię, zrobisz, zrobi\">🔊</button>","как robić"],
      ["napisać → napiszę, napiszesz, napisze","как pisać"],
      ["przeczytać → przeczytam, przeczytasz, przeczyta","как czytać"],
      ["kupić → kupię, kupisz, kupi","а kupuję — это настоящее время"],
      ["zjeść → zjem, zjesz, zje","как jeść"],
      ["pójść → pójdę, pójdziesz, pójdzie","как iść"]
    ],"star":3},
    "examples":[
      {"ru":"Что ты сделаешь завтра?","en":"Co <b>zrobisz</b> jutro?","say":"Co zrobisz jutro?"},
      {"ru":"Мы купим хлеб и молоко.","en":"<b>Kupimy</b> chleb i mleko.","say":"Kupimy chleb i mleko."},
      {"ru":"Они прочитают это письмо.","en":"Oni <b>przeczytają</b> ten list.","say":"Oni przeczytają ten list."},
      {"ru":"Я съем что-нибудь позже.","en":"<b>Zjem</b> coś później.","say":"Zjem coś później."},
      {"ru":"Вечером я пойду в кино.","en":"Wieczorem <b>pójdę</b> do kina.","say":"Wieczorem pójdę do kina."}
    ],
    "mistakes":[
      {"wrong":"Jutro kupuję chleb.","right":"Jutro <b>kupię</b> chleb.","why":"Kupuję — настоящее время, «покупаю». Про завтра нужен совершенный вид: kupię."},
      {"wrong":"Zrobiem to jutro.","right":"<b>Zrobię</b> to jutro.","why":"Окончание берём у robić: robię — zrobię."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> найди пару к robisz.",
       "q":"«Что ты сделаешь?» —","opts":["Co robisz?","Co zrobisz?","Co będziesz zrobić?"],"answer":1,
       "explain":"<b>Co zrobisz?</b> — «что ты сделаешь?». Co robisz? значит «что ты делаешь?»."},
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на суффикс -uj-.",
       "q":"«Завтра я куплю хлеб» —","opts":["Jutro kupuję chleb","Jutro kupię chleb","Jutro będę kupić chleb"],"answer":1,
       "explain":"Kupuję — это «покупаю», настоящее время. Будущее совершенного вида — <b>kupię</b>."},
      {"type":"type","howto":"Напиши «Я напишу письмо». Диакритику можно не ставить.",
       "q":"Я напишу письмо.","accept":["napiszę list","napisze list"],"placeholder":"Napiszę…"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Выбор",
    "title":"<em>Będę czytać</em> или <em>przeczytam</em>?",
    "paras":[
      "Выбор ровно тот же, что ты делаешь на родном языке не задумываясь. <b>Będę czytać</b> — «буду читать»: процесс, длительность, повтор. <b>Przeczytam</b> — «прочитаю»: один раз, до конца, с результатом.",
      "Слова-подсказки помогают. За процесс говорят <b>cały dzień</b> (весь день), <b>cały wieczór</b>, <b>codziennie</b> (каждый день), <b>często</b> (часто), <b>długo</b> (долго). За результат — <b>do końca</b> (до конца), <b>wreszcie</b> (наконец), <b>za godzinę</b> (через час), а также любое разовое дело.",
      "Сравни две пары и почувствуй разницу: <b>Wieczorem będę czytać książkę</b> — вечером я буду читать книгу. <b>Wieczorem przeczytam tę książkę</b> — вечером я прочитаю эту книгу. По-русски то же самое противопоставление, теми же средствами."
    ],
    "audio":"Выбор ровно тот же, что ты делаешь на родном языке не задумываясь. Będę czytać — буду читать: процесс, длительность, повтор. Przeczytam — прочитаю: один раз, до конца, с результатом. Слова-подсказки помогают. За процесс говорят cały dzień, cały wieczór, codziennie, często, długo. За результат — do końca, wreszcie, za godzinę, а также любое разовое дело. Сравни две пары: wieczorem będę czytać książkę — вечером я буду читать книгу. Wieczorem przeczytam tę książkę — вечером я прочитаю эту книгу. По-русски то же самое противопоставление, теми же средствами.",
    "table":{"rows":[
      ["Cały wieczór będę czytać. <button class=\"play\" data-say=\"Cały wieczór będę czytać.\">🔊</button>","весь вечер буду читать"],
      ["Wieczorem przeczytam tę książkę. <button class=\"play\" data-say=\"Wieczorem przeczytam tę książkę.\">🔊</button>","вечером прочитаю эту книгу"],
      ["W sobotę będę robić zakupy.","в субботу буду делать покупки"],
      ["W sobotę zrobię zakupy.","в субботу сделаю покупки"],
      ["Codziennie będę pisać.","каждый день буду писать"],
      ["Jutro napiszę list.","завтра напишу письмо"]
    ],"star":-1},
    "examples":[
      {"ru":"Весь день я буду работать.","en":"Cały dzień <b>będę pracować</b>.","gloss":"процесс","say":"Cały dzień będę pracować."},
      {"ru":"Я сделаю это за час.","en":"<b>Zrobię</b> to za godzinę.","gloss":"результат","say":"Zrobię to za godzinę."},
      {"ru":"Каждый день я буду учить польский.","en":"Codziennie <b>będę się uczyć</b> polskiego.","say":"Codziennie będę się uczyć polskiego."},
      {"ru":"Наконец я напишу это письмо.","en":"<b>Wreszcie napiszę</b> ten list.","say":"Wreszcie napiszę ten list."}
    ],
    "mistakes":[
      {"wrong":"Cały wieczór przeczytam książkę.","right":"Cały wieczór <b>będę czytać</b> książkę.","why":"«Весь вечер» — про длительность, а przeczytam говорит о законченном результате."},
      {"wrong":"Za godzinę będę robić to.","right":"Za godzinę <b>zrobię</b> to.","why":"«Через час» тут про готовый результат — нужен совершенный вид."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> смотри на «весь вечер».",
       "q":"«Весь вечер я буду читать» —","opts":["Cały wieczór będę czytać","Cały wieczór przeczytam","Cały wieczór będę przeczytać"],"answer":0,
       "explain":"Длительность — несовершенный вид: <b>będę czytać</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> книга будет дочитана.",
       "q":"«Вечером я прочитаю эту книгу» —","opts":["Wieczorem będę czytać tę książkę","Wieczorem przeczytam tę książkę","Wieczorem będę przeczytał tę książkę"],"answer":1,
       "explain":"Результат — совершенный вид: <b>przeczytam</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Покупки будут сделаны.",
       "q":"Собери: <b>«В субботу я сделаю покупки»</b>","answer":"W sobotę zrobię zakupy"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Обещания",
    "title":"Слова, которыми договариваются",
    "paras":[
      "Короткое будущее — язык договорённостей. <b>Zadzwonię</b> — «позвоню», <b>przyjdę</b> — «приду», <b>powiem</b> — «скажу», <b>dam</b> — «дам», <b>kupię</b> — «куплю», <b>pomogę</b> — «помогу». Каждое из них равно целой фразе.",
      "Несколько форм стоит взять целиком, они частые и слегка неправильные: <b>pójdę, pójdziesz, pójdzie</b> (пойду), <b>przyjdę, przyjdziesz, przyjdzie</b> (приду), <b>powiem, powiesz, powie</b> (скажу), <b>dam, dasz, da</b> (дам), <b>pomogę, pomożesz, pomoże</b> (помогу).",
      "И отрицание работает как раньше: <b>nie</b> перед глаголом, дополнение уходит в dopełniacz. <b>Nie kupię chleba. Nie zrobię tego.</b> Это правило из A1 — завтра оно станет главной темой дня."
    ],
    "audio":"Короткое будущее — язык договорённостей. Zadzwonię — позвоню, przyjdę — приду, powiem — скажу, dam — дам, kupię — куплю, pomogę — помогу. Каждое из них равно целой фразе. Несколько форм стоит взять целиком, они частые и слегка неправильные: pójdę, pójdziesz, pójdzie; przyjdę, przyjdziesz, przyjdzie; powiem, powiesz, powie; dam, dasz, da; pomogę, pomożesz, pomoże. И отрицание работает как раньше: nie перед глаголом, дополнение уходит в dopełniacz. Nie kupię chleba. Nie zrobię tego. Это правило из A1, завтра оно станет главной темой дня.",
    "table":{"rows":[
      ["Zadzwonię wieczorem. <button class=\"play\" data-say=\"Zadzwonię wieczorem.\">🔊</button>","позвоню вечером"],
      ["Przyjdę o siódmej. <button class=\"play\" data-say=\"Przyjdę o siódmej.\">🔊</button>","приду в семь"],
      ["Pójdę do sklepu.","пойду в магазин"],
      ["Powiem ci jutro.","скажу тебе завтра"],
      ["Kupię chleb.","куплю хлеб"],
      ["Nie kupię chleba.","хлеба не куплю — dopełniacz"]
    ],"star":5},
    "examples":[
      {"ru":"Я позвоню вечером.","en":"<b>Zadzwonię</b> wieczorem.","say":"Zadzwonię wieczorem."},
      {"ru":"Приду в семь.","en":"<b>Przyjdę</b> o siódmej.","say":"Przyjdę o siódmej."},
      {"ru":"Я скажу тебе завтра.","en":"<b>Powiem</b> ci jutro.","say":"Powiem ci jutro."},
      {"ru":"Хлеба не куплю, денег нет.","en":"<b>Nie kupię chleba</b>, nie mam pieniędzy.","gloss":"после nie — dopełniacz","say":"Nie kupię chleba, nie mam pieniędzy."}
    ],
    "mistakes":[
      {"wrong":"Nie kupię chleb.","right":"Nie kupię <b>chleba</b>.","why":"Отрицание переводит дополнение в dopełniacz — то же правило, что в nie mam czasu."},
      {"wrong":"Będę zadzwonić wieczorem.","right":"<b>Zadzwonię</b> wieczorem.","why":"Zadzwonić — совершенный вид, ему вспомогательное będę не нужно и не положено."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> совершенному виду będę не нужен.",
       "q":"«Позвоню вечером» —","opts":["Będę zadzwonić wieczorem","Zadzwonię wieczorem","Będę dzwonić wieczorem cały wieczór"],"answer":1,
       "explain":"<b>Zadzwonię wieczorem</b> — один звонок, короткое будущее."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после nie.",
       "q":"«Хлеба не куплю» —","opts":["Nie kupię chleb","Nie kupię chleba","Nie będę kupić chleba"],"answer":1,
       "explain":"После отрицания — dopełniacz: <b>chleba</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Zadzwonię wieczorem.","sub":"позвоню вечером","want":"Zadzwonię wieczorem."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек делят дела на завтра. Тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Marek, kupisz chleb i mleko?","ru":"Марек, купишь хлеб и молоко?",
      "words":[["kupisz","купишь"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dobrze, kupię. A ty co zrobisz?","ru":"Хорошо, куплю. А ты что сделаешь?",
      "words":[["kupię","куплю"],["zrobisz","сделаешь"]]},
     {"who":"A","name":"Anna","side":"left","en":"Napiszę list do babci i posprzątam.","ru":"Напишу письмо бабушке и приберусь.",
      "words":[["Napiszę","напишу"],["posprzątam","приберусь"]]},
     {"who":"M","name":"Marek","side":"right","en":"O której przyjdziesz?","ru":"Во сколько придёшь?",
      "words":[["O której","во сколько"],["przyjdziesz","придёшь"]]},
     {"who":"A","name":"Anna","side":"left","en":"Przyjdę o siódmej. Zadzwonię wcześniej.","ru":"Приду в семь. Позвоню заранее.",
      "words":[["Przyjdę","приду"],["wcześniej","раньше, заранее"]]},
     {"who":"M","name":"Marek","side":"right","en":"Świetnie. Zrobię kolację, a potem będziemy oglądać film.","ru":"Отлично. Приготовлю ужин, а потом будем смотреть фильм.",
      "words":[["Zrobię kolację","приготовлю ужин"],["będziemy oglądać","будем смотреть"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — два будущих в одном разговоре.",
   "lines":[
     {"who":"A","en":"Co zrobisz w sobotę?","ru":"Что сделаешь в субботу?"},
     {"who":"B","en":"Zrobię zakupy i napiszę list.","ru":"Сделаю покупки и напишу письмо."},
     {"who":"A","en":"A wieczorem?","ru":"А вечером?"},
     {"who":"B","en":"Wieczorem będę odpoczywać. Cały wieczór.","ru":"Вечером буду отдыхать. Весь вечер."},
     {"who":"A","en":"To dobry plan.","ru":"Хороший план."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — короткое будущее и договорённости.",
   "items":[
     {"en":"zrobię","ru":"сделаю","ex":"Zrobię to jutro."},
     {"en":"napiszę","ru":"напишу","ex":"Napiszę list."},
     {"en":"przeczytam","ru":"прочитаю","ex":"Przeczytam tę książkę."},
     {"en":"kupię","ru":"куплю","ex":"Kupię chleb i mleko."},
     {"en":"zadzwonię","ru":"позвоню","ex":"Zadzwonię wieczorem."},
     {"en":"przyjdę","ru":"приду","ex":"Przyjdę o siódmej."},
     {"en":"pójdę","ru":"пойду","ex":"Pójdę do sklepu."},
     {"en":"powiem","ru":"скажу","ex":"Powiem ci jutro."},
     {"en":"pomogę","ru":"помогу","ex":"Pomogę wieczorem."},
     {"en":"zrobić zakupy","ru":"сделать покупки","ex":"W sobotę zrobię zakupy."},
     {"en":"kolacja","ru":"ужин","ex":"Zrobię kolację."},
     {"en":"wreszcie","ru":"наконец","ex":"Wreszcie napiszę ten list."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу. Все четыре — про будущее.",
   "pairs":[["zrobię","сделаю"],["będę robić","буду делать"],["kupię","куплю"],["przeczytam","прочитаю"]]
 },
 "reading":{
   "intro":"Прочитай вслух субботний план Марека. Заметь, где одно слово, а где два.",
   "title":"Moja sobota",
   "sentences":["W sobotę rano zrobię zakupy.","Kupię chleb, mleko i ser.","Potem posprzątam mieszkanie.","Po południu będę odpoczywać.","Cały wieczór będę czytać.","Nie, wreszcie przeczytam tę książkę do końca.","Zadzwonię do Anny o szóstej.","Ona przyjdzie o siódmej.","Zrobię kolację.","Powiem jej o moich planach.","A w niedzielę nie zrobię nic."],
   "translation":"В субботу утром я сделаю покупки. Куплю хлеб, молоко и сыр. Потом приберу квартиру. После обеда буду отдыхать. Весь вечер буду читать. Нет — наконец дочитаю эту книгу до конца. Позвоню Анне в шесть. Она придёт в семь. Приготовлю ужин. Расскажу ей о своих планах. А в воскресенье не сделаю ничего."
 },
 "quiz":{
   "intro":"Пять вопросов — и второе будущее твоё.",
   "items":[
     {"q":"1. «Сделаю» —","opts":["będę robić","zrobię","będę zrobić"],"answer":1,
      "explain":"Совершенный вид сам по себе будущее: <b>zrobię</b>."},
     {"q":"2. «Завтра я куплю хлеб» —","opts":["Jutro kupuję chleb","Jutro kupię chleb","Jutro będę kupić chleb"],"answer":1,
      "explain":"Kupuję — «покупаю», настоящее. Будущее совершенного вида — <b>kupię</b>."},
     {"q":"3. «Весь вечер я буду читать» —","opts":["Cały wieczór będę czytać","Cały wieczór przeczytam","Cały wieczór będę przeczytać"],"answer":0,
      "explain":"Длительность требует несовершенного вида: <b>będę czytać</b>."},
     {"q":"4. «Приду в семь» —","opts":["Będę przyjść o siódmej","Przyjdę o siódmej","Przychodzę o siódmej"],"answer":1,
      "explain":"<b>Przyjdę</b> — короткое будущее. Przychodzę значит «прихожу»."},
     {"q":"5. «Хлеба не куплю» —","opts":["Nie kupię chleb","Nie kupię chleba","Nie będę kupić chleba"],"answer":1,
      "explain":"После отрицания — dopełniacz: <b>chleba</b>."}
   ]
 },
 "essay":{
   "intro":"Напиши свой план — и пусть в нём встретятся оба будущих.",
   "prompt":"Напиши 4–5 фраз о том, что ты сделаешь в субботу.",
   "hint":"Опора: Rano zrobię… Potem kupię… Wieczorem będę… Одно дело оставь незаконченным — там пригодится będę.",
   "example":"W sobotę rano zrobię zakupy. Kupię chleb i ser. Potem napiszę list. Po południu będę odpoczywać. Wieczorem przeczytam tę książkę do końca."
 }
},
"10": {
 "day":10,"week":"02",
 "themeRu":"Родительный везде",
 "themeEn":"Dopełniacz jest wszędzie",
 "intro":"Пять злотых, много работы, немного времени, килограмм яблок. Заметь: в русском все четыре слова после счёта стоят в родительном падеже. В польском — ровно там же. Сегодня dopełniacz выходит далеко за пределы отрицания и оказывается главным падежом польского: он живёт в ценах, в количествах и после доброго десятка глаголов.",
 "introAudio":"Пять злотых, много работы, немного времени, килограмм яблок. Заметь: в русском все четыре слова после счёта стоят в родительном падеже. В польском — ровно там же. Сегодня dopełniacz выходит далеко за пределы отрицания и оказывается главным падежом польского: он живёт в ценах, в количествах и после доброго десятка глаголов.",
 "goals":[
   "Считать количество: dużo pracy, mało czasu, kilka minut, trochę wody",
   "Называть цены: <b>dwa złote</b>, <b>pięć złotych</b>",
   "Пользоваться глаголами szukać, potrzebować, uczyć się, słuchać + dopełniacz",
   "Делать покупки: Ile to kosztuje? Poproszę kilogram jabłek"
 ],
 "learned":[
   "Посчитал(а) количество: dużo pracy, mało czasu, kilka minut, trochę wody",
   "Назвал(а) цены: dwa złote, pięć złotych",
   "Поработал(а) с глаголами szukać, potrzebować, uczyć się, słuchać + dopełniacz",
   "Сделал(а) покупки: Ile to kosztuje? Poproszę kilogram jabłek"
 ],
 "review":{
   "intro":"Утренний круг: вчерашнее короткое будущее — и вид глагола, который я спрашиваю каждый день.",
   "introAudio":"Утренний круг: вчерашнее короткое будущее — и вид глагола, который я спрашиваю каждый день.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> дело будет закончено.",
      "q":"«Сделаю» —","opts":["będę robić","zrobię","będę zrobić"],"answer":1,
      "explain":"Совершенный вид сам по себе будущее: <b>zrobię</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> смотри на «весь вечер».",
      "q":"«Весь вечер буду читать» —","opts":["Cały wieczór będę czytać","Cały wieczór przeczytam","Cały wieczór będę przeczytać"],"answer":0,
      "explain":"Длительность — несовершенный вид: <b>będę czytać</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> письмо будет дописано.",
      "q":"«Завтра напишу письмо» —","opts":["Jutro będę pisać list","Jutro napiszę list","Jutro piszę list"],"answer":1,
      "explain":"«Напишу» — готовый результат: <b>napiszę</b>. Będę pisać значит «буду писать»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Позвоню вечером»</b>","answer":"Zadzwonię wieczorem"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Количество",
    "title":"<em>Dużo pracy, mało czasu</em>",
    "paras":[
      "Слова количества — <b>dużo</b> (много), <b>mało</b> (мало), <b>trochę</b> (немного), <b>kilka</b> (несколько), <b>wiele</b> (много), <b>sporo</b> (изрядно) — тянут за собой dopełniacz. <b>Dużo pracy. Mało czasu. Trochę wody. Kilka minut.</b>",
      "Загляни в русский: «много работы», «мало времени», «немного воды», «несколько минут» — всё тот же родительный. Механизм родной целиком, учить нужно только окончания.",
      "Если предмет считается поштучно, слово встаёт во множественное число родительного: <b>dużo książek</b> (много книг), <b>kilka osób</b> (несколько человек), <b>dużo ludzi</b> (много людей). Если не считается — единственное: <b>dużo wody</b>, <b>trochę mleka</b>, <b>mało czasu</b>."
    ],
    "audio":"Слова количества — dużo, много; mało, мало; trochę, немного; kilka, несколько; wiele, много; sporo, изрядно — тянут за собой dopełniacz. Dużo pracy. Mało czasu. Trochę wody. Kilka minut. Загляни в русский: много работы, мало времени, немного воды, несколько минут — всё тот же родительный. Механизм родной целиком, учить нужно только окончания. Если предмет считается поштучно, слово встаёт во множественное число родительного: dużo książek, kilka osób, dużo ludzi. Если не считается — в единственное: dużo wody, trochę mleka, mało czasu.",
    "table":{"rows":[
      ["dużo pracy <button class=\"play\" data-say=\"dużo pracy\">🔊</button>","много работы"],
      ["mało czasu <button class=\"play\" data-say=\"mało czasu\">🔊</button>","мало времени"],
      ["trochę wody","немного воды"],
      ["kilka minut","несколько минут"],
      ["dużo książek","много книг"],
      ["kilka osób","несколько человек"]
    ],"star":1},
    "examples":[
      {"ru":"У меня много работы.","en":"Mam <b>dużo pracy</b>.","gloss":"praca → pracy","say":"Mam dużo pracy."},
      {"ru":"У меня мало времени.","en":"Mam <b>mało czasu</b>.","say":"Mam mało czasu."},
      {"ru":"Дай немного воды.","en":"Daj <b>trochę wody</b>.","say":"Daj trochę wody."},
      {"ru":"Подожди несколько минут.","en":"Poczekaj <b>kilka minut</b>.","say":"Poczekaj kilka minut."},
      {"ru":"В Кракове много людей.","en":"W Krakowie jest <b>dużo ludzi</b>.","gloss":"ludzie → ludzi","say":"W Krakowie jest dużo ludzi."}
    ],
    "mistakes":[
      {"wrong":"Mam dużo praca.","right":"Mam dużo <b>pracy</b>.","why":"После слов количества — dopełniacz, как в русском «много работы»."},
      {"wrong":"Kilka minuty","right":"Kilka <b>minut</b>","why":"Множественное число родительного здесь остаётся без окончания: minuta → minut."}
    ],
    "mnemonic":"📦 dużo / mało / trochę / kilka — и сразу dopełniacz. Русское «много чего» ведёт себя так же.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни русское «много работы».",
       "q":"«У меня много работы» —","opts":["Mam dużo praca","Mam dużo pracy","Mam dużo pracę"],"answer":1,
       "explain":"После dużo — dopełniacz: <b>pracy</b>."},
      {"type":"choice","q":"«Немного воды» —","opts":["trochę woda","trochę wodę","trochę wody"],"answer":2,
       "explain":"Родительный: woda → <b>wody</b>."},
      {"type":"type","howto":"Напиши «У меня мало времени». Диакритику можно не ставить.",
       "q":"У меня мало времени.","accept":["mam mało czasu","mam malo czasu"],"placeholder":"Mam mało…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Числительные",
    "title":"<em>Dwa złote</em>, но <em>pięć złotych</em>",
    "paras":[
      "Помнишь возраст из A1 — rok, lata, lat? Тот же трёхчастный узор работает со всеми числами. <b>1</b> — обычная форма: jeden złoty, jedna godzina. <b>2, 3, 4</b> — множественное число: <b>dwa złote</b>, trzy złote, cztery złote; <b>dwie godziny</b>. <b>5 и выше</b> — dopełniacz: <b>pięć złotych</b>, dziesięć złotych, dwadzieścia złotych.",
      "Русский делает буквально то же самое: «один злотый — два злотых — пять злотых», «одна минута — две минуты — пять минут». Только польские два для женского рода звучит как <b>dwie</b>: dwie godziny, dwie minuty.",
      "И одна мелочь, где родная интуиция подводит: составные числа на «один» всё равно требуют dopełniacza. По-русски «двадцать один злотый», по-польски <b>dwadzieścia jeden złotych</b>. А вот «двадцать два» ведёт себя как двойка: dwadzieścia dwa złote."
    ],
    "audio":"Помнишь возраст из A1: rok, lata, lat? Тот же трёхчастный узор работает со всеми числами. Один — обычная форма: jeden złoty, jedna godzina. Два, три, четыре — множественное число: dwa złote, trzy złote, cztery złote; dwie godziny. Пять и выше — dopełniacz: pięć złotych, dziesięć złotych, dwadzieścia złotych. Русский делает буквально то же самое: один злотый, два злотых, пять злотых. Только польское два для женского рода звучит как dwie: dwie godziny, dwie minuty. И одна мелочь, где родная интуиция подводит: составные числа на «один» всё равно требуют dopełniacza. По-русски двадцать один злотый, по-польски dwadzieścia jeden złotych. А вот двадцать два ведёт себя как двойка: dwadzieścia dwa złote.",
    "table":{"rows":[
      ["1 — jeden złoty / jedna godzina","обычная форма"],
      ["2, 3, 4 — dwa złote, dwie godziny <button class=\"play\" data-say=\"dwa złote, dwie godziny\">🔊</button>","мн. число"],
      ["5+ — pięć złotych, pięć godzin <button class=\"play\" data-say=\"pięć złotych\">🔊</button>","dopełniacz"],
      ["dwa dni · pięć dni","дни"],
      ["dwa lata · pięć lat","годы — как в A1"],
      ["dwadzieścia jeden złotych","на «один», но всё равно dopełniacz"]
    ],"star":2},
    "examples":[
      {"ru":"Это стоит пять злотых.","en":"To kosztuje <b>pięć złotych</b>.","say":"To kosztuje pięć złotych."},
      {"ru":"Это стоит два злотых.","en":"To kosztuje <b>dwa złote</b>.","say":"To kosztuje dwa złote."},
      {"ru":"Подожди две минуты.","en":"Poczekaj <b>dwie minuty</b>.","gloss":"женский род — dwie","say":"Poczekaj dwie minuty."},
      {"ru":"Я буду там пять дней.","en":"Będę tam <b>pięć dni</b>.","say":"Będę tam pięć dni."},
      {"ru":"Двадцать один злотый, пожалуйста.","en":"<b>Dwadzieścia jeden złotych</b>, proszę.","say":"Dwadzieścia jeden złotych, proszę."}
    ],
    "mistakes":[
      {"wrong":"pięć złote","right":"pięć <b>złotych</b>","why":"От пяти и выше идёт dopełniacz — ровно как русское «пять злотых»."},
      {"wrong":"dwa godziny","right":"<b>dwie</b> godziny","why":"Godzina женского рода, и «два» для неё звучит как dwie."}
    ],
    "mnemonic":"🪙 1 · 2-3-4 · 5+ — три полки, как в русском «год / года / лет». Пять и больше зовут dopełniacz.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> пять и выше — родительный.",
       "q":"«Пять злотых» —","opts":["pięć złote","pięć złotych","pięć złoty"],"answer":1,
       "explain":"От пяти — dopełniacz мн. числа: <b>złotych</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> двойка ведёт себя иначе.",
       "q":"«Два злотых» —","opts":["dwa złote","dwa złotych","dwa złoty"],"answer":0,
       "explain":"Для 2, 3, 4 — множественное число: <b>dwa złote</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Это стоит пять злотых»</b>","answer":"To kosztuje pięć złotych"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Глаголы",
    "title":"<em>Szukam pracy</em> — и тут дороги расходятся",
    "paras":[
      "Есть группа частых глаголов, которые в польском требуют dopełniacza, а в русском — винительного. Их стоит выучить списком: <b>szukać</b> (искать), <b>potrzebować</b> (нуждаться), <b>uczyć się</b> (учить, изучать), <b>słuchać</b> (слушать), <b>używać</b> (пользоваться).",
      "Сравни и запомни разницу: «ищу работу» → <b>szukam pracy</b>, «слушаю музыку» → <b>słucham muzyki</b>, «учу польский» → <b>uczę się polskiego</b>. Русское чутьё здесь тянет к винительному, и это как раз тот случай, когда его надо придержать.",
      "Спрягаются они спокойно, по знакомым образцам: szukam, szukasz, szuka; słucham, słuchasz; potrzebuję, potrzebujesz; uczę się, uczysz się."
    ],
    "audio":"Есть группа частых глаголов, которые в польском требуют dopełniacza, а в русском винительного. Их стоит выучить списком: szukać — искать, potrzebować — нуждаться, uczyć się — учить или изучать, słuchać — слушать, używać — пользоваться. Сравни и запомни разницу: ищу работу — szukam pracy, слушаю музыку — słucham muzyki, учу польский — uczę się polskiego. Русское чутьё здесь тянет к винительному, и это как раз тот случай, когда его надо придержать. Спрягаются они спокойно, по знакомым образцам: szukam, szukasz, szuka; słucham, słuchasz; potrzebuję, potrzebujesz; uczę się, uczysz się.",
    "table":{"rows":[
      ["szukam pracy <button class=\"play\" data-say=\"Szukam pracy.\">🔊</button>","ищу работу"],
      ["szukam kluczy","ищу ключи"],
      ["potrzebuję pomocy <button class=\"play\" data-say=\"Potrzebuję pomocy.\">🔊</button>","мне нужна помощь"],
      ["uczę się polskiego","учу польский"],
      ["słucham muzyki","слушаю музыку"],
      ["używam telefonu","пользуюсь телефоном"]
    ],"star":0},
    "examples":[
      {"ru":"Я ищу работу.","en":"<b>Szukam pracy.</b>","gloss":"по-русски винительный, по-польски родительный","say":"Szukam pracy."},
      {"ru":"Мне нужно время.","en":"<b>Potrzebuję czasu.</b>","say":"Potrzebuję czasu."},
      {"ru":"Я учу польский.","en":"<b>Uczę się polskiego.</b>","say":"Uczę się polskiego."},
      {"ru":"Вечером я слушаю музыку.","en":"Wieczorem <b>słucham muzyki</b>.","say":"Wieczorem słucham muzyki."},
      {"ru":"Мне нужна твоя помощь.","en":"<b>Potrzebuję twojej pomocy.</b>","say":"Potrzebuję twojej pomocy."}
    ],
    "mistakes":[
      {"wrong":"Szukam pracę.","right":"Szukam <b>pracy</b>.","why":"Szukać требует dopełniacza, хотя русское «искать» берёт винительный."},
      {"wrong":"Słucham muzykę.","right":"Słucham <b>muzyki</b>.","why":"То же расхождение: słuchać + dopełniacz."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> здесь родное чутьё подводит.",
       "q":"«Я ищу работу» —","opts":["Szukam pracę","Szukam pracy","Szukam praca"],"answer":1,
       "explain":"Szukać идёт с dopełniaczem: <b>szukam pracy</b>."},
      {"type":"choice","q":"«Я слушаю музыку» —","opts":["Słucham muzykę","Słucham muzyki","Słucham muzyka"],"answer":1,
       "explain":"Słuchać тоже требует dopełniacza: <b>muzyki</b>."},
      {"type":"type","howto":"Напиши «Я учу польский». Диакритику можно не ставить.",
       "q":"Я учу польский.","accept":["uczę się polskiego","ucze sie polskiego","uczę sie polskiego"],"placeholder":"Uczę się…"}
    ]
   },
   {
    "eyebrow":"Правило 4 · В магазине",
    "title":"<em>Ile to kosztuje?</em> — весь день в одной сцене",
    "paras":[
      "Покупки — это dopełniacz в чистом виде. Меры и упаковки тянут за собой родительный: <b>kilogram jabłek</b> (килограмм яблок), <b>pół kilo sera</b> (полкило сыра), <b>butelka wody</b> (бутылка воды), <b>szklanka mleka</b> (стакан молока), <b>paczka herbaty</b> (пачка чая).",
      "Рабочие фразы: <b>Ile to kosztuje?</b> — «сколько это стоит?», <b>Poproszę…</b> — «мне, пожалуйста…», <b>Coś jeszcze?</b> — «что-нибудь ещё?». А отрицание ты уже знаешь с A1: <b>Nie ma mleka. Nie mam pieniędzy.</b>",
      "И минутка произношения: в слове <b>złotych</b> буква ł звучит как короткое «у̯», получается [зу̯о́тых]. А в <b>pięć</b> носовое ę перед мягким ć даёт [пеньчь] — то самое слово из A1."
    ],
    "audio":"Покупки — это dopełniacz в чистом виде. Меры и упаковки тянут за собой родительный: kilogram jabłek — килограмм яблок, pół kilo sera — полкило сыра, butelka wody — бутылка воды, szklanka mleka — стакан молока, paczka herbaty — пачка чая. Рабочие фразы: ile to kosztuje — сколько это стоит; poproszę — мне, пожалуйста; coś jeszcze — что-нибудь ещё. А отрицание уже знакомо с A1: nie ma mleka, nie mam pieniędzy. И минутка произношения: в слове złotych буква ł звучит как короткое у, получается зуотых. А в pięć носовое ę перед мягким ć даёт пеньчь — то самое слово из A1.",
    "table":{"rows":[
      ["Ile to kosztuje? <button class=\"play\" data-say=\"Ile to kosztuje?\">🔊</button>","сколько это стоит?"],
      ["Poproszę kilogram jabłek. <button class=\"play\" data-say=\"Poproszę kilogram jabłek.\">🔊</button>","килограмм яблок, пожалуйста"],
      ["pół kilo sera","полкило сыра"],
      ["butelka wody · szklanka mleka","бутылка воды · стакан молока"],
      ["Coś jeszcze?","что-нибудь ещё?"],
      ["Nie ma mleka.","молока нет — повтор A1"]
    ],"star":1},
    "examples":[
      {"ru":"Сколько это стоит?","en":"<b>Ile to kosztuje?</b>","say":"Ile to kosztuje?"},
      {"ru":"Килограмм яблок, пожалуйста.","en":"<b>Poproszę kilogram jabłek.</b>","gloss":"jabłka → jabłek","say":"Poproszę kilogram jabłek."},
      {"ru":"Полкило сыра и бутылку воды.","en":"<b>Pół kilo sera</b> i <b>butelkę wody</b>.","say":"Pół kilo sera i butelkę wody."},
      {"ru":"Сколько стоит кофе? — Восемь злотых.","en":"Ile kosztuje kawa? — <b>Osiem złotych.</b>","say":"Ile kosztuje kawa? Osiem złotych."}
    ],
    "mistakes":[
      {"wrong":"Poproszę kilogram jabłka.","right":"Poproszę kilogram <b>jabłek</b>.","why":"Яблок много — родительный множественного: jabłek."},
      {"wrong":"Poproszę butelka wody.","right":"Poproszę <b>butelkę</b> wody.","why":"После poproszę слово встаёт в biernik — butelkę, а вода при мере остаётся в родительном: butelkę wody."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> яблок много.",
       "q":"«Килограмм яблок» —","opts":["kilogram jabłka","kilogram jabłek","kilogram jabłko"],"answer":1,
       "explain":"Родительный множественного: <b>jabłek</b>."},
      {"type":"choice","q":"Как спросить о цене?","opts":["Ile to kosztuje?","Ile masz?","Co to kosztuje?"],"answer":0,
       "explain":"<b>Ile to kosztuje?</b> — «сколько это стоит?»."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Poproszę pół kilo sera.","sub":"полкило сыра, пожалуйста","want":"Poproszę pół kilo sera."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна на рынке. Тапни по строке, чтобы увидеть перевод, и нажми на подсвеченное слово.",
   "lines":[
     {"who":"S","name":"Sprzedawczyni","side":"left","en":"Dzień dobry. Co podać?","ru":"Добрый день. Что подать?",
      "words":[["Co podać","что подать"]]},
     {"who":"A","name":"Anna","side":"right","en":"Poproszę kilogram jabłek i pół kilo sera.","ru":"Килограмм яблок и полкило сыра, пожалуйста.",
      "words":[["kilogram jabłek","килограмм яблок"],["pół kilo sera","полкило сыра"]]},
     {"who":"S","name":"Sprzedawczyni","side":"left","en":"Coś jeszcze?","ru":"Что-нибудь ещё?",
      "words":[["Coś jeszcze","что-нибудь ещё"]]},
     {"who":"A","name":"Anna","side":"right","en":"Tak, butelkę wody. Ile to kosztuje?","ru":"Да, бутылку воды. Сколько это стоит?",
      "words":[["butelkę wody","бутылку воды"],["Ile to kosztuje","сколько это стоит"]]},
     {"who":"S","name":"Sprzedawczyni","side":"left","en":"Dwadzieścia jeden złotych.","ru":"Двадцать один злотый.",
      "words":[["złotych","злотых (dopełniacz)"]]},
     {"who":"A","name":"Anna","side":"right","en":"Proszę. Szukam jeszcze mleka. Jest?","ru":"Пожалуйста. Ищу ещё молоко. Есть?",
      "words":[["Szukam mleka","ищу молоко"]]},
     {"who":"S","name":"Sprzedawczyni","side":"left","en":"Niestety nie ma mleka. Będzie jutro.","ru":"К сожалению, молока нет. Будет завтра.",
      "words":[["Niestety","к сожалению"],["nie ma mleka","молока нет"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — цены и количества.",
   "lines":[
     {"who":"A","en":"Ile kosztuje kawa?","ru":"Сколько стоит кофе?"},
     {"who":"B","en":"Osiem złotych.","ru":"Восемь злотых."},
     {"who":"A","en":"A woda?","ru":"А вода?"},
     {"who":"B","en":"Dwa złote.","ru":"Два злотых."},
     {"who":"A","en":"Poproszę kawę i wodę. Mam mało czasu.","ru":"Кофе и воду, пожалуйста. У меня мало времени."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — количества, цены и глаголы, которые зовут dopełniacz.",
   "items":[
     {"en":"dużo / mało","ru":"много / мало","ex":"Mam dużo pracy i mało czasu."},
     {"en":"trochę","ru":"немного","ex":"Daj trochę wody."},
     {"en":"kilka","ru":"несколько","ex":"Poczekaj kilka minut."},
     {"en":"pięć złotych","ru":"пять злотых","ex":"To kosztuje pięć złotych."},
     {"en":"dwa złote","ru":"два злотых","ex":"Woda kosztuje dwa złote."},
     {"en":"Ile to kosztuje?","ru":"сколько это стоит?","ex":"Ile to kosztuje? — Pięć złotych."},
     {"en":"szukać (szukam)","ru":"искать (+ dopełniacz)","ex":"Szukam pracy."},
     {"en":"potrzebować (potrzebuję)","ru":"нуждаться (+ dopełniacz)","ex":"Potrzebuję pomocy."},
     {"en":"uczyć się (uczę się)","ru":"учить, изучать (+ dopełniacz)","ex":"Uczę się polskiego."},
     {"en":"słuchać (słucham)","ru":"слушать (+ dopełniacz)","ex":"Słucham muzyki."},
     {"en":"kilogram jabłek","ru":"килограмм яблок","ex":"Poproszę kilogram jabłek."},
     {"en":"butelka wody","ru":"бутылка воды","ex":"Poproszę butelkę wody."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу.",
   "pairs":[["dużo pracy","много работы"],["pięć złotych","пять злотых"],["szukam pracy","ищу работу"],["trochę wody","немного воды"]]
 },
 "reading":{
   "intro":"Прочитай вслух — тут dopełniacz почти в каждой строке.",
   "title":"Zakupy i plany",
   "sentences":["Mam dużo pracy i mało czasu.","Ale dziś zrobię zakupy.","Kupię kilogram jabłek i pół kilo sera.","Poproszę też butelkę wody.","To kosztuje dwadzieścia jeden złotych.","Nie mam pieniędzy w kieszeni.","Szukam portfela.","Jest tutaj.","Wieczorem będę słuchać muzyki.","Potem uczę się polskiego.","Potrzebuję jeszcze kilku dni.","Wtedy wszystko będzie gotowe."],
   "translation":"У меня много работы и мало времени. Но сегодня я сделаю покупки. Куплю килограмм яблок и полкило сыра. Возьму ещё бутылку воды. Это стоит двадцать один злотый. В кармане нет денег. Ищу кошелёк. Вот он. Вечером буду слушать музыку. Потом учу польский. Мне нужно ещё несколько дней. Тогда всё будет готово."
 },
 "quiz":{
   "intro":"Пять вопросов — и главный падеж польского у тебя в руках.",
   "items":[
     {"q":"1. «У меня много работы» —","opts":["Mam dużo praca","Mam dużo pracy","Mam dużo pracę"],"answer":1,
      "explain":"После dużo — dopełniacz: <b>pracy</b>."},
     {"q":"2. «Пять злотых» —","opts":["pięć złote","pięć złotych","pięć złoty"],"answer":1,
      "explain":"От пяти и выше — dopełniacz мн. числа: <b>złotych</b>."},
     {"q":"3. «Два злотых» —","opts":["dwa złote","dwa złotych","dwa złoty"],"answer":0,
      "explain":"Для 2, 3, 4 — форма множественного числа: <b>dwa złote</b>."},
     {"q":"4. «Я ищу работу» —","opts":["Szukam pracę","Szukam pracy","Szukam praca"],"answer":1,
      "explain":"Szukać требует dopełniacza — расхождение с русским винительным."},
     {"q":"5. «Килограмм яблок» —","opts":["kilogram jabłka","kilogram jabłek","kilogram jabłko"],"answer":1,
      "explain":"Родительный множественного: <b>jabłek</b>."}
   ]
 },
 "essay":{
   "intro":"Напиши маленький список покупок — с количествами и ценами.",
   "prompt":"Напиши 4–5 фраз: что купишь, сколько чего и сколько это стоит.",
   "hint":"Опора: Kupię kilogram… Poproszę pół kilo… To kosztuje… złotych. Проверь: после 5 и выше — złotych. 💛",
   "example":"Mam mało czasu, ale zrobię zakupy. Kupię kilogram jabłek i trochę sera. Poproszę też butelkę wody. To kosztuje piętnaście złotych. W domu będę słuchać muzyki."
 }
},
"11": {
 "day":11,"week":"02",
 "themeRu":"Кому? Чему?",
 "themeEn":"Celownik: komu?",
 "intro":"Один короткий вопрос — <b>komu?</b> — и открывается целый падеж. Дательный в польском работает почти так же, как в русском: помогаю маме, куплю брату, подарю Еве. Почти — потому что одно очень частое слово выбивается из ряда, и это <b>dziękuję</b>.",
 "introAudio":"Один короткий вопрос — komu? — и открывается целый падеж. Дательный в польском работает почти так же, как в русском: помогаю маме, куплю брату, подарю Еве. Почти — потому что одно очень частое слово выбивается из ряда, и это dziękuję.",
 "goals":[
   "Отвечать на вопрос <b>komu?</b> — дательный падеж (celownik)",
   "Благодарить правильно: dziękuję ci, dziękuję Ewie, dziękuję panu",
   "Менять окончания: mama → mamie, Ewa → Ewie, brat → bratu, Marek → Markowi",
   "Говорить, кому что нравится: Ewie podoba się ten prezent"
 ],
 "learned":[
   "Ответил(а) на вопрос komu? — дательный падеж (celownik)",
   "Поблагодарил(а) правильно: dziękuję ci, dziękuję Ewie, dziękuję panu",
   "Поменял(а) окончания: mama → mamie, Ewa → Ewie, brat → bratu, Marek → Markowi",
   "Сказал(а), кому что нравится: Ewie podoba się ten prezent"
 ],
 "review":{
   "intro":"Утренний круг: вчерашний dopełniacz — и вид глагола, как всегда.",
   "introAudio":"Утренний круг: вчерашний dopełniacz — и вид глагола, как всегда.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> от пяти и выше — родительный.",
      "q":"«Пять злотых» —","opts":["pięć złote","pięć złotych","pięć złoty"],"answer":1,
      "explain":"От пяти и выше — dopełniacz: <b>złotych</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> двойка ведёт себя иначе.",
      "q":"«Два злотых» —","opts":["dwa złote","dwa złotych","dwa złoty"],"answer":0,
      "explain":"Для 2, 3, 4 — множественное число: <b>dwa złote</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> здесь родное чутьё тянет не туда.",
      "q":"«Я ищу работу» —","opts":["Szukam pracę","Szukam pracy","Szukam praca"],"answer":1,
      "explain":"Szukać требует dopełniacza: <b>pracy</b>."},
     {"type":"type","howto":"Напиши «У меня мало времени». Диакритику можно не ставить.",
      "q":"У меня мало времени.","accept":["mam mało czasu","mam malo czasu"],"placeholder":"Mam mało…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Что это за падеж",
    "title":"<em>Komu?</em> — и ты уже его носишь",
    "paras":[
      "Celownik отвечает на вопрос <b>komu? czemu?</b> — «кому? чему?». Это ровно тот же дательный, который есть у тебя в родном языке: «дай маме», «помоги брату», «мне нравится».",
      "Больше того, одну его форму ты уже носишь с A1. <b>Podoba mi się</b> — вот это <b>mi</b> и есть celownik. Полный набор коротких форм: <b>mi</b> (мне), <b>ci</b> (тебе), <b>mu</b> (ему), <b>jej</b> (ей), <b>nam</b> (нам), <b>wam</b> (вам), <b>im</b> (им).",
      "У «мне», «тебе», «ему» есть ещё длинные варианты — <b>mnie, tobie, jemu</b>. Их берут, когда слово стоит в начале фразы или на нём ударение: <b>Mnie się to podoba, a tobie?</b> В остальных случаях спокойно живут короткие."
    ],
    "audio":"Celownik отвечает на вопрос komu, czemu — кому, чему. Это ровно тот же дательный, который есть у тебя в родном языке: дай маме, помоги брату, мне нравится. Больше того, одну его форму ты уже носишь с A1. Podoba mi się — вот это mi и есть celownik. Полный набор коротких форм: mi — мне, ci — тебе, mu — ему, jej — ей, nam — нам, wam — вам, im — им. У «мне», «тебе», «ему» есть ещё длинные варианты: mnie, tobie, jemu. Их берут, когда слово стоит в начале фразы или на нём ударение: mnie się to podoba, a tobie? В остальных случаях спокойно живут короткие.",
    "table":{"rows":[
      ["mi / mnie <button class=\"play\" data-say=\"Podoba mi się.\">🔊</button>","мне"],
      ["ci / tobie","тебе"],
      ["mu / jemu","ему"],
      ["jej","ей"],
      ["nam · wam","нам · вам"],
      ["im","им"]
    ],"star":0},
    "examples":[
      {"ru":"Мне нравится этот подарок.","en":"<b>Podoba mi się</b> ten prezent.","gloss":"mi — это и есть celownik","say":"Podoba mi się ten prezent."},
      {"ru":"Я скажу тебе завтра.","en":"Powiem <b>ci</b> jutro.","say":"Powiem ci jutro."},
      {"ru":"Мне нравится, а тебе?","en":"<b>Mnie</b> się podoba, a <b>tobie</b>?","gloss":"длинные формы под ударением","say":"Mnie się podoba, a tobie?"},
      {"ru":"Он им поможет.","en":"On <b>im</b> pomoże.","say":"On im pomoże."}
    ],
    "mistakes":[
      {"wrong":"Podoba ja się ten prezent.","right":"Podoba <b>mi</b> się ten prezent.","why":"Тот, кому нравится, стоит в дательном: mi."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни A1.",
       "q":"«Мне нравится этот подарок» —","opts":["Podoba mnie ten prezent","Podoba mi się ten prezent","Podobam ten prezent"],"answer":1,
       "explain":"<b>Podoba mi się</b> — конструкция знакома с A1, и mi в ней — celownik."},
      {"type":"choice","q":"Какая форма значит «им»?","opts":["nam","im","wam"],"answer":1,
       "explain":"<b>Im</b> — «им». Nam — «нам», wam — «вам»."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Я скажу тебе завтра»</b>","answer":"Powiem ci jutro"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Ловушка дня",
    "title":"<em>Dziękuję ci</em> — благодарят в дательном",
    "paras":[
      "По-русски «благодарю» требует винительного: благодарю <em>тебя</em>, благодарю <em>маму</em>. Польское <b>dziękować</b> — дательного: <b>dziękuję ci</b>, <b>dziękuję mamie</b>, <b>dziękuję panu</b>. Формы «dziękuję cię» не существует.",
      "Мостик есть, и очень надёжный: русское <em>«спасибо тебе»</em> — тот же дательный. Держись за «спасибо кому», а не за «благодарю кого», и рука сама напишет верно.",
      "А за что благодарят — это <b>za</b> плюс винительный: <b>dziękuję za prezent</b>, <b>dziękuję za pomoc</b>, <b>dziękuję za kawę</b>. Два падежа в одной короткой фразе: <b>Dziękuję ci za prezent.</b>"
    ],
    "audio":"По-русски «благодарю» требует винительного: благодарю тебя, благодарю маму. Польское dziękować — дательного: dziękuję ci, dziękuję mamie, dziękuję panu. Формы dziękuję cię не существует. Мостик есть, и очень надёжный: русское «спасибо тебе» — тот же дательный. Держись за «спасибо кому», а не за «благодарю кого», и рука сама напишет верно. А за что благодарят — это za плюс винительный: dziękuję za prezent, dziękuję za pomoc, dziękuję za kawę. Два падежа в одной короткой фразе: dziękuję ci za prezent.",
    "table":{"rows":[
      ["Dziękuję ci. <button class=\"play\" data-say=\"Dziękuję ci.\">🔊</button>","спасибо тебе"],
      ["Dziękuję panu / pani. <button class=\"play\" data-say=\"Dziękuję pani.\">🔊</button>","спасибо Вам"],
      ["Dziękuję mamie.","спасибо маме"],
      ["Dziękuję ci za prezent. <button class=\"play\" data-say=\"Dziękuję ci za prezent.\">🔊</button>","спасибо тебе за подарок"],
      ["Dziękuję za pomoc.","спасибо за помощь"],
      ["❌ Dziękuję cię.","такой формы нет"]
    ],"star":5},
    "examples":[
      {"ru":"Спасибо тебе.","en":"<b>Dziękuję ci.</b>","gloss":"дательный, как в «спасибо тебе»","say":"Dziękuję ci."},
      {"ru":"Спасибо Вам за помощь.","en":"<b>Dziękuję panu za pomoc.</b>","say":"Dziękuję panu za pomoc."},
      {"ru":"Спасибо маме за ужин.","en":"<b>Dziękuję mamie</b> za kolację.","say":"Dziękuję mamie za kolację."},
      {"ru":"Спасибо. — Не за что.","en":"Dziękuję. — <b>Nie ma za co.</b>","gloss":"ответ из A1","say":"Dziękuję. Nie ma za co."}
    ],
    "mistakes":[
      {"wrong":"Dziękuję cię.","right":"Dziękuję <b>ci</b>.","why":"Dziękować идёт с дательным. Опирайся на «спасибо тебе», а не на «благодарю тебя»."},
      {"wrong":"Dziękuję za pomocy.","right":"Dziękuję za <b>pomoc</b>.","why":"После za — винительный, и слово pomoc в нём не меняется."}
    ],
    "mnemonic":"🙏 Спасибо кому — dziękuję komu. За что — za + винительный: dziękuję ci za prezent.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> опирайся на «спасибо тебе».",
       "q":"«Спасибо тебе за подарок» —","opts":["Dziękuję cię za prezent","Dziękuję ci za prezent","Dziękuję ciebie za prezent"],"answer":1,
       "explain":"Dziękować требует дательного: <b>dziękuję ci</b>."},
      {"type":"choice","q":"Вежливо благодарим мужчину —","opts":["Dziękuję pan","Dziękuję panu","Dziękuję pana"],"answer":1,
       "explain":"Дательный от pan — <b>panu</b>."},
      {"type":"type","howto":"Напиши «Спасибо за помощь». Диакритику можно не ставить.",
       "q":"Спасибо за помощь.","accept":["dziękuję za pomoc","dziekuje za pomoc"],"placeholder":"Dziękuję…"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Окончания",
    "title":"<em>Mamie, Ewie, bratu, Markowi</em>",
    "paras":[
      "Женский род на -a получает <b>-e</b>, и согласная перед ним смягчается: mama → <b>mamie</b>, Ewa → <b>Ewie</b>, Anna → <b>Annie</b>, żona → <b>żonie</b>, siostra → <b>siostrze</b>, córka → <b>córce</b>, koleżanka → <b>koleżance</b>. Мягкие слова берут <b>-i</b>: Ania → <b>Ani</b>, babcia → <b>babci</b>. Слово pani не меняется вовсе: <b>dziękuję pani</b>.",
      "Мужской род почти весь на <b>-owi</b>: Marek → <b>Markowi</b>, Tomek → <b>Tomkowi</b>, syn → <b>synowi</b>, mąż → <b>mężowi</b>, nauczyciel → <b>nauczycielowi</b>, sąsiad → <b>sąsiadowi</b>.",
      "Но пять частых мужских слов идут коротким путём, на <b>-u</b>, и их надо просто запомнить: <b>bratu, ojcu, panu, chłopcu, psu</b>. Средний род тоже на -u: dziecko → <b>dziecku</b>."
    ],
    "audio":"Женский род на -a получает -e, и согласная перед ним смягчается: mama — mamie, Ewa — Ewie, Anna — Annie, żona — żonie, siostra — siostrze, córka — córce, koleżanka — koleżance. Мягкие слова берут -i: Ania — Ani, babcia — babci. Слово pani не меняется вовсе: dziękuję pani. Мужской род почти весь на -owi: Marek — Markowi, Tomek — Tomkowi, syn — synowi, mąż — mężowi, nauczyciel — nauczycielowi, sąsiad — sąsiadowi. Но пять частых мужских слов идут коротким путём, на -u, и их надо просто запомнить: bratu, ojcu, panu, chłopcu, psu. Средний род тоже на -u: dziecko — dziecku.",
    "table":{"rows":[
      ["mama → <b>mamie</b> · Ewa → <b>Ewie</b> <button class=\"play\" data-say=\"mamie, Ewie\">🔊</button>","ж. р. — -e со смягчением"],
      ["siostra → <b>siostrze</b> · córka → <b>córce</b>","ж. р., согласная меняется"],
      ["Ania → <b>Ani</b> · babcia → <b>babci</b>","мягкие — -i"],
      ["Marek → <b>Markowi</b> · syn → <b>synowi</b> <button class=\"play\" data-say=\"Markowi, synowi\">🔊</button>","м. р. — -owi"],
      ["brat → <b>bratu</b> · ojciec → <b>ojcu</b> · pan → <b>panu</b>","короткие исключения"],
      ["dziecko → <b>dziecku</b>","ср. р. — -u"]
    ],"star":4},
    "examples":[
      {"ru":"Я помогаю маме.","en":"Pomagam <b>mamie</b>.","say":"Pomagam mamie."},
      {"ru":"Куплю брату книгу.","en":"Kupię <b>bratu</b> książkę.","gloss":"brat → bratu, короткая форма","say":"Kupię bratu książkę."},
      {"ru":"Подарю Еве цветы.","en":"Dam <b>Ewie</b> kwiaty.","say":"Dam Ewie kwiaty."},
      {"ru":"Скажу Мареку вечером.","en":"Powiem <b>Markowi</b> wieczorem.","say":"Powiem Markowi wieczorem."},
      {"ru":"Я помогаю сестре.","en":"Pomagam <b>siostrze</b>.","say":"Pomagam siostrze."}
    ],
    "mistakes":[
      {"wrong":"Kupię bratowi książkę.","right":"Kupię <b>bratu</b> książkę.","why":"Brat входит в короткий список на -u: bratu."},
      {"wrong":"Pomagam mama.","right":"Pomagam <b>mamie</b>.","why":"Кому помогаю — celownik: mamie."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> женский род на -a берёт -e со смягчением.",
       "q":"«Я помогаю маме» —","opts":["Pomagam mamę","Pomagam mamie","Pomagam mamy"],"answer":1,
       "explain":"Celownik от mama — <b>mamie</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> это слово из короткого списка.",
       "q":"«Куплю брату книгу» —","opts":["Kupię brata książkę","Kupię bratu książkę","Kupię bratowi książkę"],"answer":1,
       "explain":"Brat — исключение на -u: <b>bratu</b>."},
      {"type":"type","howto":"Напиши «Подарю Еве цветы». Диакритику можно не ставить.",
       "q":"Подарю Еве цветы.","accept":["dam ewie kwiaty","dam Ewie kwiaty"],"placeholder":"Dam…"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Где живёт celownik",
    "title":"Помогаю, дарю, покупаю — кому",
    "paras":[
      "Глаголы, при которых дательный обязателен: <b>pomagać</b> (помогать), <b>dawać / dać</b> (давать, дарить), <b>kupować / kupić</b> (покупать), <b>mówić / powiedzieć</b> (говорить, сказать), <b>życzyć</b> (желать). Русский здесь совпадает полностью: помогать маме, дарить Еве, покупать брату.",
      "Порядок слов свободный, но чаще всего «кому» стоит перед «что»: <b>Kupię bratu książkę. Dam Ewie kwiaty. Mamie kupię prezent.</b>",
      "И знакомая конструкция расширяется: раньше было только <b>podoba mi się</b>, теперь на месте mi может стоять любое имя. <b>Ewie podoba się ten prezent.</b> <b>Markowi podobają się te książki.</b> Тот, кому нравится, — в дательном, а то, что нравится, остаётся подлежащим."
    ],
    "audio":"Глаголы, при которых дательный обязателен: pomagać — помогать, dawać и dać — давать или дарить, kupować и kupić — покупать, mówić и powiedzieć — говорить и сказать, życzyć — желать. Русский здесь совпадает полностью: помогать маме, дарить Еве, покупать брату. Порядок слов свободный, но чаще всего «кому» стоит перед «что»: kupię bratu książkę, dam Ewie kwiaty, mamie kupię prezent. И знакомая конструкция расширяется: раньше было только podoba mi się, теперь на месте mi может стоять любое имя. Ewie podoba się ten prezent. Markowi podobają się te książki. Тот, кому нравится, в дательном, а то, что нравится, остаётся подлежащим.",
    "table":{"rows":[
      ["Pomagam mamie. <button class=\"play\" data-say=\"Pomagam mamie.\">🔊</button>","помогаю маме"],
      ["Kupię bratu książkę.","куплю брату книгу"],
      ["Dam Ewie kwiaty. <button class=\"play\" data-say=\"Dam Ewie kwiaty.\">🔊</button>","подарю Еве цветы"],
      ["Ewie podoba się ten prezent. <button class=\"play\" data-say=\"Ewie podoba się ten prezent.\">🔊</button>","Еве нравится этот подарок"],
      ["Markowi podobają się te książki.","Мареку нравятся эти книги"],
      ["Powiem mamie jutro.","скажу маме завтра"]
    ],"star":3},
    "examples":[
      {"ru":"Я помогаю маме каждый день.","en":"Codziennie <b>pomagam mamie</b>.","say":"Codziennie pomagam mamie."},
      {"ru":"Куплю сестре подарок.","en":"Kupię <b>siostrze</b> prezent.","say":"Kupię siostrze prezent."},
      {"ru":"Еве нравится этот подарок.","en":"<b>Ewie</b> podoba się ten prezent.","gloss":"имя вместо mi","say":"Ewie podoba się ten prezent."},
      {"ru":"Мареку нравятся эти книги.","en":"<b>Markowi</b> podobają się te książki.","gloss":"много → podobają","say":"Markowi podobają się te książki."}
    ],
    "mistakes":[
      {"wrong":"Ewa podoba się ten prezent.","right":"<b>Ewie</b> podoba się ten prezent.","why":"Тот, кому нравится, стоит в дательном — как русское «Еве нравится»."},
      {"wrong":"Ewie podoba się te książki.","right":"Ewie <b>podobają</b> się te książki.","why":"Книг много — нужна форма podobają, как русское «нравятся»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> кому нравится — в дательном.",
       "q":"«Еве нравится этот подарок» —","opts":["Ewa podoba się ten prezent","Ewie podoba się ten prezent","Ewie podobają się ten prezent"],"answer":1,
       "explain":"Имя встаёт в celownik: <b>Ewie</b>, а подарок один — значит podoba."},
      {"type":"choice","howto":"<b>Что делать:</b> посчитай, сколько книг.",
       "q":"«Мареку нравятся эти книги» —","opts":["Markowi podoba się te książki","Markowi podobają się te książki","Marek podobają się te książki"],"answer":1,
       "explain":"Книг много — <b>podobają</b>, а имя в дательном — Markowi."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Dziękuję ci za pomoc.","sub":"спасибо тебе за помощь","want":"Dziękuję ci za pomoc."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек выбирают подарки. Тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Co kupimy Ewie na urodziny?","ru":"Что мы купим Еве на день рождения?",
      "words":[["Ewie","Еве (celownik)"],["na urodziny","на день рождения"]]},
     {"who":"A","name":"Anna","side":"left","en":"Ewie podobają się książki. Kupimy jej książkę.","ru":"Еве нравятся книги. Купим ей книгу.",
      "words":[["podobają się","нравятся"],["jej","ей"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dobrze. A mamie? Mama pomagała nam całe lato.","ru":"Хорошо. А маме? Мама помогала нам всё лето.",
      "words":[["mamie","маме"],["nam","нам"]]},
     {"who":"A","name":"Anna","side":"left","en":"Mamie kupię kwiaty. I powiem bratu — on też coś da.","ru":"Маме куплю цветы. И скажу брату — он тоже что-нибудь подарит.",
      "words":[["bratu","брату"],["da","даст, подарит"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dziękuję ci za pomoc. Sam nic nie wymyślę.","ru":"Спасибо тебе за помощь. Сам я ничего не придумаю.",
      "words":[["Dziękuję ci","спасибо тебе"],["za pomoc","за помощь"],["nie wymyślę","не придумаю"]]},
     {"who":"A","name":"Anna","side":"left","en":"To ja dziękuję tobie. Kawa też była dobra.","ru":"Это я тебе спасибо. И кофе был хорош.",
      "words":[["tobie","тебе (длинная форма)"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — благодарность и подарок.",
   "lines":[
     {"who":"A","en":"To dla ciebie. Wszystkiego dobrego!","ru":"Это тебе. Всего доброго!"},
     {"who":"B","en":"Dziękuję ci bardzo!","ru":"Большое спасибо!"},
     {"who":"A","en":"Podoba ci się?","ru":"Нравится тебе?"},
     {"who":"B","en":"Bardzo mi się podoba. Dziękuję za prezent.","ru":"Очень нравится. Спасибо за подарок."},
     {"who":"A","en":"Nie ma za co.","ru":"Не за что."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — дательный падеж в работе.",
   "items":[
     {"en":"komu?","ru":"кому?","ex":"Komu kupisz prezent?"},
     {"en":"mi / ci / mu / jej","ru":"мне / тебе / ему / ей","ex":"Powiem ci jutro."},
     {"en":"nam / wam / im","ru":"нам / вам / им","ex":"On im pomoże."},
     {"en":"dziękować (dziękuję)","ru":"благодарить (+ celownik)","ex":"Dziękuję ci za prezent."},
     {"en":"pomagać (pomagam)","ru":"помогать (+ celownik)","ex":"Pomagam mamie."},
     {"en":"dać (dam, dasz)","ru":"дать, подарить","ex":"Dam Ewie kwiaty."},
     {"en":"mamie / siostrze","ru":"маме / сестре","ex":"Pomagam siostrze."},
     {"en":"bratu / ojcu / panu","ru":"брату / отцу / Вам","ex":"Kupię bratu książkę."},
     {"en":"Markowi / synowi","ru":"Мареку / сыну","ex":"Powiem Markowi wieczorem."},
     {"en":"prezent","ru":"подарок","ex":"To jest prezent dla ciebie."},
     {"en":"kwiaty","ru":"цветы","ex":"Mamie kupię kwiaty."},
     {"en":"pomoc","ru":"помощь","ex":"Dziękuję za pomoc."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу.",
   "pairs":[["mamie","маме"],["bratu","брату"],["Markowi","Мареку"],["dziękuję ci","спасибо тебе"]]
 },
 "reading":{
   "intro":"Прочитай вслух — здесь дательный почти в каждой строке.",
   "title":"Prezenty",
   "sentences":["W piątek Ewa ma urodziny.","Kupimy jej książkę.","Ewie podobają się książki o Krakowie.","Mamie kupię kwiaty.","Ona pomagała nam całe lato.","Bratu dam czekoladę.","Dziś powiem o wszystkim Markowi.","Marek pomoże mi w kuchni.","Dziękuję mu za wszystko.","A on mówi: nie ma za co.","Wieczorem powiem wam, jak było."],
   "translation":"В пятницу у Евы день рождения. Купим ей книгу. Еве нравятся книги о Кракове. Маме куплю цветы. Она помогала нам всё лето. Брату дам шоколад. Сегодня расскажу обо всём Мареку. Марек поможет мне на кухне. Спасибо ему за всё. А он говорит: не за что. Вечером расскажу вам, как всё прошло."
 },
 "quiz":{
   "intro":"Пять вопросов — и пятый падеж твой.",
   "items":[
     {"q":"1. «Спасибо тебе за подарок» —","opts":["Dziękuję cię za prezent","Dziękuję ci za prezent","Dziękuję ciebie za prezent"],"answer":1,
      "explain":"Dziękować требует дательного: <b>ci</b>. Опора — русское «спасибо тебе»."},
     {"q":"2. «Я помогаю маме» —","opts":["Pomagam mamę","Pomagam mamie","Pomagam mamy"],"answer":1,
      "explain":"Celownik от mama — <b>mamie</b>."},
     {"q":"3. «Куплю брату книгу» —","opts":["Kupię brata książkę","Kupię bratu książkę","Kupię bratowi książkę"],"answer":1,
      "explain":"Brat — короткая форма на -u: <b>bratu</b>."},
     {"q":"4. «Скажу Мареку» —","opts":["Powiem Marka","Powiem Markowi","Powiem Markiem"],"answer":1,
      "explain":"Мужской род обычно берёт -owi: <b>Markowi</b>."},
     {"q":"5. «Еве нравится этот подарок» —","opts":["Ewa podoba się ten prezent","Ewie podoba się ten prezent","Ewie podobają się ten prezent"],"answer":1,
      "explain":"Имя встаёт в celownik: <b>Ewie</b>, подарок один — значит podoba."}
   ]
 },
 "essay":{
   "intro":"Напиши про подарки — кому что достанется.",
   "prompt":"Напиши 4–5 фраз: кому ты купишь подарок, что именно и почему.",
   "hint":"Опора: Kupię … prezent. … podoba się … Dziękuję … za … Проверь окончания: mamie, bratu, Markowi. 💛",
   "example":"W maju mama ma urodziny. Kupię jej kwiaty. Mamie podobają się róże. Bratu dam książkę — on lubi czytać. Dziękuję im za wszystko."
 }
},
"12": {
 "day":12,"week":"02",
 "themeRu":"Мама! Аня!",
 "themeEn":"Wołacz i zwroty",
 "intro":"Русский звательный падеж почти растворился — но следы живы: «мам!», «пап!», «Господи». В польском он на месте и работает каждый день: <b>Mamo! Aniu! Panie Marku!</b> Сегодня научимся звать людей по имени так, как это делают поляки, — и напишем первую открытку.",
 "introAudio":"Русский звательный падеж почти растворился, но следы живы: «мам», «пап», «Господи». В польском он на месте и работает каждый день: Mamo! Aniu! Panie Marku! Сегодня научимся звать людей по имени так, как это делают поляки, и напишем первую открытку.",
 "goals":[
   "Звать по имени в звательном падеже: <b>Mamo! Aniu! Marku!</b>",
   "Обращаться вежливо: <b>Panie Marku! Pani Ewo!</b>",
   "Запомнить три исключения: Panie! Boże! Ojcze!",
   "Написать открытку: Kochana Mamo! … Pozdrawiam serdecznie"
 ],
 "learned":[
   "Позвал(а) по имени в звательном падеже: Mamo! Aniu! Marku!",
   "Обратился(лась) вежливо: Panie Marku! Pani Ewo!",
   "Запомнил(а) три исключения: Panie! Boże! Ojcze!",
   "Написал(а) открытку: Kochana Mamo! … Pozdrawiam serdecznie"
 ],
 "review":{
   "intro":"Утренний круг: вчерашний дательный — и вид глагола, куда же без него.",
   "introAudio":"Утренний круг: вчерашний дательный — и вид глагола, куда же без него.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> кому помогаю?",
      "q":"«Я помогаю маме» —","opts":["Pomagam mamę","Pomagam mamie","Pomagam mamy"],"answer":1,
      "explain":"Celownik от mama — <b>mamie</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> опирайся на «спасибо тебе».",
      "q":"«Спасибо тебе за подарок» —","opts":["Dziękuję cię za prezent","Dziękuję ci za prezent","Dziękuję ciebie za prezent"],"answer":1,
      "explain":"Dziękować идёт с дательным: <b>dziękuję ci</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> это слово из короткого списка на -u.",
      "q":"«Куплю брату книгу» —","opts":["Kupię brata książkę","Kupię bratu książkę","Kupię bratowi książkę"],"answer":1,
      "explain":"Brat — исключение: <b>bratu</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Еве нравится этот подарок»</b>","answer":"Ewie podoba się ten prezent"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Женские имена",
    "title":"<em>Mamo! Ewo! Aniu!</em>",
    "paras":[
      "Wołacz — падеж обращения, седьмой и последний в польском. Он нужен только для одного: позвать. В русском от него остались обломки — «мам!», «пап!», «Господи», «Боже», — а в польском он живой и в письме обязателен.",
      "Женские слова на -a получают <b>-o</b>: mama → <b>Mamo!</b>, Ewa → <b>Ewo!</b>, Anna → <b>Anno!</b>, siostra → <b>Siostro!</b>, а заодно и tata → <b>Tato!</b> — слово мужское, но склоняется как женское.",
      "Ласковые и мягкие имена берут <b>-u</b>: Ania → <b>Aniu!</b>, Kasia → <b>Kasiu!</b>, babcia → <b>Babciu!</b>, ciocia → <b>Ciociu!</b>, mamusia → <b>Mamusiu!</b> Заметь: русское «мамуля» и польское Mamusiu греют одинаково."
    ],
    "audio":"Wołacz — падеж обращения, седьмой и последний в польском. Он нужен только для одного: позвать. В русском от него остались обломки: мам, пап, Господи, Боже. А в польском он живой и в письме обязателен. Женские слова на -a получают -o: mama — Mamo, Ewa — Ewo, Anna — Anno, siostra — Siostro, а заодно и tata — Tato: слово мужское, но склоняется как женское. Ласковые и мягкие имена берут -u: Ania — Aniu, Kasia — Kasiu, babcia — Babciu, ciocia — Ciociu, mamusia — Mamusiu. Заметь: русское «мамуля» и польское Mamusiu греют одинаково.",
    "table":{"rows":[
      ["mama → <b>Mamo!</b> <button class=\"play\" data-say=\"Mamo!\">🔊</button>","мама"],
      ["tata → <b>Tato!</b> <button class=\"play\" data-say=\"Tato!\">🔊</button>","папа"],
      ["Ewa → <b>Ewo!</b> · Anna → <b>Anno!</b>","имена на -a"],
      ["Ania → <b>Aniu!</b> <button class=\"play\" data-say=\"Aniu!\">🔊</button>","мягкие — -u"],
      ["babcia → <b>Babciu!</b> · ciocia → <b>Ciociu!</b>","бабушка · тётя"],
      ["siostra → <b>Siostro!</b>","сестра"]
    ],"star":3},
    "examples":[
      {"ru":"Мама, у тебя есть минутка?","en":"<b>Mamo</b>, masz chwilę?","say":"Mamo, masz chwilę?"},
      {"ru":"Аня, пойдём!","en":"<b>Aniu</b>, chodźmy!","say":"Aniu, chodźmy!"},
      {"ru":"Ева, спасибо тебе за помощь.","en":"<b>Ewo</b>, dziękuję ci za pomoc.","gloss":"вчерашний дательный рядом","say":"Ewo, dziękuję ci za pomoc."},
      {"ru":"Бабушка, я напишу тебе завтра.","en":"<b>Babciu</b>, napiszę do Ciebie jutro.","say":"Babciu, napiszę do Ciebie jutro."}
    ],
    "mistakes":[
      {"wrong":"Mama, masz chwilę?","right":"<b>Mamo</b>, masz chwilę?","why":"Когда зовёшь — звательный: Mamo. Форма mama остаётся для «мама пришла»."},
      {"wrong":"Anio!","right":"<b>Aniu!</b>","why":"Мягкое имя на -ia берёт -u, а не -o."}
    ],
    "mnemonic":"📣 Зовёшь женщину — -o (Mamo, Ewo). Ласково или мягко — -u (Aniu, Babciu).",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> ты зовёшь маму, а не рассказываешь о ней.",
       "q":"«Мама, у тебя есть минутка?» —","opts":["Mama, masz chwilę?","Mamo, masz chwilę?","Mamie, masz chwilę?"],"answer":1,
       "explain":"Обращение — звательный: <b>Mamo</b>. Mamie — это дательный, «маме»."},
      {"type":"choice","q":"Зовём Аню (Ania) —","opts":["Ania!","Aniu!","Anio!"],"answer":1,
       "explain":"Мягкие имена берут -u: <b>Aniu!</b>"},
      {"type":"type","howto":"Напиши обращение к Еве: «Ева!». Одно слово.",
       "q":"Ева! (обращение)","accept":["ewo","ewo!"],"placeholder":"Ew…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Мужские имена",
    "title":"<em>Marku! Tomku! Piotrze!</em>",
    "paras":[
      "У мужских слов есть удобная подсказка: их звательный чаще всего совпадает с формой, которую ты знаешь по предлогу o — то есть с miejscownikiem. Говоришь <em>o Marku</em> — зовёшь <b>Marku!</b> Говоришь <em>o Tomku</em> — зовёшь <b>Tomku!</b>",
      "Так же работают: Piotr → <b>Piotrze!</b>, brat → <b>Bracie!</b>, syn → <b>Synu!</b>, profesor → <b>Profesorze!</b>, doktor → <b>Doktorze!</b>",
      "И три исключения, которые встречаются каждый день: <b>pan → Panie!</b>, <b>Bóg → Boże!</b>, <b>ojciec → Ojcze!</b> Первое из них — самое важное, без него не собрать вежливое обращение."
    ],
    "audio":"У мужских слов есть удобная подсказка: их звательный чаще всего совпадает с формой, которую ты знаешь по предлогу o — то есть с miejscownikiem. Говоришь o Marku — зовёшь Marku. Говоришь o Tomku — зовёшь Tomku. Так же работают: Piotr — Piotrze, brat — Bracie, syn — Synu, profesor — Profesorze, doktor — Doktorze. И три исключения, которые встречаются каждый день: pan — Panie, Bóg — Boże, ojciec — Ojcze. Первое из них самое важное, без него не собрать вежливое обращение.",
    "table":{"rows":[
      ["Marek → <b>Marku!</b> <button class=\"play\" data-say=\"Marku!\">🔊</button>","как o Marku"],
      ["Tomek → <b>Tomku!</b>","как o Tomku"],
      ["Piotr → <b>Piotrze!</b>","как o Piotrze"],
      ["brat → <b>Bracie!</b> · syn → <b>Synu!</b>","брат · сын"],
      ["pan → <b>Panie!</b> <button class=\"play\" data-say=\"Panie!\">🔊</button>","исключение"],
      ["Bóg → <b>Boże!</b> · ojciec → <b>Ojcze!</b>","исключения"]
    ],"star":4},
    "examples":[
      {"ru":"Марек, ты будешь дома?","en":"<b>Marku</b>, będziesz w domu?","say":"Marku, będziesz w domu?"},
      {"ru":"Томек, помоги мне.","en":"<b>Tomku</b>, pomóż mi.","say":"Tomku, pomóż mi."},
      {"ru":"Брат, спасибо тебе.","en":"<b>Bracie</b>, dziękuję ci.","say":"Bracie, dziękuję ci."},
      {"ru":"Боже, как красиво!","en":"<b>Boże</b>, jak pięknie!","gloss":"как русское «Боже»","say":"Boże, jak pięknie!"}
    ],
    "mistakes":[
      {"wrong":"Panu, przepraszam!","right":"<b>Panie</b>, przepraszam!","why":"Panu — дательный («Вам»). В обращении — Panie."},
      {"wrong":"Marek, będziesz w domu?","right":"<b>Marku</b>, będziesz w domu?","why":"В обращении норма — звательный. В быстрой речи имена нередко зовут и именительным, но письмо этого не прощает."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни форму после предлога o.",
       "q":"Зовём Марека —","opts":["Marku!","Markowi!","Markiem!"],"answer":0,
       "explain":"Звательный совпадает с формой o Marku: <b>Marku!</b> Markowi — дательный, Markiem — творительный."},
      {"type":"choice","q":"Какое слово — исключение?","opts":["Tomek → Tomku","pan → Panie","Piotr → Piotrze"],"answer":1,
       "explain":"У pan звательный <b>Panie</b>, хотя после o будет panu."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Первое слово — обращение.",
       "q":"Собери: <b>«Марек, ты будешь дома?»</b>","answer":"Marku będziesz w domu"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Вежливо",
    "title":"<em>Panie Marku! Pani Ewo!</em>",
    "paras":[
      "Самая частая рамка вежливости: <b>pan</b> или <b>pani</b> плюс имя, и оба слова встают в звательный. <b>Panie Marku!</b> <b>Pani Ewo!</b> <b>Panie Tomku!</b> Так обращаются к соседу, к коллеге, к продавцу, которого знаешь по имени.",
      "С должностью — так же: <b>Panie profesorze!</b>, <b>Panie doktorze!</b>, <b>Panie kierowniku!</b> А фамилии на -ski в обращении не меняются: <b>Panie Kowalski!</b>, <b>Pani Kowalska!</b>",
      "Если имени не знаешь, зовут готовой формулой: <b>Przepraszam pana!</b> — к мужчине, <b>Przepraszam panią!</b> — к женщине. Эти две фразы бери целиком, разбирать их не нужно."
    ],
    "audio":"Самая частая рамка вежливости: pan или pani плюс имя, и оба слова встают в звательный. Panie Marku! Pani Ewo! Panie Tomku! Так обращаются к соседу, к коллеге, к продавцу, которого знаешь по имени. С должностью так же: Panie profesorze, Panie doktorze, Panie kierowniku. А фамилии на -ski в обращении не меняются: Panie Kowalski, Pani Kowalska. Если имени не знаешь, зовут готовой формулой: przepraszam pana — к мужчине, przepraszam panią — к женщине. Эти две фразы бери целиком, разбирать их не нужно.",
    "table":{"rows":[
      ["Panie Marku! <button class=\"play\" data-say=\"Panie Marku!\">🔊</button>","к мужчине по имени"],
      ["Pani Ewo! <button class=\"play\" data-say=\"Pani Ewo!\">🔊</button>","к женщине по имени"],
      ["Panie Kowalski! · Pani Kowalska!","фамилии на -ski не меняются"],
      ["Panie profesorze! · Panie doktorze!","с должностью"],
      ["Przepraszam pana!","«извините» — к незнакомому мужчине"],
      ["Przepraszam panią!","«извините» — к незнакомой женщине"]
    ],"star":0},
    "examples":[
      {"ru":"Пан Марек, у Вас есть минутка?","en":"<b>Panie Marku</b>, ma pan chwilę?","say":"Panie Marku, ma pan chwilę?"},
      {"ru":"Пани Ева, спасибо Вам.","en":"<b>Pani Ewo</b>, dziękuję pani.","say":"Pani Ewo, dziękuję pani."},
      {"ru":"Пан Ковальский, я позвоню завтра.","en":"<b>Panie Kowalski</b>, zadzwonię jutro.","say":"Panie Kowalski, zadzwonię jutro."},
      {"ru":"Извините! Вы не знаете, где вокзал?","en":"<b>Przepraszam pana!</b> Gdzie jest dworzec?","say":"Przepraszam pana! Gdzie jest dworzec?"}
    ],
    "mistakes":[
      {"wrong":"Pan Marek, ma pan chwilę?","right":"<b>Panie Marku</b>, ma pan chwilę?","why":"В обращении оба слова идут в звательный: Panie Marku."},
      {"wrong":"Panie Kowalsku!","right":"<b>Panie Kowalski!</b>","why":"Фамилии на -ski ведут себя как прилагательные и в обращении не меняются."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> оба слова меняются.",
       "q":"Вежливо к Мареку —","opts":["Pan Marek!","Panie Marku!","Panie Marek!"],"answer":1,
       "explain":"Оба слова в звательном: <b>Panie Marku!</b>"},
      {"type":"choice","q":"Вежливо к пани Еве —","opts":["Pani Ewo!","Pani Ewa!","Panie Ewo!"],"answer":0,
       "explain":"<b>Pani Ewo!</b> — pani не меняется, а имя получает -o."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Panie Marku, dziękuję za pomoc.","sub":"пан Марек, спасибо за помощь","want":"Panie Marku, dziękuję za pomoc."}
    ]
   },
   {
    "eyebrow":"Правило 4 · Открытка",
    "title":"Как начать и чем закончить",
    "paras":[
      "Открытка или письмо всегда открывается обращением в звательном, с восклицательным знаком, а следующая строка начинается с большой буквы. Тепло: <b>Kochana Mamo!</b>, <b>Kochany Tato!</b>, <b>Droga Aniu!</b>, <b>Drogi Marku!</b> Официально: <b>Szanowny Panie Kowalski!</b>, <b>Szanowna Pani!</b>",
      "Тело открытки короткое и живое: <b>Pozdrowienia z Gdańska!</b> (привет из Гданьска), <b>Jest tu pięknie.</b> (здесь красиво), <b>Jutro będę zwiedzać stare miasto.</b>, <b>W piątek wrócę do domu.</b>",
      "Концовки на выбор: <b>Pozdrawiam serdecznie</b> (сердечно приветствую), <b>Ściskam</b> (обнимаю), <b>Do zobaczenia</b> (до встречи), а в официальном письме — <b>Z poważaniem</b> (с уважением). И маленькая деталь польской вежливости: в письмах слова, обращённые к адресату, пишут с большой буквы — <b>Ci, Ciebie, Tobie, Pana, Pani</b>."
    ],
    "audio":"Открытка или письмо всегда открывается обращением в звательном, с восклицательным знаком, а следующая строка начинается с большой буквы. Тепло: Kochana Mamo, Kochany Tato, Droga Aniu, Drogi Marku. Официально: Szanowny Panie Kowalski, Szanowna Pani. Тело открытки короткое и живое: pozdrowienia z Gdańska — привет из Гданьска; jest tu pięknie — здесь красиво; jutro będę zwiedzać stare miasto; w piątek wrócę do domu. Концовки на выбор: pozdrawiam serdecznie, ściskam, do zobaczenia, а в официальном письме — z poważaniem. И маленькая деталь польской вежливости: в письмах слова, обращённые к адресату, пишут с большой буквы: Ci, Ciebie, Tobie, Pana, Pani.",
    "table":{"rows":[
      ["Kochana Mamo! <button class=\"play\" data-say=\"Kochana Mamo!\">🔊</button>","дорогая мама!"],
      ["Droga Aniu! · Drogi Marku!","дорогая Аня! · дорогой Марек!"],
      ["Szanowny Panie Kowalski!","уважаемый пан Ковальский!"],
      ["Pozdrowienia z Gdańska! <button class=\"play\" data-say=\"Pozdrowienia z Gdańska!\">🔊</button>","привет из Гданьска!"],
      ["Pozdrawiam serdecznie · Ściskam","сердечно приветствую · обнимаю"],
      ["Z poważaniem","с уважением — в официальном письме"]
    ],"star":3},
    "examples":[
      {"ru":"Дорогая мама! Привет из Гданьска.","en":"<b>Kochana Mamo!</b> Pozdrowienia z Gdańska.","say":"Kochana Mamo! Pozdrowienia z Gdańska."},
      {"ru":"Здесь красиво. Завтра я буду осматривать старый город.","en":"Jest tu pięknie. Jutro <b>będę zwiedzać</b> stare miasto.","say":"Jest tu pięknie. Jutro będę zwiedzać stare miasto."},
      {"ru":"В пятницу вернусь домой. Обнимаю, твоя Анна.","en":"W piątek <b>wrócę</b> do domu. <b>Ściskam, Twoja Anna.</b>","say":"W piątek wrócę do domu. Ściskam, Twoja Anna."},
      {"ru":"Уважаемый пан Ковальский! Спасибо Вам за помощь.","en":"<b>Szanowny Panie Kowalski!</b> Dziękuję <b>Panu</b> za pomoc.","gloss":"в письме Panu — с большой буквы","say":"Szanowny Panie Kowalski! Dziękuję Panu za pomoc."}
    ],
    "mistakes":[
      {"wrong":"Kochana Mama!","right":"<b>Kochana Mamo!</b>","why":"Обращение всегда в звательном, даже если прилагательное перед ним не меняется."},
      {"wrong":"Z poważaniem, Twoja Ania","right":"<b>Ściskam, Twoja Ania</b>","why":"Z poważaniem — сухая официальная концовка, к маме или подруге она не идёт."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> открытка — это письмо, тут звательный обязателен.",
       "q":"Начало открытки маме —","opts":["Kochana Mama!","Kochana Mamo!","Kochano Mamo!"],"answer":1,
       "explain":"Имя в звательном, прилагательное не меняется: <b>Kochana Mamo!</b>"},
      {"type":"choice","q":"Официальное письмо заканчивают словами —","opts":["Ściskam","Z poważaniem","Do zobaczenia"],"answer":1,
       "explain":"<b>Z poważaniem</b> — «с уважением». Ściskam и Do zobaczenia — для своих."},
      {"type":"type","howto":"Напиши концовку открытки «Сердечно приветствую». Диакритики тут нет.",
       "q":"Сердечно приветствую (концовка открытки)","accept":["pozdrawiam serdecznie","serdecznie pozdrawiam"],"placeholder":"Pozdrawiam…"}
    ]
   }
 ],
 "scene":{
   "intro":"Короткая сценка — три обращения подряд.",
   "lines":[
     {"who":"A","en":"Mamo, gdzie jest Ania?","ru":"Мама, где Аня?"},
     {"who":"B","en":"Aniu! Chodź tutaj!","ru":"Аня! Иди сюда!"},
     {"who":"A","en":"Idę! A gdzie tata?","ru":"Иду! А где папа?"},
     {"who":"B","en":"Tato, telefon do ciebie!","ru":"Папа, тебе звонят!"},
     {"who":"A","en":"Panie Kowalski, dzień dobry!","ru":"Пан Ковальский, добрый день!"}
   ]
 },
 "vocab":{
   "intro":"Слова дня — обращения и открытка.",
   "items":[
     {"en":"Mamo! / Tato!","ru":"мама! / папа!","ex":"Mamo, masz chwilę?"},
     {"en":"Aniu! / Ewo!","ru":"Аня! / Ева!","ex":"Aniu, chodźmy!"},
     {"en":"Marku! / Tomku!","ru":"Марек! / Томек!","ex":"Marku, będziesz w domu?"},
     {"en":"Panie Marku! / Pani Ewo!","ru":"пан Марек! / пани Ева!","ex":"Panie Marku, dziękuję za pomoc."},
     {"en":"Przepraszam pana!","ru":"извините! (к мужчине)","ex":"Przepraszam pana! Gdzie jest dworzec?"},
     {"en":"Kochana Mamo!","ru":"дорогая мама! (в письме)","ex":"Kochana Mamo! Pozdrowienia z Gdańska."},
     {"en":"Droga Aniu! / Drogi Marku!","ru":"дорогая Аня! / дорогой Марек!","ex":"Droga Aniu! Piszę do Ciebie z Krakowa."},
     {"en":"Szanowny Panie!","ru":"уважаемый пан! (официально)","ex":"Szanowny Panie Kowalski!"},
     {"en":"pozdrowienia","ru":"привет, приветствия","ex":"Pozdrowienia z Gdańska!"},
     {"en":"Pozdrawiam serdecznie","ru":"сердечно приветствую","ex":"Pozdrawiam serdecznie, Anna."},
     {"en":"Ściskam","ru":"обнимаю","ex":"Ściskam, Twoja Ania."},
     {"en":"Z poważaniem","ru":"с уважением","ex":"Z poważaniem, Anna Nowak."}
   ]
 },
 "drag":{
   "intro":"Перетащи обращение к его переводу.",
   "pairs":[["Mamo!","мама!"],["Aniu!","Аня!"],["Panie Marku!","пан Марек!"],["Ściskam","обнимаю"]]
 },
 "reading":{
   "intro":"Открытка Анны из Гданьска. Прочитай вслух и заметь большие буквы в словах, обращённых к маме.",
   "title":"Kartka z Gdańska",
   "sentences":["Kochana Mamo!","Pozdrowienia z Gdańska!","Jest tu pięknie i ciepło.","Dziś rano byłam nad morzem.","Jutro będę zwiedzać stare miasto.","W piątek wrócę do domu.","Kupię Ci mały prezent.","Dziękuję Ci za wszystko.","Ściskam mocno,","Twoja Anna"],
   "translation":"Дорогая мама! Привет из Гданьска! Здесь красиво и тепло. Сегодня утром я была на море. Завтра буду осматривать старый город. В пятницу вернусь домой. Куплю тебе маленький подарок. Спасибо тебе за всё. Крепко обнимаю, твоя Анна."
 },
 "quiz":{
   "intro":"Пять вопросов — и седьмой падеж закрыт.",
   "items":[
     {"q":"1. «Мама, у тебя есть минутка?» —","opts":["Mama, masz chwilę?","Mamo, masz chwilę?","Mamie, masz chwilę?"],"answer":1,
      "explain":"Обращение — звательный: <b>Mamo</b>."},
     {"q":"2. Зовём Аню (Ania) —","opts":["Ania!","Aniu!","Anio!"],"answer":1,
      "explain":"Мягкие имена берут -u: <b>Aniu!</b>"},
     {"q":"3. Зовём Марека —","opts":["Marku!","Markowi!","Markiem!"],"answer":0,
      "explain":"<b>Marku!</b> — как форма после o. Markowi — дательный, Markiem — творительный."},
     {"q":"4. Вежливо к Мареку —","opts":["Pan Marek!","Panie Marku!","Panie Marek!"],"answer":1,
      "explain":"Оба слова в звательном: <b>Panie Marku!</b>"},
     {"q":"5. Начало открытки маме —","opts":["Kochana Mama!","Kochana Mamo!","Kochano Mamo!"],"answer":1,
      "explain":"Прилагательное не меняется, имя — в звательном: <b>Kochana Mamo!</b>"}
   ]
 },
 "essay":{
   "intro":"Напиши свою открытку — короткую, на пять строк.",
   "prompt":"Напиши открытку близкому человеку: обращение, где ты, что делаешь, когда вернёшься, концовка.",
   "hint":"Опора: Kochana Mamo! / Droga Aniu! … Pozdrowienia z… Jutro będę… W piątek wrócę… Pozdrawiam serdecznie. 💛",
   "example":"Kochana Mamo! Pozdrowienia z Krakowa! Jest tu pięknie. Jutro będę zwiedzać stare miasto. W niedzielę wrócę do domu. Ściskam, Twoja Anna."
 }
},
"13": {
 "day":13,"week":"02",
 "themeRu":"Какое сегодня число",
 "themeEn":"Daty i miesiące",
 "intro":"Какое сегодня число? Чтобы ответить по-польски, нужны две вещи: порядковое числительное и месяц в родительном падеже — <b>pierwszego maja</b>. Логика ровно русская, «первого мая». Останется выучить сами месяцы: styczeń и luty на «январь» с «февралём» совсем не похожи.",
 "introAudio":"Какое сегодня число? Чтобы ответить по-польски, нужны две вещи: порядковое числительное и месяц в родительном падеже — pierwszego maja. Логика ровно русская, «первого мая». Останется выучить сами месяцы: styczeń и luty на «январь» с «февралём» совсем не похожи.",
 "goals":[
   "Называть месяцы: styczeń, luty, marzec, kwiecień…",
   "Отвечать на вопрос о дате: <b>Dziś jest piąty maja</b>",
   "Говорить, когда: <b>piątego maja</b>, <b>w maju</b>",
   "Поздравлять с днём рождения: Wszystkiego najlepszego!"
 ],
 "learned":[
   "Назвал(а) месяцы: styczeń, luty, marzec, kwiecień…",
   "Ответил(а) на вопрос о дате: Dziś jest piąty maja",
   "Сказал(а), когда: piątego maja, w maju",
   "Поздравил(а) с днём рождения: Wszystkiego najlepszego!"
 ],
 "review":{
   "intro":"Утренний круг: вчерашние обращения, позавчерашний дательный — и вид глагола.",
   "introAudio":"Утренний круг: вчерашние обращения, позавчерашний дательный — и вид глагола.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> это обращение, а не рассказ о маме.",
      "q":"Начало открытки маме —","opts":["Kochana Mama!","Kochana Mamo!","Kochanej Mamie!"],"answer":1,
      "explain":"Обращение — звательный: <b>Kochana Mamo!</b>"},
     {"type":"choice","howto":"<b>Что делать:</b> оба слова меняются.",
      "q":"Вежливо к Мареку —","opts":["Pan Marek!","Panie Marku!","Panie Marek!"],"answer":1,
      "explain":"<b>Panie Marku!</b> — pan и имя оба идут в звательный."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, какого падежа требует dziękować.",
      "q":"«Спасибо Вам» (мужчине) —","opts":["Dziękuję pan","Dziękuję panu","Dziękuję pana"],"answer":1,
      "explain":"Дательный от pan — <b>panu</b>."},
     {"type":"type","howto":"Напиши концовку открытки «Сердечно приветствую».",
      "q":"Сердечно приветствую (концовка открытки)","accept":["pozdrawiam serdecznie","serdecznie pozdrawiam"],"placeholder":"Pozdrawiam…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Месяцы",
    "title":"Двенадцать слов, которые надо просто взять",
    "paras":[
      "Польские месяцы славянские, но не совпадают с русскими — в этом и подвох: <b>styczeń</b> (январь), <b>luty</b> (февраль), <b>marzec</b> (март), <b>kwiecień</b> (апрель), <b>maj</b> (май), <b>czerwiec</b> (июнь), <b>lipiec</b> (июль), <b>sierpień</b> (август), <b>wrzesień</b> (сентябрь), <b>październik</b> (октябрь), <b>listopad</b> (ноябрь), <b>grudzień</b> (декабрь).",
      "Два узнаваемых островка: <b>listopad</b> — «листопад», ноябрь, и <b>marzec</b> — март. Остальные придётся выучить, зато они говорящие: kwiecień от kwiat (цветок), lipiec от lipa (липа), sierpień от sierp (серп).",
      "Ударение везде на предпоследнем слоге: <b>styczeń</b> [сты́чень], <b>wrzesień</b> [вжэ́сень], <b>grudzień</b> [гру́дзень]. Про «в каком месяце» говорят с предлогом w и знакомым miejscownikiem: <b>w styczniu, w lutym, w marcu, w maju, we wrześniu, w grudniu</b>."
    ],
    "audio":"Польские месяцы славянские, но не совпадают с русскими — в этом и подвох: styczeń — январь, luty — февраль, marzec — март, kwiecień — апрель, maj — май, czerwiec — июнь, lipiec — июль, sierpień — август, wrzesień — сентябрь, październik — октябрь, listopad — ноябрь, grudzień — декабрь. Два узнаваемых островка: listopad — это листопад, то есть ноябрь, и marzec — март. Остальные придётся выучить, зато они говорящие: kwiecień от kwiat, цветок; lipiec от lipa, липа; sierpień от sierp, серп. Ударение везде на предпоследнем слоге: стычень, вжэсень, грудзень. Про «в каком месяце» говорят с предлогом w и знакомым miejscownikiem: w styczniu, w lutym, w marcu, w maju, we wrześniu, w grudniu.",
    "table":{"rows":[
      ["styczeń · luty · marzec <button class=\"play\" data-say=\"styczeń, luty, marzec\">🔊</button>","январь · февраль · март"],
      ["kwiecień · maj · czerwiec <button class=\"play\" data-say=\"kwiecień, maj, czerwiec\">🔊</button>","апрель · май · июнь"],
      ["lipiec · sierpień · wrzesień <button class=\"play\" data-say=\"lipiec, sierpień, wrzesień\">🔊</button>","июль · август · сентябрь"],
      ["październik · listopad · grudzień <button class=\"play\" data-say=\"październik, listopad, grudzień\">🔊</button>","октябрь · ноябрь · декабрь"],
      ["w styczniu · w lutym · w maju","в январе · в феврале · в мае"],
      ["we wrześniu · w grudniu","в сентябре · в декабре"]
    ],"star":-1},
    "examples":[
      {"ru":"У меня день рождения в мае.","en":"Mam urodziny <b>w maju</b>.","say":"Mam urodziny w maju."},
      {"ru":"В сентябре я буду работать в Кракове.","en":"<b>We wrześniu</b> będę pracować w Krakowie.","gloss":"перед wrz- предлог удлиняется: we","say":"We wrześniu będę pracować w Krakowie."},
      {"ru":"В ноябре здесь холодно.","en":"<b>W listopadzie</b> jest tu zimno.","say":"W listopadzie jest tu zimno."},
      {"ru":"В декабре мы будем дома.","en":"<b>W grudniu</b> będziemy w domu.","say":"W grudniu będziemy w domu."}
    ],
    "mistakes":[
      {"wrong":"w wrześniu","right":"<b>we</b> wrześniu","why":"Перед скоплением согласных предлог w удлиняется до we — так легче произнести."},
      {"wrong":"Mam urodziny w maj.","right":"Mam urodziny <b>w maju</b>.","why":"После w — miejscownik, это правило из A1."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни «листопад».",
       "q":"Какой месяц — ноябрь?","opts":["listopad","październik","grudzień"],"answer":0,
       "explain":"<b>Listopad</b> — ноябрь. Październik — октябрь, grudzień — декабрь."},
      {"type":"choice","q":"«В сентябре» —","opts":["w wrześniu","we wrześniu","w wrzesień"],"answer":1,
       "explain":"Перед скоплением согласных предлог удлиняется: <b>we wrześniu</b>."},
      {"type":"type","howto":"Напиши «У меня день рождения в мае». Диакритику можно не ставить.",
       "q":"У меня день рождения в мае.","accept":["mam urodziny w maju","w maju mam urodziny"],"placeholder":"Mam urodziny…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Порядковые",
    "title":"<em>Pierwszy, drugi, trzeci…</em> до тридцати одного",
    "paras":[
      "Порядковые числительные уже встречались в A1 — тогда мы учились называть время: pierwsza, druga, trzecia — это они, только в женском роде. Для дат нужен мужской: <b>pierwszy, drugi, trzeci, czwarty, piąty, szósty, siódmy, ósmy, dziewiąty, dziesiąty</b>.",
      "Дальше — по узнаваемому образцу: <b>jedenasty, dwunasty, trzynasty, czternasty, piętnasty… dwudziesty</b>. Составные собираются из двух слов: <b>dwudziesty pierwszy</b> (двадцать первый), <b>dwudziesty piąty</b>, <b>trzydziesty pierwszy</b> (тридцать первый).",
      "Обрати внимание: в составном числе оба слова — порядковые, как и в русском «двадцать первый». Никаких «dwadzieścia pierwszy»."
    ],
    "audio":"Порядковые числительные уже встречались в A1 — тогда мы учились называть время: pierwsza, druga, trzecia — это они, только в женском роде. Для дат нужен мужской: pierwszy, drugi, trzeci, czwarty, piąty, szósty, siódmy, ósmy, dziewiąty, dziesiąty. Дальше по узнаваемому образцу: jedenasty, dwunasty, trzynasty, czternasty, piętnasty, и так до dwudziesty. Составные собираются из двух слов: dwudziesty pierwszy, dwudziesty piąty, trzydziesty pierwszy. Обрати внимание: в составном числе оба слова порядковые, как и в русском «двадцать первый».",
    "table":{"rows":[
      ["1 pierwszy · 2 drugi · 3 trzeci <button class=\"play\" data-say=\"pierwszy, drugi, trzeci\">🔊</button>","первый · второй · третий"],
      ["4 czwarty · 5 piąty · 6 szósty","четвёртый · пятый · шестой"],
      ["7 siódmy · 8 ósmy · 9 dziewiąty","седьмой · восьмой · девятый"],
      ["10 dziesiąty · 11 jedenasty · 12 dwunasty","десятый · одиннадцатый · двенадцатый"],
      ["20 dwudziesty · 21 dwudziesty pierwszy","двадцатый · двадцать первый"],
      ["30 trzydziesty · 31 trzydziesty pierwszy","тридцатый · тридцать первый"]
    ],"star":-1},
    "examples":[
      {"ru":"Первый день недели — понедельник.","en":"<b>Pierwszy</b> dzień tygodnia to poniedziałek.","say":"Pierwszy dzień tygodnia to poniedziałek."},
      {"ru":"Это мой второй год в Польше.","en":"To mój <b>drugi</b> rok w Polsce.","say":"To mój drugi rok w Polsce."},
      {"ru":"Двадцать первый век.","en":"<b>Dwudziesty pierwszy</b> wiek.","say":"Dwudziesty pierwszy wiek."}
    ],
    "mistakes":[
      {"wrong":"dwadzieścia pierwszy","right":"<b>dwudziesty pierwszy</b>","why":"В составном порядковом оба слова порядковые — как в русском «двадцать первый»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни часы из A1.",
       "q":"«Пятый» —","opts":["pięć","piąty","piąta"],"answer":1,
       "explain":"<b>Piąty</b> — порядковое мужского рода. Pięć — просто «пять», piąta — «пятая»."},
      {"type":"choice","q":"«Двадцать первый» —","opts":["dwadzieścia pierwszy","dwudziesty pierwszy","dwudziesty jeden"],"answer":1,
       "explain":"Оба слова порядковые: <b>dwudziesty pierwszy</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Это мой второй год в Польше»</b>","answer":"To mój drugi rok w Polsce"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Дата",
    "title":"<em>Piąty maja</em> и <em>piątego maja</em>",
    "paras":[
      "Месяц в дате всегда стоит в родительном падеже: maj → <b>maja</b>, styczeń → <b>stycznia</b>, luty → <b>lutego</b>, marzec → <b>marca</b>, kwiecień → <b>kwietnia</b>, czerwiec → <b>czerwca</b>, wrzesień → <b>września</b>, grudzień → <b>grudnia</b>. Русское «пятое мая» устроено так же.",
      "А само число меняется по вопросу. <b>Какое сегодня?</b> — именительный: <b>Dziś jest piąty maja.</b> Спросить можно так: <b>Jaka jest dzisiaj data?</b> или <b>Którego dzisiaj mamy?</b> — и тогда в ответе: <b>Dzisiaj mamy piątego maja.</b>",
      "<b>Когда?</b> — родительный, и это самое частое: <b>piątego maja</b>, <b>pierwszego stycznia</b>, <b>dwudziestego piątego grudnia</b>. Один в один русское «пятого мая», «первого января». Тут родная интуиция работает без сбоев."
    ],
    "audio":"Месяц в дате всегда стоит в родительном падеже: maj — maja, styczeń — stycznia, luty — lutego, marzec — marca, kwiecień — kwietnia, czerwiec — czerwca, wrzesień — września, grudzień — grudnia. Русское «пятое мая» устроено так же. А само число меняется по вопросу. Какое сегодня — именительный: dziś jest piąty maja. Спросить можно так: jaka jest dzisiaj data? или którego dzisiaj mamy? И тогда в ответе: dzisiaj mamy piątego maja. Когда — родительный, и это самое частое: piątego maja, pierwszego stycznia, dwudziestego piątego grudnia. Один в один русское «пятого мая», «первого января».",
    "table":{"rows":[
      ["Jaka jest dzisiaj data? <button class=\"play\" data-say=\"Jaka jest dzisiaj data?\">🔊</button>","какое сегодня число?"],
      ["Dziś jest piąty maja. <button class=\"play\" data-say=\"Dziś jest piąty maja.\">🔊</button>","сегодня пятое мая"],
      ["Kiedy? — piątego maja <button class=\"play\" data-say=\"piątego maja\">🔊</button>","когда? — пятого мая"],
      ["pierwszego stycznia · ósmego marca","первого января · восьмого марта"],
      ["dwudziestego piątego grudnia","двадцать пятого декабря"],
      ["w dwa tysiące dwudziestym szóstym roku","в две тысячи двадцать шестом году"]
    ],"star":2},
    "examples":[
      {"ru":"Сегодня пятое мая.","en":"Dziś jest <b>piąty maja</b>.","say":"Dziś jest piąty maja."},
      {"ru":"Мы вернёмся первого сентября.","en":"Wrócimy <b>pierwszego września</b>.","gloss":"когда? — родительный","say":"Wrócimy pierwszego września."},
      {"ru":"Восьмого марта — День женщин.","en":"<b>Ósmego marca</b> jest Dzień Kobiet.","say":"Ósmego marca jest Dzień Kobiet."},
      {"ru":"Я родился в тысяча девятьсот девяностом году.","en":"Urodziłem się <b>w tysiąc dziewięćset dziewięćdziesiątym roku</b>.","say":"Urodziłem się w tysiąc dziewięćset dziewięćdziesiątym roku."}
    ],
    "mistakes":[
      {"wrong":"Wrócimy pierwszy września.","right":"Wrócimy <b>pierwszego</b> września.","why":"На вопрос «когда» и число, и месяц идут в родительном — как русское «первого сентября»."},
      {"wrong":"piątego maj","right":"piątego <b>maja</b>","why":"Месяц в дате всегда в родительном: maja."}
    ],
    "mnemonic":"📅 «Когда?» — piątego maja, точь-в-точь «пятого мая». «Какое сегодня?» — Dziś jest piąty maja.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вопрос «когда» тянет родительный.",
       "q":"«Вернёмся первого сентября» —","opts":["Wrócimy pierwszy września","Wrócimy pierwszego września","Wrócimy pierwszego wrzesień"],"answer":1,
       "explain":"И число, и месяц в родительном: <b>pierwszego września</b>."},
      {"type":"choice","q":"«Двадцать пятого декабря» —","opts":["dwudziesty piąty grudnia","dwudziestego piątego grudnia","dwadzieścia pięć grudnia"],"answer":1,
       "explain":"Оба слова порядковые и оба в родительном: <b>dwudziestego piątego grudnia</b>."},
      {"type":"type","howto":"Напиши «пятого мая». Диакритику можно не ставить.",
       "q":"пятого мая","accept":["piątego maja","piatego maja"],"placeholder":"piątego…"}
    ]
   },
   {
    "eyebrow":"Правило 4 · День рождения",
    "title":"<em>Kiedy masz urodziny?</em>",
    "paras":[
      "Слово <b>urodziny</b> существует только во множественном числе — как русское «именины». Спрашивают так: <b>Kiedy masz urodziny?</b> Отвечают датой в родительном: <b>Mam urodziny piątego maja</b> — или просто месяцем: <b>Mam urodziny w maju</b>.",
      "Поздравления берём готовыми: <b>Wszystkiego najlepszego!</b> — «всего наилучшего», главное поздравление на все случаи. <b>Sto lat!</b> — «сто лет», польское «многая лета», его поют и говорят. И полная формула: <b>Życzę ci wszystkiego najlepszego!</b>",
      "Посмотри, что тут внутри: <b>życzę</b> требует дательного (<em>ci</em> — вчерашний celownik) и родительного (<em>wszystkiego najlepszego</em> — сегодняшний dopełniacz). Русское «желаю тебе всего наилучшего» устроено ровно так же, теми же двумя падежами."
    ],
    "audio":"Слово urodziny существует только во множественном числе — как русское «именины». Спрашивают так: kiedy masz urodziny? Отвечают датой в родительном: mam urodziny piątego maja. Или просто месяцем: mam urodziny w maju. Поздравления берём готовыми: wszystkiego najlepszego — всего наилучшего, главное поздравление на все случаи. Sto lat — сто лет, польское «многая лета», его поют и говорят. И полная формула: życzę ci wszystkiego najlepszego. Посмотри, что тут внутри: życzę требует дательного — ci, вчерашний celownik, и родительного — wszystkiego najlepszego, сегодняшний dopełniacz. Русское «желаю тебе всего наилучшего» устроено ровно так же, теми же двумя падежами.",
    "table":{"rows":[
      ["Kiedy masz urodziny? <button class=\"play\" data-say=\"Kiedy masz urodziny?\">🔊</button>","когда у тебя день рождения?"],
      ["Mam urodziny piątego maja.","у меня день рождения пятого мая"],
      ["Wszystkiego najlepszego! <button class=\"play\" data-say=\"Wszystkiego najlepszego!\">🔊</button>","всего наилучшего!"],
      ["Sto lat! <button class=\"play\" data-say=\"Sto lat!\">🔊</button>","сто лет! (польское «многая лета»)"],
      ["Życzę ci wszystkiego najlepszego.","желаю тебе всего наилучшего"],
      ["prezent na urodziny","подарок на день рождения"]
    ],"star":2},
    "examples":[
      {"ru":"Когда у тебя день рождения?","en":"<b>Kiedy masz urodziny?</b>","say":"Kiedy masz urodziny?"},
      {"ru":"У меня день рождения двадцать третьего октября.","en":"Mam urodziny <b>dwudziestego trzeciego października</b>.","say":"Mam urodziny dwudziestego trzeciego października."},
      {"ru":"Всего наилучшего!","en":"<b>Wszystkiego najlepszego!</b>","say":"Wszystkiego najlepszego!"},
      {"ru":"Желаю тебе всего наилучшего.","en":"<b>Życzę ci wszystkiego najlepszego.</b>","gloss":"дательный + родительный, как в русском","say":"Życzę ci wszystkiego najlepszego."}
    ],
    "mistakes":[
      {"wrong":"Kiedy masz urodzin?","right":"Kiedy masz <b>urodziny</b>?","why":"Urodziny — множественное число, и после mieć форма не меняется."},
      {"wrong":"Życzę cię wszystkiego najlepszego.","right":"Życzę <b>ci</b> wszystkiego najlepszego.","why":"Желают кому — дательный, как в русском «желаю тебе»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> дата отвечает на вопрос «когда».",
       "q":"«У меня день рождения пятого мая» —","opts":["Mam urodziny piąty maja","Mam urodziny piątego maja","Mam urodziny w piąty maj"],"answer":1,
       "explain":"«Когда» — родительный: <b>piątego maja</b>."},
      {"type":"choice","q":"Главное поздравление с днём рождения —","opts":["Wszystkiego najlepszego!","Nie ma za co!","Do zobaczenia!"],"answer":0,
       "explain":"<b>Wszystkiego najlepszego!</b> — «всего наилучшего». Две другие фразы значат «не за что» и «до встречи»."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Życzę ci wszystkiego najlepszego.","sub":"желаю тебе всего наилучшего","want":"Życzę ci wszystkiego najlepszego."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек сверяют календарь. Тапни по строке, чтобы увидеть перевод.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Marku, kiedy masz urodziny?","ru":"Марек, когда у тебя день рождения?",
      "words":[["Marku","Марек! (обращение)"],["urodziny","день рождения"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dwudziestego trzeciego października. A ty?","ru":"Двадцать третьего октября. А ты?",
      "words":[["Dwudziestego trzeciego","двадцать третьего"],["października","октября"]]},
     {"who":"A","name":"Anna","side":"left","en":"Ja mam urodziny w maju — piątego maja.","ru":"У меня день рождения в мае — пятого мая.",
      "words":[["w maju","в мае"],["piątego maja","пятого мая"]]},
     {"who":"M","name":"Marek","side":"right","en":"To niedługo. Co będziesz robić?","ru":"Это скоро. Что будешь делать?",
      "words":[["niedługo","скоро"]]},
     {"who":"A","name":"Anna","side":"left","en":"Jeszcze nie wiem. Może zrobię małe przyjęcie.","ru":"Ещё не знаю. Может, устрою небольшой праздник.",
      "words":[["przyjęcie","приём, праздник"],["Może","может быть"]]},
     {"who":"M","name":"Marek","side":"right","en":"To ja już dziś życzę ci wszystkiego najlepszego.","ru":"Тогда я уже сегодня желаю тебе всего наилучшего.",
      "words":[["życzę ci","желаю тебе"],["wszystkiego najlepszego","всего наилучшего"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — даты и поздравление.",
   "lines":[
     {"who":"A","en":"Jaka jest dzisiaj data?","ru":"Какое сегодня число?"},
     {"who":"B","en":"Dziś jest piąty maja.","ru":"Сегодня пятое мая."},
     {"who":"A","en":"Piątego maja? To twoje urodziny!","ru":"Пятого мая? Это же твой день рождения!"},
     {"who":"B","en":"Tak. Mam urodziny dzisiaj.","ru":"Да. У меня сегодня день рождения."},
     {"who":"A","en":"Sto lat! Wszystkiego najlepszego!","ru":"Сто лет! Всего наилучшего!"}
   ]
 },
 "vocab":{
   "intro":"Слова дня — календарь и поздравления.",
   "items":[
     {"en":"styczeń · luty · marzec","ru":"январь · февраль · март","ex":"W styczniu jest zimno."},
     {"en":"kwiecień · maj · czerwiec","ru":"апрель · май · июнь","ex":"Mam urodziny w maju."},
     {"en":"lipiec · sierpień · wrzesień","ru":"июль · август · сентябрь","ex":"We wrześniu wrócę do pracy."},
     {"en":"październik · listopad · grudzień","ru":"октябрь · ноябрь · декабрь","ex":"W grudniu będziemy w domu."},
     {"en":"pierwszy → pierwszego","ru":"первый → первого","ex":"Wrócimy pierwszego września."},
     {"en":"piąty → piątego","ru":"пятый → пятого","ex":"Mam urodziny piątego maja."},
     {"en":"Jaka jest dzisiaj data?","ru":"какое сегодня число?","ex":"Jaka jest dzisiaj data? — Piąty maja."},
     {"en":"Kiedy masz urodziny?","ru":"когда у тебя день рождения?","ex":"Kiedy masz urodziny? — W maju."},
     {"en":"urodziny","ru":"день рождения (только мн. ч.)","ex":"Mam urodziny w maju."},
     {"en":"Wszystkiego najlepszego!","ru":"всего наилучшего!","ex":"Sto lat i wszystkiego najlepszego!"},
     {"en":"Sto lat!","ru":"сто лет! (поздравление)","ex":"Sto lat, Marku!"},
     {"en":"przyjęcie","ru":"приём, праздник","ex":"Zrobię małe przyjęcie."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к его переводу.",
   "pairs":[["styczeń","январь"],["wrzesień","сентябрь"],["piątego maja","пятого мая"],["urodziny","день рождения"]]
 },
 "reading":{
   "intro":"Прочитай вслух календарь Анны. Заметь, где именительный, а где родительный.",
   "title":"Mój kalendarz",
   "sentences":["Dziś jest piąty maja.","To mój ulubiony miesiąc.","Mam urodziny piątego maja.","Marek ma urodziny dwudziestego trzeciego października.","Mama ma urodziny w lutym.","Pierwszego stycznia jest Nowy Rok.","Ósmego marca jest Dzień Kobiet.","Dwudziestego piątego grudnia jest Boże Narodzenie.","We wrześniu wrócę do pracy.","W przyszłym roku będę w Krakowie.","Sto lat wszystkim!"],
   "translation":"Сегодня пятое мая. Это мой любимый месяц. У меня день рождения пятого мая. У Марека день рождения двадцать третьего октября. У мамы день рождения в феврале. Первого января — Новый год. Восьмого марта — День женщин. Двадцать пятого декабря — Рождество. В сентябре я вернусь на работу. В следующем году буду в Кракове. Всем сто лет!"
 },
 "quiz":{
   "intro":"Пять вопросов — и календарь твой.",
   "items":[
     {"q":"1. Какой месяц — ноябрь?","opts":["listopad","październik","grudzień"],"answer":0,
      "explain":"<b>Listopad</b> — ноябрь, слово-подсказка. Październik — октябрь, grudzień — декабрь."},
     {"q":"2. «В сентябре» —","opts":["w wrześniu","we wrześniu","w wrzesień"],"answer":1,
      "explain":"Перед скоплением согласных предлог удлиняется: <b>we wrześniu</b>."},
     {"q":"3. «Вернёмся первого сентября» —","opts":["Wrócimy pierwszy września","Wrócimy pierwszego września","Wrócimy pierwszego wrzesień"],"answer":1,
      "explain":"На вопрос «когда» и число, и месяц в родительном."},
     {"q":"4. «Двадцать первый» —","opts":["dwadzieścia pierwszy","dwudziesty pierwszy","dwudziesty jeden"],"answer":1,
      "explain":"Оба слова порядковые: <b>dwudziesty pierwszy</b>."},
     {"q":"5. «Желаю тебе всего наилучшего» —","opts":["Życzę cię wszystkiego najlepszego","Życzę ci wszystkiego najlepszego","Życzę ci wszystko najlepsze"],"answer":1,
      "explain":"Дательный (<b>ci</b>) плюс родительный (<b>wszystkiego najlepszego</b>) — как в русском."}
   ]
 },
 "essay":{
   "intro":"Напиши свой маленький календарь — даты, которые для тебя важны.",
   "prompt":"Напиши 4–5 фраз: когда у тебя день рождения, когда у близких, какая дата сегодня.",
   "hint":"Опора: Dziś jest… Mam urodziny… Mama ma urodziny w… Проверь: «когда» — родительный (piątego maja). 💛",
   "example":"Dziś jest piąty maja. Mam urodziny piątego maja — to dzisiaj. Mama ma urodziny w lutym, a brat dwudziestego trzeciego października. Pierwszego stycznia jest Nowy Rok. Życzę wszystkim wszystkiego najlepszego."
 }
},
"14": {
 "day":14,"week":"02",
 "themeRu":"Повторение недели 2",
 "themeEn":"Powtórka tygodnia 2",
 "intro":"Шесть дней, два будущих времени и три падежа — неделя вышла плотной. Сегодня ничего нового: собираем всё в одну картину и смотрим, как много держится само. Będę robić и zrobię, dopełniacz в ценах, celownik в благодарностях, wołacz в обращениях, даты в календаре. 💛",
 "introAudio":"Шесть дней, два будущих времени и три падежа — неделя вышла плотной. Сегодня ничего нового: собираем всё в одну картину и смотрим, как много держится само. Będę robić и zrobię, dopełniacz в ценах, celownik в благодарностях, wołacz в обращениях, даты в календаре.",
 "goals":[
   "Выбирать будущее по смыслу: <b>będę robić</b> или <b>zrobię</b>",
   "Ставить dopełniacz после количеств, чисел от пяти и глаголов szukać / potrzebować",
   "Пользоваться celownikiem: dziękuję ci, pomagam mamie, kupię bratu",
   "Звать по имени и называть даты: Panie Marku! · piątego maja"
 ],
 "learned":[
   "Выбрал(а) будущее по смыслу: będę robić или zrobię",
   "Поставил(а) dopełniacz после количеств, чисел от пяти и глаголов szukać / potrzebować",
   "Воспользовался(лась) celownikiem: dziękuję ci, pomagam mamie, kupię bratu",
   "Позвал(а) по имени и назвал(а) даты: Panie Marku! · piątego maja"
 ],
 "review":{
   "intro":"Начнём с большой разминки по всей неделе. Не спеши: если где-то запнёшься — это рабочий момент, правило всегда можно перечитать ниже.",
   "introAudio":"Начнём с большой разминки по всей неделе. Не спеши: если где-то запнёшься — это рабочий момент, правило всегда можно перечитать ниже.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> лицо уже отмечено в первом слове.",
      "q":"Анна о себе: «Завтра я буду работать» —","opts":["Jutro będę pracowała","Jutro będę pracowałam","Jutro jestem pracować"],"answer":0,
      "explain":"Л-форма после będę идёт без личного окончания: <b>będę pracowała</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> дело будет закончено.",
      "q":"«Завтра напишу письмо» —","opts":["Jutro będę pisać list","Jutro napiszę list","Jutro piszę list"],"answer":1,
      "explain":"Результат — совершенный вид: <b>napiszę</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> от пяти и выше — родительный.",
      "q":"«Пять злотых» —","opts":["pięć złote","pięć złotych","pięć złoty"],"answer":1,
      "explain":"От пяти — dopełniacz мн. числа: <b>złotych</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> тут родное чутьё тянет к винительному.",
      "q":"«Я ищу работу» —","opts":["Szukam pracę","Szukam pracy","Szukam praca"],"answer":1,
      "explain":"Szukać требует dopełniacza: <b>pracy</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> опирайся на «спасибо тебе».",
      "q":"«Спасибо тебе за помощь» —","opts":["Dziękuję cię za pomoc","Dziękuję ci za pomoc","Dziękuję ciebie za pomoc"],"answer":1,
      "explain":"Dziękować идёт с дательным: <b>dziękuję ci</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Куплю брату книгу»</b>","answer":"Kupię bratu książkę"},
     {"type":"choice","howto":"<b>Что делать:</b> это обращение.",
      "q":"Вежливо к Мареку —","opts":["Pan Marek!","Panie Marku!","Panie Marek!"],"answer":1,
      "explain":"Оба слова в звательном: <b>Panie Marku!</b>"},
     {"type":"type","howto":"Напиши «пятого мая». Диакритику можно не ставить.",
      "q":"пятого мая","accept":["piątego maja","piatego maja"],"placeholder":"piątego…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Повторение · Дни 8–9",
    "title":"Два будущих: <em>będę robić</em> и <em>zrobię</em>",
    "paras":[
      "Несовершенный вид даёт длинное будущее: <b>będę, będziesz, będzie, będziemy, będziecie, będą</b> плюс словарная форма — или плюс л-форма без личного окончания. <b>Będę pracować = będę pracował / pracowała.</b> Оба варианта нормативны, л-форма даже частотнее.",
      "Совершенный вид даёт короткое будущее — одно слово: <b>zrobię, napiszę, kupię, przeczytam, zadzwonię, przyjdę, pójdę, powiem, dam</b>. Это ровно русское «сделаю»: форма настоящего, смысл будущего.",
      "Выбор делаешь по смыслу, как на родном языке: длительность и повтор — <b>będę czytać</b> («буду читать»), готовый результат — <b>przeczytam</b> («прочитаю»). И одно жёсткое ограничение: после będę совершенный вид невозможен."
    ],
    "audio":"Несовершенный вид даёт длинное будущее: będę, będziesz, będzie, będziemy, będziecie, będą плюс словарная форма — или плюс л-форма без личного окончания. Będę pracować равно będę pracował или będę pracowała. Оба варианта нормативны, л-форма даже частотнее. Совершенный вид даёт короткое будущее, одно слово: zrobię, napiszę, kupię, przeczytam, zadzwonię, przyjdę, pójdę, powiem, dam. Это ровно русское «сделаю»: форма настоящего, смысл будущего. Выбор делаешь по смыслу, как на родном языке: длительность и повтор — będę czytać, готовый результат — przeczytam. И одно жёсткое ограничение: после będę совершенный вид невозможен.",
    "table":{"rows":[
      ["Będę pracować. = Będę pracował / pracowała.","буду работать"],
      ["Będziemy czytali. / Będziemy czytały.","мы будем читать"],
      ["Zrobię to jutro.","сделаю это завтра"],
      ["Cały wieczór będę czytać.","весь вечер буду читать"],
      ["Wieczorem przeczytam tę książkę.","вечером прочитаю эту книгу"],
      ["❌ będę zrobić · ❌ będę czytałem","так нельзя"]
    ],"star":5},
    "examples":[
      {"ru":"Осенью мы будем в Кракове.","en":"Jesienią <b>będziemy</b> w Krakowie.","say":"Jesienią będziemy w Krakowie."},
      {"ru":"Я буду читать весь вечер.","en":"<b>Będę czytał</b> cały wieczór.","say":"Będę czytał cały wieczór."},
      {"ru":"В субботу я сделаю покупки.","en":"W sobotę <b>zrobię zakupy</b>.","say":"W sobotę zrobię zakupy."},
      {"ru":"Позвоню вечером и приду в семь.","en":"<b>Zadzwonię</b> wieczorem i <b>przyjdę</b> o siódmej.","say":"Zadzwonię wieczorem i przyjdę o siódmej."}
    ],
    "mistakes":[
      {"wrong":"Będę zrobić zakupy.","right":"<b>Zrobię</b> zakupy.","why":"Совершенный вид не берёт będę — он сам по себе будущее."},
      {"wrong":"Będę czytałem.","right":"<b>Będę czytał.</b>","why":"Лицо отмечено в będę, второй раз его не повторяют."}
    ],
    "mnemonic":"⏳ Процесс — będę robić / robił. Результат — zrobię. Как «буду делать» и «сделаю».",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> смотри на «весь день».",
       "q":"«Весь день я буду работать» —","opts":["Cały dzień będę pracować","Cały dzień popracuję","Cały dzień będę popracować"],"answer":0,
       "explain":"Длительность — несовершенный вид: <b>będę pracować</b>."},
      {"type":"choice","q":"Какая фраза невозможна?","opts":["Będę kupować","Będę kupić","Kupię"],"answer":1,
       "explain":"Kupić — совершенный вид, с będę он не сочетается."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Позвоню вечером»</b>","answer":"Zadzwonię wieczorem"}
    ]
   },
   {
    "eyebrow":"Повторение · День 10",
    "title":"<em>Dopełniacz jest wszędzie</em>",
    "paras":[
      "Родительный падеж в польском работает в четырёх местах сразу. После количеств: <b>dużo pracy, mało czasu, trochę wody, kilka minut</b>. После чисел от пяти: <b>pięć złotych</b> — но 2, 3, 4 берут множественное число: <b>dwa złote, dwie godziny</b>.",
      "После глаголов <b>szukać, potrzebować, uczyć się, słuchać, używać</b>: szukam pracy, potrzebuję pomocy, uczę się polskiego, słucham muzyki. Здесь русский идёт другим путём (винительный), и это надо держать в голове.",
      "И, как в A1, после отрицания: <b>nie mam czasu, nie ma mleka, nie kupię chleba</b>. Плюс меры в магазине: <b>kilogram jabłek, pół kilo sera, butelka wody</b>."
    ],
    "audio":"Родительный падеж в польском работает в четырёх местах сразу. После количеств: dużo pracy, mało czasu, trochę wody, kilka minut. После чисел от пяти: pięć złotych. Но два, три, четыре берут множественное число: dwa złote, dwie godziny. После глаголов szukać, potrzebować, uczyć się, słuchać, używać: szukam pracy, potrzebuję pomocy, uczę się polskiego, słucham muzyki. Здесь русский идёт другим путём, через винительный, и это надо держать в голове. И, как в A1, после отрицания: nie mam czasu, nie ma mleka, nie kupię chleba. Плюс меры в магазине: kilogram jabłek, pół kilo sera, butelka wody.",
    "table":{"rows":[
      ["dużo pracy · mało czasu","количества"],
      ["pięć złotych · dwa złote","5+ / 2-3-4"],
      ["szukam pracy · słucham muzyki","глаголы"],
      ["uczę się polskiego · potrzebuję pomocy","глаголы"],
      ["nie mam czasu · nie ma mleka","отрицание, A1"],
      ["kilogram jabłek · butelka wody","меры"]
    ],"star":-1},
    "examples":[
      {"ru":"У меня много работы и мало времени.","en":"Mam <b>dużo pracy</b> i <b>mało czasu</b>.","say":"Mam dużo pracy i mało czasu."},
      {"ru":"Это стоит пять злотых.","en":"To kosztuje <b>pięć złotych</b>.","say":"To kosztuje pięć złotych."},
      {"ru":"Я ищу работу и учу польский.","en":"<b>Szukam pracy</b> i <b>uczę się polskiego</b>.","say":"Szukam pracy i uczę się polskiego."},
      {"ru":"Килограмм яблок, пожалуйста.","en":"Poproszę <b>kilogram jabłek</b>.","say":"Poproszę kilogram jabłek."}
    ],
    "mistakes":[
      {"wrong":"pięć złote","right":"pięć <b>złotych</b>","why":"От пяти и выше — dopełniacz, как русское «пять злотых»."},
      {"wrong":"Szukam pracę.","right":"Szukam <b>pracy</b>.","why":"Szukać требует родительного, хотя русское «искать» берёт винительный."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, какое число перед словом.",
       "q":"«Два злотых» —","opts":["dwa złote","dwa złotych","dwa złoty"],"answer":0,
       "explain":"Для 2, 3, 4 — множественное число: <b>dwa złote</b>."},
      {"type":"choice","q":"«Мне нужна помощь» —","opts":["Potrzebuję pomoc","Potrzebuję pomocy","Potrzebuję pomocą"],"answer":1,
       "explain":"Potrzebować требует dopełniacza: <b>pomocy</b>."},
      {"type":"type","howto":"Напиши «У меня много работы». Диакритику можно не ставить.",
       "q":"У меня много работы.","accept":["mam dużo pracy","mam duzo pracy"],"placeholder":"Mam dużo…"}
    ]
   },
   {
    "eyebrow":"Повторение · День 11",
    "title":"Celownik: кому спасибо и кому подарок",
    "paras":[
      "Короткие формы: <b>mi, ci, mu, jej, nam, wam, im</b>; под ударением — mnie, tobie, jemu. Имена и существительные: женский род на -e со смягчением (<b>mamie, Ewie, Annie, siostrze, córce</b>), мягкие на -i (<b>Ani, babci</b>), мужской на -owi (<b>Markowi, synowi, mężowi</b>).",
      "Короткий список исключений на -u стоит помнить наизусть: <b>bratu, ojcu, panu, chłopcu, psu</b>. Средний род — тоже -u: <b>dziecku</b>.",
      "Где живёт: <b>dziękować</b> (ловушка дня — «спасибо тебе», а не «благодарю тебя»), <b>pomagać, dawać, kupować, mówić, życzyć</b>, и знакомое <b>podobać się</b>, у которого теперь на месте mi может стоять имя: <b>Ewie podoba się ten prezent.</b>"
    ],
    "audio":"Короткие формы: mi, ci, mu, jej, nam, wam, im; под ударением — mnie, tobie, jemu. Имена и существительные: женский род на -e со смягчением — mamie, Ewie, Annie, siostrze, córce; мягкие на -i — Ani, babci; мужской на -owi — Markowi, synowi, mężowi. Короткий список исключений на -u стоит помнить наизусть: bratu, ojcu, panu, chłopcu, psu. Средний род тоже -u: dziecku. Где живёт: dziękować — ловушка дня, «спасибо тебе», а не «благодарю тебя»; pomagać, dawać, kupować, mówić, życzyć; и знакомое podobać się, у которого теперь на месте mi может стоять имя: Ewie podoba się ten prezent.",
    "table":{"rows":[
      ["mi · ci · mu · jej · nam · wam · im","мне · тебе · ему · ей · нам · вам · им"],
      ["mama → mamie · Ewa → Ewie","ж. р. — -e"],
      ["Marek → Markowi · syn → synowi","м. р. — -owi"],
      ["brat → bratu · pan → panu","исключения на -u"],
      ["Dziękuję ci za prezent.","спасибо тебе за подарок"],
      ["Ewie podoba się ten prezent.","Еве нравится этот подарок"]
    ],"star":4},
    "examples":[
      {"ru":"Спасибо Вам за помощь.","en":"<b>Dziękuję panu</b> za pomoc.","say":"Dziękuję panu za pomoc."},
      {"ru":"Я помогаю маме и сестре.","en":"Pomagam <b>mamie</b> i <b>siostrze</b>.","say":"Pomagam mamie i siostrze."},
      {"ru":"Куплю брату книгу, а Еве цветы.","en":"Kupię <b>bratu</b> książkę, a <b>Ewie</b> kwiaty.","say":"Kupię bratu książkę, a Ewie kwiaty."},
      {"ru":"Мареку нравятся эти книги.","en":"<b>Markowi</b> podobają się te książki.","say":"Markowi podobają się te książki."}
    ],
    "mistakes":[
      {"wrong":"Dziękuję cię.","right":"Dziękuję <b>ci</b>.","why":"Опирайся на русское «спасибо тебе» — там тоже дательный."},
      {"wrong":"Kupię bratowi książkę.","right":"Kupię <b>bratu</b> książkę.","why":"Brat — из короткого списка на -u."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> кому помогаю?",
       "q":"«Я помогаю сестре» —","opts":["Pomagam siostrę","Pomagam siostrze","Pomagam siostry"],"answer":1,
       "explain":"Celownik от siostra — <b>siostrze</b>."},
      {"type":"choice","q":"«Еве нравится этот подарок» —","opts":["Ewa podoba się ten prezent","Ewie podoba się ten prezent","Ewie podobają się ten prezent"],"answer":1,
       "explain":"Имя в дательном — <b>Ewie</b>, подарок один — podoba."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Спасибо Вам за помощь»</b> (мужчине)","answer":"Dziękuję panu za pomoc"}
    ]
   },
   {
    "eyebrow":"Повторение · Дни 12–13",
    "title":"Обращения и календарь",
    "paras":[
      "Wołacz: женские на <b>-o</b> (Mamo, Ewo, Anno, Tato), мягкие и ласковые на <b>-u</b> (Aniu, Babciu, Kasiu); мужские чаще всего как форма после o (<b>Marku, Tomku, Piotrze, Bracie</b>), а три исключения — <b>Panie, Boże, Ojcze</b>. Вежливо: <b>Panie Marku! Pani Ewo!</b> Открытка: Kochana Mamo! … Pozdrawiam serdecznie.",
      "Даты: месяц в дате всегда в родительном — <b>stycznia, lutego, marca, maja, września, grudnia</b>. «Какое сегодня?» — <b>Dziś jest piąty maja</b>. «Когда?» — <b>piątego maja</b>, как русское «пятого мая». «В каком месяце?» — <b>w maju, w lutym, we wrześniu</b>.",
      "И поздравление, в котором встречаются оба падежа недели: <b>Życzę ci</b> (дательный) <b>wszystkiego najlepszego</b> (родительный). Плюс короткие <b>Wszystkiego najlepszego!</b> и <b>Sto lat!</b>"
    ],
    "audio":"Wołacz: женские на -o — Mamo, Ewo, Anno, Tato; мягкие и ласковые на -u — Aniu, Babciu, Kasiu; мужские чаще всего как форма после o — Marku, Tomku, Piotrze, Bracie, а три исключения — Panie, Boże, Ojcze. Вежливо: Panie Marku, Pani Ewo. Открытка: Kochana Mamo, и в конце Pozdrawiam serdecznie. Даты: месяц в дате всегда в родительном — stycznia, lutego, marca, maja, września, grudnia. Какое сегодня — dziś jest piąty maja. Когда — piątego maja, как русское «пятого мая». В каком месяце — w maju, w lutym, we wrześniu. И поздравление, в котором встречаются оба падежа недели: życzę ci — дательный, wszystkiego najlepszego — родительный. Плюс короткие wszystkiego najlepszego и sto lat.",
    "table":{"rows":[
      ["Mamo! · Aniu! · Marku!","обращения"],
      ["Panie Marku! · Pani Ewo!","вежливо"],
      ["Kochana Mamo! … Pozdrawiam serdecznie","открытка"],
      ["Dziś jest piąty maja.","какое сегодня число"],
      ["Kiedy? — piątego maja","когда"],
      ["Życzę ci wszystkiego najlepszego.","дательный + родительный"]
    ],"star":-1},
    "examples":[
      {"ru":"Пан Марек, когда у Вас день рождения?","en":"<b>Panie Marku</b>, kiedy ma pan urodziny?","say":"Panie Marku, kiedy ma pan urodziny?"},
      {"ru":"Дорогая мама! Привет из Гданьска.","en":"<b>Kochana Mamo!</b> Pozdrowienia z Gdańska.","say":"Kochana Mamo! Pozdrowienia z Gdańska."},
      {"ru":"У меня день рождения пятого мая.","en":"Mam urodziny <b>piątego maja</b>.","say":"Mam urodziny piątego maja."},
      {"ru":"Сто лет! Всего наилучшего!","en":"<b>Sto lat! Wszystkiego najlepszego!</b>","say":"Sto lat! Wszystkiego najlepszego!"}
    ],
    "mistakes":[
      {"wrong":"Kochana Mama!","right":"<b>Kochana Mamo!</b>","why":"В обращении имя идёт в звательный."},
      {"wrong":"Mam urodziny piąty maja.","right":"Mam urodziny <b>piątego maja</b>.","why":"На вопрос «когда» — родительный: piątego maja."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> это обращение в открытке.",
       "q":"Начало открытки Ане —","opts":["Droga Ania!","Droga Aniu!","Drogo Aniu!"],"answer":1,
       "explain":"Прилагательное не меняется, имя — в звательном: <b>Droga Aniu!</b>"},
      {"type":"choice","q":"«Восьмого марта» —","opts":["ósmy marca","ósmego marca","ósmego marzec"],"answer":1,
       "explain":"«Когда» — родительный и у числа, и у месяца: <b>ósmego marca</b>."},
      {"type":"type","howto":"Напиши поздравление «Всего наилучшего!». Диакритику можно не ставить.",
       "q":"Всего наилучшего!","accept":["wszystkiego najlepszego","wszystkiego najlepszego!"],"placeholder":"Wszystkiego…"}
    ]
   }
 ],
 "scene":{
   "intro":"Сценка на всю неделю сразу — день рождения Евы.",
   "lines":[
     {"who":"A","en":"Ewo, wszystkiego najlepszego! Sto lat!","ru":"Ева, всего наилучшего! Сто лет!"},
     {"who":"B","en":"Dziękuję ci bardzo! Kiedy ty masz urodziny?","ru":"Большое спасибо! А когда у тебя день рождения?"},
     {"who":"A","en":"Piątego maja. Do maja jeszcze daleko.","ru":"Пятого мая. До мая ещё далеко."},
     {"who":"B","en":"To kupię ci prezent w maju.","ru":"Тогда куплю тебе подарок в мае."},
     {"who":"A","en":"Dziś ja kupiłam prezent tobie. Podoba ci się?","ru":"Сегодня подарок купила я тебе. Нравится?"},
     {"who":"B","en":"Bardzo mi się podoba. Dziękuję!","ru":"Очень нравится. Спасибо!"}
   ]
 },
 "vocab":{
   "intro":"Не отдельные слова, а связки недели — то, что стоит уметь говорить не задумываясь.",
   "items":[
     {"en":"Będę pracować. / Będę pracowała.","ru":"буду работать (два способа)","ex":"Jutro będę pracowała cały dzień."},
     {"en":"Zrobię to jutro.","ru":"сделаю это завтра","ex":"Nie martw się, zrobię to jutro."},
     {"en":"Zadzwonię wieczorem.","ru":"позвоню вечером","ex":"Zadzwonię wieczorem i przyjdę o siódmej."},
     {"en":"dużo pracy / mało czasu","ru":"много работы / мало времени","ex":"Mam dużo pracy i mało czasu."},
     {"en":"pięć złotych / dwa złote","ru":"пять злотых / два злотых","ex":"To kosztuje pięć złotych."},
     {"en":"Szukam pracy.","ru":"я ищу работу","ex":"Szukam pracy i uczę się polskiego."},
     {"en":"Dziękuję ci za pomoc.","ru":"спасибо тебе за помощь","ex":"Dziękuję ci za pomoc, Marku."},
     {"en":"Pomagam mamie.","ru":"я помогаю маме","ex":"Codziennie pomagam mamie."},
     {"en":"Kupię bratu książkę.","ru":"куплю брату книгу","ex":"Kupię bratu książkę na urodziny."},
     {"en":"Panie Marku! / Pani Ewo!","ru":"пан Марек! / пани Ева!","ex":"Panie Marku, mam pytanie."},
     {"en":"Kochana Mamo!","ru":"дорогая мама! (в письме)","ex":"Kochana Mamo! Pozdrowienia z Gdańska."},
     {"en":"Mam urodziny piątego maja.","ru":"у меня день рождения пятого мая","ex":"Mam urodziny piątego maja, w maju."}
   ]
 },
 "drag":{
   "intro":"Последняя игра недели. Перетащи фразу к её переводу.",
   "pairs":[["Zrobię to jutro","сделаю это завтра"],["pięć złotych","пять злотых"],["Dziękuję ci","спасибо тебе"],["piątego maja","пятого мая"]]
 },
 "reading":{
   "intro":"Текст на всю неделю: тут оба будущих и все три падежа. Прочитай вслух — и послушай образец.",
   "title":"Tydzień Anny",
   "sentences":["Mam dużo pracy i mało czasu.","Ale w sobotę zrobię zakupy.","Kupię kilogram jabłek i butelkę wody.","To będzie kosztować dwadzieścia złotych.","W piątek Ewa ma urodziny.","Ewie kupię książkę, a mamie kwiaty.","Bratu dam czekoladę.","Napiszę też kartkę do babci.","Kochana Babciu! Pozdrowienia z Krakowa!","W maju będę w Gdańsku.","Mam urodziny piątego maja.","Marek już mi życzył wszystkiego najlepszego.","Dziękuję mu za to."],
   "translation":"У меня много работы и мало времени. Но в субботу я сделаю покупки. Куплю килограмм яблок и бутылку воды. Это будет стоить двадцать злотых. В пятницу у Евы день рождения. Еве куплю книгу, а маме цветы. Брату дам шоколад. Напишу ещё открытку бабушке. Дорогая бабушка! Привет из Кракова! В мае я буду в Гданьске. У меня день рождения пятого мая. Марек уже пожелал мне всего наилучшего. Спасибо ему за это."
 },
 "quiz":{
   "intro":"Проверка недели — тринадцать вопросов по всем шести дням. Спокойно, ты это уже умеешь.",
   "items":[
     {"q":"1. «Мы будем в Кракове» —","opts":["Będziemy w Krakowie","Będziecie w Krakowie","Będą w Krakowie"],"answer":0,
      "explain":"«Мы» — <b>będziemy</b>."},
     {"q":"2. Анна о себе: «Завтра я буду работать» (л-формой) —","opts":["Jutro będę pracowałam","Jutro będę pracowała","Jutro będę pracował"],"answer":1,
      "explain":"Л-форма после będę идёт без личного окончания: <b>pracowała</b>."},
     {"q":"3. Какая фраза невозможна?","opts":["Będę kupować","Będę kupić","Kupię"],"answer":1,
      "explain":"С będę сочетается только несовершенный вид."},
     {"q":"4. «Весь вечер я буду читать» —","opts":["Cały wieczór będę czytać","Cały wieczór przeczytam","Cały wieczór będę przeczytać"],"answer":0,
      "explain":"Длительность — несовершенный вид: <b>będę czytać</b>."},
     {"q":"5. «Позвоню вечером» —","opts":["Będę zadzwonić wieczorem","Zadzwonię wieczorem","Dzwonię wieczorem"],"answer":1,
      "explain":"Один звонок — короткое будущее: <b>zadzwonię</b>."},
     {"q":"6. «У меня много работы» —","opts":["Mam dużo praca","Mam dużo pracy","Mam dużo pracę"],"answer":1,
      "explain":"После dużo — dopełniacz: <b>pracy</b>."},
     {"q":"7. «Пять злотых» —","opts":["pięć złote","pięć złotych","pięć złoty"],"answer":1,
      "explain":"От пяти и выше — dopełniacz: <b>złotych</b>."},
     {"q":"8. «Я слушаю музыку» —","opts":["Słucham muzykę","Słucham muzyki","Słucham muzyka"],"answer":1,
      "explain":"Słuchać требует dopełniacza: <b>muzyki</b>."},
     {"q":"9. «Спасибо тебе за подарок» —","opts":["Dziękuję cię za prezent","Dziękuję ci za prezent","Dziękuję ciebie za prezent"],"answer":1,
      "explain":"Dziękować идёт с дательным: <b>ci</b>."},
     {"q":"10. «Куплю брату книгу» —","opts":["Kupię brata książkę","Kupię bratu książkę","Kupię bratowi książkę"],"answer":1,
      "explain":"Brat — исключение на -u: <b>bratu</b>."},
     {"q":"11. Зовём Аню (Ania) —","opts":["Ania!","Aniu!","Anio!"],"answer":1,
      "explain":"Мягкие имена берут -u: <b>Aniu!</b>"},
     {"q":"12. Вежливо к Мареку —","opts":["Pan Marek!","Panie Marku!","Panie Marek!"],"answer":1,
      "explain":"Оба слова в звательном: <b>Panie Marku!</b>"},
     {"q":"13. «Вернёмся первого сентября» —","opts":["Wrócimy pierwszy września","Wrócimy pierwszego września","Wrócimy pierwszego wrzesień"],"answer":1,
      "explain":"«Когда» — родительный и у числа, и у месяца."}
   ]
 },
 "essay":{
   "intro":"Финал недели — маленький рассказ о ближайших планах. Вся неделя уже у тебя в руках.",
   "prompt":"Напиши 5–6 фраз: что ты будешь делать на неделе, что сделаешь наверняка, что купишь и кому, и когда у тебя день рождения.",
   "hint":"Опора: W tygodniu będę… W sobotę zrobię… Kupię … prezent. Mam urodziny… Проверь падежи: dużo czasu, pięć złotych, mamie, piątego maja. 💛",
   "example":"W tym tygodniu będę dużo pracować. W sobotę zrobię zakupy — kupię kilogram jabłek i butelkę wody. To będzie kosztować piętnaście złotych. Mamie kupię kwiaty, a bratu książkę. Napiszę też kartkę: Kochana Babciu! Mam urodziny piątego maja i już czekam."
 }
},

"15": {
 "day":15,"week":"03",
 "themeRu":"Лучше и хуже",
 "themeEn":"Stopień wyższy",
 "intro":"Который телефон лучше — старый или новый? Чтобы ответить по-польски, хватит одного суффикса: <b>-szy</b>. Сегодня учимся сравнивать — nowy → now<b>szy</b>, ładny → ładn<b>iejszy</b>, — а четыре самых частых слова окажутся ровно теми же четырьмя, что и в русском: lepszy, gorszy, większy, mniejszy.",
 "introAudio":"Который телефон лучше — старый или новый? Чтобы ответить по-польски, хватит одного суффикса: -szy. Сегодня учимся сравнивать: nowy — nowszy, ładny — ładniejszy. А четыре самых частых слова окажутся ровно теми же четырьмя, что и в русском: lepszy, gorszy, większy, mniejszy.",
 "goals":[
   "Образовать сравнительную степень: <b>nowszy, starszy, ładniejszy</b>",
   "Запомнить четыре неправильных: <b>lepszy, gorszy, większy, mniejszy</b>",
   "Сравнить два предмета двумя способами: <b>niż</b> и <b>od</b> + dopełniacz",
   "Сказать «более» и «менее» там, где -szy не работает: <b>bardziej / mniej</b>"
 ],
 "learned":[
   "Образовал(а) сравнительную степень: nowszy, starszy, ładniejszy",
   "Запомнил(а) четыре неправильных: lepszy, gorszy, większy, mniejszy",
   "Сравнил(а) два предмета двумя способами: niż и od + dopełniacz",
   "Сказал(а) «более» и «менее»: bardziej / mniej"
 ],
 "review":{
   "intro":"Вчера мы собрали всю вторую неделю. Возьмём из неё пять вещей, которые сегодня понадобятся: оба будущих, дательный, дату — и, как всегда, вид глагола.",
   "introAudio":"Вчера мы собрали всю вторую неделю. Возьмём из неё пять вещей, которые сегодня понадобятся: оба будущих, дательный, дату — и, как всегда, вид глагола.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> у совершенного вида нет формы с będę.",
      "q":"«Завтра я напишу письмо» —","opts":["Jutro będę napisać list","Jutro napiszę list","Jutro napisam list"],"answer":1,
      "explain":"Совершенный вид даёт будущее сам: <b>napiszę</b>. Сказать «będę napisać» невозможно — как невозможно русское «буду написать»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после pomagać.",
      "q":"«Я помогаю маме» —","opts":["Pomagam mamę","Pomagam mamie","Pomagam mamy"],"answer":1,
      "explain":"pomagać просит дательный — <b>mamie</b>, ровно как русское «помогать маме»."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни форму даты (день 13).",
      "q":"«Первого мая» —","opts":["pierwszy maj","pierwszego maja","pierwszym maju"],"answer":1,
      "explain":"Дата отвечает на «когда?» родительным: <b>pierwszego maja</b> — как русское «первого мая»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку. Группа смешанная — значит мужско-личная форма.",
      "q":"Собери: <b>«Мы были в Кракове»</b> (Anna и Marek)","answer":"Byliśmy w Krakowie"},
     {"type":"type","howto":"Напиши «Я куплю хлеб». Диакритику можно не ставить.",
      "q":"Я куплю хлеб.","accept":["kupię chleb","kupie chleb"],"placeholder":"Kupię…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Суффикс сравнения",
    "title":"<em>nowy → nowszy</em>, <em>ładny → ładniejszy</em>",
    "paras":[
      "Польский сравнивает так же, как русский: одним суффиксом внутри слова, а не отдельным словом «более». Отрезаем окончание и добавляем <b>-szy</b>: nowy → now<b>szy</b>, stary → star<b>szy</b>, młody → młod<b>szy</b>, tani → tań<b>szy</b>. Форма остаётся прилагательным и согласуется по роду: nowsz<b>y</b> telefon, nowsz<b>a</b> książka, nowsz<b>e</b> mieszkanie.",
      "Если перед суффиксом сходятся два согласных, между ними встаёт <b>-ej-</b>: ładny → ładn<b>iejszy</b>, trudny → trudn<b>iejszy</b>, zimny → zimn<b>iejszy</b>, ciepły → ciepl<b>ejszy</b>. Причина простая — иначе слово не выговорить.",
      "Часть слов при этом слегка меняет последний согласный основы — как русское «дорогой → дороже»: drogi → dro<b>ższ</b>y, wysoki → wy<b>ższ</b>y, niski → ni<b>ższ</b>y, miły → mi<b>ls</b>zy, długi → dłu<b>ższ</b>y. А у прилагательных на -ki, -gi этот кусочек просто исчезает: szyb<b>ki</b> → szyb<b>szy</b>, krót<b>ki</b> → krót<b>szy</b>.",
      "Угадывать -szy или -ejszy на слух не стоит: у самых частых слов форму проще запомнить сразу, а список короткий. Зато смысл суффикса ты уже знаешь на родном языке — это русское «-ее»."
    ],
    "audio":"Польский сравнивает так же, как русский: одним суффиксом внутри слова, а не отдельным словом «более». Отрезаем окончание и добавляем -szy: nowy — nowszy, stary — starszy, młody — młodszy, tani — tańszy. Форма остаётся прилагательным и согласуется по роду: nowszy telefon, nowsza książka, nowsze mieszkanie. Если перед суффиксом сходятся два согласных, между ними встаёт -ej-: ładny — ładniejszy, trudny — trudniejszy, zimny — zimniejszy, ciepły — cieplejszy. Причина простая: иначе слово не выговорить. Часть слов слегка меняет последний согласный основы, как русское «дорогой — дороже»: drogi — droższy, wysoki — wyższy, niski — niższy, miły — milszy, długi — dłuższy. А у прилагательных на -ki, -gi этот кусочек просто исчезает: szybki — szybszy, krótki — krótszy. Угадывать -szy или -ejszy на слух не стоит: у самых частых слов форму проще запомнить сразу, список короткий. Зато смысл суффикса ты уже знаешь на родном языке — это русское «-ее».",
    "table":{"rows":[
      ["nowy → nowszy <button class=\"play\" data-say=\"nowy, nowszy\">🔊</button>","новый → новее"],
      ["stary → starszy <button class=\"play\" data-say=\"stary, starszy\">🔊</button>","старый → старше [стáршы]"],
      ["młody → młodszy <button class=\"play\" data-say=\"młody, młodszy\">🔊</button>","молодой → моложе"],
      ["ładny → ładniejszy <button class=\"play\" data-say=\"ładny, ładniejszy\">🔊</button>","красивый → красивее"],
      ["trudny → trudniejszy <button class=\"play\" data-say=\"trudny, trudniejszy\">🔊</button>","трудный → труднее"],
      ["wysoki → wyższy <button class=\"play\" data-say=\"wysoki, wyższy\">🔊</button>","высокий → выше"],
      ["szybki → szybszy <button class=\"play\" data-say=\"szybki, szybszy\">🔊</button>","быстрый → быстрее"]
    ],"star":3},
    "examples":[
      {"ru":"Мой телефон новее.","en":"Mój telefon jest <b>nowszy</b>.","say":"Mój telefon jest nowszy."},
      {"ru":"Эта книга интереснее.","en":"Ta książka jest <b>ciekawsza</b>.","gloss":"ciekawy → ciekawszy","say":"Ta książka jest ciekawsza."},
      {"ru":"Эта квартира новее и дешевле.","en":"To mieszkanie jest <b>nowsze</b> i <b>tańsze</b>.","say":"To mieszkanie jest nowsze i tańsze."},
      {"ru":"Марек выше.","en":"Marek jest <b>wyższy</b>.","say":"Marek jest wyższy."},
      {"ru":"Дорога длиннее.","en":"Droga jest <b>dłuższa</b>.","say":"Droga jest dłuższa."}
    ],
    "mistakes":[
      {"wrong":"więcej nowy","right":"<b>nowszy</b>","why":"степень сравнения живёт в суффиксе, а не в отдельном слове. Więcej значит «больше по количеству»: więcej pracy, więcej czasu."},
      {"wrong":"ładnszy","right":"ładn<b>iejszy</b>","why":"после группы согласных вставляется -ejszy: ładniejszy, trudniejszy, zimniejszy."}
    ],
    "mnemonic":"📏 -szy = русское «-ее». Два согласных подряд — вставь -ej-: ładn-iej-szy.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> одна согласная перед окончанием — значит просто -szy.",
       "q":"Сравнительная степень от <b>stary</b> —","opts":["starejszy","starszy","staryszy"],"answer":1,
       "explain":"Основа star- кончается одной согласной, поэтому просто <b>starszy</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, сколько согласных сходится перед суффиксом.",
       "q":"Сравнительная степень от <b>ładny</b> —","opts":["ładnszy","ładniejszy","ładnejszy"],"answer":1,
       "explain":"dn — группа согласных, поэтому <b>ładniejszy</b>."},
      {"type":"type","howto":"Напиши сравнительную степень от trudny.",
       "q":"trudny → ?","accept":["trudniejszy"],"placeholder":"trudn…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Четыре неправильных",
    "title":"<em>lepszy · gorszy · większy · mniejszy</em>",
    "paras":[
      "А теперь редкий подарок. В русском ровно четыре прилагательных сравниваются не по правилу: хороший → лучше, плохой → хуже, большой → больше, маленький → меньше. В польском — те же четыре, слово в слово по смыслу: dobry → <b>lepszy</b>, zły → <b>gorszy</b>, duży → <b>większy</b>, mały → <b>mniejszy</b>.",
      "Ничего выводить не надо, эти формы просто другие: nie «dobrzejszy», a <b>lepszy</b>. Согласование обычное: lepszy film, lepsza kawa, lepsze mieszkanie; większy dom, większa torba, większe miasto.",
      "Слово wielki («великий, огромный») отдаёт свою сравнительную степень тому же większy — так что większy обслуживает сразу двоих. Смотри на смысл: если «больше по размеру» — это <b>większy</b>."
    ],
    "audio":"А теперь редкий подарок. В русском ровно четыре прилагательных сравниваются не по правилу: хороший — лучше, плохой — хуже, большой — больше, маленький — меньше. В польском те же четыре, слово в слово по смыслу: dobry — lepszy, zły — gorszy, duży — większy, mały — mniejszy. Ничего выводить не надо, эти формы просто другие: не «dobrzejszy», а lepszy. Согласование обычное: lepszy film, lepsza kawa, lepsze mieszkanie; większy dom, większa torba, większe miasto. Слово wielki, великий, огромный, отдаёт свою сравнительную степень тому же większy. Смотри на смысл: если «больше по размеру» — это większy.",
    "table":{"rows":[
      ["dobry → lepszy <button class=\"play\" data-say=\"dobry, lepszy\">🔊</button>","хороший → лучше [лéпшы]"],
      ["zły → gorszy <button class=\"play\" data-say=\"zły, gorszy\">🔊</button>","плохой → хуже"],
      ["duży → większy <button class=\"play\" data-say=\"duży, większy\">🔊</button>","большой → больше [вьéнкшы]"],
      ["mały → mniejszy <button class=\"play\" data-say=\"mały, mniejszy\">🔊</button>","маленький → меньше"],
      ["lepsza kawa · większe miasto","род как у любого прилагательного"]
    ],"star":0},
    "examples":[
      {"ru":"Этот кофе лучше.","en":"Ta kawa jest <b>lepsza</b>.","say":"Ta kawa jest lepsza."},
      {"ru":"Сегодня погода хуже.","en":"Dziś pogoda jest <b>gorsza</b>.","say":"Dziś pogoda jest gorsza."},
      {"ru":"У меня квартира побольше.","en":"Mam <b>większe</b> mieszkanie.","say":"Mam większe mieszkanie."},
      {"ru":"Краков меньше.","en":"Kraków jest <b>mniejszy</b>.","say":"Kraków jest mniejszy."}
    ],
    "mistakes":[
      {"wrong":"dobrzejszy","right":"<b>lepszy</b>","why":"у dobry своя форма, как у русского «лучше». Правило -szy к нему не применяется."},
      {"wrong":"małszy","right":"<b>mniejszy</b>","why":"mały даёт mniejszy — снова совпадение с русским «маленький → меньше»."}
    ],
    "mnemonic":"4️⃣ lepszy · gorszy · większy · mniejszy — ровно те же четыре, что «лучше · хуже · больше · меньше».",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> это одно из четырёх неправильных.",
       "q":"Сравнительная степень от <b>dobry</b> —","opts":["dobrzejszy","lepszy","dobrszy"],"answer":1,
       "explain":"<b>Lepszy</b> — как русское «лучше»."},
      {"type":"choice","howto":"<b>Что делать:</b> речь о размере.",
       "q":"«Больше по размеру» —","opts":["więcej","większy","bardziej"],"answer":1,
       "explain":"<b>Większy</b> — про размер. Więcej — про количество (więcej czasu), bardziej — «более»."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Этот чай лучше»</b>","answer":"Ta herbata jest lepsza"}
    ]
   },
   {
    "eyebrow":"Правило 3 · С чем сравниваем",
    "title":"<em>niż</em> и <em>od</em> + dopełniacz",
    "paras":[
      "Сравнили — теперь скажем, с чем. Первый способ, самый прямой: <b>niż</b> — это «чем». Слово после него ни во что не превращается, стоит в именительном: Marek jest starszy <b>niż Anna</b>. Kraków jest mniejszy <b>niż Warszawa</b>.",
      "Второй способ роднее, чем кажется: <b>od</b> + родительный падеж. Marek jest starszy <b>od Anny</b> — буквально «старше Анны». Русский делает ровно то же самое, только без предлога: «старше брата», «дороже кофе». Падеж тот же, идея та же — добавь od, и получится по-польски.",
      "Оба варианта одинаково правильны и одинаково часты: starszy niż Anna = starszy od Anny. Выбирай, что легче выговорить.",
      "Одна мелочь про «меня»: перед mnie предлог удлиняется — <b>ode mnie</b>. Marek jest wyższy ode mnie. А вот <b>czym</b> в сравнении не работает вообще: czym — это «чем» в творительном падеже, вопрос про средство (Czym jedziesz? — Autobusem)."
    ],
    "audio":"Сравнили — теперь скажем, с чем. Первый способ, самый прямой: niż — это «чем». Слово после него ни во что не превращается, стоит в именительном: Marek jest starszy niż Anna. Kraków jest mniejszy niż Warszawa. Второй способ роднее, чем кажется: od плюс родительный падеж. Marek jest starszy od Anny — буквально «старше Анны». Русский делает ровно то же самое, только без предлога: старше брата, дороже кофе. Падеж тот же, идея та же: добавь od, и получится по-польски. Оба варианта одинаково правильны и одинаково часты. Одна мелочь про «меня»: перед mnie предлог удлиняется — ode mnie. Marek jest wyższy ode mnie. А czym в сравнении не работает вообще: czym — это «чем» в творительном падеже, вопрос про средство: czym jedziesz? Autobusem.",
    "table":{"rows":[
      ["starszy niż Anna <button class=\"play\" data-say=\"Marek jest starszy niż Anna\">🔊</button>","старше, чем Анна (именительный)"],
      ["starszy od Anny <button class=\"play\" data-say=\"Marek jest starszy od Anny\">🔊</button>","старше Анны (родительный)"],
      ["tańszy od kawy","дешевле кофе"],
      ["wyższy ode mnie <button class=\"play\" data-say=\"Marek jest wyższy ode mnie\">🔊</button>","выше меня — od + mnie = ode mnie"],
      ["Czym jedziesz? — Autobusem.","czym — про средство, не про сравнение"]
    ],"star":1},
    "examples":[
      {"ru":"Марек старше, чем Анна.","en":"Marek jest starszy <b>niż Anna</b>.","say":"Marek jest starszy niż Anna."},
      {"ru":"Марек старше Анны.","en":"Marek jest starszy <b>od Anny</b>.","gloss":"od + родительный","say":"Marek jest starszy od Anny."},
      {"ru":"Чай дешевле кофе.","en":"Herbata jest tańsza <b>od kawy</b>.","say":"Herbata jest tańsza od kawy."},
      {"ru":"Сегодня теплее, чем вчера.","en":"Dziś jest cieplej <b>niż wczoraj</b>.","say":"Dziś jest cieplej niż wczoraj."},
      {"ru":"Он выше меня.","en":"On jest wyższy <b>ode mnie</b>.","say":"On jest wyższy ode mnie."}
    ],
    "mistakes":[
      {"wrong":"starszy niż Anny","right":"starszy <b>niż Anna</b> / starszy <b>od Anny</b>","why":"после niż — именительный, после od — родительный. Смешивать их нельзя: либо niż Anna, либо od Anny."},
      {"wrong":"większy czym ten","right":"większy <b>niż ten</b>","why":"«чем» в сравнении — только niż. Czym — вопрос о средстве: czym jedziesz?"}
    ],
    "mnemonic":"⚖️ niż + именительный · od + родительный. «Старше брата» = starszy od brata — форма родная.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> смотри на форму слова после пропуска — Marka стоит в родительном.",
       "q":"«Анна младше Марека» — Anna jest młodsza ___ Marka.","opts":["niż","od","z"],"answer":1,
       "explain":"Родительный Marka требует предлога <b>od</b>. С niż было бы niż Marek."},
      {"type":"choice","howto":"<b>Что делать:</b> tamten стоит в именительном.",
       "q":"«Этот дом больше, чем тот» — Ten dom jest większy ___ tamten.","opts":["od","niż","ode"],"answer":1,
       "explain":"После <b>niż</b> слово не меняется: niż tamten. С od было бы od tamtego."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Марек старше Анны»</b> (через od)","answer":"Marek jest starszy od Anny"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Когда суффикс не подходит",
    "title":"<em>bardziej</em>, <em>mniej</em> и наречия <em>lepiej / gorzej</em>",
    "paras":[
      "Не всякое прилагательное умеет брать -szy. Длинные и заимствованные обходятся отдельным словом <b>bardziej</b> («более»): bardziej <b>interesujący</b>, bardziej <b>zmęczony</b>, bardziej <b>skomplikowany</b>. Обратное слово — <b>mniej</b> («менее»): mniej ciekawy, mniej ważny.",
      "И второй ряд, который слышно чаще всего, — наречия. У них своя пара форм: dobrze → <b>lepiej</b>, źle → <b>gorzej</b>, dużo → <b>więcej</b>, mało → <b>mniej</b>, szybko → <b>szybciej</b>, ciepło → <b>cieplej</b>.",
      "Разница между lepszy и lepiej — ровно та же, что между русскими «лучший» и «лучше»: первое описывает предмет (<b>To lepszy telefon</b>), второе — действие (<b>Teraz mówię lepiej</b>). Ошибиться легко, различить просто: если рядом глагол — бери форму на -ej.",
      "Полезное выражение вдогонку: <b>coraz lepiej</b> — «всё лучше». Mówię po polsku coraz lepiej — и это, скорее всего, чистая правда."
    ],
    "audio":"Не всякое прилагательное умеет брать -szy. Длинные и заимствованные обходятся отдельным словом bardziej, «более»: bardziej interesujący, bardziej zmęczony, bardziej skomplikowany. Обратное слово — mniej, «менее»: mniej ciekawy, mniej ważny. И второй ряд, который слышно чаще всего, — наречия. У них своя пара форм: dobrze — lepiej, źle — gorzej, dużo — więcej, mało — mniej, szybko — szybciej, ciepło — cieplej. Разница между lepszy и lepiej ровно та же, что между русскими «лучший» и «лучше»: первое описывает предмет — to lepszy telefon, второе действие — teraz mówię lepiej. Если рядом глагол, бери форму на -ej. Полезное выражение вдогонку: coraz lepiej, «всё лучше». Mówię po polsku coraz lepiej.",
    "table":{"rows":[
      ["bardziej interesujący <button class=\"play\" data-say=\"bardziej interesujący\">🔊</button>","более интересный"],
      ["mniej ważny","менее важный"],
      ["dobrze → lepiej <button class=\"play\" data-say=\"dobrze, lepiej\">🔊</button>","хорошо → лучше"],
      ["źle → gorzej <button class=\"play\" data-say=\"źle, gorzej\">🔊</button>","плохо → хуже"],
      ["dużo → więcej · mało → mniej","много → больше · мало → меньше"],
      ["coraz lepiej <button class=\"play\" data-say=\"coraz lepiej\">🔊</button>","всё лучше"]
    ],"star":5},
    "examples":[
      {"ru":"Этот фильм интереснее.","en":"Ten film jest <b>bardziej interesujący</b>.","say":"Ten film jest bardziej interesujący."},
      {"ru":"Сегодня я устал(а) сильнее, чем вчера.","en":"Dziś jestem <b>bardziej zmęczony</b> niż wczoraj.","gloss":"женщина скажет: bardziej zmęczona","say":"Dziś jestem bardziej zmęczony niż wczoraj."},
      {"ru":"Теперь я говорю лучше.","en":"Teraz mówię <b>lepiej</b>.","say":"Teraz mówię lepiej."},
      {"ru":"У меня меньше времени.","en":"Mam <b>mniej</b> czasu.","gloss":"после mniej — родительный","say":"Mam mniej czasu."},
      {"ru":"Говорю по-польски всё лучше.","en":"Mówię po polsku <b>coraz lepiej</b>.","say":"Mówię po polsku coraz lepiej."}
    ],
    "mistakes":[
      {"wrong":"Teraz mówię lepszy.","right":"Teraz mówię <b>lepiej</b>.","why":"рядом глагол — значит наречие: lepiej. Lepszy описывал бы предмет: lepszy telefon."},
      {"wrong":"Mam więcej czas.","right":"Mam więcej <b>czasu</b>.","why":"после слов количества (więcej, mniej, dużo) идёт родительный падеж — это день 10."}
    ],
    "mnemonic":"🎚️ Предмет — lepszy. Действие — lepiej. Длинное слово — bardziej + прилагательное.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, что стоит рядом — предмет или глагол.",
       "q":"«Теперь я говорю лучше» —","opts":["Teraz mówię lepszy","Teraz mówię lepiej","Teraz mówię bardziej dobry"],"answer":1,
       "explain":"Рядом глагол mówię, значит наречие: <b>lepiej</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> слово длинное и заимствованное.",
       "q":"«Этот фильм интереснее» —","opts":["Ten film jest interesujejszy","Ten film jest bardziej interesujący","Ten film jest więcej interesujący"],"answer":1,
       "explain":"У interesujący нет формы на -szy, поэтому <b>bardziej interesujący</b>."},
      {"type":"speak","target":"Mówię po polsku coraz lepiej.","sub":"говорю по-польски всё лучше","want":"coraz lepiej"}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна выбирает телефон, Марек рядом и, как всегда, всё сравнивает. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Który telefon jest lepszy — ten czy tamten?","ru":"Который телефон лучше — этот или тот?",
      "words":[["lepszy","лучше (какой)"],["tamten","тот"]]},
     {"who":"M","name":"Marek","side":"right","en":"Tamten jest nowszy, ale ten jest tańszy.","ru":"Тот новее, но этот дешевле.",
      "words":[["nowszy","новее"],["tańszy","дешевле"]]},
     {"who":"A","name":"Anna","side":"left","en":"Dużo tańszy?","ru":"Намного дешевле?",
      "words":[["dużo","намного, много"]]},
     {"who":"M","name":"Marek","side":"right","en":"Tak, dużo. I ma większy ekran.","ru":"Да, намного. И у него экран больше.",
      "words":[["większy","больше (по размеру)"],["ekran","экран"]]},
     {"who":"A","name":"Anna","side":"left","en":"A ten czarny? Wygląda ładniej.","ru":"А этот чёрный? Выглядит красивее.",
      "words":[["wygląda","выглядит"],["ładniej","красивее (наречие)"]]},
     {"who":"M","name":"Marek","side":"right","en":"Ładniejszy, ale droższy niż tamte dwa.","ru":"Красивее, но дороже тех двух.",
      "words":[["ładniejszy","красивее (какой)"],["droższy","дороже"]]},
     {"who":"A","name":"Anna","side":"left","en":"Wezmę ten tańszy. Jestem starsza i mądrzejsza niż rok temu.","ru":"Возьму тот, что дешевле. Я старше и умнее, чем год назад.",
      "words":[["wezmę","возьму"],["mądrzejsza","умнее"],["rok temu","год назад"]]},
     {"who":"M","name":"Marek","side":"right","en":"Mniej pieniędzy, więcej rozsądku. Dobry wybór.","ru":"Меньше денег, больше здравого смысла. Хороший выбор.",
      "words":[["mniej pieniędzy","меньше денег"],["więcej","больше"],["wybór","выбор"]]}
   ]
 },
 "vocab":{
   "intro":"Слова дня — всё, чем сравнивают. Переверни карточку.",
   "items":[
     {"en":"nowszy / starszy","ru":"новее / старше","ex":"Mój telefon jest nowszy."},
     {"en":"młodszy","ru":"моложе","ex":"Anna jest młodsza od Marka."},
     {"en":"ładniejszy","ru":"красивее","ex":"Ten dom jest ładniejszy."},
     {"en":"tańszy / droższy","ru":"дешевле / дороже","ex":"Herbata jest tańsza od kawy."},
     {"en":"większy / mniejszy","ru":"больше / меньше (по размеру)","ex":"Mam większe mieszkanie."},
     {"en":"lepszy / gorszy","ru":"лучше / хуже (какой)","ex":"Ta kawa jest lepsza."},
     {"en":"wyższy / niższy","ru":"выше / ниже","ex":"Marek jest wyższy ode mnie."},
     {"en":"dłuższy / krótszy","ru":"длиннее / короче","ex":"Ta droga jest dłuższa."},
     {"en":"szybszy","ru":"быстрее (какой)","ex":"Pociąg jest szybszy."},
     {"en":"niż","ru":"чем (в сравнении)","ex":"Starszy niż Anna."},
     {"en":"od + dopełniacz","ru":"чем кто-то (старше кого)","ex":"Starszy od Anny."},
     {"en":"bardziej / mniej","ru":"более / менее","ex":"bardziej interesujący"},
     {"en":"lepiej / gorzej","ru":"лучше / хуже (как)","ex":"Teraz mówię lepiej."}
   ]
 },
 "drag":{
   "intro":"Перетащи каждую польскую форму к её переводу.",
   "pairs":[["lepszy","лучше (какой)"],["gorszy","хуже (какой)"],["większy","больше по размеру"],["tańszy","дешевле"]]
 },
 "reading":{
   "intro":"Прочитай и послушай: Анна переехала и сравнивает две свои квартиры.",
   "title":"Nowe mieszkanie",
   "sentences":["Mieszkam teraz w nowym mieszkaniu.","Jest mniejsze niż stare, ale ładniejsze.","Kuchnia jest większa, a łazienka mniejsza.","Okna są wyższe i jest tu jaśniej.","Droga do pracy jest krótsza — dwadzieścia minut.","Czynsz jest trochę droższy niż wcześniej.","Ale tu jest ciszej niż w starym mieszkaniu.","Marek mówi, że stare mieszkanie było lepsze.","Ja myślę inaczej: tu czuję się lepiej.","A jak wygląda twoje mieszkanie?"],
   "translation":"Теперь я живу в новой квартире. Она меньше старой, но красивее. Кухня больше, а ванная меньше. Окна выше, и здесь светлее. Дорога на работу короче — двадцать минут. Плата за квартиру немного дороже, чем раньше. Зато здесь тише, чем в старой квартире. Марек говорит, что старая квартира была лучше. Я думаю иначе: здесь мне лучше. А как выглядит твоя квартира?"
 },
 "quiz":{
   "intro":"Пять вопросов — и первый день третьей недели закрыт. 💛",
   "items":[
     {"q":"1. Сравнительная степень от <b>ładny</b> —","opts":["ładnszy","ładniejszy","bardziej ładnie"],"answer":1,
      "explain":"После группы согласных вставляется -ej-: <b>ładniejszy</b>."},
     {"q":"2. Сравнительная степень от <b>zły</b> —","opts":["gorszy","złejszy","mniejszy"],"answer":0,
      "explain":"Одно из четырёх неправильных: <b>gorszy</b> — «хуже»."},
     {"q":"3. «Анна младше Марека» — Anna jest młodsza ___ Marka.","opts":["niż","od","czym"],"answer":1,
      "explain":"Marka — родительный, значит предлог <b>od</b>."},
     {"q":"4. «Теперь я говорю лучше» —","opts":["Teraz mówię lepszy","Teraz mówię lepiej","Teraz mówię bardziej dobry"],"answer":1,
      "explain":"Рядом глагол — нужна форма наречия <b>lepiej</b>."},
     {"q":"5. «У меня меньше времени» —","opts":["Mam mniej czas","Mam mniej czasu","Mam mniejszy czas"],"answer":1,
      "explain":"После mniej — родительный падеж: <b>mniej czasu</b>."}
   ]
 },
 "essay":{
   "intro":"Сравни две вещи, которые знаешь лучше всех.",
   "prompt":"Напиши 3–4 фразы: сравни два города, две квартиры или два телефона. Используй niż хотя бы раз и od + родительный хотя бы раз.",
   "hint":"Схема: X jest … -szy niż Y. X jest … -szy od Y. И не забудь про четвёрку: lepszy, gorszy, większy, mniejszy. 🏙️",
   "example":"Kraków jest mniejszy niż Warszawa, ale ładniejszy. Warszawa jest większa i droższa od Krakowa. W Krakowie jest ciszej, a w Warszawie jest więcej pracy. Ja wolę Kraków."
 }
},
"16": {
 "day":16,"week":"03",
 "themeRu":"Самый-самый",
 "themeEn":"Stopień najwyższy",
 "intro":"Самая высокая гора Польши — Rysy, самая длинная река — Wisła. Заметь одно и то же начало: <b>naj-</b>. Вчерашняя сравнительная степень сегодня получает приставку — и превращается в превосходную. Это, пожалуй, самое регулярное правило всего уровня: исключений нет вообще.",
 "introAudio":"Самая высокая гора Польши — Rysy, самая длинная река — Wisła. Заметь одно и то же начало: naj-. Вчерашняя сравнительная степень сегодня получает приставку и превращается в превосходную. Это, пожалуй, самое регулярное правило всего уровня: исключений нет вообще.",
 "goals":[
   "Образовать превосходную степень одним движением: <b>naj-</b> + сравнительная",
   "Сказать «самый лучший / худший / большой / маленький»: <b>najlepszy, najgorszy, największy, najmniejszy</b>",
   "Уточнить, из кого выбираем: <b>z</b> + dopełniacz и <b>w</b> + miejscownik",
   "Использовать наречия: <b>najlepiej, najwięcej, najczęściej</b>"
 ],
 "learned":[
   "Образовал(а) превосходную степень: naj- + сравнительная",
   "Сказал(а) najlepszy, najgorszy, największy, najmniejszy",
   "Уточнил(а), из кого выбираем: z + dopełniacz и w + miejscownik",
   "Использовал(а) наречия: najlepiej, najwięcej, najczęściej"
 ],
 "review":{
   "intro":"Вчерашние сравнения нужны сегодня целиком — превосходная степень строится прямо на них. Заодно проверим вид глагола, он у нас всегда на дежурстве.",
   "introAudio":"Вчерашние сравнения нужны сегодня целиком — превосходная степень строится прямо на них. Заодно проверим вид глагола, он у нас всегда на дежурстве.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни четвёрку неправильных.",
      "q":"Сравнительная степень от <b>duży</b> —","opts":["dużejszy","większy","więcej"],"answer":1,
      "explain":"<b>Większy</b> — «больше по размеру». Więcej — про количество."},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри на падеж слова после пропуска.",
      "q":"«Чай дешевле кофе» — Herbata jest tańsza ___ kawy.","opts":["niż","od","z"],"answer":1,
      "explain":"Родительный kawy требует <b>od</b>: tańsza od kawy. С niż было бы niż kawa."},
     {"type":"choice","howto":"<b>Что делать:</b> реши, что описываешь — предмет или действие.",
      "q":"«Сегодня я сплю лучше» —","opts":["Dziś śpię lepszy","Dziś śpię lepiej","Dziś śpię bardziej dobrze"],"answer":1,
      "explain":"Рядом глагол — значит наречие <b>lepiej</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> смотри на маркер «весь вечер» — это процесс.",
      "q":"«Весь вечер я читал(а) книгу» —","opts":["Cały wieczór przeczytałem książkę","Cały wieczór czytałem książkę","Cały wieczór poczytam książkę"],"answer":1,
      "explain":"Cały wieczór — длительность, значит несовершенный вид: <b>czytałem</b>. Przeczytałem означало бы «дочитал до конца»."},
     {"type":"type","howto":"Напиши «Марек старше Анны» через od. Диакритику можно не ставить.",
      "q":"Марек старше Анны.","accept":["marek jest starszy od anny","marek jest starszy od anny."],"placeholder":"Marek jest…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Приставка naj-",
    "title":"<em>nowszy → najnowszy</em>",
    "paras":[
      "Всё, что нужно сделать с вчерашней формой, — приклеить спереди <b>naj-</b>. nowszy → <b>naj</b>nowszy, starszy → <b>naj</b>starszy, ładniejszy → <b>naj</b>ładniejszy, trudniejszy → <b>naj</b>trudniejszy, wyższy → <b>naj</b>wyższy.",
      "Русский узнаёт эту приставку сразу: <b>наи</b>лучший, <b>наи</b>больший, <b>наи</b>высший — то же самое naj-, просто у нас оно выжило только в книжных словах, а в польском работает каждый день.",
      "Исключений тут нет ни одного. Если ты знаешь сравнительную степень, превосходная уже готова: сначала прилагательное, потом -szy, потом naj-. Три шага, и ни один из них не может пойти не так.",
      "И отдельное «самый» ставить не надо — приставка уже сказала всё: не «najbardziej najlepszy», а просто <b>najlepszy</b>. Согласование обычное: najnowszy telefon, najnowsza książka, najnowsze mieszkanie."
    ],
    "audio":"Всё, что нужно сделать с вчерашней формой, — приклеить спереди naj-. Nowszy — najnowszy, starszy — najstarszy, ładniejszy — najładniejszy, trudniejszy — najtrudniejszy, wyższy — najwyższy. Русский узнаёт эту приставку сразу: наилучший, наибольший, наивысший — то же самое naj-, просто у нас оно выжило только в книжных словах, а в польском работает каждый день. Исключений тут нет ни одного. Если ты знаешь сравнительную степень, превосходная уже готова: сначала прилагательное, потом -szy, потом naj-. И отдельное «самый» ставить не надо: приставка уже сказала всё. Согласование обычное: najnowszy telefon, najnowsza książka, najnowsze mieszkanie.",
    "table":{"rows":[
      ["nowy → nowszy → najnowszy <button class=\"play\" data-say=\"nowy, nowszy, najnowszy\">🔊</button>","новый → новее → самый новый"],
      ["stary → starszy → najstarszy <button class=\"play\" data-say=\"stary, starszy, najstarszy\">🔊</button>","старый → старше → самый старый"],
      ["ładny → ładniejszy → najładniejszy <button class=\"play\" data-say=\"ładniejszy, najładniejszy\">🔊</button>","красивый → красивее → самый красивый"],
      ["wysoki → wyższy → najwyższy <button class=\"play\" data-say=\"wyższy, najwyższy\">🔊</button>","высокий → выше → самый высокий"],
      ["długi → dłuższy → najdłuższy","длинный → длиннее → самый длинный"],
      ["najnowszy telefon · najnowsza książka","приставка не мешает согласованию"]
    ],"star":0},
    "examples":[
      {"ru":"Это самый новый телефон.","en":"To jest <b>najnowszy</b> telefon.","say":"To jest najnowszy telefon."},
      {"ru":"Рысы — самая высокая гора в Польше.","en":"Rysy to <b>najwyższa</b> góra w Polsce.","say":"Rysy to najwyższa góra w Polsce."},
      {"ru":"Висла — самая длинная река Польши.","en":"Wisła to <b>najdłuższa</b> rzeka w Polsce.","say":"Wisła to najdłuższa rzeka w Polsce."},
      {"ru":"Это был самый трудный день.","en":"To był <b>najtrudniejszy</b> dzień.","say":"To był najtrudniejszy dzień."}
    ],
    "mistakes":[
      {"wrong":"najbardziej najlepszy","right":"<b>najlepszy</b>","why":"приставка naj- уже значит «самый». Второй раз усиливать не надо."},
      {"wrong":"najnowy","right":"<b>najnowszy</b>","why":"naj- клеится не к обычному прилагательному, а к сравнительной степени: naj + nowszy."}
    ],
    "mnemonic":"🏔️ naj- = наше «наи-». Сначала -szy, потом naj-: now-szy → naj-nowszy.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> сначала сравнительная, потом приставка.",
       "q":"«Самый новый» —","opts":["najnowy","najnowszy","bardziej nowszy"],"answer":1,
       "explain":"naj- клеится к сравнительной степени nowszy: <b>najnowszy</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, как выглядит сравнительная от wysoki.",
       "q":"«Самая высокая гора» —","opts":["najwysoka góra","najwyższa góra","najbardziej wysoka góra"],"answer":1,
       "explain":"wysoki → wyższy → <b>najwyższy</b>, в женском роде najwyższa."},
      {"type":"type","howto":"Напиши превосходную степень от ładny.",
       "q":"ładny → ładniejszy → ?","accept":["najładniejszy","najladniejszy"],"placeholder":"naj…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Четвёрка в превосходной",
    "title":"<em>najlepszy · najgorszy · największy · najmniejszy</em>",
    "paras":[
      "Вчерашние четыре неправильных ведут себя послушно: приставка клеится к ним так же, как ко всем. dobry → lepszy → <b>najlepszy</b>, zły → gorszy → <b>najgorszy</b>, duży → większy → <b>największy</b>, mały → mniejszy → <b>najmniejszy</b>.",
      "И русский снова рядом: «наилучший», «наибольший», «наименьший» — те же три слова, только в польском они не книжные, а самые обиходные. Najlepsza kawa w mieście — обычная вывеска кафе.",
      "Наречия идут тем же путём: dobrze → lepiej → <b>najlepiej</b>, źle → gorzej → <b>najgorzej</b>, dużo → więcej → <b>najwięcej</b>, mało → mniej → <b>najmniej</b>, często → częściej → <b>najczęściej</b>.",
      "И различаются они так же, как вчера: <b>najlepszy</b> — про предмет (najlepszy film), <b>najlepiej</b> — про действие (Najlepiej pracuję rano)."
    ],
    "audio":"Вчерашние четыре неправильных ведут себя послушно: приставка клеится к ним так же, как ко всем. Dobry — lepszy — najlepszy, zły — gorszy — najgorszy, duży — większy — największy, mały — mniejszy — najmniejszy. И русский снова рядом: наилучший, наибольший, наименьший — те же слова, только в польском они не книжные, а самые обиходные. Najlepsza kawa w mieście — обычная вывеска кафе. Наречия идут тем же путём: dobrze — lepiej — najlepiej, źle — gorzej — najgorzej, dużo — więcej — najwięcej, mało — mniej — najmniej, często — częściej — najczęściej. И различаются они так же, как вчера: najlepszy про предмет, najlepiej про действие.",
    "table":{"rows":[
      ["dobry → najlepszy <button class=\"play\" data-say=\"dobry, lepszy, najlepszy\">🔊</button>","хороший → самый лучший [найлéпшы]"],
      ["zły → najgorszy <button class=\"play\" data-say=\"zły, gorszy, najgorszy\">🔊</button>","плохой → самый плохой"],
      ["duży → największy <button class=\"play\" data-say=\"duży, większy, największy\">🔊</button>","большой → самый большой"],
      ["mały → najmniejszy <button class=\"play\" data-say=\"mały, mniejszy, najmniejszy\">🔊</button>","маленький → самый маленький"],
      ["najlepiej / najgorzej <button class=\"play\" data-say=\"najlepiej, najgorzej\">🔊</button>","лучше всего / хуже всего"],
      ["najwięcej / najmniej","больше всего / меньше всего"]
    ],"star":0},
    "examples":[
      {"ru":"Это лучший фильм года.","en":"To <b>najlepszy</b> film roku.","say":"To najlepszy film roku."},
      {"ru":"Варшава — самый большой город Польши.","en":"Warszawa to <b>największe</b> miasto w Polsce.","say":"Warszawa to największe miasto w Polsce."},
      {"ru":"Лучше всего я работаю утром.","en":"<b>Najlepiej</b> pracuję rano.","say":"Najlepiej pracuję rano."},
      {"ru":"Больше всего я люблю выходные.","en":"<b>Najbardziej</b> lubię weekendy.","gloss":"с глаголом lubić — najbardziej","say":"Najbardziej lubię weekendy."}
    ],
    "mistakes":[
      {"wrong":"najdobry","right":"<b>najlepszy</b>","why":"приставка клеится к неправильной форме lepszy, а не к dobry."},
      {"wrong":"Najlepszy pracuję rano.","right":"<b>Najlepiej</b> pracuję rano.","why":"рядом глагол — значит наречие: najlepiej."}
    ],
    "mnemonic":"🥇 najlepszy · najgorszy · największy · najmniejszy — и их наречия najlepiej · najgorzej.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни неправильную форму.",
       "q":"«Самый лучший» —","opts":["najdobry","najlepszy","najbardziej dobry"],"answer":1,
       "explain":"dobry → lepszy → <b>najlepszy</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> смотри, что стоит рядом.",
       "q":"«Лучше всего я работаю утром» —","opts":["Najlepszy pracuję rano","Najlepiej pracuję rano","Najbardziej dobrze pracuję rano"],"answer":1,
       "explain":"Действие описывает наречие: <b>najlepiej</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Варшава — самый большой город Польши»</b>","answer":"Warszawa to największe miasto w Polsce"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Из кого и где",
    "title":"<em>z</em> + dopełniacz, <em>w</em> + miejscownik",
    "paras":[
      "Превосходная степень почти всегда просит уточнения: самый — из кого? где? Если из группы — предлог <b>z</b> и родительный падеж: najlepszy <b>z klasy</b>, najstarszy <b>z braci</b>, najmłodsza <b>z nas</b>, najciekawszy <b>ze wszystkich</b>. Обрати внимание: перед скоплением согласных z удлиняется до <b>ze</b>.",
      "Если про место — обычный <b>w</b> с предложным падежом, который ты знаешь с A1: największe miasto <b>w Polsce</b>, najlepsza kawa <b>w mieście</b>, najwyższa góra <b>na świecie</b>.",
      "Русский тут почти не мешает: «лучший из класса» — тоже родительный, «самый большой в Польше» — тоже предложный. Одна и та же логика, знакомые предлоги.",
      "И полезная формула для осторожных: <b>jeden z najlepszych</b> — «один из лучших». После jeden z идёт родительный множественного числа: jeden z najlepszych filmów, jedna z najstarszych ulic."
    ],
    "audio":"Превосходная степень почти всегда просит уточнения: самый — из кого? где? Если из группы, предлог z и родительный падеж: najlepszy z klasy, najstarszy z braci, najmłodsza z nas, najciekawszy ze wszystkich. Обрати внимание: перед скоплением согласных z удлиняется до ze. Если про место — обычный w с предложным падежом, который ты знаешь с A1: największe miasto w Polsce, najlepsza kawa w mieście, najwyższa góra na świecie. Русский тут почти не мешает: «лучший из класса» — тоже родительный, «самый большой в Польше» — тоже предложный. И полезная формула: jeden z najlepszych, «один из лучших». После jeden z идёт родительный множественного числа: jeden z najlepszych filmów, jedna z najstarszych ulic.",
    "table":{"rows":[
      ["najlepszy z klasy <button class=\"play\" data-say=\"najlepszy z klasy\">🔊</button>","лучший в классе (из класса)"],
      ["najmłodsza z nas <button class=\"play\" data-say=\"najmłodsza z nas\">🔊</button>","самая младшая из нас"],
      ["najciekawszy ze wszystkich","самый интересный из всех — z → ze"],
      ["największe miasto w Polsce <button class=\"play\" data-say=\"największe miasto w Polsce\">🔊</button>","самый большой город в Польше"],
      ["najwyższa góra na świecie","самая высокая гора в мире"],
      ["jeden z najlepszych filmów <button class=\"play\" data-say=\"jeden z najlepszych filmów\">🔊</button>","один из лучших фильмов"]
    ],"star":3},
    "examples":[
      {"ru":"Марек — самый старший из братьев.","en":"Marek jest <b>najstarszy z braci</b>.","say":"Marek jest najstarszy z braci."},
      {"ru":"Это лучший кофе в городе.","en":"To <b>najlepsza kawa w mieście</b>.","say":"To najlepsza kawa w mieście."},
      {"ru":"Краков — один из старейших городов Польши.","en":"Kraków to <b>jedno z najstarszych</b> miast w Polsce.","gloss":"miasto среднего рода → jedno z","say":"Kraków to jedno z najstarszych miast w Polsce."},
      {"ru":"Анна — самая младшая из нас.","en":"Anna jest <b>najmłodsza z nas</b>.","say":"Anna jest najmłodsza z nas."}
    ],
    "mistakes":[
      {"wrong":"najlepszy z klasa","right":"najlepszy <b>z klasy</b>","why":"после z в этом значении — родительный падеж: z klasy, z nas, z braci."},
      {"wrong":"największe miasto w Polska","right":"największe miasto <b>w Polsce</b>","why":"место — предложный падеж после w: w Polsce, w mieście."}
    ],
    "mnemonic":"🎯 Из группы — z + родительный. В месте — w + предложный. Najlepszy z klasy w Krakowie.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> речь о группе, из которой выбираем.",
       "q":"«Самый младший из нас» —","opts":["najmłodszy w nas","najmłodszy z nas","najmłodszy od nas"],"answer":1,
       "explain":"Из группы — <b>z nas</b>. Od работает в сравнительной степени (młodszy od nas), а не в превосходной."},
      {"type":"choice","howto":"<b>Что делать:</b> здесь речь о месте.",
       "q":"«Самый большой город в Польше» —","opts":["największe miasto z Polski","największe miasto w Polsce","największe miasto od Polski"],"answer":1,
       "explain":"Место — <b>w Polsce</b>, предложный падеж."},
      {"type":"type","howto":"Напиши «лучший кофе в городе». Диакритику можно не ставить.",
       "q":"лучший кофе в городе","accept":["najlepsza kawa w mieście","najlepsza kawa w miescie"],"placeholder":"najlepsza…"}
   ]
   },
   {
    "eyebrow":"Правило 4 · Длинные слова",
    "title":"<em>najbardziej</em> и <em>najmniej</em>",
    "paras":[
      "Если вчера прилагательное сравнивалось через bardziej, то и сегодня оно пойдёт тем же путём — просто с приставкой: bardziej interesujący → <b>najbardziej</b> interesujący. И зеркальное: mniej ciekawy → <b>najmniej</b> ciekawy.",
      "Такое бывает у длинных и заимствованных слов: najbardziej <b>popularny</b>, najbardziej <b>zmęczony</b>, najbardziej <b>skomplikowany</b>.",
      "И ещё одно частое место для najbardziej — рядом с глаголом lubić: <b>Najbardziej lubię</b> lato. Дословно «больше всего люблю лето». Русский здесь говорит «больше всего», польский — najbardziej.",
      "Проверить себя просто: если у слова есть короткая форма на -szy, бери её (najładniejszy, а не «najbardziej ładny»). Если формы нет — najbardziej."
    ],
    "audio":"Если вчера прилагательное сравнивалось через bardziej, то и сегодня оно пойдёт тем же путём, просто с приставкой: bardziej interesujący — najbardziej interesujący. И зеркальное: mniej ciekawy — najmniej ciekawy. Такое бывает у длинных и заимствованных слов: najbardziej popularny, najbardziej zmęczony, najbardziej skomplikowany. И ещё одно частое место для najbardziej — рядом с глаголом lubić: najbardziej lubię lato. Дословно «больше всего люблю лето». Проверить себя просто: если у слова есть короткая форма на -szy, бери её. Если формы нет — najbardziej.",
    "table":{"rows":[
      ["najbardziej interesujący <button class=\"play\" data-say=\"najbardziej interesujący\">🔊</button>","самый интересный"],
      ["najbardziej popularny","самый популярный"],
      ["najmniej ważny","наименее важный"],
      ["Najbardziej lubię lato. <button class=\"play\" data-say=\"Najbardziej lubię lato\">🔊</button>","Больше всего люблю лето."]
    ],"star":3},
    "examples":[
      {"ru":"Это самый интересный музей в городе.","en":"To <b>najbardziej interesujące</b> muzeum w mieście.","say":"To najbardziej interesujące muzeum w mieście."},
      {"ru":"Больше всего я люблю лето.","en":"<b>Najbardziej lubię</b> lato.","say":"Najbardziej lubię lato."},
      {"ru":"Это наименее важный вопрос.","en":"To <b>najmniej ważne</b> pytanie.","say":"To najmniej ważne pytanie."}
    ],
    "mistakes":[
      {"wrong":"najbardziej ładny","right":"<b>najładniejszy</b>","why":"у ładny есть своя короткая форма — значит берём её. Najbardziej остаётся длинным словам без -szy."}
    ],
    "mnemonic":"🔍 Есть -szy — бери -szy. Нет -szy — бери najbardziej.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь, есть ли у слова короткая форма.",
       "q":"«Самый интересный фильм» —","opts":["najinteresujący film","najbardziej interesujący film","najinteresujejszy film"],"answer":1,
       "explain":"У interesujący нет формы на -szy, поэтому <b>najbardziej interesujący</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> у этого слова короткая форма есть.",
       "q":"«Самый красивый город» —","opts":["najbardziej ładne miasto","najładniejsze miasto","najładne miasto"],"answer":1,
       "explain":"ładny → ładniejszy → <b>najładniejszy</b>, в среднем роде najładniejsze."},
      {"type":"speak","target":"Najbardziej lubię lato.","sub":"больше всего люблю лето","want":"najbardziej lubię lato"}
    ]
   }
 ],
 "scene":{
   "intro":"Сценка: Анна и Марек спорят, где в Кракове самая лучшая пицца. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Gdzie jest najlepsza pizza w mieście?","ru":"Где в городе самая лучшая пицца?"},
     {"who":"B","en":"Na rynku. To najstarsza pizzeria w Krakowie.","ru":"На площади. Это самая старая пиццерия в Кракове."},
     {"who":"A","en":"Najstarsza to nie znaczy najlepsza.","ru":"Самая старая — не значит самая лучшая."},
     {"who":"B","en":"A gdzie twoja ulubiona?","ru":"А где твоя любимая?"},
     {"who":"A","en":"Obok domu. Najtańsza i najbliżej.","ru":"Рядом с домом. Самая дешёвая и ближе всего."},
     {"who":"B","en":"Czyli najważniejsze jest to, że jest blisko.","ru":"То есть самое важное — что близко."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — превосходная степень в готовом виде.",
   "items":[
     {"en":"najlepszy / najgorszy","ru":"самый лучший / самый плохой","ex":"To najlepszy film roku."},
     {"en":"największy / najmniejszy","ru":"самый большой / самый маленький","ex":"Warszawa to największe miasto w Polsce."},
     {"en":"najnowszy / najstarszy","ru":"самый новый / самый старый","ex":"Kraków to jedno z najstarszych miast."},
     {"en":"najładniejszy","ru":"самый красивый","ex":"To najładniejsza ulica w mieście."},
     {"en":"najwyższy / najniższy","ru":"самый высокий / самый низкий","ex":"Rysy to najwyższa góra w Polsce."},
     {"en":"najdłuższy / najkrótszy","ru":"самый длинный / самый короткий","ex":"Wisła to najdłuższa rzeka w Polsce."},
     {"en":"najtrudniejszy / najłatwiejszy","ru":"самый трудный / самый лёгкий","ex":"To był najtrudniejszy dzień."},
     {"en":"najbardziej / najmniej","ru":"больше всего / меньше всего","ex":"Najbardziej lubię lato."},
     {"en":"najlepiej / najgorzej","ru":"лучше всего / хуже всего","ex":"Najlepiej pracuję rano."},
     {"en":"najczęściej","ru":"чаще всего","ex":"Najczęściej jem w domu."},
     {"en":"z klasy / z nas","ru":"из класса / из нас","ex":"Najlepszy z klasy."},
     {"en":"jeden z najlepszych","ru":"один из лучших","ex":"To jeden z najlepszych filmów."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к переводу.",
   "pairs":[["najlepszy","самый лучший"],["największy","самый большой"],["najlepiej","лучше всего"],["najbardziej","больше всего"]]
 },
 "reading":{
   "intro":"Прочитай и послушай короткий текст о Польше — рекорды страны в одном абзаце.",
   "title":"Najbardziej w Polsce",
   "sentences":["Warszawa to największe miasto w Polsce.","Kraków jest mniejszy, ale to jedno z najstarszych miast.","Najdłuższa rzeka to Wisła.","Najwyższa góra to Rysy.","Zimą najzimniej jest na wschodzie.","Latem najwięcej turystów jest nad morzem.","Anna mówi, że najlepsza kawa jest w Krakowie.","Marek uważa, że najlepsza kawa jest w domu.","Najtańsza jest herbata.","A co jest najlepsze w twoim mieście?"],
   "translation":"Варшава — самый большой город в Польше. Краков меньше, но это один из старейших городов. Самая длинная река — Висла. Самая высокая гора — Рысы. Зимой холоднее всего на востоке. Летом больше всего туристов на море. Анна говорит, что лучший кофе в Кракове. Марек считает, что лучший кофе — дома. Дешевле всего чай. А что самое лучшее в твоём городе?"
 },
 "quiz":{
   "intro":"Пять вопросов — и превосходная степень твоя.",
   "items":[
     {"q":"1. «Самый новый» —","opts":["najnowy","najnowszy","bardziej nowy"],"answer":1,
      "explain":"naj- клеится к сравнительной степени: nowszy → <b>najnowszy</b>."},
     {"q":"2. «Самый лучший» —","opts":["najlepszy","najdobry","najbardziej dobry"],"answer":0,
      "explain":"dobry → lepszy → <b>najlepszy</b>."},
     {"q":"3. «Самый младший из нас» —","opts":["najmłodszy w nas","najmłodszy z nas","najmłodszy od nas"],"answer":1,
      "explain":"Из группы — <b>z nas</b>, родительный падеж."},
     {"q":"4. «Лучше всего я работаю утром» —","opts":["Najlepszy pracuję rano","Najlepiej pracuję rano","Najbardziej lepszy pracuję rano"],"answer":1,
      "explain":"Действие описывает наречие <b>najlepiej</b>."},
     {"q":"5. «Самый интересный музей» —","opts":["najinteresujący muzeum","najbardziej interesujące muzeum","najinteresujejsze muzeum"],"answer":1,
      "explain":"У interesujący нет короткой формы: <b>najbardziej interesujące</b> muzeum."}
   ]
 },
 "essay":{
   "intro":"Расскажи о своих рекордах — маленьких и больших.",
   "prompt":"Напиши 3–4 фразы: самое красивое место, которое ты видел(а); лучший фильм; что ты любишь больше всего.",
   "hint":"Схема: Najładniejsze miasto to… / Najlepszy film to… / Najbardziej lubię… Проверь: приставка naj- клеится к форме на -szy. 🥇",
   "example":"Najładniejsze miasto, jakie widziałam, to Kraków. Najlepszy film roku to komedia o rodzinie. Najbardziej lubię lato i długie wieczory. Najgorsza jest zima — jest za zimno."
 }
},
"17": {
 "day":17,"week":"03",
 "themeRu":"Иду или хожу",
 "themeEn":"Iść — chodzić",
 "intro":"Иду или хожу? По-русски ты выбираешь между ними, даже не замечая: «сейчас иду в магазин», но «хожу туда каждый день». Польский устроен ровно так же — <b>idę</b> и <b>chodzę</b>, <b>jadę</b> и <b>jeżdżę</b>. Для тех, кто учит польский с английского, это месяцы мучений. Для тебя — один урок и пара новых окончаний.",
 "introAudio":"Иду или хожу? По-русски ты выбираешь между ними, даже не замечая: «сейчас иду в магазин», но «хожу туда каждый день». Польский устроен ровно так же: idę и chodzę, jadę и jeżdżę. Для тех, кто учит польский с английского, это месяцы мучений. Для тебя — один урок и пара новых окончаний.",
 "goals":[
   "Различать <b>idę</b> (иду сейчас) и <b>chodzę</b> (хожу вообще)",
   "Различать <b>jadę</b> (еду сейчас) и <b>jeżdżę</b> (езжу регулярно)",
   "Назвать транспорт: <b>jadę autobusem, pociągiem, samochodem</b>",
   "Не спутать <b>jadę</b> («еду») с <b>jem</b> («ем»)"
 ],
 "learned":[
   "Различил(а) idę (иду сейчас) и chodzę (хожу вообще)",
   "Различил(а) jadę (еду сейчас) и jeżdżę (езжу регулярно)",
   "Назвал(а) транспорт: jadę autobusem, pociągiem, samochodem",
   "Не спутал(а) jadę («еду») с jem («ем»)"
 ],
 "review":{
   "intro":"Вчера мы возводили всё в превосходную степень. Проверим, что приставка naj- держится, и вспомним вид глагола.",
   "introAudio":"Вчера мы возводили всё в превосходную степень. Проверим, что приставка naj- держится, и вспомним вид глагола.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> сначала сравнительная степень, потом приставка.",
      "q":"«Самый высокий» —","opts":["najwysoki","najwyższy","najbardziej wysoki"],"answer":1,
      "explain":"wysoki → wyższy → <b>najwyższy</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> из группы или в месте?",
      "q":"«Лучший в классе» (из класса) —","opts":["najlepszy w klasa","najlepszy z klasy","najlepszy od klasy"],"answer":1,
      "explain":"Из группы — <b>z klasy</b>, родительный падеж."},
     {"type":"choice","howto":"<b>Что делать:</b> дело уже позади — значит прошедшее и совершенный вид.",
      "q":"«Я уже сделал(а) домашнее задание» —","opts":["Już zrobię zadanie","Już zrobiłem zadanie","Już będę robić zadanie"],"answer":1,
      "explain":"Прошедшее и результат — <b>zrobiłem</b>. Zrobię — это будущее, «сделаю»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Лучше всего я работаю утром»</b>","answer":"Najlepiej pracuję rano"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Пешком",
    "title":"<em>idę</em> — иду · <em>chodzę</em> — хожу",
    "paras":[
      "Польский, как и русский, держит для ходьбы два разных глагола. <b>Iść</b> — про одно движение здесь и сейчас, в одну сторону: Idę do sklepu — «иду в магазин» (прямо сейчас). <b>Chodzić</b> — про повторяющееся, привычное, туда-обратно: Chodzę do sklepu codziennie — «хожу в магазин каждый день».",
      "Это ровно то различие, которое ты делаешь на родном языке автоматически. Никакой новой идеи учить не надо — надо выучить окончания.",
      "<b>iść</b>: idę, idziesz, idzie, idziemy, idziecie, idą. Форма знакома с A1. <b>chodzić</b>: chodzę, chodzisz, chodzi, chodzimy, chodzicie, chodzą — обычный глагол третьей группы, как robić.",
      "У chodzić есть и второе значение, тоже родное: «уметь ходить, ходить вообще». <b>Dziecko już chodzi</b> — «ребёнок уже ходит». И третье, самое частое: chodzić do szkoły, chodzić do pracy, chodzić na basen — регулярно посещать."
    ],
    "audio":"Польский, как и русский, держит для ходьбы два разных глагола. Iść — про одно движение здесь и сейчас, в одну сторону: idę do sklepu, иду в магазин прямо сейчас. Chodzić — про повторяющееся, привычное, туда-обратно: chodzę do sklepu codziennie, хожу в магазин каждый день. Это ровно то различие, которое ты делаешь на родном языке автоматически. Никакой новой идеи учить не надо, надо выучить окончания. Iść: idę, idziesz, idzie, idziemy, idziecie, idą. Chodzić: chodzę, chodzisz, chodzi, chodzimy, chodzicie, chodzą — обычный глагол третьей группы, как robić. У chodzić есть и второе значение, тоже родное: уметь ходить, ходить вообще. Dziecko już chodzi — ребёнок уже ходит. И третье, самое частое: chodzić do szkoły, chodzić do pracy, chodzić na basen — регулярно посещать.",
    "table":{"rows":[
      ["idę / idziesz / idzie <button class=\"play\" data-say=\"idę, idziesz, idzie\">🔊</button>","иду / идёшь / идёт"],
      ["idziemy / idziecie / idą <button class=\"play\" data-say=\"idziemy, idziecie, idą\">🔊</button>","идём / идёте / идут"],
      ["chodzę / chodzisz / chodzi <button class=\"play\" data-say=\"chodzę, chodzisz, chodzi\">🔊</button>","хожу / ходишь / ходит [хóдзэ]"],
      ["chodzimy / chodzicie / chodzą","ходим / ходите / ходят"],
      ["Idę do sklepu. <button class=\"play\" data-say=\"Idę do sklepu\">🔊</button>","Иду в магазин (сейчас)."],
      ["Chodzę do sklepu codziennie.","Хожу в магазин каждый день."]
    ],"star":4},
    "examples":[
      {"ru":"Сейчас я иду на работу.","en":"Teraz <b>idę</b> do pracy.","say":"Teraz idę do pracy."},
      {"ru":"Я хожу на работу пешком.","en":"<b>Chodzę</b> do pracy pieszo.","gloss":"pieszo — пешком","say":"Chodzę do pracy pieszo."},
      {"ru":"Дети ходят в школу.","en":"Dzieci <b>chodzą</b> do szkoły.","say":"Dzieci chodzą do szkoły."},
      {"ru":"Куда ты идёшь?","en":"Dokąd <b>idziesz</b>?","gloss":"dokąd — куда","say":"Dokąd idziesz?"},
      {"ru":"Раз в неделю хожу в бассейн.","en":"Raz w tygodniu <b>chodzę</b> na basen.","say":"Raz w tygodniu chodzę na basen."}
    ],
    "mistakes":[
      {"wrong":"Codziennie idę do pracy.","right":"Codziennie <b>chodzę</b> do pracy.","why":"codziennie — про привычку, значит chodzić. Так же и по-русски: «каждый день хожу», а не «иду»."},
      {"wrong":"Teraz chodzę do sklepu.","right":"Teraz <b>idę</b> do sklepu.","why":"teraz — одно движение прямо сейчас, значит iść."}
    ],
    "mnemonic":"🚶 idę = иду (сейчас) · chodzę = хожу (вообще). Тот же выбор, что и на родном языке.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> найди слово-маркер — оно решает всё.",
       "q":"«Каждый день я хожу на работу» — Codziennie ___ do pracy.","opts":["idę","chodzę","idziesz"],"answer":1,
       "explain":"Codziennie — регулярность, значит <b>chodzę</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> снова смотри на маркер.",
       "q":"«Сейчас я иду в аптеку» — Teraz ___ do apteki.","opts":["chodzę","idę","chodzisz"],"answer":1,
       "explain":"Teraz — одно движение прямо сейчас: <b>idę</b>."},
      {"type":"type","howto":"Напиши «Куда ты идёшь?». Диакритику можно не ставить.",
       "q":"Куда ты идёшь?","accept":["dokąd idziesz","dokad idziesz","gdzie idziesz"],"placeholder":"Dokąd…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · На транспорте",
    "title":"<em>jadę</em> — еду · <em>jeżdżę</em> — езжу",
    "paras":[
      "Вторая пара устроена один в один как первая, только для колёс. <b>Jechać</b> — еду сейчас, в одну сторону: Jadę do Warszawy. <b>Jeździć</b> — езжу регулярно: Jeżdżę do Warszawy co tydzień.",
      "<b>jechać</b>: jadę, jedziesz, jedzie, jedziemy, jedziecie, jadą. Заметь: «я» и «они» берут <b>ja-</b>, остальные — <b>je-</b>. <b>jeździć</b>: jeżdżę, jeździsz, jeździ, jeździmy, jeździcie, jeżdżą.",
      "На чём едем — творительным падежом, знакомым с A1: <b>autobusem, pociągiem, samochodem, tramwajem, taksówką</b>. Русский говорит так же: «еду автобусом», «еду машиной» — падеж совпадает полностью. А велосипед просит предлога: <b>na rowerze</b> (можно и rowerem).",
      "Пешком — это <b>pieszo</b> или <b>na piechotę</b>. И вопрос, который спрашивают чаще всего: <b>Czym jedziesz?</b> — «На чём ты едешь?»"
    ],
    "audio":"Вторая пара устроена один в один как первая, только для колёс. Jechać — еду сейчас, в одну сторону: jadę do Warszawy. Jeździć — езжу регулярно: jeżdżę do Warszawy co tydzień. Jechać: jadę, jedziesz, jedzie, jedziemy, jedziecie, jadą. Заметь: «я» и «они» берут ja-, остальные je-. Jeździć: jeżdżę, jeździsz, jeździ, jeździmy, jeździcie, jeżdżą. На чём едем — творительным падежом, знакомым с A1: autobusem, pociągiem, samochodem, tramwajem, taksówką. Русский говорит так же: еду автобусом, еду машиной — падеж совпадает полностью. А велосипед просит предлога: na rowerze, можно и rowerem. Пешком — это pieszo или na piechotę. И вопрос, который спрашивают чаще всего: czym jedziesz? На чём ты едешь?",
    "table":{"rows":[
      ["jadę / jedziesz / jedzie <button class=\"play\" data-say=\"jadę, jedziesz, jedzie\">🔊</button>","еду / едешь / едет"],
      ["jedziemy / jedziecie / jadą <button class=\"play\" data-say=\"jedziemy, jedziecie, jadą\">🔊</button>","едем / едете / едут"],
      ["jeżdżę / jeździsz / jeździ <button class=\"play\" data-say=\"jeżdżę, jeździsz, jeździ\">🔊</button>","езжу / ездишь / ездит [éжджэ]"],
      ["autobusem · pociągiem · samochodem <button class=\"play\" data-say=\"autobusem, pociągiem, samochodem\">🔊</button>","автобусом · поездом · машиной"],
      ["na rowerze <button class=\"play\" data-say=\"na rowerze\">🔊</button>","на велосипеде"],
      ["pieszo / na piechotę","пешком"]
    ],"star":3},
    "examples":[
      {"ru":"Завтра я еду в Варшаву.","en":"Jutro <b>jadę</b> do Warszawy.","say":"Jutro jadę do Warszawy."},
      {"ru":"Каждую неделю езжу к маме.","en":"Co tydzień <b>jeżdżę</b> do mamy.","say":"Co tydzień jeżdżę do mamy."},
      {"ru":"Еду на работу автобусом.","en":"<b>Jadę</b> do pracy <b>autobusem</b>.","say":"Jadę do pracy autobusem."},
      {"ru":"Марек ездит на велосипеде.","en":"Marek <b>jeździ na rowerze</b>.","say":"Marek jeździ na rowerze."},
      {"ru":"На чём ты едешь? — Поездом.","en":"<b>Czym jedziesz?</b> — Pociągiem.","say":"Czym jedziesz? Pociągiem."}
    ],
    "mistakes":[
      {"wrong":"Jadę autobus.","right":"Jadę <b>autobusem</b>.","why":"средство передвижения — творительный падеж, как в русском «еду автобусом»."},
      {"wrong":"Co tydzień jadę do mamy.","right":"Co tydzień <b>jeżdżę</b> do mamy.","why":"co tydzień — регулярность, значит jeździć."}
    ],
    "mnemonic":"🚌 jadę = еду (сейчас) · jeżdżę = езжу (регулярно). На чём — творительный: autobusem.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> смотри на слово co tydzień.",
       "q":"«Каждую неделю я езжу в Гданьск» — Co tydzień ___ do Gdańska.","opts":["jadę","jeżdżę","jedziesz"],"answer":1,
       "explain":"Регулярность — <b>jeżdżę</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж средства передвижения.",
       "q":"«Еду поездом» —","opts":["Jadę pociąg","Jadę pociągiem","Jadę na pociągu"],"answer":1,
       "explain":"Творительный падеж: <b>pociągiem</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Завтра я еду в Варшаву»</b>","answer":"Jutro jadę do Warszawy"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Ловушка дня",
    "title":"<em>jadę</em> («еду») и <em>jem</em> («ем»)",
    "paras":[
      "Два самых нужных глагола начинаются одинаково и означают совершенно разное. <b>jechać</b> — ехать: jadę, jedziesz, jedzie, jadą. <b>jeść</b> — есть: jem, jesz, je, jedzą.",
      "Опасных мест ровно два. Первое: <b>jadę</b> (еду) и <b>jem</b> (ем) — тут спасает буква. Второе злее: <b>jadą</b> (они едут) и <b>jedzą</b> (они едят) — звучат почти одинаково, а различаются местом гласной.",
      "Мостик простой: в «еду» есть <b>д</b>, и в jadę тоже — jaDę. А «ем» короткое в обоих языках: jem, jesz, je.",
      "И самый польский пример на закуску: <b>Jadę i jem</b> — «еду и ем». Если сможешь сказать это не запнувшись, ловушка обезврежена."
    ],
    "audio":"Два самых нужных глагола начинаются одинаково и означают совершенно разное. Jechać — ехать: jadę, jedziesz, jedzie, jadą. Jeść — есть: jem, jesz, je, jedzą. Опасных мест ровно два. Первое: jadę, еду, и jem, ем — тут спасает буква. Второе злее: jadą, они едут, и jedzą, они едят — звучат почти одинаково, а различаются местом гласной. Мостик простой: в слове «еду» есть буква д, и в jadę тоже. А «ем» короткое в обоих языках: jem, jesz, je. И самый польский пример на закуску: jadę i jem, еду и ем. Если сможешь сказать это не запнувшись, ловушка обезврежена.",
    "table":{"rows":[
      ["jadę / jedziesz / jadą <button class=\"play\" data-say=\"jadę, jedziesz, jadą\">🔊</button>","еду / едешь / едут"],
      ["jem / jesz / jedzą <button class=\"play\" data-say=\"jem, jesz, jedzą\">🔊</button>","ем / ешь / едят"],
      ["Jadę do domu.","Еду домой."],
      ["Jem w domu.","Ем дома."],
      ["Oni jadą pociągiem. <button class=\"play\" data-say=\"Oni jadą pociągiem\">🔊</button>","Они едут поездом."],
      ["Oni jedzą obiad. <button class=\"play\" data-say=\"Oni jedzą obiad\">🔊</button>","Они едят обед."]
    ],"star":1},
    "examples":[
      {"ru":"Еду и ем.","en":"<b>Jadę</b> i <b>jem</b>.","say":"Jadę i jem."},
      {"ru":"Они едут в Краков.","en":"Oni <b>jadą</b> do Krakowa.","say":"Oni jadą do Krakowa."},
      {"ru":"Они едят завтрак.","en":"Oni <b>jedzą</b> śniadanie.","say":"Oni jedzą śniadanie."}
    ],
    "mistakes":[
      {"wrong":"Jem do pracy.","right":"<b>Jadę</b> do pracy.","why":"jem — это «ем». Ехать — jadę."},
      {"wrong":"Oni jadą obiad.","right":"Oni <b>jedzą</b> obiad.","why":"обед едят: jedzą. Jadą — про движение."}
    ],
    "mnemonic":"🍽️🚗 jaDę — еДу. Jem — ем. Oni jadą pociągiem, a potem jedzą obiad.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, что стоит после глагола — место или еда.",
       "q":"«Они едят обед» —","opts":["Oni jadą obiad","Oni jedzą obiad","Oni jedzie obiad"],"answer":1,
       "explain":"Еда — значит jeść: <b>jedzą</b> obiad."},
      {"type":"choice","howto":"<b>Что делать:</b> после do идёт место, а не еда.",
       "q":"«Еду в Краков» —","opts":["Jem do Krakowa","Jadę do Krakowa","Jedzą do Krakowa"],"answer":1,
       "explain":"Движение к месту — <b>jadę</b>."},
      {"type":"speak","target":"Jadę i jem.","sub":"еду и ем","want":"jadę i jem"}
    ]
   },
   {
    "eyebrow":"Правило 4 · С приставкой",
    "title":"<em>pójdę</em>, <em>pojadę</em> — и вид глагола снова здесь",
    "paras":[
      "Помнишь главный закон вида: у совершенного глагола нет настоящего времени, его форма настоящего автоматически значит будущее? Глаголы движения подчиняются ему точно так же.",
      "<b>iść → pójść</b>: pójdę, pójdziesz, pójdzie — «пойду, пойдёшь, пойдёт». <b>jechać → pojechać</b>: pojadę, pojedziesz, pojedzie — «поеду, поедешь, поедет». Приставка po- делает ровно то же, что русское «по-»: idę → pójdę = иду → пойду.",
      "В прошедшем времени пара работает так же: <b>szedłem / szłam</b> (шёл / шла) — процесс, <b>poszedłem / poszłam</b> (пошёл / пошла) — событие. И jechałem / pojechałem.",
      "А у chodzić и jeździć будущее строится долгим способом, через będę: <b>będę chodzić</b> (или będę chodził / chodziła), <b>będę jeździć</b>. Это несовершенный вид — приставки ему тут не положено."
    ],
    "audio":"Помнишь главный закон вида: у совершенного глагола нет настоящего времени, его форма настоящего автоматически значит будущее. Глаголы движения подчиняются ему точно так же. Iść — pójść: pójdę, pójdziesz, pójdzie, то есть пойду, пойдёшь, пойдёт. Jechać — pojechać: pojadę, pojedziesz, pojedzie, то есть поеду, поедешь, поедет. Приставка po- делает ровно то же, что русское по-. В прошедшем времени пара работает так же: szedłem или szłam, шёл и шла, процесс; poszedłem или poszłam, пошёл и пошла, событие. И jechałem, pojechałem. А у chodzić и jeździć будущее строится долгим способом, через będę: będę chodzić, będę jeździć. Это несовершенный вид — приставки ему тут не положено.",
    "table":{"rows":[
      ["idę → pójdę <button class=\"play\" data-say=\"idę, pójdę\">🔊</button>","иду → пойду"],
      ["jadę → pojadę <button class=\"play\" data-say=\"jadę, pojadę\">🔊</button>","еду → поеду"],
      ["szedłem / szłam → poszedłem / poszłam","шёл / шла → пошёл / пошла"],
      ["będę chodzić / będę jeździć","буду ходить / буду ездить"],
      ["Jutro pójdę do lekarza. <button class=\"play\" data-say=\"Jutro pójdę do lekarza\">🔊</button>","Завтра пойду к врачу."]
    ],"star":0},
    "examples":[
      {"ru":"Завтра пойду к врачу.","en":"Jutro <b>pójdę</b> do lekarza.","say":"Jutro pójdę do lekarza."},
      {"ru":"В субботу поеду в Гданьск.","en":"W sobotę <b>pojadę</b> do Gdańska.","say":"W sobotę pojadę do Gdańska."},
      {"ru":"Вчера я пошёл (пошла) в кино.","en":"Wczoraj <b>poszedłem</b> do kina.","gloss":"женщина скажет: poszłam","say":"Wczoraj poszedłem do kina."},
      {"ru":"Буду ходить в бассейн раз в неделю.","en":"<b>Będę chodzić</b> na basen raz w tygodniu.","say":"Będę chodzić na basen raz w tygodniu."}
    ],
    "mistakes":[
      {"wrong":"Będę pójść do lekarza.","right":"<b>Pójdę</b> do lekarza.","why":"совершенный вид сам даёт будущее — как русское «пойду». «Буду пойти» невозможно ни в одном из двух языков."},
      {"wrong":"Jutro idę pójdę.","right":"Jutro <b>pójdę</b>.","why":"нужен один глагол: либо idę (иду сейчас), либо pójdę (пойду завтра)."}
    ],
    "mnemonic":"➡️ po- = русское «по-»: idę → pójdę, jadę → pojadę. Форма настоящего, смысл будущего.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что совершенный вид не дружит с będę.",
       "q":"«Завтра пойду к врачу» —","opts":["Jutro będę pójść do lekarza","Jutro pójdę do lekarza","Jutro chodzę do lekarza"],"answer":1,
       "explain":"Совершенный вид сам значит будущее: <b>pójdę</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> это регулярное действие в будущем.",
       "q":"«Буду ездить на работу автобусом» —","opts":["Będę pojechać autobusem","Będę jeździć autobusem","Pojadę jeździć autobusem"],"answer":1,
       "explain":"Регулярность — несовершенный вид, а он строит будущее через <b>będę jeździć</b>."},
      {"type":"type","howto":"Напиши «В субботу поеду в Гданьск». Диакритику можно не ставить.",
       "q":"В субботу поеду в Гданьск.","accept":["w sobotę pojadę do gdańska","w sobote pojade do gdanska"],"placeholder":"W sobotę…"}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек договариваются о выходных — и весь разговор держится на четырёх глаголах движения. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Dokąd idziesz?","ru":"Куда ты идёшь?",
      "words":[["Dokąd","куда"],["idziesz","идёшь (сейчас)"]]},
     {"who":"A","name":"Anna","side":"left","en":"Na dworzec. Jadę do Gdańska.","ru":"На вокзал. Еду в Гданьск.",
      "words":[["dworzec","вокзал"],["jadę","еду (сейчас)"]]},
     {"who":"M","name":"Marek","side":"right","en":"Często jeździsz do Gdańska?","ru":"Часто ездишь в Гданьск?",
      "words":[["często","часто"],["jeździsz","ездишь (регулярно)"]]},
     {"who":"A","name":"Anna","side":"left","en":"Raz w miesiącu. Mam tam siostrę.","ru":"Раз в месяц. У меня там сестра.",
      "words":[["raz w miesiącu","раз в месяц"],["siostrę","сестру"]]},
     {"who":"M","name":"Marek","side":"right","en":"Czym jedziesz? Pociągiem?","ru":"На чём едешь? Поездом?",
      "words":[["Czym","на чём"],["pociągiem","поездом"]]},
     {"who":"A","name":"Anna","side":"left","en":"Tak. Pociąg jest szybszy niż autobus.","ru":"Да. Поезд быстрее автобуса.",
      "words":[["szybszy","быстрее"],["niż","чем"]]},
     {"who":"M","name":"Marek","side":"right","en":"A do pracy chodzisz pieszo?","ru":"А на работу ходишь пешком?",
      "words":[["chodzisz","ходишь (регулярно)"],["pieszo","пешком"]]},
     {"who":"A","name":"Anna","side":"left","en":"Codziennie. A w weekend jeżdżę na rowerze.","ru":"Каждый день. А в выходные катаюсь на велосипеде.",
      "words":[["codziennie","каждый день"],["na rowerze","на велосипеде"]]},
     {"who":"M","name":"Marek","side":"right","en":"To ja też pojadę na rowerze w sobotę.","ru":"Тогда я тоже поеду на велосипеде в субботу.",
      "words":[["pojadę","поеду"],["też","тоже"]]}
   ]
 },
 "vocab":{
   "intro":"Слова дня — вся система движения на одной странице.",
   "items":[
     {"en":"iść (idę, idziesz)","ru":"идти (сейчас)","ex":"Teraz idę do pracy."},
     {"en":"chodzić (chodzę, chodzisz)","ru":"ходить (регулярно)","ex":"Chodzę do pracy pieszo."},
     {"en":"jechać (jadę, jedziesz)","ru":"ехать (сейчас)","ex":"Jadę do Warszawy."},
     {"en":"jeździć (jeżdżę, jeździsz)","ru":"ездить (регулярно)","ex":"Jeżdżę tam co tydzień."},
     {"en":"jeść (jem, jesz)","ru":"есть, кушать","ex":"Jem obiad w domu."},
     {"en":"pójdę / pojadę","ru":"пойду / поеду","ex":"Jutro pójdę do lekarza."},
     {"en":"autobusem / pociągiem","ru":"автобусом / поездом","ex":"Jadę pociągiem."},
     {"en":"samochodem / tramwajem","ru":"на машине / на трамвае","ex":"Jeżdżę samochodem."},
     {"en":"na rowerze","ru":"на велосипеде","ex":"Marek jeździ na rowerze."},
     {"en":"pieszo / na piechotę","ru":"пешком","ex":"Chodzę do pracy pieszo."},
     {"en":"Dokąd idziesz?","ru":"Куда ты идёшь?","ex":"Dokąd idziesz? — Do sklepu."},
     {"en":"Czym jedziesz?","ru":"На чём ты едешь?","ex":"Czym jedziesz? — Autobusem."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к её переводу. Смотри на пару «сейчас — вообще».",
   "pairs":[["idę","иду сейчас"],["chodzę","хожу вообще"],["jadę","еду сейчас"],["jeżdżę","езжу регулярно"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как Марек рассказывает о своих поездках.",
   "title":"Jak jeżdżę",
   "sentences":["Mieszkam w Krakowie i pracuję w centrum.","Codziennie chodzę do pracy pieszo — to dwadzieścia minut.","Kiedy pada deszcz, jadę tramwajem.","Raz w miesiącu jeżdżę do Warszawy.","Zwykle jadę pociągiem, bo pociąg jest szybszy niż autobus.","W weekend jeżdżę na rowerze nad rzekę.","Wczoraj poszedłem do kina, a potem jadłem pizzę.","Jutro pojadę do Gdańska.","Anna jedzie tam ze mną.","A ty? Chodzisz do pracy czy jedziesz?"],
   "translation":"Я живу в Кракове и работаю в центре. Каждый день хожу на работу пешком — это двадцать минут. Когда идёт дождь, еду на трамвае. Раз в месяц езжу в Варшаву. Обычно еду поездом, потому что поезд быстрее автобуса. В выходные катаюсь на велосипеде к реке. Вчера я пошёл в кино, а потом ел пиццу. Завтра поеду в Гданьск. Анна едет туда со мной. А ты? Ходишь на работу пешком или ездишь?"
 },
 "quiz":{
   "intro":"Пять вопросов — и система движения закреплена.",
   "items":[
     {"q":"1. «Каждый день я хожу на работу» — Codziennie ___ do pracy.","opts":["idę","chodzę","pójdę"],"answer":1,
      "explain":"Codziennie — регулярность: <b>chodzę</b>."},
     {"q":"2. «Сейчас я иду в магазин» — Teraz ___ do sklepu.","opts":["chodzę","idę","jadę"],"answer":1,
      "explain":"Teraz — одно движение сейчас: <b>idę</b>."},
     {"q":"3. «Раз в месяц езжу в Варшаву» — Raz w miesiącu ___ do Warszawy.","opts":["jadę","jeżdżę","idę"],"answer":1,
      "explain":"Регулярность на транспорте — <b>jeżdżę</b>."},
     {"q":"4. «Они едят обед» —","opts":["Oni jadą obiad","Oni jedzą obiad","Oni jadę obiad"],"answer":1,
      "explain":"Есть — jeść: <b>jedzą</b>. Jadą значит «едут»."},
     {"q":"5. «Еду поездом» —","opts":["Jadę pociąg","Jadę pociągiem","Jadę na pociąg"],"answer":1,
      "explain":"Средство передвижения — творительный: <b>pociągiem</b>."}
   ]
 },
 "essay":{
   "intro":"Расскажи, как ты передвигаешься.",
   "prompt":"Напиши 4–5 фраз: как ты обычно добираешься на работу или учёбу, на чём ездишь в другой город, куда идёшь сегодня и куда поедешь в выходные.",
   "hint":"Схема: Codziennie chodzę / jeżdżę… Teraz idę… W weekend pojadę… Проверь маркеры: codziennie → chodzę, teraz → idę. 🚌",
   "example":"Codziennie chodzę do pracy pieszo, bo to blisko. Kiedy pada deszcz, jadę autobusem. Raz w miesiącu jeżdżę do rodziców — zwykle pociągiem. Teraz idę do sklepu. W sobotę pojadę nad morze."
 }
},
"18": {
 "day":18,"week":"03",
 "themeRu":"У врача",
 "themeEn":"U lekarza",
 "intro":"У Марека второй день болит горло, и сегодня мы идём с ним в поликлинику. Главная фраза дня выглядит странно, а устроена по-русски: <b>boli mnie głowa</b> — «болит меня голова». Разберём, откуда там винительный падеж, назовём части тела и научимся жаловаться так, чтобы врач понял с первого раза.",
 "introAudio":"У Марека второй день болит горло, и сегодня мы идём с ним в поликлинику. Главная фраза дня выглядит странно, а устроена по-русски: boli mnie głowa, буквально «болит меня голова». Разберём, откуда там винительный падеж, назовём части тела и научимся жаловаться так, чтобы врач понял с первого раза.",
 "goals":[
   "Сказать, что болит: <b>boli mnie głowa</b>, <b>bolą mnie zęby</b>",
   "Назвать части тела: <b>gardło, brzuch, plecy, ręka, noga</b>",
   "Описать симптомы: <b>mam katar, mam gorączkę, jestem chory / chora</b>",
   "Понять врача: <b>Co panu dolega?</b> — и получить <b>receptę</b>"
 ],
 "learned":[
   "Сказал(а), что болит: boli mnie głowa, bolą mnie zęby",
   "Назвал(а) части тела: gardło, brzuch, plecy, ręka, noga",
   "Описал(а) симптомы: mam katar, mam gorączkę, jestem chory / chora",
   "Понял(а) врача: Co panu dolega? — и получил(а) receptę"
 ],
 "review":{
   "intro":"Вчерашние глаголы движения пригодятся сразу: к врачу ведь надо ещё дойти. Проверим пары и по традиции — вид глагола.",
   "introAudio":"Вчерашние глаголы движения пригодятся сразу: к врачу ведь надо ещё дойти. Проверим пары и по традиции — вид глагола.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> ищи слово-маркер.",
      "q":"«Сейчас я иду к врачу» — Teraz ___ do lekarza.","opts":["chodzę","idę","jeżdżę"],"answer":1,
      "explain":"Teraz — одно движение сейчас: <b>idę</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> снова маркер решает всё.",
      "q":"«Раз в год хожу к врачу» — Raz w roku ___ do lekarza.","opts":["idę","chodzę","pójdę"],"answer":1,
      "explain":"Раз в год — регулярность: <b>chodzę</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, что стоит после глагола.",
      "q":"«Они едят завтрак» —","opts":["Oni jadą śniadanie","Oni jedzą śniadanie","Oni jedzie śniadanie"],"answer":1,
      "explain":"Еда — jeść: <b>jedzą</b>. Jadą значит «едут»."},
     {"type":"choice","howto":"<b>Что делать:</b> маркер cały tydzień говорит о длительности.",
      "q":"«Всю неделю я болел(а)» —","opts":["Cały tydzień chorowałem","Cały tydzień zachorowałem","Cały tydzień będę chorować"],"answer":0,
      "explain":"Cały tydzień — длительность, значит несовершенный вид: <b>chorowałem</b>. Zachorowałem — это «заболел», один момент."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Завтра поеду в Гданьск»</b>","answer":"Jutro pojadę do Gdańska"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Главная фраза",
    "title":"<em>Boli mnie głowa</em>",
    "paras":[
      "Сначала русская фраза: «у меня болит голова». Подлежащее — голова, а человек стоит сбоку. Польский строит то же самое, только человека ставит не «у меня», а прямо в винительный падеж: <b>Boli mnie głowa</b> — дословно «болит меня голова».",
      "Именно тут и живёт ловушка. Сказать «u mnie boli głowa» нельзя — это калька, поляк такого не говорит. Форма <b>mnie</b> здесь — винительный падеж от ja, тот самый, что в Znasz mnie? («знаешь меня?»).",
      "Весь ряд: boli <b>mnie</b> (меня), boli <b>cię</b> (тебя), boli <b>go</b> (его), boli <b>ją</b> (её), boli <b>nas</b> (нас), boli <b>was</b> (вас), boli <b>ich</b> (их).",
      "И одна согласовательная мелочь: глагол согласуется с тем, что болит. Одно — <b>boli</b>: Boli mnie głowa. Много — <b>bolą</b>: Bolą mnie zęby. Bolą mnie nogi. Русский поступает так же («болит голова» — «болят зубы»), так что ошибиться трудно."
    ],
    "audio":"Сначала русская фраза: «у меня болит голова». Подлежащее — голова, а человек стоит сбоку. Польский строит то же самое, только человека ставит не «у меня», а прямо в винительный падеж: boli mnie głowa, дословно «болит меня голова». Именно тут и живёт ловушка. Сказать «u mnie boli głowa» нельзя, это калька, поляк такого не говорит. Форма mnie здесь — винительный падеж от ja, тот самый, что в znasz mnie, знаешь меня. Весь ряд: boli mnie, boli cię, boli go, boli ją, boli nas, boli was, boli ich. И одна согласовательная мелочь: глагол согласуется с тем, что болит. Одно — boli: boli mnie głowa. Много — bolą: bolą mnie zęby, bolą mnie nogi. Русский поступает так же: болит голова, болят зубы.",
    "table":{"rows":[
      ["Boli mnie głowa. <button class=\"play\" data-say=\"Boli mnie głowa\">🔊</button>","У меня болит голова. [бóли мнэ гу̯óва]"],
      ["Boli mnie gardło. <button class=\"play\" data-say=\"Boli mnie gardło\">🔊</button>","У меня болит горло."],
      ["Bolą mnie zęby. <button class=\"play\" data-say=\"Bolą mnie zęby\">🔊</button>","У меня болят зубы."],
      ["Boli cię brzuch? <button class=\"play\" data-say=\"Boli cię brzuch?\">🔊</button>","У тебя болит живот?"],
      ["Boli go noga.","У него болит нога."],
      ["Co ci jest? — Nic mi nie jest. <button class=\"play\" data-say=\"Co ci jest? Nic mi nie jest\">🔊</button>","Что с тобой? — Ничего."]
    ],"star":0},
    "examples":[
      {"ru":"У меня болит голова.","en":"<b>Boli mnie</b> głowa.","say":"Boli mnie głowa."},
      {"ru":"У меня болят зубы.","en":"<b>Bolą mnie</b> zęby.","gloss":"много — bolą","say":"Bolą mnie zęby."},
      {"ru":"У тебя болит горло?","en":"<b>Boli cię</b> gardło?","say":"Boli cię gardło?"},
      {"ru":"У неё болит спина.","en":"<b>Bolą ją</b> plecy.","gloss":"plecy всегда множественное","say":"Bolą ją plecy."},
      {"ru":"Болит со вчерашнего дня.","en":"Boli <b>od wczoraj</b>.","say":"Boli od wczoraj."}
    ],
    "mistakes":[
      {"wrong":"U mnie boli głowa.","right":"<b>Boli mnie</b> głowa.","why":"«у меня» здесь не переводится: человек встаёт в винительный падеж — mnie, cię, go."},
      {"wrong":"Boli mnie zęby.","right":"<b>Bolą</b> mnie zęby.","why":"зубов много — значит bolą, как русское «болят»."}
    ],
    "mnemonic":"🤕 Boli mnie… — «болит меня…». Одно — boli, много — bolą.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, куда девается «у меня».",
       "q":"«У меня болит голова» —","opts":["U mnie boli głowa","Boli mnie głowa","Mam boli głowa"],"answer":1,
       "explain":"Человек стоит в винительном: <b>Boli mnie głowa</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> посчитай, сколько болит.",
       "q":"«У меня болят ноги» —","opts":["Boli mnie nogi","Bolą mnie nogi","Bolą mi nogi"],"answer":1,
       "explain":"Много — <b>bolą</b>, и человек в винительном: mnie, не mi."},
      {"type":"type","howto":"Напиши «У тебя болит горло?». Диакритику можно не ставить.",
       "q":"У тебя болит горло?","accept":["boli cię gardło","boli cie gardlo","czy boli cię gardło"],"placeholder":"Boli cię…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Части тела",
    "title":"<em>głowa, gardło, brzuch, plecy</em>",
    "paras":[
      "Список короткий, и половина слов узнаётся сразу: <b>głowa</b> (голова), <b>oko / oczy</b> (глаз / глаза), <b>ucho / uszy</b> (ухо / уши), <b>nos</b>, <b>ząb / zęby</b> (зуб / зубы), <b>gardło</b> (горло), <b>serce</b> (сердце), <b>ręka / ręce</b> (рука / руки), <b>noga / nogi</b> (нога / ноги), <b>brzuch</b> (живот), <b>żołądek</b> (желудок).",
      "Отдельно — слово, из-за которого спотыкаются все: <b>plecy</b> — «спина». Оно существует только во множественном числе, единственного просто нет. Поэтому и глагол всегда во множественном: <b>Bolą mnie plecy</b> — «у меня болит спина».",
      "Русский, кстати, знает такие слова и сам («ножницы», «очки», «сани»), так что идея не новая — новая только конкретная спина.",
      "Три слова из списка ты уже встречал(а) в дне про множественное число: ręka → ręce, oko → oczy, ucho → uszy. Все три ломают правило одинаково, и все три знакомы: «руки», «очи», «уши»."
    ],
    "audio":"Список короткий, и половина слов узнаётся сразу: głowa — голова, oko и oczy — глаз и глаза, ucho и uszy — ухо и уши, nos, ząb и zęby — зуб и зубы, gardło — горло, serce — сердце, ręka и ręce — рука и руки, noga и nogi — нога и ноги, brzuch — живот, żołądek — желудок. Отдельно слово, из-за которого спотыкаются все: plecy — спина. Оно существует только во множественном числе, единственного просто нет. Поэтому и глагол всегда во множественном: bolą mnie plecy. Русский знает такие слова и сам: ножницы, очки, сани, так что идея не новая. Три слова из списка уже встречались в дне про множественное число: ręka и ręce, oko и oczy, ucho и uszy. Все три ломают правило одинаково, и все три знакомы: руки, очи, уши.",
    "table":{"rows":[
      ["głowa <button class=\"play\" data-say=\"głowa\">🔊</button>","голова [гу̯óва]"],
      ["gardło <button class=\"play\" data-say=\"gardło\">🔊</button>","горло [гáрду̯о]"],
      ["brzuch <button class=\"play\" data-say=\"brzuch\">🔊</button>","живот [бжух]"],
      ["ząb → zęby <button class=\"play\" data-say=\"ząb, zęby\">🔊</button>","зуб → зубы"],
      ["plecy <button class=\"play\" data-say=\"plecy\">🔊</button>","спина — только множественное!"],
      ["ręka → ręce · noga → nogi","рука → руки · нога → ноги"],
      ["serce · żołądek","сердце · желудок"]
    ],"star":4},
    "examples":[
      {"ru":"У меня болит живот.","en":"Boli mnie <b>brzuch</b>.","say":"Boli mnie brzuch."},
      {"ru":"У меня болит спина.","en":"Bolą mnie <b>plecy</b>.","gloss":"дословно «болят спины»","say":"Bolą mnie plecy."},
      {"ru":"Болит правая рука.","en":"Boli mnie prawa <b>ręka</b>.","say":"Boli mnie prawa ręka."},
      {"ru":"У него болят уши.","en":"Bolą go <b>uszy</b>.","gloss":"ucho → uszy, как «ухо → уши»","say":"Bolą go uszy."}
    ],
    "mistakes":[
      {"wrong":"Boli mnie plec.","right":"<b>Bolą mnie plecy</b>.","why":"формы «plec» не существует: слово живёт только во множественном числе, как русские «ножницы»."},
      {"wrong":"Bolą mnie ręka.","right":"<b>Boli</b> mnie ręka.","why":"одна рука — значит boli. Bolą — только когда болит несколько."}
    ],
    "mnemonic":"🦴 plecy — спина, всегда во множественном. Bolą mnie plecy.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни слово-исключение.",
       "q":"«Спина» по-польски —","opts":["plec","plecy","brzuch"],"answer":1,
       "explain":"<b>Plecy</b> — и только во множественном числе. Brzuch — живот."},
      {"type":"choice","howto":"<b>Что делать:</b> одна рука или несколько?",
       "q":"«У меня болит рука» —","opts":["Bolą mnie ręka","Boli mnie ręka","Boli mi ręka"],"answer":1,
       "explain":"Одна рука — <b>boli</b>, человек в винительном — mnie."},
      {"type":"type","howto":"Напиши «У меня болит горло». Диакритику можно не ставить.",
       "q":"У меня болит горло.","accept":["boli mnie gardło","boli mnie gardlo"],"placeholder":"Boli mnie…"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Симптомы",
    "title":"<em>Mam katar</em> · <em>Jestem chory</em>",
    "paras":[
      "Половина жалоб строится через <b>mieć</b> — как в русском «у меня насморк». <b>Mam katar</b> (насморк), <b>mam kaszel</b> (кашель), <b>mam gorączkę</b> (температура), <b>mam grypę</b> (грипп), <b>mam alergię</b>.",
      "Вторая половина — через <b>być</b> и прилагательное: <b>Jestem chory</b> / <b>Jestem chora</b> («я болен / больна»), <b>Jestem przeziębiony</b> / <b>przeziębiona</b> («я простужен / простужена»).",
      "Здесь стоит остановиться. С существительным być требует творительного падежа — <b>Jestem lekarzem</b>, ты помнишь это с A1. А с прилагательным — обычный именительный: <b>Jestem chory</b>, а не «chorym». Две разные рамки, и путать их не надо.",
      "И самое частое: <b>Źle się czuję</b> («мне плохо, я плохо себя чувствую»), <b>Czuję się lepiej</b> («мне лучше» — вчерашнее lepiej уже в деле). Спросить о самочувствии: <b>Jak się czujesz?</b>"
    ],
    "audio":"Половина жалоб строится через mieć, как в русском «у меня насморк». Mam katar — насморк, mam kaszel — кашель, mam gorączkę — температура, mam grypę — грипп, mam alergię. Вторая половина через być и прилагательное: jestem chory или jestem chora, я болен или больна; jestem przeziębiony, przeziębiona, я простужен, простужена. Здесь стоит остановиться. С существительным być требует творительного падежа: jestem lekarzem, ты помнишь это с A1. А с прилагательным обычный именительный: jestem chory, а не «chorym». Две разные рамки, и путать их не надо. И самое частое: źle się czuję, мне плохо; czuję się lepiej, мне лучше. Спросить о самочувствии: jak się czujesz?",
    "table":{"rows":[
      ["Mam katar. <button class=\"play\" data-say=\"Mam katar\">🔊</button>","У меня насморк."],
      ["Mam kaszel. <button class=\"play\" data-say=\"Mam kaszel\">🔊</button>","У меня кашель."],
      ["Mam gorączkę. <button class=\"play\" data-say=\"Mam gorączkę\">🔊</button>","У меня температура."],
      ["Jestem chory / chora. <button class=\"play\" data-say=\"Jestem chory, jestem chora\">🔊</button>","Я болен / больна."],
      ["Jestem przeziębiony / przeziębiona.","Я простужен / простужена."],
      ["Źle się czuję. <button class=\"play\" data-say=\"Źle się czuję\">🔊</button>","Мне плохо."],
      ["Jak się czujesz? — Lepiej.","Как себя чувствуешь? — Лучше."]
    ],"star":5},
    "examples":[
      {"ru":"У меня насморк и кашель.","en":"<b>Mam katar</b> i <b>kaszel</b>.","say":"Mam katar i kaszel."},
      {"ru":"У меня температура тридцать восемь.","en":"<b>Mam gorączkę</b> — trzydzieści osiem stopni.","say":"Mam gorączkę, trzydzieści osiem stopni."},
      {"ru":"Я болен уже три дня.","en":"<b>Jestem chory</b> od trzech dni.","gloss":"od + родительный: od trzech dni","say":"Jestem chory od trzech dni."},
      {"ru":"Сегодня мне лучше.","en":"Dziś <b>czuję się lepiej</b>.","say":"Dziś czuję się lepiej."}
    ],
    "mistakes":[
      {"wrong":"Jestem chorym.","right":"<b>Jestem chory.</b>","why":"с прилагательным być берёт именительный. Творительный нужен существительным: jestem lekarzem."},
      {"wrong":"Ja mam gorączka.","right":"Mam <b>gorączkę</b>.","why":"после mieć — винительный падеж: gorączkę, grypę, alergię."}
    ],
    "mnemonic":"🌡️ Mam katar / kaszel / gorączkę. Jestem chory (именительный!). Źle się czuję.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после mieć.",
       "q":"«У меня температура» —","opts":["Mam gorączka","Mam gorączkę","Jestem gorączką"],"answer":1,
       "explain":"После mieć — винительный: <b>mam gorączkę</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> реши, прилагательное это или существительное.",
       "q":"«Я болен» —","opts":["Jestem chorym","Jestem chory","Mam chory"],"answer":1,
       "explain":"chory — прилагательное, значит именительный: <b>Jestem chory</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Сегодня я чувствую себя лучше»</b>","answer":"Dziś czuję się lepiej"}
    ]
   },
   {
    "eyebrow":"Правило 4 · В кабинете",
    "title":"<em>Co panu dolega?</em> и рецепт, который не рецепт",
    "paras":[
      "Первый вопрос врача звучит почти всегда одинаково: <b>Co panu dolega?</b> (мужчине) или <b>Co pani dolega?</b> (женщине) — «на что жалуетесь?». Обрати внимание на падеж: panu, pani — это дательный, вчерашний знакомый по dziękuję ci и pomagam mamie.",
      "Дальше идут уточнения: <b>Od kiedy to boli?</b> («с каких пор болит?») — ответ <b>Od wczoraj</b>, <b>Od trzech dni</b>. И просьбы: <b>Proszę otworzyć usta</b>, <b>Proszę oddychać</b> — вежливая формула proszę + инфинитив, знакомая с A1.",
      "Совет врача можно понять и передать модальными глаголами: <b>Musi pan odpoczywać</b> («вам надо отдыхать»), <b>Musisz pić dużo wody</b>. Завтра мы научимся давать те же советы короче — повелительным наклонением.",
      "И ложный друг, который стоит запомнить сразу: <b>recepta</b> — это рецепт от врача, бумажка для аптеки. А кулинарный рецепт — <b>przepis</b>: przepis na sernik. Два разных слова там, где русский обходится одним."
    ],
    "audio":"Первый вопрос врача звучит почти всегда одинаково: co panu dolega, мужчине, или co pani dolega, женщине — «на что жалуетесь». Обрати внимание на падеж: panu, pani — это дательный, знакомый по dziękuję ci и pomagam mamie. Дальше идут уточнения: od kiedy to boli, с каких пор болит; ответ — od wczoraj, od trzech dni. И просьбы: proszę otworzyć usta, proszę oddychać — вежливая формула proszę плюс инфинитив, знакомая с A1. Совет врача можно понять и передать модальными глаголами: musi pan odpoczywać, вам надо отдыхать; musisz pić dużo wody. Завтра мы научимся давать те же советы короче, повелительным наклонением. И ложный друг, который стоит запомнить сразу: recepta — это рецепт от врача, бумажка для аптеки. А кулинарный рецепт — przepis: przepis na sernik. Два разных слова там, где русский обходится одним.",
    "table":{"rows":[
      ["Co panu / pani dolega? <button class=\"play\" data-say=\"Co panu dolega?\">🔊</button>","На что жалуетесь? (дательный)"],
      ["Od kiedy to boli? — Od wczoraj. <button class=\"play\" data-say=\"Od kiedy to boli? Od wczoraj\">🔊</button>","С каких пор болит? — Со вчера."],
      ["Proszę otworzyć usta. <button class=\"play\" data-say=\"Proszę otworzyć usta\">🔊</button>","Откройте рот, пожалуйста."],
      ["Musi pan odpoczywać.","Вам надо отдыхать."],
      ["recepta <button class=\"play\" data-say=\"recepta\">🔊</button>","рецепт от врача [рэцэ́пта]"],
      ["przepis <button class=\"play\" data-say=\"przepis\">🔊</button>","рецепт блюда [пшéпис]"],
      ["lekarstwo · apteka","лекарство · аптека"]
    ],"star":4},
    "examples":[
      {"ru":"На что жалуетесь? — У меня болит горло.","en":"<b>Co panu dolega?</b> — Boli mnie gardło.","say":"Co panu dolega? Boli mnie gardło."},
      {"ru":"С каких пор болит? — Три дня.","en":"<b>Od kiedy to boli?</b> — Od trzech dni.","say":"Od kiedy to boli? Od trzech dni."},
      {"ru":"Вот рецепт. Лекарство в аптеке.","en":"Oto <b>recepta</b>. Lekarstwo jest w aptece.","say":"Oto recepta. Lekarstwo jest w aptece."},
      {"ru":"У меня есть рецепт сырника.","en":"Mam <b>przepis</b> na sernik.","gloss":"кулинарный рецепт — przepis","say":"Mam przepis na sernik."}
    ],
    "mistakes":[
      {"wrong":"Mam receptę na sernik.","right":"Mam <b>przepis</b> na sernik.","why":"recepta бывает только от врача. Рецепт блюда — przepis."},
      {"wrong":"Co pana dolega?","right":"Co <b>panu</b> dolega?","why":"dolegać просит дательный падеж: panu, pani, mi, ci."}
    ],
    "mnemonic":"💊 Recepta — в аптеку. Przepis — на кухню. Co panu dolega? — дательный.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> подумай, где эта бумажка нужна.",
       "q":"Рецепт сырника — это —","opts":["recepta","przepis","lekarstwo"],"answer":1,
       "explain":"Кулинарный рецепт — <b>przepis</b>. Recepta — от врача."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после dolegać.",
       "q":"Вопрос врача мужчине —","opts":["Co pan dolega?","Co panu dolega?","Co pana dolega?"],"answer":1,
       "explain":"Дательный падеж: <b>Co panu dolega?</b>"},
      {"type":"speak","target":"Boli mnie gardło od wczoraj.","sub":"горло болит со вчерашнего дня","want":"boli mnie gardło"}
    ]
   }
 ],
 "dialogue":{
   "intro":"Марек у врача. Обрати внимание: врач говорит вежливо — pan и proszę, а Марек просто жалуется. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"L","name":"Lekarka","side":"left","en":"Dzień dobry. Co panu dolega?","ru":"Здравствуйте. На что жалуетесь?",
      "words":[["Co panu dolega?","на что жалуетесь"]]},
     {"who":"M","name":"Marek","side":"right","en":"Boli mnie gardło i mam gorączkę.","ru":"У меня болит горло и температура.",
      "words":[["Boli mnie","у меня болит"],["gardło","горло"],["gorączkę","температуру"]]},
     {"who":"L","name":"Lekarka","side":"left","en":"Od kiedy to boli?","ru":"С каких пор болит?",
      "words":[["Od kiedy","с каких пор"]]},
     {"who":"M","name":"Marek","side":"right","en":"Od dwóch dni. Mam też katar.","ru":"Два дня. Ещё у меня насморк.",
      "words":[["od dwóch dni","два дня (уже)"],["katar","насморк"]]},
     {"who":"L","name":"Lekarka","side":"left","en":"Proszę otworzyć usta. Tak… To grypa.","ru":"Откройте рот, пожалуйста. Так… Это грипп.",
      "words":[["Proszę otworzyć","откройте"],["usta","рот"],["grypa","грипп"]]},
     {"who":"M","name":"Marek","side":"right","en":"Czy to poważne?","ru":"Это серьёзно?",
      "words":[["poważne","серьёзно"]]},
     {"who":"L","name":"Lekarka","side":"left","en":"Nie. Musi pan odpoczywać i pić dużo wody.","ru":"Нет. Вам надо отдыхать и много пить воды.",
      "words":[["Musi pan","вам надо"],["odpoczywać","отдыхать"],["dużo wody","много воды"]]},
     {"who":"L","name":"Lekarka","side":"left","en":"Oto recepta. Lekarstwo jest w każdej aptece.","ru":"Вот рецепт. Лекарство есть в любой аптеке.",
      "words":[["recepta","рецепт от врача"],["lekarstwo","лекарство"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dziękuję. Kiedy będę się czuł lepiej?","ru":"Спасибо. Когда мне станет лучше?",
      "words":[["będę się czuł","буду чувствовать себя"],["lepiej","лучше"]]},
     {"who":"L","name":"Lekarka","side":"left","en":"Za trzy dni. Proszę wrócić, jeśli będzie gorzej.","ru":"Через три дня. Приходите снова, если станет хуже.",
      "words":[["za trzy dni","через три дня"],["gorzej","хуже"]]}
   ]
 },
 "vocab":{
   "intro":"Слова дня — всё, что нужно сказать врачу и понять в ответ.",
   "items":[
     {"en":"boli mnie / bolą mnie","ru":"у меня болит / болят","ex":"Boli mnie głowa."},
     {"en":"głowa / gardło","ru":"голова / горло","ex":"Boli mnie gardło."},
     {"en":"brzuch / plecy","ru":"живот / спина","ex":"Bolą mnie plecy."},
     {"en":"ząb → zęby","ru":"зуб → зубы","ex":"Bolą mnie zęby."},
     {"en":"ręka / noga","ru":"рука / нога","ex":"Boli mnie prawa ręka."},
     {"en":"mam katar / kaszel","ru":"у меня насморк / кашель","ex":"Mam katar i kaszel."},
     {"en":"mam gorączkę / grypę","ru":"у меня температура / грипп","ex":"Mam gorączkę."},
     {"en":"jestem chory / chora","ru":"я болен / больна","ex":"Jestem chory od trzech dni."},
     {"en":"źle się czuję","ru":"мне плохо","ex":"Źle się czuję."},
     {"en":"lekarz / lekarka","ru":"врач (муж. / жен.)","ex":"Idę do lekarza."},
     {"en":"recepta","ru":"рецепт от врача","ex":"Oto recepta."},
     {"en":"przepis","ru":"рецепт блюда","ex":"Mam przepis na sernik."},
     {"en":"lekarstwo","ru":"лекарство","ex":"Lekarstwo jest w aptece."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к переводу. Осторожно с двумя «рецептами».",
   "pairs":[["gardło","горло"],["plecy","спина"],["recepta","рецепт от врача"],["przepis","рецепт блюда"]]
 },
 "reading":{
   "intro":"Прочитай и послушай: Анна пишет подруге о том, как болел Марек.",
   "title":"Marek jest chory",
   "sentences":["Marek jest chory od trzech dni.","Boli go gardło i głowa.","Ma gorączkę i katar.","Wczoraj poszedł do lekarza.","Lekarka powiedziała, że to grypa.","Marek dostał receptę i kupił lekarstwo w aptece.","Teraz leży w domu i pije dużo herbaty.","Dziś czuje się lepiej niż wczoraj.","Jutro pewnie już nie będzie miał gorączki.","A ja mam tylko katar — to nic groźnego."],
   "translation":"Марек болеет уже три дня. У него болит горло и голова. У него температура и насморк. Вчера он пошёл к врачу. Врач сказала, что это грипп. Марек получил рецепт и купил лекарство в аптеке. Сейчас он лежит дома и пьёт много чая. Сегодня ему лучше, чем вчера. Завтра, наверное, температуры уже не будет. А у меня только насморк — ничего страшного."
 },
 "quiz":{
   "intro":"Пять вопросов — и к врачу можно идти без переводчика.",
   "items":[
     {"q":"1. «У меня болит голова» —","opts":["U mnie boli głowa","Boli mnie głowa","Mam boli głowa"],"answer":1,
      "explain":"Человек стоит в винительном падеже: <b>Boli mnie głowa</b>."},
     {"q":"2. «У меня болят зубы» —","opts":["Boli mnie zęby","Bolą mnie zęby","Bolą mi zęby"],"answer":1,
      "explain":"Много — <b>bolą</b>, и человек в винительном: mnie."},
     {"q":"3. «Спина» по-польски —","opts":["plec","plecy","brzuch"],"answer":1,
      "explain":"<b>Plecy</b>, только во множественном числе."},
     {"q":"4. «Я больна» —","opts":["Jestem chorą","Jestem chora","Mam chora"],"answer":1,
      "explain":"С прилагательным być берёт именительный: <b>Jestem chora</b>."},
     {"q":"5. Рецепт сырника — это —","opts":["recepta","przepis","lekarstwo"],"answer":1,
      "explain":"Кулинарный рецепт — <b>przepis</b>. Recepta бывает только от врача."}
   ]
 },
 "essay":{
   "intro":"Представь, что ты у врача и надо коротко объяснить, что не так.",
   "prompt":"Напиши 3–4 фразы: что болит, с каких пор, какие ещё симптомы и как ты себя чувствуешь сегодня.",
   "hint":"Схема: Boli mnie… Od… Mam… Jestem chory / chora. Dziś czuję się lepiej. Проверь: одно болит — boli, много — bolą. 💊",
   "example":"Dzień dobry. Boli mnie gardło od dwóch dni. Mam też katar i gorączkę. Źle się czuję, ale dziś jest trochę lepiej niż wczoraj."
 }
},
"19": {
 "day":19,"week":"03",
 "themeRu":"Сделай! Не делай!",
 "themeEn":"Tryb rozkazujący",
 "intro":"Рецепт — это сплошные приказы: возьми, нарежь, добавь, подожди. Инструкция к шкафу — тоже. В день 24 уровня A1 ты уже встречал(а) <b>idź</b> и <b>skręć</b> — сегодня соберём повелительное наклонение целиком, вместе с видом глагола и вежливой формой <b>niech pan</b>.",
 "introAudio":"Рецепт — это сплошные приказы: возьми, нарежь, добавь, подожди. Инструкция к шкафу — тоже. В день двадцать четвёртый уровня A1 формы idź и skręć уже встречались. Сегодня соберём повелительное наклонение целиком, вместе с видом глагола и вежливой формой niech pan.",
 "goals":[
   "Образовать приказ от любого глагола: <b>rób, napisz, kup, idź, czekaj</b>",
   "Выбрать вид: <b>Zrób to!</b> (один раз) и <b>Rób to zawsze!</b> (всегда)",
   "Запретить правильно: <b>Nie rób tego!</b>, <b>Nie martw się!</b>",
   "Попросить вежливо: <b>Niech pan usiądzie</b>"
 ],
 "learned":[
   "Образовал(а) приказ от любого глагола: rób, napisz, kup, idź, czekaj",
   "Выбрал(а) вид: Zrób to! и Rób to zawsze!",
   "Запретил(а) правильно: Nie rób tego!, Nie martw się!",
   "Попросил(а) вежливо: Niech pan usiądzie"
 ],
 "review":{
   "intro":"Вчера мы были у врача. Проверим главную конструкцию — и, как всегда, вид глагола.",
   "introAudio":"Вчера мы были у врача. Проверим главную конструкцию — и, как всегда, вид глагола.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, куда девается «у меня».",
      "q":"«У меня болит живот» —","opts":["U mnie boli brzuch","Boli mnie brzuch","Mam boli brzuch"],"answer":1,
      "explain":"Человек стоит в винительном падеже: <b>Boli mnie brzuch</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> посчитай, сколько болит.",
      "q":"«У меня болит спина» —","opts":["Boli mnie plecy","Bolą mnie plecy","Boli mnie plec"],"answer":1,
      "explain":"Plecy — только множественное, значит <b>bolą</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> подумай, куда несут эту бумажку.",
      "q":"Бумажка от врача для аптеки —","opts":["przepis","recepta","lekarstwo"],"answer":1,
      "explain":"<b>Recepta</b> — рецепт от врача. Przepis — рецепт блюда."},
     {"type":"choice","howto":"<b>Что делать:</b> покупка уже позади — значит прошедшее и совершенный вид.",
      "q":"«Я уже купил(а) лекарство» —","opts":["Już kupię lekarstwo","Już kupiłem lekarstwo","Już będę kupować lekarstwo"],"answer":1,
      "explain":"Прошедшее и результат — <b>kupiłem</b>. Kupię значит «куплю», это будущее."},
     {"type":"type","howto":"Напиши «Я болен» (или «Я больна»). Диакритику можно не ставить.",
      "q":"Я болен / больна.","accept":["jestem chory","jestem chora"],"placeholder":"Jestem…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Как сделать приказ",
    "title":"<em>on robi → rób</em>",
    "paras":[
      "Рецепт формы всегда один: берём глагол в форме «он / она» настоящего времени и снимаем окончание. on rob<b>i</b> → <b>rób</b>, on pisz<b>e</b> → <b>pisz</b>, on kup<b>i</b> → <b>kup</b>, on mów<b>i</b> → <b>mów</b>, on idzi<b>e</b> → <b>idź</b>. Остаётся голый корень — и это уже приказ, ровно как русские «делай», «пиши», «иди».",
      "Иногда при этом гласная в корне подрастает: robi → r<b>ó</b>b, otworzy → otw<b>ó</b>rz, pokroi → pokr<b>ó</b>j, położy → poł<b>ó</b>ż. Причина чисто фонетическая: слог закрылся согласной, и o перешло в ó. Читается это как «у»: rób [руп].",
      "У глаголов первой группы после снятия окончания остаётся гласная, и к ней добавляется <b>-j</b>: on czyta → <b>czytaj</b>, on słucha → <b>słuchaj</b>, on czeka → <b>czekaj</b>, on pyta → <b>pytaj</b>.",
      "А если на конце сходятся неудобные согласные, вставляется <b>-ij</b> или <b>-yj</b>: on zamknie → <b>zamknij</b>, on śpi → <b>śpij</b>. Множественное число делается двумя окончаниями: <b>-cie</b> для «вы» (zróbcie, idźcie, poczekajcie) и <b>-my</b> для «давайте» (zróbmy, chodźmy — «пойдём»)."
    ],
    "audio":"Рецепт формы всегда один: берём глагол в форме «он, она» настоящего времени и снимаем окончание. On robi — rób, on pisze — pisz, on kupi — kup, on mówi — mów, on idzie — idź. Остаётся голый корень, и это уже приказ, ровно как русские «делай», «пиши», «иди». Иногда при этом гласная в корне подрастает: robi — rób, otworzy — otwórz, pokroi — pokrój, położy — połóż. Причина чисто фонетическая: слог закрылся согласной, и o перешло в ó. Читается это как «у». У глаголов первой группы после снятия окончания остаётся гласная, и к ней добавляется -j: on czyta — czytaj, on słucha — słuchaj, on czeka — czekaj, on pyta — pytaj. А если на конце сходятся неудобные согласные, вставляется -ij или -yj: on zamknie — zamknij, on śpi — śpij. Множественное число делается двумя окончаниями: -cie для «вы», zróbcie, idźcie, poczekajcie, и -my для «давайте», zróbmy, chodźmy, то есть пойдём.",
    "table":{"rows":[
      ["on robi → rób <button class=\"play\" data-say=\"rób\">🔊</button>","делай [руп]"],
      ["on pisze → pisz <button class=\"play\" data-say=\"pisz\">🔊</button>","пиши"],
      ["on kupi → kup <button class=\"play\" data-say=\"kup\">🔊</button>","купи"],
      ["on idzie → idź <button class=\"play\" data-say=\"idź\">🔊</button>","иди [ич]"],
      ["on czyta → czytaj <button class=\"play\" data-say=\"czytaj\">🔊</button>","читай — первая группа берёт -j"],
      ["on zamknie → zamknij <button class=\"play\" data-say=\"zamknij\">🔊</button>","закрой — вставка -ij"],
      ["zróbcie · chodźmy <button class=\"play\" data-say=\"zróbcie, chodźmy\">🔊</button>","сделайте · пойдём"]
    ],"star":0},
    "examples":[
      {"ru":"Пиши мне чаще.","en":"<b>Pisz</b> do mnie częściej.","say":"Pisz do mnie częściej."},
      {"ru":"Подожди минутку.","en":"<b>Poczekaj</b> chwilę.","say":"Poczekaj chwilę."},
      {"ru":"Открой окно.","en":"<b>Otwórz</b> okno.","gloss":"otworzy → otwórz","say":"Otwórz okno."},
      {"ru":"Закройте дверь.","en":"<b>Zamknijcie</b> drzwi.","gloss":"«вы» — окончание -cie","say":"Zamknijcie drzwi."},
      {"ru":"Пойдём домой.","en":"<b>Chodźmy</b> do domu.","say":"Chodźmy do domu."}
    ],
    "mistakes":[
      {"wrong":"robi! (в значении «делай!»)","right":"<b>rób!</b>","why":"окончание снимается полностью, а o в закрытом слоге переходит в ó."},
      {"wrong":"czytaj → czyt","right":"<b>czytaj</b>","why":"у первой группы корень кончается гласной, поэтому нужно -j: czytaj, słuchaj, czekaj."}
    ],
    "mnemonic":"👉 on robi → rób. on czyta → czytaj. Вы — -cie, давайте — -my.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> сними окончание с формы on pisze.",
       "q":"«Напиши письмо» —","opts":["Napisze list","Napisz list","Napiszaj list"],"answer":1,
       "explain":"on napisze → <b>napisz</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> это глагол первой группы.",
       "q":"«Подожди» —","opts":["Czek","Czekaj","Czeka"],"answer":1,
       "explain":"on czeka → корень кончается гласной, значит <b>czekaj</b>."},
      {"type":"type","howto":"Напиши повелительную форму «открой» от otworzyć.",
       "q":"on otworzy → ?","accept":["otwórz","otworz"],"placeholder":"otw…"}
    ]
   },
   {
    "eyebrow":"Правило 2 · Вид в приказе",
    "title":"<em>Zrób to!</em> или <em>Rób to!</em>",
    "paras":[
      "Приказ, как и любая другая форма, выбирает вид — и выбирает его ровно по русской логике. <b>Zrób to!</b> — «сделай», один раз, до результата. <b>Rób to codziennie!</b> — «делай», регулярно, как процесс. <b>Kup chleb</b> — купи сегодня. <b>Kupuj chleb w tym sklepie</b> — покупай всегда здесь.",
      "В обычной просьбе почти всегда идёт совершенный вид: <b>Zrób</b>, <b>Napisz</b>, <b>Kup</b>, <b>Przeczytaj</b>, <b>Powiedz</b>. Именно так мы и просим по-русски: «сделай», «напиши», «купи».",
      "А теперь самое красивое место урока. Поставь перед приказом <b>nie</b> — и вид обязан смениться на несовершенный: <b>Nie rób tego!</b> (не «nie zrób»), <b>Nie kupuj tego!</b>, <b>Nie mów tak!</b>, <b>Nie zamykaj okna!</b>",
      "Русский подчиняется тому же закону, просто ты этого не замечал(а): мы говорим «не делай», а не «не сделай»; «не покупай», а не «не купи». Одна и та же скрытая механика в двух языках — редкая удача. Из застывших исключений в польском стоит знать разве что <b>Nie zapomnij!</b> («не забудь!») — их наперечёт."
    ],
    "audio":"Приказ, как и любая другая форма, выбирает вид, и выбирает его ровно по русской логике. Zrób to — сделай, один раз, до результата. Rób to codziennie — делай, регулярно, как процесс. Kup chleb — купи сегодня. Kupuj chleb w tym sklepie — покупай всегда здесь. В обычной просьбе почти всегда идёт совершенный вид: zrób, napisz, kup, przeczytaj, powiedz. Именно так мы и просим по-русски. А теперь самое красивое место урока. Поставь перед приказом nie, и вид обязан смениться на несовершенный: nie rób tego, а не «nie zrób»; nie kupuj tego; nie mów tak; nie zamykaj okna. Русский подчиняется тому же закону, просто это обычно не осознаётся: мы говорим «не делай», а не «не сделай»; «не покупай», а не «не купи». Одна и та же скрытая механика в двух языках. Из застывших исключений в польском стоит знать разве что nie zapomnij, не забудь. Их наперечёт.",
    "table":{"rows":[
      ["Zrób to! <button class=\"play\" data-say=\"Zrób to!\">🔊</button>","Сделай! (один раз, результат)"],
      ["Rób to codziennie! <button class=\"play\" data-say=\"Rób to codziennie\">🔊</button>","Делай это каждый день!"],
      ["Kup chleb. / Kupuj tu chleb.","Купи хлеб. / Покупай хлеб здесь."],
      ["Nie rób tego! <button class=\"play\" data-say=\"Nie rób tego!\">🔊</button>","Не делай этого! — несов. вид"],
      ["Nie kupuj tego! <button class=\"play\" data-say=\"Nie kupuj tego!\">🔊</button>","Не покупай это!"],
      ["Nie martw się! <button class=\"play\" data-say=\"Nie martw się!\">🔊</button>","Не волнуйся!"],
      ["Nie zapomnij!","Не забудь! — застывшее исключение"]
    ],"star":3},
    "examples":[
      {"ru":"Купи хлеб, пожалуйста.","en":"<b>Kup</b> chleb, proszę.","say":"Kup chleb, proszę."},
      {"ru":"Не покупай это — слишком дорого.","en":"<b>Nie kupuj</b> tego — za drogo.","gloss":"после nie — несовершенный вид","say":"Nie kupuj tego, za drogo."},
      {"ru":"Не волнуйся, всё хорошо.","en":"<b>Nie martw się</b>, wszystko dobrze.","say":"Nie martw się, wszystko dobrze."},
      {"ru":"Не бойся, это не больно.","en":"<b>Nie bój się</b>, to nie boli.","say":"Nie bój się, to nie boli."},
      {"ru":"Прочитай это письмо.","en":"<b>Przeczytaj</b> ten list.","say":"Przeczytaj ten list."}
    ],
    "mistakes":[
      {"wrong":"Nie zrób tego!","right":"<b>Nie rób</b> tego!","why":"после nie приказ переходит в несовершенный вид. Ровно как русское «не делай», а не «не сделай»."},
      {"wrong":"Nie kup tego!","right":"<b>Nie kupuj</b> tego!","why":"тот же закон: запрет требует формы kupuj, а не kup."}
    ],
    "mnemonic":"🚫 Приказ — совершенный (zrób). Запрет — несовершенный (nie rób). Как «сделай» и «не делай».",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> перед тобой запрет — значит вид меняется.",
       "q":"«Не делай этого!» —","opts":["Nie zrób tego!","Nie rób tego!","Nie robisz tego!"],"answer":1,
       "explain":"После nie — несовершенный вид: <b>Nie rób tego!</b>"},
      {"type":"choice","howto":"<b>Что делать:</b> это просьба сделать один раз.",
       "q":"«Купи хлеб» —","opts":["Kupuj chleb","Kup chleb","Kupisz chleb"],"answer":1,
       "explain":"Один раз, до результата — совершенный вид: <b>Kup chleb</b>. Kupuj значило бы «покупай всегда»."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Не волнуйся, всё хорошо»</b>","answer":"Nie martw się wszystko dobrze"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Восемь на каждый день",
    "title":"<em>bądź, miej, jedz, pij, weź, daj, powiedz, chodź</em>",
    "paras":[
      "Несколько самых нужных форм проще выучить сразу, чем выводить: <b>bądź</b> (будь, от być), <b>miej</b> (имей, от mieć), <b>jedz</b> (ешь), <b>pij</b> (пей), <b>weź</b> (возьми, от wziąć), <b>daj</b> (дай), <b>powiedz</b> (скажи), <b>chodź</b> (иди сюда, пойдём).",
      "Половина из них звучит почти по-русски: <b>daj</b> — дай, <b>pij</b> — пей, <b>jedz</b> — ешь. Совпадение не случайное, языки родственные.",
      "Слово <b>chodź</b> стоит отдельного взгляда: это не «ходи», а приглашение — «иди сюда», «пойдём». <b>Chodź tutaj!</b> И вчерашняя пара движения тут же рядом: <b>chodźmy</b> — «пойдём» о нас двоих.",
      "Про произношение: конечные звонкие оглушаются, как ты помнишь из курса чтения. <b>weź</b> звучит [вэсь], <b>idź</b> — [ич], <b>bądź</b> — [бонць], <b>rób</b> — [руп]."
    ],
    "audio":"Несколько самых нужных форм проще выучить сразу, чем выводить: bądź — будь, от być; miej — имей, от mieć; jedz — ешь; pij — пей; weź — возьми, от wziąć; daj — дай; powiedz — скажи; chodź — иди сюда, пойдём. Половина из них звучит почти по-русски: daj — дай, pij — пей, jedz — ешь. Совпадение не случайное, языки родственные. Слово chodź стоит отдельного взгляда: это не «ходи», а приглашение — иди сюда, пойдём. Chodź tutaj. И вчерашняя пара движения тут же рядом: chodźmy, пойдём о нас двоих. Про произношение: конечные звонкие оглушаются, как ты помнишь из курса чтения.",
    "table":{"rows":[
      ["bądź <button class=\"play\" data-say=\"bądź\">🔊</button>","будь [бонць]"],
      ["miej <button class=\"play\" data-say=\"miej\">🔊</button>","имей"],
      ["jedz / pij <button class=\"play\" data-say=\"jedz, pij\">🔊</button>","ешь / пей"],
      ["weź <button class=\"play\" data-say=\"weź\">🔊</button>","возьми [вэсь]"],
      ["daj <button class=\"play\" data-say=\"daj\">🔊</button>","дай"],
      ["powiedz <button class=\"play\" data-say=\"powiedz\">🔊</button>","скажи"],
      ["chodź / chodźmy <button class=\"play\" data-say=\"chodź, chodźmy\">🔊</button>","иди сюда / пойдём"]
    ],"star":4},
    "examples":[
      {"ru":"Возьми лекарство и отдыхай.","en":"<b>Weź</b> lekarstwo i odpoczywaj.","say":"Weź lekarstwo i odpoczywaj."},
      {"ru":"Скажи мне правду.","en":"<b>Powiedz</b> mi prawdę.","say":"Powiedz mi prawdę."},
      {"ru":"Иди сюда, покажу.","en":"<b>Chodź</b> tutaj, pokażę.","say":"Chodź tutaj, pokażę."},
      {"ru":"Пей больше воды.","en":"<b>Pij</b> więcej wody.","say":"Pij więcej wody."},
      {"ru":"Будь спокоен, я подожду.","en":"<b>Bądź</b> spokojny, poczekam.","say":"Bądź spokojny, poczekam."}
    ],
    "mistakes":[
      {"wrong":"Weźmij to!","right":"<b>Weź</b> to!","why":"у wziąć короткая форма без -mij: weź. Полная основа weźmie остаётся только в обычном настоящем."},
      {"wrong":"Jeść zupę!","right":"<b>Jedz</b> zupę!","why":"в живой речи приказ идёт формой jedz. Инфинитив в этой роли встречается разве что на табличках-запретах вроде Nie palić."}
    ],
    "mnemonic":"✋ daj · pij · jedz — почти по-русски. weź · powiedz · bądź — выучи как есть.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> одна из восьми форм на каждый день.",
       "q":"«Возьми лекарство» —","opts":["Wziąć lekarstwo","Weź lekarstwo","Weźmie lekarstwo"],"answer":1,
       "explain":"Повелительная форма от wziąć — <b>weź</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> это приглашение подойти.",
       "q":"«Иди сюда!» —","opts":["Chodzisz tutaj!","Chodź tutaj!","Chodzić tutaj!"],"answer":1,
       "explain":"<b>Chodź tutaj!</b> — приглашение. Chodzisz — обычное «ходишь»."},
      {"type":"type","howto":"Напиши «Скажи мне правду». Диакритику можно не ставить.",
       "q":"Скажи мне правду.","accept":["powiedz mi prawdę","powiedz mi prawde"],"placeholder":"Powiedz…"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Вежливо",
    "title":"<em>Niech pan usiądzie</em>",
    "paras":[
      "Незнакомому человеку, врачу или клиенту так, как выше, не говорят. Для вежливой просьбы у польского есть отдельная рамка: <b>niech</b> + pan / pani / państwo + обычная форма настоящего времени третьего лица.",
      "<b>Niech pan usiądzie</b> — «садитесь». <b>Niech pani poczeka chwilę</b> — «подождите минутку». <b>Niech państwo wejdą</b> — «входите» (обоим или группе). Слово niech не меняется никогда, меняется только глагол — и он остаётся в той форме, которую ты уже знаешь: pan usiądzie, pani poczeka.",
      "Русский такой рамки не имеет и переводит её обычным «сядьте, подождите». Зато у польского есть и второй, знакомый тебе с A1 способ: <b>proszę</b> + инфинитив — <b>Proszę usiąść</b>, <b>Proszę poczekać</b>, <b>Proszę się nie martwić</b>. Он проще и звучит так же вежливо.",
      "Итого три этажа вежливости: <b>Usiądź</b> (другу), <b>Proszę usiąść</b> (нейтрально-вежливо), <b>Niech pan usiądzie</b> (официально, с обращением к человеку)."
    ],
    "audio":"Незнакомому человеку, врачу или клиенту так, как выше, не говорят. Для вежливой просьбы у польского есть отдельная рамка: niech плюс pan, pani или państwo, плюс обычная форма настоящего времени третьего лица. Niech pan usiądzie — садитесь. Niech pani poczeka chwilę — подождите минутку. Niech państwo wejdą — входите. Слово niech не меняется никогда, меняется только глагол, и он остаётся в той форме, которую ты уже знаешь. Русский такой рамки не имеет и переводит её обычным «сядьте, подождите». Зато у польского есть и второй, знакомый с A1 способ: proszę плюс инфинитив — proszę usiąść, proszę poczekać, proszę się nie martwić. Он проще и звучит так же вежливо. Итого три этажа вежливости: usiądź другу, proszę usiąść нейтрально-вежливо, niech pan usiądzie официально.",
    "table":{"rows":[
      ["Niech pan usiądzie. <button class=\"play\" data-say=\"Niech pan usiądzie\">🔊</button>","Садитесь (мужчине)."],
      ["Niech pani poczeka. <button class=\"play\" data-say=\"Niech pani poczeka\">🔊</button>","Подождите (женщине)."],
      ["Niech państwo wejdą.","Входите (нескольким людям)."],
      ["Proszę usiąść. <button class=\"play\" data-say=\"Proszę usiąść\">🔊</button>","Садитесь, пожалуйста."],
      ["Proszę się nie martwić.","Не волнуйтесь, пожалуйста."],
      ["Usiądź. / Poczekaj.","Сядь. / Подожди. (другу)"]
    ],"star":0},
    "examples":[
      {"ru":"Садитесь, пожалуйста.","en":"<b>Niech pan usiądzie</b>, proszę.","say":"Niech pan usiądzie, proszę."},
      {"ru":"Подождите минутку.","en":"<b>Niech pani poczeka</b> chwilę.","say":"Niech pani poczeka chwilę."},
      {"ru":"Говорите помедленнее, пожалуйста.","en":"<b>Proszę mówić</b> wolniej.","say":"Proszę mówić wolniej."},
      {"ru":"Не волнуйтесь.","en":"<b>Proszę się nie martwić</b>.","say":"Proszę się nie martwić."}
    ],
    "mistakes":[
      {"wrong":"Niech pan usiądź.","right":"Niech pan <b>usiądzie</b>.","why":"после niech идёт обычная форма третьего лица, а не повелительная."},
      {"wrong":"Proszę usiądź.","right":"<b>Proszę usiąść</b>.","why":"после proszę — инфинитив: proszę usiąść, proszę poczekać."}
    ],
    "mnemonic":"🎩 Другу — Usiądź. Вежливо — Proszę usiąść. Официально — Niech pan usiądzie.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, какая форма идёт после niech.",
       "q":"Вежливо мужчине: «садитесь» —","opts":["Niech pan usiądź","Niech pan usiądzie","Niech pan siadać"],"answer":1,
       "explain":"После niech — обычное третье лицо: <b>Niech pan usiądzie</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни формулу с proszę из A1.",
       "q":"«Подождите, пожалуйста» —","opts":["Proszę poczekaj","Proszę poczekać","Proszę poczeka"],"answer":1,
       "explain":"После proszę — инфинитив: <b>Proszę poczekać</b>."},
      {"type":"speak","target":"Niech pani poczeka chwilę.","sub":"подождите минутку","want":"niech pani poczeka"}
    ]
   }
 ],
 "dialogue":{
   "intro":"Марек впервые готовит ужин, Анна диктует рецепт по телефону. Приказы идут один за другим. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Mam przepis, ale nic nie rozumiem. Pomóż mi.","ru":"У меня есть рецепт, но я ничего не понимаю. Помоги мне.",
      "words":[["przepis","рецепт блюда"],["Pomóż","помоги"]]},
     {"who":"A","name":"Anna","side":"left","en":"Spokojnie. Weź garnek i nalej wody.","ru":"Спокойно. Возьми кастрюлю и налей воды.",
      "words":[["Weź","возьми"],["garnek","кастрюля"],["nalej","налей"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dobrze. A potem?","ru":"Хорошо. А потом?",
      "words":[["potem","потом"]]},
     {"who":"A","name":"Anna","side":"left","en":"Pokrój cebulę i dodaj do garnka.","ru":"Нарежь лук и добавь в кастрюлю.",
      "words":[["Pokrój","нарежь"],["cebulę","лук"],["dodaj","добавь"]]},
     {"who":"M","name":"Marek","side":"right","en":"Ile soli?","ru":"Сколько соли?",
      "words":[["soli","соли"]]},
     {"who":"A","name":"Anna","side":"left","en":"Trochę. Nie sól za dużo!","ru":"Немного. Не соли слишком много!",
      "words":[["Nie sól","не соли"],["za dużo","слишком много"]]},
     {"who":"M","name":"Marek","side":"right","en":"Już się dymi. Co robić?","ru":"Уже дымит. Что делать?",
      "words":[["dymi","дымит"]]},
     {"who":"A","name":"Anna","side":"left","en":"Nie panikuj. Wyłącz gaz i wymieszaj wszystko.","ru":"Не паникуй. Выключи газ и всё перемешай.",
      "words":[["Nie panikuj","не паникуй"],["Wyłącz","выключи"],["wymieszaj","перемешай"]]},
     {"who":"M","name":"Marek","side":"right","en":"Gotowe. Wygląda dziwnie, ale pachnie dobrze.","ru":"Готово. Выглядит странно, но пахнет хорошо.",
      "words":[["Gotowe","готово"],["pachnie","пахнет"]]},
     {"who":"A","name":"Anna","side":"left","en":"Nie martw się. Zjedz i powiedz mi, jak było.","ru":"Не волнуйся. Съешь и скажи мне, как получилось.",
      "words":[["Nie martw się","не волнуйся"],["Zjedz","съешь"],["powiedz","скажи"]]}
   ]
 },
 "vocab":{
   "intro":"Слова дня — короткие приказы, которые слышишь на каждом шагу.",
   "items":[
     {"en":"zrób / rób","ru":"сделай / делай","ex":"Zrób to dzisiaj."},
     {"en":"napisz / pisz","ru":"напиши / пиши","ex":"Napisz do mnie."},
     {"en":"kup / kupuj","ru":"купи / покупай","ex":"Kup chleb, proszę."},
     {"en":"idź / chodź","ru":"иди / иди сюда","ex":"Chodź tutaj!"},
     {"en":"weź","ru":"возьми","ex":"Weź lekarstwo."},
     {"en":"daj / powiedz","ru":"дай / скажи","ex":"Powiedz mi prawdę."},
     {"en":"poczekaj","ru":"подожди","ex":"Poczekaj chwilę."},
     {"en":"nie rób tego","ru":"не делай этого","ex":"Nie rób tego!"},
     {"en":"nie martw się","ru":"не волнуйся","ex":"Nie martw się, wszystko dobrze."},
     {"en":"pokrój / dodaj / wymieszaj","ru":"нарежь / добавь / перемешай","ex":"Pokrój cebulę i dodaj sól."},
     {"en":"niech pan / pani…","ru":"вежливое «сделайте»","ex":"Niech pan usiądzie."},
     {"en":"proszę czekać","ru":"пожалуйста, подождите (proszę + инфинитив)","ex":"Proszę poczekać."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую форму к переводу. Смотри на вид: приказ или запрет.",
   "pairs":[["Zrób to!","Сделай это!"],["Nie rób tego!","Не делай этого!"],["Weź","Возьми"],["Niech pan usiądzie","Садитесь (вежливо)"]]
 },
 "reading":{
   "intro":"Прочитай и послушай рецепт — семь коротких приказов подряд.",
   "title":"Przepis na zupę",
   "sentences":["Weź duży garnek i nalej wody.","Pokrój marchewkę i cebulę.","Dodaj warzywa do garnka.","Gotuj wszystko dwadzieścia minut.","Posól, ale nie sól za dużo.","Nie zamykaj garnka do końca.","Na koniec wymieszaj i spróbuj.","Jeśli jest za mało soli, dodaj jeszcze trochę.","Nie martw się, jeśli zupa nie wygląda jak na zdjęciu.","Zjedz i powiedz, czy było dobre."],
   "translation":"Возьми большую кастрюлю и налей воды. Нарежь морковь и лук. Добавь овощи в кастрюлю. Вари всё двадцать минут. Посоли, но не соли слишком много. Не закрывай кастрюлю до конца. В конце перемешай и попробуй. Если соли мало, добавь ещё немного. Не волнуйся, если суп выглядит не как на фотографии. Съешь и скажи, было ли вкусно."
 },
 "quiz":{
   "intro":"Пять вопросов — и повелительное наклонение в руках.",
   "items":[
     {"q":"1. «Напиши письмо» —","opts":["Napisze list","Napisz list","Napiszaj list"],"answer":1,
      "explain":"on napisze → снимаем окончание: <b>napisz</b>."},
     {"q":"2. «Подожди» —","opts":["Czek","Czekaj","Czeka"],"answer":1,
      "explain":"Первая группа добавляет -j: <b>czekaj</b>."},
     {"q":"3. «Не делай этого!» —","opts":["Nie zrób tego!","Nie rób tego!","Nie robisz tego!"],"answer":1,
      "explain":"Запрет требует несовершенного вида: <b>Nie rób tego!</b>"},
     {"q":"4. «Возьми лекарство» —","opts":["Wziąć lekarstwo","Weź lekarstwo","Weźmie lekarstwo"],"answer":1,
      "explain":"Повелительная форма от wziąć — <b>weź</b>."},
     {"q":"5. Вежливо мужчине: «садитесь» —","opts":["Niech pan usiądź","Niech pan usiądzie","Proszę usiądź"],"answer":1,
      "explain":"После niech — форма третьего лица: <b>Niech pan usiądzie</b>."}
   ]
 },
 "essay":{
   "intro":"Твоя очередь командовать — по-доброму.",
   "prompt":"Напиши 4–5 коротких советов другу, который заболел или впервые готовит. Хотя бы один совет — с запретом (nie + несовершенный вид).",
   "hint":"Схема: Weź… Kup… Pij… Nie rób… Nie martw się. Проверь: после nie вид меняется. 🍲",
   "example":"Zostań w domu i odpoczywaj. Pij dużo herbaty. Weź lekarstwo dwa razy dziennie. Nie chodź do pracy i nie martw się — za trzy dni będzie lepiej."
 }
},
"20": {
 "day":20,"week":"03",
 "themeRu":"Двое мужчин, две женщины",
 "themeEn":"Rodzaj męskoosobowy",
 "intro":"Вот тема, где родная интуиция впервые за курс молчит. В русском «они были» — одно на всех. В польском их два: <b>oni byli</b>, если в группе есть мужчина, и <b>one były</b>, если нет. Скажу честно: подсказать тут нечем, зато система маленькая и закрытая — сегодня разложим её по полочкам и потренируем узнавать на глаз.",
 "introAudio":"Вот тема, где родная интуиция впервые за курс молчит. В русском «они были» — одно на всех. В польском их два: oni byli, если в группе есть мужчина, и one były, если нет. Скажу честно: подсказать тут нечем, зато система маленькая и закрытая. Сегодня разложим её по полочкам и потренируем узнавать на глаз.",
 "goals":[
   "Понять, что решает выбор: есть ли в группе мужчина",
   "Различать <b>oni / one</b>, <b>ci / te</b>, <b>byli / były</b>",
   "Образовать мужско-личное множественное: <b>studenci, Polacy, panowie, bracia</b>",
   "Посчитать людей и вещи: <b>dwaj studenci · dwie studentki · dwa koty</b>"
 ],
 "learned":[
   "Понял(а), что решает выбор: есть ли в группе мужчина",
   "Различил(а) oni / one, ci / te, byli / były",
   "Образовал(а) мужско-личное множественное: studenci, Polacy, panowie, bracia",
   "Посчитал(а) людей и вещи: dwaj studenci · dwie studentki · dwa koty"
 ],
 "review":{
   "intro":"Вчерашние приказы — сначала. Заодно вспомним пару byli / były из дня 2: сегодня она вырастет в целую систему.",
   "introAudio":"Вчерашние приказы — сначала. Заодно вспомним пару byli и były из дня 2: сегодня она вырастет в целую систему.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> перед тобой запрет.",
      "q":"«Не покупай это!» —","opts":["Nie kup tego!","Nie kupuj tego!","Nie kupisz tego!"],"answer":1,
      "explain":"После nie приказ идёт несовершенным видом: <b>Nie kupuj tego!</b>"},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни вежливую рамку.",
      "q":"Вежливо женщине: «подождите» —","opts":["Niech pani poczekaj","Niech pani poczeka","Proszę poczekaj"],"answer":1,
      "explain":"После niech — форма третьего лица: <b>Niech pani poczeka</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 2 — в группе Anna и Marek.",
      "q":"«Анна и Марек были в Кракове» —","opts":["Anna i Marek były w Krakowie","Anna i Marek byli w Krakowie","Anna i Marek był w Krakowie"],"answer":1,
      "explain":"В группе есть мужчина, значит <b>byli</b>. Сегодня разберём почему."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Возьми лекарство и отдыхай»</b>","answer":"Weź lekarstwo i odpoczywaj"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Два множественных рода",
    "title":"<em>oni</em> и <em>one</em>",
    "paras":[
      "В единственном числе польский, как и русский, различает три рода. А во множественном он делит мир надвое — и делит не так, как мы привыкли. Есть <b>rodzaj męskoosobowy</b>, «мужско-личный», и есть всё остальное.",
      "Правило выбора одно, и оно короткое: если в группе есть хотя бы один мужчина (человек!), берётся мужско-личная форма. Во всех остальных случаях — вторая: женщины, дети, животные, предметы.",
      "Отсюда пара местоимений: <b>oni</b> — мужчины или смешанная компания; <b>one</b> — женщины, дети, кошки, столы. Anna i Marek → <b>oni</b>. Anna i Ewa → <b>one</b>. Koty → <b>one</b>.",
      "И сразу честно: русскому тут не на что опереться — у нас «они» одно на всех. Хорошая новость в том, что разница видна только во множественном числе и только в четырёх местах: местоимение, слово «эти», прилагательное и прошедшее время. Настоящее время не меняется вообще: oni mówią и one mówią — одинаково."
    ],
    "audio":"В единственном числе польский, как и русский, различает три рода. А во множественном он делит мир надвое, и делит не так, как мы привыкли. Есть rodzaj męskoosobowy, мужско-личный, и есть всё остальное. Правило выбора одно, и оно короткое: если в группе есть хотя бы один мужчина, человек, берётся мужско-личная форма. Во всех остальных случаях вторая: женщины, дети, животные, предметы. Отсюда пара местоимений: oni — мужчины или смешанная компания; one — женщины, дети, кошки, столы. Anna i Marek — oni. Anna i Ewa — one. Koty — one. И сразу честно: русскому тут не на что опереться, у нас «они» одно на всех. Хорошая новость в том, что разница видна только во множественном числе и только в четырёх местах: местоимение, слово «эти», прилагательное и прошедшее время. Настоящее время не меняется вообще: oni mówią и one mówią звучат одинаково.",
    "table":{"rows":[
      ["Anna i Marek → oni <button class=\"play\" data-say=\"Anna i Marek, oni\">🔊</button>","есть мужчина → мужско-личный род"],
      ["Anna i Ewa → one <button class=\"play\" data-say=\"Anna i Ewa, one\">🔊</button>","только женщины → второй род"],
      ["studenci → oni · studentki → one","студенты · студентки"],
      ["dzieci → one","дети — второй род!"],
      ["koty, domy, książki → one","животные и вещи — второй род"],
      ["oni mówią = one mówią","настоящее время не различает"]
    ],"star":3},
    "examples":[
      {"ru":"Анна и Марек — они дома.","en":"Anna i Marek — <b>oni</b> są w domu.","say":"Anna i Marek, oni są w domu."},
      {"ru":"Анна и Эва — они на работе.","en":"Anna i Ewa — <b>one</b> są w pracy.","say":"Anna i Ewa, one są w pracy."},
      {"ru":"Дети дома. Они спят.","en":"Dzieci są w domu. <b>One</b> śpią.","gloss":"dzieci — второй род","say":"Dzieci są w domu. One śpią."},
      {"ru":"Где коты? — Они там.","en":"Gdzie są koty? — <b>One</b> są tam.","say":"Gdzie są koty? One są tam."}
    ],
    "mistakes":[
      {"wrong":"Anna i Ewa — oni","right":"Anna i Ewa — <b>one</b>","why":"мужчин в группе нет, значит one."},
      {"wrong":"Dzieci — oni","right":"Dzieci — <b>one</b>","why":"dzieci относится ко второму роду, даже если это мальчики. Слово dziecko среднего рода, и множественное идёт за ним."}
    ],
    "mnemonic":"👥 Есть мужчина — oni. Нет мужчины — one. Дети, коты и вещи — всегда one.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто в группе.",
       "q":"Anna, Ewa i Marek — это…","opts":["one","oni","ono"],"answer":1,
       "explain":"Марек в группе есть, значит <b>oni</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто в группе.",
       "q":"Anna, Ewa i Kasia — это…","opts":["oni","one","ci"],"answer":1,
       "explain":"Только женщины — <b>one</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни про особый случай.",
       "q":"Dzieci — это…","opts":["oni","one","ci"],"answer":1,
       "explain":"Дети относятся ко второму роду: <b>one</b>."}
    ]
   },
   {
    "eyebrow":"Правило 2 · Мужчины во множественном",
    "title":"<em>student → studenci</em>, <em>pan → panowie</em>",
    "paras":[
      "В дне 6 уровня A1 мы отложили эту тему до A2 — и вот она. Слова, обозначающие мужчин, во множественном числе получают собственные окончания: <b>-i</b>, <b>-y</b>, <b>-e</b> или <b>-owie</b>, часто с изменением последнего согласного.",
      "Самые нужные: student → <b>studenci</b>, Polak → <b>Polacy</b>, chłopiec → <b>chłopcy</b>, mężczyzna → <b>mężczyźni</b>, kolega → <b>koledzy</b>, lekarz → <b>lekarze</b>, nauczyciel → <b>nauczyciele</b>.",
      "Отдельная группа — на <b>-owie</b>, и в ней самые семейные слова: pan → <b>panowie</b>, syn → <b>synowie</b>, ojciec → <b>ojcowie</b>. А brat даёт совсем особую форму: <b>bracia</b> («братья»).",
      "Сравни с женским рядом, там всё спокойно: studentka → studentk<b>i</b>, Polka → Polk<b>i</b>, pani → pan<b>ie</b>, lekarka → lekark<b>i</b>. И с вещами, которые ты уже умеешь: kot → koty, dom → domy. Слово <b>ludzie</b> («люди») тоже мужско-личное: ci ludzie byli."
    ],
    "audio":"В дне шестом уровня A1 мы отложили эту тему до A2, и вот она. Слова, обозначающие мужчин, во множественном числе получают собственные окончания: -i, -y, -e или -owie, часто с изменением последнего согласного. Самые нужные: student — studenci, Polak — Polacy, chłopiec — chłopcy, mężczyzna — mężczyźni, kolega — koledzy, lekarz — lekarze, nauczyciel — nauczyciele. Отдельная группа на -owie, и в ней самые семейные слова: pan — panowie, syn — synowie, ojciec — ojcowie. А brat даёт совсем особую форму: bracia, братья. Сравни с женским рядом, там всё спокойно: studentka — studentki, Polka — Polki, pani — panie, lekarka — lekarki. И с вещами, которые ты уже умеешь: kot — koty, dom — domy. Слово ludzie, люди, тоже мужско-личное: ci ludzie byli.",
    "table":{"rows":[
      ["student → studenci <button class=\"play\" data-say=\"student, studenci\">🔊</button>","студент → студенты [студэ́нчи]"],
      ["Polak → Polacy <button class=\"play\" data-say=\"Polak, Polacy\">🔊</button>","поляк → поляки [поля́цы]"],
      ["chłopiec → chłopcy <button class=\"play\" data-say=\"chłopiec, chłopcy\">🔊</button>","мальчик → мальчики"],
      ["pan → panowie <button class=\"play\" data-say=\"pan, panowie\">🔊</button>","господин → господа"],
      ["brat → bracia <button class=\"play\" data-say=\"brat, bracia\">🔊</button>","брат → братья"],
      ["mężczyzna → mężczyźni <button class=\"play\" data-say=\"mężczyzna, mężczyźni\">🔊</button>","мужчина → мужчины"],
      ["studentka → studentki · pani → panie","женский ряд — без сюрпризов"]
    ],"star":4},
    "examples":[
      {"ru":"Это студенты из Польши.","en":"To są <b>studenci</b> z Polski.","say":"To są studenci z Polski."},
      {"ru":"Это студентки из Польши.","en":"To są <b>studentki</b> z Polski.","say":"To są studentki z Polski."},
      {"ru":"У меня два брата.","en":"Mam dwóch <b>braci</b>.","gloss":"после «два» о мужчинах — форма braci","say":"Mam dwóch braci."},
      {"ru":"Господа уже здесь.","en":"<b>Panowie</b> już są.","say":"Panowie już są."},
      {"ru":"Эти люди из Гданьска.","en":"Ci <b>ludzie</b> są z Gdańska.","say":"Ci ludzie są z Gdańska."}
    ],
    "mistakes":[
      {"wrong":"studenty","right":"<b>studenci</b>","why":"окончание -y берут вещи (domy, koty). О мужчинах — studenci."},
      {"wrong":"brati","right":"<b>bracia</b>","why":"у brat особая форма множественного числа, её просто запоминают."}
    ],
    "mnemonic":"👨‍🎓 studenci · Polacy · chłopcy · panowie · bracia. Женщины и вещи идут прежним путём.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> речь о мужчинах.",
       "q":"Множественное от <b>student</b> (о мужчинах) —","opts":["studenty","studenci","studentki"],"answer":1,
       "explain":"Мужчины — <b>studenci</b>. Studentki — это студентки."},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни группу на -owie.",
       "q":"Множественное от <b>pan</b> —","opts":["pani","pany","panowie"],"answer":2,
       "explain":"<b>Panowie</b> — господа. Pani — это «госпожа» в единственном числе."},
      {"type":"type","howto":"Напиши множественное число слова brat.",
       "q":"brat → ?","accept":["bracia"],"placeholder":"brac…"}
    ]
   },
   {
    "eyebrow":"Правило 3 · Всё согласуется",
    "title":"<em>ci dobrzy studenci byli</em>",
    "paras":[
      "Выбранный род тянет за собой всё, что стоит рядом. Указательное слово: <b>ci</b> (мужско-личное) против <b>te</b>. Ci studenci, ci panowie, ci ludzie — но te studentki, te koty, te domy.",
      "Прилагательные меняют окончание и часто последний согласный: dobry → <b>dobrzy</b>, miły → <b>mili</b>, młody → <b>młodzi</b>, stary → <b>starzy</b>, zmęczony → <b>zmęczeni</b>, chory → <b>chorzy</b>. Второй ряд проще: dobre, miłe, młode, stare, zmęczone.",
      "Прошедшее время — то самое место, с которого мы начали в дне 2: <b>byli / były</b>, <b>robili / robiły</b>, <b>mieli / miały</b>, <b>poszli / poszły</b>. Настоящее и будущее время эту разницу не показывают вообще.",
      "И вопрос, вокруг которого построен целый урок в польских учебниках: <b>Jacy oni są?</b> («какие они?») против <b>Jakie one są?</b>. Туда же — <b>wszyscy</b> / <b>wszystkie</b> («все») и притяжательные <b>moi bracia</b> / <b>moje siostry</b>, <b>nasi koledzy</b> / <b>nasze koleżanki</b>."
    ],
    "audio":"Выбранный род тянет за собой всё, что стоит рядом. Указательное слово: ci, мужско-личное, против te. Ci studenci, ci panowie, ci ludzie — но te studentki, te koty, te domy. Прилагательные меняют окончание и часто последний согласный: dobry — dobrzy, miły — mili, młody — młodzi, stary — starzy, zmęczony — zmęczeni, chory — chorzy. Второй ряд проще: dobre, miłe, młode, stare, zmęczone. Прошедшее время — то самое место, с которого мы начали в дне 2: byli и były, robili и robiły, mieli и miały, poszli i poszły. Настоящее и будущее время эту разницу не показывают вообще. И вопрос, вокруг которого построен целый урок в польских учебниках: jacy oni są, какие они, против jakie one są. Туда же wszyscy и wszystkie, все, и притяжательные moi bracia, moje siostry, nasi koledzy, nasze koleżanki.",
    "table":{"rows":[
      ["ci studenci / te studentki <button class=\"play\" data-say=\"ci studenci, te studentki\">🔊</button>","эти студенты / эти студентки [чи]"],
      ["dobrzy / dobre <button class=\"play\" data-say=\"dobrzy, dobre\">🔊</button>","хорошие [дóбжы]"],
      ["mili / miłe · młodzi / młode","приятные · молодые"],
      ["byli / były <button class=\"play\" data-say=\"byli, były\">🔊</button>","были"],
      ["robili / robiły · mieli / miały","делали · имели"],
      ["Jacy oni są? / Jakie one są? <button class=\"play\" data-say=\"Jacy oni są? Jakie one są?\">🔊</button>","Какие они?"],
      ["wszyscy / wszystkie","все"]
    ],"star":5},
    "examples":[
      {"ru":"Эти студенты были очень приятные.","en":"<b>Ci studenci byli</b> bardzo <b>mili</b>.","say":"Ci studenci byli bardzo mili."},
      {"ru":"Эти студентки были очень приятные.","en":"<b>Te studentki były</b> bardzo <b>miłe</b>.","say":"Te studentki były bardzo miłe."},
      {"ru":"Какие они? — Молодые и весёлые.","en":"<b>Jacy oni są?</b> — Młodzi i weseli.","say":"Jacy oni są? Młodzi i weseli."},
      {"ru":"Все были уставшие.","en":"<b>Wszyscy byli zmęczeni</b>.","gloss":"о смешанной компании","say":"Wszyscy byli zmęczeni."},
      {"ru":"Мои братья живут в Кракове.","en":"<b>Moi bracia</b> mieszkają w Krakowie.","say":"Moi bracia mieszkają w Krakowie."}
    ],
    "mistakes":[
      {"wrong":"Te studenci byli mili.","right":"<b>Ci</b> studenci byli mili.","why":"о мужчинах — ci, а не te. Слово «эти» тоже выбирает род."},
      {"wrong":"Anna i Marek były w domu.","right":"Anna i Marek <b>byli</b> w domu.","why":"в группе есть мужчина, значит byli."}
    ],
    "mnemonic":"🔗 ci · dobrzy · byli — о мужчинах. te · dobre · były — обо всех остальных.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на слово studenci.",
       "q":"«Эти студенты» —","opts":["te studenci","ci studenci","ci studentki"],"answer":1,
       "explain":"Мужско-личное слово требует <b>ci</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> в группе только женщины.",
       "q":"«Анна и Эва были дома» —","opts":["Anna i Ewa byli w domu","Anna i Ewa były w domu","Anna i Ewa był w domu"],"answer":1,
       "explain":"Мужчин нет — значит <b>były</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> вопрос о мужской компании.",
       "q":"«Какие они?» (о братьях) —","opts":["Jakie oni są?","Jacy oni są?","Jaki oni są?"],"answer":1,
       "explain":"Мужско-личная форма вопроса — <b>Jacy</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Эти студенты были очень приятные»</b>","answer":"Ci studenci byli bardzo mili"}
    ]
   },
   {
    "eyebrow":"Правило 4 · Считаем людей",
    "title":"<em>dwaj studenci · dwie studentki · dwa koty</em>",
    "paras":[
      "Числительные тоже делятся. Ты уже знаешь пару <b>dwa</b> / <b>dwie</b>: dwa koty, dwie książki. Теперь к ним прибавляется третья форма — для мужчин: <b>dwaj</b>.",
      "Полный набор: <b>dwaj studenci</b> (два студента), <b>dwie studentki</b> (две студентки), <b>dwa koty</b> (два кота). Дальше по тому же образцу: <b>trzej panowie</b> / trzy panie / trzy domy, <b>czterej chłopcy</b> / cztery dziewczyny.",
      "Формы <b>dwaj, trzej, czterej</b> — это ровно три слова, других в этом ряду нет. Выучить их проще, чем кажется: они бывают только с мужчинами и только в именительном падеже.",
      "И честное дополнение: в живой речи ты часто услышишь другую конструкцию — <b>dwóch studentów</b>, <b>trzech panów</b>. Она тоже совершенно правильная и даже более частая. Сегодня достаточно её узнавать; говорить спокойно можно через dwaj studenci — это не ошибка."
    ],
    "audio":"Числительные тоже делятся. Ты уже знаешь пару dwa и dwie: dwa koty, dwie książki. Теперь к ним прибавляется третья форма, для мужчин: dwaj. Полный набор: dwaj studenci — два студента, dwie studentki — две студентки, dwa koty — два кота. Дальше по тому же образцу: trzej panowie, trzy panie, trzy domy; czterej chłopcy, cztery dziewczyny. Формы dwaj, trzej, czterej — это ровно три слова, других в этом ряду нет. Они бывают только с мужчинами и только в именительном падеже. И честное дополнение: в живой речи ты часто услышишь другую конструкцию — dwóch studentów, trzech panów. Она тоже совершенно правильная и даже более частая. Сегодня достаточно её узнавать; говорить спокойно можно через dwaj studenci, это не ошибка.",
    "table":{"rows":[
      ["dwaj studenci <button class=\"play\" data-say=\"dwaj studenci\">🔊</button>","два студента (мужчины)"],
      ["dwie studentki <button class=\"play\" data-say=\"dwie studentki\">🔊</button>","две студентки"],
      ["dwa koty <button class=\"play\" data-say=\"dwa koty\">🔊</button>","два кота"],
      ["trzej panowie <button class=\"play\" data-say=\"trzej panowie\">🔊</button>","трое господ"],
      ["czterej chłopcy","четверо мальчиков"],
      ["dwóch studentów","та же мысль другой формой — узнавай"]
    ],"star":0},
    "examples":[
      {"ru":"Два студента ждут у двери.","en":"<b>Dwaj studenci</b> czekają przy drzwiach.","say":"Dwaj studenci czekają przy drzwiach."},
      {"ru":"Две студентки ждут у двери.","en":"<b>Dwie studentki</b> czekają przy drzwiach.","say":"Dwie studentki czekają przy drzwiach."},
      {"ru":"У меня два кота.","en":"Mam <b>dwa koty</b>.","say":"Mam dwa koty."},
      {"ru":"Трое господ уже здесь.","en":"<b>Trzej panowie</b> już są.","say":"Trzej panowie już są."}
    ],
    "mistakes":[
      {"wrong":"dwa studenci","right":"<b>dwaj</b> studenci","why":"о мужчинах — dwaj. Форма dwa остаётся вещам и животным: dwa koty, dwa domy."},
      {"wrong":"dwaj studentki","right":"<b>dwie</b> studentki","why":"dwaj бывает только с мужчинами; женщинам — dwie."}
    ],
    "mnemonic":"2️⃣ dwaj (мужчины) · dwie (женщины) · dwa (всё остальное). trzej · trzy · trzy.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> смотри, кого считаем.",
       "q":"«Два студента» (мужчины) —","opts":["dwa studenci","dwaj studenci","dwie studenci"],"answer":1,
       "explain":"О мужчинах — <b>dwaj studenci</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> смотри, кого считаем.",
       "q":"«Две студентки» —","opts":["dwaj studentki","dwie studentki","dwa studentki"],"answer":1,
       "explain":"О женщинах — <b>dwie studentki</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> коты — не люди.",
       "q":"«Два кота» —","opts":["dwaj koty","dwie koty","dwa koty"],"answer":2,
       "explain":"Животные идут с <b>dwa</b>: dwa koty."}
    ]
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек встречают компанию друзей на площади. Следи за формами: кто ci, а кто te. Нажимай на подчёркнутые слова.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Kto to jest? Ci dwaj panowie przy stoliku.","ru":"Кто это? Вон те двое мужчин у столика.",
      "words":[["Ci dwaj panowie","эти двое мужчин"],["przy stoliku","у столика"]]},
     {"who":"M","name":"Marek","side":"right","en":"To moi koledzy z pracy. Bardzo mili.","ru":"Это мои коллеги с работы. Очень приятные.",
      "words":[["moi koledzy","мои коллеги"],["mili","приятные (о мужчинах)"]]},
     {"who":"A","name":"Anna","side":"left","en":"A te dwie kobiety obok?","ru":"А те две женщины рядом?",
      "words":[["te dwie kobiety","эти две женщины"],["obok","рядом"]]},
     {"who":"M","name":"Marek","side":"right","en":"To ich siostry. One są studentkami.","ru":"Это их сёстры. Они студентки.",
      "words":[["ich siostry","их сёстры"],["studentkami","студентками"]]},
     {"who":"A","name":"Anna","side":"left","en":"Jacy oni są? Weseli?","ru":"Какие они? Весёлые?",
      "words":[["Jacy oni są?","какие они?"],["weseli","весёлые (о мужчинах)"]]},
     {"who":"M","name":"Marek","side":"right","en":"Bardzo. Wczoraj byli u mnie i graliśmy w karty do północy.","ru":"Очень. Вчера они были у меня, и мы играли в карты до полуночи.",
      "words":[["byli","были (мужчины)"],["graliśmy","мы играли"],["do północy","до полуночи"]]},
     {"who":"A","name":"Anna","side":"left","en":"A dziewczyny też były?","ru":"А девушки тоже были?",
      "words":[["dziewczyny","девушки"],["były","были (женщины)"]]},
     {"who":"M","name":"Marek","side":"right","en":"Były, ale wyszły wcześniej. Chodź, przedstawię cię.","ru":"Были, но ушли раньше. Пойдём, познакомлю тебя.",
      "words":[["wyszły","ушли (женщины)"],["przedstawię","представлю, познакомлю"]]}
   ]
 },
 "vocab":{
   "intro":"Слова дня — мужско-личные формы и их спокойные соседи.",
   "items":[
     {"en":"oni / one","ru":"они (с мужчиной) / они (без мужчин)","ex":"Anna i Marek — oni."},
     {"en":"ci / te","ru":"эти (о мужчинах) / эти (об остальных)","ex":"Ci studenci, te studentki."},
     {"en":"byli / były","ru":"были","ex":"Oni byli w domu, one były w pracy."},
     {"en":"student → studenci","ru":"студент → студенты","ex":"To są studenci z Polski."},
     {"en":"Polak → Polacy","ru":"поляк → поляки","ex":"Ci Polacy mieszkają tu od lat."},
     {"en":"pan → panowie","ru":"господин → господа","ex":"Panowie już są."},
     {"en":"brat → bracia","ru":"брат → братья","ex":"Moi bracia mieszkają w Krakowie."},
     {"en":"chłopiec → chłopcy","ru":"мальчик → мальчики","ex":"Czterej chłopcy grają w piłkę."},
     {"en":"dobrzy / dobre","ru":"хорошие (о мужчинах / об остальных)","ex":"Ci lekarze są dobrzy."},
     {"en":"mili / miłe","ru":"приятные","ex":"Ci studenci byli mili."},
     {"en":"dwaj / dwie / dwa","ru":"два (мужчины / женщины / вещи)","ex":"Dwaj panowie, dwie panie, dwa koty."},
     {"en":"Jacy oni są?","ru":"Какие они?","ex":"Jacy oni są? — Weseli."},
     {"en":"wszyscy / wszystkie","ru":"все","ex":"Wszyscy byli zmęczeni."}
   ]
 },
 "drag":{
   "intro":"Перетащи форму к её группе. Спрашивай себя: есть ли в компании мужчина?",
   "pairs":[["ci studenci","эти студенты"],["te studentki","эти студентки"],["oni byli","они были (с мужчиной)"],["one były","они были (без мужчин)"]]
 },
 "reading":{
   "intro":"Прочитай и послушай: короткий рассказ, где обе системы стоят рядом. Следи за окончаниями.",
   "title":"Nasi znajomi",
   "sentences":["Wczoraj byliśmy na urodzinach.","Byli tam moi bracia i ich koledzy.","Ci chłopcy są bardzo weseli.","Były też dziewczyny z pracy.","One były trochę zmęczone i wyszły wcześniej.","Dwaj panowie grali na gitarze.","Dwie panie śpiewały.","Wszyscy byli zadowoleni.","Dzieci też były — one bawiły się w ogrodzie.","Jacy oni wszyscy są? Mili i głośni."],
   "translation":"Вчера мы были на дне рождения. Там были мои братья и их приятели. Эти ребята очень весёлые. Были и девушки с работы. Они немного устали и ушли раньше. Двое мужчин играли на гитаре. Две женщины пели. Все были довольны. Дети тоже были — они играли в саду. Какие они все? Приятные и шумные."
 },
 "quiz":{
   "intro":"Пять вопросов по самой неродной теме уровня. Промах тут — нормально, правило рядом.",
   "items":[
     {"q":"1. Anna, Ewa i Marek — это…","opts":["one","oni","ci"],"answer":1,
      "explain":"В группе есть мужчина, значит <b>oni</b>."},
     {"q":"2. «Эти студентки» —","opts":["ci studentki","te studentki","te studenci"],"answer":1,
      "explain":"О женщинах — <b>te studentki</b>."},
     {"q":"3. «Анна и Эва были дома» —","opts":["Anna i Ewa byli w domu","Anna i Ewa były w domu","Anna i Ewa był w domu"],"answer":1,
      "explain":"Мужчин в группе нет: <b>były</b>."},
     {"q":"4. Множественное от <b>brat</b> —","opts":["braty","bracia","brati"],"answer":1,
      "explain":"Особая форма: <b>bracia</b>."},
     {"q":"5. «Два кота» —","opts":["dwaj koty","dwa koty","dwie koty"],"answer":1,
      "explain":"Животные и вещи идут с <b>dwa</b>: dwa koty. Dwaj — только о мужчинах."}
   ]
 },
 "essay":{
   "intro":"Расскажи о компании, которую хорошо знаешь.",
   "prompt":"Напиши 4–5 фраз о своих друзьях или родных: кто они, какие они, что вы делали вместе. Следи за парой byli / były.",
   "hint":"Схема: Moi koledzy są… / Te dziewczyny są… / Wczoraj byli… / one były… Проверь: есть ли в группе мужчина. 👥",
   "example":"Moi bracia mieszkają w Krakowie. Oni są weseli i bardzo mili. Wczoraj byli u mnie i graliśmy w karty. Moje siostry były w kinie — one wróciły późno. Wszyscy byli zadowoleni."
 }
},
"21": {
 "day":21,"week":"03",
 "themeRu":"Повторение недели 3",
 "themeEn":"Powtórka 3",
 "intro":"Неделя вышла плотной: мы сравнивали вещи и города, ходили и ездили, сходили к врачу, научились командовать и разобрались с самой неродной темой уровня. Сегодня ничего нового — складываем всё вместе, чтобы улеглось. После этого дня можно спокойно спорить о том, чей город лучше, и объяснять врачу, что болит.",
 "introAudio":"Неделя вышла плотной: мы сравнивали вещи и города, ходили и ездили, сходили к врачу, научились командовать и разобрались с самой неродной темой уровня. Сегодня ничего нового — складываем всё вместе, чтобы улеглось. После этого дня можно спокойно спорить о том, чей город лучше, и объяснять врачу, что болит.",
 "goals":[
   "Сравнить что угодно: <b>-szy</b>, <b>naj-</b>, <b>niż</b> и <b>od</b> + dopełniacz",
   "Уверенно выбрать между <b>idę / chodzę</b> и <b>jadę / jeżdżę</b>",
   "Пожаловаться и понять врача: <b>boli mnie…</b>, <b>mam gorączkę</b>",
   "Скомандовать и запретить: <b>Zrób!</b> · <b>Nie rób!</b> · <b>Niech pan…</b>",
   "Не перепутать <b>oni / one</b>, <b>ci / te</b>, <b>byli / były</b>"
 ],
 "learned":[
   "Сравнил(а) что угодно: -szy, naj-, niż и od + dopełniacz",
   "Уверенно выбрал(а) между idę / chodzę и jadę / jeżdżę",
   "Пожаловался(лась) и понял(а) врача: boli mnie…, mam gorączkę",
   "Скомандовал(а) и запретил(а): Zrób! · Nie rób! · Niech pan…",
   "Не перепутал(а) oni / one, ci / te, byli / były"
 ],
 "review":{
   "intro":"Начнём с разминки по всей неделе — понемногу от каждого дня. Не спеши: промах не страшен, любое правило можно освежить выше по курсу.",
   "introAudio":"Начнём с разминки по всей неделе — понемногу от каждого дня. Не спеши: промах не страшен, любое правило можно освежить выше по курсу.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 15.",
      "q":"Сравнительная степень от <b>mały</b> —","opts":["małszy","mniejszy","najmniejszy"],"answer":1,
      "explain":"Одно из четырёх неправильных: <b>mniejszy</b>. Najmniejszy — уже превосходная."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 16.",
      "q":"«Самый большой» —","opts":["najduży","największy","bardziej duży"],"answer":1,
      "explain":"duży → większy → <b>największy</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 17 — ищи маркер.",
      "q":"«Каждый день я езжу на работу автобусом» — Codziennie ___ do pracy autobusem.","opts":["jadę","jeżdżę","idę"],"answer":1,
      "explain":"Codziennie — регулярность: <b>jeżdżę</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 18.",
      "q":"«У меня болят зубы» —","opts":["Boli mnie zęby","Bolą mnie zęby","Bolą mi zęby"],"answer":1,
      "explain":"Много — <b>bolą</b>, человек в винительном — mnie."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни день 19 — это запрет.",
      "q":"«Не делай этого!» —","opts":["Nie zrób tego!","Nie rób tego!","Nie robisz tego!"],"answer":1,
      "explain":"После nie — несовершенный вид: <b>Nie rób tego!</b>"},
     {"type":"type","howto":"Напиши «Эти студенты были очень приятные» (день 20). Диакритику можно не ставить.",
      "q":"Эти студенты были очень приятные.","accept":["ci studenci byli bardzo mili","ci studenci byli bardzo mili."],"placeholder":"Ci studenci…"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Повторение 1 · Сравнение",
    "title":"<em>-szy</em> · <em>naj-</em> · <em>niż / od</em>",
    "paras":[
      "Две ступени делаются одним и тем же движением. Сравнительная — суффикс <b>-szy</b> (после группы согласных <b>-ejszy</b>): nowszy, starszy, ładniejszy, trudniejszy. Превосходная — та же форма плюс приставка <b>naj-</b>: najnowszy, najstarszy, najładniejszy.",
      "Четыре неправильных совпадают с русскими четырьмя: dobry → <b>lepszy</b> → najlepszy, zły → <b>gorszy</b> → najgorszy, duży → <b>większy</b> → największy, mały → <b>mniejszy</b> → najmniejszy.",
      "С чем сравниваем — двумя способами: <b>niż</b> + именительный (starszy niż Anna) или <b>od</b> + родительный (starszy od Anny). Оба верны. Из группы выбираем через <b>z</b> + родительный (najlepszy z klasy), про место говорим через <b>w</b> + предложный (największe miasto w Polsce).",
      "И не забывай про наречия: <b>lepiej, gorzej, więcej, mniej, najlepiej</b>. Предмет — lepszy, действие — lepiej."
    ],
    "audio":"Две ступени делаются одним и тем же движением. Сравнительная — суффикс -szy, после группы согласных -ejszy: nowszy, starszy, ładniejszy, trudniejszy. Превосходная — та же форма плюс приставка naj-: najnowszy, najstarszy, najładniejszy. Четыре неправильных совпадают с русскими четырьмя: dobry — lepszy — najlepszy, zły — gorszy — najgorszy, duży — większy — największy, mały — mniejszy — najmniejszy. С чем сравниваем — двумя способами: niż плюс именительный, starszy niż Anna, или od плюс родительный, starszy od Anny. Оба верны. Из группы выбираем через z плюс родительный, najlepszy z klasy, про место говорим через w плюс предложный, największe miasto w Polsce. И не забывай про наречия: lepiej, gorzej, więcej, mniej, najlepiej. Предмет — lepszy, действие — lepiej.",
    "table":{"rows":[
      ["nowy → nowszy → najnowszy <button class=\"play\" data-say=\"nowy, nowszy, najnowszy\">🔊</button>","три ступени одним движением"],
      ["dobry → lepszy → najlepszy <button class=\"play\" data-say=\"dobry, lepszy, najlepszy\">🔊</button>","хороший → лучше → самый лучший"],
      ["starszy niż Anna / od Anny","два способа сравнить"],
      ["najlepszy z klasy · największe miasto w Polsce","из группы / в месте"],
      ["lepiej · najlepiej","наречия: лучше · лучше всего"]
    ],"star":1},
    "examples":[
      {"ru":"Краков меньше Варшавы, но красивее.","en":"Kraków jest <b>mniejszy od Warszawy</b>, ale <b>ładniejszy</b>.","say":"Kraków jest mniejszy od Warszawy, ale ładniejszy."},
      {"ru":"Это лучший кофе в городе.","en":"To <b>najlepsza kawa w mieście</b>.","say":"To najlepsza kawa w mieście."},
      {"ru":"Сегодня я чувствую себя лучше, чем вчера.","en":"Dziś czuję się <b>lepiej niż wczoraj</b>.","say":"Dziś czuję się lepiej niż wczoraj."}
    ],
    "mistakes":[
      {"wrong":"starszy niż Anny","right":"starszy <b>niż Anna</b> / starszy <b>od Anny</b>","why":"после niż — именительный, после od — родительный. Одно из двух, не оба сразу."}
    ],
    "mnemonic":"📈 -szy → naj- + -szy. niż + именительный · od + родительный.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на падеж после пропуска.",
       "q":"«Чай дешевле кофе» — Herbata jest tańsza ___ kawy.","opts":["niż","od","z"],"answer":1,
       "explain":"kawy — родительный, значит <b>od</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Варшава — самый большой город в Польше»</b>","answer":"Warszawa to największe miasto w Polsce"},
      {"type":"type","howto":"Напиши «Теперь я говорю лучше». Диакритику можно не ставить.",
       "q":"Теперь я говорю лучше.","accept":["teraz mówię lepiej","teraz mowie lepiej"],"placeholder":"Teraz mówię…"}
    ]
   },
   {
    "eyebrow":"Повторение 2 · Движение",
    "title":"<em>idę / chodzę</em> · <em>jadę / jeżdżę</em>",
    "paras":[
      "Система, которую ты уже носил(а) в голове до начала урока: <b>iść</b> — иду сейчас, <b>chodzić</b> — хожу вообще; <b>jechać</b> — еду сейчас, <b>jeździć</b> — езжу регулярно. Решает маркер: teraz, dziś, jutro — первая колонка; codziennie, zawsze, często, raz w tygodniu — вторая.",
      "Формы: idę / idziesz / idą, chodzę / chodzisz / chodzą, jadę / jedziesz / jadą, jeżdżę / jeździsz / jeżdżą.",
      "На чём едем — творительный падеж: <b>autobusem, pociągiem, samochodem</b>; велосипед просит <b>na rowerze</b>; пешком — <b>pieszo</b>.",
      "И приставка po-, которая делает будущее совершенного вида: idę → <b>pójdę</b>, jadę → <b>pojadę</b> — ровно как русское «иду → пойду». Ловушка недели: <b>jadę</b> (еду) и <b>jem</b> (ем), <b>jadą</b> (едут) и <b>jedzą</b> (едят)."
    ],
    "audio":"Система, которая уже была у тебя в голове до начала урока: iść — иду сейчас, chodzić — хожу вообще; jechać — еду сейчас, jeździć — езжу регулярно. Решает маркер: teraz, dziś, jutro — первая колонка; codziennie, zawsze, często, raz w tygodniu — вторая. Формы: idę, idziesz, idą; chodzę, chodzisz, chodzą; jadę, jedziesz, jadą; jeżdżę, jeździsz, jeżdżą. На чём едем — творительный падеж: autobusem, pociągiem, samochodem; велосипед просит na rowerze; пешком — pieszo. И приставка po-, которая делает будущее совершенного вида: idę — pójdę, jadę — pojadę, ровно как русское «иду — пойду». Ловушка недели: jadę и jem, jadą и jedzą.",
    "table":{"rows":[
      ["Teraz idę do sklepu. <button class=\"play\" data-say=\"Teraz idę do sklepu\">🔊</button>","сейчас — iść"],
      ["Codziennie chodzę do pracy. <button class=\"play\" data-say=\"Codziennie chodzę do pracy\">🔊</button>","регулярно — chodzić"],
      ["Jutro jadę do Gdańska.","сейчас/скоро — jechać"],
      ["Co tydzień jeżdżę do mamy.","регулярно — jeździć"],
      ["jadę ≠ jem · jadą ≠ jedzą <button class=\"play\" data-say=\"jadę, jem, jadą, jedzą\">🔊</button>","ловушка недели"],
      ["pójdę / pojadę","пойду / поеду"]
    ],"star":4},
    "examples":[
      {"ru":"Каждый день хожу на работу пешком.","en":"Codziennie <b>chodzę</b> do pracy <b>pieszo</b>.","say":"Codziennie chodzę do pracy pieszo."},
      {"ru":"Завтра еду в Варшаву поездом.","en":"Jutro <b>jadę</b> do Warszawy <b>pociągiem</b>.","say":"Jutro jadę do Warszawy pociągiem."},
      {"ru":"Они едут поездом, а потом едят обед.","en":"Oni <b>jadą</b> pociągiem, a potem <b>jedzą</b> obiad.","say":"Oni jadą pociągiem, a potem jedzą obiad."}
    ],
    "mistakes":[
      {"wrong":"Codziennie idę do pracy.","right":"Codziennie <b>chodzę</b> do pracy.","why":"регулярность требует chodzić — как русское «хожу каждый день»."}
    ],
    "mnemonic":"🚶🚌 teraz → idę / jadę. codziennie → chodzę / jeżdżę.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> найди маркер.",
       "q":"«Сейчас я еду домой» — Teraz ___ do domu.","opts":["jeżdżę","jadę","chodzę"],"answer":1,
       "explain":"Teraz — одно движение сейчас: <b>jadę</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, что стоит после глагола.",
       "q":"«Они едят завтрак» —","opts":["Oni jadą śniadanie","Oni jedzą śniadanie","Oni jedzie śniadanie"],"answer":1,
       "explain":"Еда — <b>jedzą</b>. Jadą значит «едут»."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Завтра поеду в Гданьск»</b>","answer":"Jutro pojadę do Gdańska"}
    ]
   },
   {
    "eyebrow":"Повторение 3 · Здоровье",
    "title":"<em>Boli mnie…</em> · <em>Mam gorączkę</em>",
    "paras":[
      "Главная конструкция недели устроена как русская безличная фраза, только человек стоит в винительном падеже: <b>Boli mnie głowa</b>, <b>Boli cię gardło</b>, <b>Bolą go zęby</b>. Одно болит — boli, много — bolą. Сказать «u mnie boli» нельзя.",
      "Симптомы — через mieć: <b>mam katar, mam kaszel, mam gorączkę, mam grypę</b>. Состояние — через być с прилагательным в именительном: <b>jestem chory / chora</b>, <b>jestem przeziębiony / przeziębiona</b>. И самое частое: <b>źle się czuję</b>, <b>czuję się lepiej</b>.",
      "Части тела, которые чаще всего болят: głowa, gardło, brzuch, zęby, ręka, noga — и <b>plecy</b>, которое живёт только во множественном числе.",
      "У врача: <b>Co panu / pani dolega?</b> (дательный), <b>Od kiedy to boli?</b>, <b>Proszę otworzyć usta</b>. И два «рецепта»: <b>recepta</b> — от врача, <b>przepis</b> — на кухне."
    ],
    "audio":"Главная конструкция недели устроена как русская безличная фраза, только человек стоит в винительном падеже: boli mnie głowa, boli cię gardło, bolą go zęby. Одно болит — boli, много — bolą. Сказать «u mnie boli» нельзя. Симптомы через mieć: mam katar, mam kaszel, mam gorączkę, mam grypę. Состояние через być с прилагательным в именительном: jestem chory или chora, jestem przeziębiony, przeziębiona. И самое частое: źle się czuję, czuję się lepiej. Части тела, которые чаще всего болят: głowa, gardło, brzuch, zęby, ręka, noga, и plecy, которое живёт только во множественном числе. У врача: co panu dolega, дательный; od kiedy to boli; proszę otworzyć usta. И два «рецепта»: recepta от врача, przepis на кухне.",
    "table":{"rows":[
      ["Boli mnie głowa. <button class=\"play\" data-say=\"Boli mnie głowa\">🔊</button>","У меня болит голова."],
      ["Bolą mnie plecy. <button class=\"play\" data-say=\"Bolą mnie plecy\">🔊</button>","У меня болит спина."],
      ["Mam gorączkę i katar.","У меня температура и насморк."],
      ["Jestem chory / chora.","Я болен / больна."],
      ["Co panu dolega? <button class=\"play\" data-say=\"Co panu dolega?\">🔊</button>","На что жалуетесь?"],
      ["recepta / przepis","рецепт врача / рецепт блюда"]
    ],"star":1},
    "examples":[
      {"ru":"У меня болит горло со вчерашнего дня.","en":"<b>Boli mnie gardło</b> od wczoraj.","say":"Boli mnie gardło od wczoraj."},
      {"ru":"Я больна и у меня температура.","en":"<b>Jestem chora</b> i <b>mam gorączkę</b>.","say":"Jestem chora i mam gorączkę."},
      {"ru":"Сегодня мне лучше.","en":"Dziś <b>czuję się lepiej</b>.","say":"Dziś czuję się lepiej."}
    ],
    "mistakes":[
      {"wrong":"U mnie boli głowa.","right":"<b>Boli mnie</b> głowa.","why":"человек встаёт в винительный падеж: mnie, cię, go, ją."}
    ],
    "mnemonic":"🤒 Boli mnie… / Bolą mnie… · Mam katar · Jestem chory · Źle się czuję.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посчитай, сколько болит.",
       "q":"«У меня болит спина» —","opts":["Boli mnie plecy","Bolą mnie plecy","Boli mi plecy"],"answer":1,
       "explain":"Plecy — только множественное, значит <b>bolą mnie plecy</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> подумай, где нужна эта бумажка.",
       "q":"Рецепт супа — это —","opts":["recepta","przepis","lekarstwo"],"answer":1,
       "explain":"Кулинарный рецепт — <b>przepis</b>."},
      {"type":"type","howto":"Напиши «У меня температура». Диакритику можно не ставить.",
       "q":"У меня температура.","accept":["mam gorączkę","mam goraczke"],"placeholder":"Mam…"}
    ]
   },
   {
    "eyebrow":"Повторение 4 · Приказы",
    "title":"<em>Zrób!</em> · <em>Nie rób!</em> · <em>Niech pan…</em>",
    "paras":[
      "Форма делается из третьего лица настоящего времени: on robi → <b>rób</b>, on napisze → <b>napisz</b>, on kupi → <b>kup</b>, on idzie → <b>idź</b>. Первая группа добавляет -j: <b>czekaj, słuchaj, czytaj</b>. Множественное: <b>-cie</b> (zróbcie) и <b>-my</b> (chodźmy).",
      "Вид выбирается как в русском: просьба — совершенный (<b>Zrób to</b>), привычка — несовершенный (<b>Rób to codziennie</b>). А запрет всегда несовершенный: <b>Nie rób!</b>, <b>Nie kupuj!</b>, <b>Nie martw się!</b> — «не делай», а не «не сделай».",
      "Восемь форм на каждый день: <b>bądź, miej, jedz, pij, weź, daj, powiedz, chodź</b>.",
      "И три этажа вежливости: <b>Usiądź</b> (другу) — <b>Proszę usiąść</b> (нейтрально) — <b>Niech pan usiądzie</b> (официально). После niech идёт обычная форма третьего лица, после proszę — инфинитив."
    ],
    "audio":"Форма делается из третьего лица настоящего времени: on robi — rób, on napisze — napisz, on kupi — kup, on idzie — idź. Первая группа добавляет -j: czekaj, słuchaj, czytaj. Множественное: -cie, zróbcie, и -my, chodźmy. Вид выбирается как в русском: просьба — совершенный, zrób to; привычка — несовершенный, rób to codziennie. А запрет всегда несовершенный: nie rób, nie kupuj, nie martw się — «не делай», а не «не сделай». Восемь форм на каждый день: bądź, miej, jedz, pij, weź, daj, powiedz, chodź. И три этажа вежливости: usiądź другу, proszę usiąść нейтрально, niech pan usiądzie официально. После niech идёт обычная форма третьего лица, после proszę — инфинитив.",
    "table":{"rows":[
      ["on robi → rób <button class=\"play\" data-say=\"rób\">🔊</button>","делай"],
      ["Zrób to! / Nie rób tego! <button class=\"play\" data-say=\"Zrób to! Nie rób tego!\">🔊</button>","приказ / запрет — вид меняется"],
      ["czekaj · słuchaj · czytaj","первая группа берёт -j"],
      ["weź · daj · powiedz · chodź <button class=\"play\" data-say=\"weź, daj, powiedz, chodź\">🔊</button>","возьми · дай · скажи · иди сюда"],
      ["Niech pan usiądzie. <button class=\"play\" data-say=\"Niech pan usiądzie\">🔊</button>","Садитесь (официально)."],
      ["Proszę poczekać.","Подождите, пожалуйста."]
    ],"star":1},
    "examples":[
      {"ru":"Купи хлеб, но не покупай молоко.","en":"<b>Kup</b> chleb, ale <b>nie kupuj</b> mleka.","gloss":"после nie — и вид, и падеж меняются","say":"Kup chleb, ale nie kupuj mleka."},
      {"ru":"Не волнуйся и отдыхай.","en":"<b>Nie martw się</b> i <b>odpoczywaj</b>.","say":"Nie martw się i odpoczywaj."},
      {"ru":"Подождите минутку, пожалуйста.","en":"<b>Niech pani poczeka</b> chwilę.","say":"Niech pani poczeka chwilę."}
    ],
    "mistakes":[
      {"wrong":"Nie zrób tego!","right":"<b>Nie rób</b> tego!","why":"запрет требует несовершенного вида — как русское «не делай»."}
    ],
    "mnemonic":"👉🚫 Zrób (один раз) · Nie rób (запрет) · Niech pan zrobi (вежливо).",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> перед тобой запрет.",
       "q":"«Не покупай это!» —","opts":["Nie kup tego!","Nie kupuj tego!","Nie kupisz tego!"],"answer":1,
       "explain":"После nie — несовершенный вид: <b>Nie kupuj tego!</b>"},
      {"type":"choice","howto":"<b>Что делать:</b> вспомни рамку вежливости.",
       "q":"Вежливо мужчине: «садитесь» —","opts":["Niech pan usiądź","Niech pan usiądzie","Proszę usiądź"],"answer":1,
       "explain":"После niech — третье лицо: <b>Niech pan usiądzie</b>."},
      {"type":"speak","target":"Nie martw się, wszystko będzie dobrze.","sub":"не волнуйся, всё будет хорошо","want":"nie martw się"}
    ]
   },
   {
    "eyebrow":"Повторение 5 · Мужско-личный род",
    "title":"<em>oni byli</em> — <em>one były</em>",
    "paras":[
      "Тема, где родная интуиция молчит, — и потому единственная, которую стоит проверять сознательно. Вопрос всегда один: есть ли в группе мужчина-человек? Если да — <b>oni, ci, byli</b>. Если нет (женщины, дети, животные, вещи) — <b>one, te, były</b>.",
      "Существительные о мужчинах: student → <b>studenci</b>, Polak → <b>Polacy</b>, chłopiec → <b>chłopcy</b>, pan → <b>panowie</b>, brat → <b>bracia</b>, ludzie. Женщины и вещи идут прежним путём: studentki, panie, koty, domy.",
      "Прилагательные: dobry → <b>dobrzy</b> / dobre, miły → <b>mili</b> / miłe, młody → <b>młodzi</b> / młode, zmęczony → <b>zmęczeni</b> / zmęczone. Вопрос: <b>Jacy oni są?</b> / <b>Jakie one są?</b>",
      "Числительные: <b>dwaj studenci</b> · <b>dwie studentki</b> · <b>dwa koty</b>; trzej panowie · trzy panie · trzy domy. И помни: разница видна только во множественном числе и только в прошедшем времени, местоимениях, прилагательных и числительных. Настоящее время одинаково: oni mówią, one mówią."
    ],
    "audio":"Тема, где родная интуиция молчит, и потому единственная, которую стоит проверять сознательно. Вопрос всегда один: есть ли в группе мужчина-человек? Если да — oni, ci, byli. Если нет, то есть женщины, дети, животные, вещи — one, te, były. Существительные о мужчинах: student — studenci, Polak — Polacy, chłopiec — chłopcy, pan — panowie, brat — bracia, ludzie. Женщины и вещи идут прежним путём: studentki, panie, koty, domy. Прилагательные: dobry — dobrzy или dobre, miły — mili или miłe, młody — młodzi или młode, zmęczony — zmęczeni или zmęczone. Вопрос: jacy oni są, jakie one są. Числительные: dwaj studenci, dwie studentki, dwa koty; trzej panowie, trzy panie, trzy domy. И помни: разница видна только во множественном числе и только в прошедшем времени, местоимениях, прилагательных и числительных. Настоящее время одинаково.",
    "table":{"rows":[
      ["Anna i Marek → oni byli <button class=\"play\" data-say=\"Anna i Marek, oni byli\">🔊</button>","есть мужчина"],
      ["Anna i Ewa → one były <button class=\"play\" data-say=\"Anna i Ewa, one były\">🔊</button>","только женщины"],
      ["ci studenci / te studentki <button class=\"play\" data-say=\"ci studenci, te studentki\">🔊</button>","эти студенты / студентки"],
      ["dobrzy / dobre · mili / miłe","прилагательные тоже делятся"],
      ["dwaj · dwie · dwa <button class=\"play\" data-say=\"dwaj panowie, dwie panie, dwa koty\">🔊</button>","мужчины · женщины · остальное"],
      ["dzieci → one były","дети — второй род"]
    ],"star":2},
    "examples":[
      {"ru":"Эти студенты были очень приятные.","en":"<b>Ci studenci byli</b> bardzo <b>mili</b>.","say":"Ci studenci byli bardzo mili."},
      {"ru":"Эти студентки были очень приятные.","en":"<b>Te studentki były</b> bardzo <b>miłe</b>.","say":"Te studentki były bardzo miłe."},
      {"ru":"Двое мужчин и две женщины ждали у входа.","en":"<b>Dwaj panowie</b> i <b>dwie panie</b> czekali przy wejściu.","gloss":"смешанная группа → czekali","say":"Dwaj panowie i dwie panie czekali przy wejściu."}
    ],
    "mistakes":[
      {"wrong":"Te studenci byli mili.","right":"<b>Ci</b> studenci byli mili.","why":"о мужчинах — ci. Форма te остаётся женщинам, детям, животным и вещам."}
    ],
    "mnemonic":"👥 Есть мужчина → oni · ci · byli. Нет → one · te · były.",
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто в группе.",
       "q":"«Анна, Эва и Марек были дома» —","opts":["były w domu","byli w domu","był w domu"],"answer":1,
       "explain":"Марек в группе есть: <b>byli</b>."},
      {"type":"choice","howto":"<b>Что делать:</b> смотри, кого считаем.",
       "q":"«Две студентки» —","opts":["dwaj studentki","dwie studentki","dwa studentki"],"answer":1,
       "explain":"О женщинах — <b>dwie studentki</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Эти студентки были очень приятные»</b>","answer":"Te studentki były bardzo miłe"}
    ]
   }
 ],
 "scene":{
   "intro":"Сценка на выходе из поликлиники — вся неделя в шести репликах. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Jak się czujesz? Lepiej?","ru":"Как ты себя чувствуешь? Лучше?"},
     {"who":"B","en":"Trochę lepiej. Gardło boli mnie mniej niż wczoraj.","ru":"Немного лучше. Горло болит меньше, чем вчера."},
     {"who":"A","en":"To dobrze. Weź lekarstwo i nie chodź jutro do pracy.","ru":"Хорошо. Возьми лекарство и не ходи завтра на работу."},
     {"who":"B","en":"Nie martw się. Zostanę w domu.","ru":"Не волнуйся. Останусь дома."},
     {"who":"A","en":"Twoi bracia byli u ciebie wczoraj?","ru":"Твои братья были у тебя вчера?"},
     {"who":"B","en":"Byli. Przywieźli najlepszą zupę w mieście.","ru":"Были. Привезли лучший суп в городе."}
   ]
 },
 "vocab":{
   "intro":"Главные слова недели 3 — всё, что открывает разговор о сравнении, дороге и здоровье.",
   "items":[
     {"en":"lepszy / gorszy","ru":"лучше / хуже (какой)","ex":"Ta kawa jest lepsza."},
     {"en":"większy / mniejszy","ru":"больше / меньше","ex":"Kraków jest mniejszy od Warszawy."},
     {"en":"najlepszy / największy","ru":"самый лучший / самый большой","ex":"To najlepsza kawa w mieście."},
     {"en":"niż / od + dopełniacz","ru":"чем (два способа)","ex":"Starszy niż Anna = starszy od Anny."},
     {"en":"idę / chodzę","ru":"иду сейчас / хожу вообще","ex":"Codziennie chodzę do pracy."},
     {"en":"jadę / jeżdżę","ru":"еду сейчас / езжу регулярно","ex":"Co tydzień jeżdżę do mamy."},
     {"en":"pociągiem / autobusem","ru":"поездом / автобусом","ex":"Jadę pociągiem."},
     {"en":"boli mnie / bolą mnie","ru":"у меня болит / болят","ex":"Boli mnie głowa."},
     {"en":"mam gorączkę / katar","ru":"у меня температура / насморк","ex":"Mam gorączkę i katar."},
     {"en":"zrób / nie rób","ru":"сделай / не делай","ex":"Zrób to dziś, ale nie rób tego jutro."},
     {"en":"niech pan / pani…","ru":"вежливое «сделайте»","ex":"Niech pan usiądzie."},
     {"en":"oni byli / one były","ru":"они были (с мужчиной / без)","ex":"Anna i Marek byli w domu."},
     {"en":"ci / te · dwaj / dwie / dwa","ru":"эти · два","ex":"Ci studenci, te studentki, dwa koty."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское выражение к переводу — по одному от каждого дня недели.",
   "pairs":[["najlepszy","самый лучший"],["jeżdżę","езжу регулярно"],["boli mnie","у меня болит"],["nie rób","не делай"]]
 },
 "reading":{
   "intro":"Прочитай и послушай рассказ Анны — здесь собрана вся неделя. Попробуй потом рассказать похожее о себе.",
   "title":"Mój tydzień",
   "sentences":["Ten tydzień był trudniejszy niż poprzedni.","Marek zachorował — bolało go gardło i miał gorączkę.","Poszedł do lekarza i dostał receptę.","Lekarka powiedziała: proszę odpoczywać i pić dużo wody.","Ja codziennie chodziłam do pracy pieszo.","W środę jechałam autobusem, bo padał deszcz.","W sobotę byliśmy na urodzinach.","Byli tam moi bracia i ich koledzy — wszyscy weseli.","Dziewczyny z pracy też były, ale wyszły wcześniej.","To był najlepszy dzień tego tygodnia."],
   "translation":"Эта неделя была труднее предыдущей. Марек заболел — у него болело горло и была температура. Он пошёл к врачу и получил рецепт. Врач сказала: отдыхайте и пейте много воды. Я каждый день ходила на работу пешком. В среду ехала автобусом, потому что шёл дождь. В субботу мы были на дне рождения. Там были мои братья и их приятели — все весёлые. Девушки с работы тоже были, но ушли раньше. Это был лучший день этой недели."
 },
 "quiz":{
   "intro":"А теперь проверка недели — восемь вопросов по всем дням. Порог мягкий, подсказки рядом. Пройдёшь — и третья неделя официально за плечами. 💛",
   "items":[
     {"q":"1. Сравнительная степень от <b>dobry</b> —","opts":["dobrzejszy","lepszy","najlepszy"],"answer":1,
      "explain":"<b>Lepszy</b> — как русское «лучше». Najlepszy — уже превосходная степень."},
     {"q":"2. «Анна младше Марека» — Anna jest młodsza ___ Marka.","opts":["niż","od","z"],"answer":1,
      "explain":"Marka — родительный падеж, значит <b>od</b>."},
     {"q":"3. «Самый младший из нас» —","opts":["najmłodszy w nas","najmłodszy z nas","najmłodszy od nas"],"answer":1,
      "explain":"Из группы — <b>z nas</b>."},
     {"q":"4. «Каждый день я хожу на работу» — Codziennie ___ do pracy.","opts":["idę","chodzę","pójdę"],"answer":1,
      "explain":"Регулярность — <b>chodzę</b>."},
     {"q":"5. «У меня болят ноги» —","opts":["Boli mnie nogi","Bolą mnie nogi","Bolą mi nogi"],"answer":1,
      "explain":"Много — <b>bolą</b>, человек в винительном — mnie."},
     {"q":"6. «Не делай этого!» —","opts":["Nie zrób tego!","Nie rób tego!","Nie robisz tego!"],"answer":1,
      "explain":"Запрет идёт несовершенным видом: <b>Nie rób tego!</b>"},
     {"q":"7. Вежливо женщине: «подождите» —","opts":["Niech pani poczekaj","Niech pani poczeka","Proszę poczekaj"],"answer":1,
      "explain":"После niech — форма третьего лица: <b>Niech pani poczeka</b>."},
     {"q":"8. «Эти студенты были очень приятные» —","opts":["Te studenci były bardzo miłe","Ci studenci byli bardzo mili","Ci studentki byli bardzo mili"],"answer":1,
      "explain":"О мужчинах — <b>ci · byli · mili</b>."}
   ]
 },
 "essay":{
   "intro":"Последний шаг недели — расскажи свою неделю целиком. Всё, что нужно, у тебя уже есть.",
   "prompt":"Напиши 5–6 фраз: как ты добираешься на работу или учёбу, что было лучше или хуже, чем на прошлой неделе, болел(а) ли кто-то рядом, что ты кому-то посоветовал(а), с кем вы виделись.",
   "hint":"Используй: Codziennie chodzę / jeżdżę… Ten tydzień był … -szy niż… Boli mnie… Nie martw się… Oni byli / one były… 📅",
   "example":"Ten tydzień był lepszy niż poprzedni. Codziennie chodziłam do pracy pieszo, a w piątek jechałam autobusem. Marek był chory — bolało go gardło. Powiedziałam mu: odpoczywaj i nie chodź do pracy. W sobotę byliśmy u moich braci. Oni byli bardzo weseli, a ich siostry były trochę zmęczone."
 }
},

"22": {
 "day":22,"week":"04",
 "themeRu":"Я бы хотел",
 "themeEn":"Tryb przypuszczający",
 "intro":"Самая вежливая частица польского — две буквы: <b>by</b>. Ты уже видел(а) её в A1, когда заказывал(а) кофе словами <b>chciałbym</b> / <b>chciałabym</b>. Сегодня разберём её систему: как из обычного «хочу» получается мягкое «хотел бы», и почему by в польском не висит отдельным словом, а приклеивается и спрягается.",
 "introAudio":"Самая вежливая частица польского — две буквы: by. Она уже встречалась тебе в A1, в словах chciałbym и chciałabym, которыми заказывают кофе. Сегодня разберём её систему: как из обычного «хочу» получается мягкое «хотел бы», и почему by в польском не висит отдельным словом, а приклеивается и спрягается.",
 "goals":[
   "Собирать «бы»-форму от любого глагола: <b>л-форма + by + окончание</b>",
   "Смягчать желание: <b>chciałbym</b>, <b>wolałabym</b>, <b>nie chciałbym</b>",
   "Просить вежливо: <b>Czy mógłbyś…?</b> / <b>Czy mogłaby pani…?</b>",
   "Понимать, куда падает ударение в формах с -by-"
 ],
 "learned":[
   "Собрал(а) «бы»-форму от любого глагола: л-форма плюс by плюс окончание",
   "Смягчил(а) желание: chciałbym, wolałabym, nie chciałbym",
   "Попросил(а) вежливо: Czy mógłbyś…? Czy mogłaby pani…?",
   "Понял(а), куда падает ударение в формах с -by-"
 ],
 "review":{
   "intro":"Начнём с круга по третьей неделе: сравнение, движение, императив и мужско-личные формы. И, как всегда, один вопрос про вид — он с нами каждый день.",
   "introAudio":"Начнём с круга по третьей неделе: сравнение, движение, императив и мужско-личные формы. И, как всегда, один вопрос про вид — он с нами каждый день.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> прочитай фразу и нажми правильный вариант.",
      "q":"Ten hotel jest ___ niż tamten. (лучше)","opts":["dobrzejszy","lepszy","najlepszy"],"answer":1,
      "explain":"dobry → <b>lepszy</b>, как русское «хороший → лучше». После niż нужна сравнительная степень, а не превосходная."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни пару «иду / хожу».",
      "q":"Codziennie ___ do pracy pieszo.","opts":["idę","chodzę","jadę"],"answer":1,
      "explain":"Регулярно, каждый день — <b>chodzę</b>. Idę — про один конкретный раз, jadę — на транспорте."},
     {"type":"choice","howto":"<b>Что делать:</b> отрицательный приказ выбирает вид сам.",
      "q":"«Не делай этого!» —","opts":["Nie zrób tego!","Nie rób tego!","Nie robisz tego!"],"answer":1,
      "explain":"После «не» идёт несовершенный вид: <b>Nie rób!</b> Русский делает ровно то же самое — «не делай», а не «не сделай»."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Двое студентов были в кино»</b>","answer":"Dwaj studenci byli w kinie"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Как собрать",
    "title":"л-форма + <em>by</em> + окончание",
    "paras":[
      "Русское «бы» — отдельное слово: «я хотел бы», «сделал бы я». В польском by ведёт себя иначе: оно приклеивается прямо к глаголу и забирает себе личное окончание.",
      "Берём л-форму прошедшего времени <em>без личного окончания</em> — <b>chciał-</b>, <b>zrobił-</b>, <b>wolał-</b> — и добавляем: <b>-bym</b> (я), <b>-byś</b> (ты), <b>-by</b> (он/она/оно).",
      "Род сохраняется, как в прошедшем времени: мужчина скажет <b>chciałbym</b>, женщина — <b>chciałabym</b>. Это та самая пара, которую ты встретил(а) в ресторане на A1, только теперь видно, из чего она собрана.",
      "Множественное число берёт мужско-личную или немужско-личную основу и окончания <b>-byśmy</b> / <b>-byście</b>: <b>chcielibyśmy</b> (есть мужчина в компании) — <b>chciałybyśmy</b> (только женщины). Знакомая развилка из дня 2."
    ],
    "audio":"Русское «бы» — отдельное слово: «я хотел бы», «сделал бы я». В польском by ведёт себя иначе: оно приклеивается прямо к глаголу и забирает себе личное окончание. Берём л-форму прошедшего времени без личного окончания — chciał, zrobił, wolał — и добавляем: bym для «я», byś для «ты», by для «он, она, оно». Род сохраняется, как в прошедшем времени: мужчина скажет chciałbym, женщина — chciałabym. Множественное число берёт мужско-личную или немужско-личную основу и окончания byśmy, byście: chcielibyśmy, если в компании есть мужчина, chciałybyśmy, если только женщины.",
    "table":{"rows":[
      ["ja → <b>chciałbym</b> / <b>chciałabym</b> <button class=\"play\" data-say=\"chciałbym, chciałabym\">🔊</button>","я хотел бы / я хотела бы"],
      ["ty → <b>chciałbyś</b> / <b>chciałabyś</b> <button class=\"play\" data-say=\"chciałbyś, chciałabyś\">🔊</button>","ты хотел бы / ты хотела бы"],
      ["on / ona → <b>chciałby</b> / <b>chciałaby</b> <button class=\"play\" data-say=\"chciałby, chciałaby\">🔊</button>","он хотел бы / она хотела бы"],
      ["my → <b>chcielibyśmy</b> / <b>chciałybyśmy</b> <button class=\"play\" data-say=\"chcielibyśmy, chciałybyśmy\">🔊</button>","мы хотели бы (с мужчиной / только женщины)"],
      ["wy → <b>chcielibyście</b> / <b>chciałybyście</b> <button class=\"play\" data-say=\"chcielibyście, chciałybyście\">🔊</button>","вы хотели бы"],
      ["oni / one → <b>chcieliby</b> / <b>chciałyby</b> <button class=\"play\" data-say=\"chcieliby, chciałyby\">🔊</button>","они хотели бы"]
    ],"star":0},
    "examples":[
      {"ru":"Я хотел бы кофе.","en":"<b>Chciałbym</b> kawę.","gloss":"говорит мужчина","say":"Chciałbym kawę."},
      {"ru":"Я хотела бы поговорить.","en":"<b>Chciałabym</b> porozmawiać.","say":"Chciałabym porozmawiać."},
      {"ru":"Мы хотели бы забронировать столик.","en":"<b>Chcielibyśmy</b> zarezerwować stolik.","gloss":"в компании есть мужчина","say":"Chcielibyśmy zarezerwować stolik."},
      {"ru":"Анна сделала бы это иначе.","en":"Anna <b>zrobiłaby</b> to inaczej.","say":"Anna zrobiłaby to inaczej."}
    ],
    "mistakes":[
      {"wrong":"Chciałem bym kawę.","right":"<b>Chciałbym</b> kawę.","why":"by клеится к голой л-форме chciał-, а не к готовому прошедшему chciałem. Личное окончание достаётся частице: chciał + bym."},
      {"wrong":"Ja by chciał kawę.","right":"Ja <b>bym</b> chciał kawę.","why":"by спрягается: для «я» это bym. Голое by остаётся только для он/она/оно и для них."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто говорит, и выбери форму.",
       "q":"Анна: «Я хотела бы поговорить» —","opts":["Chciałbym porozmawiać","Chciałabym porozmawiać","Chciałabyś porozmawiać"],"answer":1,
       "explain":"Говорит женщина о себе — <b>chciałabym</b>. Chciałbym — форма мужчины, chciałabyś — обращение к собеседнице."},
      {"type":"choice","q":"«Мы хотели бы» (Анна и Марек вместе) —",
       "opts":["Chciałybyśmy","Chcielibyśmy","Chcielibyście"],"answer":1,
       "explain":"В компании есть мужчина — работает мужско-личная основа: <b>chcielibyśmy</b>. Chciałybyśmy сказали бы только женщины."},
      {"type":"type","howto":"<b>Что делать:</b> напиши ту форму, которая про тебя. Обе принимаются, диакритику можно не ставить.",
       "q":"«Я хотел(а) бы отдохнуть» (odpocząć)","accept":["chciałbym odpocząć","chciałabym odpocząć","chcialbym odpoczac","chcialabym odpoczac","chciałbym odpoczac","chciałabym odpoczac","chcialbym odpocząć","chcialabym odpocząć"],"placeholder":"Chciał… odpocząć"}
    ],
    "mnemonic":"🧩 chciał + bym = chciałbym. Одна деталь клеится к другой — и получается «хотел бы»."
   },
   {
    "eyebrow":"Правило 2 · Ударение",
    "title":"Кусочек <em>-by-</em> ударение не трогает",
    "paras":[
      "В польском ударение стоит на предпоследнем слоге — это правило ты знаешь из курса чтения. Формы с -by- из него честно выпадают.",
      "Ударение остаётся там, где оно было в прошедшем времени, а -bym / -byś / -by просто дописываются справа. <b>zrobił</b> [зро́биу̯] → <b>zrobiłbym</b> [зро́биу̯бым] — ударение уехало на третий слог от конца.",
      "То же с <b>wolałbym</b> [во́лау̯бым] и <b>pracowałabym</b> [працо́ва-у̯а-бым]. А в формах «мы» и «вы» ударение отходит ещё дальше — на четвёртый слог от конца: <b>zrobilibyśmy</b> [зро́би-ли-бы-щмы].",
      "В быстрой живой речи многие всё же тянут ударение по общему правилу — на предпоследний слог. Обе версии слышны; книжная норма — та, что выше."
    ],
    "audio":"В польском ударение стоит на предпоследнем слоге — это правило ты знаешь из курса чтения. Формы с by из него честно выпадают. Ударение остаётся там, где оно было в прошедшем времени, а bym, byś, by просто дописываются справа. Zrobił — zrobiłbym: ударение уехало на третий слог от конца. То же с wolałbym и pracowałabym. А в формах «мы» и «вы» ударение отходит ещё дальше, на четвёртый слог от конца: zrobilibyśmy. В быстрой живой речи многие всё же тянут ударение по общему правилу, на предпоследний слог. Обе версии слышны; книжная норма — та, что выше.",
    "table":{"rows":[
      ["zrobił → <b>zrobiłbym</b> <button class=\"play\" data-say=\"zrobiłbym\">🔊</button>","[зро́биу̯бым] — 3-й слог от конца"],
      ["wolał → <b>wolałbym</b> <button class=\"play\" data-say=\"wolałbym\">🔊</button>","[во́лау̯бым]"],
      ["chciała → <b>chciałabym</b> <button class=\"play\" data-say=\"chciałabym\">🔊</button>","[хчя́у̯абым]"],
      ["zrobili → <b>zrobilibyśmy</b> <button class=\"play\" data-say=\"zrobilibyśmy\">🔊</button>","[зро́билибыщмы] — 4-й слог от конца"]
    ],"star":0},
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что делает кусочек -by- с ударением.",
       "q":"Где ударение в слове <b>zrobiłbym</b>?","opts":["на zro-","на -bił-","на -bym"],"answer":0,
       "explain":"Кусочек -bym не считается: ударение остаётся там же, где в <b>zrobił</b> — на первом слоге."},
      {"type":"choice","q":"Правило предпоследнего слога в формах с -by-…",
       "opts":["работает как всегда","не работает: ударение сдвигается влево","отменяет ударение совсем"],"answer":1,
       "explain":"Это честное исключение: -by- ударение не притягивает, и оно уходит на третий (а во «мы»/«вы» — на четвёртый) слог от конца."}
    ],
    "mnemonic":"🎯 -by- к слогам не считается. Ударение сидит там же, где в chciał, zrobił, wolał."
   },
   {
    "eyebrow":"Правило 3 · Вежливая просьба",
    "title":"<em>Czy mógłbyś…?</em> — просьба, от которой трудно отказаться",
    "paras":[
      "Самое частое применение «бы» — просьба. Сравни: <b>Pomóż mi</b> («помоги мне») — приказ; <b>Czy mógłbyś mi pomóc?</b> — просьба, вежливая и мягкая.",
      "Формы от <b>móc</b>: мужчине — <b>mógłbyś</b>, женщине — <b>mogłabyś</b>. Заметь букву: в мужской форме есть ó (mógł), в женской её нет (mogła) — ровно как в прошедшем времени дня 3.",
      "К незнакомому человеку — с pan / pani и формой третьего лица: <b>Czy mógłby pan…?</b> / <b>Czy mogłaby pani…?</b> Та же рамка вежливости, что была весь A1.",
      "И два соседа по смыслу: <b>Wolałbym…</b> — «я бы предпочёл», мягкий способ не согласиться. <b>Nie chciałbym przeszkadzać</b> — «не хотел бы мешать». Отказ через «бы» звучит вдвое мягче."
    ],
    "audio":"Самое частое применение «бы» — просьба. Сравни: pomóż mi — «помоги мне», это приказ; czy mógłbyś mi pomóc — просьба, вежливая и мягкая. Формы от móc: мужчине — mógłbyś, женщине — mogłabyś. Заметь букву: в мужской форме есть ó, в женской её нет, ровно как в прошедшем времени дня три. К незнакомому человеку — с pan или pani и формой третьего лица: czy mógłby pan, czy mogłaby pani. И два соседа по смыслу: wolałbym — «я бы предпочёл», мягкий способ не согласиться; nie chciałbym przeszkadzać — «не хотел бы мешать». Отказ через «бы» звучит вдвое мягче.",
    "table":{"rows":[
      ["Czy <b>mógłbyś</b> mi pomóc? <button class=\"play\" data-say=\"Czy mógłbyś mi pomóc?\">🔊</button>","Ты не мог бы мне помочь? (к мужчине)"],
      ["Czy <b>mogłabyś</b> mi pomóc? <button class=\"play\" data-say=\"Czy mogłabyś mi pomóc?\">🔊</button>","Ты не могла бы мне помочь? (к женщине)"],
      ["Czy <b>mógłby pan</b> powtórzyć? <button class=\"play\" data-say=\"Czy mógłby pan powtórzyć?\">🔊</button>","Вы не могли бы повторить? (к мужчине)"],
      ["Czy <b>mogłaby pani</b> powtórzyć? <button class=\"play\" data-say=\"Czy mogłaby pani powtórzyć?\">🔊</button>","Вы не могли бы повторить? (к женщине)"],
      ["<b>Wolałbym</b> zostać w domu. <button class=\"play\" data-say=\"Wolałbym zostać w domu\">🔊</button>","Я бы предпочёл остаться дома."]
    ],"star":0},
    "examples":[
      {"ru":"Ты не мог бы открыть окно?","en":"Czy <b>mógłbyś</b> otworzyć okno?","say":"Czy mógłbyś otworzyć okno?"},
      {"ru":"Вы не могли бы говорить помедленнее?","en":"Czy <b>mogłaby pani</b> mówić wolniej?","gloss":"pani идёт с формой третьего лица","say":"Czy mogłaby pani mówić wolniej?"},
      {"ru":"Я хотел бы попросить счёт.","en":"<b>Chciałbym</b> prosić o rachunek.","say":"Chciałbym prosić o rachunek."},
      {"ru":"Я бы предпочла чай.","en":"<b>Wolałabym</b> herbatę.","say":"Wolałabym herbatę."}
    ],
    "mistakes":[
      {"wrong":"Czy mogłbyś mi pomóc?","right":"Czy <b>mógłbyś</b> mi pomóc?","why":"мужская форма от móc пишется с ó: mógł → mógłbyś. Без ó — женская основа mogła."},
      {"wrong":"Czy pan mógłbyś powtórzyć?","right":"Czy <b>mógłby pan</b> powtórzyć?","why":"с pan идёт форма третьего лица — mógłby, а не mógłbyś. То же вежливое «вы», что и в A1."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, к кому обращаются.",
       "q":"Просишь подругу о помощи —","opts":["Czy mógłbyś mi pomóc?","Czy mogłabyś mi pomóc?","Czy mogłaby pani mi pomóc?"],"answer":1,
       "explain":"К женщине на «ты» — <b>mogłabyś</b>. Первая форма — к мужчине, третья — вежливое «вы»."},
      {"type":"choice","q":"Вежливо просишь незнакомого мужчину повторить —",
       "opts":["Czy mógłby pan powtórzyć?","Czy mógłbyś pan powtórzyć?","Czy pan mógłbyście powtórzyć?"],"answer":0,
       "explain":"Pan — плюс форма третьего лица: <b>Czy mógłby pan powtórzyć?</b>"},
      {"type":"speak","howto":"Нажми микрофон и попроси вслух.",
       "target":"Czy mógłbyś mi pomóc?","sub":"ты не мог бы мне помочь?","want":"Czy mógłbyś mi pomóc?"}
    ],
    "mnemonic":"🙏 Приказ → просьба: Pomóż mi → Czy mógłbyś mi pomóc? Две буквы by, и тон другой."
   },
   {
    "eyebrow":"Правило 4 · Частица гуляет",
    "title":"<em>Ja bym chciał</em> — by умеет отходить",
    "paras":[
      "Частица не прибита к глаголу намертво. Она может отойти влево и сесть на другое слово во фразе — чаще всего на местоимение или наречие: <b>Ja bym chciał kawę.</b> <b>Chętnie bym poszła.</b>",
      "Важно одно: личное окончание всегда уходит вместе с ней, а глагол остаётся в чистой л-форме. Сказал <b>ja bym</b> — дальше только <b>chciał</b>, без окончания.",
      "Смысл при этом не меняется, меняется акцент: <b>Chciałbym…</b> — нейтрально, <b>Ja bym chciał…</b> — с лёгким «а вот я бы…».",
      "Совет на первое время: держись основной формы <b>chciałbym</b>. Вторую просто узнавай в чужой речи — её ты услышишь часто."
    ],
    "audio":"Частица не прибита к глаголу намертво. Она может отойти влево и сесть на другое слово во фразе — чаще всего на местоимение или наречие: ja bym chciał kawę, chętnie bym poszła. Важно одно: личное окончание всегда уходит вместе с ней, а глагол остаётся в чистой л-форме. Сказал ja bym — дальше только chciał, без окончания. Смысл при этом не меняется, меняется акцент: chciałbym — нейтрально, ja bym chciał — с лёгким «а вот я бы». Совет на первое время: держись основной формы chciałbym, а вторую просто узнавай в чужой речи.",
    "table":{"rows":[
      ["<b>Chciałbym</b> kawę. <button class=\"play\" data-say=\"Chciałbym kawę\">🔊</button>","Я хотел бы кофе. (основная форма)"],
      ["<b>Ja bym chciał</b> kawę. <button class=\"play\" data-say=\"Ja bym chciał kawę\">🔊</button>","А я бы хотел кофе. (частица отошла)"],
      ["<b>Chętnie bym poszła</b> do kina. <button class=\"play\" data-say=\"Chętnie bym poszła do kina\">🔊</button>","Я бы с удовольствием сходила в кино."],
      ["<b>Kto by</b> to zrobił? <button class=\"play\" data-say=\"Kto by to zrobił?\">🔊</button>","Кто бы это сделал?"]
    ],"star":-1},
    "examples":[
      {"ru":"А я бы предпочла остаться.","en":"<b>Ja bym wolała</b> zostać.","say":"Ja bym wolała zostać."},
      {"ru":"Я бы с удовольствием пошёл.","en":"<b>Chętnie bym poszedł</b>.","gloss":"iść в прошедшем — poszedł/poszła","say":"Chętnie bym poszedł."},
      {"ru":"Что бы ты сделал?","en":"Co <b>byś zrobił</b>?","say":"Co byś zrobił?"}
    ],
    "mistakes":[
      {"wrong":"Ja bym chciałem kawę.","right":"Ja <b>bym chciał</b> kawę.","why":"окончание ушло к частице (bym), значит глагол остаётся голым: chciał. Двух окончаний в одной фразе не бывает."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь, где сидит личное окончание.",
       "q":"Какой вариант правильный?","opts":["Ja bym chciałem kawę","Ja bym chciał kawę","Ja by chciałem kawę"],"answer":1,
       "explain":"Окончание -m уже стоит при частице (bym), поэтому глагол — чистая л-форма: <b>Ja bym chciał</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Ты не мог бы мне помочь?»</b> (к мужчине)","answer":"Czy mógłbyś mi pomóc"},
      {"type":"type","howto":"<b>Что делать:</b> напиши вежливую просьбу к женщине.",
       "q":"«Вы не могли бы повторить?» (к женщине)","accept":["czy mogłaby pani powtórzyć","czy mogłaby pani powtorzyc","czy moglaby pani powtórzyć","czy moglaby pani powtorzyc","mogłaby pani powtórzyć","moglaby pani powtorzyc"],"placeholder":"Czy mogłaby pani …"}
    ],
    "mnemonic":"🧲 Окончание всегда при by: chciałbym · ja bym chciał · chętnie bym poszła."
   }
 ],
 "dialogue":{
   "intro":"У Анны сломался ноутбук перед важной неделей. Послушай, как она просит Марека о помощи — и заметь, сколько раз в разговоре появляется by.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Marek, czy mógłbyś mi pomóc?","ru":"Марек, ты не мог бы мне помочь?",
      "words":[["mógłbyś","ты мог бы"],["pomóc","помочь"]]},
     {"who":"M","name":"Marek","side":"right","en":"Jasne. Co się stało?","ru":"Конечно. Что случилось?",
      "words":[["Jasne","конечно"],["Co się stało?","что случилось?"]]},
     {"who":"A","name":"Anna","side":"left","en":"Mój laptop nie działa. Chciałabym go naprawić dzisiaj.","ru":"Мой ноутбук не работает. Я хотела бы починить его сегодня.",
      "words":[["nie działa","не работает"],["naprawić","починить"]]},
     {"who":"M","name":"Marek","side":"right","en":"Mógłbym go zobaczyć wieczorem. Rano mam spotkanie.","ru":"Я мог бы посмотреть его вечером. Утром у меня встреча.",
      "words":[["Mógłbym","я мог бы"],["spotkanie","встреча"]]},
     {"who":"A","name":"Anna","side":"left","en":"Wolałabym przed piątą. Musiałabym potem wyjść.","ru":"Я бы предпочла до пяти. Мне пришлось бы потом уйти.",
      "words":[["Wolałabym","я предпочла бы"],["Musiałabym","мне пришлось бы"]]},
     {"who":"M","name":"Marek","side":"right","en":"Dobrze, przyjdę o czwartej. Czy mogłabyś przygotować kabel?","ru":"Хорошо, приду в четыре. Ты не могла бы приготовить кабель?",
      "words":[["przyjdę","приду"],["mogłabyś","ты могла бы"]]},
     {"who":"A","name":"Anna","side":"left","en":"Oczywiście. Nie chciałabym cię zatrzymywać długo.","ru":"Разумеется. Я не хотела бы тебя надолго задерживать.",
      "words":[["Oczywiście","разумеется"],["zatrzymywać","задерживать"]]},
     {"who":"M","name":"Marek","side":"right","en":"Spokojnie. Kawa by się przydała.","ru":"Спокойно. Кофе бы не помешал.",
      "words":[["Spokojnie","спокойно"],["by się przydała","пригодился бы"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — просьба к незнакомому человеку на улице. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Przepraszam, czy mógłby pan mi pomóc?","ru":"Извините, вы не могли бы мне помочь?"},
     {"who":"B","en":"Oczywiście. Słucham?","ru":"Разумеется. Слушаю?"},
     {"who":"A","en":"Chciałabym dojść na dworzec.","ru":"Я хотела бы дойти до вокзала."},
     {"who":"B","en":"Proszę iść prosto, a potem w lewo.","ru":"Идите прямо, а потом налево."},
     {"who":"A","en":"Dziękuję bardzo!","ru":"Большое спасибо!"}
   ]
 },
 "vocab":{
   "intro":"Слова дня — вежливая половина польского языка.",
   "items":[
     {"en":"chciałbym / chciałabym","ru":"я хотел бы / я хотела бы","ex":"Chciałabym porozmawiać."},
     {"en":"wolałbym / wolałabym","ru":"я бы предпочёл / предпочла","ex":"Wolałbym zostać w domu."},
     {"en":"mógłbyś / mogłabyś","ru":"ты мог бы / ты могла бы","ex":"Czy mógłbyś otworzyć okno?"},
     {"en":"mógłby pan / mogłaby pani","ru":"Вы не могли бы (мужчине / женщине)","ex":"Czy mogłaby pani powtórzyć?"},
     {"en":"pomóc","ru":"помочь","ex":"Czy mógłbyś mi pomóc?"},
     {"en":"powtórzyć","ru":"повторить","ex":"Proszę powtórzyć."},
     {"en":"przeszkadzać","ru":"мешать","ex":"Nie chciałbym przeszkadzać."},
     {"en":"zarezerwować","ru":"забронировать","ex":"Chcielibyśmy zarezerwować stolik."},
     {"en":"spotkanie","ru":"встреча","ex":"Rano mam spotkanie."},
     {"en":"chętnie","ru":"охотно, с удовольствием","ex":"Chętnie bym poszła."},
     {"en":"oczywiście","ru":"разумеется, конечно","ex":"Oczywiście, pomogę."},
     {"en":"przydać się","ru":"пригодиться","ex":"Kawa by się przydała."}
   ]
 },
 "drag":{
   "intro":"Маленькая игра на память. Перетащи польскую форму к её переводу.",
   "pairs":[["chciałabym","я хотела бы"],["mógłbyś","ты мог бы"],["wolałbym","я бы предпочёл"],["mogłaby pani","Вы могли бы"]]
 },
 "reading":{
   "intro":"Прочитай и послушай короткую записку Анны. Считай по дороге, сколько раз в ней появляется by.",
   "title":"Grzeczna prośba",
   "sentences":["Marek, mam do ciebie prośbę.","Chciałabym cię o coś poprosić.","Czy mógłbyś przyjść do mnie o czwartej?","Mój laptop nie działa i nie wiem, co robić.","Wolałabym nie iść do serwisu — to długo trwa.","Nie chciałabym ci przeszkadzać.","Jeśli to trudne, powiedz od razu.","Chętnie bym zrobiła ci kawę.","Moglibyśmy też razem zjeść kolację.","Bardzo bym się ucieszyła."],
   "translation":"Марек, у меня к тебе просьба. Я хотела бы тебя кое о чём попросить. Ты не мог бы прийти ко мне в четыре? Мой ноутбук не работает, и я не знаю, что делать. Я бы предпочла не идти в сервис — это долго. Не хотела бы тебе мешать. Если это сложно, скажи сразу. Я бы с удовольствием сделала тебе кофе. Мы могли бы и вместе поужинать. Я бы очень обрадовалась."
 },
 "quiz":{
   "intro":"Пять вопросов — и самая вежливая частица польского твоя.",
   "items":[
     {"q":"1. Марек говорит «Я хотел бы кофе» —","opts":["Chciałabym kawę","Chciałbym kawę","Chciałem bym kawę"],"answer":1,
      "explain":"Мужчина о себе — <b>chciałbym</b>. Форма собирается из голой л-формы chciał плюс bym."},
     {"q":"2. «Ты не могла бы мне помочь?» —","opts":["Czy mógłbyś mi pomóc?","Czy mogłabyś mi pomóc?","Czy mogłaby pani mi pomóc?"],"answer":1,
      "explain":"К женщине на «ты» — <b>mogłabyś</b>. Первая форма — к мужчине, третья — вежливое «вы»."},
     {"q":"3. Где ударение в <b>wolałbym</b>?","opts":["на wo-","на -łbym","на -lał-"],"answer":0,
      "explain":"Кусочек -bym к слогам не считается: ударение остаётся там же, где в <b>wolał</b> — на первом слоге."},
     {"q":"4. Какой вариант верный?","opts":["Ja bym chciałem zostać","Ja bym chciał zostać","Ja by chciałem zostać"],"answer":1,
      "explain":"Личное окончание уже при частице (bym), поэтому глагол остаётся голым: <b>Ja bym chciał</b>."},
     {"q":"5. «Мы хотели бы» — Анна с Мареком —","opts":["Chciałybyśmy","Chcielibyśmy","Chcieliby"],"answer":1,
      "explain":"В компании есть мужчина, значит мужско-личная основа: <b>chcielibyśmy</b>."}
   ]
 },
 "essay":{
   "intro":"Попробуй сегодня сказать не «дай», а «не мог бы ты…».",
   "prompt":"Напиши три вежливые просьбы: соседу, продавцу и другу. И одно предложение о том, чего бы ты хотел(а) сегодня вечером.",
   "hint":"Опора: Czy mógłbyś / mogłabyś… · Czy mógłby pan / mogłaby pani… · Chciał(a)bym… · Wolał(a)bym…",
   "example":"Czy mógłbyś zamknąć okno? Czy mogłaby pani powtórzyć cenę? Marek, czy mógłbyś przyjść o czwartej? Wieczorem chciałabym odpocząć i obejrzeć film."
 }
},
"23": {
 "day":23,"week":"04",
 "themeRu":"Думаю, что…",
 "themeEn":"Wyrażanie opinii",
 "intro":"Марек уверен, что в большом городе жить лучше. Анна с ним не согласна — и у неё есть аргументы. Сегодня ты получишь язык спора: как сказать «я думаю, что…», «по-моему», «я с тобой согласен» и «ты прав». И заодно обезвредим одну ловушку, на которой спотыкаются почти все: <b>mieć rację</b>.",
 "introAudio":"Марек уверен, что в большом городе жить лучше. Анна с ним не согласна — и у неё есть аргументы. Сегодня ты получишь язык спора: как сказать «я думаю, что», «по-моему», «я с тобой согласен» и «ты прав». И заодно обезвредим одну ловушку, на которой спотыкаются почти все: mieć rację.",
 "goals":[
   "Высказать мнение: <b>myślę / uważam / sądzę, że…</b>",
   "Сказать «по-моему» двумя способами: <b>moim zdaniem</b>, <b>według mnie</b>",
   "Согласиться и не согласиться: <b>zgadzam się z</b> + творительный",
   "Сказать «ты прав» без ловушки: <b>masz rację</b> / <b>nie masz racji</b>"
 ],
 "learned":[
   "Высказал(а) мнение: myślę, uważam, sądzę, że…",
   "Сказал(а) «по-моему» двумя способами: moim zdaniem, według mnie",
   "Согласился(лась) и не согласился(лась): zgadzam się z плюс творительный",
   "Сказал(а) «ты прав» без ловушки: masz rację / nie masz racji"
 ],
 "review":{
   "intro":"Вчерашняя вежливость — на разминку. Проверим, куда клеится by, и добавим вопрос про вид: он всегда рядом.",
   "introAudio":"Вчерашняя вежливость — на разминку. Проверим, куда клеится by, и добавим вопрос про вид: он всегда рядом.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, из чего собирается «бы»-форма.",
      "q":"Анна: «Я хотела бы остаться» —","opts":["Chciałabym zostać","Chciałbym zostać","Chciałam bym zostać"],"answer":0,
      "explain":"Женщина о себе — <b>chciałabym</b>: голая л-форма chciała плюс bym."},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, к кому обращаются.",
      "q":"Вежливо женщине: «Вы не могли бы помочь?» —","opts":["Czy mogłabyś pani pomóc?","Czy mogłaby pani pomóc?","Czy mógłby pani pomóc?"],"answer":1,
      "explain":"Pani идёт с формой третьего лица: <b>Czy mogłaby pani pomóc?</b>"},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри на маркер времени.",
      "q":"Wczoraj cały wieczór ___ list. (пишу — писал весь вечер)","opts":["napisałem","pisałem","piszę"],"answer":1,
      "explain":"«Целый вечер» — это процесс, значит несовершенный вид: <b>pisałem</b>. Napisałem — «написал», результат."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Я бы предпочёл остаться дома»</b>","answer":"Wolałbym zostać w domu"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Три глагола мнения",
    "title":"<em>Myślę</em>, <em>uważam</em>, <em>sądzę</em>, <b>że</b>…",
    "paras":[
      "Три способа начать мнение — и все три работают одинаково: глагол, запятая, <b>że</b>, дальше обычное предложение. <b>Myślę, że masz rację.</b> <b>Uważam, że to dobry pomysł.</b> <b>Sądzę, że jest za drogo.</b>",
      "Оттенки лёгкие: <b>myślę</b> — самое повседневное «думаю»; <b>uważam</b> — «считаю», чуть твёрже, с позицией; <b>sądzę</b> — «полагаю», чуть книжнее. В разговоре берут <b>myślę</b> и <b>uważam</b>.",
      "Запятая перед że обязательна — как русская запятая перед «что». Здесь ничего нового учить не надо: правило то же.",
      "Ловушка внутри слова: <b>uważać</b> значит и «считать», и «быть осторожным». <b>Uważam, że…</b> — «я считаю, что…», а короткое <b>Uważaj!</b> — «Осторожно!». Контекст разводит их мгновенно."
    ],
    "audio":"Три способа начать мнение — и все три работают одинаково: глагол, запятая, że, дальше обычное предложение. Myślę, że masz rację. Uważam, że to dobry pomysł. Sądzę, że jest za drogo. Оттенки лёгкие: myślę — самое повседневное «думаю»; uważam — «считаю», чуть твёрже, с позицией; sądzę — «полагаю», чуть книжнее. В разговоре берут myślę и uważam. Запятая перед że обязательна — как русская запятая перед «что». Ловушка внутри слова: uważać значит и «считать», и «быть осторожным». Uważam, że — «я считаю, что», а короткое uważaj — «осторожно».",
    "table":{"rows":[
      ["<b>Myślę, że</b>… <button class=\"play\" data-say=\"Myślę, że masz rację\">🔊</button>","Я думаю, что… (повседневное)"],
      ["<b>Uważam, że</b>… <button class=\"play\" data-say=\"Uważam, że to dobry pomysł\">🔊</button>","Я считаю, что… (с позицией)"],
      ["<b>Sądzę, że</b>… <button class=\"play\" data-say=\"Sądzę, że jest za drogo\">🔊</button>","Я полагаю, что… (чуть книжнее)"],
      ["<b>Wydaje mi się, że</b>… <button class=\"play\" data-say=\"Wydaje mi się, że tak\">🔊</button>","Мне кажется, что… (осторожно)"],
      ["<b>Uważaj!</b> <button class=\"play\" data-say=\"Uważaj!\">🔊</button>","Осторожно! (то же слово, другой смысл)"]
    ],"star":0},
    "examples":[
      {"ru":"Я думаю, что это хорошая идея.","en":"<b>Myślę, że</b> to dobry pomysł.","say":"Myślę, że to dobry pomysł."},
      {"ru":"Я считаю, что он не прав.","en":"<b>Uważam, że</b> on nie ma racji.","say":"Uważam, że on nie ma racji."},
      {"ru":"Мне кажется, что будет дождь.","en":"<b>Wydaje mi się, że</b> będzie padać.","gloss":"будущее сложное — из дня 8","say":"Wydaje mi się, że będzie padać."},
      {"ru":"Я думаю о тебе.","en":"<b>Myślę o tobie.</b>","gloss":"«думать о» — предложный, как в русском","say":"Myślę o tobie."}
    ],
    "mistakes":[
      {"wrong":"Myślę że to dobry pomysł.","right":"Myślę<b>,</b> że to dobry pomysł.","why":"перед że запятая обязательна — ровно как перед русским «что»."},
      {"wrong":"Myślę, że tak myślę.","right":"<b>Myślę, że</b> tak.","why":"короткий ответ достаточен: Myślę, że tak — «думаю, что да». Повторять глагол не нужно."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> проверь знак перед że.",
       "q":"Какой вариант записан правильно?","opts":["Myślę że masz rację","Myślę, że masz rację","Myślę, ze masz rację"],"answer":1,
       "explain":"Запятая перед że обязательна, и пишется он через ż: <b>Myślę, że masz rację.</b>"},
      {"type":"choice","q":"Что значит <b>Uważaj!</b>?",
       "opts":["Я считаю!","Осторожно!","Согласен!"],"answer":1,
       "explain":"Короткое <b>Uważaj!</b> — «Осторожно!». А «я считаю, что…» — Uważam, że…"},
      {"type":"type","howto":"<b>Что делать:</b> напиши фразу целиком, с запятой.",
       "q":"«Я думаю, что это хорошая идея»","accept":["myślę, że to dobry pomysł","myśle, że to dobry pomysł","mysle ze to dobry pomysl","myślę że to dobry pomysł","mysle, ze to dobry pomysl"],"placeholder":"Myślę, że …"}
    ],
    "mnemonic":"💭 myślę · uważam · sądzę + запятая + że. Три двери в одну комнату."
   },
   {
    "eyebrow":"Правило 2 · По-моему",
    "title":"<em>Moim zdaniem</em> и <em>według mnie</em>",
    "paras":[
      "Есть способ высказать мнение без глагола вообще — коротким оборотом в начале фразы. <b>Moim zdaniem to za drogo.</b> <b>Według mnie to dobry film.</b>",
      "<b>Zdanie</b> — «мнение», и оборот стоит в творительном падеже: <b>moim zdaniem</b>, <b>twoim zdaniem</b>, <b>jej zdaniem</b>, <b>naszym zdaniem</b>. Форма застывшая, её просто берут целиком.",
      "<b>Według</b> — предлог, и после него идёт родительный падеж: <b>według mnie</b>, <b>według ciebie</b>, <b>według Anny</b>, <b>według lekarza</b>. С людьми это «по мнению кого-то».",
      "Полезная мелочь: <b>zdanie</b> в польском значит ещё и «предложение» — то, что заканчивается точкой. Одно слово, два значения; какое из них, всегда видно по фразе."
    ],
    "audio":"Есть способ высказать мнение без глагола вообще — коротким оборотом в начале фразы. Moim zdaniem to za drogo. Według mnie to dobry film. Zdanie — «мнение», и оборот стоит в творительном падеже: moim zdaniem, twoim zdaniem, jej zdaniem, naszym zdaniem. Форма застывшая, её просто берут целиком. Według — предлог, и после него идёт родительный падеж: według mnie, według ciebie, według Anny, według lekarza. Полезная мелочь: zdanie в польском значит ещё и «предложение» — то, что заканчивается точкой.",
    "table":{"rows":[
      ["<b>moim zdaniem</b> <button class=\"play\" data-say=\"moim zdaniem\">🔊</button>","по-моему (творительный)"],
      ["<b>twoim zdaniem</b> <button class=\"play\" data-say=\"twoim zdaniem\">🔊</button>","по-твоему"],
      ["<b>jej zdaniem</b> <button class=\"play\" data-say=\"jej zdaniem\">🔊</button>","по её мнению"],
      ["<b>według mnie</b> <button class=\"play\" data-say=\"według mnie\">🔊</button>","по-моему (родительный после według)"],
      ["<b>według Anny</b> <button class=\"play\" data-say=\"według Anny\">🔊</button>","по мнению Анны"]
    ],"star":-1},
    "examples":[
      {"ru":"По-моему, это слишком дорого.","en":"<b>Moim zdaniem</b> to za drogo.","say":"Moim zdaniem to za drogo."},
      {"ru":"По-твоему, кто прав?","en":"<b>Twoim zdaniem</b> kto ma rację?","say":"Twoim zdaniem kto ma rację?"},
      {"ru":"По мнению Анны, поезд лучше.","en":"<b>Według Anny</b> pociąg jest lepszy.","gloss":"после według — родительный","say":"Według Anny pociąg jest lepszy."},
      {"ru":"По-моему, ты прав.","en":"<b>Według mnie</b> masz rację.","say":"Według mnie masz rację."}
    ],
    "mistakes":[
      {"wrong":"Według ja to za drogo.","right":"<b>Według mnie</b> to za drogo.","why":"после według идёт родительный падеж: mnie, ciebie, Anny."},
      {"wrong":"Moje zdanie to za drogo.","right":"<b>Moim zdaniem</b> to za drogo.","why":"оборот застыл в творительном: moim zdaniem. «Moje zdanie» — это уже подлежащее, другая фраза."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после według.",
       "q":"«По-моему, это дорого» —","opts":["Według ja to drogo","Według mnie to drogo","Według mi to drogo"],"answer":1,
       "explain":"После według — родительный падеж: <b>według mnie</b>."},
      {"type":"choice","q":"«По мнению Анны» —",
       "opts":["Według Anna","Według Annie","Według Anny"],"answer":2,
       "explain":"Родительный от Anna — <b>Anny</b>: według Anny."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«По-моему, это хорошая идея»</b>","answer":"Moim zdaniem to dobry pomysł"}
    ],
    "mnemonic":"🗣️ moim zdaniem (творительный) = według mnie (родительный). Один смысл, две рамки."
   },
   {
    "eyebrow":"Правило 3 · Согласие",
    "title":"<em>Zgadzam się z</em> + творительный",
    "paras":[
      "«Я согласен с тобой» по-польски устроено ровно как по-русски: <b>Zgadzam się z tobą.</b> Предлог <b>z</b> и творительный падеж — падеж, знакомый ещё с A1 по профессиям.",
      "С людьми: <b>z tobą</b>, <b>z Anną</b>, <b>z Markiem</b>, <b>z nim</b>, <b>z nią</b>, <b>z wami</b>. С мыслью: <b>zgadzam się z tym</b> — «согласен с этим».",
      "Отрицание — просто <b>nie</b> впереди: <b>Nie zgadzam się z tobą.</b> Падеж при этом не меняется — родительный отрицания сюда не приходит, потому что дополнение здесь идёт с предлогом.",
      "Мягкий вариант несогласия, который звучит куда лучше резкого «нет»: <b>Nie do końca się zgadzam</b> — «не совсем согласен». И полное согласие: <b>Dokładnie!</b>, <b>Właśnie!</b> — «вот именно»."
    ],
    "audio":"«Я согласен с тобой» по-польски устроено ровно как по-русски: zgadzam się z tobą. Предлог z и творительный падеж — падеж, знакомый ещё с A1 по профессиям. С людьми: z tobą, z Anną, z Markiem, z nim, z nią, z wami. С мыслью: zgadzam się z tym — согласен с этим. Отрицание — просто nie впереди: nie zgadzam się z tobą. Падеж при этом не меняется. Мягкий вариант несогласия, который звучит куда лучше резкого «нет»: nie do końca się zgadzam — не совсем согласен. И полное согласие: dokładnie, właśnie — вот именно.",
    "table":{"rows":[
      ["Zgadzam się <b>z tobą</b>. <button class=\"play\" data-say=\"Zgadzam się z tobą\">🔊</button>","Я согласен(на) с тобой."],
      ["Zgadzam się <b>z Markiem</b>. <button class=\"play\" data-say=\"Zgadzam się z Markiem\">🔊</button>","Я согласен(на) с Мареком."],
      ["Zgadzam się <b>z tym</b>. <button class=\"play\" data-say=\"Zgadzam się z tym\">🔊</button>","Я согласен(на) с этим."],
      ["<b>Nie zgadzam się</b> z tobą. <button class=\"play\" data-say=\"Nie zgadzam się z tobą\">🔊</button>","Я с тобой не согласен(на)."],
      ["<b>Nie do końca</b> się zgadzam. <button class=\"play\" data-say=\"Nie do końca się zgadzam\">🔊</button>","Не совсем согласен(на)."],
      ["<b>Dokładnie!</b> <button class=\"play\" data-say=\"Dokładnie!\">🔊</button>","Вот именно!"]
    ],"star":0},
    "examples":[
      {"ru":"Я полностью с тобой согласна.","en":"Całkowicie się <b>z tobą</b> zgadzam.","say":"Całkowicie się z tobą zgadzam."},
      {"ru":"Я не согласен с Анной.","en":"Nie zgadzam się <b>z Anną</b>.","say":"Nie zgadzam się z Anną."},
      {"ru":"С этим я согласен.","en":"<b>Z tym</b> się zgadzam.","gloss":"się умеет стоять и перед глаголом","say":"Z tym się zgadzam."}
    ],
    "mistakes":[
      {"wrong":"Zgadzam się z ciebie.","right":"Zgadzam się <b>z tobą</b>.","why":"после z — творительный: tobą. Ciebie — родительный или винительный, для другой рамки."},
      {"wrong":"Zgadzam z tobą.","right":"Zgadzam <b>się</b> z tobą.","why":"глагол возвратный: się обязательно. Оно может стоять до или после глагола, но исчезнуть не может."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после z.",
       "q":"«Я согласна с тобой» —","opts":["Zgadzam się z ciebie","Zgadzam się z tobą","Zgadzam się z ty"],"answer":1,
       "explain":"z плюс творительный: <b>z tobą</b>. Как русское «с тобой»."},
      {"type":"choice","q":"«Я не согласен с Мареком» —",
       "opts":["Nie zgadzam się z Marek","Nie zgadzam się z Markiem","Nie zgadzam się z Marka"],"answer":1,
       "explain":"Творительный от Marek — <b>Markiem</b>. После k всегда -kiem, как в informatykiem."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Nie do końca się zgadzam.","sub":"не совсем согласен(на)","want":"Nie do końca się zgadzam."}
    ],
    "mnemonic":"🤝 zgadzam się Z + творительный — как русское «согласен С кем-то». Предлог тот же, падеж тот же."
   },
   {
    "eyebrow":"Правило 4 · Ловушка дня",
    "title":"<em>mieć rację</em> — «быть правым», а не «иметь рацию»",
    "paras":[
      "Слово <b>racja</b> выглядит знакомо и сбивает с толку. Но польская <b>racja</b> — это правота, а не рация. Радиостанция в руке — <b>krótkofalówka</b>.",
      "Правоту в польском не «имеют» в русском смысле — с ней строят целую конструкцию: <b>Masz rację</b> = «ты прав(а)». <b>Mam rację</b> = «я прав(а)». <b>Marek ma rację.</b>",
      "В отрицании включается знакомое правило: винительный падеж меняется на родительный. <b>Nie masz racji.</b> <b>On nie ma racji.</b> Ровно та же механика, что в <b>nie mam czasu</b> из A1.",
      "И короткое подтверждение в разговоре: <b>Racja!</b> — «верно!», «точно!». Это, пожалуй, самое частое слово в польском споре."
    ],
    "audio":"Слово racja выглядит знакомо и сбивает с толку. Но польская racja — это правота, а не рация. Радиостанция в руке — krótkofalówka. Правоту в польском не имеют в русском смысле — с ней строят целую конструкцию: masz rację — ты прав; mam rację — я прав; Marek ma rację. В отрицании включается знакомое правило: винительный падеж меняется на родительный. Nie masz racji. On nie ma racji. Ровно та же механика, что в nie mam czasu из A1. И короткое подтверждение в разговоре: racja — верно, точно.",
    "table":{"rows":[
      ["<b>Masz rację.</b> <button class=\"play\" data-say=\"Masz rację\">🔊</button>","Ты прав(а)."],
      ["<b>Mam rację.</b> <button class=\"play\" data-say=\"Mam rację\">🔊</button>","Я прав(а)."],
      ["<b>Nie masz racji.</b> <button class=\"play\" data-say=\"Nie masz racji\">🔊</button>","Ты не прав(а). (отрицание → родительный)"],
      ["<b>Kto ma rację?</b> <button class=\"play\" data-say=\"Kto ma rację?\">🔊</button>","Кто прав?"],
      ["<b>Racja!</b> <button class=\"play\" data-say=\"Racja!\">🔊</button>","Верно! Точно!"],
      ["krótkofalówka <button class=\"play\" data-say=\"krótkofalówka\">🔊</button>","рация (прибор)"]
    ],"star":2},
    "examples":[
      {"ru":"Ты прав, это слишком дорого.","en":"<b>Masz rację</b>, to za drogo.","say":"Masz rację, to za drogo."},
      {"ru":"Мне кажется, она права.","en":"Wydaje mi się, że ona <b>ma rację</b>.","say":"Wydaje mi się, że ona ma rację."},
      {"ru":"Ты не прав — и я это докажу.","en":"<b>Nie masz racji</b> — zaraz to udowodnię.","gloss":"udowodnię — «докажу», совершенный вид","say":"Nie masz racji — zaraz to udowodnię."}
    ],
    "mistakes":[
      {"wrong":"Jesteś prawy.","right":"<b>Masz rację.</b>","why":"«ты прав» по-польски — через mieć rację. Prawy значит «правый» в смысле стороны: prawa ręka."},
      {"wrong":"Nie masz rację.","right":"Nie masz <b>racji</b>.","why":"отрицание переводит винительный в родительный: rację → racji. Как nie mam czasu."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что значит racja.",
       "q":"<b>Masz rację</b> значит —","opts":["у тебя есть рация","ты прав(а)","ты по правой стороне"],"answer":1,
       "explain":"<b>Mieć rację</b> — «быть правым». Рация-прибор — krótkofalówka."},
      {"type":"choice","q":"«Ты не прав» —",
       "opts":["Nie masz rację","Nie masz racji","Nie jesteś prawy"],"answer":1,
       "explain":"Отрицание требует родительного: <b>nie masz racji</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши короткий ответ в споре.",
       "q":"«Ты прав, это слишком дорого»","accept":["masz rację, to za drogo","masz racje, to za drogo","masz rację to za drogo","masz racje to za drogo"],"placeholder":"Masz rację, …"}
    ],
    "mnemonic":"📻 racja = правота. Рация в руке — krótkofalówka. Masz rację! / Nie masz racji!"
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек спорят: большой город или маленький. Никто не побеждает — но послушай, как звучит вежливый спор по-польски.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Uważam, że w dużym mieście żyje się lepiej.","ru":"Я считаю, что в большом городе живётся лучше.",
      "words":[["Uważam, że","я считаю, что"],["żyje się","живётся"]]},
     {"who":"A","name":"Anna","side":"left","en":"Nie zgadzam się z tobą. Moim zdaniem to zależy.","ru":"Я с тобой не согласна. По-моему, это зависит.",
      "words":[["Nie zgadzam się","я не согласна"],["zależy","зависит"]]},
     {"who":"M","name":"Marek","side":"right","en":"Od czego? W mieście jest praca, teatr, wszystko.","ru":"От чего? В городе есть работа, театр, всё.",
      "words":[["Od czego?","от чего?"],["wszystko","всё"]]},
     {"who":"A","name":"Anna","side":"left","en":"Racja, ale mieszkania są droższe niż na wsi.","ru":"Верно, но квартиры дороже, чем в деревне.",
      "words":[["Racja","верно"],["droższe","дороже"]]},
     {"who":"M","name":"Marek","side":"right","en":"Masz rację. Nie pomyślałem o tym.","ru":"Ты права. Я об этом не подумал.",
      "words":[["Masz rację","ты права"],["Nie pomyślałem","я не подумал"]]},
     {"who":"A","name":"Anna","side":"left","en":"Według mnie najlepiej jest mieszkać blisko miasta.","ru":"По-моему, лучше всего жить рядом с городом.",
      "words":[["Według mnie","по-моему"],["blisko","близко от"]]},
     {"who":"M","name":"Marek","side":"right","en":"Z tym się zgadzam. To dobry pomysł.","ru":"С этим я согласен. Это хорошая идея.",
      "words":[["Z tym się zgadzam","с этим я согласен"],["pomysł","идея"]]},
     {"who":"A","name":"Anna","side":"left","en":"No właśnie. Sądzę, że kiedyś tak zrobimy.","ru":"Вот именно. Полагаю, когда-нибудь так и сделаем.",
      "words":[["No właśnie","вот именно"],["kiedyś","когда-нибудь"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — спор о фильме за две минуты. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Myślę, że ten film jest nudny.","ru":"Я думаю, что этот фильм скучный."},
     {"who":"B","en":"Nie zgadzam się. Moim zdaniem jest świetny.","ru":"Я не согласен. По-моему, он отличный."},
     {"who":"A","en":"Muzyka jest dobra, tu masz rację.","ru":"Музыка хорошая, тут ты прав."},
     {"who":"B","en":"Właśnie! A koniec?","ru":"Вот именно! А концовка?"},
     {"who":"A","en":"Koniec jest za długi. Ale to tylko moje zdanie.","ru":"Концовка слишком длинная. Но это только моё мнение."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — всё, что нужно, чтобы иметь мнение и остаться в хороших отношениях.",
   "items":[
     {"en":"myślę, że…","ru":"я думаю, что…","ex":"Myślę, że masz rację."},
     {"en":"uważam, że…","ru":"я считаю, что…","ex":"Uważam, że to za drogo."},
     {"en":"sądzę, że…","ru":"я полагаю, что…","ex":"Sądzę, że wrócą jutro."},
     {"en":"wydaje mi się","ru":"мне кажется","ex":"Wydaje mi się, że będzie padać."},
     {"en":"moim zdaniem","ru":"по-моему","ex":"Moim zdaniem to dobry pomysł."},
     {"en":"według mnie","ru":"по-моему, на мой взгляд","ex":"Według mnie pociąg jest lepszy."},
     {"en":"zgadzam się z…","ru":"я согласен(на) с…","ex":"Zgadzam się z tobą."},
     {"en":"mieć rację","ru":"быть правым","ex":"Masz rację, to za drogo."},
     {"en":"racja!","ru":"верно! точно!","ex":"Racja, tak było."},
     {"en":"pomysł","ru":"идея, задумка","ex":"To dobry pomysł."},
     {"en":"zdanie","ru":"мнение; предложение","ex":"To tylko moje zdanie."},
     {"en":"uważaj!","ru":"осторожно!","ex":"Uważaj, samochód!"}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу.",
   "pairs":[["Masz rację","ты прав(а)"],["Moim zdaniem","по-моему"],["Nie zgadzam się","я не согласен"],["Uważaj!","осторожно!"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, что Анна думает о жизни в большом городе. Обрати внимание на запятую перед że.",
   "title":"Moje zdanie o dużym mieście",
   "sentences":["Marek uważa, że w dużym mieście żyje się lepiej.","Nie do końca się z nim zgadzam.","Myślę, że duże miasto ma swoje plusy i minusy.","Według mnie plusem jest praca i teatr.","Minusem są ceny — mieszkania są tam znacznie droższe.","Moim zdaniem najlepiej jest mieszkać blisko miasta.","Marek mówi, że to za daleko od pracy.","Może ma rację, ale ja lubię ciszę.","Sądzę, że każdy musi wybrać sam.","To tylko moje zdanie — a jakie jest twoje?"],
   "translation":"Марек считает, что в большом городе живётся лучше. Я не совсем с ним согласна. Я думаю, что у большого города есть свои плюсы и минусы. По-моему, плюс — это работа и театр. Минус — цены: квартиры там значительно дороже. По-моему, лучше всего жить рядом с городом. Марек говорит, что это слишком далеко от работы. Может быть, он прав, но я люблю тишину. Полагаю, каждый должен выбрать сам. Это только моё мнение — а какое твоё?"
 },
 "quiz":{
   "intro":"Пять вопросов — и в польском споре ты не потеряешься.",
   "items":[
     {"q":"1. «Ты прав» —","opts":["Jesteś prawy","Masz rację","Masz racji"],"answer":1,
      "explain":"Правоту в польском строят через <b>mieć rację</b>: Masz rację."},
     {"q":"2. «Ты не прав» —","opts":["Nie masz rację","Nie masz racji","Nie jesteś racja"],"answer":1,
      "explain":"Отрицание переводит винительный в родительный: <b>nie masz racji</b>."},
     {"q":"3. «Я согласна с Мареком» —","opts":["Zgadzam się z Markiem","Zgadzam się z Marek","Zgadzam się Markiem"],"answer":0,
      "explain":"z плюс творительный: <b>z Markiem</b>. И się не пропадает."},
     {"q":"4. «По мнению Анны» —","opts":["Według Anna","Według Anny","Anny zdanie"],"answer":1,
      "explain":"После według — родительный: <b>według Anny</b>."},
     {"q":"5. Как записать «Я думаю, что это дорого»?","opts":["Myślę że to drogo","Myślę, że to drogo","Myśle, ze to drogo"],"answer":1,
      "explain":"Запятая перед że обязательна, и пишется он через ż: <b>Myślę, że to drogo.</b>"}
   ]
 },
 "essay":{
   "intro":"Сегодня твоя очередь высказаться. Спорить не обязательно — достаточно иметь мнение.",
   "prompt":"Напиши, что лучше — жить в большом городе или в маленьком. Четыре-пять предложений: своё мнение, один аргумент, одно возражение и вывод.",
   "hint":"Опора: Myślę, że… · Moim zdaniem… · Według mnie… · Masz rację, ale… · Nie zgadzam się z tym.",
   "example":"Moim zdaniem małe miasto jest lepsze. Myślę, że jest tam ciszej i taniej. Marek uważa, że w dużym mieście jest więcej pracy — i ma rację. Ale według mnie cisza jest ważniejsza niż teatr. Sądzę, że najlepiej mieszkać blisko dużego miasta."
 }
},
"24": {
 "day":24,"week":"04",
 "themeRu":"Учёба",
 "themeEn":"Edukacja",
 "intro":"Экзамен у Анны в пятницу, и всю неделю она сидит над учебниками. Отличный повод разобрать самое коварное место школьной темы: <b>uczyć się</b> и <b>studiować</b> просят разные падежи, а пара <b>zdawać / zdać</b> — это подарок, который польский делает тебе бесплатно.",
 "introAudio":"Экзамен у Анны в пятницу, и всю неделю она сидит над учебниками. Отличный повод разобрать самое коварное место школьной темы: uczyć się и studiować просят разные падежи, а пара zdawać, zdać — это подарок, который польский делает тебе бесплатно.",
 "goals":[
   "Сказать, что ты учишь: <b>uczę się polskiego</b> (+ родительный)",
   "Сказать, где и что изучаешь: <b>studiuję prawo</b> (+ винительный)",
   "Различать <b>zdawać</b> (сдавать) и <b>zdać</b> (сдать) — вид работает как в русском",
   "Говорить о школе и учёбе: szkoła, studia, zajęcia, ocena, egzamin"
 ],
 "learned":[
   "Сказал(а), что учишь: uczę się polskiego, с родительным падежом",
   "Сказал(а), где и что изучаешь: studiuję prawo, с винительным",
   "Различил(а) zdawać (сдавать) и zdać (сдать)",
   "Поговорил(а) о школе и учёбе: szkoła, studia, zajęcia, ocena, egzamin"
 ],
 "review":{
   "intro":"Сначала вчерашние мнения — они пригодятся сегодня же, когда придётся сказать, какой предмет самый трудный. И один вопрос про вид.",
   "introAudio":"Сначала вчерашние мнения — они пригодятся сегодня же, когда придётся сказать, какой предмет самый трудный. И один вопрос про вид.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни вчерашнюю ловушку.",
      "q":"«Ты прав» —","opts":["Jesteś prawy","Masz rację","Masz racja"],"answer":1,
      "explain":"<b>Masz rację</b>. Racja — это правота; рация-прибор называется krótkofalówka."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после z.",
      "q":"«Я согласна с тобой» —","opts":["Zgadzam się z tobą","Zgadzam się z ciebie","Zgadzam z tobą"],"answer":0,
      "explain":"z плюс творительный — <b>z tobą</b>, и возвратное się обязательно."},
     {"type":"choice","howto":"<b>Что делать:</b> ищи маркер результата.",
      "q":"Już ___ list i wysłałem go. (написал и отправил)","opts":["pisałem","napisałem","piszę"],"answer":1,
      "explain":"Слово już и второй результат рядом требуют совершенного вида: <b>napisałem</b> — «написал»."},
     {"type":"type","howto":"<b>Что делать:</b> напиши фразу с оборотом «по-моему».",
      "q":"«По-моему, это хорошая идея»","accept":["moim zdaniem to dobry pomysł","moim zdaniem to dobry pomysl","według mnie to dobry pomysł","wedlug mnie to dobry pomysl"],"placeholder":"Moim zdaniem …"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Что я учу",
    "title":"<em>Uczyć się</em> + родительный",
    "paras":[
      "Глагол <b>uczyć się</b> — «учиться, учить что-то» — требует родительного падежа. Не «учу польский», а буквально «учусь польского»: <b>Uczę się polskiego.</b> <b>Uczę się historii.</b> <b>Uczę się matematyki.</b>",
      "Это тот самый dopełniacz, который в день 10 мы назвали главным падежом польского. Он же после <b>szukać</b> и <b>potrzebować</b> — та же компания глаголов.",
      "Спряжение обычное: <b>uczę się</b>, <b>uczysz się</b>, <b>uczy się</b>, <b>uczymy się</b>, <b>uczycie się</b>, <b>uczą się</b>. Возвратное się — на месте, как в русском «учиться».",
      "Убери <b>się</b> — и смысл переворачивается: <b>uczę polskiego</b> значит «я преподаю польский». Русский тут ведёт себя так же двусмысленно («учу польский» / «учу детей»), поэтому маленькое się и есть весь ответ."
    ],
    "audio":"Глагол uczyć się — «учиться, учить что-то» — требует родительного падежа. Не «учу польский», а буквально «учусь польского»: uczę się polskiego, uczę się historii, uczę się matematyki. Это тот самый dopełniacz, который в день десять мы назвали главным падежом польского. Он же после szukać и potrzebować. Спряжение обычное: uczę się, uczysz się, uczy się, uczymy się, uczycie się, uczą się. Убери się — и смысл переворачивается: uczę polskiego значит «я преподаю польский». Русский тут ведёт себя так же двусмысленно, поэтому маленькое się и есть весь ответ.",
    "table":{"rows":[
      ["Uczę się <b>polskiego</b>. <button class=\"play\" data-say=\"Uczę się polskiego\">🔊</button>","Я учу польский. (polski → polskiego)"],
      ["Uczę się <b>angielskiego</b>. <button class=\"play\" data-say=\"Uczę się angielskiego\">🔊</button>","Я учу английский."],
      ["Uczę się <b>matematyki</b>. <button class=\"play\" data-say=\"Uczę się matematyki\">🔊</button>","Я учу математику."],
      ["Uczę się <b>do egzaminu</b>. <button class=\"play\" data-say=\"Uczę się do egzaminu\">🔊</button>","Я готовлюсь к экзамену."],
      ["<b>Uczę</b> polskiego. <button class=\"play\" data-say=\"Uczę polskiego\">🔊</button>","Я преподаю польский. (без się!)"]
    ],"star":0},
    "examples":[
      {"ru":"Я учу польский уже год.","en":"<b>Uczę się polskiego</b> już rok.","say":"Uczę się polskiego już rok."},
      {"ru":"Анна готовится к экзамену.","en":"Anna <b>uczy się do egzaminu</b>.","say":"Anna uczy się do egzaminu."},
      {"ru":"Мы учим историю в школе.","en":"<b>Uczymy się historii</b> w szkole.","say":"Uczymy się historii w szkole."},
      {"ru":"Моя мама преподаёт математику.","en":"Moja mama <b>uczy matematyki</b>.","gloss":"без się — «преподаёт»","say":"Moja mama uczy matematyki."}
    ],
    "mistakes":[
      {"wrong":"Uczę się polski.","right":"Uczę się <b>polskiego</b>.","why":"после uczyć się идёт родительный падеж — polskiego, historii, matematyki."},
      {"wrong":"Uczę polskiego w szkole (о себе-ученике)","right":"<b>Uczę się</b> polskiego w szkole.","why":"без się глагол значит «преподаю». Ученик всегда с się."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после uczyć się.",
       "q":"«Я учу польский» —","opts":["Uczę się polski","Uczę się polskiego","Uczę się po polsku"],"answer":1,
       "explain":"После uczyć się — родительный: <b>polskiego</b>."},
      {"type":"choice","q":"Что значит <b>Uczę matematyki</b> (без się)?",
       "opts":["я учу математику","я преподаю математику","мне нужна математика"],"answer":1,
       "explain":"Без się — «преподаю». «Я учу математику» — <b>uczę się matematyki</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши фразу про подготовку.",
       "q":"«Я готовлюсь к экзамену»","accept":["uczę się do egzaminu","ucze sie do egzaminu","uczę sie do egzaminu"],"placeholder":"Uczę się do …"}
    ],
    "mnemonic":"📚 uczę SIĘ czegoś — учусь. uczę czegoś — преподаю. Одно маленькое się меняет сторону парты."
   },
   {
    "eyebrow":"Правило 2 · Университет",
    "title":"<em>Studiować</em> + винительный",
    "paras":[
      "Рядом стоит второй глагол — <b>studiować</b>. Он не про школьный урок, а про высшее образование: изучать что-то в университете. И падеж у него другой — винительный: <b>Studiuję prawo.</b> <b>Studiuję medycynę.</b> <b>Studiuję informatykę.</b>",
      "Сравни две фразы рядом: <b>Uczę się historii</b> (родительный) — <b>Studiuję historię</b> (винительный). Разница не в смысле «учу», а в том, где и как: первое можно делать дома, второе — на факультете.",
      "Слово <b>studia</b> — «учёба в вузе» — существует только во множественном числе, как русские «каникулы». Поэтому: <b>Jestem na studiach.</b> <b>Skończyłam studia.</b> <b>Idę na studia.</b>",
      "Место учёбы — знакомый предложный падеж: <b>na uniwersytecie</b>, <b>w szkole</b>, <b>na kursie</b>. Тот самый список с предлогами w и na, где польский и русский иногда расходятся."
    ],
    "audio":"Рядом стоит второй глагол — studiować. Он не про школьный урок, а про высшее образование: изучать что-то в университете. И падеж у него другой, винительный: studiuję prawo, studiuję medycynę, studiuję informatykę. Сравни две фразы рядом: uczę się historii, родительный, и studiuję historię, винительный. Разница не в смысле «учу», а в том, где и как: первое можно делать дома, второе — на факультете. Слово studia — учёба в вузе — существует только во множественном числе, как русские каникулы. Поэтому: jestem na studiach, skończyłam studia, idę na studia. Место учёбы — знакомый предложный падеж: na uniwersytecie, w szkole, na kursie.",
    "table":{"rows":[
      ["Studiuję <b>prawo</b>. <button class=\"play\" data-say=\"Studiuję prawo\">🔊</button>","Я изучаю право. (винительный)"],
      ["Studiuję <b>medycynę</b>. <button class=\"play\" data-say=\"Studiuję medycynę\">🔊</button>","Я учусь на медицинском."],
      ["Studiuję <b>na uniwersytecie</b>. <button class=\"play\" data-say=\"Studiuję na uniwersytecie\">🔊</button>","Я учусь в университете."],
      ["Jestem <b>na studiach</b>. <button class=\"play\" data-say=\"Jestem na studiach\">🔊</button>","Я студент(ка). (studia — только мн. ч.)"],
      ["Uczę się <b>historii</b> / Studiuję <b>historię</b> <button class=\"play\" data-say=\"Uczę się historii. Studiuję historię.\">🔊</button>","родительный / винительный"]
    ],"star":4},
    "examples":[
      {"ru":"Мой брат учится на юридическом.","en":"Mój brat <b>studiuje prawo</b>.","say":"Mój brat studiuje prawo."},
      {"ru":"Она изучает польскую филологию.","en":"Ona <b>studiuje filologię polską</b>.","say":"Ona studiuje filologię polską."},
      {"ru":"Я закончила учёбу два года назад.","en":"<b>Skończyłam studia</b> dwa lata temu.","gloss":"skończyć — совершенный вид","say":"Skończyłam studia dwa lata temu."},
      {"ru":"Я хожу на курс польского.","en":"Chodzę <b>na kurs polskiego</b>.","say":"Chodzę na kurs polskiego."}
    ],
    "mistakes":[
      {"wrong":"Studiuję prawa.","right":"Studiuję <b>prawo</b>.","why":"после studiować — винительный. Родительный (prawa) просит другой глагол — uczyć się."},
      {"wrong":"Jestem na studium.","right":"Jestem <b>na studiach</b>.","why":"studia живёт только во множественном числе, как русские «каникулы»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, какой глагол просит какой падеж.",
       "q":"«Я изучаю медицину» (в университете) —","opts":["Studiuję medycyny","Studiuję medycynę","Uczę się medycynę"],"answer":1,
       "explain":"studiować плюс винительный: <b>medycynę</b>. А uczyć się взяло бы родительный — medycyny."},
      {"type":"choice","q":"«Я учусь в университете» —",
       "opts":["Studiuję w uniwersytecie","Studiuję na uniwersytecie","Studiuję uniwersytet"],"answer":1,
       "explain":"Место — <b>na uniwersytecie</b>. Предлог na, а не w: этот случай мы отмечали ещё в A1."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Мой брат изучает право»</b>","answer":"Mój brat studiuje prawo"}
    ],
    "mnemonic":"🎓 uczyć się + родительный · studiować + винительный. Два глагола «учить» — два падежа."
   },
   {
    "eyebrow":"Правило 3 · Подарок вида",
    "title":"<em>Zdawać</em> — сдавать, <em>zdać</em> — сдать",
    "paras":[
      "Вот место, где вид глагола отдаёт долг с процентами. Польская пара <b>zdawać / zdać</b> устроена ровно как русская «сдавать / сдать» — и совпадает не приблизительно, а в каждой точке.",
      "<b>Zdaję egzamin.</b> — «Я сдаю экзамен» (сейчас, процесс, итог ещё неизвестен). <b>Wczoraj zdawałam egzamin.</b> — «вчера я сдавала экзамен»: про сам процесс, без слова об оценке.",
      "<b>Zdałam egzamin!</b> — «Я сдала!» Совершенный вид сразу означает успех. Именно поэтому это предложение говорят с радостью, а не нейтрально.",
      "И обратная сторона: <b>Nie zdałem egzaminu.</b> — «я не сдал». Отрицание, как всегда, переводит дополнение в родительный: egzamin → egzaminu. В будущем: <b>Zdam!</b> — «сдам» (форма настоящего, смысл будущего — правило дня 9)."
    ],
    "audio":"Вот место, где вид глагола отдаёт долг с процентами. Польская пара zdawać, zdać устроена ровно как русская «сдавать, сдать» — и совпадает не приблизительно, а в каждой точке. Zdaję egzamin — я сдаю экзамен, сейчас, процесс, итог ещё неизвестен. Wczoraj zdawałam egzamin — вчера я сдавала экзамен: про сам процесс, без слова об оценке. Zdałam egzamin — я сдала. Совершенный вид сразу означает успех. И обратная сторона: nie zdałem egzaminu — я не сдал. Отрицание переводит дополнение в родительный: egzamin становится egzaminu. В будущем: zdam — сдам, форма настоящего, смысл будущего, правило дня девять.",
    "table":{"rows":[
      ["<b>Zdaję</b> egzamin. <button class=\"play\" data-say=\"Zdaję egzamin\">🔊</button>","Я сдаю экзамен (сейчас, процесс)."],
      ["Wczoraj <b>zdawałam</b> egzamin. <button class=\"play\" data-say=\"Wczoraj zdawałam egzamin\">🔊</button>","Вчера я сдавала экзамен (про процесс)."],
      ["<b>Zdałam</b> egzamin! <button class=\"play\" data-say=\"Zdałam egzamin!\">🔊</button>","Я сдала! (результат — успех)"],
      ["<b>Nie zdałem</b> egzaminu. <button class=\"play\" data-say=\"Nie zdałem egzaminu\">🔊</button>","Я не сдал. (отрицание → родительный)"],
      ["Jutro <b>zdam</b>. <button class=\"play\" data-say=\"Jutro zdam\">🔊</button>","Завтра сдам. (совершенный вид = будущее)"],
      ["oblać egzamin <button class=\"play\" data-say=\"oblać egzamin\">🔊</button>","провалить экзамен (разговорное)"]
    ],"star":2},
    "examples":[
      {"ru":"В пятницу я сдаю экзамен по английскому.","en":"W piątek <b>zdaję egzamin z angielskiego</b>.","gloss":"egzamin z + родительный","say":"W piątek zdaję egzamin z angielskiego."},
      {"ru":"Он сдавал этот экзамен три раза.","en":"<b>Zdawał</b> ten egzamin trzy razy.","gloss":"процесс, повторявшийся","say":"Zdawał ten egzamin trzy razy."},
      {"ru":"И наконец сдал.","en":"I w końcu <b>zdał</b>.","say":"I w końcu zdał."},
      {"ru":"Я уверена, что ты сдашь.","en":"Jestem pewna, że <b>zdasz</b>.","say":"Jestem pewna, że zdasz."}
    ],
    "mistakes":[
      {"wrong":"Wczoraj zdałam egzamin, ale nie wiem, jaki mam wynik.","right":"Wczoraj <b>zdawałam</b> egzamin — wyniku jeszcze nie znam.","why":"zdałam уже значит «сдала успешно». Если итог неизвестен, нужен несовершенный вид: zdawałam."},
      {"wrong":"Nie zdałem egzamin.","right":"Nie zdałem <b>egzaminu</b>.","why":"отрицание переводит винительный в родительный — egzaminu."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, известен ли итог.",
       "q":"«Вчера я сдавала экзамен, результат будет в понедельник» —","opts":["Wczoraj zdałam egzamin","Wczoraj zdawałam egzamin","Wczoraj zdam egzamin"],"answer":1,
       "explain":"Итог ещё неизвестен — значит процесс: <b>zdawałam</b>. Zdałam означало бы «сдала успешно»."},
      {"type":"choice","q":"Анна получила пятёрку. Она пишет Мареку —",
       "opts":["Zdawałam egzamin!","Zdałam egzamin!","Będę zdawać egzamin!"],"answer":1,
       "explain":"Успех — совершенный вид: <b>Zdałam!</b>"},
      {"type":"type","howto":"<b>Что делать:</b> напиши про неудачу — с правильным падежом.",
       "q":"«Я не сдал экзамен»","accept":["nie zdałem egzaminu","nie zdalem egzaminu","nie zdałam egzaminu","nie zdalam egzaminu"],"placeholder":"Nie zdał… …"}
    ],
    "mnemonic":"✅ zdawać = сдавать (процесс) · zdać = сдать (успех). Русская пара переносится буква в букву."
   },
   {
    "eyebrow":"Правило 4 · Слова школы",
    "title":"Szkoła, zajęcia, ocena",
    "paras":[
      "Базовый набор: <b>szkoła</b> (школа), <b>klasa</b> (класс), <b>uczeń</b> / <b>uczennica</b> (ученик/ученица), <b>lekcja</b> (урок), <b>zadanie domowe</b> (домашнее задание), <b>ocena</b> (оценка).",
      "Университетский набор: <b>wykład</b> (лекция), <b>zajęcia</b> (занятия — только множественное), <b>semestr</b>, <b>sesja</b> (сессия), <b>dyplom</b>, <b>biblioteka</b>.",
      "Экзамен «по чему» — с предлогом z и родительным: <b>egzamin z matematyki</b>, <b>egzamin z angielskiego</b>, <b>test z historii</b>. Та же рамка, что в русском «экзамен по…», только предлог другой.",
      "Культурная деталь: в польской школе оценки идут от 1 до 6, и лучшая — <b>szóstka</b> (шестёрка), а <b>jedynka</b> (единица) — худшая. Услышишь «Dostałam szóstkę!» — это большая радость."
    ],
    "audio":"Базовый набор: szkoła — школа, klasa — класс, uczeń и uczennica — ученик и ученица, lekcja — урок, zadanie domowe — домашнее задание, ocena — оценка. Университетский набор: wykład — лекция, zajęcia — занятия, только множественное, semestr, sesja, dyplom, biblioteka. Экзамен «по чему» — с предлогом z и родительным: egzamin z matematyki, egzamin z angielskiego, test z historii. Культурная деталь: в польской школе оценки идут от одного до шести, и лучшая — szóstka, шестёрка, а jedynka, единица, — худшая. Услышишь «dostałam szóstkę» — это большая радость.",
    "table":{"rows":[
      ["szkoła / klasa <button class=\"play\" data-say=\"szkoła, klasa\">🔊</button>","школа / класс"],
      ["uczeń / uczennica <button class=\"play\" data-say=\"uczeń, uczennica\">🔊</button>","ученик / ученица"],
      ["zajęcia <button class=\"play\" data-say=\"zajęcia\">🔊</button>","занятия (только мн. ч.)"],
      ["wykład <button class=\"play\" data-say=\"wykład\">🔊</button>","лекция"],
      ["ocena <button class=\"play\" data-say=\"ocena\">🔊</button>","оценка"],
      ["egzamin z angielskiego <button class=\"play\" data-say=\"egzamin z angielskiego\">🔊</button>","экзамен по английскому"]
    ],"star":-1},
    "examples":[
      {"ru":"Завтра у меня экзамен по математике.","en":"Jutro mam <b>egzamin z matematyki</b>.","say":"Jutro mam egzamin z matematyki."},
      {"ru":"Занятия начинаются в восемь.","en":"<b>Zajęcia</b> zaczynają się o ósmej.","say":"Zajęcia zaczynają się o ósmej."},
      {"ru":"Я получила хорошую оценку.","en":"Dostałam dobrą <b>ocenę</b>.","say":"Dostałam dobrą ocenę."},
      {"ru":"Я не сделал домашнее задание.","en":"Nie zrobiłem <b>zadania domowego</b>.","gloss":"отрицание → родительный","say":"Nie zrobiłem zadania domowego."}
    ],
    "mistakes":[
      {"wrong":"egzamin od matematyki","right":"egzamin <b>z</b> matematyki","why":"предмет экзамена вводится предлогом z плюс родительный."},
      {"wrong":"Zajęcie zaczyna się o ósmej.","right":"<b>Zajęcia zaczynają się</b> o ósmej.","why":"в значении «занятия» слово живёт только во множественном числе, и глагол при нём тоже множественный."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни предлог перед предметом.",
       "q":"«Экзамен по английскому» —","opts":["egzamin od angielskiego","egzamin z angielskiego","egzamin na angielski"],"answer":1,
       "explain":"<b>Egzamin z angielskiego</b> — предлог z плюс родительный."},
      {"type":"choice","q":"Лучшая оценка в польской школе —",
       "opts":["jedynka","piątka","szóstka"],"answer":2,
       "explain":"Шкала идёт от 1 до 6, и лучшая — <b>szóstka</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи вслух.",
       "target":"Jutro zdaję egzamin z angielskiego.","sub":"завтра я сдаю экзамен по английскому","want":"Jutro zdaję egzamin z angielskiego."}
    ],
    "mnemonic":"🏫 egzamin z + родительный · zajęcia всегда мн. ч. · szóstka — лучшая оценка."
   }
 ],
 "dialogue":{
   "intro":"Анна готовится к экзамену, Марек заходит поддержать. Следи за парой zdawać / zdać — она тут появляется четыре раза, каждый раз со своим смыслом.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Cały tydzień siedzisz w domu. Uczysz się?","ru":"Целую неделю сидишь дома. Учишься?",
      "words":[["Cały tydzień","целую неделю"],["Uczysz się","учишься"]]},
     {"who":"A","name":"Anna","side":"left","en":"Tak, uczę się do egzaminu z angielskiego.","ru":"Да, готовлюсь к экзамену по английскому.",
      "words":[["uczę się do","готовлюсь к"],["egzaminu","экзамена"]]},
     {"who":"M","name":"Marek","side":"right","en":"Kiedy zdajesz?","ru":"Когда сдаёшь?",
      "words":[["Kiedy","когда"],["zdajesz","сдаёшь"]]},
     {"who":"A","name":"Anna","side":"left","en":"W piątek rano. Trochę się boję.","ru":"В пятницу утром. Немного боюсь.",
      "words":[["W piątek","в пятницу"],["boję się","боюсь"]]},
     {"who":"M","name":"Marek","side":"right","en":"Uczysz się od miesiąca. Myślę, że zdasz.","ru":"Ты учишься уже месяц. Думаю, что сдашь.",
      "words":[["od miesiąca","уже месяц"],["zdasz","сдашь"]]},
     {"who":"A","name":"Anna","side":"left","en":"Rok temu zdawałam podobny test i nie zdałam.","ru":"Год назад я сдавала похожий тест и не сдала.",
      "words":[["zdawałam","сдавала"],["nie zdałam","не сдала"]]},
     {"who":"M","name":"Marek","side":"right","en":"Ale wtedy uczyłaś się dwa dni, nie miesiąc.","ru":"Но тогда ты учила два дня, а не месяц.",
      "words":[["wtedy","тогда"],["uczyłaś się","ты училась"]]},
     {"who":"A","name":"Anna","side":"left","en":"Masz rację. Dobrze, wracam do książek.","ru":"Ты прав. Ладно, возвращаюсь к книгам.",
      "words":[["Masz rację","ты прав"],["wracam","возвращаюсь"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — новость после экзамена. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"I jak? Zdałaś?","ru":"Ну как? Сдала?"},
     {"who":"B","en":"Zdałam! Dostałam piątkę.","ru":"Сдала! Получила пятёрку."},
     {"who":"A","en":"Gratulacje! Mówiłem, że zdasz.","ru":"Поздравляю! Я говорил, что сдашь."},
     {"who":"B","en":"Teraz zdaję jeszcze jeden, w czerwcu.","ru":"Теперь сдаю ещё один, в июне."},
     {"who":"A","en":"Powodzenia!","ru":"Удачи!"}
   ]
 },
 "vocab":{
   "intro":"Слова дня — школа, университет и всё, что вокруг экзамена.",
   "items":[
     {"en":"uczyć się (czegoś)","ru":"учить, учиться (+ родительный)","ex":"Uczę się polskiego."},
     {"en":"studiować (coś)","ru":"учиться в вузе, изучать (+ винительный)","ex":"Studiuję prawo."},
     {"en":"studia","ru":"учёба в вузе (только мн. ч.)","ex":"Jestem na studiach."},
     {"en":"zdawać egzamin","ru":"сдавать экзамен","ex":"W piątek zdaję egzamin."},
     {"en":"zdać egzamin","ru":"сдать экзамен","ex":"Zdałam egzamin!"},
     {"en":"egzamin z…","ru":"экзамен по…","ex":"Egzamin z matematyki."},
     {"en":"szkoła","ru":"школа","ex":"Chodzę do szkoły."},
     {"en":"zajęcia","ru":"занятия (мн. ч.)","ex":"Zajęcia zaczynają się o ósmej."},
     {"en":"wykład","ru":"лекция","ex":"Mam wykład o dziesiątej."},
     {"en":"ocena","ru":"оценка","ex":"Dostałam dobrą ocenę."},
     {"en":"zadanie domowe","ru":"домашнее задание","ex":"Zrobiłem zadanie domowe."},
     {"en":"uczeń / uczennica","ru":"ученик / ученица","ex":"Jestem dobrym uczniem."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу.",
   "pairs":[["Uczę się polskiego","я учу польский"],["Studiuję prawo","я изучаю право"],["Zdałam egzamin","я сдала экзамен"],["zajęcia","занятия"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как Анна рассказывает о своей учёбе. Смотри, где стоит zdawać, а где zdać.",
   "title":"Tydzień przed egzaminem",
   "sentences":["Od miesiąca uczę się angielskiego.","W piątek zdaję ważny egzamin.","Rok temu zdawałam podobny test.","Wtedy uczyłam się tylko dwa dni i nie zdałam.","Teraz mam plan: codziennie dwie godziny.","Rano powtarzam słowa, wieczorem piszę zadania.","Marek mówi, że tym razem zdam.","Moim zdaniem ma rację.","Po egzaminie chciałabym odpocząć tydzień.","A potem zacznę kurs na poziomie wyższym."],
   "translation":"Уже месяц я учу английский. В пятницу сдаю важный экзамен. Год назад я сдавала похожий тест. Тогда я училась всего два дня и не сдала. Теперь у меня план: каждый день по два часа. Утром повторяю слова, вечером пишу задания. Марек говорит, что в этот раз я сдам. По-моему, он прав. После экзамена я хотела бы отдохнуть неделю. А потом начну курс уровнем выше."
 },
 "quiz":{
   "intro":"Пять вопросов — и школьная тема закрыта.",
   "items":[
     {"q":"1. «Я учу польский» —","opts":["Uczę się polski","Uczę się polskiego","Studiuję polskiego"],"answer":1,
      "explain":"После uczyć się — родительный: <b>polskiego</b>."},
     {"q":"2. «Я изучаю право» (в университете) —","opts":["Studiuję prawa","Studiuję prawo","Uczę się prawo"],"answer":1,
      "explain":"После studiować — винительный: <b>prawo</b>."},
     {"q":"3. Результат ещё неизвестен: «вчера я сдавал экзамен» —","opts":["Wczoraj zdałem egzamin","Wczoraj zdawałem egzamin","Wczoraj zdam egzamin"],"answer":1,
      "explain":"Процесс без итога — несовершенный вид: <b>zdawałem</b>. Zdałem значит «сдал успешно»."},
     {"q":"4. «Я не сдала экзамен» —","opts":["Nie zdałam egzamin","Nie zdałam egzaminu","Nie zdawałam egzaminu"],"answer":1,
      "explain":"Отрицание переводит винительный в родительный: <b>egzaminu</b>."},
     {"q":"5. «Экзамен по истории» —","opts":["egzamin z historii","egzamin od historii","egzamin historii"],"answer":0,
      "explain":"Предмет экзамена — с предлогом z плюс родительный: <b>egzamin z historii</b>."}
   ]
 },
 "essay":{
   "intro":"Расскажи о своей учёбе — сегодняшней или прошлой. Экзамены были у всех.",
   "prompt":"Напиши 4–5 предложений: что ты учишь сейчас, где, как готовишься и какой экзамен сдавал(а) в прошлом — успешно или нет.",
   "hint":"Опора: Uczę się… (+ род.) · Studiuję… (+ вин.) · Uczę się do egzaminu… · Zdawałem/zdawałam… · Zdałem/zdałam… 💛",
   "example":"Uczę się polskiego już rok. Chodzę na kurs dwa razy w tygodniu. Teraz uczę się do egzaminu — zdaję go w czerwcu. Rok temu zdawałam egzamin z angielskiego i zdałam. Myślę, że tym razem też zdam."
 }
},
"25": {
 "day":25,"week":"04",
 "themeRu":"Работа",
 "themeEn":"Praca",
 "intro":"Собеседование — слово, от которого у всех одинаково потеют ладони. Марек решил уйти из ресторана и ищет новое место, так что сегодня мы идём с ним: научимся говорить о работе, зарплате и опыте. Внутри — рамка <b>pracować jako</b>, которая стоит подозрительно близко к знакомому <b>jestem kelnerem</b>, но ведёт себя иначе.",
 "introAudio":"Собеседование — слово, от которого у всех одинаково потеют ладони. Марек решил уйти из ресторана и ищет новое место, так что сегодня мы идём с ним: научимся говорить о работе, зарплате и опыте. Внутри — рамка pracować jako, которая стоит подозрительно близко к знакомому jestem kelnerem, но ведёт себя иначе.",
 "goals":[
   "Сказать, кем работаешь, двумя рамками: <b>pracuję jako kelner</b> / <b>jestem kelnerem</b>",
   "Искать и находить работу: <b>szukam pracy</b>, <b>znalazłem pracę</b>",
   "Говорить о деньгах и условиях: <b>ile zarabiasz</b>, pensja, etat",
   "Пройти мини-собеседование: вопросы и ответы о своём опыте"
 ],
 "learned":[
   "Сказал(а), кем работаешь, двумя рамками: pracuję jako kelner и jestem kelnerem",
   "Поискал(а) и нашёл(нашла) работу: szukam pracy, znalazłem pracę",
   "Поговорил(а) о деньгах и условиях: ile zarabiasz, pensja, etat",
   "Прошёл(прошла) мини-собеседование: вопросы и ответы о своём опыте"
 ],
 "review":{
   "intro":"Разминка по вчерашней учёбе: два глагола «учить», два падежа и пара zdawać / zdać. Плюс один вопрос про мужско-личные формы — они с нами с начала уровня.",
   "introAudio":"Разминка по вчерашней учёбе: два глагола «учить», два падежа и пара zdawać, zdać. Плюс один вопрос про мужско-личные формы — они с нами с начала уровня.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после uczyć się.",
      "q":"«Я учу английский» —","opts":["Uczę się angielski","Uczę się angielskiego","Studiuję angielskiego"],"answer":1,
      "explain":"После uczyć się — родительный: <b>angielskiego</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> итог известен или нет?",
      "q":"«Я сдал экзамен!» (получил хорошую оценку) —","opts":["Zdawałem egzamin!","Zdałem egzamin!","Będę zdawać egzamin!"],"answer":1,
      "explain":"Успех — совершенный вид: <b>zdałem</b>. Zdawałem говорит только о процессе."},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто в компании.",
      "q":"Марек и Томек: «Они были на лекции» —","opts":["Oni były na wykładzie","Oni byli na wykładzie","One były na wykładzie"],"answer":1,
      "explain":"Двое мужчин — мужско-личная форма: <b>oni byli</b>. One były — про женщин или вещи."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Мой брат изучает медицину»</b>","answer":"Mój brat studiuje medycynę"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Две рамки",
    "title":"<em>Pracuję jako kelner</em> vs <em>Jestem kelnerem</em>",
    "paras":[
      "Профессию по-польски называют двумя способами, и падежи у них разные. Первый ты знаешь с A1: после <b>być</b> идёт творительный падеж — <b>Jestem kelnerem.</b> <b>Jestem nauczycielką.</b>",
      "Второй — с предлогом <b>jako</b>: <b>Pracuję jako kelner.</b> И вот здесь профессия остаётся в именительном падеже, в словарной форме. Никаких -em и -ą.",
      "Почему так: <b>jako</b> значит «в качестве», и слово после него просто повторяет форму того, к кому относится. Русский делает похожий фокус во фразе «работаю кем — учителем», только там падеж творительный, а польское jako его снимает.",
      "Две фразы рядом, чтобы запомнилось: <b>Jestem informatykiem</b> — <b>Pracuję jako informatyk.</b> Смысл один, окончания разные. Обе абсолютно правильные."
    ],
    "audio":"Профессию по-польски называют двумя способами, и падежи у них разные. Первый ты знаешь с A1: после być идёт творительный падеж — jestem kelnerem, jestem nauczycielką. Второй — с предлогом jako: pracuję jako kelner. И вот здесь профессия остаётся в именительном падеже, в словарной форме. Никаких -em и -ą. Почему так: jako значит «в качестве», и слово после него просто повторяет форму того, к кому относится. Две фразы рядом, чтобы запомнилось: jestem informatykiem — pracuję jako informatyk. Смысл один, окончания разные. Обе абсолютно правильные.",
    "table":{"rows":[
      ["Jestem <b>kelnerem</b>. <button class=\"play\" data-say=\"Jestem kelnerem\">🔊</button>","Я официант. (творительный)"],
      ["Pracuję jako <b>kelner</b>. <button class=\"play\" data-say=\"Pracuję jako kelner\">🔊</button>","Я работаю официантом. (именительный!)"],
      ["Jestem <b>nauczycielką</b>. <button class=\"play\" data-say=\"Jestem nauczycielką\">🔊</button>","Я учительница."],
      ["Pracuję jako <b>nauczycielka</b>. <button class=\"play\" data-say=\"Pracuję jako nauczycielka\">🔊</button>","Я работаю учительницей."],
      ["Pracuję <b>w firmie</b>. <button class=\"play\" data-say=\"Pracuję w firmie\">🔊</button>","Я работаю в компании. (место — предложный)"]
    ],"star":1},
    "examples":[
      {"ru":"Я работаю водителем.","en":"Pracuję <b>jako kierowca</b>.","gloss":"после jako — словарная форма","say":"Pracuję jako kierowca."},
      {"ru":"Он врач в больнице.","en":"On jest <b>lekarzem</b> w szpitalu.","say":"On jest lekarzem w szpitalu."},
      {"ru":"Анна работает учительницей в школе.","en":"Anna pracuje <b>jako nauczycielka</b> w szkole.","say":"Anna pracuje jako nauczycielka w szkole."},
      {"ru":"Чем вы занимаетесь?","en":"Czym się pan <b>zajmuje</b>?","gloss":"zajmować się + творительный","say":"Czym się pan zajmuje?"}
    ],
    "mistakes":[
      {"wrong":"Pracuję jako kelnerem.","right":"Pracuję jako <b>kelner</b>.","why":"после jako профессия остаётся в именительном падеже. Творительный нужен только после być."},
      {"wrong":"Jestem jako nauczycielka.","right":"<b>Jestem nauczycielką.</b>","why":"jako и być вместе не ходят: либо jestem + творительный, либо pracuję jako + именительный."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри на глагол — он решает падеж.",
       "q":"«Я работаю официантом» —","opts":["Pracuję jako kelnerem","Pracuję jako kelner","Pracuję kelnerem"],"answer":1,
       "explain":"После jako — именительный падеж: <b>jako kelner</b>."},
      {"type":"choice","q":"«Я официантка» —",
       "opts":["Jestem kelnerka","Jestem kelnerką","Jestem jako kelnerka"],"answer":1,
       "explain":"После być — творительный: <b>kelnerką</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши фразу с jako.",
       "q":"«Я работаю учителем» (мужчина)","accept":["pracuję jako nauczyciel","pracuje jako nauczyciel"],"placeholder":"Pracuję jako …"}
    ],
    "mnemonic":"🧑‍🍳 być + творительный (kelnerem) · jako + именительный (kelner). Глагол выбирает падеж."
   },
   {
    "eyebrow":"Правило 2 · Искать и найти",
    "title":"<em>Szukam pracy</em>, <em>znalazłem pracę</em>",
    "paras":[
      "Глагол <b>szukać</b> — из компании дня 10: он требует родительного падежа. <b>Szukam pracy.</b> <b>Szukam mieszkania.</b> Русское «ищу работу» ставит винительный, польское — родительный. Это расхождение стоит запомнить один раз.",
      "Зато его пара по виду — <b>znaleźć</b> («найти») — возвращает винительный: <b>Znalazłem pracę.</b> <b>Znalazłam mieszkanie.</b> Ищем родительным, находим винительным.",
      "Прошедшее у znaleźć неправильное, как у многих сильных глаголов: <b>znalazłem</b> / <b>znalazła</b> / <b>znaleźli</b>. Будущее — форма настоящего с будущим смыслом: <b>znajdę</b>.",
      "И противоположность: <b>stracić pracę</b> — «потерять работу», <b>zmienić pracę</b> — «сменить работу». Оба глагола совершенного вида и оба с винительным."
    ],
    "audio":"Глагол szukać — из компании дня десять: он требует родительного падежа. Szukam pracy, szukam mieszkania. Русское «ищу работу» ставит винительный, польское — родительный. Это расхождение стоит запомнить один раз. Зато его пара по виду — znaleźć, найти — возвращает винительный: znalazłem pracę, znalazłam mieszkanie. Ищем родительным, находим винительным. Прошедшее у znaleźć неправильное: znalazłem, znalazła, znaleźli. Будущее — форма настоящего с будущим смыслом: znajdę. И противоположность: stracić pracę — потерять работу, zmienić pracę — сменить работу.",
    "table":{"rows":[
      ["Szukam <b>pracy</b>. <button class=\"play\" data-say=\"Szukam pracy\">🔊</button>","Я ищу работу. (родительный)"],
      ["Znalazłem <b>pracę</b>. <button class=\"play\" data-say=\"Znalazłem pracę\">🔊</button>","Я нашёл работу. (винительный)"],
      ["Chcę <b>zmienić pracę</b>. <button class=\"play\" data-say=\"Chcę zmienić pracę\">🔊</button>","Я хочу сменить работу."],
      ["<b>Stracił pracę</b> w marcu. <button class=\"play\" data-say=\"Stracił pracę w marcu\">🔊</button>","Он потерял работу в марте."],
      ["<b>oferta pracy</b> <button class=\"play\" data-say=\"oferta pracy\">🔊</button>","вакансия, предложение работы"]
    ],"star":0},
    "examples":[
      {"ru":"Марек уже месяц ищет работу.","en":"Marek <b>szuka pracy</b> od miesiąca.","say":"Marek szuka pracy od miesiąca."},
      {"ru":"Я нашла хорошую работу.","en":"<b>Znalazłam</b> dobrą <b>pracę</b>.","say":"Znalazłam dobrą pracę."},
      {"ru":"Надеюсь, что найду что-нибудь до лета.","en":"Mam nadzieję, że <b>znajdę</b> coś przed latem.","gloss":"znajdę — будущее совершенного вида","say":"Mam nadzieję, że znajdę coś przed latem."},
      {"ru":"Он хочет сменить работу.","en":"On chce <b>zmienić pracę</b>.","say":"On chce zmienić pracę."}
    ],
    "mistakes":[
      {"wrong":"Szukam pracę.","right":"Szukam <b>pracy</b>.","why":"szukać требует родительного — в отличие от русского «ищу работу»."},
      {"wrong":"Znalazłem pracy.","right":"Znalazłem <b>pracę</b>.","why":"znaleźć берёт винительный. Родительный остаётся при szukać."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> тут русское чутьё подводит.",
       "q":"«Я ищу работу» —","opts":["Szukam pracę","Szukam pracy","Szukam praca"],"answer":1,
       "explain":"После szukać — родительный: <b>pracy</b>."},
      {"type":"choice","q":"«Я нашла работу» —",
       "opts":["Znalazłam pracy","Znalazłam pracę","Szukałam pracę"],"answer":1,
       "explain":"znaleźć берёт винительный: <b>pracę</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Марек ищет работу в Кракове»</b>","answer":"Marek szuka pracy w Krakowie"}
    ],
    "mnemonic":"🔎 szukam pracy (родительный) → znalazłem pracę (винительный). Ищем одним падежом, находим другим."
   },
   {
    "eyebrow":"Правило 3 · Деньги и условия",
    "title":"<em>Ile zarabiasz?</em>",
    "paras":[
      "Глагол <b>zarabiać</b> — «зарабатывать»: <b>zarabiam</b>, <b>zarabiasz</b>, <b>zarabia</b>. Совершенный вид — <b>zarobić</b>: <b>W lipcu zarobiłem więcej.</b>",
      "Деньги называют прямо: <b>Zarabiam pięć tysięcy złotych.</b> Слово <b>pensja</b> — зарплата. Спросить о ней у знакомого можно, у незнакомого — лучше не стоит, ровно как и в русском разговоре.",
      "Условия: <b>umowa</b> (договор), <b>na pełny etat</b> (на полную ставку), <b>na pół etatu</b> (на полставки), <b>nadgodziny</b> (переработки), <b>urlop</b> (отпуск).",
      "И приятная часть — слова, которые не надо учить: <b>firma</b>, <b>szef</b>, <b>kariera</b>, <b>sukces</b>, <b>projekt</b>, <b>klient</b>. Международная лексика в польском выглядит почти по-русски, и это честная экономия сил."
    ],
    "audio":"Глагол zarabiać — зарабатывать: zarabiam, zarabiasz, zarabia. Совершенный вид — zarobić: w lipcu zarobiłem więcej. Деньги называют прямо: zarabiam pięć tysięcy złotych. Слово pensja — зарплата. Спросить о ней у знакомого можно, у незнакомого лучше не стоит, ровно как и в русском разговоре. Условия: umowa — договор, na pełny etat — на полную ставку, na pół etatu — на полставки, nadgodziny — переработки, urlop — отпуск. И приятная часть — слова, которые не надо учить: firma, szef, kariera, sukces, projekt, klient.",
    "table":{"rows":[
      ["<b>Ile zarabiasz?</b> <button class=\"play\" data-say=\"Ile zarabiasz?\">🔊</button>","Сколько ты зарабатываешь?"],
      ["Zarabiam <b>pięć tysięcy złotych</b>. <button class=\"play\" data-say=\"Zarabiam pięć tysięcy złotych\">🔊</button>","Я зарабатываю пять тысяч злотых."],
      ["<b>pensja</b> <button class=\"play\" data-say=\"pensja\">🔊</button>","зарплата"],
      ["<b>na pełny etat</b> / <b>na pół etatu</b> <button class=\"play\" data-say=\"na pełny etat, na pół etatu\">🔊</button>","на полную ставку / на полставки"],
      ["<b>umowa</b> <button class=\"play\" data-say=\"umowa\">🔊</button>","договор"],
      ["<b>urlop</b> <button class=\"play\" data-say=\"urlop\">🔊</button>","отпуск"]
    ],"star":-1},
    "examples":[
      {"ru":"Я работаю на полставки.","en":"Pracuję <b>na pół etatu</b>.","say":"Pracuję na pół etatu."},
      {"ru":"У меня отпуск в августе.","en":"Mam <b>urlop</b> w sierpniu.","say":"Mam urlop w sierpniu."},
      {"ru":"Здесь платят больше, чем в ресторане.","en":"Tutaj płacą <b>więcej niż</b> w restauracji.","gloss":"сравнение из дня 15","say":"Tutaj płacą więcej niż w restauracji."},
      {"ru":"Я подписал договор в понедельник.","en":"<b>Podpisałem umowę</b> w poniedziałek.","say":"Podpisałem umowę w poniedziałek."}
    ],
    "mistakes":[
      {"wrong":"Zarabiam pięć tysięcy złoty.","right":"Zarabiam pięć tysięcy <b>złotych</b>.","why":"после числительных 5 и больше — родительный множественного: złotych. Как русское «пять злотых»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни числительные из дня 10.",
       "q":"«Я зарабатываю пять тысяч злотых» —","opts":["Zarabiam pięć tysięcy złoty","Zarabiam pięć tysięcy złotych","Zarabiam pięć tysiące złote"],"answer":1,
       "explain":"После пяти и больше — родительный множественного: <b>złotych</b>."},
      {"type":"choice","q":"<b>na pół etatu</b> значит —",
       "opts":["на полную ставку","на полставки","без договора"],"answer":1,
       "explain":"<b>Na pół etatu</b> — на полставки. Полная ставка — na pełny etat."},
      {"type":"type","howto":"<b>Что делать:</b> напиши вопрос знакомому.",
       "q":"«Сколько ты зарабатываешь?»","accept":["ile zarabiasz","ile zarabiasz?"],"placeholder":"Ile …"}
    ],
    "mnemonic":"💰 zarabiać → pensja → umowa → urlop. Четыре слова, и разговор о работе идёт."
   },
   {
    "eyebrow":"Правило 4 · Собеседование",
    "title":"<em>Rozmowa kwalifikacyjna</em>",
    "paras":[
      "Собеседование по-польски — <b>rozmowa kwalifikacyjna</b>, буквально «квалификационный разговор». Перед ним посылают <b>CV</b> и <b>list motywacyjny</b> (сопроводительное письмо).",
      "Вопросы почти всегда одни и те же, и все — в вежливой рамке pan/pani с формой третьего лица: <b>Dlaczego chce pan zmienić pracę?</b> <b>Jakie ma pani doświadczenie?</b> <b>Kiedy może pan zacząć?</b>",
      "Ответы стоит собрать заранее: <b>Pracowałem jako kelner przez trzy lata.</b> <b>Mam doświadczenie w obsłudze klienta.</b> <b>Chciałbym pracować w większej firmie.</b> Заметил(а)? Здесь пригодилось вчерашнее прошедшее, сегодняшнее jako и вежливое «бы» из дня 22.",
      "Финал разговора: <b>Odezwiemy się do pana w przyszłym tygodniu.</b> — «Мы свяжемся с вами на следующей неделе». Фраза, которую слышат все и всегда."
    ],
    "audio":"Собеседование по-польски — rozmowa kwalifikacyjna, буквально «квалификационный разговор». Перед ним посылают CV и list motywacyjny, сопроводительное письмо. Вопросы почти всегда одни и те же, и все в вежливой рамке pan или pani с формой третьего лица: dlaczego chce pan zmienić pracę, jakie ma pani doświadczenie, kiedy może pan zacząć. Ответы стоит собрать заранее: pracowałem jako kelner przez trzy lata, mam doświadczenie w obsłudze klienta, chciałbym pracować w większej firmie. Заметь: здесь пригодилось прошедшее время, сегодняшнее jako и вежливое «бы» из дня двадцать два. Финал разговора: odezwiemy się do pana w przyszłym tygodniu — мы свяжемся с вами на следующей неделе.",
    "table":{"rows":[
      ["<b>Rozmowa kwalifikacyjna</b> <button class=\"play\" data-say=\"rozmowa kwalifikacyjna\">🔊</button>","собеседование"],
      ["Dlaczego <b>chce pan</b> zmienić pracę? <button class=\"play\" data-say=\"Dlaczego chce pan zmienić pracę?\">🔊</button>","Почему вы хотите сменить работу?"],
      ["Jakie <b>ma pani</b> doświadczenie? <button class=\"play\" data-say=\"Jakie ma pani doświadczenie?\">🔊</button>","Какой у вас опыт?"],
      ["Kiedy <b>może pan</b> zacząć? <button class=\"play\" data-say=\"Kiedy może pan zacząć?\">🔊</button>","Когда вы можете начать?"],
      ["<b>doświadczenie</b> <button class=\"play\" data-say=\"doświadczenie\">🔊</button>","опыт"],
      ["<b>list motywacyjny</b> <button class=\"play\" data-say=\"list motywacyjny\">🔊</button>","сопроводительное письмо"]
    ],"star":0},
    "examples":[
      {"ru":"Я три года работал официантом.","en":"<b>Pracowałem jako kelner</b> przez trzy lata.","say":"Pracowałem jako kelner przez trzy lata."},
      {"ru":"У меня есть опыт работы с клиентами.","en":"Mam <b>doświadczenie</b> w obsłudze klienta.","say":"Mam doświadczenie w obsłudze klienta."},
      {"ru":"Я хотел бы работать в большей компании.","en":"<b>Chciałbym</b> pracować w większej firmie.","gloss":"вежливое «бы» из дня 22","say":"Chciałbym pracować w większej firmie."},
      {"ru":"Я могу начать первого сентября.","en":"Mogę zacząć <b>pierwszego września</b>.","gloss":"дата в родительном — день 13","say":"Mogę zacząć pierwszego września."}
    ],
    "mistakes":[
      {"wrong":"Dlaczego pan chcesz zmienić pracę?","right":"Dlaczego <b>chce pan</b> zmienić pracę?","why":"с pan идёт форма третьего лица — chce, а не chcesz."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни вежливую рамку.",
       "q":"«Какой у вас опыт?» (к женщине) —","opts":["Jakie ma pani doświadczenie?","Jakie masz pani doświadczenie?","Jakie macie doświadczenie?"],"answer":0,
       "explain":"Pani идёт с формой третьего лица: <b>Jakie ma pani doświadczenie?</b>"},
      {"type":"choice","q":"«Я три года работал официантом» —",
       "opts":["Pracowałem jako kelnerem trzy lata","Pracowałem jako kelner przez trzy lata","Byłem jako kelner trzy lata"],"answer":1,
       "explain":"После jako — именительный: <b>jako kelner</b>. Длительность — przez plus винительный."},
      {"type":"speak","howto":"Нажми микрофон и ответь так, будто ты на собеседовании.",
       "target":"Chciałbym pracować w waszej firmie.","sub":"я хотел бы работать в вашей компании","want":"Chciałbym pracować w waszej firmie."}
    ],
    "mnemonic":"💼 CV → rozmowa kwalifikacyjna → doświadczenie → umowa. Дорога от объявления до работы."
   }
 ],
 "dialogue":{
   "intro":"Марек на собеседовании. Заметь, что рекрутер говорит с ним на pan, а Марек отвечает целыми фразами из сегодняшнего дня.",
   "lines":[
     {"who":"R","name":"Rekruterka","side":"left","en":"Dzień dobry. Proszę usiąść. Czym się pan zajmuje?","ru":"Добрый день. Садитесь, пожалуйста. Чем вы занимаетесь?",
      "words":[["Proszę usiąść","садитесь, пожалуйста"],["Czym się pan zajmuje?","чем вы занимаетесь?"]]},
     {"who":"M","name":"Marek","side":"right","en":"Pracuję jako kelner, ale szukam nowej pracy.","ru":"Я работаю официантом, но ищу новую работу.",
      "words":[["jako kelner","официантом"],["szukam pracy","ищу работу"]]},
     {"who":"R","name":"Rekruterka","side":"left","en":"Dlaczego chce pan zmienić pracę?","ru":"Почему вы хотите сменить работу?",
      "words":[["Dlaczego","почему"],["zmienić","сменить"]]},
     {"who":"M","name":"Marek","side":"right","en":"Chciałbym pracować z klientami w biurze.","ru":"Я хотел бы работать с клиентами в офисе.",
      "words":[["Chciałbym","я хотел бы"],["z klientami","с клиентами"]]},
     {"who":"R","name":"Rekruterka","side":"left","en":"Jakie ma pan doświadczenie?","ru":"Какой у вас опыт?",
      "words":[["doświadczenie","опыт"]]},
     {"who":"M","name":"Marek","side":"right","en":"Pracowałem w restauracji przez trzy lata.","ru":"Я три года работал в ресторане.",
      "words":[["Pracowałem","я работал"],["przez trzy lata","три года"]]},
     {"who":"R","name":"Rekruterka","side":"left","en":"Kiedy może pan zacząć?","ru":"Когда вы можете начать?",
      "words":[["Kiedy","когда"],["zacząć","начать"]]},
     {"who":"M","name":"Marek","side":"right","en":"Od pierwszego września. Mam miesiąc wypowiedzenia.","ru":"С первого сентября. У меня месяц отработки.",
      "words":[["Od pierwszego września","с первого сентября"],["wypowiedzenie","уведомление об уходе"]]},
     {"who":"R","name":"Rekruterka","side":"left","en":"Dziękuję. Odezwiemy się do pana w przyszłym tygodniu.","ru":"Спасибо. Мы свяжемся с вами на следующей неделе.",
      "words":[["Odezwiemy się","мы свяжемся"],["w przyszłym tygodniu","на следующей неделе"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — новость о работе. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Szukasz jeszcze pracy?","ru":"Ты ещё ищешь работу?"},
     {"who":"B","en":"Już nie. Znalazłem!","ru":"Уже нет. Нашёл!"},
     {"who":"A","en":"Gdzie będziesz pracować?","ru":"Где будешь работать?"},
     {"who":"B","en":"W biurze, jako konsultant. Na pełny etat.","ru":"В офисе, консультантом. На полную ставку."},
     {"who":"A","en":"Gratulacje! Musimy to uczcić.","ru":"Поздравляю! Надо это отметить."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — от объявления до подписанного договора.",
   "items":[
     {"en":"praca","ru":"работа","ex":"Szukam pracy."},
     {"en":"pracować jako…","ru":"работать кем-то (+ именительный)","ex":"Pracuję jako kelner."},
     {"en":"szukać pracy","ru":"искать работу (+ родительный)","ex":"Marek szuka pracy."},
     {"en":"znaleźć pracę","ru":"найти работу","ex":"Znalazłam pracę!"},
     {"en":"zmienić pracę","ru":"сменить работу","ex":"Chcę zmienić pracę."},
     {"en":"zarabiać","ru":"зарабатывать","ex":"Ile zarabiasz?"},
     {"en":"pensja","ru":"зарплата","ex":"Pensja jest niezła."},
     {"en":"umowa","ru":"договор","ex":"Podpisałem umowę."},
     {"en":"etat","ru":"ставка (на работе)","ex":"Pracuję na pół etatu."},
     {"en":"doświadczenie","ru":"опыт","ex":"Mam doświadczenie w biurze."},
     {"en":"rozmowa kwalifikacyjna","ru":"собеседование","ex":"Jutro mam rozmowę kwalifikacyjną."},
     {"en":"szef / szefowa","ru":"начальник / начальница","ex":"Mój szef jest w porządku."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу.",
   "pairs":[["Szukam pracy","я ищу работу"],["Pracuję jako kelner","я работаю официантом"],["Ile zarabiasz?","сколько ты зарабатываешь?"],["doświadczenie","опыт"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как Марек рассказывает о своём поиске работы. Следи за падежами при szukać и znaleźć.",
   "title":"Szukam nowej pracy",
   "sentences":["Od trzech lat pracuję jako kelner w restauracji.","Lubię ludzi, ale nie lubię pracować wieczorami.","Dlatego od miesiąca szukam nowej pracy.","Wysłałem CV do pięciu firm.","W dwóch miejscach miałem rozmowę kwalifikacyjną.","Pytali o doświadczenie i o to, kiedy mogę zacząć.","Chciałbym pracować w biurze, na pełny etat.","Pensja jest ważna, ale spokojny wieczór też.","Wczoraj zadzwonili z jednej firmy.","Myślę, że w tym tygodniu znajdę pracę."],
   "translation":"Уже три года я работаю официантом в ресторане. Я люблю людей, но не люблю работать по вечерам. Поэтому уже месяц ищу новую работу. Я отправил резюме в пять компаний. В двух местах у меня было собеседование. Спрашивали про опыт и про то, когда я могу начать. Я хотел бы работать в офисе, на полную ставку. Зарплата важна, но спокойный вечер тоже. Вчера позвонили из одной компании. Думаю, на этой неделе я найду работу."
 },
 "quiz":{
   "intro":"Пять вопросов — и рабочая тема твоя.",
   "items":[
     {"q":"1. «Я работаю официантом» —","opts":["Pracuję jako kelnerem","Pracuję jako kelner","Pracuję kelner"],"answer":1,
      "explain":"После jako — именительный падеж: <b>jako kelner</b>."},
     {"q":"2. «Я учительница» —","opts":["Jestem nauczycielka","Jestem nauczycielką","Jestem jako nauczycielka"],"answer":1,
      "explain":"После być — творительный: <b>nauczycielką</b>."},
     {"q":"3. «Я ищу работу» —","opts":["Szukam pracę","Szukam pracy","Szukam praca"],"answer":1,
      "explain":"szukać требует родительного: <b>pracy</b>."},
     {"q":"4. «Я нашёл работу» —","opts":["Znalazłem pracy","Znalazłem pracę","Szukałem pracę"],"answer":1,
      "explain":"znaleźć берёт винительный: <b>pracę</b>."},
     {"q":"5. «Когда вы можете начать?» (к мужчине) —","opts":["Kiedy może pan zacząć?","Kiedy możesz pan zacząć?","Kiedy pan możecie zacząć?"],"answer":0,
      "explain":"Pan идёт с формой третьего лица: <b>Kiedy może pan zacząć?</b>"}
   ]
 },
 "essay":{
   "intro":"Твоя очередь на собеседование — только без волнения, ты пишешь дома.",
   "prompt":"Напиши 4–5 предложений о своей работе: кем работаешь (или работал(а)), где, что тебе нравится, и какую работу хотел(а) бы найти.",
   "hint":"Опора: Pracuję jako… · Jestem…-em / -ą · Mam doświadczenie w… · Szukam… · Chciał(a)bym…",
   "example":"Pracuję jako nauczycielka w szkole. Pracuję tam od pięciu lat i lubię swoją pracę. Mam doświadczenie w pracy z dziećmi. Ale zarabiam mało, dlatego szukam nowej pracy. Chciałabym pracować w szkole językowej, na pół etatu."
 }
},
"26": {
 "day":26,"week":"04",
 "themeRu":"Знаю или умею",
 "themeEn":"Znać, wiedzieć, umieć",
 "intro":"Русское «знать» — одно слово на все случаи: «знаю Анну», «знаю, что…», «знаю город». Польский в этом месте разделился надвое: <b>znać</b> и <b>wiedzieć</b> — разные глаголы, и перепутать их нельзя. Рядом положим <b>umieć</b> и <b>potrafić</b> — они про умение, и вот тут родная интуиция снова работает без поправок.",
 "introAudio":"Русское «знать» — одно слово на все случаи: знаю Анну, знаю, что…, знаю город. Польский в этом месте разделился надвое: znać и wiedzieć — разные глаголы, и перепутать их нельзя. Рядом положим umieć и potrafić — они про умение, и вот тут родная интуиция снова работает без поправок.",
 "goals":[
   "Различать <b>znać</b> (кого/что) и <b>wiedzieć</b> (что…, где…, кто…)",
   "Спрягать оба: znam / wiem, znają / wiedzą",
   "Говорить об умениях: <b>umiem pływać</b>, <b>potrafię gotować</b>",
   "Не путать <b>umiem</b> (умею) и <b>mogę</b> (могу)"
 ],
 "learned":[
   "Различил(а) znać (кого, что) и wiedzieć (что…, где…, кто…)",
   "Проспрягал(а) оба: znam и wiem, znają и wiedzą",
   "Рассказал(а) об умениях: umiem pływać, potrafię gotować",
   "Не спутал(а) umiem (умею) и mogę (могу)"
 ],
 "review":{
   "intro":"Круг по вчерашней работе — две рамки профессии и два падежа при поиске. И один вопрос про вид: он всегда рядом.",
   "introAudio":"Круг по вчерашней работе — две рамки профессии и два падежа при поиске. И один вопрос про вид: он всегда рядом.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри на глагол — он выбирает падеж.",
      "q":"«Я работаю водителем» —","opts":["Pracuję jako kierowcą","Pracuję jako kierowca","Jestem jako kierowca"],"answer":1,
      "explain":"После jako — именительный: <b>jako kierowca</b>. Творительный нужен только после być."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж при szukać.",
      "q":"«Марек ищет работу» —","opts":["Marek szuka pracę","Marek szuka pracy","Marek znajduje pracy"],"answer":1,
      "explain":"szukać требует родительного: <b>pracy</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> процесс или результат?",
      "q":"Wczoraj przez godzinę ___ obiad. (готовила целый час)","opts":["ugotowałam","gotowałam","gotuję"],"answer":1,
      "explain":"«Целый час» — процесс, значит несовершенный вид: <b>gotowałam</b>."},
     {"type":"type","howto":"<b>Что делать:</b> напиши фразу о своей работе.",
      "q":"«Я работаю учителем» (мужчина)","accept":["pracuję jako nauczyciel","pracuje jako nauczyciel"],"placeholder":"Pracuję jako …"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Знать кого-то",
    "title":"<em>Znać</em> — про людей, места и вещи",
    "paras":[
      "Первый из двух глаголов — <b>znać</b>. Он всегда стоит рядом с существительным в винительном падеже: <b>Znam Annę.</b> <b>Znam ten film.</b> <b>Znam Kraków.</b> <b>Znam ten wiersz na pamięć.</b>",
      "Логика простая: znać — про знакомство. Ты знаком с человеком, с городом, с песней, с языком: <b>Znam angielski.</b> Всё, что можно назвать существительным, идёт к znać.",
      "Спряжение обычное, первой группы: <b>znam</b>, <b>znasz</b>, <b>zna</b>, <b>znamy</b>, <b>znacie</b>, <b>znają</b>. Прошедшее — <b>znałem</b> / <b>znałam</b>.",
      "И родственник, который у тебя уже есть с первого дня A1: <b>poznać</b> — «познакомиться». <b>Miło mi cię poznać.</b> Это совершенный вид к znać, и связь между ними та же, что между «знать» и «познакомиться»."
    ],
    "audio":"Первый из двух глаголов — znać. Он всегда стоит рядом с существительным в винительном падеже: znam Annę, znam ten film, znam Kraków. Логика простая: znać — про знакомство. Ты знаком с человеком, с городом, с песней, с языком: znam angielski. Всё, что можно назвать существительным, идёт к znać. Спряжение обычное, первой группы: znam, znasz, zna, znamy, znacie, znają. Прошедшее — znałem, znałam. И родственник, который у тебя уже есть с первого дня A1: poznać — познакомиться. Miło mi cię poznać.",
    "table":{"rows":[
      ["<b>Znam</b> Annę. <button class=\"play\" data-say=\"Znam Annę\">🔊</button>","Я знаю Анну. (человек)"],
      ["<b>Znasz</b> ten film? <button class=\"play\" data-say=\"Znasz ten film?\">🔊</button>","Ты знаешь этот фильм? (вещь)"],
      ["<b>Znamy</b> Kraków dobrze. <button class=\"play\" data-say=\"Znamy Kraków dobrze\">🔊</button>","Мы хорошо знаем Краков. (место)"],
      ["<b>Znam</b> angielski. <button class=\"play\" data-say=\"Znam angielski\">🔊</button>","Я знаю английский. (язык)"],
      ["Miło mi cię <b>poznać</b>. <button class=\"play\" data-say=\"Miło mi cię poznać\">🔊</button>","Приятно с тобой познакомиться."]
    ],"star":0},
    "examples":[
      {"ru":"Ты знаешь этого человека?","en":"<b>Znasz</b> tego człowieka?","say":"Znasz tego człowieka?"},
      {"ru":"Я не знаю этой песни.","en":"Nie <b>znam</b> tej piosenki.","gloss":"отрицание → родительный","say":"Nie znam tej piosenki."},
      {"ru":"Они знают друг друга много лет.","en":"<b>Znają</b> się od wielu lat.","say":"Znają się od wielu lat."},
      {"ru":"Мы познакомились в прошлом году.","en":"<b>Poznaliśmy się</b> w zeszłym roku.","say":"Poznaliśmy się w zeszłym roku."}
    ],
    "mistakes":[
      {"wrong":"Znam, że Marek pracuje w biurze.","right":"<b>Wiem</b>, że Marek pracuje w biurze.","why":"znać не умеет работать с że. Всё, что идёт после «что», принадлежит глаголу wiedzieć."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, что стоит после глагола.",
       "q":"«Я знаю Анну» —","opts":["Wiem Annę","Znam Annę","Znam, że Anna"],"answer":1,
       "explain":"Человек после глагола — значит <b>znam</b>. Wiedzieć так не умеет."},
      {"type":"choice","q":"«Ты знаешь этот фильм?» —",
       "opts":["Wiesz ten film?","Znasz ten film?","Wiesz o ten film?"],"answer":1,
       "explain":"Существительное в винительном — <b>znasz ten film</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши короткую фразу.",
       "q":"«Я хорошо знаю Краков»","accept":["znam kraków dobrze","znam krakow dobrze","dobrze znam kraków","dobrze znam krakow"],"placeholder":"Znam Kraków …"}
    ],
    "mnemonic":"👤 znać + существительное: знаком с человеком, городом, песней, языком."
   },
   {
    "eyebrow":"Правило 2 · Знать, что",
    "title":"<em>Wiedzieć</em> — про факты и целые мысли",
    "paras":[
      "Второй глагол — <b>wiedzieć</b>. Он никогда не берёт человека или вещь напрямую. Ему нужна целая мысль: <b>Wiem, że Marek szuka pracy.</b> <b>Wiem, gdzie jest dworzec.</b> <b>Nie wiem, kto to jest.</b> <b>Nie wiem, czy przyjdzie.</b>",
      "Спряжение неправильное — его стоит выучить целиком: <b>wiem</b>, <b>wiesz</b>, <b>wie</b>, <b>wiemy</b>, <b>wiecie</b>, <b>wiedzą</b>. Заметь последнюю форму: <b>wiedzą</b>, а не «wieją».",
      "Иногда wiedzieć всё же встречается с предметом — но только через предлог: <b>Wiem o tym.</b> — «я знаю об этом». Само по себе «wiem to» живёт лишь в коротких ответах вроде <b>Wiem to na pewno</b>.",
      "Разделительная линия проще, чем кажется: после znać стоит <em>кто или что</em>, после wiedzieć — <em>что…, где…, кто…, почему…, ли</em>. Русское «знать» покрывает оба случая, польскому нужны два глагола."
    ],
    "audio":"Второй глагол — wiedzieć. Он никогда не берёт человека или вещь напрямую. Ему нужна целая мысль: wiem, że Marek szuka pracy; wiem, gdzie jest dworzec; nie wiem, kto to jest; nie wiem, czy przyjdzie. Спряжение неправильное, его стоит выучить целиком: wiem, wiesz, wie, wiemy, wiecie, wiedzą. Заметь последнюю форму: wiedzą. Иногда wiedzieć всё же встречается с предметом, но только через предлог: wiem o tym — я знаю об этом. Разделительная линия проще, чем кажется: после znać стоит кто или что, после wiedzieć — что, где, кто, почему, ли.",
    "table":{"rows":[
      ["<b>Wiem, że</b>… <button class=\"play\" data-say=\"Wiem, że Marek szuka pracy\">🔊</button>","Я знаю, что…"],
      ["<b>Wiem, gdzie</b>… <button class=\"play\" data-say=\"Wiem, gdzie jest dworzec\">🔊</button>","Я знаю, где…"],
      ["<b>Nie wiem, czy</b>… <button class=\"play\" data-say=\"Nie wiem, czy przyjdzie\">🔊</button>","Я не знаю, придёт ли…"],
      ["ja <b>wiem</b> · ty <b>wiesz</b> · on <b>wie</b> <button class=\"play\" data-say=\"wiem, wiesz, wie\">🔊</button>","единственное число"],
      ["my <b>wiemy</b> · wy <b>wiecie</b> · oni <b>wiedzą</b> <button class=\"play\" data-say=\"wiemy, wiecie, wiedzą\">🔊</button>","множественное — запомни wiedzą"],
      ["<b>Wiem o tym.</b> <button class=\"play\" data-say=\"Wiem o tym\">🔊</button>","Я знаю об этом. (через предлог)"]
    ],"star":5},
    "examples":[
      {"ru":"Я знаю, что он ищет работу.","en":"<b>Wiem, że</b> on szuka pracy.","say":"Wiem, że on szuka pracy."},
      {"ru":"Ты знаешь, где вокзал?","en":"<b>Wiesz, gdzie</b> jest dworzec?","say":"Wiesz, gdzie jest dworzec?"},
      {"ru":"Не знаю, придёт ли она.","en":"<b>Nie wiem, czy</b> ona przyjdzie.","gloss":"czy — «ли»","say":"Nie wiem, czy ona przyjdzie."},
      {"ru":"Они не знают об этом.","en":"Oni nie <b>wiedzą</b> o tym.","say":"Oni nie wiedzą o tym."}
    ],
    "mistakes":[
      {"wrong":"Wiem Annę.","right":"<b>Znam Annę.</b>","why":"человек после глагола — это территория znać. Wiedzieć берёт только целую мысль."},
      {"wrong":"Oni wieją, gdzie to jest.","right":"Oni <b>wiedzą</b>, gdzie to jest.","why":"форма «они» у wiedzieć — wiedzą. Она неправильная, её просто запоминают."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> смотри, что идёт после глагола — существительное или мысль.",
       "q":"«Я знаю, что он придёт» —","opts":["Znam, że przyjdzie","Wiem, że przyjdzie","Wiem go, że przyjdzie"],"answer":1,
       "explain":"После «что» — только <b>wiem</b>. Znać с że не работает."},
      {"type":"choice","q":"Форма «они знают (факт)» —",
       "opts":["oni znają","oni wiedzą","oni wieją"],"answer":1,
       "explain":"У wiedzieć форма «они» — <b>wiedzą</b>. Oni znają — это «они знакомы с кем-то/чем-то»."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Ты знаешь, где вокзал?»</b>","answer":"Wiesz gdzie jest dworzec"}
    ],
    "mnemonic":"🧠 znam KOGO/CO · wiem, ŻE / GDZIE / KTO. Существительное — к znać, мысль — к wiedzieć."
   },
   {
    "eyebrow":"Правило 3 · Умею",
    "title":"<em>Umiem pływać</em> — навык",
    "paras":[
      "Третий глагол — про умение: <b>umieć</b> плюс инфинитив. <b>Umiem pływać.</b> <b>Umiem gotować.</b> <b>Umiem prowadzić samochód.</b> Русская рамка «умею + что делать» переносится один в один.",
      "Спряжение: <b>umiem</b>, <b>umiesz</b>, <b>umie</b>, <b>umiemy</b>, <b>umiecie</b>, <b>umieją</b>. Прошедшее — <b>umiałem</b> / <b>umiałam</b>.",
      "Рядом стоит <b>potrafić</b>: <b>potrafię</b>, <b>potrafisz</b>, <b>potrafi</b>, <b>potrafimy</b>, <b>potraficie</b>, <b>potrafią</b>. Тоже с инфинитивом, и в разговоре об умениях они часто взаимозаменяемы: <b>Umiem gotować</b> ≈ <b>Potrafię gotować</b>.",
      "Оттенок всё же есть: <b>umieć</b> — про выученный навык (плавать, водить, готовить), <b>potrafić</b> — про способность справиться: <b>Potrafię czekać.</b> — «я умею ждать», «я в состоянии подождать»."
    ],
    "audio":"Третий глагол — про умение: umieć плюс инфинитив. Umiem pływać, umiem gotować, umiem prowadzić samochód. Русская рамка «умею плюс что делать» переносится один в один. Спряжение: umiem, umiesz, umie, umiemy, umiecie, umieją. Прошедшее — umiałem, umiałam. Рядом стоит potrafić: potrafię, potrafisz, potrafi, potrafimy, potraficie, potrafią. Тоже с инфинитивом, и в разговоре об умениях они часто взаимозаменяемы. Оттенок всё же есть: umieć — про выученный навык, potrafić — про способность справиться: potrafię czekać, я умею ждать.",
    "table":{"rows":[
      ["<b>Umiem</b> pływać. <button class=\"play\" data-say=\"Umiem pływać\">🔊</button>","Я умею плавать."],
      ["<b>Umiesz</b> gotować? <button class=\"play\" data-say=\"Umiesz gotować?\">🔊</button>","Ты умеешь готовить?"],
      ["<b>Umieją</b> mówić po polsku. <button class=\"play\" data-say=\"Umieją mówić po polsku\">🔊</button>","Они умеют говорить по-польски."],
      ["<b>Potrafię</b> to zrobić. <button class=\"play\" data-say=\"Potrafię to zrobić\">🔊</button>","Я способен(на) это сделать."],
      ["<b>Nie umiem</b> tańczyć. <button class=\"play\" data-say=\"Nie umiem tańczyć\">🔊</button>","Я не умею танцевать."]
    ],"star":0},
    "examples":[
      {"ru":"Я умею водить машину.","en":"<b>Umiem prowadzić</b> samochód.","say":"Umiem prowadzić samochód."},
      {"ru":"Она не умеет плавать.","en":"Ona <b>nie umie pływać</b>.","say":"Ona nie umie pływać."},
      {"ru":"Он способен работать двенадцать часов.","en":"On <b>potrafi pracować</b> dwanaście godzin.","say":"On potrafi pracować dwanaście godzin."},
      {"ru":"Я умел это в детстве.","en":"<b>Umiałem</b> to w dzieciństwie.","say":"Umiałem to w dzieciństwie."}
    ],
    "mistakes":[
      {"wrong":"Umiem pływam.","right":"<b>Umiem pływać.</b>","why":"после umieć идёт инфинитив, как в русском «умею плавать»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что идёт после umieć.",
       "q":"«Я умею готовить» —","opts":["Umiem gotuję","Umiem gotować","Wiem gotować"],"answer":1,
       "explain":"После umieć — инфинитив: <b>umiem gotować</b>."},
      {"type":"choice","q":"Форма «они умеют» —",
       "opts":["oni umią","oni umieją","oni wiedzą"],"answer":1,
       "explain":"<b>Umieją</b> — форма «они» у umieć."},
      {"type":"speak","howto":"Нажми микрофон и скажи о себе.",
       "target":"Umiem mówić po polsku.","sub":"я умею говорить по-польски","want":"Umiem mówić po polsku."}
    ],
    "mnemonic":"🏊 umieć + инфинитив = «умею делать». Та же рамка, что в русском."
   },
   {
    "eyebrow":"Правило 4 · Умею или могу",
    "title":"<em>Umiem</em> ≠ <em>mogę</em>",
    "paras":[
      "Ещё одна пара, где русский помогает: <b>umiem</b> — умею (у меня есть навык), <b>mogę</b> — могу (есть возможность или разрешение). Разница ровно та же, что в русском.",
      "<b>Umiem pływać, ale dziś nie mogę</b> — «умею плавать, но сегодня не могу»: навык есть, возможности нет. Обе половины фразы нужны, и обе понятны без объяснений.",
      "Полезный оборот сверх программы: <b>znać się na czymś</b> — «разбираться в чём-то»: <b>Znam się na komputerach.</b> Здесь znać работает с предлогом na и предложным падежом.",
      "И маленькая проверка на каждый день. Спроси себя: после глагола идёт <em>существительное</em> (→ znać), <em>целая мысль</em> (→ wiedzieć) или <em>инфинитив</em> (→ umieć / potrafić)? Три вопроса, три ответа, никаких исключений."
    ],
    "audio":"Ещё одна пара, где русский помогает: umiem — умею, есть навык; mogę — могу, есть возможность или разрешение. Разница ровно та же, что в русском. Umiem pływać, ale dziś nie mogę — умею плавать, но сегодня не могу. Полезный оборот сверх программы: znać się na czymś — разбираться в чём-то: znam się na komputerach. Здесь znać работает с предлогом na и предложным падежом. И маленькая проверка на каждый день. Спроси себя: после глагола идёт существительное, тогда znać; целая мысль, тогда wiedzieć; инфинитив, тогда umieć или potrafić. Три вопроса, три ответа, никаких исключений.",
    "table":{"rows":[
      ["<b>Umiem</b> pływać. <button class=\"play\" data-say=\"Umiem pływać\">🔊</button>","Умею плавать (навык)."],
      ["<b>Mogę</b> pływać. <button class=\"play\" data-say=\"Mogę pływać\">🔊</button>","Могу плавать (можно, есть возможность)."],
      ["znać + существительное","Znam Annę."],
      ["wiedzieć + że / gdzie / czy","Wiem, że przyjdzie."],
      ["umieć / potrafić + инфинитив","Umiem gotować."],
      ["<b>znać się na</b> czymś <button class=\"play\" data-say=\"Znam się na komputerach\">🔊</button>","разбираться в чём-то"]
    ],"star":-1},
    "examples":[
      {"ru":"Умею плавать, но сегодня не могу — болит нога.","en":"<b>Umiem pływać, ale dziś nie mogę</b> — boli mnie noga.","gloss":"boli mnie — из дня 18","say":"Umiem pływać, ale dziś nie mogę — boli mnie noga."},
      {"ru":"Я разбираюсь в компьютерах.","en":"<b>Znam się</b> na komputerach.","say":"Znam się na komputerach."},
      {"ru":"Я знаю его, но не знаю, где он живёт.","en":"<b>Znam</b> go, ale nie <b>wiem</b>, gdzie mieszka.","gloss":"оба глагола в одной фразе","say":"Znam go, ale nie wiem, gdzie mieszka."}
    ],
    "mistakes":[
      {"wrong":"Mogę pływać (в значении «умею»)","right":"<b>Umiem pływać.</b>","why":"навык — это umieć. Mogę значит «мне можно» или «у меня есть возможность»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, о навыке речь или о возможности.",
       "q":"«Я умею водить машину, но сегодня не могу» —","opts":["Mogę prowadzić, ale dziś nie umiem","Umiem prowadzić, ale dziś nie mogę","Wiem prowadzić, ale dziś nie mogę"],"answer":1,
       "explain":"Навык — <b>umiem</b>, возможность — <b>mogę</b>. Так же, как в русском."},
      {"type":"choice","q":"«Я знаю его, но не знаю, где он живёт» —",
       "opts":["Wiem go, ale nie znam, gdzie mieszka","Znam go, ale nie wiem, gdzie mieszka","Znam go, ale nie znam, gdzie mieszka"],"answer":1,
       "explain":"Человек — к znać, мысль после «где» — к wiedzieć: <b>Znam go, ale nie wiem, gdzie mieszka.</b>"},
      {"type":"type","howto":"<b>Что делать:</b> напиши фразу о себе.",
       "q":"«Я не знаю, где он живёт»","accept":["nie wiem, gdzie on mieszka","nie wiem gdzie on mieszka","nie wiem, gdzie mieszka","nie wiem gdzie mieszka"],"placeholder":"Nie wiem, gdzie …"}
    ],
    "mnemonic":"🔑 Существительное → znam. Мысль → wiem. Инфинитив → umiem. Три ключа к трём дверям."
   }
 ],
 "dialogue":{
   "intro":"Анна расспрашивает Марека о новом коллеге. Посчитай, сколько раз в разговоре меняются znać и wiedzieć.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"Znasz nowego kolegę z biura?","ru":"Ты знаешь нового коллегу из офиса?",
      "words":[["Znasz","ты знаешь"],["kolegę","коллегу"]]},
     {"who":"M","name":"Marek","side":"right","en":"Znam go trochę. Wiem, że nazywa się Piotr.","ru":"Немного знаю. Знаю, что его зовут Пётр.",
      "words":[["Znam go","я его знаю"],["Wiem, że","я знаю, что"]]},
     {"who":"A","name":"Anna","side":"left","en":"A wiesz, skąd on jest?","ru":"А ты знаешь, откуда он?",
      "words":[["wiesz","ты знаешь"],["skąd","откуда"]]},
     {"who":"M","name":"Marek","side":"right","en":"Nie wiem. Nie pytałem.","ru":"Не знаю. Не спрашивал.",
      "words":[["Nie wiem","не знаю"],["pytałem","я спрашивал"]]},
     {"who":"A","name":"Anna","side":"left","en":"Podobno umie mówić po niemiecku i po włosku.","ru":"Говорят, он умеет говорить по-немецки и по-итальянски.",
      "words":[["Podobno","говорят, будто бы"],["umie mówić","умеет говорить"]]},
     {"who":"M","name":"Marek","side":"right","en":"Naprawdę? Ja nie znam żadnego języka oprócz polskiego.","ru":"Правда? Я не знаю ни одного языка, кроме польского.",
      "words":[["nie znam","я не знаю"],["oprócz","кроме"]]},
     {"who":"A","name":"Anna","side":"left","en":"Nieprawda. Znasz angielski całkiem dobrze.","ru":"Неправда. Английский ты знаешь совсем неплохо.",
      "words":[["Nieprawda","неправда"],["całkiem dobrze","совсем неплохо"]]},
     {"who":"M","name":"Marek","side":"right","en":"Wiesz co? Może masz rację.","ru":"Знаешь что? Может, ты и права.",
      "words":[["Wiesz co?","знаешь что?"],["Może","может быть"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — вопрос на улице. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Przepraszam, wie pani, gdzie jest apteka?","ru":"Извините, вы не знаете, где аптека?"},
     {"who":"B","en":"Wiem. Za rogiem, obok banku.","ru":"Знаю. За углом, рядом с банком."},
     {"who":"A","en":"A czy zna pani ten sklep obok?","ru":"А вы знаете тот магазин рядом?"},
     {"who":"B","en":"Znam, ale dzisiaj jest zamknięty.","ru":"Знаю, но сегодня он закрыт."},
     {"who":"A","en":"Dziękuję bardzo!","ru":"Большое спасибо!"}
   ]
 },
 "vocab":{
   "intro":"Слова дня — четыре глагола, которые в русском живут под одной крышей.",
   "items":[
     {"en":"znać","ru":"знать (кого/что), быть знакомым","ex":"Znam Annę."},
     {"en":"wiedzieć","ru":"знать (что…, где…)","ex":"Wiem, że przyjdzie."},
     {"en":"wiedzą","ru":"они знают (факт)","ex":"Oni wiedzą o tym."},
     {"en":"umieć","ru":"уметь","ex":"Umiem pływać."},
     {"en":"potrafić","ru":"уметь, быть в состоянии","ex":"Potrafię to zrobić."},
     {"en":"poznać","ru":"познакомиться, узнать","ex":"Miło mi cię poznać."},
     {"en":"znać się na czymś","ru":"разбираться в чём-то","ex":"Znam się na komputerach."},
     {"en":"prowadzić samochód","ru":"водить машину","ex":"Umiem prowadzić samochód."},
     {"en":"pływać","ru":"плавать","ex":"Nie umiem pływać."},
     {"en":"gotować","ru":"готовить","ex":"Umiesz gotować?"},
     {"en":"czy","ru":"ли (в вопросе внутри фразы)","ex":"Nie wiem, czy przyjdzie."},
     {"en":"podobno","ru":"говорят, будто бы","ex":"Podobno zna cztery języki."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу.",
   "pairs":[["Znam Annę","я знаю Анну"],["Wiem, że przyjdzie","я знаю, что он придёт"],["Umiem pływać","я умею плавать"],["Nie wiem","не знаю"]]
 },
 "reading":{
   "intro":"Прочитай и послушай короткий текст. Отмечай про себя, почему в каждой строке стоит именно этот глагол.",
   "title":"Znam, wiem, umiem",
   "sentences":["Znam Marka od pięciu lat.","Wiem, że szuka teraz nowej pracy.","Nie wiem, czy już ją znalazł.","Znam też jego siostrę — ma na imię Ewa.","Ewa umie grać na gitarze.","Podobno potrafi grać cztery godziny bez przerwy.","Ja nie umiem grać na niczym.","Ale znam się na muzyce i lubię słuchać.","Wiem, gdzie w mieście są dobre koncerty.","Jeśli chcesz, mogę ci pokazać."],
   "translation":"Я знаю Марека пять лет. Я знаю, что сейчас он ищет новую работу. Не знаю, нашёл ли уже. Я знаю и его сестру — её зовут Эва. Эва умеет играть на гитаре. Говорят, она может играть четыре часа без перерыва. Я не умею играть ни на чём. Но я разбираюсь в музыке и люблю слушать. Я знаю, где в городе хорошие концерты. Если хочешь, могу тебе показать."
 },
 "quiz":{
   "intro":"Пять вопросов — и два польских «знать» больше не путаются.",
   "items":[
     {"q":"1. «Я знаю этот фильм» —","opts":["Wiem ten film","Znam ten film","Wiem o ten film"],"answer":1,
      "explain":"Существительное после глагола — территория znać: <b>Znam ten film.</b>"},
     {"q":"2. «Я знаю, что он придёт» —","opts":["Znam, że przyjdzie","Wiem, że przyjdzie","Umiem, że przyjdzie"],"answer":1,
      "explain":"Целая мысль после «что» — только <b>wiem</b>."},
     {"q":"3. Форма «они знают (факт)» —","opts":["oni znają","oni wiedzą","oni umieją"],"answer":1,
      "explain":"У wiedzieć форма «они» неправильная: <b>wiedzą</b>."},
     {"q":"4. «Ты умеешь готовить?» —","opts":["Wiesz gotować?","Umiesz gotować?","Znasz gotować?"],"answer":1,
      "explain":"Навык плюс инфинитив — <b>umiesz gotować</b>."},
     {"q":"5. «Умею плавать, но сегодня не могу» —","opts":["Mogę pływać, ale dziś nie umiem","Umiem pływać, ale dziś nie mogę","Wiem pływać, ale dziś nie mogę"],"answer":1,
      "explain":"Навык — umiem, возможность — mogę. Разница та же, что в русском."}
   ]
 },
 "essay":{
   "intro":"Короткий портрет в четырёх глаголах — и половина из них сегодняшние.",
   "prompt":"Напиши 4–5 предложений: кого ты знаешь в своём городе, что ты знаешь о нём, что умеешь делать хорошо и чего не умеешь совсем.",
   "hint":"Опора: Znam… · Wiem, że… · Nie wiem, czy… · Umiem… · Nie umiem…",
   "example":"Znam w Krakowie dużo ludzi. Wiem, gdzie są najlepsze kawiarnie. Umiem gotować i lubię to robić w weekend. Nie umiem tańczyć, ale chciałabym się nauczyć. Nie wiem, czy to trudne — może spróbuję."
 }
},
"27": {
 "day":27,"week":"04",
 "themeRu":"Путешествие",
 "themeEn":"Podróż",
 "intro":"Билет до Гданьска, пожалуйста — фраза, которая открывает выходные. Анна с Мареком собрались к морю, и вместе с ними мы пройдём весь путь: касса, расписание, платформа, пересадка. А ещё разберём, почему в Польшу едут <b>do</b>, а в Венгрию — <b>na</b>.",
 "introAudio":"Билет до Гданьска, пожалуйста — фраза, которая открывает выходные. Анна с Мареком собрались к морю, и вместе с ними мы пройдём весь путь: касса, расписание, платформа, пересадка. А ещё разберём, почему в Польшу едут do, а в Венгрию — na.",
 "goals":[
   "Купить билет: <b>bilet do Gdańska</b>, в одну сторону или туда-обратно",
   "Спросить расписание: <b>O której odjeżdża pociąg?</b>, <b>Z którego peronu?</b>",
   "Выбрать <b>do</b> или <b>na</b> перед страной: do Polski, но na Węgry",
   "Назвать транспорт творительным падежом: <b>jadę pociągiem</b>"
 ],
 "learned":[
   "Купил(а) билет: bilet do Gdańska, в одну сторону или туда-обратно",
   "Спросил(а) расписание: O której odjeżdża pociąg? Z którego peronu?",
   "Выбрал(а) do или na перед страной: do Polski, но na Węgry",
   "Назвал(а) транспорт творительным падежом: jadę pociągiem"
 ],
 "review":{
   "intro":"Вчерашние четыре глагола — на разминку. Проверим, кто из них берёт существительное, кто мысль, а кто инфинитив.",
   "introAudio":"Вчерашние четыре глагола — на разминку. Проверим, кто из них берёт существительное, кто мысль, а кто инфинитив.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, что стоит после глагола.",
      "q":"«Я знаю этот город» —","opts":["Wiem to miasto","Znam to miasto","Umiem to miasto"],"answer":1,
      "explain":"Существительное после глагола — это znać: <b>Znam to miasto.</b>"},
     {"type":"choice","howto":"<b>Что делать:</b> после «где» идёт целая мысль.",
      "q":"«Не знаю, где вокзал» —","opts":["Nie znam, gdzie jest dworzec","Nie wiem, gdzie jest dworzec","Nie umiem, gdzie jest dworzec"],"answer":1,
      "explain":"Мысль после «где» — только <b>wiem</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> процесс или результат?",
      "q":"W zeszłym roku ___ do Gdańska trzy razy. (ездила три раза)","opts":["pojechałam","jeździłam","jadę"],"answer":1,
      "explain":"Повторявшаяся поездка — многонаправленный глагол несовершенного вида: <b>jeździłam</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Я умею говорить по-польски»</b>","answer":"Umiem mówić po polsku"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · В кассе",
    "title":"<em>Bilet do</em> + родительный",
    "paras":[
      "Билет «до» города — <b>bilet do</b> плюс родительный падеж: <b>bilet do Gdańska</b>, <b>bilet do Warszawy</b>, <b>bilet do Krakowa</b>. То же do, что в <b>idę do sklepu</b> из A1: направление в польском почти всегда просит родительного.",
      "Здесь и главное расхождение с русским. По-русски мы едем «в Варшаву» — винительный. По-польски — <b>do Warszawy</b>, родительный. Правило простое, но требует привычки: <em>едешь куда-то — ставь do и родительный</em>.",
      "Тип билета: <b>w jedną stronę</b> (в одну сторону) и <b>powrotny</b> (обратный, туда-обратно). Скидочный — <b>ulgowy</b>, полный — <b>normalny</b>.",
      "Готовые фразы кассы: <b>Poproszę bilet do Gdańska w jedną stronę.</b> <b>Ile kosztuje bilet powrotny?</b> <b>Czy jest zniżka dla studentów?</b>"
    ],
    "audio":"Билет «до» города — bilet do плюс родительный падеж: bilet do Gdańska, bilet do Warszawy, bilet do Krakowa. То же do, что в idę do sklepu из A1: направление в польском почти всегда просит родительного. Здесь и главное расхождение с русским. По-русски мы едем «в Варшаву» — винительный. По-польски — do Warszawy, родительный. Правило простое, но требует привычки: едешь куда-то — ставь do и родительный. Тип билета: w jedną stronę, в одну сторону, и powrotny, обратный. Скидочный — ulgowy, полный — normalny. Готовые фразы кассы: poproszę bilet do Gdańska w jedną stronę; ile kosztuje bilet powrotny; czy jest zniżka dla studentów.",
    "table":{"rows":[
      ["bilet <b>do Gdańska</b> <button class=\"play\" data-say=\"bilet do Gdańska\">🔊</button>","билет до Гданьска"],
      ["bilet <b>do Warszawy</b> <button class=\"play\" data-say=\"bilet do Warszawy\">🔊</button>","билет до Варшавы"],
      ["bilet <b>w jedną stronę</b> <button class=\"play\" data-say=\"bilet w jedną stronę\">🔊</button>","билет в одну сторону"],
      ["bilet <b>powrotny</b> <button class=\"play\" data-say=\"bilet powrotny\">🔊</button>","билет туда и обратно"],
      ["bilet <b>ulgowy</b> / <b>normalny</b> <button class=\"play\" data-say=\"bilet ulgowy, bilet normalny\">🔊</button>","льготный / полный"],
      ["<b>kasa biletowa</b> <button class=\"play\" data-say=\"kasa biletowa\">🔊</button>","билетная касса"]
    ],"star":0},
    "examples":[
      {"ru":"Мне, пожалуйста, билет до Кракова.","en":"Poproszę <b>bilet do Krakowa</b>.","say":"Poproszę bilet do Krakowa."},
      {"ru":"Два билета туда и обратно, пожалуйста.","en":"Poproszę dwa <b>bilety powrotne</b>.","say":"Poproszę dwa bilety powrotne."},
      {"ru":"Сколько стоит билет до Гданьска?","en":"Ile kosztuje <b>bilet do Gdańska</b>?","say":"Ile kosztuje bilet do Gdańska?"},
      {"ru":"Мы едем в Варшаву в субботу.","en":"Jedziemy <b>do Warszawy</b> w sobotę.","gloss":"направление → do + родительный","say":"Jedziemy do Warszawy w sobotę."}
    ],
    "mistakes":[
      {"wrong":"Bilet do Warszawę.","right":"Bilet <b>do Warszawy</b>.","why":"после do — родительный падеж, а не винительный, как в русском «в Варшаву»."},
      {"wrong":"Jadę w Kraków.","right":"Jadę <b>do Krakowa</b>.","why":"направление к городу — только do плюс родительный."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после do.",
       "q":"«Билет до Варшавы» —","opts":["Bilet do Warszawa","Bilet do Warszawy","Bilet w Warszawę"],"answer":1,
       "explain":"После do — родительный: <b>do Warszawy</b>."},
      {"type":"choice","q":"«Билет в одну сторону» —",
       "opts":["bilet powrotny","bilet w jedną stronę","bilet ulgowy"],"answer":1,
       "explain":"<b>W jedną stronę</b> — в одну сторону. Powrotny — туда и обратно."},
      {"type":"type","howto":"<b>Что делать:</b> напиши фразу целиком.",
       "q":"«Мне, пожалуйста, билет до Гданьска»","accept":["poproszę bilet do gdańska","poprosze bilet do gdanska","poproszę bilet do gdanska","poprosze bilet do gdańska"],"placeholder":"Poproszę bilet do …"}
    ],
    "mnemonic":"🎫 do + родительный: do Gdańska, do Warszawy, do Krakowa. Русское «в город» здесь не работает."
   },
   {
    "eyebrow":"Правило 2 · Расписание",
    "title":"<em>O której odjeżdża pociąg?</em>",
    "paras":[
      "Поезд и автобус <b>odjeżdżają</b> (отправляются) и <b>przyjeżdżają</b> (прибывают). Самолёт — <b>odlatuje</b> и <b>przylatuje</b>. Внутри слов сидят знакомые корни: jechać и latać.",
      "Спросить время — знакомым оборотом из A1: <b>O której odjeżdża pociąg do Gdańska?</b> Ответ: <b>O siódmej trzydzieści.</b>",
      "Платформа: <b>Z którego peronu?</b> — «с какой платформы?». Ответ: <b>Z peronu drugiego.</b> Расписание целиком — <b>rozkład jazdy</b>.",
      "И слово, без которого не обходится ни одна поездка: <b>opóźnienie</b> — опоздание. <b>Pociąg ma dwadzieścia minut opóźnienia.</b> — «поезд опаздывает на двадцать минут»."
    ],
    "audio":"Поезд и автобус odjeżdżają, отправляются, и przyjeżdżają, прибывают. Самолёт — odlatuje и przylatuje. Внутри слов сидят знакомые корни: jechać и latać. Спросить время — знакомым оборотом из A1: o której odjeżdża pociąg do Gdańska? Ответ: o siódmej trzydzieści. Платформа: z którego peronu — с какой платформы. Ответ: z peronu drugiego. Расписание целиком — rozkład jazdy. И слово, без которого не обходится ни одна поездка: opóźnienie, опоздание. Pociąg ma dwadzieścia minut opóźnienia — поезд опаздывает на двадцать минут.",
    "table":{"rows":[
      ["O której <b>odjeżdża</b> pociąg? <button class=\"play\" data-say=\"O której odjeżdża pociąg?\">🔊</button>","Во сколько отправляется поезд?"],
      ["O której <b>przyjeżdża</b>? <button class=\"play\" data-say=\"O której przyjeżdża?\">🔊</button>","Во сколько прибывает?"],
      ["O której <b>odlatuje</b> samolot? <button class=\"play\" data-say=\"O której odlatuje samolot?\">🔊</button>","Во сколько вылетает самолёт?"],
      ["<b>Z którego peronu?</b> <button class=\"play\" data-say=\"Z którego peronu?\">🔊</button>","С какой платформы?"],
      ["<b>rozkład jazdy</b> <button class=\"play\" data-say=\"rozkład jazdy\">🔊</button>","расписание"],
      ["dziesięć minut <b>opóźnienia</b> <button class=\"play\" data-say=\"dziesięć minut opóźnienia\">🔊</button>","опоздание на десять минут"]
    ],"star":-1},
    "examples":[
      {"ru":"Во сколько отправляется поезд до Гданьска?","en":"<b>O której odjeżdża</b> pociąg do Gdańska?","say":"O której odjeżdża pociąg do Gdańska?"},
      {"ru":"В семь тридцать, со второй платформы.","en":"O siódmej trzydzieści, <b>z peronu drugiego</b>.","say":"O siódmej trzydzieści, z peronu drugiego."},
      {"ru":"Поезд опаздывает на пятнадцать минут.","en":"Pociąg ma piętnaście minut <b>opóźnienia</b>.","say":"Pociąg ma piętnaście minut opóźnienia."},
      {"ru":"Автобус прибывает в шесть вечера.","en":"Autobus <b>przyjeżdża</b> o szóstej wieczorem.","say":"Autobus przyjeżdża o szóstej wieczorem."}
    ],
    "mistakes":[
      {"wrong":"O której godzina odjeżdża pociąg?","right":"<b>O której</b> odjeżdża pociąg?","why":"оборот o której уже содержит в себе «godzinie» — добавлять слово не нужно."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> выбери глагол для поезда.",
       "q":"«Во сколько отправляется поезд?» —","opts":["O której odlatuje pociąg?","O której odjeżdża pociąg?","O której idzie pociąg?"],"answer":1,
       "explain":"Поезд <b>odjeżdża</b>. Odlatuje — про самолёт."},
      {"type":"choice","q":"<b>Pociąg ma dziesięć minut opóźnienia</b> значит —",
       "opts":["поезд идёт десять минут","поезд опаздывает на десять минут","поезд отправляется через десять минут"],"answer":1,
       "explain":"<b>Opóźnienie</b> — опоздание, задержка."},
      {"type":"speak","howto":"Нажми микрофон и спроси вслух.",
       "target":"O której odjeżdża pociąg do Gdańska?","sub":"во сколько отправляется поезд до Гданьска?","want":"O której odjeżdża pociąg do Gdańska?"}
    ],
    "mnemonic":"🚆 odjeżdża — отправляется · przyjeżdża — прибывает · opóźnienie — опоздание."
   },
   {
    "eyebrow":"Правило 3 · Ловушка карты",
    "title":"<em>do Polski</em>, но <em>na Węgry</em>",
    "paras":[
      "Почти все страны и города берут <b>do</b> плюс родительный: <b>do Polski</b>, <b>do Niemiec</b>, <b>do Francji</b>, <b>do Włoch</b>, <b>do Czech</b>, <b>do Gdańska</b>.",
      "Но небольшая группа соседей упрямо требует <b>na</b> плюс винительный: <b>na Węgry</b> (в Венгрию), <b>na Słowację</b>, <b>na Ukrainę</b>, <b>na Litwę</b>, <b>na Białoruś</b>, <b>na Łotwę</b>. Сюда же острова: <b>na Cypr</b>, <b>na Maltę</b>, <b>na Islandię</b>.",
      "Правила, объясняющего это до конца, нет — есть историческая привычка языка. Список короткий, и его просто запоминают: соседи по региону и острова идут с na.",
      "Когда речь не о движении, а о месте, na остаётся, но падеж меняется на предложный: <b>Jestem na Węgrzech.</b> <b>Byłam na Słowacji.</b> — против <b>Jestem w Polsce.</b> <b>Byłam we Włoszech.</b>"
    ],
    "audio":"Почти все страны и города берут do плюс родительный: do Polski, do Niemiec, do Francji, do Włoch, do Czech, do Gdańska. Но небольшая группа соседей упрямо требует na плюс винительный: na Węgry — в Венгрию, na Słowację, na Ukrainę, na Litwę, na Białoruś, na Łotwę. Сюда же острова: na Cypr, na Maltę, na Islandię. Правила, объясняющего это до конца, нет — есть историческая привычка языка. Список короткий, и его просто запоминают. Когда речь не о движении, а о месте, na остаётся, но падеж меняется на предложный: jestem na Węgrzech, byłam na Słowacji — против jestem w Polsce, byłam we Włoszech.",
    "table":{"rows":[
      ["Jadę <b>do Polski</b>. <button class=\"play\" data-say=\"Jadę do Polski\">🔊</button>","Еду в Польшу. (do + родительный)"],
      ["Jadę <b>do Niemiec</b>. <button class=\"play\" data-say=\"Jadę do Niemiec\">🔊</button>","Еду в Германию."],
      ["Jadę <b>na Węgry</b>. <button class=\"play\" data-say=\"Jadę na Węgry\">🔊</button>","Еду в Венгрию. (na + винительный)"],
      ["Jadę <b>na Słowację</b>. <button class=\"play\" data-say=\"Jadę na Słowację\">🔊</button>","Еду в Словакию."],
      ["Jestem <b>w Polsce</b>. <button class=\"play\" data-say=\"Jestem w Polsce\">🔊</button>","Я в Польше. (место)"],
      ["Jestem <b>na Węgrzech</b>. <button class=\"play\" data-say=\"Jestem na Węgrzech\">🔊</button>","Я в Венгрии. (место)"]
    ],"star":2},
    "examples":[
      {"ru":"Летом мы поедем в Италию.","en":"Latem pojedziemy <b>do Włoch</b>.","say":"Latem pojedziemy do Włoch."},
      {"ru":"В прошлом году я была в Словакии.","en":"W zeszłym roku byłam <b>na Słowacji</b>.","gloss":"место → na + предложный","say":"W zeszłym roku byłam na Słowacji."},
      {"ru":"Он едет в Венгрию на неделю.","en":"On jedzie <b>na Węgry</b> na tydzień.","say":"On jedzie na Węgry na tydzień."},
      {"ru":"Мы возвращаемся в Польшу в воскресенье.","en":"Wracamy <b>do Polski</b> w niedzielę.","say":"Wracamy do Polski w niedzielę."}
    ],
    "mistakes":[
      {"wrong":"Jadę do Węgier na wakacje.","right":"Jadę <b>na Węgry</b> na wakacje.","why":"Венгрия входит в короткий список стран с na: na Węgry, na Słowację, na Ukrainę."},
      {"wrong":"Jestem na Polsce.","right":"Jestem <b>w Polsce</b>.","why":"Польша идёт с w и предложным падежом — как большинство стран."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни короткий список стран с na.",
       "q":"«Я еду в Венгрию» —","opts":["Jadę do Węgier","Jadę na Węgry","Jadę w Węgry"],"answer":1,
       "explain":"Венгрия — из группы с na плюс винительный: <b>na Węgry</b>."},
      {"type":"choice","q":"«Мы едем в Германию» —",
       "opts":["Jedziemy na Niemcy","Jedziemy do Niemiec","Jedziemy w Niemcy"],"answer":1,
       "explain":"Германия — как большинство стран: <b>do Niemiec</b>, do плюс родительный."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Летом мы поедем в Италию»</b>","answer":"Latem pojedziemy do Włoch"}
    ],
    "mnemonic":"🗺️ do — почти все страны. na — Węgry, Słowacja, Ukraina, Litwa, Białoruś и острова."
   },
   {
    "eyebrow":"Правило 4 · В пути",
    "title":"<em>Jadę pociągiem</em> и <em>przesiadka</em>",
    "paras":[
      "Чем едешь — творительный падеж: <b>jadę pociągiem</b>, <b>autobusem</b>, <b>samochodem</b>, <b>tramwajem</b>; <b>lecę samolotem</b>. Русское «еду поездом» устроено ровно так же — падеж совпадает полностью.",
      "Садиться и выходить: <b>wsiadam do pociągu</b> (захожу в поезд, с do и родительным) — <b>wysiadam z pociągu</b> (выхожу, с z и родительным). Оба предлога тянут родительный.",
      "Пересадка — <b>przesiadka</b>: <b>Czy jest przesiadka?</b> <b>Muszę się przesiąść w Katowicach.</b> Прямой поезд — <b>bezpośredni</b>.",
      "Места вокруг: <b>dworzec</b> (вокзал), <b>przystanek</b> (остановка), <b>lotnisko</b> (аэропорт), <b>peron</b> (платформа), <b>wagon</b>, <b>miejsce</b> (место в вагоне)."
    ],
    "audio":"Чем едешь — творительный падеж: jadę pociągiem, autobusem, samochodem, tramwajem; lecę samolotem. Русское «еду поездом» устроено ровно так же — падеж совпадает полностью. Садиться и выходить: wsiadam do pociągu, захожу в поезд, с do и родительным; wysiadam z pociągu, выхожу, с z и родительным. Оба предлога тянут родительный. Пересадка — przesiadka: czy jest przesiadka; muszę się przesiąść w Katowicach. Прямой поезд — bezpośredni. Места вокруг: dworzec — вокзал, przystanek — остановка, lotnisko — аэропорт, peron — платформа, wagon, miejsce.",
    "table":{"rows":[
      ["Jadę <b>pociągiem</b>. <button class=\"play\" data-say=\"Jadę pociągiem\">🔊</button>","Еду поездом. (творительный)"],
      ["Jadę <b>autobusem</b>. <button class=\"play\" data-say=\"Jadę autobusem\">🔊</button>","Еду автобусом."],
      ["Lecę <b>samolotem</b>. <button class=\"play\" data-say=\"Lecę samolotem\">🔊</button>","Лечу самолётом."],
      ["<b>Wsiadam do pociągu.</b> <button class=\"play\" data-say=\"Wsiadam do pociągu\">🔊</button>","Захожу в поезд."],
      ["<b>Wysiadam z pociągu.</b> <button class=\"play\" data-say=\"Wysiadam z pociągu\">🔊</button>","Выхожу из поезда."],
      ["<b>przesiadka</b> w Katowicach <button class=\"play\" data-say=\"przesiadka w Katowicach\">🔊</button>","пересадка в Катовице"]
    ],"star":0},
    "examples":[
      {"ru":"Мы едем поездом, это быстрее.","en":"Jedziemy <b>pociągiem</b>, to szybciej.","say":"Jedziemy pociągiem, to szybciej."},
      {"ru":"Есть пересадка?","en":"Czy jest <b>przesiadka</b>?","say":"Czy jest przesiadka?"},
      {"ru":"Нет, это прямой поезд.","en":"Nie, to pociąg <b>bezpośredni</b>.","say":"Nie, to pociąg bezpośredni."},
      {"ru":"Выходим на следующей остановке.","en":"<b>Wysiadamy</b> na następnym przystanku.","say":"Wysiadamy na następnym przystanku."}
    ],
    "mistakes":[
      {"wrong":"Jadę na pociąg.","right":"Jadę <b>pociągiem</b>.","why":"чем едут — творительный падеж, без предлога: pociągiem, autobusem."},
      {"wrong":"Wsiadam w pociąg.","right":"Wsiadam <b>do pociągu</b>.","why":"садятся «в» поезд через do плюс родительный, как и во всех направлениях."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж транспорта.",
       "q":"«Я еду поездом» —","opts":["Jadę na pociąg","Jadę pociągiem","Jadę do pociągu"],"answer":1,
       "explain":"Средство передвижения — творительный: <b>pociągiem</b>."},
      {"type":"choice","q":"«Выхожу из поезда» —",
       "opts":["Wysiadam z pociągu","Wysiadam pociągiem","Wsiadam do pociągu"],"answer":0,
       "explain":"<b>Wysiadam z pociągu</b> — z плюс родительный. Wsiadam do — наоборот, «захожу»."},
      {"type":"type","howto":"<b>Что делать:</b> напиши вопрос в кассе.",
       "q":"«Есть пересадка?»","accept":["czy jest przesiadka","czy jest przesiadka?","jest przesiadka"],"placeholder":"Czy jest …"}
    ],
    "mnemonic":"🚉 pociągiem (чем) · do pociągu (внутрь) · z pociągu (наружу). Три падежа одного поезда."
   }
 ],
 "dialogue":{
   "intro":"Анна и Марек покупают билеты к морю. Заметь, сколько раз в коротком разговоре появляется do плюс родительный.",
   "lines":[
     {"who":"K","name":"Kasjer","side":"left","en":"Dzień dobry. Dokąd państwo jadą?","ru":"Добрый день. Куда вы едете?",
      "words":[["Dokąd","куда"],["państwo","вы (пара, вежливо)"]]},
     {"who":"A","name":"Anna","side":"right","en":"Poproszę dwa bilety do Gdańska na sobotę.","ru":"Пожалуйста, два билета до Гданьска на субботу.",
      "words":[["do Gdańska","до Гданьска"],["na sobotę","на субботу"]]},
     {"who":"K","name":"Kasjer","side":"left","en":"W jedną stronę czy powrotne?","ru":"В одну сторону или туда-обратно?",
      "words":[["w jedną stronę","в одну сторону"],["powrotne","обратные"]]},
     {"who":"M","name":"Marek","side":"right","en":"Powrotne. Wracamy w niedzielę wieczorem.","ru":"Туда-обратно. Возвращаемся в воскресенье вечером.",
      "words":[["Wracamy","возвращаемся"],["w niedzielę","в воскресенье"]]},
     {"who":"K","name":"Kasjer","side":"left","en":"Pociąg odjeżdża o siódmej trzydzieści, z peronu drugiego.","ru":"Поезд отправляется в семь тридцать, со второй платформы.",
      "words":[["odjeżdża","отправляется"],["z peronu drugiego","со второй платформы"]]},
     {"who":"A","name":"Anna","side":"right","en":"Czy jest przesiadka?","ru":"Есть пересадка?",
      "words":[["przesiadka","пересадка"]]},
     {"who":"K","name":"Kasjer","side":"left","en":"Nie, to pociąg bezpośredni. Trzy godziny.","ru":"Нет, это прямой поезд. Три часа.",
      "words":[["bezpośredni","прямой"],["Trzy godziny","три часа"]]},
     {"who":"M","name":"Marek","side":"right","en":"Świetnie. Ile płacimy?","ru":"Отлично. Сколько с нас?",
      "words":[["Ile płacimy?","сколько платим?"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — вопрос на платформе. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Przepraszam, to pociąg do Warszawy?","ru":"Извините, это поезд до Варшавы?"},
     {"who":"B","en":"Nie, ten jedzie do Wrocławia.","ru":"Нет, этот идёт до Вроцлава."},
     {"who":"A","en":"A z którego peronu odjeżdża do Warszawy?","ru":"А с какой платформы отправляется до Варшавы?"},
     {"who":"B","en":"Z czwartego, za dziesięć minut.","ru":"С четвёртой, через десять минут."},
     {"who":"A","en":"Dziękuję! Muszę biec.","ru":"Спасибо! Надо бежать."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — от кассы до платформы.",
   "items":[
     {"en":"bilet do…","ru":"билет до… (+ родительный)","ex":"Bilet do Gdańska poproszę."},
     {"en":"w jedną stronę","ru":"в одну сторону","ex":"Bilet w jedną stronę."},
     {"en":"bilet powrotny","ru":"билет туда и обратно","ex":"Poproszę bilet powrotny."},
     {"en":"dworzec","ru":"вокзал","ex":"Spotkamy się na dworcu."},
     {"en":"peron","ru":"платформа","ex":"Z którego peronu?"},
     {"en":"odjeżdżać","ru":"отправляться (поезд, автобус)","ex":"Pociąg odjeżdża o siódmej."},
     {"en":"przyjeżdżać","ru":"прибывать","ex":"Autobus przyjeżdża o szóstej."},
     {"en":"przesiadka","ru":"пересадка","ex":"Czy jest przesiadka?"},
     {"en":"opóźnienie","ru":"опоздание, задержка","ex":"Pociąg ma dziesięć minut opóźnienia."},
     {"en":"rozkład jazdy","ru":"расписание","ex":"Sprawdzę rozkład jazdy."},
     {"en":"lotnisko","ru":"аэропорт","ex":"Jadę na lotnisko."},
     {"en":"wsiadać / wysiadać","ru":"садиться / выходить (из транспорта)","ex":"Wysiadamy na następnym przystanku."}
   ]
 },
 "drag":{
   "intro":"Перетащи польское слово к его переводу.",
   "pairs":[["peron","платформа"],["przesiadka","пересадка"],["opóźnienie","опоздание"],["bilet powrotny","билет туда и обратно"]]
 },
 "reading":{
   "intro":"Прочитай и послушай рассказ о поездке к морю. Следи за предлогами do и na перед названиями мест.",
   "title":"Weekend nad morzem",
   "sentences":["W sobotę jedziemy z Markiem do Gdańska.","Kupiliśmy bilety powrotne w kasie na dworcu.","Pociąg odjeżdża o siódmej trzydzieści z peronu drugiego.","To pociąg bezpośredni, bez przesiadki.","Jedziemy pociągiem, bo samochodem trwa dłużej.","W Gdańsku będziemy o wpół do jedenastej.","Najpierw pójdziemy nad morze, potem na starówkę.","W zeszłym roku byliśmy na Słowacji, ale tam nie ma morza.","W przyszłym roku chcielibyśmy pojechać do Włoch.","A na razie wystarczy nam weekend nad Bałtykiem."],
   "translation":"В субботу мы с Мареком едем в Гданьск. Мы купили обратные билеты в кассе на вокзале. Поезд отправляется в семь тридцать со второй платформы. Это прямой поезд, без пересадки. Едем поездом, потому что на машине дольше. В Гданьске будем в половине одиннадцатого. Сначала пойдём к морю, потом в старый город. В прошлом году мы были в Словакии, но там нет моря. В следующем году мы хотели бы поехать в Италию. А пока нам хватит выходных на Балтике."
 },
 "quiz":{
   "intro":"Пять вопросов — и вокзал больше не проблема.",
   "items":[
     {"q":"1. «Билет до Гданьска» —","opts":["Bilet do Gdańsk","Bilet do Gdańska","Bilet w Gdańsk"],"answer":1,
      "explain":"После do — родительный: <b>do Gdańska</b>."},
     {"q":"2. «Я еду в Венгрию» —","opts":["Jadę do Węgier","Jadę na Węgry","Jadę w Węgry"],"answer":1,
      "explain":"Венгрия — из короткого списка с na плюс винительный: <b>na Węgry</b>."},
     {"q":"3. «Я еду поездом» —","opts":["Jadę na pociąg","Jadę pociągiem","Jadę do pociągu"],"answer":1,
      "explain":"Средство передвижения — творительный падеж: <b>pociągiem</b>."},
     {"q":"4. «Во сколько отправляется поезд?» —","opts":["O której odlatuje pociąg?","O której odjeżdża pociąg?","Gdzie odjeżdża pociąg?"],"answer":1,
      "explain":"Поезд <b>odjeżdża</b>; odlatuje — про самолёт."},
     {"q":"5. «Я в Польше» —","opts":["Jestem na Polsce","Jestem w Polsce","Jestem do Polski"],"answer":1,
      "explain":"Место — <b>w Polsce</b>. Do Polski означало бы движение."}
   ]
 },
 "essay":{
   "intro":"Спланируй поездку — настоящую или пока только воображаемую.",
   "prompt":"Напиши 4–5 предложений о поездке: куда едешь, чем, во сколько отправляешься, какой билет купил(а) и что будешь там делать.",
   "hint":"Опора: Jadę do… · Jadę pociągiem / autobusem · Pociąg odjeżdża o… · Kupiłem/kupiłam bilet… · Będę…",
   "example":"W piątek jadę do Wrocławia. Kupiłam bilet powrotny w kasie na dworcu. Pociąg odjeżdża o szóstej rano z peronu trzeciego. Jadę pociągiem, bo to szybciej niż autobusem. W sobotę będę zwiedzać stare miasto, a w niedzielę wracam do domu."
 }
},
"28": {
 "day":28,"week":"04",
 "themeRu":"Мои мечты и планы",
 "themeEn":"Marzenia i plany",
 "intro":"Мечта по-польски — <b>marzenie</b>, и мечтают тут <b>o czymś</b>: предлог и падеж совпадают с русским до буквы. Сегодня соберём вместе всё, что смотрит вперёд: мечты, намерения, планы и оба будущих времени — те самые <b>będę robić</b> и <b>zrobię</b>, между которыми ты уже умеешь выбирать.",
 "introAudio":"Мечта по-польски — marzenie, и мечтают тут o czymś: предлог и падеж совпадают с русским до буквы. Сегодня соберём вместе всё, что смотрит вперёд: мечты, намерения, планы и оба будущих времени — те самые będę robić и zrobię, между которыми ты уже умеешь выбирать.",
 "goals":[
   "Мечтать по-польски: <b>marzę o podróży</b> (+ предложный)",
   "Строить планы: <b>planuję</b>, <b>zamierzam</b>, <b>mam nadzieję, że…</b>",
   "Выбирать будущее по смыслу: <b>będę szukać</b> или <b>znajdę</b>",
   "Смягчать мечту вежливым «бы»: <b>chciałbym kiedyś…</b>"
 ],
 "learned":[
   "Помечтал(а) по-польски: marzę o podróży, с предложным падежом",
   "Построил(а) планы: planuję, zamierzam, mam nadzieję, że…",
   "Выбрал(а) будущее по смыслу: będę szukać или znajdę",
   "Смягчил(а) мечту вежливым «бы»: chciałbym kiedyś…"
 ],
 "review":{
   "intro":"Сначала вчерашняя дорога: билеты, платформы и коварная пара do / na. Плюс вопрос про вид — как всегда.",
   "introAudio":"Сначала вчерашняя дорога: билеты, платформы и коварная пара do и na. Плюс вопрос про вид — как всегда.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после do.",
      "q":"«Билет до Кракова» —","opts":["Bilet do Kraków","Bilet do Krakowa","Bilet w Kraków"],"answer":1,
      "explain":"После do — родительный: <b>do Krakowa</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни короткий список стран с na.",
      "q":"«Мы едем в Словакию» —","opts":["Jedziemy do Słowacji","Jedziemy na Słowację","Jedziemy w Słowację"],"answer":1,
      "explain":"Словакия — из группы с na плюс винительный: <b>na Słowację</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> один раз или регулярно?",
      "q":"W piątek ___ do Gdańska. (в эту пятницу, один раз)","opts":["jeżdżę","jadę","jeździłam"],"answer":1,
      "explain":"Одна конкретная поездка — однонаправленный глагол: <b>jadę</b>. Jeżdżę — «езжу регулярно»."},
     {"type":"type","howto":"<b>Что делать:</b> напиши фразу про транспорт.",
      "q":"«Я еду поездом»","accept":["jadę pociągiem","jade pociagiem","jadę pociagiem"],"placeholder":"Jadę …"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Мечта",
    "title":"<em>Marzyć o</em> + предложный",
    "paras":[
      "Глагол <b>marzyć</b> — «мечтать» — работает с предлогом <b>o</b> и предложным падежом: <b>Marzę o podróży.</b> <b>Marzę o własnym domu.</b> <b>Marzę o spokojnym weekendzie.</b>",
      "Это один из самых щедрых подарков польского: и предлог, и падеж совпадают с русскими полностью. «Мечтать о путешествии» — <b>marzyć o podróży</b>. Ничего не нужно переучивать, только окончания подставить.",
      "Существительное — <b>marzenie</b> (мечта), во множественном <b>marzenia</b>. И красивая пара глаголов: <b>spełnić marzenie</b> — «исполнить мечту», <b>marzenie się spełniło</b> — «мечта сбылась».",
      "Не спутай с соседним словом: <b>sen</b> — это сон, который снится ночью. Мечта — <b>marzenie</b>. Русский разводит их так же, и это упрощает жизнь."
    ],
    "audio":"Глагол marzyć — мечтать — работает с предлогом o и предложным падежом: marzę o podróży, marzę o własnym domu, marzę o spokojnym weekendzie. Это один из самых щедрых подарков польского: и предлог, и падеж совпадают с русскими полностью. Мечтать о путешествии — marzyć o podróży. Ничего не нужно переучивать, только окончания подставить. Существительное — marzenie, мечта, во множественном marzenia. И красивая пара: spełnić marzenie — исполнить мечту, marzenie się spełniło — мечта сбылась. Не спутай с соседним словом: sen — это сон, который снится ночью. Мечта — marzenie.",
    "table":{"rows":[
      ["Marzę <b>o podróży</b>. <button class=\"play\" data-say=\"Marzę o podróży\">🔊</button>","Я мечтаю о путешествии."],
      ["Marzę <b>o własnym domu</b>. <button class=\"play\" data-say=\"Marzę o własnym domu\">🔊</button>","Я мечтаю о собственном доме."],
      ["Marzę <b>o wakacjach</b>. <button class=\"play\" data-say=\"Marzę o wakacjach\">🔊</button>","Я мечтаю об отпуске."],
      ["<b>marzenie</b> / <b>marzenia</b> <button class=\"play\" data-say=\"marzenie, marzenia\">🔊</button>","мечта / мечты"],
      ["<b>spełnić marzenie</b> <button class=\"play\" data-say=\"spełnić marzenie\">🔊</button>","исполнить мечту"],
      ["<b>sen</b> <button class=\"play\" data-say=\"sen\">🔊</button>","сон (который снится)"]
    ],"star":0},
    "examples":[
      {"ru":"Я мечтаю о поездке в Италию.","en":"<b>Marzę o podróży</b> do Włoch.","say":"Marzę o podróży do Włoch."},
      {"ru":"Марек мечтает о спокойной работе.","en":"Marek <b>marzy o spokojnej pracy</b>.","say":"Marek marzy o spokojnej pracy."},
      {"ru":"Это была моя мечта с детства.","en":"To było moje <b>marzenie</b> od dziecka.","say":"To było moje marzenie od dziecka."},
      {"ru":"Моя мечта сбылась.","en":"Moje marzenie <b>się spełniło</b>.","say":"Moje marzenie się spełniło."}
    ],
    "mistakes":[
      {"wrong":"Marzę o podróż.","right":"Marzę <b>o podróży</b>.","why":"после o — предложный падеж: podróży, domu, wakacjach. Ровно как в русском «о путешествии»."},
      {"wrong":"Mam sen o własnym domu.","right":"<b>Marzę o własnym domu.</b>","why":"sen — это ночной сон. Мечта — marzenie, а мечтать — marzyć o czymś."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после o.",
       "q":"«Я мечтаю о путешествии» —","opts":["Marzę o podróż","Marzę o podróży","Marzę podróży"],"answer":1,
       "explain":"После o — предложный падеж: <b>o podróży</b>."},
      {"type":"choice","q":"Что такое <b>marzenie</b>?",
       "opts":["сон ночью","мечта","план на неделю"],"answer":1,
       "explain":"<b>Marzenie</b> — мечта. Ночной сон — sen."},
      {"type":"type","howto":"<b>Что делать:</b> напиши о своей мечте.",
       "q":"«Я мечтаю о собственном доме»","accept":["marzę o własnym domu","marze o wlasnym domu","marzę o wlasnym domu"],"placeholder":"Marzę o …"}
    ],
    "mnemonic":"✨ marzyć O czymś = мечтать О чём-то. Предлог тот же, падеж тот же — редкая роскошь."
   },
   {
    "eyebrow":"Правило 2 · План",
    "title":"<em>Planuję</em>, <em>zamierzam</em>, <em>mam nadzieję</em>",
    "paras":[
      "Мечта — про «хорошо бы», план — про «сделаю». Первый глагол плана: <b>planować</b>. Он берёт либо существительное в винительном (<b>Planuję wakacje</b>), либо инфинитив (<b>Planuję kupić mieszkanie</b>).",
      "Второй — <b>zamierzać</b>, «намереваться, собираться»: только с инфинитивом. <b>Zamierzam zmienić pracę.</b> <b>Zamierzamy przeprowadzić się do Gdańska.</b> Звучит твёрже, чем planować: решение уже принято.",
      "Третий оборот — <b>mam nadzieję, że…</b> — «надеюсь, что…». Запятая перед że обязательна, как в день 23: <b>Mam nadzieję, że zdam egzamin.</b>",
      "Слова времени, которые ставят план на календарь: <b>jutro</b>, <b>w przyszłym tygodniu</b>, <b>za rok</b>, <b>w przyszłości</b>, <b>kiedyś</b> (когда-нибудь), <b>pewnego dnia</b> (однажды)."
    ],
    "audio":"Мечта — про «хорошо бы», план — про «сделаю». Первый глагол плана: planować. Он берёт либо существительное в винительном — planuję wakacje, либо инфинитив — planuję kupić mieszkanie. Второй — zamierzać, намереваться, собираться: только с инфинитивом. Zamierzam zmienić pracę. Zamierzamy przeprowadzić się do Gdańska. Звучит твёрже, чем planować: решение уже принято. Третий оборот — mam nadzieję, że — надеюсь, что. Запятая перед że обязательна, как в день двадцать три: mam nadzieję, że zdam egzamin. Слова времени, которые ставят план на календарь: jutro, w przyszłym tygodniu, za rok, w przyszłości, kiedyś, pewnego dnia.",
    "table":{"rows":[
      ["<b>Planuję</b> wakacje. <button class=\"play\" data-say=\"Planuję wakacje\">🔊</button>","Я планирую отпуск. (+ винительный)"],
      ["<b>Planuję</b> kupić mieszkanie. <button class=\"play\" data-say=\"Planuję kupić mieszkanie\">🔊</button>","Я планирую купить квартиру. (+ инфинитив)"],
      ["<b>Zamierzam</b> zmienić pracę. <button class=\"play\" data-say=\"Zamierzam zmienić pracę\">🔊</button>","Я собираюсь сменить работу."],
      ["<b>Mam nadzieję, że</b>… <button class=\"play\" data-say=\"Mam nadzieję, że zdam\">🔊</button>","Надеюсь, что…"],
      ["<b>za rok</b> / <b>w przyszłości</b> <button class=\"play\" data-say=\"za rok, w przyszłości\">🔊</button>","через год / в будущем"],
      ["<b>kiedyś</b> / <b>pewnego dnia</b> <button class=\"play\" data-say=\"kiedyś, pewnego dnia\">🔊</button>","когда-нибудь / однажды"]
    ],"star":-1},
    "examples":[
      {"ru":"Мы планируем поехать к морю летом.","en":"<b>Planujemy pojechać</b> nad morze latem.","say":"Planujemy pojechać nad morze latem."},
      {"ru":"Я собираюсь начать курс в сентябре.","en":"<b>Zamierzam zacząć</b> kurs we wrześniu.","say":"Zamierzam zacząć kurs we wrześniu."},
      {"ru":"Надеюсь, что через год буду говорить свободно.","en":"<b>Mam nadzieję, że</b> za rok będę mówić swobodnie.","say":"Mam nadzieję, że za rok będę mówić swobodnie."},
      {"ru":"Когда-нибудь я хотела бы жить у моря.","en":"<b>Kiedyś chciałabym</b> mieszkać nad morzem.","say":"Kiedyś chciałabym mieszkać nad morzem."}
    ],
    "mistakes":[
      {"wrong":"Zamierzam zmianę pracy.","right":"<b>Zamierzam zmienić</b> pracę.","why":"zamierzać работает только с инфинитивом: zamierzam zmienić, zamierzam kupić."},
      {"wrong":"Mam nadzieję że zdam.","right":"Mam nadzieję<b>,</b> że zdam.","why":"перед że — запятая, как и перед русским «что»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> посмотри, что стоит после глагола.",
       "q":"«Я собираюсь сменить работу» —","opts":["Zamierzam zmianę pracy","Zamierzam zmienić pracę","Zamierzam pracę"],"answer":1,
       "explain":"После zamierzać — инфинитив: <b>zmienić</b>."},
      {"type":"choice","q":"«Надеюсь, что сдам» —",
       "opts":["Mam nadzieja, że zdam","Mam nadzieję, że zdam","Mam nadzieję, że zdawam"],"answer":1,
       "explain":"Оборот — <b>mam nadzieję</b> (винительный), дальше запятая и że."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Я планирую купить квартиру»</b>","answer":"Planuję kupić mieszkanie"}
    ],
    "mnemonic":"📅 planować + винительный или инфинитив · zamierzać только + инфинитив · mam nadzieję, że…"
   },
   {
    "eyebrow":"Правило 3 · Два будущих",
    "title":"<em>Będę szukać</em> или <em>znajdę</em>",
    "paras":[
      "В планах встречаются оба будущих, и выбор между ними — тот же самый выбор вида, который ты делаешь по-русски не задумываясь.",
      "<b>Będę szukać pracy</b> — «буду искать работу»: процесс, растянутый во времени, итог не назван. <b>Znajdę pracę</b> — «найду работу»: одно событие с результатом.",
      "Ещё пара: <b>Będę uczyć się polskiego</b> (буду учить — процесс) — <b>Nauczę się polskiego</b> (выучу — результат). И третья: <b>Będę pisać</b> — <b>Napiszę</b>.",
      "Форма тоже знакома: несовершенное будущее — <b>będę</b> плюс инфинитив или л-форма (<b>będę robić</b> = <b>będę robił / robiła</b>), совершенное — просто личная форма совершенного глагола (<b>zrobię</b>), у которой настоящего времени не бывает вовсе."
    ],
    "audio":"В планах встречаются оба будущих, и выбор между ними — тот же самый выбор вида, который ты делаешь по-русски не задумываясь. Będę szukać pracy — буду искать работу: процесс, растянутый во времени, итог не назван. Znajdę pracę — найду работу: одно событие с результатом. Ещё пара: będę uczyć się polskiego, буду учить, процесс, и nauczę się polskiego, выучу, результат. И третья: będę pisać и napiszę. Форма тоже знакома: несовершенное будущее — będę плюс инфинитив или л-форма, będę robić равно będę robił или będę robiła; совершенное — просто личная форма совершенного глагола, zrobię, у которой настоящего времени не бывает вовсе.",
    "table":{"rows":[
      ["<b>Będę szukać</b> pracy. <button class=\"play\" data-say=\"Będę szukać pracy\">🔊</button>","Буду искать работу. (процесс)"],
      ["<b>Znajdę</b> pracę. <button class=\"play\" data-say=\"Znajdę pracę\">🔊</button>","Найду работу. (результат)"],
      ["<b>Będę się uczyć</b> polskiego. <button class=\"play\" data-say=\"Będę się uczyć polskiego\">🔊</button>","Буду учить польский."],
      ["<b>Nauczę się</b> polskiego. <button class=\"play\" data-say=\"Nauczę się polskiego\">🔊</button>","Выучу польский."],
      ["<b>Będę robił / robiła</b> <button class=\"play\" data-say=\"będę robił, będę robiła\">🔊</button>","вторая форма несовершенного будущего"]
    ],"star":1},
    "examples":[
      {"ru":"Летом я буду учить польский каждый день.","en":"Latem <b>będę uczyć się</b> polskiego codziennie.","gloss":"процесс, повторяющийся","say":"Latem będę uczyć się polskiego codziennie."},
      {"ru":"К декабрю я выучу тысячу слов.","en":"Do grudnia <b>nauczę się</b> tysiąca słów.","gloss":"результат к сроку","say":"Do grudnia nauczę się tysiąca słów."},
      {"ru":"Завтра буду весь день писать письма.","en":"Jutro <b>będę pisać</b> listy cały dzień.","say":"Jutro będę pisać listy cały dzień."},
      {"ru":"Завтра напишу тебе письмо.","en":"Jutro <b>napiszę</b> ci list.","say":"Jutro napiszę ci list."}
    ],
    "mistakes":[
      {"wrong":"Będę napisać list.","right":"<b>Napiszę</b> list. / <b>Będę pisać</b> list.","why":"с będę сочетается только несовершенный вид. Совершенный образует будущее сам: napiszę."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> ищи, назван ли результат.",
       "q":"«Буду искать работу всё лето» —","opts":["Znajdę pracę całe lato","Będę szukać pracy całe lato","Będę znaleźć pracy"],"answer":1,
       "explain":"«Всё лето» — процесс, значит несовершенное будущее: <b>będę szukać</b>."},
      {"type":"choice","q":"«К декабрю я выучу тысячу слов» —",
       "opts":["Do grudnia będę uczyć się tysiąca słów","Do grudnia nauczę się tysiąca słów","Do grudnia będę nauczyć się słów"],"answer":1,
       "explain":"Результат к сроку — совершенный вид: <b>nauczę się</b>."},
      {"type":"choice","q":"Какая форма невозможна?",
       "opts":["będę robić","będę robiła","będę zrobić"],"answer":2,
       "explain":"С <b>będę</b> сочетается только несовершенный вид. «Będę zrobić» не существует."}
    ],
    "mnemonic":"⏳ будущее-процесс: będę + несов. · будущее-результат: одна форма сов. вида (zrobię, znajdę)."
   },
   {
    "eyebrow":"Правило 4 · Мечта и план рядом",
    "title":"От <em>chciałbym</em> к <em>zrobię</em>",
    "paras":[
      "Разговор о будущем почти всегда идёт лесенкой: от мягкого к твёрдому. Сначала мечта — <b>Chciałbym mieszkać nad morzem.</b> Потом намерение — <b>Zamierzam poszukać tam pracy.</b> И наконец план — <b>W maju pojadę do Gdańska.</b>",
      "Три ступеньки, три грамматики: условное наклонение дня 22, инфинитивный оборот сегодняшнего дня и будущее время недели 2. Собранные вместе, они звучат как речь взрослого человека, а не как набор упражнений.",
      "Полезная мелочь для мягкости: <b>może</b> (может быть), <b>chyba</b> (наверное), <b>na pewno</b> (точно). <b>Może kiedyś pojedziemy do Włoch.</b> <b>Na pewno wrócę.</b>",
      "И вопрос, которым такой разговор начинают: <b>Jakie masz plany?</b> — «какие у тебя планы?» или <b>O czym marzysz?</b> — «о чём ты мечтаешь?». Оба пригодятся тебе уже сегодня."
    ],
    "audio":"Разговор о будущем почти всегда идёт лесенкой: от мягкого к твёрдому. Сначала мечта — chciałbym mieszkać nad morzem. Потом намерение — zamierzam poszukać tam pracy. И наконец план — w maju pojadę do Gdańska. Три ступеньки, три грамматики: условное наклонение дня двадцать два, инфинитивный оборот сегодняшнего дня и будущее время недели два. Полезная мелочь для мягкости: może — может быть, chyba — наверное, na pewno — точно. Może kiedyś pojedziemy do Włoch. Na pewno wrócę. И вопрос, которым такой разговор начинают: jakie masz plany — какие у тебя планы, или o czym marzysz — о чём ты мечтаешь.",
    "table":{"rows":[
      ["<b>Chciałbym…</b> <button class=\"play\" data-say=\"Chciałbym mieszkać nad morzem\">🔊</button>","мечта: я хотел бы…"],
      ["<b>Zamierzam…</b> <button class=\"play\" data-say=\"Zamierzam poszukać pracy\">🔊</button>","намерение: собираюсь…"],
      ["<b>Pojadę…</b> <button class=\"play\" data-say=\"W maju pojadę do Gdańska\">🔊</button>","план: поеду…"],
      ["<b>Jakie masz plany?</b> <button class=\"play\" data-say=\"Jakie masz plany?\">🔊</button>","Какие у тебя планы?"],
      ["<b>O czym marzysz?</b> <button class=\"play\" data-say=\"O czym marzysz?\">🔊</button>","О чём ты мечтаешь?"]
    ],"star":3},
    "examples":[
      {"ru":"Может быть, когда-нибудь поедем в Италию.","en":"<b>Może kiedyś</b> pojedziemy do Włoch.","say":"Może kiedyś pojedziemy do Włoch."},
      {"ru":"Наверное, останусь здесь ещё на год.","en":"<b>Chyba</b> zostanę tu jeszcze rok.","say":"Chyba zostanę tu jeszcze rok."},
      {"ru":"Я точно вернусь.","en":"<b>Na pewno</b> wrócę.","say":"Na pewno wrócę."},
      {"ru":"О чём ты мечтаешь? — О спокойном годе.","en":"<b>O czym marzysz?</b> — O spokojnym roku.","say":"O czym marzysz? O spokojnym roku."}
    ],
    "mistakes":[
      {"wrong":"O co marzysz?","right":"<b>O czym</b> marzysz?","why":"после o в этом значении — предложный падеж: o czym, а не o co."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после o.",
       "q":"«О чём ты мечтаешь?» —","opts":["O co marzysz?","O czym marzysz?","Czego marzysz?"],"answer":1,
       "explain":"marzyć o плюс предложный: <b>O czym marzysz?</b>"},
      {"type":"choice","q":"Самая твёрдая из трёх фраз —",
       "opts":["Chciałbym pojechać do Gdańska","Zamierzam pojechać do Gdańska","W maju pojadę do Gdańska"],"answer":2,
       "explain":"Прямое будущее <b>pojadę</b> — уже решение с датой. Chciałbym — мечта, zamierzam — намерение."},
      {"type":"speak","howto":"Нажми микрофон и скажи о себе.",
       "target":"Marzę o podróży do Włoch.","sub":"я мечтаю о поездке в Италию","want":"Marzę o podróży do Włoch."}
    ],
    "mnemonic":"🪜 chciałbym → zamierzam → pojadę. Мечта, намерение, план — три ступеньки будущего."
   }
 ],
 "dialogue":{
   "intro":"Вечер после поездки. Анна и Марек говорят о том, что будет дальше — от мечты до конкретной даты.",
   "lines":[
     {"who":"A","name":"Anna","side":"left","en":"O czym marzysz, tak naprawdę?","ru":"О чём ты мечтаешь, если честно?",
      "words":[["O czym marzysz?","о чём мечтаешь?"],["naprawdę","на самом деле"]]},
     {"who":"M","name":"Marek","side":"right","en":"Marzę o spokojnej pracy i o własnym mieszkaniu.","ru":"Мечтаю о спокойной работе и о собственной квартире.",
      "words":[["o spokojnej pracy","о спокойной работе"],["własnym","собственной"]]},
     {"who":"A","name":"Anna","side":"left","en":"Praca już jest. A mieszkanie?","ru":"Работа уже есть. А квартира?",
      "words":[["już jest","уже есть"]]},
     {"who":"M","name":"Marek","side":"right","en":"Zamierzam oszczędzać przez dwa lata.","ru":"Собираюсь копить два года.",
      "words":[["Zamierzam","собираюсь"],["oszczędzać","копить"]]},
     {"who":"A","name":"Anna","side":"left","en":"A ja planuję zdać jeszcze jeden egzamin.","ru":"А я планирую сдать ещё один экзамен.",
      "words":[["planuję","планирую"],["jeszcze jeden","ещё один"]]},
     {"who":"M","name":"Marek","side":"right","en":"Kiedy?","ru":"Когда?",
      "words":[["Kiedy?","когда?"]]},
     {"who":"A","name":"Anna","side":"left","en":"W grudniu. Będę się uczyć całą jesień.","ru":"В декабре. Буду учиться всю осень.",
      "words":[["W grudniu","в декабре"],["całą jesień","всю осень"]]},
     {"who":"M","name":"Marek","side":"right","en":"Mam nadzieję, że w maju pojedziemy razem do Włoch.","ru":"Надеюсь, что в мае мы вместе поедем в Италию.",
      "words":[["Mam nadzieję","надеюсь"],["razem","вместе"]]},
     {"who":"A","name":"Anna","side":"left","en":"To byłoby piękne. Zaplanujmy to.","ru":"Это было бы прекрасно. Давай это запланируем.",
      "words":[["To byłoby piękne","это было бы прекрасно"],["Zaplanujmy","давай запланируем"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — планы на выходные. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Jakie masz plany na weekend?","ru":"Какие у тебя планы на выходные?"},
     {"who":"B","en":"Zamierzam odpocząć. A ty?","ru":"Собираюсь отдохнуть. А ты?"},
     {"who":"A","en":"Będę malować mieszkanie.","ru":"Буду красить квартиру."},
     {"who":"B","en":"Całe? To dużo pracy.","ru":"Целиком? Это много работы."},
     {"who":"A","en":"Nie, pomaluję tylko kuchnię.","ru":"Нет, покрашу только кухню."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — всё, что смотрит вперёд.",
   "items":[
     {"en":"marzyć o…","ru":"мечтать о… (+ предложный)","ex":"Marzę o podróży."},
     {"en":"marzenie","ru":"мечта","ex":"To moje największe marzenie."},
     {"en":"spełnić marzenie","ru":"исполнить мечту","ex":"Moje marzenie się spełniło."},
     {"en":"planować","ru":"планировать","ex":"Planuję kupić mieszkanie."},
     {"en":"zamierzać","ru":"намереваться, собираться","ex":"Zamierzam zmienić pracę."},
     {"en":"mam nadzieję, że…","ru":"надеюсь, что…","ex":"Mam nadzieję, że zdam."},
     {"en":"w przyszłości","ru":"в будущем","ex":"W przyszłości chcę mieszkać nad morzem."},
     {"en":"kiedyś","ru":"когда-нибудь","ex":"Kiedyś pojedziemy do Włoch."},
     {"en":"za rok","ru":"через год","ex":"Za rok będę mówić lepiej."},
     {"en":"oszczędzać","ru":"копить, экономить","ex":"Oszczędzam na mieszkanie."},
     {"en":"na pewno","ru":"точно, наверняка","ex":"Na pewno wrócę."},
     {"en":"chyba","ru":"наверное","ex":"Chyba zostanę tu jeszcze rok."}
   ]
 },
 "drag":{
   "intro":"Перетащи польскую фразу к её переводу.",
   "pairs":[["Marzę o podróży","я мечтаю о путешествии"],["Zamierzam zmienić pracę","я собираюсь сменить работу"],["Mam nadzieję","надеюсь"],["kiedyś","когда-нибудь"]]
 },
 "reading":{
   "intro":"Прочитай и послушай, как Анна рассказывает о своих планах. Отмечай, где будущее-процесс, а где будущее-результат.",
   "title":"Moje plany i marzenia",
   "sentences":["Mam kilka planów na najbliższy rok.","W grudniu będę zdawać jeszcze jeden egzamin.","Będę się uczyć całą jesień, dwie godziny dziennie.","Mam nadzieję, że zdam za pierwszym razem.","Potem zamierzam zapisać się na kurs hiszpańskiego.","Marek marzy o własnym mieszkaniu i oszczędza od lata.","Ja marzę o podróży do Włoch.","W maju pojedziemy tam razem — już to zaplanowaliśmy.","Kiedyś chciałabym mieszkać bliżej morza.","Nie wiem, czy to się spełni, ale bez marzeń jest nudno."],
   "translation":"У меня несколько планов на ближайший год. В декабре я буду сдавать ещё один экзамен. Буду учиться всю осень, по два часа в день. Надеюсь, что сдам с первого раза. Потом собираюсь записаться на курс испанского. Марек мечтает о собственной квартире и копит с лета. Я мечтаю о поездке в Италию. В мае мы поедем туда вместе — мы это уже запланировали. Когда-нибудь я хотела бы жить ближе к морю. Не знаю, сбудется ли это, но без мечты скучно."
 },
 "quiz":{
   "intro":"Пять вопросов — и будущее время в твоих руках.",
   "items":[
     {"q":"1. «Я мечтаю о путешествии» —","opts":["Marzę o podróż","Marzę o podróży","Marzę podróży"],"answer":1,
      "explain":"marzyć o плюс предложный: <b>o podróży</b> — как русское «о путешествии»."},
     {"q":"2. «Я собираюсь сменить работу» —","opts":["Zamierzam zmianę pracy","Zamierzam zmienić pracę","Zamierzam pracę zmiana"],"answer":1,
      "explain":"zamierzać работает только с инфинитивом: <b>zmienić</b>."},
     {"q":"3. «Буду искать работу всё лето» —","opts":["Znajdę pracę całe lato","Będę szukać pracy całe lato","Będę znaleźć pracę"],"answer":1,
      "explain":"Процесс — несовершенное будущее: <b>będę szukać</b>."},
     {"q":"4. Какая форма невозможна?","opts":["będę pisać","będę pisała","będę napisać"],"answer":2,
      "explain":"С <b>będę</b> сочетается только несовершенный вид. Совершенный образует будущее сам: napiszę."},
     {"q":"5. «Надеюсь, что сдам» —","opts":["Mam nadzieja, że zdam","Mam nadzieję, że zdam","Mam nadzieję że zdam"],"answer":1,
      "explain":"<b>Mam nadzieję</b> — винительный, и запятая перед że обязательна."}
   ]
 },
 "essay":{
   "intro":"Ты почти у финиша уровня — самое время посмотреть вперёд.",
   "prompt":"Напиши 5–6 предложений о своём будущем: одна мечта, одно намерение, один конкретный план с датой и одна надежда.",
   "hint":"Опора: Marzę o… · Zamierzam… · W maju pojadę / zrobię… · Będę… · Mam nadzieję, że… 💛",
   "example":"Marzę o własnym mieszkaniu blisko morza. Zamierzam oszczędzać przez dwa lata. W przyszłym roku zmienię pracę — już szukam ofert. Latem będę uczyć się polskiego codziennie. Do grudnia nauczę się tysiąca nowych słów. Mam nadzieję, że kiedyś to marzenie się spełni."
 }
},
"29": {
 "day":29,"week":"04",
 "themeRu":"Большой рассказ",
 "themeEn":"Moja historia",
 "intro":"Сегодня мы ничего нового не учим — сегодня мы собираем. За месяц у тебя появились прошедшее с видом, оба будущих, падежи, мнения и вежливое «бы». Пора соединить их в одну связную историю: что было, что есть, что будет. Инструмент дня — слова-скрепы: <b>najpierw</b>, <b>potem</b>, <b>dlatego</b>, <b>ale</b>.",
 "introAudio":"Сегодня мы ничего нового не учим — сегодня мы собираем. За месяц у тебя появились прошедшее с видом, оба будущих, падежи, мнения и вежливое «бы». Пора соединить их в одну связную историю: что было, что есть, что будет. Инструмент дня — слова-скрепы: najpierw, potem, dlatego, ale.",
 "goals":[
   "Построить рассказ по каркасу: кто я → что было → что сейчас → что будет",
   "Выбирать вид в рассказе: фон несовершенный, события совершенные",
   "Скреплять предложения: <b>najpierw, potem, w końcu</b>",
   "Объяснять и противопоставлять: <b>dlatego</b>, <b>bo</b>, <b>ale</b>, <b>jednak</b>"
 ],
 "learned":[
   "Построил(а) рассказ по каркасу: кто я, что было, что сейчас, что будет",
   "Выбрал(а) вид в рассказе: фон несовершенный, события совершенные",
   "Скрепил(а) предложения: najpierw, potem, w końcu",
   "Объяснил(а) и противопоставил(а): dlatego, bo, ale, jednak"
 ],
 "review":{
   "intro":"Вчерашнее будущее — на разминку. Мечта, намерение, план и выбор между двумя будущими.",
   "introAudio":"Вчерашнее будущее — на разминку. Мечта, намерение, план и выбор между двумя будущими.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после o.",
      "q":"«Я мечтаю о доме» —","opts":["Marzę o dom","Marzę o domu","Marzę domu"],"answer":1,
      "explain":"marzyć o плюс предложный: <b>o domu</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> процесс или результат?",
      "q":"«Всю осень буду учиться» —","opts":["Całą jesień nauczę się","Całą jesień będę się uczyć","Całą jesień będę nauczyć się"],"answer":1,
      "explain":"«Всю осень» — процесс, значит <b>będę się uczyć</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, что идёт после глагола.",
      "q":"«Я собираюсь купить квартиру» —","opts":["Zamierzam kupić mieszkanie","Zamierzam mieszkanie kupno","Zamierzam mieszkania"],"answer":0,
      "explain":"После zamierzać — инфинитив: <b>kupić</b>."},
     {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
      "q":"Собери: <b>«Я мечтаю о собственной квартире»</b>","answer":"Marzę o własnym mieszkaniu"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Каркас",
    "title":"Четыре части любой истории",
    "paras":[
      "Хороший рассказ о себе почти всегда собран из четырёх кусков, и каждый кусок — это своё время. Первый: <em>кто я</em> — настоящее. <b>Mam na imię Anna. Jestem nauczycielką. Mieszkam w Krakowie.</b>",
      "Второй: <em>что было</em> — прошедшее с видом. <b>Pięć lat temu przyjechałam do Polski. Na początku pracowałam w kawiarni.</b>",
      "Третий: <em>что сейчас</em> — снова настоящее, но уже с оценкой. <b>Teraz uczę się polskiego i pracuję w szkole. Lubię swoje życie tutaj.</b>",
      "Четвёртый: <em>что будет</em> — будущее и мечты. <b>W grudniu zdam egzamin. Potem będę szukać nowej pracy. Marzę o własnym mieszkaniu.</b> Четыре куска — и история стоит на ногах."
    ],
    "audio":"Хороший рассказ о себе почти всегда собран из четырёх кусков, и каждый кусок — это своё время. Первый: кто я — настоящее. Mam na imię Anna. Jestem nauczycielką. Mieszkam w Krakowie. Второй: что было — прошедшее с видом. Pięć lat temu przyjechałam do Polski. Na początku pracowałam w kawiarni. Третий: что сейчас — снова настоящее, но уже с оценкой. Teraz uczę się polskiego i pracuję w szkole. Lubię swoje życie tutaj. Четвёртый: что будет — будущее и мечты. W grudniu zdam egzamin. Potem będę szukać nowej pracy. Marzę o własnym mieszkaniu. Четыре куска — и история стоит на ногах.",
    "table":{"rows":[
      ["1. <b>Kim jestem</b> <button class=\"play\" data-say=\"Jestem nauczycielką. Mieszkam w Krakowie.\">🔊</button>","настоящее: имя, работа, город"],
      ["2. <b>Co było</b> <button class=\"play\" data-say=\"Pięć lat temu przyjechałam do Polski.\">🔊</button>","прошедшее: как я тут оказался(лась)"],
      ["3. <b>Co jest teraz</b> <button class=\"play\" data-say=\"Teraz uczę się polskiego i pracuję w szkole.\">🔊</button>","настоящее: чем живу сейчас"],
      ["4. <b>Co będzie</b> <button class=\"play\" data-say=\"W grudniu zdam egzamin, a potem będę szukać nowej pracy.\">🔊</button>","будущее: планы и мечты"]
    ],"star":-1},
    "examples":[
      {"ru":"Пять лет назад я приехала в Польшу.","en":"Pięć lat temu <b>przyjechałam</b> do Polski.","gloss":"событие → совершенный вид","say":"Pięć lat temu przyjechałam do Polski."},
      {"ru":"Сначала я работала в кафе.","en":"Na początku <b>pracowałam</b> w kawiarni.","gloss":"фон → несовершенный вид","say":"Na początku pracowałam w kawiarni."},
      {"ru":"Сейчас я работаю в школе.","en":"Teraz <b>pracuję</b> w szkole.","say":"Teraz pracuję w szkole."},
      {"ru":"В декабре я сдам экзамен.","en":"W grudniu <b>zdam</b> egzamin.","say":"W grudniu zdam egzamin."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> подумай, какая часть рассказа за что отвечает.",
       "q":"Фраза «Pięć lat temu przyjechałam do Polski» относится к части —","opts":["кто я","что было","что будет"],"answer":1,
       "explain":"Прошедшее время и «пять лет назад» — это вторая часть, <b>co było</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери начало рассказа: <b>«Сейчас я работаю в школе и учу польский»</b>","answer":"Teraz pracuję w szkole i uczę się polskiego"}
    ],
    "mnemonic":"🧱 Kim jestem → co było → co jest teraz → co będzie. Четыре кирпича одной истории."
   },
   {
    "eyebrow":"Правило 2 · Вид в рассказе",
    "title":"Фон и события",
    "paras":[
      "В рассказе вид работает как камера. Несовершенный вид — общий план, фон, «что тогда происходило»: <b>Mieszkałam w małym mieście. Pracowałam w kawiarni.</b> Совершенный вид — крупный план, событие, «и тут случилось»: <b>Przyjechałam do Krakowa. Znalazłam pracę.</b>",
      "Самая частая конструкция рассказа — <b>kiedy</b> плюс два глагола. Смотри, как меняется смысл:",
      "<b>Kiedy pracowałam w kawiarni, uczyłam się polskiego.</b> — два несовершенных: два процесса шли одновременно. <b>Kiedy pracowałam w kawiarni, poznałam Marka.</b> — фон плюс событие: на фоне работы случилось знакомство. <b>Kiedy skończyłam kurs, znalazłam nową pracę.</b> — два совершенных: сначала одно, потом другое.",
      "И вот главное: ты только что прочитал(а) три русских предложения с точно такой же логикой. Выбор вида в польском рассказе делается тем же чутьём, что и в родном — меняются только окончания."
    ],
    "audio":"В рассказе вид работает как камера. Несовершенный вид — общий план, фон, что тогда происходило: mieszkałam w małym mieście, pracowałam w kawiarni. Совершенный вид — крупный план, событие: przyjechałam do Krakowa, znalazłam pracę. Самая частая конструкция рассказа — kiedy плюс два глагола. Kiedy pracowałam w kawiarni, uczyłam się polskiego — два несовершенных: два процесса шли одновременно. Kiedy pracowałam w kawiarni, poznałam Marka — фон плюс событие. Kiedy skończyłam kurs, znalazłam nową pracę — два совершенных: сначала одно, потом другое. И вот главное: выбор вида в польском рассказе делается тем же чутьём, что и в родном языке — меняются только окончания.",
    "table":{"rows":[
      ["Kiedy <b>pracowałam</b>, <b>uczyłam się</b>. <button class=\"play\" data-say=\"Kiedy pracowałam w kawiarni, uczyłam się polskiego\">🔊</button>","два процесса рядом (несов. + несов.)"],
      ["Kiedy <b>pracowałam</b>, <b>poznałam</b> Marka. <button class=\"play\" data-say=\"Kiedy pracowałam w kawiarni, poznałam Marka\">🔊</button>","фон + событие (несов. + сов.)"],
      ["Kiedy <b>skończyłam</b>, <b>znalazłam</b> pracę. <button class=\"play\" data-say=\"Kiedy skończyłam kurs, znalazłam nową pracę\">🔊</button>","событие за событием (сов. + сов.)"],
      ["<b>Codziennie</b> chodziłam do szkoły. <button class=\"play\" data-say=\"Codziennie chodziłam do szkoły\">🔊</button>","повторялось → несовершенный"],
      ["<b>Nagle</b> zadzwonił telefon. <button class=\"play\" data-say=\"Nagle zadzwonił telefon\">🔊</button>","вдруг → совершенный"]
    ],"star":1},
    "examples":[
      {"ru":"Когда я жила в Гданьске, часто ходила к морю.","en":"Kiedy <b>mieszkałam</b> w Gdańsku, często <b>chodziłam</b> nad morze.","say":"Kiedy mieszkałam w Gdańsku, często chodziłam nad morze."},
      {"ru":"Когда я читала письмо, зазвонил телефон.","en":"Kiedy <b>czytałam</b> list, <b>zadzwonił</b> telefon.","say":"Kiedy czytałam list, zadzwonił telefon."},
      {"ru":"Когда я сдала экзамен, сразу позвонила маме.","en":"Kiedy <b>zdałam</b> egzamin, od razu <b>zadzwoniłam</b> do mamy.","say":"Kiedy zdałam egzamin, od razu zadzwoniłam do mamy."}
    ],
    "mistakes":[
      {"wrong":"Cały rok nauczyłam się polskiego.","right":"Cały rok <b>uczyłam się</b> polskiego.","why":"«целый год» — это процесс, значит несовершенный вид. Nauczyłam się подошло бы к «за год»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, что фон, а что событие.",
       "q":"«Когда я читала письмо, зазвонил телефон» —","opts":["Kiedy przeczytałam list, dzwonił telefon","Kiedy czytałam list, zadzwonił telefon","Kiedy czytałam list, dzwonił telefon"],"answer":1,
       "explain":"Чтение — фон (несов.), звонок — событие (сов.): <b>czytałam… zadzwonił</b>."},
      {"type":"choice","q":"«Целый год я учила польский» —",
       "opts":["Cały rok nauczyłam się polskiego","Cały rok uczyłam się polskiego","Cały rok uczę się polskiego"],"answer":1,
       "explain":"«Целый год» — процесс: <b>uczyłam się</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши предложение с двумя событиями подряд.",
       "q":"«Когда я сдала экзамен, я нашла работу»","accept":["kiedy zdałam egzamin, znalazłam pracę","kiedy zdalam egzamin, znalazlam prace","kiedy zdałem egzamin, znalazłem pracę","kiedy zdalem egzamin, znalazlem prace"],"placeholder":"Kiedy zdał… egzamin, …"}
    ],
    "mnemonic":"🎥 Несовершенный — общий план (фон). Совершенный — крупный план (событие). Как в русском."
   },
   {
    "eyebrow":"Правило 3 · Скрепы времени",
    "title":"<em>Najpierw, potem, w końcu</em>",
    "paras":[
      "Без скреп рассказ рассыпается на список. Порядок событий держат четыре слова: <b>najpierw</b> (сначала), <b>potem</b> (потом), <b>później</b> (позже), <b>w końcu</b> (в конце концов, наконец).",
      "К ним добавь начало и конец: <b>na początku</b> (вначале), <b>na koniec</b> (напоследок), <b>od tego czasu</b> (с тех пор), <b>wtedy</b> (тогда).",
      "Обрати внимание на пару, которую легко перепутать: <b>potem</b> — это «потом» (следующее событие), а <b>później</b> — «позже» (сравнение по времени, буквально сравнительная степень от późno).",
      "И ещё две метки, которые сразу состаривают историю: <b>kiedyś</b> — «когда-то», <b>rok temu</b> — «год назад», <b>pięć lat temu</b> — «пять лет назад». Слово <b>temu</b> всегда стоит после отрезка времени, в отличие от русского «назад» — порядок тот же."
    ],
    "audio":"Без скреп рассказ рассыпается на список. Порядок событий держат четыре слова: najpierw — сначала, potem — потом, później — позже, w końcu — в конце концов. К ним добавь начало и конец: na początku — вначале, na koniec — напоследок, od tego czasu — с тех пор, wtedy — тогда. Обрати внимание на пару, которую легко перепутать: potem — это «потом», следующее событие, а później — «позже», сравнение по времени, буквально сравнительная степень от późno. И ещё две метки, которые сразу состаривают историю: kiedyś — когда-то, rok temu — год назад, pięć lat temu — пять лет назад. Слово temu всегда стоит после отрезка времени.",
    "table":{"rows":[
      ["<b>najpierw</b> <button class=\"play\" data-say=\"najpierw\">🔊</button>","сначала"],
      ["<b>potem</b> <button class=\"play\" data-say=\"potem\">🔊</button>","потом (следующее событие)"],
      ["<b>później</b> <button class=\"play\" data-say=\"później\">🔊</button>","позже"],
      ["<b>w końcu</b> <button class=\"play\" data-say=\"w końcu\">🔊</button>","в конце концов, наконец"],
      ["<b>na początku</b> <button class=\"play\" data-say=\"na początku\">🔊</button>","вначале"],
      ["<b>pięć lat temu</b> <button class=\"play\" data-say=\"pięć lat temu\">🔊</button>","пять лет назад"]
    ],"star":-1},
    "examples":[
      {"ru":"Сначала я работала в кафе, потом нашла работу в школе.","en":"<b>Najpierw</b> pracowałam w kawiarni, <b>potem</b> znalazłam pracę w szkole.","say":"Najpierw pracowałam w kawiarni, potem znalazłam pracę w szkole."},
      {"ru":"В конце концов я решила остаться.","en":"<b>W końcu</b> postanowiłam zostać.","say":"W końcu postanowiłam zostać."},
      {"ru":"Три года назад я начала учить польский.","en":"<b>Trzy lata temu</b> zaczęłam uczyć się polskiego.","say":"Trzy lata temu zaczęłam uczyć się polskiego."},
      {"ru":"С тех пор говорю каждый день.","en":"<b>Od tego czasu</b> mówię codziennie.","say":"Od tego czasu mówię codziennie."}
    ],
    "mistakes":[
      {"wrong":"Temu pięć lat przyjechałam do Polski.","right":"<b>Pięć lat temu</b> przyjechałam do Polski.","why":"temu стоит после отрезка времени — как русское «пять лет назад»."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни порядок слова temu.",
       "q":"«Три года назад» —","opts":["Temu trzy lata","Trzy lata temu","Trzy temu lata"],"answer":1,
       "explain":"<b>Trzy lata temu</b> — temu идёт после отрезка времени, как русское «назад»."},
      {"type":"choice","q":"«Сначала… потом…» —",
       "opts":["Najpierw… potem…","Potem… najpierw…","W końcu… najpierw…"],"answer":0,
       "explain":"Порядок задаёт пара <b>najpierw — potem</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Сначала я работала в кафе»</b>","answer":"Najpierw pracowałam w kawiarni"}
    ],
    "mnemonic":"🧵 najpierw → potem → później → w końcu. Нить, на которую нанизывается рассказ."
   },
   {
    "eyebrow":"Правило 4 · Скрепы смысла",
    "title":"<em>Dlatego</em>, <em>bo</em>, <em>ale</em>",
    "paras":[
      "Событий мало — нужны причины. Причину вводят <b>bo</b> и <b>ponieważ</b> («потому что»): <b>Zmieniłem pracę, bo zarabiałem za mało.</b> <b>Ponieważ nie znałem języka, było mi trudno.</b>",
      "Следствие вводит <b>dlatego</b> («поэтому»): <b>Zarabiałem za mało, dlatego zmieniłem pracę.</b> Вот здесь и живёт ловушка: <b>dlatego</b> — это «поэтому», а <b>dlatego że</b> — уже «потому что». Одно слово разницы, смысл наоборот.",
      "Рядом работает <b>więc</b> — «так что, значит»: <b>Nie zdałem, więc będę zdawać jeszcze raz.</b>",
      "И контраст: <b>ale</b> (но), <b>jednak</b> (однако), <b>chociaż</b> (хотя). <b>Było trudno, ale nie żałuję.</b> <b>Chociaż nie znałam języka, zostałam.</b> Три пары скреп — и рассказ звучит как рассказ, а не как анкета."
    ],
    "audio":"Событий мало — нужны причины. Причину вводят bo и ponieważ, потому что: zmieniłem pracę, bo zarabiałem za mało. Ponieważ nie znałem języka, było mi trudno. Следствие вводит dlatego, поэтому: zarabiałem za mało, dlatego zmieniłem pracę. Вот здесь и живёт ловушка: dlatego — это «поэтому», а dlatego że — уже «потому что». Одно слово разницы, смысл наоборот. Рядом работает więc — так что, значит: nie zdałem, więc będę zdawać jeszcze raz. И контраст: ale — но, jednak — однако, chociaż — хотя. Było trudno, ale nie żałuję. Chociaż nie znałam języka, zostałam.",
    "table":{"rows":[
      ["<b>bo</b> / <b>ponieważ</b> <button class=\"play\" data-say=\"bo, ponieważ\">🔊</button>","потому что"],
      ["<b>dlatego</b> <button class=\"play\" data-say=\"dlatego\">🔊</button>","поэтому"],
      ["<b>dlatego że</b> <button class=\"play\" data-say=\"dlatego że\">🔊</button>","потому что (ловушка!)"],
      ["<b>więc</b> <button class=\"play\" data-say=\"więc\">🔊</button>","так что, значит"],
      ["<b>ale</b> / <b>jednak</b> <button class=\"play\" data-say=\"ale, jednak\">🔊</button>","но / однако"],
      ["<b>chociaż</b> <button class=\"play\" data-say=\"chociaż\">🔊</button>","хотя"]
    ],"star":2},
    "examples":[
      {"ru":"Я сменил работу, потому что мало зарабатывал.","en":"Zmieniłem pracę, <b>bo</b> zarabiałem za mało.","say":"Zmieniłem pracę, bo zarabiałem za mało."},
      {"ru":"Я мало зарабатывал, поэтому сменил работу.","en":"Zarabiałem za mało, <b>dlatego</b> zmieniłem pracę.","gloss":"dlatego = поэтому","say":"Zarabiałem za mało, dlatego zmieniłem pracę."},
      {"ru":"Было трудно, но я не жалею.","en":"Było trudno, <b>ale</b> nie żałuję.","say":"Było trudno, ale nie żałuję."},
      {"ru":"Хотя я не знала языка, я осталась.","en":"<b>Chociaż</b> nie znałam języka, zostałam.","say":"Chociaż nie znałam języka, zostałam."}
    ],
    "mistakes":[
      {"wrong":"Zmieniłem pracę, dlatego zarabiałem za mało.","right":"Zmieniłem pracę, <b>bo</b> zarabiałem za mało.","why":"dlatego значит «поэтому» и вводит следствие. Причину вводят bo, ponieważ или dlatego że."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> реши, где причина, а где следствие.",
       "q":"«Я мало зарабатывал, поэтому сменил работу» —","opts":["Zarabiałem za mało, bo zmieniłem pracę","Zarabiałem za mało, dlatego zmieniłem pracę","Zarabiałem za mało, chociaż zmieniłem pracę"],"answer":1,
       "explain":"«Поэтому» — <b>dlatego</b>, оно вводит следствие."},
      {"type":"choice","q":"«Было трудно, но я не жалею» —",
       "opts":["Było trudno, więc nie żałuję","Było trudno, ale nie żałuję","Było trudno, bo nie żałuję"],"answer":1,
       "explain":"Противопоставление — <b>ale</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши предложение с причиной.",
       "q":"«Я сменил(а) работу, потому что мало зарабатывал(а)»","accept":["zmieniłem pracę, bo zarabiałem za mało","zmienilem prace, bo zarabialem za malo","zmieniłam pracę, bo zarabiałam za mało","zmienilam prace, bo zarabialam za malo"],"placeholder":"Zmieni… pracę, bo …"}
    ],
    "mnemonic":"🔗 bo / ponieważ — причина · dlatego / więc — следствие · ale / jednak / chociaż — контраст."
   }
 ],
 "dialogue":{
   "intro":"На новой работе Марека спрашивают, как он тут оказался. Послушай его историю — она собрана ровно по сегодняшнему каркасу.",
   "lines":[
     {"who":"K","name":"Kolega","side":"left","en":"Opowiedz coś o sobie. Skąd jesteś?","ru":"Расскажи о себе. Ты откуда?",
      "words":[["Opowiedz","расскажи"],["Skąd","откуда"]]},
     {"who":"M","name":"Marek","side":"right","en":"Jestem z małego miasta pod Krakowem.","ru":"Я из маленького городка под Краковом.",
      "words":[["pod Krakowem","под Краковом"]]},
     {"who":"K","name":"Kolega","side":"left","en":"I jak trafiłeś do miasta?","ru":"И как ты попал в город?",
      "words":[["trafiłeś","ты попал"]]},
     {"who":"M","name":"Marek","side":"right","en":"Sześć lat temu przyjechałem na studia. Najpierw mieszkałem u brata.","ru":"Шесть лет назад я приехал учиться. Сначала жил у брата.",
      "words":[["Sześć lat temu","шесть лет назад"],["Najpierw","сначала"]]},
     {"who":"K","name":"Kolega","side":"left","en":"A potem?","ru":"А потом?",
      "words":[["A potem?","а потом?"]]},
     {"who":"M","name":"Marek","side":"right","en":"Potem zacząłem pracować w restauracji. Pracowałem tam trzy lata.","ru":"Потом начал работать в ресторане. Работал там три года.",
      "words":[["zacząłem","я начал"],["Pracowałem","я работал"]]},
     {"who":"K","name":"Kolega","side":"left","en":"Dlaczego zmieniłeś pracę?","ru":"Почему ты сменил работу?",
      "words":[["Dlaczego","почему"],["zmieniłeś","ты сменил"]]},
     {"who":"M","name":"Marek","side":"right","en":"Bo pracowałem tylko wieczorami. Dlatego zacząłem szukać czegoś innego.","ru":"Потому что работал только вечерами. Поэтому начал искать что-то другое.",
      "words":[["Bo","потому что"],["dlatego","поэтому"]]},
     {"who":"K","name":"Kolega","side":"left","en":"I w końcu trafiłeś tutaj.","ru":"И в конце концов попал сюда.",
      "words":[["w końcu","в конце концов"]]},
     {"who":"M","name":"Marek","side":"right","en":"Tak. A za dwa lata chciałbym mieć własne mieszkanie.","ru":"Да. А через два года хотел бы иметь собственную квартиру.",
      "words":[["za dwa lata","через два года"],["własne","собственное"]]}
   ]
 },
 "scene":{
   "intro":"Короткая сценка — история в пять реплик. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Długo mieszkasz w Gdańsku?","ru":"Ты давно живёшь в Гданьске?"},
     {"who":"B","en":"Cztery lata. Najpierw studiowałam, potem znalazłam pracę.","ru":"Четыре года. Сначала училась, потом нашла работу."},
     {"who":"A","en":"I zostałaś?","ru":"И осталась?"},
     {"who":"B","en":"Zostałam, bo pokochałam to miasto.","ru":"Осталась, потому что полюбила этот город."},
     {"who":"A","en":"Rozumiem cię doskonale.","ru":"Прекрасно тебя понимаю."}
   ]
 },
 "vocab":{
   "intro":"Слова дня — скрепы, на которых держится любой рассказ.",
   "items":[
     {"en":"najpierw","ru":"сначала","ex":"Najpierw pracowałam w kawiarni."},
     {"en":"potem","ru":"потом","ex":"Potem znalazłam nową pracę."},
     {"en":"później","ru":"позже","ex":"Wrócę później."},
     {"en":"w końcu","ru":"в конце концов, наконец","ex":"W końcu postanowiłam zostać."},
     {"en":"na początku","ru":"вначале","ex":"Na początku było trudno."},
     {"en":"…temu","ru":"…назад","ex":"Pięć lat temu przyjechałam do Polski."},
     {"en":"bo / ponieważ","ru":"потому что","ex":"Zmieniłem pracę, bo zarabiałem mało."},
     {"en":"dlatego","ru":"поэтому","ex":"Było zimno, dlatego zostaliśmy w domu."},
     {"en":"więc","ru":"так что, значит","ex":"Nie zdałem, więc będę zdawać jeszcze raz."},
     {"en":"ale / jednak","ru":"но / однако","ex":"Było trudno, ale nie żałuję."},
     {"en":"chociaż","ru":"хотя","ex":"Chociaż padało, poszliśmy na spacer."},
     {"en":"od tego czasu","ru":"с тех пор","ex":"Od tego czasu mówię codziennie."}
   ]
 },
 "drag":{
   "intro":"Перетащи скрепу к её переводу.",
   "pairs":[["najpierw","сначала"],["dlatego","поэтому"],["chociaż","хотя"],["w końcu","в конце концов"]]
 },
 "reading":{
   "intro":"Прочитай и послушай историю Анны целиком. Это образец того, что ты напишешь завтра, — только завтра история будет твоя.",
   "title":"Moja historia",
   "sentences":["Mam na imię Anna i mieszkam w Krakowie.","Pięć lat temu przyjechałam tu na trzy miesiące.","Na początku nie znałam nikogo i prawie nie mówiłam po polsku.","Najpierw pracowałam w kawiarni na rynku.","Kiedy pracowałam w kawiarni, uczyłam się języka każdego wieczoru.","Potem zdałam egzamin i znalazłam pracę w szkole.","Wtedy poznałam Marka — pracował w restauracji obok.","Było trudno, ale nie żałuję ani jednego dnia.","Teraz uczę dzieci i sama uczę się dalej.","W grudniu będę zdawać kolejny egzamin.","Dlatego całą jesień będę się uczyć.","A kiedyś chciałabym pojechać do Włoch — to moje stare marzenie."],
   "translation":"Меня зовут Анна, и я живу в Кракове. Пять лет назад я приехала сюда на три месяца. Вначале я никого не знала и почти не говорила по-польски. Сначала работала в кафе на главной площади. Пока работала в кафе, каждый вечер учила язык. Потом сдала экзамен и нашла работу в школе. Тогда я и познакомилась с Мареком — он работал в ресторане рядом. Было трудно, но я не жалею ни об одном дне. Сейчас я учу детей и сама учусь дальше. В декабре буду сдавать очередной экзамен. Поэтому всю осень буду учиться. А когда-нибудь я хотела бы поехать в Италию — это моя старая мечта."
 },
 "quiz":{
   "intro":"Пять вопросов — и завтра остаётся только собрать всё вместе.",
   "items":[
     {"q":"1. «Когда я читала письмо, зазвонил телефон» —","opts":["Kiedy przeczytałam list, dzwonił telefon","Kiedy czytałam list, zadzwonił telefon","Kiedy czytałam list, dzwonił telefon"],"answer":1,
      "explain":"Фон — несовершенный (czytałam), событие — совершенный (zadzwonił)."},
     {"q":"2. «Пять лет назад» —","opts":["Temu pięć lat","Pięć lat temu","Pięć temu lat"],"answer":1,
      "explain":"<b>Temu</b> стоит после отрезка времени, как русское «назад»."},
     {"q":"3. «Было холодно, поэтому мы остались дома» —","opts":["Było zimno, bo zostaliśmy w domu","Było zimno, dlatego zostaliśmy w domu","Było zimno, chociaż zostaliśmy w domu"],"answer":1,
      "explain":"«Поэтому» — <b>dlatego</b>, оно вводит следствие."},
     {"q":"4. «Целый год я учила польский» —","opts":["Cały rok nauczyłam się polskiego","Cały rok uczyłam się polskiego","Cały rok będę uczyć polskiego"],"answer":1,
      "explain":"«Целый год» — процесс, несовершенный вид: <b>uczyłam się</b>."},
     {"q":"5. Какое слово вводит причину?","opts":["dlatego","ponieważ","więc"],"answer":1,
      "explain":"<b>Ponieważ</b> — «потому что». Dlatego и więc вводят следствие."}
   ]
 },
 "essay":{
   "intro":"Черновик завтрашнего проекта. Сегодня — просто история, без волнения.",
   "prompt":"Напиши свою историю в 6–8 предложениях по каркасу: кто ты → что было → что сейчас → что будет. Обязательно используй najpierw, potem и одно из слов bo / dlatego / ale.",
   "hint":"Опора: Mam na imię… · … lat temu… · Najpierw… potem… · Teraz… · W przyszłym roku… · Marzę o…",
   "example":"Mam na imię Anna i mieszkam w Krakowie. Pięć lat temu przyjechałam tu na trzy miesiące i zostałam. Najpierw pracowałam w kawiarni, bo nie znałam dobrze języka. Potem zdałam egzamin i znalazłam pracę w szkole. Było trudno, ale nie żałuję. Teraz uczę dzieci i uczę się dalej. W grudniu będę zdawać kolejny egzamin. Marzę o podróży do Włoch."
 }
},
"30": {
 "day":30,"week":"04",
 "themeRu":"Кто я теперь",
 "themeEn":"Kim jestem teraz",
 "intro":"Тридцатый день. Месяц назад ты открыл(а) этот уровень с одним прошедшим временем в руках — а сегодня у тебя есть вид глагола, оба будущих, шесть падежей в работе, вежливое «бы» и собственное мнение по-польски. Сегодня мы соберём из этого один текст: кто ты сейчас, кем ты был(а) год назад и куда идёшь дальше. Это твой финальный проект уровня.",
 "introAudio":"Тридцатый день. Месяц назад этот уровень начинался с одного прошедшего времени — а сегодня в твоих руках вид глагола, оба будущих, шесть падежей в работе, вежливое «бы» и собственное мнение по-польски. Сегодня мы соберём из этого один текст: кто ты сейчас, что было год назад и куда идёшь дальше. Это твой финальный проект уровня.",
 "goals":[
   "Рассказать, кто ты сейчас: <b>Kim jestem teraz</b>",
   "Сравнить себя с собой: <b>rok temu</b> — <b>teraz</b>, через степени сравнения",
   "Назвать мечты и планы на год вперёд",
   "Подвести итог: уровень <b>A2</b> польского — за плечами"
 ],
 "learned":[
   "Рассказал(а), кто ты сейчас: Kim jestem teraz",
   "Сравнил(а) себя с собой: rok temu и teraz, через степени сравнения",
   "Назвал(а) мечты и планы на год вперёд",
   "Подвёл(а) итог: уровень A2 польского — за плечами"
 ],
 "review":{
   "intro":"Последняя разминка уровня — по всему сразу: вид, мужско-личные формы, оба будущих, падежи и два «знать». Через десять минут всё это соберётся в твой рассказ.",
   "introAudio":"Последняя разминка уровня — по всему сразу: вид, мужско-личные формы, оба будущих, падежи и два «знать». Через десять минут всё это соберётся в твой рассказ.",
   "tasks":[
     {"type":"choice","howto":"<b>Что делать:</b> ищи маркер процесса или результата.",
      "q":"Wczoraj cały wieczór ___ książkę. (читала весь вечер)","opts":["przeczytałam","czytałam","czytam"],"answer":1,
      "explain":"«Целый вечер» — процесс: <b>czytałam</b>. Przeczytałam значило бы «дочитала»."},
     {"type":"choice","howto":"<b>Что делать:</b> посмотри, кто в компании.",
      "q":"Anna i Marek ___ wczoraj w kinie.","opts":["byli","były","był"],"answer":0,
      "explain":"В компании есть мужчина — мужско-личная форма: <b>byli</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни, что стоит после глагола.",
      "q":"«Я знаю, что он придёт» —","opts":["Znam, że przyjdzie","Wiem, że przyjdzie","Umiem, że przyjdzie"],"answer":1,
      "explain":"Целая мысль после «что» — только <b>wiem</b>."},
     {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж направления.",
      "q":"«Мы едем в Варшаву» —","opts":["Jedziemy w Warszawę","Jedziemy do Warszawy","Jedziemy na Warszawę"],"answer":1,
      "explain":"Направление — do плюс родительный: <b>do Warszawy</b>."},
     {"type":"type","howto":"<b>Что делать:</b> напиши вежливую просьбу.",
      "q":"«Ты не мог бы мне помочь?» (к мужчине)","accept":["czy mógłbyś mi pomóc","czy moglbys mi pomoc","mógłbyś mi pomóc","czy mógłbyś mi pomoc"],"placeholder":"Czy mógłbyś …"}
   ]
 },
 "rules":[
   {
    "eyebrow":"Правило 1 · Кто я сейчас",
    "title":"<em>Kim jestem teraz</em>",
    "paras":[
      "Начало рассказа — самое простое и самое важное. Вопрос <b>Kim jesteś?</b> стоит в творительном падеже, и ответ тоже: <b>Jestem nauczycielką. Jestem studentem. Jestem mamą dwójki dzieci.</b>",
      "Дальше — координаты жизни: <b>Mieszkam w Krakowie od pięciu lat. Pracuję jako informatyk. Uczę się polskiego.</b> Три предложения, три разные рамки — и все три ты собираешь уже не задумываясь.",
      "Добавь оценку, и анкета станет человеком: <b>Lubię swoją pracę, chociaż czasem jest trudno.</b> <b>Moim zdaniem to dobre miejsce do życia.</b>",
      "Заметь, сколько всего уровня уже работает в четырёх строчках: творительный, предложный, рамка jako, мнение через moim zdaniem и контраст через chociaż. Так и выглядит выученный язык — не список правил, а обычная речь."
    ],
    "audio":"Начало рассказа — самое простое и самое важное. Вопрос kim jesteś стоит в творительном падеже, и ответ тоже: jestem nauczycielką, jestem studentem, jestem mamą dwójki dzieci. Дальше — координаты жизни: mieszkam w Krakowie od pięciu lat, pracuję jako informatyk, uczę się polskiego. Три предложения, три разные рамки. Добавь оценку, и анкета станет человеком: lubię swoją pracę, chociaż czasem jest trudno. Moim zdaniem to dobre miejsce do życia. Заметь, сколько всего уровня уже работает в четырёх строчках: творительный, предложный, рамка jako, мнение через moim zdaniem и контраст через chociaż.",
    "table":{"rows":[
      ["<b>Kim jesteś?</b> <button class=\"play\" data-say=\"Kim jesteś?\">🔊</button>","Кто ты (по сути, по роли)?"],
      ["Jestem <b>nauczycielką</b>. <button class=\"play\" data-say=\"Jestem nauczycielką\">🔊</button>","Я учительница. (творительный)"],
      ["Pracuję <b>jako informatyk</b>. <button class=\"play\" data-say=\"Pracuję jako informatyk\">🔊</button>","Работаю программистом. (именительный)"],
      ["Mieszkam w Krakowie <b>od pięciu lat</b>. <button class=\"play\" data-say=\"Mieszkam w Krakowie od pięciu lat\">🔊</button>","Живу в Кракове пять лет."],
      ["<b>Moim zdaniem</b> to dobre miejsce. <button class=\"play\" data-say=\"Moim zdaniem to dobre miejsce\">🔊</button>","По-моему, это хорошее место."]
    ],"star":-1},
    "examples":[
      {"ru":"Я студентка и работаю официанткой.","en":"Jestem <b>studentką</b> i pracuję <b>jako kelnerka</b>.","gloss":"две рамки в одной фразе","say":"Jestem studentką i pracuję jako kelnerka."},
      {"ru":"Живу здесь пять лет.","en":"Mieszkam tu <b>od pięciu lat</b>.","say":"Mieszkam tu od pięciu lat."},
      {"ru":"Люблю свою работу, хотя иногда бывает трудно.","en":"Lubię swoją pracę, <b>chociaż</b> czasem jest trudno.","say":"Lubię swoją pracę, chociaż czasem jest trudno."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни падеж после być.",
       "q":"«Я учительница» —","opts":["Jestem nauczycielka","Jestem nauczycielką","Jestem jako nauczycielka"],"answer":1,
       "explain":"После być — творительный: <b>nauczycielką</b>."},
      {"type":"type","howto":"<b>Что делать:</b> напиши первую строчку своего проекта.",
       "q":"«Меня зовут…» (представься по-польски)","accept":["mam na imię","nazywam się","jestem"],"placeholder":"Mam na imię …"}
    ],
    "mnemonic":"🪪 Kim jestem → gdzie mieszkam → co robię → co o tym myślę. Четыре строчки — и портрет готов."
   },
   {
    "eyebrow":"Правило 2 · Год назад и сейчас",
    "title":"<em>Rok temu</em> — <em>teraz</em>",
    "paras":[
      "Самая красивая часть финального рассказа — сравнение себя с собой. Формула проста: <b>Rok temu…</b> (прошедшее) — <b>a teraz…</b> (настоящее). <b>Rok temu nie rozumiałam prawie nic, a teraz rozumiem prawie wszystko.</b>",
      "Здесь пригодятся степени сравнения из недели 3: <b>Mówię lepiej niż rok temu.</b> <b>Czytam szybciej.</b> <b>Robię mniej błędów.</b> И оборот <b>coraz</b> — «всё…»: <b>Rozumiem coraz więcej.</b> <b>Mówię coraz swobodniej.</b>",
      "Отрицательная половина тоже честная и полезная: <b>Nadal nie umiem…</b> («всё ещё не умею»), <b>Wciąż mylę…</b> («до сих пор путаю»). Признать это — не слабость, а точность.",
      "И глагол, ради которого стоило пройти весь уровень: <b>nauczyłam się</b> — «я научилась», совершенный вид, результат. <b>Nauczyłem się mówić o przeszłości.</b> <b>Nauczyłam się prosić grzecznie.</b>"
    ],
    "audio":"Самая красивая часть финального рассказа — сравнение себя с собой. Формула проста: rok temu, прошедшее, а teraz, настоящее. Rok temu nie rozumiałam prawie nic, a teraz rozumiem prawie wszystko. Здесь пригодятся степени сравнения из недели три: mówię lepiej niż rok temu, czytam szybciej, robię mniej błędów. И оборот coraz — всё: rozumiem coraz więcej, mówię coraz swobodniej. Отрицательная половина тоже честная и полезная: nadal nie umiem, всё ещё не умею; wciąż mylę, до сих пор путаю. И глагол, ради которого стоило пройти весь уровень: nauczyłam się — я научилась, совершенный вид, результат. Nauczyłem się mówić o przeszłości. Nauczyłam się prosić grzecznie.",
    "table":{"rows":[
      ["<b>Rok temu</b> nie rozumiałam nic. <button class=\"play\" data-say=\"Rok temu nie rozumiałam nic\">🔊</button>","Год назад я ничего не понимала."],
      ["<b>A teraz</b> rozumiem prawie wszystko. <button class=\"play\" data-say=\"A teraz rozumiem prawie wszystko\">🔊</button>","А сейчас понимаю почти всё."],
      ["Mówię <b>lepiej niż</b> rok temu. <button class=\"play\" data-say=\"Mówię lepiej niż rok temu\">🔊</button>","Говорю лучше, чем год назад."],
      ["Rozumiem <b>coraz więcej</b>. <button class=\"play\" data-say=\"Rozumiem coraz więcej\">🔊</button>","Понимаю всё больше."],
      ["<b>Nadal nie umiem</b> pisać długich tekstów. <button class=\"play\" data-say=\"Nadal nie umiem pisać długich tekstów\">🔊</button>","Всё ещё не умею писать длинные тексты."],
      ["<b>Nauczyłam się</b> mówić o przeszłości. <button class=\"play\" data-say=\"Nauczyłam się mówić o przeszłości\">🔊</button>","Я научилась говорить о прошлом."]
    ],"star":2},
    "examples":[
      {"ru":"Год назад я не умела просить вежливо.","en":"<b>Rok temu</b> nie umiałam prosić grzecznie.","say":"Rok temu nie umiałam prosić grzecznie."},
      {"ru":"А теперь умею — и это приятно.","en":"<b>A teraz</b> umiem — i to miłe.","say":"A teraz umiem i to miłe."},
      {"ru":"Я делаю меньше ошибок, чем раньше.","en":"Robię <b>mniej błędów niż</b> wcześniej.","gloss":"сравнение через niż — день 15","say":"Robię mniej błędów niż wcześniej."},
      {"ru":"Я научился рассказывать истории.","en":"<b>Nauczyłem się</b> opowiadać historie.","say":"Nauczyłem się opowiadać historie."}
    ],
    "mistakes":[
      {"wrong":"Mówię lepiej jak rok temu.","right":"Mówię lepiej <b>niż</b> rok temu.","why":"«чем» в сравнении — niż. Форма «jak» в этом значении считается разговорной и в письме её лучше не использовать."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни слово «чем» в сравнении.",
       "q":"«Я говорю лучше, чем год назад» —","opts":["Mówię lepiej jak rok temu","Mówię lepiej niż rok temu","Mówię dobrze niż rok temu"],"answer":1,
       "explain":"Сравнение — <b>lepiej niż</b>. Dobry → lepszy, dobrze → lepiej."},
      {"type":"choice","q":"«Я научилась говорить о прошлом» —",
       "opts":["Uczyłam się mówić o przeszłości","Nauczyłam się mówić o przeszłości","Będę uczyć się mówić o przeszłości"],"answer":1,
       "explain":"Результат — совершенный вид: <b>nauczyłam się</b>."},
      {"type":"build","howto":"<b>Что делать:</b> нажимай на слова по порядку.",
       "q":"Собери: <b>«Год назад я ничего не понимала»</b>","answer":"Rok temu nic nie rozumiałam"}
    ],
    "mnemonic":"📈 Rok temu… a teraz… · lepiej niż… · coraz więcej · nauczyłem się / nauczyłam się."
   },
   {
    "eyebrow":"Правило 3 · Что дальше",
    "title":"Мечты, планы и одно «бы»",
    "paras":[
      "Финал рассказа смотрит вперёд — и тут в одну строчку помещается почти вся четвёртая неделя. Мечта: <b>Marzę o podróży do Włoch.</b> Намерение: <b>Zamierzam zdawać egzamin B1.</b> План с датой: <b>W czerwcu pojadę do Gdańska.</b>",
      "Оба будущих — по смыслу: <b>Będę uczyć się dalej</b> (процесс) и <b>Nauczę się mówić swobodnie</b> (результат). Одно рядом с другим звучит естественно и точно.",
      "И одно вежливое «бы» на весь текст — оно смягчает и делает интонацию взрослой: <b>Chciałbym kiedyś mieszkać nad morzem.</b> <b>Chciałabym mówić bez akcentu.</b>",
      "Закончить рассказ лучше всего надеждой, а не обещанием: <b>Mam nadzieję, że za rok napiszę to samo — tylko po polsku i bez słownika.</b>"
    ],
    "audio":"Финал рассказа смотрит вперёд — и тут в одну строчку помещается почти вся четвёртая неделя. Мечта: marzę o podróży do Włoch. Намерение: zamierzam zdawać egzamin B1. План с датой: w czerwcu pojadę do Gdańska. Оба будущих — по смыслу: będę uczyć się dalej, процесс, и nauczę się mówić swobodnie, результат. И одно вежливое «бы» на весь текст: chciałbym kiedyś mieszkać nad morzem, chciałabym mówić bez akcentu. Закончить рассказ лучше всего надеждой, а не обещанием: mam nadzieję, że za rok napiszę to samo — tylko po polsku i bez słownika.",
    "table":{"rows":[
      ["<b>Marzę o…</b> <button class=\"play\" data-say=\"Marzę o podróży do Włoch\">🔊</button>","мечта (+ предложный)"],
      ["<b>Zamierzam…</b> <button class=\"play\" data-say=\"Zamierzam zdawać egzamin\">🔊</button>","намерение (+ инфинитив)"],
      ["<b>W czerwcu pojadę…</b> <button class=\"play\" data-say=\"W czerwcu pojadę do Gdańska\">🔊</button>","план с датой (будущее сов. вида)"],
      ["<b>Będę uczyć się</b> dalej. <button class=\"play\" data-say=\"Będę uczyć się dalej\">🔊</button>","процесс в будущем"],
      ["<b>Chciałbym / chciałabym…</b> <button class=\"play\" data-say=\"Chciałabym mówić bez akcentu\">🔊</button>","мягкое «я хотел(а) бы»"],
      ["<b>Mam nadzieję, że…</b> <button class=\"play\" data-say=\"Mam nadzieję, że za rok będzie łatwiej\">🔊</button>","надеюсь, что…"]
    ],"star":-1},
    "examples":[
      {"ru":"Буду учиться дальше и когда-нибудь выучу язык хорошо.","en":"<b>Będę uczyć się</b> dalej i kiedyś <b>nauczę się</b> języka dobrze.","gloss":"процесс и результат рядом","say":"Będę uczyć się dalej i kiedyś nauczę się języka dobrze."},
      {"ru":"Я хотела бы говорить свободнее.","en":"<b>Chciałabym</b> mówić swobodniej.","say":"Chciałabym mówić swobodniej."},
      {"ru":"Надеюсь, что через год будет легче.","en":"<b>Mam nadzieję, że</b> za rok będzie łatwiej.","say":"Mam nadzieję, że za rok będzie łatwiej."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> выбери форму по смыслу.",
       "q":"«Буду учиться дальше» —","opts":["Nauczę się dalej","Będę uczyć się dalej","Będę nauczyć się dalej"],"answer":1,
       "explain":"Процесс без границы — несовершенное будущее: <b>będę uczyć się</b>."},
      {"type":"speak","howto":"Нажми микрофон и скажи это вслух — о себе.",
       "target":"Mam nadzieję, że za rok będzie łatwiej.","sub":"надеюсь, что через год будет легче","want":"Mam nadzieję, że za rok będzie łatwiej."}
    ],
    "mnemonic":"🚀 Marzę o… · Zamierzam… · W czerwcu pojadę… · Mam nadzieję, że… Четыре взгляда вперёд."
   },
   {
    "eyebrow":"Правило 4 · Итог",
    "title":"Что теперь у тебя есть",
    "paras":[
      "Посмотри на список. <b>Прошедшее время целиком</b> — по родам и числам, с неправильными основами szedł, mógł, jadł. <b>Вид глагола</b> — главный подарок уровня: robić / zrobić работает у тебя так же, как «делать / сделать», и связывает все времена. <b>Оба будущих</b> — będę robić и zrobię.",
      "<b>Падежи в работе:</b> dopełniacz после количеств и глаголов, celownik с dziękuję и pomagam, wołacz в обращениях, плюс четыре из A1. <b>Мужско-личный род</b> — тема, где родная интуиция молчала, и ты всё равно её взял(а): oni byli / one były, dwaj studenci / dwie studentki.",
      "<b>Степени сравнения</b>, <b>глаголы движения</b>, <b>императив</b>, <b>врач и рецепты</b>, <b>вежливое «бы»</b>, <b>мнения</b>, <b>учёба</b>, <b>работа</b>, <b>дорога</b>, <b>мечты</b>. Это уровень A2: не «немного больше слов», а способность рассказать свою жизнь и поспорить о ней.",
      "Что дальше, на B1? Полное условное с <b>gdyby</b> («если бы»), придаточные с <b>żeby</b>, длинные тексты, оттенки вида потоньше и разговор о том, чего нет перед глазами. Всё это стоит на том, что уже сделано. Сегодня — просто закрой уровень и выдохни. Это была хорошая работа. 💛"
    ],
    "audio":"Посмотри на список. Прошедшее время целиком — по родам и числам, с неправильными основами szedł, mógł, jadł. Вид глагола — главный подарок уровня: robić и zrobić работает так же, как «делать и сделать», и связывает все времена. Оба будущих — będę robić и zrobię. Падежи в работе: dopełniacz после количеств и глаголов, celownik с dziękuję и pomagam, wołacz в обращениях, плюс четыре из A1. Мужско-личный род — тема, где родная интуиция молчала: oni byli, one były, dwaj studenci, dwie studentki. Степени сравнения, глаголы движения, императив, здоровье, вежливое «бы», мнения, учёба, работа, дорога, мечты. Это уровень A2: не «немного больше слов», а способность рассказать свою жизнь и поспорить о ней. Что дальше, на B1? Полное условное с gdyby, придаточные с żeby, длинные тексты, оттенки вида потоньше и разговор о том, чего нет перед глазами. Всё это стоит на том, что уже сделано. Сегодня просто закрой уровень и выдохни. Это была хорошая работа.",
    "table":{"rows":[
      ["<b>Aspekt</b>: robić / zrobić <button class=\"play\" data-say=\"robić, zrobić\">🔊</button>","вид глагола — ядро уровня"],
      ["<b>Czas przeszły</b>: byłem / byłam / byliśmy <button class=\"play\" data-say=\"byłem, byłam, byliśmy\">🔊</button>","прошедшее целиком"],
      ["<b>Dwa czasy przyszłe</b>: będę robić / zrobię <button class=\"play\" data-say=\"będę robić, zrobię\">🔊</button>","оба будущих"],
      ["<b>Rodzaj męskoosobowy</b>: oni byli / one były <button class=\"play\" data-say=\"oni byli, one były\">🔊</button>","мужско-личный род"],
      ["<b>Tryb przypuszczający</b>: chciałbym <button class=\"play\" data-say=\"chciałbym\">🔊</button>","вежливое «бы»"],
      ["<b>Opinie</b>: moim zdaniem, masz rację <button class=\"play\" data-say=\"moim zdaniem, masz rację\">🔊</button>","мнения и спор"]
    ],"star":0},
    "examples":[
      {"ru":"Я говорю по-польски о прошлом, настоящем и будущем.","en":"<b>Mówię po polsku</b> o przeszłości, teraźniejszości i przyszłości.","say":"Mówię po polsku o przeszłości, teraźniejszości i przyszłości."},
      {"ru":"Это был хороший месяц.","en":"To <b>był</b> dobry miesiąc.","say":"To był dobry miesiąc."}
    ],
    "tasks":[
      {"type":"choice","howto":"<b>Что делать:</b> вспомни, что было ядром уровня.",
       "q":"Главная тема A2, которая связывает все времена, —","opts":["степени сравнения","вид глагола (aspekt)","звательный падеж"],"answer":1,
       "explain":"<b>Вид глагола</b> — ядро уровня: он определяет и прошедшее, и будущее, и императив."},
      {"type":"speak","howto":"Нажми микрофон и скажи это вслух. Ты имеешь полное право.",
       "target":"Mówię po polsku o przeszłości i o przyszłości.","sub":"я говорю по-польски о прошлом и о будущем","want":"Mówię po polsku o przeszłości i o przyszłości."}
    ],
    "mnemonic":"🏁 Aspekt · przeszły · dwa przyszłe · przypadki · męskoosobowy · przypuszczający. Это и есть A2."
   }
 ],
 "dialogue":{
   "intro":"Финальный диалог уровня. Анна и Марек подводят итоги года — и в их разговоре встречается почти всё, что было за тридцать дней.",
   "lines":[
     {"who":"M","name":"Marek","side":"right","en":"Pamiętasz, jaki byłaś rok temu?","ru":"Помнишь, какой ты была год назад?",
      "words":[["Pamiętasz","помнишь"],["rok temu","год назад"]]},
     {"who":"A","name":"Anna","side":"left","en":"Pamiętam. Prawie nic nie rozumiałam po polsku.","ru":"Помню. Почти ничего не понимала по-польски.",
      "words":[["Prawie nic","почти ничего"],["rozumiałam","понимала"]]},
     {"who":"M","name":"Marek","side":"right","en":"A teraz kłócisz się ze mną o filmy.","ru":"А теперь споришь со мной о фильмах.",
      "words":[["kłócisz się","споришь"],["ze mną","со мной"]]},
     {"who":"A","name":"Anna","side":"left","en":"I mam rację częściej niż ty.","ru":"И бываю права чаще, чем ты.",
      "words":[["mam rację","я права"],["częściej niż","чаще, чем"]]},
     {"who":"M","name":"Marek","side":"right","en":"Nie zgadzam się, ale dziś ci nie przeszkadzam.","ru":"Не согласен, но сегодня не мешаю.",
      "words":[["Nie zgadzam się","не согласен"],["nie przeszkadzam","не мешаю"]]},
     {"who":"A","name":"Anna","side":"left","en":"W grudniu zdam jeszcze jeden egzamin. Potem odpocznę.","ru":"В декабре сдам ещё один экзамен. Потом отдохну.",
      "words":[["zdam","сдам"],["odpocznę","отдохну"]]},
     {"who":"M","name":"Marek","side":"right","en":"A w maju? Mówiłaś o Włoszech.","ru":"А в мае? Ты говорила об Италии.",
      "words":[["w maju","в мае"],["o Włoszech","об Италии"]]},
     {"who":"A","name":"Anna","side":"left","en":"Marzę o tej podróży od dawna. Pojedziemy razem.","ru":"Мечтаю об этой поездке давно. Поедем вместе.",
      "words":[["Marzę o","мечтаю о"],["od dawna","давно"]]},
     {"who":"M","name":"Marek","side":"right","en":"Umowa stoi. Kupię bilety w lutym.","ru":"Договорились. Куплю билеты в феврале.",
      "words":[["Umowa stoi","договорились"],["Kupię","куплю"]]},
     {"who":"A","name":"Anna","side":"left","en":"Rok temu bym w to nie uwierzyła.","ru":"Год назад я бы в это не поверила.",
      "words":[["bym nie uwierzyła","я бы не поверила"]]}
   ]
 },
 "scene":{
   "intro":"И последняя сценка уровня — короткое поздравление. Нажми «Смотреть».",
   "lines":[
     {"who":"A","en":"Skończyłaś poziom A2. Gratulacje!","ru":"Ты закончила уровень A2. Поздравляю!"},
     {"who":"B","en":"Dziękuję. Rok temu nie umiałam nic powiedzieć.","ru":"Спасибо. Год назад я ничего не умела сказать."},
     {"who":"A","en":"A teraz opowiadasz całą historię.","ru":"А теперь рассказываешь целую историю."},
     {"who":"B","en":"Będę uczyć się dalej. Chcę zdać B1.","ru":"Буду учиться дальше. Хочу сдать B1."},
     {"who":"A","en":"Powodzenia! Dasz radę.","ru":"Удачи! У тебя получится."}
   ]
 },
 "vocab":{
   "intro":"Двенадцать слов финального дня — те, на которых держится рассказ о себе сегодняшнем.",
   "items":[
     {"en":"Kim jesteś?","ru":"кто ты (по роли)?","ex":"Kim jesteś z zawodu?"},
     {"en":"rok temu","ru":"год назад","ex":"Rok temu nie rozumiałam nic."},
     {"en":"teraz","ru":"сейчас","ex":"A teraz rozumiem prawie wszystko."},
     {"en":"lepiej niż…","ru":"лучше, чем…","ex":"Mówię lepiej niż rok temu."},
     {"en":"coraz więcej","ru":"всё больше","ex":"Rozumiem coraz więcej."},
     {"en":"nauczyć się","ru":"научиться (результат)","ex":"Nauczyłam się mówić o przeszłości."},
     {"en":"nadal / wciąż","ru":"всё ещё, до сих пор","ex":"Nadal nie umiem pisać długich tekstów."},
     {"en":"marzyć o…","ru":"мечтать о…","ex":"Marzę o podróży do Włoch."},
     {"en":"zamierzać","ru":"собираться, намереваться","ex":"Zamierzam zdawać egzamin B1."},
     {"en":"mam nadzieję, że…","ru":"надеюсь, что…","ex":"Mam nadzieję, że za rok będzie łatwiej."},
     {"en":"dasz radę","ru":"у тебя получится","ex":"Nie martw się, dasz radę."},
     {"en":"skończyć","ru":"закончить","ex":"Skończyłem poziom A2."}
   ]
 },
 "drag":{
   "intro":"Последняя игра уровня. Перетащи польскую фразу к её переводу.",
   "pairs":[["rok temu","год назад"],["lepiej niż","лучше, чем"],["nauczyłam się","я научилась"],["mam nadzieję","надеюсь"]]
 },
 "reading":{
   "intro":"Прочитай и послушай итоговый рассказ Анны. Это образец твоего финального проекта — прошлое, настоящее, будущее и одно «бы» в конце.",
   "title":"Kim jestem teraz",
   "sentences":["Mam na imię Anna i mieszkam w Krakowie od pięciu lat.","Jestem nauczycielką i pracuję w małej szkole.","Rok temu prawie nie mówiłam po polsku.","Na początku uczyłam się sama, wieczorami, po pracy.","Potem zapisałam się na kurs i zdałam pierwszy egzamin.","Teraz mówię lepiej niż rok temu i robię mniej błędów.","Nauczyłam się opowiadać o przeszłości i prosić grzecznie.","Nadal mylę niektóre końcówki, ale już się tego nie boję.","Moim zdaniem najtrudniejszy był rodzaj męskoosobowy.","W grudniu będę zdawać kolejny egzamin — uczę się codziennie.","W maju pojedziemy z Markiem do Włoch.","Marzę o tej podróży od dawna.","Chciałabym kiedyś mówić bez słownika w kieszeni.","Mam nadzieję, że za rok napiszę ten tekst dłuższy i lepszy."],
   "translation":"Меня зовут Анна, и я живу в Кракове пять лет. Я учительница и работаю в маленькой школе. Год назад я почти не говорила по-польски. Вначале училась сама, вечерами, после работы. Потом записалась на курс и сдала первый экзамен. Сейчас я говорю лучше, чем год назад, и делаю меньше ошибок. Я научилась рассказывать о прошлом и вежливо просить. До сих пор путаю некоторые окончания, но уже этого не боюсь. По-моему, самым трудным был мужско-личный род. В декабре буду сдавать очередной экзамен — учусь каждый день. В мае мы с Мареком поедем в Италию. Я давно мечтаю об этой поездке. Мне хотелось бы когда-нибудь говорить без словаря в кармане. Надеюсь, что через год напишу этот текст длиннее и лучше."
 },
 "quiz":{
   "intro":"Последние вопросы уровня — по всему, что было за тридцать дней. Ответишь — и A2 за плечами. Я тобой горжусь. 💛",
   "items":[
     {"q":"1. «Целый вечер я читала книгу» —","opts":["Cały wieczór przeczytałam książkę","Cały wieczór czytałam książkę","Cały wieczór czytam książkę"],"answer":1,
      "explain":"«Целый вечер» — процесс, несовершенный вид: <b>czytałam</b>."},
     {"q":"2. Анна и Марек: «Они были в кино» —","opts":["Oni były w kinie","Oni byli w kinie","One były w kinie"],"answer":1,
      "explain":"В компании есть мужчина — мужско-личная форма: <b>byli</b>."},
     {"q":"3. «Ты не мог бы мне помочь?» (к мужчине) —","opts":["Czy mogłabyś mi pomóc?","Czy mógłbyś mi pomóc?","Czy mógłby pan mi pomóc?"],"answer":1,
      "explain":"К мужчине на «ты» — <b>mógłbyś</b>. Третий вариант — вежливое «вы»."},
     {"q":"4. «Я знаю, где вокзал» —","opts":["Znam, gdzie jest dworzec","Wiem, gdzie jest dworzec","Umiem, gdzie jest dworzec"],"answer":1,
      "explain":"Целая мысль после «где» — только <b>wiem</b>."},
     {"q":"5. «Билет до Гданьска» —","opts":["Bilet do Gdańsk","Bilet do Gdańska","Bilet w Gdańsk"],"answer":1,
      "explain":"Направление — do плюс родительный: <b>do Gdańska</b>."},
     {"q":"6. «Я говорю лучше, чем год назад» —","opts":["Mówię lepiej jak rok temu","Mówię lepiej niż rok temu","Mówię dobrze niż rok temu"],"answer":1,
      "explain":"Сравнение — <b>lepiej niż</b>: dobrze → lepiej, «чем» → niż."}
   ]
 },
 "essay":{
   "intro":"Вот он — финальный проект уровня. Не спеши: это последняя страница A2, и она твоя. Пиши так, как говоришь, — с ошибками, но своими словами.",
   "prompt":"Напиши рассказ о себе в 8–10 предложениях: кто ты сейчас, каким(ой) ты был(а) год назад, чему научился(лась), что до сих пор трудно, и о чём мечтаешь. Используй хотя бы одно «бы» и одно сравнение с niż.",
   "hint":"Каркас: Mam na imię… Jestem… · Rok temu… a teraz… · Nauczyłem się / nauczyłam się… · Nadal nie umiem… · Marzę o… · Mam nadzieję, że… 💛",
   "example":"Mam na imię Anna i mieszkam w Krakowie. Jestem nauczycielką i pracuję w małej szkole. Rok temu prawie nie mówiłam po polsku. Uczyłam się sama, wieczorami, po pracy. Potem zdałam pierwszy egzamin. Teraz mówię lepiej niż rok temu i robię mniej błędów. Nauczyłam się opowiadać o przeszłości i prosić grzecznie. Nadal mylę końcówki, ale już się tego nie boję. Marzę o podróży do Włoch — pojedziemy tam w maju. Chciałabym kiedyś mówić bez słownika."
 }
}
};
