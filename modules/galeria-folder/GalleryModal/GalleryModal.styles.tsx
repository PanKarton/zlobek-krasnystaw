import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .top-bar-wrapper {
    position: fixed;
    inset: 0 0 auto 0;
    background-color: ${({ theme }) => theme.color.contrastTransparent};
    display: flex;
    justify-content: space-between;
    padding-inline: 1rem;
    padding-block: 0.75rem;

    .counter-wrapper {
      background-color: ${({ theme }) => theme.color.contrastTransparent};
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.color.primary};
      font-family: var(--font-primary);
    }

    .close-button-wrapper {
      cursor: pointer;
      display: flex;
      align-items: center;

      svg {
        color: ${({ theme }) => theme.color.primary};
        font-size: ${({ theme }) => theme.fontSize.text2XL};
      }
    }
  }

  .main-img-wrapper {
    position: relative;
    width: 80vw;
    height: 80vh;
  }
`;

type Props = {
  isVisible?: boolean;
};

export const StyledArrowButton = styled.button<Props>`
  position: fixed;
  background-color: ${({ theme }) => theme.color.contrastTransparent};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  bottom: 0;
  width: 50%;
  height: 3rem;
  padding-block: 0.5rem;

  @media screen and (min-width: 62.5rem) {
    top: 50%;
    translate: 0 -50%;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  }

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.color.primaryTransparent};
    /* Hide arrow when isn't avaliable */
    display: ${({ isVisible }) => (isVisible ? 'inline' : 'none')};
    @media screen and (min-width: 62.5rem) {
      display: inline;
    }
    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  &.left {
    left: 0rem;
    @media screen and (min-width: 62.5rem) {
      left: 1rem;
    }
    svg {
      translate: -0.125rem 0.125rem;
    }
  }

  &.right {
    right: 0;
    @media screen and (min-width: 62.5rem) {
      right: 1rem;
    }
    svg {
      translate: 0.125rem 0.125rem;
    }
  }
`;

export const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  content: {
    backgroundColor: 'transparent',
    inset: 'auto',
    border: 'none',
    padding: '0',
    width: '80vw',
    height: '80vh',
  },
};
