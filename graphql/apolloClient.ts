import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { getEnvVariable } from 'helpers/getEnvVariable';
import fetch from 'cross-fetch';

const uri = `${getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL)}/graphql`;

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      NewsPostEntityResponseCollection: {
        merge: true,
      },
    },
  }),
  // HttpLink instead simple uri is to make tests work
  link: new HttpLink({ uri, fetch }),
});
