import React, { useState } from 'react'
import { BasePage } from '../../templates/BasePage'
import styles from './IndexPage.module.css'
import { SearchResultList } from '../../organisms/SearchResultList'
import { getMovieInfoFromWiki } from '../../../api/api'
import { WikiList } from '../../organisms/WikiList'
import { SearchBar } from '../../molecules/SearchBar'

const IndexPage: React.FC = () => {
  const [queryString, setQueryString] = useState('')
  const [value, setValue] = useState('')
  const [wikiArticleUrls, setWikiArticleUrls] = useState<string[]>([])
  const [wikiSearchString, setWikiSearchString] = useState('')

  const resetWikiValues = () => {
    setWikiArticleUrls([])
    setWikiSearchString('')
  }

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
    if (!value) {
      resetWikiValues()
      return
    }
    const moviesArray: string[] = await getMovieInfoFromWiki(value)
    if (!moviesArray || moviesArray.length === 0) {
      resetWikiValues()
      return
    }
    setWikiArticleUrls(moviesArray)
    setWikiSearchString(value)
  }

  return (
    <BasePage>
      <>
        <div className={styles.searchBar}>
          <SearchBar onSubmit={onSubmit} onChange={onChange}/>
        </div>
      <div className={styles.container}>
        <div className={styles.results}>
        <SearchResultList query={queryString} onMovieClick={onMovieClick}/>
      </div>
      <div className={styles.results}>
      <WikiList wikiSearchString={wikiSearchString} wikiArticleUrls={wikiArticleUrls}></WikiList>
      </div>
      </div>
      </>
    </BasePage>
  )
}

export default IndexPage
