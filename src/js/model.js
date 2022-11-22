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
                  <div display="inline">
                    <p class="name" style="display:inline">${item.name}</p>
                    <input class=" " type="image" src="src/img/bookmark-white.png" height="24px width="auto" style="float:right">
                  </div>
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
    function namePrompt() {
      let name = prompt('Item name:');
      console.log(name);
      return name;
    }
    function descriptionPrompt() {
      let description = prompt('Item description:');
      console.log(description);
      return description;
    }
    function changeData(e, name, description) {
      deleteCard(e);
      addCard(name, description);
      console.log('Item name/description successfully changed');
    }

    list.addEventListener('click', (e) => {
      if (e.target.classList.contains('changeButton')) {
        let name = namePrompt();
        if (name == null || name == '') {
          console.log('Invalid name');
        } else {
          let description = descriptionPrompt();
          if (description == null || description == '') {
            console.log('Invalid description');
          } else {
            changeData(e, name, description);
          }
        }
      }
    });

    // DeleteCard
    function deleteCard(e) {
      e.target.parentElement.parentElement.remove();
    }

    // DeleteCardButton
    list.addEventListener('click', (e) => {
      if (e.target.classList.contains('deleteButton')) {
        console.log('Item removed');
        deleteCard(e);
      }
    });

    // AddCard
    function addCard(itemName, itemDescription) {
      list.insertAdjacentHTML(
        'beforeend',
        `
              <div class="card">
                <div class="cardContent">
                  <div display="inline">
                    <p class="name" style="display:inline">${itemName}</p>
                    <input type="image" src="src/img/bookmark-white.png" height="24px width="auto" style="float:right">
                  </div>
                  <div class="info">
                    <p class="examine">${itemDescription}</p>
                  </div>
                  <button class="deleteButton buttonSettings changeAndDeleteButtonSettings">Delete</button>
                  <button class="changeButton buttonSettings changeAndDeleteButtonSettings">Change item data</button>
                </div>
              </div>
              `
      );
      console.log('Item added');
    }

    // AddCardButton
    document.querySelector('.addButton').addEventListener('click', function () {
      let itemName = namePrompt();
      let itemDescription = descriptionPrompt();
      if (
        itemName != null &&
        itemName != '' &&
        itemDescription != null &&
        itemDescription != ''
      ) {
        addCard(itemName, itemDescription);
      } else {
        console.log('Item not added');
      }
    });

    // HomeButton
    document.querySelector('.logoImage').addEventListener('click', function () {
      const items = document.querySelectorAll('.name');
      console.log(items);
      items.forEach((i) => {
        i.parentElement.parentElement.style.display = 'inherit';
      });
      document.querySelector('.searchField').value = '';
    });

    // Bookmark/Unmark
    list.addEventListener('click', (e) => {
      if (!e.target.classList.contains('bookmarked')) {
        e.target.classList.add('bookmarked');
        e.target.src = 'src/img/bookmark.png';
      } else {
        e.target.classList.remove('bookmarked');
        e.target.src = 'src/img/bookmark-white.png';
      }
    });

    // FilterBookmarked
    document
      .querySelector('.bookmarkCollection')
      .addEventListener('click', function () {
        const items = document.querySelectorAll('.name');
        items.forEach((i) => {
          console.log(i.parentElement);
          let bool =
            i.innerHTML.target.parentElement.classList.contains('bookmarked');
          if (bool) {
            i.style.display = 'none';
          } else {
            i.style.display = 'inherit';
          }
        });
      });
  }
}
export default new model();
