const arrows = document.getElementsByClassName('faq-icon-container');

Array.from(arrows).forEach((item) => {
	item.addEventListener('click', (event) => {
		var arrowIcon = item.getElementsByClassName('faq-icon');
		var content = item.closest('.faq-question-title').nextElementSibling;
		if (!content.classList.contains('show')) {
			arrowIcon[0].style.transform = 'rotate(180deg)';
			content.classList.toggle('show');
		} else {
			arrowIcon[0].style = '';
			content.classList.toggle('show');
		}
	});
});
