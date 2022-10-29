/** 
* Namn:    Johan Lööv
* Datorid: an8492
*
*/

"use strict";

/**
 * Uppgift 4.1
 * ===========
 */



// hämta form
var form = document.getElementById("search-form");
//lyssna på submit
form.addEventListener("submit", function (event) {
	alert("Testar en alert");
	console.log("hej");
	//skriv ut alla fält
	Array.from(form.elements).forEach(element => {
		if (element.type == "text") {
			console.log(element.value);
		}
	});
	console.log(this.elements.query.value);


	// Objekt för att hantera AJAX
	var omdbAPI = new XMLHttpRequest();
	// Den URL vi ska använda oss av (obs. att denna har förvalt "the revenant")
	//var omdbURL = "http://www.omdbapi.com/?t=the%20revenant&type=movie&apikey=41059430";
	var omdbURL = buildURL(this.elements.query.value);


	// Vad vill vi göra när vi fått ett svar?
	omdbAPI.addEventListener("load", function () {
		// Konvertera resultatet från JSON
		var result = JSON.parse(this.responseText);
		// Skriv ut resultatet
		console.log(result);

		//itate json objects
		for (var key in result) {
			if (result.hasOwnProperty(key)) {
				console.log(key + " -> " + result[key]);
				if (key == "Title") {
					addText(result[key]);
				}
			}
		}

	});



	// Ange vilken metod (get) samt URL vi ska skicka med
	omdbAPI.open("get", omdbURL, true);
	// Skicka förfrågan
	omdbAPI.send();
		
	addText("En film");



	//hindra sidan från att laddas om
	event.preventDefault();
});

function buildURL(search) {
	return "http://www.omdbapi.com/?t=the%20" + search + "&type=movie&apikey=41059430";
}

function addText(text) {
	const node = document.createElement("h1");
	const textnode = document.createTextNode(text);
	node.appendChild(textnode);
	document.getElementById("result").appendChild(node);
}





