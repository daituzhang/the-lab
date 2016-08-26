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
	      console.log('inset');
	      $('.slide.left-out').removeClass('left-out active');
	      $('.slide.right-in').removeClass('right-in');
	    }, 1000);
	    console.log('inright',lock);
	  }
	  var slideLoop = setInterval(function() {
	    slideRight();
	  }, 5000);
	  $('.arrow.arrow-left').click(function(e){
	    clearInterval(slideLoop);
	    if(!lock){
	      slideLeft();
	    }
	  });
	  $('.arrow.arrow-right').click(function(e){
	    console.log(lock);
	    if(!lock){
	      clearInterval(slideLoop);
	      slideRight();
	    }
	  });
	}
	$(document).ready(function() {
	  // $('.scroller').bind('scroll', function() {
	  //    windowTop = $('.scroller').scrollTop();
	  //   $('.parallax').each(function(){
	  //     var $$ = $(this);
	  //     console.log($$);
	  //     offset = $$.offset();
	  //     console.log(offset);
	  //     var defaults = {
	  //       'start': offset.top,
	  //       'stop': offset.top + $$.height(),
	  //       'coeff': 0.95
	  //     };
	  //     opts = defaults;
	  //     if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
	  //       newCoord = windowTop * opts.coeff;
	  //       $$.css({
	  //           'background-position': '0 '+ newCoord + 'px'
	  //       });
	
	  //     }
	  //   });
	  // });
	    $('.parallax').parallax({ 'coeff':-0.35 });
	    $('.parallax .inner').parallax({ 'coeff':1.15 });
	    $('.dropdown').click(function(e){
	      $(this).toggleClass('open');
	    })
	    slides();
	});
	


