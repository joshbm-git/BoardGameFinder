/* THE ENTIRE GROUP HAS COLLABORATED ON THE CODE */
class BoardgamesService {
  constructor() {}

  async loadBoardgames() {
    // insert api here
    let response = await fetch(
      "https://www.boardgameatlas.com/api/search?client_id=LtJ7MiiwkF"
    );
    let jsonData = await response.json();
    /*     console.log(jsonData.games); */
    return jsonData.games;
  }
}

/* client_id = LtJ7MiiwkF
 */
const boardgameService = new BoardgamesService();
export default boardgameService;
