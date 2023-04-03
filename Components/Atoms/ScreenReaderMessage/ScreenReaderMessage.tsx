import { StyledSpan } from './ScreenReaderMessage.styles';

type Props = {
  children: String;
};

export const ScreenReaderMessage = ({ children }: Props) => {
  return <StyledSpan>{children}</StyledSpan>;
};
