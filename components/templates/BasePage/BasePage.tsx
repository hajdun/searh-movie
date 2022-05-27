import React from 'react'
import Head from 'next/head'

interface IBasePage {
  children: React.ReactNode;
}

const BasePage: React.FC<IBasePage> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Search movies</title>
        <meta name="description" content="Search movies" />
      </Head>
      <main>{children}</main>
    </div>
  )
}

export default BasePage
