(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */

    var person = {};

    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */

    var person = {
        firstName: "Joyce",
        lastName: "Ling"

    }

    console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

    // person.sayHello =
    //         function (){
    //         return "Good morning, " + this.firstName + " " + this.lastName + "!";
    // }

    person = {
        sayHello:
            function () {
                return "Good morning, " + this.firstName + " " + this.lastName + "!";
            },
    };

    console.log(person.sayHello());

    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // 10% discount

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    shoppers.forEach(function(shoppers){
        console.log("Hi " + shoppers.name + ", you spent " + shoppers.amount + " dollars today.");

        if (shoppers.amount > 200) {
            var priceAfterDiscount = shoppers.amount*.9;
            console.log("Due to our special offer, we applied a 10% discount to your shopping amount.\n\nYour total today is " + priceAfterDiscount + " dollars.");
        }
    });

    var discount = 0;
    var totalAfterDiscount = shoppers[0].amount;

    console.log(shoppers[0].name + " has to pay $" + shoppers[0].amount + ", it has a discount of $" + discount + ", the total to pay after the discount is $" + totalAfterDiscount )

    // todo:
    // Create an array of objects that represent books.
    // Each book should have a title and an author property.
    // The author property should be an object with a firstName and lastName.
    // Be creative and add at least 5 books to the array
    // var books = [todo];

    var books = [
        {
        title: "The Sympathizer",
        author: "Viet Thanh Nguyen"
        },
        {
        title: "Citizen: An American Lyric",
        author: "Claudia Rankine"
        },
        {
        title: "The Poisonwood Bible",
        author: "Barbara Kingsolver"
        },
        {
        title: "A Constellation of Vital Phenomena",
        author: "Anthony Marra"
        },
        {
        title: "Station Eleven",
        author: "Emily St. John Mandel"
        }
    ];

    // log out the books array
        console.log(books);

    // todo:
    // Loop through the array of books using .forEach and print out the specified information about each one.
    // start loop here

    books.forEach(function(books, index){
        console.log("Book #" + (index + 1));
        console.log("Title: " + books.title);
        console.log("Author: " + books.author);
        console.log("---");
    });

    // end loop here

})();
