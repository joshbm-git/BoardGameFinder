import boardgameService from "../services/boardgames.js";
import loaderService from "../services/loader.js";

export default class HomePage {
  constructor() {
    this.template();
    this.boardgamesService = boardgameService;
    this.boardgamesService.loadBoardgames().then(boardgames => {
      this.boardgames = boardgames;
      this.appendBoardgames(boardgames)
      this.cat_fantasy = "ZTneo8TaIO";
      this.cat_adventure = "KUBCKBkGxV";
      this.cat_strategy = "O0ogzwLUe8";
      this.cat_rpg = "2Gu62aKdma";
      this.cat_party = "X8J7RM6dxX";
      this.cat_trivia = "YGHGDjahKY";
      this.chosenGame = "RLlDWHh7hR";
    });
  }
  getCategories(categories) {
    if (categories) {
      let template = "";
      for (const category of categories) {
        if (category.id == "KUBCKBkGxV") {
          template += "Adventure, ";
        }

        if (category.id == "ZTneo8TaIO") {
          template += "Fantasy, ";
        }

        if (category.id == "O0ogzwLUe8") {
          template += "Strategy, ";
        }

        if (category.id == "2Gu62aKdma") {
          template += "RPG, ";
        }

        if (category.id == "X8J7RM6dxX") {
          template += "Party, ";
        }

        if (category.id == "YGHGDjahKY") {
          template += "Trivia, ";
        }

        if (category.id == "3B3QpKvXD3") {
          template += "Sci-fi, ";
        }

        if (category.id == "eX8uuNlQkQ") {
          template += "Card, ";
        }

        if (category.id == "QAYkTHK1Dd") {
          template += "Medieval, ";
        }

        if (category.id == "N0TkEGfEsF") {
          template += "Economic, ";
        }

        if (category.id == "a8NM5cugJX") {
          template += "Ancient, ";
        }

        if (category.id == "ODWOjWAJj3") {
          template += "City Building, ";
        }

        if (category.id == "TKQncFVX74") {
          template += "Political, ";
        }
      }
      template = template.substring(0, template.length - 2);
      return template;
    }
  }

  template() {
    document.getElementById("content").innerHTML += /*html*/ `
      <section id="home" class="page page-forside">
        <header class="forsideHeader">
          <img src="images/logo.png">
          <input type="text" placeholder="Søg her.." onkeyup="search(this.value)">
        </header>

        <input type="text" placeholder="Søg her.." onkeyup="search(this.value)">

        <div class="grid-wrapper">
        <h3>Mest populære brætspil</h3>
        <div id="grid-boardgames" class="grid-container"></div>
        </div>
      </section>
    `;
  }

  appendBoardgames(boardgames) {
    /*     console.log(boardgames); */

    boardgames.sort(function(a, b) {
      return b.average_user_rating.toString().localeCompare(a.average_user_rating.toString());
    });

    document.querySelector("#grid-boardgames").innerHTML = "";
    let htmlTemplate = "";
    for (let boardgame of boardgames) {
      htmlTemplate += /*html*/ `

                <article>
                <div class="img-container">
                <a href="#game"><img src="${boardgame.images.small}" onclick="setChosenGame('${boardgame.id}')"></a>
                  </div>
                  <h4>${boardgame.name}</h4>
                  <h5>${this.getCategories(boardgame.categories)}</h5>
                </article>
                `;
    }

    document.querySelector("#grid-boardgames").innerHTML += htmlTemplate;
    loaderService.show(false);
  }

  // search functionality
  search(value) {
    /*     console.log(value); */
    let searchQuery = value.toLowerCase();
    let filteredGames = [];
    for (let boardgame of this.boardgames) {
      let title = boardgame.name.toLowerCase();
      if (title.includes(searchQuery)) {
        filteredGames.push(boardgame);
      }
    }
    /*     console.log(filteredGames); */
    this.appendBoardgames(filteredGames);
  }

  setChosenGame(id) {
    this.chosenGame = id;
    /*     console.log(this.chosenGame); */
  }
}