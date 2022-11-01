import { theme } from 'assets/styles/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => <ThemeProvider theme={theme}>{children} </ThemeProvider>;
