import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import Image from 'next/image';
import { DayScheduleElement } from 'types/dayScheduleResponse';
import { StyledWrapper } from './DayScheduleSection.styles';
import dayScheduleImage from 'public/images/day-schedule-vector.png';

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
                    <span className="hour-span">{hours}</span>
                    <span className="divider">-</span>
                    <span className="task-name">{name}</span>
                  </p>
                </li>
              ))}
          </ul>
          <div className="img-wrapper">
            <Image src={dayScheduleImage} alt="opiekunka i jedzące dzieci" fill sizes="(max-width: 900px) 160px, (max-width: 1550px) 200px, 320px" />
          </div>
        </div>
      </StyledWrapper>
    </SectionWithStars>
  );
};
