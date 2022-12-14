import styled from 'styled-components';

export const StyledWrapper = styled.section`
  display: none;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.color.primary};

  /* Show bar */
  @media screen and (min-width: 46.875rem) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    padding-right: 2rem;
  }
  @media screen and (min-width: 81.25rem) {
    padding-right: 4rem;
  }

  /* Add  border radius*/
  @media screen and (min-width: 90rem) {
    border-radius: 620rem;
    justify-content: space-between;
    padding-inline: 6rem;
    border: 0.0625rem solid #aaa;
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
      @media screen and (min-width: 59.375rem) {
        display: block;
      }
    }
    @media screen and (min-width: 90rem) {
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
    @media screen and (min-width: 81.25rem) {
      & > :nth-child(1) {
        display: block;
      }
    }

    @media screen and (min-width: 90rem) {
      /* Show rest of the bar, rodo and contact */
      & > :nth-child(2),
      & > :nth-child(3) {
        display: block;
      }
    }

    /* Secondary menu on hover */
    .secondary-menu {
      position: relative;
      z-index: 2;
      &:hover > ul {
        scale: 1 1;
        translate: 0 0;
      }
      .secondary-menu-trigger {
        padding-block: 1.75rem;
      }
      ul {
        display: flex;
        position: absolute;
        flex-direction: column;
        gap: 1.5rem;
        top: 3.125rem;
        left: -1.25rem;
        padding: 0 0 1.5rem 1.25rem;
        min-width: 13rem;
        border: 0.0625rem solid #aaa;
        border-top: none;
        border-bottom-left-radius: 0.625rem;
        border-bottom-right-radius: 0.625rem;
        background-color: ${({ theme }) => theme.color.primary};
        scale: 1 0;
        z-index: 0;
        translate: 0 -50%;
        @media screen and (min-width: 90rem) {
          top: 2.875rem;
        }
        &:focus-within {
          scale: 1 1;
          translate: 0 0;
        }
      }
    }
  }
`;
