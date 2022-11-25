import { DayScheduleSection } from 'modules/plan-dnia/DayScheduleSection/DayScheduleSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_CONTACT_INFO, GET_DAY_SCHEDULE } from 'graphql/queries';
import { DayScheduleResponse } from 'types/daySchedule';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { ContactDataResponse } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';

export type Props = {
  daySchedule: DayScheduleResponse;
  contactInfo: ContactDataResponse;
};

const Schedule = ({ daySchedule, contactInfo }: Props) => {
  return (
    <ContactDataProvider contactData={contactInfo}>
      <SecondaryTemplate heading="Nasz plan dnia">
        <DayScheduleSection daySchedule={daySchedule} />
      </SecondaryTemplate>
    </ContactDataProvider>
  );
};

export default Schedule;

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL),
    cache: new InMemoryCache(),
  });

  const {
    data: { daySchedule },
  } = await client.query({
    query: GET_DAY_SCHEDULE,
  });

  const { data: contactInfo } = await client.query({
    query: GET_CONTACT_INFO,
  });

  return {
    props: {
      daySchedule,
      contactInfo,
    },
  };
};
