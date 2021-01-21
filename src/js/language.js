export function language() {
	if (/^en\b/.test(navigator.language)) {
		doLangSelect(window.navigator.language);
		window.location.replace('./en/index.html');
	} else if (/^cs\b/.test(navigator.language)) {
		doLangSelect(window.navigator.language);
		window.location.replace('./cs/index.html');
	}
}
