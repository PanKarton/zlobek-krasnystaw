import FbButton from 'Components/Atoms/FbButton/FbButton';
import Map from 'Components/Atoms/Map/Map';
import FooterContactInfo from 'Components/Molecules/FooterContactInfo/FooterContactInfo';
import { StyledFooter } from './Footer.styles';

const Footer = props => (
  <StyledFooter>
    <div className="flex-wrapper max-width">
      <div className="footer-left">
        <FooterContactInfo />
      </div>
      <div className="footer-right">
        <Map />
      </div>
    </div>
    <section className="nav-copyrights-wrapper ">
      <div className="max-width">
        <div className="flex-wrapper">
          <div className="nav-facebook-wrapper">
            <FbButton />
            <h2>Odwiedź nas na Facebooku :)</h2>
          </div>
          <p className="nav-copyrights">
            Copyright 2021 &copy; |{' '}
            <span className="text-pink">Żłobek Miejski w Krasnymstawie</span> | Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </section>
  </StyledFooter>
);

export default Footer;
