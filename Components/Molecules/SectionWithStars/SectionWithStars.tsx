import { StarsBackground } from 'Components/Atoms/StarsBackground/StarsBackground';
import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  position: relative;
  margin-top: 2rem;
`;

type Props = {
  children: ReactNode;
};

export const SectionWithStars = ({ children }: Props) => (
  <StyledSection>
    <StarsBackground />
    <div className="max-width-1440">{children}</div>
  </StyledSection>
);
