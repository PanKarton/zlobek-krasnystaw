import { ReactNode } from 'react';
import starsBackground from '../../../public/images/stars-background.svg';

type Props = {
  children: ReactNode;
};

const StarsBackground = ({ children }: Props) => <div style={{ backgroundImage: `url(${starsBackground.src})` }}>{children}</div>;

export default StarsBackground;
