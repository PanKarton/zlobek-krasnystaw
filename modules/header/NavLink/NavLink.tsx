import Link from 'next/link';

import { StyledNavSpan } from './NavLink.styles';

type Props = {
  direction: string;
  children: React.ReactNode;
  hasNarrowHitbox?: boolean;
};

export const NavLink = ({ children, direction, hasNarrowHitbox }: Props) => (
  <Link href={`/${direction}`}>
    <StyledNavSpan hasNarrowHitbox={hasNarrowHitbox}>{children}</StyledNavSpan>
  </Link>
);
