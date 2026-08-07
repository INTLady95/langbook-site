/* English Alphabet & Reading — FREE Foundation mini-course (для русскоязычных).
   Standard direction: en/themeEn/say = ENGLISH (target), ru/themeRu = русский,
   Мира объясняет по-русски на «ты». 12 уроков в 2 этапа, без экзаменов
   (preview:true открывает Этап 2, когда его уроки построены).
   Бесплатный бонус — см. freeCourses в paywall.js. Data only — рендерер в engine.js. */
window.LEVEL = {
  code:'ABC',
  course:'en-abc',
  pkey:'langbook-en-abc-progress',
  preview:true,          // экзаменов нет: этапы открываются по мере готовности уроков
  finalNote:'Это твоя победа 💛 Ты пришёл(шла) сюда, не зная букв, — а уходишь, читая настоящие английские слова и целые предложения вслух. Латиница больше не стена — это дверь. Теперь тебя ждёт День 1 курса English A1.',
  speech:'en-US'
  /* langPo/langNa/langAdj/phIn — английские дефолты движка подходят как есть */
};

const COURSE = [
  {wn:'01', wt:'Этап 1 · 26 букв', days:[
    {n:1,t:'Настоящие друзья',p:'A E K M O T'},
    {n:2,t:'Ложные друзья',p:'B C H P R X Y'},
    {n:3,t:'Новые формы · I',p:'D F L N S Z'},
    {n:4,t:'Новые формы · II',p:'G V I U'},
    {n:5,t:'Хитрые буквы',p:'J · Qu · W'},
    {n:6,t:'Краткие гласные',p:'cat · dog · sun'},
    {n:7,t:'Повторение · весь алфавит',p:'A → Z'}
  ]},
  {wn:'02', wt:'Этап 2 · Правила чтения', days:[
    {n:8,t:'Волшебная e',p:'cap → cape'},
    {n:9,t:'Диграфы',p:'th · sh · ch'},
    {n:10,t:'Пары гласных',p:'ee · oo · ow'},
    {n:11,t:'Немые буквы',p:'know · write'},
    {n:12,t:'Читаем по-настоящему!',p:'I can read English.'}
  ]}
];

/* Экзаменов во вступительном курсе нет. */
const EXAMS = {};
