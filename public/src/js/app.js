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
	        newCoord = (scroll.top-opts.stop + 500) * 0.1;
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
	    if(!Modernizr.touch){
	      parallax();
	    }
	    $( ".datepicker" ).datepicker();
	});
	


/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNELHFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBK0IsZ0JBQWdCO0FBQy9DLHVDQUFzQyxlQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4oZnVuY3Rpb24oJCl7XG4gICQuZm4ucGFyYWxsYXggPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgIFxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICB2YXIgJCQgPSAkKHRoaXMpO1xuXG4gICAgb2Zmc2V0ID0gJCQub2Zmc2V0KCk7XG4gICAgY29uc29sZS5sb2cob2Zmc2V0KTtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAnc3RhcnQnOiBvZmZzZXQudG9wLFxuICAgICAgJ3N0b3AnOiBvZmZzZXQudG9wICsgJCQuaGVpZ2h0KCksXG4gICAgICAnY29lZmYnOiAwLjk1XG4gICAgfTtcbiAgICB2YXIgb3B0cyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICQoJycpLmJpbmQoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3dUb3AgPSAkKCcuc2Nyb2xsZXInKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgd2luZG93Qm90dG9tID0gd2luZG93VG9wICsgJCgnLnNjcm9sbGVyJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYoKHdpbmRvd0JvdHRvbSA+PSBvcHRzLnN0YXJ0KSAmJiAod2luZG93VG9wIDw9IG9wdHMuc3RvcCkpIHtcbiAgICAgICAgICBuZXdDb29yZCA9IHdpbmRvd1RvcCAqIG9wdHMuY29lZmY7XG4gICAgICAgICAgJCQuY3NzKHtcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnMCAnKyBuZXdDb29yZCArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59KShqUXVlcnkpO1xuZnVuY3Rpb24gcGFyYWxsYXgoKXsgXG4gIGZ1bmN0aW9uIHNldFRyYW5zZm9ybShsZWZ0LHJpZ2h0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlKCcrIGxlZnQgKycsICcgKyByaWdodCArICcpJyxcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUoJysgbGVmdCArJywgJyArIHJpZ2h0ICsgJyknLFxuICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnKyBsZWZ0ICsnLCAnICsgcmlnaHQgKyAnLCAwKScsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoJysgbGVmdCArJywgJyArIHJpZ2h0ICsgJywgMCknXG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHNldENzcygkJCwgc2Nyb2xsICxtb2RlKSB7XG4gICAgdmFyIG9wdHMgPSB7XG4gICAgICAnc3RhcnQnOiAkJC5vZmZzZXQoKS50b3AsXG4gICAgICAnc3RvcCc6ICQkLm9mZnNldCgpLnRvcCArICQkLmhlaWdodCgpLFxuICAgIH07XG4gICAgLy9jb25zb2xlLmxvZyhvcHRzKTtcbiAgICBpZigoIG9wdHMuc3RhcnQgPD0gc2Nyb2xsLmJvdHRvbSkgJiYgKG9wdHMuc3RvcCA+PSBzY3JvbGwudG9wKSkge1xuICAgICAgaWYobW9kZSA9PSAnYmFjaycpIHtcbiAgICAgICAgbmV3Q29vcmQgPSAoc2Nyb2xsLnRvcC1vcHRzLnN0b3AgKyA1MDApICogMC4xO1xuICAgICAgICAkJC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJzUwJSAnKyBuZXdDb29yZCArICdweCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKG1vZGUgPT0gJ21hcmdpbicpIHtcbiAgICAgICAgbmV3Q29vcmQgPSAoc2Nyb2xsLmJvdHRvbS1vcHRzLnN0b3ApICogLTAuMTtcbiAgICAgICAgJCQuY3NzKHNldFRyYW5zZm9ybSgwLCBuZXdDb29yZCsncHgnKSk7IFxuICAgICAgfVxuICAgICAgZWxzZSBpZihtb2RlID09ICdsaWdodCcpIHtcbiAgICAgICAgbmV3Q29vcmQgPSAoc2Nyb2xsLmJvdHRvbS1vcHRzLnN0b3ApKjAuMTtcbiAgICAgICAgJCQuY3NzKHNldFRyYW5zZm9ybShuZXdDb29yZCsncHgnLDApKTsgXG4gICAgICB9XG4gICAgICBlbHNlIGlmKG1vZGUgPT0gJ3Bob3RvJykge1xuICAgICAgICBuZXdDb29yZCA9IChzY3JvbGwuYm90dG9tLW9wdHMuc3RvcCkqLTAuMDI7XG4gICAgICAgICQkLmNzcyhzZXRUcmFuc2Zvcm0obmV3Q29vcmQrJ3B4JywwKSk7IFxuICAgICAgfVxuICAgICAgZWxzZSBpZihtb2RlID09ICdwcmludGVyJykge1xuICAgICAgICBuZXdDb29yZCA9IChzY3JvbGwuYm90dG9tLW9wdHMuc3RvcCkqLTAuMTtcbiAgICAgICAgJCQuY3NzKHNldFRyYW5zZm9ybShuZXdDb29yZCsncHgnLDApKTsgXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBsYXN0U2Nyb2xsVG9wID0gMDtcblxuICAkKHdpbmRvdykuYmluZCgnc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjcm9sbCA9IHsgXG4gICAgICB0b3AgOiAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICBoZWlnaHQgOiAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgICBib3R0b206ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKVxuXG4gICAgfVxuXG4gICAgLy8gaWYgKHNjcm9sbC50b3AgPiBsYXN0U2Nyb2xsVG9wKXtcbiAgICAvLyAgIHNjcm9sbC5kaXIgPSAnZG93bic7XG4gICAgLy8gICAkKCcjbXAtbWVudTpub3QoLm5hcnJvdyknKS5hZGRDbGFzcygnbmFycm93Jyk7XG4gICAgLy8gICAkKCcuc2Nyb2xsZXI6bm90KC5uYXYtbmFycm93KScpLmFkZENsYXNzKCduYXYtbmFycm93Jyk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHNjcm9sbC5kaXIgPSAndXAnO1xuICAgIC8vICAgJCgnI21wLW1lbnUubmFycm93JykucmVtb3ZlQ2xhc3MoJ25hcnJvdycpO1xuICAgIC8vICAgJCgnLnNjcm9sbGVyLm5hdi1uYXJyb3cnKS5yZW1vdmVDbGFzcygnbmF2LW5hcnJvdycpO1xuICAgIC8vIH1cbiAgICAvLyBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsLnRvcDtcblxuICAgICQoJy5wYXJhbGxheCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHNldENzcygkKHRoaXMpLHNjcm9sbCwgJ2JhY2snKTtcbiAgICB9KTtcbiAgICAkKCcuYmVsdCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHNldENzcygkKHRoaXMpLHNjcm9sbCwgJ21hcmdpbicpO1xuICAgIH0pO1xuICAgICQoJyNsaWdodCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHNldENzcygkKHRoaXMpLHNjcm9sbCwgJ2xpZ2h0Jyk7XG4gICAgfSk7XG4gICAgJCgnI3Bob3RvJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgc2V0Q3NzKCQodGhpcyksc2Nyb2xsLCAncGhvdG8nKTtcbiAgICB9KTtcbiAgICAkKCcjcHJpbnRlcicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHNldENzcygkKHRoaXMpLHNjcm9sbCwgJ3ByaW50ZXInKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlcygpe1xuICB2YXIgbGVuID0gJCgnLnNsaWRlJykubGVuZ3RoO1xuICB2YXIgbG9jayA9IDA7XG4gIGZ1bmN0aW9uIHNldEluZGV4KGN1cnJlbnQsIG5leHQpIHtcbiAgICAkKCcuaW5kZXggc3BhbicpLmVxKGN1cnJlbnQpLnJlbW92ZUNsYXNzKCdpY29uLWljb25zX25hdmlnYXRpb25fY2lyY2xlX2Nsb3NlZCcpLmFkZENsYXNzKCdpY29uLWljb25zX25hdmlnYXRpb25fY2lyY2xlX29wZW4nKTtcbiAgICAkKCcuaW5kZXggc3BhbicpLmVxKG5leHQpLnJlbW92ZUNsYXNzKCdpY29uLWljb25zX25hdmlnYXRpb25fY2lyY2xlX29wZW4nKS5hZGRDbGFzcygnaWNvbi1pY29uc19uYXZpZ2F0aW9uX2NpcmNsZV9jbG9zZWQnKVxuICB9XG4gIGZ1bmN0aW9uIHNsaWRlTGVmdCgpIHtcbiAgICBsb2NrID0gMTtcbiAgICB2YXIgY3VycmVudCA9ICQoJy5zbGlkZS5hY3RpdmUnKS5pbmRleCgpIC0gMTtcbiAgICB2YXIgbmV4dCA9IGN1cnJlbnQgPT0gMCA/IGxlbiAtIDEgOiBjdXJyZW50IC0gMTtcbiAgICAkKCcuc2xpZGUuYWN0aXZlJykuYWRkQ2xhc3MoJ3JpZ2h0LW91dCcpO1xuICAgICQoJy5zbGlkZScpLmVxKG5leHQpLmFkZENsYXNzKCdhY3RpdmUgbGVmdC1pbicpO1xuICAgIHNldEluZGV4KGN1cnJlbnQsIG5leHQpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGxvY2sgPSAwO1xuICAgICAgJCgnLnNsaWRlLnJpZ2h0LW91dCcpLnJlbW92ZUNsYXNzKCdyaWdodC1vdXQgYWN0aXZlJyk7XG4gICAgICAkKCcuc2xpZGUubGVmdC1pbicpLnJlbW92ZUNsYXNzKCdsZWZ0LWluJyk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgZnVuY3Rpb24gc2xpZGVSaWdodCgpIHtcbiAgICBsb2NrID0gMTtcbiAgICB2YXIgY3VycmVudCA9ICQoJy5zbGlkZS5hY3RpdmUnKS5pbmRleCgpIC0gMTtcbiAgICB2YXIgbmV4dCA9IGN1cnJlbnQgPT0gbGVuIC0gMSA/IDAgOiBjdXJyZW50ICsgMTtcbiAgICAkKCcuc2xpZGUuYWN0aXZlJykuYWRkQ2xhc3MoJ2xlZnQtb3V0Jyk7XG4gICAgJCgnLnNsaWRlJykuZXEobmV4dCkuYWRkQ2xhc3MoJ2FjdGl2ZSByaWdodC1pbicpO1xuICAgIHNldEluZGV4KGN1cnJlbnQsIG5leHQpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGxvY2sgPSAwO1xuICAgICAgJCgnLnNsaWRlLmxlZnQtb3V0JykucmVtb3ZlQ2xhc3MoJ2xlZnQtb3V0IGFjdGl2ZScpO1xuICAgICAgJCgnLnNsaWRlLnJpZ2h0LWluJykucmVtb3ZlQ2xhc3MoJ3JpZ2h0LWluJyk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgLy8gdmFyIHNsaWRlTG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAvLyAgIHNsaWRlUmlnaHQoKTtcbiAgLy8gfSwgNTAwMCk7XG4gICQoJy5hcnJvdy5hcnJvdy1sZWZ0JykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgLy9jbGVhckludGVydmFsKHNsaWRlTG9vcCk7XG4gICAgaWYoIWxvY2spe1xuICAgICAgc2xpZGVMZWZ0KCk7XG4gICAgfVxuICB9KTtcbiAgJCgnLmFycm93LmFycm93LXJpZ2h0JykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgaWYoIWxvY2spe1xuICAgICAgLy9jbGVhckludGVydmFsKHNsaWRlTG9vcCk7XG4gICAgICBzbGlkZVJpZ2h0KCk7XG4gICAgfVxuICB9KTtcbiAgJCggXCIjb3VyLWJvb3RoLXNsaWRlXCIgKS5vbiggXCJzd2lwZWxlZnRcIiwgZnVuY3Rpb24oZSl7XG4gICAgaWYoIWxvY2spe1xuICAgICAgLy9jbGVhckludGVydmFsKHNsaWRlTG9vcCk7XG4gICAgICBzbGlkZVJpZ2h0KCk7XG4gICAgfVxuICB9KTtcbiAgJCggXCIjb3VyLWJvb3RoLXNsaWRlXCIgKS5vbiggXCJzd2lwZXJpZ2h0XCIsIGZ1bmN0aW9uKGUpe1xuICAgIC8vY2xlYXJJbnRlcnZhbChzbGlkZUxvb3ApO1xuICAgIGlmKCFsb2NrKXtcbiAgICAgIHNsaWRlTGVmdCgpO1xuICAgIH1cbiAgfSk7XG59XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyQoJy5wYXJhbGxheCcpLnBhcmFsbGF4KHsgJ2NvZWZmJzotMC4xNSB9KTtcbiAgICAvLyQoJy5wYXJhbGxheCAuaW5uZXInKS5wYXJhbGxheCh7ICdjb2VmZic6MS4wNSB9KTtcbiAgICAkKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wIC0gJCgnI21wLW1lbnUnKS5oZWlnaHQoKVxuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5kcm9wZG93bicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgIH0pO1xuICAgICQoJy5oZXJvLXBsYXknKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICQoJy5oZXJvLXZpZGVvJykuYWRkQ2xhc3MoJ3N0YXJ0Jyk7XG4gICAgICAkKCcuaGVyby12aWRlbycpLmdldCgwKS5wbGF5KCk7XG4gICAgfSk7XG4gICAgJCgnI3RyaWdnZXInKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgJCgnI21wLW1lbnUgdWwnKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgIH0pO1xuICAgIHNsaWRlcygpO1xuICAgIGlmKCFNb2Rlcm5penIudG91Y2gpe1xuICAgICAgcGFyYWxsYXgoKTtcbiAgICB9XG4gICAgJCggXCIuZGF0ZXBpY2tlclwiICkuZGF0ZXBpY2tlcigpO1xufSk7XG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wdWJsaWMvc3JjL2pzL21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9