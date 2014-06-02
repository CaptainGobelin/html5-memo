$.loadCleofee = function(pwd) {
	$cleoDiv = $("div.cleoDiv");
	$cleoDiv.empty();
	var s = '<img id="cleoImg" class="shadow" src="sysPics/CleofeeOeilCentre-vide.svg"/>';
	s += '<img id="cleoEye" src="sysPics/OeilOuvertCleofee.svg">';
	s += '<img id="littleArrow" src="sysPics/FlecheBulle.svg">';
	s += '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="$.setCookie(\'intro\', \'true\', 1);document.location = \'levels.html\';"/>';
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