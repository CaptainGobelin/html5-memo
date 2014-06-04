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
	h = $(window).width()*0.15;
	d = document.getElementsByClassName('centerMenu');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style", 'height:'+(2*h/10)+'px;font-size: '+(20*h/100)+'px;');
	}
	d = document.getElementsByClassName('leftMenu');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style", 'height:'+(0.4*h2/10)+'px;font-size: '+(3.5*h2/100)+'px;');
	}
	d = document.getElementsByClassName('colorButton');
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		var myH = item.offsetHeight;
		item.setAttribute("style", 'width:'+myH+'px !IMPORTANT;border-radius:'+myH/3+'px;');
	}
	var w2 = $(window).width();
	d = document.getElementsByClassName('pic');
	var n = 0;
	var t = d.length;
	var suiv = (n+1)/Math.floor(0.99+(t/(n+1)));
	var act = 0;
	var r = 16/9;
	do {
		n++;
		act = suiv;
		suiv = (n+1)/Math.floor(0.99+(t/(n+1)));
	} while (Math.abs(suiv-r) < Math.abs(act-r));
	if (t%n == 1)
		n++;
	var newH = Math.floor(0.5*h2/(Math.floor(0.99+(t/n))));
	var newW = Math.floor((8/9)*h2/n);
	var newS = Math.min(newW, newH);
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		item.setAttribute("style",'width:auto;height:'+newS+'px;test:'+n+','+t+','+newH+';');
	}
	d = document.getElementsByClassName('picsDiv');
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		var margin = w2*0.1+((w2*0.76-(newS*n))/2);
		var marginT = ((newH-newS)*Math.floor(0.99+(t/n)))/2;
		item.setAttribute("style", 'margin-left:'+margin+'px;width:'+(newS*n)+'px;margin-top:'+marginT+'px;height:'+(0.5*h2-marginT)+'px;');
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
		item.setAttribute('style', 'background-color:'+color+';padding-top:'+$(window).height()*0.1+'px;');
	}
	d = document.getElementsByClassName('toColor');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute('style', 'color:'+color+';');
	}
}