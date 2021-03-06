import boardgameService from "../services/boardgames.js";

import { firebaseDB } from "../services/firebase.js";
export default class GamePage {
  constructor() {
    this.bgRef = firebaseDB.collection("favorites");
    this.boardgamesService = boardgameService;
    this.boardgamesService.loadBoardgames().then((boardgames) => {
      this.boardgames = boardgames;
    });
    this.chosenGame = "";
    this.theActualGame = [];
    this.template();
    this.favorite = false;
  }

  // THIS PART HAS BEEN MADE BY JACOB
  template() {
    document.getElementById("content").innerHTML += /*html*/ `
      <section id="game" class="page pageWithMargin">
        <header class="topbarWithImage">
        </header>
        <section id="gameInfo">
        </section>
        <section id="gameDescription">
        </section>
      </section>
    `;
  }

  // THIS PART HAS BEEN MADE BY JOSHUA
  create(id) {
    this.bgRef.doc(id).set({
      id,
    });
  }

  delete(id) {
    this.bgRef.doc(id).delete();
  }

  // THIS PART HAS BEEN MADE BY JACOB & JOSHUA
  addFavorite(id) {
    /*    console.log(id); */
    if (this.favorite) {
      document.querySelector(".favoriteButton").innerHTML = /*html*/ `
        <img src="images/heart-unfilled.svg">
        `;
      this.delete(id);
      console.log("Jeg burde have slettet nu");
    } else {
      document.querySelector(".favoriteButton").innerHTML = /*html*/ `
        <img src="images/heart.svg">
        `;

      this.create(id);
      console.log("Jeg burde have added nu");
    }
    this.favorite = !this.favorite;
  }

  // THIS PART HAS BEEN MADE BY JACOB
  findGame(id) {
    console.log(id);
    let chosenId = id;
    let filteredGames = [];
    for (let boardgame of this.boardgames) {
      let gameId = boardgame.id;
      if (gameId.includes(chosenId)) {
        filteredGames.push(boardgame);
      }
    }
    this.theActualGame = filteredGames[0];
    /*     console.log(this.theActualGame); */

    document.querySelector(".topbarWithImage").style.backgroundImage =
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.0)), url(" +
      this.theActualGame.images.large +
      ")";

    console.log(this.theActualGame.images.large);

    document.querySelector(".topbarWithImage").innerHTML = /*html*/ `
      <div class="topbarText">
      <button class="backButton" onclick="history.back()"><img src="images/back.svg"></button>
      <h2>${this.theActualGame.name}</h2>
      <button class="favoriteButton" onclick="addFavorite('${id}')"><img src="images/heart-unfilled.svg"></button>
      </div>
      `;
    document.querySelector("#gameInfo").innerHTML = /*html*/ `
      <div id="gameInfoWrapper">
      <div class="pieceOfGameInfo">
      <img src="images/user.svg" alt="Number of Players">
      <p>${this.theActualGame.min_players}-${this.theActualGame.max_players}</p>
      </div>
      <div class="pieceOfGameInfo">
      <img src="images/clock.svg" alt="Playtime">
      <p>${this.theActualGame.min_playtime}-${
      this.theActualGame.max_playtime
    }m</p>
      </div>
      <div class="pieceOfGameInfo">
      <img src="images/star.svg" alt="User Rating">
      <p>${this.theActualGame.average_user_rating.toFixed(1)}</p>
      </div>
      </div>
      `;
    document.querySelector("#gameDescription").innerHTML = /*html*/ `
    <h3>Description</h3>
    <p>${this.theActualGame.description}</p>
    <p><strong>Year published:</strong> ${this.theActualGame.year_published}</p>
    <p><strong>Published by:</strong> ${this.theActualGame.primary_publisher}</p>
    <p><strong>Minimum age:</strong> ${this.theActualGame.min_age}</p>
        `;

    document.title = this.theActualGame.name + " | Board Game Finder";
  }
}
