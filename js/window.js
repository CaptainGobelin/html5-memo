$.resizeWindow = function() {
	$(document).ready($.privateResizeWindow());
}

$.resizePics = function () {
	var h2 = $(window).height();
	var d = document.getElementsByClassName('pic');
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
		item.setAttribute("style",'width:'+newS+'px;height:'+newS+'px;test:'+n+','+t+','+newH+';');
	}
	d = document.getElementsByClassName('newPic');
	if (d.length > 0) {
		n = 0;
		t = Math.max(2,(d.length-1)/2);
		suiv = (n+1)/Math.floor(0.99+(t/(n+1)));
		act = 0;
		r = 16/9;
		do {
			n++;
			act = suiv;
			suiv = (n+1)/Math.floor(0.99+(t/(n+1)));
		} while (Math.abs(suiv-r) < Math.abs(act-r));
		if (t%n == 1)
			n++;
		newH = Math.floor(0.5*h2/(Math.floor(0.99+(t/n))));
		newW = Math.floor((8/9)*h2/n);
		newS = Math.min(newW, newH);
		for (var i=0;i<d.length;++i) {
			var item = d[i];
			item.setAttribute("style",'width:'+(newS*(t-1)/(2*t)-4)+'px;height:'+(newS*(t-1)/(2*t)-4)+'px;margin-top:'+(newS/2)+'px;margin-right:'+4+'px;');
		}
	}
}

$.privateResizeWindow = function() {
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
	d = document.getElementsByClassName('leftMenu');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style", 'height:'+(0.85*h2/20)+'px;font-size: '+(0.60*5*h2/100)+'px;');
	}
	var w = Math.max($(window).height(),$(window).width());
	d = document.getElementsByClassName('listPic');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute("style", 'padding-top:'+(3*h2/100)+'px;');
	}
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
	d = document.getElementsByClassName('colorButton');
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		var myH = item.offsetHeight;
		item.setAttribute("style", 'width:'+myH+'px !IMPORTANT;border-radius:'+myH/3+'px;');
	}
	var w2 = $(window).width();
	d = document.getElementsByClassName('cleoTip');
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		var myH = item.offsetHeight;
		item.setAttribute("style", 'font-size:'+w2/48+'px;');
	}
	d = document.getElementsByClassName('pwdTip');
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		var myH = item.offsetHeight;
		item.setAttribute("style", 'font-size:'+w2/56+'px;');
	}
	d = document.getElementsByClassName('firstLineButton');
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		var e = document.getElementById('wordForm');
		var myH = e.getBoundingClientRect().top + (e.offsetHeight-item.offsetHeight)/2;
		item.setAttribute("style", 'top:'+myH+'px;');
	}
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
		item.setAttribute("style",'width:'+newS+'px;height:'+newS+'px;test:'+n+','+t+','+newH+';');
	}
	d = document.getElementsByClassName('newPic');
	if (d.length > 0) {
		n = 0;
		t = Math.max((d.length-1)/2,1);
		suiv = (n+1)/Math.floor(0.99+(t/(n+1)));
		act = 0;
		r = 16/9;
		do {
			n++;
			act = suiv;
			suiv = (n+1)/Math.floor(0.99+(t/(n+1)));
		} while (Math.abs(suiv-r) < Math.abs(act-r));
		if (t%n == 1)
			n++;
		newH = Math.floor(0.5*h2/(Math.floor(0.99+(t/n))));
		newW = Math.floor((8/9)*h2/n);
		newS = Math.min(newW, newH);
		for (var i=0;i<d.length;++i) {
			var item = d[i];
			item.setAttribute("style",'width:'+(newS*(t-1)/(2*t)-4)+'px;height:'+(newS*(t-1)/(2*t)-4)+'px;margin-top:'+(newS/2)+'px;margin-right:'+4+'px;');
		}
	}
	d = document.getElementsByClassName('picsDiv');
	for (var i=0;i<d.length;++i) {
		var item = d[i];
		var margin = w2*0.1+((w2*0.76-(newS*n))/2);
		var marginT = ((newH-newS)*Math.floor(0.99+(t/n)))/2;
		item.setAttribute("style", 'margin-left:'+margin+'px;width:'+(newS*n)+'px;margin-top:'+marginT+'px;height:'+(0.5*h2-marginT)+'px;');
	}
	d = document.getElementById('wordForm');
	if (d != null) {
		h = d.getBoundingClientRect();
		d = document.getElementsByClassName('submitLevel');
		for (var i=0;i<d.length;++i) {
			var item = d[i];
			item.setAttribute("style", 'top:'+(h.top-item.offsetHeight/2)+'px;');
		}
		d = document.getElementById('wordForm');
		h = d.getBoundingClientRect();
		h2 =(d.offsetHeight/2);
		d = document.getElementsByClassName('buttonLevel');
		for (var i=0;i<d.length;++i) {
			var item = d[i];
			item.setAttribute("style", 'top:'+(h.top+h2-item.offsetHeight/2)+'px;');
		}
	}
	$.resizeTipPanel();
	$.menuColor();
	$.showPwd();
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
		item.setAttribute('style', 'background-color:'+color+';padding-top:'+$(window).height()*0.15+'px;');
	}
	d = document.getElementsByClassName('toColor');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		item.setAttribute('style', 'color:'+color+';');
	}
}

$.showPwd = function() {
	var d = document.getElementsByClassName('creationInput');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		if ($.getCookie("hidePwd") == "true")
			item.setAttribute('type', 'password');
		else
			item.setAttribute('type', 'text');
	}
	d = document.getElementsByClassName('hideButton');
	for (var i=0;i<d.length;++i) {
		var item = d[i];  
		if ($.getCookie("hidePwd") == "true") {
			item.setAttribute('class', 'hideButton hideChecked firstLineButton');
			item.setAttribute('onClick', '$.setCookie("hidePwd","false",1);$.showPwd();')
		}
		else {
			item.setAttribute('class', 'hideButton firstLineButton');
			item.setAttribute('onClick', '$.setCookie("hidePwd","true",1);$.showPwd();')
		}
	}
}