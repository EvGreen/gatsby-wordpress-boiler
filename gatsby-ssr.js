import React from 'react'
import Layout from './src/components/layout'

import client from './src/apollo/client'
import {ApolloProvider} from '@apollo/client'

export const wrapPageElement = ({ element, props }) => {
  return <ApolloProvider client={client}><Layout {...props}>{element}</Layout></ApolloProvider>
}