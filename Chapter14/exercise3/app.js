const app = document.getElementById("app");

async function fetchData() {
  const response = await fetch("data.json");
  return await response.json();
}

function createTemplate1(data, index) {
  const template = document.querySelector("#template1");
  const link = template.content.firstElementChild;
  const clone = document.importNode(link, true);

  clone.href = `#article${index + 1}`;
  clone.querySelector("img").src = data.image;
  clone.querySelector("img").alt = data.title;
  clone.querySelector("h2").textContent = data.title;
  clone.querySelector("p").textContent = data.snippet;

  return clone;
}

function createTemplate2(data) {
  const template = document.querySelector("#template2");
  const div = template.content.cloneNode(true);

  div.querySelector("img").src = data.image;
  div.querySelector("img").alt = data.title;
  div.querySelector("h2").textContent = data.title;
  div.querySelector("p").textContent = data.text;
  div.querySelector(".back-link").href = "#";

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
}

async function navigateToView() {
  const data = await fetchData();
  const hash = window.location.hash;

  if (hash.startsWith("#article")) {
    const index = parseInt(hash.replace("#article", ""), 10) - 1;
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

// Update the view when the hash changes
window.addEventListener("hashchange", navigateToView);
