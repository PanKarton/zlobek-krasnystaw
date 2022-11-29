import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getEnvVariable } from 'helpers/getEnvVariable';

export const client = new ApolloClient({
  uri: getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL),
  cache: new InMemoryCache(),
});
