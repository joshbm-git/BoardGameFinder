import {
    firebaseDB
} from "./firebase.js";

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
        });
    }

    // append users to the DOM
    appendFavorites(favorites) {
        let htmlTemplate = "";
        for (let favorite of favorites) {
            htmlTemplate += `
            <article>
            <img src="${boardgame.img}">
            <h2>${boardgame.name}</h2>
            <p>${boardgame.category}</p>
            `;
        }
        document.querySelector('#content').innerHTML = htmlTemplate;
    }
}