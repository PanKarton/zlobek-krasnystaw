import { StarsBackground } from 'Components/Atoms/StarsBackground/StarsBackground';
import Image from 'next/image';
import { StyledSection } from './DayScheduleSection.styles';
import { useDaySchedule } from './useDaySchedule';

export const DayScheduleSection = () => {
  const dayScheduleArray = useDaySchedule();

  return (
    <StyledSection>
      <StarsBackground />
      <div className="flex-wrapper max-width-1440">
        <ul>
          {dayScheduleArray.map((activity, index) => (
            <li key={index}>
              <p>
                <span className="hour-span">{activity.hours}</span> - <span>{activity.name}</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="img-wrapper">
          <Image src="/images/day-schedule-vector.svg" alt="opiekunka i jedzące dzieci" layout="fill" />
        </div>
      </div>
    </StyledSection>
  );
};
