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
    id = document.getElementById("wordForm").value;
    if (id === null)
        document.location = "404.html";
    else {
    	$picsDiv = $("div.picsDiv");
        $picsDiv.empty();
    	for (var i=0;i<id.length;i++) {
            var picId = 0;
            var testChar = (id.charAt(i) < 10) && (id.charAt(i) > 0);
            //testChar = testChar || ((id.charCodeAt(i) > 96) && (id.charCodeAt(i) < 123));
    		if (testChar)
                picId = id.charAt(i);
    		$s = '<img id="'+ID.get(picId)+i+'" src="pics/' + picId;
    		$s += '.svg" height="100px" width="100px" onClick="$.showPicsList('+picId+','+i+')">';
    		$picsDiv.append($s);
    	}
    }
};

$.showPicsList = function(id, num) {
    $listDiv = $("div.listDiv");
    $listDiv.empty();
    $s = "Images disponibles: ";
    for (var i=1;i<10;i++) {
        $s += '<img id="'+ID.get(i)+'_list " src="pics/' + i;
        $s += '.svg" type="image/svg+xml" height="100px" width="100px"';
        $s += 'onClick="$.changePic('+id+','+i+','+num+')">';
    }
    $listDiv.append($s);
}

$.changePic = function(oldId, image, num) {
    var newId = '';
    newId += ID.get(image) + num;
    var newSrc = 'pics/' + image + '.svg';
    document.getElementById(ID.get(oldId)+num).src = newSrc;
    document.getElementById(ID.get(oldId)+num).onclick = function() {
        $.showPicsList(image,num);
    }
    document.getElementById(ID.get(oldId)+num).id = newId;
    $.hidePicsList();
}

$.hidePicsList = function() {
    $listDiv = $("div.listDiv");
    $listDiv.empty();
}