import React from 'react'
import styles from './WikiPage.module.scss'

interface IWikiPage {
  url: string;
}

const WikiPage: React.FC<IWikiPage> = ({
  url
}) => {
  return <div className={styles.container}>
    <a className={styles.link} href={url} target="_blank" rel="noreferrer">{url}</a>
    </div>
}

export default WikiPage
