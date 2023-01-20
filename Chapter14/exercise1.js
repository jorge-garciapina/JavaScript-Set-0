let closureValueColumns = (function () {
  let counter = 0;
  return function () {
    return counter;
  };
})();

let closureValueRows = (function () {
  let counter = 0;
  return function () {
    return counter;
  };
})();


// -------------------------------------------------
// ------------------START: PART 1------------------
// PART 1: DEFINING THE FUNCTIONALITY + AND - BUTTONS:
// ----------Start: Columns----------
// Button 1: (+) for columns
function moreColumns() {
  let value = closureValueColumns();
  value++;

  closureValueColumns = function () {
    return value;
  };
  const columnNumber = document.getElementById("columns-value");

  columnNumber.textContent = closureValueColumns();
}

// Button 2: (-) for columns
function lessColumns() {
  let value = closureValueColumns();
  if (value <= 0) {
    value = 0;
  } else {
    value--;
  }

  closureValueColumns = function () {
    return value;
  };
  const columnNumber = document.getElementById("columns-value");
  columnNumber.textContent = closureValueColumns();
}
// -----------End: Columns-----------

// ----------  Start: Rows ----------
// Button 3: (+) for rows
function moreRows() {
  let value = closureValueRows();
  value++;
  closureValueRows = function () {
    return value;
  };
  const columnNumber = document.getElementById("rows-value");
  if (closureValueRows() <= 0) {
    columnNumber.textContent = "0";
  } else {
    columnNumber.textContent = closureValueRows();
  }
}

// Button 4: (-) for rows
function lessRows() {
  let value = closureValueRows();
  if (value <= 0) {
    value = 0;
  } else {
    value--;
  }

  closureValueRows = function () {
    return value;
  };
  const columnNumber = document.getElementById("rows-value");

  columnNumber.textContent = closureValueRows();
}
// -----------  End: Rows  ----------

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
  // Columns:
  let numericColumn = closureValueColumns();

  // Rows:
  let numericRow = closureValueRows();
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
      String(numericColumn) +
      ", auto [row-start]);"
  );
  // -------------------END: MAIN CONTAINER ------------------

  // ----------START: ADDING THE GRID ITEMS ------------------
// Create a document fragment to avoid manipulating the rendered DOM on every loop iteration
  const fragment = document.createDocumentFragment();
  for (let i = 0; i <= numericRow * numericColumn - 1; i++) {
    // Creation of the grid items:
    const gritItem = document.createElement("div");
    // Some styles:
    gritItem.setAttribute(
      "style",
      "background-color: red; border:solid; border-color: black"
    );
    // append the grid item to the document fragment
    fragment.appendChild(gritItem);
  }
  // Append the fragment to the main container
  mainContainer.appendChild(fragment);
  // ----------END: ADDING THE GRID ITEMS ------------------
}

// ------------------END: PART 2--------------------
// -------------------------------------------------
