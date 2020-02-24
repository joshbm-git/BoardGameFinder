/*import loaderService from "./loader.js";
 class BGService {
  constructor() {
    this.loaderService = loaderService;
  } 
  
    async loadBoardgames() {
    // insert api here
    let response = await fetch("https://www.boardgameatlas.com/api/search?client_id=LtJ7MiiwkF");
    let jsonData = await response.json();
    console.log(jsonData);
    this.loaderService.show(false);
    return jsonData.games;
  }*/

class BoardgamesService {
  constructor() {}

  async loadBoardgames() {
    // insert api here
    let response = await fetch("https://www.boardgameatlas.com/api/search?client_id=LtJ7MiiwkF");
    let jsonData = await response.json();
    return jsonData.games;
  }


}

/* client_id = LtJ7MiiwkF
 */
const boardgameService = new BoardgamesService();
export default boardgameService;