$.resizeWindow = function() {
	var h = Math.min($(window).height(),$(window).width());
	var d = document.getElementsByClassName('center');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style", 'height:'+(9*h/100)+'px;font-size: '+(7*h/100)+'px;');
	}
	d = document.getElementsByClassName('centerInput');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style", 'height:'+(9*h/100)+'px;font-size: '+(7*h/100)+'px;');
	}
	d = document.getElementsByClassName('pic');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style",'width:'+(22*h/100)+'px;height:'+(22*h/100)+'px;');
	}
	/*d = document.getElementsByClassName('logoMenu');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style",'height:'+(9*h/100)+'px;');
	}*/
	var h2 = $(window).height();
	var w = Math.max($(window).height(),$(window).width());
	d = document.getElementsByClassName('inputIntro');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style", 'margin-left:'+(w/16)+'px;height:'+w/26+'px;');
	}
	d = document.getElementsByClassName('arrowButtonIntro');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style", 'margin-left:'+(w/16)+'px;');
	}
	d = document.getElementsByClassName('wordLabel');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style", 'font-size:'+(h2/50)+'px;');
	}
	/*var w = $(window).width();
	d = document.getElementsByClassName('wordLabel');
	for (var i=0;i<d.length;++i) {
		var d2 = document.getElementById('wordForm');
		var item = d[i];  
		item.setAttribute("style", 'margin-left:'+((0.95*0.8*w)-d2.offsetWidth)/2+'px;');
	}*/
	h = $(window).width()*0.15;
	d = document.getElementsByClassName('centerMenu');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style", 'height:'+(2*h/10)+'px;font-size: '+(20*h/100)+'px;');
	}
	d = document.getElementsByClassName('leftMenu');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style", 'height:'+(1.5*h/10)+'px;font-size: '+(15*h/100)+'px;');
	}
	d = document.getElementsByClassName('colorButton');
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		var myH = item.offsetHeight;
		item.setAttribute("style", 'width:'+myH+'px;');
	}
	$.resizeTipPanel();
	$.menuColor();
}

$.resizeTipPanel = function() {
	var d = document.getElementsByClassName('tipPanel');
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		if (1100 < $(window).width()) {
			h = $(window).width()/5;
			item.setAttribute("style", 'height:'+(8*h/12+6)+'px;font-size: '+(h/12)+'px;');
		}
		else {
			var w = $(window).width()*0.93;
			h = $(window).height()*0.16;
			var k = 10;
			var f;
			do {
				k--;
				f = w/((140/(k-1))*0.60);
			} while ((f > (h/k)) && (k >= 2));
			item.setAttribute("style", 'height:'+(k*f-2)+'px;top:'+($(window).height()-k*f-4)+'px;font-size: '+f+'px;');
		}
	}
}

$.menuColor = function() {
	var color = $.getCookie("color");
	if (color == "false")
		color = "#aa2d22";
	var d = document.getElementsByClassName('leftMenuClose');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute('style', 'background-color:'+color+';');
	}
	d = document.getElementsByClassName('leftMenuOpen');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute('style', 'background-color:'+color+';');
	}
	d = document.getElementsByClassName('optionsBarOpen');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute('style', 'background-color:'+color+';');
	}
}