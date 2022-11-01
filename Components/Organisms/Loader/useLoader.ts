import { useEffect, useState } from 'react';

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setIsLoading(false);
    };
    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return { isLoading };
};
