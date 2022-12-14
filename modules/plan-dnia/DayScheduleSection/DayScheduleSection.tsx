import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import Image from 'next/image';
import { DayScheduleElement } from 'types/dayScheduleResponse';
import { StyledWrapper } from './DayScheduleSection.styles';

type Props = {
  daySchedule: DayScheduleElement[];
};

export const DayScheduleSection = ({ daySchedule }: Props) => {
  return (
    <SectionWithStars>
      <StyledWrapper>
        <div className="flex-wrapper">
          <ul>
            {daySchedule &&
              daySchedule.map(({ godziny: hours, nazwa: name, id }) => (
                <li key={id}>
                  <p>
                    <span className="hour-span">{hours}</span> - <span>{name}</span>
                  </p>
                </li>
              ))}
          </ul>
          <div className="img-wrapper">
            <Image
              src="/images/day-schedule-vector.svg"
              alt="opiekunka i jedzące dzieci"
              fill
              sizes="(max-width: 900px) 160px, (max-width: 1550px) 200px, 320px"
            />
          </div>
        </div>
      </StyledWrapper>
    </SectionWithStars>
  );
};
