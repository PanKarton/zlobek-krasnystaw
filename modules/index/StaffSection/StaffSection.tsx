import { MainSiteSectionHeading } from 'modules/index/MainSiteSectionHeading/MainSiteSectionHeading';
import { MainSiteSectionParagraph } from 'modules/index/MainSiteSectionParagraph/MainSiteSectionParagraph';
import Image from 'next/image';
import { StyledArticle, StyledSection } from './StaffSection.styles';

export const StaffSection = () => {
  return (
    <StyledSection>
      <div className="max-width-1440">
        <div className="flex-wrapper">
          <div className="floating-icons-container">
            <div className="floating-icon-wrapper">
              <Image src="/images/floating-icon1.svg" alt="Półkole ozdobne" layout="fill" />
            </div>
            <div className="floating-icon-wrapper">
              <Image src="/images/floating-icon2.svg" alt="Półkole ozdobne" layout="fill" />
            </div>
            <div className="floating-icon-wrapper">
              <Image src="/images/floating-icon5.svg" alt="Półkole ozdobne" layout="fill" />
            </div>
            <div className="floating-icon-wrapper">
              <Image src="/images/floating-icon4.svg" alt="Półkole ozdobne" layout="fill" />
            </div>
          </div>
          <div className="staff-image-wrapper">
            <Image src="/images/staff.jpg" alt="Opiekunka bawiąca się z dwójką dzieci" layout="fill" />
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
      <div className="bottom-waves-wrapper">
        <Image src="/images/blue-wave.svg" alt="Niebieska fala dekoracyjna" layout="fill" />
      </div>
    </StyledSection>
  );
};
