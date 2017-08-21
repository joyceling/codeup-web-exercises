"use strict";


console.log("This is the first challenge (using .map function): ")

function giveIndexofArray (enterArrayHere) {

// Enter array here!
// var enterArrayHere;

// Step 1: Find which ones add up to nine and assign a 1
    /*var howMany = enterArrayHere.map(
        function (innerArray) {
            if (innerArray[0] + innerArray[1] === 9) {
                innerArray = 1;
            } else {
                innerArray = 0;
            }
            return innerArray;
        });

    console.log(howMany);*/


// Step 2: Find all the 1's in the array
    var foundAtIndex = -1;
    enterArrayHere.forEach(function (pair, index) {
        if (pair[0] + pair[1] === 9) {
            // console.log(howMany.indexOf(1));
            foundAtIndex = index;
        }
    });


    return foundAtIndex;



    // function findIndex (addMeUp) {
    //
    //     if (addMeUp === 1) {
    //         index = howMany.indexOf(1);
    //     }
    // });
    // console.log(howMany);
    // console.log(indexOfNineArray);
    //
    // if (found == true) {
    //     return
    // }

// };


}
//
console.log(giveIndexofArray([[10, -7], [11, -7], [4, 5], [9, 0]]));
//
// console.log(howMany.indexOf(1));
// } else {
//     console.log("-1");
// }