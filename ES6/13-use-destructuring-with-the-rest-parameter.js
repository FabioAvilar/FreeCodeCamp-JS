// Use a destructuring assignment with the rest parameter to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.

// Tests
// Waiting:removeFirstTwo([1, 2, 3, 4, 5]) should be [3, 4, 5]
// Waiting:removeFirstTwo() should not modify list
// Waiting:Array.slice() should not be used.
// Waiting:Destructuring on list should be used.

// function removeFirstTwo(list) {
//   // Only change code below this line
//   const shorterList = list; // Change this line
//   // Only change code above this line
//   return shorterList;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);

function removeFirstTwo(list) {
    // Only change code below this line
    const [, , ...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
