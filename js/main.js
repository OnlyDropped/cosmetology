$('.slider').slick({
  //arrows: false,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-left.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-right.svg" alt=""></button>',
  cssEase: 'linear',
  autoplay: true,
  fade: true,
  autoplaySpeed: 500,
  infinite: false,
  draggable: false,
});


	// jQuery
$('.tabs-wrapper').each(function() {
	let ths = $(this);
	ths.find('.tab-item').not(':first').hide();
	ths.find('.tab').click(function() {
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});