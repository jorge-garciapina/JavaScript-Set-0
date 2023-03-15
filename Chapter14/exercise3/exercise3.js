fetch("exercise3.json")
  .then((response) => response.json())
  .then((data) => {
    template1();

    function template1() {
      // -----------------------------------------------
      // ---------------START: TEMPLATE 1---------------
      const items = data.items;
      const mainContainer = document.getElementById("main-container");
      mainContainer.innerHTML = "";

      // Create a document fragment
      const template1 = document.createDocumentFragment();

      // This -for- iterates over all the elements in the JSON file
      for (let i = 0; i < items.length; i++) {
        const item = items[i];

        //---------- Start: article-container ----------
        const container = document.createElement("div");
        container.className = "article-container";

        // Adding the image
        const image = document.createElement("img");
        image.src = item.image;
        image.style.cursor = "pointer";
        image.className = "click-able";
        container.appendChild(image);
        //---------- End: article-container ----------

        //---------- Start: Sub-container ----------
        const subContainer = document.createElement("div");
        // Title:
        const title = document.createElement("h2");
        title.style.cursor = "pointer";
        title.textContent = item.title;

        // Text:
        const text = document.createElement("p");
        text.style.cursor = "pointer";
        text.style.fontSize = "1.5rem";
        text.className = "click-able";

        text.textContent = item.text;

        // Adding the items to sub-container
        subContainer.appendChild(title);
        subContainer.appendChild(text);
        //----------- End: Sub-container -----------

        //-------- Start: Event delegation. Change view --------
        container.addEventListener("click", (event) => {
          if (event.target.matches(".click-able")) {
            localStorage.setItem("currentView", "template2");
            localStorage.setItem("article", item.title);

            // Change the location to the "article.html" file
            window.location.href = `article.html?id=${item.id}`;
          }
        });
        //--------- End: Event delegation. Change view ---------

        // Adding the sub container, to the article-container:
        container.appendChild(subContainer);

        // Append article-container to the fragment:
        template1.appendChild(container);
      }

      // Append the fragment to the template1 element:
      mainContainer.appendChild(template1);
      // ---------------END: TEMPLATE 1-----------------
      // -----------------------------------------------
    }
    function template2() {
      // The logic behind this IIFE is:
      // 1) When the view changed from template 1 to template 2
      //    by clicking an article, the title of that article
      //    is saved in localStorage.
      // 2) The IIFE iterates over all the elements in the JSON file
      //    looking for the entry that matches the title saved in the
      //    localStorage.
      // 3) Once it finds the entry with the desired title, the IIFE
      //    returns it.
      const item = (() => {
        for (let element of data.items) {
          if (element.title === localStorage.getItem("article")) {
            return element;
          }
        }
      })();

      const mainContainer = document.getElementById("main-container");
      mainContainer.innerHTML = "";
      const template2 = document.createDocumentFragment();

      const container = document.createElement("div");

      // Image
      const image = document.createElement("img");
      image.src = item.image;
      image.style.float = "left";
      image.style.margin = "0";

      // Title:
      const title = document.createElement("h2");
      title.textContent = item.title;
      title.style.width = "100%";
      title.style.fontSize = "3rem";

      // Text:
      const text = document.createElement("p");
      text.textContent = item.text;
      text.style.fontSize = "3rem";

      // Adding the items to sub-container
      container.appendChild(image);
      container.appendChild(title);
      container.appendChild(text);

      // To return template 1:
      const back = document.createElement("button");
      back.className = "back-button";
      back.textContent = "Back!";
      back.onclick = () => {
        localStorage.setItem("currentView", "template1");
        template1();
      };
      container.appendChild(back);

      template2.appendChild(container);
      mainContainer.appendChild(template2);
    }
  });
