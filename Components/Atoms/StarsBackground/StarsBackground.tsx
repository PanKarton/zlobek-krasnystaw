import { ReactNode } from 'react';
import starsBackground from '../../../public/images/stars-background.svg';
import { StyledDiv } from './StarsBackground.styles';

type Props = {
  children?: ReactNode;
};

export const StarsBackground = ({ children }: Props) => <StyledDiv style={{ backgroundImage: `url(${starsBackground.src})` }}>{children}</StyledDiv>;
