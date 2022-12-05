import { TextButton } from 'modules/aktualnosci/TextButton/TextButton';
import { ArchivesList } from 'modules/aktualnosci/ArchivesList/ArchivesList';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { NewsList } from 'modules/aktualnosci/NewsList/NewsList';
import { Styledwrapper } from './NewsListSection.styles';
import { useNewsPosts } from 'providers/NewsPostsProvider';

export const NewsListSection = () => {
  const { handleLoadMoreNewsPosts, isLoading, isLoadMoreButtonVisible, errorMessage, error } = useNewsPosts();

  return (
    <SectionWithStars>
      <Styledwrapper>
        {/* <ArchivesList /> */}
        <NewsList />
        {/* Show when there is no errors on init fetch */}
        {isLoadMoreButtonVisible && !error ? (
          <TextButton handleClick={handleLoadMoreNewsPosts} isLoading={isLoading} text={errorMessage ? errorMessage : 'Załaduj więcej...'} />
        ) : null}
        {/* Show when there is error with init fetch */}
        {error && <TextButton handleClick={() => window.location.reload()} text="Ups, coś poszło nie tak. Odśwież stronę! :)" />}
      </Styledwrapper>
    </SectionWithStars>
  );
};
