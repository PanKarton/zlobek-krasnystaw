import { ApolloProvider } from '@apollo/client';
import { theme } from 'assets/styles/theme';
import { client } from 'graphql/apolloClient';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>{children}</ApolloProvider>
  </ThemeProvider>
);
