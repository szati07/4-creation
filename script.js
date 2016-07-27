var $header = $('header');
var $logo = $('#logo');
var $nav = $('nav');
var $welcome = $('.welcome');
var $contentContainer = $('.content-container');
var $scrollDownArrow = $('.scroll-down-arrow');

var removeHeaderAnimationClasses = function() {
	$header.removeClass('opened');
	$logo.removeClass('opened');
	$nav.removeClass('opened');
	$welcome.removeClass('opened');
	$contentContainer.removeClass('opened');
	$scrollDownArrow.removeClass('opened');
}

var addHeaderAnimationClasses = function() {
	$header.addClass('opened');
	$logo.addClass('opened');
	$nav.addClass('opened');
	$welcome.addClass('opened');
	$contentContainer.addClass('opened');
	$scrollDownArrow.addClass('opened');	
}

$scrollDownArrow.on('click', removeHeaderAnimationClasses);
$(window).scroll(function() {
	if($(this).scrollTop() >= 1) {
		removeHeaderAnimationClasses();
			
	} else if ($(this).scrollTop() == 0) {
		addHeaderAnimationClasses();

	}
});