/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7O0FBRVo7QUFDQSxTQUFRO0FBQ1IsT0FBTTtBQUNOLDhCQUE2QixnQkFBZ0I7QUFDN0MscUNBQW9DLGVBQWU7QUFDbkQ7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLEVBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4oZnVuY3Rpb24oJCl7XG4gICQuZm4ucGFyYWxsYXggPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgIFxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICB2YXIgJCQgPSAkKHRoaXMpO1xuXG4gICAgb2Zmc2V0ID0gJCQub2Zmc2V0KCk7XG4gICAgY29uc29sZS5sb2cob2Zmc2V0KTtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAnc3RhcnQnOiBvZmZzZXQudG9wLFxuICAgICAgJ3N0b3AnOiBvZmZzZXQudG9wICsgJCQuaGVpZ2h0KCksXG4gICAgICAnY29lZmYnOiAwLjk1XG4gICAgfTtcbiAgICB2YXIgb3B0cyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICQoJy5zY3JvbGxlcicpLmJpbmQoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3dUb3AgPSAkKCcuc2Nyb2xsZXInKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3dUb3ApO1xuICAgICAgICB3aW5kb3dCb3R0b20gPSB3aW5kb3dUb3AgKyAkKCcuc2Nyb2xsZXInKS5oZWlnaHQoKTtcblxuICAgICAgICBpZigod2luZG93Qm90dG9tID49IG9wdHMuc3RhcnQpICYmICh3aW5kb3dUb3AgPD0gb3B0cy5zdG9wKSkge1xuICAgICAgICAgIG5ld0Nvb3JkID0gd2luZG93VG9wICogb3B0cy5jb2VmZjtcbiAgICAgICAgICAkJC5jc3Moe1xuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICcwICcrIG5ld0Nvb3JkICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn0pKGpRdWVyeSk7XG5cbmZ1bmN0aW9uIHNsaWRlcygpe1xuICB2YXIgbGVuID0gJCgnLnNsaWRlJykubGVuZ3RoO1xuICB2YXIgbG9jayA9IDA7XG4gIGZ1bmN0aW9uIHNsaWRlTGVmdCgpIHtcbiAgICBsb2NrID0gMTtcbiAgICB2YXIgY3VycmVudCA9ICQoJy5zbGlkZS5hY3RpdmUnKS5pbmRleCgpIC0gMTtcbiAgICB2YXIgbmV4dCA9IGN1cnJlbnQgPT0gMCA/IGxlbiAtIDEgOiBjdXJyZW50IC0gMTtcbiAgICAkKCcuc2xpZGUuYWN0aXZlJykuYWRkQ2xhc3MoJ3JpZ2h0LW91dCcpO1xuICAgICQoJy5zbGlkZScpLmVxKG5leHQpLmFkZENsYXNzKCdhY3RpdmUgbGVmdC1pbicpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGxvY2sgPSAwO1xuICAgICAgJCgnLnNsaWRlLnJpZ2h0LW91dCcpLnJlbW92ZUNsYXNzKCdyaWdodC1vdXQgYWN0aXZlJyk7XG4gICAgICAkKCcuc2xpZGUubGVmdC1pbicpLnJlbW92ZUNsYXNzKCdsZWZ0LWluJyk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbiAgZnVuY3Rpb24gc2xpZGVSaWdodCgpIHtcbiAgICBsb2NrID0gMTtcbiAgICB2YXIgY3VycmVudCA9ICQoJy5zbGlkZS5hY3RpdmUnKS5pbmRleCgpIC0gMTtcbiAgICB2YXIgbmV4dCA9IGN1cnJlbnQgPT0gbGVuIC0gMSA/IDAgOiBjdXJyZW50ICsgMTtcbiAgICAkKCcuc2xpZGUuYWN0aXZlJykuYWRkQ2xhc3MoJ2xlZnQtb3V0Jyk7XG4gICAgJCgnLnNsaWRlJykuZXEobmV4dCkuYWRkQ2xhc3MoJ2FjdGl2ZSByaWdodC1pbicpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGxvY2sgPSAwO1xuICAgICAgY29uc29sZS5sb2coJ2luc2V0Jyk7XG4gICAgICAkKCcuc2xpZGUubGVmdC1vdXQnKS5yZW1vdmVDbGFzcygnbGVmdC1vdXQgYWN0aXZlJyk7XG4gICAgICAkKCcuc2xpZGUucmlnaHQtaW4nKS5yZW1vdmVDbGFzcygncmlnaHQtaW4nKTtcbiAgICB9LCAxMDAwKTtcbiAgICBjb25zb2xlLmxvZygnaW5yaWdodCcsbG9jayk7XG4gIH1cbiAgdmFyIHNsaWRlTG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIHNsaWRlUmlnaHQoKTtcbiAgfSwgNTAwMCk7XG4gICQoJy5hcnJvdy5hcnJvdy1sZWZ0JykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgY2xlYXJJbnRlcnZhbChzbGlkZUxvb3ApO1xuICAgIGlmKCFsb2NrKXtcbiAgICAgIHNsaWRlTGVmdCgpO1xuICAgIH1cbiAgfSk7XG4gICQoJy5hcnJvdy5hcnJvdy1yaWdodCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgIGNvbnNvbGUubG9nKGxvY2spO1xuICAgIGlmKCFsb2NrKXtcbiAgICAgIGNsZWFySW50ZXJ2YWwoc2xpZGVMb29wKTtcbiAgICAgIHNsaWRlUmlnaHQoKTtcbiAgICB9XG4gIH0pO1xufVxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIC8vICQoJy5zY3JvbGxlcicpLmJpbmQoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAvLyAgICB3aW5kb3dUb3AgPSAkKCcuc2Nyb2xsZXInKS5zY3JvbGxUb3AoKTtcbiAgLy8gICAkKCcucGFyYWxsYXgnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gIC8vICAgICB2YXIgJCQgPSAkKHRoaXMpO1xuICAvLyAgICAgY29uc29sZS5sb2coJCQpO1xuICAvLyAgICAgb2Zmc2V0ID0gJCQub2Zmc2V0KCk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhvZmZzZXQpO1xuICAvLyAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAvLyAgICAgICAnc3RhcnQnOiBvZmZzZXQudG9wLFxuICAvLyAgICAgICAnc3RvcCc6IG9mZnNldC50b3AgKyAkJC5oZWlnaHQoKSxcbiAgLy8gICAgICAgJ2NvZWZmJzogMC45NVxuICAvLyAgICAgfTtcbiAgLy8gICAgIG9wdHMgPSBkZWZhdWx0cztcbiAgLy8gICAgIGlmKCh3aW5kb3dUb3AgPj0gb3B0cy5zdGFydCkgJiYgKHdpbmRvd1RvcCA8PSBvcHRzLnN0b3ApKSB7XG4gIC8vICAgICAgIG5ld0Nvb3JkID0gd2luZG93VG9wICogb3B0cy5jb2VmZjtcbiAgLy8gICAgICAgJCQuY3NzKHtcbiAgLy8gICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJzAgJysgbmV3Q29vcmQgKyAncHgnXG4gIC8vICAgICAgIH0pO1xuXG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH0pO1xuICAgICQoJy5wYXJhbGxheCcpLnBhcmFsbGF4KHsgJ2NvZWZmJzotMC4zNSB9KTtcbiAgICAkKCcucGFyYWxsYXggLmlubmVyJykucGFyYWxsYXgoeyAnY29lZmYnOjEuMTUgfSk7XG4gICAgJCgnLmRyb3Bkb3duJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgfSlcbiAgICBzbGlkZXMoKTtcbn0pO1xuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcHVibGljL3NyYy9qcy9tYWluLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==