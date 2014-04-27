$.addBlur = function() {
	var doc = document.getElementById('popUpSuccess');
	if (doc != null) {
		doc.setAttribute("class", "popUpBg");
		doc.setAttribute("style", '-webkit-filter: blur(1px);');
	}
}

$.clearBlur = function() {
	var doc = document.getElementById('popUpSuccess');
	if (doc != null) {
		doc.setAttribute("class", "");
		doc.setAttribute("style", "-webkit-filter: blur(0px);");
	}
}