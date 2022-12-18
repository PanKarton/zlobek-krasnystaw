import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding-bottom: 3rem;
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.contrast};
  translate: 0.25rem 0;
  @media screen and (min-width: 43.75rem) {
    padding-bottom: 4rem;
  }
  @media screen and (min-width: 96.875rem) {
    padding-bottom: 5rem;
  }
`;

export const StyledOrderedList = styled.ol`
  width: 100%;
  padding-left: 1rem;
  @media screen and (min-width: 43.75rem) {
    padding-left: 1.5rem;
    width: min(100%, 31rem);
  }
  li + li {
    margin-top: 1rem;
  }
  li {
    p {
      display: flex;
      gap: 0.5rem;
      font-size: ${({ theme }) => theme.fontSize.textBase};
      line-height: ${({ theme }) => theme.lineHeight.textBase};
      @media screen and (min-width: 43.75rem) {
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }
    ::marker {
      font-size: ${({ theme }) => theme.fontSize.textBase};
      font-weight: 500;
      @media screen and (min-width: 43.75rem) {
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }
  }
`;
