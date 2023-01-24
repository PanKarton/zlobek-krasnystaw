import { NewsListElement } from 'modules/aktualnosci/NewsListElement/NewsListElement';
import { useNewsPosts } from 'providers/NewsPostsProvider';
import { StyledWrapper, StyledList } from './NewsList.styles';

export const NewsList = () => {
  const { newsPostsState } = useNewsPosts();

  return (
    <StyledWrapper>
      {newsPostsState.length ? (
        <StyledList>
          {newsPostsState.map(({ id, attributes }) => (
            <li key={id}>
              <NewsListElement postId={id} attributes={attributes} />
            </li>
          ))}
        </StyledList>
      ) : (
        <div className="no-posts-message">
          <h3>Nie udało się znaleźć postów</h3>
          <p>Wybierz inny miesiąc lub odśwież stronę! :)</p>
        </div>
      )}
    </StyledWrapper>
  );
};
