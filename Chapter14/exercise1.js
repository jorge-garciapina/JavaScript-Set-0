// -------------------------------------------------
// ------------------START: PART 1------------------
// PART 1: DEFINING THE FUNCTIONALITY + AND - BUTTONS:

// Button 1: (+) for rows
function moreRows() {
  const rowNumber = document.getElementById("rows-value");
  let numeric = Number(rowNumber.innerHTML);
  rowNumber.innerHTML = String(numeric + 1);
}

// Button 2: (-) for rows
function lessRows() {
  const rowNumber = document.getElementById("rows-value");
  let numeric = Number(rowNumber.innerHTML);
  if (numeric - 1 <= 0) {
    rowNumber.innerHTML = "0";
  } else {
    rowNumber.innerHTML = String(numeric - 1);
  }
}

// Button 3: (+) for columns
function moreColumns() {
  const columnNumber = document.getElementById("columns-value");
  let numeric = Number(columnNumber.innerHTML);
  columnNumber.innerHTML = String(numeric + 1);
}

// Button 4: (-) for columns
function lessColumns() {
  const columnNumber = document.getElementById("columns-value");
  let numeric = Number(columnNumber.innerHTML);
  if (numeric - 1 <= 0) {
    columnNumber.innerHTML = "0";
  } else {
    columnNumber.innerHTML = String(numeric - 1);
  }
}
// ------------------END: PART 1--------------------
// -------------------------------------------------

// -------------------------------------------------
// ------------------START: PART 2------------------
// PART 2: CONFIGURING THE GRID LAYOUT
function applyChanges() {
  // ------START: VALUES OF COLUMNS AND ROWS ------
  // Find the elements in the DOM:
  // Number of rows:
  const rowNumber = document.getElementById("rows-value");
  // Number of columns:
  const columnNumber = document.getElementById("columns-value");

  // Extract the values chosen by the user
  // Rows:
  let numericRow = Number(rowNumber.innerHTML);
  // Columns:
  let numericColumn = Number(columnNumber.innerHTML);
  // ------END: VALUES OF COLUMNS AND ROWS ------

  // -------------------START: MAIN CONTAINER ------------------
  // CONFIGURING THE MAIN CONTAINER:
  // Main container (where the grid is):
  const mainContainer = document.getElementById("mainContainer");

  // This while is very important, is used to delete the content
  // inside the main container every time the user chooses
  // a new configuration of rows and columns
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  // This style if for configuring the number of rows that the
  // grid will have:
  mainContainer.setAttribute(
    "style",
    "grid-template-columns: repeat(" +
      String(numericRow) +
      ", auto [col-start]);"
  );
  // -------------------END: MAIN CONTAINER ------------------

  // ----------START: ADDING THE GRID ITEMS ------------------
  for (let i = 0; i <= numericRow * numericColumn - 1; i++) {
    // Creation of the grid items:
    const gritItem = document.createElement("div");
    // Some styles:
    gritItem.setAttribute(
      "style",
      "background-color: red; border:solid; border-color: black"
    );
    // append the grid item as child of the main container
    mainContainer.appendChild(gritItem);
  }
  // ----------END: ADDING THE GRID ITEMS ------------------
}

// ------------------END: PART 2--------------------
// -------------------------------------------------
