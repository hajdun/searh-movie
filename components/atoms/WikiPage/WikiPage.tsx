import React from 'react'
import { getWikiPageForPageId } from '../../../api/api'
import { IWikiResult } from '../../../types/WikiResult'
import styles from './WikiPage.module.scss'

interface IWikiPage {
  pageId: string;
  details: IWikiResult;
}

const WikiPage: React.FC<IWikiPage> = ({ pageId, details }) => {
  const href = getWikiPageForPageId(pageId)
  const title = details.title ? details.title : ''
  const detailsExtract = details.extract ? details.extract : ''
  if (!href) return <div />

  return (
    <div className={styles.container}>
      <div>
        <a href={href} target="_blank" rel="noreferrer" data-testid={title}>
          {title}
        </a>
      </div>
      <div> {detailsExtract}</div>
    </div>
  )
}

export default WikiPage
