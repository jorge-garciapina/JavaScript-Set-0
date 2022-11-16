// PART 1: CREATION OF THE TIMER CONTROL:
function timeControler(time, message) {
  setInterval(function prueba() {
    console.log(message);
  }, time * 1000);
}

// PART 2: CREATION OF THE FUNCTIONS:
// functionA will execute every 30 seconds
function functionA(message) {
  timeControler(30, message);
}

// functionB will execute every 60 seconds (every minute)
function functionB(message) {
  timeControler(60, message);
}

// functionC will execute every 75 seconds (1 minute 15 seconds)
function functionC(message) {
  timeControler(75, message);
}

functionA("A");
functionB("B");
functionC("C");
