/** 
* Namn:    Johan Lööv
* Datorid: an8492
*
*/

"use strict";

/**
 * Uppgift 3.5
 * =========
 */



// hämta form
var form = document.getElementById("apply-for-pet");
//lyssna på submit
form.addEventListener("submit", function (event) {
	//skriv ut alla fält
	Array.from(form.elements).forEach(element => {
		if (element.type == "text") {
			console.log(element.value);
		}
	});
	console.log(this.elements.pet.value);

	let valideringOk = true;

	//validera fÖrnamn
	if (this.elements.firstname.value.length > 50) {
		alert("Förnamnet måste vara kortade än 50 bokstäver");
		event.preventDefault();
		valideringOk = false;
	}
	else if (!this.elements.firstname.value.match(/^[a-zA-Z]+$/)) {
		alert("Förnamnet får endast innehålla bokstäver");
		event.preventDefault();
		valideringOk = false;
	}
	//validera efternamn
	else if (this.elements.lastname.value.length > 50) {
		alert("Efternamnet måste vara kortade än 50 bokstäver");
		event.preventDefault();
		valideringOk = false;
	}
	else if (!this.elements.lastname.value.match(/^[a-zA-Z]+$/)) {
		alert("Efternamnet får endast innehålla bokstäver");
		event.preventDefault();
		valideringOk = false;
	}
	//validera ålder
	else if (!this.elements.age.value.match(/^[0-9]+$/)) {
		alert("Åldern måste vara ett nummer");
		event.preventDefault();
		valideringOk = false;
	}
	//validera epost
	else if (this.elements.email.value.length > 50) {
		alert("Epost måste vara kortade än 50 bokstäver");
		event.preventDefault();
		valideringOk = false;
	}
	else if (!this.elements.email.value.match(/^[a-zA-Z]+$/)) {
		alert("Epost får endast innehålla bokstäver");
		event.preventDefault();
		valideringOk = false;
	}
	//validera husdjur
	else if (this.elements.pet.value == "") {
		alert("Du måste välja ett husdjur");
		event.preventDefault();
		valideringOk = false;
	}

	if (valideringOk) {
		alert("Tack för din ansökan om att skaffa husdjur!");
		event.target.submit();
	}

});





