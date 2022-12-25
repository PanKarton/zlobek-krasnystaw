import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-bottom: 5rem;
  translate: 0.25rem 0;

  @media screen and (min-width: 62.5rem) {
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
    justify-content: center;
    gap: 3rem;
    li {
      flex-basis: 100%;
    }

    @media screen and (min-width: 62.5rem) {
      li {
        flex-basis: calc(50% - 1.5rem);
      }
    }
    @media screen and (min-width: 71.875rem) {
      column-gap: 4rem;
      row-gap: 3rem;
      li {
        flex-basis: calc(50% - 2em);
      }
    }
    @media screen and (min-width: 96.875rem) {
      flex-wrap: nowrap;
      li {
        flex-basis: calc(33%);
      }
    }
  }
`;
