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
  &::placeholder {
    color: ${({ theme }) => theme.color.textDarkGray};
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 500;
  }
  &:focus {
    outline: 1px solid #aaa;
  }
`;
