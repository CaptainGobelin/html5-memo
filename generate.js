var WORDS = (function() {
    var private = {
        '-' : 'No_sign',
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
	for (var i=0;i<word.match(/#/g).length;i++) {
		var sep1 = 0;
		var sep2 = word.indexOf('#',sep1+1);
		var sep3 = word.indexOf('#',sep2+1);
		var sep4 = word.indexOf('#',sep3+1);
		var w1 = word.slice(sep1,sep2);
		var w2 = word.slice(sep2+1,sep3);
		var w3 = word.slice(sep3+1,sep4);
		return w1+w2+w3;
	}
}