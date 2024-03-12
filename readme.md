# Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.



# Bonus: 
- 1 al click su una thumb, visualizzare in grande l'immagine corrispondente
- 2 applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
- 3 quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

# Consigli del giorno:
Regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;

## Steps
- Creo i miei file, collego VUE e Bootstrap
- Verifico se funziona
- Creo un prima struttura (Bootstrap) sul file html
- Creo all'interno della mia istanza VUE un array di oggetti (che saranno i miei film)
- Fisso alcune dimensioni con un po' di stile
- Importo le mie immagini prima su html in modo statico
- Inizio a interagire con il mio file Vue, visualizzo prima un film
- Faccio si che anche le mie thumb vengano inserite con VUE
- Aggiungo al mio file VUE una proprietà (Istanza) che mi permetta di sapere/tracciare quale indice possiede il film in primo piano (activeMovie)
- Implemento due bottoni che mi permettono di cambiare il valore di activeMovie
-- Creo in Methods le funzioni left e right
- Assegno a due bottoni le funzioni al @click