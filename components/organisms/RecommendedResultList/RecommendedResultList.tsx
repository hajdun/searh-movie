import React from 'react'
import { SearchResult } from '../../atoms/SearchResult'
import { v4 as uuidv4 } from 'uuid'
import styles from './RecommendedResultList.module.css'
import { useQuery } from '@apollo/client'
import { getMovie } from '../../../api/api'
import { IMovie } from '../../../types/Movie'

interface IRecommendedResultList {
  movieId: string
}

const RecommendedResultList: React.FC<IRecommendedResultList> = ({ movieId }) => {
  const { data, loading, error } = useQuery(getMovie(movieId?.toString()), { errorPolicy: 'ignore' })

  if (loading) return <div>Loading...</div>
  if (error) return <pre>{error.message}</pre>
  if (!data) return <div>There are no recommendations for this movie id</div>

  const recommendedData:IMovie[] = data.movie.recommended || []
  const title = data.movie.name
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
       Similar movies to {title}
      </div>
      <div>
        {recommendedData &&
      recommendedData.map(({ name: movieTitle, genres, score, id }) => {
        return (
            <SearchResult
              id={id}
              key={uuidv4()}
              movieTitle={movieTitle}
              score={score}
              genres={genres}
              onMovieClick={() => {}}
            />
        )
      })}
        </div>
    </div>
  )
}

export default RecommendedResultList
