import BipButton from 'Components/Atoms/BipButton/BipButton';
import FbButton from 'Components/Atoms/FbButton/FbButton';
import Map from 'Components/Atoms/Map/Map';
import MainLogo from 'Components/Atoms/MainLogo/MainLogo';
import NavContactInfo from 'Components/Molecules/NavContactInfo/NavContactInfo';
import { StyledFooter } from './Footer.styles';

const Footer = props => (
  <StyledFooter>
    <div className="flex-wrapper max-width">
      <div className="footer-left">
        <div className="nav-logo-wrapper">
          <MainLogo />
        </div>
        <NavContactInfo />
        <section className="nav-bip-wrapper">
          <h2>Bądź z nami</h2>
          <p>Informacje i aktualności </p>
          <BipButton />
        </section>
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
        <p className="nav-author-signature">
          Wykonane przez{' '}
          <a
            href="https://github.com/PanKarton"
            target="_blank"
            rel="noreferrer"
            aria-label="Przycisk przekierowujący do profilu github autora strony"
          >
            Arkadiusz Piersiak.
          </a>
        </p>
      </div>
    </section>
  </StyledFooter>
);

export default Footer;
