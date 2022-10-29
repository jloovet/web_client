/** 
* Namn:    Johan Lööv
* Datorid: an8492
* Övning:  2
*/


"use strict";

/**
 * Uppgift 1
 * =========
 */
console.log("Uppgift 1");
console.log(max(5, 10)); // hade skickat tillbaka 10
console.log(max(7, 7)); // hade skickat tillbaka 7
console.log(min(12, 24)); // hade skickat tillbaka 12
console.log(min(30, 18)); // hade skickat tillbaka 18

function max(t1, t2) {
  return (t1 > t2) ? t1 : t2;
}
function min(t1, t2) {
  return (t1 < t2) ? t1 : t2;
}

/**
 * Uppgift 2
 * =========
 */
 console.log("Uppgift 2");
 console.log(range(10));

function range(size) {
  let array = []
  for (let i = 0; i < size; i++) {
    array.push(i)
  }
  return array;
}



 /**
 * Uppgift 3
 * =========
 */
console.log("Uppgift 3");
console.log(sum([5, 10, 15, 20, 25]));

function sum(array) {
  let tot = 0;
  array.forEach(element => {
    tot += element;
  });
  return tot;  
}


/**
 * Uppgift 4
 * =========
 */
console.log("Uppgift 4");
var testString1 = "Jane Doe";
var testString2 = "Abracadabra";
console.log(countCharacter(testString1, "e")); 
console.log(countCharacter(testString2, "a")); 
function countCharacter(txt, char) {
  let cnt = 0;
  txt.split("").forEach(c => {
    if (c == char)
    cnt += 1;
  })
  return cnt;
}

/**
 * Uppgift 5
 * =========
 */
console.log("Uppgift 5");
console.log(palindrome("sirap - paris")); // skickar tillbaka "true"
console.log(palindrome("lorem ipsum")); // skickar tillbaka "false"
function palindrome(txt) {
  let rev = "";
  for (let i = txt.length - 1; i >= 0; i--) { 
    rev += txt[i];
  }
  return rev == txt;
}



/**
 * Uppgift 6
 * =========
 */
console.log("Uppgift 6");
var person = {
  firstName: "Johan",
  lastName: "Lööv",
  age: 58,
  family: ["Anna","Jonathan","Sebastian", "Alexandra"]
};
console.log("person:");
console.log(person);

/**
 * Uppgift 7
 * =========
 */
console.log("Uppgift 7");
printPerson(person);
// "Fullname: Jane Doe, Age: 25"
// "Family: John, Eliza, Elise"
function printPerson(person) {
  console.log("Fullname: " + person.firstName + " " + person.lastName + ", Age: " + person.age);
  console.log("Family: " + person.family);
}

/**
 * Uppgift 8
 * =========
 */
 console.log("Uppgift 8");
 var box = createBox(15, 20);
 // Skriv ut attributen
 console.log(box.height); // skickar tillbaka 15
 console.log(box.width); // skickar tillbaka 20

 function createBox(h, w) {
    var box = {
    height: h,
    width: w
    }
    return box;
 }

/**
 * Uppgift 9
 * =========
 */
 console.log("Uppgift 9");

 var tri = Triangle(12, 14);

 console.log(tri.height); // skickar tillbaka 12
 console.log(tri.width); // skickar tillbaka 14
 // Observera att vi anropar "area()"
 console.log(tri.area()); // skickar tillbaka 84

function Triangle(h, w) {
  var tri = {
    height: h,
    width: w,
    area : function() {return this.height * this.width /2;}
  }
  return tri;
}

/**
 * Uppgift 10
 * =========
 */
 console.log("Uppgift 10");

 var testObject1 = {
  width: 15,
  height: 20
};

var attrsFromObject1 = attributes(testObject1);
console.log(attrsFromObject1); // skickar tillbaka ["width", "height"]
var testObject2 = {
  a: 1,
  b: 2,
  c: 3
};
var attrsFromObject2 = attributes(testObject2);
console.log(attrsFromObject2); // skickar tillbaka ["a", "b", "c"]

function attributes(o) {
  let array = [];
  for (const property in o) {
    array.push(property);
  }
  return array;
} 











