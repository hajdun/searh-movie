type IGenre = {
  name: string;
};

export interface IMovie {
  id: number;
  name: string;
  score: string;
  genres: IGenre[];
  recommended?: unknown[];
}

export interface IMovieList {
  searchMovies: IMovie[];
}
