import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  translate: 0 -50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  @media screen and (min-width: 700px) {
    z-index: 10;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.color.white};

    @media screen and (min-width: 700px) {
      background: ${({ theme }) => theme.color.gray500};
    }
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
    transition: all 0.125s linear;

    :first-child {
      rotate: ${({ isActive }) => (isActive ? '45deg' : '0')};
    }

    :nth-child(2) {
      opacity: ${({ isActive }) => (isActive ? '0' : '1')};
      translate: ${({ isActive }) => (isActive ? '25% 0' : '')};
      scale: ${({ isActive }) => (isActive ? '0 1' : '1 1')};
    }

    :nth-child(3) {
      rotate: ${({ isActive }) => (isActive ? '-45deg' : '0')};
    }
  }
`;
