import { ReactNode } from 'react';
import { StyledButton } from './TextButton.styles';

type Props = {
  children: ReactNode | string;
  className?: string;
};

export const TextButton = ({ children, className }: Props) => <StyledButton className={className}>{children}</StyledButton>;
