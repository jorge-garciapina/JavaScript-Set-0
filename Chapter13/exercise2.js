function increaseValue() {
  let counter = 1; // private variable, only accessible within this function
  return function () {
    // I decided to use a IIFE to manage the behavior of the DOM elements
    (() => {
      // This is to modify the header:
      const header = document.getElementById("header1");
      if (3 - counter === 0) {
        // Text that appears once the user has reached the limit.
        header.textContent = "You cannot push the button anymore";
      } else {
        // Text that changes as user activates the button
        header.textContent =
          "You can push the button " + String(3 - counter) + " times";
      }

      // This is the location of the main container (the meter element)
      const meterIndicator = document.getElementById("meter");
      meterIndicator.setAttribute("value", String(counter * 50));
    })();
    return counter++;
  };
}

let increase = increaseValue();

const buttonInDOM = document.getElementById("bttn");
buttonInDOM.onclick = () => {
  let limit = increase();
  if (limit > 2) {
    buttonInDOM.onclick = () => {
      alert("You have reached the liimt");
    };
  }
};
