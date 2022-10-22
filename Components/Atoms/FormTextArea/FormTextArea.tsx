import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 14rem;
  border-radius: 0;
  border: 1px solid black;
  padding: 1rem;
  color: ${({ theme }) => theme.color.textDarkGray};
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  resize: none;

  &:focus {
    outline: 1px solid #aaa;
  }
  &.invalid {
    border: 2px solid red;
    outline: none;
    background-color: hsla(0, 100%, 50%, 0.05);
  }
`;
