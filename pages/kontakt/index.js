import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import Image from 'next/image';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  border: 1px solid red;
  .flex-wrapper {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledArticle = styled.article`
  border: 1px solid black;
  max-width: 463px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      .li-flex-wrapper {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        .icon-wrapper {
          position: relative;
          width: 4.5rem;
          aspect-ratio: 1;
        }
        .content {
          p {
            display: block;
            font-family: var(--font-primary);
            color: ${({ theme }) => theme.color.textDarkGray};
            font-size: 1.25rem;
          }
          p + p {
            margin-top: 0.25rem;
          }
        }
      }
    }
  }
`;

const Contact = () => (
  <SecondaryTemplate heading="Skontaktuj się z nami">
    <StyledSection>
      <div className="flex-wrapper max-width-1440">
        <StyledArticle>
          <ul>
            <li>
              <div className="li-flex-wrapper">
                <div className="icon-wrapper">
                  <Image
                    src="/images/contact-icon-phone.svg"
                    alt="ikonka słuchawki telefonu na niebieskim kwiatku"
                    layout="fill"
                  />
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
                  <Image
                    src="/images/contact-icon-pin.svg"
                    alt="ikonka pinezki na niebieskim kwiatku"
                    layout="fill"
                  />
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
                  <Image
                    src="/images/contact-icon-mail.svg"
                    alt="ikonka koperty na niebieskim kwiatku"
                    layout="fill"
                  />
                </div>
                <div className="content">
                  <p>zlobek.krasnystaw@gmail.pl</p>
                </div>
              </div>
            </li>
          </ul>
        </StyledArticle>
        <div className="contact-form"></div>
      </div>
    </StyledSection>
  </SecondaryTemplate>
);

export default Contact;
