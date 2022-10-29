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


// get data from imdb
function getMovieData() {
	let url = "https://www.omdbapi.com/?apikey=4a3b711b&t=" + document.getElementById("movieName").value;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			document.getElementById("movieTitle").innerHTML = data.Title;
			document.getElementById("movieYear").innerHTML = data.Year;
			document.getElementById("movieGenre").innerHTML = data.Genre;
			document.getElementById("moviePlot").innerHTML = data.Plot;
			document.getElementById("moviePoster").src = data.Poster;
		})
		.catch(err => {
			console.log(err);
		});
}

// get data from omdbapi
function getMovieData2() {	
	let url = "https://www.omdbapi.com/?apikey=4a3b711b&t=" + document.getElementById("movieName").value;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			document.getElementById("movieTitle").innerHTML = data.Title;
			document.getElementById("movieYear").innerHTML = data.Year;
			document.getElementById("movieGenre").innerHTML = data.Genre;
			document.getElementById("moviePlot").innerHTML = data.Plot;
			document.getElementById("moviePoster").src = data.Poster;
		})
		.catch(err => {
			console.log(err);
		});
}




