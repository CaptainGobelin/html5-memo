$.resizeWindow = function() {
	var h = Math.min($(window).height(),$(window).width());
	var d = document.getElementsByClassName('center');
	for (var i=0;i<d.length;++i) {
	    var item = d[i];  
	    item.setAttribute("style", 'height:'+(9*h/100)+'px;font-size: '+(7*h/100)+'px;');
	}
}