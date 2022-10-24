import { ReactNode } from 'react';
import { StyledParagraph } from './MainSectionParagraph.styles';

type Props = {
  children: ReactNode | string;
};

const MainSectionParagraph = ({ children }: Props) => <StyledParagraph>{children}</StyledParagraph>;

export default MainSectionParagraph;
