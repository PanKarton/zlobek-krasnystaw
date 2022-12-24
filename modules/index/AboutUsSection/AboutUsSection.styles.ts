import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;

  .flex-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 3rem 8rem;
    @media screen and (min-width: 75rem) {
      padding-block: 0rem 8rem;
      justify-content: space-between;
    }
    @media screen and (min-width: 96.875rem) {
      padding-block: 3rem 10rem;
      justify-content: flex-start;
      gap: 8rem;
    }
    .images-wrapper {
      display: none;
      width: 32.125rem;
      aspect-ratio: 1.3;
      position: relative;
      @media screen and (min-width: 62.5rem) {
        display: block;
      }
      @media screen and (min-width: 96.875rem) {
        width: 44.625rem;
        height: 34.375rem;
      }
      .sun-wrapper {
        position: absolute;
        height: 8rem;
        aspect-ratio: 1.16;
        top: 0;
        right: 15%;
        @media screen and (min-width: 68.75rem) {
          height: 9.375rem;
        }
        @media screen and (min-width: 96.875rem) {
          height: 12.5rem;
        }
      }
    }
  }
  .stars-background-wrapper {
    position: absolute;
    inset: 0% 0 5% 0;
    z-index: -1;
  }
`;

export const StyledWaveDivider = styled.div`
  position: absolute;
  bottom: -0.125rem;
  left: 50%;
  translate: -50% 0;
  width: 100vw;

  aspect-ratio: 15.28;
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;
  max-width: 31.25rem;

  h2 {
    max-width: 25rem;
  }

  .about-us-paragraph {
    @media screen and (min-width: 43.75rem) {
      margin-bottom: 0;
    }
  }

  ul {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li {
      display: flex;
      align-items: baseline;
      gap: 0.375rem;
      .snail-image-wrapper {
        min-width: 1.875rem;
        height: 1.0625rem;
        position: relative;
      }
    }
  }
`;
