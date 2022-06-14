import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { WikiPage } from '../../atoms/WikiPage'
import styles from './WikiList.module.scss'

interface IWikiList {
  wikiArticleUrls: string[];
  wikiSearchString: string;
}

const WikiList: React.FC<IWikiList> = ({
  wikiArticleUrls,
  wikiSearchString
}) => {
  if (!wikiArticleUrls || wikiArticleUrls.length === 0) return <div />

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Wikipedia results for {' '}
        <span className={styles.query}>{wikiSearchString}</span>
      </div>
      <div>
        {wikiArticleUrls.map((url: string) => {
          return <WikiPage key={uuidv4()} url={url} />
        })}
      </div>
    </div>
  )
}

export default WikiList
