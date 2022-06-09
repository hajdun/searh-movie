import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { WikiPage } from '../../atoms/WikiPage'
import styles from './WikiList.module.scss'

interface IWikiList {
  wikiArticleUrls: string[]
}

const WikiList: React.FC<IWikiList> = ({ wikiArticleUrls }) => {
  return (
    <div className={styles.container}>
      {wikiArticleUrls &&
        wikiArticleUrls.map((url:string) => {
          return (
              <WikiPage key={uuidv4()} url={url}/>
          )
        })}
    </div>
  )
}

export default WikiList
