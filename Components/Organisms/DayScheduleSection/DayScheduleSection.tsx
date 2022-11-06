import { StarsBackground } from 'Components/Atoms/StarsBackground/StarsBackground';
import { SectionWithStars } from 'Components/Molecules/SectionWithStars/SectionWithStars';
import Image from 'next/image';
import { StyledWrapper } from './DayScheduleSection.styles';
import { useDaySchedule } from './useDaySchedule';

export const DayScheduleSection = () => {
  const dayScheduleArray = useDaySchedule();

  return (
    <SectionWithStars>
      <StyledWrapper>
        <div className="flex-wrapper">
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
      </StyledWrapper>
    </SectionWithStars>
  );
};
