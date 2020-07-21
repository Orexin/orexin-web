  /*COOKIE NAME = COOKIE VALUE*/ 
  /*CookiesAllowed = allowedCookie*/ 

export function setCookie(cname,cvalue) { 
	document.cookie = cname + "=" + cvalue + ";";
  }

export function setTimedCookie(cname, cvalue, exdays){ //exdays in days
	var d = new Date();
  	d.setTime(d.getTime() + (exdays*24*60*60*1000));
  	var expires = "expires="+ d.toUTCString();
  	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
export function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }
  
  /*function to check whether are cookies allowed*/
  /*kinda dumb ya gotta store cookie about whether the user chosed not to use them or not xddd*/
export function checkCookie() {
	 allowedCookie=getCookie("CookiesAllowed");
	if (allowedCookie == true) {
	  console.log("Cookies are allowed.");
	} else {
		console.log("Cookies are denied and they need to be allowed. Please allow them.");
	   if (allowedCookie != "" && allowedCookie != null) {
		 setCookie("CookiesAllowed", allowedCookie);
		 //setTimedCookie(cname, cvalue, exdays)
	   }
	}
  }


/*! FOR POP UP WINDOW [CONSENT ABOUT COOKIES] !*/

var cookieName; //cookie name that we are searching for

export function allowCookie(){
	 var allowedCookie = true;
	setCookie(cookieName, allowedCookie);
	document.cookie = cookieName, allowedCookie;
	//alert("Soubory cookies používáme pro zlepšení našich služeb a pro správný průběh funkcí našeho webu")
	console.log("Cookies are now allowed -> cookie value:" +allowedCookie);
	console.log("true - allowed | false - denied");
  }
  //allow specific cookie

export function denyCookie(){
	var allowedCookie = false;
	setCookie(cookieName, allowedCookie);
	document.cookie = cookie, allowedCookie;
	console.log("Cookies are now denied -> cookie value:" +allowedCookie);
	console.log("true - allowed | false - denied");
  }
  //deny specific cookie

  /*for debug purposes only*/
export function getCurrentStateOfCookie(){
	var allowedCookie = getCookie(cookieName);
	alert("Current state of CookiesAllowed is:" + allowedCookie);	  
  }
  //so you can get the current (true of false) state of specific cookie
  

  /*! FOR POP UP WINDOW [CONSENT ABOUT COOKIES] !*/



  

