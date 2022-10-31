import { ReactNode } from 'react';
import styled from 'styled-components';
import starsBackground from '../../../public/images/stars-background.svg';

const StyledDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 110%;
  z-index: -1;
`;

type Props = {
  children?: ReactNode;
};

const StarsBackground = ({ children }: Props) => <StyledDiv style={{ backgroundImage: `url(${starsBackground.src})` }}>{children}</StyledDiv>;

export default StarsBackground;
