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

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
        <section id="filter" class="page">
          <header class="topbar">
            <h2>Find det mest ideelle brætspil</h2>
          </header>
          <div id="filter-wrapper">
          <h2>Hvor mange spiller er I?</h2>
          <div class="grid-system" id="players">
          <button class="box" onclick="setPlayer(1);addPlaytime();">1</button>
          <button class="box" onclick="setPlayer(2);addPlaytime();">2</button>
          <button class="box" onclick="setPlayer(3);addPlaytime();">3</button>
          <button class="box" onclick="setPlayer(4);addPlaytime();">4</button>
          <button class="box" onclick="setPlayer(5);addPlaytime();">5</button>
          <button class="box" onclick="setPlayer(6);addPlaytime();">6</button>
          <button class="box" onclick="setPlayer(7);addPlaytime();">7</button>
          <button class="box" onclick="setPlayer(8);addPlaytime();">8+</button>
        </div>
        </div>

        </section>

        <div id="grid-filtered-boardgames" class="grid-container"></div>
      `;
  }



  addPlaytime() {
    document.querySelector("#filter-wrapper").innerHTML = /*html*/ `
    <h2>Hvor længe vil I ca. spille?</h2>
    <div class="grid-system" id="playtime">
    <button class="box" onclick="setPlaytime(15);addGenre();">15</button>
    <button class="box" onclick="setPlaytime(30);addGenre();">30</button>
    <button class="box" onclick="setPlaytime(60);addGenre();">60</button>
    <button class="box" onclick="setPlaytime(90);addGenre();">90</button>
    <button class="box" onclick="setPlaytime(120);addGenre();">120</button>
    <button class="box" onclick="setPlaytime(150);addGenre();">150</button>
    <button class="box" onclick="setPlaytime(180);addGenre();">180</button>
    <button class="box" onclick="setPlaytime(180);addGenre();">180+</button>
    </div>
  `;
  }

  addGenre() {
    document.querySelector("#filter-wrapper").innerHTML = /*html*/ `
    <h2>Vælg en genre</h2>
    <div class="grid-system" id="genres">
    <button class="box" onclick="setGenre('hBqZ3Ar4RJ');appendBoardgames();">Abstract</button>
    <button class="box" onclick="setGenre('KUBCKBkGxV');appendBoardgames();">Adventure</button>
    <button class="box" onclick="setGenre('ge8pIhEUGE');appendBoardgames();">Cooperative</button>
    <button class="box" onclick="setGenre('ZTneo8TaIO');appendBoardgames();">Fantasy</button>
    <button class="box" onclick="setGenre('X8J7RM6dxX');appendBoardgames();">Party</button>
    <button class="box" onclick="setGenre('2Gu62aKdma');appendBoardgames();">Role Playing</button>
    <button class="box" onclick="setGenre('3B3QpKvXD3');appendBoardgames();">Sci-fi</button>
    <button class="box" onclick="setGenre('O0ogzwLUe8');appendBoardgames();">Strategy</button>
    </div> */
  `;
  }



  /* 
    filterPlayers() {
      for (let boardgame of this.boardgames) {

        if (this.players >= boardgame.min_players && this.players <= boardgame.max_players) {
          this.filteredBoardgames.push(boardgame)
        }

      }
      console.log(this.filteredBoardgames)
    }

    filterPlaytime() {
      for (let boardgame of this.boardgames) {

        if (this.playtime >= boardgame.min_playtime && this.playtime <= boardgame.max_playtime) {
          this.filteredBoardgames.push(boardgame)

        }
      }
    }

    filterGenres() {
      for (let boardgame of this.boardgames) {

        if (this.genre == boardgame.categories.id) {
          this.filteredBoardgames.push(boardgame)
        }
      }
    } */

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
      console.log(category)
      console.log(genre)
      if (category.id == genre) {
        includes = true;
      }
    }
    return includes
  }

  appendBoardgames() {
    console.log(this.filteredBoardgames)
    let htmlTemplate = "";
    htmlTemplate += /*html*/ `
    <h2>Vi fandt x matches</h2>`

    for (let boardgame of this.filteredBoardgames) {
      htmlTemplate += /*html*/ `
    
    <div class="grid-system" id="boardgames">
${boardgame.name}
    </div> 
  `;

    }
    document.querySelector("#filter-wrapper").innerHTML = htmlTemplate;
  }
}



//optional todo: spring over

/*   

<div class="grid-system" id="playtime">
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



/*   
    

document.querySelector("#grid-filtered-boardgames").innerHTML += `
            <article>
              <img src="${boardgame.image_url}">
              <h4>${boardgame.name}</h4>
            </article>
            `;
     */


//todo:
//  players on click ->> return board games with x min player count
// after picking genres, display block the grid-boardgames, with a loader before