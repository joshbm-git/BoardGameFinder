import boardgameService from "../services/boardgames.js";
export default class FilterPage {
  constructor() {
    this.template();
    this.boardgamesService = boardgameService
    this.boardgamesService.loadBoardgames().then(boardgames => this.appendBoardgames(boardgames));
    this.players = 0;
    this.playtime = 0;
    this.genres = "";
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
        
          <button class="box" onclick="setPlayer(1)">1</button>
          <button class="box" onclick="setPlayer(2)">2</button>
          <button class="box" onclick="setPlayer(3)">3</button>
          <button class="box" onclick="setPlayer(4)">4</button>
          <button class="box" onclick="setPlayer(5)">5</button>
          <button class="box" onclick="setPlayer(6)">6</button>
          <button class="box" onclick="setPlayer(7)">7</button>
          <button class="box" onclick="setPlayer(8)">8+</button>
        </div>
        </div>
        <div id="playtime"></div>
        <div id="genres"></div>
        </section>

        <div id="grid-filtered-boardgames" class="grid-container"></div>
      `;
  }



  appendBoardgames(boardgames) {
    let filteredBoardgames = [];

    for (let boardgame of boardgames) {

      if (this.players >= boardgame.min_players || this.players <= boardgames.max_players) {
        filteredBoardgames.push(boardgame)

      }
    }

    console.log(filteredBoardgames)

  }

  /*   document.querySelector("#grid-filtered-boardgames").innerHTML += `
          <article>
            <img src="${boardgame.image_url}">
            <h4>${boardgame.name}</h4>
          </article>
          `;
   */


  //todo:
  //  players on click ->> return board games with x min player count
  // after picking genres, display block the grid-boardgames, with a loader before





}