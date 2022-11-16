// -counter- saves the number of times the button has
// been activated
let counter = 1;
function buttonConfig() {
  // In this if we limit the button to only activate 3 times
  if (counter <= 3) {
    // This is to modify the header:
    const header = document.getElementById("header1");
    if (3 - counter === 0) {
      // Text that appears once the user has reached the limit.
      header.innerHTML = "You cannot push the button anymore";
    } else {
      // Text that changes as user activates the button
      header.innerHTML =
        "You can push the button " + String(3 - counter) + " times";
    }

    // This is the location of the main container (the meter element)
    const mainContainer = document.getElementById("meter");
    // To create the elements that will serve as markers
    // of the meter elements
    const childElement = document.createElement("div");

    // Attributes of the children elements
    childElement.setAttribute(
      "style",
      "  height: 100%;" + "width: 33.33333%;" + "background-color: #005b96;"
    );

    // Append the children elements to the meter counter
    mainContainer.appendChild(childElement);
  }

  counter++;
}
