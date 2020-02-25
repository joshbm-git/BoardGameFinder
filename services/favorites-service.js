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
              <div id="fav-content"></div>
            </section>

          `;
    }

    // append favorites to the DOM
    appendFavorites(favorites) {
        let htmlTemplate = "";
        for (let favorite of favorites) {
            document.getElementById('fav-content').innerHTML += `
        <p>${favorite.id}</p>
      `;
        }
        console.log(favorites);
    }


}