import React from 'react'
import styles from './SearchInput.module.scss'

interface ISearchInput {
  onChange:(event: React.ChangeEvent<HTMLInputElement>)=>void
}

const SearchInput: React.FC<ISearchInput> = ({ onChange }) => {
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
          onChange={onChange} />
          </div>
        </div>
    </div>
  )
}

export default SearchInput
