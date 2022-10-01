import ImageTile from 'Components/Atoms/ImageTile/ImageTile';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import { StyledSection } from './TilesSection.styles';

const TilesSection = props => {
  const theme = useTheme();

  return (
    <StyledSection>
      <div className="max-width">
        <div className="flex-wrapper">
          <h3>
            Poznajmy się <span className="pink-text">bliżej!</span>
          </h3>
          <div className="tiles-wrapper">
            <div className="tile-wrapper">
              <ImageTile
                src="/images/tile-kid1.jpg"
                alt="Chłopiec na podłodze bawiący się klockami"
                text="Wartość 1"
                transparentColor={theme.color.transparentPink}
                borderColor={theme.color.pinkBorder}
              />
            </div>
            <div className="tile-wrapper">
              <ImageTile
                src="/images/tile-kid2.jpg"
                alt="Dziewczynka trzymająca zabawke"
                text="Wartość 2"
                transparentColor={theme.color.transparentPurple}
                borderColor={theme.color.purpleBorder}
              />
            </div>
            <div className="tile-wrapper">
              <ImageTile
                src="/images/tile-kid3.jpg"
                alt="Uśmiechnięty chłopiec"
                text="Wartość 3"
                transparentColor={theme.color.transparentOrange}
                borderColor={theme.color.orangeBorder}
              />
            </div>
            <div className="tile-wrapper">
              <ImageTile
                src="/images/tile-kid4.jpg"
                alt="Dziewczynka z pomalowanymi farbą dłońmi"
                text="Wartość 4"
                transparentColor={theme.color.transparentBlue}
                borderColor={theme.color.blueBorder}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-waves-wrapper">
        <Image src="/images/blue-wave.svg" alt="Niebieska fala dekoracyjna" layout="fill" />
      </div>
    </StyledSection>
  );
};
export default TilesSection;
