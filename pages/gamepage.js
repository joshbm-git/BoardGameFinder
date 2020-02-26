import boardgameService from "../services/boardgames.js";
export default class GamePage {
  constructor() {
    this.chosenGame = "RLlDWHh7hR";
    this.theActualGame = "";
    this.template();
    this.boardgamesService = boardgameService;
    this.boardgamesService.loadBoardgames().then(boardgames => {
      this.boardgames = boardgames;
      this.findGame(boardgames, this.chosenGame);

    })

  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="game" class="page pageWithMargin">
        <header class="topbarWithImage">
        </header>
        <div id="gameInfo">
        <div id="gameInfoWrapper">
        <div class="pieceOfGameInfo">
        <img src="../images/user.svg" alt="Number of Players">
        <p>X-X</p>
        </div>
        <div class="pieceOfGameInfo">
        <img src="../images/clock.svg" alt="Playtime">
        <p>X-Xm</p>
        </div>
        <div class="pieceOfGameInfo">
        <img src="../images/star.svg" alt="User Rating">
        <p>X</p>
        </div>
        </div>
        </div>
        <section id="gameDescription">
<h3>Beskrivelse</h3>
<p>${this.chosenGame}</p>
        </section>
      </section>
    `;
  }

  addFavorites() {

  }

  findGame(boardgames, id) {
    console.log(id);
    let chosenId = id;
    let filteredGames = [];
    for (let boardgame of boardgames) {
      let gameId = boardgame.id;
      if (gameId.includes(chosenId)) {
        filteredGames.push(boardgame);
      }
    }

    this.theActualGame = filteredGames;
    console.log(this.theActualGame);

    let htmlTemplate = "";
    htmlTemplate = /*html*/ `
      <div class="topbarText">
      <button class="backButton" onclick=""><img src="../images/heart.svg"></button>
      <h2>${this.theActualGame.name}</h2>
      <button class="favoriteButton" onclick="addFavorite()"><img src="../images/heart.svg"></button>
      </div>
      `;
    document.querySelector(".topbarWithImage").innerHTML += htmlTemplate;

  }

}