function gridCreation(side) {
  // This is the parent container. It is the only div defined in the HTML.
  const element = document.getElementById("div1");

  // -index- is used to number the elements of the grid
  let index = 0;

  // Create a Document Fragment to hold the elements
  // avoiding render the DOM in every iteration
  const fragment = document.createDocumentFragment();

  for (let i = 0; i <= side - 1; i++) {
    // CREATION OF THE ROW.
    // The code creates the rows in which it will put
    // numbered grids.
    // Every row is a grid:
    const row = document.createElement("div");
    row.id = "row" + i;
    row.className = "row";

    // CREATION OF THE COLUMNS
    for (let j = 0; j <= side - 1; j++) {
      // Element that will go inside the row:
      const rowElement = document.createElement("div");

      // A class to define CSS styles:
      rowElement.className = "row-element";

      // Text inside the divs
      rowElement.textContent = String(index);

      // Append the rowElements to the row
      row.appendChild(rowElement);
      index++;
    }
    fragment.appendChild(row);
  }

  // Append the fragment to the main div
  element.appendChild(fragment);

  // Add a single event listener to the parent container
  element.addEventListener("click", (event) => {
    // Check if the clicked element has the 'row-element' class
    // If it does, show an alert with the element's text content
    if (event.target.classList.contains("row-element")) {
      alert(event.target.textContent);
    }
  });
}

// It is possible to change the size of the grid
gridCreation(5);
