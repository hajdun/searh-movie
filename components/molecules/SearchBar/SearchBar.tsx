import React from 'react'
import { Button } from '../../atoms/Button'
import { SearchInput } from '../../atoms/SearchInput'
import styles from './SearchBar.module.scss'

interface ISearchBar {
  onSubmit: (event: React.SyntheticEvent) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<ISearchBar> = ({ onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.container}>
        <div className={styles.searchInput}>
          <SearchInput onChange={onChange} />
        </div>
        <div className={styles.button}>
          <Button type="submit" text="Submit" />
        </div>
      </div>
    </form>
  )
}

export default SearchBar
