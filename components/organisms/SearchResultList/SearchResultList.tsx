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

const SearchResultList: React.FC<ISearchResultList> = ({ query = '', onMovieClick }) => {
  const { data, loading, error } = useQuery<IMovieList>(createQuery(query), { errorPolicy: 'ignore' })

  if (loading) return <div>Loading...</div>
  if (error) return <pre>{error.message}</pre>
  if (!data) return <div>Please type a movie title and hit the Submit button.</div>

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Movie search results
      </div>
      <div>
        {data.searchMovies &&
        data.searchMovies.map(({ name: movieTitle, genres, score, id }) => {
          return (
            <SearchResult
              id={id}
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
