import loaderService from "./loader.js";
class PersonsService {
  constructor() {
    this.loaderService = loaderService;
  }

  async loadPersons() {
    // insert api here
    let response = await fetch("https://www.boardgameatlas.com/api/search?client_id=LtJ7MiiwkF");
    let jsonData = await response.json();
    console.log(jsonData);
    this.loaderService.show(false);
    return jsonData.games;

  }

}

/* client_id = LtJ7MiiwkF
 */
const personService = new PersonsService();
export default personService;