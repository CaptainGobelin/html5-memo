$.setCookie = function(cname,cvalue,exdays) {
var d = new Date();
d.setTime(d.getTime()+(exdays*24*60*60*1000));
var expires = "expires="+d.toGMTString();
document.cookie = cname + "=" + cvalue + "; " + expires;
}

$.getCookie = function(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++)
	  {
	  var c = ca[i].trim();
	  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "false";
}

$.deleteCookies = function() {
	document.cookie = 'color =; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	document.cookie = 'intro =; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	document.cookie = 'intro2 =; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	document.cookie = 'hidePwd =; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}