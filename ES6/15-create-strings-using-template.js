// Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

// Use an iterator method (any kind of loop) to get the desired output (shown below).

// Tests
// Waiting:failuresList should be an array containing result failure messages.
// Waiting:failuresList should be equal to the specified output.
// Waiting:Template strings and expression interpolation should be used.
// Waiting:An iterator should be used.

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [];
//   // Only change code above this line

//   return failureItems;
// }

// const failuresList = makeList(result.failure);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
    // Only change code below this line
    const failureItems = arr.map((x) => {
        return `<li class="text-warning">${x}</li>`;
    });
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);