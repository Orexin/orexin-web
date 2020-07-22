$(document).scroll(function() {
	if ($(this).scrollTop() > 5) {
		$('nav').addClass('nav-slim');
	}
	else {
		$('nav').removeClass('nav-slim');
	}
});