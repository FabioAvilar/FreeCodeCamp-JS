// Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

// Waiting:testEqual(10) should return the string Not Equal
// Waiting:testEqual(12) should return the string Equal
// Waiting:testEqual("12") should return the string Equal
// Waiting:You should use the == operator

// // Configuração
// function testEqual(val) {
//   if (val) { // Altere esta linha
//     return "Equal";
//   }
//   return "Not Equal";
// }

// testEqual(10);

// Configuração
function testEqual(val) {
  if (val == 12) { // Altere esta linha
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);