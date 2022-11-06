import { ReactNode } from 'react';
import { StyledParagraph } from './MainSiteSectionParagraph.styles';

type Props = {
  children: ReactNode | string;
};

export const MainSiteSectionParagraph = ({ children }: Props) => <StyledParagraph>{children}</StyledParagraph>;
