import React from 'react'
import styles from './SearchInput.module.scss'

interface ISearchInput {
  onChange:(event: React.ChangeEvent<HTMLInputElement>)=>void
  query: string
}

const SearchInput: React.FC<ISearchInput> = ({ onChange, query }) => {
  return (
    <div className={styles.container}>
      <div>
          <label className={styles.label} htmlFor="searchMoviesInput">Search movies</label>
        </div>
        <div>
        <div>
          <input
          className={styles.input}
          id="searchMoviesInput"
          name="searchMoviesInput"
          type="text"
          onChange={onChange}
          defaultValue={query} />
          </div>
        </div>
    </div>
  )
}

export default SearchInput
