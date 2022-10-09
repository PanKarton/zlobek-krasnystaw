import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import Image from 'next/image';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  padding-block: 6rem;
  .flex-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 10rem;
  }
`;

const StyledArticle = styled.article`
  max-width: 463px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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

const StyledContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  .heading-wrapper {
    color: ${({ theme }) => theme.color.textDarkGray};
    font-family: var(--font-primary);
    h3 {
      font-size: 2.25rem;
      font-weight: 500;
      line-height: 1;
    }
    p {
      font-size: 1rem;
      font-weight: 500;
      margin-left: 2px;
      margin-top: 0.25rem;
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 3.25rem;
  border-radius: 0;
  border: 1px solid black;
  padding: 1rem;
  color: ${({ theme }) => theme.color.textDarkGray};
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;

  &::placeholder {
    color: ${({ theme }) => theme.color.textDarkGray};
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 500;
  }
  &:focus {
    outline: 1px solid #aaa;
  }
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 14rem;
  border-radius: 0;
  border: 1px solid black;
  padding: 1rem;
  color: ${({ theme }) => theme.color.textDarkGray};
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.textDarkGray};
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 500;
  }
  &:focus {
    outline: 1px solid #aaa;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.textDarkGray};
  font-size: 1.25rem;
  font-family: var(--font-primary);
  font-weight: 500;
  border: none;
  padding-block: 1rem;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.blueLightHover};
    color: ${({ theme }) => theme.color.textDarkGrayHover};
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
        <StyledContactFormWrapper>
          <div className="heading-wrapper">
            <h3>Formularz kontaktowy</h3>
            <p>Problem? Rozwiażmy go razem</p>
          </div>
          <StyledForm>
            <StyledInput name="email" id="email" type="text" placeholder="Twój email" />
            <StyledTextArea
              name="message"
              id="message"
              type="text"
              placeholder="W czym możemy pomóc?"
            />
            <StyledButton type="submit">Wyślij</StyledButton>
          </StyledForm>
        </StyledContactFormWrapper>
      </div>
    </StyledSection>
  </SecondaryTemplate>
);

export default Contact;
