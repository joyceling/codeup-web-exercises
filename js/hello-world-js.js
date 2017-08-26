'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber;
var i = 1;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
var o = 0;


while (i <= 100) {
    luckyNumber = Math.floor(Math.random() * 6);
    console.log(i + ": " + luckyNumber);


    if (luckyNumber === 0) {
        j++;
    }

    if (luckyNumber === 1) {
        k++;
    }

    if (luckyNumber === 2) {
        l++;
    }

    if (luckyNumber === 3) {
        m++;
    }

    if (luckyNumber === 4) {
        n++;
    }

    if (luckyNumber === 5) {
        o++;
    }

    i++;
}

console.log("0 appeared " + j + " times");
console.log("1 appeared " + k + " times");
console.log("2 appeared " + l + " times");
console.log("3 appeared " + m + " times");
console.log("4 appeared " + n + " times");
console.log("5 appeared " + o + " times");


// } else if (luckyNumber === 1) {
//     var k = 1;
//     var counter = k++;
//     message = "1 appeared " + counter + " times"
// }
// else if (luckyNumber === 2) {
//     message = "2 appeared " + counter + " times"
// } else if (luckyNumber === 3) {
//     message = "3 appeared " + counter + " times"
// } else if (luckyNumber === 4) {
//     message = "4 appeared " + counter + " times"
// } else if (luckyNumber === 5) {
//     message = "5 appeared " + counter + " times"
// }



// The output should be something like

// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100