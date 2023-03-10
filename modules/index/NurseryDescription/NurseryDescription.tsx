import { MainSiteSectionHeading } from 'modules/index/MainSiteSectionHeading/MainSiteSectionHeading';
import { MainSiteSectionParagraph } from 'modules/index/MainSiteSectionParagraph/MainSiteSectionParagraph';
import Image from 'next/image';
import { StyledArticle, StyledSection } from './NurseryDescription.styles';
import solarSystemImage from 'public/images/description-solar-system.png';

export const NurseryDescription = () => {
  return (
    <StyledSection>
      <div className="max-width-1440">
        <div className="flex-wrapper">
          <StyledArticle>
            <div className="flex-wrapper">
              <MainSiteSectionHeading>O nas słów kilka</MainSiteSectionHeading>
              <MainSiteSectionParagraph>
                Zabawę z Waszymi pociechami zaczęliśmy już 1978 roku, co pozwoliło nam zdobyć doświadczenie, dzięki któremu dziś możemy zadbać o
                prawidłowy rozwój i bezpieczeństwo najmłodszych.
              </MainSiteSectionParagraph>
              <MainSiteSectionParagraph>
                Mnóstwo zieleni, indywidualny dla każdej grupy kompleks w postaci bogato i odpowiednio do wieku wyposażonej sali zabaw, sypialni,
                jadalni oraz łazienki; własny plac zabaw oraz ogrodzony taras dla najmłodszej grupy to tylko nieliczne z atrakcji naszego świata,
                który tylko czeka na odkrycie!
              </MainSiteSectionParagraph>
            </div>
          </StyledArticle>
          <div className="description-image-wrapper">
            <Image src={solarSystemImage} alt="Układ planetarny z dłońmi wskazujacymi na jego środek" fill sizes="(max-width: 1550px) 620px, 800px" />
          </div>
        </div>
      </div>
    </StyledSection>
  );
};
