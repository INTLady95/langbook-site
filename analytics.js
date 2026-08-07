/* Счётчик посещений — GoatCounter (аккаунт intlady).
   Без cookies и без персональных данных → баннер согласия не нужен,
   витрина остаётся чистой. Считает только адрес страницы, источник перехода,
   страну, размер экрана. Локальную разработку (localhost, file://) count.js
   не считает сам — цифры не пачкаются во время работы.

   Один файл на все страницы: правится здесь — меняется везде.
   Чтобы отключить счётчик, достаточно закомментировать тело функции ниже. */
(function () {
  if (!/^https?:$/.test(location.protocol)) return;     // file:// — не считаем
  var h = location.hostname;
  if (h === 'localhost' || h === '127.0.0.1' || h === '' || /^192\.168\./.test(h)) return;

  window.goatcounter = { endpoint: 'https://intlady.goatcounter.com/count' };

  var s = document.createElement('script');
  s.async = true;
  s.src = '//gc.zgo.at/count.js';
  document.head.appendChild(s);
})();
