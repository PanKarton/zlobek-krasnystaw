import Image from 'next/image';
import { StyledWrapper } from './ImageTile.styles';
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
  imgPath: string;
  altText: string;
};

export const ImageTile = ({ imgPath, altText = 'zdjecie' }: Props) => {
  return (
    <StyledWrapper>
      <Image src={imgPath} alt={altText} fill style={{ objectFit: 'cover' }} sizes="(max-width: 650px) 50vw, (max-width: 650px) 360px), 270px" />
      <div className="hover-layer">
        <AiOutlineSearch />
      </div>
    </StyledWrapper>
  );
};
