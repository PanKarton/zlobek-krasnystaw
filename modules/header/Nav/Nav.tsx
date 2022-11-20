import Image from 'next/image';
import { MainLogo } from 'modules/header/MainLogo/MainLogo';
import { DesktopNavList } from '../DesktopNavList/DesktopNavList';
import { MobileNavList } from '../MobileNavList/MobileNavList';
import { StyledNav } from './Nav.styles';
import { HamburgerButton } from '../HamburgerButton/HamburgerButton';
import { useHamburgerNav } from './useHamburgerNav';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FbButton } from 'Components/Atoms/FbButton/FbButton';
import { useFetchContactInfo } from 'hooks/useFetchContactInfo';

export const Nav = () => {
  const { isVisible, handleToggleMenu, handleCloseMenu } = useHamburgerNav();
  const { openDays, openHours, phoneNumber, email } = useFetchContactInfo();

  return (
    <StyledNav>
      <div className="main-logo-wrapper">
        <MainLogo />
      </div>
      <div className="mobile-icons-wrapper">
        <HamburgerButton onClick={handleToggleMenu} isActive={isVisible}></HamburgerButton>
      </div>
      <div className="ul-wrapper">
        <DesktopNavList />
      </div>
      <div className="nav-contact-info-wrapper">
        <div className="nav-contact-info left">
          <div className="flex-row">
            <AiFillClockCircle />
            <span>{`${openDays} ${openHours.openTime} - ${openHours.closeTime}`}</span>
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
          <Image src="/images/facebook-icon.svg" alt="Ikonka facebook" layout="fixed" width="36" height="36" />
        </FbButton>
      </div>
      <MobileNavList isVisible={isVisible} handleCloseMenu={handleCloseMenu} />
    </StyledNav>
  );
};
