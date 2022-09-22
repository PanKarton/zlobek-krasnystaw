import MainLogo from 'Components/Atoms/MainLogo/MainLogo';
import DesktopNavList from '../DesktopNavList/DesktopNavList';
import MobileNavList from '../MobileNavList/MobileNavList';
import { StyledNav } from './Nav.styles';
import HamburgerButton from '../../Atoms/HamburgerButton/HamburgerButton';
import useHamburgerNav from '../../../hooks/useHamburgerNav';

const Nav = () => {
  const { isVisible, handleToggleMenu, handleCloseMenu } = useHamburgerNav();

  return (
    <StyledNav className="max-width">
      <div className="ul-wrapper">
        <div className="main-logo-wrapper">
          <MainLogo />
        </div>
        <DesktopNavList />
      </div>
      <div className="mobile-icons-wrapper">
        <HamburgerButton onClick={handleToggleMenu} isActive={isVisible}></HamburgerButton>
      </div>
      <MobileNavList isVisible={isVisible} handleCloseMenu={handleCloseMenu} />
    </StyledNav>
  );
};

export default Nav;
