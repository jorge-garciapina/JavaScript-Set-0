// 3.	Create a custom object type that will hold a number value.
// a.	Make sure that no other data type can be assigned to that variable.
// b.	It must hold ONLY numbers.

// If the user gives a data different than a number, the value won't
// be saved in the object
class OnlyNumbers {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }
  set value(val) {
    if (typeof val !== "number") {
      throw new Error("Value must be a number");
    }
    this._value = val;
  }
}
let numberObject = new OnlyNumbers(5);
console.log(numberObject.value);
numberObject.value = 0;
console.log(numberObject.value);
numberObject.value = "text"; // Throws an error
