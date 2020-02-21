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