import { StarsBackground } from 'Components/Atoms/StarsBackground/StarsBackground';
import { ContactForm } from 'Components/Molecules/ContactForm/ContactForm';
import { useFetchContactInfo } from 'hooks/useFetchContactInfo';
import Image from 'next/image';
import { StyledArticle, StyledContactFormWrapper, StyledSection } from './ContactSection.styles';

export const ContactSection = () => {
  const { email, adress, phoneNumber } = useFetchContactInfo();

  return (
    <StyledSection>
      <div className="flex-wrapper max-width-1440">
        <StyledArticle>
          <ul>
            <li>
              <div className="li-flex-wrapper">
                <div className="icon-wrapper">
                  <Image src="/images/contact-icon-phone.svg" alt="ikonka słuchawki telefonu na niebieskim kwiatku" layout="fill" />
                </div>
                <div className="content">
                  <p>{`tel. ${phoneNumber}`}</p>
                </div>
              </div>
            </li>
            <li>
              <div className="li-flex-wrapper">
                <div className="icon-wrapper">
                  <Image src="/images/contact-icon-pin.svg" alt="ikonka pinezki na niebieskim kwiatku" layout="fill" />
                </div>
                <div className="content">
                  <p>{adress.name}</p>
                  <p>{adress.city}</p>
                  <p>{adress.street}</p>
                </div>
              </div>
            </li>
            <li>
              <div className="li-flex-wrapper">
                <div className="icon-wrapper">
                  <Image src="/images/contact-icon-mail.svg" alt="ikonka koperty na niebieskim kwiatku" layout="fill" />
                </div>
                <div className="content">
                  <p>{email}</p>
                </div>
              </div>
            </li>
          </ul>
        </StyledArticle>
        <StyledContactFormWrapper>
          <div className="heading-wrapper">
            <h3>Formularz kontaktowy</h3>
            <p>Problem? Rozwiażmy go razem</p>
          </div>
          <ContactForm />
        </StyledContactFormWrapper>
      </div>
      <StarsBackground />
    </StyledSection>
  );
};
