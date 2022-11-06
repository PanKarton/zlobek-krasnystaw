import { NavLink } from 'modules/header/NavLink/NavLink';
import { StyledNavSpan } from 'modules/header/NavLink/NavLink.styles';
import { StyledList, StyledWrapper } from './DesktopNavList.styles';

export const DesktopNavList = () => (
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
        <StyledNavSpan className="secondary-menu-trigger">Dla rodzica</StyledNavSpan>
        <ul>
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
              Nasz zespół
            </NavLink>
          </li>
        </ul>
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
