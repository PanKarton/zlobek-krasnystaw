import { Nav } from 'modules/header/Nav/Nav';
import Image from 'next/image';
import { StyledHeader, WaveDivider, HeroText, HeroImage, SkipAnchor } from './Header.styles';
import primaryHeroImage from 'public/images/hero-image.jpg';
import secondaryHeroImage from 'public/images/hero-image-secondary.jpg';
import whiteWaveDivider from 'public/images/hero-wave-white.png';

export type Props = {
  isSecondary?: boolean;
};

export const Header = ({ isSecondary }: Props) => {
  const heroImageURL = isSecondary ? secondaryHeroImage : primaryHeroImage;

  return (
    <StyledHeader isSecondary={isSecondary}>
      <SkipAnchor>
        <a href="#main-content">Przejdź do głównej treści</a>
      </SkipAnchor>
      {isSecondary || (
        <HeroText isSecondary={isSecondary}>
          <h2>
            Zadbaj z nami o <br /> przyszłość <br /> <span className="text-pink">swojego dziecka!</span>
          </h2>
          <p>Zapraszamy dzieci w wieku od 1 do 3 lat!</p>
        </HeroText>
      )}
      <HeroImage isSecondary={isSecondary}>
        <Image
          priority
          src={heroImageURL}
          alt="Chłopiec bawiący się klockami na stole"
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 100%' }}
        />
      </HeroImage>
      <WaveDivider>
        <Image src={whiteWaveDivider} alt="Biała fala dekoracyjna" fill sizes="100vw" />
      </WaveDivider>
      <div className="max-width-1440">
        <Nav />
      </div>
    </StyledHeader>
  );
};
