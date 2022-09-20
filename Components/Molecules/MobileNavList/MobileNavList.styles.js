import { theme } from 'assets/styles/theme';
import CallMobileButton from 'Components/Atoms/CallMobileButton/CallMobileButton';
import styled from 'styled-components';

export const StyledWrapper = styled.section`
  position: absolute;
  right: 0;
  top: 0;
  width: 15rem;
  background-color: ${({ theme }) => theme.color.white};
  padding: 1rem;
  border-bottom-left-radius: 10px;
  border-left: 2px solid #aaa;
  border-bottom: 2px solid #aaa;

  /* Hide and show menu */
  translate: 100% 0;
  visibility: hidden;
  transition: all 0.25s ease-in-out;
  &.visible {
    visibility: visible;
    translate: 0 0;
  }

  /* Change padding for side menu */
  @media screen and (min-width: 700px) {
    top: 5.5rem;
    border-top-left-radius: 0px;
    border-top: 2px solid #aaa;
    padding: 0.5rem 1rem 0.75rem 1rem;
  }

  /* Add some padding */
  @media screen and (min-width: 1300px) {
    width: 17rem;
    /* padding-left: 3rem; */
  }

  /* Hide mobile nav */
  @media screen and (min-width: 1440px) {
    display: none;
  }

  .close-button-wrapper {
    position: absolute;
    cursor: pointer;
    top: 1rem;
    right: 0.75rem;
    @media screen and (min-width: 700px) {
      display: none;
    }
    svg {
      color: ${({ theme }) => theme.color.gray500};
      font-size: 2rem;
    }
  }
`;
export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  /* Position secondary list as part of primary one */
  & .secondary-menu {
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
  /* Add margin to all li   */
  * + * {
    margin-top: 0.5rem;
  }

  /* Hide news and home page  */
  @media screen and (min-width: 700px) {
    & > :nth-child(1),
    & > :nth-child(2) {
      display: none;
    }
  }
  @media screen and (min-width: 700px) {
    & > :nth-child(1),
    & > :nth-child(2) {
      display: none;
    }
  }
  /* Hide galery  */
  @media screen and (min-width: 900px) {
    & > :nth-child(3) {
      display: none;
    }
  }
  /* Hide secondary menu trigger  */
  @media screen and (min-width: 1300px) {
    & > :nth-child(4) {
      display: none;
    }
  }
`;
