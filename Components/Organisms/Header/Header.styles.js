import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  width: 100vw;
  height: 771px;
  @media screen and (max-width: 700px) {
    height: 500px;
  }
  .hero-image-wrapper {
    z-index: -1;
  }
  .wave-wrapper {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    aspect-ratio: 17.25;
    @media screen and (min-width: 700px) {
      bottom: -2px;
    }
  }
`;
