import TextButton from 'Components/Atoms/TextButton/TextButton';
import ArchivesList from 'Components/Molecules/ArchivesList/ArchivesList';
import NewsList from 'Components/Organisms/NewsList/NewsList';
import { StyledSection } from './NewsListSection.styles';

const NewsListSection = () => (
  <StyledSection>
    <div className="flex-wrapper max-width-1440">
      <NewsList />
      <TextButton>Załaduj więcej...</TextButton>
      <ArchivesList />
    </div>
  </StyledSection>
);

export default NewsListSection;
