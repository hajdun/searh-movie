import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { SearchResult } from '../../atoms/SearchResult'
import { IMovie } from '../../../types/Movie'
import { getMovie } from '../../../api'
import { Loading } from '../../atoms/Loading'
import { Header } from '../../atoms/Header'

interface ISearchResultList {
  query: string
  onMovieClick(movieTitle: string): void
}

const SearchResultList: React.FC<ISearchResultList> = ({ query = '', onMovieClick }) => {
  const [data, setData] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const loadMovies = async (query:string) => {
    try {
      setIsLoading(true)
      const response = await getMovie(query)

      setData(response)

      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  useEffect(() => {
    loadMovies(query)
  }, [query])

  if (isLoading) return <Loading/>
  if (error) return <pre>{error.message}</pre>
  if (!data) return <div>Please type a movie title and hit the Submit button.</div>

  return (
    <div>
      <Header>
        Movie search results
        </Header>
      <div>
        {data && data.results &&
        data.results.map(({ imdb_id: id, title }:IMovie) => {
          return (
            <SearchResult
              id={id}
              key={uuidv4()}
              movieTitle={title}
              onMovieClick={onMovieClick}
            />
          )
        })}
        </div>
    </div>
  )
}

export default SearchResultList
