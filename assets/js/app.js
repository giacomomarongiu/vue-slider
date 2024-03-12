console.log("Funziona!");

const { createApp } = Vue

createApp({
  data() {
    return {
      clock:"",
      myAutoPlay: true,
      activeMovie: 0,
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
  },
  methods: {
    left() {
      //verifico se lo triggero bene
      console.log("left"); //ok
      //Al click voglio che il mio "indice" diminuisca
      this.activeMovie--
      //Gestisco il caso limite
      if (this.activeMovie < 0) {
        this.activeMovie = (this.movies.length - 1);
      }
    },
    right() {
      //verifico se lo triggero bene
      console.log("right"); //ok
      //Al click voglio che il mio "indice" aumenti
      this.activeMovie++
      //Gestisco il caso limite
      if (this.activeMovie == (this.movies.length)) {
        this.activeMovie = 0;
      }
    },
    //Creo una funzione che mi permetta di chiamare ogni 3 secondi la funzione right()
    autoGo() {
      clock=setInterval(this.right, 3000)
    },
    autoStop(){
      clearInterval(clock)
    }
  },
  //La inserisco qui (prima il this mi dice che l'oggetto)
  created() {
     this.autoGo()
  }
}).mount('#app')
