$(document).ready(function(){
	let mainbg = document.querySelector('.parallax-images');
	if (mainbg){
		window.onload = function parallax(){
			let stone = document.querySelector('.parallax-img-stone');
			let sky = document.querySelector('.parallax-img-sky');
			let see = document.querySelector('.parallax-img-see');
			let stind;
			let x;
			let y;
			function ParallaxStyle(){
				stone.style.transform = 'translate(-' + x * 5+ '%, -' + y * 0 +stind+ '%)';
				sky.style.transform = 'translate(-' + x * 3 + '%, -' + y * 10 + '%)';
				see.style.transform = 'translate(-' + x + '%, -' + y * 5 + '%)';
				requestAnimationFrame(ParallaxStyle);
				const mediaQuery = window.matchMedia('(max-width: 768px)')
			    if (mediaQuery.matches) {
  			    stone.style.transform = 'none';
				sky.style.transform = 'none';
				see.style.transform = 'none';
			}
		};
			ParallaxStyle();
			
			window.addEventListener('scroll', function(){
				stind = window.pageYOffset/15;

			});
			window.addEventListener('mousemove', function(e) {
				x = e.clientX / window.innerWidth;
				y = e.clientY / window.innerHeight;  
			});
		};
	};
	
	/*const mediaQuery = window.matchMedia('(max-width: 768px)')
			if (mediaQuery.matches) {
  			return;
		}*/

    $('.menu-burger').click(function() {
        $('.menu-burger, menu, .logo').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });

  $("#index").owlCarousel({
  	loop:false,
    margin:25,
    nav:true,
    dots: true,
    navText: ["",""],
    responsive:{
        0:{
            items:1,
            margin:0,
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });


$('#rooms .item img').each(function() {
var ico = $(this).attr('src');
$('.after-slide').append('<span class="img" style="background: url('+ico+')"></span>');
});
$('#rooms').owlCarousel({
items: 1,
autoplay: true,
autoplayTimeout:6000,
nav: true,
navText: ["",""],
dots: true,
loop: true,
dotsContainer: '.after-slide',/*Указываем класс блока пагинации*/
autoplayHoverPause: true
});
$('.after-slide').appendTo('#rooms');
$('.after-slide .img').click(function () {
$('#rooms').trigger('to.owl.carousel', [$(this).index(), 300]);
});
 
$('#tab-1, #tab-2, #tab-3').click(function() {
		var height1 = $('.contein-1').height();
		var height2 = $('.contein-2').height();
		var height3 = $('.contein-3').height();
		var height = $('.contein').height();
		if ($('.tab-selector-2').is(':checked')){
			 $('.contein').height(height2);
		}
		if ($('.tab-selector-3').is(':checked')){
			$('.contein').height(height3);
		}
		if ($('.tab-selector-1').is(':checked')){
			$('.contein').height(height1);
		}
	});



});




