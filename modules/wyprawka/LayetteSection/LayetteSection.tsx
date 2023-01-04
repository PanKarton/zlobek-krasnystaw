import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { LayetteElement } from 'types/layetteResponse';
import { StyledOrderedList, StyledWrapper } from './LayetteSection.styles';

type Props = {
  layette: LayetteElement[];
};

export const LayetteSection = ({ layette }: Props) => {
  return (
    <SectionWithStars>
      <StyledWrapper>
        <StyledOrderedList>
          {layette &&
            layette.map(({ id, nazwa }) => (
              <li key={id}>
                <p>{nazwa}</p>
              </li>
            ))}
        </StyledOrderedList>
      </StyledWrapper>
    </SectionWithStars>
  );
};
