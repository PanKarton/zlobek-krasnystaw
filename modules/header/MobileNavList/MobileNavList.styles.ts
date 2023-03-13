import styled from 'styled-components';

export const StyledWrapper = styled.section`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  max-height: 100vh;
  width: max(13rem, 80%);
  background-color: ${({ theme }) => theme.color.primary};
  padding-block: 1.5rem;
  padding-left: 1.5rem;
  border-left: 0.0625rem solid #aaa;
  overflow-y: scroll;

  /* Hide and show menu */
  translate: 100% 0;
  visibility: hidden;
  &.visible {
    transition: all 0.25s ease-in-out;
    visibility: visible;
    translate: 0 0;
  }

  /* Change padding for side menu */
  @media screen and (min-width: 46.875rem) {
    top: 5rem;
    padding: 0.5rem 1rem 1.25rem 1.5rem;
    border-bottom-left-radius: 0.3125rem;
    height: min-content;
    width: max(25%, 15rem);
    max-height: calc(100vh - 5rem);
    border-bottom: 0.0625rem solid #aaa;
    .close-button-wrapper {
      display: none;
    }
  }

  /* Hide mobile nav */
  @media screen and (min-width: 90rem) {
    display: none;
  }

  .close-button-wrapper {
    position: absolute;
    cursor: pointer;
    top: 1rem;
    right: 0.75rem;
    svg {
      color: ${({ theme }) => theme.color.contrast};
      font-size: ${({ theme }) => theme.fontSize.text3XL};
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
  @media screen and (min-width: 46.875rem) {
    & > :nth-child(1),
    & > :nth-child(2) {
      display: none;
    }
  }
  /* Hide galery  */
  @media screen and (min-width: 59.375rem) {
    & > :nth-child(3) {
      display: none;
    }
  }
  /* Hide secondary menu trigger  */
  @media screen and (min-width: 81.25rem) {
    & > :nth-child(4) {
      display: none;
    }
  }
`;
