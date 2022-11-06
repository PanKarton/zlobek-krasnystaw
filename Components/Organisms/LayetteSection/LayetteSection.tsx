import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import { StyledOrderedList, StyledWrapper } from './LayetteSection.styles';
import { useLayette } from './useLayette';

export const LayetteSection = () => {
  const layette = useLayette();

  return (
    <SectionWithStars>
      <StyledWrapper>
        <StyledOrderedList>
          {layette.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </StyledOrderedList>
      </StyledWrapper>
    </SectionWithStars>
  );
};
