import styled from 'styled-components';

export const StyledWrapper = styled.section`
  display: none;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.color.white};
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;

  /* Show bar */
  @media screen and (min-width: 700px) {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
  }
`;

export const StyledList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding-left: 2rem;
  gap: 2rem;
  width: 100%;
  /* Hide all items except for two first */
  & > :nth-child(3),
  & > :nth-child(4),
  & > :nth-child(5),
  & > :nth-child(6) {
    display: none;
  }

  /* Show galery  */
  @media screen and (min-width: 900px) {
    & > :nth-child(3) {
      display: block;
    }
  }
  /* Show secondary menu trigger  */
  @media screen and (min-width: 1300px) {
    & > :nth-child(4) {
      display: block;
    }
  }

  .secondary-menu {
    position: relative;
    &:hover > ul {
      scale: 1 1;
      translate: 0 0;
    }
    ul {
      background-color: white;
      display: flex;
      position: absolute;
      top: 2rem;
      left: -0.75rem;
      gap: 1rem;
      padding: 1rem 1.5rem 1rem 0.75rem;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      flex-direction: column;
      scale: 1 0;
      translate: 0 -50%;
    }
  }

  @media screen and (min-width: 1440px) {
    /* Show rest of the bar, rodo and contact */
    & > :nth-child(5),
    & > :nth-child(6) {
      display: block;
    }
    & > :nth-child(1),
    & > :nth-child(2) {
      margin-right: 4rem;
    }
    justify-content: center;
    padding-inline: 5rem;
    .gallery {
      margin-right: auto;
    }
  }
`;
