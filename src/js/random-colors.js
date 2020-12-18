import * as undrawSVG from './import-svg';
import * as cookie from './cookieScript';

const blue = "#43D5FA";
const darker_blue = "#2f95af";
const red = "#FF5757";
const darker_red = "#b33d3d";
const yellow = "#FFFF47";
const darker_yellow = "#e1e142";
const purple = "#8555E4";
const darker_purple = "#734bc2";
const turqoise = "#50FFB1";
const darker_turqoise = "#47db98";
const black = "#222222";
const white = "#ffffff";

var lastSessionColor = cookie.getCookie('lastSessionColor');
export var sessionColor = Math.abs(Math.floor(Math.random() * 5));

if(lastSessionColor == "") {
	//debug
	console.log('lastSessionColor is empty');
	console.log('SessionColor: ' + sessionColor);
	console.log('lastSessionColor', + lastSessionColor);
	//debug
	//users there first time
	cookie.setCookie('lastSessionColor', sessionColor, 1);
	console.log('Session cookie has been created and its value is now: ' + sessionColor);
}
else if(sessionColor == lastSessionColor) {
	//debug
	console.log('sessionColor is the same as lastSessionColor!');
	console.log('SessionColor: ' + sessionColor);
	console.log('lastSessionColor', + lastSessionColor);
	//debug
	console.log('Conflict: sessionColor is the same as lastSessionColor!');
	//sessionColor -= 1;
	sessionColor = Math.abs(sessionColor - 2);
	cookie.setCookie('lastSessionColor', sessionColor, 1);

	console.log('SessionColor is now |-2| than lastSessionColor');
}
else {
	//debug
	console.log('everythig went well');
	console.log('SessionColor', + sessionColor);
	console.log('lastSessionColor', + lastSessionColor);
	//debug
	cookie.setCookie('lastSessionColor', sessionColor, 1);
}

export function hoverInColor(element) {
	switch(sessionColor) {
		// purple
		case 0:
			element.style.color = darker_purple;
			break;
		// turqoise
		case 1:
			element.style.color = darker_turqoise;
			break;
		// blue
		case 2:
			element.style.color = darker_blue;
			break;
		// yellow
		case 3:
			element.style.color = darker_yellow;
			break;
		// red
		case 4:
			element.style.color = darker_red;
			break;
	}
}

export function hoverOutColor(element) {
	switch(sessionColor) {
		// purple
		case 0:
			element.style.color = purple;
			break;
		// turqoise
		case 1:
			element.style.color = turqoise;
			break;
		// blue
		case 2:
			element.style.color = blue;
			break;
		// yellow
		case 3:
			element.style.color = yellow;
			break;
		// red
		case 4:
			element.style.color = red;
			break;
	}
}

export function hoverInBG(element) {
	switch(sessionColor) {
		// purple
		case 0:
			element.style.backgroundColor = darker_purple;
			break;
		// turqoise
		case 1:
			element.style.backgroundColor = darker_turqoise;
			break;
		// blue
		case 2:
			element.style.backgroundColor = darker_blue;
			break;
		// yellow
		case 3:
			element.style.backgroundColor = darker_yellow;
			break;
		// red
		case 4:
			element.style.backgroundColor = darker_red;
			break;
	}
}

export function hoverOutBG(element) {
	switch(sessionColor) {
		// purple
		case 0:
			element.style.backgroundColor = purple;
			break;
		// turqoise
		case 1:
			element.style.backgroundColor = turqoise;
			break;
		// blue
		case 2:
			element.style.backgroundColor = blue;
			break;
		// yellow
		case 3:
			element.style.backgroundColor = yellow;
			break;
		// red
		case 4:
			element.style.backgroundColor = red;
			break;
	}
}

export function Btn() {
	var Btns = document.getElementsByClassName("button");
	switch(sessionColor) {
		// purple
		case 0:
			for (const i of Btns) {
				i.style.backgroundColor = purple;
				i.style.color = white;
			}
			break;
		// turqoise
		case 1:
			for (const i of Btns) {
				i.style.backgroundColor = turqoise;
				i.style.color = black;
			}
			break;
		// blue
		case 2:
			for (const i of Btns) {
				i.style.backgroundColor = blue;
				i.style.color = white;
			}
			break;
		// yellow
		case 3:
			for (const i of Btns) {
				i.style.backgroundColor = yellow;
				i.style.color = black;
			}
			break;
		// red
		case 4:
			for (const i of Btns) {
				i.style.backgroundColor = red;
				i.style.color = white;
			}
			break;
	}
}

