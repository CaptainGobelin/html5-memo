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

$.openMenuBar = function() {
	var doc = document.getElementById('menuBar');
	doc.setAttribute('class', 'leftMenuOpen');
	doc.setAttribute('onClick', '$.closeMenuBar();$.closePopUp();');
	$menuBar = $("p.leftMenuOpen");
    $menuBar.empty();
    var s = "<p>Menu</p>";
    s += '<p><input type="submit" value="Jouer" name="menuPlayButton" onClick=\'document.location = "levels.html";\'/></p>';
    s += '<p><input type="submit" value="Création" name="menuCreateButton" onClick=\'document.location = "yak.html";\'/></p>';
    $menuBar.append(s);
    $.addBlur();
}

$.closeMenuBar = function() {
	var doc = document.getElementById('menuBar');
	doc.setAttribute('class', 'leftMenuClose');
	doc.setAttribute('onClick', '$.openMenuBar();$.openPopUp();');
	$menuBar = $("p.leftMenuClose");
    $menuBar.empty();
    $.clearBlur();
}