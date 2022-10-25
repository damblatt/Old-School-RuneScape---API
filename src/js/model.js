class model {
  loadCards() {
    async function grab(url) {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    }

    const list = document.querySelector('.item-cards');

    // Ladet alle datensätze in karten
    grab('https://prices.runescape.wiki/api/v1/osrs/mapping').then((data) => {
      data.forEach((item) => {
        const imgLink = `https://oldschool.runescape.wiki/images/${item.icon.replaceAll(
          ' ',
          '_'
        )}`;
        const e = list.insertAdjacentHTML(
          'beforeend',
          `
        <div class="card">
            <p class="name">${item.name}</p>
            <div class="info">
                <img class="icon" src="${imgLink}">
            <p class="examine">${item.examine}</p>
            </div>
        </div>
        `
        );
      });
    });
  }
}

export default new model();
