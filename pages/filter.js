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
          <div id="playersWrapper">
          <h2>Hvor mange spiller er I?</h2>
          <div id="players">
        
          <button class="box" onclick=""><a href="">1</a></button>
          <button class="box" onclick=""><a href="">2</a></button>
          <button class="box" onclick=""><a href="">3</a></button>
          <button class="box" onclick=""><a href="">4</a></button>
          <button class="box" onclick=""><a href="">5</a></button>
          <button class="box" onclick=""><a href="">6</a></button>
          <button class="box" onclick=""><a href="">7</a></button>
          <button class="box" onclick=""><a href="">8+</a></button>
        </div>
        </div>
        <div id="playtime"></div>
        <div id="genres"></div>
        </section>

        <div id="grid-filtered-boardgames" class="grid-container"></div>
      `;
  }


  appendBoardgames(boardgames) {
    for (let boardgame of boardgames) {
      if (boardgame.name === "Spirit Island") {
        document.querySelector("#grid-filtered-boardgames").innerHTML += `
        <article>
          <img src="${boardgame.image_url}">
          <h4>${boardgame.name}</h4>
        </article>
        `;
      }
    }

  }


  playersSelected() {
    this.appendBoardgames(boardgames.boardgame.min_players === 1)
  }


  //todo:
  //  players on click ->> return board games with x min player count
  // after picking genres, display block the grid-boardgames, with a loader before





}