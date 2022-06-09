import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { SearchResult } from '../../atoms/SearchResult'
import { v4 as uuidv4 } from 'uuid'
import styles from './SearchResultList.module.css'

interface ISearchResultList {
  query: string
  onMovieClick(event: React.MouseEvent<HTMLDivElement>): void
}

type IGenre = {
  name: string;
};

interface IMovie {
  name: string;
  score: string;
  genres: IGenre[];
}

interface ImovieList {
  searchMovies: IMovie[];
}

const createQuery = (term: string) => gql`
query SearchMovies {
  searchMovies(query: "${term}") {
    id
    name
    overview
    releaseDate
    score
    genres {
      name
    }
  }
}
`

const SearchResultList: React.FC<ISearchResultList> = ({ query, onMovieClick }) => {
  if (!query) return <div>Please submit a query to continue</div>

  const { data, loading, error } = useQuery<ImovieList>(createQuery(query))
  if (loading) return <div>Loading...</div>
  if (error) return <pre>{error.message}</pre>

  return (
    <div className={styles.container}>
      {data &&
        data.searchMovies &&
        data.searchMovies.map(({ name: movieTitle, genres, score }) => {
          return (
            <SearchResult
              key={uuidv4()}
              movieTitle={movieTitle}
              score={score}
              genres={genres}
              onMovieClick={onMovieClick}
            />
          )
        })}
    </div>
  )
}

export default SearchResultList
