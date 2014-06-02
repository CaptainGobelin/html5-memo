$.loadCleofeeAbout = function(pwd) {
	$cleoDiv = $("div.cleoDiv");
	$cleoDiv.empty();
	var s = '<img id="cleoImg" class="shadow" src="sysPics/CleofeeOeilCentre-vide.svg"/>';
	s += '<img id="cleoEye" src="sysPics/OeilOuvertCleofee.svg">';
	s += '<img id="littleArrow" src="sysPics/FlecheBulle.svg">';
	s += '<p class="cleoTip">';
	s += 'Je vois que vous apprécieriez d’en apprendre plus!<br/>';
	s += '<a class="toColor">Quel sujet vous intéresse?</a><br/><br/>';
	s += '• <a onClick="$.loadVersus1();">Créer un mot de passe fort : sécurité versus facilité</a><br/>';
	s += '</p>';
	$cleoDiv.append(s);
	$.menuColor();
}

$.loadVersus1 = function() {
	$cleoDiv = $("div.cleoDiv");
	$cleoDiv.empty();
	var s = '<img id="cleoImg" class="shadow" src="sysPics/CleofeeOeilCentre-vide.svg"/>';
	s += '<img id="cleoEye" src="sysPics/OeilOuvertCleofee.svg">';
	s += '<img id="littleArrow" src="sysPics/FlecheBulle.svg">';
	s += '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadVersus2();"/>';
	s += '<p class="cleoTip">';
	s += 'Aujourd’hui, nous avons tous <a class="toColor">besoin</a> d’identifiants, de mots ';
	s += 'de passe ou encore de codes dans <a class="toColor">la vie de tous ';
	s += 'les jours</a>, autant pour les loisirs que pour le travail.<br/><br/>';
	s += 'On estime qu’en moyenne une personne peut ';
	s += 'avoir l’usage d’<a class="toColor">une dizaine de services dont l’accès ';
	s += 'nécessite un mot de passe</a>.';
	s += '</p>';
	$cleoDiv.append(s);
	$.menuColor();
}