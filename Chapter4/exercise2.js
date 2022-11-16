// 2 Create a function that will recursively go through
// all of the elements of an array of numbers and add them.
// The steps folloed by this solution are:
// 1- The array is:
// arr = [arr[1],arr[2],arr[3],...arr[n]]
// 2- The algorith works as follows:
// Step 1: arr[n]   + addRec([arr[1],arr[2],arr[3],...arr[n-1]])
// Step 2: arr[n-1] + addRec([arr[1],arr[2],arr[3],...arr[n-2]])
// Step 3: arr[n-2] + addRec([arr[1],arr[2],arr[3],...arr[n-3]])
// ...
// Step m: arr[3] + addRec([arr[1],arr[2])
// Step n: arr[2] + addRec(arr[1])

function addRec(arr) {
  // The program will finish when arr have only
  // one element: arr = [arr[0]]
  if (arr.length === 1) {
    return arr[0];
  } else {
    // The program will iterate over all the elements of the array.
    return arr[arr.length - 1] + addRec(arr.slice(0, arr.length - 1));
  }
}

console.log(addRec([1, 1, 1, 1, 8, 24]));
