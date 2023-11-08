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

// ! Output
console.log("Elenco di film e serie TV:");
console.log(movieAndTvSeriesInstances);
