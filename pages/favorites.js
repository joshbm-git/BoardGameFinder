import FavoriteService from "../services/favorites-service.js";

export default class FavoritesPage {
  constructor() {
    this.template();
    this.favoriteService = FavoriteService;
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
        <section id="favorites" class="page">
          <header class="topbar">
            <h2>Favoritter</h2>
          </header>
        </section>
<div id="content"></div>
      `;
  }

}