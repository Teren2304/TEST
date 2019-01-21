$('.show-menu').click(function(){
	var menu = $('.menu');
	if ($(this).hasClass('show-menu--active')){
		$(this).removeClass('show-menu--active');
		$(menu).removeClass('menu--active');
	}
	else{
		$(this).addClass('show-menu--active');
		$(menu).addClass('menu--active');
	}
});