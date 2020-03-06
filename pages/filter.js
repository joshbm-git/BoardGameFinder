import boardgameService from "../services/boardgames.js";
export default class FilterPage {
  constructor() {
    this.template();

    this.boardgamesService = boardgameService;
    this.boardgames = [];
    this.boardgamesService.loadBoardgames().then(boardgames => this.boardgames = boardgames);

    this.filteredBoardgames = [];
    this.players = 0;
    this.playtime = 0;
    this.genre = "";

  }

  /* Joshua has made the code for filter.js */

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
        <section id="filter" class="page gradientBg">
          <header class="topbar gradientBg">
            <h2>Find det mest ideelle brætspil</h2>
          </header>
          <div class="filter-wrapper main-wrapper">
            <h2>Hvor mange spillere er I?</h2>
            <article class="grid-system" id="players">
              <button class="box" onclick="setPlayer(1);addPlaytime();">1</button>
              <button class="box" onclick="setPlayer(2);addPlaytime();">2</button>
              <button class="box" onclick="setPlayer(3);addPlaytime();">3</button>
              <button class="box" onclick="setPlayer(4);addPlaytime();">4</button>
              <button class="box" onclick="setPlayer(5);addPlaytime();">5</button>
              <button class="box" onclick="setPlayer(6);addPlaytime();">6</button>
              <button class="box" onclick="setPlayer(7);addPlaytime();">7</button>
              <button class="box" onclick="setPlayer(8);addPlaytime();">8+</button>
           </article>
            </div>
        </section>

      `;
  }



  addPlaytime() {
    document.querySelector(".filter-wrapper").innerHTML = /*html*/ `
    <h2>Hvor længe vil I ca. spille?</h2>
    <article class="grid-system" id="playtime">
    <button class="box" onclick="setPlaytime(15);addGenre();">15</button>
    <button class="box" onclick="setPlaytime(30);addGenre();">30</button>
    <button class="box" onclick="setPlaytime(60);addGenre();">60</button>
    <button class="box" onclick="setPlaytime(90);addGenre();">90</button>
    <button class="box" onclick="setPlaytime(120);addGenre();">120</button>
    <button class="box" onclick="setPlaytime(150);addGenre();">150</button>
    <button class="box" onclick="setPlaytime(180);addGenre();">180</button>
    <button class="box" onclick="setPlaytime(180);addGenre();">180+</button>
    </article>
  `;
  }

  addGenre() {
    document.querySelector(".filter-wrapper").innerHTML = /*html*/ `
    <h2>Vælg en genre</h2>
    <article class="grid-system" id="genres">
    <button class="box" onclick="setGenre('hBqZ3Ar4RJ');appendBoardgames();">Abstract</button>
    <button class="box" onclick="setGenre('KUBCKBkGxV');appendBoardgames();">Adventure</button>
    <button class="box" onclick="setGenre('ge8pIhEUGE');appendBoardgames();">Cooperative</button>
    <button class="box" onclick="setGenre('ZTneo8TaIO');appendBoardgames();">Fantasy</button>
    <button class="box" onclick="setGenre('X8J7RM6dxX');appendBoardgames();">Party</button>
    <button class="box" onclick="setGenre('2Gu62aKdma');appendBoardgames();">Role Playing</button>
    <button class="box" onclick="setGenre('3B3QpKvXD3');appendBoardgames();">Sci-fi</button>
    <button class="box" onclick="setGenre('O0ogzwLUe8');appendBoardgames();">Strategy</button>
    </article>
  `;
  }

  filterAll() {

    for (let boardgame of this.boardgames) {
      if (this.players >= boardgame.min_players && this.players <= boardgame.max_players) {
        if (this.playtime >= boardgame.min_playtime && this.playtime <= boardgame.max_playtime) {
          if (this.genreIncl(boardgame.categories, this.genre)) {

            this.filteredBoardgames.push(boardgame)
          }
        }
      }

    }
  }

  genreIncl(categories, genre) {
    let includes = false;

    for (let category of categories) {
      if (category.id == genre) {
        includes = true;
      }
    }
    return includes
  }

  appendBoardgames() {

    if (this.filteredBoardgames.length > 0) {
      document.querySelector(".filter-wrapper").innerHTML = /*html*/ `
      <h2>Vi fandt ${this.filteredBoardgames.length} matches</h2>
    `
      for (let boardgame of this.filteredBoardgames) {
        document.querySelector(".filter-wrapper").innerHTML += /*html*/ `
      <div class="boardgame">
      <div class="flex">
      <figure>
        <img src="${boardgame.images.original}">
      </figure>
      </div>
      <h2>${boardgame.name}</h2>
    <div>
      `
      }
    } else {
      document.querySelector(".filter-wrapper").innerHTML = /*html*/ `
      <h2>Vi fandt ${this.filteredBoardgames.length} matches</h2>
          <button class="box" id="tryagain" onclick="location.reload();"><a href="#filter">Prøv igen</a></button>
    `

      loaderService.show(false);
    }

  }
}