import React, { useEffect, useState } from 'react'
import { BasePage } from '../../templates/BasePage'
import styles from './IndexPage.module.css'
import { SearchResultList } from '../../organisms/SearchResultList'
import { getMovieInfoFromWiki } from '../../../api/api'
import { WikiList } from '../../organisms/WikiList'
import { SearchBar } from '../../molecules/SearchBar'
import { useRouter } from 'next/router'

const IndexPage: React.FC = () => {
  const router = useRouter()

  const [queryString, setQueryString] = useState('')
  const [wikiArticleUrls, setWikiArticleUrls] = useState<string[]>([])
  const [wikiSearchString, setWikiSearchString] = useState('')

  useEffect(() => {
    // TODO throttle change
    const { search } = router.query
    if (!search || typeof search !== 'string') return
    setQueryString(search)
  }, [router.query])

  const resetWikiValues = () => {
    setWikiArticleUrls([])
    setWikiSearchString('')
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setQueryString(value)
    router.push({
      pathname: '/',
      query: { search: value }
    })
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
          <SearchBar onChange={onChange} query={queryString} />
        </div>
        <div className={styles.container}>
          <div className={styles.results}>
            <SearchResultList query={queryString} onMovieClick={onMovieClick} />
          </div>
          <div className={styles.results}>
            <WikiList
              wikiSearchString={wikiSearchString}
              wikiArticleUrls={wikiArticleUrls}
            ></WikiList>
          </div>
        </div>
      </>
    </BasePage>
  )
}

export default IndexPage
