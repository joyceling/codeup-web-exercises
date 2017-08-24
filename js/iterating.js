(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ["Joyce", "Alex", "Chase", "Adrian"]

    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log(names.length);

    // TODO: Create log statements that will print each of the names array elements individually.

    console.log("This is printed out manually: ")
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);


    console.log("This is printed out with a for loop: ")
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    console.log("This is printed out with a forEach loop: ")
    names.forEach(function (element, index){
        console.log(element);
    });

})();
