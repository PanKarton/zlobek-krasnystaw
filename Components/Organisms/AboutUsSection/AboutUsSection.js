import CircleBorderImage from 'Components/Atoms/CircleBorderImage/CircleBorderImage';
import SnailIcon from 'Components/Atoms/SnailIcon/SnailIcon';
import SunImage from 'Components/Atoms/SunImage/SunImage';
import Image from 'next/image';
import { StyledArticle, StyledSection } from './AboutUsSection.styles';

const AboutUsSection = props => (
  <StyledSection>
    <div className="bottom-wave-wrapper">
      <Image src="/images/gray-wave.svg" alt="Szara fala ozdobna" layout="fill" />
    </div>
    <div className="stars-background-wrapper">
      <Image
        src="/images/stars-background.svg"
        alt="Tło sekcji z szarymi gwiazdami"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="flex-wrapper max-width">
      <StyledArticle>
        <h3>
          Sed ut perspiciatis unde <span className="text-pink">omnis iste</span>
        </h3>
        <p className="about-us-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li>
            <SnailIcon />
            <p className="about-us-paragraph  about-us-paragraph--small">
              Nemo enim ipsam voluptatem.
            </p>
          </li>
          <li>
            <div className="snail-image-wrapper">
              <Image src="/images/snail.svg" alt="Różowy ślimak" layout="fill" />
            </div>
            <p className="about-us-paragraph  about-us-paragraph--small">
              Nemo enim ipsam voluptatem.
            </p>
          </li>
          <li>
            <div className="snail-image-wrapper">
              <Image src="/images/snail.svg" alt="Różowy ślimak" layout="fill" />
            </div>
            <p className="about-us-paragraph  about-us-paragraph--small">
              Nemo enim ipsam voluptatem.
            </p>
          </li>
        </ul>
      </StyledArticle>
      <div className="images-wrapper">
        <CircleBorderImage
          url="/images/happy-kid3.jpg"
          alt="Dziecko cieszące się z zabawy klockami"
        />
        <CircleBorderImage
          url="/images/happy-kid1.jpg"
          alt="Uśmiechnięte dziecko jedzące posiłek"
        />
        <CircleBorderImage url="/images/happy-kid2.jpg" alt="Dziecko ukladajace klocki" />
        <div className="sun-wrapper">
          <SunImage />
        </div>
      </div>
    </div>
  </StyledSection>
);

export default AboutUsSection;
