/** 
* Namn:    Johan Lööv
* Datorid: an8492
*
*/

"use strict";

/**
 * Uppgift 3.4
 * =========
 */


// Hämta alla knappar
var buttons = document.getElementsByClassName("remove-list-item");
// Gå igenom alla knappar och lägg till ett klick-event
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", buttonPressed);
}

function buttonPressed(event) {
	let text;
	if (confirm("Press OK if you really want to remove this item?") == true) {
		//fungerar även att gå via event.srcElement 
		//event.srcElement.parentElement.remove();
		this.parentElement.remove();
	}
}




