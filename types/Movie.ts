type IGenre = {
  name: string;
};

export interface IMovie {
  id: number;
  name: string;
  score: string;
  genres: IGenre[];
  overview: string;
  recommended?: unknown[];
}

export interface IMovieList {
  searchMovies: IMovie[];
}
