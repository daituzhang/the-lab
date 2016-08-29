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
	


/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQSxFQUFDO0FBQ0QscUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQStCLGdCQUFnQjtBQUMvQyx1Q0FBc0MsZUFBZTtBQUNyRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4oZnVuY3Rpb24oJCl7XG4gICQuZm4ucGFyYWxsYXggPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgIFxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICB2YXIgJCQgPSAkKHRoaXMpO1xuXG4gICAgb2Zmc2V0ID0gJCQub2Zmc2V0KCk7XG4gICAgY29uc29sZS5sb2cob2Zmc2V0KTtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAnc3RhcnQnOiBvZmZzZXQudG9wLFxuICAgICAgJ3N0b3AnOiBvZmZzZXQudG9wICsgJCQuaGVpZ2h0KCksXG4gICAgICAnY29lZmYnOiAwLjk1XG4gICAgfTtcbiAgICB2YXIgb3B0cyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICQoJy5zY3JvbGxlcicpLmJpbmQoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3dUb3AgPSAkKCcuc2Nyb2xsZXInKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3dUb3ApO1xuICAgICAgICB3aW5kb3dCb3R0b20gPSB3aW5kb3dUb3AgKyAkKCcuc2Nyb2xsZXInKS5oZWlnaHQoKTtcblxuICAgICAgICBpZigod2luZG93Qm90dG9tID49IG9wdHMuc3RhcnQpICYmICh3aW5kb3dUb3AgPD0gb3B0cy5zdG9wKSkge1xuICAgICAgICAgIG5ld0Nvb3JkID0gd2luZG93VG9wICogb3B0cy5jb2VmZjtcbiAgICAgICAgICAkJC5jc3Moe1xuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICcwICcrIG5ld0Nvb3JkICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn0pKGpRdWVyeSk7XG5mdW5jdGlvbiBwYXJhbGxheCgpeyBcbiAgJCgnLnNjcm9sbGVyJykuYmluZCgnc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgd2luZG93VG9wID0gJCgnLnNjcm9sbGVyJykuc2Nyb2xsVG9wKCk7XG4gICAgd2luZG93Qm90dG9tID0gd2luZG93VG9wICsgJCgnLnNjcm9sbGVyJykuaGVpZ2h0KCk7XG4gICAgJCgnLnBhcmFsbGF4JykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyICQkID0gJCh0aGlzKTtcbiAgICAgIG9mZnNldCA9ICQkLnBvc2l0aW9uKCk7XG4gICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgJ3N0YXJ0Jzogb2Zmc2V0LnRvcCxcbiAgICAgICAgJ3N0b3AnOiBvZmZzZXQudG9wICsgJCQuaGVpZ2h0KCksXG4gICAgICAgICdjb2VmZic6IC0wLjI1XG4gICAgICB9O1xuICAgICAgaWYoKHdpbmRvd0JvdHRvbSA+PSBvcHRzLnN0YXJ0KSAmJiAod2luZG93VG9wIDw9IG9wdHMuc3RvcCkpIHtcbiAgICAgICAgbmV3Q29vcmQgPSAob3B0cy5zdG9wIC0gd2luZG93VG9wKSAqIG9wdHMuY29lZmY7XG4gICAgICAgICQkLmNzcyh7XG4gICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICcwICcrIG5ld0Nvb3JkICsgJ3B4J1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlcygpe1xuICB2YXIgbGVuID0gJCgnLnNsaWRlJykubGVuZ3RoO1xuICB2YXIgbG9jayA9IDA7XG4gIGZ1bmN0aW9uIHNsaWRlTGVmdCgpIHtcbiAgICBsb2NrID0gMTtcbiAgICB2YXIgY3VycmVudCA9ICQoJy5zbGlkZS5hY3RpdmUnKS5pbmRleCgpIC0gMTtcbiAgICB2YXIgbmV4dCA9IGN1cnJlbnQgPT0gMCA/IGxlbiAtIDEgOiBjdXJyZW50IC0gMTtcbiAgICAkKCcuc2xpZGUuYWN0aXZlJykuYWRkQ2xhc3MoJ3JpZ2h0LW91dCcpO1xuICAgICQoJy5zbGlkZScpLmVxKG5leHQpLmFkZENsYXNzKCdhY3RpdmUgbGVmdC1pbicpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGxvY2sgPSAwO1xuICAgICAgJCgnLnNsaWRlLnJpZ2h0LW91dCcpLnJlbW92ZUNsYXNzKCdyaWdodC1vdXQgYWN0aXZlJyk7XG4gICAgICAkKCcuc2xpZGUubGVmdC1pbicpLnJlbW92ZUNsYXNzKCdsZWZ0LWluJyk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgZnVuY3Rpb24gc2xpZGVSaWdodCgpIHtcbiAgICBsb2NrID0gMTtcbiAgICB2YXIgY3VycmVudCA9ICQoJy5zbGlkZS5hY3RpdmUnKS5pbmRleCgpIC0gMTtcbiAgICB2YXIgbmV4dCA9IGN1cnJlbnQgPT0gbGVuIC0gMSA/IDAgOiBjdXJyZW50ICsgMTtcbiAgICAkKCcuc2xpZGUuYWN0aXZlJykuYWRkQ2xhc3MoJ2xlZnQtb3V0Jyk7XG4gICAgJCgnLnNsaWRlJykuZXEobmV4dCkuYWRkQ2xhc3MoJ2FjdGl2ZSByaWdodC1pbicpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGxvY2sgPSAwO1xuICAgICAgJCgnLnNsaWRlLmxlZnQtb3V0JykucmVtb3ZlQ2xhc3MoJ2xlZnQtb3V0IGFjdGl2ZScpO1xuICAgICAgJCgnLnNsaWRlLnJpZ2h0LWluJykucmVtb3ZlQ2xhc3MoJ3JpZ2h0LWluJyk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgLy8gdmFyIHNsaWRlTG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAvLyAgIHNsaWRlUmlnaHQoKTtcbiAgLy8gfSwgNTAwMCk7XG4gICQoJy5hcnJvdy5hcnJvdy1sZWZ0JykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgLy9jbGVhckludGVydmFsKHNsaWRlTG9vcCk7XG4gICAgaWYoIWxvY2spe1xuICAgICAgc2xpZGVMZWZ0KCk7XG4gICAgfVxuICB9KTtcbiAgJCgnLmFycm93LmFycm93LXJpZ2h0JykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgaWYoIWxvY2spe1xuICAgICAgLy9jbGVhckludGVydmFsKHNsaWRlTG9vcCk7XG4gICAgICBzbGlkZVJpZ2h0KCk7XG4gICAgfVxuICB9KTtcbn1cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vJCgnLnBhcmFsbGF4JykucGFyYWxsYXgoeyAnY29lZmYnOi0wLjE1IH0pO1xuICAgIC8vJCgnLnBhcmFsbGF4IC5pbm5lcicpLnBhcmFsbGF4KHsgJ2NvZWZmJzoxLjA1IH0pO1xuICAgICQoJy5kcm9wZG93bicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgIH0pXG4gICAgc2xpZGVzKCk7XG4gICAgcGFyYWxsYXgoKTtcbiAgICAkKCBcIi5kYXRlcGlja2VyXCIgKS5kYXRlcGlja2VyKCk7XG59KTtcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3B1YmxpYy9zcmMvanMvbWFpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=