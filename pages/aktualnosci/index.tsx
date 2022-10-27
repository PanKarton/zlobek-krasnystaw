import TextButton from 'Components/Atoms/TextButton/TextButton';
import ArchivesList from 'Components/Molecules/ArchivesList/ArchivesList';
import NewsList from 'Components/Organisms/NewsList/NewsList';
import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  margin-top: 4rem;
  padding-bottom: 2rem;
  & > .flex-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    & > button {
      margin-top: 1rem;
    }
    @media screen and (min-width: 1550px) {
      flex-direction: row;
      padding-bottom: 8rem;
      & > button {
        position: absolute;
        bottom: 3rem;
        left: 50%;
        translate: 0 -50%;
      }
    }
  }
`;

const News = () => (
  <SecondaryTemplate heading="Nasze nowości">
    <StyledSection>
      <div className="flex-wrapper max-width-1440">
        <NewsList />
        <TextButton>Załaduj więcej...</TextButton>
        <ArchivesList />
      </div>
    </StyledSection>
  </SecondaryTemplate>
);

export default News;
