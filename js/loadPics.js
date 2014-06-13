$.wordWithPics  = function() {
    word = document.getElementById("wordForm").value;
    word = word.toLowerCase();
    if (word === null)
        document.location = "404.html";
    else {
        var phonned = $.generatePhon(word);
        $meltedSplits = $.getPhonSplits(phonned);
        var meltedPhon = $.groupPhon(phonned);
        var reg = new RegExp("[ ]+", "g");
        $splits = meltedPhon.split(reg);
        privateGetPics();
        $.showPhon(phonned);
    }
};

$.picsWithPhon = function () {
    var meltedPhon = $.groupPhonFromSplits();
    var reg = new RegExp("[ ]+", "g");
    $splits = meltedPhon.split(reg);
    privateGetPics();
}

function privateGetPics() {
    $picsDiv = $("div.picsDiv");
    $picsDiv.empty();
    $s = '<img class="toPlace">';
    $picsDiv.append($s);
    for (var i=0;i<$splits.length-1;i++) {
        if ($splits[i] != "mute") {
            var myS = $('<img class="pic" src="pics/'+$splits[i]+'.svg"></img>');
            $picsDiv.append(myS);
            $picsDiv.append($s);
        }
    };
    $('#picsDiv .pic').draggable({revert: true, helper: "clone", containement: '#menuSuccess', scroll:false});
}

$.showPhon = function(phonned) {
    $phonDiv = $("div.phonDiv");
    $phonDiv.empty();
    var div = '<p class="center">Phonétisation:</p><p class="center">';
    for (var i=0;i<$meltedSplits.length-1;i++) {
        div += '<button class="phon_'+i+'" onClick="$.showPhonList('+i+')">'+$meltedSplits[i]+'</button>';
    }
    div += '</p>';
    $phonDiv.append(div);
    $.resizeWindow();
}

function pirvateRestorePicsClass() {
    for (var i=0;i<$splits.length-1;i++){
        doc = document.getElementById('img_'+i);
        if (doc != null)
            doc.setAttribute("class", "shadow");
    }
}

$.showPhonList = function(id) {
    pirvateRestorePicsClass();
    $s = '<p class="center"><button onClick=$.addPhon('+(id)+')><-Ajouter</button>';
    $s += '<button onClick=$.removePhon('+id+')>Supprimer</button>';
    $s += '<button onClick=$.addPhon('+(id+1)+')>Ajouter-></button></p>';
    $listDiv = $("div.listDiv");
    $listDiv.empty();
    $s += '<p class="center">Liste phonèmes:</p><p class="center">';
    for (var i=0;i<NB_PHON-2;i++) {
        $s += '<button class="phon_list_'+i+'" onClick=$.changePhon('+id+','+i+')>'+phon[i][0]+'</button>';
    }
    $s += '</p>';
    $listDiv.append($s);
    $.resizeWindow();
}

$.addPhon = function(id) {
    $meltedSplits.splice(id,0,'-');
    $.showPhon();
    $.picsWithPhon();
}

$.removePhon = function(id) {
    $meltedSplits.splice(id,1);
    $.showPhon();
    $.picsWithPhon();
}

$.changePhon = function(id, phono) {
    $phonA = $('button.phon_'+id);
    $phonA.empty();
    $phonA.append(phon[phono][0]);
    $meltedSplits[id] = phon[phono][0];
    $.picsWithPhon();
    $.hidePicsList();
}

$.showPicsList = function(id) {
    pirvateRestorePicsClass();
    document.getElementById('img_'+id).setAttribute("class", "choosen");
    $listDiv = $("div.listDiv");
    $listDiv.empty();
    $s = '<p class="center">Liste images:</p><p class="center">';
    var k = 0;
    for (var img in WORDS.all()) {
        k++;
        if (k < 3)
            continue;
        $s += '<img id=img_list_"'+k+' class="shadow" src="pics/' + WORDS.get(img);
        $s += '.svg" type="image/svg+xml" height="100px" width="100px"';
        $s += ' onClick="$.changePic('+id+','+k+')">';
    }
    $s += '</p>';
    $listDiv.append($s);
    $.resizeWindow();
}

$.changePic = function(id, image) {
    var newSrc = 'pics/' + WORDS.getFromIndex(image) + '.svg';
    document.getElementById('img_'+id).src = newSrc;
    document.getElementById('img_'+id).setAttribute("class", "shadow");
    $.hidePicsList();
}

$.hidePicsList = function() {
    $listDiv = $("div.listDiv");
    $listDiv.empty();
}