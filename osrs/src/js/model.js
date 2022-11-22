class model {
  loadCards() {
    async function grab(url) {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    }

    const list = document.querySelector(".itemCards");

    grab("https://prices.runescape.wiki/api/v1/osrs/mapping").then((data) => {
      data.forEach((item) => {
        const imgLink = `https://oldschool.runescape.wiki/images/${item.icon.replaceAll(
          " ",
          "_"
        )}`;
        const cardList = list.insertAdjacentHTML(
          "beforeend",
          `
              <div class="card">
                <div class="cardContent">
                  <p class="name">${item.name}</p>
                  <div class="info">
                      <img class="icon" src="${imgLink}">
                    <p class="examine">${item.examine}</p>
                  </div>
                </div>
                <div class="delete">
                  <button class="deleteButton">Delete</button>
                </div>
              </div>
              `
              );
      });
    });

    // Suchfunktion (filterfunktion)
    document
      .querySelector(".searchField")
      .addEventListener("input", function () {
        let query = document.querySelector(".searchField").value;
        const items = document.querySelectorAll(".name");

        // nur karten welche den suchbegriff beinhalten werden gerendert
        items.forEach((i) => {
          if (!i.innerHTML.toLowerCase().includes(query.trim().toLowerCase())) {
            i.parentElement.parentElement.style.display = "none";
          } else {
            i.innerHTML.indexOf;
            i.parentElement.parentElement.style.display = "inherit";
          }
        });
      });

    // Delete Button
    list.addEventListener("click", (e) => {
      if (e.target.classList.contains("deleteButton")) {
        console.log("lol");
        e.target.parentElement.parentElement.remove();
      }
    });

    // Add Button
    list.addEventListener("click", (e) => {
      if (e.target.classList.contains("addItemButton")) {
        console.log("lol");
        const itemName = document.querySelector(".newItemName").value;
        const itemDescription = document.querySelector(".newItemDescription").value;
        cardList = list.insertAdjacentHTML(
          "beforeend",
          `
              <div class="card">
                <div class="cardContent">
                  <p class="name">${item.name}</p>
                  <div class="info">
                      <img class="icon" src="${imgLink}">
                    <p class="examine">${item.examine}</p>
                  </div>
                </div>
                <div class="delete">
                  <button class="deleteButton">Delete</button>
                </div>
              </div>
              `
              );
        e.target.parentElement.parentElement.remove();
      }
    });
  }
}
export default new model();