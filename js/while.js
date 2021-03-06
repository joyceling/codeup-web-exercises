"use strict";


// WHILE LOOPS

var i = 2;

while (i < 65537) {
    console.log(i);
    i = i*2;
}


// Luis's Solution
var limit = 65536; // part of my condition
var powersOfTwo = 2; // accumulator

while (powersOfTwo < limit) {
    console.log(powersOfTwo);
    powersOfTwo *= 2;
}


// DO-WHILE: ICE CREAM
// Use A WHILE LOOP because it's running more than once and we don't know how many times it's going to run


console.log("This is the ice cream exercise:");

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("You have " + allCones + " cones.");


do {
    // This is how you get a random number between 1 and 5
    var cones = Math.floor(Math.random() * 5) + 1;

    if (cones <= allCones) {
        allCones = (allCones - cones);
        console.log(cones + " cones sold!");
        console.log("You have " + allCones + " left" + ".");
    } else {
        console.log("Sorry, I don't have "+ cones +" cones.")
    }

} while (allCones > 0);

console.log("You finished selling all of your cones!");

// Luis's Solution

// var allCones = Math.floor(Math.random() * 50) + 50;
// // This is how you get a random number between 1 and 5
// var cones = Math.floor(Math.random() * 5) + 1;
//
// do {
//
// } while(true);












