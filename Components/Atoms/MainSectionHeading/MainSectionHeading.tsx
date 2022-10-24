import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h3`
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.text3XL};
  line-height: ${({ theme }) => theme.lineHeight.text3XL};
  @media screen and (min-width: 1550px) {
    font-size: ${({ theme }) => theme.fontSize.text4XL};
    line-height: ${({ theme }) => theme.lineHeight.text4XL};
  }
  .text-pink {
    color: ${({ theme }) => theme.color.text.accentPrimary};
  }
`;

type Props = {
  children: ReactNode | string;
};

const MainSectionHeading = ({ children }: Props) => <StyledHeading>{children}</StyledHeading>;

export default MainSectionHeading;
