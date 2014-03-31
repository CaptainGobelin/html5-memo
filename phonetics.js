var phon = [
['-','d[','h','p[','p[','t[','ESt[','s[','x['],
['a','a','Oi','aNN','','','',''],
['eu','e','eu','oe!N','','','',''],
['i','i','y','ill','iNN-','','',''],
['o','o','au','eau','oNN','','',''],
['u','u','','','','','',''],
['in','in!-','un!-','ain!-','ein!-','','',''],
['on','on!-','omP','omB','','','',''],
['ou','ou','oI','','','','',''],
['an','an!-','en!-','','','','',''],
['ai','ai','esT','e~~','[~es[','er[','',''],
['b','b','','','','','',''],
['k','c','k','q','qu','','',''],
['ch','ch','sh','','','','',''],
['d','d','','','','','',''],
['f','f','ph','','','','',''],
['g','g','gu','','','','',''],
['gn','gn','','','','','',''],
['j','j','gE','','','','',''],
['l','l','ll','','','','',''],
['m','m','mm','','','','',''],
['n','n','nn','','','','',''],
['p','p','pp','','','','',''],
['r','r','rr','','','','',''],
['s','s','ss','tION','sCA','cE','sc-','cI'],
['t','t','tt','ESt-','','','',''],
['v','v','w','','','','',''],
['x','x','','','','','',''],
['z','z','-s-','','','','',''],
];

var NB_PHON = 29;
var NB_TRAN = 7;

var NUM = (function() {
    var private = {
        '0' : '0',
        '1' : '1',
        '2' : '2',
        '3' : '3',
        '4' : '4',
        '5' : '5',
        '6' : '6',
        '7' : '7',
        '8' : '8',
        '9' : '9',
        '10' : 'a',
        '11' : 'b',
        '12' : 'c',
        '13' : 'd',
        '14' : 'e',
        '15' : 'f',
        '16' : 'g',
        '17' : 'h',
        '18' : 'i',
        '19' : 'j',
        '20' : 'k',
        '21' : 'l',
        '22' : 'm',
        '23' : 'n',
        '24' : 'o',
        '25' : 'p',
        '26' : 'q',
        '27' : 'r',
        '28' : 's',
        '29' : 't',
    };
    return {
        get: function(name) { return private[name]; }
    };
})();

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
                            phoned += phon[i][0] + '#';
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
            test = test && ($.isVowel(word, pos-ruleSize[0]+i)!=negative);
        }
        else if (rule[i] == '~') {
            test = test && ($.isConsonant(word, pos-ruleSize[0]+i)!=negative);
        }
        else if (rule[i] == '<') {
            test = test && ($.doubleLetter(word, pos-ruleSize[0]+i)!=negative);
        }
        else if (rule[i] == '[') {
            test = test && ($.endChar(word, pos-ruleSize[0]+i)!=negative);
        }
        else if (rule[i] == '*') {
            test = test && ($.isLetter(word, pos-ruleSize[0]+i)!=negative);
        }
        else if ((rule.charCodeAt(i) > 64) && (rule.charCodeAt(i) < 91)) {
            test = test && ($.checkLetter(word, rule.charCodeAt(i), pos-ruleSize[0]+i)!=negative);
        }
        negative = false;
    }
    shift = ruleSize[0];
    for (var i=0;i<ruleSize[1];i++)
        if (word[pos+i] != rule[i+shift])
                test = false;
    shift = ruleSize[0] + ruleSize[1];
    var tempShift = 0;
    for (var i=0;i<ruleSize[2];i++) {
        if (rule[i+shift] == '!') {
            negative = true;
            i++;
            tempShift++;;
        }
        if (rule[i+shift] == '-') {
            test = test && ($.isVowel(word, pos+i+ruleSize[1]-tempShift)!=negative);
        }
        else if (rule[i+shift] == '~') {
            test = test && ($.isConsonant(word, pos+i+ruleSize[1]-tempShift)!=negative);
        }
        else if (rule[i+shift] == '<') {
            test = test && ($.doubleLetter(word, pos+i+ruleSize[1]-tempShift)!=negative);
        }
        else if (rule[i+shift] == '[') {
            test = test && ($.endChar(word, pos+i+ruleSize[1]-tempShift)!=negative);
        }
        else if (rule[i+shift] == '*') {
            test = test && ($.isLetter(word, pos+i+ruleSize[1]-tempShift)!=negative);
        }
        else if ((rule.charCodeAt(i+shift) > 64) && (rule.charCodeAt(i+shift) < 91)) {
            test = test && ($.checkLetter(word, rule.charCodeAt(i+shift), pos+ruleSize[1]+i-tempShift)!=negative);
        }
        negative = false;
    }
    if (test)
        len.val = ruleSize[1];
    return test;
}