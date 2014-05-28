$.loadCleofee = function() {
	$cleoDiv = $("div.cleoDiv");
	$cleoDiv.empty();
	var s = '<img id="cleoImg" class="shadow" src="sysPics/CleofeeOeilCentre-vide.svg">';
	s += '<img id="cleoEye" src="sysPics/OeilOuvertCleofee.svg">';
	$cleoDiv.append(s);
}