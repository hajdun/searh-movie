export interface IMovie {
  imdb_id: string
  title:string
}

export interface IMovieList {
  searchMovies: IMovie[];
}
