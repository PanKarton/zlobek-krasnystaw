import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.accentPrimaryDarker};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSize.textBase};
  font-weight: 600;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.accentPrimaryDarkerLightHover};
  }
`;
