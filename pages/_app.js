import Loader from 'Components/Organisms/Loader/Loader';
import AppProvider from 'providers/AppProvider';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Żłobek Krasnystaw</title>
        <meta name="description" content="Żłobek miejski w Krasnymstawie" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <Loader />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
