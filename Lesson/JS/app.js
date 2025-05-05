// function greetUser() {
//     console.log('Hi Terrell.');
// }

// Using an argument within function
function greetUser(name) {
    console.log('Hi ' + name);
}
// Running a Function
greetUser('Terrell');

// Using a return statement
function giveFood(food) {
    let foo = `${food} and ${food}`;
    return foo
    // Everything under return statement will be voided
}

let totalFood = giveFood('apples');
console.log(totalFood);

// Implementing functions within loops
let listOfNames = ['Terrell', 'Josh', 'Natasha'];
for (let i = 0; i < listOfNames.length; i++) {
    greetUser(listOfNames[i])
}

// Function Expression
const calculateArea = function(length, width) {
    return length * width;
    // Return statement setting up the function
}

let area = calculateArea(5, 10);
console.log(area);