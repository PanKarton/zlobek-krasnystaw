import { BsCalendarDateFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { StyledSection } from './FooterContactInfo.styles';
import BipButton from 'Components/Atoms/BipButton/BipButton';

const FooterContactInfo = () => (
  <StyledSection className="nav-contact-details">
    <ul className="flex-list">
      <li>
        <div className="flex-wrapper">
          <div className="icon-wrapper icon-wrapper--pin">
            <FiMapPin />
          </div>
          <div className="text-wrapper">
            <h3>Godziny otwarcia</h3>
            <p>Poniedziałek - Piątek</p>
            <p>6:00 - 16:00</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex-wrapper">
          <div className="icon-wrapper">
            <BsCalendarDateFill />
          </div>
          <div className="text-wrapper">
            <h3>Adres</h3>
            <p>Żłobek Miejski</p>
            <p>22-300 Krasnystaw ul. Poniatowskiego 48</p>
          </div>
        </div>
      </li>
      <li>
        <div className="flex-wrapper">
          <div className="icon-wrapper">
            <BsFillTelephoneFill />
          </div>
          <div className="text-wrapper">
            <h3>Kontakt</h3>
            <p>Zadzwoń:</p>
            <p>tel. 82 576 31 82</p>
          </div>
        </div>
      </li>
      <li>
        <section className="nav-bip-wrapper">
          <h3>Bądź z nami</h3>
          <p>Informacje i aktualności </p>
          <div className="bip-button-wrapper">
            <BipButton />
          </div>
        </section>
      </li>
    </ul>
  </StyledSection>
);

export default FooterContactInfo;
