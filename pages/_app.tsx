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
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>
      <Loader />
      <AppProvider>
        <NextNProgress height={5} options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
