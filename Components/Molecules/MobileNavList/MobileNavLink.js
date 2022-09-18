import NavLink from 'Components/Atoms/NavLink/NavLink';
import { StyledList, StyledWrapper } from './MobileNavList.styles';

const MobileNavLink = props => (
  <StyledWrapper>
    <StyledList>
      <li>
        <NavLink direction="/">O nas</NavLink>
      </li>
      <li>
        <NavLink direction="aktualnosc">Aktualności</NavLink>
      </li>
      <li>
        <NavLink direction="galeria">Galeria</NavLink>
      </li>
      <li className="secondary-menu">
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

export default MobileNavLink;
