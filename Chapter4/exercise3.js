// 3.	Create a custom object type that will hold a number value.
// a.	Make sure that no other data type can be assigned to that variable.
// b.	It must hold ONLY numbers.

class OnlyNumbers {
  constructor(value) {
    // Call the setValue() method to set the initial value of the object
    this.setValue(value);
  }

  // Method to set the value of the object
  setValue(value) {
    // Check whether the input value is a number
    if (typeof value !== "number") {
      throw new Error("Value must be a number");
    }

    // If the input value is a number, set the _value property
    this._value = value;
  }

  // Method to get the value of the object
  getValue() {
    return this._value;
  }
}

let numberObject = new OnlyNumbers(5);
console.log(numberObject.getValue()); // Output: 5

numberObject.setValue(0);
console.log(numberObject.getValue()); // Output: 0

numberObject.setValue("text"); // Throws an error
