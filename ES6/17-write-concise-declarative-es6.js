// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

// Tests
// Waiting:Traditional function expression should not be used.
// Waiting:setGear should be a declarative function.
// Waiting:bicycle.setGear(48) should change the gear value to 48.

// // Only change code below this line
// const bicycle = {
//   gear: 2,
//   setGear: function(newGear) {
//     this.gear = newGear;
//   }
// };
// // Only change code above this line
// bicycle.setGear(3);
// console.log(bicycle.gear);

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);