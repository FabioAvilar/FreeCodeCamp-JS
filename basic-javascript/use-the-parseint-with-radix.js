// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

// Tests
// Waiting:convertToInteger should use the parseInt() function
// Waiting:convertToInteger("10011") should return a number
// Waiting:convertToInteger("10011") should return 19
// Waiting:convertToInteger("111001") should return 57
// Waiting:convertToInteger("JamesBond") should return NaN

// function convertToInteger(str) {

// }

// convertToInteger("10011");

function convertToInteger(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger("10011"));
