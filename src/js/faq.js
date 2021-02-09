function rockAndRoll(cardNum) {
	var arrow = document.getElementsByClassName('faq-icon-container');
	var arrowClass = document.getElementsByClassName('faq-icon');
	var content = document.getElementsByClassName('faq-questions-content');
	var l = content.length;
	if (content.className != 'show') {
		arrowClass[cardNum].classList.remove('fa-chevron-down');
		arrowClass[cardNum].classList.add('fa-chevron-up');
		content[cardNum].classList.toggle('show');
		console.log('kokot');
	} else if (content.classList.contains('show')) {
		content[cardNum].classList.toggle('fa-chevron-down');
		content[cardNum].style.display = 'none';
		console.log('kokotkokot');
	}
}
