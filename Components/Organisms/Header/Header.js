import Nav from 'Components/Molecules/Nav/Nav';
import Image from 'next/image';
import { StyledHeader } from './Header.styles';

const Header = props => (
  <StyledHeader>
    <Nav />
    <div className="hero-image-wrapper">
      <Image
        priority
        src="/images/hero-image.png"
        alt="Dziewczynka w stroju astrunauty trzymająca roślinę"
        layout="fill"
        objectFit="cover"
        objectPosition="75%"
      />
    </div>
    <div className="wave-wrapper">
      <Image priority src="/images/hero-wave.svg" alt="Biała fala dekoracyjna" layout="fill" />
    </div>
  </StyledHeader>
);

export default Header;
