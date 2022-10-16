import Link from 'next/link';
import React from 'react';
import { StyledNavSpan } from './NavLink.styles';

type Props = {
  direction: string;
  children: React.ReactNode;
};

const NavLink: React.FC<Props> = ({ children, direction }) => (
  <Link href={`${direction}`} passHref>
    <a>
      <StyledNavSpan>{children}</StyledNavSpan>
    </a>
  </Link>
);

export default NavLink;
