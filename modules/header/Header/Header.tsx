import { Nav } from 'modules/header/Nav/Nav';
import Image from 'next/image';
import { StyledHeader } from './Header.styles';

export type Props = {
  isSecondary?: boolean;
};

export const Header = ({ isSecondary }: Props) => {
  const heroImageURL = isSecondary ? '/images/hero-image-secondary.jpg' : '/images/hero-image.jpg';

  return (
    <StyledHeader isSecondary={isSecondary}>
      <div className="max-width-1440">
        <Nav />
      </div>
      <div className="skip-button-wrapper">
        <a href="#main-content">Przejdź do głównej treści</a>
      </div>
      {isSecondary || (
        <div className="hero-text-wrapper">
          <h2>
            Zadbaj z nami o <br /> przyszłość <br /> <span className="text-pink">swojego dziecka!</span>
          </h2>
          <p>Zapraszamy dzieci w wieku od 1 do 3 lat!</p>
        </div>
      )}
      <div className="hero-image-wrapper">
        <Image
          priority
          src={heroImageURL}
          alt="Chłopiec bawiący się klockami na stole"
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 100%' }}
        />
      </div>
      <div className="bottom-wave-wrapper">
        <Image src="/images/hero-wave-test.png" alt="Biała fala dekoracyjna" fill />
      </div>
    </StyledHeader>
  );
};
