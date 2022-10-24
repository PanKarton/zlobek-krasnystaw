import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-family: var(--font-primary);
  font-size: ${({ theme }) => theme.fontSize.textBase};
  line-height: ${({ theme }) => theme.lineHeight.textLG};
  font-weight: 500;
  @media screen and (min-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.textLG};
    line-height: ${({ theme }) => theme.lineHeight.text2XL};
  }
  @media screen and (min-width: 1550px) {
    font-size: ${({ theme }) => theme.fontSize.textXL};
    line-height: ${({ theme }) => theme.lineHeight.text4XL};
  }
`;

type Props = {
  children: ReactNode | string;
};

const MainSectionParagraph = ({ children }: Props) => <StyledParagraph>{children}</StyledParagraph>;

export default MainSectionParagraph;
