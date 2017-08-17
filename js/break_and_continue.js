"use strict";

// Generate a random number between one and 50
console.log("This is the loop and continue exercise: ");

while (true) {
    var userString = prompt("Please enter a number between 1 and 50 that is really odd (and definitely not normal ;) ).");
    var userNumber = parseInt(userString);

    if ((userNumber > 1) && (userNumber < 50) && (userNumber % 2 !== 0)) {
        break;
    }
}
console.log("Number to skip is: " + userNumber);

for (i = 1; i < 50; i++) {
    var evenNumber = (i % 2 === 0);
    if (evenNumber) {
        continue;
        }

    if (i == userNumber) {
        console.log("Yikes! Skipping number: " + userNumber);
        continue;
    }

    console.log("Here is an odd number: " + i);

}