class model {
  loadCards() {
    async function grab(url) {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    }

    const list = document.querySelector('.itemCards');

    grab('https://prices.runescape.wiki/api/v1/osrs/mapping').then((data) => {
      data.forEach((item) => {
        const imgLink = `https://oldschool.runescape.wiki/images/${item.icon.replaceAll(
          ' ',
          '_'
        )}`;
        list.insertAdjacentHTML(
          'beforeend',
          `
              <div class="card">
                <div class="cardContent">
                  <p class="name">${item.name}</p>
                  <div class="info">
                      <img class="icon" src="${imgLink}">
                    <p class="examine">${item.examine}</p>
                  </div>
                  <button class="deleteButton buttonSettings changeAndDeleteButtonSettings">Delete</button>
                  <button class="changeButton buttonSettings changeAndDeleteButtonSettings">Change item data</button>
                </div>
              </div>
              `
        );
      });
    });

    // Suchfunktion (filterfunktion)
    document
      .querySelector('.searchField')
      .addEventListener('input', function () {
        let query = document.querySelector('.searchField').value;
        const items = document.querySelectorAll('.name');

        // nur karten welche den suchbegriff beinhalten werden gerendert
        items.forEach((i) => {
          if (!i.innerHTML.toLowerCase().includes(query.trim().toLowerCase())) {
            i.parentElement.parentElement.style.display = 'none';
          } else {
            i.innerHTML.indexOf;
            i.parentElement.parentElement.style.display = 'inherit';
          }
        });
      });

    // Change Button
    function namePrompt(e) {
      let name = prompt('Item name:');
      if (name == null || name == '') {
        console.log('Invalid name');
      } else {
        console.log(name);
        descriptionPrompt(e, name);
      }
    }
    function descriptionPrompt(e) {
      let description = prompt('Item description:');
      if (description == null || description == '') {
        console.log('Invalid description');
      } else {
        console.log(description);
        
        console.log('Item changed');
      }
    }
    list.addEventListener('click', (e) => {
      if (e.target.classList.contains('changeButton')) {
        namePrompt(e);
      }
    });

    // Delete Button
    function deleteCard(e) {
      e.target.parentElement.parentElement.remove();
    }
    list.addEventListener('click', (e) => {
      if (e.target.classList.contains('deleteButton')) {
        console.log('Item removed');
        deleteCard(e);
      }
    });

    // Add Button
    document.querySelector('.addButton').addEventListener('click', function () {
      let itemName = document.querySelector('.newItemName').value;
      let itemDescription = document.querySelector('.newItemDescription').value;
      if (itemName && itemDescription) {
        list.insertAdjacentHTML(
          'beforeend',
          `
              <div class="card">
                <div class="cardContent">
                  <p class="name">${itemName}</p>
                  <div class="info">
                    <p class="examine">${itemDescription}</p>
                  </div>
                  <button class="deleteButton buttonSettings">Delete</button>
                  <button class="changeButton buttonSettings">Change item data</button>
                </div>
              </div>
              `
        );
        console.log('Item added');
      } else {
        console.log('Item not added');
      }
    });
  }
}
export default new model();
