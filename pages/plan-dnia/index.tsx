import { DayScheduleSection } from 'modules/plan-dnia/DayScheduleSection/DayScheduleSection';
import { SecondaryTemplate } from 'Components/Templates/SecondaryTemplate/SecondaryTemplate';
import { GET_CONTACT_INFO, GET_DAY_SCHEDULE } from 'graphql/queries';
import { DayScheduleDataAttributes, DayScheduleElement, DayScheduleResponse } from 'types/dayScheduleResponse';
import { ContactInfoDataAttributes, ContactInfoResponse } from 'types/contactDataResponse';
import { ContactDataProvider } from 'providers/ContactDataProvider';
import { client } from '../../graphql/apolloClient';
import { GetStaticProps } from 'next';

export type Props = {
  daySchedule: DayScheduleElement[];
  contactInfo: ContactInfoDataAttributes;
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

export const getStaticProps: GetStaticProps = async () => {
  const dayScheduleRes = await client.query<DayScheduleResponse>({
    query: GET_DAY_SCHEDULE,
  });

  const daySchedule = dayScheduleRes.data.daySchedule.data.attributes.daySchedule;

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
