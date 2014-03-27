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

$.isConsonant = function(word, pos) {
    if (word.length <= pos)
        return false;
    var consonant = "bcdfghjklmnpqrstvwxz";
    for (var i=0;i<20;i++)
        if (word[pos] == consonant[i])
            return true;
    return false;
}

$.checkLetter = function(word, letter, pos) {
    if (word.length <= pos)
        return false;
    if (word.charCodeAt(pos) == letter+32)
        return true;
    return false;
}

$.doubleLetter = function(word, pos) {
    if (pos == 0)
        return false;
    if (word.length <= pos)
        return false;
    if (word[pos] == word[pos-1])
        return true;
    return false;
}

$.endChar = function(word, pos) {
    if (pos >= word.length)
        return true;
    if (!$.isLetter(word, pos))
        return true;
    return false;
}