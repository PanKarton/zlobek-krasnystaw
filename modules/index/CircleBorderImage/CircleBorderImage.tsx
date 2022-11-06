import Image from 'next/image';
import React from 'react';
import { StyledCirculareWrapper } from './CircleBorderImage.styles';

type Props = {
  url: string;
  alt: string;
};

export const CircleBorderImage = ({ url, alt }: Props) => (
  <StyledCirculareWrapper>
    <div className="image-wrapper">
      <Image src={url} alt={alt} layout="fill" />
    </div>
  </StyledCirculareWrapper>
);
