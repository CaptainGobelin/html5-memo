$.addBlur = function() {
	var doc = document.getElementById('menuSuccess');
	if (doc != null) {
		doc.setAttribute("class", "menuBg");
		doc.setAttribute("style", '-webkit-filter: grayscale(100%);');
	}
	var doc = document.getElementById('opacityFilter');
	if (doc != null) {
		doc.setAttribute("class", "menuBg");
		doc.setAttribute("style", 'opacity:0.2;');
	}
}

$.clearBlur = function() {
	var doc = document.getElementById('menuSuccess');
	if (doc != null) {
		doc.setAttribute("class", "");
		doc.setAttribute("style", "-webkit-filter: grayscale(0%);");
	}
	var doc = document.getElementById('opacityFilter');
	if (doc != null) {
		doc.setAttribute("class", "");
		doc.setAttribute("style", "opacity:0;");
	}
}

$.openMenuBar = function() {
	var doc = document.getElementById('menuBar');
	doc.setAttribute('class', 'leftMenuOpen');
	doc.setAttribute('onClick', '');
	$menuBar = $("p.leftMenuOpen");
    $menuBar.empty();
    var s = '<p class="center"><img class="logoMenu" src="sysPics/LogoSerrure.svg" style="margin-top:20%;width:100%;"></p>';
    var page = window.location.toString().split(new RegExp("[/]+", "g"));
    s += '<p class="menuButtons">';
    s += '<p class="centerMenu">';
    if ((page[page.length-1] == 'index.html') || (page[page.length-1] == '') || (page[page.length-1] == 'levels.html'))
    	s += '<img id="current" src="sysPics/ClefCurrentPage.svg" style="width:20%;height:auto;padding-bottom:2px;">';
    s += '<input class="menuInput" type="submit" value="Jouer" name="menuPlayButton" onClick=\'document.location = "levels.html";\'/></p>';
    s += '<p class="centerMenu">';
    if (page[page.length-1] == 'yak.html')
    	s+= '<img id="current" src="sysPics/ClefCurrentPage.svg" style="width:20%;height:auto;">';
    s += '<input class="menuInput" type="submit" value="Création" name="menuCreateButton" onClick=\'document.location = "yak.html";\'/></p>';
    s += '<p class="centerMenu"></p>';
    s += '<p class="centerMenu"><input class="menuInput" id="Options" type="submit" value="Options" name="menuCreateButton" onClick="$.openOptionsBar();"/></p>';
    s += '<p class="centerMenu">';
    if (page[page.length-1] == 'about.html')
    	s += '<img id="current" src="sysPics/ClefCurrentPage.svg" style="width:20%;height:auto;">';
    s += '<input class="menuInput" type="submit" value="A propos" name="menuCreateButton" onClick=\'document.location = "about.html";\'/></p>';
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
	doc.setAttribute('class', 'leftMenuClose mainBar');
	doc.setAttribute('onClick', '$.openMenuBar();$.openMenuBg();');
	$menuBar = $("p.leftMenuClose");
    $menuBar.empty();
    var s = '<img class="logoMenu" src="sysPics/Serrure.svg" style="margin-top:70%;width:40%;">';
    $menuBar.append(s);
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
	s += '<input type="button" value=" " class="colorButton colorRed" id="buttonSelected" onClick=\'$.setCookie("color","#aa2d22",1);$.resizeWindow();$.isSelected();\'/>';
	s += '<input type="button" value=" " class="colorButton colorOrange" onClick=\'$.setCookie("color","#f06025",1);$.resizeWindow();$.isSelected();\'/>';
	s += '<input type="button" value=" " class="colorButton colorYellow" onClick=\'$.setCookie("color","#ffd318",1);$.resizeWindow();$.isSelected();\'/>';
	s += '<input type="button" value=" " class="colorButton colorGreen" onClick=\'$.setCookie("color","#348b5d",1);$.resizeWindow();$.isSelected();\'/>';
	s += '<input type="button" value=" " class="colorButton colorBlue" onClick=\'$.setCookie("color","#2167a7",1);$.resizeWindow();$.isSelected();\'/>';
	s += '<input type="button" value=" " class="colorButton colorPurple" onClick=\'$.setCookie("color","#6a347f",1);$.resizeWindow();$.isSelected();\'/>';
	s += '<input type="button" value=" " class="colorButton colorGrey" onClick=\'$.setCookie("color","#4e5565",1);$.resizeWindow();$.isSelected();\'/>';
	s += '</p>';
	s += '<p class="leftMenu"></p>';
	s += '<p class="leftMenu">Aide de Cléofée:</p>';
	s += '<p class="leftMenu">';
	s += '<input type="button" value=" " class="colorButton colorNone button1" id="buttonSelected" onClick=\'$.setCookie("intro","false",1);$.isSelected();\'/> oui';
	s += '</p>';
	s += '<p class="leftMenu">'
	s += '<input type="button" value=" " class="colorButton colorNone button2" onClick=\'$.setCookie("intro","true",1);$.isSelected();\'/> non';
	s += '</p>';
	s += '<p class="leftMenu"></p>';
	s += '<p class="leftMenu">Menu création:</p>';
	s += '<p class="leftMenu">';
	s += '<input type="button" value=" " class="colorButton colorNone button3" onClick=\'$.setCookie("showPwd","true",1);$.isSelected();\'/><a style="font-size:70%;"> mot de passe masqué (●●●●●)</a>';
	s += '</p>';
	s += '<p class="leftMenu">'
	s += '<input type="button" value=" " class="colorButton colorNone button4" onClick=\'$.setCookie("showPwd","false",1);$.isSelected();\'/><a style="font-size:70%;"> mot de passe visible (salut)</a>';
	s += '</p>';
	s += '<p class="leftMenu"></p>';
	s += '<p class="leftMenu">Quitter si inactivité:</p>';
	s += '<p class="leftMenu">';
	s += '<input type="button" value=" " class="colorButton colorNone button5" onClick=\'$.setCookie("stopTimer","false",1);$.isSelected();\'/><a style="font-size:70%;"> oui</a>';
	s += '</p>';
	s += '<p class="leftMenu">'
	s += '<input type="button" value=" " class="colorButton colorNone button6" onClick=\'$.setCookie("stopTimer","true",1);$.isSelected();\'/><a style="font-size:70%;"> non</a>';
	s += '</p>';
	$optionsBar.append(s);
	doc = document.getElementById('Options');
	doc.setAttribute('onClick', '$.closeOptionsBar()');
	$.resizeWindow();
	$.isSelected();
}

