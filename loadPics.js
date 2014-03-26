var ID = (function() {
     var private = {
         '1': 'yak',
     };
     return {
        get: function(name) { return private[name]; }
    };
})();

$.wordWithPics  = function() {
    id = document.getElementById("wordForm").value;
    if (id === null)
        document.location = "404.html";
    else {
    	$picsDiv = $("div.picsDiv");
        $picsDiv.empty();
    	for (var i=0;i<id.length;i++) {
    		if ((id.charAt(i) < 2) && (id.charAt(i) > 0))
    			$s = '<embed id="'+ID.get(id.charAt(i))+i+'" src="pics/' + id.charAt(i);
    		else
    			$s = '<embed id="notFound'+i+'" src="pics/No_sign';
    		$s += '.svg" type="image/svg+xml" height="100px" width="100px">';
    		$picsDiv.append($s);
    	}
    }
};