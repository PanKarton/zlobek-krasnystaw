import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  padding-block: 3rem 7rem;
  padding-inline: 1rem 2rem;
  .flex-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: auto;
    padding-left: clamp(0rem, 0.5vw, 3rem);
    @media screen and (min-width: 700px) {
      padding-left: 5rem;
    }
    @media screen and (min-width: 1100px) {
      justify-content: flex-start;
    }
    @media screen and (min-width: 1400px) {
      padding-left: 2rem;
      justify-content: flex-start;
      gap: 8rem;
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
    bottom: -2px;
    left: 0;
    right: 0;
    aspect-ratio: 15.28;
  }
`;

export const StyledArticle = styled.article`
  color: ${({ theme }) => theme.color.gray700};
  max-width: 29rem;
  .about-us-paragraph {
    font-family: var(--font-secondary);
    font-size: 1rem;
    max-width: 30ch;
    &--small {
      font-size: 0.875rem;
    }
    @media screen and (min-width: 700px) {
      font-size: 1.25rem;
      line-height: 1.125;
      margin-bottom: 0;
    }
  }
  h3 {
    color: ${({ theme }) => theme.color.gray700};
      font-family: var(--font-primary);
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.sectionHeading};
    line-height: 1;
    max-width: 20ch;
    @media screen and (min-width: 700px) {
      font-size: 2.5rem;
      line-height: 1.125;
      margin-bottom: .75rem;
    }
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
