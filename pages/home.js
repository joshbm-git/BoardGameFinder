export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="home" class="page">
        <header class="topbar">
          <h2>Bedste brætspil lige nu</h2>
        </header>
        <input type="text" placeholder="Søg her..">

        most popular
      </section>
    `;
  }
}