import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';

const AppProvider = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default AppProvider;
