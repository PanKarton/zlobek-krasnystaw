import ImageTile from 'Components/Atoms/ImageTile/ImageTile';
import TileTransparentLayer from 'Components/Atoms/TileTransparentLayer/TileTransparentLayer';
import Image from 'next/image';
import styled, { useTheme } from 'styled-components';

const StyledSection = styled.section`
  height: 850px;
  background-color: ${({ theme }) => theme.color.tilesSectionBackground};
  padding-block: 4rem;
  padding-inline: 1rem;
  .max-width {
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;

    h3 {
      font-size: 2rem;
      color: ${({ theme }) => theme.color.gray700};
      font-family: var(--font-primary);
      font-weight: 600;
      .pink-text {
        color: ${({ theme }) => theme.color.pink};
      }
    }
    .flex-wrapper {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      .tile {
      }
    }
  }
`;

const TilesSection = props => {
  const theme = useTheme();
  console.log(theme);

  return (
    <StyledSection>
      <div className="max-width">
        <h3>
          Poznajmy się <span className="pink-text">bliżej!</span>
        </h3>
        <div className="flex-wrapper">
          <ImageTile
            src="/images/tile-kid1.jpg"
            alt="Chłopiec na podłodze bawiący się klockami"
            text="Wartość 1"
            transparentColor={theme.color.transparentPink}
            borderColor={theme.color.pinkBorder}
          />
          <ImageTile
            src="/images/tile-kid2.jpg"
            alt="Dziewczynka trzymająca zabawke"
            text="Wartość 2"
            transparentColor={theme.color.transparentPurple}
            borderColor={theme.color.purpleBorder}
          />
          <ImageTile
            src="/images/tile-kid3.jpg"
            alt="Uśmiechnięty chłopiec"
            text="Wartość 3"
            transparentColor={theme.color.transparentOrange}
            borderColor={theme.color.orangeBorder}
          />
          <ImageTile
            src="/images/tile-kid4.jpg"
            alt="Dziewczynka z pomalowanymi farbą dłońmi"
            text="Wartość 4"
            transparentColor={theme.color.transparentBlue}
            borderColor={theme.color.blueBorder}
          />
        </div>
      </div>
    </StyledSection>
  );
};
export default TilesSection;
