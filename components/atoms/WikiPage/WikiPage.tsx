import React from 'react'
import styles from './WikiPage.module.scss'

interface IWikiPage {
  url: string;
}

const WikiPage: React.FC<IWikiPage> = ({
  url
}) => {
  return <div
  className={styles.container}
  dangerouslySetInnerHTML={{ __html: `<iframe src='${url}' width="800" height="700" />` }}
  />
}

export default WikiPage
