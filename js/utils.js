// Function taken from http://www.jquery4u.com/snippets/url-parameters-jquery/
$.urlParam = function(name){
    // tests if the url really contains GET parameter valueof(name)
    if (location.search.indexOf(name + '=') >=  0 ) {
        //var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
        var results = new RegExp('(\\?|&)' + name + '=([^&]+)').exec(window.location.href);
        return (results !== null) ? results[2] : -1;
    }
    else {
        return null;
    }
};
    
