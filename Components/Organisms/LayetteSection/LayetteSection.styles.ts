import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding-bottom: 3rem;
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.text.primary};
  @media screen and (min-width: 700px) {
    padding-bottom: 4rem;
  }
  @media screen and (min-width: 1150px) {
    padding-bottom: 5rem;
  }
`;

export const StyledOrderedList = styled.ol`
  width: 100%;
  padding-left: 1rem;
  @media screen and (min-width: 700px) {
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
      @media screen and (min-width: 700px) {
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }
    ::marker {
      font-size: ${({ theme }) => theme.fontSize.textBase};
      font-weight: 500;
      @media screen and (min-width: 700px) {
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }
  }
`;
