
(function($){
  $.fn.parallax = function(options){
   
    return this.each(function(){
       var $$ = $(this);

    offset = $$.offset();
    console.log(offset);
    var defaults = {
      'start': offset.top,
      'stop': offset.top + $$.height(),
      'coeff': 0.95
    };
    var opts = $.extend(defaults, options);
      $('').bind('scroll', function() {
        windowTop = $('.scroller').scrollTop();
        windowBottom = windowTop + $('.scroller').height();

        if((windowBottom >= opts.start) && (windowTop <= opts.stop)) {
          newCoord = windowTop * opts.coeff;
          $$.css({
              'background-position': '0 '+ newCoord + 'px'
          });
        }
      });
    });
  };
})(jQuery);
function parallax(){ 
  function setCss($$, scroll ,mode) {
    var opts = {
      'start': $$.offset().top,
      'stop': $$.offset().top + $$.height(),
    };
    //console.log(opts);
    if(( opts.start <= scroll.bottom) && (opts.stop >= scroll.top)) {
      if(mode == 'back') {
        newCoord = (scroll.top-opts.stop) * 0.25;
        $$.css({
          'background-position': '50% '+ newCoord + 'px'
        });
      }
      else if(mode == 'margin') {
        newCoord = (scroll.bottom-opts.stop) * -0.1;
        $$.css({
            'transform': 'translate(0, ' + newCoord + 'px'
        }); 
      }
    }
  }
  $(window).bind('scroll', function() {
    var scroll = { 
      top : $(window).scrollTop(),
      height : $(window).height(),
      bottom: $(window).scrollTop() + $(window).height()

    }
    $('.parallax').each(function(){
      setCss($(this),scroll, 'back');
    });
    $('.belt').each(function(){
      setCss($(this),scroll, 'margin');
    });
  });
}

function slides(){
  var len = $('.slide').length;
  var lock = 0;
  function setIndex(current, next) {
    $('.index span').eq(current).removeClass('icon-icons_navigation_circle_closed').addClass('icon-icons_navigation_circle_open');
    $('.index span').eq(next).removeClass('icon-icons_navigation_circle_open').addClass('icon-icons_navigation_circle_closed')
  }
  function slideLeft() {
    lock = 1;
    var current = $('.slide.active').index() - 1;
    var next = current == 0 ? len - 1 : current - 1;
    $('.slide.active').addClass('right-out');
    $('.slide').eq(next).addClass('active left-in');
    setIndex(current, next);
    setTimeout(function(){
      lock = 0;
      $('.slide.right-out').removeClass('right-out active');
      $('.slide.left-in').removeClass('left-in');
    }, 1000);
  }
  function slideRight() {
    lock = 1;
    var current = $('.slide.active').index() - 1;
    var next = current == len - 1 ? 0 : current + 1;
    $('.slide.active').addClass('left-out');
    $('.slide').eq(next).addClass('active right-in');
    setIndex(current, next);
    setTimeout(function(){
      lock = 0;
      $('.slide.left-out').removeClass('left-out active');
      $('.slide.right-in').removeClass('right-in');
    }, 1000);
  }
  // var slideLoop = setInterval(function() {
  //   slideRight();
  // }, 5000);
  $('.arrow.arrow-left').click(function(e){
    //clearInterval(slideLoop);
    if(!lock){
      slideLeft();
    }
  });
  $('.arrow.arrow-right').click(function(e){
    if(!lock){
      //clearInterval(slideLoop);
      slideRight();
    }
  });
  $( "#our-booth-slide" ).on( "swipeleft", function(e){
    if(!lock){
      //clearInterval(slideLoop);
      slideRight();
    }
  });
  $( "#our-booth-slide" ).on( "swiperight", function(e){
    //clearInterval(slideLoop);
    if(!lock){
      slideLeft();
    }
  });
}
$(document).ready(function() {
    //$('.parallax').parallax({ 'coeff':-0.15 });
    //$('.parallax .inner').parallax({ 'coeff':1.05 });
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - $('#mp-menu').height()
          }, 1000);
          return false;
        }
      }
    });
    $('.dropdown').click(function(e){
      $(this).toggleClass('open');
    });
    $('.hero-play').click(function(e){
      $('.hero-video').addClass('start');
      $('.hero-video').get(0).play();
    });
    $('#trigger').click(function(e){
      $(this).toggleClass('is-active');
      $('#mp-menu ul').toggleClass('open');
    });
    slides();
    parallax();
    $( ".datepicker" ).datepicker();
});

