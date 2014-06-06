$.loadForm = function(level) {
	$form = $("p.centerInput");
	$form.empty();
	var s = '<input class="submitLevel" type="button" name="generateButton" onClick="$.checkLevel(\''+level+'\')"/>';
	s += '<label id="wordLabel" for="wordForm" class="wordLabel">Quel est le mot encrypté dans ces dessins?</label>';
	s += '<input id="wordForm" onkeyup="$.checkLevel(\''+level+'\');" class="wordForm inputDefault" type="text" name="id" value="" size="16"/>';
	s += '<input type="button" class="buttonLevel reloadLevel" onClick="$.loadRandomLevel()"/>';
	s += '<input type="button" class="buttonLevel allLevels" onClick="$.showVignettes()"/>';
	$form.append(s);
}

$.loadRandomLevel = function() {
	var level = Math.floor(Math.random()*12);
	switch (level) {
		case 0:
			$.loadLevel1();
			break;
		case 1:
			$.loadLevel2();
			break;
		case 2:
			$.loadLevel3();
			break;
		case 3:
			$.loadLevel4();
			break;
		case 4:
			$.loadLevel5();
			break;
		case 5:
			$.loadLevel6();
			break;
		case 6:
			$.loadLevel7();
			break;
		case 7:
			$.loadLevel8();
			break;
		case 8:
			$.loadLevel9();
			break;
		case 9:
			$.loadLevel10();
			break;
		case 10:
			$.loadLevel11();
			break;
		case 11:
			$.loadLevel12();
			break;
		default:
			$.loadLevel1();
	}
}

$.loadLevel1 = function () {
	$picsDiv = $("div.picsDiv");
	$picsDiv.empty();
	var s = '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Mat.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Riz.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Eau.svg">';
	$picsDiv.append(s);
	$.loadForm('2');
	$.resizeWindow();
}

$.loadLevel2 = function () {
	$picsDiv = $("div.picsDiv");
	$picsDiv.empty();
	var s = '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Haie.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Toile.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_De.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Scie.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Oeufs.svg">';
	$picsDiv.append(s);
	$.loadForm('2');
	$.resizeWindow();
}

$.loadLevel3 = function () {
	$picsDiv = $("div.picsDiv");
	$picsDiv.empty();
	var s = '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Hache.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_The.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Aime.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Aile.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Cinq.svg">';
	$picsDiv.append(s);
	$.loadForm('3');
	$.resizeWindow();
}

$.loadLevel4 = function () {
	$picsDiv = $("div.picsDiv");
	$picsDiv.empty();
	var s = '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Geai.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Un.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_V.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Le.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Eau.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Haie.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_PasPied.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Toit.svg">';
	$picsDiv.append(s);
	$.loadForm('4');
	$.resizeWindow();
}

$.loadLevel5 = function () {
	$picsDiv = $("div.picsDiv");
	$picsDiv.empty();
	var s = '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Lave.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_I.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Haie.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_BehBelle.svg">';
	$picsDiv.append(s);
	$.loadForm('5');
	$.resizeWindow();
}

$.loadLevel6 = function () {
	$picsDiv = $("div.picsDiv");
	$picsDiv.empty();
	var s = '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Le.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Heure.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Re.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Eau.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Ze.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Eau.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Pli.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Mai.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Noeud.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Rond.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_PasPied.svg">';
	$picsDiv.append(s);
	$.loadForm('6');
	$.resizeWindow();
}

$.loadLevel7 = function () {
	$picsDiv = $("div.picsDiv");
	$picsDiv.empty();
	var s = '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Mai.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Houx.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Haie.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Don.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Cor.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Nid.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_BusCar3D.svg">';
	$picsDiv.append(s);
	$.loadForm('7');
	$.resizeWindow();
}

$.loadLevel8 = function () {
	$picsDiv = $("div.picsDiv");
	$picsDiv.empty();
	var s = '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_DitBlaMot.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Nez.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Eau.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_ChantCui.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_De.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Aile.svg">';
	$picsDiv.append(s);
	$.loadForm('8');
	$.resizeWindow();
}

$.loadLevel9 = function () {
	$picsDiv = $("div.picsDiv");
	$picsDiv.empty();
	var s = '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Raie.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Aile.svg">';
	$picsDiv.append(s);
	$.loadForm('9');
	$.resizeWindow();
}

$.loadLevel10 = function () {
	$picsDiv = $("div.picsDiv");
	$picsDiv.empty();
	var s = '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Nid.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Con.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Te.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_PasPied.svg">';
	$picsDiv.append(s);
	$.loadForm('10');
	$.resizeWindow();
}

$.loadLevel11 = function () {
	$picsDiv = $("div.picsDiv");
	$picsDiv.empty();
	var s = '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_PasPied.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Pied.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Riz.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Go.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Le.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Eau.svg">';
	$picsDiv.append(s);
	$.loadForm('11');
	$.resizeWindow();
}

$.loadLevel12 = function () {
	$picsDiv = $("div.picsDiv");
	$picsDiv.empty();
	var s = '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_Raie.svg">';
	s+= '<img id="img_0" class="shadow pic" src="pics/PhonemesDessins-TraitMimi3_BusCar3D.svg">';
	$picsDiv.append(s);
	$.loadForm('12');
	$.resizeWindow();
}