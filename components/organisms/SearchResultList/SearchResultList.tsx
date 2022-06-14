import React from 'react'
import { useQuery } from '@apollo/client'
import { SearchResult } from '../../atoms/SearchResult'
import { v4 as uuidv4 } from 'uuid'
import styles from './SearchResultList.module.css'
import { IMovieList } from '../../../types/Movie'
import { createQuery } from '../../../api/api'

interface ISearchResultList {
  query: string
  onMovieClick(event: React.MouseEvent<HTMLDivElement>): void
}

const SearchResultList: React.FC<ISearchResultList> = ({ query, onMovieClick }) => {
  if (!query) return <div>Please submit a query to continue</div>

  const { data, loading, error } = useQuery<IMovieList>(createQuery(query))

  if (loading) return <div>Loading...</div>
  if (error) return <pre>{error.message}</pre>
  if (!data) return <div>There are no results.</div>

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Movie search results
      </div>
      <div>
        {data.searchMovies &&
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
    </div>
  )
}

export default SearchResultList
