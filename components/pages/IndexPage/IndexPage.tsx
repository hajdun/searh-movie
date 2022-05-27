import React, { useState } from 'react'
import { SearchBar } from '../../atoms/SearchBar'
import { BasePage } from '../../templates/BasePage'
import styles from './IndexPage.module.css'
import { SearchResultList } from '../../organisms/SearchResultList'

const IndexPage: React.FC = () => {
  const [queryString, setQueryString] = useState('')
  const [value, setValue] = useState('')

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setQueryString(value)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <BasePage>
      <div className={styles.container}>
        <form onSubmit={onSubmit}>
          <SearchBar onChange={onChange}/>
          <button type="submit" >Submit</button>
        </form>
        <SearchResultList query={queryString}/>
      </div>
    </BasePage>
  )
}

export default IndexPage
