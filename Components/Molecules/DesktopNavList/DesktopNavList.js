import NavLink from 'Components/Atoms/NavLink/NavLink';
import { StyledNavSpan } from 'Components/Atoms/NavLink/NavLink.styles';
import { StyledList, StyledWrapper } from './DesktopNavList.styles';

const DesktopNavList = props => (
  <StyledWrapper>
    <StyledList>
      <li>
        <NavLink direction="/">O nas</NavLink>
      </li>
      <li>
        <NavLink direction="aktualnosc">Aktualności</NavLink>
      </li>
      <li className="gallery">
        <NavLink direction="galeria">Galeria</NavLink>
      </li>
      <li className="secondary-menu">
        <StyledNavSpan className="secondary-menu-trigger">Dla rodzica</StyledNavSpan>
        <ul>
          <li>
            <NavLink direction="rekrutacja">Rekrutacja</NavLink>
          </li>
          <li>
            <NavLink direction="dokumenty">Dokumenty</NavLink>
          </li>
          <li>
            <NavLink direction="wyprawka">Wyprawka</NavLink>
          </li>
          <li>
            <NavLink direction="oplaty">Opłaty</NavLink>
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

export default DesktopNavList;
