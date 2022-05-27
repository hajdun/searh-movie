import React from 'react'
import { useQuery, gql } from '@apollo/client'

interface ISearchBar {}

const createQuery = (term:string) => gql`
query SearchMovies {
  searchMovies(query: "${term}") {
    id
    name
    overview
    releaseDate
    cast {
      id
      person {
        name
      }
      role {
        ... on Cast {
          character
        }
      }
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
        {data.searchMovies.map(({ name, category, score }) => {
          return <>
          <div>{name}</div>
          <div>{category}</div>
          <div>{score}</div>
          </>
        })}
      </ul>
    </div>
  )
}

export default SearchBar
