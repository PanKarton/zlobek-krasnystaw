import { BsCalendarDateFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { StyledSection, BIPWrapper } from './FooterContactInfo.styles';
import { BipButton } from 'modules/footer/BipButton/BipButton';
import { useContactData } from 'providers/ContactDataProvider';

export const FooterContactInfo = () => {
  const {
    godzinyPracy: { godzinaOtwarcia: openTime, godzinaZamkniecia: closeTime },
    numerTelefonu: phoneNumber,
    dniPracy: openDays,
    adres: { nazwa: name, miasto: city, ulica: street },
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
              <h3>
                Godziny <br /> otwarcia
              </h3>
              <p>{openDays}</p>
              <p>{`${openTime} - ${closeTime}`}</p>
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
              <p>{name}</p>
              <p>{city}</p>
              <p>{street}</p>
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
          <BIPWrapper>
            <h3>Bądź z nami</h3>
            <p>Informacje i aktualności </p>
            <div className="bip-button-wrapper">
              <BipButton />
            </div>
          </BIPWrapper>
        </li>
      </ul>
    </StyledSection>
  );
};
