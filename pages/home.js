export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += `
      <section id="home" class="page">
        <header class="topbar">
          <h2>Bedste brætspil lige nu</h2>
        </header>
        <input type="text" placeholder="Søg her..">
<<<<<<< HEAD
        <h2>most popular</h2>
=======
todo: overskrift "mest populære spil"
        most popular
>>>>>>> master
      </section>
    `;
  }
<<<<<<< Updated upstream
}



// export default class PersonsPage {
//   constructor() {
//     this.template();
//     this.personsService = personService
//     this.personsService.loadPersons().then(persons => this.appendPersons(persons));
//   }


//     appendPersons(persons) {
//   for (let person of persons) {
//     document.querySelector("#content").innerHTML += /*html*/ `
//       <article>
//         <img src="${person.picture.large}">
//         <h4>${person.name.first} ${person.name.last}</h4>
//         <p><a href="mailto:${person.email}">${person.email}</a></p>
//       </article>
//       `;
//   }
// }
// }
=======
}
>>>>>>> Stashed changes
