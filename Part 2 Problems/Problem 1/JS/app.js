function convertKilometersIntoMiles(kilometers) {
    const miles = kilometers * 0.621371;
    return miles;
}
let distanceKilo = prompt('Enter Number');
let distanceMiles = convertKilometersIntoMiles(distanceKilo);
console.log(distanceMiles);

