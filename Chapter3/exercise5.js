// 5. Create a function that will print out the properties of an object.

// PART 1: BASIC DEFINITIONS
// Creaton of the class that will give life to the object.
class CustomObject {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// Creation of a value that is not part of the constructor.
CustomObject.prototype.c = function () {
  return this.a + this.b;
};

// Creation of the object
var simpleObject = new CustomObject(1, 2);
// -------------------
// PART 2: SOLUTION TO THE PROBLEM.
// Definition of the function, to fullfill the requirements of the
// problem, booleanParameter is set false by default.
function printObjProp(inputObject, booleanParameter = false) {
  // Case 1: to print all the properties accessible by the object
  if (!booleanParameter) {
    let output = [];
    for (let elmnt in inputObject) {
      output.push(elmnt);
    }

    return output;
  }
  // Case 2: To print the values that belong to the object instance
  return Object.keys(inputObject);
}

// Call to the function
console.log(printObjProp(simpleObject, true));

