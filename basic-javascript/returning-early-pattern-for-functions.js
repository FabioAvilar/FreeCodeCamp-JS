// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

// Hint
// Remember that undefined is a keyword, not a string.

// Tests

// Waiting: abTest(2, 2) should return a number
// Waiting: abTest(2, 2) should return 8
// Waiting: abTest(-2, 2) should return undefined
// Waiting: abTest(2, -2) should return undefined
// Waiting: abTest(2, 8) should return 18
// Waiting: abTest(3, 3) should return 12
// Waiting: abTest(0, 0) should return 0

// // Configuração
// function abTest(a, b) {
//   // Altere apenas o código abaixo desta linha

//   // Altere apenas o código acima desta linha

//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// abTest(2,2);

// Configuração
function abTest(a, b) {
    // Altere apenas o código abaixo desta linha
    if (a < 0 || b < 0) {
        return undefined;
    }

    // Altere apenas o código acima desta linha

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);
