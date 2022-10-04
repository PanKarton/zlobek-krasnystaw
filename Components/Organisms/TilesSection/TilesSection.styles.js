import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.tilesSectionBackground};
  padding-top: clamp(2rem, 100vw, 4rem);
  padding-bottom: clamp(5rem, 18vw, 20rem);
  padding-inline: 1rem;
  .max-width {
    position: relative;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .flex-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: clamp(1.5rem, 5vw, 3rem);
      z-index: 1;
      h3 {
        width: 100%;
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.sectionHeading};
        color: ${({ theme }) => theme.color.gray700};
        font-family: var(--font-primary);
        font-weight: 600;
        .pink-text {
          color: ${({ theme }) => theme.color.pink};
        }
      }
      .tiles-wrapper {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        gap: clamp(1rem, 100vw, 3rem);
        .tile-wrapper {
          width: min(calc(50% - 1rem), 15rem);
          aspect-ratio: 225/315;
          border-radius: 5px;
          overflow: hidden;
        }
      }
    }
    /* Floating icons */
    .floating-icons-wrapper {
      display: none;
      position: absolute;
      top: 0;
      height: 130%;
      width: 100%;
      @media screen and (min-width: 1000px) {
        display: block;
      }
      .floating-icon-wrapper {
        position: absolute;
        height: 110px;
        aspect-ratio: 1;
        animation: floater 8s infinite ease-in-out;
        &:nth-child(1) {
          top: 0;
          right: 0;
        }
        &:nth-child(2) {
          bottom: -5%;
          right: 5%;
          animation-delay: 1s;
        }
        &:nth-child(3) {
          top: -5%;
          left: 20%;
          height: 130px;
          animation-delay: 2s;
        }
        &:nth-child(4) {
          height: 140px;
          left: -5%;
          top: 15%;
          animation-delay: 3s;
        }
        &:nth-child(5) {
          bottom: 5%;
          left: 0;
          animation-delay: 4s;
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
  }
  /* Blue wave divider */
  .bottom-waves-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    aspect-ratio: 11.5;
  }
`;
