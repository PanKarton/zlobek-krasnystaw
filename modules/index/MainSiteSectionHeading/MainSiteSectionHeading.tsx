import { ReactNode } from 'react';
import { StyledHeading } from './MainSiteSectionHeading.styles';

type Props = {
  children: ReactNode | string;
};

export const MainSiteSectionHeading = ({ children }: Props) => <StyledHeading>{children}</StyledHeading>;
