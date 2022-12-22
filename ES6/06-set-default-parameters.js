// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

// Tests
// Waiting:The result of increment(5, 2) should be 7.
// Waiting:The result of increment(5) should be 6.
// Waiting:A default parameter value of 1 should be used for value.

// // Only change code below this line
// const increment = (number, value) => number + value;
// // Only change code above this line

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

console.log(increment(7));
console.log(increment(7, 7));
