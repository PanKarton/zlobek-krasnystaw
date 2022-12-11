import { useCallback, useEffect, useState } from 'react';

export const useNav = () => {
  const [isSecondaryVisible, setIsVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleToggleMenu = useCallback(() => setIsVisible((prevState) => !prevState), []);
  const handleCloseMenu = useCallback(() => setIsVisible(false), []);

  const handleScroll = useCallback(() => {
    if (window.innerWidth >= 1440) return;
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setIsNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10 || isSecondaryVisible);

    // set state to new scroll position
    setPrevScrollPos(() => currentScrollPos);
  }, [prevScrollPos, isSecondaryVisible]);

  // new useEffect:
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
