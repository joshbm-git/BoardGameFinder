export default class GamePage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="game" class="page">
        <header class="topbar">
          <h2>Hej luder</h2>
          <img src="../images/placeholder.jpg" alt="Brætspil">
        </header>
        <input type="text" placeholder="Søg her..">
        <div id="gameInfo">
        <div class="pieceOfGameInfo">
        <img src="../images/user.svg" alt="Number of Players">
        <p>4-6</p>
        </div>
        <div class="pieceOfGameInfo">
        <img src="../images/clock.svg" alt="Playtime">
        <p>60-90 min</p>
        </div>
        <div class="pieceOfGameInfo">
        <img src="../images/star.svg" alt="User Rating">
        <p>4,5</p>
        </div>
        </div>
<h1>Hva så møgkælling!</h1>
<p>
      </section>
    `;
  }
}