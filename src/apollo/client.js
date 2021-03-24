import fetch from 'isomorphic-fetch'
import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'

const client = new ApolloClient({
	link: createHttpLink({
		uri: 'https://design-sentry.com/test/graphql',
		fetch,
	}),
	cache: new InMemoryCache()
})

export default client