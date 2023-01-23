// -------------------- PART 1: TEXT PROCESSING:-----------------------
// This part is necessary because for some reason the text that
// the code extracts from the HTML contains \n's and empty spaces.
const mainContainer = document.getElementById("txt");
let mainText = mainContainer.innerHTML;
let textP1 = mainText.split(" ");
let textP2 = [];
for (elmnt of textP1) {
  if (elmnt !== "" && elmnt !== "\n") {
    textP2.push(elmnt.replace("\n", ""));
  }
}

// -------------------- PART 2: BUTTONS:-----------------------
// All this buttons use the function defined previously
function twoColumns() {
  const mainContainer = document.getElementById("txt");
  mainContainer.style.columnCount = 2;
}

function threeColumns() {
  const mainContainer = document.getElementById("txt");
  mainContainer.style.columnCount = 3;
}

function fourColumns() {
  const mainContainer = document.getElementById("txt");
  mainContainer.style.columnCount = 4;
}
// -------------------- END PART 2-----------------------
