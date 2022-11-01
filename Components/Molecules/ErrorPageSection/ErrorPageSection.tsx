import { ErrorPageButton } from 'Components/Atoms/ErrorPageButton/ErrorPageButton';
import { StarsBackground } from 'Components/Atoms/StarsBackground/StarsBackground';
import { StyledArticle, StyledSection } from './ErrorPageSection.styles';

export const ErrorPageSection = () => (
  <StyledSection>
    <StarsBackground />
    <StyledArticle>
      <div className="flex-wrapper max-width-1440">
        <h2>404</h2>
        <div className="paragraphs-wrapper">
          <p>Uuups!!! Nie ma takiej strony :( </p>
          <p>Podana strona nie istnieje lub nie jest dostępna</p>
        </div>
        <ErrorPageButton />
      </div>
    </StyledArticle>
  </StyledSection>
);
