import React from 'react'
import styles from './SearchBar.module.css'

interface ISearchBar {
  onChange:(event: React.ChangeEvent<HTMLInputElement>)=>void
}

const SearchBar: React.FC<ISearchBar> = ({ onChange }) => {
  return (<>
    <div className={styles.container}>
      <div className={styles.inputContainer}>
      SEARCH
      <input className={styles.input} type="text" name="search" id="search" onChange={onChange} />
      </div>
    </div>
    </>
  )
}

export default SearchBar
