import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { SearchResult } from '../SearchResult'
import { v4 as uuidv4 } from 'uuid'

interface ISearchBar {}

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

const createQuery = (term:string) => gql`
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

const SearchBar: React.FC<ISearchBar> = () => {
  const { data, loading, error } = useQuery<ImovieList>(createQuery('Titanic'))

  if (loading) return <div>Loading...</div>
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      SEARCH
      <input type="text" />
        {data && data.searchMovies && data.searchMovies.map(({ name: movieTitle, genres, score }) => {
          return <SearchResult key={uuidv4()} movieTitle={movieTitle} score={score} genres={genres}/>
        })}
    </div>
  )
}

export default SearchBar
