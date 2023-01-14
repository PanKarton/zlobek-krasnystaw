import styled from 'styled-components';

export const StyledWrapper = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  &:hover > svg,
  &:hover > a {
    color: ${({ theme }) => theme.color.accentSecondaryDarker} !important;
  }
  a {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: 400;
    color: ${({ theme }) => theme.color.contrast};
    font-size: ${({ theme }) => theme.fontSize.textLG};
    &:active {
      color: ${({ theme }) => theme.color.accentSecondaryDarker};
    }
  }
  svg {
    margin: 0;
  }
`;
