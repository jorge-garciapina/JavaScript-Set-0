// 3.	Create an object that will hold methods for
// adding, multiplying, and factorial operations.

let myMath = {
  add: function (...args) {
    let suma = 0;
    for (elmnt of args) {
      suma += elmnt;
    }
    return suma;
  },
  mul: function (...args) {
    let multi = 1;
    for (elmnt of args) {
      multi *= elmnt;
    }
    return multi;
  },
  fact: function (n) {
    let result = 1;
    for (let i = n; i > 1; i--) {
      result *= i;
    }
    return result;
  },
};

console.log(myMath.add(1, 2, 3));
console.log(myMath.mul(1, 2, 3));
console.log(myMath.fact(6));
