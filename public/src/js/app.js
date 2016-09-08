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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNELHFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBK0IsZ0JBQWdCO0FBQy9DLHVDQUFzQyxlQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4oZnVuY3Rpb24oJCl7XG4gICQuZm4ucGFyYWxsYXggPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgIFxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICB2YXIgJCQgPSAkKHRoaXMpO1xuXG4gICAgb2Zmc2V0ID0gJCQub2Zmc2V0KCk7XG4gICAgY29uc29sZS5sb2cob2Zmc2V0KTtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAnc3RhcnQnOiBvZmZzZXQudG9wLFxuICAgICAgJ3N0b3AnOiBvZmZzZXQudG9wICsgJCQuaGVpZ2h0KCksXG4gICAgICAnY29lZmYnOiAwLjk1XG4gICAgfTtcbiAgICB2YXIgb3B0cyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICQoJycpLmJpbmQoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3dUb3AgPSAkKCcuc2Nyb2xsZXInKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgd2luZG93Qm90dG9tID0gd2luZG93VG9wICsgJCgnLnNjcm9sbGVyJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYoKHdpbmRvd0JvdHRvbSA+PSBvcHRzLnN0YXJ0KSAmJiAod2luZG93VG9wIDw9IG9wdHMuc3RvcCkpIHtcbiAgICAgICAgICBuZXdDb29yZCA9IHdpbmRvd1RvcCAqIG9wdHMuY29lZmY7XG4gICAgICAgICAgJCQuY3NzKHtcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnMCAnKyBuZXdDb29yZCArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59KShqUXVlcnkpO1xuZnVuY3Rpb24gcGFyYWxsYXgoKXsgXG4gIGZ1bmN0aW9uIHNldFRyYW5zZm9ybShsZWZ0LHJpZ2h0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlKCcrIGxlZnQgKycsICcgKyByaWdodCArICcpJyxcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUoJysgbGVmdCArJywgJyArIHJpZ2h0ICsgJyknLFxuICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnKyBsZWZ0ICsnLCAnICsgcmlnaHQgKyAnLCAwKScsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoJysgbGVmdCArJywgJyArIHJpZ2h0ICsgJywgMCknXG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHNldENzcygkJCwgc2Nyb2xsICxtb2RlKSB7XG4gICAgdmFyIG9wdHMgPSB7XG4gICAgICAnc3RhcnQnOiAkJC5vZmZzZXQoKS50b3AsXG4gICAgICAnc3RvcCc6ICQkLm9mZnNldCgpLnRvcCArICQkLmhlaWdodCgpLFxuICAgIH07XG4gICAgLy9jb25zb2xlLmxvZyhvcHRzKTtcbiAgICBpZigoIG9wdHMuc3RhcnQgPD0gc2Nyb2xsLmJvdHRvbSkgJiYgKG9wdHMuc3RvcCA+PSBzY3JvbGwudG9wKSkge1xuICAgICAgaWYobW9kZSA9PSAnYmFjaycpIHtcbiAgICAgICAgbmV3Q29vcmQgPSAoc2Nyb2xsLnRvcC1vcHRzLnN0b3ApICogMC4xNTtcbiAgICAgICAgJCQuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICc1MCUgJysgbmV3Q29vcmQgKyAncHgnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihtb2RlID09ICdtYXJnaW4nKSB7XG4gICAgICAgIG5ld0Nvb3JkID0gKHNjcm9sbC5ib3R0b20tb3B0cy5zdG9wKSAqIC0wLjE7XG4gICAgICAgICQkLmNzcyhzZXRUcmFuc2Zvcm0oMCwgbmV3Q29vcmQrJ3B4JykpOyBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYobW9kZSA9PSAnbGlnaHQnKSB7XG4gICAgICAgIG5ld0Nvb3JkID0gKHNjcm9sbC5ib3R0b20tb3B0cy5zdG9wKSowLjE7XG4gICAgICAgICQkLmNzcyhzZXRUcmFuc2Zvcm0obmV3Q29vcmQrJ3B4JywwKSk7IFxuICAgICAgfVxuICAgICAgZWxzZSBpZihtb2RlID09ICdwaG90bycpIHtcbiAgICAgICAgbmV3Q29vcmQgPSAoc2Nyb2xsLmJvdHRvbS1vcHRzLnN0b3ApKi0wLjAyO1xuICAgICAgICAkJC5jc3Moc2V0VHJhbnNmb3JtKG5ld0Nvb3JkKydweCcsMCkpOyBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYobW9kZSA9PSAncHJpbnRlcicpIHtcbiAgICAgICAgbmV3Q29vcmQgPSAoc2Nyb2xsLmJvdHRvbS1vcHRzLnN0b3ApKi0wLjE7XG4gICAgICAgICQkLmNzcyhzZXRUcmFuc2Zvcm0obmV3Q29vcmQrJ3B4JywwKSk7IFxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgbGFzdFNjcm9sbFRvcCA9IDA7XG5cbiAgJCh3aW5kb3cpLmJpbmQoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY3JvbGwgPSB7IFxuICAgICAgdG9wIDogJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxuICAgICAgaGVpZ2h0IDogJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgYm90dG9tOiAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KClcblxuICAgIH1cblxuICAgIC8vIGlmIChzY3JvbGwudG9wID4gbGFzdFNjcm9sbFRvcCl7XG4gICAgLy8gICBzY3JvbGwuZGlyID0gJ2Rvd24nO1xuICAgIC8vICAgJCgnI21wLW1lbnU6bm90KC5uYXJyb3cpJykuYWRkQ2xhc3MoJ25hcnJvdycpO1xuICAgIC8vICAgJCgnLnNjcm9sbGVyOm5vdCgubmF2LW5hcnJvdyknKS5hZGRDbGFzcygnbmF2LW5hcnJvdycpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBzY3JvbGwuZGlyID0gJ3VwJztcbiAgICAvLyAgICQoJyNtcC1tZW51Lm5hcnJvdycpLnJlbW92ZUNsYXNzKCduYXJyb3cnKTtcbiAgICAvLyAgICQoJy5zY3JvbGxlci5uYXYtbmFycm93JykucmVtb3ZlQ2xhc3MoJ25hdi1uYXJyb3cnKTtcbiAgICAvLyB9XG4gICAgLy8gbGFzdFNjcm9sbFRvcCA9IHNjcm9sbC50b3A7XG5cbiAgICAkKCcucGFyYWxsYXgnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBzZXRDc3MoJCh0aGlzKSxzY3JvbGwsICdiYWNrJyk7XG4gICAgfSk7XG4gICAgJCgnLmJlbHQnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBzZXRDc3MoJCh0aGlzKSxzY3JvbGwsICdtYXJnaW4nKTtcbiAgICB9KTtcbiAgICAkKCcjbGlnaHQnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBzZXRDc3MoJCh0aGlzKSxzY3JvbGwsICdsaWdodCcpO1xuICAgIH0pO1xuICAgICQoJyNwaG90bycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHNldENzcygkKHRoaXMpLHNjcm9sbCwgJ3Bob3RvJyk7XG4gICAgfSk7XG4gICAgJCgnI3ByaW50ZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBzZXRDc3MoJCh0aGlzKSxzY3JvbGwsICdwcmludGVyJyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkZXMoKXtcbiAgdmFyIGxlbiA9ICQoJy5zbGlkZScpLmxlbmd0aDtcbiAgdmFyIGxvY2sgPSAwO1xuICBmdW5jdGlvbiBzZXRJbmRleChjdXJyZW50LCBuZXh0KSB7XG4gICAgJCgnLmluZGV4IHNwYW4nKS5lcShjdXJyZW50KS5yZW1vdmVDbGFzcygnaWNvbi1pY29uc19uYXZpZ2F0aW9uX2NpcmNsZV9jbG9zZWQnKS5hZGRDbGFzcygnaWNvbi1pY29uc19uYXZpZ2F0aW9uX2NpcmNsZV9vcGVuJyk7XG4gICAgJCgnLmluZGV4IHNwYW4nKS5lcShuZXh0KS5yZW1vdmVDbGFzcygnaWNvbi1pY29uc19uYXZpZ2F0aW9uX2NpcmNsZV9vcGVuJykuYWRkQ2xhc3MoJ2ljb24taWNvbnNfbmF2aWdhdGlvbl9jaXJjbGVfY2xvc2VkJylcbiAgfVxuICBmdW5jdGlvbiBzbGlkZUxlZnQoKSB7XG4gICAgbG9jayA9IDE7XG4gICAgdmFyIGN1cnJlbnQgPSAkKCcuc2xpZGUuYWN0aXZlJykuaW5kZXgoKSAtIDE7XG4gICAgdmFyIG5leHQgPSBjdXJyZW50ID09IDAgPyBsZW4gLSAxIDogY3VycmVudCAtIDE7XG4gICAgJCgnLnNsaWRlLmFjdGl2ZScpLmFkZENsYXNzKCdyaWdodC1vdXQnKTtcbiAgICAkKCcuc2xpZGUnKS5lcShuZXh0KS5hZGRDbGFzcygnYWN0aXZlIGxlZnQtaW4nKTtcbiAgICBzZXRJbmRleChjdXJyZW50LCBuZXh0KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBsb2NrID0gMDtcbiAgICAgICQoJy5zbGlkZS5yaWdodC1vdXQnKS5yZW1vdmVDbGFzcygncmlnaHQtb3V0IGFjdGl2ZScpO1xuICAgICAgJCgnLnNsaWRlLmxlZnQtaW4nKS5yZW1vdmVDbGFzcygnbGVmdC1pbicpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIGZ1bmN0aW9uIHNsaWRlUmlnaHQoKSB7XG4gICAgbG9jayA9IDE7XG4gICAgdmFyIGN1cnJlbnQgPSAkKCcuc2xpZGUuYWN0aXZlJykuaW5kZXgoKSAtIDE7XG4gICAgdmFyIG5leHQgPSBjdXJyZW50ID09IGxlbiAtIDEgPyAwIDogY3VycmVudCArIDE7XG4gICAgJCgnLnNsaWRlLmFjdGl2ZScpLmFkZENsYXNzKCdsZWZ0LW91dCcpO1xuICAgICQoJy5zbGlkZScpLmVxKG5leHQpLmFkZENsYXNzKCdhY3RpdmUgcmlnaHQtaW4nKTtcbiAgICBzZXRJbmRleChjdXJyZW50LCBuZXh0KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBsb2NrID0gMDtcbiAgICAgICQoJy5zbGlkZS5sZWZ0LW91dCcpLnJlbW92ZUNsYXNzKCdsZWZ0LW91dCBhY3RpdmUnKTtcbiAgICAgICQoJy5zbGlkZS5yaWdodC1pbicpLnJlbW92ZUNsYXNzKCdyaWdodC1pbicpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIC8vIHZhciBzbGlkZUxvb3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgLy8gICBzbGlkZVJpZ2h0KCk7XG4gIC8vIH0sIDUwMDApO1xuICAkKCcuYXJyb3cuYXJyb3ctbGVmdCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgIC8vY2xlYXJJbnRlcnZhbChzbGlkZUxvb3ApO1xuICAgIGlmKCFsb2NrKXtcbiAgICAgIHNsaWRlTGVmdCgpO1xuICAgIH1cbiAgfSk7XG4gICQoJy5hcnJvdy5hcnJvdy1yaWdodCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgIGlmKCFsb2NrKXtcbiAgICAgIC8vY2xlYXJJbnRlcnZhbChzbGlkZUxvb3ApO1xuICAgICAgc2xpZGVSaWdodCgpO1xuICAgIH1cbiAgfSk7XG4gICQoIFwiI291ci1ib290aC1zbGlkZVwiICkub24oIFwic3dpcGVsZWZ0XCIsIGZ1bmN0aW9uKGUpe1xuICAgIGlmKCFsb2NrKXtcbiAgICAgIC8vY2xlYXJJbnRlcnZhbChzbGlkZUxvb3ApO1xuICAgICAgc2xpZGVSaWdodCgpO1xuICAgIH1cbiAgfSk7XG4gICQoIFwiI291ci1ib290aC1zbGlkZVwiICkub24oIFwic3dpcGVyaWdodFwiLCBmdW5jdGlvbihlKXtcbiAgICAvL2NsZWFySW50ZXJ2YWwoc2xpZGVMb29wKTtcbiAgICBpZighbG9jayl7XG4gICAgICBzbGlkZUxlZnQoKTtcbiAgICB9XG4gIH0pO1xufVxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8kKCcucGFyYWxsYXgnKS5wYXJhbGxheCh7ICdjb2VmZic6LTAuMTUgfSk7XG4gICAgLy8kKCcucGFyYWxsYXggLmlubmVyJykucGFyYWxsYXgoeyAnY29lZmYnOjEuMDUgfSk7XG4gICAgJCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArJ10nKTtcbiAgICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtICQoJyNtcC1tZW51JykuaGVpZ2h0KClcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcuZHJvcGRvd24nKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcbiAgICAkKCcuaGVyby1wbGF5JykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAkKCcuaGVyby12aWRlbycpLmFkZENsYXNzKCdzdGFydCcpO1xuICAgICAgJCgnLmhlcm8tdmlkZW8nKS5nZXQoMCkucGxheSgpO1xuICAgIH0pO1xuICAgICQoJyN0cmlnZ2VyJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICQoJyNtcC1tZW51IHVsJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcbiAgICBzbGlkZXMoKTtcbiAgICBpZighTW9kZXJuaXpyLnRvdWNoKXtcbiAgICAgIHBhcmFsbGF4KCk7XG4gICAgfVxuICAgICQoIFwiLmRhdGVwaWNrZXJcIiApLmRhdGVwaWNrZXIoKTtcbn0pO1xuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcHVibGljL3NyYy9qcy9tYWluLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==