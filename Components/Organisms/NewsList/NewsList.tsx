import NewsListElement from 'Components/Molecules/NewsListElement/NewsListElement';
import { StyledList } from './NewsList.styles';

const NewsList = () => (
  <StyledList>
    <li>
      <NewsListElement postId="1" />
    </li>
    <li>
      <NewsListElement postId="2" />
    </li>
    <li>
      <NewsListElement postId="3" />
    </li>
  </StyledList>
);

export default NewsList;
