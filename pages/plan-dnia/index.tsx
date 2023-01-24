import { DayScheduleSection } from 'modules/plan-dnia/DayScheduleSection/DayScheduleSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_DAY_SCHEDULE } from 'graphql/queries';
import { DayScheduleElement, DayScheduleResponse } from 'types/dayScheduleResponse';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';
import { NextPage } from 'next';
import Head from 'next/head';

type PageProps = {
  daySchedule: DayScheduleElement[];
  contactInfo: ContactInfoDataAttributes;
};

const Schedule: NextPage<PageProps> = ({ daySchedule, contactInfo }) => {
  return (
    <>
      <Head>
        <title>Żłobek Miejski w Krasnystawie - plan dnia</title>
      </Head>
      <ContactDataProvider contactData={contactInfo}>
        <SecondaryTemplate heading="Nasz plan dnia">
          <DayScheduleSection daySchedule={daySchedule} />
        </SecondaryTemplate>
      </ContactDataProvider>
    </>
  );
};

export default Schedule;

export const getStaticProps = async () => {
  const dayScheduleRes = await client.query<DayScheduleResponse>({
    query: GET_DAY_SCHEDULE,
  });

  const daySchedule = dayScheduleRes.data.daySchedule.data.attributes.planDnia;

  const ContactInfo = await client.query<ContactInfoResponse>({
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
