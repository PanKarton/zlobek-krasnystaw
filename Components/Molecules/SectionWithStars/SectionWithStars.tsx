import { StarsBackground } from 'Components/Atoms/StarsBackground/StarsBackground';
import { ReactNode } from 'react';
import { StyledSection } from './SectionWithStars.styles';

type Props = {
  hasNoMarginTop?: boolean;
  children: ReactNode;
};

export const SectionWithStars = ({ children, hasNoMarginTop }: Props) => (
  <StyledSection className={hasNoMarginTop ? 'no-margin-top' : ''}>
    <StarsBackground />
    <div className="max-width-1440">{children}</div>
  </StyledSection>
);
