$.resizeWindow = function() {
	var h = $(window).height();
	var d = document.getElementsByClassName('center');
	for (var i=0;i<d.length;++i) {
	    var item = d[i];  
	    item.setAttribute("style", 'height:'+(9*h/100)+'px;font-size: '+(7*h/100)+'px;');
	}
}