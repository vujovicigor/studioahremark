// $(window).scroll(function() {
//     var theta = $(window).scrollTop() / 60 % Math.PI;
//     $('#logo').css({ transform: 'rotate(' + theta + 'rad)' });
// });
var lastScrollTop = 0;
$(window).scroll(function(event){
  var st = $(this).scrollTop();
  if (st < 100) {
    // $( ".header" ).removeClass('header--closed').addClass('header--opened');
    if( st < 60 ){
      $( ".logo" ).removeClass("logo--letter");
      $( ".logo" ).css("background-image", "url('images/logo.svg')");
      $('.logo').css({ transform: 'rotate(0rad)' });
    } else {
      $( ".logo" ).addClass("logo--letter");
      $( ".logo" ).css("background-image", "url('images/logo-c.svg')");
    }
    return; }
  if (st > lastScrollTop){
    // downscroll code
    // $( ".header" ).removeClass('header--opened').addClass('header--closed');
    var theta = st / 60 % Math.PI;
    $('.logo').css({ transform: 'rotate(' + theta + 'rad)' });
  } else {
    // upscroll code
    // $( ".header" ).removeClass('header--closed').addClass('header--opened');
    if( st < 100 ){
      $( ".logo" ).removeClass("logo--letter");
      $( ".logo" ).css("background-image", "url('images/logo.svg')");
      $('.logo').css({ transform: 'rotate(0rad)' });
    } else {
      $( ".logo" ).addClass("logo--letter");
      $( ".logo" ).css("background-image", "url('images/logo-c.svg')");
      var theta = st / 60 % Math.PI;
      $('.logo').css({ transform: 'rotate(' + theta + 'rad)' });
    }
  }
  lastScrollTop = st;
});
