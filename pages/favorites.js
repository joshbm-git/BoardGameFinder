export default class FavoritesPage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
        <section id="favorites" class="page">
          <header class="topbar">
            <h2>Favoritter</h2>
          </header>
        </section>

      `;
  }
}