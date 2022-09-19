import { useCallback, useState } from 'react';

const useHamburgerNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleMenu = useCallback(() => setIsVisible(prevState => !prevState), []);

  return {
    isVisible,
    handleToggleMenu,
  };
};

export default useHamburgerNav;
