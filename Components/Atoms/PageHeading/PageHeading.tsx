import React from 'react';
import { StyledPageHeading } from './PageHeading.styles';

type Props = {
  headingText: string;
};

export const PageHeading: React.FC<Props> = ({ headingText }) => (
  <StyledPageHeading>{headingText}</StyledPageHeading>
);
