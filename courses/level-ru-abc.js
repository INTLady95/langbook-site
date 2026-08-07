/* Russian Alphabet & Reading — FREE Foundation mini-course (for English speakers).
   Target = Russian (Cyrillic), explanations = English. Fields MIRRORED like ru-a1:
   en/themeEn/say = RUSSIAN, ru/themeRu/gloss = ENGLISH. Мира narrates in English.
   12 lessons in 2 stages, no exams (preview:true opens Stage 2 smoothly).
   Free bonus — see freeCourses in paywall.js. Data only — renderer in engine.js. */
window.LEVEL = {
  code:'ABC',
  course:'ru-abc',
  pkey:'langbook-ru-abc-progress',
  preview:true,          // no exams: stages open once their lessons are built
  finalNote:"You did it 💛 You went from “I can’t read a single letter” to reading real Russian words and sentences aloud. Cyrillic is no longer a wall — it’s a door. Now Day 1 of Russian A1 is waiting for you.",
  speech:'ru-RU',        // target voice (the Russian being read)
  speechNative:'en-US',  // Мира's own voice (she explains in English)
  langPo:'in Russian',
  langNa:'Russian',
  langAdj:'Russian',
  phIn:'in Russian…'
};

const COURSE = [
  {wn:'01', wt:'Stage 1 · The 33 letters', days:[
    {n:1,t:'True friends',p:'А К М О Т'},
    {n:2,t:'False friends',p:'В Е Н Р С У Х'},
    {n:3,t:'New shapes · I',p:'Б Г Д З Л П'},
    {n:4,t:'New shapes · II',p:'И Й Ф Э'},
    {n:5,t:'The hushers',p:'Ж Ц Ч Ш Щ'},
    {n:6,t:'Vowels & signs',p:'Ю Я Ё · Ь Ъ Ы'},
    {n:7,t:'Review · the whole alphabet',p:'Весь алфави́т'}
  ]},
  {wn:'02', wt:'Stage 2 · Reading rules', days:[
    {n:8,t:'Stress',p:'Ударе́ние'},
    {n:9,t:'Vowel reduction',p:'А́канье: о → [a]'},
    {n:10,t:'Hard & soft',p:'Твёрдо и мя́гко'},
    {n:11,t:'Voicing & devoicing',p:'Хлеб → [хлеп]'},
    {n:12,t:'Read for real!',p:'Чита́ем предложе́ния'}
  ]}
];

/* No exams in the Foundation course. */
const EXAMS = {};
