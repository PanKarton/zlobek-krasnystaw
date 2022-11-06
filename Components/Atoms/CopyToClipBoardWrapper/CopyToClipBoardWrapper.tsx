import { StyledWrapper } from './CopyToClipBoardWrapper.styles';

type Props = {
  text: string;
};

export const CopyToClipBoardWrapper = ({ text }: Props) => (
  <StyledWrapper>
    <span>
      <strong>{text}</strong>
    </span>
    <button>Kopiuj</button>
  </StyledWrapper>
);
