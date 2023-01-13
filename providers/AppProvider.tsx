import { ApolloProvider } from '@apollo/client';
import { theme } from 'assets/styles/theme';
import { client } from 'graphql/apolloClient';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['400', '500', '600'],
  style: ['normal'],
  variable: '--font-primary',
  subsets: ['latin'],
});

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <div className={montserrat.className}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </div>
  </ThemeProvider>
);
