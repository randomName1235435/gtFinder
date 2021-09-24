// ==UserScript==
// @name         gtFinder
// @namespace    gtFinder
// @version      0.1
// @description  yeahh
// @author       me
// @match        none
// @grant        none
// ==/UserScript==
document.addEventListener('keyup', doc_keyUp, false);

function doc_keyUp(e) {
	if(e.ctrlKey && e.shiftKey && e.key === 'Q') {
		gotoNextGt();
    }
};

function gotoNextGt() {
	if(groupedGt === undefined)
		findGt();
	if(currentGt === undefined)
		currentGt = groupedGt[0];
	currentGt.scrollIntoView();

	var newIndex = groupedGt.indexOf(currentGt) + 1;
	if(newIndex >= groupedGt.length)
		newIndex = 0;
	currentGt = groupedGt[newIndex];
};

var currentGt;
var groupedGt;

function findGt(){
	groupedGt = [];
	var textElements = document.getElementsByClassName('postMessage');
    for (let item of textElements) {
	if(IsGt(item))
		groupedGt.push(item);
	};
};
function IsGt(item) {
	var regEx = new RegExp(">.+\n>.+\n>.+");
	return regEx.exec(item.innerText);
};
