var LEVELS = (function() {
	var private = {
		'1' 		: 'mario',
		'2' 		: 'étoile des cieux',
		'3' 		: 'html5',
		'4' 		: 'j\'ai un vélo et pas toi',
		'5' 		: 'la vie est belle',
		'6' 		: 'le roseau plie mais ne rompt pas',
		'7' 		: 'mais où est donc or ni car',
		'8' 		: 'dîner aux chandelles',
		'9' 		: 'réel',
		'10' 		: 'n\'y comptez pas',
		'11' 		: 'papier rigolo',
		'12' 		: 'rébus'
	};
	return {
		get: function(level) { return private[level]; }
	};
})();

$.checkLevel = function(level) {
	var answer = document.getElementById("wordForm").value;
	answer = answer.toLowerCase();
	if (answer == LEVELS.get(level)) {
		var d = document.getElementById('wordLabel');
		d.innerHTML = 'Correct!';
		var d = document.getElementById('answerButton');
		d.setAttribute('class', 'submitLevel correct');
	}
	else {
		var d = document.getElementById('wordLabel');
		d.innerHTML = 'Incorrect!';
		var d = document.getElementById('answerButton');
		d.setAttribute('class', 'submitLevel incorrect');
	}
	$.resizeWindow();
}

$.showVignettes = function() {
	var d = document.getElementsByClassName('allLevelsBg');
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		item.setAttribute("style", 'width:83%;height:88%;opacity:1');
	}
	$vignettes = $("p.allLevelsBg");
	$vignettes.empty();
	var s = '<table class="tabVignettes" style="width:100%;height:100%;"><tr><th><img class="vignette" type="button" src=\'sysPics/VignettesJouer/RebusLevelDesign_Mario.svg\' onClick="$.hideVignettes();$.loadLevel1();"></th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesJouer/RebusLevelDesign_EtoileDesCieux.svg\' onClick="$.hideVignettes();$.loadLevel2();"></th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesJouer/RebusLevelDesign_HTML5.svg\' onClick="$.hideVignettes();$.loadLevel3();"></th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesJouer/RebusLevelDesign_JaiUnVeloEtPasToi.svg\' onClick="$.hideVignettes();$.loadLevel4();"></th></tr>';
	s += '<tr><th><img class="vignette" type="button" src=\'sysPics/VignettesJouer/RebusLevelDesign_LaVieEstBelle.svg\' onClick="$.hideVignettes();$.loadLevel5();"></th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesJouer/RebusLevelDesign_LeRoseauPlieMaisNeRomptPas.svg\' onClick="$.hideVignettes();$.loadLevel6();"></th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesJouer/RebusLevelDesign_MaisOuEtDoncOrNiCar.svg\' onClick="$.hideVignettes();$.loadLevel7();"></th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesJouer/RebusLevelDesign_DinerAuxChandelles.svg\' onClick="$.hideVignettes();$.loadLevel8();"></th></tr>';
	s += '<tr><th><img class="vignette" type="button" src=\'sysPics/VignettesJouer/RebusLevelDesign_Reel.svg\' onClick="$.hideVignettes();$.loadLevel9();"</th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesJouer/RebusLevelDesign_NyComptePas.svg\' onClick="$.hideVignettes();$.loadLevel10();"</th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesJouer/RebusLevelDesign_PapierRigolo.svg\' onClick="$.hideVignettes();$.loadLevel11();"</th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesJouer/RebusLevelDesign_Rebus.svg\' onClick="$.hideVignettes();$.loadLevel12();"</th></tr></table>';
	var t = window.setInterval(function() {
		$vignettes.append(s);
		$.resizeWindow();
		clearInterval(t);
	}, 100);
}

$.hideVignettes = function() {
	var d = document.getElementsByClassName('allLevelsBg');
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		item.setAttribute("style", 'width:0%;height:0%;opacity:0;');
	}
	var t = window.setInterval(function() {
		$vignettes = $("p.allLevelsBg");
		$vignettes.empty();
		clearInterval(t);
	}, 500);
}