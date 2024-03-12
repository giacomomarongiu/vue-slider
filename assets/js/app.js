console.log("Funziona!");

const { createApp } = Vue

createApp({
  data() {
    return {
      movies: [{
        title: "Il Signore degli anelli",
        category: "fantasy",
        length: 180,
        description: "lorem ipsum lorem ipsumlorem ipsuml lor em ipsumorem ipsumlorem ipsum"
      },
      {
        title: "Il buono, il brutto e il cattivo",
        category: "fatasy",
        length: 121,
        description: "lorem ipsum lorem ipsumlorem ipsuml lor em ipsumorem ipsumlorem ipsum"
      },
      {
        title: "Pulp Fiction",
        category: "fatasy",
        length: 123,
        description: "lorem ipsum lorem ipsumlorem ipsuml lor em ipsumorem ipsumlorem ipsum"
      }, {
        title: "Star Wars - Rogue One",
        category: "fatasy",
        length: 109,
        description: "lorem ipsum lorem ipsumlorem ipsuml lor em ipsumorem ipsumlorem ipsum"
      },
      {
        title: "Le iene",
        category: "fatasy",
        length: 115,
        description: "lorem ipsum lorem ipsumlorem ipsuml lor em ipsumorem ipsumlorem ipsum"
      }
      ]

    }
  }
}).mount('#app')
