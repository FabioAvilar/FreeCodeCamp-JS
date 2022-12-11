// Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

// Tests

// Passed: playerNumber should be a number
// Passed: The variable player should be a string
// Passed: The value of player should be the string Montana
// Passed: You should use bracket notation to access testObj
// Passed: You should not assign the value Montana to the variable player directly.
// Passed: You should be using the variable playerNumber in your bracket notation

// // Setup
// const testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };

// // Only change code below this line
// const playerNumber = 42;  // Change this line
// const player = testObj;   // Change this line

// console.log(playerNumber);
// console.log(player);

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

console.log(playerNumber);
console.log(player);