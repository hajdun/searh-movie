import React, { useState } from 'react'
import { SearchBar } from '../../atoms/SearchBar'
import { BasePage } from '../../templates/BasePage'
import styles from './IndexPage.module.css'
import { SearchResultList } from '../../organisms/SearchResultList'

const wikiSearchMovie = (movieTitle:string) => {
  const WIKI_URL = 'https://en.wikipedia.org/w/api.php'
  const queryString = encodeURI(movieTitle)
  return `${WIKI_URL}?action=opensearch&search=${queryString}&limit=10&namespace=0&format=json`
}

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

  const onMovieClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // TODO: show wiki
    const element = event.target as HTMLDivElement
    const value = element.getAttribute('data-title')
    console.log(value)
    if (value) { console.log(wikiSearchMovie(value)) }
  }

  return (
    <BasePage>
      <div className={styles.container}>
        <form onSubmit={onSubmit}>
          <SearchBar onChange={onChange}/>
          <button type="submit" >Submit</button>
        </form>
        <SearchResultList query={queryString} onMovieClick={onMovieClick}/>
      </div>
    </BasePage>
  )
}

export default IndexPage
