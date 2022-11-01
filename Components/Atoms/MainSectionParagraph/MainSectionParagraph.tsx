import { ReactNode } from 'react';
import { StyledParagraph } from './MainSectionParagraph.styles';

type Props = {
  children: ReactNode | string;
};

export const MainSectionParagraph = ({ children }: Props) => <StyledParagraph>{children}</StyledParagraph>;
