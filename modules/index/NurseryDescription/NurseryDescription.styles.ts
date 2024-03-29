import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.accentPrimary};
  padding-top: 5rem;
  /* Padding top + blue wave layer height - 100vw/11.5 - wave height based on its aspect ratio | /3.5 - most blue wave layer aspect.ratio */
  padding-bottom: calc(5rem + calc(100vw / 11.5 / 3.5));

  &::before {
    content: '';
    position: absolute;
    top: -0.25rem;
    left: 0;
    right: 0;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.color.accentPrimary};
  }

  .max-width-1440 {
    & > .flex-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .description-image-wrapper {
        display: none;
        position: relative;
        flex-grow: 1;
        aspect-ratio: 1.5;
        @media screen and (min-width: 62.5rem) {
          display: block;
        }
      }
    }
  }
`;

export const StyledArticle = styled.article`
  max-width: 31.25rem;
  @media screen and (min-width: 96.875rem) {
    max-width: 42rem;
  }
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: left;
    gap: 1rem;
  }
`;
