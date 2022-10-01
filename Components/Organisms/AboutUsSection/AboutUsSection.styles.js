import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  padding-block: 3rem 7rem;
  padding-inline: 1rem 2rem;
  .flex-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-inline: auto;
    gap: 2rem;
    padding-left: clamp(0rem, 0.5vw, 3rem);
    @media screen and (min-width: 700px) {
      padding-left: 5rem;
    }
    @media screen and (min-width: 1100px) {
      justify-content: center;
    }
    @media screen and (min-width: 1400px) {
      gap: 5rem;
    }
    .about-us-article {
    }
    .images-wrapper {
      display: none;
      width: 513px;
      aspect-ratio: 1.3;
      position: relative;
      @media screen and (min-width: 1000px) {
        display: block;
      }
      @media screen and (min-width: 1400px) {
        width: 713px;
        height: 550px;
      }
      .sun-wrapper {
        position: absolute;
        height: 150px;
        aspect-ratio: 1.16;
        top: 0;
        right: 15%;
        z-index: 3;
        @media screen and (min-width: 1400px) {
          height: 200px;
        }
      }
    }
  }
  .stars-background-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  .bottom-wave-wrapper {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    aspect-ratio: 15.28;
    @media screen and (min-width: 700px) {
      bottom: -2px;
    }
  }
`;

export const StyledArticle = styled.article`
  color: ${({ theme }) => theme.color.gray700};
  max-width: 29rem;
  .about-us-paragraph {
    font-family: var(--font-secondary);
    font-size: 1.25rem;
    max-width: 30ch;
    &--small {
      font-size: 1rem;
    }
  }
  h3 {
    font-size: 2.5rem;
    font-family: var(--font-primary);
    line-height: 1;
    margin-bottom: 0.75rem;
    @media screen and (min-width: 700px) {
      line-height: 1.125;
      margin-bottom: 0;
    }
    .text-pink {
      color: ${({ theme }) => theme.color.pink};
    }
  }
  ul {
    margin-top: 2rem;
    & > * + * {
      margin-top: 1rem;
    }
    li {
      display: flex;
      align-items: baseline;
      gap: 0.375rem;
      .snail-image-wrapper {
        width: 30px;
        height: 17px;
        position: relative;
      }
    }
  }
`;
