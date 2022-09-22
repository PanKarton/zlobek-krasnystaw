import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% 0;
  height: 13rem;
  padding-top: 1rem;
  margin-inline: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 2;

  & > .mobile-icons-wrapper {
    position: absolute;
    top: 2rem;
    right: 1rem;
    height: 3rem;
    @media screen and (min-width: 700px) {
      top: 2.25rem;
    }
    @media screen and (min-width: 1440px) {
      display: none;
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
    & > .main-logo-wrapper {
      width: 15rem;
      height: 10rem;
      position: absolute;
      left: -0.5rem;
      top: -1rem;
      background: url('/images/mobile-corner-logo-blob.svg');
      background-repeat: no-repeat;
      background-position: 70% 80%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 2rem;
      padding-left: 1rem;
      & .logo-img-wrapper {
        width: 9.5rem;
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
  }
`;
