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
      .secondary-menu-trigger {
        padding-block: 1.75rem;
      }
    }
  }
`;
