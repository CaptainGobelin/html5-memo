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
		'[b][i][eu]'	: 'PhonemesDessins-TraitMimi3_Bille',
		'[b][o][l]'	: 'PhonemesDessins-TraitMimi3_Bol',
		'[b][u][s]'	: 'PhonemesDessins-TraitMimi3_BusCar3D',
		'[ch][an]'	: 'PhonemesDessins-TraitMimi3_ChantCui',
		'[ch][a]'	: 'PhonemesDessins-TraitMimi3_Chat',
		'[ch][o]'	: 'PhonemesDessins-TraitMimi3_Chaud',
		'[k][o][l]'	: 'PhonemesDessins-TraitMimi3_Col',
		'[k][o][l][an]'	: 'PhonemesDessins-TraitMimi3_CollantBas',
		'[k][on]'	: 'PhonemesDessins-TraitMimi3_Con',
		'[k][o][k]'	: 'PhonemesDessins-TraitMimi3_Coque',
		'[k][o][r]'	: 'PhonemesDessins-TraitMimi3_Cor',
		'[k][ou]'	: 'PhonemesDessins-TraitMimi3_CouGirafe',
		'[d][ai]'	: 'PhonemesDessins-TraitMimi3_De',
		'[d][an]'	: 'PhonemesDessins-TraitMimi3_Dent',
		'[d][eu]'	: 'PhonemesDessins-TraitMimi3_Deux',
		'[d][i]'	: 'PhonemesDessins-TraitMimi3_DitBlaMot',
		'[d][on]'	: 'PhonemesDessins-TraitMimi3_Don',
		'[d][o]'	: 'PhonemesDessins-TraitMimi3_Dos',
		'[o]'	: 'PhonemesDessins-TraitMimi3_Eau',
		'[f][r][ou][a]'	: 'PhonemesDessins-TraitMimi3_Froid',
		'[g][an]'	: 'PhonemesDessins-TraitMimi3_Gant',
		'[j][ai]'	: 'PhonemesDessins-TraitMimi3_Geai',
		'[g][o]'	: 'PhonemesDessins-TraitMimi3_Go',
		'[a][ch]'	: 'PhonemesDessins-TraitMimi3_Hache',
		'[ai]'	: 'PhonemesDessins-TraitMimi3_Haie',
		'[ou]'	: 'PhonemesDessins-TraitMimi3_Houx',
		'[u][i][t]'	: 'PhonemesDessins-TraitMimi3_HuitHuitre',
		'[l][a][r]'	: 'PhonemesDessins-TraitMimi3_Lard',
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
		'[t][ai]' : 'PhonemesDessins-TraitMimi3_The',
		'[p][i][ai]' : 'PhonemesDessins-TraitMimi3_Pied',
		'[eu][r]' : 'PhonemesDessins-TraitMimi3_Heure',
		'[n][eu]' : 'PhonemesDessins-TraitMimi3_Noeud',
		'[p][l][i]' : 'PhonemesDessins-TraitMimi3_Pli',
		'[r][on]' : 'PhonemesDessins-TraitMimi3_Rond',
		'[eu][i]' : 'PhonemesDessins-TraitMimi3_Oeil',
		'[p][l][u][m]' : 'PhonemesDessins-TraitMimi3_Plume',
		'[ai][s][p][a][s]' : 'PhonemesDessins-TraitMimi3_Espace',
		'[i][a][k]' : 'PhonemesDessins-TraitMimi3_Yak',

		'[a]' : 'PhonemesDessins-Lettres_a',
		'[i]' : 'PhonemesDessins-Lettres_i',
		'[u]' : 'PhonemesDessins-Lettres_u',
		'[on]' : 'PhonemesDessins-Lettres_on',
		'[an]' : 'PhonemesDessins-Lettres_an',
		'[b]' : 'PhonemesDessins-Lettres_b',
		'[k]' : 'PhonemesDessins-Lettres_k',
		'[ch]' : 'PhonemesDessins-Lettres_ch',
		'[d]' : 'PhonemesDessins-Lettres_d',
		'[f]' : 'PhonemesDessins-Lettres_f',
		'[g]' : 'PhonemesDessins-Lettres_g',
		'[gn]' : 'PhonemesDessins-Lettres_gn',
		'[j]' : 'PhonemesDessins-Lettres_j',
		'[l]' : 'PhonemesDessins-Lettres_l',
		'[m]' : 'PhonemesDessins-Lettres_m',
		'[n]' : 'PhonemesDessins-Lettres_n',
		'[p]' : 'PhonemesDessins-Lettres_p',
		'[r]' : 'PhonemesDessins-Lettres_r',
		'[s]' : 'PhonemesDessins-Lettres_s',
		'[t]' : 'PhonemesDessins-Lettres_t',
		'[v]' : 'PhonemesDessins-Lettres_v',
		'[x]' : 'PhonemesDessins-Lettres_x',
		'[z]' : 'PhonemesDessins-Lettres_z',
		'[ai][r]' : 'PhonemesDessins-Lettres_er',
		'[k][a]' : 'PhonemesDessins-Lettres_ka',
		'[p][ai]' : 'PhonemesDessins-Lettres_pai',
		'[s][ai]' : 'PhonemesDessins-Lettres_sai',
		'[v][ai]' : 'PhonemesDessins-Lettres_vai',
		'[i][a]' : 'PhonemesDessins-Lettres_ya',

		'[b][ai][l]'	: 'PhonemesDessins-TraitMimi3_BehBelle',
		'[k][a][r]'	: 'PhonemesDessins-TraitMimi3_BusCar3D',
		'[b][u]'	: 'PhonemesDessins-TraitMimi3_BusCar3D',
		'[k][u][i]'	: 'PhonemesDessins-TraitMimi3_ChantCui',
		'[m][i][a][ou]'	: 'PhonemesDessins-TraitMimi3_Chat',
		'[j][i][r][a][f]'	: 'PhonemesDessins-TraitMimi3_CouGirafe',
		'[b][l][a]'	: 'PhonemesDessins-TraitMimi3_DitBlaMot',
		'[m][o]'	: 'PhonemesDessins-TraitMimi3_DitBlaMot',
		'[u][i][t][r]'	: 'PhonemesDessins-TraitMimi3_HuitHuitre',
		'[lard]'	: 'PhonemesDessins-TraitMimi3_Lard',
		'[k][i]'	: 'PhonemesDessins-TraitMimi3_Quille',
		'[ai][m][eu]' : 'PhonemesDessins-TraitMimi3_Aime',
		'[j][ai][m]' : 'PhonemesDessins-TraitMimi3_Aime',
		'[j][ai][m][eu]' : 'PhonemesDessins-TraitMimi3_Aime',
		'[s][ai][r][k][l]' : 'PhonemesDessins-TraitMimi3_Rond',
		'[p][l][u][m][eu]' : 'PhonemesDessins-TraitMimi3_Plume',
		'[dos]'	: 'PhonemesDessins-TraitMimi3_Dos',
		'[o][r][l][o][j]' : 'PhonemesDessins-TraitMimi3_Heure'
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

