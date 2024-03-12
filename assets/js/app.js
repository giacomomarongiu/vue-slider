console.log("Funziona!");

const { createApp } = Vue

createApp({
  data() {
    return {
      activeMovie:0,
      movies: [{
        title: "Il Signore degli anelli",
        category: "fantasy",
        length: 180,
        img: "./assets/img/01.jpg",
        description: "lorem ipsum lorem ipsumlorem ipsuml lor em ipsumorem ipsumlorem ipsum"
      },
      {
        title: "Il buono, il brutto e il cattivo",
        category: "fatasy",
        length: 121,
        img: "./assets/img/02.jpeg",
        description: "lorem ipsum lorem ipsumlorem ipsuml lor em ipsumorem ipsumlorem ipsum"
      },
      {
        title: "Pulp Fiction",
        category: "fatasy",
        length: 123,
        img: "./assets/img/03.jpeg",
        description: "lorem ipsum lorem ipsumlorem ipsuml lor em ipsumorem ipsumlorem ipsum"
      }, {
        title: "Star Wars - Rogue One",
        category: "fatasy",
        length: 109,
        img: "./assets/img/04.jpg",
        description: "lorem ipsum lorem ipsumlorem ipsuml lor em ipsumorem ipsumlorem ipsum"
      },
      {
        title: "Le iene",
        category: "fatasy",
        length: 115,
        img: "./assets/img/05.jpeg",
        description: "lorem ipsum lorem ipsumlorem ipsuml lor em ipsumorem ipsumlorem ipsum"
      }
      ]

    }
  }
}).mount('#app')
