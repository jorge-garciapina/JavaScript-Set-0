// I did the problem again, using the knowledege I have
// acquired since I made the problem the first time.
// One of the points in the feedback was to not overcomplicate things.
function printAttr(elementInDOM, inputAttributes) {
  // This function is different from the first
  // attempt because it recieves the element
  // in the DOM as a parameter: "elementInDOM"
  for (let i = 0; i < inputAttributes.length; i++) {
    // The "for" iterates over the input attributes
    // provided by the user.
    let attr = inputAttributes[i];
    // Now the code evaluates if there is an attribute with
    // the name given by the value in -atrr-
    let value = elementInDOM.getAttribute(attr);
    if (!value) {
      console.log("-" + String(attr) + "- is not an attribute");
    } else {
      console.log(String(attr) + ": ", value);
    }
  }
}
let element = document.getElementById("a");
printAttr(element, ["id", "class", "style", "val"]);
