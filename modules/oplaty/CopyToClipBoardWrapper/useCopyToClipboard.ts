import { useState } from 'react';

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyConfirmation = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return { isCopied, handleCopyConfirmation };
};
