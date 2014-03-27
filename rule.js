$.ruleLength = function(rule) {
	var count = [0, 0, 0];
	var firstRulePassed = false;
	for (var i=0;i<rule.length;i++) {
		if ($.isLetter(rule, i)) {
			count[1]++;
			firstRulePassed = true;
		}
		else if (!firstRulePassed)
			count[0]++;
	}
	count[2] = rule.length - count[0] - count[1];
	return count;
}

$.isLetter = function(word, pos) {
	var letters = 'abcdefghijklmnopqrstuvwxyz';
	for (var i=0;i<26;i++)
		if (word[pos] == letters[i])
			return true;
	return false;
}

$.isVowel = function(word, pos) {
	if (word.length <= pos)
		return false;
	var letters = 'aeiouy';
	for (var i=0;i<6;i++)
		if (word[pos] == letters[i])
			return true;
	return false;
}

$.isConsonnant = function(word, pos) {
	if (word.length <= pos)
		return false;
	var consonant = "bcdfghjklmnpqrstvwxz";
	for (var i=0;i<20;i++)
		if (word[pos] == consonant[i])
			return true;
	return false;
}