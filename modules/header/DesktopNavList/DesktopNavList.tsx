import { NavLink } from 'modules/header/NavLink/NavLink';
import { StyledList, StyledWrapper } from './DesktopNavList.styles';
import { SecondaryDesktopMenu } from '../SecondaryDesktopMenu/SecondaryDesktopMenu';

export const DesktopNavList = () => {
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
          <SecondaryDesktopMenu />
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
