var myLib = {
  math: {
    real: {
      add: function (a, b) {
        /*code goes here*/
        return a + b;
      },
      sub: function (a, b) {
        /*code goes here*/
        return a - b;
      },
      mul: function (a, b) {
        /*code goes here*/
        return a * b;
      },
    },
    complex: {
      Num: function (real, img) {
        /*code goes here*/
      },
      add: function (a, b) {
        /*code goes here*/
      },
      sub: function (a, b) {
        /*code goes here*/
      },
      mul: function (a, b) {
        /*code goes here*/
      },
    },
    matrix: {
      add: function (a, b) {
        /*matrix addition*/
      },
      sub: function (a, b) {
        /*matrix subtraction*/
      },
      mul: function (a, b) {
        /*matrix multiplication*/
      },
      eye: function (size) {
        /*identity matrix*/
      },
      dot: function (m, a) {
        /*dot product*/
      },
      times: function (a, b) {
        /*element-wise multiplication*/
      },
    },
  },
};

// ---------------------------------------------------
// -----------START: FUNCTION CALL #1-----------------
var answer = myLib.math.real.sub(
  myLib.math.real.add(20, 22),
  myLib.math.real.mul(2, 5)
);

// Simplification using -with- statement:
with (myLib.math.real) {
  console.log(sub(add(20, 22), mul(2, 5)));
}

// Simplification without using the -with- statement:
let real = myLib.math.real;
var answerSimplifyNW = real.sub(real.add(20, 22), real.mul(2, 5));
// -----------END: FUNCTION CALL #1-----------------
// ---------------------------------------------------

// ---------------------------------------------------
// -----------START: FUNCTION CALL #2-----------------
// FUNCTION CALL #2:
var ans = myLib.math.matrix.times(
  myLib.math.matrix.eye(4),
  myLib.math.complex.sub(
    new myLib.math.complex.Num(myLib.math.real.add(5, 2), -3),
    new myLib.math.complex.Num(3, 4)
  )
);

// Simplification using -with- statement:
with (myLib.math.complex) {
  var num1 = new Num(myLib.math.real.add(5, 2), -3);
  var num2 = new Num(3, 4);
}

with (myLib.math.matrix) {
  times(eye(4), myLib.math.complex.sub(num1, num2));
}

// Simplification without using the -with- statement:
// Let's create some variables (the variable -real-)
// was created before
let complex = myLib.math.complex;
let matrix = myLib.math.matrix;

// Use these values to simplify the function calls
let calculation = complex.Num(real.add(5, 2), -3);
var ansSimplifyNW = matrix.times(
  matrix.eye(4),
  (complex.sub(calculation), complex.Num(3, 4))
);

// -----------END: FUNCTION CALL #1-----------------
// ---------------------------------------------------
