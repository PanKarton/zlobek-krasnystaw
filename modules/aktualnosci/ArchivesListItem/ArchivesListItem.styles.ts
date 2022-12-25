import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.textLG};
  font-weight: 500;
  background-color: transparent;
  border: none;
  &.active {
    color: ${({ theme }) => theme.color.accentSecondaryDarker};
  }
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.contrastLightHover};
  }
`;
