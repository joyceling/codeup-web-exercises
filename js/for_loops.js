"use strict";
var forLoops = 'for-loops exercise:';
console.log(forLoops.toUpperCase());

// TIMES TABLES
console.log("This is the times table exercise...")

var timesNumber = prompt("Choose a number between 1 and 10.");

for (var i = 1; i <= 10; i++) {
    console.log(timesNumber + "x" + i);
}

// 10 RANDOM NUMBERS
console.log("This is the 10 random numbers exercise...");

for (var i = 1; i<=10; i++) {
    var userNumber = Math.floor(Math.random() * 180) + 20;
    console.log(userNumber);
}

// THE NUMBER PYRAMID
console.log("This is the number pyramid exercise...");

for (var i = 1; i<=10; i++) {
    console.log(i);
}

// THE COUNTDOWN
console.log("This is the countdown exercise...");

for (var i = 100; i >= 5; i = i-5) {
    console.log(i);
}
