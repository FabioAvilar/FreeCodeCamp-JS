// Add the less than operator to the indicated lines so that the return statements make sense.

// Tests
// Waiting:testLessThan(0) should return the string Under 25
// Waiting:testLessThan(24) should return the string Under 25
// Waiting:testLessThan(25) should return the string Under 55
// Waiting:testLessThan(54) should return the string Under 55
// Waiting:testLessThan(55) should return the string 55 or Over
// Waiting:testLessThan(99) should return the string 55 or Over
// Waiting:You should use the < operator at least twice

// function testLessThan(val) {
//   if (val) {  // Change this line
//     return "Under 25";
//   }

//   if (val) {  // Change this line
//     return "Under 55";
//   }

//   return "55 or Over";
// }

// testLessThan(10);

function testLessThan(val) {
    if (val < 25) {
        // Change this line
        return "Under 25";
    }

    if (val < 55) {
        // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);