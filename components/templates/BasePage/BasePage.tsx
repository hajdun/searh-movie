import React from 'react'
import Head from 'next/head'
import styles from './BasePage.module.scss'

interface IBasePage {
  children: React.ReactNode;
}

const BasePage: React.FC<IBasePage> = ({ children }) => {
  return (
    <div className={styles.page} >
      <Head>
        <title>Search movies</title>
        <meta name="description" content="Search movies" />
      </Head>
      <main className={styles.content}>{children}</main>
    </div>
  )
}

export default BasePage
