// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Tests

// Waiting: phoneticLookup("alpha") should equal the string Adams
// Waiting: phoneticLookup("bravo") should equal the string Boston
// Waiting: phoneticLookup("charlie") should equal the string Chicago
// Waiting: phoneticLookup("delta") should equal the string Denver
// Waiting: phoneticLookup("echo") should equal the string Easy
// Waiting: phoneticLookup("foxtrot") should equal the string Frank
// Waiting: phoneticLookup("") should equal undefined
// Waiting: You should not modify the return statement
// Waiting: You should not use case, switch, or if statements

// // Setup
// function phoneticLookup(val) {
//   let result = "";

//   // Only change code below this line
//   switch(val) {
//     case "alpha":
//       result = "Adams";
//       break;
//     case "bravo":
//       result = "Boston";
//       break;
//     case "charlie":
//       result = "Chicago";
//       break;
//     case "delta":
//       result = "Denver";
//       break;
//     case "echo":
//       result = "Easy";
//       break;
//     case "foxtrot":
//       result = "Frank";
//   }

//   // Only change code above this line
//   return result;
// }

// phoneticLookup("charlie");

// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    let lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        echo: "Easy",
        foxtrot: "Frank",
        delta: "Denver"
    };

    result = lookup[val];
    // Only change code above this line
    return result;
}

phoneticLookup("charlie");

console.log(phoneticLookup("charlie"));
