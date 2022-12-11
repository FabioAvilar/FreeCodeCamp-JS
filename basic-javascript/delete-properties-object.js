// Delete the tails property from myDog. You may use either dot or bracket notation.

// You should delete the property tails from myDog.
// Waiting: You should not modify the myDog setup.

// // Setup
// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"],
//   "bark": "woof"
// };

// // Only change code below this line

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
console.log(myDog);

delete myDog.tails;

console.log(myDog);