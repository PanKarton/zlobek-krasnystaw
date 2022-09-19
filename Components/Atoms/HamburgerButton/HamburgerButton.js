import { StyledBurger } from './HamburgerButton.styles';

const HamburgerButton = ({ onClick, isActive }) => (
  <StyledBurger onClick={onClick} isActive={isActive}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default HamburgerButton;
