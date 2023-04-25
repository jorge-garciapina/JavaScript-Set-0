const app = document.getElementById("app");

async function fetchData() {
  const response = await fetch("data.json");
  return await response.json();
}

function createTemplate1(data, index) {
  const div = document.createElement("div");
  div.className = "template1";
  div.innerHTML = `
  <img src="${data.image}" alt="${data.title}" />
  <div class="content">
    <h2>${data.title}</h2>
    <p>${data.snippet}</p>
  </div>
`;
  div.addEventListener("click", () => {
    renderTemplate2(data, index);
  });
  return div;
}

function createTemplate2(data) {
  const div = document.createElement("div");
  div.className = "template2";
  div.innerHTML = `
  <img src="${data.image}" alt="${data.title}" />
  <h2>${data.title}</h2>
  <p>${data.text}</p>
  <a href="#" class="back-link">Go back</a>
`;
  div.querySelector(".back-link").addEventListener("click", (e) => {
    e.preventDefault();
    history.pushState(null, "", "/");
    navigateToView();
  });
  return div;
}

function renderTemplate1(data) {
  app.innerHTML = "";
  data.forEach((item, index) => {
    const template = createTemplate1(item, index);
    app.appendChild(template);
  });
}

function renderTemplate2(data, index) {
  app.innerHTML = "";
  const template = createTemplate2(data);
  app.appendChild(template);
  history.pushState(null, "", `/article${index + 1}`);
}

async function navigateToView() {
  const data = await fetchData();
  const path = window.location.pathname;

  if (path.startsWith("/article")) {
    const index = parseInt(path.replace("/article", ""), 10) - 1;
    if (index >= 0 && index < data.length) {
      renderTemplate2(data[index], index);
    } else {
      // Redirect to the main page if the index is not valid
      renderTemplate1(data);
    }
  } else {
    renderTemplate1(data);
  }
}

navigateToView();

// Update the view when the back button is clicked
window.addEventListener("popstate", navigateToView);
