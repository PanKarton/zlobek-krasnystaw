import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 6rem;
  top: 0;
  background-color: white;
  padding-inline: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99999;

  @media screen and (min-width: 700px) {
    background-color: transparent;
    padding-inline: 0;
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 50%;
    top: 3.5rem;
    translate: -50% 0;
    max-width: 1440px;
  }

  & > .main-logo-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    & .logo-img-wrapper {
      position: relative;
      width: 8rem;
      aspect-ratio: 1;
    }
    @media screen and (min-width: 700px) {
      justify-content: flex-start;
      align-items: center;
      width: 14rem;
      aspect-ratio: 1.1;
      padding: 1rem 0 0 1rem;
      background-image: url('/images/mobile-corner-logo-blob1.svg');
      background-size: auto;
      background-repeat: no-repeat;
      & .logo-img-wrapper {
        width: 10rem;
      }
    }

    @media screen and (min-width: 1440px) {
      position: absolute;
      height: 11rem;
      width: 11rem;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
      z-index: 99999;
      background-image: none;
      background-color: ${({ theme }) => theme.color.white};
      padding: 0;
      justify-content: center;
      align-items: center;
    }
  }

  & > .mobile-icons-wrapper {
    @media screen and (min-width: 700px) {
      position: absolute;
      right: 1.5rem;
      top: 2rem;
    }
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }

  & > .nav-contact-info-wrapper {
    display: none;
    position: absolute;
    bottom: 50%;
    width: 100%;
    height: 10rem;
    z-index: -1;
    align-items: flex-end;
    justify-content: space-between;
    gap: 12rem;
    padding-bottom: 3rem;
    font-family: var(--font-secondary);
    background-color: hsla(0, 0%, 0%, 0.2);
    @media screen and (min-width: 1440px) {
      display: flex;
    }
    .nav-contact-info {
      width: 100%;
      font-size: 16px;
      color: ${({ theme }) => theme.color.white};
      display: flex;
      align-items: center;
      gap: 1rem;
      & svg {
        color: ${({ theme }) => theme.color.pink};
      }
      &.left {
        left: 0;
        justify-content: flex-end;
        gap: 1.125rem;
        height: 2rem;
      }
      &.right {
        right: 0;

        .fb-icon {
          margin-left: 2rem;
        }
      }
      & > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }

  & > .ul-wrapper {
    display: none;
    @media screen and (min-width: 700px) {
      display: block;
      width: 50%;
    }
    @media screen and (min-width: 1440px) {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 100%;
    }
  }
`;
