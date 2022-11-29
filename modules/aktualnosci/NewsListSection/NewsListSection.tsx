import { TextButton } from 'modules/aktualnosci/TextButton/TextButton';
import { ArchivesList } from 'modules/aktualnosci/ArchivesList/ArchivesList';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { NewsList } from 'modules/aktualnosci/NewsList/NewsList';
import { Styledwrapper } from './NewsListSection.styles';
import { useNewPosts } from 'providers/NewsPostsProvider';

export const NewsListSection = () => {
  const { handleLoadMoreNews, isLoading, isLoadMoreButtonVisible, errorMessage } = useNewPosts();

  return (
    <SectionWithStars>
      <Styledwrapper>
        <NewsList />
        {isLoadMoreButtonVisible && (
          <TextButton handleClick={handleLoadMoreNews} isLoading={isLoading} text={errorMessage ? errorMessage : 'Załaduj więcej...'} />
        )}
        <ArchivesList />
      </Styledwrapper>
    </SectionWithStars>
  );
};
