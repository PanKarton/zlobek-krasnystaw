import Nav from 'Components/Molecules/Nav/Nav';
import Image from 'next/image';
import styled from 'styled-components';

const StyledHeader = styled.header`
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
    bottom: 0;
    left: 0;
    right: 0;
    /* height: clamp(1px, 5.8vw, 158px); */
    height: 160px;
  }
`;

const Header = props => (
  <StyledHeader>
    <Nav />
    <div className="hero-image-wrapper">
      <Image
        priority
        src="/images/hero-image1.jpg"
        alt="Dziewczynka w stroju astrunauty trzymająca roślinę"
        layout="fill"
        objectFit="cover"
        objectPosition="75%"
      />
    </div>
    <div className="wave-wrapper">
      <Image
        priority
        src="/images/hero-wave.svg"
        alt="Biała fala dekoracyjna"
        // DOKONCZYC FALE
      />
    </div>
  </StyledHeader>
);

export default Header;
