// Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

// Tests
// Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.
// Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.
// Waiting:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.
// Waiting:checkObj({city: "Seattle"}, "city") should return the string Seattle.
// Waiting:checkObj({city: "Seattle"}, "district") should return the string Not Found.
// Waiting:checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.

// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   return "Change Me!";
//   // Only change code above this line
// }

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));

console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "house"));