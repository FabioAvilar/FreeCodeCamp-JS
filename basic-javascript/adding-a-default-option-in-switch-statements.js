// Write a switch statement to set answer for the following conditions:
// a - apple
// b - bird
// c - cat
// default - stuff

// Tests

// Waiting: switchOfStuff("a") should return the string apple
// Waiting: switchOfStuff("b") should return the string bird
// Waiting: switchOfStuff("c") should return the string cat
// Waiting: switchOfStuff("d") should return the string stuff
// Waiting: switchOfStuff(4) should return the string stuff
// Waiting: You should not use any if or else statements
// Waiting: You should use a default statement
// Waiting: You should have at least 3 break statements

// function switchOfStuff(val) {
//   let answer = "";
//   // Only change code below this line



//   // Only change code above this line
//   return answer;
// }

// switchOfStuff(1);

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            return "apple";
            break;
        case "b":
            return "bird";
            break;
        case "c":
            return "cat";
            break;
        default:
            return "stuff";
            break;
    }

    // Only change code above this line
    return answer;
}

switchOfStuff(1);