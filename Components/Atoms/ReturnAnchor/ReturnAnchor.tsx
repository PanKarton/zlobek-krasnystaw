import Link from 'next/link';
import { StyledSpan, StyledWrapper } from './ReturnAnchor.styles';
import { BiLeftArrowAlt } from 'react-icons/bi';

type Props = {
  href: string;
};

export const ReturnAnchor = ({ href }: Props) => (
  <Link href={href}>
    <StyledWrapper className="return-anchor">
      <BiLeftArrowAlt />
      <StyledSpan>Cofnij</StyledSpan>
    </StyledWrapper>
  </Link>
);
