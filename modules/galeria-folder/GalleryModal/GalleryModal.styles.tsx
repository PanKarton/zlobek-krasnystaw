import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .main-img-wrapper {
    position: relative;
    width: 80vw;
    height: 80vh;
  }
  .close-button-wrapper {
    position: fixed;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    svg {
      color: ${({ theme }) => theme.color.primary};
      font-size: 2rem;
    }
  }
`;

export const StyledArrowButton = styled.button`
  position: fixed;
  background-color: ${({ theme }) => theme.color.contrastTransparent};
  border: none;
  top: 50%;
  translate: 0 -50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  border-radius: 50%;

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.color.primaryTransparent};
  }

  &.left {
    left: 1rem;
    svg {
      translate: -0.125rem 0;
    }
  }

  &.right {
    right: 1rem;
    svg {
      translate: 0.125rem 0;
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
