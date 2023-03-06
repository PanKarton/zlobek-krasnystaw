import { CloseButton } from 'Components/Atoms/CloseButton/CloseButton';
import { FbButton } from 'Components/Atoms/FbButton/FbButton';
import { NavLink } from 'modules/header/NavLink/NavLink';
import Image from 'next/image';
import { CallMobileButton } from '../CallMobileButton/CallMobileButton';
import { StyledList, StyledWrapper } from './MobileNavList.styles';
import facebookIcon from 'public/images/facebook-icon.svg';

type Props = {
  isVisible: boolean;
  handleCloseMenu: () => void;
};

export const MobileNavList = ({ isVisible, handleCloseMenu }: Props) => {
  return (
    <StyledWrapper className={isVisible ? 'visible' : ''}>
      <div className="close-button-wrapper">
        <CloseButton onClick={handleCloseMenu} />
      </div>
      <StyledList>
        <li>
          <NavLink hasNarrowHitbox direction="">
            O nas
          </NavLink>
        </li>
        <li>
          <NavLink hasNarrowHitbox direction="aktualnosci">
            Aktualności
          </NavLink>
        </li>
        <li>
          <NavLink hasNarrowHitbox direction="galeria">
            Galeria
          </NavLink>
        </li>
        <li className="secondary-menu">
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
          <NavLink hasNarrowHitbox direction="rodo">
            Ochrona danych
          </NavLink>
        </li>
        <li>
          <NavLink hasNarrowHitbox direction="kontakt">
            Kontakt
          </NavLink>
        </li>
        <li>
          <CallMobileButton />
        </li>
        <li>
          <div className="fb-icon">
            <FbButton>
              <Image src={facebookIcon} alt="Ikonka facebook" width="36" height="36" />
            </FbButton>
          </div>
        </li>
      </StyledList>
    </StyledWrapper>
  );
};
