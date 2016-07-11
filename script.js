var slideLogoRight = function() {

	// logo képméretének csökkentése
	$('#logo').animate({
		'margin-left': '0.75em',
		backgroundSize: 80,
			'width': '80px',
			'height': '80px'
	}, 400, function() {

	});

	$('#logo-container h1').animate({
			'margin-top': '1em'
		}, 500, function() {
	
	});
	
	$('header').animate({
		'height': 160
	}, 500, function() {

	});

}

// Scroll Event
$(window).scroll(function() {
	if($(this).scrollTop() > 2) {
		slideLogoRight();
	}
});