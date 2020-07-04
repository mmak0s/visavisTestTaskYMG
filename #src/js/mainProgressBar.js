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
         }