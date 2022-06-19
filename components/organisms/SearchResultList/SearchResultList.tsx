import React from 'react'
import { useQuery } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'

import { SearchResult } from '../../atoms/SearchResult'
import { IMovieList } from '../../../types/Movie'
import { createQuery } from '../../../api'
import { Loading } from '../../atoms/Loading'
import { Header } from '../../atoms/Header'

interface ISearchResultList {
  query: string
  onMovieClick(event: React.MouseEvent<HTMLDivElement>): void
}

const SearchResultList: React.FC<ISearchResultList> = ({ query = '', onMovieClick }) => {
  const { data, loading, error } = useQuery<IMovieList>(createQuery(query), { errorPolicy: 'ignore' })

  if (loading) return <Loading/>
  if (error) return <pre>{error.message}</pre>
  if (!data) return <div>Please type a movie title and hit the Submit button.</div>

  return (
    <div>
      <Header>
        Movie search results
        </Header>
      <div>
        {data.searchMovies &&
        data.searchMovies.map(({ name: movieTitle, genres, score, id, overview }) => {
          return (
            <SearchResult
              id={id}
              key={uuidv4()}
              movieTitle={movieTitle}
              score={score}
              genres={genres}
              overview={overview}
              onMovieClick={onMovieClick}
            />
          )
        })}
        </div>
    </div>
  )
}

export default SearchResultList
