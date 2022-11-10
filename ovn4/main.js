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
	//skriv ut alla fält
	Array.from(form.elements).forEach(element => {
		if (element.type == "text") {
			console.log(element.value);
		}
	});

	if (this.elements.query.value == "") {
		alert("You must add a search string!");
		return;
	}

	console.log(this.elements.query.value);

	// Objekt för att hantera AJAX
	var omdbAPI = new XMLHttpRequest();
	var omdbURL = buildURL(this.elements.query.value, false);
	// hantera svar
	omdbAPI.addEventListener("load", function () {
		console.log("responseText: " + this.responseText);
		if (this.responseText.includes("Movie not found")) {
			alert("No movies found for current search string!");
			return;
		}

		var result = JSON.parse(this.responseText);
	
		result = result.Search;
		parseJSON(result);
	});

	omdbAPI.open("get", omdbURL, true);
	// Skicka förfrågan
	omdbAPI.send();

	//hindra sidan från att laddas om
	event.preventDefault();
});

function buildURL(searchString, exactTitle) {
	if (exactTitle)
		return "https://www.omdbapi.com/?t=" + searchString + "&type=movie&apikey=41059430";
	else
		return "https://www.omdbapi.com/?s=" + searchString + "&type=movie&apikey=41059430";
}

function parseJSON(result) {
	clearMovieTable();
	var i = 0;
	for (var key in result) {
		if (result.hasOwnProperty(key)) {
			addTableRow(i++, result[key].Title, result[key].Year, result[key].imdbID, result[key].Poster);
		}
	}
}


function addTableRow(rownumb, title, year, imdbID, poster) {
	var table = document.getElementById("movieTable");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	cell1.innerHTML = title;
	cell2.innerHTML = year;
	cell3.innerHTML = imdbID;
	//se till att poster öppnas i ny flik mha target="_blank"
	var link = '<a href=' + poster + ' target="_blank">Link to Movie Poster</a>';
	
	cell4.innerHTML = link;
	cell5.innerHTML = '<button id = "' + title + '" class="rowbutton" onclick="moreInfo(this);"> Show more information </button>';
}


function addDetailsTableRow(col1, col2) {
	var table = document.getElementById("detailsTable");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = col1;
	cell2.innerHTML = col2;
}


function moreInfo(but) {
	//alert("YYu pressed the button " + but.id);
	document.getElementById("headId").innerHTML = but.id;

	var omdbAPI2 = new XMLHttpRequest();
	var omdbURL2 = buildURL(but.id, true);
	omdbAPI2.addEventListener("load", handleDetails);
	omdbAPI2.open("get", omdbURL2, true);
	omdbAPI2.send();
}

function handleDetails() {
	clearDetailsTable();
	var result = JSON.parse(this.responseText);
	addDetailsTableRow("Released", result.Released)
	addDetailsTableRow("Runtime", result.Runtime)
	addDetailsTableRow("Director", result.Director)
	addDetailsTableRow("Actors", result.Actors)
	addDetailsTableRow("Country", result.Country)
	addDetailsTableRow("Awards", result.Awards)
	addDetailsTableRow("imdbRating", result.imdbRating)
	addDetailsTableRow("imdbVotes", result.imdbVotes)
}


function clearMovieTable() {
	var table = document.getElementById("movieTable");
	try {
		var rowCount = table.rows.length;
		for (var i = rowCount - 1; i > 0; i--) {
			table.deleteRow(i);
		}
	} catch (error) { 
		//if table got no rows obj yet, we end up here}
	}
}

function clearDetailsTable() {
	var table = document.getElementById("detailsTable");
	try {
		var rowCount = table.rows.length;
		for (var i = rowCount - 1; i > 0; i--) {
			table.deleteRow(i);
		}
	} catch (error) { 
		//if table got no rows obj yet, we end up here}
	}

}


