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
          Czego nauczy się z nami <span className="text-pink">Twój maluch?</span>
        </h3>
        <p className="about-us-paragraph">
          Przede wszystkim panowania nad emocjami oraz poprawnego życia w społeczeństwie. Ponadto
          dokładamy wszelkich starań, aby zapewnić:
        </p>
        <ul>
          <li>
            <div className="snail-image-wrapper">
              <Image src="/images/snail.svg" alt="Różowy ślimak" layout="fill" />
            </div>
            <p className="about-us-paragraph  about-us-paragraph--small">
              Domową i ciepłą atmosferę
            </p>
          </li>
          <li>
            <div className="snail-image-wrapper">
              <Image src="/images/snail.svg" alt="Różowy ślimak" layout="fill" />
            </div>
            <p className="about-us-paragraph  about-us-paragraph--small">
              Prawidłowy rozwój psychomotoryczny i emocjonalno-społeczny
            </p>
          </li>
          <li>
            <div className="snail-image-wrapper">
              <Image src="/images/snail.svg" alt="Różowy ślimak" layout="fill" />
            </div>
            <p className="about-us-paragraph  about-us-paragraph--small">
              Bezpieczną i przyjazną zabawę
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
