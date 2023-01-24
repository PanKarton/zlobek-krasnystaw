import { TextButton } from 'modules/aktualnosci/TextButton/TextButton';
import { ArchivesList } from 'modules/aktualnosci/ArchivesList/ArchivesList';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { NewsList } from 'modules/aktualnosci/NewsList/NewsList';
import { Styledwrapper } from './NewsListSection.styles';
import { useNewsPosts } from 'providers/NewsPostsProvider';
import { LoadingSpinner } from 'Components/Atoms/LoadingSpinner/LoadingSpinner';

export const NewsListSection = () => {
  const { handleLoadMoreNewsPosts, isLoading, isAllDataDisplayed, errorMessage, error, newsPostsState } = useNewsPosts();

  const isLoadMoreButtonVisible = isAllDataDisplayed && !error && newsPostsState.length !== 0 && !isLoading;

  return (
    <SectionWithStars>
      <Styledwrapper>
        <ArchivesList />
        <div className="content-wrapper">
          {isLoading ? (
            <div className="spinner-wrapper">
              <LoadingSpinner />
            </div>
          ) : (
            <NewsList />
          )}
          {/* Show when there is no errors on init fetch */}
          {isLoadMoreButtonVisible && (
            <TextButton handleClick={handleLoadMoreNewsPosts} isLoading={isLoading} text={errorMessage ? errorMessage : 'Załaduj więcej...'} />
          )}
          {/* Show when there is error with init fetch */}
          {error && <TextButton handleClick={() => window.location.reload()} text="Ups, coś poszło nie tak. Odśwież stronę! :)" />}
        </div>
      </Styledwrapper>
    </SectionWithStars>
  );
};
