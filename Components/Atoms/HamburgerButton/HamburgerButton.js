import { StyledBurger } from './HamburgerButton.styles';

const HamburgerButton = ({ onClick, isActive }) => (
  <StyledBurger
    onClick={onClick}
    isActive={isActive}
    tabIndex="0"
    aria-label="Przycisk włączajacy i wyłączający menu"
  >
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default HamburgerButton;
