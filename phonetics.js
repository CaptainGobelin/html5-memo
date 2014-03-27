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
    	$s = $.generatePhon(word);
        $wordDiv.empty();
        $wordDiv.append($s);
    }
};

$.generatePhon = function(word) {
    var phoned = '';
    var pos = 0;
    while (pos < word.length) {
        var toCut = Math.min(5, word.length-pos);
        var testSuccess = false;
        while (toCut > 0) {
            for (var i=0;i<NB_PHON;i++) {
                for (var j=0;j<NB_TRAN;j++) {
                    if ($.strCompare(phon[i][1+j], word, pos, toCut)) {
                        testSuccess = true;
                        phoned += ' ' + phon[i][0];
                        pos += toCut;
                        break;
                    }
                }
                if (testSuccess)
                    break;
            }
            if (testSuccess)
                toCut = -1;
            else 
                toCut--;
        }
        if (toCut == 0) {
            phoned += ' !' + word[pos] + '?';
            pos++;
        }
    }
    return phoned;
}

$.strCompare = function(phonem, word, pos, len) {
    for (var i=0;i<len;i++) {
        if (word[i+pos] != phonem[i])
            return false;
    }
    return true;
}