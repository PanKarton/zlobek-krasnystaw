import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.tilesSectionBackground};
  padding-top: clamp(4rem, 11vw, 6rem);
  padding-bottom: clamp(5rem, 15vw, 16rem);
  .max-width {
    position: relative;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 1.5rem;
    @media screen and (min-width: 1000px) {
      padding-inline: 3rem;
    }
    @media screen and (min-width: 1440px) {
      padding-inline: 1.5rem;
    }

    & > .flex-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: clamp(3rem, 5vw, 6rem);
      .staff-image-wrapper {
        display: none;
        position: relative;
        flex-grow: 1;
        max-width: 45rem;
        aspect-ratio: 1.58;
        @media screen and (min-width: 1000px) {
          display: block;
        }
        &::before {
          content: '';
          position: absolute;
          inset: 0;
          translate: 1rem 1rem;
          background-color: ${({ theme }) => theme.color.white};
          z-index: 0;
        }
      }
    }
  }
  /* Blue wave divider */
  .bottom-waves-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    aspect-ratio: 11.5;
  }

  /* Floating icons */
  .floating-icons-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .floating-icon-wrapper {
      position: absolute;
      height: 110px;
      aspect-ratio: 1;
      animation: floater 10s infinite ease-in-out;
      z-index: 9999;
      &:nth-child(1) {
        /* Icon C */
        display: none;
        top: -15%;
        left: -5%;
        rotate: 210deg;
        scale: 1;
        height: 130px;
        @media screen and (min-width: 1440px) {
          display: block;
        }
      }
      &:nth-child(2) {
        /* Icon O */
        display: none;
        bottom: -25%;
        left: 0;
        scale: 1;
        animation-delay: 1s;
        @media screen and (min-width: 1440px) {
          display: block;
        }
        @media screen and (min-width: 1640px) {
          left: -10%;
        }
      }
      &:nth-child(3) {
        /* Icon triangle */
        display: none;
        top: -25%;
        right: 15%;
        animation-delay: 2s;
        scale: 0.5;
        @media screen and (min-width: 1000px) {
          display: block;
          top: -25%;
        }
        @media screen and (min-width: 1150px) {
          scale: 0.7;
        }
        @media screen and (min-width: 1440px) {
          scale: 1;
        }
      }
      &:nth-child(4) {
        /* Icon diamond */
        display: none;
        height: 140px;
        right: 5%;
        bottom: -35%;
        animation-delay: 3s;
        scale: 0.7;
        @media screen and (min-width: 1000px) {
          display: block;
        }
        @media screen and (min-width: 1150px) {
          scale: 0.85;
          bottom: -20%;
        }
        @media screen and (min-width: 1440px) {
          scale: 1;
        }
      }
      &:nth-child(5) {
        /* Icon cymbals */
        display: none;
        bottom: 5%;
        left: 0;
        animation-delay: 4s;
      }
      @media screen and (min-width: 1400px) {
        display: block;
      }
    }

    @keyframes floater {
      0% {
        translate: 0 0;
      }
      20% {
        translate: 5% 5%;
      }
      40% {
        translate: -5% 0%;
      }
      60% {
        translate: 0 -5%;
      }
      80% {
        translate: 5% 0;
      }
      100% {
        translate: 0 0;
      }
    }
  }
`;

export const StyledArticle = styled.article`
  color: ${({ theme }) => theme.color.textDarkGray};
  font-family: var(--font-primary);
  text-align: right;
  max-width: 30rem;
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 0.75rem;
    @media screen and (min-width: 1000px) {
      align-items: flex-start;
      text-align: left;
    }
    h3 {
      font-size: clamp(1.75rem, 2vw, 2.25rem);
      font-weight: 600;
    }
    p {
      font-size: clamp(1rem, 1.125vw, 1.125rem);
      line-height: 1.3;
    }
  }
`;
