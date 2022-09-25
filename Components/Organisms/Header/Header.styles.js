import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  width: 100vw;
  height: 771px;
  @media screen and (max-width: 700px) {
    height: 500px;
  }
  .hero-image-wrapper {
    position: relative;
    height: 100%;
    z-index: -1;
  }
  .hero-text {
    position: absolute;
    top: 55%;
    translate: 0 -50%;
    color: ${({ theme }) => theme.color.white};
    margin-inline: auto;
    padding-inline: 1rem 3rem;
    padding-block: 2rem;
    background-color: hsla(0, 0%, 0%, 0.25);

    h2 {
      font-size: clamp(2.25rem, 6vw, 4rem);
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

    @media screen and (min-width: 700px) {
      background-color: transparent;
      padding-inline: 2rem 0;
    }
    @media screen and (min-width: 1440px) {
      padding-inline: 0;
      left: 50%;
      translate: -50% -50%;
    }
  }
  .wave-wrapper {
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
