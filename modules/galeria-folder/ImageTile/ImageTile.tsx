import Image from 'next/image';
import { StyledWrapper } from './ImageTile.styles';
import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
  imgPath: string;
  altText: string;
};

export const ImageTile = ({ imgPath, altText }: Props) => {
  return (
    <StyledWrapper>
      <Image src={imgPath} alt={altText} layout="fill" objectFit="cover" />
      <div className="hover-layer">
        <AiOutlineSearch />
      </div>
    </StyledWrapper>
  );
};
