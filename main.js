// import your hideAllPages
import HomePage from "./pages/home.js";
import FilterPage from "./pages/filter.js";
import FavoritesPage from "./pages/favorites.js";
import GamePage from "./pages/gamepage.js";

// import your services
import spaService from "./services/spa.js";

// Declare and init pages
let homePage = new HomePage();
let filterPage = new FilterPage();
let favoritesPage = new FavoritesPage();
let gamePage = new GamePage();

// init services
spaService.init();


window.pageChange = () => spaService.pageChange();
window.search = (value) => homePage.search(value);
window.setChosenGame = (id) => gamePage.findGame(id);
window.addFavorite = (id) => gamePage.addFavorite(id);

window.addGenre = () => filterPage.addGenre();
window.appendBoardgame = () => filterPage.appendBoardgames();

window.addToFavourites = (bgId) => gamePage.addToFavourites(bgId);
window.removeFromFavourites = (bgId) => gamePage.removeFromFavourites(bgId);