import React from 'react'
import styles from './SearchResult.module.css'

type IGenre = {
  name: string;
};

interface ISearchResult {
  movieTitle: string;
  score: string;
  genres: IGenre[];
}

const SearchResult: React.FC<ISearchResult> = ({
  movieTitle,
  score,
  genres
}) => {
  const isLastGenre = (index) => {
    return index === genres.length - 1
  }

  return (<div className={styles.searchResultContainer}>
    <div className={styles.searchResultHighlight}>
      <div className={styles.name}>{movieTitle}</div>
      <div className={styles.score}>{score}</div>
    </div>
    <div className={styles.genre}>
        {genres.map(({ name }, index) => (
          <span>{name}{`${isLastGenre(index) ? '' : ', '}`}</span>
        ))}
      </div>
      </div>
  )
}

export default SearchResult
