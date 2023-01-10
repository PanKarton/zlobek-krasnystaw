import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 5rem;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.primary};
  padding-inline: 1.5rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.0625rem solid #aaa;
  transition: translate ease-out 0.25s;
  z-index: 1;
  &.hidden {
    translate: 0 -100%;
  }

  @media screen and (min-width: 90rem) {
    position: absolute;
    left: 50%;
    top: 3rem;
    translate: -50% 0;
    max-width: 90rem;
    height: 4.5rem;
    border-radius: 620rem;
    border-bottom: none;
    z-index: auto;
    transition: none;
  }

  & > .main-logo-wrapper {
    position: relative;
    display: flex;
    .logo-img-wrapper {
      position: relative;
      height: 4.375rem;
      aspect-ratio: 1.2;
    }
    @media screen and (min-width: 90rem) {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 10rem;
      aspect-ratio: 1;
      background-color: ${({ theme }) => theme.color.primary};
      border-radius: 50%;
      border: 0.0625rem solid #aaa;
      display: flex;
      align-items: center;
      justify-content: center;
      &::before {
        content: '';
        position: absolute;
        background-color: ${({ theme }) => theme.color.primary};
        width: 110%;
        height: 4.375rem;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
      }
      .logo-img-wrapper {
        height: 6.25rem;
        translate: 0 -5%;
      }
    }
  }

  & > .mobile-icons-wrapper {
    @media screen and (min-width: 43.75rem) {
      position: absolute;
      right: 2rem;
      top: 50%;
      translate: 0 -50%;
      z-index: 9999;
    }
    @media screen and (min-width: 90rem) {
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
    @media screen and (min-width: 90rem) {
      display: flex;
    }
    .nav-contact-info {
      width: 100%;
      font-size: ${({ theme }) => theme.fontSize.textBase};
      font-weight: 500;
      color: ${({ theme }) => theme.color.contrast};
      display: flex;
      align-items: center;
      gap: 3rem;
      padding-bottom: 0.25rem;
      & a {
        color: inherit;
      }
      & svg {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.color.accentSecondary};
      }
      &.left {
        left: 0;
        justify-content: center;
      }
      &.right {
        right: 0;
        padding-left: 3rem;
      }
      & div.flex-row {
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
    @media screen and (min-width: 90rem) {
      display: block;
    }
    @media screen and (min-width: 100rem) {
      right: -3.5rem;
    }
  }

  & > .ul-wrapper {
    display: none;
    @media screen and (min-width: 43.75rem) {
      display: block;
      width: 50%;
    }
    @media screen and (min-width: 90rem) {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 100%;
      background-color: transparent;
    }
  }
`;
