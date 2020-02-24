import boardgameService from "../services/boardgames.js";
export default class FilterPage {
  constructor() {
    this.template();
    this.boardgamesService = boardgameService
    this.boardgames = [];

    this.boardgamesService.loadBoardgames().then(boardgames => this.boardgames = boardgames);

    this.filteredBoardgames = [];
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

        </section>

        <div id="grid-filtered-boardgames" class="grid-container"></div>
      `;
  }

  /*   <div id="playtime">
    <button class="box" onclick="setPlaytime(15)">15</button>
    <button class="box" onclick="setPlaytime(30)">30</button>
    <button class="box" onclick="setPlaytime(60)">60</button>
    <button class="box" onclick="setPlaytime(90)">90</button>
    <button class="box" onclick="setPlaytime(120)">120</button>
    <button class="box" onclick="setPlaytime(150)">150</button>
    <button class="box" onclick="setPlaytime(180)">180</button>
    <button class="box" onclick="setPlaytime(180)">180+</button>
    </div>
    <div id="genres">
    <button class="box" onclick="setGenre(1)">1</button>
    <button class="box" onclick="setGenre(2)">2</button>
    <button class="box" onclick="setGenre(3)">3</button>
    <button class="box" onclick="setGenre(4)">4</button>
    <button class="box" onclick="setGenre(5)">5</button>
    <button class="box" onclick="setGenre(6)">6</button>
    <button class="box" onclick="setGenre(7)">7</button>
    <button class="box" onclick="setGenre(8)">8+</button>
    </div> */




  filterPlayers() {
    for (let boardgame of this.boardgames) {

      if (this.players >= boardgame.min_players && this.players <= boardgame.max_players) {
        filteredBoardgames.push(boardgame)
      }

      console.log(this.filteredBoardgames)
      console.log(this.players)
    }
  }

  filterPlaytime() {

  }

  filterGenres() {

  }

  appendBoardgames() {


  }

  //optional todo: spring over





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