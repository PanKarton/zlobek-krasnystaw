import { DayScheduleSection } from 'modules/plan-dnia/DayScheduleSection/DayScheduleSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_CONTACT_INFO, GET_DAY_SCHEDULE } from 'graphql/queries';
import { DayScheduleResponse } from 'types/daySchedule';
import { getEnvVariable } from 'helpers/getEnvVariable';
import { ContactInfo } from 'types/contactData';
import { ContactDataProvider } from 'providers/ContactDataProvider';

export type Props = {
  daySchedule: DayScheduleResponse;
  contactInfo: ContactInfo;
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

  const dayScheduleRes = await client.query({
    query: GET_DAY_SCHEDULE,
  });

  const daySchedule = dayScheduleRes.data.daySchedule;

  const ContactInfo = await client.query({
    query: GET_CONTACT_INFO,
  });

  const contactInfo = ContactInfo.data.contactInfo.data.attributes;

  return {
    props: {
      daySchedule,
      contactInfo,
    },
  };
};
