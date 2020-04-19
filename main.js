/*  THE ENTIRE GROUP HAS COLLABORATED ON THE CODE  */

// import your hideAllPages
import HomePage from "./pages/home.js";
import FilterPage from "./pages/filter.js";
// import FavoritesPage from "./pages/favorites.js";
import GamePage from "./pages/gamepage.js";
import FavoriteService from "./pages/favorites.js";

// import your services
import spaService from "./services/spa.js";

// Declare and init pages
let homePage = new HomePage();
let filterPage = new FilterPage();
// let favoritesPage = new FavoritesPage();
let gamePage = new GamePage();
let favoriteService = new FavoriteService();

// init services
spaService.init();

window.pageChange = () => spaService.pageChange();

window.setPlayer = (value) => {
  filterPage.players = value;
  console.log(filterPage.players);
  console.log(value);
  // console.log(filterPage.filteredBoardgames)
};

window.setPlaytime = (value) => {
  filterPage.playtime = value;
  console.log(filterPage.playtime);
  console.log(value);
};

window.setGenre = (value) => {
  filterPage.genre = value;
  filterPage.filterAll();
  console.log(filterPage.genre);
  console.log(value);
};

window.addPlaytime = () => filterPage.addPlaytime();
window.addGenre = () => filterPage.addGenre();
window.appendBoardgames = () => filterPage.appendBoardgames();

window.search = (value) => homePage.search(value);
window.setChosenGame = (id) => gamePage.findGame(id);
window.addFavorite = (id) => gamePage.addFavorite(id);

window.addToFavourites = (bgId) => gamePage.addToFavourites(bgId);
window.removeFromFavourites = (bgId) => gamePage.removeFromFavourites(bgId);
