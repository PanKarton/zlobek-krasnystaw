import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import Image from 'next/image';
import { Props } from 'types/daySchedule';
import { StyledWrapper } from './DayScheduleSection.styles';

export const DayScheduleSection = ({ daySchedule }: Props) => {
  console.log(daySchedule.data.attributes);
  const {
    data: { attributes },
  } = daySchedule;

  return (
    <SectionWithStars>
      <StyledWrapper>
        <div className="flex-wrapper">
          <ul>
            {daySchedule &&
              attributes.daySchedule.map(({ hours, name, id }) => (
                <li key={id}>
                  <p>
                    <span className="hour-span">{hours}</span> - <span>{name}</span>
                  </p>
                </li>
              ))}
          </ul>
          <div className="img-wrapper">
            <Image src="/images/day-schedule-vector.svg" alt="opiekunka i jedzące dzieci" layout="fill" />
          </div>
        </div>
      </StyledWrapper>
    </SectionWithStars>
  );
};
