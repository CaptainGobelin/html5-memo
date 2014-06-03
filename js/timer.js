$.startTimer = function() {
	window.setInterval(function() {
	if ($.getCookie("stopTimer") == false) {
		$.deleteCookies();
		document.location = 'index.html';
	}
	}, 10000);
}