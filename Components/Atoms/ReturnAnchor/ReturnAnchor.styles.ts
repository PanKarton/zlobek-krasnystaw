import Link from 'next/link';
import styled from 'styled-components';

export const StyledSpan = styled.span`
  margin-left: 0.125rem;
  color: ${({ theme }) => theme.color.accentPrimaryDarker};
  font-size: ${({ theme }) => theme.fontSize.textBase};
  font-weight: 500;
  @media screen and (min-width: 96.875rem) {
    margin-left: 0.25rem;
  }
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.accentPrimary};
  }
`;
