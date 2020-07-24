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
const black = "#000000";
const white = "#ffffff";

var footer = document.getElementsByTagName("footer");
var button = document.getElementById("button");

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

export function colorsIndex(color) { //gets called when document ready
	var infoButton = document.getElementsByClassName("info-button");

	// svg
	var undraw_svg_vytvoreni_webu = document.getElementById("undraw-svg-vytvoreni-webu");
	var undraw_svg_sprava_webu = document.getElementById("undraw-svg-sprava-webu");
	var undraw_svg_vytvoreni_marketingu = document.getElementById("undraw-svg-vytvoreni-marketingu");
	var undraw_svg_vytvoreni_znacky = document.getElementById("undraw-svg-vytvoreni-znacky");
	var undraw_svg_projekty_mlm = document.getElementById("undraw-svg-projekty-mlm");
	var undraw_svg_projekty_pruzkumy = document.getElementById("undraw-svg-projekty-pruzkumy");
	var undraw_svg_projekty_pohyb = document.getElementById("undraw-svg-projekty-pohyb");
	var undraw_svg_projekty_ostatni = document.getElementById("undraw-svg-projekty-ostatni");

	switch(color) {
		// purple
		case 0:
			button.style.backgroundColor = purple;
			button.style.color = white;
			infoButton.style.color = purple;
			infoButton.style.background = purple;
		
			for (i = 0; i < infoButton.length; i++) {
				infoButton[i].style.color = purple;
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
			button.style.backgroundColor = turqoise;
			button.style.color = black;    
		
			for (i = 0; i < infoButton.length; i++) {
				infoButton[i].style.color = turqoise;
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
			button.style.backgroundColor = blue;  
			infoButton.style.color = blue;
			infoButton.style.backgroundColor = darker_blue;
		
			for (i = 0; i < infoButton.length; i++) {
				infoButton[i].style.color = blue;
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
			button.style.backgroundColor = yellow;  
			button.style.color = black;
			infoButton.style.color = yellow;
			infoButton.style.backgroundColor = yellow;
		
			for (i = 0; i < infoButton.length; i++) {
				infoButton[i].style.color = yellow;
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
			button.style.backgroundColor = red;  
			button.style.color = white; 
			infoButton.style.color = red;
			infoButton.style.backgroundColor = red;
		
			for (i = 0; i < infoButton.length; i++) {
				infoButton[i].style.color = red;
			}

			undraw_svg_vytvoreni_webu.src = undrawSVG.red_vytvoreni_webu;
			undraw_svg_sprava_webu.src = undrawSVG.red_sprava_webu;
			undraw_svg_vytvoreni_marketingu.src = undrawSVG.red_vytvoreni_marketingu;
			undraw_svg_vytvoreni_znacky.src = undrawSVG.red_vytvoreni_znacky;
			undraw_svg_projekty_mlm.src = undrawSVG.red_projekty_mlm;
			undraw_svg_projekty_pruzkumy.src = undrawSVG.red_projekty_pruzkumy;
			undraw_svg_projekty_pohyb.src = undrawSVG.red_projekty_pohyb;
			undraw_svg_projekty_ostatni.src = undrawSVG.red_projekty_ostatni;
			break;
	}
}

export function infoButtonHover (color) {
	var infoButton = document.getElementsByClassName("info-button");

	for (i = 0; i < infoButton.length; i++) {
		infoButton[i].style.color = color;
	}
}

export function colors404(color) {
	const link = document.getElementsByTagName("A");
	const undraw_svg_404 = document.getElementById("undraw-svg-404");

	switch(color) {
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