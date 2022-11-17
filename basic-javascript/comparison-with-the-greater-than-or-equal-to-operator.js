// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

// Tests
// Waiting:testGreaterOrEqual(0) should return the string Less than 10
// Waiting:testGreaterOrEqual(9) should return the string Less than 10
// Waiting:testGreaterOrEqual(10) should return the string 10 or Over
// Waiting:testGreaterOrEqual(11) should return the string 10 or Over
// Waiting:testGreaterOrEqual(19) should return the string 10 or Over
// Waiting:testGreaterOrEqual(100) should return the string 20 or Over
// Waiting:testGreaterOrEqual(21) should return the string 20 or Over
// Waiting:You should use the >= operator at least twice

// function testGreaterOrEqual(val) {
//   if (val) {  // Change this line
//     return "20 or Over";
//   }

//   if (val) {  // Change this line
//     return "10 or Over";
//   }

//   return "Less than 10";
// }

// testGreaterOrEqual(10);

function testGreaterOrEqual(val) {
    if (val >= 20) {
        // Change this line
        return "20 or Over";
    }

    if (val >= 10) {
        // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);