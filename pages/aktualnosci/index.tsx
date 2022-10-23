import ArchivesList from 'Components/Molecules/ArchivesList/ArchivesList';
import NewsList from 'Components/Organisms/NewsList/NewsList';
import SecondaryTemplate from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding-bottom: 8rem;
  & > .flex-wrapper {
    display: flex;
  }
`;

const News = () => (
  <SecondaryTemplate heading="Nasze nowości">
    <StyledSection>
      <div className="flex-wrapper max-width-1440">
        <NewsList />
        <ArchivesList />
      </div>
    </StyledSection>
  </SecondaryTemplate>
);

export default News;
