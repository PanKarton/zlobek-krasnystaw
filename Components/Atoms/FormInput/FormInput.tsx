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
  border-radius: 3px;
  font-weight: 500;
  &:focus {
    outline: 1px solid #aaa;
  }
  &.invalid {
    border: 2px solid red;
    outline: none;
    background-color: hsla(0, 100%, 50%, 0.05);
  }
`;
