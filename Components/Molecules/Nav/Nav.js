import MainLogo from 'Components/Atoms/MainLogo/MainLogo';
import DesktopNavList from '../DesktopNavList/DesktopNavList';
import MobileNavList from '../MobileNavList/MobileNavList';
import { StyledNav } from './Nav.styles';
import HamburgerButton from '../../Atoms/HamburgerButton/HamburgerButton';
import CallMobileButton from '../../Atoms/CallMobileButton/CallMobileButton';
import useHamburgerNav from '../../../hooks/useHamburgerNav';

const Nav = () => {
  const { isVisible, handleToggleMenu } = useHamburgerNav();

  return (
    <StyledNav className="max-width">
      <div className="mobile-icons-wrapper">
        <CallMobileButton />
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
