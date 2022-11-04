import { DayScheduleSection } from 'Components/Organisms/DayScheduleSection/DayScheduleSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';

const Schedule = () => {
  return (
    <SecondaryTemplate heading="Nasz plan dnia">
      <DayScheduleSection />
    </SecondaryTemplate>
  );
};

export default Schedule;
