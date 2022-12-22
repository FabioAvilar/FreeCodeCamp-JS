// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

// Tests
// Waiting:The result of sum(0,1,2) should be 3
// Waiting:The result of sum(1,2,3,4) should be 10
// Waiting:The result of sum(5) should be 5
// Waiting:The result of sum() should be 0
// Waiting:sum should be an arrow function which uses the rest parameter syntax (...) on the args parameter.

// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   return args.reduce((a, b) => a + b, 0);
// }

const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum(0, 1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(5));
