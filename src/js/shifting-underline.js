export function shiftingUnderline() {
	const target = document.getElementById('#nav-indicator');
	const uvodLink = document.getElementById('#nav-link-uvod');
	const onasLink = document.getElementById('#nav-link-o-nas');
	const sluzbyLink = document.getElementById('#nav-link-sluzby');
	const currentHref = window.location.href;
	if (currentHref.includes('index')) {
		target.style.width = uvodLink.offsetWidth;
		uvodLink.style.borderBottom = '5px red solid';
	} else if (currentHref.includes('about')) {
		target.style.width = onasLink.offsetWidth;
	} else if (currentHref.includes('services')) {
		target.style.width = sluzbyLink.offsetWidth;
	}
}
