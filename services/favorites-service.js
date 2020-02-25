import {
    firebaseDB
} from "./firebase.js"

export default class FavoriteService {
    constructor() {
        this.favoriteRef = firebaseDB.collection("favorites");
        this.read();
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
            this.appendFavorites(favorites);
            console.log("lol")
        });
    }

    // append users to the DOM
    appendFavorites(favorites) {
        let htmlTemplate = "";
        for (let favorite of favorites) {
            htmlTemplate += `
            <article>
            <p>${favorite.id}</p>
            `;
        }
        document.querySelector('#content').innerHTML = htmlTemplate;
    }
}