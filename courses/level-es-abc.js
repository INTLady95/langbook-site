/* Spanish Alphabet & Reading — FREE Foundation mini-course (для русскоязычных).
   Standard direction: en/themeEn/say = SPANISH (target), ru/themeRu = русский,
   Мира объясняет по-русски на «ты». 12 уроков в 2 этапа, без экзаменов
   (preview:true открывает Этап 2, когда его уроки построены).
   Бесплатный бонус — см. freeCourses в paywall.js. Data only — рендерер в engine.js. */
window.LEVEL = {
  code:'ABC',
  course:'es-abc',
  pkey:'langbook-es-abc-progress',
  preview:true,          // экзаменов нет: этапы открываются по мере готовности уроков
  finalNote:'Это твоя победа 💛 Ты пришёл(шла) сюда, не зная букв, — а уходишь, читая настоящие испанские слова и целые предложения вслух. Испанский честен: как пишется, так и читается — и теперь этот ключ у тебя. Тебя ждёт День 1 курса Español A1.',
  speech:'es-ES',
  langPo:'по-испански',
  langNa:'испанский',
  langAdj:'испанское',
  phIn:'en español…'
};

const COURSE = [
  {wn:'01', wt:'Этап 1 · 27 букв', days:[
    {n:1,t:'Друзья и гласные',p:'a e i o u'},
    {n:2,t:'Ложные друзья',p:'B C P H X Y R'},
    {n:3,t:'Новые формы',p:'D F G L N S V'},
    {n:4,t:'Испанские специи · I',p:'ñ · ll · ch'},
    {n:5,t:'Специи · II',p:'j · g · c · qu'},
    {n:6,t:'R против RR',p:'pero ≠ perro'},
    {n:7,t:'Повторение · весь алфавит',p:'¡Hola, España!'}
  ]},
  {wn:'02', wt:'Этап 2 · Правила чтения', days:[
    {n:8,t:'Ударение',p:'gato · café'},
    {n:9,t:'Слоги и связность',p:'los amigos'},
    {n:10,t:'Дифтонги',p:'bien · día'},
    {n:11,t:'Интонация',p:'¿…? ¡…!'},
    {n:12,t:'Читаем по-настоящему!',p:'Me llamo Ana.'}
  ]}
];

/* Экзаменов во вступительном курсе нет. */
const EXAMS = {};
