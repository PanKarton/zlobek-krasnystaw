import MainLogo from 'Components/Atoms/MainLogo/MainLogo';
import DesktopNavList from '../DesktopNavList/DesktopNavList';
import MobileNavList from '../MobileNavList/MobileNavList';
import { StyledNav } from './Nav.styles';
import HamburgerButton from '../../Atoms/HamburgerButton/HamburgerButton';
import useHamburgerNav from '../../../hooks/useHamburgerNav';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import FbButton from 'Components/Atoms/FbButton/FbButton';

const Nav = () => {
  const { isVisible, handleToggleMenu, handleCloseMenu } = useHamburgerNav();

  return (
    <StyledNav className="max-width">
      <div className="ul-wrapper">
        <div className="main-logo-wrapper">
          <MainLogo priority />
        </div>
        <DesktopNavList />
      </div>
      <div className="nav-contact-info-wrapper">
        <div className="nav-contact-info left">
          <div>
            <AiFillClockCircle />
            <span>Poniedziałek - Piątek 6:00 - 16:00</span>
          </div>
          <div>
            <FaEnvelope />
            <span>Napisz: zlobek.krasnystaw@gmail.pl</span>
          </div>
        </div>
        <div className="nav-contact-info right">
          <div>
            <BsFillTelephoneFill />
            <span>Zadzwoń: 123 456 789 - dyrektor</span>
          </div>
          <span>123 456 789 - sektretariat</span>
          <div className="fb-icon">
            <FbButton />
          </div>
        </div>
      </div>
      <div className="mobile-icons-wrapper">
        <HamburgerButton onClick={handleToggleMenu} isActive={isVisible}></HamburgerButton>
      </div>
      <MobileNavList isVisible={isVisible} handleCloseMenu={handleCloseMenu} />
    </StyledNav>
  );
};

export default Nav;
