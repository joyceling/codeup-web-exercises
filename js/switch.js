"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

console.log("Your color is " + color + ".");

switch(color) {
    case "red":
        console.log("Apples are red.");
        break;
    case "orange":
        console.log("Oranges are orange.");
        break;
    case "yellow":
        console.log("Ducks are yellow.");
        break;
    case "green":
        console.log("Green is green.");
        break;
    case "blue":
        console.log("The ocean is blue.");
        break;
    default:
        console.log("I do not know anything by that color.");
        break;
}
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.


    // TODO: WORD PROBLEMS

    // TODO: Exercise #1
    // If total is greater than 200, there is a 10% discount.
    // Cameron bought $180
    // Ryan bought $250
    // George bought $320

    var limit = 200

    var cameron = 180; // cameron's total purchase
    var ryan = 250; // ryan's total purchase
    var george = 320; // george's total purchase



    var camdiscount = .1*cameron; // the price that cameron received off
    var ryandiscount = .1*ryan; // the price that ryan received off
    var georgediscount = .1*george;



    if (cameron > limit) {
        var camtotal = cameron - (camdiscount);
        console.log("Hi, Cameron! Your purchase today was " + cameron + " dollars.");
        console.log("However, you have received a discount of " + camdiscount + " dollars.");
        console.log("Your overall total today is " + camtotal + " dollars.");

    } else {
        console.log("Hi, Cameron! Your purchase today was " + cameron + " dollars.");
        console.log("Unfortunately, you did not receive a discount this time.");
    }

    if (ryan > limit) {
        var ryantotal = ryan - (ryandiscount);

            console.log("Hi, Ryan! Your purchase today was " + ryan + " dollars.");
            console.log("You have received a discount of " + camdiscount + " dollars.");
            console.log("Your total today is " + ryantotal + " dollars.");

        } else {

        console.log(ryan);
        console.log("Hi, Ryan! Unforunately, you did not receive a discount this time.");
        console.log("Your total today is " + ryan + " dollars.");
        }

    if (george > limit) {
        var georgetotal = george - (georgediscount);

        console.log("Hi, George! Your purchase today was " + george + " dollars.");
        console.log("You have received a discount of " + georgediscount + " dollars.");
        console.log("Your total today is " + georgetotal + " dollars.")

    } else {

        console.log(ryan);
        console.log("Hi, George! Unforunately, you did not receive a discount this time.");
        console.log("Your total today is " + george + " dollars.");
    }

    // TODO: Exercise #2

        var flipACoin = Math.floor(Math.random()* 2);
        console.log("You flipped a " + flipACoin + ".");

        if (flipACoin == 0) {
            console.log("So you have to buy a car now!");
        }


        if (flipACoin == 1) {
            console.log("So you have to buy a house now!");
        }


    // TODO: Exercise #3

        var luckyNumber = Math.floor(Math.random()* 6);
        console.log("Your lucky number is " + luckyNumber + ".");

        switch (luckyNumber) {
            case 0:
                console.log("You did not receive a discount.");
                console.log("Your total is $60.");
                break;
            case 1:
                console.log("You received a discount of 10%, so your total is " + (60 * .9) + " dollars.");
                break;
            case 2:
                console.log("You received a discount of 25%, so your total is " + (60 * .75) + " dollars.");
                break;

            case 3:
                console.log("You did not receive a discount.");
                console.log("Your total is 60 dollars.");
                break;
            case 4:
                console.log("You received a discount of 50%, so your total is " + 60*.5 + "dollars.");
                break;
            case 5:
                console.log("Wow! Your purchase is totally free, so your total is 0 dollars.");
                break;
            default:
                console.log("The randomizer broke. Try again.");
                break;
        }

    // TODO: Exercise #4

        var confirmed = confirm("Would you like to enter a number?");
        if (confirmed) {

            // User's entered number
            var userNumber = prompt("Enter your number here:");
            console.log(userNumber);

            // Even or odd number?
            var oddNumber = (parseInt(userNumber) % 2 != 0);
            var evenNumber = (parseInt(userNumber) % 2 == 0);
            console.log(oddNumber)

            if (oddNumber) {
                alert("This is odd.")
            } else {
                alert("This is even.")
            }

            // Number plus 100
            var plusHundred = (parseInt(userNumber) + 100);
            alert("Your number plus one hundred is equal to " + plusHundred + ".");

            // Positive or negative number?
            var negNumber = userNumber < 0;
            var posNumber = userNumber >= 0;

            if (negNumber) {
                alert("This is negative.");
            } else {
                alert("This is positive.");
            }

        } else {
            console.log("Thank you for your participation. You may now exit the survey.")
        }
