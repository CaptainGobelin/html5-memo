$.checkPassword = function() {
	var pwd = document.getElementById('wordForm').value;
	var reg = [
		new RegExp("[A-Z]"),
		new RegExp("[a-z]"),
		new RegExp("[0-9]|[äâàéèêëôöùûüç]|[().-?!/$]")
	];
	var test = true;
	for (var i=0;i<reg.length;i++)
		test = test && reg[i].test(pwd);
	test = test;
	if (pwd.length < 7)
		test = false;
	if (pwd.length > 19)
		test = true;
	var d = document.getElementById('checkButton');
	if (test) {
		d.setAttribute("class", "checkPwdButton firstLineButton validPwd");
		d.setAttribute("onClick", "");
		d = document.getElementById('pwdTip');
		d.setAttribute('class', 'pwdTip pwdTipClose');
	}
	else {
		d.setAttribute("class", "checkPwdButton firstLineButton invalidPwd");
		d.setAttribute("onClick", "$.showPwdTip();");
	}
}

$.showPwdTip = function() {
	var d = document.getElementById('pwdTip');
	d.setAttribute('class', 'pwdTip pwdTipOpen');
	d = document.getElementById('checkButton');
	d.setAttribute("onClick", "$.hidePwdTip();");
}

$.hidePwdTip = function() {
	var d = document.getElementById('pwdTip');
	d.setAttribute('class', 'pwdTip pwdTipClose');
	d = document.getElementById('checkButton');
	d.setAttribute("onClick", "$.showPwdTip();");
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