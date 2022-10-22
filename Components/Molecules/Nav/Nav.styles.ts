import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 5rem;
  top: 0;
  left: 0;
  background-color: white;
  padding-inline: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  @media screen and (min-width: 700px) {
    background-color: transparent;
    padding-inline: 0;
    height: 6rem;
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 50%;
    top: 3.5rem;
    translate: -50% 0;
    max-width: 1440px;
  }

  & > .main-logo-wrapper {
    position: relative;
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
      width: 20rem;
      height: 15rem;
      padding: 1rem 0 0 1.5rem;
      background-color: white;
      clip-path: circle(70% at 25% 0);
      & .logo-img-wrapper {
        width: 10rem;
      }
    }

    @media screen and (min-width: 1440px) {
      position: absolute;
      height: 11rem;
      width: 11rem;
      border: 1px solid #aaa;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
      z-index: 2;
      clip-path: none;
      background-image: none;
      background-color: ${({ theme }) => theme.color.white};
      padding: 0;
      justify-content: center;
      align-items: center;

      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        width: 110%;
        height: 4.4rem;
        background-color: white;
      }
    }
  }

  & > .mobile-icons-wrapper {
    @media screen and (min-width: 700px) {
      position: absolute;
      right: 1.5rem;
      top: 50%;
      translate: 0 -50%;
      z-index: 9999;
    }
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }

  & > .nav-contact-info-wrapper {
    display: none;
    position: absolute;
    bottom: 50%;
    left: 50%;
    translate: -50% 0;
    width: 100%;
    height: 10rem;
    z-index: -1;
    align-items: flex-end;
    justify-content: space-between;
    gap: 11rem;
    padding-bottom: 3rem;

    font-family: var(--font-primary);
    @media screen and (min-width: 1440px) {
      display: flex;
    }
    .nav-contact-info {
      width: 100%;
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.color.black};
      display: flex;
      align-items: center;
      gap: 3rem;
      padding-bottom: 0.25rem;
      & svg {
        color: ${({ theme }) => theme.color.pink};
      }
      &.left {
        left: 0;
        justify-content: flex-end;
        gap: 1.125rem;
      }
      &.right {
        right: 0;
      }
      & > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
  & > .fb-icon {
    display: none;
    position: absolute;
    height: 2.25rem;
    right: 2rem;
    top: 50%;
    translate: 0 -50%;
    @media screen and (min-width: 1440px) {
      display: block;
    }
    @media screen and (min-width: 1600px) {
      right: -3.5rem;
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
