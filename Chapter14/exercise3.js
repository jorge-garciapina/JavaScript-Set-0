// -----------------START: PART 1-------------------
// PART 1: INITIAL AND AFTER-REFRESH VIEW OF THE PAGE:

// Obtaining the information about the main container
const mainContainer = document.getElementById("main-container");

// for (elmnt of Object.keys(localStorage)) {
//   delete localStorage[elmnt];
// }
// This structure:
// 1) Evaluates if this is the first time the page is loaded
if (Object.keys(localStorage).length === 0) {
  template1();
}
// 2) Evaluates if the last chosen template was -template 1-
else if (localStorage.getItem("whichView") === "template1") {
  template1();
}
// 3) Evaluates if the last chosen template was -template 2-
else if (localStorage.getItem("whichView") === "template2") {
  template2();
}
// -----------------END: PART 1-------------------
// -------------------------------------------------

// -----------------------------------------------
// ---------------START: TEMPLATE 1---------------
function template1() {
  // Here code creates (if it is the first time the page is loaded).
  // or modifies the value of -whichView- (located in -localStorage-)
  localStorage.setItem("whichView", "template1");

  // Everytime the template1() is called, the page is re initializedc
  mainContainer.innerHTML = "";

  // Give some style to the main container (in order to display as required)
  mainContainer.setAttribute("style", "display:flex; flex-direction: row");

  // CREATION OF THE ELEMENTS (TITLE, IMAGE AND TEXT):
  // 1) CONTAINER FOR THE ELEMENTS:
  const customContainer = document.createElement("div");
  customContainer.setAttribute("style", "color: red;");
  mainContainer.appendChild(customContainer);
  customContainer.setAttribute(
    "style",
    "display: flex;" + "flex-direction: column"
  );

  // 2) TITLE:
  const title = document.createElement("h1");
  title.innerHTML = "This is template 1";
  customContainer.appendChild(title);

  // 3) IMAGE:
  const image = document.getElementById("template-image");
  const clon = image.content.cloneNode(true);
  customContainer.appendChild(clon);

  // 4) TEXT:
  const texto = document.createElement("p");
  texto.setAttribute("style", "text-align: justify; font-size:1.5rem");
  // Functionallity to change template view
  texto.setAttribute("onclick", "templateClick()");
  // Tith this function the code calls the text from a JSON file
  appendContent(texto);
  mainContainer.append(texto);
}
// ---------------END: TEMPLATE 1-----------------
// -----------------------------------------------

// -----------------------------------------------
// ---------------START: TEMPLATE 2---------------
function template2() {
  // Modifies the value of -whichView- (located in -localStorage-)
  localStorage.setItem("whichView", "template2");

  // Everytime the template2() is called, the page is re initialized
  mainContainer.innerHTML = "";

  // This line is to clear the previously defined styles
  mainContainer.setAttribute("style", "");

  // CREATION OF THE ELEMENTS (TITLE, IMAGE AND TEXT):
  // 1) IMAGE:
  const image = document.getElementById("template-image");
  const clon = image.content.cloneNode(true);
  mainContainer.appendChild(clon);

  // 2) TITLE:
  const title = document.createElement("h1");
  title.innerHTML = "This is the amazing template 2";
  mainContainer.appendChild(title);

  // 3) TEXT:
  const texto = document.createElement("p");
  texto.setAttribute("style", "text-align: justify; font-size:1.5rem;");

  // To append the link:
  const lnk = document.createElement("a");
  lnk.innerHTML = "Link to template 1";
  lnk.setAttribute("style", "color: blue; font-size: 2rem;");
  // Functionallity to change template view
  lnk.setAttribute("onClick", "templateClick()");
  mainContainer.append(lnk);

  // Tith this function the code calls the text from a JSON file
  appendContent(texto);
  //   texto.innerHTML = paragraph.innerHTML;
  mainContainer.append(texto);
}

// ---------------END: TEMPLATE 2-----------------
// -----------------------------------------------

// AUXILIAR FUNCTIONS:
// templateClick makes it possible to change template
// when the user click image, text or link.
function templateClick() {
  if (localStorage.getItem("whichView") === "template1") {
    template2();
  } else {
    template1();
  }
}

// This function is used to get the data from the JSON file
async function appendContent(htmlElement) {
  let response = await fetch("./exercise3.json");
  let data = await response.json();
  htmlElement.innerHTML = data["textInside"];
}
