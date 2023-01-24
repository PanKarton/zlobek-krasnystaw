import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.primaryDark};
  padding-top: clamp(5rem, 8vw, 9rem);
  /* Padding top + bottom wave height  */
  padding-bottom: calc(clamp(5rem, 8vw, 9rem) + 100vw / 11.5);

  .flex-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(3rem, 5vw, 6rem);
    @media screen and (min-width: 62.5rem) {
      justify-content: space-between;
    }
    @media screen and (min-width: 96.875rem) {
      justify-content: flex-start;
    }
    .staff-image-wrapper {
      display: none;
      position: relative;
      width: 50%;
      aspect-ratio: 1.58;
      @media screen and (min-width: 62.5rem) {
        display: block;
      }
      @media screen and (min-width: 96.875rem) {
        width: 26.375rem;
        flex-grow: 0.5;
      }
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        translate: 1rem 1rem;
        background-color: ${({ theme }) => theme.color.primary};
        z-index: 0;
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
  .floating-icons-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    .floating-icon-wrapper {
      position: absolute;
      height: 10.625rem;
      aspect-ratio: 1;
      animation: floater 15s infinite ease-in-out;
      &:nth-child(1) {
        /* Icon C */
        display: none;
        top: -35%;
        left: -5%;
        rotate: 210deg;
        scale: 0.75;
        height: 8.125rem;
        @media screen and (min-width: 102.5rem) {
          display: block;
          top: -20%;
          left: -6%;
        }
      }
      &:nth-child(2) {
        /* Icon O */
        display: none;
        bottom: -40%;
        left: -10%;
        scale: 0.75;
        animation-delay: 1s;
        @media screen and (min-width: 102.5rem) {
          display: block;
          bottom: -20%;
          left: -5%;
        }
      }
      &:nth-child(3) {
        /* Icon triangle */
        display: none;
        top: -25%;
        right: 0%;
        animation-delay: 2s;
        scale: 0.5;
        @media screen and (min-width: 62.5rem) {
          display: block;
          top: -25%;
        }
        @media screen and (min-width: 96.875rem) {
          scale: 0.7;
          top: 0;
        }
      }
      &:nth-child(4) {
        /* Icon diamond */
        display: none;
        height: 9.375rem;
        right: 0%;
        bottom: -40%;
        animation-delay: 3s;
        scale: 0.7;
        @media screen and (min-width: 62.5rem) {
          display: block;
        }
        @media screen and (min-width: 96.875rem) {
          bottom: -40%;
        }
        @media screen and (min-width: 96.875rem) {
          scale: 0.85;
          bottom: -30%;
          right: 5%;
        }
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
  text-align: right;
  max-width: 31.25rem;
  @media screen and (min-width: 62.5rem) {
    max-width: 45%;
  }
  @media screen and (min-width: 96.875rem) {
    max-width: 31.25rem;
    text-align: left;
  }
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 0.75rem;
    @media screen and (min-width: 62.5rem) {
      align-items: flex-start;
      text-align: left;
    }
  }
`;
