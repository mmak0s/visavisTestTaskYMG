var mySwiper = new Swiper('.mainSlider__slider', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.mainSlider__slider-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.mainSlider__slider-button-next',
      prevEl: '.mainSlider__slider-button-prev',
    }
})