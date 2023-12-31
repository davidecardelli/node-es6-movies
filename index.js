// ! Definire un array di oggetti; ogni oggetto rappresenta un film o serie tv, che è caratterizzato da: title, year, genre, rating, type (movie o tv), seasons (solo per serie tv).

const filmsAndSeries = [
    { title: "Il signore degli anelli: la compagnia dell'anello ", year: 2001, genre: "Fantasy", rating: 10, type: "movie" },
    { title: "Il signore degli anelli: le due torri ", year: 2002, genre: "Fantasy", rating: 9, type: "movie" },
    { title: "Il signore degli anelli: il ritorno del re ", year: 2003, genre: "Fantasy", rating: 8, type: "movie" },
    { title: "Sons of Anarchy", year: 2014, genre: "Drama", rating: 10, type: "tv", seasons: 7 },
    { title: "Peaky Blinders", year: 2013, genre: "Gangster", rating: 10, type: "tv", seasons: 7 },
];

// ! Creare una classe Movie che contenga le informazioni sopra indicate.
class Movie {
    constructor(title, year, genre, rating) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = "movie";
    }

    toString() {
        return `${this.title} è un film di genere ${this.genre}. È stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
    }
}

// ! Creare una classe TvSeries che estenda la classe Movie e ne aggiunta la proprietà seasons.
class TvSeries extends Movie {
    constructor(title, year, genre, rating, seasons) {
        super(title, year, genre, rating);
        this.type = "tv";
        this.seasons = seasons;
    }

    toString() {
        return `${super.toString()}. In totale sono state prodotte ${this.seasons} stagioni.`;
    }
}

// ! Tramite la funzione .map(), creare un nuovo array dove per ogni elemento dell’array di oggetti viene creata un istanza della classe Movie o TvSerie in base al type e salvata nel nuovo array.
const movieAndTvSeriesInstances = filmsAndSeries.map(item => {
    if (item.type === "tv") {
        return new TvSeries(item.title, item.year, item.genre, item.rating, item.seasons);
    } else {
        return new Movie(item.title, item.year, item.genre, item.rating);
    }
});

// ! Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere. Prevedere un argomento per la lista dei film ed uno per il genere.
function mediaVotiPerGenere(films, genere) {
    const filmsConGenereSpecifico = films.filter(item => item.genre === genere);
    if (filmsConGenereSpecifico.length === 0) {
        return 0;
    }
    const sommaVoti = filmsConGenereSpecifico.reduce((acc, film) => acc + film.rating, 0);
    return sommaVoti / filmsConGenereSpecifico.length;
}

// ! Creiamo una funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano.
function listaGeneriUnici(films) {
    const generiUnici = new Set();
    films.forEach(item => generiUnici.add(item.genre));
    return Array.from(generiUnici);
}

// ! Creiamo una funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all’interno il risultato della funzione toString() di ogni film.
function filtraFilmPerGenere(films, genere) {
    return films
        .filter(item => item.genre === genere)
        .map(item => item.toString());
}

// ! Output vari
console.log("Elenco di film e serie TV:");
console.log(movieAndTvSeriesInstances);


// Puoi scegliere tra: Fantasy, Drama, Gangster
const genereSpecifico = "Fantasy";
console.log(`Media dei voti per il genere "${genereSpecifico}": ${mediaVotiPerGenere(movieAndTvSeriesInstances, genereSpecifico)}`);


console.log("Lista di tutti i generi senza ripetizioni:");
console.log(listaGeneriUnici(movieAndTvSeriesInstances));


// Puoi scegliere tra: Fantasy, Drama, Gangster
const genereDaFiltrare = "Drama";
console.log(`Film nel genere "${genereDaFiltrare}":`);
console.log(filtraFilmPerGenere(movieAndTvSeriesInstances, genereDaFiltrare));
