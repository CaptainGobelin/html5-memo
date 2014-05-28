$.enterApp = function() {
	var d = document.getElementsByClassName('introBack');
	for (var i=0;i<d.length;++i) {
		var item = d[i]; 
		item.setAttribute('style', 'opacity: 0;');
	}
	d = document.getElementsByClassName('introCache');
	for (var i=0;i<d.length;++i) {
		var item = d[i]; 
		//item.setAttribute('autoplay', '');
		item.setAttribute('style', '-webkit-transform: scale(25,25);-moz-transform: scale(25,25);');
	}
	/*indow.setInterval(function() {
		$.resizeWindow();
	}, 100);*/
	var t = window.setInterval(function() {
		var element = document.getElementsByClassName("introCache");
		element[0].parentNode.removeChild(element[0]);
		element = document.getElementsByClassName("introBack");
		element[0].parentNode.removeChild(element[0]);
		$.resizeWindow();
		clearInterval(t);
	}, 2000);
}