var WORDS = (function() {
	var private = {
		'|' 	: 'No_sign',
		'-' 	: 'mute',
		'cha' 	: 'PhonemesDessins2-01',
		'ba' 	: 'PhonemesDessins2-02',
		'la' 	: 'PhonemesDessins2-03',
		'ma' 	: 'PhonemesDessins2-04',
		'ia' 	: 'PhonemesDessins2-05',
		'gan' 	: 'PhonemesDessins2-06',
		'fan' 	: 'PhonemesDessins2-07',
		'ach' 	: 'PhonemesDessins2-08',
		'bi' 	: 'PhonemesDessins2-09',
		'pa' 	: 'PhonemesDessins2-11',
		'ra' 	: 'PhonemesDessins2-13',
		'san' 	: 'PhonemesDessins2-14',
		'oua' 	: 'PhonemesDessins2-15',
		'ban' 	: 'PhonemesDessins2-16',
		'chan' 	: 'PhonemesDessins2-17',
		'dai' 	: 'PhonemesDessins2-18',
		'ai' 	: 'PhonemesDessins2-19',
		'si' 	: 'PhonemesDessins2-20',
		'dan' 	: 'PhonemesDessins2-21',
		'beu' 	: 'PhonemesDessins2-22',
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
		var toTest = 3;
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