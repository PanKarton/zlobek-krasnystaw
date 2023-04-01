import { useEffect, RefObject, useCallback } from 'react';

export const useToggleSecondaryMenuList = (ref: RefObject<HTMLUListElement>, handleCloseMenu: (_e: KeyboardEvent | MouseEvent) => void) => {
  const handleClickOutside = useCallback(
    (e: KeyboardEvent | MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) handleCloseMenu(e);
    },
    [ref, handleCloseMenu],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleCloseMenu);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleCloseMenu);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleCloseMenu, handleClickOutside]);

  return {};
};
