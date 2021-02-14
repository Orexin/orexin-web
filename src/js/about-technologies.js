//idk bruh I can do it but right now I'm feeling like my brain is being pulled out
//by some space force and at the same time my notebook screen is pulling off fucking stroboscopic effects

var img = document.getElementsByClassName('technologies-img');

while (true) {
	for (var i = 0; i <= 150; i++) {
		if (i >= 145) {
			p = i - 10;
			img.style.webkitTransform = 'translateX(' + p + 'vh) translateY(' + p + 'vh)';
		}
		img.style.webkitTransform = 'translateX(' + i + 'vh) translateY(' + i + 'vh)';
	}
}
