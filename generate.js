var WORDS = (function() {
    var private = {
        '|' : 'No_sign',
        '-' : 'mute',
        'ia' : 'yak',
        'cha' : 'chat',
        'ba' : 'bas',
        'la' : 'las',
        'ma' : 'mat',
        'gan' : 'gant',
        'fan' : 'faon',
        'ach' : 'hache',
        'bi' : 'bille',
    };
    return {
        get: function(name) { return private[name]; }
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
    var splits = word.split(reg);
    var s = '';
    for (var i=0;i<splits.length-1;i++) {
        var toTest = 3;
        var test = '';
        while (toTest > 0) {
            test = '';
            for (var k=0;k<toTest;k++)
                test += splits[i+k];
            if (WORDS.get(test) == undefined)
                toTest--;
            else {
                i += toTest-1;
                toTest = 0;
            }
        }
        if (WORDS.get(test) == undefined)
            test = '|';
        test = WORDS.get(test);
        s += test + " ";
    }
    return s;
}