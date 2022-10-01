import Image from 'next/image';
import styled from 'styled-components';
import TileTransparentLayer from '../TileTransparentLayer/TileTransparentLayer';

const StyledWrapper = styled.div`
  position: relative;
  width: calc(50% - 0.5rem);
  aspect-ratio: 225/315;
  /* Drag transparent layer when on hover */
  &:hover > .content-wrapper > p,
  &:hover > .content-wrapper > .curved-image-wrapper {
    translate: 0 -5%;
  }
  .main-image-wrapper {
    position: relative;
    height: 100%;
  }
  .content-wrapper {
    overflow: hidden;
    position: absolute;
    height: 100%;
    inset: 0;
    overflow-x: hidden;
    border-bottom: 3px solid ${({ borderColor }) => borderColor};
    p {
      position: absolute;
      width: 100%;
      height: 30%;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-primary);
      font-size: 2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.color.white};
      transition: translate 0.375s ease-in-out;
    }
    /* Transparent layer  */
    .curved-image-wrapper {
      position: absolute;
      bottom: -40%;
      width: 100%;
      aspect-ratio: 225/415;
      transition: translate 0.375s ease-in-out;
    }
  }
`;

const ImageTile = ({ src, alt, text, transparentColor, borderColor }) => (
  <StyledWrapper borderColor={borderColor}>
    <div className="main-image-wrapper">
      <Image src={src} alt={alt} layout="fill" />
    </div>
    <div className="content-wrapper">
      <div className="curved-image-wrapper">
        <TileTransparentLayer color={transparentColor} />
      </div>
      <p>{text}</p>
    </div>
  </StyledWrapper>
);

export default ImageTile;
