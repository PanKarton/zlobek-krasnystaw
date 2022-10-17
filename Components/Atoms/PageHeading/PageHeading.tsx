import React from 'react';
import { StyledPageHeading } from './PageHeading.styles';

type Props = {
  headingText: string;
};

export const PageHeading = ({ headingText }: Props) => <StyledPageHeading>{headingText}</StyledPageHeading>;
