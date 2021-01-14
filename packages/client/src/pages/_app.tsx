import * as React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const url = 'http://localhost:4000/'

const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache()
})

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
