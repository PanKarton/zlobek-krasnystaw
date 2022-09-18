import MainLogo from 'Components/Atoms/MainLogo/MainLogo';
import { useRouter } from 'next/router';
import DesktopNavList from '../DesktopNavList/DesktopNavList';
import MobileNavLink from '../MobileNavList/MobileNavLink';
import { StyledNav } from './Nav.styles';

const Nav = () => {
  const router = useRouter();

  return (
    <StyledNav className="max-width">
      {/* <div className="mobile-icons-wrapper"></div> */}
      <div className="ul-wrapper">
        <div className="main-logo-wrapper">
          <MainLogo />
        </div>
        <DesktopNavList />
      </div>
      <MobileNavLink />
    </StyledNav>
  );
};

export default Nav;
