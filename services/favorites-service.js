import {
    firebaseDB
} from "./firebase.js"

import boardgameService from "./boardgames.js";

export default class FavoriteService {
    constructor() {
        this.favoriteRef = firebaseDB.collection("favorites");
        this.read();
        this.template();
        this.boardgamesService = boardgameService;
        this.boardgamesService.loadBoardgames().then(boardgames => {
            this.boardgames = boardgames;
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
            document.getElementById('favoriteInfo').innerHTML += /*html*/ `
            
        <div class="favoriteWrapper">
        <div class="favoriteInfoWrapper">
        <h2><strong>${favorite.id}</strong></h2>
        <div class="favoriteCategories">
        
        </div>
        </div>
        </div>
        <hr>
        

      `;
        }

    }

    /* 
                               let filteredGames = [];
                               for (let boardgame of this.boardgames) {
                                   let gameId = favorite.id;

                                   if (boardgame.id.includes(gameId)) {
                                       filteredGames.push(boardgame);
                                   }
           console.log(filteredGames);
           
          
                               } */

    findGames(favorites) {
        /*        console.log(favorites); */
        let chosenId = id;
        let filteredGames = [];
        for (let boardgame of boardgames) {
            let gameId = boardgame.id;
            if (gameId.includes(chosenId)) {
                filteredGames.push(boardgame);
            }
        }
        this.theActualGame = filteredGames[0];
        /*         console.log(this.theActualGame); */
    }
}