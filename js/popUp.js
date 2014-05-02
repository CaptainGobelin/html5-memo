$.openPopUp = function() {
	var doc = document.getElementById('popUpSuccessContent');
	if (doc != null) {
		doc.setAttribute("class", "popUpContent");
		doc.setAttribute("style", "opacity:1;");
	}
	doc = document.getElementById('popUpContainer');
	if (doc != null)
		doc.setAttribute("class", "centerXY");
	$.resizePopUp();
}

$.closePopUp = function() {
	var doc = document.getElementById('popUpSuccessContent');
	if (doc != null) {
		doc.setAttribute("class", "");
		doc.setAttribute("style", "opacity:0;");
	}
	doc = document.getElementById('popUpContainer');
	if (doc != null)
		doc.setAttribute("class", "");
	$.resizePopUp();
}

$.resizePopUp = function() {
	var h = $(window).height();
	var newHPop = Math.min((h*9/10), 300);
	var hPop = document.getElementById('popUpSuccessContent').offsetHeight;
	var doc = document.getElementById('popUpContainer');
	doc.setAttribute("style", 'margin-top:'+(h-newHPop)/2+'px;height:'+newHPop+'px;');
}