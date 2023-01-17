// METHOD 1: SOLUTION WITHOUT BUILT-IN FUNCTIONS FUNCTIONALITY:
function mul(a, b) {
  // 1) MULTIPLICATION
  let n = a * b;

  // 2) CONVERSION TO BASE 13:
  // a) The result is a string because for this result:
  // "A" = 10, "B" = 11, "C" = 12
  let result = "";

  // b) Algorith to obtain the result:
  while (true) {
    // Parts of the division:
    let quotient = Math.floor(n / 13);
    let reminder = n % 13;

    // Conversion of 10, 11,12 and 13 to base 13:
    if (reminder === 10) {
      reminder = "A";
    } else if (reminder === 11) {
      reminder = "B";
    } else if (reminder === 12) {
      reminder = "C";
    } else if (reminder === 13) {
      reminder = 10;
    }

    // the reminder is concatenated (to the left) to the result
    result = String(reminder) + result;

    // Condition for stop: if quotient smaller than 13, the program ends
    if (quotient > 13) {
      n = quotient;
    } else {
      result = String(quotient) + result;
      return result;
    }
  }
}

console.log(mul(9, 6));

// METHOD 2: SOLUTION WITH BUILT-IN FUNCTIONS FUNCTIONALITY:
function mul1(num1, num2) {
  let result = num1 * num2;
  return result.toString(13);
}
var answer = mul1(9, 6);
console.log(answer); // "42"
