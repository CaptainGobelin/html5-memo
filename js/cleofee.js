$.loadCleofee = function(pwd) {
	$cleoDiv = $("div.cleoDiv");
	$cleoDiv.empty();
	var s = '<img id="cleoImg" class="shadow" src="sysPics/CleofeeOeilCentre-vide.svg"/>';
	s += '<img id="cleoEye" src="sysPics/OeilOuvertCleofee.svg">';
	s += '<img id="littleArrow" src="sysPics/FlecheBulle.svg">';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="document.location = \'index.html\';"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadSpeech1(\''+pwd+'\');"/>';
	s += '<p class="cleoTip">';
	s += 'Bonjour, je m\'appelle Cléofée.<br/><br/>';
	s += 'Vous venez d’arriver dans un lieu de méditation.</br>';
	s += 'Un lieu où l’on forge des <a class="toColor">mots de passe uniques</a> ';
	s += 'et ingénieux, comme des clés.';
	s += '</p>';
	$cleoDiv.append(s);
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
		s += 'Portant je l\' avais choisi <a class="toColor">compliqué</a>, vous êtes <a class="toColor">chanceux</a> !';
	}
	$cleoSpeech.append(s);
	$.menuColor();
}