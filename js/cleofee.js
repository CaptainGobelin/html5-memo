$.loadCleofee = function(pwd) {
	$cleoDiv = $("div.cleoDiv");
	$cleoDiv.empty();
	var s = '<img id="cleoImg" class="shadow" src="sysPics/CleofeeOeilCentre-vide.svg"/>';
	s += '<img id="cleoEye" src="sysPics/OeilOuvertCleofee.svg">';
	s += '<input type="button" class="arrowButton" onClick="$.loadSpeech1(\''+pwd+'\');"/>';
	s += '<p class="cleoTip">';
	s += 'Bonjour, je m\'appelle Cléofée.';
	s += '</p>';
	$cleoDiv.append(s);
}

$.loadSpeech1 = function(pwd) {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Je vois que vous avez <a class="toColor">deviné</a> mon mot de passe !<br/>';
	if ($.checkPassword(pwd) == false) {
		s += 'Je l\'ai choisi simple exprès, comme <a class="toColor">contre-exemple</a>.';
	}
	else {
		s += 'Portant je l\' avais choisi <a class="toColor">compliqué</a>, vous êtes <a class="toColor">chanceux</a>!';
	}
	$cleoSpeech.append(s);
	$.menuColor();
}