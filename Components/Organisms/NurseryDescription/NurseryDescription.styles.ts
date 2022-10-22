import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.blue};
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
      justify-content: space-between;
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
  color: ${({ theme }) => theme.color.textDarkerGray};
  font-family: var(--font-primary);
  max-width: 440px;
  @media screen and (min-width: 1550px) {
    max-width: 42rem;
  }
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: left;
    gap: 1rem;
    h3 {
      font-size: clamp(1.75rem, 2vw, 2.25rem);
      font-weight: 600;
    }
    p {
      font-size: clamp(1rem, 1.125vw, 1.125rem);
      line-height: 1.8;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
`;