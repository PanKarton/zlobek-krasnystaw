import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 3.25rem;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.color.black};
  padding: 1rem;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: var(--font-primary);
  font-size: ${({ theme }) => theme.fontSize.textBase};
  border-radius: 3px;
  font-weight: 500;

  &.invalid {
    border: 2px solid ${({ theme }) => theme.color.input.invalidBorder};
    outline: none;
    background-color: ${({ theme }) => theme.color.input.invalidBackground};
  }
`;
