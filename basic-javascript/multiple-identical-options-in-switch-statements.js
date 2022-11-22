

// Write a switch statement to set answer for the following ranges:
// 1-3 - Low
// 4-6 - Mid
// 7-9 - High

// Note: You will need to have a case statement for each number in the range.

// Tests

// Waiting: sequentialSizes(1) should return the string Low
// Waiting: sequentialSizes(2) should return the string Low
// Waiting: sequentialSizes(3) should return the string Low
// Waiting: sequentialSizes(4) should return the string Mid
// Waiting: sequentialSizes(5) should return the string Mid
// Waiting: sequentialSizes(6) should return the string Mid
// Waiting: sequentialSizes(7) should return the string High
// Waiting: sequentialSizes(8) should return the string High
// Waiting: sequentialSizes(9) should return the string High
// Waiting: You should not use any if or else statements
// Waiting: You should have nine case statements

// function sequentialSizes(val) {
//   let answer = "";
//   // Only change code below this line



//   // Only change code above this line
//   return answer;
// }

// sequentialSizes(1);

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            return "Low";
            break;
        case 4:
        case 5:
        case 6:
            return "Mid";
            break;
        case 7:
        case 8:
        case 9:
            return "High";
            break;
    }

    // Only change code above this line
    return answer;
}

sequentialSizes(1);