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
// -------------------- END PART 1-----------------------

// -------------------- PART 2: MAIN FUNCTIONALITY------------------
// This is the function that transforms the text into 2, 3 or 4 columns
// In principle it could work fine with more columns.
function columnAdd(elemnt, columns) {
  // This part refresh the main container every time a button is pushed
  // it avoids overlappings.
  elemnt.innerHTML = "";

  // This part defines the number of columns in the grid,
  // it is important to say that the grid layout is defined in the CSS.
  elemnt.setAttribute(
    "style",
    "grid-template-columns: repeat(" + String(columns) + ", auto [col-start]);"
  );

  // The columns are paragraphs created and added to the main container
  // the text will go inside this paragraphs.
  // This for creates that p's and put the text inside.
  for (let i = 1; i <= columns; i++) {
    // Definition of the p's (columns)
    const colmn = document.createElement("p");
    // Style of the columns
    colmn.setAttribute(
      "style",
      "background-color: white; border:solid; margin:0;"
    );
    //------------- Start: Adding the text--------------
    // The text will be the inner HTML of the column
    colmn.innerHTML = textP2
      .slice(
        ((i - 1) * textP2.length) / columns,
        (i * textP2.length) / columns - 1
      )
      .join(" ");
    //------------- End: Adding the text--------------

    // Finally, we append the column as a child of the main div
    elemnt.appendChild(colmn);
  }
}
// -------------------- END PART 2-----------------------

// -------------------- PART 3: BUTTONS:-----------------------
// All this buttons use the function defined previously
function twoColumns() {
  const mainContainer = document.getElementById("text-container");
  columnAdd(mainContainer, 2);
}

function threeColumns() {
  const mainContainer = document.getElementById("text-container");
  columnAdd(mainContainer, 3);
}

function fourColumns() {
  const mainContainer = document.getElementById("text-container");
  columnAdd(mainContainer, 4);
}
// -------------------- END PART 3-----------------------
