
$(document).ready(function () {

   // $('#btn1').click(function (e) {
   // e.preventDefault();
   // alert('Btn 1 Pressed!');
   // });
   
   // $('#btn1').on('click', function () {
   //    $('.par1').hide();
   // });
   // $('#btn2').on('click', function () {
   //    $('.par1').show();
   // });

   // $('#btn1').on('click', function () {
   //    $('.par1').toggle();
   // });

   // $('#btn2').dblclick(function () {
   //    $('.par1').toggle();
   // });

   // $('.par1').hide();

   // $('#btn1').hover(function () {
   //    $('.par1').toggle();
   // });

   // $('#btn1').on('mouseleave', function () {
   //    $('.par1').toggle();
   // });
   // $('#btn1').on('mouseenter', function () {
   //    $('.par1').toggle();
   // });

   // $('#btn2').on('mousemove', function () {
   //    $('.par1').toggle();
   // });

   // $('#btn1').on('mousedown', function () {
   //    $('.par1').toggle();
   // });
   // $('#btn1').on('mouseup', function () {
   //    $('.par1').toggle();
   // });

   // $('#btn1').click(function (e) { 
   //    e.preventDefault();
   //    console.log(e.currentTarget.id);
   //    console.log(e.currentTarget.innerHTML);
   //    console.log(e.currentTarget.outerHTML);
   //    console.log(e.currentTarget.className);
   // });
   
   // $('#btn1').on('mousemove', function (e) {
   //    // console.log('Coords X: ' + e.clientX + 'Y: ' + e.clientY);
   //    $('#coords').html('Coords X: ' + e.clientX + ' Y: ' + e.clientY);
   // });
   
   $('input').focus(function (e) { 
      e.preventDefault();
      // $('input#name').css('background', 'pink');
      $(this).css('background', 'pink');
   });
   $('input').blur(function (e) { 
      e.preventDefault();
      $(this).css('background', 'white');
   });
   $('input').keyup(function (e) { 
      console.log(e.target.value)
   });

   $('select#gender').change(function (e) { 
      e.preventDefault();
      alert('Changed!');
   });

   $('#form').submit(function (e) { 
      e.preventDefault();
      let name = $('input#name').val();
      console.log(name);
   });
});

