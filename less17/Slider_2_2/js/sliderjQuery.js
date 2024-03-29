$(document).ready(function () {
   
   $('.next').on('click', function () {
      // console.log('click');
      let currentImg = $('.activ');
      let nextImg = currentImg.next();

      console.log(nextImg);
      if (nextImg.length) {
         currentImg.removeClass('activ').css('z-index', -10);
         nextImg.addClass('activ').css('z-index', 10);
      } else {
         nextImg = currentImg.prevAll();
         currentImg.removeClass('activ').css('z-index', -10);
         nextImg.addClass('activ').css('z-index', 10);
      }
   });

   $('.prev').on('click', function () {
      // console.log('click');
      let currentImg = $('.activ');
      let prevImg = currentImg.prev();

      console.log(prevImg);
      if (prevImg.length) {
         currentImg.removeClass('activ').css('z-index', -10);
         prevImg.addClass('activ').css('z-index', 10);
      } else {
         prevImg = currentImg.nextAll();
         console.log(prevImg);
         currentImg.removeClass('activ').css('z-index', -10);
         prevImg.addClass('activ').css('z-index', 10);
      }
   });

});