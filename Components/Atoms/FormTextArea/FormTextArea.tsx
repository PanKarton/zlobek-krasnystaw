import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 14rem;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.color.black};
  padding: 1rem;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  resize: none;

  &.invalid {
    border: 2px solid ${({ theme }) => theme.color.input.invalidBorder};
    outline: none;
    background-color: ${({ theme }) => theme.color.input.invalidBackground};
  }
`;
