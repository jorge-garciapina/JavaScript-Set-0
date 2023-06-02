// 3.	Create a custom object type that will hold a number value.
// a.	Make sure that no other data type can be assigned to that variable.
// b.	It must hold ONLY numbers.

class OnlyNumbers {
  #value; // Declare a private class field

  constructor(value) {
    this.value = value;
  }

  // Method to set the value
  set value(v) {
    // Check whether the input value is a number
    if (typeof v !== "number") {
      throw new Error("Value must be a number");
    }

    // If the input value is a number, set the #value private field
    this.#value = v;
  }

  // Method to get the value
  get value() {
    return this.#value;
  }
}

let numberObject = new OnlyNumbers(5);
console.log(numberObject.value); // Output: 5, no need for getValue(), you can directly access the property.

numberObject.value = 0;
console.log(numberObject.value); // Output: 0

numberObject.value = "text"; // Throws an error

