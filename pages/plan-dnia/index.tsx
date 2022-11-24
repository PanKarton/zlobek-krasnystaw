import { DayScheduleSection } from 'modules/plan-dnia/DayScheduleSection/DayScheduleSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_DAY_SCHEDULE } from 'graphql/queries';
import { Props } from 'types/daySchedule';

const Schedule = ({ daySchedule }: Props) => {
  console.log(daySchedule);

  return (
    <SecondaryTemplate heading="Nasz plan dnia">
      <DayScheduleSection daySchedule={daySchedule} />
    </SecondaryTemplate>
  );
};

export default Schedule;

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  const {
    data: { daySchedule },
  } = await client.query({
    query: GET_DAY_SCHEDULE,
  });

  return {
    props: {
      daySchedule,
    },
  };
};
