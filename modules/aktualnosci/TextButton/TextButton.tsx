import { LoadingSpinner } from 'Components/Atoms/LoadingSpinner/LoadingSpinner';
import { StyledButton } from './TextButton.styles';

type Props = {
  text: string;
  className?: string;
  handleClick: () => void;
  isLoading?: boolean;
};

export const TextButton = ({ text, className, handleClick, isLoading }: Props) => (
  <StyledButton className={className} onClick={handleClick} disabled={isLoading}>
    {isLoading ? <LoadingSpinner /> : text}
  </StyledButton>
);
