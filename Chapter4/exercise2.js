// 2 Create a function that will recursively go through
// all of the elements of an array of numbers and add them.

function addRecHelper(arr, index, sum) {
  // Base case: If we've reached the end of the array, return the sum.
  if (index === arr.length) {
    return sum;
  } else {
    // Recursive case: Add the current element to the sum, and move to the next index.
    return addRecHelper(arr, index + 1, sum + arr[index]);
  }
}

function addRec(arr) {
  // Call the helper function with the initial index of 0 and a sum of 0.
  return addRecHelper(arr, 0, 0);
}

console.log(addRec([1, 3, 1, 1, 8, 24]));
