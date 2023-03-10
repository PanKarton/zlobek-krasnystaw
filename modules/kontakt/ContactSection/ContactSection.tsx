import { ContactSectionListItem } from 'modules/kontakt/ContactSectionListItem/ContactSectionListItem';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { StyledArticle } from './ContactSection.styles';
import { useContactData } from 'providers/ContactDataProvider';
import contactIconHeadmaster from 'public/images/contact-icon-headmaster.png';
import contactIconPhone from 'public/images/contact-icon-phone.png';
import contactIconPin from 'public/images/contact-icon-pin.png';
import contactIconMail from 'public/images/contact-icon-mail.png';

type Props = {
  headmasterName: string;
};

export const ContactSection = ({ headmasterName }: Props) => {
  const {
    email,
    numerTelefonu: phoneNumber,
    adres: { nazwa: name, miasto: city, ulica: street },
  } = useContactData();

  return (
    <SectionWithStars>
        <StyledArticle>
          <ul>
            <li>
              <ContactSectionListItem src={contactIconHeadmaster.src} altText="ikonka człowieka">
                <p>Dyrektor: {headmasterName}</p>
              </ContactSectionListItem>
            </li>
            <li>
              <ContactSectionListItem src={contactIconPhone.src} altText="ikonka słuchawki telefonu na niebieskim kwiatku">
                <a href={`tel:${phoneNumber}`} aria-label={`Zadzwoń pod numer ${phoneNumber}`}>
                  <span className="call-button-hover">{`tel. ${phoneNumber}`}</span>
                </a>
              </ContactSectionListItem>
            </li>
            <li>
              <ContactSectionListItem src={contactIconPin.src} altText="ikonka pinezki na niebieskim kwiatku">
                <p>{name}</p>
                <p>{city}</p>
                <p>{street}</p>
              </ContactSectionListItem>
            </li>
            <li>
              <ContactSectionListItem src={contactIconMail.src} altText="ikonka koperty na niebieskim kwiatku">
                <p>{email}</p>
              </ContactSectionListItem>
            </li>
          </ul>
        </StyledArticle>
    </SectionWithStars>
  );
};
