import Link from 'next/link';
import React from 'react';
import { StyledNavSpan } from './NavLink.styles';

type Props = {
  direction: string;
  children: React.ReactNode;
  hasNarrowHitbox?: boolean;
};

const NavLink = ({ children, direction, hasNarrowHitbox }: Props) => (
  <Link href={`/${direction}`} passHref>
    <a>
      <StyledNavSpan hasNarrowHitbox={hasNarrowHitbox}>{children}</StyledNavSpan>
    </a>
  </Link>
);

export default NavLink;
