// Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.

// Tests
// Waiting:testNotEqual(99) should return the string Equal
// Waiting:testNotEqual("99") should return the string Equal
// Waiting:testNotEqual(12) should return the string Not Equal
// Waiting:testNotEqual("12") should return the string Not Equal
// Waiting:testNotEqual("bob") should return the string Not Equal
// Waiting:You should use the != operator

// // Setup
// function testNotEqual(val) {
//   if (val) { // Change this line
//     return "Not Equal";
//   }
//   return "Equal";
// }

// testNotEqual(10);

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

console.log(testNotEqual(99));