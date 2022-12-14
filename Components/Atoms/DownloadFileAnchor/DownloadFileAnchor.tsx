import { useState } from 'react';
import { BsDownload } from 'react-icons/bs';
import { SuccessCheck } from '../SuccessCheck/SuccessCheck';
import { StyledAnchor } from './DownloadFileAnchor.styles';

type Props = {
  children: string;
  href: string;
};

export const DownloadFileAnchor = ({ children, href }: Props) => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadCheck = () => {
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 2000);
  };

  return (
    <StyledAnchor href={href} download onClick={handleDownloadCheck}>
      {isDownloaded ? <SuccessCheck /> : <BsDownload />}
      <span>{children}</span>
    </StyledAnchor>
  );
};
