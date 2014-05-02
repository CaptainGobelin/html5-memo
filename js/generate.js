var WORDS = (function() {
	var private = {
		'|' 		: 'No_sign',
		'-' 		: 'mute',
		'[s][an]'	: 'PhonemesDessins-TraitMimi2-01',
		'[o]'		: 'PhonemesDessins-TraitMimi2-02',
		'[r][i]'	: 'PhonemesDessins-TraitMimi2-03',
		'[b][o][l]'	: 'PhonemesDessins-TraitMimi2-04',
		'[d][ai]'	: 'PhonemesDessins-TraitMimi2-06',
		'[n][i]'	: 'PhonemesDessins-TraitMimi2-07',
		'[eu]'		: 'PhonemesDessins-TraitMimi2-10',
		'[m][a]'	: 'PhonemesDessins-TraitMimi2-11',
		'[r][a]'	: 'PhonemesDessins-TraitMimi2-12',
		'[b][an]'	: 'PhonemesDessins-TraitMimi2-13',
		'[b][a]'	: 'PhonemesDessins-TraitMimi2-14',
		'[b][i]'	: 'PhonemesDessins-TraitMimi2-15',
		'[k][o][k]'	: 'PhonemesDessins-TraitMimi2-16',
		'[k][e]'	: 'PhonemesDessins-TraitMimi2-17',
		'[r][ai]'	: 'PhonemesDessins-TraitMimi2-18',
		'[r][o][b][i][n][ai]'	: 'PhonemesDessins-TraitMimi2-02',
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