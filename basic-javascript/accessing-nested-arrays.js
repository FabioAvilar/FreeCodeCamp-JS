// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

// Tests
// Waiting:secondTree should equal the string pine.
// Waiting:Your code should use dot and bracket notation to access myPlants.

// const myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// const secondTree = "";

const myPlants = [
    {
        type: "flowers",
        list: ["rose", "tulip", "dandelion"],
    },
    {
        type: "trees",
        list: ["fir", "pine", "birch"],
    },
];

const secondTree = myPlants[1].list[1];

console.log(secondTree);