import { StyledWrapper } from './CopyToClipBoardWrapper.styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useCopyToClipboard } from './useCopyToClipboard';

type Props = {
  text: string;
  accountNumber: string;
};

export const CopyToClipBoardWrapper = ({ text, accountNumber }: Props) => {
  const { isCopied, handleCopyConfirmation } = useCopyToClipboard();

  return (
    <StyledWrapper>
      <span>
        <strong>{text}</strong>
      </span>
      <CopyToClipboard text={accountNumber} onCopy={handleCopyConfirmation}>
        <button>{isCopied ? 'Skopiowano' : 'Kopiuj'}</button>
      </CopyToClipboard>
    </StyledWrapper>
  );
};
