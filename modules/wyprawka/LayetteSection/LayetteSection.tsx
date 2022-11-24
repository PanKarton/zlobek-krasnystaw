import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { Props } from 'types/layette';
import { StyledOrderedList, StyledWrapper } from './LayetteSection.styles';

export const LayetteSection = ({ layette }: Props) => {
  const {
    data: { attributes },
  } = layette;
  return (
    <SectionWithStars>
      <StyledWrapper>
        <StyledOrderedList>
          {layette &&
            attributes.layette.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
        </StyledOrderedList>
      </StyledWrapper>
    </SectionWithStars>
  );
};
