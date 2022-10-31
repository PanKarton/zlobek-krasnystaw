import StarsBackground from 'Components/Atoms/StarsBackground/StarsBackground';
import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import Link from 'next/link';
import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  margin-top: 3rem;
  padding-block: 4rem 7rem;
`;

const StyledArticle = styled.article`
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: ${({ theme }) => theme.color.pageErrorTheme};
    font-family: var(--font-primary);
    h2 {
      font-size: 15.625rem;
      line-height: 12rem;
      font-weight: 500;
    }
    .paragraphs-wrapper {
      text-align: center;
      p {
        &:first-child {
          font-size: 2rem;
        }
        &:nth-child(2) {
          margin-top: 0.25rem;
          font-size: 1.375rem;
        }
      }
    }
    a {
      display: block;
      border: 2px solid ${({ theme }) => theme.color.pageErrorTheme};
      padding: 0.675rem 3rem;
      border-radius: 9999px;
      color: inherit;
      font-weight: 500;
      transition: all 0.125s ease-in-out;
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.color.pageErrorTheme};
        color: ${({ theme }) => theme.color.white};
      }
    }
  }
`;

const ErrorPage = () => (
  <SecondaryTemplate>
    <StyledSection>
      <StarsBackground />
      <StyledArticle>
        <div className="flex-wrapper max-width-1440">
          <h2>404</h2>
          <div className="paragraphs-wrapper">
            <p>Uuups!!! Nie ma takiej strony :( </p>
            <p>Podana strona nie istnieje lub nie jest dostępna</p>
          </div>
          <Link href="/" passHref>
            <a href="replace">
              <span>Strona główna</span>
            </a>
          </Link>
        </div>
      </StyledArticle>
    </StyledSection>
  </SecondaryTemplate>
);

export default ErrorPage;
