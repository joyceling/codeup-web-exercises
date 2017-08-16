"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value

console.log("This is the color exercise:")
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
    console.log("This is Exercise #1:")

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
        var camtotal = cameron;
        console.log("Hi, Cameron! Your purchase today was " + cameron + " dollars.");
        console.log("Unfortunately, you did not receive a discount this time.");
    }

    if (ryan > limit) {
        var ryantotal = ryan - (ryandiscount);

            console.log("Hi, Ryan! Your purchase today was " + ryan + " dollars.");
            console.log("You have received a discount of " + camdiscount + " dollars.");
            console.log("Your total today is " + ryantotal + " dollars.");

        } else {
        var ryantotal = ryan;
            console.log(ryan);
            console.log("Hi, Ryan! Unfortunately, you did not receive a discount this time.");
            console.log("Your total today is " + ryan + " dollars.");
        }

    if (george > limit) {
        var georgetotal = george - (georgediscount);

        console.log("Hi, George! Your purchase today was " + george + " dollars.");
        console.log("You have received a discount of " + georgediscount + " dollars.");
        console.log("Your total today is " + georgetotal + " dollars.")

    } else {
        var georgetotal = george;

        console.log(ryan);
        console.log("Hi, George! Unfortunately, you did not receive a discount this time.");
        console.log("Your total today is " + george + " dollars.");
    }

    // TODO: Exercise #2
        console.log("This is Exercise #2:")
        console.log("This is the if-else statement output:");
        var flipACoin = Math.floor(Math.random()* 2);
        console.log("You flipped a " + flipACoin + ".");
        var message;

        if (flipACoin == 0) {
            message = "So you have to buy a car now!";
        } else if (flipACoin == 1) {
            message = "So you have to buy a house now!";
        }

        // to separate input, process, and output...
            // output

            console.log(message);

        // ternary
        console.log("This is the ternary operator output:");

        var message2;
        message2 = flipACoin === 0 ? "You flipped a 0, so buy a car!" : "You flipped a 1, so buy a house!";
        console.log(message2);

    // TODO: Exercise #3

        console.log("This is Exercise #3:");
        var receipt = 60;

        var luckyNumber = Math.floor(Math.random()* 6);
        var discount;
        var total;
        console.log("Your lucky number is " + luckyNumber + ".");


        switch (luckyNumber) {
            case 0:
                discount = 0;
                total = receipt;

                // console.log("You did not receive a discount.");
                // console.log("Your total is " + receipt + " dollars.");
                break;

            case 1:
                discount = 10;
                total = receipt*9;

                // console.log("You received a discount of 10%, so your total is " + (receipt * .9) + " dollars.");
                break;

            case 2:
                discount = 25;
                total = receipt*.75;

                // console.log("You received a discount of 25%, so your total is " + (receipt * .75) + " dollars.");
                break;

            case 3:
                discount = 30;
                total = receipt*.7;

                // console.log("You did not receive a discount.");
                // console.log("Your total is 60 dollars.");
                break;
            case 4:
                discount = 50;
                total = receipt*.5
                // console.log("You received a discount of 50%, so your total is " + receipt*.5 + " dollars.");
                break;
            case 5:
                discount = 100;
                total = receipt*0;
                // console.log("Wow! Your purchase is totally free, so your total is 0 dollars.");
                break;
            default:
                var defaultmessage
                defaultmessage = "The randomizer broke. Try again."
                break;
        }

        // separate process and output:
        console.log("You received a " + discount + "% discount! Your total is " + total + " dollars.");
        console.log(defaultmessage);

    // TODO: Exercise #4
        console.log("This is Exercise #4:");
        var confirmed = confirm("Would you like to enter a number?");

        if (confirmed) {
            var userNumber = prompt("Enter your number here:");
            if (isNaN(userNumber)) {
                alert("That's not a number.");
            } else {

                console.log(userNumber);

                // Even or odd number?
                var oddNumber = (parseInt(userNumber) % 2 != 0);
                var evenNumber = (parseInt(userNumber) % 2 == 0);
                console.log(oddNumber)


                if (oddNumber) {
                    alert("This is an odd number.")
                } else {
                    alert("This is an even number.")
                }

                // Positive or negative number?
                var negNumber = userNumber < 0;
                var posNumber = userNumber >= 0;

                if (negNumber) {
                    alert("And it's negative!");
                } else {
                    alert("And it's positive!");
                }

                // Number plus 100
                var plusHundred = (parseInt(userNumber) + 100);
                alert("And I just wanted to tell you that adding one hundred to your number would give you " + plusHundred + ". I'm sure you knew that though!");

            }

        } else {
            alert("Thank you for your participation. You may now exit the survey.")
        }
