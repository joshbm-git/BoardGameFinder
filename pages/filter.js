import boardgameService from "../services/boardgames.js";
export default class FilterPage {
  constructor() {
    this.template();
    this.boardgamesService = boardgameService
    this.boardgamesService.loadBoardgames().then(boardgames => this.appendBoardgames(boardgames));
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
        <section id="filter" class="page">
          <header class="topbar">
            <h2>Find det mest ideelle brætspil</h2>
          </header>

          <div id="grid-boardgames" class="grid-container"></div>
        </section>
      `;
  }

  appendBoardgames(boardgames) {
    for (let boardgame of boardgames) {
      document.querySelector("#grid-boardgames").innerHTML += /*html*/ `
        <article>
          <img src="${boardgame.image_url}">
          <h4>${boardgame.name}</h4>
        </article>
        `;
    }
  }
}