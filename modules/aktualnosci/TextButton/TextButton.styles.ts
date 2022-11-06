import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.text.accentSecondary};
  font-family: var(--font-primary);
  font-size: ${({ theme }) => theme.fontSize.textBase};
  font-weight: 600;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.text.accentSecondaryLightHover};
  }
`;
