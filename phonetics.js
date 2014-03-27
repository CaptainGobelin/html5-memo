var phon = [
['-',''],
['a','a'],
['eu','e'],
['i','i'],
['o','o'],
['u','u'],
['in','in'],
['on','on'],
['ou','ou'],
['an','an'],
['ai','ai'],
['b','b'],
['k','c'],
['ch','ch'],
['d','d'],
['f','f'],
['g','g'],
['gn','gn'],
['j','j'],
['l','l'],
['m','m'],
['n','n'],
['p','p'],
['r','r'],
['s','s'],
['t','t'],
['v','v'],
['x','x'],
['z','z'],
];

var NB_PHON = 29;
var NB_TRAN = 1;

$.generateWord  = function() {
     word = document.getElementById("wordForm").value;
    if (word === null)
        document.location = "404.html";
    else {
    	$wordDiv = $("div.phonWord");
        $wordDiv.empty();
    	$s = 'Phonétisation: ' + $.generatePhon(word);
        $wordDiv.empty();
        $wordDiv.append($s);
    }
};

$.generatePhon = function(word) {
    var phoned = '';
    var pos = 0;
    while (pos < word.length) {
        var toCut = {val:0};
        toCut.val = Math.min(5, word.length-pos);
        var testSuccess = false;
        while (toCut.val > 0) {
            for (var i=0;i<NB_PHON;i++) {
                for (var j=0;j<NB_TRAN;j++) {
                    if ($.strCompare(phon[i][1+j], word, pos, toCut)) {
                        testSuccess = true;
                        phoned += ' ' + phon[i][0];
                        pos += toCut.val;
                        break;
                    }
                }
                if (testSuccess)
                    break;
            }
            if (testSuccess)
                toCut.val = -1;
            else 
                toCut.val--;
        }
        if (toCut.val == 0) {
            phoned += ' !' + word[pos] + '?';
            pos++;
        }
    }
    return phoned;
}

$.strCompare = function(rule, word, pos, len) {
    if (rule == '')
        return false;
    var ruleSize = [0, 0, 0];
    ruleSize = $.ruleLength(rule);
    if (word.length < (pos+ruleSize[1]))
        return false;
    if (rule.length < len.val)
        return false;
    var test = true;
    var shift = 0;
    var negative = false;
    for (var i=0;i<ruleSize[0];i++) {
        if (rule[i] == '!') {
            negative = true;
            i++;
        }
        if (rule[i] == '-') {
            test = test && (isVowel(word, pos-ruleSize[0]+i)!=negative);
        }
        else if (rule[i] == '~') {
            test = test && (isConsonant(word, pos-ruleSize[0]+i)!=negative);
        }
        negative = false;
    }
    shift = ruleSize[0];
    for (var i=0;i<ruleSize[1];i++)
        if (word[pos+i] != rule[i+shift])
                test = false;
    shift = ruleSize[0] + ruleSize[1];
    for (var i=0;i<ruleSize[2];i++) {
        if (rule[i+shift] == '!') {
            negative = true;
            i++;
        }
        if (rule[i+shift] == '-') {
            test = test && (isVowel(word, pos+i+ruleSize[1])!=negative);
        }
        else if (rule[i+shift] == '~') {
            test = test && (isConsonant(word, pos+i+ruleSize[1])!=negative);
        }
        negative = false;
    }
    if (test)
        len.val = ruleSize[1];
    return test;
}