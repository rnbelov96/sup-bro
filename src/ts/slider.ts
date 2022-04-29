export {};

const thanksSlider = new Swiper('.thanks__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    650: {
      slidesPerView: 3,
    },
  },
});
