// $(window).scroll(function() {
//     var theta = $(window).scrollTop() / 60 % Math.PI;
//     $('#logo').css({ transform: 'rotate(' + theta + 'rad)' });
// });

var keys = [32,33,34,35,36,37,38,39,40];

var lastScrollTop = 0;
$(document).ready(function(event){
  var url = window.location.pathname.split("/", 3);
  if(url[2] == "contact") {
    $(".logo").css('background-image', 'url(./images/logow.svg)');
  }
});
$(window).scroll(function(event){
  var st = $(this).scrollTop();
  var url = window.location.pathname.split("/", 3);
  if (st < 100) {
    // $( ".header" ).removeClass('header--closed').addClass('header--opened');
    if( st < 60 ){
      $( ".logo" ).removeClass("logo--letter");
      if(url[2] == "contact") {
        $(".logo").css('background-image', 'url(./images/logow.svg)');
      } else {
        $( ".logo" ).css("background-image", "url('images/logo.svg')");
      }
      $('.logo').css({ transform: 'rotate(0rad)' });
    } else {
      $( ".logo" ).addClass("logo--letter");
      if(url[2] == "contact") {
        $(".logo").css('background-image', 'url(./images/logo-cw.svg)');
      } else {
        $( ".logo" ).css("background-image", "url('images/logo-c.svg')");
      }
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
      if(url[2] == "contact") {
        $(".logo").css('background-image', 'url(./images/logow.svg)');
      } else{
        $( ".logo" ).css("background-image", "url('images/logo.svg')");
      }
      $('.logo').css({ transform: 'rotate(0rad)' });
    } else {
      $( ".logo" ).addClass("logo--letter");
      if(url[2] == "contact") {
        $(".logo").css('background-image', 'url(./images/logo-cw.svg)');
      } else {
        $( ".logo" ).css("background-image", "url('images/logo-c.svg')");
      }
      var theta = st / 60 % Math.PI;
      $('.logo').css({ transform: 'rotate(' + theta + 'rad)' });
    }
  }
  lastScrollTop = st;
});
$("#ham").click(function() {
  if( $("#mobilemenu").hasClass("mobile_home--closed")){
    $(".header").css("background-color", "#FFFFFF");
    $("#mobilemenu").removeClass("mobile_home--closed").addClass("mobile_home--opened");
    disable_scroll();
  }
  // else {
  //   $(".header").css("background-color", "transparent");
  //   $("#mobilemenu").removeClass("mobile_home--opened").addClass("mobile_home--closed");
  //   enable_scroll();
  // }
});
$("#ex").click(function() {
  if( $("#mobilemenu").hasClass("mobile_home--opened")){
    $(".header").css("background-color", "transparent");
    $("#mobilemenu").removeClass("mobile_home--opened").addClass("mobile_home--closed");
    enable_scroll();
  }
});
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}
function move(e) {
  preventDefault(e);
}
function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
  disable_scroll_mobile();
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
  	enable_scroll_mobile();

    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}

function disable_scroll_mobile(){
  window.addEventListener('touchmove', move , {passive: false});
}
function enable_scroll_mobile(){
  window.removeEventListener('touchmove', move, {passive: false});
}
