import React, { useEffect, useState } from 'react'
import { BasePage } from '../../templates/BasePage'
import styles from './IndexPage.module.css'
import { SearchResultList } from '../../organisms/SearchResultList'
import { getMovieInfoFromWiki } from '../../../api/api'
import { WikiList } from '../../organisms/WikiList'
import { SearchBar } from '../../molecules/SearchBar'
import { useRouter } from 'next/router'
import { WikiApiResult } from '../../../types/WikiResult'

const IndexPage: React.FC = () => {
  const router = useRouter()

  const [inputValue, setInputValue] = useState('')
  const [queryString, setQueryString] = useState('')
  const [wikiArticles, setWikiArticles] = useState<WikiApiResult>({})
  const [wikiSearchString, setWikiSearchString] = useState('')

  const resetWikiValues = () => {
    setWikiArticles({})
    setWikiSearchString('')
  }

  useEffect(() => {
    resetWikiValues()
    const { search } = router.query
    if (!search || typeof search !== 'string') return
    setQueryString(search)
  }, [router.query])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
  }

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setQueryString(inputValue)
    router.push({
      pathname: '/',
      query: { search: inputValue }
    })
  }

  const onMovieClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement
    const value = element.getAttribute('data-title')
    if (!value) {
      resetWikiValues()
      return
    }
    const moviesObject: WikiApiResult = await getMovieInfoFromWiki(value)
    if (!moviesObject) {
      resetWikiValues()
      return
    }
    setWikiArticles(moviesObject)
    setWikiSearchString(value)
  }

  return (
    <BasePage>
      <>
        <div className={styles.searchBar}>
          <SearchBar onChange={onChange} onSubmit={onSubmit} query={queryString} />
        </div>
        <div className={styles.container}>
          <div className={styles.results}>
            <SearchResultList query={queryString} onMovieClick={onMovieClick} />
          </div>
          <div className={styles.results}>
            <WikiList
              wikiSearchString={wikiSearchString}
              wikiArticles={wikiArticles}
            ></WikiList>
          </div>
        </div>
      </>
    </BasePage>
  )
}

export default IndexPage
