import React, { useState } from 'react'
import { SearchInput } from '../../atoms/SearchInput'
import { BasePage } from '../../templates/BasePage'
import styles from './IndexPage.module.css'
import { SearchResultList } from '../../organisms/SearchResultList'
import { getMovieInfoFromWiki } from '../../../api/api'
import { WikiList } from '../../organisms/WikiList'
import { Button } from '../../atoms/Button'
import { SearchBar } from '../../molecules/SearchBar'

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
      <>
        <div>
          <SearchBar onSubmit={onSubmit} onChange={onChange}/>
        </div>
      <div className={styles.container}>
        <div className={styles.results}>
        <SearchResultList query={queryString} onMovieClick={onMovieClick}/>
      </div>
      <div className={styles.results}>
      <WikiList wikiArticleUrls={wikiArticleUrls}></WikiList>
      </div>
      </div>
      </>
    </BasePage>
  )
}

export default IndexPage
