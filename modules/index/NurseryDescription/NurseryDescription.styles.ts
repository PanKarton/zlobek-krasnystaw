import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.background.nurserySection};
  padding-top: 5rem;
  /* Padding top + blue wave layer height - 100vw/11.5 - wave height based on its aspect ratio | /3.5 - most blue wave layer aspect.ratio */
  padding-bottom: calc(5rem + calc(100vw / 11.5 / 3.5));
  @media screen and (min-width: 1000px) {
    padding-inline: 3rem;
  }
  .max-width-1440 {
    & > .flex-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      .description-image-wrapper {
        display: none;
        position: relative;
        flex-grow: 1;
        aspect-ratio: 1.5;
        @media screen and (min-width: 1000px) {
          display: block;
        }
      }
    }
  }
`;

export const StyledArticle = styled.article`
  max-width: 500px;
  @media screen and (min-width: 1550px) {
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
