import { NavLink } from 'modules/header/NavLink/NavLink';
import { StyledNavSpan } from 'modules/header/NavLink/NavLink.styles';
import { StyledList, StyledWrapper } from './DesktopNavList.styles';
import { useState, useCallback } from 'react';
import { SecondaryMenuList } from './../SecondaryMenuList/SecondaryMenuList';

export const DesktopNavList = () => {
  const [isSecondaryMenuVisible, setIsSecondaryMenuVisible] = useState(false);

  const handleOpenMenu = () => {
    setIsSecondaryMenuVisible(true);
  };
  const handleCloseMenu = useCallback(() => {
    setIsSecondaryMenuVisible(false);
  }, []);

  return (
    <StyledWrapper>
      <StyledList className="left">
        <li>
          <NavLink direction="">O nas</NavLink>
        </li>
        <li>
          <NavLink direction="aktualnosci">Aktualności</NavLink>
        </li>
        <li>
          <NavLink direction="galeria">Galeria</NavLink>
        </li>
      </StyledList>
      <StyledList className="right">
        <li className="secondary-menu">
          <StyledNavSpan className="secondary-menu-trigger" onClick={handleOpenMenu}>
            Dla rodzica
          </StyledNavSpan>
          {isSecondaryMenuVisible && <SecondaryMenuList handleCloseMenu={handleCloseMenu} />}
        </li>
        <li>
          <NavLink direction="rodo">Ochrona danych</NavLink>
        </li>
        <li>
          <NavLink direction="kontakt">Kontakt</NavLink>
        </li>
      </StyledList>
    </StyledWrapper>
  );
};
