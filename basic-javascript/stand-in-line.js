// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLine function should then return the element that was removed.

// Waiting:nextInLine([], 5) should return a number.
// Waiting:nextInLine([], 1) should return 1
// Waiting:nextInLine([2], 1) should return 2
// Waiting:nextInLine([5,6,7,8,9], 1) should return 5
// Waiting:After nextInLine(testArr, 10), testArr[4] should be 10

// function nextInLine(arr, item) {
//   // Altere apenas o código abaixo desta linha
  
//   // Altere apenas o código acima desta linha
// }

// // Configuração
// let testArr = [1, 2, 3, 4, 5];

// // Exibir o código
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));







function nextInLine(arr, item) {
    // Altere apenas o código abaixo desta linha
    arr.push(item);
    const removed = arr.shift();
    return removed;
    // Altere apenas o código acima desta linha
}

// Configuração
let testArr = [1, 2, 3, 4, 5];

// Exibir o código
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

console.log(nextInLine([5, 6, 7], 2));
