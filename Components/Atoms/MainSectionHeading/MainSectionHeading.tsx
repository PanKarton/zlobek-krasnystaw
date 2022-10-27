import { ReactNode } from 'react';
import { StyledHeading } from './MainSectionHeading.styles';

type Props = {
  children: ReactNode | string;
};

const MainSectionHeading = ({ children }: Props) => <StyledHeading>{children}</StyledHeading>;

export default MainSectionHeading;
