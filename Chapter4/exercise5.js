// 5. Write a function that will calculate the distance
// between two points. The function should be able to
// handle 2D and 3D points.

// By using ...arguments all the input arguments are stored in an array
// named arguments. The code takes that as its starting point.
function distance(...arguments) {
  // Part 1: Manipulation of the rest arguments: two points are given,
  // for this code to work, the 2 points need the same number of elements.
  let half = arguments.length / 2;
  let p1 = arguments.splice(0, half);
  let p2 = arguments;

  // Part 2: The code will throw an error if:
  // 1) Only one coordinate is given (as it is specified in text)
  // 2) The points have different number of coordinates.
  if (p1.length < 2 || p2.length < 2 || p1.length !== p2.length) {
    throw "Insufficient parameters";
  }

  // Part 3: Addition of the elements.
  let addition = 0;
  for (let i = 0; i <= p1.length - 1; i++) {
    addition += Math.pow(p1[i] - p2[i], 2);
  }

  return Math.sqrt(addition);
}

var x1 = 1,
  y1 = 2,
  z1 = 1;
var x2 = 2,
  y2 = 2,
  z2 = 4;

var delta1 = distance(x1, y1, x2, y2); // delta = 1
var delta2 = distance(x1, y1, z1, x2, y2, z2); // delta = 3.1622…
// var delta2 = distance(x1, y1); // delta = 3.1622…

console.log(delta1);
console.log(delta2);
