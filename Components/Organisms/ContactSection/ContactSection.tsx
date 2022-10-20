import ContactForm from 'Components/Molecules/ContactForm/ContactForm';
import Image from 'next/image';
import { StyledArticle, StyledContactFormWrapper, StyledSection } from './ContactSection.styles';

const ContactSection = () => (
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
                <p>123 456 789 - dyrektor</p>
                <p>123 456 789 - sekretariat</p>
              </div>
            </div>
          </li>
          <li>
            <div className="li-flex-wrapper">
              <div className="icon-wrapper">
                <Image src="/images/contact-icon-pin.svg" alt="ikonka pinezki na niebieskim kwiatku" layout="fill" />
              </div>
              <div className="content">
                <p>Złobek Miejski 22-300 Krasnystaw</p>
                <p>ul. Poniatowskiego 48</p>
              </div>
            </div>
          </li>
          <li>
            <div className="li-flex-wrapper">
              <div className="icon-wrapper">
                <Image src="/images/contact-icon-mail.svg" alt="ikonka koperty na niebieskim kwiatku" layout="fill" />
              </div>
              <div className="content">
                <p>zlobek.krasnystaw@gmail.pl</p>
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
  </StyledSection>
);

export default ContactSection;
