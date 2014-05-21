$.loadForm = function() {
	$form = $("p.centerInput");
	$form.empty();
	var s = '<label for="wordForm" class="wordLabel">Quel est le mot encrypté dans ces dessins?</label>';
	s += '<input id="wordForm" onkeydown="if (event.keyCode == 13) {$.wordWithPics();}" class="wordForm inputDefault" type="text" name="id" value="" size="16"/>';
	$form.append(s);
}

$.loadRandomLevel = function() {
	switch (Math.floor(Math.random()*1)) {
		case 1:
			$.loadLevelOne();
			break;
		default:
			$.loadLevelOne();
	}
}

$.loadLevelOne = function () {
	$picsDiv = $("div.picsDiv");
	$picsDiv.empty();
	var s = '<img id="img_0" class="shadow" src="pics/PhonemesDessins-TraitMimi2-11.svg" height="100px" width="100px">';
	s+= '<img id="img_0" class="shadow" src="pics/PhonemesDessins-TraitMimi2-03.svg" height="100px" width="100px">';
	s+= '<img id="img_0" class="shadow" src="pics/PhonemesDessins-TraitMimi2-02.svg" height="100px" width="100px">';
	$picsDiv.append(s);
}