// Use this technique to generate and return a random whole number between 0 and 9.

// Tests
// Waiting:The result of randomWholeNum should be a whole number.
// Waiting:You should use Math.random to generate a random number.
// Waiting:You should have multiplied the result of Math.random by 10 to make it a number that is between zero and nine.
// Waiting:You should use Math.floor to remove the decimal part of the number.

// function randomWholeNum() {

//   // Only change code below this line

//   return Math.random();
// }

function randomWholeNum() {
    // Altere apenas o código abaixo desta linha

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());
console.log(randomWholeNum());