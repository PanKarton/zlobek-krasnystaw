import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-bottom: 5rem;
  @media screen and (min-width: 56.25rem) {
    padding-bottom: 6rem;
  }
  @media screen and (min-width: 71.875rem) {
    padding-bottom: 7rem;
  }
  @media screen and (min-width: 96.875rem) {
    padding-top: 1rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    gap: 2rem;
    li {
      flex-basis: 100%;
    }

    @media screen and (min-width: 56.25rem) {
      li {
        flex-basis: calc(50% - 1rem);
      }
    }
    @media screen and (min-width: 71.875rem) {
      column-gap: 3rem;
      row-gap: 2rem;
      li {
        flex-basis: calc(50% - 1.5rem);
      }
    }
    @media screen and (min-width: 96.875rem) {
      li {
        flex-basis: calc(25% - 1.5rem);
      }
    }
  }
  .no-folders-message {
    font-family: var(--font-primary);
    color: ${({ theme }) => theme.color.contrast};
    font-size: ${({ theme }) => theme.fontSize.textLG};
    font-weight: 500;
    margin-top: 4rem;
    text-align: center;
    @media screen and (min-width: 56.25rem) {
      font-size: ${({ theme }) => theme.fontSize.textXL};
      letter-spacing: 1px;
      text-align: left;
      margin-top: 3 rem;
    }
  }
`;
