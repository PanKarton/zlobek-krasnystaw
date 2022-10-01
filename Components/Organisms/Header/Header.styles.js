import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  width: 100vw;
  height: 75vh;
  margin-top: 5rem;
  .hero-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  .max-width-wrapper {
    height: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-inline: auto;
  }

  .hero-text {
    color: ${({ theme }) => theme.color.white};
    background-color: hsla(0, 0%, 0%, 0.15);
    width: 80%;
    padding: 1rem;
    box-shadow: 0 0 1rem 0.5rem hsla(0, 0%, 0%, 0.15);

    h2 {
      font-size: clamp(2.25rem, 7vw, 6rem);
      font-weight: 600;
      font-family: var(--font-primary);
      line-height: 1.125;
      .text-pink {
        color: ${({ theme }) => theme.color.pink};
      }
    }
    p {
      font-size: clamp(1rem, 2.25vw, 1.5rem);
      font-family: var(--font-secondary);
      margin-top: 0.5rem;
    }
  }
  .bottom-wave-wrapper {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    aspect-ratio: 17.25;
  }

  @media screen and (min-width: 700px) {
    height: 40rem;
    margin-top: 0rem;
    .hero-text {
      width: 70%;
    }
    .max-width-wrapper {
      justify-content: center;
    }
    .bottom-wave-wrapper {
      bottom: -2px;
    }
  }
  @media screen and (min-width: 1440px) {
    height: 90vh;
    .max-width-wrapper {
      justify-content: flex-start;
    }
    .hero-text {
      padding: 2rem 1rem 2rem 2rem;
    }
  }
`;
