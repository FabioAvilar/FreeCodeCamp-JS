// Change randomFraction to return a random number instead of returning 0

// Tests
// Waiting:randomFraction should return a random number.
// Waiting:The number returned by randomFraction should be a decimal.
// Waiting:You should be using Math.random to generate the random decimal number.

// function randomFraction() {

//   // Only change code below this line

//   return 0;

//   // Only change code above this line
// }

function randomFraction() {
    // Altere apenas o código abaixo desta linha

    return Math.random() * 10;

    // Altere apenas o código acima desta linha
}

console.log(randomFraction());