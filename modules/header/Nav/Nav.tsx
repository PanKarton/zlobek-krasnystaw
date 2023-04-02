import Image from 'next/image';
import { MainLogo } from 'modules/header/MainLogo/MainLogo';
import { DesktopNavList } from '../DesktopNavList/DesktopNavList';
import { MobileNavList } from '../MobileNavList/MobileNavList';
import { StyledNav } from './Nav.styles';
import { HamburgerButton } from '../HamburgerButton/HamburgerButton';
import { useNav } from './useNav';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FbButton } from 'Components/Atoms/FbButton/FbButton';
import facebookIcon from 'public/images/facebook-icon.svg';
import { useContactData } from 'providers/ContactDataProvider';
import { useRef } from 'react';

export const Nav = () => {
  const { isNavVisible, isSecondaryVisible, handleToggleMenu, handleCloseMenu } = useNav();
  const navRef = useRef<HTMLElement>(null);
  // Rename polish object keys to english in destructuring
  const {
    email,
    godzinyPracy: { godzinaOtwarcia: openTime, godzinaZamkniecia: closeTime },
    numerTelefonu: phoneNumber,
    dniOtwarte: openDays,
  } = useContactData();

  return (
    <StyledNav className={isNavVisible ? '' : 'hidden'} ref={navRef}>
      <div className="mobile-icons-wrapper">
        <HamburgerButton onClick={handleToggleMenu} isActive={isSecondaryVisible}></HamburgerButton>
      </div>
      <div className="ul-wrapper">
        <DesktopNavList />
      </div>
      <div className="nav-contact-info-wrapper">
        <div className="nav-contact-info left">
          <div className="flex-row">
            <AiFillClockCircle />
            <span>{`${openDays} ${openTime} - ${closeTime}`}</span>
          </div>
          <div>
            <a href={`tel:${phoneNumber}`} aria-label={`Zadzwoń pod numer ${phoneNumber}`}>
              <div className="flex-row">
                <BsFillTelephoneFill />
                <span className="call-button-hover">{`Zadzwoń: ${phoneNumber}`}</span>
              </div>
            </a>
          </div>
        </div>
        <div className="nav-contact-info right">
          <div className="flex-row">
            <FaEnvelope />
            <span>{`Napisz: ${email}`}</span>
          </div>
        </div>
      </div>
      <div className="fb-icon">
        <FbButton>
          <Image src={facebookIcon} alt="Ikonka facebook" width="36" height="36" />
        </FbButton>
      </div>
      <div className="main-logo-wrapper">
        <MainLogo />
      </div>
      {isSecondaryVisible && <MobileNavList navRef={navRef} handleCloseMenu={handleCloseMenu} />}
    </StyledNav>
  );
};
