import styled from 'styled-components';

export const StyledWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.color.contrast};
  padding-bottom: 4rem;
  @media screen and (min-width: 56.25rem) {
    padding-bottom: 5rem;
  }

  .date-adnonation {
    margin-bottom: 2rem;
    @media screen and (min-width: 56.25rem) {
      margin-bottom: 3rem;
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.text2XL};
    font-weight: 500;
    @media screen and (min-width: 96.875rem) {
      font-size: ${({ theme }) => theme.fontSize.text3XL};
    }
    &.steps-header {
      margin-bottom: 1.5rem;
      @media screen and (min-width: 96.875rem) {
        margin-bottom: 2rem;
      }
    }
  }
  ul.download-files-list {
    li {
      margin-top: 0.75rem;
    }
  }
`;

export const StyledStepsList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  @media screen and (min-width: 56.25rem) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 1rem;
    li {
      flex-basis: calc(50% - 0.5rem);
    }
  }
  li {
    margin-bottom: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;

    @media screen and (min-width: 96.875rem) {
      gap: 1.5rem;
    }

    .icon-wrapper {
      position: relative;
      width: 3.5rem;
      aspect-ratio: 1;
      @media screen and (min-width: 96.875rem) {
        width: 4rem;
      }
    }
    .text-wrapper {
      flex-basis: calc(100% - 5rem);
    }
  }
  h4,
  a {
    color: ${({ theme }) => theme.color.contrast};
    font-size: ${({ theme }) => theme.fontSize.textLG};
    font-weight: 600;
    margin-top: 3rem;
    @media screen and (min-width: 96.875rem) {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
    }
  }
  h4 {
    margin-block: 0;
  }
  a {
    cursor: pointer;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.textBase};
    line-height: ${({ theme }) => theme.lineHeight.textBase};
    font-weight: 400;
    margin-top: 0.25rem;
    @media screen and (min-width: 96.875rem) {
      font-size: ${({ theme }) => theme.fontSize.textLG};
    }
  }
`;
