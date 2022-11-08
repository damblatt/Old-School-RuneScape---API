class searchView {
  // Suchfunktion (filterfunktion)
  searchFunction() {
    document
      .querySelector(".searchField")
      .addEventListener("input", function () {
        let query = document.querySelector(".searchField").value;
        const items = document.querySelectorAll(".name");

        // nur karten welche den suchbegriff beinhalten werden gerendert
        items.forEach((i) => {
          if (!i.innerHTML.toLowerCase().includes(query.toLowerCase())) {
            i.parentElement.style.display = "none";
          } else {
            i.innerHTML.indexOf;
            i.parentElement.style.display = "inherit";
          }
        });
      });
  }
}

export default new searchView();
