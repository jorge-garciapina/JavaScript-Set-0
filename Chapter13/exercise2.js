function increaseValue() {
  let counter = 1; // private variable, only accessible within this function
  return function () {
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

    counter++;
    if (counter > 3) {
      const buttonInDOM = document.getElementById("bttn");
      buttonInDOM.onclick = () => {
        alert("You have reached the limit");
      };
    }
  };
}

let increase = increaseValue();

const buttonInDOM = document.getElementById("bttn");
buttonInDOM.onclick = increase;
