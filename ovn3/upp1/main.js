/** 
* Namn:    Johan Lööv
* Datorid: an8492
*
*/

"use strict";

/**
 * Uppgift 3.1
 * =========
 */


function addClass(button) {
	var element = document.getElementById("message-box");
	//remove any current class
	var classList = element.classList;
	while (classList.length > 0) {
		classList.remove(classList.item(0));
	}

	if (button == 'success')
		element.classList.add("success");
	if (button == 'error')
		element.classList.add("error");
	if (button == 'info')
		element.classList.add("info");
}

