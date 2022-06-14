import React from 'react'
import styles from './SearchResult.module.scss'
import { v4 as uuidv4 } from 'uuid'

type IGenre = {
  name: string;
};

interface ISearchResult {
  movieTitle: string;
  score: string;
  genres: IGenre[];
  onMovieClick(event: React.MouseEvent<HTMLDivElement>):void
}

const SearchResult: React.FC<ISearchResult> = ({
  movieTitle,
  score,
  genres = [],
  onMovieClick
}) => {
  const isLastGenre = (index: number) => {
    return index === genres.length - 1
  }

  return (<div className={styles.searchResultContainer}>
    <div className={styles.searchResultHighlight}>
      <div className={styles.name} onClick={onMovieClick} data-title={movieTitle}>{movieTitle}</div>
      <div className={styles.score}>{score}</div>
    </div>
    <div className={styles.genre}>
        {genres.map(({ name }, index) => (
          <span key={uuidv4()}>{name}{`${isLastGenre(index) ? '' : ', '}`}</span>
        ))}
      </div>
      </div>
  )
}

export default SearchResult
