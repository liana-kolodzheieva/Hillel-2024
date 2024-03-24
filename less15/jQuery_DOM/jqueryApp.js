$(document).ready(function () {
   // $('p.par1').css('color', '#ff0000');
   $('p.par1').css({ color: '#ff0000', background: '#00ff00'});
   // $('.par2').addClass('par-2-color-background');
   // $('.par2').removeClass('par-2-color-background');
   // $('#btn1').click(function (e) { 
   //    e.preventDefault();
   //    $('.par2').toggleClass('par-2-color-background');
   // });
   // $('.free-div').text('DoM jQuery add text');
   // $('.free-div').html('<h1>lorem ipsum dolor</h1>');
   // alert($('.free-div').text());
   
   // $('ul').append('<li>Append LI</li>');
   // $('ul').prepend('<li>Prepend LI</li>');

   // $('.par1').appendTo('.par2');
   // $('.par1').prependTo('.par2');
   // $('ul').before('<br> <hr> <h4>Before UL</h4> <hr> <br>');
   // $('ul').after('<br> <hr> <h4>After UL</h4> <hr> <br>');
   // $('ul').empty();
   // $('ul').detach();

   $('a').attr('target', '_blank');
   $('a').removeAttr('target');
   

   // $('p').wrap("<h1></h1>");
   $('p').wrapAll("<section></section>");

   $('#new-item').keyup(function (e) { 
      // console.log(e.which);
      let code = e.which;
      if (code == 13) {
         $('ul').append('<li>' + e.target.value + '</li>');
         e.target.value = '';
      }
   });
});