$.closeOptionsBar = function() {
	var doc = document.getElementById("optionsBar");
	doc.setAttribute('class', 'leftMenuCloseB indexOptions');
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
	for (var i=0;i<4;i++) {
		var doc = document.getElementById('buttonSelected');
		if (doc != null)
			doc.setAttribute('id', '');
	}
	var intro = $.getCookie("intro");
	if (intro == "true") {
		var d = document.getElementsByClassName('button2')[0];
		d.setAttribute('id', 'buttonSelected');
	}
	else {
		var d = document.getElementsByClassName('button1')[0];
		d.setAttribute('id', 'buttonSelected');
	}
	var show = $.getCookie("showPwd");
	if (show == "true") {
		var d = document.getElementsByClassName('button3')[0];
		d.setAttribute('id', 'buttonSelected');
	}
	else {
		var d = document.getElementsByClassName('button4')[0];
		d.setAttribute('id', 'buttonSelected');
	}
	var stop = $.getCookie("stopTimer");
	if (stop == "true") {
		var d = document.getElementsByClassName('button6')[0];
		d.setAttribute('id', 'buttonSelected');
	}
	else {
		var d = document.getElementsByClassName('button5')[0];
		d.setAttribute('id', 'buttonSelected');
	}
	var color = $.getCookie("color");
	if (color == "#aa2d22") {
		var d = document.getElementsByClassName('colorRed')[0];
		d.setAttribute('id', 'buttonSelected');
	}
	else if (color == "#f06025") {
		var d = document.getElementsByClassName('colorOrange')[0];
		d.setAttribute('id', 'buttonSelected');
	}
	else if (color == "#ffd318") {
		var d = document.getElementsByClassName('colorYellow')[0];
		d.setAttribute('id', 'buttonSelected');
	}
	else if (color == "#348b5d") {
		var d = document.getElementsByClassName('colorGreen')[0];
		d.setAttribute('id', 'buttonSelected');
	}
	else if (color == "#2167a7") {
		var d = document.getElementsByClassName('colorBlue')[0];
		d.setAttribute('id', 'buttonSelected');
	}
	else if (color == "#6a347f") {
		var d = document.getElementsByClassName('colorPurple')[0];
		d.setAttribute('id', 'buttonSelected');
	}
	else if (color == "#4e5565") {
		var d = document.getElementsByClassName('colorGrey')[0];
		d.setAttribute('id', 'buttonSelected');
	}
	else {
		var d = document.getElementsByClassName('colorRed')[0];
		d.setAttribute('id', 'buttonSelected');
	}
}