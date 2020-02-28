import {
    firebaseDB
} from "./firebase.js"

export default class FavoriteService {
    constructor() {
        this.favoriteRef = firebaseDB.collection("favorites");
        this.read();
        this.template();
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

            let filteredGames = [];
            for (let favorite of favorites) {
                let gameId = favorite.id;
                console.log(favorite.id)
                if (favorites.includes(gameId)) {
                    filteredGames.push(favorite);
                }

            }

            console.log(filteredGames);
            this.appendFavorites(favorites)
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
    findGames(favorites) {
        console.log(favorites);
        let chosenId = id;
        let filteredGames = [];
        for (let boardgame of boardgames) {
            let gameId = boardgame.id;
            if (gameId.includes(chosenId)) {
                filteredGames.push(boardgame);
            }
        }
        this.theActualGame = filteredGames[0];
        console.log(this.theActualGame);
    }
    // append favorites to the DOM
    appendFavorites(favorites) {
        for (let favorite of favorites) {
            document.getElementById('favoriteInfo').innerHTML += /*html*/ `
            
        <div class="favoriteWrapper">
        <img src="${favorite.image_url}">
        <div class="favoriteInfoWrapper">
        <h2><strong>${favorite.name}</strong></h2>
        <div class="favoriteCategories">
        
        </div>
        </div>
        </div>
        <hr>
        

      `;
        }
        console.log(favorites);
    }


}