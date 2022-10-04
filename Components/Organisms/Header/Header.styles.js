import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  width: 100vw;
  height: 75vh;
  margin-top: 3rem;

  @media screen and (min-width: 700px) {
    height: 40rem;
    margin-top: 0rem;
    .bottom-wave-wrapper {
      bottom: -2px;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 59rem;
  }

  .hero-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    @media screen and (min-width: 700px) {
      left: auto;
      right: 0;
      top: 3rem;
      width: 83%;
    }
    @media screen and (min-width: 1440px) {
      top: 6.5rem;
    }
  }
  .max-width-wrapper {
    height: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: auto;

    @media screen and (min-width: 700px) {
      justify-content: flex-start;
    }

    @media screen and (min-width: 1440px) {
      justify-content: flex-start;
      position: relative;
    }
  }

  .hero-text-wrapper {
    width: min(calc(100% - 3rem), 30rem);
    text-align: center;
    color: ${({ theme }) => theme.color.textDarkGray};
    font-family: var(--font-primary);
    background-color: ${({ theme }) => theme.color.white};
    padding-block: clamp(1.5rem, 5vw, 2rem);
    padding-inline: 2rem;

    @media screen and (min-width: 1440px) {
      position: absolute;
      top: 50%;
      left: 0;
      translate: 0 -50%;
      width: max-content;
      padding-inline: 4rem;
    }
    @media screen and (min-width: 1600px) {
      left: -5%;
    }

    h2 {
      font-weight: 400;
      font-size: clamp(1.625rem, 5vw, 2.25rem);
      .text-pink {
        color: ${({ theme }) => theme.color.textDarkPink};
      }
      @media screen and (min-width: 1440px) {
        font-size: clamp(2.25rem, 4vw, 5rem);
      }
    }
    p {
      font-size: clamp(1rem, 3vw, 1.25rem);
      line-height: 1.4;
      margin-top: 1rem;
    }
  }
  .bottom-wave-wrapper {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    aspect-ratio: 17.25;
    @media screen and (min-width: 700px) {
      bottom: -2px;
    }
  }
`;
