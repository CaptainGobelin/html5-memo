$.checkPassword = function(pwd) {
	var reg = [
		new RegExp("[A-Z]"),
		new RegExp("[a-z]"),
		new RegExp("[0-9]|[äâàéèêëôöùûüç]|[().-?!/$]")
	];
	var test = true;
	for (var i=0;i<reg.length;i++)
		test = test && reg[i].test(pwd);
	test = test && (pwd.length > 9);
	return test;
}

$.checkSecurity = function() {
	var d = document.getElementById('tipPanel');
	d.setAttribute('class', 'tipPanel');
	tipPanel = $("#tipPanel");
	tipPanel.empty();
	var test = $.checkPassword(document.getElementById("wordForm").value);
	if (!test)
		tipPanel.append('Attention un mot de passe devrait contenir au moins 10 caractères, des minuscules, majuscules, chiffres et caractères spéciaux pour être sécurisé !')
	else
		d.setAttribute('class','');
	$.resizeTipPanel();
}