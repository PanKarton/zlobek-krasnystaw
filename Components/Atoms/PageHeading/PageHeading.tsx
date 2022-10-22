import React from 'react';
import { StyledPageHeading } from './PageHeading.styles';

type Props = {
  headingText: string;
  className?: string;
};

export const PageHeading = ({ headingText, className }: Props) => (
  <StyledPageHeading className={`${className} max-width-1440`}>{headingText}</StyledPageHeading>
);
