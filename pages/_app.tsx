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
        <meta name="keywords" content="żłobek, miejski, krasnystaw, publiczny"></meta>
        <link rel="icon" type="image/svg+xml" href={faviconSvg.src} />
        <link rel="icon" type="image/png" href={faviconPng.src} />
        <meta name="google-site-verification" content="MetfkT1tSETY89stTsq8wjYl4Oa3UAuJ2pxyy5HVkE0" />
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
