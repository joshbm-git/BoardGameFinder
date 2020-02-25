export default class GamePage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="game" class="page pageWithMargin">
        <header class="topbarWithImage">
        <div class="topbarText">
        <button class="backButton" onclick=""><img src="../images/heart.svg"></button>
        <h2>Hej luder</h2>
        <button class="favoriteButton" onclick="addFavorite()"><img src="../images/heart.svg"></button> 
        </div>
        </header>
        <div id="gameInfo">
        <div id="gameInfoWrapper">
        <div class="pieceOfGameInfo">
        <img src="../images/user.svg" alt="Number of Players">
        <p>4-6</p>
        </div>
        <div class="pieceOfGameInfo">
        <img src="../images/clock.svg" alt="Playtime">
        <p>60-90m</p>
        </div>
        <div class="pieceOfGameInfo">
        <img src="../images/star.svg" alt="User Rating">
        <p>4,5</p>
        </div>
        </div>
        </div>
        <section id="gameDescription">
<h3>Beskrivelse</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel tellus efficitur, tincidunt est sollicitudin, congue metus. Curabitur pharetra quam a dignissim vehicula. Vestibulum id elit mauris. Curabitur sed molestie velit. Vivamus varius, orci et auctor sollicitudin, nulla sapien euismod ex, non blandit purus ipsum vitae metus. Nam dolor dolor, fermentum vel commodo nec, blandit id risus. Proin nec augue ultrices, vehicula turpis eget, hendrerit risus. Praesent mattis, dui a auctor pretium, arcu ipsum posuere dui, in feugiat erat erat a magna. Sed non vehicula metus. Pellentesque eu nibh nec dui euismod finibus quis et risus. Aenean mattis at dui sollicitudin hendrerit. Vestibulum interdum consectetur vehicula. Nam et porta eros, mattis tristique ligula. In rhoncus varius nisl scelerisque laoreet. Curabitur mauris leo, finibus id pulvinar id, vulputate non mi.</p>
        </section>
      </section>
    `;
  }

  addFavorites() {

  }


}