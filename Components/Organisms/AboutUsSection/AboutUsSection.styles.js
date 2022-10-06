import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  padding-block: 3rem 7rem;
  .flex-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: auto;
    padding-inline: 1.5rem;
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
  color: ${({ theme }) => theme.color.textDarkGray};
  max-width: 35.5rem;
  font-family: var(--font-primary);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;
  max-width: 440px;

  h3 {
    max-width: 400px;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 1.2;
    .text-pink {
      color: ${({ theme }) => theme.color.textDarkPink};
    }
  }

  .about-us-paragraph {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.3;
    &--small {
      font-size: 0.875rem;
    }
    @media screen and (min-width: 700px) {
      font-size: 1rem;
      line-height: 1.125;
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
        min-width: 30px;
        height: 17px;
        position: relative;
      }
    }
  }
`;
