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
todo: overskrift "mest populære spil"
        most popular
      </section>
    `;
  }
}