const articleId = new URLSearchParams(window.location.search).get("id");
console.log(articleId);

const readUser = async () => {
  const response = await fetch("http://localhost:3000/items/" + articleId);
  const data = await response.json();
  console.log(data);
  const articleContainer = document.getElementById("article-container");
  const template2 = document.createDocumentFragment();

  const container = document.createElement("div");

  // Image
  const image = document.createElement("img");
  image.src = data.image;
  image.className = "article-image";

  // Title:
  const title = document.createElement("h2");
  title.textContent = data.title;
  title.className = "article-title";

  // Text:
  const text = document.createElement("p");
  text.textContent = data.text;
  text.className = "article-text";

  // Link to exercise3.html:
  const link = document.createElement("a");
  link.href = "exercise3.html";
  link.textContent = "Back to main page";
  link.className = "exercise-link";

  // Adding the items to sub-container
  container.appendChild(image);
  container.appendChild(title);
  container.appendChild(text);
  container.appendChild(link); // Append the link to the container

  template2.appendChild(container);
  articleContainer.appendChild(template2);
};

readUser();
