// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

// Tests
// Waiting:sum([1], 0) should equal 0.
// Waiting:sum([2, 3, 4], 1) should equal 2.
// Waiting:sum([2, 3, 4, 5], 3) should equal 9.
// Waiting:Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.).
// Waiting:You should use recursion to solve this problem.

// function sum(arr, n) {
//   // Only change code below this line

//   // Only change code above this line
// }

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}

console.log(sum([2, 3, 4], 1));