import Nav from 'Components/Molecules/Nav/Nav';
import Image from 'next/image';
import { StyledHeader } from './Header.styles';

const Header = props => (
  <StyledHeader>
    <div className="hero-image-wrapper">
      <Image
        priority
        src="/images/hero-image.jpg"
        alt="Dziewczynka w stroju astrunauty trzymająca roślinę"
        layout="fill"
        objectFit="cover"
        objectPosition="50%"
      />
    </div>
    <div className="max-width-wrapper">
      <Nav />
      <div className="hero-text">
        <h2>
          Zadbaj z nami o przyszłość <br /> <span className="text-pink">swojego dziecka!</span>
        </h2>
        <p>Zapraszamy dzieci w wieku od 1 do 3 lat!</p>
      </div>
    </div>
    <div className="bottom-wave-wrapper">
      <Image src="/images/hero-wave.svg" alt="Biała fala dekoracyjna" layout="fill" />
    </div>
  </StyledHeader>
);

export default Header;
