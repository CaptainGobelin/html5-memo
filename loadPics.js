var ID = (function() {
    var private = {
        '0' : 'No_sign',
        '1' : 'yak',
        '2' : 'chat',
        '3' : 'bas',
        '4' : 'las',
        '5' : 'mat',
        '6' : 'gant',
        '7' : 'faon',
        '8' : 'hache',
        '9' : 'bille',
    };
    return {
        get: function(name) { return private[name]; }
    };
})();

$.wordWithPics  = function() {
    word = document.getElementById("wordForm").value;
    if (word === null)
        document.location = "404.html";
    else {
        $picsDiv = $("div.picsDiv");
        $picsDiv.empty();
        var phonned = $.generatePhon(word);
        phonned = $.groupPhon(phonned);
        var reg = new RegExp("[ ]+", "g");
        var splits = phonned.split(reg);
    	for (var i=0;i<splits.length-1;i++) {
            if (splits[i] != "mute") {
                $s = '<img id="img_'+i+'" src="pics/' + splits[i];
                $s += '.svg" height="100px" width="100px" onClick="$.showPicsList('+i+')">';
        		$picsDiv.append($s);
            }
    	}
    }
};

$.showPicsList = function(id) {
    $listDiv = $("div.listDiv");
    $listDiv.empty();
    $s = "Liste images: "
    var k = 0;
    for (var img in WORDS.all()) {
        k++;
        if (k < 3)
            continue;
        $s += '<img id=img_list_"'+k+' src="pics/' + WORDS.get(img);
        $s += '.svg" type="image/svg+xml" height="100px" width="100px"';
        $s += ' onClick="$.changePic('+id+','+k+')">';
    }
    $listDiv.append($s);
}

$.changePic = function(id, image) {
    var newSrc = 'pics/' + WORDS.getFromIndex(image) + '.svg';
    document.getElementById('img_'+id).src = newSrc;
    $.hidePicsList();
}

$.hidePicsList = function() {
    $listDiv = $("div.listDiv");
    $listDiv.empty();
}