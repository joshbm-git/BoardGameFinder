import boardgameService from "../services/boardgames.js";
export default class HomePage {
    constructor() {
        this.template();
        this.boardgamesService = boardgameService;
        this.boardgamesService.loadBoardgames().then(boardgames => {
            this.boardgames = boardgames;
            this.appendBoardgames(boardgames)
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
            htmlTemplate += `
                <article>
                  <img src="${boardgame.image_url}">
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


}