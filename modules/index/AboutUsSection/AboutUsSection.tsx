import { CircleBorderImage } from 'modules/index/CircleBorderImage/CircleBorderImage';
import { MainSiteSectionHeading } from 'modules/index/MainSiteSectionHeading/MainSiteSectionHeading';
import { MainSiteSectionParagraph } from 'modules/index/MainSiteSectionParagraph/MainSiteSectionParagraph';
import { SnailIcon } from 'modules/index/SnailIcon/SnailIcon';
import { SunImage } from 'modules/index/SunImage/SunImage';
import Image from 'next/image';
import { StyledArticle, StyledWrapper, StyledWaveDivider } from './AboutUsSection.styles';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import grayWaveDivider from 'public/images/gray-wave.svg';
import happyKidImageOne from 'public/images/happy-kid2.jpg';
import happyKidImageTwo from 'public/images/happy-kid1.jpg';
import happyKidImageThree from 'public/images/happy-kid3.jpg';

export const AboutUsSection = () => (
  <SectionWithStars>
    <StyledWrapper>
      <div className="flex-wrapper">
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
          <CircleBorderImage image={happyKidImageOne} altText="Dziecko ukladajace klocki" />
          <CircleBorderImage image={happyKidImageTwo} altText="Uśmiechnięte dziecko jedzące posiłek" />
          <CircleBorderImage image={happyKidImageThree} altText="Dziecko cieszące się z zabawy klockami" />
          <div className="sun-wrapper">
            <SunImage />
          </div>
        </div>
      </div>
    </StyledWrapper>
    <StyledWaveDivider>
      <Image src={grayWaveDivider} alt="Szara fala ozdobna" fill sizes="100vw" />
    </StyledWaveDivider>
  </SectionWithStars>
);
