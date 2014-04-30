var WORDS = (function() {
	var private = {
		'|' 		: 'No_sign',
		'-' 		: 'mute',
		'[ch][a]' 	: 'PhonemesDessins2-01',
		'[b][a]' 	: 'PhonemesDessins2-02',
		'[l][a]' 	: 'PhonemesDessins2-03',
		'[m][a]' 	: 'PhonemesDessins2-04',
		'[i][a][k]'	: 'PhonemesDessins2-05',
		'[g][an]' 	: 'PhonemesDessins2-06',
		'[f][an]' 	: 'PhonemesDessins2-07',
		'[a][ch]' 	: 'PhonemesDessins2-08',
		'[b][i]' 	: 'PhonemesDessins2-09',
		'[p][a]' 	: 'PhonemesDessins2-11',
		'[r][a]' 	: 'PhonemesDessins2-13',
		'[s][an]' 	: 'PhonemesDessins2-14',
		'[ou][a]' 	: 'PhonemesDessins2-15',
		'[b][an]' 	: 'PhonemesDessins2-16',
		'[ch][an]' 	: 'PhonemesDessins2-17',
		'[d][ai]' 	: 'PhonemesDessins2-18',
		'[ai]' 		: 'PhonemesDessins2-19',
		'[s][i]' 	: 'PhonemesDessins2-20',
		'[d][an]' 	: 'PhonemesDessins2-21',
		'[b][eu]' 	: 'PhonemesDessins2-22',
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
		var toTest = 6;
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