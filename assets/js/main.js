(function ($) {
    "use strict";
    
$.fn.elExists = function() {
    return this.length > 0;
};
    
$('#unitedKingdom').click(function () {
    $('#unitedKingdom').addClass('active');
    $('#norway').removeClass('active');
    console.log('pulso');
    window.location.href ='index.html';
})
$('#norway').click(function () {
    $('#norway').addClass('active');
    $('#unitedKingdom').removeClass('active');
    $( "#lang1" ).toggle( "slow", function() {
    });
    $('.select-lang').attr('style', 'height:30px');
    window.location.href ='norway/index.html';
});



/*--
Menu Sticky
-----------------------------------*/
var windows = $(window);
var screenSize = windows.width();
var sticky = $('.header-sticky');

windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
        sticky.removeClass('is-sticky');
    } else {
        sticky.addClass('is-sticky');
    }
});
   
/*--- 
    Clickable menu active 
-------------------------------*/
const slinky = $('#menu').slinky()

/*--
    sidebarCart 
------------------------------*/
function sidebarMainmenu() {
    var menuTrigger = $('.clickable-mainmenu-active a'),
        endTrigger = $('button.clickable-mainmenu-close'),
        container = $('.clickable-mainmenu');
    menuTrigger.on('click', function(e) {
        e.preventDefault();
        container.addClass('inside');
    });
    endTrigger.on('click', function() {
        container.removeClass('inside');
    });
};
sidebarMainmenu();

function translate() {
    var unitedkingdom = $('.hero-content h4');
    unitedkingdom.on('click', function() {
        console.log('hola');
    });
};

translate();
    
/*-- 
    One PageNav Scrolling
-------------------------------------*/
  function onePageScrolling(){
	$('.sectionNav').onePageNav();
	var scrollOffset = 0;
	$(".btn-link").on('click', function(evn){
		evn.preventDefault();
		$('html,body').scrollTo(this.hash, this.hash, {
			gap: { nav: -scrollOffset-0 },
			animation:{
				duration: 1000,
				easing: "easeInOutExpo",
                
			}
		});
		return false;	
	});
}
onePageScrolling();
    
/*--
    Slider Height
--------------------------------*/

var $headerMedia = $('header');

function heroSliderMargin() {
    var headerHeight = ( $headerMedia.elExists() ) ? $headerMedia[0].getBoundingClientRect().height : 0;
    if ($('.header-transparant').length) {
        $('.hero-slide-item').css({
            'height': '100vh'
        });
    } else {

        $('.hero-slide-item').css({
            'height': 'calc(100vh - ' + headerHeight + 'px)'
        });
    }
}
$(window).on('load', function(){
    heroSliderMargin();
});

$(window).on('resize', function(){
    heroSliderMargin();
});
    
/*--
    Hero Slider
--------------------------------------------*/
var heroSlider = $('.hero-slider');
heroSlider.slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: false,
    nextArrow: false
});



/* Testimonial Carousel */

$('.testimonal-nav5').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.testimonial-for5',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,

    responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 3
            }
        },
    ]
});

$('.testimonial-for5').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testimonal-nav5'
});



  
    /*-- 
    Post Carousel
----------------------------*/

$('.post-carousel-active-5').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    dots: false,
    arrows: true,
    prevArrow: '<button class="post-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="post-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        }
    ]

});
    
    
/*--
	Video Popup
-----------------------------------*/
var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});
    
/*--
	Image Popup
-----------------------------------*/
var imagePopup = $('.image-popup');
imagePopup.magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
});
    
/*--
	Counter UP
-----------------------------------*/
var counter = $('.count');
counter.counterUp({
    delay: 20,
    time: 2000
});
    

/*--
    Scroll Up
-----------------------------------*/
$.scrollUp({
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade',
    scrollText: '<i class="fa fa-angle-double-up"></i>',
});
   
    
})(jQuery);	
