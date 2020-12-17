const mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  autoHeight: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".control-main-slider__arrow--next",
    prevEl: ".control-main-slider__arrow--prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // },
  breakpoints: {
    320: {},
    768: {},
  },
});
