import { TextButton } from 'Components/Atoms/TextButton/TextButton';
import { ArchivesList } from 'Components/Molecules/ArchivesList/ArchivesList';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { NewsList } from 'Components/Organisms/NewsList/NewsList';
import { Styledwrapper } from './NewsListSection.styles';

export const NewsListSection = () => (
  <SectionWithStars>
    <Styledwrapper>
      <NewsList />
      <TextButton>Załaduj więcej...</TextButton>
      <ArchivesList />
    </Styledwrapper>
  </SectionWithStars>
);
