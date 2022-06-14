import React from 'react'
import { SearchInput } from '../../atoms/SearchInput'
import styles from './SearchBar.module.scss'

interface ISearchBar {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  query: string
}

const SearchBar: React.FC<ISearchBar> = ({ onChange, query }) => {
  return (
    <form>
      <div className={styles.container}>
        <div className={styles.searchInput}>
          <SearchInput onChange={onChange} query={query}/>
        </div>
      </div>
    </form>
  )
}

export default SearchBar
