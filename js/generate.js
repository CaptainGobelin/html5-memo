var WORDS = (function() {
	var private = {
		'|' 		: 'No_sign',
		'-' 		: 'mute',
		'[ai][l]'	: 'PhonemesDessins-TraitMimi3_Aile',
		'[ou][t]'	: 'PhonemesDessins-TraitMimi3_Aout',
		'[a][r]'	: 'PhonemesDessins-TraitMimi3_Art',
		'[b][a][g][ai][t]'	: 'PhonemesDessins-TraitMimi3_Baguettes',
		'[b][an]'	: 'PhonemesDessins-TraitMimi3_Banc',
		'[b][a]'	: 'PhonemesDessins-TraitMimi3_Bas',
		'[b][ai]'	: 'PhonemesDessins-TraitMimi3_BehBelle',
		'[b][ai][l]'	: 'PhonemesDessins-TraitMimi3_BehBelle',
		'[b][i][eu]'	: 'PhonemesDessins-TraitMimi3_Bille',
		'[b][o][l]'	: 'PhonemesDessins-TraitMimi3_Bol',
		'[b][u][s]'	: 'PhonemesDessins-TraitMimi3_BusCar3D',
		'[k][a][r]'	: 'PhonemesDessins-TraitMimi3_BusCar3D',
		'[b][u]'	: 'PhonemesDessins-TraitMimi3_BusCar3D',
		'[ch][an]'	: 'PhonemesDessins-TraitMimi3_ChantCui',
		'[k][u][i]'	: 'PhonemesDessins-TraitMimi3_ChantCui',
		'[ch][a]'	: 'PhonemesDessins-TraitMimi3_Chat',
		'[m][i][a][ou]'	: 'PhonemesDessins-TraitMimi3_Chat',
		'[ch][o]'	: 'PhonemesDessins-TraitMimi3_Chaud',
		'[k][o][l]'	: 'PhonemesDessins-TraitMimi3_Col',
		'[k][o][l][an]'	: 'PhonemesDessins-TraitMimi3_CollantBas',
		'[k][on]'	: 'PhonemesDessins-TraitMimi3_Con',
		'[k][o][k]'	: 'PhonemesDessins-TraitMimi3_Coque',
		'[k][o][r]'	: 'PhonemesDessins-TraitMimi3_Cor',
		'[k][ou]'	: 'PhonemesDessins-TraitMimi3_CouGirafe',
		'[j][i][r][a][f]'	: 'PhonemesDessins-TraitMimi3_CouGirafe',
		'[d][ai]'	: 'PhonemesDessins-TraitMimi3_De',
		'[d][an]'	: 'PhonemesDessins-TraitMimi3_Dent',
		'[d][eu]'	: 'PhonemesDessins-TraitMimi3_Deux',
		'[d][i]'	: 'PhonemesDessins-TraitMimi3_DitBlaMot',
		'[b][l][a]'	: 'PhonemesDessins-TraitMimi3_DitBlaMot',
		'[m][o]'	: 'PhonemesDessins-TraitMimi3_DitBlaMot',
		'[d][on]'	: 'PhonemesDessins-TraitMimi3_Don',
		'[d][o]'	: 'PhonemesDessins-TraitMimi3_Dos',
		'[dos]'	: 'PhonemesDessins-TraitMimi3_Dos',
		'[o]'	: 'PhonemesDessins-TraitMimi3_Eau',
		'[f][r][ou][a]'	: 'PhonemesDessins-TraitMimi3_Froid',
		'[g][an]'	: 'PhonemesDessins-TraitMimi3_Gant',
		'[j][ai]'	: 'PhonemesDessins-TraitMimi3_Geai',
		'[g][o]'	: 'PhonemesDessins-TraitMimi3_Go',
		'[a][ch]'	: 'PhonemesDessins-TraitMimi3_Hache',
		'[ai]'	: 'PhonemesDessins-TraitMimi3_Haie',
		'[ou]'	: 'PhonemesDessins-TraitMimi3_Houx',
		'[u][i][t]'	: 'PhonemesDessins-TraitMimi3_HuitHuitre',
		'[u][i][t][r]'	: 'PhonemesDessins-TraitMimi3_HuitHuitre',
		'[l][a][r]'	: 'PhonemesDessins-TraitMimi3_Lard',
		'[lard]'	: 'PhonemesDessins-TraitMimi3_Lard',
		'[l][a][v]'	: 'PhonemesDessins-TraitMimi3_Lave',
		'[m][ai]'	: 'PhonemesDessins-TraitMimi3_Mai',
		'[m][in]'	: 'PhonemesDessins-TraitMimi3_Main',
		'[m][a]'	: 'PhonemesDessins-TraitMimi3_Mat',
		'[n][ai]'	: 'PhonemesDessins-TraitMimi3_Nez',
		'[n][i]'	: 'PhonemesDessins-TraitMimi3_Nid',
		'[n][u][i]'	: 'PhonemesDessins-TraitMimi3_Nuit',
		'[eu]'	: 'PhonemesDessins-TraitMimi3_Oeufs',
		'[ou][a]'	: 'PhonemesDessins-TraitMimi3_Oie',
		'[p][a]'	: 'PhonemesDessins-TraitMimi3_PasPied',
		'[p][ou][in]'	: 'PhonemesDessins-TraitMimi3_Poing',
		'[k][eu]'	: 'PhonemesDessins-TraitMimi3_Queue',
		'[k][i][eu]'	: 'PhonemesDessins-TraitMimi3_Quille',
		'[k][i]'	: 'PhonemesDessins-TraitMimi3_Quille',
		'[r][ai]'	: 'PhonemesDessins-TraitMimi3_Raie',
		'[r][a]'	: 'PhonemesDessins-TraitMimi3_Rat',
		'[r][i]'	: 'PhonemesDessins-TraitMimi3_Riz',
		'[s][an]'	: 'PhonemesDessins-TraitMimi3_Sang',
		'[s][i]'	: 'PhonemesDessins-TraitMimi3_Scie',
		'[s][o]'	: 'PhonemesDessins-TraitMimi3_Seau',
		'[s][ai][t]'	: 'PhonemesDessins-TraitMimi3_Set',
		'[t][ou][a][l]'	: 'PhonemesDessins-TraitMimi3_Toile',
		'[t][ou][a]'	: 'PhonemesDessins-TraitMimi3_Toit',
		'[t][r][ou][a]'	: 'PhonemesDessins-TraitMimi3_Troie',
		'[in]'	: 'PhonemesDessins-TraitMimi3_Un',
		'[s][in][k]' : 'PhonemesDessins-TraitMimi3_Cinq',
		'[n][eu][f]' : 'PhonemesDessins-TraitMimi3_Neuf',
		'[k][a][t][r]' : 'PhonemesDessins-TraitMimi3_Quatre',
		'[ai][m]' : 'PhonemesDessins-TraitMimi3_Aime',
		'[ai][m][eu]' : 'PhonemesDessins-TraitMimi3_Aime',
		'[j][ai][m]' : 'PhonemesDessins-TraitMimi3_Aime',
		'[j][ai][m][eu]' : 'PhonemesDessins-TraitMimi3_Aime',
		'[t][ai]' : 'PhonemesDessins-TraitMimi3_The',
		'[p][i][ai]' : 'PhonemesDessins-TraitMimi3_Pied',
		'[eu][r]' : 'PhonemesDessins-TraitMimi3_Heure',
		'[o][r][l][o][j]' : 'PhonemesDessins-TraitMimi3_Heure',
		'[n][eu]' : 'PhonemesDessins-TraitMimi3_Noeud',
		'[p][l][i]' : 'PhonemesDessins-TraitMimi3_Pli',
		'[r][on]' : 'PhonemesDessins-TraitMimi3_Rond',
		'[s][ai][r][k][l]' : 'PhonemesDessins-TraitMimi3_Rond',
		'[eu][i]' : 'PhonemesDessins-TraitMimi3_Oeil',
		'[p][l][u][m]' : 'PhonemesDessins-TraitMimi3_Plume',
		'[p][l][u][m][eu]' : 'PhonemesDessins-TraitMimi3_Plume',
		'[ai][s][p][a][s]' : 'PhonemesDessins-TraitMimi3_Espace'
		
	};
	return {
		get: function(name) { return private[name]; },
		all: function() { return private; },
		getFromIndex: function(index) {
			var k = 0;;
			for (var e in private) {
				k++;
				if (k == index)
					return private[e];
			}
			return private['|'];
		}
	};
})();

