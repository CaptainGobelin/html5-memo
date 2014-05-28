$.loadCleofee = function() {
	$cleoDiv = $("div.cleoDiv");
	$cleoDiv.empty();
	var s = '<img id="cleoImg" class="shadow" src="sysPics/CleofeeOeilCentre-vide.svg">';
	s += '<img id="cleoEye" src="sysPics/OeilOuvertCleofee.svg">';
	s += '<p class="cleoTip">';
	s += 'J\'écris des <a class="toColor">trucs</a> pour tester !';
	s += '</p>';
	$cleoDiv.append(s);
}