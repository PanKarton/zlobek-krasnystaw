import { TextButton } from 'modules/aktualnosci/TextButton/TextButton';
import { ArchivesList } from 'modules/aktualnosci/ArchivesList/ArchivesList';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { NewsList } from 'modules/aktualnosci/NewsList/NewsList';
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
