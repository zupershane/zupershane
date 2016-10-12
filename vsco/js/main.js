// STICKY HEADER

var mainMenuTop = $('.main-content').offset().top;
var stickyReveal = mainMenuTop - 100;


$(window).scroll(function() {

    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyReveal) {
   
        if (($("#sticky-header").is(":visible") === false)) {
             $("#sticky-header").fadeIn('fast');
        }
        
		} else {
        
        if ($("#sticky-header").is(":visible")) {
            $("#sticky-header").fadeOut('fast');
        }
    }
   
   
});

// ANIMATE 

new WOW().init();


// PROJECT CAROUSEL 

$(document).ready(function(){

  $('.bxSlider').bxSlider({

    slideWidth: 920,
    maxSlides: 1,
    minSlides: 1,
    moveSlides: 1,
    easing: 'ease-in-out',
    slideMargin: 10
  
  });
  
});
	






