// 3.	Create a custom object type that will hold a number value.
// a.	Make sure that no other data type can be assigned to that variable.
// b.	It must hold ONLY numbers.

// If the user gives a data different than a number, the value won't
// be saved in the object
class onlyNumbers {
  constructor(number) {
    if (typeof number === "number") {
      this.number = number;
    }
  }
}

let num = new onlyNumbers(5);
console.log(num);
