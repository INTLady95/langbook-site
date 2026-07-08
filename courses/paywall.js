/* Paywall — one-time purchase, the course is yours forever (Tanya's final model:
   no subscriptions, no tiers, no expiring access).
   «Курс» = один уровень (A1 — это курс).
   ЦЕНА ЗАПУСКА (решение Тани 2026-07-08): курс $79, серия A1→C2 $369.
   После запуска цена честно поднимается до $99 / $479 — перечёркнутые
   цифры на buy.html обязаны стать реальностью, иначе это dark pattern.
   Проба (Таня, 2026-07-08): первые 3 урока бесплатны; экзамены — только в полной версии.

   КЛЮЧИ (формат — префикс решает, что открыто; после дефиса — минимум 8 знаков):
     ENA1-XXXXXXXX … ENC2-XXXXXXXX   — один курс английского
     ESA1-XXXXXXXX … ESC2-XXXXXXXX   — один курс испанского
     ENALL-XXXXXXXX / ESALL-XXXXXXXX — вся серия языка A1→C2
     ALL-XXXXXXXX                    — мастер-ключ (всё; для Тани/подарков)
   В localStorage['langbook-license'] может лежать несколько ключей через пробел.

   ПОДКЛЮЧЕНИЕ РЕАЛЬНОЙ ОПЛАТЫ (см. docs/PAYMENTS.md):
   1. Создай у Merchant of Record (Paddle или Lemon Squeezy) продукты-разовые покупки:
      12 курсов по $49 + 2 серии по $249. Ключи выдавай с префиксами выше.
   2. Впиши checkout-ссылки в `checkout` ниже (заглушка «продажи скоро» на buy.html
      уберётся сама для каждого продукта, у которого появилась ссылка). */
window.PAYWALL = {
  enabled: true,
  freeDays: 3,                    // дни 1–3 бесплатны; все экзамены — в полной версии
  price: '$79',                   // цена запуска ОДНОГО курса (одного уровня)
  futurePrice: '$99',             // цена после запуска (перечёркнутая рядом)
  seriesPrice: '$369',            // цена запуска серии A1→C2 (6 курсов)
  futureSeriesPrice: '$479',      // цена серии после запуска (перечёркнутая)
  seriesFull: '$474',             // сумма шести курсов по отдельности (6×$79)
  checkout: {                     // courseId → checkout-URL от MoR
    'en-a1':'', 'en-a2':'', 'en-b1':'', 'en-b2':'', 'en-c1':'', 'en-c2':'',
    'es-a1':'', 'es-a2':'', 'es-b1':'', 'es-b2':'', 'es-c1':'', 'es-c2':'',
    'en-series':'', 'es-series':''
  },
  buyPage: '../buy.html',
};

/* Does one stored key open the given course? course = 'en-a1' … 'es-c2'. */
window.keyCovers = function(key, course){
  key = String(key || '').trim().toUpperCase();
  course = String(course || '').toLowerCase();
  if (key.length < 8 || !course) return false;
  if (/^ALL-/.test(key)) return true;                       // мастер-ключ
  var m = key.match(/^(EN|ES)(A1|A2|B1|B2|C1|C2|ALL)-/);
  if (!m) return false;
  if (m[1].toLowerCase() !== course.slice(0, 2)) return false;
  return m[2] === 'ALL' || m[2].toLowerCase() === course.slice(3);
};

/* Is the CURRENT course unlocked? Engine pages define window.LEVEL.course;
   an explicit argument wins (used by buy.html). */
window.licenseOk = function(course){
  course = course || (window.LEVEL && LEVEL.course) || '';
  if (!course) return false;
  var raw = '';
  try { raw = localStorage.getItem('langbook-license') || ''; } catch (e) { return false; }
  return raw.split(/[\s,;]+/).some(function(k){ return keyCovers(k, course); });
};

/* Send the learner to the buy page, pre-selecting the course they were reading. */
window.goBuy = function(){
  var page = (window.PAYWALL && PAYWALL.buyPage) || '../buy.html';
  var course = (window.LEVEL && LEVEL.course) || '';
  location.href = course ? page + '?course=' + encodeURIComponent(course) : page;
};
