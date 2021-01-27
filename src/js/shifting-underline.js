export function shiftingUnderline() {
	(function () {
		const target = document.querySelector('#nav-indicator');
		const links = document.querySelectorAll('nav a h5');

		function mouseenterFunc() {
			if (!this.parentNode.classList.contains('active')) {
				for (let i = 0; i < links.length; i++) {
					if (links[i].parentNode.classList.contains('active')) {
						links[i].parentNode.classList.remove('active');
					}
				}

				this.parentNode.classList.add('active');

				const width = this.getBoundingClientRect().width;
				const left = this.getBoundingClientRect().left + window.pageXOffset;
				const top = this.getBoundingClientRect().top + window.pageYOffset;

				target.style.width = `${width}px`;
				target.style.left = `${left}px`;
				target.style.top = `${top}px`;
			}
		}

		for (let i = 0; i < links.length; i++) {
			links[i].addEventListener('mouseenter', mouseenterFunc);
		}

		function resizeFunc() {
			const active = document.querySelector('nav a h5.active');

			if (active) {
				const left = active.getBoundingClientRect().left + window.pageXOffset;
				const top = active.getBoundingClientRect().top + window.pageYOffset;
				const width = active.getBoundingClientRect().width;

				target.style.left = `${left}px`;
				target.style.top = `${top}px`;
				target.style.width = `${width}px`;
			}
		}

		window.addEventListener('resize', resizeFunc);
	})();
}
