// console.log('Hello!');

// $(document).ready(() => {
//   console.log('HesSchool Hello!');
// });
console.log('test');

// swiper初始化設定
const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  //pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
