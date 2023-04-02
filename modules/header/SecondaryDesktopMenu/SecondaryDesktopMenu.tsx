import { NavLink } from 'modules/header/NavLink/NavLink';
import { useRef } from 'react';
import { StyledList } from './SecondaryDesktopMenu.styles';
import { useCloseAlternatively } from 'hooks/useCloseAlternatively';
import { StyledNavSpan } from '../NavLink/NavLink.styles';
import { useState, useCallback } from 'react';

export const SecondaryDesktopMenu = () => {
  const secondaryListWrapper = useRef<HTMLDivElement>(null);
  const [isSecondaryMenuVisible, setIsSecondaryMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setIsSecondaryMenuVisible((prevValue) => !prevValue);
  };
  const handleCloseMenu = useCallback(() => {
    setIsSecondaryMenuVisible(false);
  }, []);

  useCloseAlternatively(secondaryListWrapper, handleCloseMenu);

  return (
    <div ref={secondaryListWrapper}>
      <StyledNavSpan className="secondary-menu-trigger" onClick={handleToggleMenu}>
        Dla rodzica
      </StyledNavSpan>
      {isSecondaryMenuVisible && (
        <StyledList >
          <li>
            <NavLink hasNarrowHitbox direction="rekrutacja">
              Rekrutacja
            </NavLink>
          </li>
          <li>
            <NavLink hasNarrowHitbox direction="wyprawka">
              Wyprawka
            </NavLink>
          </li>
          <li>
            <NavLink hasNarrowHitbox direction="oplaty">
              Opłaty
            </NavLink>
          </li>
          <li>
            <NavLink hasNarrowHitbox direction="plan-dnia">
              Plan dnia
            </NavLink>
          </li>
          <li>
            <NavLink hasNarrowHitbox direction="kadra">
              Nasza kadra
            </NavLink>
          </li>
        </StyledList>
      )}
    </div>
  );
};
