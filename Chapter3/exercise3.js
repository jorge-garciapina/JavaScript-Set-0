// 3.	Create an object that will hold methods for
// adding, multiplying, and factorial operations.

let myMath = {
  add: function (...args) {
    let addition = 0;
    for (let elmnt of args) {
      addition += elmnt;
    }
    return addition;
  },
  mul: function (...args) {
    let multiplication = 1;
    for (let elmnt of args) {
      multiplication *= elmnt;
    }
    return multiplication;
  },
  fact: function (n) {
    let factorial = 1;
    for (let i = n; i > 1; i--) {
      factorial *= i;
    }
    return factorial;
  },
};

console.log(myMath.add(1, 2, 3));
console.log(myMath.mul(1, 2, 3));
console.log(myMath.fact(6));
