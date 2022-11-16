// To make this exercise I use the rest parameters syntax:
// which accepts an indefinite number of arguments as an array:
function add(...arguments) {
  // I decided to use this algorith for adition instead of using a built-in
  // function.
  let result = 0;
  for (elmnt of arguments) {
    result += elmnt;
  }

  return result;
}

console.log(add(1, 2) + add(1, 4, 6, 7, 2));
