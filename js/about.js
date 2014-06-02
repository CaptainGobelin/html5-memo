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
	s += '• <a onClick="$.loadRebus1();">Le rébus comme moyen mnémotechnique</a><br/>';
	s += '• <a onClick="$.loadSecure1();">Déclaration de sécurité de vos données</a><br/>';
	s += '</p>';
	$cleoDiv.append(s);
	$.menuColor();
}

$.loadVersus1 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Aujourd’hui, nous avons tous <a class="toColor">besoin</a> d’identifiants, de mots ';
	s += 'de passe ou encore de codes dans <a class="toColor">la vie de tous ';
	s += 'les jours</a>, autant pour les loisirs que pour le travail.<br/><br/>';
	s += 'On estime qu’en moyenne une personne peut ';
	s += 'avoir l’usage d’<a class="toColor">une dizaine de services dont l’accès ';
	s += 'nécessite un mot de passe</a>.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadVersus2();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadVersus2 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '<a class="toColor">La solution de facilité?</a> Utiliser partout le même identifiant ';
	s += 'et le même mot de passe, si possible simple ';
	s += 'à retenir et rapide à écrire.<br/><br/>';
	s += '<a class="toColor">La solution de sécurité?</a> Faire le <a class="toColor">contraire</a>!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadVersus1();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadVersus3();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadVersus3 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Plus précisément, il est conseillé que votre mot de passe ';
	s += 'soit composé d’au <a class="toColor">minimum 8 caractères</a> (on recommande ';
	s += 'même <a class="toColor">entre 10 et 16</a> caractères), ';
	s += 'de lettres <a class="toColor">minuscules</a> et <a class="toColor">majuscules</a>, de <a class="toColor">chiffres</a>, ';
	s += 'de <a class="toColor">symboles</a> et de signes de <a class="toColor">ponctuation</a>.<br/>';
	s += 'De surcroît, <a class="toColor">évitez les mots du dictionnaire</a>, changez ';
	s += 'l’orthographe ou utilisez des abréviations!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadVersus2();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadVersus4();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadVersus4 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Autre possibilité, si votre mot de passe dépasse les <a class="toColor">20 ';
	s += 'caractères</a>, il devient moins important de les diversifier, on ';
	s += 'peut donc par exemple omettre les chiffres et faire <a class="toColor">une ';
	s += 'vraie phrase</a>.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadVersus3();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadVersus5();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadVersus5 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '<a class="toColor">Attention</a> cependant, les attaques les plus courantes se ';
	s += 'font par <a class="toColor">dictionnaire</a>, le pirate teste d’abord des mots ';
	s += 'existants afin d’avoir une chance de trouver <a class="toColor">plusieurs ';
	s += 'lettres justes d’un coup</a> (dans ces cas là, une phrase ';
	s += 'de 3 mots a pratiquement la même solidité qu’un seul mot ';
	s += 'de 3 lettres!).';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadVersus4();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadVersus6();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadVersus6 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Une fois que vous avez choisi un bon mot de passe qui vous ';
	s += 'plaît, le travail ne s’arrête pas là! En effet, <a class="toColor">il ne faut ';
	s += 'surtout pas utiliser le même pour toutes vos ';
	s += 'applications</a>. Car même si votre mot de passe est fort, ';
	s += 'de 3 mots a pratiquement la même solidité qu’un seul mot ';
	s += 'la sécurité n’est pas de votre seul ressort, il arrive aussi ';
	s += 'parfois que les pirates les plus habiles parviennent ';
	s += 'à voler le mot de passe directement à la société qui détient ';
	s += 'l’application correspondante.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadVersus5();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadVersus7();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadVersus7 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Ces cas de piratage sont rares, mais très graves, ';
	s += 'des millions de mots de passe peuvent être volés d’un ';
	s += 'coup. Si vous avez le malheur de vous faire voler un mot de ';
	s += 'passe à cause d’une faille sur telle application, ';
	s += 'et de l’avoir <a class="toColor">utilisé partout</a> ailleurs, ce sont <a class="toColor">tous vos ';
	s += 'comptes</a> qui sont en <a class="toColor">danger</a>!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadVersus6();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadVersus8();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadVersus8 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'En résumé, mieux vaut faire <a class="toColor">long</a>, <a class="toColor">compliqué</a> et <a class="toColor">varié</a>!<br/>';
	s += 'Cerise sur le gâteau: vous devez <a class="toColor">vous rappeler</a> de tous vos ';
	s += 'mots de passe!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadVersus7();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadVersus9();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadVersus9 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'La <a class="toColor">variété</a> peut être un obstacle à la mémorisation, ';
	s += 'd’autant plus qu’il est recommandé de <a class="toColor">changer de mot de ';
	s += 'passe régulièrement</a> (selon les services, entre <a class="toColor">trois mois</a> ';
	s += 'et <a class="toColor">une année</a> maximum).';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadVersus8();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadVersus10();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadVersus10 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Imaginez que quelqu’un essaye de forcer votre mot de ';
	s += 'passe: s’il est mal choisi, sa <a class="toColor">complexité implique plusieurs ';
	s += 'mois de tentatives</a>, mais s’il est fort, il faudrait <a class="toColor">des miliers ';
	s += 'd’années</a>!<br/> S’il est plutôt simple et donc rapide à découvrir, il ';
	s += 'suffit de le changer régulièrement pour être tranquille. ';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadVersus9();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadVersus11();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadVersus11 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'C’est pourquoi il est recommandé de s’<a class="toColor">inventer un ';
	s += 'système de création</a> de mots de passe, de semer des ';
	s += '<a class="toColor">indices</a> dans votre mémoire, afin d’être capable de le ';
	s += '<a class="toColor">reconstituer</a> si jamais vous l’avez oublié.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadVersus10();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadVersus12();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadVersus12 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Certes, la plupart des applications bien pensées ';
	s += 'ont un <a class="toColor">système de récupération</a> de mots de passe. ';
	s += 'Il existe aussi des <a class="toColor">logiciels de gestion</a> des mots ';
	s += 'de passe dans  les cas où vous en accumulez des dizaines...';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadVersus11();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadVersus13();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadVersus13 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Mais se rappeler de son mot de passe, c’est comme ';
	s += 'avoir son <a class="toColor">trousseau de clé en poche plutôt qu’au fond ';
	s += 'de son sac</a>!<br/> On ne perd pas de temps tout en s’épargnant ';
	s += 'cette pointe d’angoisse lorsqu’on commence à craindre ';
	s += 'd’avoir perdu son sésame!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadVersus12();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadRebus1 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Les avantages de <a class="toColor">mémoriser ses mots de passe</a> ';
	s += 'ne sont pas négligeables: <a class="toColor">instantanéité</a> d’accès, <a class="toColor">sécurité</a> ';
	s += 'de stockage, et <a class="toColor">sérénité</a> car ils ne pourront ';
	s += 'ni être perdus ni volés!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadRebus2();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadRebus2 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Malheureusement, nous manquons d’entraînement.<br/>';
	s += 'De nos jours, nous ne sommes plus conscients des capacités ';
	s += 'de <a class="toColor">notre mémoire</a> à long terme, à tel point ';
	s += 'que nous n’osons plus <a class="toColor">lui faire confiance</a>!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadRebus1();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadRebus3();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadRebus3 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Mais comment faire pour créer des mots de passe variés, au ';
	s += 'niveau de complexité suffisant, et de surcroît s’en rappeler?<br/>';
	s += 'Mémo de passe est une application qui vous propose de ';
	s += 'vous aider dans le travail de mémorisation avec une ';
	s += '<a class="toColor">solution mnémotechnique basée sur le rébus</a>.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadRebus2();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadRebus4();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadRebus4 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Le rébus est un bon moyen d’<a class="toColor">exercer votre mémoire</a> ';
	s += 'autour d’un mot de passe. En effet, la mémorisation ';
	s += 'a deux temps: une <a class="toColor">phase de création</a> où l’on associe les ';
	s += 'idées entre elles pour les consolider, puis une <a class="toColor">phase ';
	s += 'd’appropriation</a> où l’on visualise et on répète.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadRebus3();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadRebus5();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadRebus5 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Ainsi, pendant que vous déchiffrez les dessins ';
	s += 'qui forment votre rébus, plusieurs de <a class="toColor">vos sens</a> sont ';
	s += 'en éveil.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadRebus4();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadRebus6();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadRebus6 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'La vue avec les formes et les couleurs, l’ouïe ';
	s += 'avec la phonétique, la mémoire à travers la langue ';
	s += 'et le texte, tous ces sens sont autant de <a class="toColor">portes ';
	s += 'd’entrée</a> vers vos souvenirs par <a class="toColor">association d’idées</a>.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadRebus5();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadRebus7();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadRebus7 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Il faut vous <a class="toColor">raconter une histoire</a>, imaginer les liens ';
	s += 'entre ces images, comment elles pourraient interagir, ';
	s += 's’intervertir, les différentes façons possibles de les lire ';
	s += 'en tant que rébus...';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadRebus6();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadRebus8();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadRebus8 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'La difficulté qui réside dans le fait de <a class="toColor">devoir retenir ';
	s += 'différents mots de passe</a> (un pour chaque compte) est ';
	s += 'donc celle que Mémo de passe va vous permettre ';
	s += 'de surmonter! La <a class="toColor">décomposition sous forme de rébus</a> ';
	s += 'peut vous permettre de concevoir un <a class="toColor">système de création</a> ';
	s += 'de nouveaux mots de passe qui vous ';
	s += 'correspond et vous <a class="toColor">aide à mémoriser</a>.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadRebus7();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadSecure1 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Aujourd’hui, nous avons tous <a class="toColor">besoin</a> d’identifiants, de mots ';
	s += 'de passe ou encore de codes dans <a class="toColor">la vie de tous ';
	s += 'les jours</a>, autant pour les loisirs que pour le travail.<br/><br/>';
	s += 'On estime qu’en moyenne une personne peut ';
	s += 'avoir l’usage d’<a class="toColor">une dizaine de services dont l’accès ';
	s += 'nécessite un mot de passe</a>.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadSecure2();"/>';
	$cleoInput.append(s);
	$.menuColor();
}