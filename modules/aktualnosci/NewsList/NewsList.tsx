import { NewsListElement } from 'modules/aktualnosci/NewsListElement/NewsListElement';
import { useNewPosts } from 'providers/NewsPostsProvider';
import { StyledList } from './NewsList.styles';

export const NewsList = () => {
  const { newsPostsState } = useNewPosts();
  console.log('NewsList', newsPostsState[0]);

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
