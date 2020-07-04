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
let isScrolling = false;
         window.addEventListener('scroll', throttleScroll, false);
         function throttleScroll(e){
             if (isScrolling == false) {
             window.requestAnimationFrame(function() {
               scrolling(e);
               isScrolling = false;
             });
           }
           isScrolling = true;
         }

         document.addEventListener("DOMContentLoaded", scrolling, false);
         let elsToAnimate = document.querySelectorAll(".toAnimate");
         
         function scrolling(e){
             for (let i = 0; i < elsToAnimate.length; i++) {
                 let listItem = elsToAnimate[i];
                 if(elsToAnimate !== null){
                   if (isPartiallyVisible(listItem)) {
                       listItem.classList.add("animate");
                   }
                 }
               }
         }

         function isPartiallyVisible(el) {
             let elementBoundary = el.getBoundingClientRect();
             let top = elementBoundary.top;
             let bottom = elementBoundary.bottom;
             let height = elementBoundary.height;
             return ((top + height >= 0) && (height + window.innerHeight >= bottom));
         }
          
         function isFullyVisible(el) {
             let elementBoundary = el.getBoundingClientRect();
             let top = elementBoundary.top;
             let bottom = elementBoundary.bottom;
          
             return ((top >= 0) && (bottom <= window.innerHeight));
         };

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
