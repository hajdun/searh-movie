import React, { useState } from 'react'
import { SearchBar } from '../../atoms/SearchBar'
import { BasePage } from '../../templates/BasePage'
import styles from './IndexPage.module.css'
import { SearchResultList } from '../../organisms/SearchResultList'
import { getMovieInfoFromWiki } from '../../../api/api'
import { WikiList } from '../../organisms/WikiList'

const IndexPage: React.FC = () => {
  const [queryString, setQueryString] = useState('')
  const [value, setValue] = useState('')
  const [wikiArticleUrls, setWikiArticleUrls] = useState<string[]>([])
  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setQueryString(value)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const onMovieClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement
    const value = element.getAttribute('data-title')
    if (!value) return
    const moviesArray: string[] = await getMovieInfoFromWiki(value)
    if (!moviesArray || moviesArray.length === 0) setWikiArticleUrls([])
    setWikiArticleUrls(moviesArray)
  }

  return (
    <BasePage>
      <div className={styles.container}>
        <div>
        <form onSubmit={onSubmit}>
          <SearchBar onChange={onChange}/>
          <button type="submit" >Submit</button>
        </form>
        <SearchResultList query={queryString} onMovieClick={onMovieClick}/>
      </div>
      <div>
      <WikiList wikiArticleUrls={wikiArticleUrls}></WikiList>
      </div>
      </div>
    </BasePage>
  )
}

export default IndexPage
