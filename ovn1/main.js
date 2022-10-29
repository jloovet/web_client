/** 
* Namn:    Johan Lööv
* Datorid: an8492
*
*/


"use strict";

/**
 * Uppgift 1
 * =========
 */
console.log("*** Uppgift 1 ***")
console.log(5 * 2 < 12);
console.log(55 > 22);
console.log(16 / 4 == 4);
console.log(8 + 2 < 128);
console.log(32 * 8 > 255);

/**
 * Uppgift 2
 * =========
 */
console.log("*** Uppgift 2 ***")
let text = "Tisdag";
console.log(text.substring(0, 4));
console.log("Hamburgare".substring(3));
console.log("I'll be back".substring(5));

/**
* Uppgift 3
* =========
*/
console.log("*** Uppgift 3 ***")
console.log("It's Learning".substring(5).toUpperCase());
console.log("JavaScript: The Good Parts".substring(16).toLowerCase());

/**
 * Uppgift 4
 * =========
 */
console.log("*** Uppgift 4 ***")
var numbers = [128, 256, 512, 1024, 2048];
let sum = 0
numbers.forEach((number) => (sum += number))
console.log("Sum av tal i array " + sum)
console.log("Medelvärde av tal i array " + sum / numbers.length)
var numbersExtended = numbers.push(sum)
console.log("Utökad array:")
numbers.forEach((number) => (console.log(number + " ")))

/**
 * Uppgift 5
 * =========
 */
console.log("*** Uppgift 5 ***");
var countries = ["Sweden", "Denmark", "Finland", "Norway"];
console.log(countries[1].substring(0, 3));
sum = 0;
countries.forEach(element => {
  sum += element.length;
});
console.log("Medelvärde av längd " + sum / countries.length)

/**
* Uppgift 6
* =========
*/
console.log("*** Uppgift 6 ***")
var values = [3, 5, "Jane", true, 144, false];
console.log("Reversed array " + values.reverse());

/**
* Uppgift 7
* =========
*/
console.log("*** Uppgift 7 ***")
var names = ["Jane", "Joe", "Eliza"];
var ages = [21, 34, 22];
var hasPet = [true, false, true];
var multipleArrays = [].concat(names, ages, hasPet);
console.log("Ihopslagen array " + multipleArrays);

/**
* Uppgift 8
* =========
*/
console.log("*** Uppgift 8 ***")
var actors = ["Sherlock", "Watson", "Bo"];
console.log("Sträng från array " + actors.join('-'));

/**
 * Uppgift 9
 * =========
 */
console.log("*** Uppgift 9 ***")
let amount = 40;
while (amount < 80) {
  console.log("Aktuellt nr i amount " + amount);
  if (amount < 50)
    console.log("Less then 50!");
  else if (amount >= 50 && amount < 65)
    console.log("Optimal range for the amount!");
  else
    console.log("Too much!");
  amount += 5
}


/**
 * Uppgift 10
 * =========
 */
console.log("*** Uppgift 10 ***")
let txt = "#"
while (txt.length < 9) {
  txt += "#"
  console.log(txt)
}

