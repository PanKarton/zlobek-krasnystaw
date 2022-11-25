import { BsCalendarDateFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { StyledSection } from './FooterContactInfo.styles';
import { BipButton } from 'modules/footer/BipButton/BipButton';
import { useContactData } from 'providers/ContactDataProvider';

export const FooterContactInfo = () => {
  const {
    contactInfo: {
      data: {
        attributes: { openDays, openHours, phoneNumber, adress },
      },
    },
  } = useContactData();

  return (
    <StyledSection className="nav-contact-details">
      <ul className="flex-list">
        <li>
          <div className="flex-wrapper">
            <div className="icon-wrapper icon-wrapper--pin">
              <FiMapPin />
            </div>
            <div className="text-wrapper">
              <h3>Godziny otwarcia</h3>
              <p>{openDays}</p>
              <p>{`${openHours.openTime} - ${openHours.closeTime}`}</p>
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
              <p>{adress.name}</p>
              <p>{adress.city}</p>
              <p>{adress.street}</p>
            </div>
          </div>
        </li>
        <li>
          <a href={`tel:${phoneNumber}`} aria-label={`Zadzwoń pod numer ${phoneNumber}`}>
            <div className="flex-wrapper">
              <div className="icon-wrapper">
                <BsFillTelephoneFill />
              </div>
              <div className="text-wrapper">
                <h3>Kontakt</h3>
                <p className="call-button-hover">{`tel. ${phoneNumber}`}</p>
              </div>
            </div>
          </a>
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
};
