import { useRouter } from 'next/router';
import AppProvider from 'providers/AppProvider';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleStartLoading = url => {
      url !== router.asPath && setIsLoading(true);
    };
    const handleStopLoading = url => {
      url === router.asPath && setIsLoading(false);
    };

    console.log(document.readyState);

    router.events.on('routeChangeStart', handleStartLoading);
    router.events.on('routeChangeStop', handleStopLoading);
    router.events.on('routeChangeError', handleStartLoading);

    return () => {
      router.events.off('routeChangeStart', handleStartLoading);
      router.events.off('routeChangeStop', handleStopLoading);
      router.events.off('routeChangeError', handleStartLoading);
    };
  }, [router.asPath, router.events]);

  return (
    isLoading && (
      <div id="loader">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
    )
  );
};

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
