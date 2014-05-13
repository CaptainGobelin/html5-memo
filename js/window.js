$.resizeWindow = function() {
	var h = Math.min($(window).height(),$(window).width());
	var d = document.getElementsByClassName('center');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style", 'height:'+(9*h/100)+'px;font-size: '+(7*h/100)+'px;');
	}
	d = document.getElementsByClassName('pic');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style",'width:'+(22*h/100)+'px;height:'+(22*h/100)+'px;');
	}
	d = document.getElementsByClassName('logoMenu');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style",'height:'+(9*h/100)+'px;');
	}
	$.resizeTipPanel();
}

$.resizeTipPanel = function() {
	var d = document.getElementsByClassName('tipPanel');
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		if (1100 < $(window).width()) {
			h = $(window).width()/5;
			item.setAttribute("style", 'height:'+(6*h/12+6)+'px;font-size: '+(h/12)+'px;');
		}
		else {
			var w = $(window).width()*0.93;
			h = $(window).height()*0.18;
			var k = 10;
			var f;
			do {
				k--;
				f = k*1.6*w/160;
			} while ((f > (h/k)) && (k >= 1));
			item.setAttribute("style", 'height:'+(k*f-2)+'px;top:'+($(window).height()-k*f+2)+'px;font-size: '+f+'px;');
		}
	}
}