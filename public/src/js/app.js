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
	    });
	    $('.hero-play').click(function(e){
	      $('.hero-video').addClass('start');
	      $('.hero-video').get(0).play();
	    });
	    slides();
	    parallax();
	    $( ".datepicker" ).datepicker();
	});
	


/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQSxFQUFDO0FBQ0QscUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQStCLGdCQUFnQjtBQUMvQyx1Q0FBc0MsZUFBZTtBQUNyRDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxFQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKGZ1bmN0aW9uKCQpe1xuICAkLmZuLnBhcmFsbGF4ID0gZnVuY3Rpb24ob3B0aW9ucyl7XG4gICBcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgdmFyICQkID0gJCh0aGlzKTtcblxuICAgIG9mZnNldCA9ICQkLm9mZnNldCgpO1xuICAgIGNvbnNvbGUubG9nKG9mZnNldCk7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgJ3N0YXJ0Jzogb2Zmc2V0LnRvcCxcbiAgICAgICdzdG9wJzogb2Zmc2V0LnRvcCArICQkLmhlaWdodCgpLFxuICAgICAgJ2NvZWZmJzogMC45NVxuICAgIH07XG4gICAgdmFyIG9wdHMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICAkKCcuc2Nyb2xsZXInKS5iaW5kKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93VG9wID0gJCgnLnNjcm9sbGVyJykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93VG9wKTtcbiAgICAgICAgd2luZG93Qm90dG9tID0gd2luZG93VG9wICsgJCgnLnNjcm9sbGVyJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYoKHdpbmRvd0JvdHRvbSA+PSBvcHRzLnN0YXJ0KSAmJiAod2luZG93VG9wIDw9IG9wdHMuc3RvcCkpIHtcbiAgICAgICAgICBuZXdDb29yZCA9IHdpbmRvd1RvcCAqIG9wdHMuY29lZmY7XG4gICAgICAgICAgJCQuY3NzKHtcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnMCAnKyBuZXdDb29yZCArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59KShqUXVlcnkpO1xuZnVuY3Rpb24gcGFyYWxsYXgoKXsgXG4gICQoJy5zY3JvbGxlcicpLmJpbmQoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgIHdpbmRvd1RvcCA9ICQoJy5zY3JvbGxlcicpLnNjcm9sbFRvcCgpO1xuICAgIHdpbmRvd0JvdHRvbSA9IHdpbmRvd1RvcCArICQoJy5zY3JvbGxlcicpLmhlaWdodCgpO1xuICAgICQoJy5wYXJhbGxheCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciAkJCA9ICQodGhpcyk7XG4gICAgICBvZmZzZXQgPSAkJC5wb3NpdGlvbigpO1xuICAgICAgdmFyIG9wdHMgPSB7XG4gICAgICAgICdzdGFydCc6IG9mZnNldC50b3AsXG4gICAgICAgICdzdG9wJzogb2Zmc2V0LnRvcCArICQkLmhlaWdodCgpLFxuICAgICAgICAnY29lZmYnOiAtMC4yNVxuICAgICAgfTtcbiAgICAgIGlmKCh3aW5kb3dCb3R0b20gPj0gb3B0cy5zdGFydCkgJiYgKHdpbmRvd1RvcCA8PSBvcHRzLnN0b3ApKSB7XG4gICAgICAgIG5ld0Nvb3JkID0gKG9wdHMuc3RvcCAtIHdpbmRvd1RvcCkgKiBvcHRzLmNvZWZmO1xuICAgICAgICAkJC5jc3Moe1xuICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnMCAnKyBuZXdDb29yZCArICdweCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkZXMoKXtcbiAgdmFyIGxlbiA9ICQoJy5zbGlkZScpLmxlbmd0aDtcbiAgdmFyIGxvY2sgPSAwO1xuICBmdW5jdGlvbiBzbGlkZUxlZnQoKSB7XG4gICAgbG9jayA9IDE7XG4gICAgdmFyIGN1cnJlbnQgPSAkKCcuc2xpZGUuYWN0aXZlJykuaW5kZXgoKSAtIDE7XG4gICAgdmFyIG5leHQgPSBjdXJyZW50ID09IDAgPyBsZW4gLSAxIDogY3VycmVudCAtIDE7XG4gICAgJCgnLnNsaWRlLmFjdGl2ZScpLmFkZENsYXNzKCdyaWdodC1vdXQnKTtcbiAgICAkKCcuc2xpZGUnKS5lcShuZXh0KS5hZGRDbGFzcygnYWN0aXZlIGxlZnQtaW4nKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBsb2NrID0gMDtcbiAgICAgICQoJy5zbGlkZS5yaWdodC1vdXQnKS5yZW1vdmVDbGFzcygncmlnaHQtb3V0IGFjdGl2ZScpO1xuICAgICAgJCgnLnNsaWRlLmxlZnQtaW4nKS5yZW1vdmVDbGFzcygnbGVmdC1pbicpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIGZ1bmN0aW9uIHNsaWRlUmlnaHQoKSB7XG4gICAgbG9jayA9IDE7XG4gICAgdmFyIGN1cnJlbnQgPSAkKCcuc2xpZGUuYWN0aXZlJykuaW5kZXgoKSAtIDE7XG4gICAgdmFyIG5leHQgPSBjdXJyZW50ID09IGxlbiAtIDEgPyAwIDogY3VycmVudCArIDE7XG4gICAgJCgnLnNsaWRlLmFjdGl2ZScpLmFkZENsYXNzKCdsZWZ0LW91dCcpO1xuICAgICQoJy5zbGlkZScpLmVxKG5leHQpLmFkZENsYXNzKCdhY3RpdmUgcmlnaHQtaW4nKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBsb2NrID0gMDtcbiAgICAgICQoJy5zbGlkZS5sZWZ0LW91dCcpLnJlbW92ZUNsYXNzKCdsZWZ0LW91dCBhY3RpdmUnKTtcbiAgICAgICQoJy5zbGlkZS5yaWdodC1pbicpLnJlbW92ZUNsYXNzKCdyaWdodC1pbicpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIC8vIHZhciBzbGlkZUxvb3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgLy8gICBzbGlkZVJpZ2h0KCk7XG4gIC8vIH0sIDUwMDApO1xuICAkKCcuYXJyb3cuYXJyb3ctbGVmdCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgIC8vY2xlYXJJbnRlcnZhbChzbGlkZUxvb3ApO1xuICAgIGlmKCFsb2NrKXtcbiAgICAgIHNsaWRlTGVmdCgpO1xuICAgIH1cbiAgfSk7XG4gICQoJy5hcnJvdy5hcnJvdy1yaWdodCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgIGlmKCFsb2NrKXtcbiAgICAgIC8vY2xlYXJJbnRlcnZhbChzbGlkZUxvb3ApO1xuICAgICAgc2xpZGVSaWdodCgpO1xuICAgIH1cbiAgfSk7XG59XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyQoJy5wYXJhbGxheCcpLnBhcmFsbGF4KHsgJ2NvZWZmJzotMC4xNSB9KTtcbiAgICAvLyQoJy5wYXJhbGxheCAuaW5uZXInKS5wYXJhbGxheCh7ICdjb2VmZic6MS4wNSB9KTtcbiAgICAkKCcuZHJvcGRvd24nKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcbiAgICAkKCcuaGVyby1wbGF5JykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAkKCcuaGVyby12aWRlbycpLmFkZENsYXNzKCdzdGFydCcpO1xuICAgICAgJCgnLmhlcm8tdmlkZW8nKS5nZXQoMCkucGxheSgpO1xuICAgIH0pO1xuICAgIHNsaWRlcygpO1xuICAgIHBhcmFsbGF4KCk7XG4gICAgJCggXCIuZGF0ZXBpY2tlclwiICkuZGF0ZXBpY2tlcigpO1xufSk7XG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wdWJsaWMvc3JjL2pzL21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9