$.generatePics = function(){
	word = document.getElementById("wordForm").value;
	if (word === null)
		document.location = "404.html";
	else {
		$wordDiv = $("div.phonWord");
		$wordDiv.empty();
		var phonned = $.generatePhon(word);
		$s = 'Phonétisation: ' + phonned;
		$wordDiv.empty();
		$wordDiv.append($.groupPhon(phonned));
	}
}

$.groupPhon = function(word) {
	var reg = new RegExp("[#]+", "g");
	return privateGroupPhon(word.split(reg));
}

$.groupPhonFromSplits = function() {
	return privateGroupPhon($meltedSplits);
}

function privateGroupPhon(splits) {
	var s = '';
	for (var i=0;i<splits.length-1;i++) {
		var toTest = 10;
		var test = '';
		while (toTest > 0) {
			test = '';
			for (var k=0;k<toTest;k++) {
				if (splits[i+k] == undefined)
					continue;
				if (splits[i+k].indexOf('?') > -1)
					continue;
				test += splits[i+k];
			}
			if (WORDS.get(test) == undefined)
				toTest--;
			else {
				i += toTest-1;
				toTest = 0;
			}
		}
		if (test[0] == '?')
			continue;
		if (WORDS.get(test) == undefined)
			test = '|';
		test = WORDS.get(test);
		s += test + " ";
	}
	return s;
}

$.getPhonSplits = function(word) {
	var reg = new RegExp("[#]+", "g");
	return word.split(reg);
}