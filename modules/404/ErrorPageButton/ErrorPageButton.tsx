import Link from 'next/link';
import { StyledLink } from './ErrorPageButton.styles';

export const ErrorPageButton = () => (
  <Link href="/" passHref>
    <StyledLink href="replace">
      <span>Strona główna</span>
    </StyledLink>
  </Link>
);
