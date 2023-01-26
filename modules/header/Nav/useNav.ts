import { useCallback, useEffect, useState } from 'react';

export const useNav = () => {
  const [isSecondaryVisible, setIsVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleToggleMenu = useCallback(() => setIsVisible((prevState) => !prevState), []);
  const handleCloseMenu = useCallback(() => setIsVisible(false), []);

  const handleScroll = useCallback(() => {
    if (window.innerWidth >= 1440) return;
    const currentScrollPos = window.pageYOffset;

    setIsNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10 || isSecondaryVisible);

    setPrevScrollPos(() => currentScrollPos);
  }, [prevScrollPos, isSecondaryVisible]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isNavVisible, handleScroll]);

  return {
    isSecondaryVisible,
    isNavVisible,
    handleToggleMenu,
    handleCloseMenu,
  };
};
