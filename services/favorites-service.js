import {
    firebaseDB
} from "./firebase.js"

import boardgameService from "./boardgames.js";

/* Mike has made the code for this */

export default class FavoriteService {
    constructor() {
        this.favoriteRef = firebaseDB.collection("favorites");

        this.template();
        this.boardgamesService = boardgameService;
        this.boardgamesService.loadBoardgames().then(boardgames => {
            this.boardgames = boardgames;
            this.read();
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
     
            <div class="favoriteWrapper">
     
                    <img src="${favGame.images.small}">

                <div class="favoriteInfoWrapper">
                 <h2>${favGame.name}</h2>
                <div class="favoriteRatingWrapper">
               
                <p>Rating: ${favGame.average_user_rating.toFixed(1)}</p>
                 </div>
                </div>
            </div>
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
}