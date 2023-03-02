// PART 1: BASIC DEFINITIONS
// Definition of the CustomObject class that will give life to the object.
class CustomObject {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }
}

// Adding a method to the CustomObject class that is not part of the constructor.
CustomObject.prototype.calculateSum = function () {
  return this.property1 + this.property2;
};

// Creation of an instance of the CustomObject class
var myObject = new CustomObject(1, 2);

// -------------------
// PART 2: SOLUTION TO THE PROBLEM.
// Definition of the function to print out the properties of an object.
// The boolean argument indicates whether to print only the instance properties.
function printObjectProperties(obj, printInstanceProperties = false) {
  // Case 1: Print all the properties of the object
  if (!printInstanceProperties) {
    let output = [];
    for (let property in obj) {
      output.push(property);
    }
    return output;
  }
  // Case 2: Print only the instance properties of the object
  return Object.keys(obj);
}

// Call to the function to print the instance properties of the object.
console.log(printObjectProperties(myObject, false));

