import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { SearchResult } from '../SearchResult'

interface ISearchBar {}

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
  const { data, loading, error } = useQuery(createQuery('Titanic'))

  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      SEARCH
      <input type="text" />
      <ul>
        {data.searchMovies.map(({ name: movieTitle, genres, score }) => {
          return <SearchResult movieTitle={movieTitle} score={score} genres={genres}/>
        })}
      </ul>
    </div>
  )
}

export default SearchBar
