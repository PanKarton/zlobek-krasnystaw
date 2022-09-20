import { StyledBurger } from './HamburgerButton.styles';

const HamburgerButton = ({ onClick, isActive }) => (
  <StyledBurger onClick={onClick} isActive={isActive} tabIndex="0">
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default HamburgerButton;
