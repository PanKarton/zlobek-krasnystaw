import { FbButton } from 'Components/Atoms/FbButton/FbButton';
import { Map } from 'modules/footer/Map/Map';
import { FooterContactInfo } from 'modules/footer/FooterContactInfo/FooterContactInfo';
import Image from 'next/image';
import { StyledFooter } from './Footer.styles';
import facebookIcon from 'public/images/facebook-icon.svg';
import { Founds } from '../Founds/Founds';

export const Footer = () => (
  <StyledFooter>
    <div className="grid-wrapper max-width-1440">
      <FooterContactInfo />
      <div className="map-wrapper map-wrapper--parent">
        <Map />
      </div>
      <Founds />
    </div>
    <section className="nav-copyrights-wrapper">
      <div className="max-width-1440">
        <div className="flex-wrapper">
          <FbButton>
            <div className="nav-facebook-wrapper">
              <Image src={facebookIcon} alt="Ikonka facebook" width="36" height="36" />
              <h2>Odwiedź nas na Facebooku :)</h2>
            </div>
          </FbButton>
          <p className="nav-copyrights">
            Copyright 2021 &copy; | <span className="text-pink">Żłobek Miejski w Krasnymstawie</span> | Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </section>
  </StyledFooter>
);
