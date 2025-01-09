import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const uri = 'http://localhost:8000/graphql/'; // Replace with your GraphQL server URL
const cache = new InMemoryCache();

export function provideApollo() {
  return new ApolloClient({
    uri,
    cache,
  });
}

export const apolloProvider = {
  provide: APOLLO_OPTIONS,
  useFactory: provideApollo,
};
