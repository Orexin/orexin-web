import * as undrawSVG from './import-svg';
import * as cookie from './cookieScript';

var blue = "#43D5FA";
var darker_blue = "#2f95af";
var red = "#FF5757";
var darker_red = "#b33d3d";
var yellow = "#FFFF47";
var darker_yellow = "#e1e142";
var purple = "#8555E4";
var darker_purple = "#734bc2";
var turqoise = "#50FFB1";
var darker_turqoise = "#47db98";
var black = "#000000";
var white = "#ffffff";

var footer = document.getElementsByTagName("footer");
var button = document.getElementById("button");

//var random = Math.floor(Math.random() * 5);
//console.log(random);

export function colorsIndex() {
	var infoButton = document.getElementById("info-button");

	// svg
	var undraw_svg_vytvoreni_webu = document.getElementById("undraw-svg-vytvoreni-webu");
	var undraw_svg_sprava_webu = document.getElementById("undraw-svg-sprava-webu");
	var undraw_svg_vytvoreni_marketingu = document.getElementById("undraw-svg-vytvoreni-marketingu");
	var undraw_svg_vytvoreni_znacky = document.getElementById("undraw-svg-vytvoreni-znacky");
	var undraw_svg_projekty_mlm = document.getElementById("undraw-svg-projekty-mlm");
	var undraw_svg_projekty_pruzkumy = document.getElementById("undraw-svg-projekty-pruzkumy");
	var undraw_svg_projekty_pohyb = document.getElementById("undraw-svg-projekty-pohyb");
	var undraw_svg_projekty_ostatni = document.getElementById("undraw-svg-projekty-ostatni");

	var lastCookie = cookie.getCookie('sessionColor');
		if(lastCookie == " "){
			cookie.setCookie('sessionColor', ' ');
			console.log('SessionColor cookie has been created.');
		}
		else{
			var colorAsNumber = Math.floor(Math.random() * 5);
			if(colorAsNumber == lastCookie){
				colorAsNumber += 1;
				colorAsNumber = Math.abs(colorAsNumber + 1);
				cookie.setCookie('sessionColor', colorAsNumber);
			}
			
		}

	switch(colorAsNumber) {
		// purple
		case 0:
			button.style.backgroundColor = purple;
			button.style.color = white;
			infoButton.style.color = purple;
			infoButton.style.background = purple;

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
			infoButton.style.color = turqoise;
			infoButton.style.backgroundColor = darker_turqoise;

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