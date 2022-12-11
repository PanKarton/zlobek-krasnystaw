import NextNProgress from 'nextjs-progressbar';
import { Loader } from 'Components/Organisms/Loader/Loader';
import { AppProvider } from 'providers/AppProvider';
import Head from 'next/head';
import '../styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Żłobek Krasnystaw</title>
        <meta name="description" content="Żłobek miejski w Krasnymstawie" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <Loader />
      <AppProvider>
        <NextNProgress />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
