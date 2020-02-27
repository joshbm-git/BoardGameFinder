import boardgameService from "../services/boardgames.js";
export default class HomePage {
  constructor() {
    this.template();
    this.boardgamesService = boardgameService;
    this.boardgamesService.loadBoardgames().then(boardgames => {
      this.boardgames = boardgames;
      this.appendBoardgames(boardgames)

      this.cat_adventure = "KUBCKBkGxV";
      this.cat_fantasy = "ZTneo8TaIO";
      this.cat_strategy = "O0ogzwLUe8";
      this.cat_rpg = "2Gu62aKdma";
      this.cat_party = "X8J7RM6dxX";
      this.cat_trivia = "YGHGDjahKY";
      this.cat_scifi = "3B3QpKvXD3";
      this.cat_card = "eX8uuNlQkQ";
    });

  }

  getCategories(categories) {

    if (categories) {

      let template = '';
      for (const category of categories) {
        if (category.id == 'KUBCKBkGxV') {
          template += 'adventure ';
        }

        if (category.id == 'ZTneo8TaIO') {
          template += 'fantasy ';
        }

        if (category.id == 'O0ogzwLUe8') {
          template += 'strategy ';
        }

        if (category.id == '2Gu62aKdma') {
          template += 'rpg ';
        }

        if (category.id == 'X8J7RM6dxX') {
          template += 'party ';
        }

        if (category.id == 'YGHGDjahKY') {
          template += 'trivia ';
        }

        if (category.id == '3B3QpKvXD3') {
          template += 'scifi ';
        }

        if (category.id == 'eX8uuNlQkQ') {
          template += 'card ';
        }

        if (category.id == 'QAYkTHK1Dd') {
          template += 'medieval ';
        }

        if (category.id == 'N0TkEGfEsF') {
          template += 'economic';
        }

        if (category.id == 'a8NM5cugJX') {
          template += 'ancient';
        }

        if (category.id == 'ODWOjWAJj3') {
          template += 'city building';
        }

        if (category.id == 'TKQncFVX74') {
          template += 'political';
        }


      }

      return template;
    }
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
      htmlTemplate += `
              
                <article>
                <div class="img-container">
                  <a href="#game"><img src="${boardgame.image_url}"></a>
                  </div>
                  <h4>${boardgame.name}</h4>
                  <h5>${this.getCategories(boardgame.categories)}</h5>
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


}