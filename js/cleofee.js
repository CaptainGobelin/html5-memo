$.loadCleofee = function(pwd) {
	$cleoDiv = $("div.cleoDiv");
	$cleoDiv.empty();
	var s = '<img id="cleoImg" class="shadow" src="sysPics/CleofeeOeilCentre-vide.svg"/>';
	s += '<img id="cleoEye" src="sysPics/OeilOuvertCleofee.svg">';
	s += '<img id="littleArrow" src="sysPics/FlecheBulle.svg">';
	s += '<p class="cleoTip">';
	s += 'Bonjour, je m\'appelle Cléofée.<br/><br/>';
	s += 'Vous venez d’arriver dans un lieu de méditation.</br>';
	s += 'Un lieu où l’on forge des <a class="toColor">mots de passe uniques</a> ';
	s += 'et ingénieux, comme des clés.';
	s += '</p>';
	$cleoDiv.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="$.setCookie(\'intro\', \'true\', 1);document.location = \'levels.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="document.location = \'index.html\';"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadSpeech1(\''+pwd+'\');"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadSpeech1 = function(pwd) {
	var d = document.getElementById('prev');
	d.setAttribute('onClick', '$.loadCleofee(\''+pwd+'\');');
	d = document.getElementById('next');
	d.setAttribute('onClick', '$.loadSpeech2(\''+pwd+'\');');
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Je vois que vous avez <a class="toColor">deviné</a> mon mot de passe !<br/>';
	if ($.checkPassword(pwd) == false) {
		s += 'Je l\'ai choisi simple exprès, comme <a class="toColor">contre-exemple</a>.';
	}
	else {
		s += 'Portant je l\' avais choisi <a class="toColor">compliqué</a>, vous êtes <a class="toColor">chanceux</a> !';
	}
	$cleoSpeech.append(s);
	$.menuColor();
}

$.loadSpeech2 = function(pwd) {
	var d = document.getElementById('prev');
	d.setAttribute('onClick', '$.loadSpeech1(\''+pwd+'\');');
	d = document.getElementById('next');
	d.setAttribute('onClick', '$.loadSpeech3(\''+pwd+'\');');
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '';
	if ($.checkPassword(pwd) == false) {
		s += 'Pour compliquer la tâche d’un pirate, mon mot de ';
		s += 'passe devrait comporter au moins <a class="toColor">8 caractères</a> de ';
		s += '<a class="toColor">types différents</a> : minuscules, majuscules, chiffres, symboles…';
	}
	else {
		s += 'Pour rendre la tâche plus difficile à un pirate, ';
		s += 'mon mot de passe comporte plus de <a class="toColor">8 caractères</a> de ';
		s += '<a class="toColor">types différents</a>: minuscules, majuscules, chiffres, symboles…';
	}
	$cleoSpeech.append(s);
	$.menuColor();
}

$.loadSpeech3 = function(pwd) {
	var d = document.getElementById('prev');
	d.setAttribute('onClick', '$.loadSpeech2(\''+pwd+'\');');
	d = document.getElementById('next');
	d.setAttribute('onClick', '$.loadSpeech4(\''+pwd+'\');');
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'La <a class="toColor">longueur</a> est la clé d’un mot de passe fort : à partir de ';
	s += '20 caractères, il garantit une bonne sécurité, ';
	s += 'les variations de types ne sont plus indispensables.';
	$cleoSpeech.append(s);
	$.menuColor();
}

$.loadSpeech4 = function(pwd) {
	var d = document.getElementById('prev');
	d.setAttribute('onClick', '$.loadSpeech3(\''+pwd+'\');');
	d = document.getElementById('next');
	d.setAttribute('onClick', '$.loadSpeech5(\''+pwd+'\');');
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'On parle d’un <a class="toColor">trousseau de mots</a> de passe.</br></br>';
	s += 'En effet, clé et clavier ont une racine commune: ';
	s += '« clavis » en latin. Écrire un mot de passe ';
	s += 'sur un clavier revient à tourner une clé dans la serrure ';
	s += 'd’un coffre fort.';
	$cleoSpeech.append(s);
	$.menuColor();
}

