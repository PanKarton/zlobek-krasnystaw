import Link from 'next/link';
import React from 'react';
import { StyledNavSpan } from './NavLink.styles';

type Props = {
  direction: string;
  children: React.ReactNode;
};

const NavLink = ({ children, direction }: Props) => (
  <Link href={`${direction}`} passHref>
    <a>
      <StyledNavSpan>{children}</StyledNavSpan>
    </a>
  </Link>
);

export default NavLink;
