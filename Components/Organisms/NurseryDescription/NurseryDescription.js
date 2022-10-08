import Image from 'next/image';
import { StyledArticle, StyledSection } from './NurseryDescription.styles';

const NurseryDescription = props => {
  const descriptionOne = `Zabawę z Waszymi pociechami zaczęliśmy już 1978 roku, co pozwoliło nam zdobyć doświadczenie, dzięki któremu dziś możemy zadbać prawidłowy rozwój i bezpieczeństwo najmłodszych.`;
  const descriptionTwo = `Mnóstwo zieleni, indywidualny dla każdej grupy kompleks w postaci bogato i odpowiednio do wieku wyposażonej sali zabaw, sypialni, jadalni oraz łazienki; prywatny plac zabaw
  oraz ogrodzony taras dla najmłodszej grupy to tylko nieliczne z atrakcji naszego świata, który tylko czeka na odkrycie!`;

  return (
    <StyledSection>
      <div className="max-width">
        <div className="flex-wrapper">
          <StyledArticle>
            <div className="flex-wrapper">
              <h3>O nas słów kilka</h3>
              <p>{descriptionOne}</p>
              <p>{descriptionTwo}</p>
            </div>
          </StyledArticle>
          <div className="description-image-wrapper">
            <Image
              src="/images/description-solar-system.svg"
              alt="Układ planetarny z dłońmi wskazujacymi na jego środek"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default NurseryDescription;
