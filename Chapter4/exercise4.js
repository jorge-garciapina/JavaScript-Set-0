// 4. Write a function that will accept any number
// of arguments and print out their data type.

function dataType(...arguments) {
  // Definition of the array in which the output is saved:
  let output = [];
  // In this for the code loops over all the given arguments (which are
  // saved in the array named -arguments-)
  for (let elmnt of arguments) {
    // This condition is necessary because: typeof [] = "object", and
    // the problem requires to differentiate between "array" and "object"
    if (Array.isArray(elmnt)) {
      output.push("array");
    }
    // This other condition is to differentiate between "numbers"
    // and "floats"
    else if (typeof elmnt === "number" && elmnt % 1 !== 0) {
      output.push("float");
    }
    // The rest of the types can be obtained with typeof
    else {
      output.push(typeof elmnt);
    }
  }
  return output.join(", ");
}

console.log(
  dataType(1, 6.2831, "pi*2", [function () {}, 1], {}, function () {})
);
