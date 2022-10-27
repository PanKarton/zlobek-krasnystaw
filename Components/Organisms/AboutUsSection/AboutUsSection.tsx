import CircleBorderImage from 'Components/Atoms/CircleBorderImage/CircleBorderImage';
import MainSectionHeading from 'Components/Atoms/MainSectionHeading/MainSectionHeading';
import MainSectionParagraph from 'Components/Atoms/MainSectionParagraph/MainSectionParagraph';
import SnailIcon from 'Components/Atoms/SnailIcon/SnailIcon';
import SunImage from 'Components/Atoms/SunImage/SunImage';
import Image from 'next/image';
import { StyledArticle, StyledSection } from './AboutUsSection.styles';

const AboutUsSection = () => (
  <StyledSection>
    <div className="bottom-wave-wrapper">
      <Image src="/images/gray-wave.svg" alt="Szara fala ozdobna" layout="fill" />
    </div>
    <div className="stars-background-wrapper">
      <Image src="/images/stars-background.svg" alt="Tło sekcji z szarymi gwiazdami" layout="fill" objectFit="cover" />
    </div>
    <div className="flex-wrapper max-width-1440">
      <StyledArticle>
        <MainSectionHeading>
          Czego nauczy się z nami <span className="text-pink">Twój maluch?</span>
        </MainSectionHeading>
        <MainSectionParagraph>
          Przede wszystkim panowania nad emocjami oraz poprawnego życia w społeczeństwie. Ponadto dokładamy wszelkich starań, aby zapewnić:
        </MainSectionParagraph>
        <ul>
          <li>
            <SnailIcon />
            <MainSectionParagraph>Domową i ciepłą atmosferę</MainSectionParagraph>
          </li>
          <li>
            <SnailIcon />
            <MainSectionParagraph>Prawidłowy rozwój psychomotoryczny i emocjonalno-społeczny</MainSectionParagraph>
          </li>
          <li>
            <SnailIcon />
            <MainSectionParagraph>Bezpieczną i przyjazną zabawę</MainSectionParagraph>
          </li>
        </ul>
      </StyledArticle>
      <div className="images-wrapper">
        <CircleBorderImage url="/images/happy-kid3.jpg" alt="Dziecko cieszące się z zabawy klockami" />
        <CircleBorderImage url="/images/happy-kid1.jpg" alt="Uśmiechnięte dziecko jedzące posiłek" />
        <CircleBorderImage url="/images/happy-kid2.jpg" alt="Dziecko ukladajace klocki" />
        <div className="sun-wrapper">
          <SunImage />
        </div>
      </div>
    </div>
  </StyledSection>
);

export default AboutUsSection;
