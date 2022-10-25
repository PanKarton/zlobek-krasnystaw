import NewsListElement from 'Components/Molecules/NewsListElement/NewsListElement';
import { StyledList } from './NewsList.styles';

const NewsList = () => (
  <StyledList>
    <li>
      <NewsListElement postId="postJeden" />
    </li>
    <li>
      <NewsListElement postId="postDwa" />
    </li>
    <li>
      <NewsListElement postId="postTrzy" />
    </li>
  </StyledList>
);

export default NewsList;
