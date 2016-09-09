webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	
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
	  function setTransform(left,right) {
	    return {
	      'transform': 'translate('+ left +', ' + right + ')',
	      '-webkit-transform': 'translate('+ left +', ' + right + ')',
	      'transform': 'translate3d('+ left +', ' + right + ', 0)',
	      '-webkit-transform': 'translate3d('+ left +', ' + right + ', 0)'
	    }
	  }
	  function setCss($$, scroll ,mode) {
	    var opts = {
	      'start': $$.offset().top,
	      'stop': $$.offset().top + $$.height(),
	    };
	    //console.log(opts);
	    if(( opts.start <= scroll.bottom) && (opts.stop >= scroll.top)) {
	      if(mode == 'back') {
	        newCoord = (scroll.top-opts.stop) * 0.15;
	        $$.css({
	          'background-position': '50% '+ newCoord + 'px'
	        });
	      }
	      else if(mode == 'margin') {
	        newCoord = (scroll.bottom-opts.stop) * -0.1;
	        $$.css(setTransform(0, newCoord+'px')); 
	      }
	      else if(mode == 'light') {
	        newCoord = (scroll.bottom-opts.stop)*0.1;
	        $$.css(setTransform(newCoord+'px',0)); 
	      }
	      else if(mode == 'photo') {
	        newCoord = (scroll.bottom-opts.stop)*-0.02;
	        $$.css(setTransform(newCoord+'px',0)); 
	      }
	      else if(mode == 'printer') {
	        newCoord = (scroll.bottom-opts.stop)*-0.1;
	        $$.css(setTransform(newCoord+'px',0)); 
	      }
	    }
	  }
	  var lastScrollTop = 0;
	
	  $(window).bind('scroll', function() {
	    var scroll = { 
	      top : $(window).scrollTop(),
	      height : $(window).height(),
	      bottom: $(window).scrollTop() + $(window).height()
	
	    }
	
	    // if (scroll.top > lastScrollTop){
	    //   scroll.dir = 'down';
	    //   $('#mp-menu:not(.narrow)').addClass('narrow');
	    //   $('.scroller:not(.nav-narrow)').addClass('nav-narrow');
	    // } else {
	    //   scroll.dir = 'up';
	    //   $('#mp-menu.narrow').removeClass('narrow');
	    //   $('.scroller.nav-narrow').removeClass('nav-narrow');
	    // }
	    // lastScrollTop = scroll.top;
	
	    $('.parallax').each(function(){
	      setCss($(this),scroll, 'back');
	    });
	    $('.belt').each(function(){
	      setCss($(this),scroll, 'margin');
	    });
	    $('#light').each(function(){
	      setCss($(this),scroll, 'light');
	    });
	    $('#photo').each(function(){
	      setCss($(this),scroll, 'photo');
	    });
	    $('#printer').each(function(){
	      setCss($(this),scroll, 'printer');
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
	
	function video(){
	  $('.hero-play').click(function(e){
	    $('.hero-video').addClass('start');
	    $('.video-close').addClass('start');
	    $('.hero-video').get(0).play();
	  });
	  $('.video-close').click(function(e){
	    $('.hero-video').removeClass('start');
	    $('.video-close').removeClass('start');
	    $('.hero-video').get(0).pause();
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
	
	    $('#trigger').click(function(e){
	      $(this).toggleClass('is-active');
	      $('#mp-menu ul').toggleClass('open');
	    });
	    slides();
	    video();
	    if(!Modernizr.touch){
	      parallax();
	    }
	    $( ".datepicker" ).datepicker();
	});
	


/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNELHFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUErQixnQkFBZ0I7QUFDL0MsdUNBQXNDLGVBQWU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKGZ1bmN0aW9uKCQpe1xuICAkLmZuLnBhcmFsbGF4ID0gZnVuY3Rpb24ob3B0aW9ucyl7XG4gICBcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgdmFyICQkID0gJCh0aGlzKTtcblxuICAgIG9mZnNldCA9ICQkLm9mZnNldCgpO1xuICAgIGNvbnNvbGUubG9nKG9mZnNldCk7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgJ3N0YXJ0Jzogb2Zmc2V0LnRvcCxcbiAgICAgICdzdG9wJzogb2Zmc2V0LnRvcCArICQkLmhlaWdodCgpLFxuICAgICAgJ2NvZWZmJzogMC45NVxuICAgIH07XG4gICAgdmFyIG9wdHMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAkKCcnKS5iaW5kKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93VG9wID0gJCgnLnNjcm9sbGVyJykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHdpbmRvd0JvdHRvbSA9IHdpbmRvd1RvcCArICQoJy5zY3JvbGxlcicpLmhlaWdodCgpO1xuXG4gICAgICAgIGlmKCh3aW5kb3dCb3R0b20gPj0gb3B0cy5zdGFydCkgJiYgKHdpbmRvd1RvcCA8PSBvcHRzLnN0b3ApKSB7XG4gICAgICAgICAgbmV3Q29vcmQgPSB3aW5kb3dUb3AgKiBvcHRzLmNvZWZmO1xuICAgICAgICAgICQkLmNzcyh7XG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJzAgJysgbmV3Q29vcmQgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSkoalF1ZXJ5KTtcbmZ1bmN0aW9uIHBhcmFsbGF4KCl7IFxuICBmdW5jdGlvbiBzZXRUcmFuc2Zvcm0obGVmdCxyaWdodCkge1xuICAgIHJldHVybiB7XG4gICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZSgnKyBsZWZ0ICsnLCAnICsgcmlnaHQgKyAnKScsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNsYXRlKCcrIGxlZnQgKycsICcgKyByaWdodCArICcpJyxcbiAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoJysgbGVmdCArJywgJyArIHJpZ2h0ICsgJywgMCknLFxuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3RyYW5zbGF0ZTNkKCcrIGxlZnQgKycsICcgKyByaWdodCArICcsIDApJ1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzZXRDc3MoJCQsIHNjcm9sbCAsbW9kZSkge1xuICAgIHZhciBvcHRzID0ge1xuICAgICAgJ3N0YXJ0JzogJCQub2Zmc2V0KCkudG9wLFxuICAgICAgJ3N0b3AnOiAkJC5vZmZzZXQoKS50b3AgKyAkJC5oZWlnaHQoKSxcbiAgICB9O1xuICAgIC8vY29uc29sZS5sb2cob3B0cyk7XG4gICAgaWYoKCBvcHRzLnN0YXJ0IDw9IHNjcm9sbC5ib3R0b20pICYmIChvcHRzLnN0b3AgPj0gc2Nyb2xsLnRvcCkpIHtcbiAgICAgIGlmKG1vZGUgPT0gJ2JhY2snKSB7XG4gICAgICAgIG5ld0Nvb3JkID0gKHNjcm9sbC50b3Atb3B0cy5zdG9wKSAqIDAuMTU7XG4gICAgICAgICQkLmNzcyh7XG4gICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnNTAlICcrIG5ld0Nvb3JkICsgJ3B4J1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYobW9kZSA9PSAnbWFyZ2luJykge1xuICAgICAgICBuZXdDb29yZCA9IChzY3JvbGwuYm90dG9tLW9wdHMuc3RvcCkgKiAtMC4xO1xuICAgICAgICAkJC5jc3Moc2V0VHJhbnNmb3JtKDAsIG5ld0Nvb3JkKydweCcpKTsgXG4gICAgICB9XG4gICAgICBlbHNlIGlmKG1vZGUgPT0gJ2xpZ2h0Jykge1xuICAgICAgICBuZXdDb29yZCA9IChzY3JvbGwuYm90dG9tLW9wdHMuc3RvcCkqMC4xO1xuICAgICAgICAkJC5jc3Moc2V0VHJhbnNmb3JtKG5ld0Nvb3JkKydweCcsMCkpOyBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYobW9kZSA9PSAncGhvdG8nKSB7XG4gICAgICAgIG5ld0Nvb3JkID0gKHNjcm9sbC5ib3R0b20tb3B0cy5zdG9wKSotMC4wMjtcbiAgICAgICAgJCQuY3NzKHNldFRyYW5zZm9ybShuZXdDb29yZCsncHgnLDApKTsgXG4gICAgICB9XG4gICAgICBlbHNlIGlmKG1vZGUgPT0gJ3ByaW50ZXInKSB7XG4gICAgICAgIG5ld0Nvb3JkID0gKHNjcm9sbC5ib3R0b20tb3B0cy5zdG9wKSotMC4xO1xuICAgICAgICAkJC5jc3Moc2V0VHJhbnNmb3JtKG5ld0Nvb3JkKydweCcsMCkpOyBcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIGxhc3RTY3JvbGxUb3AgPSAwO1xuXG4gICQod2luZG93KS5iaW5kKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Nyb2xsID0geyBcbiAgICAgIHRvcCA6ICQod2luZG93KS5zY3JvbGxUb3AoKSxcbiAgICAgIGhlaWdodCA6ICQod2luZG93KS5oZWlnaHQoKSxcbiAgICAgIGJvdHRvbTogJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpXG5cbiAgICB9XG5cbiAgICAvLyBpZiAoc2Nyb2xsLnRvcCA+IGxhc3RTY3JvbGxUb3Ape1xuICAgIC8vICAgc2Nyb2xsLmRpciA9ICdkb3duJztcbiAgICAvLyAgICQoJyNtcC1tZW51Om5vdCgubmFycm93KScpLmFkZENsYXNzKCduYXJyb3cnKTtcbiAgICAvLyAgICQoJy5zY3JvbGxlcjpub3QoLm5hdi1uYXJyb3cpJykuYWRkQ2xhc3MoJ25hdi1uYXJyb3cnKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgc2Nyb2xsLmRpciA9ICd1cCc7XG4gICAgLy8gICAkKCcjbXAtbWVudS5uYXJyb3cnKS5yZW1vdmVDbGFzcygnbmFycm93Jyk7XG4gICAgLy8gICAkKCcuc2Nyb2xsZXIubmF2LW5hcnJvdycpLnJlbW92ZUNsYXNzKCduYXYtbmFycm93Jyk7XG4gICAgLy8gfVxuICAgIC8vIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGwudG9wO1xuXG4gICAgJCgnLnBhcmFsbGF4JykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgc2V0Q3NzKCQodGhpcyksc2Nyb2xsLCAnYmFjaycpO1xuICAgIH0pO1xuICAgICQoJy5iZWx0JykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgc2V0Q3NzKCQodGhpcyksc2Nyb2xsLCAnbWFyZ2luJyk7XG4gICAgfSk7XG4gICAgJCgnI2xpZ2h0JykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgc2V0Q3NzKCQodGhpcyksc2Nyb2xsLCAnbGlnaHQnKTtcbiAgICB9KTtcbiAgICAkKCcjcGhvdG8nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBzZXRDc3MoJCh0aGlzKSxzY3JvbGwsICdwaG90bycpO1xuICAgIH0pO1xuICAgICQoJyNwcmludGVyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgc2V0Q3NzKCQodGhpcyksc2Nyb2xsLCAncHJpbnRlcicpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2xpZGVzKCl7XG4gIHZhciBsZW4gPSAkKCcuc2xpZGUnKS5sZW5ndGg7XG4gIHZhciBsb2NrID0gMDtcbiAgZnVuY3Rpb24gc2V0SW5kZXgoY3VycmVudCwgbmV4dCkge1xuICAgICQoJy5pbmRleCBzcGFuJykuZXEoY3VycmVudCkucmVtb3ZlQ2xhc3MoJ2ljb24taWNvbnNfbmF2aWdhdGlvbl9jaXJjbGVfY2xvc2VkJykuYWRkQ2xhc3MoJ2ljb24taWNvbnNfbmF2aWdhdGlvbl9jaXJjbGVfb3BlbicpO1xuICAgICQoJy5pbmRleCBzcGFuJykuZXEobmV4dCkucmVtb3ZlQ2xhc3MoJ2ljb24taWNvbnNfbmF2aWdhdGlvbl9jaXJjbGVfb3BlbicpLmFkZENsYXNzKCdpY29uLWljb25zX25hdmlnYXRpb25fY2lyY2xlX2Nsb3NlZCcpXG4gIH1cbiAgZnVuY3Rpb24gc2xpZGVMZWZ0KCkge1xuICAgIGxvY2sgPSAxO1xuICAgIHZhciBjdXJyZW50ID0gJCgnLnNsaWRlLmFjdGl2ZScpLmluZGV4KCkgLSAxO1xuICAgIHZhciBuZXh0ID0gY3VycmVudCA9PSAwID8gbGVuIC0gMSA6IGN1cnJlbnQgLSAxO1xuICAgICQoJy5zbGlkZS5hY3RpdmUnKS5hZGRDbGFzcygncmlnaHQtb3V0Jyk7XG4gICAgJCgnLnNsaWRlJykuZXEobmV4dCkuYWRkQ2xhc3MoJ2FjdGl2ZSBsZWZ0LWluJyk7XG4gICAgc2V0SW5kZXgoY3VycmVudCwgbmV4dCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgbG9jayA9IDA7XG4gICAgICAkKCcuc2xpZGUucmlnaHQtb3V0JykucmVtb3ZlQ2xhc3MoJ3JpZ2h0LW91dCBhY3RpdmUnKTtcbiAgICAgICQoJy5zbGlkZS5sZWZ0LWluJykucmVtb3ZlQ2xhc3MoJ2xlZnQtaW4nKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICBmdW5jdGlvbiBzbGlkZVJpZ2h0KCkge1xuICAgIGxvY2sgPSAxO1xuICAgIHZhciBjdXJyZW50ID0gJCgnLnNsaWRlLmFjdGl2ZScpLmluZGV4KCkgLSAxO1xuICAgIHZhciBuZXh0ID0gY3VycmVudCA9PSBsZW4gLSAxID8gMCA6IGN1cnJlbnQgKyAxO1xuICAgICQoJy5zbGlkZS5hY3RpdmUnKS5hZGRDbGFzcygnbGVmdC1vdXQnKTtcbiAgICAkKCcuc2xpZGUnKS5lcShuZXh0KS5hZGRDbGFzcygnYWN0aXZlIHJpZ2h0LWluJyk7XG4gICAgc2V0SW5kZXgoY3VycmVudCwgbmV4dCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgbG9jayA9IDA7XG4gICAgICAkKCcuc2xpZGUubGVmdC1vdXQnKS5yZW1vdmVDbGFzcygnbGVmdC1vdXQgYWN0aXZlJyk7XG4gICAgICAkKCcuc2xpZGUucmlnaHQtaW4nKS5yZW1vdmVDbGFzcygncmlnaHQtaW4nKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICAvLyB2YXIgc2xpZGVMb29wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gIC8vICAgc2xpZGVSaWdodCgpO1xuICAvLyB9LCA1MDAwKTtcbiAgJCgnLmFycm93LmFycm93LWxlZnQnKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAvL2NsZWFySW50ZXJ2YWwoc2xpZGVMb29wKTtcbiAgICBpZighbG9jayl7XG4gICAgICBzbGlkZUxlZnQoKTtcbiAgICB9XG4gIH0pO1xuICAkKCcuYXJyb3cuYXJyb3ctcmlnaHQnKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICBpZighbG9jayl7XG4gICAgICAvL2NsZWFySW50ZXJ2YWwoc2xpZGVMb29wKTtcbiAgICAgIHNsaWRlUmlnaHQoKTtcbiAgICB9XG4gIH0pO1xuICAkKCBcIiNvdXItYm9vdGgtc2xpZGVcIiApLm9uKCBcInN3aXBlbGVmdFwiLCBmdW5jdGlvbihlKXtcbiAgICBpZighbG9jayl7XG4gICAgICAvL2NsZWFySW50ZXJ2YWwoc2xpZGVMb29wKTtcbiAgICAgIHNsaWRlUmlnaHQoKTtcbiAgICB9XG4gIH0pO1xuICAkKCBcIiNvdXItYm9vdGgtc2xpZGVcIiApLm9uKCBcInN3aXBlcmlnaHRcIiwgZnVuY3Rpb24oZSl7XG4gICAgLy9jbGVhckludGVydmFsKHNsaWRlTG9vcCk7XG4gICAgaWYoIWxvY2spe1xuICAgICAgc2xpZGVMZWZ0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdmlkZW8oKXtcbiAgJCgnLmhlcm8tcGxheScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICQoJy5oZXJvLXZpZGVvJykuYWRkQ2xhc3MoJ3N0YXJ0Jyk7XG4gICAgJCgnLnZpZGVvLWNsb3NlJykuYWRkQ2xhc3MoJ3N0YXJ0Jyk7XG4gICAgJCgnLmhlcm8tdmlkZW8nKS5nZXQoMCkucGxheSgpO1xuICB9KTtcbiAgJCgnLnZpZGVvLWNsb3NlJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgJCgnLmhlcm8tdmlkZW8nKS5yZW1vdmVDbGFzcygnc3RhcnQnKTtcbiAgICAkKCcudmlkZW8tY2xvc2UnKS5yZW1vdmVDbGFzcygnc3RhcnQnKTtcbiAgICAkKCcuaGVyby12aWRlbycpLmdldCgwKS5wYXVzZSgpO1xuICB9KTtcbn1cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vJCgnLnBhcmFsbGF4JykucGFyYWxsYXgoeyAnY29lZmYnOi0wLjE1IH0pO1xuICAgIC8vJCgnLnBhcmFsbGF4IC5pbm5lcicpLnBhcmFsbGF4KHsgJ2NvZWZmJzoxLjA1IH0pO1xuICAgICQoJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyddJyk7XG4gICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSAkKCcjbXAtbWVudScpLmhlaWdodCgpXG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgJCgnLmRyb3Bkb3duJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgfSk7XG5cbiAgICAkKCcjdHJpZ2dlcicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAkKCcjbXAtbWVudSB1bCcpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgfSk7XG4gICAgc2xpZGVzKCk7XG4gICAgdmlkZW8oKTtcbiAgICBpZighTW9kZXJuaXpyLnRvdWNoKXtcbiAgICAgIHBhcmFsbGF4KCk7XG4gICAgfVxuICAgICQoIFwiLmRhdGVwaWNrZXJcIiApLmRhdGVwaWNrZXIoKTtcbn0pO1xuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcHVibGljL3NyYy9qcy9tYWluLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==