import styled from 'styled-components';

type StyledNavSpanProps = {
  hasNarrowHitbox?: boolean;
};

export const StyledNavSpan = styled.span<StyledNavSpanProps>`
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.color.contrast};
  font-size: ${({ theme }) => theme.fontSize.textLG};
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
  padding-block: ${({ hasNarrowHitbox }) => (hasNarrowHitbox ? '0' : '1.5rem')};
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    left: 0;
    bottom: ${({ hasNarrowHitbox }) => (hasNarrowHitbox ? '-0.25rem' : '1.25rem')};
    border-bottom: 0.1875rem solid ${({ theme }) => theme.color.accentSecondaryDarker};
    scale: 0 1;
    translate: -50% 0;
    transition: all 0.25s ease-in-out;
  }
  &:hover {
    color: ${({ theme }) => theme.color.accentSecondaryDarker};
  }
  &:hover::after {
    translate: 0 0;
    scale: 1;
  }

  .drop-arrow {
    position: absolute;
    top: 50%;
    right: -1.125rem;
    translate: 0 -50%;
  }

  @media screen and (min-width: 43.75rem) {
    font-weight: 500;
  }
`;
