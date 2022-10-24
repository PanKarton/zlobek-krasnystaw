import styled from 'styled-components';

export const StyledList = styled.ul`
  flex-grow: 1;
  & > * + * {
    margin-top: 2rem;
  }
`;
