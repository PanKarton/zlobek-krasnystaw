import MainSectionHeading from 'Components/Atoms/MainSectionHeading/MainSectionHeading';
import MainSectionParagraph from 'Components/Atoms/MainSectionParagraph/MainSectionParagraph';
import Image from 'next/image';
import { StyledArticle, StyledSection } from './NurseryDescription.styles';

const NurseryDescription = () => {
  const descriptionOne = `Zabawę z Waszymi pociechami zaczęliśmy już 1978 roku, co pozwoliło nam zdobyć doświadczenie, dzięki któremu dziś możemy zadbać prawidłowy rozwój i bezpieczeństwo najmłodszych.`;
  const descriptionTwo = `Mnóstwo zieleni, indywidualny dla każdej grupy kompleks w postaci bogato i odpowiednio do wieku wyposażonej sali zabaw, sypialni, jadalni oraz łazienki; prywatny plac zabaw
  oraz ogrodzony taras dla najmłodszej grupy to tylko nieliczne z atrakcji naszego świata, który tylko czeka na odkrycie!`;

  return (
    <StyledSection>
      <div className="max-width-1440">
        <div className="flex-wrapper">
          <StyledArticle>
            <div className="flex-wrapper">
              <MainSectionHeading>O nas słów kilka</MainSectionHeading>
              <MainSectionParagraph>{descriptionOne}</MainSectionParagraph>
              <MainSectionParagraph>{descriptionTwo}</MainSectionParagraph>
            </div>
          </StyledArticle>
          <div className="description-image-wrapper">
            <Image src="/images/description-solar-system.svg" alt="Układ planetarny z dłońmi wskazujacymi na jego środek" layout="fill" />
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default NurseryDescription;