export function colorsIndex() { //gets called when document ready
	var infoButtons = document.getElementsByClassName("info-button");

	// svg
	var undraw_svg_vytvoreni_webu = document.getElementById("undraw-svg-vytvoreni-webu");
	var undraw_svg_sprava_webu = document.getElementById("undraw-svg-sprava-webu");
	var undraw_svg_vytvoreni_marketingu = document.getElementById("undraw-svg-vytvoreni-marketingu");
	var undraw_svg_vytvoreni_znacky = document.getElementById("undraw-svg-vytvoreni-znacky");
	var undraw_svg_projekty_mlm = document.getElementById("undraw-svg-projekty-mlm");
	var undraw_svg_projekty_pruzkumy = document.getElementById("undraw-svg-projekty-pruzkumy");
	var undraw_svg_projekty_pohyb = document.getElementById("undraw-svg-projekty-pohyb");
	var undraw_svg_projekty_ostatni = document.getElementById("undraw-svg-projekty-ostatni");

	Btn();

	switch(sessionColor) {
		// purple
		case 0:
			for (const i of infoButtons) {
				i.style.color = purple;
			}

			undraw_svg_vytvoreni_webu.src = undrawSVG.purple_vytvoreni_webu;
			undraw_svg_sprava_webu.src = undrawSVG.purple_sprava_webu;
			undraw_svg_vytvoreni_marketingu.src = undrawSVG.purple_vytvoreni_marketingu;
			undraw_svg_vytvoreni_znacky.src = undrawSVG.purple_vytvoreni_znacky;
			undraw_svg_projekty_mlm.src = undrawSVG.purple_projekty_mlm;
			undraw_svg_projekty_pruzkumy.src = undrawSVG.purple_projekty_pruzkumy;
			undraw_svg_projekty_pohyb.src = undrawSVG.purple_projekty_pohyb;
			undraw_svg_projekty_ostatni.src = undrawSVG.purple_projekty_ostatni;
			break;
		// turqoise
		case 1:
			for (const i of infoButtons) {
				i.style.color = turqoise;
			}

			undraw_svg_vytvoreni_webu.src = undrawSVG.turqoise_vytvoreni_webu;
			undraw_svg_sprava_webu.src = undrawSVG.turqoise_sprava_webu;
			undraw_svg_vytvoreni_marketingu.src = undrawSVG.turqoise_vytvoreni_marketingu;
			undraw_svg_vytvoreni_znacky.src = undrawSVG.turqoise_vytvoreni_znacky;
			undraw_svg_projekty_mlm.src = undrawSVG.turqoise_projekty_mlm;
			undraw_svg_projekty_pruzkumy.src = undrawSVG.turqoise_projekty_pruzkumy;
			undraw_svg_projekty_pohyb.src = undrawSVG.turqoise_projekty_pohyb;
			undraw_svg_projekty_ostatni.src = undrawSVG.turqoise_projekty_ostatni;
			break;
		// blue
		case 2:
			for (const i of infoButtons) {
				i.style.color = blue;
			}

			undraw_svg_vytvoreni_webu.src = undrawSVG.blue_vytvoreni_webu;
			undraw_svg_sprava_webu.src = undrawSVG.blue_sprava_webu;
			undraw_svg_vytvoreni_marketingu.src = undrawSVG.blue_vytvoreni_marketingu;
			undraw_svg_vytvoreni_znacky.src = undrawSVG.blue_vytvoreni_znacky;
			undraw_svg_projekty_mlm.src = undrawSVG.blue_projekty_mlm;
			undraw_svg_projekty_pruzkumy.src = undrawSVG.blue_projekty_pruzkumy;
			undraw_svg_projekty_pohyb.src = undrawSVG.blue_projekty_pohyb;
			undraw_svg_projekty_ostatni.src = undrawSVG.blue_projekty_ostatni;
			break;
		// yellow
		case 3:
			for (const i of infoButtons) {
				i.style.color = yellow;
			}
			
			undraw_svg_vytvoreni_webu.src = undrawSVG.yellow_vytvoreni_webu;
			undraw_svg_sprava_webu.src = undrawSVG.yellow_sprava_webu;
			undraw_svg_vytvoreni_marketingu.src = undrawSVG.yellow_vytvoreni_marketingu;
			undraw_svg_vytvoreni_znacky.src = undrawSVG.yellow_vytvoreni_znacky;
			undraw_svg_projekty_mlm.src = undrawSVG.yellow_projekty_mlm;
			undraw_svg_projekty_pruzkumy.src = undrawSVG.yellow_projekty_pruzkumy;
			undraw_svg_projekty_pohyb.src = undrawSVG.yellow_projekty_pohyb;
			undraw_svg_projekty_ostatni.src = undrawSVG.yellow_projekty_ostatni;
			break;
		// red
		case 4:
			for (const i of infoButtons) {
				i.style.color = red;
			}

			undraw_svg_vytvoreni_webu.src = undrawSVG.red_vytvoreni_webu;
			undraw_svg_sprava_webu.src = undrawSVG.red_sprava_webu;
			//undraw_svg_vytvoreni_marketingu.src = undrawSVG.red_vytvoreni_marketingu;
			undraw_svg_vytvoreni_znacky.src = undrawSVG.red_vytvoreni_znacky;
/* 			undraw_svg_projekty_mlm.src = undrawSVG.red_projekty_mlm;
			undraw_svg_projekty_pruzkumy.src = undrawSVG.red_projekty_pruzkumy;
			undraw_svg_projekty_pohyb.src = undrawSVG.red_projekty_pohyb;
			undraw_svg_projekty_ostatni.src = undrawSVG.red_projekty_ostatni; */
			break;
	}
}

export function colors404() {
	const link = document.getElementsByTagName("A");
	const undraw_svg_404 = document.getElementById("undraw-svg-404");

	switch(sessionColor) {
		// purple
		case 0:
			undraw_svg_404.src = undrawSVG.purple_404;
			break;
		// turqoise
		case 1:
			undraw_svg_404.src = undrawSVG.turqoise_404;
			break;
		// blue
		case 2:
			undraw_svg_404.src = undrawSVG.blue_404;
			break;
		// yellow
		case 3:
			undraw_svg_404.src = undrawSVG.yellow_404;
			break;
		// red
		case 4:
			undraw_svg_404.src = undrawSVG.red_404;
			break;
	}
}

export function colorsKontakt() {
	const ikona = document.getElementById("kontaktIkona");

	switch(sessionColor) {
		// purple
		case 0:
			ikona.style.backgroundColor = purple;
			break;
		// turqoise
		case 1:
			ikona.style.backgroundColor = turqoise;
			ikona.style.color = black;
			break;
		// blue
		case 2:
			ikona.style.backgroundColor = blue;
			break;
		// yellow
		case 3:
			ikona.style.backgroundColor = yellow;
			ikona.style.color = black;
			break;
		// red
		case 4:
			ikona.style.backgroundColor = red;
			break;
	}

	Btn();
}