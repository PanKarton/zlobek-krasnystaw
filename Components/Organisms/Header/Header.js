import Nav from 'Components/Molecules/Nav/Nav';
import Image from 'next/image';
import { StyledHeader } from './Header.styles';
import heroImage from '../../../public/images/hero-image2.jpg';

const Header = props => (
  <StyledHeader>
    <Nav />
    <div className="hero-image-wrapper">
      <Image
        placeholder="blur"
        blurDataURL={heroImage}
        priority
        src={heroImage}
        alt="Dziewczynka w stroju astrunauty trzymająca roślinę"
        layout="fill"
        objectFit="cover"
        objectPosition="75%"
      />
    </div>
    <div className="hero-text max-width">
      <h2>
        Zadbaj z nami o przyszłość <br /> <span className="text-pink">swojego dziecka!</span>
      </h2>
      <p>Zapraszamy dzieci w wieku od 1 do 3 lat!</p>
    </div>
    <div className="wave-wrapper">
      <Image src="/images/hero-wave.svg" alt="Biała fala dekoracyjna" layout="fill" />
    </div>
  </StyledHeader>
);

export default Header;
