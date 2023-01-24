import React from 'react';
import { ReturnAnchor } from '../ReturnAnchor/ReturnAnchor';
import { StyledPageHeading, StyledWrapper } from './PageHeading.styles';

type Props = {
  headingText: string;
  className?: string;
  returnHref?: string;
};

export const PageHeading = ({ headingText, className, returnHref }: Props) => {
  return (
    <StyledWrapper className="max-width-1440">
      <StyledPageHeading className={className}>{headingText}</StyledPageHeading>
      {returnHref ? <ReturnAnchor href={returnHref} /> : null}
    </StyledWrapper>
  );
};
