import { ReactNode } from 'react';
import { StyledHeading } from './MainSectionHeading.styles';

type Props = {
  children: ReactNode | string;
};

export const MainSectionHeading = ({ children }: Props) => <StyledHeading>{children}</StyledHeading>;
