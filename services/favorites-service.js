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

    // append favorites to the DOM
    appendFavorites(favorites) {
        for (let favorite of favorites) {
            document.getElementById('favoriteInfo').innerHTML += /*html*/ `
        <div class="favoriteWrapper">
        <img src="${favorite.img}">
        <div class="favoriteInfoWrapper">
        <h2><strong>${favorite.name}</strong></h2>
        <div class="favoriteCategories">
        <p>${favorite.categories[0]},</p>
        <p>${favorite.categories[1]}...</p>
        </div>
        </div>
        </div>
        <hr>

      `;
        }
        console.log(favorites);
    }


}