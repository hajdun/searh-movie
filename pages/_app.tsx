import React from 'react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { APOLLO_URI } from '../api'

const client = new ApolloClient({
  uri: APOLLO_URI,
  cache: new InMemoryCache()
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
