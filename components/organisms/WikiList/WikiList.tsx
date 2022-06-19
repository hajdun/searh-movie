import React from 'react'
import { WikiApiResult } from '../../../types/WikiResult'
import { Header } from '../../atoms/Header'
import { WikiPage } from '../../atoms/WikiPage'
import styles from './WikiList.module.scss'

interface IWikiList {
  wikiArticles: WikiApiResult;
  wikiSearchString: string;
}

const WikiList: React.FC<IWikiList> = ({ wikiArticles, wikiSearchString }) => {
  if (!wikiArticles || !wikiSearchString) return <div />

  const pageIdsArray = Object.keys(wikiArticles)

  return (
    <div className={styles.container}>
      <Header>
        <>
          Wikipedia results for{' '}
          <span className={styles.query}>{wikiSearchString}</span>
        </>
      </Header>
      {pageIdsArray.length > 0 && (
        <div>
          {pageIdsArray.map((wikiPageId: string) => {
            return (
              <WikiPage
                key={wikiPageId}
                pageId={wikiPageId}
                details={wikiArticles[wikiPageId]}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default WikiList
