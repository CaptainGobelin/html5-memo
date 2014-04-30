$.addBlur = function() {
	var doc = document.getElementById('menuSuccess');
	if (doc != null) {
		doc.setAttribute("class", "menuBg");
		doc.setAttribute("style", '-webkit-filter: blur(1px);');
	}
}

$.clearBlur = function() {
	var doc = document.getElementById('menuSuccess');
	if (doc != null) {
		doc.setAttribute("class", "");
		doc.setAttribute("style", "-webkit-filter: blur(0px);");
	}
}

$.openMenuBar = function() {
	var doc = document.getElementById('menuBar');
	doc.setAttribute('class', 'leftMenuOpen');
	doc.setAttribute('onClick', '$.closeMenuBar();$.closeMenuBg();');
	$menuBar = $("p.leftMenuOpen");
    $menuBar.empty();
    var s = "<p>Menu</p>";
    s += '<p class="center centerMenu"><input class="menuInput" type="submit" value="Jouer" name="menuPlayButton" onClick=\'document.location = "levels.html";\'/></p>';
    s += '<p class="center centerMenu"><input class="menuInput" type="submit" value="Création" name="menuCreateButton" onClick=\'document.location = "yak.html";\'/></p>';
    $menuBar.append(s);
    $.addBlur();
}

$.closeMenuBar = function() {
	var doc = document.getElementById('menuBar');
	doc.setAttribute('class', 'leftMenuClose');
	doc.setAttribute('onClick', '$.openMenuBar();$.openMenuBg();');
	$menuBar = $("p.leftMenuClose");
    $menuBar.empty();
    $.clearBlur();
}

$.openMenuBg = function() {
	var doc = document.getElementById('menuSuccessContent');
	if (doc != null) {
		doc.setAttribute("class", "menuContent");
		doc.setAttribute("style", "opacity:1;");
	}
	doc = document.getElementById('menuContainer');
	if (doc != null)
		doc.setAttribute("class", "centerXY");
}

$.closeMenuBg = function() {
	var doc = document.getElementById('menuSuccessContent');
	if (doc != null) {
		doc.setAttribute("class", "");
		doc.setAttribute("style", "opacity:0;");
	}
	doc = document.getElementById('menuContainer');
	if (doc != null)
		doc.setAttribute("class", "");
}