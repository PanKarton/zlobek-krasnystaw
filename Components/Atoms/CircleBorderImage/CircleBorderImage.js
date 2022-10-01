import Image from 'next/image';
import { StyledCirculareWrapper } from './CircleBorderImage.styles';

const CircleBorderImage = ({ url, alt }) => (
  <StyledCirculareWrapper>
    <div className="image-wrapper">
      <Image src={url} alt={alt} layout="fill" />
    </div>
  </StyledCirculareWrapper>
);

export default CircleBorderImage;
