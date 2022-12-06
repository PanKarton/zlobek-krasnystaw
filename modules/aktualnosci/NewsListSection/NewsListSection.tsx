import { TextButton } from 'modules/aktualnosci/TextButton/TextButton';
import { ArchivesList } from 'modules/aktualnosci/ArchivesList/ArchivesList';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { NewsList } from 'modules/aktualnosci/NewsList/NewsList';
import { Styledwrapper } from './NewsListSection.styles';
import { useNewsPosts } from 'providers/NewsPostsProvider';

export const NewsListSection = () => {
  const { handleLoadMoreNewsPosts, isLoading, isAllDataDisplayed, errorMessage, error, newsPostsState } = useNewsPosts();

  const isLoadMoreButtonVisible = isAllDataDisplayed && !error && newsPostsState.length;

  return (
    <SectionWithStars>
      <Styledwrapper>
        <ArchivesList />
        {/* Display message when there are 0 posts in results */}
        {newsPostsState.length ? (
          <NewsList />
        ) : (
          <div className="no-posts-message">
            <h3>Nie udało się znaleźć postów</h3>
            <p>Wybierz inny miesiąc lub odśwież stronę! :)</p>
          </div>
        )}
        {/* Show when there is no errors on init fetch */}
        {isLoadMoreButtonVisible && (
          <TextButton handleClick={handleLoadMoreNewsPosts} isLoading={isLoading} text={errorMessage ? errorMessage : 'Załaduj więcej...'} />
        )}
        {/* Show when there is error with init fetch */}
        {error && <TextButton handleClick={() => window.location.reload()} text="Ups, coś poszło nie tak. Odśwież stronę! :)" />}
      </Styledwrapper>
    </SectionWithStars>
  );
};
