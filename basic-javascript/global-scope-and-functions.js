// Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

// Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.

// myGlobal should be defined
// Waiting:myGlobal should have a value of 10
// Waiting:myGlobal should be declared using the let or const keywords
// Waiting:oopsGlobal should be a global variable and have a value of 5

// // Declare the myGlobal variable below this line


// function fun1() {
//   // Assign 5 to oopsGlobal Here

// }

// // Only change code above this line

// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
 oopsGlobal = 5;
 console.log(oopsGlobal)
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1()

fun2()