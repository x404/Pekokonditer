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
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 5,
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
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
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
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 5,
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
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
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
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 5,
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
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
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
});
