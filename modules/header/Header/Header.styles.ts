import styled from 'styled-components';
import { Props } from './Header';

export const StyledHeader = styled.header<Props>`
  position: relative;
  height: ${({ isSecondary }) => (isSecondary ? '15rem' : '75vh')};
  overflow: hidden;

  @media screen and (min-width: 43.75rem) {
    height: ${({ isSecondary }) => (isSecondary ? '18rem' : '90vh')};
    margin-top: 0rem;
    .bottom-wave-wrapper {
      bottom: -0.125rem;
    }
  }
  @media screen and (min-width: 90rem) {
    height: ${({ isSecondary }) => (isSecondary ? '26.5rem' : '90vh')};
  }

  .skip-button-wrapper {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0%;
    padding: 0.75rem 1rem;
    border: 0.0625rem solid #aaa;
    background-color: ${({ theme }) => theme.color.primary};

    /* Hide button when not focused */
    translate: 0 -100%;
    transition: translate 0.25s ease-in-out;
    /* Show button when a is focused */
    &:has(a:focus) {
      translate: 0 0;
    }
    a {
      display: block;
      height: 100%;
      color: ${({ theme }) => theme.color.contrast};
      font-family: ${({ theme }) => theme.fontFamily.primary};
    }
  }

  .hero-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    overflow: hidden;
    @media screen and (min-width: 43.75rem) {
      left: auto;
      right: 0;
      top: 3rem;
      width: ${({ isSecondary }) => (isSecondary ? '100%' : '85%')};
    }
    @media screen and (min-width: 90rem) {
      top: 5.25rem;
      img {
        translate: ${({ isSecondary }) => (isSecondary ? '0 -5.5rem' : '0')};
      }
    }
  }

  .hero-text-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    display: ${({ isSecondary }) => (isSecondary ? 'none' : 'block')};
    width: min(calc(100% - 3rem), 30rem);
    text-align: center;
    color: ${({ theme }) => theme.color.contrast};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    background-color: ${({ theme }) => theme.color.primary};
    padding-block: clamp(1.5rem, 5vw, 2rem);
    padding-inline: 1rem;

    @media screen and (min-width: 43.75rem) {
      left: 0;
      translate: 0 -50%;
    }

    @media screen and (min-width: 62.5rem) {
      width: max-content;
      padding-inline: 3rem;
    }
    @media screen and (min-width: 96.875rem) {
      left: 50%;
      translate: -100% -40%;
      padding-inline: 4rem;
    }

    h2 {
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.text3XL};
      .text-pink {
        color: ${({ theme }) => theme.color.accentSecondaryDarker};
      }
      @media screen and (min-width: 43.75rem) {
        font-size: ${({ theme }) => theme.fontSize.text5XL};
      }
      @media screen and (min-width: 62.5rem) {
        font-size: ${({ theme }) => theme.fontSize.text6XL};
      }
      @media screen and (min-width: 96.875rem) {
        font-size: ${({ theme }) => theme.fontSize.text7XL};
      }
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.textBase};
      line-height: ${({ theme }) => theme.lineHeight.textBase};
      font-weight: 500;
      margin-top: 1.5rem;
      @media screen and (min-width: 43.75rem) {
        font-size: ${({ theme }) => theme.fontSize.textLG};
      }
      @media screen and (min-width: 62.5rem) {
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
      @media screen and (min-width: 81.25rem) {
        font-size: ${({ theme }) => theme.fontSize.text2XL};
      }
    }
  }

  .max-width-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 43.75rem) {
      justify-content: flex-start;
    }

    @media screen and (min-width: 90rem) {
      justify-content: flex-start;
      position: relative;
    }
  }

  .bottom-wave-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    aspect-ratio: 17.25;
    @media screen and (min-width: 90rem) {
      bottom: ${({ isSecondary }) => (isSecondary ? '0.25rem' : '0')};
    }
  }
`;
