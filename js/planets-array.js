(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

    // You can apply .indexOf to either an array or a string
    planets.indexOf("earth");
    var earth = planets[planets.indexOf("earth")];
    console.log(earth.indexOf("r")); // 2

    // capitalizing all the array items using ForEach
    console.log("Using the forEach function: ");
    var newPlanetsArray = [];
    planets.forEach(function (element) {
        element = element.charAt(0).toUpperCase(element) + element.slice(1);
        newPlanetsArray.push (element)
    });
    console.log(newPlanetsArray);


    // capitalizing all the array items using .map function
    console.log("Using the map function: ");
    var capitalPlanets = planets.map(function (arrayItem) {
        // console.log(arrayItem.charAt(0))
        return arrayItem.charAt(0).toUpperCase() + arrayItem.slice(1);
    });

    console.log(capitalPlanets);

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(capitalPlanets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    // unshift adds an item to the beginning of an array
    capitalPlanets.unshift("The Sun");

    logPlanets();

    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    // push adds items to the end of an array
    capitalPlanets.push("Pluto");
    logPlanets();


    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    // shift removes the first item
    capitalPlanets.shift();
    logPlanets();


    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    // pop removes the last item
    capitalPlanets.pop();
    logPlanets();

    console.log('Finding and logging the index of "Earth" in the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    console.log(capitalPlanets.indexOf("Earth"));

    console.log('Using splice to remove the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    capitalPlanets.splice(capitalPlanets.indexOf("Earth") + 1,1);
    logPlanets();

    console.log('Using splice to add back the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    capitalPlanets.splice(capitalPlanets.indexOf("Earth") + 1,0,"Mars");
    logPlanets();

    console.log("Reversing the order of the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    capitalPlanets.reverse();
    logPlanets();


    console.log("Sorting the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    capitalPlanets.sort();
    logPlanets();
})();
