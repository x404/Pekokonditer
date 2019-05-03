$(document).ready(function(){
	$('#groups-carousel2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '#groups-carousel'
	});


	$('#groups-carousel').slick({
		slidesToShow: 7,
		arrows: false,
		slidesToScroll: 1,
		dots: true,
		asNavFor: '#groups-carousel2',
		focusOnSelect: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 6
				}
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});



	$('#aboutus-carousel').slick({
		slidesToShow: 2,
		arrows: false,
		slidesToScroll: 1,
		dots: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	$('#blog-carousel').slick({
		slidesToShow: 3,
		arrows: true,
		slidesToScroll: 1,
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><img src="/template/images/arrow.png" alt="" /></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><img src="/template/images/arrow.png" alt="" /></button>',
		dots: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '150px',
					arrows: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '150px',
					arrows: false
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '100px',
					arrows: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '70px',
					arrows: false
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '20px',
					arrows: false
				}
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '10px',
					arrows: false
				}
			},
		]
	});


	$('#gallery-carousel').slick({
		slidesToShow: 4,
		arrows: true,
		slidesToScroll: 1,
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><img src="/template/images/arrow.png" alt="" /></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><img src="/template/images/arrow.png" alt="" /></button>',
		dots: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},

			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '80px',
					arrows: false
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '100px',
					arrows: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '70px',
					arrows: false
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '50px',
					arrows: false
				}
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '40px',
					arrows: false
				}
			},
			{
				breakpoint: 385,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '25px',
					arrows: false
				}
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '15px',
					arrows: false
				}
			},
		]
	});



	$('#home-carousel').slick({
		slidesToShow: 1,
		arrows: true,
		slidesToScroll: 1,
		prevArrow:`
			<button class="slick-arrow slick-prev" aria-label="Назад" type="button">
				<svg width="26" height="31">
					<polygon points="2,13 22,2 22,24" fill="transparent" stroke="#f05525" stroke-width="3" />
				</svg>
			</button>`,
		nextArrow:`<button class="slick-arrow slick-next" aria-label="Вперед" type="button">
				<svg width="26" height="31">
					<polygon points="2,2 22,13 2,24" fill="transparent" stroke="#f05525" stroke-width="3" />
				</svg>
		</button>`,
		dots: false,
		fade: true
	});


	$('#producers-carousel').slick({
		slidesToShow: 5,
		dots: false,
		slidesToScroll: 1,
		arrows: true,
		prevArrow:'<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><img src="/template/images/arrow.png" alt="" /></button>',
		nextArrow:'<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><img src="/template/images/arrow.png" alt="" /></button>',
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false
				}
			}
		]
	});


	// $('.fancybox-media, .fancybox').fancybox({
	// 	openEffect  : 'none',
	// 	closeEffect : 'none',
	// 	helpers : {
	// 		fancybox-mediamedia : {}
	// 	}
	// });


	// mobile-menu
	$('#navbar').each(function(){
		var $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $('.close-menu'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				$('body').addClass('o-menu');

			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
			};
		init();
	});	



	$(window).scroll(function(){
		$this = $(this);

		if ($(this).scrollTop() > 350){
			$("body").addClass('bodyFixed');
		} else{
			$("body").removeClass('bodyFixed');
		}
	});

	$('.ec-form').validate();
	$('#feedback-form').validate();

});


$(function(){
	$('.policy input').click(function(){
		var $this = $(this),
			$submit = $this.closest('.form-policy');

		if ($this.is(':checked')){
			$submit.find('.input, .form-control, .submit, textarea, input[type=radio], button').removeAttr('disabled');
		} else {
			$submit.addClass('disabled');
			$submit.find('.input, .form-control, .submit, textarea, input[type=radio], button').attr('disabled', true);
		}
	})
});


window.onload = function(){
	// search

	[].forEach.call(document.querySelectorAll('.btn-search'),function(el,i){
		el.addEventListener('click', function() {
			// document.querySelector('.header__right').classList.toggle('search-show');
			// console.log(this);
			this.parentElement.classList.toggle('search-show');
			this.classList.toggle('btn-search-close');
		});		
	});


	// document.querySelector('.btn-search').addEventListener('click', function() {
	// 	// document.querySelector('.header__right').classList.toggle('search-show');
	// 	console.log(this);
	// 	this.parent().classList.toggle('search-show');
	// 	this.classList.toggle('btn-search-close');
	// });
};


// показываем второй  уровень меню
$(document).on('click', '.o-menu .folder > a, .o-menu .folder > span', function(e){
	e.preventDefault();
	var $this = $(this);
	$this.next('.subnav').slideToggle('normal', function(){
		$this.toggleClass('open')
	});
})