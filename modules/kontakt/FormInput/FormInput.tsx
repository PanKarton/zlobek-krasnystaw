import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 3.25rem;
  border-radius: 0;
  border: 0.0625rem solid ${({ theme }) => theme.color.contrast};
  padding: 1rem;
  color: ${({ theme }) => theme.color.contrast};
  font-family: var(--font-primary);
  font-size: ${({ theme }) => theme.fontSize.textBase};
  border-radius: 0.1875rem;
  font-weight: 500;

  &.invalid {
    border: 0.125rem solid ${({ theme }) => theme.color.error};
    outline: none;
    background-color: ${({ theme }) => theme.color.errorTransparent};
  }
`;