$.loadSpeech5 = function(pwd) {
	var d = document.getElementById('prev');
	d.setAttribute('onClick', '$.loadSpeech4(\''+pwd+'\');');
	d = document.getElementById('next');
	d.setAttribute('onClick', '$.loadSpeech6(\''+pwd+'\');');
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Dans un trousseau, il y a plusieurs clés, qu’il ne faut';
	s += 'pas perdre. Vous allez devoir les mémoriser. Pour cela, ';
	s += 'je vais vous donner des <a class="toColor">clés mnémotechniques</a> !';
	$cleoSpeech.append(s);
	$.menuColor();
}

$.loadSpeech6 = function(pwd) {
	var d = document.getElementById('prev');
	d.setAttribute('onClick', '$.loadSpeech5(\''+pwd+'\');');
	d = document.getElementById('next');
	d.setAttribute('onClick', '$.setCookie("intro", "true", 1);document.location = \'levels.html\';');
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Comme vous avez deviné mon mot de passe, ';
	s += 'je dois le <a class="toColor">changer</a>. Pendant ce temps, je vous laisse ';
	s += 'découvrir la suite…';
	$cleoSpeech.append(s);
	$.menuColor();
}

$.loadCleofeeCreation = function() {
	var c = $.getCookie("intro2");
	//if (c == "true") {
	if (true) {
		$.loadCreation();
		$.initCreationScripts();
		return;
	}
	$cleoDiv = $("div.cleoDiv");
	$cleoDiv.empty();
	var s = '<img id="cleoImg" class="shadow" src="sysPics/CleofeeOeilCentre-vide.svg"/>';
	s += '<img id="cleoEye" src="sysPics/OeilOuvertCleofee.svg">';
	s += '<img id="littleArrow" src="sysPics/FlecheBulle.svg">';
	s += '<p class="cleoTip">';
	s += 'Je vois que la lecture des rébus n\'a plus de secrets<br/>';
	s += 'pour vous!<br/></br>';
	s += 'Que diriez-vous de <a class="toColor">créer les vôtres</a>?';
	s += '</p>';
	$cleoDiv.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="$.setCookie(\'intro2\', \'true\', 1);document.location = \'yak.html\';"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadSpeechCreation1();"/>';
	$cleoInput.append(s);
	$.resizeWindow();
}

$.loadSpeechCreation1 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Le rébus est un bon moyen d\'<a class="toColor">exercer votre mémoire</a><br/>';
	s += 'autour d\'un mot de passe.<br/><br/>';
	s += 'Pendant que vous déchiffrez les dessins qui forment<br/>';
	s += 'votre rébus, plusieurs de <a class="toColor">vos sens</a> sont en éveil.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="$.setCookie(\'intro2\', \'true\', 1);document.location = \'yak.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadCleofeeCreation();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadSpeechCreation2();"/>';
	$cleoInput.append(s);
	$.resizeWindow();
}

$.loadSpeechCreation2 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'La vue avec les formes et les couleurs, l\'ouïe<br/>';
	s += 'avec la phonétique, la mémoire à travers la langue<br/>';
	s += 'et le texte, tout ces sens sont autant de <a class="toColor">portes</a><br/>';
	s += '<a class="toColor">d\'entrée</a> vers vos souvenirs par <a class="toColor">association d\'idées</a>.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="$.setCookie(\'intro2\', \'true\', 1);document.location = \'yak.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadSpeechCreation1();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadSpeechCreation3();"/>';
	$cleoInput.append(s);
	$.resizeWindow();
}

