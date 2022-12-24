import Link from 'next/link';
import { StyledSpan } from './GoToMainPageLink.styles';

export const GoToMainPageLink = () => (
  <Link href="/">
    <StyledSpan>Strona główna</StyledSpan>
  </Link>
);
