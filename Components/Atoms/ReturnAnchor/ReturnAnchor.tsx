import Link from 'next/link';
import { StyledSpan } from './ReturnAnchor.styles';

type Props = {
  href: string;
};

export const ReturnAnchor = ({ href }: Props) => (
  <Link href={href} passHref>
    <a href="!#">
      <StyledSpan className="return-anchor">Cofnij</StyledSpan>
    </a>
  </Link>
);
