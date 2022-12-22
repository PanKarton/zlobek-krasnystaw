import Image from 'next/image';
import React from 'react';
import { StyledCirculareWrapper } from './CircleBorderImage.styles';

type Props = {
  url: string;
  altText: string;
};

export const CircleBorderImage = ({ url, altText }: Props) => (
  <StyledCirculareWrapper>
    <div className="image-wrapper">
      <Image src={url} alt={altText} layout="fill" />
    </div>
  </StyledCirculareWrapper>
);
