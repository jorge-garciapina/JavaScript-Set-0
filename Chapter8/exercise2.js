// PART 1: FUNCTION THAT CONTROLS THE EXECUTION
// OF THE SIMPLE FUNCTIONS:
// This variable will be used to control the
// execution of the functions
let counter = 0;
function executeFunctions() {
  // The function will be calles every second
  // ... counter will provide the seconds that
  // has passed since the execution negab
  counter++;

  // Executes every 30 seconds
  if (counter % 30 === 0) {
    functionA();
  }

  // Executes every 60 seconds
  if (counter % 60 === 0) {
    functionB();
  }

  // Executes every 75 seconds
  if (counter % 75 === 0) {
    functionC();
  }
}

// PART 2: SIMPLE FUNCTIONS
function functionA() {
  console.log("Function A");
}

function functionB() {
  console.log("Function B");
}

function functionC() {
  console.log("Function C");
}

setInterval(executeFunctions, 1000);
