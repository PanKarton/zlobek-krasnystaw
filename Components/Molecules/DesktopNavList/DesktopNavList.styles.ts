import styled from 'styled-components';

export const StyledWrapper = styled.section`
  display: none;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.color.white};
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
  border: 1px solid #aaa;

  /* Show bar */
  @media screen and (min-width: 700px) {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-left: 4rem;
  }

  /* Add  border radius*/
  @media screen and (min-width: 1440px) {
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
    justify-content: space-between;
    padding-inline: 6rem;
  }
`;

export const StyledList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &.left {
    gap: 2rem;
    /* Hide gallery */
    & > :nth-child(3) {
      display: none;
      /* Show galery  */
      @media screen and (min-width: 950px) {
        display: block;
      }
    }
    @media screen and (min-width: 1440px) {
      gap: 6.5rem;
    }
  }

  &.right {
    gap: 3rem;
    /* Hide all items */
    & > :nth-child(1),
    & > :nth-child(2),
    & > :nth-child(3) {
      display: none;
    }
    /* Show secondary menu trigger  */
    @media screen and (min-width: 1300px) {
      & > :nth-child(1) {
        display: block;
      }
    }

    @media screen and (min-width: 1440px) {
      /* Show rest of the bar, rodo and contact */
      & > :nth-child(2),
      & > :nth-child(3) {
        display: block;
      }
    }

    /* Secondary menu on hover */
    .secondary-menu,
    .secondary-menu > ul {
      position: relative;
      z-index: 2;
      &:hover > ul {
        scale: 1 1;
        translate: 0 0;
      }
      ul {
        display: flex;
        position: absolute;
        flex-direction: column;
        gap: 1.5rem;
        top: 2.875rem;
        left: -1.25rem;
        padding: 0 0 1.5rem 1.25rem;
        min-width: 13rem;
        border: 1px solid #aaa;
        border-top: none;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: ${({ theme }) => theme.color.white};
        scale: 1 0;
        z-index: 0;
        translate: 0 -50%;
        &:focus-within {
          scale: 1 1;
          translate: 0 0;
        }
      }
    }
  }
`;
