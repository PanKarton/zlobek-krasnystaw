import Link from 'next/link';
import { StyledLink } from './GoToMainPageLink.styles';

export const GoToMainPageLink = () => (
  <Link href="/" passHref>
    <StyledLink href="replace">
      <span>Strona główna</span>
    </StyledLink>
  </Link>
);
