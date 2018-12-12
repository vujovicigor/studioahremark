// $(window).scroll(function() {
//     var theta = $(window).scrollTop() / 60 % Math.PI;
//     $('#logo').css({ transform: 'rotate(' + theta + 'rad)' });
// });
var lastScrollTop = 0;
$(window).scroll(function(event){
  var st = $(this).scrollTop();

  if (st < 160) {
    $( ".header" ).removeClass('header--closed').addClass('header--opened');
    if( st < 100 ){
      $( ".header" ).css("background-color", "transparent");
    } else {
      $( ".header" ).css("background-color", "#ffffff");
    }
    return; }
  if (st > lastScrollTop){
    // downscroll code
    $( ".header" ).removeClass('header--opened').addClass('header--closed');
  } else {
    // upscroll code
    $( ".header" ).removeClass('header--closed').addClass('header--opened');
    if( st < 100 ){
      $( ".header" ).css("background-color", "transparent");
    } else {
      $( ".header" ).css("background-color", "#ffffff");
    }
  }
  lastScrollTop = st;
});
