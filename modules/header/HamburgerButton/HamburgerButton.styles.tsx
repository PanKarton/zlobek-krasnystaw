import { Props as HamburgerProps } from './HamburgerButton';
import styled from 'styled-components';

export const StyledBurger = styled.button<HamburgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  @media screen and (min-width: 43.75rem) {
    top: 50%;
    z-index: 10;
  }

  span {
    display: block;
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.color.contrast};
    border-radius: 0.625rem;
    position: relative;
    transform-origin: 0.0625rem;
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
