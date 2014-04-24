$.openPopUp = function() {
	var doc = document.getElementById('popUpSuccess');
	doc.setAttribute("class", "popUpBg");
	doc.setAttribute("style", "opacity:0.4;");
	doc = document.getElementById('popUpSuccessContent');
	doc.setAttribute("class", "popUpContent");
	doc.setAttribute("style", "opacity:1;");
	doc = document.getElementById('popUpContainer');
	doc.setAttribute("class", "centerXY");
	$.resizePopUp();
}

$.resizePopUp = function() {
	var h = $(window).height();
	var hPop = document.getElementById('popUpSuccessContent').offsetHeight;
	var doc = document.getElementById('popUpContainer');
	doc.setAttribute("style", 'margin-top:'+(h-hPop)/2+'px;height:'+(h-(h-hPop)/2)+'px;');
}