$.loadSpeechCreation3 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'La difficulté réside dans le fait de <a class="toColor">devoir retenir</a><br/>';
	s += '<a class="toColor">différents mots de passe</a> (un pour chaque compte),<br/>';
	s += 'la décomposition sous forme de rébus peut donc vous<br/>';
	s += 'permettre de concevoir un <a class"toColor">système de création</a> de<br/>';
	s += 'nouveaux mots de passe qui vous correspond et vous aide<br/>';
	s += 'à mémoriser.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="$.setCookie(\'intro2\', \'true\', 1);document.location = \'yak.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadSpeechCreation2();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadSpeechCreation4();"/>';
	$cleoInput.append(s);
	$.resizeWindow();
}

$.loadSpeechCreation4 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Quelle est votre forme préférée de mémorisation?<br/>';
	s += 'Allez-vous <a class="toColor">créer des variantes</a> phonétiques, visuelles,<br/>';
	s += 'ou littéraires?<br/><br/>';
	s += '<a class"toColor">Changez une partie</a> de votre mot de passe ou<br/>';
	s += '<a class="toColor">remplacez l\'une des images</a> par une autre de votre<br/>';
	s += 'choix dans la bibliothèque simplement en la<br/>';
	s += 'sélectionnant!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="$.setCookie(\'intro2\', \'true\', 1);document.location = \'yak.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadSpeechCreation3();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadSpeechCreation5();"/>';
	$cleoInput.append(s);
	$.resizeWindow();
}

$.loadSpeechCreation5 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Quelle est votre forme préférée de mémorisation?<br/>';
	s += 'Retrouvez moi dans la section "À propos" pour des conseils<br/>';
	s += 'pertinents afin de <a class"toColor">choisir un bon mot de passe</a>!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="$.setCookie(\'intro2\', \'true\', 1);document.location = \'yak.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadSpeechCreation3();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.setCookie(\'intro2\', \'true\', 1);$.loadCreation();$.initCreationScripts();"/>';
	$cleoInput.append(s);
	$.resizeWindow();
}

