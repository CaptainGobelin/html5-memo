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
		'10' 		: 'n\'y compte pas',
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
}

$.showVignettes = function() {
	var d = document.getElementsByClassName('allLevelsBg');
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		item.setAttribute("style", 'width:83%;height:88%;opacity:1');
	}
	$vignettes = $("p.allLevelsBg");
	$vignettes.empty();
	var s = '<table class="tabVignettes" style="width:100%;height:100%;"><tr><th><img class="vignette" type="button" src=\'sysPics/VignettesPNG/RebusLevelDesign_Mario.png\' onClick="$.hideVignettes();$.loadLevel1();"></th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesPNG/RebusLevelDesign_EtoileDesCieux.png\' onClick="$.hideVignettes();$.loadLevel2();"></th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesPNG/RebusLevelDesign_HTML5.png\' onClick="$.hideVignettes();$.loadLevel3();"></th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesPNG/RebusLevelDesign_JaiUnVeloEtPasToi.png\' onClick="$.hideVignettes();$.loadLevel4();"></th></tr>';
	s += '<tr><th><img class="vignette" type="button" src=\'sysPics/VignettesPNG/RebusLevelDesign_LaVieEstBelle.png\' onClick="$.hideVignettes();$.loadLevel5();"></th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesPNG/RebusLevelDesign_LeRoseauPlieMaisNeRomptPas.png\' onClick="$.hideVignettes();$.loadLevel6();"></th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesPNG/RebusLevelDesign_MaisOuEtDoncOrNiCar.png\' onClick="$.hideVignettes();$.loadLevel7();"></th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesPNG/RebusLevelDesign_DinerAuxChandelles.png\' onClick="$.hideVignettes();$.loadLevel8();"></th></tr>';
	s += '<tr><th><img class="vignette" type="button" src=\'sysPics/VignettesPNG/RebusLevelDesign_Reel.png\' onClick="$.hideVignettes();$.loadLevel9();"</th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesPNG/RebusLevelDesign_NyComptePas.png\' onClick="$.hideVignettes();$.loadLevel10();"</th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesPNG/RebusLevelDesign_PapierRigolo.png\' onClick="$.hideVignettes();$.loadLevel11();"</th>';
	s += '<th><img class="vignette" type="button" src=\'sysPics/VignettesPNG/RebusLevelDesign_Rebus.png\' onClick="$.hideVignettes();$.loadLevel12();"</th></tr></table>';
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