import React from 'react'
import { Button } from '../../atoms/Button'
import { SearchInput } from '../../atoms/SearchInput'
import styles from './SearchBar.module.scss'

interface ISearchBar {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.SyntheticEvent) => void;
  query: string
}

const SearchBar: React.FC<ISearchBar> = ({ onChange, onSubmit, query }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.container}>
        <div className={styles.searchInput}>
          <SearchInput onChange={onChange} query={query}/>
        </div>
        <div className={styles.button}>
        <Button type="submit" text="Submit" />
        </div>
      </div>
    </form>
  )
}

export default SearchBar
