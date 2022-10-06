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
    /* Floating icons */
    .floating-icons-wrapper {
      display: none;
      position: absolute;
      top: 0;
      height: 130%;
      width: 100%;
      @media screen and (min-width: 1000px) {
        /* display: block; */
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
