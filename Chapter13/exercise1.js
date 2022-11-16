// This code creates a side*side grid.
// The grid are numbered.
// They respond to a click event, alerting its corresponding number.

function gridCreation(side) {
  // This is the parent container. It is the only div defined in the HTML.
  const elemento = document.getElementById("div1");

  // -index- is used to number the elements of the grid
  let index = 0;

  // This for creates the grid.
  // The for do the following:
  // 1) Create a row
  // 2) Add the columns to every row
  for (let i = 0; i <= side - 1; i++) {
    // CREATION OF THE ROW.
    // The code creates the rows in which it will put
    // numbered grids.
    // Every row is a grid:
    const row = document.createElement("div");
    row.setAttribute("id", "row" + i);

    // Some CSS styles:
    row.setAttribute(
      "style",
      " background-color: #fdf498;" +
        "display: flex;" +
        "flex-direction: row;" +
        "width: 80vw; flex-grow: 1;"
    );

    // We append the row to the main div:
    elemento.appendChild(row);

    // CREATION OF THE COLUMNS
    for (let j = 0; j <= side - 1; j++) {
      // Element that will go inside the row:
      const rowElement = document.createElement("div");

      // The id will be used to alert the number inside the div:
      rowElement.setAttribute("id", "element" + String(index));

      // Some styles
      rowElement.setAttribute(
        "style",
        "color:white;" +
          "font-size: 7rem;" +
          "background-color: #7bc043;" +
          "flex-grow: 1;" +
          "display: flex;" +
          "justify-content: center;" +
          "align-items: center;" +
          "color: white;" +
          "border: solid;"
      );

      // Function to alert the id as specified in exercise:
      function alerta() {
        const numeric = /\d/g;
        let pat = rowElement.id.match(numeric).join("");
        alert(Number(pat));
      }

      // Adding the functionality to the rowElement
      rowElement.addEventListener("click", alerta);

      // Text inside the divs
      rowElement.innerHTML = String(index);

      // Append the rowElements to the row
      document.getElementById("row" + String(i)).appendChild(rowElement);
      index++;
    }
  }

  console.log(document.body.children);
}

// It is possible to change the size of the grid
gridCreation(5);
