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
    @media screen and (min-width: 1440px) {
    }

    @media screen and (min-width: 1440px) {
      height: 11rem;
      width: 11rem;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
      background-image: none;
      background-color: ${({ theme }) => theme.color.white};
      padding: 0;
      justify-content: center;
      align-items: center;
    }
  }

  & > .mobile-icons-wrapper {
    @media screen and (min-width: 700px) {
      top: 2.25rem;
    }
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }

  & > .nav-contact-info-wrapper {
    display: none;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-inline: auto;
    gap: 13rem;
    font-family: var(--font-secondary);
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
    @media screen and (min-width: 700px) {
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
