
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
      $('.scroller').bind('scroll', function() {
        windowTop = $('.scroller').scrollTop();
                console.log(windowTop);
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
  $('.scroller').bind('scroll', function() {
    windowTop = $('.scroller').scrollTop();
    windowBottom = windowTop + $('.scroller').height();
    $('.parallax').each(function(){
      var $$ = $(this);
      offset = $$.position();
      var opts = {
        'start': offset.top,
        'stop': offset.top + $$.height(),
        'coeff': -0.25
      };
      if((windowBottom >= opts.start) && (windowTop <= opts.stop)) {
        newCoord = (opts.stop - windowTop) * opts.coeff;
        $$.css({
            'background-position': '0 '+ newCoord + 'px'
        });
      }
    });
  });
}

function slides(){
  var len = $('.slide').length;
  var lock = 0;
  function slideLeft() {
    lock = 1;
    var current = $('.slide.active').index() - 1;
    var next = current == 0 ? len - 1 : current - 1;
    $('.slide.active').addClass('right-out');
    $('.slide').eq(next).addClass('active left-in');
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
}
$(document).ready(function() {
    //$('.parallax').parallax({ 'coeff':-0.15 });
    //$('.parallax .inner').parallax({ 'coeff':1.05 });
    $('.dropdown').click(function(e){
      $(this).toggleClass('open');
    })
    slides();
    parallax();
    $( ".datepicker" ).datepicker();
});

