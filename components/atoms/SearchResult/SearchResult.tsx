import React from 'react'
import styles from './SearchResult.module.scss'
import { Button } from '../Button'
import Link from 'next/link'

interface ISearchResult {
  id: number
  movieTitle: string;
  onMovieClick(movieTitle: string): void
}

const SearchResult: React.FC<ISearchResult> = ({
  id,
  movieTitle,
  onMovieClick
}) => {
  return (<div className={styles.searchResultContainer} data-testid="searchResult">
    <div className={styles.searchResultHighlight}>
      <div className={styles.name} data-title={movieTitle}>{movieTitle}</div>

      <Button id={movieTitle} onClick={() => onMovieClick(movieTitle)} data-title={'wiki'} text="Wiki search" style="small" type="button"/>
    </div>
    <Link href={`https://www.imdb.com/title/${id}`} title={movieTitle}>Imdb link</Link>
    </div>
  )
}

export default SearchResult
