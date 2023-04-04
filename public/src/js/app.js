webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

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
	
	
	function carousel() {
		$('.carousel').slick({
			infinite: true,
			slidesToShow: 3,
			arrows: false,			
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 0,
			speed: 3000,
			cssEase: "linear",
		});
	}}
	
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
	
	function nav(){
	  var menuHeight = $('#mp-menu').height();
	  $('#trigger').click(function(e){
	    $(this).toggleClass('is-active');
	    $('#mp-menu ul').toggleClass('open');
	  });
	  $('.mp-level>ul>li>a').click(function(e){
	    $('#trigger').removeClass('is-active');
	    $('#mp-menu ul').removeClass('open');
	    menuHeight = $('.mobile-top').height();
	  });
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - menuHeight
	        }, 1000);
	        return false;
	      }
	    }
	  });
	}
	$(document).ready(function() {
	    $('.dropdown').click(function(e){
	      $(this).toggleClass('open');
	    });
	
	    nav();
	    slides();
			video();
			carousel();
			
	    if(!Modernizr.touch){
	      parallax();
	    }
	    $( ".datepicker" ).datepicker();
	});
	


/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcGFyYWxsYXgoKXsgXG4gIGZ1bmN0aW9uIHNldFRyYW5zZm9ybShsZWZ0LHJpZ2h0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlKCcrIGxlZnQgKycsICcgKyByaWdodCArICcpJyxcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICd0cmFuc2xhdGUoJysgbGVmdCArJywgJyArIHJpZ2h0ICsgJyknLFxuICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnKyBsZWZ0ICsnLCAnICsgcmlnaHQgKyAnLCAwKScsXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAndHJhbnNsYXRlM2QoJysgbGVmdCArJywgJyArIHJpZ2h0ICsgJywgMCknXG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHNldENzcygkJCwgc2Nyb2xsICxtb2RlKSB7XG4gICAgdmFyIG9wdHMgPSB7XG4gICAgICAnc3RhcnQnOiAkJC5vZmZzZXQoKS50b3AsXG4gICAgICAnc3RvcCc6ICQkLm9mZnNldCgpLnRvcCArICQkLmhlaWdodCgpLFxuICAgIH07XG4gICAgLy9jb25zb2xlLmxvZyhvcHRzKTtcbiAgICBpZigoIG9wdHMuc3RhcnQgPD0gc2Nyb2xsLmJvdHRvbSkgJiYgKG9wdHMuc3RvcCA+PSBzY3JvbGwudG9wKSkge1xuICAgICAgaWYobW9kZSA9PSAnYmFjaycpIHtcbiAgICAgICAgbmV3Q29vcmQgPSAoc2Nyb2xsLnRvcC1vcHRzLnN0b3ApICogMC4xNTtcbiAgICAgICAgJCQuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICc1MCUgJysgbmV3Q29vcmQgKyAncHgnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihtb2RlID09ICdtYXJnaW4nKSB7XG4gICAgICAgIG5ld0Nvb3JkID0gKHNjcm9sbC5ib3R0b20tb3B0cy5zdG9wKSAqIC0wLjE7XG4gICAgICAgICQkLmNzcyhzZXRUcmFuc2Zvcm0oMCwgbmV3Q29vcmQrJ3B4JykpOyBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYobW9kZSA9PSAnbGlnaHQnKSB7XG4gICAgICAgIG5ld0Nvb3JkID0gKHNjcm9sbC5ib3R0b20tb3B0cy5zdG9wKSowLjE7XG4gICAgICAgICQkLmNzcyhzZXRUcmFuc2Zvcm0obmV3Q29vcmQrJ3B4JywwKSk7IFxuICAgICAgfVxuICAgICAgZWxzZSBpZihtb2RlID09ICdwaG90bycpIHtcbiAgICAgICAgbmV3Q29vcmQgPSAoc2Nyb2xsLmJvdHRvbS1vcHRzLnN0b3ApKi0wLjAyO1xuICAgICAgICAkJC5jc3Moc2V0VHJhbnNmb3JtKG5ld0Nvb3JkKydweCcsMCkpOyBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYobW9kZSA9PSAncHJpbnRlcicpIHtcbiAgICAgICAgbmV3Q29vcmQgPSAoc2Nyb2xsLmJvdHRvbS1vcHRzLnN0b3ApKi0wLjE7XG4gICAgICAgICQkLmNzcyhzZXRUcmFuc2Zvcm0obmV3Q29vcmQrJ3B4JywwKSk7IFxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgbGFzdFNjcm9sbFRvcCA9IDA7XG5cbiAgJCh3aW5kb3cpLmJpbmQoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY3JvbGwgPSB7IFxuICAgICAgdG9wIDogJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxuICAgICAgaGVpZ2h0IDogJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgYm90dG9tOiAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KClcblxuICAgIH1cblxuICAgIC8vIGlmIChzY3JvbGwudG9wID4gbGFzdFNjcm9sbFRvcCl7XG4gICAgLy8gICBzY3JvbGwuZGlyID0gJ2Rvd24nO1xuICAgIC8vICAgJCgnI21wLW1lbnU6bm90KC5uYXJyb3cpJykuYWRkQ2xhc3MoJ25hcnJvdycpO1xuICAgIC8vICAgJCgnLnNjcm9sbGVyOm5vdCgubmF2LW5hcnJvdyknKS5hZGRDbGFzcygnbmF2LW5hcnJvdycpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBzY3JvbGwuZGlyID0gJ3VwJztcbiAgICAvLyAgICQoJyNtcC1tZW51Lm5hcnJvdycpLnJlbW92ZUNsYXNzKCduYXJyb3cnKTtcbiAgICAvLyAgICQoJy5zY3JvbGxlci5uYXYtbmFycm93JykucmVtb3ZlQ2xhc3MoJ25hdi1uYXJyb3cnKTtcbiAgICAvLyB9XG4gICAgLy8gbGFzdFNjcm9sbFRvcCA9IHNjcm9sbC50b3A7XG5cbiAgICAkKCcucGFyYWxsYXgnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBzZXRDc3MoJCh0aGlzKSxzY3JvbGwsICdiYWNrJyk7XG4gICAgfSk7XG4gICAgJCgnLmJlbHQnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBzZXRDc3MoJCh0aGlzKSxzY3JvbGwsICdtYXJnaW4nKTtcbiAgICB9KTtcbiAgICAkKCcjbGlnaHQnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBzZXRDc3MoJCh0aGlzKSxzY3JvbGwsICdsaWdodCcpO1xuICAgIH0pO1xuICAgICQoJyNwaG90bycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHNldENzcygkKHRoaXMpLHNjcm9sbCwgJ3Bob3RvJyk7XG4gICAgfSk7XG4gICAgJCgnI3ByaW50ZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBzZXRDc3MoJCh0aGlzKSxzY3JvbGwsICdwcmludGVyJyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzbGlkZXMoKXtcbiAgdmFyIGxlbiA9ICQoJy5zbGlkZScpLmxlbmd0aDtcbiAgdmFyIGxvY2sgPSAwO1xuICBmdW5jdGlvbiBzZXRJbmRleChjdXJyZW50LCBuZXh0KSB7XG4gICAgJCgnLmluZGV4IHNwYW4nKS5lcShjdXJyZW50KS5yZW1vdmVDbGFzcygnaWNvbi1pY29uc19uYXZpZ2F0aW9uX2NpcmNsZV9jbG9zZWQnKS5hZGRDbGFzcygnaWNvbi1pY29uc19uYXZpZ2F0aW9uX2NpcmNsZV9vcGVuJyk7XG4gICAgJCgnLmluZGV4IHNwYW4nKS5lcShuZXh0KS5yZW1vdmVDbGFzcygnaWNvbi1pY29uc19uYXZpZ2F0aW9uX2NpcmNsZV9vcGVuJykuYWRkQ2xhc3MoJ2ljb24taWNvbnNfbmF2aWdhdGlvbl9jaXJjbGVfY2xvc2VkJylcbiAgfVxuICBmdW5jdGlvbiBzbGlkZUxlZnQoKSB7XG4gICAgbG9jayA9IDE7XG4gICAgdmFyIGN1cnJlbnQgPSAkKCcuc2xpZGUuYWN0aXZlJykuaW5kZXgoKSAtIDE7XG4gICAgdmFyIG5leHQgPSBjdXJyZW50ID09IDAgPyBsZW4gLSAxIDogY3VycmVudCAtIDE7XG4gICAgJCgnLnNsaWRlLmFjdGl2ZScpLmFkZENsYXNzKCdyaWdodC1vdXQnKTtcbiAgICAkKCcuc2xpZGUnKS5lcShuZXh0KS5hZGRDbGFzcygnYWN0aXZlIGxlZnQtaW4nKTtcbiAgICBzZXRJbmRleChjdXJyZW50LCBuZXh0KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBsb2NrID0gMDtcbiAgICAgICQoJy5zbGlkZS5yaWdodC1vdXQnKS5yZW1vdmVDbGFzcygncmlnaHQtb3V0IGFjdGl2ZScpO1xuICAgICAgJCgnLnNsaWRlLmxlZnQtaW4nKS5yZW1vdmVDbGFzcygnbGVmdC1pbicpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIGZ1bmN0aW9uIHNsaWRlUmlnaHQoKSB7XG4gICAgbG9jayA9IDE7XG4gICAgdmFyIGN1cnJlbnQgPSAkKCcuc2xpZGUuYWN0aXZlJykuaW5kZXgoKSAtIDE7XG4gICAgdmFyIG5leHQgPSBjdXJyZW50ID09IGxlbiAtIDEgPyAwIDogY3VycmVudCArIDE7XG4gICAgJCgnLnNsaWRlLmFjdGl2ZScpLmFkZENsYXNzKCdsZWZ0LW91dCcpO1xuICAgICQoJy5zbGlkZScpLmVxKG5leHQpLmFkZENsYXNzKCdhY3RpdmUgcmlnaHQtaW4nKTtcbiAgICBzZXRJbmRleChjdXJyZW50LCBuZXh0KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBsb2NrID0gMDtcbiAgICAgICQoJy5zbGlkZS5sZWZ0LW91dCcpLnJlbW92ZUNsYXNzKCdsZWZ0LW91dCBhY3RpdmUnKTtcbiAgICAgICQoJy5zbGlkZS5yaWdodC1pbicpLnJlbW92ZUNsYXNzKCdyaWdodC1pbicpO1xuICAgIH0sIDEwMDApO1xuICB9XG4gIC8vIHZhciBzbGlkZUxvb3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgLy8gICBzbGlkZVJpZ2h0KCk7XG4gIC8vIH0sIDUwMDApO1xuICAkKCcuYXJyb3cuYXJyb3ctbGVmdCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgIC8vY2xlYXJJbnRlcnZhbChzbGlkZUxvb3ApO1xuICAgIGlmKCFsb2NrKXtcbiAgICAgIHNsaWRlTGVmdCgpO1xuICAgIH1cbiAgfSk7XG4gICQoJy5hcnJvdy5hcnJvdy1yaWdodCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgIGlmKCFsb2NrKXtcbiAgICAgIC8vY2xlYXJJbnRlcnZhbChzbGlkZUxvb3ApO1xuICAgICAgc2xpZGVSaWdodCgpO1xuICAgIH1cbiAgfSk7XG4gICQoIFwiI291ci1ib290aC1zbGlkZVwiICkub24oIFwic3dpcGVsZWZ0XCIsIGZ1bmN0aW9uKGUpe1xuICAgIGlmKCFsb2NrKXtcbiAgICAgIC8vY2xlYXJJbnRlcnZhbChzbGlkZUxvb3ApO1xuICAgICAgc2xpZGVSaWdodCgpO1xuICAgIH1cbiAgfSk7XG4gICQoIFwiI291ci1ib290aC1zbGlkZVwiICkub24oIFwic3dpcGVyaWdodFwiLCBmdW5jdGlvbihlKXtcbiAgICAvL2NsZWFySW50ZXJ2YWwoc2xpZGVMb29wKTtcbiAgICBpZighbG9jayl7XG4gICAgICBzbGlkZUxlZnQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB2aWRlbygpe1xuICAkKCcuaGVyby1wbGF5JykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgJCgnLmhlcm8tdmlkZW8nKS5hZGRDbGFzcygnc3RhcnQnKTtcbiAgICAkKCcudmlkZW8tY2xvc2UnKS5hZGRDbGFzcygnc3RhcnQnKTtcbiAgICAkKCcuaGVyby12aWRlbycpLmdldCgwKS5wbGF5KCk7XG4gIH0pO1xuICAkKCcudmlkZW8tY2xvc2UnKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAkKCcuaGVyby12aWRlbycpLnJlbW92ZUNsYXNzKCdzdGFydCcpO1xuICAgICQoJy52aWRlby1jbG9zZScpLnJlbW92ZUNsYXNzKCdzdGFydCcpO1xuICAgICQoJy5oZXJvLXZpZGVvJykuZ2V0KDApLnBhdXNlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBuYXYoKXtcbiAgdmFyIG1lbnVIZWlnaHQgPSAkKCcjbXAtbWVudScpLmhlaWdodCgpO1xuICAkKCcjdHJpZ2dlcicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICQoJyNtcC1tZW51IHVsJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgfSk7XG4gICQoJy5tcC1sZXZlbD51bD5saT5hJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgJCgnI3RyaWdnZXInKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgJCgnI21wLW1lbnUgdWwnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgIG1lbnVIZWlnaHQgPSAkKCcubW9iaWxlLXRvcCcpLmhlaWdodCgpO1xuICB9KTtcbiAgJCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArJ10nKTtcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIG1lbnVIZWlnaHRcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJCgnLmRyb3Bkb3duJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgfSk7XG5cbiAgICBuYXYoKTtcbiAgICBzbGlkZXMoKTtcbiAgICB2aWRlbygpO1xuICAgIGlmKCFNb2Rlcm5penIudG91Y2gpe1xuICAgICAgcGFyYWxsYXgoKTtcbiAgICB9XG4gICAgJCggXCIuZGF0ZXBpY2tlclwiICkuZGF0ZXBpY2tlcigpO1xufSk7XG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wdWJsaWMvc3JjL2pzL21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9