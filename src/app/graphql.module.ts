import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';

export function createApollo() {
  return new ApolloClient({
    uri: 'http://localhost:8000/graphql', // Replace with your GraphQL server's URL
    cache: new InMemoryCache(),
  });
}

export const apolloProvider = {
  provide: APOLLO_OPTIONS,
  useFactory: createApollo,
};
