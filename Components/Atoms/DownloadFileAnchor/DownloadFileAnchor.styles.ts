import styled from 'styled-components';

export const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 2rem 0.25rem 0;
  font-size: ${({ theme }) => theme.fontSize.textBase};
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.text.primary};
  @media screen and (min-width: 1150px) {
    font-size: ${({ theme }) => theme.fontSize.textXL};
  }
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.text.accentSecondary};
  }
`;