import Image, { StaticImageData } from 'next/image';

import { StyledCirculareWrapper } from './CircleBorderImage.styles';

type Props = {
  image: StaticImageData;
  altText: string;
};

export const CircleBorderImage = ({ image, altText }: Props) => (
  <StyledCirculareWrapper>
    <div className="image-wrapper">
      <Image src={image} alt={altText} fill sizes="25vw" />
    </div>
  </StyledCirculareWrapper>
);
