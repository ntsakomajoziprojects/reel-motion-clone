
export interface Movie {
  id: number;
  title: string;
  backdrop: string;
  poster: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  genre: string[];
  duration: string;
  maturity: string;
  type: 'movie' | 'series';
  trailer?: string;
  cast: string[];
  director: string;
  seasons?: number;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    backdrop: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1920&h=1080&fit=crop",
    poster: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=450&fit=crop",
    overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    releaseDate: "2016",
    voteAverage: 8.7,
    genre: ["Drama", "Fantasy", "Horror"],
    duration: "51m",
    maturity: "TV-14",
    type: "series",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour"],
    director: "The Duffer Brothers",
    seasons: 4
  },
  {
    id: 2,
    title: "The Dark Knight",
    backdrop: "https://images.unsplash.com/photo-1478720568477-b0834d467c1e?w=1920&h=1080&fit=crop",
    poster: "https://images.unsplash.com/photo-1478720568477-b0834d467c1e?w=300&h=450&fit=crop",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    releaseDate: "2008",
    voteAverage: 9.0,
    genre: ["Action", "Crime", "Drama"],
    duration: "2h 32m",
    maturity: "PG-13",
    type: "movie",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    director: "Christopher Nolan"
  },
  {
    id: 3,
    title: "Breaking Bad",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=1080&fit=crop",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    overview: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",
    releaseDate: "2008",
    voteAverage: 9.5,
    genre: ["Crime", "Drama", "Thriller"],
    duration: "47m",
    maturity: "TV-MA",
    type: "series",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    director: "Vince Gilligan",
    seasons: 5
  },
  {
    id: 4,
    title: "Inception",
    backdrop: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
    poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
    overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a CEO's mind.",
    releaseDate: "2010",
    voteAverage: 8.8,
    genre: ["Action", "Sci-Fi", "Thriller"],
    duration: "2h 28m",
    maturity: "PG-13",
    type: "movie",
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
    director: "Christopher Nolan"
  },
  {
    id: 5,
    title: "The Crown",
    backdrop: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=1920&h=1080&fit=crop",
    poster: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=300&h=450&fit=crop",
    overview: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    releaseDate: "2016",
    voteAverage: 8.6,
    genre: ["Biography", "Drama", "History"],
    duration: "58m",
    maturity: "TV-MA",
    type: "series",
    cast: ["Claire Foy", "Olivia Colman", "Matt Smith"],
    director: "Peter Morgan",
    seasons: 6
  },
  {
    id: 6,
    title: "Pulp Fiction",
    backdrop: "https://images.unsplash.com/photo-1489599516861-42049c166115?w=1920&h=1080&fit=crop",
    poster: "https://images.unsplash.com/photo-1489599516861-42049c166115?w=300&h=450&fit=crop",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    releaseDate: "1994",
    voteAverage: 8.9,
    genre: ["Crime", "Drama"],
    duration: "2h 34m",
    maturity: "R",
    type: "movie",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    director: "Quentin Tarantino"
  }
];

export const categories = {
  trending: movies.slice(0, 6),
  topPicks: movies.slice(1, 6).concat(movies.slice(0, 1)),
  continueWatching: movies.slice(2, 6),
  newReleases: movies.slice(0, 4).concat(movies.slice(4, 6)),
  action: movies.filter(m => m.genre.includes('Action')),
  drama: movies.filter(m => m.genre.includes('Drama')),
  sciFi: movies.filter(m => m.genre.includes('Sci-Fi')),
};
