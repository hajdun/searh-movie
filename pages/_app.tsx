import React from 'react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'dotenv/config'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
