import Link from 'next/link';
import React from 'react';
import { StyledPageHeading, StyledWrapper } from './PageHeading.styles';

type Props = {
  headingText: string;
  className?: string;
  returnHref?: string;
};

export const PageHeading = ({ headingText, className, returnHref }: Props) => {
  return (
    <StyledWrapper className="max-width-1440">
      {returnHref ? (
        <Link href={returnHref} passHref>
          <a href="!#">
            <span>Cofnij</span>
          </a>
        </Link>
      ) : null}
      <StyledPageHeading className={className}>{headingText}</StyledPageHeading>
    </StyledWrapper>
  );
};
