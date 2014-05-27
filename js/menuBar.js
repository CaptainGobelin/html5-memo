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
	doc.setAttribute('onClick', '');
	$menuBar = $("p.leftMenuOpen");
    $menuBar.empty();
    var s = '<p class="center"><img class="logoMenu" src="sysPics/LogoSerrure.svg" style="width:100%;"></p>';
    s += '<p class="menuButtons">';
    s += '<p class="centerMenu"><input class="menuInput" type="submit" value="Jouer" name="menuPlayButton" onClick=\'document.location = "levels.html";\'/></p>';
    s += '<p class="centerMenu"><input class="menuInput" type="submit" value="Création" name="menuCreateButton" onClick=\'document.location = "yak.html";\'/></p>';
    s += '<p class="centerMenu"></p>';
    s += '<p class="centerMenu"><input class="menuInput" id="Options" type="submit" value="Options" name="menuCreateButton" onClick="$.openOptionsBar();"/></p>';
    s += '<p class="centerMenu"><input class="menuInput" type="submit" value="A propos" name="menuCreateButton"/></p>';
    s += '<p class="centerMenu"></p>';
    s += '<p class="centerMenu"><input class="menuInput" type="submit" value="Quitter" name="menuCreateButton" onClick=\'$.deleteCookies();document.location = "index.html";\'/></p>';
    s += '</p>';
    $menuBar.append(s);
    $.addBlur();
    $.resizeWindow();
    doc = document.getElementById('menuSuccess');
    doc.setAttribute('onClick', '$.closeOptionsBar();$.closeMenuBar();$.closeMenuBg();');
}

$.closeMenuBar = function() {
	var doc = document.getElementById('menuBar');
	doc.setAttribute('class', 'leftMenuClose');
	doc.setAttribute('onClick', '$.openMenuBar();$.openMenuBg();');
	$menuBar = $("p.leftMenuClose");
    $menuBar.empty();
    $.clearBlur();
    doc = document.getElementById('menuSuccess');
    doc.setAttribute('onClick', '');
}

$.openOptionsBar = function() {
	var doc = document.getElementById("optionsBar");
	doc.setAttribute('class', 'optionsBarOpen');
	$optionsBar = $("p.optionsBarOpen");
	$optionsBar.empty();
	var s = '<p class="leftMenu">Couleur favorite:</p>';
	s += '<p class="leftMenu">';
	s += '<input type="button" value=" " class="colorButton colorRed" onClick=\'$.setCookie("color","#aa2d22",1);$.resizeWindow();\'/>';
	s += '<input type="button" value=" " class="colorButton colorOrange" onClick=\'$.setCookie("color","#f06025",1);$.resizeWindow();\'/>';
	s += '<input type="button" value=" " class="colorButton colorYellow" onClick=\'$.setCookie("color","#ffd318",1);$.resizeWindow();\'/>';
	s += '<input type="button" value=" " class="colorButton colorGreen" onClick=\'$.setCookie("color","#348b5d",1);$.resizeWindow();\'/>';
	s += '<input type="button" value=" " class="colorButton colorBlue" onClick=\'$.setCookie("color","#2167a7",1);$.resizeWindow();\'/>';
	s += '<input type="button" value=" " class="colorButton colorPurple" onClick=\'$.setCookie("color","#6a347f",1);$.resizeWindow();\'/>';
	s += '<input type="button" value=" " class="colorButton colorGrey" onClick=\'$.setCookie("color","#4e5565",1);$.resizeWindow();\'/>';
	s += '</p>';
	s += '<p class="leftMenu"></p>';
	s += '<p class="leftMenu">Aide de Cléofée:</p>';
	s += '<p class="leftMenu">';
	s += '<input type="button" value=" " class="colorButton colorNone" onClick=\'$.setCookie("intro","false",1);\'/> oui';
	s += '</p>';
	s += '<p class="leftMenu">'
	s += '<input type="button" value=" " class="colorButton colorNone" onClick=\'$.setCookie("intro","true",1);\'/> non';
	s += '</p>';
	s += '<p class="leftMenu"></p>';
	s += '<p class="leftMenu">Menu création:</p>';
	s += '<p class="leftMenu">';
	s += '<input type="button" value=" " class="colorButton colorNone" onClick=\'$.setCookie("intro","false",1);\'/><a style="font-size:70%;"> mot de passe masqué (●●●●●)</a>';
	s += '</p>';
	s += '<p class="leftMenu">'
	s += '<input type="button" value=" " class="colorButton colorNone" onClick=\'$.setCookie("intro","true",1);\'/><a style="font-size:70%;"> mot de passe visible (salut)</a>';
	s += '</p>';
	$optionsBar.append(s);
	doc = document.getElementById('Options');
	doc.setAttribute('onClick', '$.closeOptionsBar()');
	$.resizeWindow();
	$.isSelected();
}

$.closeOptionsBar = function() {
	var doc = document.getElementById("optionsBar");
	doc.setAttribute('class', 'leftMenuClose indexOptions');
	$optionsBar = $("p#optionsBar");
	$optionsBar.empty();
	doc = document.getElementById('Options');
	doc.setAttribute('onClick', '$.openOptionsBar()');
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

$.isSelected = function() {
	var doc = document.getElementById('buttonSelected');
	d.setAttribute('id', '');
	var color = $.getCookie("color");
	if (color == "#aa2d22") {
		var d = document.getElementsByClassName()[0];
		d.setAttribute('id', 'buttonSelected');
		return;
	}
	return "";
}