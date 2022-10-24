import NewsListElement from 'Components/Molecules/NewsListElement/NewsListElement';
import { StyledList } from './NewsList.styles';

const NewsList = () => (
  <StyledList>
    <li>
      <NewsListElement />
    </li>
    <li>
      <NewsListElement />
    </li>
    <li>
      <NewsListElement />
    </li>
  </StyledList>
);

export default NewsList;
