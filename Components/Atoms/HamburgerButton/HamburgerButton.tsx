import React from 'react';
import { StyledBurger } from './HamburgerButton.styles';

export type Props = {
  onClick: () => void;
  isActive: boolean;
};

const HamburgerButton = ({ onClick, isActive }: Props) => (
  <StyledBurger onClick={onClick} isActive={isActive} tabIndex={0} aria-label="Przycisk włączajacy i wyłączający menu">
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default HamburgerButton;
