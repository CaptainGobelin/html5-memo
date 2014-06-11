$.loadCleofeeAbout = function(pwd) {
	$cleoDiv = $("div.cleoDiv");
	$cleoDiv.empty();
	var s = '<img id="cleoImg" class="shadow" src="sysPics/CleofeeOeilCentre-vide.svg"/>';
	s += '<img id="cleoEye" src="sysPics/OeilOuvertCleofee.svg">';
	s += '<img id="littleArrow" src="sysPics/FlecheBulle.svg">';
	s += '<p class="cleoTip">';
	s += 'Je vois que vous apprécieriez d’en apprendre plus!<br/>';
	s += '<a class="toColor">Quel sujet vous intéresse?</a><br/><br/>';
	s += '• <a class="underlined" onClick="$.loadVersus1();">Créer un mot de passe fort : sécurité versus facilité</a><br/>';
	s += '• <a class="underlined" onClick="$.loadRebus1();">Le rébus comme moyen mnémotechnique</a><br/>';
	s += '• <a class="underlined" onClick="$.loadSecure1();">Déclaration de sécurité de vos données</a><br/>';
	s += '• <a class="underlined" onClick="$.loadAuthors1();">À propos des auteurs et remerciements</a><br/>';
	s += '• <a class="underlined" onClick="$.loadLinks1();">Bibliographie et liens</a><br/>';
	s += '</p>';
	$cleoDiv.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
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
	var s = 'L’<a class="toColor">application web</a> Mémo de passe est accessible en ';
	s += 'ligne <a class="toColor">depuis un navigateur</a> sur la plupart des supports numériques.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadSecure2();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadSecure2 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Cependant, la totalité de l’application est chargée sur votre ';
	s += 'ordinateur. Lorsque vous écrivez un mot de passe, ';
	s += 'il est traité en local. <a class="toColor">Aucune donnée n’est envoyée au serveur</a>.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadSecure1();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadSecure3();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadSecure3 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Nous garantissons qu’<a class="toColor">aucune donnée personnelle</a> ne ';
	s += 'pourra être interceptée via cette application.<br/><br/>';
	s += 'L’<a class="toColor">utilisation des cookies</a> sert uniquement à ne pas rejouer ';
	s += 'les explications lorsque vous avez déjà visité le site une première fois.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadSecure2();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadSecure4();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadSecure4 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Si vous avez été <a class="toColor">victime de vol de mot de passe</a>, ';
	s += 'voici les gestes de <a class="toColor">premiers secours</a>:<br/><br/>';
	s += '• Accéder à votre/vos compte/s et <a class="toColor">changer immédiatement le mot de passe</a>.<br/>';
	s += '• <a class="toColor">Contacter l’administrateur</a> ou le support ';
	s += 'des détenteurs de l’application pour reporter la fraude.<br/>';
	s += '• Si vos comptes ont été volés car l’appareil qui les ';
	s += 'avait enregistrés a lui-même été volé, demander à <a class="toColor">faire ';
	s += 'bloquer l’appareil</a> dans la mesure du possible.<br/>';
	s += 'Dans tous les cas, changez tous vos mots de passe.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadSecure3();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadSecure5();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadSecure5 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Nous vous remercions de votre <a class="toColor">confiance</a>, et de votre ';
	s += '<a class="toColor">méfiance</a> en choisissant des <a class="toColor">mots de passe forts</a> pour ';
	s += 'chacune de vos applications!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadSecure4();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadAuthors1 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Cette application est le travail de diplôme de ';
	s += '<a class="toColor">Camille Rattoni</a> pour son Bachelor en Communication ';
	s += 'Visuelle à la <a class="toColor">HEAD – Genève</a> et de <a class="toColor">Jérémy Morel</a> ';
	s += 'pour son Bachelor en Informatique à la ';
	s += '<a class="toColor">Faculté des Sciences de l’Université de Genève</a>.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadAuthors2();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadAuthors2 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '<a class="toColor">Camille Rattoni</a> a fourni le travail de recherche pour la ';
	s += 'création du <a class="toColor">concept</a> de cette application, puis a imaginé son ';
	s += 'fonctionnement et établi son <a class="toColor">aspect graphique</a>.<br/>';
	s += 'C’est elle qui a chargé Cléofée d’accueillir les visiteurs avec ';
	s += 'son savoir, et dessiné des centaines de pictogrammes pour ';
	s += 'transcrire vos mots de passe!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadAuthors1();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadAuthors3();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadAuthors3 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '<a class="toColor">Jérémy Morel</a> a fait chauffer ses méninges pour réaliser ';
	s += 'les caprices de Camille, en <a class="toColor">programmant</a> haut la main l’intégralité ';
	s += 'des <a class="toColor">fonctionnalités</a> de Mémo de passe.<br/>';
	s += 'Grâce à lui, cette application web s’adapte à tous ';
	s += 'les formats d’écran et transforme tout ce que vous écrivez en rébus!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadAuthors2();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadAuthors4();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadAuthors4 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Nous avons beaucoup apprécié cette <a class="toColor">collaboration</a> enrichissante ';
	s += 'd’échanges entre nos deux formations, qui sont on ne peut plus <a class="toColor">complémentaires</a>!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadAuthors3();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadAuthors5();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadAuthors5 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Nous <a class="toColor">remercions</a> chaleureusement les <a class="toColor">directions</a> de nos deux ';
	s += 'filières de nous avoir permis de mener ce travail ensemble ainsi ';
	s += 'que le <a class="toColor">jury</a> d’examen.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadAuthors4();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadAuthors6();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadAuthors6 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = 'Nous <a class="toColor">remercions</a> également nos <a class="toColor">professeurs</a>, nos <a class="toColor">familles</a> ';
	s += 'et nos <a class="toColor">amis</a> qui nous ont <a class="toColor">soutenus</a> tout au long de ce projet, ';
	s += 'qui ont enduré des heures de <a class="toColor">beta testing</a> pour nous, donné ';
	s += 'leurs <a class="toColor">avis</a>, exprimé leurs <a class="toColor">interrogations</a> et proposé ';
	s += 'leurs <a class="toColor">idées</a>, et même été sources d’<a class="toColor">inspiration</a> à leur insu!';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadAuthors5();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadLinks1 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '<a class="toColor">Bachelor thésis à propose de ce projet:</a><br/><br/>';
	s += '•   RATTONI, Camille, 2014. <a class="italic">Mémo de passe, bachelor ';
	s += 'thésis sur le thème du lien entre la mnémotechnique et ';
	s += 'la sécurité informatique</a>. Genève: HEAD – Genève. E-Magazine ';
	s += 'disponible sur ISSUU à l’adresse suivante: ';
	s += '<a class="link" href="http://issuu.com/camillerattoni/docs/bachelorfinalerratum">';
	s += 'http://issuu.com/camillerattoni/docs/bachelorfinalerratum';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadLinks2();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadLinks2 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '<a class="toColor">Livres sur la mémoire et les nouvelles technologies:</a><br/><br/>';
	s += '•   BOUTONNET, François, 2013. <a class="italic">Mnémosyne; une histoire des ';
	s += 'arts de la mémoire : de l\'Antiquité à la création multimédia ';
	s += 'contemporaine</a>. Paris: Dis voir. Arts Visuels. ISBN: ';
	s += '9782914563680.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadLinks1();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadLinks3();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadLinks3 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '•   CARR, Nicholas, 2011. <a class="italic">Internet rend-il bête ? : réapprendre ';
	s += 'à lire et à penser dans un monde fragmenté</a>. Paris: R. Laffont. ';
	s += 'ISBN: 9782221124437.';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadLinks2();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadLinks4();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadLinks4 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '<a class="toColor">Sites web sur la sécurité informatique:</a><br/><br/>';
	s += '•  BASTIDE, Alain, 2012. <a class="italic">Créer des mots de passe efficaces';
	s += '</a>. Indexel.net, l’information high-tech professionnelle [en ligne]. ';
	s += '13.06.2012. [Consulté le: 12.11.2013]. Disponible à l’adresse:<br/>';
	s += '<a class="link" href="http://www.indexel.net/securite/comment-creer-des-mots-de-passe-efficaces-3621.html">';
	s += 'http://www.indexel.net/securite/comment-creer-des-mots-de-passe-efficaces-3621.html';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadLinks3();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadLinks5();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadLinks5 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '•  BASTIDE, Alain, 2012. <a class="italic">Gérer de nombreux mots de passe';
	s += '</a>. Indexel.net, l’information high-tech professionnelle [en ligne]. ';
	s += '22.02.2012. [Consulté le: 12.11.2013]. Disponible à l’adresse:<br/>';
	s += '<a class="link" href="http://www.indexel.net/securite/gerer-efficacement-de-nombreux-mots-de-passe-3540.html">';
	s += 'http://www.indexel.net/securite/gerer-efficacement-de-nombreux-mots-de-passe-3540.html';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadLinks4();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadLinks6();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadLinks6 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '•  CONFOLANT, Anne, 2013. <a class="italic">Sécurité IT: les internautes français ';
	s += 'encore trop laxistes dans la gestion de leurs mots de passe</a>. ';
	s += 'IT espresso.fr [en ligne]. 27.03.2013. [Consulté le  05.02.2014].';
	s += 'Disponible à l’adresse:<br/>';
	s += '<a class="link" href="http://www.itespresso.fr/securite-it-internautes-francais-encore-trop-laxistes-gestion-mots-passe-63229.html">';
	s += 'http://www.itespresso.fr/securite-it-internautes-francais-encore-trop-laxistes-gestion-mots-passe-63229.html';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadLinks5();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadLinks7();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadLinks7 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '•  DASHLANE, 2013. <a class="italic">Baromètre Dashlane';
	s += '</a>. Rumeur Publique [en ligne]. 01.12.2013. [Consulté le 05.02.2014].';
	s += 'Disponible à l’adresse:<br/>';
	s += '<a class="link" href="http://www.rumeurpublique.fr/online/dashlane/Table.htm">';
	s += 'http://www.rumeurpublique.fr/online/dashlane/Table.htm';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadLinks6();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadLinks8();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadLinks8 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '•  INTEL CORPORATION, 2013. <a class="italic">Password Day 2014';
	s += '</a>. [en ligne]. [Consulté le 23.05.2014]. Disponible à l’adresse:<br/>';
	s += '<a class="link" href="https://passwordday.org/fr">';
	s += 'https://passwordday.org/fr';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadLinks7();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadLinks9();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadLinks9 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '<a class="toColor">Site web à propos de la mémoire:</a><br/><br/>';
	s += '•  FLORIZEL [Pseudonyme], 2012. <a class="italic">Construire un palais de la mémoire';
	s += '</a>. Le Divan Fumoir Bohémien [en ligne]. 07.10.2012. [Consulté le 05.02.2014]. ';
	s += 'Disponible à l’adresse:<br/>';
	s += '<a class="link" href="http://florizel.canalblog.com/archives/2012/10/07/25259666.html">';
	s += 'http://florizel.canalblog.com/archives/2012/10/07/25259666.html';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadLinks8();"/>';
	s += '<input type="button" id="next" class="arrowButton cleoButton" onClick="$.loadLinks10();"/>';
	$cleoInput.append(s);
	$.menuColor();
}

$.loadLinks10 = function() {
	$cleoSpeech = $("p.cleoTip");
	$cleoSpeech.empty();
	var s = '<a class="toColor">Site web de l’auteur:</a><br/><br/>';
	s += '•  RATTONI, Camille, 2011. <a class="italic">Koya, portfolio';
	s += '</a>. [Dernière mise à jour  le 05.04.2014]. ';
	s += 'Disponible à l’adresse:<br/>';
	s += '<a class="link" href="http://www.koya.li">';
	s += 'http://www.koya.li';
	$cleoSpeech.append(s);
	$cleoInput = $("div.cleoInput");
	$cleoInput.empty();
	s = '<input type="button" id="dismiss" class="arrowButton cleoButton" onClick="document.location = \'about.html\';"/>';
	s += '<input type="button" id="prev" class="arrowButton cleoButton" onClick="$.loadLinks9();"/>';
	$cleoInput.append(s);
	$.menuColor();
}