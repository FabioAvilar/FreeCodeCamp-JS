// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

// Tests
// Waiting:The lowest random number that can be generated by randomRange should be equal to your minimum number, myMin.
// Waiting:The highest random number that can be generated by randomRange should be equal to your maximum number, myMax.
// Waiting:The random number generated by randomRange should be an integer, not a decimal.
// Waiting:randomRange should use both myMax and myMin, and return a random number in your range.

// function randomRange(myMin, myMax) {
//   // Only change code below this line
//   return 0;
//   // Only change code above this line
// }

function randomRange(myMin, myMax) {
    // Altere apenas o código abaixo desta linha
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Altere apenas o código acima desta linha
}

console.log(randomRange(5, 10));
console.log(randomRange(5, 10));
console.log(randomRange(5, 10));