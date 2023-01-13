import Image from 'next/image';
import { StyledWrapper } from './ImageTile.styles';
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
  imgPath: string;
  altText: string;
  onClick?: () => void;
};

export const ImageTile = ({ imgPath, altText, onClick }: Props) => {
  return (
    <StyledWrapper onClick={onClick}>
      <Image src={imgPath} alt={altText} fill style={{ objectFit: 'cover' }} sizes="(max-width: 650px) 50vw, (max-width: 1550px) 360px), 270px" />
      <div className="hover-layer">
        <AiOutlineSearch />
      </div>
    </StyledWrapper>
  );
};
