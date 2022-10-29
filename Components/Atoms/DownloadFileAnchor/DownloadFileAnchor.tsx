import { useState } from 'react';
import { BsDownload } from 'react-icons/bs';
import SuccessCheck from '../SuccessCheck/SuccessCheck';
import { StyledAnchor } from './DownloadFileAnchor.styles';

type Props = {
  children: string;
  href: string;
};

const DownloadFileAnchor = ({ children, href }: Props) => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadCheck = () => setIsDownloaded(true);

  return (
    <StyledAnchor href={href} download onClick={handleDownloadCheck}>
      {isDownloaded ? <SuccessCheck /> : <BsDownload />}
      <span>{children}</span>
    </StyledAnchor>
  );
};

export default DownloadFileAnchor;
