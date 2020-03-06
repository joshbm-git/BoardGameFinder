import {
    firebaseDB
} from "./firebase.js"

import boardgameService from "./boardgames.js";

import GamePage from "../pages/gamepage.js";
let gamePage = new GamePage();

/* Mike has made the code for this */

export default class FavoriteService {
    constructor() {
        this.favoriteRef = firebaseDB.collection("favorites");

        this.template();
        this.boardgamesService = boardgameService;
        this.boardgamesService.loadBoardgames().then(boardgames => {
            this.boardgames = boardgames;
            this.read();
            this.chosenGame = "";
        });


    }

    template() {
        document.getElementById('content').innerHTML += /*html*/ `
            <section id="favorites" class="page">
              <header class="topbar">
                <h2>Favoritter</h2>
              </header>
              
              <div id="favoriteInfo">
             </div>
            </section>

          `;
    }
    // ========== READ ==========
    // watch the database ref for changes
    read() {
        this.favoriteRef.onSnapshot(snapshotData => {
            let favorites = [];

            snapshotData.forEach(doc => {
                let favorite = doc.data();
                favorite.id = doc.id;
                favorites.push(favorite);


            });
            this.appendFavorites(favorites)
        });
    }

    // append favorites to the DOM
    appendFavorites(favorites) {
        for (let favorite of favorites) {
            let favGame = this.findGame(favorite);
            console.log(favGame)
            document.getElementById('favoriteInfo').innerHTML += /*html*/ `
     <a href="#game" onclick="setChosenGame('${favGame.id}')">
            <div class="favoriteWrapper">
     
                    <img src="${favGame.images.small}">

                <div class="favoriteInfoWrapper">
                 <h2>${favGame.name}</h2>
                <div class="favoriteRatingWrapper">
               
                <p>Rating: ${favGame.average_user_rating.toFixed(1)}</p>
                 </div>
                </div>
            </div>
            </a>
      `;
        }

    }

    findGame(favorite) {
        for (let boardgame of this.boardgames) {
            if (boardgame.id === favorite.id) {
                return boardgame;
            }
        }
    }

    /* Jacob has made the code for this */
    setChosenGame(id) {
        this.chosenGame = id;
        /*     console.log(this.chosenGame); */
    }
}