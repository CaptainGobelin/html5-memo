$.wordWithPics  = function() {
    word = document.getElementById("wordForm").value;
    if (word === null)
        document.location = "404.html";
    else {
        $picsDiv = $("div.picsDiv");
        $picsDiv.empty();
        var phonned = $.generatePhon(word);
        $meltedSplits = $.getPhonSplits(phonned);
        var meltedPhon = $.groupPhon(phonned);
        var reg = new RegExp("[ ]+", "g");
        $splits = meltedPhon.split(reg);
    	for (var i=0;i<$splits.length-1;i++) {
            if ($splits[i] != "mute") {
                $s = '<img id="img_'+i+'" src="pics/' + $splits[i];
                $s += '.svg" height="100px" width="100px" onClick="$.showPicsList('+i+')">';
        		$picsDiv.append($s);
            }
    	}
        $.showPhon(phonned);
    }
};

$.picsWithPhon = function () {
    picsDiv = $("div.picsDiv");
    $picsDiv.empty();
    var meltedPhon = $.groupPhonFromSplits();
    var reg = new RegExp("[ ]+", "g");
    $splits = meltedPhon.split(reg);
    for (var i=0;i<$splits.length-1;i++) {
        if ($splits[i] != "mute") {
            $s = '<img id="img_'+i+'" src="pics/' + $splits[i];
            $s += '.svg" height="100px" width="100px" onClick="$.showPicsList('+i+')">';
            $picsDiv.append($s);
        }
    }
}

$.showPhon = function(phonned) {
    $phonDiv = $("div.phonDiv");
    $phonDiv.empty();
    var div = "Phonétisation: ";
    for (var i=0;i<$meltedSplits.length-1;i++) {
        div += '<a class="phon_'+i+'" onClick="$.showPhonList('+i+')">'+$meltedSplits[i]+'</>';
    }
    $phonDiv.append(div);
}

$.showPhonList = function(id) {
    $listDiv = $("div.listDiv");
    $listDiv.empty();
    $s = "Liste phonèmes: ";
    for (var i=0;i<NB_PHON;i++) {
        $s += '<a class="phon_list_'+i+'" onClick=$.changePhon('+id+','+i+')>'+phon[i][0]+'</a>';
    }
    $listDiv.append($s);
}

$.changePhon = function(id, phono) {
    $phonA = $('a.phon_'+id);
    $phonA.empty();
    $phonA.append(phon[phono][0]);
    $meltedSplits[id] = phon[phono][0];
    $.picsWithPhon();
    $.hidePicsList();
}

$.showPicsList = function(id) {
    $listDiv = $("div.listDiv");
    $listDiv.empty();
    $s = "Liste images: ";
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