var WORDS_INFO = (function() {
	var private = {
		'[ai][l]'	: 'Aile',
		'[ou][t]'	: 'Aout',
		'[a][r]'	: 'Art',
		'[b][a][g][ai][t]'	: 'Baguettes',
		'[b][an]'	: 'Banc',
		'[b][a]'	: 'Bas',
		'[b][ai]'	: 'Beh',
		'[b][i][eu]'	: 'Bille',
		'[b][o][l]'	: 'Bol',
		'[b][u][s]'	: 'Bus',
		'[ch][an]'	: 'Chant',
		'[ch][a]'	: 'Chat',
		'[ch][o]'	: 'Chaud',
		'[k][o][l]'	: 'Col',
		'[k][o][l][an]'	: 'Collant',
		'[k][on]'	: 'Con',
		'[k][o][k]'	: 'Coque',
		'[k][o][r]'	: 'Cor',
		'[k][ou]'	: 'Cou',
		'[d][ai]'	: 'Dé',
		'[d][an]'	: 'Dent',
		'[d][eu]'	: 'Deux',
		'[d][i]'	: 'Dit',
		'[d][on]'	: 'Don',
		'[d][o]'	: 'Dos',
		'[o]'	: 'Eau',
		'[f][r][ou][a]'	: 'Froid',
		'[g][an]'	: 'Gant',
		'[j][ai]'	: 'Geai',
		'[g][o]'	: 'Go',
		'[a][ch]'	: 'Hache',
		'[ai]'	: 'Haie',
		'[ou]'	: 'Houx',
		'[u][i][t]'	: 'Huit/Huitre',
		'[l][a][r]'	: 'Lard',
		'[l][a][v]'	: 'Lave',
		'[m][ai]'	: 'Mai',
		'[m][in]'	: 'Main',
		'[m][a]'	: 'Mat',
		'[n][ai]'	: 'Nez',
		'[n][i]'	: 'Nid',
		'[n][u][i]'	: 'Nuit',
		'[eu]'	: 'Oeufs',
		'[ou][a]'	: 'Oie',
		'[p][a]'	: 'Pas',
		'[p][ou][in]'	: 'Poing',
		'[k][eu]'	: 'Queue',
		'[k][i][eu]'	: 'Quille',
		'[r][ai]'	: 'Raie',
		'[r][a]'	: 'Rat',
		'[r][i]'	: 'Riz',
		'[s][an]'	: 'Sang',
		'[s][i]'	: 'Scie',
		'[s][o]'	: 'Seau',
		'[s][ai][t]'	: 'Set',
		'[t][ou][a][l]'	: 'Toile',
		'[t][ou][a]'	: 'Toit',
		'[t][r][ou][a]'	: 'Troie',
		'[in]'	: 'Un',
		'[s][in][k]' : 'Cinq',
		'[n][eu][f]' : 'Neuf',
		'[k][a][t][r]' : 'Quatre',
		'[ai][m]' : 'Aime',
		'[t][ai]' : 'The',
		'[p][i][ai]' : 'Pied',
		'[eu][r]' : 'Heure',
		'[n][eu]' : 'Noeud',
		'[p][l][i]' : 'Pli',
		'[r][on]' : 'Rond',
		'[eu][i]' : 'Oeil',
		'[p][l][u][m]' : 'Plume',
		'[ai][s][p][a][s]' : 'Espace',
		'[i][a][k]' : 'Yak',

		'[a]' : 'a',
		'[i]' : 'i',
		'[u]' : 'u',
		'[on]' : 'on',
		'[an]' : 'an',
		'[b]' : 'b',
		'[k]' : 'k',
		'[ch]' : 'ch',
		'[d]' : 'd',
		'[f]' : 'f',
		'[g]' : 'g',
		'[gn]' : 'gn',
		'[j]' : 'j',
		'[l]' : 'l',
		'[m]' : 'm',
		'[n]' : 'n',
		'[p]' : 'p',
		'[r]' : 'r',
		'[s]' : 's',
		'[t]' : 't',
		'[v]' : 'v',
		'[x]' : 'x',
		'[z]' : 'z',
		'[ai][r]' : 'R',
		'[k][a]' : 'K',
		'[p][ai]' : 'P',
		'[s][ai]' : 'C',
		'[v][ai]' : 'V',
		'[i][a]' : 'ya'
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

var NB_PICS = 102;

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

$.loadListPics = function(index) {
	for (var i=0;i<10;i++) {
		var d = document.getElementById('list_'+i);
		var s = 'pics/';
		s += WORDS.getFromIndex(3+(index+i)%NB_PICS);
		s += '.svg';
		d.setAttribute("src", s);
		d.setAttribute("index", 1+(index+i)%NB_PICS);
		d = document.getElementById('label_'+i);
		s = WORDS_INFO.getFromIndex(1+(index+i)%NB_PICS);
		d.innerHTML = s;
		var p = index-9;
		if (p < 2)
			p = NB_PICS - p;
		d = document.getElementById('prevPics');
		d.setAttribute('onClick', '$.loadListPics('+p+');');
		d = document.getElementById('nextPics');
		d.setAttribute('onClick', '$.loadListPics('+(index+9)%NB_PICS+');');
	}
}

$.newPic = function() {
	var d = document.getElementsByClassName('shadow pic');
	for (var i=d.length-1;i>=0;--i) {
		var item = d[i];
		item.setAttribute("class",'newPic');
		item.setAttribute("onClick", '$.newPicDone();');
	}
	d = document.getElementsByClassName('toPlace');
	for (var i=d.length-1;i>=0;--i) {
		var item = d[i];
		item.setAttribute("class",'newPic');
		item.setAttribute("onClick", '$.newPicDone();');
	}
	$.resizeWindow();
}

$.newPicDone = function() {
	var d = document.getElementsByClassName('newPic');
	for (var i=d.length-1;i>=0;--i) {
		var item = d[i];
		if (item.getAttribute("src") == null) {
			item.setAttribute("class",'toPlace');
			item.setAttribute("style",'');
		}
		else {
			item.setAttribute("class",'shadow pic');
		}
		item.setAttribute("onClick", "");
	}
	$.resizeWindow();
}