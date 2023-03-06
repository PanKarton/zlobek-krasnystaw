import { MainSiteSectionHeading } from 'modules/index/MainSiteSectionHeading/MainSiteSectionHeading';
import { MainSiteSectionParagraph } from 'modules/index/MainSiteSectionParagraph/MainSiteSectionParagraph';
import Image from 'next/image';
import { StyledArticle, StyledSection, WaveDivider, FloatingIconsContainer, FloatingIconWrapper } from './StaffSection.styles';
import floatingIconOne from 'public/images/floating-icon1.svg';
import floatingIconTwo from 'public/images/floating-icon2.svg';
import floatingIconThree from 'public/images/floating-icon3.svg';
import floatingIconFour from 'public/images/floating-icon4.svg';
import staffImage from 'public/images/staff.jpg';
import blueWaveDivider from 'public/images/blue-wave.svg';

export const StaffSection = () => {
  return (
    <StyledSection>
      <div className="max-width-1440">
        <div className="flex-wrapper">
          <FloatingIconsContainer>
            <FloatingIconWrapper>
              <Image src={floatingIconOne} alt="Półkole ozdobne" fill sizes="120px" />
            </FloatingIconWrapper>
            <FloatingIconWrapper>
              <Image src={floatingIconTwo} alt="Półkole ozdobne" fill sizes="120px" />
            </FloatingIconWrapper>
            <FloatingIconWrapper>
              <Image src={floatingIconThree} alt="Półkole ozdobne" fill sizes="120px" />
            </FloatingIconWrapper>
            <FloatingIconWrapper>
              <Image src={floatingIconFour} alt="Półkole ozdobne" fill sizes="120px" />
            </FloatingIconWrapper>
          </FloatingIconsContainer>
          <div className="staff-image-wrapper">
            <Image src={staffImage} alt="Opiekunka bawiąca się z dwójką dzieci" fill sizes="(max-width: 1550px) 550px, 700px" />
          </div>
          <StyledArticle>
            <div className="flex-wrapper">
              <MainSiteSectionHeading>Nasza kadra</MainSiteSectionHeading>
              <MainSiteSectionParagraph>To drużyna doświadczonych specjalistów doskonale rozumiejących potrzeby malucha.</MainSiteSectionParagraph>
              <MainSiteSectionParagraph>
                Skutecznie i z pasją nauczą jak radzić sobie z emocjami, zachęcą do odkrywania świata poprzez zabawę oraz zadbają o przyjazną i
                bezpieczną atmosferę w grupie.
              </MainSiteSectionParagraph>
            </div>
          </StyledArticle>
        </div>
      </div>
      <WaveDivider>
        <Image src={blueWaveDivider} alt="Niebieska fala dekoracyjna" fill sizes="100vw" />
      </WaveDivider>
    </StyledSection>
  );
};
