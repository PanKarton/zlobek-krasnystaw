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
    color: ${({ theme }) => theme.color.text.accentPrimary} !important;
  }
  a {
    font-family: var(--font-primary);
    font-weight: 400;
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.textLG};
    &:active {
      color: ${({ theme }) => theme.color.text.accentPrimary};
    }
  }
  svg {
    margin: 0;
  }
`;
