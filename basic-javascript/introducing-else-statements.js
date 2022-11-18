// Combine the if statements into a single if/else statement.

// Tests
// Passed:You should only have one if statement in the editor
// Passed:You should use an else statement
// Passed:testElse(4) should return the string 5 or Smaller
// Passed:testElse(5) should return the string 5 or Smaller
// Passed:testElse(6) should return the string Bigger than 5
// Passed:testElse(10) should return the string Bigger than 5
// Passed:You should not change the code above or below the specified comments.

// function testElse(val) {
//     let result = "";
//     // Only change code below this line

//     if (val > 5) {
//         result = "Bigger than 5";
//     }

//     if (val <= 5) {
//         result = "5 or Smaller";
//     }

//     // Only change code above this line
//     return result;
// }

// testElse(4);

function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        return (result = "Bigger than 5");
    } else val <= 5;
    result = "5 or Smaller";

    // Only change code above this line
    return result;
}

testElse(4);

console.log(testElse(6));