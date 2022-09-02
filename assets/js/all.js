"use strict";

// console.log('Hello!');
// $(document).ready(() => {
//   console.log('HesSchool Hello!');
// });
console.log('test'); // swiper初始化設定

var swiper = new Swiper('.mySwiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  //pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var swiper2 = new Swiper(".programSwiper", {
  slidesPerView: 10,
  spaceBetween: 20,
  freeMode: true
});
//# sourceMappingURL=all.js.map
