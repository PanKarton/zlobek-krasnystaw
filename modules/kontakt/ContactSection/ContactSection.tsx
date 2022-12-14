import { ContactSectionListItem } from 'modules/kontakt/ContactSectionListItem/ContactSectionListItem';
import { ContactForm } from 'modules/kontakt/ContactForm/ContactForm';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { StyledArticle, StyledContactFormWrapper, StyledWrapper } from './ContactSection.styles';
import { useContactData } from 'providers/ContactDataProvider';

export const ContactSection = () => {
  const {
    email,
    numerTelefonu: phoneNumber,
    adres: { nazwa: name, miasto: city, ulica: street },
  } = useContactData();

  return (
    <SectionWithStars>
      <StyledWrapper>
        <StyledArticle>
          <ul>
            <li>
              <ContactSectionListItem src="/images/contact-icon-phone.svg" altText="ikonka słuchawki telefonu na niebieskim kwiatku">
                <a href={`tel:${phoneNumber}`} aria-label={`Zadzwoń pod numer ${phoneNumber}`}>
                  <span className="call-button-hover">{`tel. ${phoneNumber}`}</span>
                </a>
              </ContactSectionListItem>
            </li>
            <li>
              <ContactSectionListItem src="/images/contact-icon-pin.svg" altText="ikonka pinezki na niebieskim kwiatku">
                <p>{name}</p>
                <p>{city}</p>
                <p>{street}</p>
              </ContactSectionListItem>
            </li>
            <li>
              <ContactSectionListItem src="/images/contact-icon-mail.svg" altText="ikonka koperty na niebieskim kwiatku">
                {/* <p>{email}</p> */}
              </ContactSectionListItem>
            </li>
          </ul>
        </StyledArticle>
        <StyledContactFormWrapper>
          <div className="heading-wrapper">
            <h3>Formularz kontaktowy</h3>
            <p>Problem? Rozwiażmy go razem</p>
          </div>
          <ContactForm />
          <div className="information-clause-wrapper">
            <h3>Klauzula informacyjna</h3>
            <p>
              Administratorem jest <strong>{name} w Krasnymstawie</strong> ({street}, {city}, e-mail: {email})
            </p>
            <p>
              Dane kontaktowe inspektora ochrony danych: adres e-mail - <strong>inspektor@cbi24.pl</strong> Dane będą przetwarzane wyłącznie w celu
              udzielenia odpowiedzi na pytanie zawarte w formularzu kontaktowym. Podstawą przetwarzania danych jest zgoda osoby, której dane dotyczą,
              udzielona poprzez wyraźne działanie potwierdzające (tj. przesłanie wiadomości). Pani/Pana dane będą przetwarzane nie dłużej, niż jest to
              konieczne do udzielenia odpowiedzi, a po tym czasie mogą być przetwarzane do czasu przedawnienia ewentualnych roszczeń. Dane są
              ujawniane wyłącznie osobom upoważnionym przez administratora. Podanie danych jest dobrowolne, niemniej konieczne do tego, żeby
              odpowiedzieć na pytanie. Przysługuje Pani/Panu prawo do żądania dostępu do swoich danych osobowych, ich sprostowania, usunięcia lub
              ograniczenia przetwarzania, prawo do cofnięcia zgody, przenoszenia danych oraz wniesienia skargi do Prezesa Urzędu Ochrony Danych
              Osobowych.
            </p>
          </div>
        </StyledContactFormWrapper>
      </StyledWrapper>
    </SectionWithStars>
  );
};
