import Link from 'next/link';
import { StyledNavSpan } from './NavLink.styles';

const NavLink = ({ children, direction }) => (
  <Link href={`${direction}`} passHref>
    <a>
      <StyledNavSpan>{children}</StyledNavSpan>
    </a>
  </Link>
);

export default NavLink;
