import boardgameService from "../services/boardgames.js";
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
      this.chosenGame = "";
    });

  }


  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="home" class="page">
        <header class="topbar">
          <h2>Bedste brætspil lige nu</h2>
        </header>
        
        <input type="text" placeholder="Søg her.." onkeyup="search(this.value)">
        <h3>Mest populære brætspil</h3>

        <div id="grid-boardgames" class="grid-container"></div>
      </section>
    `;

  }

  appendBoardgames(boardgames) {
    console.log(boardgames);

    boardgames.sort(function (a, b) {
      return b.average_user_rating.toString().localeCompare(a.average_user_rating.toString());
    });

    document.querySelector("#grid-boardgames").innerHTML = '';
    let htmlTemplate = "";
    for (let boardgame of boardgames) {
      htmlTemplate += /*html*/ `
                <article>
                  <a href="#game"><img src="${boardgame.image_url}" onclick="setChosenGame(${boardgame.id})"></a>
                  <h4>${boardgame.name}</h4>
                </article>
                `;
    }




    document.querySelector("#grid-boardgames").innerHTML += htmlTemplate;
  }
  /*   appendBoardgames(boardgames) {
        let points = [];
        for (let boardgame of this.boardgames) {

            points.push(boardgame.average_user_rating);
        }

        points.sort();
        points.reverse();
        console.log(points);


    } */

  // search functionality
  search(value) {
    console.log(value);
    let searchQuery = value.toLowerCase();
    let filteredGames = [];
    for (let boardgame of this.boardgames) {
      let title = boardgame.name.toLowerCase();
      if (title.includes(searchQuery)) {
        filteredGames.push(boardgame);
      }
    }
    console.log(filteredGames);
    this.appendBoardgames(filteredGames);
  }

  setChosenGame(id) {
    console.log(id);


  }

}