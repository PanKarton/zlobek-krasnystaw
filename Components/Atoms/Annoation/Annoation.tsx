import { BsQuestionCircle } from 'react-icons/bs';
import { StyledMessage, StyledWrapper } from './Annoation.styles';

type Props = {
  message: string;
  isPink?: boolean;
};

export const Annoation = ({ message, isPink }: Props) => {
  return (
    <StyledWrapper isPink={isPink}>
      <BsQuestionCircle />
      <StyledMessage>{message}</StyledMessage>
    </StyledWrapper>
  );
};
