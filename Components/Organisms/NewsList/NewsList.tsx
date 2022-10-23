import NewsListElement from 'Components/Molecules/NewsListElement/NewsListElement';
import styled from 'styled-components';

const StyledList = styled.ul`
  flex-grow: 1;
  & > * + * {
    margin-top: 2rem;
  }
`;

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
