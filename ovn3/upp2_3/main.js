/** 
* Namn:    Johan Lööv
* Datorid: an8492
*
*/

"use strict";

/**
 * Uppgift 3.2 o 3.3
 * =========
 */


function addText() {
	let txt = prompt("Text som skall läggas till: ")
	const node = document.createElement("li");
	const textnode = document.createTextNode(txt);
	node.appendChild(textnode);
	document.getElementById("items").appendChild(node);
}
function removeText() {
	let lnode = document.getElementById("items").lastChild;
	document.getElementById("items").removeChild(lnode);
}

