var phon = [
['[a]','a','Oi','aNN','','à','â','','','','','','','','','','',''],
['[eu]','e','eu','~oeu','oe!N','ILLe&[','','','','','','','','','','','',''],
['[i]','i','y','ill','iNN-','î','ï','EIll','','','','','','','','','',''],
['[in]','in!-','un!-','ain!-','ein!-','umB','umP','imB','imP','*en&[','*IenT[','yn!-','','','','','',''],
['[o]','o','au','eau','oNN','ô','ö','','','','','','','','','','',''],
['[u]','u','ù','Uë','ü','','','','','','','','','','','','',''],
['[on]','on!-','omP','omB','','','','','','','','','','','','','',''],
['[ou]','ou','oI','oY','où','','','','','','','','','','','','',''],
['[an]','an!-','en!-','amB','amP','emB','emP','','','','','','','','','','',''],
['[ai]','ai','[esT[','e~~','[~es[','er&[','é','è','ê','ë','ed&[','aî','ez[','eC[','eF&[','[eX','et&[','ei'],
['[b]','b','be&[','bb','','','','','','','','','','','','','',''],
['[k]','c','k','q','qu','ch~','cc','','','','','','','','','','',''],
['[ch]','ch','sh','ch-','','','','','','','','','','','','','',''],
['[d]','d','','','','','','','','','','','','','','','',''],
['[f]','f','ph','','','','','','','','','','','','','','',''],
['[g]','g','gu','','','','','','','','','','','','','','',''],
['[gn]','gn','','','','','','','','','','','','','','','',''],
['[j]','j','gE','','','','','','','','','','','','','','',''],
['[l]','l','ll','','','','','','','','','','','','','','',''],
['[m]','m','mm','','','','','','','','','','','','','','',''],
['[n]','n','nn','mnE[','','','','','','','','','','','','','',''],
['[p]','p','pp','p[-','','','','','','','','','','','','','',''],
['[r]','r','rr','','','','','','','','','','','','','','',''],
['[s]','s','ss','tION','sCA','c2','sc-','c3','ç','[c[','','','','','','','',''],
['[t]','t','tt','ESt-','ptE[','ESt[-','','','','','','','','','','','',''],
['[v]','v','w','','','','','','','','','','','','','','',''],
['[x]','x','','','','','','','','','','','','','','','',''],
['[z]','z','-s-','-s[-','-x[-','','','','','','','','','','','','',''],
['-','d&[','h','p&[','t&[','[ESt[!-','s[','x[','![*e&[','g&[','','','','','','','',''],
['[a]#[i]','Oy-','','','','','','','','','','','','','','','','']
];

/*
- : isVowel
~ : is Consonnant
[ : stop word
* : any letter
& : skip plural "s"
! : negative cond
A-Z : check letter
< : same letter
1 : any a form
2 : any e form
3 : any i form
4 : any o form
5 : any u form
*/

var NB_PHON = 30;
var NB_TRAN = 17;

$.generatePhon = function(word) {
	var phoned = '';
	var pos = 0;
	while (pos < word.length) {
		var toCut = {val:0};
		toCut.val = 6;
		var testSuccess = false;
		while (toCut.val > 0) {
			for (var i=0;i<NB_PHON;i++) {
				for (var j=0;j<NB_TRAN;j++) {
					if ($.strCompare(phon[i][1+j], word, pos, toCut)) {
						testSuccess = true;
						phoned += phon[i][0] + '#';
						pos += toCut.val;
						break;
					}
				}
				if (testSuccess)
					break;
			}
			if (testSuccess)
				toCut.val = -1;
			else 
				toCut.val--;
		}
		if (toCut.val == 0) {
			phoned += '?' + word[pos] + '!#';
			pos++;
		}
	}
	return phoned;
}

