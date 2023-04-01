import { useCallback, RefObject, useEffect } from 'react';

export const useToggleMobileNavList = (ref: RefObject<HTMLUListElement>, handleCloseMenu: () => void) => {
  const handleCloseMenuAlternativly = useCallback(
    (e: KeyboardEvent | MouseEvent) => {
      if (e instanceof KeyboardEvent) {
        if (e.key === 'Escape') handleCloseMenu();
      } else if (e instanceof MouseEvent) {
        handleCloseMenu();
      }
    },
    [handleCloseMenu],
  );

  const handleClickOutside = useCallback(
    (e: KeyboardEvent | MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) handleCloseMenuAlternativly(e);
    },
    [ref, handleCloseMenuAlternativly],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleCloseMenuAlternativly);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleCloseMenuAlternativly);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleCloseMenuAlternativly, handleClickOutside]);

  return {};
};
