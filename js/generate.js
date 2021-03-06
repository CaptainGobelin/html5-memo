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
		'[u][i][t][r]'	: 'PhonemesDessins-TraitMimi3_HuitHuitre',
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
		'[eu][f]' : 'PhonemesDessins-TraitMimi3_Oeuf',
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
		'[a][i]'	: 'PhonemesDessins-TraitMimi3_Ail',
		'[ai][r]'	: 'PhonemesDessins-TraitMimi3_Air',
		'[f][i][eu]': 'PhonemesDessins-TraitMimi3_Fille',
		'[f][ou]'	: 'PhonemesDessins-TraitMimi3_Fou',
		'[g][a]'	: 'PhonemesDessins-TraitMimi3_Gars',
		'[j][eu]'	: 'PhonemesDessins-TraitMimi3_Jeux',
		'[j][ou]'	: 'PhonemesDessins-TraitMimi3_Joue',
		'[j][u][in]': 'PhonemesDessins-TraitMimi3_Juin',
		'[j][u]'	: 'PhonemesDessins-TraitMimi3_Jus',
		'[l][ai]'	: 'PhonemesDessins-TraitMimi3_Lait',
		'[l][a]'	: 'PhonemesDessins-TraitMimi3_Las',
		'[l][i]'	: 'PhonemesDessins-TraitMimi3_Lit',
		'[l][ou]'	: 'PhonemesDessins-TraitMimi3_Loup',
		'[m][a][m][i]'	: 'PhonemesDessins-TraitMimi3_Mamie',
		'[m][eu]'	: 'PhonemesDessins-TraitMimi3_Meuh',
		'[m][i]'	: 'PhonemesDessins-TraitMimi3_Mie',
		'[m][u]'	: 'PhonemesDessins-TraitMimi3_Mue',
		'[n][o]'	: 'PhonemesDessins-TraitMimi3_Noh',
		'[p][in]'	: 'PhonemesDessins-TraitMimi3_Pain',
		'[p][i]'	: 'PhonemesDessins-TraitMimi3_Pis',
		'[p][oi]'	: 'PhonemesDessins-TraitMimi3_Pois',
		'[p][on]'	: 'PhonemesDessins-TraitMimi3_Pont',
		'[p][o]'	: 'PhonemesDessins-TraitMimi3_Pot',
		'[p][u]'	: 'PhonemesDessins-TraitMimi3_Pue',
		'[r][in]'	: 'PhonemesDessins-TraitMimi3_Rein',
		'[r][ou]'	: 'PhonemesDessins-TraitMimi3_Roue',
		'[s][on]'	: 'PhonemesDessins-TraitMimi3_Son',
		'[t][on]'	: 'PhonemesDessins-TraitMimi3_Thon',
		'[v][a][ch]': 'PhonemesDessins-TraitMimi3_Vache',
		'[v][an]'	: 'PhonemesDessins-TraitMimi3_Vent',
		'[v][ai][r]': 'PhonemesDessins-TraitMimi3_Verre',
		'[v][in]'	: 'PhonemesDessins-TraitMimi3_Vin',
		'[v][ou][a][l]'	: 'PhonemesDessins-TraitMimi3_Voile',

		'[zero]'	: 'PhonemesDessins-TraitMimi3_ZorroZero',
		'[star]' : 'PhonemesDessins-TraitMimi3_Etoile',
		'[plus]' : 'PhonemesDessins-TraitMimi3_Plus',
		'[pInterro]' : 'PhonemesDessins-TraitMimi3_PoingInterro',
		'[pExcla]' : 'PhonemesDessins-TraitMimi3_PoingExcla',
		'[pVirgule]' : 'PhonemesDessins-TraitMimi3_PoingVirgule',
		'[slash]' : 'PhonemesDessins-TraitMimi3_Slash',
		'[bSlash]' : 'PhonemesDessins-TraitMimi3_BackSlash',
		'[tiret]' : 'PhonemesDessins-TraitMimi3_Tiret',

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
		'[o][r][l][o][j]' : 'PhonemesDessins-TraitMimi3_Heure',
		'[huit]'	: 'PhonemesDessins-TraitMimi3_HuitHuitre',
		'[z][o][r][o]'	: 'PhonemesDessins-TraitMimi3_ZorroZero'
	};
	return {
		get: function(name) { return private[name]; },
		all: function() { return private; },
		getFromIndex: function(index) {
			var k = 0;
			for (var e in private) {
				k++;
				if (k == index)
					return private[e];
			}
			return private['|'];
		},
		getPhon: function(img) {
			for (var e in private) {
				if (private[e] == img)
					return e;
			}
			return '';
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
		'[a][i]'	: 'Ail',
		'[ai][r]'	: 'Air',
		'[f][i][eu]': 'Fille',
		'[f][ou]'	: 'Fou',
		'[g][a]'	: 'Gars',
		'[j][eu]'	: 'Jeux',
		'[j][ou]'	: 'Joue',
		'[j][u][in]': 'Juin',
		'[j][u]'	: 'Jus',
		'[l][ai]'	: 'Lait',
		'[l][a]'	: 'Las',
		'[l][i]'	: 'Lit',
		'[l][ou]'	: 'Loup',
		'[m][a][m][i]'	: 'Mamie',
		'[m][eu]'	: 'Meuh',
		'[m][i]'	: 'Mie',
		'[m][u]'	: 'Mue',
		'[n][o]'	: 'Noh',
		'[p][in]'	: 'Pain',
		'[p][i]'	: 'Pis',
		'[p][oi]'	: 'Pois',
		'[p][on]'	: 'Pont',
		'[p][o]'	: 'Pot',
		'[p][u]'	: 'Pue',
		'[r][in]'	: 'Rein',
		'[r][ou]'	: 'Roue',
		'[s][on]'	: 'Son',
		'[t][on]'	: 'Thon',
		'[v][a][ch]': 'Vache',
		'[v][an]'	: 'Vent',
		'[v][ai][r]': 'Verre',
		'[v][in]'	: 'Vin',
		'[v][ou][a][l]'	: 'Voile',
		'[z][o][r][o]'	: 'Zorro/Zéro',

		'[star]' : 'Etoile',
		'[plus]' : 'Plus',
		'[pInterro]' : 'Point Interro',
		'[pExcla]' : 'Point Excla',
		'[pVirgule]' : 'Point Virgule',
		'[slash]' : 'Slash',
		'[bSlash]' : 'Backslash',
		'[tiret]' : 'Tiret',

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
		'[z]' : 'z'
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

var NB_PICS = 136;

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
		d.setAttribute("myIndex", (3+(index+i)%NB_PICS));
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

$.newPic = function(index) {
	var k = 1;
	var d = document.getElementsByClassName('pic');
	for (var i=d.length-1;i>=0;--i) {
		var item = d[i];
		item.setAttribute("class",'newPic');
		item.setAttribute("myIndex", index);
		item.setAttribute("myId", k);
		k+=2;
	}
	k = 0;
	d = document.getElementsByClassName('toPlace');
	for (var i=d.length-1;i>=0;--i) {
		var item = d[i];
		item.setAttribute("class",'newPic');
		item.setAttribute("myIndex", index);
		item.setAttribute("myId", k);
		k+=2;
	}
}

$.newPicDoneDef = function() {
	var k = 0;
	var d = document.getElementsByClassName('newPic');
	for (var i=d.length-1;i>=0;--i) {
		var item = d[i];
		if (item.getAttribute("src") == null) {
			item.parentNode.removeChild(item);
		}
		else {
			item.setAttribute("class",'pic');
		}
		item.setAttribute("onClick", "");
		k++;
	}
	$(".pic").before('<img class="toPlace">');
	$picsDiv = $("div.picsDiv");
    $s = '<img class="toPlace">';
    $picsDiv.append($s);
	$.resizeWindow();
}

$.newPicDone = function(id, index) {
	var k = 0;
	var d = document.getElementsByClassName('newPic');
	for (var i=d.length-1;i>=0;--i) {
		var item = d[i];
		if (id == k) {
			/*if (item.getAttribute("src") == null)
				item.innerHTML = "<img class=toPlace>";*/
			var s = 'pics/';
			s += WORDS.getFromIndex(index);
			s += '.svg';
			item.setAttribute("class",'pic');
			item.setAttribute("src", s);
		}
		else if (item.getAttribute("src") == null) {
			item.parentNode.removeChild(item);
		}
		else {
			item.setAttribute("class",'pic');
		}
		item.setAttribute("onClick", "");
		k++;
	}
	$(".pic").before('<img class="toPlace">');
	$picsDiv = $("div.picsDiv");
    $s = '<img class="toPlace">';
    $picsDiv.append($s);
    $('#picsDiv .pic').draggable({cursorAt:{bottom:56,left:56},revert: true, helper: "clone", containement: '#menuSuccess', scroll:false});
	$.resizeWindow();
}

$.findPic = function(x,y) {
	var dist = 10000000;
	var id = [0,0];
	var d = document.getElementsByClassName('newPic');
	for (var i=0;i<d.length;++i) {
		var rect = d[i].getBoundingClientRect();
		var dX = Math.pow(x-(rect.right+rect.left)/2,2);
		var dY = Math.pow(y-(rect.top+rect.bottom)/2,2);
		var localDist = Math.sqrt(dX+dY);
		if (localDist < dist) {
			id[0] = d[i].getAttribute("myId");
			id[1] = d[i].getAttribute("myIndex");
			dist = localDist;
		}
	}
	return id;
}

$.removeLast = function() {
	d = document.getElementsByClassName('toPlace');
	d[d.length-1].parentNode.removeChild(d[d.length-1]);
}

$.wordFromPics = function(last) {
	var result = "";
	var d = document.getElementsByClassName('pic');
	var l = d.length-1;
	if (!last)
		l--;
	for (var i=l;i>=0;--i) {
		var item = d[i];
		var s = item.getAttribute('src');
		s = s.substring(5,s.length-4);
		result = WORDS.getPhon(s) + result;
	}
	result = parsePhon(result);
	d = document.getElementById("wordForm");
	d.defaultValue = result;
	d.value = d.defaultValue;
}

function parsePhon(phon) {
	var reg = new RegExp("[\[]+", "g");
	var result = "";
	var splits = phon.split(reg);
	for (var i=0;i<splits.length-1;i++) {
		var temp = splits[i].substring(0,splits[i].length-1);
		temp = translatePhon(temp);
		if ((temp == "an") || (temp == "in")) {
			if ($.isVowel(splits[i+1],0))
				temp += 'h';
		}
		if (temp == "s") {
			if ($.isVowel(splits[i+1],0))
				temp += 's';
		}
		result += temp;
	}
	result += translatePhon(splits[i].substring(0,splits[splits.length-1].length-1));
	return result;
}

function translatePhon(phon) {
	if (phon == "tiret")
		return '-';
	if (phon == "zero")
		return '0';
	if (phon == "un")
		return '1';
	if (phon == "deux")
		return '2';
	if (phon == "trois")
		return '3';
	if (phon == "quatre")
		return '4';
	if (phon == "cinq")
		return '5';
	if (phon == "six")
		return '6';
	if (phon == "sept")
		return '7';
	if (phon == "huit")
		return '8';
	if (phon == "neuf")
		return '9';
	if (phon == "dix")
		return '10';
	if (phon == "star")
		return '*';
	if (phon == "plus")
		return '+';
	if (phon == "pInterro")
		return '?';
	if (phon == "pExcla")
		return '!';
	if (phon == "pVirgule")
		return ';';
	if (phon == "slash")
		return '/';
	if (phon == "bSlash")
		return '\\';
	if (phon == "eu")
		return 'e';
	return phon;
}

$.deleteMute = function(splits) {
	var result = '';
	var reg = new RegExp("[#]+", "g");
	splits = splits.split(reg);
	for (var i=0;i<splits.length;i++) {
		if ((splits[i] != '-') && (splits[i][0] != '?')) {
			result += splits[i];
		}
	}
	return result;
}