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
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        //slidesToShow: 3,
        //slidesToScroll: 3,
        //infinite: true,
        //dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        //slidesToShow: 2,
        //slidesToScroll: 2
      }
    },
    {
      breakpoint: 376,
      settings: {
        autoplay: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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



document.querySelector('.burger').addEventListener('click', function(){
  document.querySelector('.burger span').classList.toggle('active');
  document.querySelector('.header-nav__list').classList.toggle("animate");
})

$(".footer-item__box-title").on("click", function () {
  $(this).siblings().slideToggle();
  $(this).toggleClass('active');
});