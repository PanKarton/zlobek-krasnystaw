import CloseButton from 'Components/Atoms/CloseButton/CloseButton';
import FbButton from 'Components/Atoms/FbButton/FbButton';
import NavLink from 'Components/Atoms/NavLink/NavLink';
import CallMobileButton from '../../Atoms/CallMobileButton/CallMobileButton';
import { StyledList, StyledWrapper } from './MobileNavList.styles';

type Props = {
  isVisible: boolean;
  handleCloseMenu: () => void;
};

const MobileNavList = ({ isVisible, handleCloseMenu }: Props) => {
  return (
    <StyledWrapper className={isVisible ? 'visible' : ''}>
      <div className="close-button-wrapper">
        <CloseButton onClick={handleCloseMenu} />
      </div>
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
        <li>
          <CallMobileButton />
        </li>
        <li>
          <div className="fb-icon">
            <FbButton />
          </div>
        </li>
      </StyledList>
    </StyledWrapper>
  );
};

export default MobileNavList;