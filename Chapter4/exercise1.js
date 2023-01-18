// 1. Create a recursive function that will
// calculate the fibonacci value of a number.

// To make this function I used the recursive definition of Fibonacci:
// fibonacci(0) = 0
// fibonacci(1) = 1
// fibonacci(2) = fibonacci(1) + fibonacci(0)
// fibonacci(3) = fibonacci(2) + fibonacci(1)
// fibonacci(4) = fibonacci(3) + fibonacci(2)
// ...
// fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(9));
