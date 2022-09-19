import MainLogo from 'Components/Atoms/MainLogo/MainLogo';
import DesktopNavList from '../DesktopNavList/DesktopNavList';
import MobileNavList from '../MobileNavList/MobileNavList';
import { StyledNav } from './Nav.styles';
import { useState } from 'react';
import HamburgerButton from '../../Atoms/HamburgerButton/HamburgerButton';

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleMenu = () => setIsVisible(prevState => !prevState);

  return (
    <StyledNav className="max-width">
      <div className="mobile-icons-wrapper">
        <HamburgerButton onClick={handleToggleMenu} isActive={isVisible}></HamburgerButton>
      </div>
      <div className="ul-wrapper">
        <div className="main-logo-wrapper">
          <MainLogo />
        </div>
        <DesktopNavList />
      </div>
      <MobileNavList isVisible={isVisible} />
    </StyledNav>
  );
};

export default Nav;
