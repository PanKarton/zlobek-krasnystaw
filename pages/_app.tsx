import NextNProgress from 'nextjs-progressbar';
import { Loader } from 'Components/Molecules/Loader/Loader';
import { AppProvider } from 'providers/AppProvider';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import faviconSvg from 'public/images/favicon.png';
import faviconPng from 'public/images/favicon.png';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Żłobek miejski w Krasnymstawie" />
        <link rel="icon" type="image/svg+xml" href={faviconSvg.src} />
        <link rel="icon" type="image/png" href={faviconPng.src} />
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
