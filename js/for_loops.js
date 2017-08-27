"use strict";
var forLoops = 'for-loops exercise:';
console.log(forLoops.toUpperCase());

// TIMES TABLES
console.log("This is the times table exercise...");

var timesNumber = prompt("Choose a number between 1 and 10.");

for (var i = 1; i <= 10; i++) {
    console.log(timesNumber + "x" + i + "=" + timesNumber * i);
}

// 10 RANDOM NUMBERS
console.log("This is the 10 random numbers exercise...");

for (var i = 1; i<=10; i++) {
    var userNumber = Math.floor(Math.random() * 180) + 20;

    if (i % 2 === 0) {
        console.log(userNumber + " is even.");
    } else {
        console.log(userNumber + " is odd");
    }

}

// THE NUMBER PYRAMID
console.log("This is the number pyramid exercise...");

// for (var i = 1; i<10; i++) {
//
//     var string = i.toString();
//     console.log(string);
//
//         for (var j = 1; j<10; j++) {
//             console.log(j);
//
//     }
// }

// The Repeat Method

for (var i = 1; i<=10; i++) {
    // var str = (i.toString().repeat(i));
    // if (i>9) {
    //      str = str.replace(/1/g , "");
    // }
    // console.log(str);

    console.log((i%10).toString().repeat(i));
}


// The Nested Loop Method

for (var i = 1; i<=10; i++) {
    var str2 = "";

    for (var j = 1; i >= j; j++) {

        str2 += i % 10;

        // if (i > 9) {
        //     str2 = str2.replace("1", "");
        // }


    }

    console.log(str2);
}


// THE COUNTDOWN
console.log("This is the countdown exercise...");

for (var i = 100; i >= 5; i = i-5) {
    console.log(i);
}
