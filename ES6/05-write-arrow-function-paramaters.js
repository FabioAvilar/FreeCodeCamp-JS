// Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

// Tests
// Waiting:You should replace the var keyword.
// Waiting:myConcat should be a constant variable (by using const).
// Waiting:myConcat should be an arrow function with two parameters
// Waiting:myConcat() should return [1, 2, 3, 4, 5].
// Waiting:The function keyword should not be used.

// var myConcat = function(arr1, arr2) {
//   return arr1.concat(arr2);
// };

// console.log(myConcat([1, 2], [3, 4, 5]));

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
