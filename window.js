$.resizeWindow = function() {
	var h = $(window).height();
	var d = document.getElementsByClassName('center');
	for (var i=0;i<d.length;++i) {
	    var item = d[i];  
	    item.setAttribute("style", 'height:'+(9*h/100)+'px;font-size: '+(8*h/100)+'px;');
	}
	d = document.getElementsByClassName('centerMenu');
	for (var i=0;i<d.length;++i) {
	    var item = d[i];  
	    item.setAttribute("style", 'height:'+(19*h/100)+'px;font-size: '+(17*h/100)+'px;');
	}
}