$.loadCreation = function() {
	$mainDiv = $("div#menuSuccess");
	$mainDiv.empty();
	var s = '		<div class="centerInput">';
	s +=	'			<label id="login_avs" for="word" style="font-style:italic;">Transcription du rébus:</label>';
	s +=	'			<input class="hideButton firstLineButton" type="button"/>';
	s +=	'			<input id="checkButton" class="checkPwdButton firstLineButton" type="button"/>';
	s +=	'			<input id="wordForm" onkeydown="if (event.keyCode == 13) {$.wordWithPics();$.checkPassword();}" class="wordForm inputDefault creationInput" type="text" name="id" value="" size="16"/>';
	s +=	'		</div>';
	s +=	'		<div id="pwdTip" class="pwdTip pwdTipClose">';
	s +=	'		<a class="toColor">Attention:</a><br/>';
	s +=	'		Votre mot de passe est<br/>';
	s +=	'		trop simple! Pensez à ajouter<br/>';
	s +=	'		des <a class="toColor">chiffres</a> et des <a class="toColor">caractères</a><br/>';
	s +=	'		<a class="toColor">spéciaux</a>, ou alors à le<br/>';
	s +=	'		<a class="toColor">rallonger</a> par exemple en choi-<br/>';
	s +=	'		sissant une phrase entière.<br/>';
	s +=	'		</div>';
	s +=	'		<p style="height:3%;margin:0%;"></p>';
	s +=	'		<div id="picsDiv" class="picsDiv"><img class="toPlace"></div>';
	s +=	'		<p class="centerInput chooseLabel">';
	s +=	'			<label style="font-style:italic;">Bibliothèque de dessins (glissez-déposez les dessins pour les ajouter):</label>';
	s +=	'		</p>';
	s +=	'<div id="chooseImage" class="chooseImage">';
	s +=	'			<input type="button" id="prevPics" class="arrowButton" onClick="$.loadListPics(1);$.resizeWindow();"/>';
	s +=	'			<input type="button" id="nextPics" class="arrowButton" onClick="$.loadListPics(19);$.resizeWindow();"/>';
	s +=	'			<img id="list_0" class="listPic drg" src="pics/TraitMimiPNG/PhonemesDessins-TraitMimi3_Mat.png">';
	s +=	'			<img id="list_1" class="listPic drg" src="pics/TraitMimiPNG/PhonemesDessins-TraitMimi3_Riz.png">';
	s +=	'			<img id="list_2" class="listPic drg" src="pics/TraitMimiPNG/PhonemesDessins-TraitMimi3_Riz.png">';
	s +=	'			<img id="list_3" class="listPic drg" src="pics/TraitMimiPNG/PhonemesDessins-TraitMimi3_Riz.png">';
	s +=	'			<img id="list_4" class="listPic drg" src="pics/TraitMimiPNG/PhonemesDessins-TraitMimi3_Riz.png">';
	s +=	'			<img id="list_5" class="listPic drg" src="pics/TraitMimiPNG/PhonemesDessins-TraitMimi3_Riz.png">';
	s +=	'			<img id="list_6" class="listPic drg" src="pics/TraitMimiPNG/PhonemesDessins-TraitMimi3_Riz.png">';
	s +=	'			<img id="list_7" class="listPic drg" src="pics/TraitMimiPNG/PhonemesDessins-TraitMimi3_Riz.png">';
	s +=	'			<img id="list_8" class="listPic drg" src="pics/TraitMimiPNG/PhonemesDessins-TraitMimi3_Riz.png">';
	s +=	'			<img id="list_9" class="listPic drg" src="pics/TraitMimiPNG/PhonemesDessins-TraitMimi3_Riz.png">';
	s +=	'			<br/>';
	s +=	'			<a id="label_0" class="listLabel">Test</a>';
	s +=	'			<a id="label_1" class="listLabel">Test</a>';
	s +=	'			<a id="label_2" class="listLabel">Test</a>';
	s +=	'			<a id="label_3" class="listLabel">Test</a>';
	s +=	'			<a id="label_4" class="listLabel">Test</a>';
	s +=	'			<a id="label_5" class="listLabel">Test</a>';
	s +=	'			<a id="label_6" class="listLabel">Test</a>';
	s +=	'			<a id="label_7" class="listLabel">Test</a>';
	s +=	'			<a id="label_8" class="listLabel">Test</a>';
	s +=	'			<a id="label_9" class="listLabel">Test</a>';
	s +=	'		</div>';
	$mainDiv.append(s);
}

$.initCreationScripts = function() {
	$.resizeWindow();
	$.loadListPics(10);
	$('#chooseImage .drg').draggable({
	start: function(event, ui) {
		ui.helper.data('dropped', false);
		$.newPic($(this).attr('myIndex'));
		$.resizePics();
	},
	stop: function(event, ui) {
		if (ui.helper.data('dropped') == false) {
			$.newPicDoneDef();
			$.resizePics();
		}
	},
		revert: true, helper: "clone", containement: '#menuSuccess', scroll:false,
		cursorAt:{top:56,left:56}
	});
	$('#picsDiv').droppable({
		accept: "#chooseImage .drg",
		drop: function(event, ui) {
			ui.helper.data('dropped', true);
			var old = $.findPic(window.event.clientX, window.event.clientY);
			$.newPicDone(old[0], old[1]);
			$.resizePics();
			$.wordFromPics();
		},
		out: function(event, ui) {
			ui.helper.data('dropped', false);
		},
		over: function(event, ui) {
			ui.helper.data('dropped', true);
		}
	});
	$('#chooseImage').droppable({
		accept: "#picsDiv .pic",
		drop: function(event, ui) {
			$(ui.draggable).remove();
			$.newPic(0);
			$.newPicDoneDef();
			$.removeLast();
			$.resizePics();
			$.wordFromPics();
		}
  });
}