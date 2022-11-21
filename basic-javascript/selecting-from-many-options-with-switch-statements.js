// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta

// Tests
// Waiting:caseInSwitch(1) should have a value of the string alpha
// Waiting:caseInSwitch(2) should have a value of the string beta
// Waiting:caseInSwitch(3) should have a value of the string gamma
// Waiting:caseInSwitch(4) should have a value of the string delta
// Waiting:You should not use any if or else statements
// Waiting:You should have at least 3 break statements

// function caseInSwitch(val) {
//   let answer = "";
//   // Only change code below this line



//   // Only change code above this line
//   return answer;
// }

// caseInSwitch(1);

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }

    // Only change code above this line
    return answer;
}

caseInSwitch(1);