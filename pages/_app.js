import Loader from 'Components/Organisms/Loader/Loader';
import AppProvider from 'providers/AppProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loader />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
