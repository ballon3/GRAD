import React from 'react';
import { ApolloProvider } from ‘react-apollo’;

import ApolloClient from ‘apollo-client’;
import { InMemoryCache } from ‘apollo-cache-inmemory’;
import { ApolloLink } from ‘apollo-link’;
import { withClientState } from ‘apollo-link-state’;

const cache = new InMemoryCache();
const stateLink = withClientState({
  cache
});

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    stateLink,
  ]),
})

export default {
    apolloClientDemo: {
      __typename: ‘ApolloClientDemo’,
      currentPageName: ‘Apollo Demo’,
    }
  }
  
const WrappedApp = (
  <ApolloProvider client={client} >
    <App />
  </ApolloProvider>
);

ReactDOM.render(WrappedApp, document.getElementById(‘root’));