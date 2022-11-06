import { useCallback, useState } from 'react';

export const useHamburgerNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleMenu = useCallback(() => setIsVisible((prevState) => !prevState), []);
  const handleCloseMenu = useCallback(() => setIsVisible(false), []);

  return {
    isVisible,
    handleToggleMenu,
    handleCloseMenu,
  };
};
