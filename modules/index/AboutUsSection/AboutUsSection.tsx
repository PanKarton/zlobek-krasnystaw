import { CircleBorderImage } from 'modules/index/CircleBorderImage/CircleBorderImage';
import { MainSiteSectionHeading } from 'modules/index/MainSiteSectionHeading/MainSiteSectionHeading';
import { MainSiteSectionParagraph } from 'modules/index/MainSiteSectionParagraph/MainSiteSectionParagraph';
import { SnailIcon } from 'modules/index/SnailIcon/SnailIcon';
import { StarsBackground } from 'Components/Atoms/StarsBackground/StarsBackground';
import { SunImage } from 'modules/index/SunImage/SunImage';
import Image from 'next/image';
import { StyledArticle, StyledSection } from './AboutUsSection.styles';

export const AboutUsSection = () => (
  <StyledSection>
    <div className="bottom-wave-wrapper">
      <Image src="/images/gray-wave.svg" alt="Szara fala ozdobna" layout="fill" />
    </div>
    <StarsBackground />
    <div className="flex-wrapper max-width-1440">
      <StyledArticle>
        <MainSiteSectionHeading>
          Czego nauczy się z nami <span className="text-pink">Twój maluch?</span>
        </MainSiteSectionHeading>
        <MainSiteSectionParagraph>
          Przede wszystkim panowania nad emocjami oraz poprawnego życia w społeczeństwie. Ponadto dokładamy wszelkich starań, aby zapewnić:
        </MainSiteSectionParagraph>
        <ul>
          <li>
            <SnailIcon />
            <MainSiteSectionParagraph>Domową i ciepłą atmosferę</MainSiteSectionParagraph>
          </li>
          <li>
            <SnailIcon />
            <MainSiteSectionParagraph>Prawidłowy rozwój psychomotoryczny i emocjonalno-społeczny</MainSiteSectionParagraph>
          </li>
          <li>
            <SnailIcon />
            <MainSiteSectionParagraph>Bezpieczną i przyjazną zabawę</MainSiteSectionParagraph>
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
