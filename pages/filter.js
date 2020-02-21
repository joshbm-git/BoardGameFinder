import boardgameService from "../services/boardgames.js";
export default class FilterPage {
  constructor() {
    this.template();
    this.boardgamesService = boardgameService
    this.boardgamesService.loadBoardgames().then(boardgames => this.appendBoardgames(boardgames));
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
        <section id="filter" class="page">
          <header class="topbar">
            <h2>Find det mest ideelle brætspil</h2>
          </header>
          <div id="playersWrapper">
          <h2>Hvor mange spiller er I?</h2>
          <div id="players">
        
          <button class="box"><a href="">1</a></button>
          <button class="box"><a href="">2</a></button>
          <button class="box"><a href="">3</a></button>
          <button class="box"><a href="">4</a></button>
          <button class="box"><a href="">5</a></button>
          <button class="box"><a href="">6</a></button>
          <button class="box"><a href="">7</a></button>
          <button class="box"><a href="">8+</a></button>
        </div>
        </div>
        <div id="playtime"></div>
        <div id="genres"></div>
        </section>
      `;
  }



  /*   
            <div id="grid-boardgames" class="grid-container"></div>'
            
            
            appendBoardgames(boardgames) {
      for (let boardgame of boardgames) {
        document.querySelector("#grid-boardgames").innerHTML += `
          <article>
            <img src="${boardgame.image_url}">
            <h4>${boardgame.name}</h4>
          </article>
          `;
      }
    } */
}