$.strCompare = function(rule, word, pos, len) {
	if (rule == '')
		return false;
	var ruleSize = [0, 0, 0];
	ruleSize = $.ruleLength(rule);
	if (word.length < (pos+ruleSize[1]))
		return false;
	if (rule.length < len.val)
		return false;
	var test = true;
	var shift = 0;
	var negative = false;
	for (var i=0;i<ruleSize[0];i++) {
		if (rule[i] == '!') {
			negative = true;
			i++;
		}
		if (rule[i] == '-') {
			test = test && ($.isVowel(word, pos-ruleSize[0]+i)!=negative);
		}
		else if (rule[i] == '~') {
			test = test && ($.isConsonant(word, pos-ruleSize[0]+i)!=negative);
		}
		else if (rule[i] == '<') {
			test = test && ($.doubleLetter(word, pos-ruleSize[0]+i)!=negative);
		}
		else if (rule[i] == '[') {
			test = test && ($.endChar(word, pos-ruleSize[0]+i)!=negative);
		}
		else if (rule[i] == '*') {
			test = test && ($.isLetter(word, pos-ruleSize[0]+i)!=negative);
		}
		else if (rule[i] == '1') {
			test = test && ($.isAccA(word, pos-ruleSize[0]+i)!=negative);
		}
		else if (rule[i] == '2') {
			test = test && ($.isAccE(word, pos-ruleSize[0]+i)!=negative);
		}
		else if (rule[i] == '3') {
			test = test && ($.isAccI(word, pos-ruleSize[0]+i)!=negative);
		}
		else if (rule[i] == '4') {
			test = test && ($.isAccO(word, pos-ruleSize[0]+i)!=negative);
		}
		else if (rule[i] == '5') {
			test = test && ($.isAccU(word, pos-ruleSize[0]+i)!=negative);
		}
		else if (rule[i] == '&') {
			if (!$.checkPlural(word, pos-ruleSize[0]+i)!=negative) {
				rule = rule.substr(0,i-1) + rule.substr(i);
				i--;
			}
		}
		else if ((rule.charCodeAt(i) > 64) && (rule.charCodeAt(i) < 91)) {
			test = test && ($.checkLetter(word, rule.charCodeAt(i), pos-ruleSize[0]+i)!=negative);
		}
		negative = false;
	}
	shift = ruleSize[0];
	for (var i=0;i<ruleSize[1];i++)
		if (word[pos+i] != rule[i+shift])
				test = false;
	shift = ruleSize[0] + ruleSize[1];
	var tempShift = 0;
	for (var i=0;i<ruleSize[2];i++) {
		if (rule[i+shift] == '!') {
			negative = true;
			i++;
			tempShift++;;
		}
		if (rule[i+shift] == '-') {
			test = test && ($.isVowel(word, pos+i+ruleSize[1]-tempShift)!=negative);
		}
		else if (rule[i+shift] == '~') {
			test = test && ($.isConsonant(word, pos+i+ruleSize[1]-tempShift)!=negative);
		}
		else if (rule[i+shift] == '<') {
			test = test && ($.doubleLetter(word, pos+i+ruleSize[1]-tempShift)!=negative);
		}
		else if (rule[i+shift] == '[') {
			test = test && ($.endChar(word, pos+i+ruleSize[1]-tempShift)!=negative);
		}
		else if (rule[i+shift] == '*') {
			test = test && ($.isLetter(word, pos+i+ruleSize[1]-tempShift)!=negative);
		}
		else if (rule[i+shift] == '1') {
			test = test && ($.isAccA(word, pos+i+ruleSize[1]-tempShift)!=negative);
		}
		else if (rule[i+shift] == '2') {
			test = test && ($.isAccE(word, pos+i+ruleSize[1]-tempShift)!=negative);
		}
		else if (rule[i+shift] == '3') {
			test = test && ($.isAccI(word, pos+i+ruleSize[1]-tempShift)!=negative);
		}
		else if (rule[i+shift] == '4') {
			test = test && ($.isAccO(word, pos+i+ruleSize[1]-tempShift)!=negative);
		}
		else if (rule[i+shift] == '5') {
			test = test && ($.isAccU(word, pos+i+ruleSize[1]-tempShift)!=negative);
		}
		else if (rule[i+shift] == '&') {
			if (!$.checkPlural(word, pos+i+ruleSize[1]-tempShift)!=negative) {
				rule = rule.substr(0,i+shift-1) + rule.substr(i+shift);
				i--;
			}
		}
		else if ((rule.charCodeAt(i+shift) > 64) && (rule.charCodeAt(i+shift) < 91)) {
			test = test && ($.checkLetter(word, rule.charCodeAt(i+shift), pos+ruleSize[1]+i-tempShift)!=negative);
		}
		negative = false;
	}
	if (test)
		len.val = ruleSize[1];
	return test;
}