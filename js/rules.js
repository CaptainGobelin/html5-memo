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
    var letters = 'abcdefghijklmnopqrstuvwxyzéèêëàâîïôöùüç.$*/\\?!;+-0123456789';
    for (var i=0;i<letters.length;i++)
        if (word[pos] == letters[i])
            return true;
    return false;
}

$.isLetterB = function(word, pos) {
    var letters = 'abcdefghijklmnopqrstuvwxyzéèêëàâîïôöùüç$';
    for (var i=0;i<letters.length;i++)
        if (word[pos] == letters[i])
            return true;
    return false;
}

$.isVowel = function(word, pos) {
    if (word.length <= pos)
        return false;
    var letters = 'aeiouyéèêëàâîïôöùü';
    for (var i=0;i<letters.length;i++)
        if (word[pos] == letters[i])
            return true;
    return false;
}

$.isConsonant = function(word, pos) {
    if (word.length <= pos)
        return false;
    var consonant = "bcdfghjklmnpqrstvwxzç";
    for (var i=0;i<consonant.length;i++)
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
    if (!$.isLetterB(word, pos))
        return true;
    return false;
}

$.checkPlural = function(word, pos) {
    if (word.length <= pos)
        return false;
    if (word[pos] == 's')
        return true;
    if (word[pos] == '$')
        return true;
    return false;
}

$.isAccE = function(word, pos) {
    if (word.length <= pos)
        return false;
    var letters = 'eéèêë';
    for (var i=0;i<letters.length;i++)
        if (word[pos] == letters[i])
            return true;
    return false;
}

$.isAccI = function(word, pos) {
    if (word.length <= pos)
        return false;
    var letters = 'iîï';
    for (var i=0;i<letters.length;i++)
        if (word[pos] == letters[i])
            return true;
    return false;
}

$.isAccO = function(word, pos) {
    if (word.length <= pos)
        return false;
    var letters = 'oôö';
    for (var i=0;i<letters.length;i++)
        if (word[pos] == letters[i])
            return true;
    return false;
}

$.isAccU = function(word, pos) {
    if (word.length <= pos)
        return false;
    var letters = 'uùü';
    for (var i=0;i<letters.length;i++)
        if (word[pos] == letters[i])
            return true;
    return false;
}