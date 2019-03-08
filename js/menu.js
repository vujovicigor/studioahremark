var keys = [32,33,34,35,36,37,38,39,40];

var lastScrollTop = 0;
$(document).ready(function(event){
  var st = window.scrollY;
  var wwidth = $(window).width();

  if(page === "contact" && wwidth > 719) {
    $(".logo").css('background-image', 'url(./images/logo-cw.svg)');
    $(".logo_rest").css('background-image', 'url(./images/redo-logo-w.svg)');
  } else {
    $(".logo").css('background-image', 'url(./images/logo-c.svg)');
    $(".logo_rest").css('background-image', 'url(./images/redo-logo.svg)');
  }

  if(st <= 60 && wwidth > 719){
    $(".logo_rest").removeClass("hidden");
    $(".logo_rest").addClass("shown");
  } else if(st <= 60 && wwidth < 719) {
    $(".logo_rest").removeClass("hidden");
    $(".logo_rest").addClass("shown_mobile");
  } else {
    $(".logo_rest").removeClass("shown");
    $(".logo_rest").addClass("hidden");
  }
});
$(window).scroll(function(event){
  var st = $(this).scrollTop();

    if( st < 60 ){
      $(".logo_rest").removeClass("hidden");
      $(".logo_rest").addClass("shown");
      $('.logo').css({ transform: 'rotate(0rad)' });
    } else {
      $(".logo_rest").removeClass("shown");
      $(".logo_rest").addClass("hidden");
      var theta = (st - 60) / 60 % 360;
      $('.logo').css({ transform: 'rotate(' + theta + 'rad)' });
      lastScrollTop = st;
    }

  if ( st > lastScrollTop && st > 60 ){
    // downscroll code
    var theta = (st - 60) / 60 % 360;
    $('.logo').css({ transform: 'rotate(' + theta + 'rad)' });
  } else {
    // upscroll code
    if( st < 60 ){
      $('.logo').css({ transform: 'rotate(0rad)' });
    } else {
      var theta = (st - 60) / 60 % 360;
      $('.logo').css({ transform: 'rotate(' + theta + 'rad)' });
    }
  }
  lastScrollTop = st;
});
$("#ham").click(function() {
  if( $("#mobilemenu").hasClass("mobile_home--closed")){
    $("#mobilemenu").removeClass("mobile_home--closed").addClass("mobile_home--opened");
    $(".logo_rest").removeClass("shown_mobile");
    $(".logo_rest").addClass("hidden");
    disable_scroll();
  }
});
$("#ex").click(function() {
  var st = window.scrollY;

  if( $("#mobilemenu").hasClass("mobile_home--opened")){
    $("#mobilemenu").removeClass("mobile_home--opened").addClass("mobile_home--closed");
    if(page == "contact" && screen.width > 719) {
      if(st < 60) {
        $(".logo_rest").removeClass("hidden");
        $(".logo_rest").addClass("shown_mobile");
      }
    } else {
      if(st < 60) {
        $(".logo_rest").removeClass("hidden");
        $(".logo_rest").addClass("shown_mobile");
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

function hideChallenge(){
  var challenge = document.getElementById("challenge");
  var approach = document.getElementById("approach");
  var challenge_text = document.getElementById("challenge_text");

  if (challenge_text.length < 0){
    challenge.style.display = none;
    approach.style.width = '100%';
  }

}
