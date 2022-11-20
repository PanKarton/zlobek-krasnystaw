import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 3.25rem;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.color.contrast};
  padding: 1rem;
  color: ${({ theme }) => theme.color.contrast};
  font-family: var(--font-primary);
  font-size: ${({ theme }) => theme.fontSize.textBase};
  border-radius: 3px;
  font-weight: 500;

  &.invalid {
    border: 2px solid ${({ theme }) => theme.color.error};
    outline: none;
    background-color: ${({ theme }) => theme.color.errorTransparent};
  }
`;
