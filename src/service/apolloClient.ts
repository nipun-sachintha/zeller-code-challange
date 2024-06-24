import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloLink } from 'apollo-link';
import { createAuthLink, AuthOptions } from 'aws-appsync-auth-link';
import { createHttpLink } from 'apollo-link-http';

const url = process.env.REACT_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT || '';
const region = process.env.REACT_APP_AWS_APPSYNC_REGION || '';
const auth: AuthOptions = {
  type: process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATION_TYPE as "API_KEY" || "API_KEY",
  apiKey: process.env.REACT_APP_AWS_APPSYNC_API_KEY || ''
};

const link = ApolloLink.from([
   createAuthLink({ url, region, auth }), 
   createHttpLink({ uri: url }),
]);

const client = new ApolloClient({
  link: (link as any),
  cache: new InMemoryCache()
});

export default client;
