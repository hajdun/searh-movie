type IGenre = {
  name: string;
};

interface IMovie {
  name: string;
  score: string;
  genres: IGenre[];
}

export interface IMovieList {
  searchMovies: IMovie[];
}
