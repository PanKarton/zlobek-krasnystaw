import { NewsListElement } from 'modules/aktualnosci/NewsListElement/NewsListElement';
import { useNewsPosts } from 'providers/NewsPostsProvider';
import { StyledList } from './NewsList.styles';

export const NewsList = () => {
  const { newsPostsState } = useNewsPosts();

  return (
    <StyledList>
      {newsPostsState &&
        newsPostsState.map(({ id, attributes }) => (
          <li key={id}>
            <NewsListElement postId={id} attributes={attributes} />
          </li>
        ))}
    </StyledList>
  );
};
