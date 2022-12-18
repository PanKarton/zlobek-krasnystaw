import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 1.5rem;
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(34, 193, 195, 0) 75%);
  }
  .flex-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 3rem 8rem;
    @media screen and (min-width: 75rem) {
      padding-block: 0rem 8rem;
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
        height: 5rem;
        aspect-ratio: 1.16;
        top: 0;
        right: 15%;
        @media screen and (min-width: 96.875rem) {
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
  .bottom-wave-wrapper {
    position: absolute;
    bottom: -0.125rem;
    left: 0;
    right: 0;
    aspect-ratio: 15.28;
  }
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
