import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BasePage } from '../../templates/BasePage'
import styles from './IndexPage.module.scss'
import { SearchResultList } from '../../organisms/SearchResultList'
import { getMovieInfoFromWiki } from '../../../api'
import { WikiList } from '../../organisms/WikiList'
import { SearchBar } from '../../molecules/SearchBar'
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

  const onMovieClick = async (movieTitle: string) => {
    if (!movieTitle) {
      resetWikiValues()
      return
    }
    const moviesObject: WikiApiResult = await getMovieInfoFromWiki(movieTitle)
    if (!moviesObject) {
      resetWikiValues()
      return
    }
    setWikiArticles(moviesObject)
    setWikiSearchString(movieTitle)
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
