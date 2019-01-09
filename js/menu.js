var keys = [32,33,34,35,36,37,38,39,40];

var lastScrollTop = 0;
$(document).ready(function(event){
  var st = window.scrollY;
  if(page == "contact" && screen.width > 719 && st<=60) {
    $(".logo").css('background-image', 'url(./images/logow.svg)');
  } else {
    $(".logo").css('background-image', 'url(./images/logo.svg)');
  }

  if (page == "contact" && st > 60 && screen.width > 719) {
    $( ".logo" ).addClass("logo--letter");
    $(".logo").css('background-image', 'url(./images/logo-cw.svg)');
  } else if(st > 60) {
    $( ".logo" ).addClass("logo--letter");
    $(".logo").css('background-image', 'url(./images/logo-c.svg)');
  }
});
$(window).scroll(function(event){
  var st = $(this).scrollTop();
  if (st < 100) {
    if( st < 60 ){
      $( ".logo" ).removeClass("logo--letter");
      if(page == "contact" && screen.width > 719) {
        $(".logo").css('background-image', 'url(./images/logow.svg)');
      } else {
        $( ".logo" ).css("background-image", "url('images/logo.svg')");

      }
      $('.logo').css({ transform: 'rotate(0rad)' });
    } else {
      $( ".logo" ).addClass("logo--letter");
      if(page == "contact" && screen.width > 719) {
        $(".logo").css('background-image', 'url(./images/logo-cw.svg)');
      } else {
        $( ".logo" ).css("background-image", "url('images/logo-c.svg')");
      }
    }
    return; }
  if (st > lastScrollTop){
    // downscroll code
    var theta = (st - 100) / 60 % 360;
    $('.logo').css({ transform: 'rotate(' + theta + 'rad)' });
  } else {
    // upscroll code
    if( st < 100 ){
      $( ".logo" ).removeClass("logo--letter");
      if(page == "contact" && screen.width > 719) {
        $(".logo").css('background-image', 'url(./images/logow.svg)');
      } else{
        $( ".logo" ).css("background-image", "url('images/logo.svg')");
      }
      $('.logo').css({ transform: 'rotate(0rad)' });
    } else {
      $( ".logo" ).addClass("logo--letter");
      if(page == "contact" && screen.width > 719) {
        $(".logo").css('background-image', 'url(./images/logo-cw.svg)');
      } else {
        $( ".logo" ).css("background-image", "url('images/logo-c.svg')");
      }
      var theta = (st - 100) / 60 % 360;
      $('.logo').css({ transform: 'rotate(' + theta + 'rad)' });
    }
  }
  lastScrollTop = st;
});
$("#ham").click(function() {
  if( $("#mobilemenu").hasClass("mobile_home--closed")){
    $("#mobilemenu").removeClass("mobile_home--closed").addClass("mobile_home--opened");
    $( ".logo" ).addClass("logo--letter");
    $( ".logo" ).css("background-image", "url('images/logo-c.svg')");
    disable_scroll();
  }
});
$("#ex").click(function() {
  var st = window.scrollY;
  if( $("#mobilemenu").hasClass("mobile_home--opened")){
    $("#mobilemenu").removeClass("mobile_home--opened").addClass("mobile_home--closed");
    if(page == "contact" && screen.width > 719) {
      if(st > 60) {
        $(".logo").css('background-image', 'url(./images/logo-cw.svg)');
      } else {
        $(".logo").css('background-image', 'url(./images/logow.svg)');
        $( ".logo" ).removeClass("logo--letter");
      }
    } else {
      if(st > 60) {
        $( ".logo" ).css("background-image", "url('images/logo-c.svg')");
      } else {
        $( ".logo" ).css("background-image", "url('images/logo.svg')");
        $( ".logo" ).removeClass("logo--letter");
      }
    }
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
  var menu = document.getElementById("mobilemenu");
  window.addEventListener('touchmove', move , {passive: false});
  menu.removeEventListener('touchmove', move, {passive: false});
}
function enable_scroll_mobile(){
  window.removeEventListener('touchmove', move, {passive: false});
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
