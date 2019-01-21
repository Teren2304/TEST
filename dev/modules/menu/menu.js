$('.menu__item:first-child').addClass('menu__item--active');
$('.menu__item').click(function(event){
	event.preventDefault();
	var menuHeight = $('.menu').outerHeight(),
		elementClick = $(this).attr("href"),
		destination = $(elementClick).offset().top;
	$('.menu').removeClass('menu--active');
	$('.menu__item').removeClass('menu__item--active');
	$('.show-menu').removeClass('show-menu--active');
	$(this).addClass('menu__item--active');
	$('html').animate({ scrollTop: destination - menuHeight }, 1100);
	return false;
});