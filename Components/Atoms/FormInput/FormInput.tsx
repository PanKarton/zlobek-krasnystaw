import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 3.25rem;
  border-radius: 0;
  border: 1px solid black;
  padding: 1rem;
  color: ${({ theme }) => theme.color.textDarkGray};
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  &:focus {
    outline: 1px solid #aaa;
  }
  &:invalid {
    border: 2px solid red;
  }
`;
