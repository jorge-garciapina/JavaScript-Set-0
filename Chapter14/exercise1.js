let columnsValue = 0;
let rowsValue = 0;

// Button 1: (+) for columns
function moreColumns() {
  columnsValue++;
  document.getElementById("columns-value").textContent = columnsValue;
}

// Button 2: (-) for columns
function lessColumns() {
  columnsValue = Math.max(0, columnsValue - 1);
  document.getElementById("columns-value").textContent = columnsValue;
}

// Button 3: (+) for rows
function moreRows() {
  rowsValue++;
  document.getElementById("rows-value").textContent = rowsValue;
}

// Button 4: (-) for rows
function lessRows() {
  rowsValue = Math.max(0, rowsValue - 1);
  document.getElementById("rows-value").textContent = rowsValue;
}

function applyChanges() {
  const mainContainer = document.getElementById("mainContainer");

  // Remove old grid items
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }

  // Set the number of columns for the grid
  mainContainer.style.gridTemplateColumns = `repeat(${columnsValue}, auto)`;

  // Create a document fragment to hold the grid items
  const fragment = document.createDocumentFragment();

  // Add the grid items to the fragment
  for (let i = 0; i < rowsValue * columnsValue; i++) {
    const gridItem = document.createElement("div");
    gridItem.style.backgroundColor = "red";
    gridItem.style.border = "solid";
    gridItem.style.borderColor = "black";
    fragment.appendChild(gridItem);
  }

  // Append the fragment to the main container
  mainContainer.appendChild(fragment);
}
