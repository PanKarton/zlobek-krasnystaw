import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 15rem;

  @media screen and (min-width: 34rem) {
    flex-direction: row;
    max-width: 100%;
  }

  @media screen and (min-width: 62.5rem) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  @media screen and (min-width: 96.875rem) {
    grid-column: 3/4;
  }
`;

export const Found = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (min-width: 62.5rem) {
    flex-direction: row;
  }
  @media screen and (min-width: 96.875rem) {
    gap: 0.5rem;
  }

  .img-wrapper {
    position: relative;
    aspect-ratio: 1;
    flex-basis: 2.5rem;
    flex-shrink: 0;
    @media screen and (min-width: 96.875rem) {
      flex-basis: 3.5rem;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSize.textBase};
    font-weight: 500;
    @media screen and (min-width: 62.5rem) {
      text-align: left;
    }
    @media screen and (min-width: 96.875rem) {
      font-size: ${({ theme }) => theme.fontSize.textLG};
    }
    .blue-text {
      color: ${({ theme }) => theme.color.maluchPlus};
    }
    .bold-text {
      font-weight: 600;
    }
  }
`;
