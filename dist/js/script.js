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
});
function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }else{
            document.querySelector('body').classList.add('no-webp');
        }
});
